var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 52 ], {
    1094: function(t, i, r) {
        "use strict";
        r.r(i), function(t) {
            t.currentModuleId = "m4941d751", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m4941d751",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("indicatorDots", this.indicatorDots), 
                    this._c("current", this.current), this._i(this._c("boxList", this.boxList), function(t, i) {
                        t.creativity.ballIcon, t.creativity.titleScript && t.creativity.titleScript, t.creativity.subScript;
                    }), this._c("boxList", this.boxList).length > 4 && this._c("progressPercent", this.progressPercent), 
                    this._r();
                }
            };
            r(421);
            t.currentModuleId;
        }.call(this, r(11));
    },
    421: function(t, i, r) {
        "use strict";
        var e = r(1), c = r.n(e), n = r(31), a = r.n(n), s = r(26), o = r.n(s), p = r(2), l = r(8), h = r(4);
        Object(p.b)({
            properties: {
                frames: {
                    type: Array,
                    value: []
                },
                tracker: {
                    type: Object,
                    value: {}
                }
            },
            data: {
                current: 0,
                boxList: [ {
                    trackingInfo: {
                        frameIdx: 1
                    },
                    creativity: {
                        path: "",
                        titleScript: "",
                        ballIcon: "https://pt-starimg.didistatic.com/static/starimg/img/lZe4TiL56F1607514295586.png",
                        appId: "",
                        linkUrl: "/m/ddPage_0CKjRRTa.html?didichn=2000",
                        linkType: 1,
                        templateId: 155,
                        subScript: "赚现金"
                    }
                }, {
                    trackingInfo: {
                        frameIdx: 2
                    },
                    creativity: {
                        path: "",
                        titleScript: "",
                        ballIcon: "https://pt-starimg.didistatic.com/static/starimg/img/QD7r1joeuF1607514304569.png",
                        appId: "",
                        linkUrl: "/m/qingju_qxj.html?didichn=hmMiniAppIndex",
                        linkType: 1,
                        templateId: 155,
                        subScript: "骑行金提现"
                    }
                }, {
                    trackingInfo: {
                        frameIdx: 3
                    },
                    creativity: {
                        path: "",
                        titleScript: "",
                        ballIcon: "https://pt-starimg.didistatic.com/static/starimg/img/x2KlYVulnD1615466792170.png",
                        appId: "",
                        linkUrl: "/m/qingju_wallet.html#/buyCards?bizOrigin=2007",
                        linkType: 1,
                        templateId: 155,
                        subScript: "特惠购卡"
                    }
                }, {
                    trackingInfo: {
                        frameIdx: 4
                    },
                    creativity: {
                        path: "",
                        titleScript: "",
                        ballIcon: "https://pt-starimg.didistatic.com/static/starimg/img/TSYcIzqk4d1608521456857.png",
                        appId: "",
                        linkUrl: "https://mp.weixin.qq.com/s/EDU67larIuoC0lH6KaI6pQ",
                        linkType: 1,
                        templateId: 155,
                        subScript: "关注领福利"
                    }
                } ],
                progressPercent: 0
            },
            computed: {
                progress() {
                    return this.boxList.length > 4;
                }
            },
            watch: {
                frames(t) {
                    var i, r = this;
                    t && t.length && (this.boxList = t, this.progressPercent = 4 / this.boxList.length * 100, 
                    a()(i = o()(t).call(t, 0, 4)).call(i, function(t, i) {
                        h.a.track("qj_wx_homepage_topicon_sw", c()({
                            order: i + 1,
                            content: t.creativity.subScript,
                            corner_content: t.creativity.titleScript
                        }, r.tracker));
                    }));
                }
            },
            methods: {
                jump(t) {
                    Object(l.H)({
                        type: "flow",
                        data: t,
                        index: t.trackingInfo.frameIdx,
                        tracker: this.tracker
                    }), Object(l.N)("hm-top-balls-banner", "ck");
                },
                change(t) {
                    var i = t.detail.current;
                    this.progressPercent = (i + 4) / this.boxList.length * 100;
                    for (var r = 1; r <= i; r++) {
                        var e = this.boxList[r + i + 1];
                        h.a.track("qj_wx_homepage_topicon_sw", {
                            order: e.trackingInfo.frameIdx,
                            content: e.creativity.subScript,
                            corner_content: e.creativity.titleScript,
                            tracker: this.tracker
                        });
                    }
                }
            },
            attached() {
                this.progressPercent = 4 / this.boxList.length * 100 || 100;
            }
        });
    }
}, [ [ 1094, 0 ] ] ]);
//# sourceMappingURL=index.js.map