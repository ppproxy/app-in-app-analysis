import analysis
import file_preprocess
import paint


def demo1():
    """
    有组件方式
    :return:
    """
    app_name = "master-jkb"
    page_list, tab_bar_list = file_preprocess.parse_app_json(app_name)

    file_preprocess.parse_js(app_name, page_list)
    components_set, page_components_map = file_preprocess.parse_component(app_name, page_list)

    file_preprocess.generate_js_ast(app_name, page_list)
    file_preprocess.generate_component_ast(components_set)

    analysis_result = list()
    for page in page_list:
        page_result = analysis.process(app_name, page, page_components_map)
        analysis_result.append(page_result)

    file_preprocess.delete_js_files(app_name, page_list)
    file_preprocess.delete_component_files(components_set)
    paint.create_graph(app_name, page_list, analysis_result, tab_bar_list)


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
