import json

# with open(".\jsonfile\ymylist-ast.json", encoding='utf-8') as f:
#     json_file = json.load(f)
# # # todo 从xml文件中解析
# tap_function = ['open2', 'bookClick', 'close2']
# #
# l = []
# for func_decl in json_file['body']:
#     if func_decl['type'] == 'FunctionDeclaration' and func_decl['id']['name'] in tap_function:
#         l.append(func_decl)
# #print(l[0])
#
# dic = {"a": {"b": {"c": "d"}}, "z": {"x": {"w": "e"}, "y": {"h": "l"}}, "m": "n"}

#
# def dfs(json_obj):
#     print(json_obj)
#     if type(json_obj) == dict:
#         for k, v in json_obj.items():
#             dfs(v)


# dfs(l[0])


# for k,v in dic.items():
#     print(k,v)
def walk(tree):
    """
    Walk through the ast tree and return all nodes
    :param ast tree:
    :rtype: list[ast]
    """
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

# ans = walk(l[0])
#
# s = "ymylist"
# for a in ans:
#     if a['type'] == 'CallExpression' and a['callee']['type'] == 'MemberExpression':
#         callee = a['callee']
#         # todo 改成建模的函数们
#         if callee['property']['name'] == 'navigateTo':
#             s += " -> navigateTo -> "
#             arguments = a['arguments']
#             for arg in arguments:
#                 properties = arg['properties']
#                 for prop in properties:
#                     if prop['key']['type'] == "Identifier" and prop['key']['name'] == "url":
#                         if prop['value']['type'] == "BinaryExpression":
#                             tmp = prop['value']
#                             while tmp['left']['type'] == "BinaryExpression":
#                                 tmp = tmp['left']
#                             s += tmp['left']['value'].split("?")[0]
#                             print(s)

import re
# line = "index?q="
# # res = re.search(r'(.*)(\\?q=)?',line)
# # if res:
# #     print(res.group())
# # else:
# #     print("error")
# print(line.split("?")[0])

s1 = "$abc"
s2 = "abc"
print(s1.__contains__(s2))