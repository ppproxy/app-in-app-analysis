from graphviz import Digraph


def create_graph(app_name, page_list, analysis_results):
    dot = Digraph(comment='UI State Transfer Diagram')
    page_set = set()

    for page in page_list:
        page_set.add("/" + page)

    for page in page_set:
        dot.node(name=page, label=page)

    for analysis_result in analysis_results:
        page = list(analysis_result.keys())[0]
        if len(analysis_result[page]) > 0:
            for destination in analysis_result[page]:
                if destination[0] in page_set:
                    dot.edge(page, destination[0], destination[1])

    print(dot.source)
    # dot.view()
    dot.render("./graph/" + app_name + "-table.gv", view=True)

# dot = Digraph(comment='UI State Transfer Diagram')
# # 添加圆点A,A的标签是Dot A
# dot.node('A', 'Dot A')
# # 添加圆点 B, B的标签是Dot B
# dot.node('B', 'Dot B')
# # dot.view()
# # 添加圆点 C, C的标签是Dot C
# dot.node(name='C', label= 'Dot C',color='red')
# # dot.view()
#
# # 创建一堆边，即连接AB的两条边，连接AC的一条边。
# dot.edges(['AB', 'AC', 'BA'])
# # dot.view()
# # 在创建两圆点之间创建一条边
# dot.edge('B', 'C', 'test')
# # dot.view()
#
# # 获取DOT source源码的字符串形式
# print(dot.source)
# dot.view()
# dot.render('test-table.gv', view=True)
