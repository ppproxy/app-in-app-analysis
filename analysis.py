import json
import re


def get_from_wxml(path):
    # todo 从wxml中提取绑定的tap函数
    return


# 从提取到的AST json文件中提取wxml中的绑定函数
def get_tap_function(tap_function_list, json_file):
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


def analysis(nodes, model_function):
    literal_nodes = []
    for node in nodes:
        if node['type'] == 'Literal':
            nodes.remove(node)
            literal_nodes.append(node)
    res = []
    for node in nodes:
        if node['type'] == 'CallExpression' and node['callee']['type'] == 'MemberExpression':
            callee = node['callee']
            # todo 改成从微信官网建模的函数们
            # if callee['property']['name'] in model_function:
            if callee['property']['name'] == 'navigateTo':
                # 找可能跳转到的地方，我发现，大部分的跳转链接虽然可能有字符串拼接的情况，但是其base url基本都是文本类型的。
                for literal_node in literal_nodes:
                    line = literal_node['value']
                    if type(line) == str:
                        # 需要优化，不一定必须是/xx/xx/xx的格式。
                        # match = re.search(r'/(.*)/(.*)/(.*)(\\?q=)?', line)
                        match = re.search(r'/(.*)(\\?q=)?', line)
                        if match:
                            res.append(match.group().split("?")[0])
    return res


with open(".\jsonfile\ymylist-ast.json", encoding='utf-8') as f:
    json_file = json.load(f)

# tap_function_list = ['gotoRank', 'gotoExercise', 'gotoExam', 'gotoRank', 'goCompetitionOne', 'goCompetitionTwo']
# tap_function_list = ["cardClick"]
tap_function_list = ['open2', 'bookClick', 'close2', 'loadGroup', 'confirmSuccess']
funcs = get_tap_function(tap_function_list, json_file)
analysis_result = {"/pages/content/content": set()}

for func in funcs:
    ast_nodes = walk(func)
    result = analysis(ast_nodes, analysis_result)
    for res in result:
        analysis_result["/pages/content/content"].add(res)

print(analysis_result)

# 有一种问题出现了，那就是在wxml中没有进行跳转函数的绑定，但是在小程序的生命周期函数中，
# 出现了根据某些初始化条件来判断进行跳转的情况
# 见ymy list.js
