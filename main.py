import analysis
import file_preprocess
import paint


def main():
    app_name = "ymy"
    all_pages = file_preprocess.parse_app_json(app_name)
    file_preprocess.parse_js(app_name, all_pages)
    file_preprocess.generate_ast(app_name, all_pages)
    analysis_result = list()
    for page in all_pages:
        page_result = analysis.process(app_name, page)
        analysis_result.append(page_result)
    file_preprocess.delete_files(app_name, all_pages)
    paint.create_graph(app_name, all_pages, analysis_result)


if __name__ == '__main__':
    main()
    # s = {'pages/content/content', 'pages/rank/rank', 'pages/news/news', 'pages/worktype/worktype', 'pages/mine/mine',
    #  'pages/single/single', 'pages/update/update', 'pages/random/random', 'pages/error/error', 'pages/index/index',
    #  'pages/register/register', 'pages/questionlist/questionlist', 'pages/login/login'}
    # print('/pages/register/register' in s)
