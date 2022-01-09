var t, a = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), e = require("../../@babel/runtime/helpers/asyncToGenerator"), i = require("../../90C38923ACE07ADFF6A5E124FFF0A2D7.js"), r = require("../../1964FEB6ACE07ADF7F0296B168E0A2D7.js"), n = require("../../81CC8A51ACE07ADFE7AAE2566711A2D7.js");

require("../../A5F26265ACE07ADFC3940A6236C0A2D7.js");

Page({
    data: {
        mid: 0,
        comment: {},
        hotFlowChild: [],
        currentReplyData: {},
        errorPage: !1
    },
    jsData: {
        id: 0,
        max_id: 0,
        max_id_type: 0,
        page: 1,
        rootComments: [],
        replayComments: [],
        isNoData: !1
    },
    onLoad: (t = e(a.default.mark(function t(e) {
        var i, r, n, o;
        return a.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return this.jsData.id = e.id, e.mid && this.setData({
                    mid: e.mid
                }), i = this, r = this.getOpenerEventChannel && this.getOpenerEventChannel(), "function" == typeof this.getOpenerEventChannel && r && r.on("acceptDataFromOpenerPage", function(t) {
                    i.setData({
                        currentReplyData: t
                    });
                }), this.getHotFlowChild(), t.next = 8, this.checkStorage("query");

              case 8:
                return n = t.sent, t.next = 11, this.checkStorage("detail_card_data");

              case 11:
                o = t.sent, this.setData({
                    query: n,
                    cardsData: o
                });

              case 13:
              case "end":
                return t.stop();
            }
        }, t, this);
    })), function(a) {
        return t.apply(this, arguments);
    }),
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.jsData.isNoData || (this.jsData.page += 1, this.getHotFlowChild());
    },
    onShareAppMessage: function(t) {
        var a = "";
        if (this.data.cardsData && this.data.cardsData[0] && this.data.cardsData[0].mblog) {
            if (this.data.cardsData[0].mblog.pic_ids && this.data.cardsData[0].mblog.pic_ids.length) a = "https://ww3.sinaimg.cn/middle/".concat(this.data.cardsData[0].mblog.pic_ids[0], ".jpg"); else if (this.data.cardsData[0].mblog.url_objects) for (var e = this.data.cardsData[0].mblog.url_objects, i = 0; i < e.length; i++) if (e[i].object && ("video" === e[i].object.object_type || "article" === e[i].object.object_type) && e[i].object.object && e[i].object.object.image) {
                a = n.replaceHttps(e[i].object.object.image.url);
                break;
            }
            return {
                title: this.data.cardsData[0].mblog.text,
                path: "/pages/components/detailWeibo/index?is_share=detail&id=" + this.jsData.id + "&q=" + this.data.query + "&page_from=detail",
                imageUrl: a || "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/image_share_homepage.png"
            };
        }
    },
    checkStorage: function(t) {
        return new Promise(function(a, e) {
            try {
                wx.getStorage({
                    key: t,
                    success: function(t) {
                        t.data ? a(t.data) : e();
                    },
                    fail: function() {
                        a();
                    }
                });
            } catch (t) {
                wx.reportMonitor("getStorageError", t);
            }
        });
    },
    getHotFlowChild: function() {
        var t = this;
        i.get("index", {
            api_sid: "platform_hotflowchild",
            id: this.jsData.id,
            max_id: this.jsData.max_id,
            max_id_type: this.jsData.max_id_type || 0,
            count: 10,
            authuid: 6666498638
        }).then(function(a) {
            a.data ? (t.jsData.max_id = a.data.max_id, t.jsData.max_id_type = a.data.max_id_type, 
            a.data.comments && a.data.comments.length && (t.jsData.replayComments = t.jsData.replayComments.concat(a.data.comments), 
            t.dealText(t.jsData.replayComments), t.setData({
                hotFlowChild: t.jsData.replayComments
            })), 0 === a.data.max_id && (t.jsData.isNoData = !0)) : t.jsData.isNoData = !0;
        });
    },
    dealText: function(t) {
        var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        Array.isArray(t) && t.forEach(function(t) {
            var e = r.parseStatus(t, !1, !1), i = [];
            e.cardContentList.forEach(function(t) {
                t.content = t.content.replace(/\n|↵/g, ""), i.push(t);
            }), a ? t.replyParseMblogText = i : t.parseMblogText = i;
        });
    },
    preview: function(t) {
        var a = "https://ww1.sinaimg.cn/bmiddle/" + t.currentTarget.dataset.id + ".jpg";
        wx.previewImage({
            current: a,
            urls: [ a ]
        });
    },
    goToMiniProgram: function(t) {
        wx.navigateToMiniProgram({
            appId: "wx9074de28009e1111",
            path: "/pages/index/index?blog_id=" + t.currentTarget.dataset.id,
            fail: function() {}
        });
    }
});