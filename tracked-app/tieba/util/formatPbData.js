Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.parseData = parseData;

exports.parsePbData = parsePbData;

exports.filterMain = filterMain;

exports.formatTopAgreePost = formatTopAgreePost;

exports.formatPostList = formatPostList;

exports.insertAd = insertAd;

var _util = require("./util");

var _filters = require("./filters.js");

/**
 * @file pb数据处理
 * @author wz
 */ function parseData(data, options, recommendQuery, mainFloor) {
    // let isFetchMore = this.isFetchMore;
    data.video_play_count = (0, _filters.numFormat)(data.video_play_count);
    data.forum.member_num = (0, _filters.numFormat)(data.forum.member_num);
    data.forum.post_num = (0, _filters.numFormat)(data.forum.post_num);
    // 2019.5.31 增加广告透传字段打点，query 内容权重填充 @fe shishaokun @pm yancheng
    // this.adsTrackOnce && this.setQueryAndTrack(data);
    // 插入广告逻辑
        var adParams = insertAd(data, options);
    formatPostList(data);
    // 划分主楼
        if (!mainFloor) {
        mainFloor = filterMain(data.post_list, true);
    } else {
        if (data.post_list.length >= 1) {
            // 去除普通楼层中的主楼
            if (data.post_list[0].floor === 1) {
                data.post_list.shift();
            } else if (data.post_list[data.post_list.length - 1].floor === 1) {
                data.post_list.pop();
            }
        }
    }
    data.top_agree_posts = formatTopAgreePost(data.top_agree_posts);
    var originData = {};
    if (data.thread.agree.has_agree) {
        originData.isFlower = "active";
    }
    mainFloor.time = (0, _filters.postTime)(mainFloor.time);
    data.thread.agree.formatAgree = (0, _filters.numFormat)(data.thread.agree.agree_num);
    originData.mainFloor = mainFloor;
    originData.postList = data.post_list || [];
    originData.topAgreePostList = data.top_agree_post_list || [];
    originData.forum = data.forum;
    originData.forum.forumName = data.forum.name;
    originData.forum.query = recommendQuery;
    originData.adParams = adParams;
    originData.forum.shortquery = recommendQuery && recommendQuery.length > 4 ? recommendQuery.slice(0, 4) + "..." : recommendQuery;
    return originData;
}

function parsePbData(data, recommendQuery) {
    data.video_play_count = (0, _filters.numFormat)(data.video_play_count);
    data.forum.member_num = (0, _filters.numFormat)(data.forum.member_num);
    data.forum.post_num = (0, _filters.numFormat)(data.forum.post_num);
    var originData = {};
    data.thread.agree.agreeNum = (0, _filters.numFormat)(data.thread.agree.agree_num);
    data.thread.shareNum = (0, _filters.numFormat)(data.thread.share_num);
    data.thread.replyNum = (0, _filters.numFormat)(data.thread.reply_num);
    originData.forum = data.forum;
    originData.forum.forumName = data.forum.name;
    originData.forum.query = recommendQuery;
    originData.forum.shortquery = recommendQuery && recommendQuery.length > 4 ? recommendQuery.slice(0, 4) + "..." : recommendQuery;
    return originData;
}

/**
 * 划分主楼与普通楼层
 */ function filterMain(list) {
    var mainFloor = void 0;
    var firstItem = list[0];
    var lastItem = list[list.length - 1];
    if (firstItem.floor === 1) {
        mainFloor = firstItem;
        list.shift();
    }
    if (lastItem.floor === 1) {
        mainFloor = lastItem;
        list.pop();
    }
    if (mainFloor && mainFloor.is_flash === 1) {
        mainFloor.isVideo = true;
    }
    return mainFloor;
}

/**
 * 格式化top_agree_posts字段下数据
 * @param {*} data data
 */ function formatTopAgreePost(data) {
    data && data.forEach(function(item) {
        item.time = (0, _filters.postTime)(item.time);
        item.isGadPost = true;
        item.portrait = _util.GEN_PORTRAIT + item.portrait;
        item.contNodeArr = [];
        formatTypes(item);
    });
    return data;
}

/**
 * 分类处理帖子
 * @param {*} list
 */ function formatTypes(list) {
    var node = [];
    list.agree.formatAgree = (0, _filters.numFormat)(list.agree.agree_num);
    list.content && list.content.forEach(function(cont) {
        if (cont.type === 3 || cont.type === 20) {
            // 图片
            cont.WHInfo = imgWH(cont.bsize.split(",")[0], cont.bsize.split(",")[1]);
            if (cont.is_gif) {
                cont.isGif = true;
            }
            if (node.length > 0) {
                list.contNodeArr.push(node);
                // 断开引用
                                node = [];
            }
            list.contNodeArr.push(cont);
        } else if (cont.type === 10 || cont.type === 21) {
            if (node.length > 0) {
                list.contNodeArr.push(node);
                // 断开引用
                                node = [];
            }
            list.contNodeArr.push(cont);
        } else if (cont.type === 2) {
            if (cont.src) {
                node.push({
                    name: "img",
                    attrs: {
                        src: cont.src,
                        class: "emoji"
                    }
                });
            } else {
                node.push({
                    type: "text",
                    text: "[表情]"
                });
            }
        } else if (cont.type === 1) {
            if (node.length > 0) {
                list.contNodeArr.push(node);
                // 断开引用
                                node = [];
            }
            list.contNodeArr.push(cont);
        } else {
            var content = cont.text || "";
            content = content.replace(/<br\/>/gim, "\n");
            node.push({
                type: "text",
                text: content
            });
        }
    });
    if (node.length > 0) {
        list.contNodeArr.push(node);
        // 断开引用
                node = [];
    }
}

/**
 * 格式化post_list的数据
 */ function formatPostList(data) {
    (data.post_list || []).forEach(function(list, index) {
        if (list.isAd) {
            return;
        }
        list.time = (0, _filters.postTime)(list.time);
        // 0,1是文本或者链接,2是emoji,3是图片,4,5还是文本,10语音,21是小程序分享帖，其他都当文本处理
        // 那么就将2、3、10、21单独处理，其他的全部拼接到richtext，如果中间有2、3、10、21则分割多个richtext
        // 1是链接
                list.contNodeArr = [];
        list.portrait = _util.GEN_PORTRAIT + list.author.portrait;
        // 用户标志，调起用，去掉时间戳
                var portraitId = list.author && list.author.portrait || "";
        if (portraitId) {
            portraitId = portraitId.substring(0, portraitId.indexOf("?t=") > -1 ? portraitId.indexOf("?t=") : 999);
        }
        list.portraitId = portraitId;
        formatTypes(list);
        list.sub_post_list.forEach(function(sub) {
            var tempNode = [ {
                name: "span",
                attrs: {
                    class: "name",
                    style: ""
                },
                children: [ {
                    type: "text",
                    text: (sub.show_nickname || sub.name_show) + "："
                } ]
            } ];
            sub.node = [];
            sub.content && sub.content.forEach(function(cont) {
                if (cont.type === 10) {
                    if (tempNode.length > 0) {
                        sub.node.push(tempNode);
                        tempNode = [];
                    }
                    sub.node.push(cont);
                } else if (cont.type === 1) {
                    if (tempNode.length > 0) {
                        sub.node.push(tempNode);
                        tempNode = [];
                    }
                    sub.node.push(cont);
                } else if (cont.type === 0 || cont.type === 4) {
                    var content = cont.text || cont.link || "";
                    content = content.replace(/<br\/>/gim, "\n");
                    tempNode.push({
                        type: "text",
                        text: content
                    });
                } else if (cont.type === 2) {
                    tempNode.push({
                        name: "img",
                        attrs: {
                            src: cont.src,
                            class: "emoji"
                        }
                    });
                }
            });
            if (tempNode.length > 0) {
                sub.node.push(tempNode);
                tempNode = [];
            }
        });
    });
}

/**
 * 插入广告逻辑
 * @param {*} data data
 * @param {*} options 参数
 */ function insertAd(data) {
    var adFloor = data.ad_floor || [];
    var dataList = data.post_list || [];
    var _loop = function _loop(i) {
        adFloor.forEach(function(ad) {
            // 判断如果处理过，就不再进行处理，比如pb页在loadBannerData时bannerModifier中处理了
            if (data.post_list[i] && !data.post_list[i].isAd && ad - 1 === i) {
                data.post_list.splice(i, 0, {
                    isAd: true
                });
            }
        });
    };
    for (var i = 0; i <= dataList.length; i++) {
        _loop(i);
    }
}

function imgWH(w, h) {
    var imgGap = 81;
    var maxW = getApp().globalData.systemInfo.screenWidth - imgGap;
    var resultW = w;
    var resultH = h;
    if (w > maxW) {
        resultW = maxW;
        resultH = maxW * h / w;
    }
    return {
        w: resultW,
        h: resultH
    };
}