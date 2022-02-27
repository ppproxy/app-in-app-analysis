import analysis
import file_preprocess
import paint

'''
    1.主包中肯定包含JS文件
    2.分包中肯定不存在JS文件，或者JS文件为空。但是分包的JSON文件中有应用的组件信息，该组件的定义可能在主包中
    3.所以，对于JS文件的分析，只需分析主包的文件即可
    4.对于组件的分析，要包含主包和子包
    5.主包用到子包的情况：
        主包自身函数的调用，触发子包函数的调用
        主包中页面的组件触发对子包函数的调用
        主包中定义的组件就在子包中
    6.分析：
        页面关系，只需分析主包。
        组件，分析子包和主包
'''


def demo1():
    """
    有组件方式
    :return:
    """
    app_name = "hdr"
    # 拿到所有主包页面，tar_bar页面，子包和子包页面
    page_list, tab_bar_list, sub_page_list_root, sub_page_list_pages = file_preprocess.parse_app_json(app_name)
    print("******************sub_page******************")
    print(sub_page_list_pages)
    print("******************sub_page******************")
    # 解析js时，只需解析主包中的js
    file_preprocess.parse_js(app_name, page_list)
    # 解析组件时，需要解析主包和子包中的组件,解析结果：一个是所有的组件（无论主包还是子包）的集合，另一个是页面与该页面下的所有组件的对应关系
    components_set, page_components_map = file_preprocess.parse_component(app_name, page_list + sub_page_list_pages)
    # 将所有主包中的页面生成ast
    file_preprocess.generate_js_ast(app_name, page_list)
    # 将所有组件生成ast
    file_preprocess.generate_component_ast(components_set)

    analysis_result = list()
    # 分析主包中的所有ast
    for page in page_list:
        page_result = analysis.process(app_name, page, page_components_map)
        analysis_result.append(page_result)
    # 分析子包中的所有组件
    for page in sub_page_list_pages:
        page_result = analysis.process(app_name, page, page_components_map)
        analysis_result.append(page_result)

    file_preprocess.delete_js_files(app_name, page_list)
    file_preprocess.delete_component_files(components_set)
    paint.create_graph(app_name, page_list, analysis_result, tab_bar_list, sub_page_list_pages)


def demo2():
    """
    无组件方式
    :return:
    """
    app_name = "ng"
    all_pages, tab_bar_list = file_preprocess.parse_app_json(app_name)
    file_preprocess.parse_js(app_name, all_pages)
    file_preprocess.generate_js_ast(app_name, all_pages)
    analysis_result = list()
    for page in all_pages:
        page_result = analysis.process(app_name, page, dict())
        analysis_result.append(page_result)
    file_preprocess.delete_js_files(app_name, all_pages)
    paint.create_graph(app_name, all_pages, analysis_result, tab_bar_list)


def main():
    demo1()


if __name__ == '__main__':
    main()
