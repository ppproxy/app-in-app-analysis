import os
import re
BASE_PATH = "./tracked-app/"


def tag_wxml(app_name, page_list):
    for page in page_list:
        page_path = BASE_PATH + app_name + "/" + page + ".wxml"
        if not os.path.isfile(page_path):
            raise TypeError(page_path + "does not exist")
        with open(page_path,encoding="utf-8") as f:
            it = iter(f.readlines())
            stack = []
            s = ""
            while True:
                line = next(it)
                for c in line:
                    if c == '<':
                        stack.append(c)
                    elif c == '>':
                        stack.pop()



                if len(stack) == 0:
                    s = line
                # else:


# s = """        <view  bindtap="bindItemTap" class="feed-item">"""
# mat = re.match('.*?(bind(.*?))=.*?',s)
# if mat:
#     if "class" in s:
