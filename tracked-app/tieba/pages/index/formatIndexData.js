Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.parseData = parseData;

var _filters = require("../../util/filters.js");

var _util = require("../../util/util");

/**
 * 解析数据
 * @param {Array} res 需要处理的数据
 * @param {String} type 动作类型
 */
/**
 * @file index数据处理
 * @author wz
 */ function parseData(res, type) {
    var result = {};
    var threads = [];
    var threadList = res.thread_list || [];
    var meta = res && res.meta;
    // 吧tag的颜色
        var colors = [ "#e6faf3", "#e6ebfa", "#f4e6fa", "#faf3e6" ];
    if (meta) {
        meta.title = "百度贴吧";
        meta.image = meta.image || _util.metaImage;
        result.meta = meta;
        wx.setPageInfo && wx.setPageInfo(meta);
    }
    threadList.forEach(function(item) {
        var thread = {
            tid: item.tid,
            fid: item.forum_id,
            title: item.title,
            formatAgree: (0, _filters.numFormat)(item.agree_num),
            agreeNum: item.agree_num,
            // hasAgree: item.has_agree,
            noTitle: !!item.is_ntitle,
            replyNum: (0, _filters.numFormat)(item.reply_num),
            shareNum: (0, _filters.numFormat)(item.share_num),
            pics: item.new_cover_img || [],
            picsNum: item.media && item.media.num,
            forumName: item.forum_name || "",
            abstract: item.abstract,
            imageUrl: item.swan_t_share_image || "",
            forumColor: colors[Math.round(Math.random() * 3)],
            author: {
                portraitId: item.author && item.author.portrait && item.author.portrait.substring(0, item.author.portrait.indexOf("?t=") > -1 ? item.author.portrait.indexOf("?t=") : 999),
                portrait: _util.GEN_PORTRAIT + item.author.portrait,
                uid: item.author.user_id || "",
                userName: item.author.show_nickname || item.author.user_nickname || ""
            },
            statisticParam: JSON.stringify({
                source: item.source,
                extra: item.extra,
                abtest_tag: res.abtest_tag,
                tid: item.tid,
                fid: item.forum_id,
                thread_type: item.media && item.media.type === "video" ? 2 : 1,
                // 1图文2视频
                uid: (0, _util.getGlobalData)("uid")
            }),
            swanInfo: item.swan_info
        };
        // 不管贴子类型，都使用new_cover_img作为图片的url；如果是视频贴则是视频封面，如果是图片贴封面图
                if (item.media && item.media.type === "video") {
            var videoInfo = item.media.video;
            thread.videoInfo = {
                duration: (0, _filters.playDuration)(videoInfo.video_duration),
                playCount: (0, _filters.numFormat)(+videoInfo.play_num || 0),
                height: +videoInfo.thumbnail_height || 0,
                width: +videoInfo.thumbnail_width || 0
            };
            thread.pics = thread.pics.slice(0, 1);
        } else if (thread.pics.length === 1) {
            // 单图图片大小处理
            var _getSinglePicWH = (0, _util.getSinglePicWH)(thread.pics[0].width, thread.pics[0].height), resultW = _getSinglePicWH.resultW, resultH = _getSinglePicWH.resultH;
            thread.pics[0].width = resultW;
            thread.pics[0].height = resultH;
        }
        // 神回复
                if (item.top_agree_post && item.top_agree_post.tid) {
            thread.goodReply = {
                userName: item.top_agree_post.show_nickname || item.top_agree_post.user_nickname || item.top_agree_post.username,
                userAvatar: item.top_agree_post.portrait,
                formatAgree: (0, _filters.numFormat)(item.top_agree_post.agree.agree_num),
                agreeNum: item.top_agree_post.agree.agree_num,
                has_agree: item.top_agree_post.agree.has_agree,
                content: "",
                pics: [],
                totalPicsNum: 0,
                pid: item.top_agree_post.pid
            };
            item.top_agree_post.content.forEach(function(word) {
                if (word.type === 0 || word.type === 1 || word.type === 4) {
                    thread.goodReply.content += word.text.replace(/<br\/>/g, "");
                } else if (word.type === 2) {
                    thread.goodReply.content += "[表情]";
                } else if (word.type === 3 || word.type === 20) {
                    thread.goodReply.pics.push(word);
                    thread.goodReply.totalPicsNum += 1;
                }
            });
            thread.goodReply.pics = thread.goodReply.pics.slice(0, 5);
        }
        threads.push(thread);
    });
    result.threads = threads;
    return result;
}