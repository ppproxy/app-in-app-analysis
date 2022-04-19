var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../../@babel/runtime/helpers/objectSpread2");

require("../../../@babel/runtime/helpers/Arrayincludes");

var a, i = t(require("../../../@babel/runtime/regenerator")), o = require("../../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../../FDCF6404ACE07ADF9BA90C030A01A2D7.js"), s = require("../../../90C38923ACE07ADFF6A5E124FFF0A2D7.js"), n = require("../../../81CC8A51ACE07ADFE7AAE2566711A2D7.js"), c = require("../../../1964FEB6ACE07ADF7F0296B168E0A2D7.js"), u = require("../../../A5F26265ACE07ADFC3940A6236C0A2D7.js");

Page({
    data: {
        query: "",
        titlePTop: 0,
        toolMenus: [],
        cardsData: {},
        comment: [],
        menuButton: {},
        isShare: "",
        errorPage: !1,
        kandianDataList: []
    },
    jsData: {
        id: 0,
        max_id: 0,
        root_comments: [],
        page_from: "",
        isNoData: !1,
        uid: "",
        gsid: "",
        requestFlowCount: 0,
        currentHotTipIndex: 0,
        timeInterval: null
    },
    bindViewTap: function() {},
    onLoad: (a = o(i.default.mark(function t(e) {
        return i.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (this.jsData.id = e.id, this.jsData.page_from = e.page_from, this.jsData.query = e.q, 
                t.t0 = this.jsData.uid || wx.getStorageSync("uid") || wx.getStorageSync("vid"), 
                t.t0) {
                    t.next = 8;
                    break;
                }
                return t.next = 7, r.userManager.vuidLogin();

              case 7:
                t.t0 = t.sent;

              case 8:
                this.jsData.uid = t.t0, this.jsData.gsid = this.jsData.gsid || wx.getStorageSync("gsid"), 
                this.setData({
                    showGuide: !1,
                    query: e.q,
                    isShare: e.is_share || ""
                }), this.getWeiboDetail(), this.getWeiboComment(), this.initHotTips();

              case 14:
              case "end":
                return t.stop();
            }
        }, t, this);
    })), function(t) {
        return a.apply(this, arguments);
    }),
    onReady: function() {},
    onReachBottom: function() {
        this.jsData.isNoData || (this.jsData.page += 1, this.getWeiboComment());
    },
    onShareAppMessage: function(t) {
        var e = "";
        if (this.data.cardsData.mblog) {
            if (this.data.cardsData.mblog.pic_ids && this.data.cardsData.mblog.pic_ids.length) e = "https://ww3.sinaimg.cn/middle/".concat(this.data.cardsData.mblog.pic_ids[0], ".jpg"); else if (this.data.cardsData.mblog.url_objects) for (var a = this.data.cardsData.mblog.url_objects, i = 0; i < a.length; i++) if (a[i].object && ("video" === a[i].object.object_type || "article" === a[i].object.object_type) && a[i].object.object && a[i].object.object.image) {
                e = n.replaceHttps(a[i].object.object.image.url);
                break;
            }
            return {
                title: this.data.cardsData.mblog.text,
                path: "/pages/components/detailWeibo/index?is_share=detail&id=" + this.jsData.id + "&q=" + this.data.query + "&page_from=" + this.jsData.page_from,
                imageUrl: e || "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/image_share_homepage.png"
            };
        }
    },
    showAddGuide: function(t) {
        this.setData({
            showGuide: t.detail.show
        });
    },
    getWeiboDetail: function() {
        var t = this;
        s.get("index", {
            api_sid: "platform_statusshow",
            id: this.jsData.id,
            isGetLongText: 1,
            authuid: 6666498638
        }).then(function(e) {
            var a = wx.getSystemInfoSync();
            if (e.data.mblog && e.data.mblog.mid) {
                var i = c.parseStatus(e.data.mblog, !1, !1), o = c.parseStatus(e.data.mblog.retweeted_status, !0, !1);
                e.data.mblog.parseText = i ? i.cardContentList : [], e.data.mblog.retweeted_status && (e.data.mblog.retweeted_status.retParseText = o ? o.cardContentList : []), 
                t.setData({
                    titlePTop: a.statusBarHeight,
                    cardsData: e.data,
                    errorPage: !1
                }), wx.setStorage({
                    key: "query",
                    data: t.jsData.query
                }), wx.setStorage({
                    key: "detail_card_data",
                    data: [ e.data ]
                });
            } else t.setData({
                errorPage: !0
            });
            u.track({
                q: t.data.query,
                page_type: 2011,
                ext: {
                    name: u.logMap(2011),
                    mid: t.jsData.id,
                    share_type: t.data.isShare,
                    page_from: t.jsData.page_from
                }
            });
        }).catch(function(t) {});
    },
    getWeiboComment: function() {
        var t = this;
        s.get("index", {
            api_sid: "platform_hotcomment",
            mid: this.jsData.id,
            max_id: this.jsData.max_id,
            count: 10,
            authuid: 6666498638
        }, !1).then(function(e) {
            e.data ? (t.jsData.max_id = e.data.max_id, 0 === e.data.state_code && (t.jsData.root_comments = t.jsData.root_comments.concat(e.data.root_comments), 
            t.dealText(t.jsData.root_comments), t.jsData.root_comments.forEach(function(e) {
                t.dealText(e.comments, !0);
            }), e.data.root_comments = t.jsData.root_comments, t.setData({
                comment: e.data
            })), 0 === e.data.max_id && (t.jsData.isNoData = !0)) : t.jsData.isNoData = !0, 
            u.track({
                q: t.data.query,
                page_type: 2014,
                ext: {
                    name: u.logMap(2014),
                    mid: t.jsData.id,
                    share_type: t.data.isShare,
                    page_from: t.jsData.page_from
                }
            });
        }).catch(function(t) {});
    },
    dealText: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t instanceof Array && t.forEach(function(t) {
            var a = c.parseStatus(t, !1, !1);
            e ? t.replyParseMblogText = a ? a.cardContentList : [] : t.parseMblogText = a ? a.cardContentList : [];
        });
    },
    dealCardData: function(t) {
        for (var e = {
            id: 1,
            mid: 1,
            title: 1,
            user: 1,
            pic_ids: 1,
            isLongText: 1,
            longText: 1,
            text: 1,
            url_objects: 1,
            created_at: 1,
            source: 1,
            retweeted_status: 1,
            comment_summary: 1,
            reposts_count: 1,
            comments_count: 1,
            attitudes_count: 1
        }, a = [], i = 0; i < (t && t.length); i++) {
            if (t[i].actionlog && (t[i].actionlog = ""), "law_sensitive" !== t[i].itemid && "empty_result" !== t[i].itemid || (this.jsData.isReachBottom = !0), 
            t[i].card_group) if (Array.isArray(t[i].card_group)) for (var o = 0; o < t[i].card_group.length; o++) 42 != t[i].card_group[o].card_type || "热门文章" != t[i].card_group[o].desc ? 8 == t[i].card_group[o].card_type && t[i].card_group[o].openurl ? t[i].card_group = [] : t[i].card_group[o].mblog && this.dealText(t[i].card_group[o].mblog) : t[i].card_group = []; else for (var r in t[i].card_group) t[i].card_group[r].mblog && this.dealText(t[i].card_group[r].mblog);
            if (t[i].mblog) {
                var s = t[i].mblog, n = {};
                for (var c in e) if (void 0 !== s[c]) if ("url_objects" === c && s.url_objects) {
                    n.url_objects = [];
                    for (var u = 0; u < s.url_objects.length; u++) {
                        var d = s.url_objects[u];
                        d.object && d.object.object && (d.object.object = {
                            stream: d.object.object.stream,
                            image: d.object.object.image,
                            author: d.object.object.author,
                            image_url: d.object.object.image_url,
                            display_name: d.object.object.display_name,
                            summary: d.object.object.summary
                        }), n.url_objects.push({
                            object: d.object,
                            url_ori: d.url_ori
                        });
                    }
                } else "user" === c && s.user ? n.user = {
                    mbrank: s.user.mbrank,
                    name: s.user.name,
                    profile_image_url: s.user.profile_image_url,
                    verified: s.user.verified,
                    verified_type: s.user.verified_type,
                    verified_type_ext: s.user.verified_type_ext
                } : n[c] = t[i].mblog[c];
                t[i].mblog = n, this.dealText(t[i].mblog);
            }
            a.push(t[i]);
        }
        return a;
    },
    initHotTips: function() {
        var t = this;
        wx.getStorage({
            key: "showHotTips",
            complete: function(e) {
                e.data && (t.jsData.timeInterval && (clearTimeout(t.jsData.timeInterval), t.jsData.timeInterval = null), 
                t.jsData.timeInterval = setTimeout(function() {
                    t.setData({
                        showHotTips: !0
                    }), t.getHotFlow();
                }, 5e3));
            }
        });
    },
    closeHotTips: function(t) {
        var e = this;
        t && wx.removeStorage({
            key: "showHotTips"
        });
        var a = wx.createAnimation({
            duration: 500
        });
        a.translateY("100%").opacity(0).step(), this.setData({
            animation: a.export()
        }), setTimeout(function() {
            e.setData({
                showHotTips: !1
            });
        }, 500);
    },
    hotTipSwiperChange: function(t) {
        this.jsData.currentHotTipIndex = t.detail.current;
    },
    getHotFlow: function() {
        var t = this;
        if (this.jsData.requestFlowCount = this.jsData.requestFlowCount + 1, !(this.jsData.requestFlowCount > 3)) {
            var e = {
                api_sid: "datopic_fashionfeed",
                raw_json: '{"uid":"'.concat(this.jsData.uid, '","seq_id":"').concat(n.uuid(), '","city_id":"8008611000000000000","page":1,"scenes":"1","device":"t_wap_ios","trace":"1","source":"HOTSEARCH_REDIRECT"}')
            };
            s.get("index", e, !1).then(function(e) {
                if ("SUCCESS" === e.data.error_code) if (e.data.statuses && e.data.statuses.length) {
                    var a = t.dealCardData(e.data.statuses), i = 0, o = [];
                    if ((a = (a = t.isOnlyText(a)).filter(function(t) {
                        return !t.isText;
                    })).length < 5) return void t.getHotFlow();
                    for (;i < 5; ) o.push({
                        mid: a[i].mblog.mid,
                        text: a[i].mblog.text,
                        image: a[i].image,
                        source: a[i]
                    }), i++;
                    console.log("kandianlist", o);
                    var r = wx.createAnimation({
                        duration: 500
                    });
                    r.translateY(0).opacity(1).step(), t.setData({
                        kandianDataList: o,
                        showHotTips: !0,
                        animation: r.export()
                    }), t.jsData.timeInterval = setTimeout(function() {
                        t.jsData.timeInterval && (clearTimeout(t.jsData.timeInterval), t.jsData.timeInterval = null), 
                        t.closeHotTips();
                    }, 6e4);
                } else t.getHotFlow(); else t.getHotFlow();
            }).catch(function(e) {
                t.closeHotTips();
            });
        }
    },
    goToWeiboKandian: function() {
        var t = this.data.kandianDataList[this.jsData.currentHotTipIndex];
        wx.reportAnalytics("click_swiper_go_hotflow", {}), wx.navigateToMiniProgram({
            appId: "wx993d81bc0fa75897",
            path: "/pages/hotflow/index?shared_material=".concat(encodeURIComponent(JSON.stringify({
                id: t.mid,
                mark: t.source.material.mark,
                hotboard_list: t.source.material.hotboard_list
            }))),
            extraData: {},
            success: function() {
                wx.reportAnalytics("click_swiper_go_hotflow_success", {});
            },
            fail: function() {}
        });
    },
    isOnlyText: function(t) {
        return t.map(function(t, a) {
            var i = !0, o = "text", r = "", s = t.mblog;
            if (s) if (s.pic_ids.length) i = !1, r = "https://wx3.sinaimg.cn/orj960/" + s.pic_ids[0] + ".jpg", 
            o = "image"; else if (s.url_objects && s.url_objects.length) for (var n = 0; n < s.url_objects.length; n++) {
                var c = s.url_objects[n];
                if (c.object && [ "video" ].includes(c.object.object_type)) {
                    i = !1, o = "video", c.object.object.image.url && (r = c.object.object.image.url);
                    break;
                }
            }
            return e(e({}, t), {}, {
                isText: i,
                image: r,
                blogType: o
            });
        });
    }
});