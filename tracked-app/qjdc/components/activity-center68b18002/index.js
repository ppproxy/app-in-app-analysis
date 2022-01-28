var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 47 ], {
    1098: function(e, t, n) {
        "use strict";
        n.r(t), function(e) {
            e.currentModuleId = "m68b18002", e.currentCtor = Component, e.currentResourceType = "component", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "m68b18002",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("activeInfo", this.activeInfo) && this._c("activeInfo.botBanner", this.activeInfo.botBanner) && 2 === this._c("activeInfo.botBanner", this.activeInfo.botBanner).length && this._i(this._c("activeInfo.botBanner", this.activeInfo.botBanner), function(e, t) {
                        this._c("activeInfo.botInfo", this.activeInfo.botInfo), e && e.title, e && e.subTitle, 
                        e.img;
                    }), this._c("activeInfo", this.activeInfo) && this._c("activeInfo.msgBanner", this.activeInfo.msgBanner) && this._c("activeInfo.msgBanner", this.activeInfo.msgBanner).length && this._i(this._c("activeInfo.msgBanner", this.activeInfo.msgBanner), function(e, t) {
                        e.adEnable ? (e.adEnable && this._c("adConfig.adError", this.adConfig.adError), 
                        this._c("adReload", this.adReload) && this._c("bottomAd", this.bottomAd)) : this._c("activeInfo.msgInfo", this.activeInfo.msgInfo);
                    }), this._r();
                }
            };
            n(424);
            e.currentModuleId;
        }.call(this, n(11));
    },
    424: function(e, t, n) {
        "use strict";
        var r = n(3), a = n.n(r), o = n(1), i = n.n(o), c = n(0), s = n.n(c), h = n(2), v = (n(7), 
        n(8)), b = (n(134), n(9)), g = n(5), m = (n(32), n(4)), f = n(94), u = n(15);
        Object(h.b)({
            properties: {
                tracker: {
                    type: Object,
                    value: {}
                },
                activeInfo: {
                    type: Object,
                    value: {}
                },
                bottomAd: {
                    type: String,
                    value: "wechat:ad:banner"
                },
                adReload: {
                    type: Boolean,
                    value: !0
                }
            },
            watch: {
                activeInfo(e, t) {
                    this.getBotBannerObserver(), this.getMsgBannerObserver();
                }
            },
            computed: i()(i()({}, g.a.mapState([ "user", "location" ])), {}, {
                isLogin() {
                    return !!this.user.token;
                }
            }),
            data: {
                adConfig: {
                    adError: !1,
                    weichatType: "wechat:ad:banner"
                },
                msgBannerNum: 0,
                botBannerObserver: null,
                msgBannerObserver: null
            },
            pageLifetimes: {
                show() {
                    this.getBotBannerObserver(), this.getMsgBannerObserver();
                },
                hide() {
                    this.cancelBotBannerObserver(), this.cancelMsgBannerObserver();
                }
            },
            attached() {
                return a()(s.a.mark(function e() {
                    return s.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }))();
            },
            methods: {
                getBotBannerObserver() {
                    var e = this;
                    try {
                        this.cancelBotBannerObserver();
                        var t = setTimeout(function() {
                            clearTimeout(t), e.activeInfo.botBanner && 2 === e.activeInfo.botBanner.length && (e.botBannerObserver = wx.createIntersectionObserver(e), 
                            e.botBannerObserver.relativeToViewport().observe(".activity_center-bot-banner-f", function(t) {
                                t.intersectionRect.height && (e.activeInfo.botBanner.forEach(function(t, n) {
                                    e._track("phpub_cms_view_sw", {
                                        frame: n + 1,
                                        biz_content: e.activeInfo.botInfo.bizContent[n],
                                        spot_id: "h5-home-bottom-banner",
                                        layout_id: e.activeInfo.botInfo.layoutId
                                    });
                                }), e.cancelBotBannerObserver());
                            }));
                        }, 500);
                    } catch (e) {
                        console.log(e);
                    }
                },
                cancelBotBannerObserver() {
                    this.botBannerObserver && this.botBannerObserver.disconnect();
                },
                getMsgBannerObserver() {
                    var e = this;
                    try {
                        this.cancelMsgBannerObserver();
                        var t = setTimeout(function() {
                            clearTimeout(t), e.activeInfo.msgBanner && e.activeInfo.msgBanner.length && e.getEveryMsgObserver(e.msgBannerNum);
                        }, 500);
                    } catch (e) {
                        console.log(e);
                    }
                },
                getEveryMsgObserver(e) {
                    var t = this;
                    try {
                        this.msgBannerObserver = wx.createIntersectionObserver(this), this.msgBannerObserver.relativeToViewport().observe(".activity-item" + e, function(n) {
                            n.intersectionRect.height && (t.activeInfo.msgBanner[e].adEnable ? t._track("qj_wx_homepage_ad_sw", {
                                source: t.tracker.source || 0,
                                sourcetype: t.tracker.sourcetype || "pages/init/init"
                            }) : t._track("phpub_cms_view_sw", {
                                frame: 1,
                                biz_content: t.activeInfo.msgInfo.bizContent[e],
                                spot_id: t.activeInfo.msgInfo.spot_id || t.activeInfo.msgInfo.marketingSpotId || "",
                                layout_id: t.activeInfo.msgInfo.layoutId || ""
                            }), t.msgBannerObserver && t.msgBannerObserver.disconnect(), t.msgBannerNum++, t.activeInfo.msgBanner && t.activeInfo.msgBanner.length && t.msgBannerNum < t.activeInfo.msgBanner.length && t.getEveryMsgObserver(t.msgBannerNum));
                        });
                    } catch (e) {
                        console.log(e);
                    }
                },
                cancelMsgBannerObserver() {
                    this.msgBannerNum = 0, this.msgBannerObserver && this.msgBannerObserver.disconnect();
                },
                legalprovision() {
                    Object(b.navigateTo)(u.e, {
                        url: "https://page.udache.com/driver-activity-biz/baichuan-policy-agreement/index.html?mode=2&bc_appid=10005&bc_scene=地图页法律条款入口&lang=zh-CN"
                    }), this._track("qj_wx_homepage_legal_ck");
                },
                goToActivity(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 ? arguments[2] : void 0;
                    Object(v.H)({
                        data: n,
                        index: t,
                        framesInfo: e,
                        tracker: this.tracker
                    });
                    try {
                        n.thirdTrackings && Object(f.a)("首页资源位点击", n.thirdTrackings, e.campaignUnitId, "miaozhen", "click"), 
                        Object(v.N)("h5-activity-center-banner", "ck");
                    } catch (e) {
                        console.log(e, "秒针catch");
                    }
                },
                _track(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    m.a.track(e, i()({}, t));
                }
            }
        });
    }
}, [ [ 1098, 0 ] ] ]);
//# sourceMappingURL=index.js.map