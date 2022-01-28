var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 65 ], {
    1095: function(t, e, r) {
        "use strict";
        r.r(e), function(t, e) {
            t.currentModuleId = "ma2166f5e", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "ma2166f5e",
                render: function() {
                    this._c("cardList", this.cardList).length && (!this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._c("title", this.title), this._c("info", this.info), this._i(this._c("cardList", this.cardList), function(t, r) {
                        e.stringifyClass("recom_cards-card _cml_ref_lmc_", t.ext && t.ext.consumeChannels && t.ext.consumeChannels[0] && "didi_app" === t.ext.consumeChannels[0] ? "recom_cards-card-App" : "recom_cards-card-no-app"), 
                        t.tags[0] && t.tags[0].title && t.tags[0].title, t.name && t.name, t.price && t.discount && t.price != t.discount && t.price, 
                        t.pricePrefix && t.pricePrefix, t.discount ? t.discount : t.price, t.imageNew || this._c("defaultIcon", this.defaultIcon)[t.brand];
                    }), this._c("otherTitle", this.otherTitle)), this._r();
                }
            };
            r(689);
            t.currentModuleId;
        }.call(this, r(11), r(133));
    },
    689: function(t, e, r) {
        "use strict";
        var i = r(3), a = r.n(i), c = r(1), n = r.n(c), s = r(14), o = r.n(s), d = r(12), h = r.n(d), p = r(6), u = r.n(p), l = r(0), m = r.n(l), _ = r(2), g = r(17), y = r(10), w = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return Object(g.b)("hm.fa.mallRecommend", n()({
                hideErr: !0
            }, t), Object(y.b)(), Object(y.a)(), {
                commonParameters: !0,
                hwId: !1
            });
        }, f = r(9), x = r(8), b = r(5), v = r(32), k = r(4), j = r(15), C = "UPDATE_LOADING_INFO";
        Object(_.b)({
            properties: {
                source: {
                    type: Number,
                    value: ""
                },
                sourcetype: {
                    type: Number,
                    value: ""
                }
            },
            computed: n()(n()({}, b.a.mapState([ "user" ])), {}, {
                isLogin() {
                    return !!this.user.token;
                },
                bizOrigin() {
                    return 2024;
                }
            }),
            data: {
                cardList: [],
                exposure: {},
                type: "",
                info: "",
                title: "优惠购卡",
                otherTitle: "更多骑行卡",
                defaultIcon: {
                    htw: "https://pt-starimg.didistatic.com/static/starimg/img/0dxNsVoCr71610545570886.png",
                    bh: "https://pt-starimg.didistatic.com/static/starimg/img/i2ms9P8Hqt1610545570829.png"
                },
                bFirstEnter: !0
            },
            ready() {
                var t = this;
                return a()(m.a.mark(function e() {
                    return m.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, t.mallRecommend();

                          case 2:
                            t.bFirstEnter = !1;

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }))();
            },
            methods: {
                mallRecommend() {
                    var t = this;
                    return a()(m.a.mark(function e() {
                        var r, i, a, c, n, s, d;
                        return m.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return b.a.commit(C, {
                                    key: "recomCardStatus",
                                    value: "loading"
                                }), e.prev = 1, e.next = 4, w({
                                    channel: "htw_wx_miniapp"
                                });

                              case 4:
                                if (r = e.sent, i = r.list, a = void 0 === i ? [] : i, c = r.tip, n = r.type, b.a.commit(C, {
                                    key: "recomCardStatus",
                                    value: "success"
                                }), a && a.length > 2 ? (t.cardList = [ a[0], a[1] ], t.exposure = {
                                    0: !0,
                                    1: !1,
                                    default: !1
                                }) : (t.cardList = a || [], a && 1 === a.length ? (t._track("qj_wx_homepage_moreridecard_sw", {
                                    type: t.type
                                }), t.exposure = {
                                    0: !0,
                                    default: !0
                                }) : t.exposure = {}), t.info = c || "", t.type = n || "", a && a.length) {
                                    s = 2;
                                    try {
                                        a[0] && a[0].ext && a[0].ext.consumeChannels && o()(d = a[0].ext.consumeChannels).call(d, "didi_app") > -1 && (s = 1);
                                    } catch (t) {
                                        console.log(t);
                                    }
                                    t._track("qj_wx_homepage_ridecard_sw", {
                                        type: n,
                                        card_id: a[0].spuId,
                                        cardtype: s
                                    });
                                }
                                t._track("qj_wx_homepage_myridecard_sw", {
                                    type: n
                                }), e.next = 21;
                                break;

                              case 17:
                                e.prev = 17, e.t0 = e.catch(1), t._initData(), b.a.commit(C, {
                                    key: "recomCardStatus",
                                    value: "error"
                                });

                              case 21:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 1, 17 ] ]);
                    }))();
                },
                checkLogin() {
                    var t = this;
                    return new h.a(function(e, r) {
                        t.user.token ? e(!0) : (t.triggerEvent("toLogin"), r(!1));
                    });
                },
                jumpToMyCards() {
                    var t = this;
                    this._track("qj_wx_homepage_myridecard_ck", {
                        type: this.type
                    }), this.checkLogin().then(function(e) {
                        Object(x.w)("/m/qingju_wallet.html#/myRidingCards?bizOrigin=".concat(t.bizOrigin));
                    });
                },
                jumpBuyCards() {
                    var t = this;
                    this._track("qj_wx_homepage_ridecardblank_ck", {
                        type: this.type
                    }), this.checkLogin().then(function(e) {
                        Object(f.navigateTo)(j.e + "?bizOrigin=".concat(t.bizOrigin, "&pageType=buycard"));
                    });
                },
                jumpToBuyCards() {
                    var t = this;
                    this._track("qj_wx_homepage_moreridecard_ck", {
                        type: this.type
                    }), this.checkLogin().then(function(e) {
                        Object(f.navigateTo)(j.e + "?bizOrigin=".concat(t.bizOrigin, "&pageType=buycard"));
                    });
                },
                buyCard(t, e) {
                    var r = this, i = 2;
                    try {
                        var a;
                        t.ext && t.ext.consumeChannels && o()(a = t.ext.consumeChannels).call(a, "didi_app") > -1 && (i = 1);
                    } catch (t) {
                        console.log(t);
                    }
                    this._track("qj_wx_homepage_ridecard_ck", {
                        type: this.type,
                        card_id: t.spuId,
                        cardtype: i
                    }), this.checkLogin().then(function(e) {
                        var i, a;
                        Object(f.navigateTo)(u()(i = u()(a = "".concat(j.e, "?bizOrigin=")).call(a, r.bizOrigin, "&pageType=buycard&spuId=")).call(i, t.spuId, "&autoPay=true"));
                    });
                },
                scroll(t) {
                    var e = this;
                    try {
                        v.a.getRect("card", this).then(function(t) {
                            var r = t.left, i = t.width;
                            if (Math.abs(r) > i / 6 && !e.exposure[1]) {
                                var a = 2, c = e.cardList;
                                try {
                                    var n;
                                    c[1] && c[1].ext && c[1].ext.consumeChannels && o()(n = c[1].ext.consumeChannels).call(n, "didi_app") > -1 && (a = 1);
                                } catch (t) {
                                    console.log(t);
                                }
                                e._track("qj_wx_homepage_ridecard_sw", {
                                    type: e.type,
                                    cardtype: a,
                                    card_id: e.cardList.length && e.cardList[1] && e.cardList[1].spuId || ""
                                }), e.exposure[1] = !0;
                            }
                        }), v.a.getRect("card-panel", this).then(function(t) {
                            t.left;
                            var r = t.width;
                            v.a.getRect("card-other", e).then(function(t) {
                                var i = t.left, a = t.width;
                                r - a / 2 > i && !e.exposure.default && (e._track("qj_wx_homepage_moreridecard_sw", {
                                    type: e.type
                                }), e.exposure.default = !0);
                            });
                        });
                    } catch (t) {}
                },
                scrolltoupper(t) {},
                scrolltolower(t) {},
                _initData() {
                    this.cardList = [], this.info = "";
                },
                _track(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    k.a.track(t, n()(n()({}, e), {}, {
                        source: this.source || 0,
                        sourcetype: this.sourcetype || "pages/init/init"
                    }));
                }
            },
            watch: {
                isLogin: function(t) {
                    t && !this.bFirstEnter && this.mallRecommend();
                }
            }
        });
    }
}, [ [ 1095, 0 ] ] ]);
//# sourceMappingURL=index.js.map