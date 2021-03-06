import json
import re
import os
import collections

JUMP_FUNCTIONS = {
    'switchTab', 'reLaunch', 'redirectTo', 'navigateTo', 'navigateBack',  # 路由
    'openEmbeddedMiniProgram', 'navigateToMiniProgram', 'navigateBackMiniProgram', 'exitMiniProgram',  # 跳转
    'updateShareMenu', 'showShareMenu', 'showShareImageMenu', 'shareVideoMessage', 'shareFileMessage',  # 转发
    'onCopyUrl', 'offCopyUrl', 'hideShareMenu', 'getShareInfo', 'authPrivateMessage'
}
BASE_PATH = "./tracked-app/"


def get_from_wxml(path):
    # todo 从wxml中提取绑定的tap函数
    return


# 从提取到的AST json文件中提取wxml中的绑定函数
def get_tap_function(json_file):
    l = []
    for func_decl in json_file['body']:
        # 实际
        # if func_decl['type'] == 'FunctionDeclaration' and func_decl['id']['name'] in tap_function_list:
        # 测试
        if func_decl['type'] == 'FunctionDeclaration':
            l.append(func_decl)
    return l


# 深度优先遍历，从提取到的函数的AST中获取所有的节点
def walk(tree):
    ret = []
    if type(tree) == list:
        for el in tree:
            if el.get('type'):
                ret.append(el)
                ret += walk(el)
    elif type(tree) == dict:
        for k, v in tree.items():
            if type(v) == dict and v.get('type'):
                ret.append(v)
                ret += walk(v)
            if type(v) == list:
                ret += walk(v)
    return ret


def analysis(nodes_in_func, func_name, ast_path):
    literal_nodes = []
    for node in nodes_in_func:
        if node['type'] == 'Literal':
            nodes_in_func.remove(node)
            literal_nodes.append(node)
    res = []
    for node in nodes_in_func:
        if node['type'] == 'CallExpression' and node['callee']['type'] == 'MemberExpression':
            # callee = node['callee']
            #    精细化处理丢解 例如：e.$redirect
            # if callee['property'].keys().__contains__('name') and callee['property']['name'] in JUMP_FUNCTIONS:
            # if callee['property']['name'] == 'navigateTo':
            # 找可能跳转到的地方，我发现，大部分的跳转链接虽然可能有字符串拼接的情况，但是其base url基本都是文本类型的。
            for literal_node in literal_nodes:
                line = literal_node['value']
                if type(line) == str:
                    # 需要优化，不一定必须是/xx/xx/xx的格式。
                    # match = re.search(r'/(.*)/(.*)/(.*)(\\?q=)?', line)
                    # match = re.search(r'/(.*)(\\?q=)?', line)
                    # 为了适应相对路径的页面增加了一个策略 ../question/question
                    if line.startswith("../") or line.startswith("./"):
                        line = reconstruct_str(line,ast_path)

                    match = re.search(r'/(.*)(\\?(.*)=)?', line)
                    if match:
                        # 跳转函数的方式
                        # res.append((match.group().split("?")[0], callee['property']['name']))
                        # 函数名的方式
                        res.append((match.group().split("?")[0], func_name))
    return res


def process(app_name, page_name, page_component_map):
    # 一个页面肯定对应着该页面自己的AST
    ast_paths = [BASE_PATH + app_name + "/" + page_name + "-ast.json"]
    # 如果这个页面使用了组件，那么这个页面肯定对应着组件的AST
    if page_name in page_component_map:
        for component in page_component_map[page_name]:
            ast_paths.append(component + "-ast.json")
    # print(ast_paths)
    analysis_result = {page_name: set()}
    for ast_path in ast_paths:
        if os.path.exists(ast_path) and os.path.isfile(ast_path):
            # print(ast_path + " 是有效的路径")
            with open(ast_path, encoding='utf-8') as f:
                json_file = json.load(f)
            # print(json_file)
            base_dir = os.path.dirname(ast_path)
            funcs = get_tap_function(json_file)
            for func in funcs:
                func_name = func['id']['name']
                ast_nodes = walk(func)
                result = analysis(ast_nodes, func_name, os.path.dirname(base_dir))
                for res in result:
                    analysis_result[page_name].add(res)
    # print(analysis_result)
    return analysis_result


def reconstruct_str(un_full_name, parent_dir_path):
    name = collections.deque()
    while un_full_name.startswith("../") or un_full_name.startswith("./"):
        if un_full_name.startswith("./"):
            un_full_name = un_full_name.replace("./", "", 1)
        elif un_full_name.startswith("../"):
            un_full_name = un_full_name.replace("../", "", 1)
            name.appendleft(os.path.basename(parent_dir_path) + "/")
            parent_dir_path = os.path.dirname(parent_dir_path)
    name_str = "".join(name)
    un_full_name = name_str + un_full_name
    return "/" + un_full_name

# str = reconstruct_str("../../question/question","tracked-app/weapp-wechat-zhihu/pages")
# print(str)
# str = name_str + str
# return "/" + str
# s = "../../question/question"
# dir_path = "tracked-app/weapp-wechat-zhihu/pages"
# print(os.path.dirname(dir_path))
# print(os.path.basename(dir_path))
# paths_arr = dir_path.split("/")
# print(paths_arr)
# name = collections.deque()
# while s.startswith("../") or s.startswith("./"):
#     if s.startswith("./"):
#         s = s.replace("./", "", 1)
#         print(s)
#     elif s.startswith("../"):
#         s = s.replace("../", "", 1)
#         name.appendleft(os.path.basename(dir_path) + "/")
#         dir_path = os.path.dirname(dir_path)
# name_str = "".join(name)
# s = name_str + s
# print(s)
# tap_function_list = ['gotoRank', 'gotoExercise', 'gotoExam', 'gotoRank', 'goCompetitionOne', 'goCompetitionTwo']
# tap_function_list = ["cardClick"]
# tap_function_list = ['open2', 'bookClick', 'close2', 'loadGroup', 'confirmSuccess']
# print(analysis_result)
# 有一种问题出现了，那就是在wxml中没有进行跳转函数的绑定，但是在小程序的生命周期函数中，
# 出现了根据某些初始化条件来判断进行跳转的情况
# 见ymy list.js
# line = "/pages/msg/msg"
# match = re.search(r'/(.*)(\\?(.*)=)?', line)
# if match:
#     print(match.group().split("?")[0])
# else:
#     print("None Match")
# line = "},"
# line = line.replace("},","\n}")
# print(line)
