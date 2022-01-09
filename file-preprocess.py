import os
import json
import re

BASE_PATH = "./tracked-app/"


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
    parse_result = list()
    if json_file:
        pages = json_file['pages']
        for page in pages:
            parse_result.append(page)
        if json_file.get('subPackages') is not None:
            sub_packages = json_file['subPackages']
            for sub_package in sub_packages:
                root_dir = sub_package['root']
                for sub_page in sub_package['pages']:
                    parse_result.append(root_dir + sub_page)
    return parse_result


def parse_js(app_name, page_list):
    """
    通过正则表达式 + 括号匹配算法，将小程序js代码中定义的有效函数进行提取
    并格式化为能够生成AST的样式
    注：可能会提取出反编译后的无关函数，但是不会丢解
    :param app_name: 小程序的名称
    :param page_list: 小程序的所有页面列表
    :return:
    """
    page_one_js = BASE_PATH + app_name + "/" + page_list[0] + ".js"
    if not os.path.isfile(page_one_js):
        raise TypeError(page_one_js + "does not exist")
    with open(page_one_js, encoding="utf-8") as f:
        lines = f.readlines()
        it = iter(lines)
        while True:
            try:
                line = next(it)
                match = re.search(r'[a-zA-Z][a-zA-Z0-9_]*: function\(.*\)', line)
                if match:
                    s = []
                    clean_js_file = BASE_PATH + app_name + "/" + page_list[0] + "-clean" + ".js"
                    with open(clean_js_file, "a", encoding="utf-8") as f:
                        for c in line:
                            if c == '{':
                                s.append('{')
                            elif c == '}':
                                s.pop()
                        if len(s) <= 0:
                            line = line.replace(",", "").strip() + "\n"
                        func_info = line.split(":")
                        func_name = func_info[0]
                        param = func_info[1]
                        param_info = param.split("(")[1]
                        print("function " + func_name.strip() + "(" + param_info)
                        f.write("function " + func_name.strip() + "(" + param_info)
                        while len(s) > 0:
                            ne = next(it)
                            for c in ne:
                                if c == '{':
                                    s.append('{')
                                elif c == '}':
                                    s.pop()
                            if len(s) == 0:
                                ne = ne.replace(",", "").strip() + "\n"
                            f.write(ne)
                            print(ne)
            except StopIteration:
                break


page_list = parse_app_json("ymy")
parse_js("ymy", page_list)
# g = os.walk(r"G:\TrackedMiniProgram\qccdemo")
# for path, dir_list, file_list in g:
#     for file_name in file_list:
#         print(os.path.join(path, file_name))
# ([a-zA-z]\w+):\s+?function\s+\\(.*?\\)
# s = 'read: function() {'
# s = 'read_f:function()'
# s = '         0r_0ead: function(a,b) {'
# s = 'methods: {'
# # (\s+)?function(\s+)?\\(.*\\)
# match = re.findall(r'[a-zA-Z][a-zA-Z0-9_]*: function\(.*\)', s)
# print(match)
