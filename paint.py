from graphviz import Digraph

LIFE_CYCLE = {"onLoad", "onReady", "onShow", "onHide", "onUnload"
    , "onPullDownRefresh", "onReachBottom", "onShareAppMessage",
              "onPageScroll", "onTabItemTap"}


# todo:修改该函数，同时解决以下bug
# 	"/pages/zccomfirmorder/index" -> "/pages/orderfood/index" [label=handleOk]
# 	"/pages/zccomfirmorder/index" -> "/pages/orderfood/index" [label=handleCloseSpecs]
# 已经创建了边，但是如果label不同，又创建一次
def create_graph(app_name, page_list, analysis_results, tab_bar_list, sub_page_list_pages):
    dot = Digraph(comment='UI State Transfer Diagram')
    page_set = set()

    # 先把主包中的页面放入集合
    for s_page in page_list:
        page_set.add("/" + s_page)
    start_page = "/" + page_list[0]
    # 从集合中遍历主包中的所有节点，然后创建节点对应的node
    for page_s in page_set:
        if page_s == start_page:
            dot.node(name=page_s, label=page_s, shape="rectangle", color="blue")
        else:
            dot.node(name=page_s, label=page_s)
    # 先创建好所有子包中的节点,然后把子包中的页面放入集合
    for sub_page in sub_page_list_pages:
        sub_page = "/" + sub_page
        dot.node(name=sub_page, label=sub_page, color="purple")
        page_set.add(sub_page)

    for tab_bar in tab_bar_list:
        for tb in tab_bar_list:
            if tb != tab_bar:
                dot.edge("/" + tab_bar, "/" + tb, "switch", color="green")
    print(analysis_results)
    for analysis_result in analysis_results:
        page = list(analysis_result.keys())[0]
        if len(analysis_result[page]) > 0:
            for destination in analysis_result[page]:
                # 这样在集合中重新遍历寻找的原因是：保证解准确
                for p in page_set:
                    if p.__contains__(destination[0]):
                        # dot.edge(page, p,  destination[1])
                        func_name = destination[1]
                        if func_name in LIFE_CYCLE:
                            dot.edge("/" + page, p, destination[1], color="red")
                        else:
                            dot.edge("/" + page, p, destination[1])

    print(dot.source)
    # dot.view()
    dot.render("./graph/" + app_name + "-table.gv", view=True)

# dot = Digraph(comment='UI State Transfer Diagram')
#
# list = ['A','B','C','D','E']
#
# for alpha in list:
#     dot.node(alpha,'Dot ' + alpha)
#
# dot.edge('A','B','A-B')
# dot.edge('B','C','B-C')
# dot.edge('D','C','D-C')
# dot.edge('E','C','E-C')

# # 添加圆点A,A的标签是Dot A
# dot.node('A', 'Dot A')
# # 添加圆点 B, B的标签是Dot B
# dot.node('B', 'Dot B')
# dot.node('D','Dot D')
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

# dot.view()

# 获取DOT source源码的字符串形式
# print(dot.source)
# dot.view()
