var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

/**
                                                                                                                                                                                                                                                                   * @file message
                                                                                                                                                                                                                                                                   * @author wuzhen
                                                                                                                                                                                                                                                                   */ var _util = require("../../util/util.js");

var _filters = require("../../util/filters.js");

var _url = require("../../util/url");

var _trackTieba = require("../../util/trackTieba.js");

Page({
    data: {
        msgList: null,
        atCount: 0,
        agreeCount: 0,
        placeholderTxt: "",
        IMG_CDN: _url.IMG_CDN,
        hasMore: true,
        isEmpty: false,
        stopPullDown: false,
        isProThread: false,
        isWx: (0, _util.getGlobalData)("__type__") === "weixin"
    },
    isMore: false,
    hasMore: true,
    isFocus: true,
    pn: 1,
    fid: "",
    tid: "",
    fname: "",
    isShowInput: false,
    onLoad: function onLoad() {
        this.setData({
            isLogin: true
        });
        (0, _util.track)("message_page");
        this.pn = 1;
        this.loadData();
        (0, _util.subscribeMsg)(this, "msgCount", "msgTab");
    },
    processData: function processData(list) {
        var typeMap = {
            3: "贴子",
            1: "回复",
            2: "回复"
        };
        list && list.forEach(function(item) {
            var showTime = (0, _filters.postTime)(item.time);
            var subject = item.agreeer || item.replyer;
            item.subject = subject;
            item.showTitle = subject.show_nickname || subject.name_show || subject.name;
            item.showPortrait = _util.GEN_PORTRAIT + subject.portrait;
            item.showContent = item.content;
            var thumbnail = item.thread_content && item.thread_content.img;
            var barName = void 0;
            var from = void 0;
            if (item.msgType === "reply_list") {
                barName = item.fname ? item.fname + "吧" : "";
                var replyPerson = item.quote_user.id === 0 ? " 回复我" : "";
                item.showTitle = item.showTitle + replyPerson;
                item.lzlReply = replyPerson;
            } else if (item.msgType === "agree_list") {
                barName = item.thread_info.fname ? item.thread_info.fname + "吧" : "";
                var zan = "的" + typeMap[item.type] || "";
                item.showContent = "赞了我" + zan;
            } else {
                barName = item.fname ? item.fname + "吧" : "";
            }
            item.barName = barName;
            item.showTime = showTime;
            if (item.post_from) {
                from = item.post_from + " · " + barName + showTime;
            } else {
                from = "" + barName + showTime;
            }
            if (item.is_del && item.is_del === 1) {
                item.isDel = true;
            } else {
                item.isDel = false;
            }
            item.from = from;
            item.thumbnail = thumbnail;
        });
        return list && list.filter(function(item) {
            return item.isDel === false;
        });
    },
    onReady: function onReady() {
        // 页面曝光打点
        (0, _trackTieba.trackTiebaView)({
            page: "pages/msgtab/msgtab",
            locate: "tb_smallapp_msgtab_view",
            fr: ""
        });
    },
    onShow: function onShow() {
        var app = (0, _util.getGlobalData)();
        (0, _util.updatePoint)();
        this.setData({
            isLogin: true
        });
        (0, _util.track)("message_page");
        (0, _util.getGroupMsg)();
        this.setData({
            atCount: app.at_me || 0,
            agreeCount: app.agree_me || 0
        });
        app.reply_me = 0;
        wx.multicast("reply_me", "at_me", "agree_me");
    },
    loadData: function loadData() {
        var _this = this;
        var self = this;
        (0, _util.get)(_url.REPLY_LIST, {
            pn: self.pn
        }, self.onLoad).then(function(res) {
            _this.setData({
                isBroken: false
            });
            wx.stopPullDownRefresh();
            var data = res.reply_list;
            data.forEach(function(element) {
                element.msgType = "reply_list";
            });
            self.isMore = false;
            self.hasMore = res.has_more;
            var newData = (0, _util.fastConcat)(self.data.msgList || [], self.processData(data), "msgList");
            self.setData(_extends({}, newData, {
                isEmpty: false,
                hasMore: res.has_more
            }));
        }).catch(function(res) {
            wx.stopPullDownRefresh();
            self.isMore = false;
        });
    },
    goMsglist: function goMsglist(e) {
        var category = e.currentTarget.dataset.say;
        var trackMap = {
            agreeme: "like_page_click",
            atme: "aite_click",
            push: "selection_page_click"
        };
        (0, _util.track)(trackMap[category]);
        wx.myNavigateTo({
            url: "/pages/msg/msg?category=" + category
        });
    },
    onReachBottom: function onReachBottom() {
        if (!this.hasMore) {
            return;
        }
        this.isMore = true;
        this.pn++;
        this.loadData();
    },
    onPullDownRefresh: function onPullDownRefresh() {
        this.pn = 1;
        this.data.msgList = null;
        this.loadData();
    },
    hideInput: function hideInput() {
        this.setData({
            isShowInput: false
        });
        // wx.showTabBar();
        },
    blur: function blur() {// wx.showTabBar();
    },
    goPb: function goPb(e) {
        var _e$currentTarget$data = e.currentTarget.dataset, tid = _e$currentTarget$data.tid, qid = _e$currentTarget$data.qid, lzl = _e$currentTarget$data.lzl, pid = _e$currentTarget$data.pid;
        if (lzl) {
            wx.myNavigateTo({
                url: "/pages/lzl/lzl?pid=" + qid + "&from=msg&targetId=" + pid
            });
        } else {
            wx.myNavigateTo({
                url: "/pages/pb/pb?tid=" + tid + "&from=msg&targetId=" + pid
            });
        }
    },
    goMain: function goMain(e) {
        var _e$currentTarget$data2 = e.currentTarget.dataset, tid = _e$currentTarget$data2.tid, pid = _e$currentTarget$data2.pid;
        wx.myNavigateTo({
            url: "/pages/pb/pb?tid=" + tid + "&from=msg&targetId=" + pid
        });
    },
    // 回复
    reply: function reply(e) {
        var _e$currentTarget$data3 = e.currentTarget.dataset, fid = _e$currentTarget$data3.fid, tid = _e$currentTarget$data3.tid, fname = _e$currentTarget$data3.fname, authorname = _e$currentTarget$data3.authorname, isProThread = _e$currentTarget$data3.isProThread;
        (0, _util.track)("message_reply");
        this.data.fid = fid;
        this.data.tid = tid;
        this.data.fname = fname;
        // wx.hideTabBar();
                this.setData({
            isProThread: isProThread,
            fid: fid,
            tid: tid,
            fname: fname,
            isShowInput: true,
            placeholderTxt: "回复 " + authorname + ":"
        });
    },
    submit: function submit(data) {
        var value = data.detail.inputVal;
        var self = this;
        var _data = this.data, fid = _data.fid, tid = _data.tid, fname = _data.fname;
        var options = {
            co: (0, _filters.xssFilter)(value),
            fid: fid,
            src: 1,
            z: tid,
            word: fname
        };
        (0, _util.post)(_url.APUB, options, "回复失败").then(function(res) {
            wx.showToast({
                icon: "none",
                title: "回复成功"
            });
            self.hideInput();
        }).catch(self.hideInput);
    }
});