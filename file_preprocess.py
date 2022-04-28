import os
import json
import re

BASE_PATH = "./tracked-app/"

KEY_WORDS = {"abstract", "arguments", "boolean", "break", "byte", "case", "catch", "char", "class*", "const"
                                                                                                     "continue",
             "debugger", "default", "delete", "do", "double", "else", "enum*", "eval", "export*",
             "extends*", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements",
             "import*", "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null",
             "package", "private", "protected", "public", "return", "short", "static", "super*", "switch",
             "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void",
             "volatile", "while", "with", "yield"
             }


def parse_app_json(app_name):
    """
    从小程序的配置文件app.json中获取该小程序的所有页面
    如果有子包，也从子包中获取所有的页面
    :param app_name: 小程序反编译后的目录的名称
    :return: 包含所有小程序页面的list
    """
    app_json = BASE_PATH + app_name + "/app.json"
    with open(app_json, encoding='utf-8') as f:
        json_file = json.load(f)
    page_list = list()
    tab_bar_list = list()
    sub_page_list_root = list()
    sub_page_list_pages = list()
    if json_file:
        pages = json_file['pages']
        for page in pages:
            page_list.append(page)
        if json_file.get('subPackages') is not None:
            sub_packages = json_file['subPackages']
            for sub_package in sub_packages:
                root_dir = sub_package['root']
                sub_page_list_root.append(root_dir)
                for sub_page in sub_package['pages']:
                    sub_page_list_pages.append(root_dir + sub_page)
                    # page_list.append(root_dir + sub_page)
        if 'tabBar' in json_file:
            tab_bars = json_file['tabBar']['list']
            if tab_bars:
                for tab_bar in tab_bars:
                    tab_bar_list.append(tab_bar['pagePath'])

    return page_list, tab_bar_list, sub_page_list_root, sub_page_list_pages
    # return page_list, tab_bar_list, sub_page_list_root


def parse_js(app_name, page_list):
    """
    通过正则表达式 + 括号匹配算法，将小程序js代码中定义的有效函数进行提取
    并格式化为能够生成AST的样式
    注：可能会提取出反编译后的无关函数，但是不会丢解
    :param app_name: 小程序的名称
    :param page_list: 小程序的所有页面列表
    :return:
    """
    for page in page_list:
        page_path = BASE_PATH + app_name + "/" + page + ".js"
        if not os.path.isfile(page_path):
            raise TypeError(page_path + "does not exist")
        else:
            clean_js(page_path)


# todo: 更改正则表达式，让正则表达式来使用不同场景的代码分析
def clean_js(file_path):
    with open(file_path, encoding="utf-8") as f:
        lines = f.readlines()
        it = iter(lines)
        while True:
            try:
                line = next(it)
                # match = re.search(r'[a-zA-Z][a-zA-Z0-9_]*:(\s*)function\(.*\)', line)
                if line.strip().startswith("//"):
                    continue
                # match = re.search(r'[a-zA-Z][a-zA-Z0-9_]*:(\s*)function(\s*)\(.*\)(\s*)', line)
                match = re.search(r'[a-zA-Z][a-zA-Z0-9_]*:(\s*)function(\s*)(.*?)\(.*\)(\s*)', line)
                if match:
                    s = []
                    s_split = file_path.rsplit(".", 1)
                    # clean_js_file = BASE_PATH + app_name + "/" + page + "-clean" + ".js"
                    clean_js_file = s_split[0] + "-clean." + s_split[1]
                    with open(clean_js_file, "a", encoding="utf-8") as c_f:
                        # 这一部分用来检测空函数 onLoad : function(){},
                        for c in line:
                            if c == '{':
                                s.append('{')
                            elif c == '}':
                                s.pop()
                        if len(s) <= 0 and "}," in line:
                            line = "\n" + line.replace("},", "}").strip() + "\n"
                        func_info = line.split(":")

                        func_name = func_info[0].strip()
                        # 增加方法名是不是JS关键字的检测
                        if func_name in KEY_WORDS:
                            func_name = "_" + func_name


                        param = func_info[1]
                        param_info = param.split("(")[1]
                        # print("function " + func_name.strip() + "(" + param_info)
                        c_f.write("function " + func_name + "(" + param_info)
                        # 从这里开始检测非空函数
                        while len(s) > 0:
                            ne = next(it)
                            for c in ne:
                                if c == '{':
                                    s.append('{')
                                elif c == '}':
                                    s.pop()
                            if len(s) == 0:
                                ne = "\n" + ne.replace("},", "}").strip() + "\n"
                            c_f.write(ne)
                            # print(ne)
            except StopIteration:
                break


def generate_js_ast(app_name, page_list):
    """
    通过清洗后的小程序js代码，生成AST
    :param app_name:
    :param page_list:
    :return:
    """
    global pipe
    for page in page_list:
        clean_page_js = BASE_PATH + app_name + "/" + page + "-clean.js"
        generate_ast(clean_page_js)


def generate_component_ast(component_set):
    for component in component_set:
        generate_ast(component + "-clean.js")


def generate_ast(file_path):
    """
    通过清洗后的小程序js代码，生成AST
    :param file_path: 文件路径参数
    :return:
    """
    global pipe
    command = 'node ./js/get-ast.js {0}'.format(file_path)
    try:
        pipe = os.popen(command)
        pipe.buffer.read().decode("utf-8")
        # print(result)
    except:
        raise RuntimeError(file_path + " ast parse error!")
    finally:
        pipe.close()


def delete_js_files(app_name, page_list):
    for page in page_list:
        f1 = BASE_PATH + app_name + "/" + page + "-clean.js"
        f2 = BASE_PATH + app_name + "/" + page + "-ast.json"
        if os.path.isfile(f1):
            os.remove(f1)
        if os.path.isfile(f2):
            os.remove(f2)


def delete_component_files(component_set):
    for component in component_set:
        f1 = component + "-clean.js"
        f2 = component + "-ast.json"
        if os.path.isfile(f1):
            os.remove(f1)
        if os.path.isfile(f2):
            os.remove(f2)


def parse_component(app_name, page_list):
    """
    解析json文件，然后获取所有组件的路径，同时返回组件与
    :param app_name:
    :param page_list:
    :return:
    """
    components_set = set()
    page_component_map = dict()

    for page in page_list:
        page_component_map[page] = []
        page_one_json = BASE_PATH + app_name + "/" + page + ".json"
        with open(page_one_json, encoding="utf-8") as f:
            json_file = json.load(f)
        # d = dict()
        # d.__contains__()
        if json_file and json_file.__contains__('usingComponents'):
            for _, component in json_file['usingComponents'].items():
                now_path = os.path.dirname(page_one_json)
                component_path = ""
                if component.startswith("/"):
                    component_path = BASE_PATH + app_name + component
                elif component.startswith("../"):
                    while component.startswith("../"):
                        now_path = os.path.dirname(now_path)
                        component = component.replace("../", "", 1)
                    component_path = now_path + "/" + component
                elif component.startswith("./"):
                    component = component.replace("./", "", 1)
                    component_path = now_path + "/" + component
                if component_path != "":
                    components_set.add(component_path)
                    page_component_map[page].append(component_path)
                else:
                    print(page_one_json + " 的组件信息解析失败")
                    print("失败的组件路径为:" + component)

    for component in components_set:
        component_file = component + ".js"
        if not os.path.isfile(component_file):
            print(component_file + " 组件js文件不存在")
        else:
            clean_js(component + ".js")

    return components_set, page_component_map


def tmp_delete(file_path):
    if os.path.isfile(file_path):
        os.remove(file_path)

