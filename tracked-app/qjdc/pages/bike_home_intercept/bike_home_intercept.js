var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 164 ], {
    1052: function(t, e, n) {
        "use strict";
        n.r(e), function(t) {
            t.currentModuleId = "m2357d192", t.currentCtor = Component, t.currentResourceType = "page", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m2357d192",
                render: function() {
                    this._c("isAuthAndLogin", this.isAuthAndLogin) ? (this._i(this._c("bannerList", this.bannerList), function(t, e) {
                        t.enableAd, t.img && t.img;
                    }), this._c("cardInfo.title", this.cardInfo.title) && this._c("cardInfo.title", this.cardInfo.title), 
                    this._c("cardInfo.desc", this.cardInfo.desc) && this._c("cardInfo.desc", this.cardInfo.desc), 
                    this._c("cardInfo.btnText", this.cardInfo.btnText)) : (this._i(this._c("bannerList", this.bannerList), function(t, e) {
                        t.enableAd, t.img && t.img;
                    }), this._c("cardInfo.title", this.cardInfo.title) && (this._c("cardInfo.title", this.cardInfo.title), 
                    this._c("cardInfo.desc", this.cardInfo.desc), this._c("cardInfo.icon", this.cardInfo.icon), 
                    this._c("cardInfo.btnText", this.cardInfo.btnText)), this._c("cmsCardInfo.title", this.cmsCardInfo.title) && (this._c("cmsCardInfo.title", this.cmsCardInfo.title), 
                    this._c("cmsCardInfo.desc", this.cmsCardInfo.desc), this._c("cmsCardInfo.icon", this.cmsCardInfo.icon), 
                    this._c("cmsCardInfo.btnText", this.cmsCardInfo.btnText)), this._c("isShowEmptyList", this.isShowEmptyList) && this._c("imgs.banner", this.imgs.banner), 
                    this._c("interceptInfo.bikeNum", this.interceptInfo.bikeNum), this._c("imgs.rules", this.imgs.rules)), 
                    this._r();
                }
            };
            n(391);
            t.currentModuleId;
        }.call(this, n(11));
    },
    391: function(t, e, n) {
        "use strict";
        var i = n(3), c = n.n(i), a = n(1), r = n.n(a), o = n(0), s = n.n(o), d = n(14), p = n.n(d), u = n(13), h = n.n(u), f = n(31), l = n.n(f), m = n(26), b = n.n(m), g = n(76), k = n.n(g), _ = n(2), I = n(5), v = n(8), w = n(35), C = n(4), x = n(55), y = n(151), T = n(16), j = n(9), L = n(78), O = (n(43), 
        n(134)), S = n(94), z = n(103), A = n(15), D = [ 1, 2 ], E = !1;
        Object(_.c)({
            data: {
                imgs: {
                    banner: "https://pt-starimg.didistatic.com/static/starimg/img/6SjfjO8gHk1621502714479.png",
                    rules: "https://pt-starimg.didistatic.com/static/starimg/img/YwhFFNVWb61621502794640.png"
                },
                showTipsList: [],
                interceptInfo: {},
                cardInfo: {},
                cmsCardInfo: {},
                bannerList: [ "https://pt-starimg.didistatic.com/static/starimg/img/pbVfA1CQ2W1578483809220.png" ]
            },
            computed: r()(r()({}, I.a.mapState([ "location", "bike", "common" ])), {}, {
                isAuthAndLogin() {
                    return p()(D).call(D, this.interceptInfo.type) > -1;
                },
                isShowEmptyList() {
                    var t = this.cardInfo, e = this.cmsCardInfo;
                    return !(t.title || e.title);
                }
            }),
            onLoad(t) {
                var e = this;
                return c()(s.a.mark(function n() {
                    return s.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return n.prev = 0, e.interceptInfo = JSON.parse(decodeURIComponent(t.info)), e.setTitle(), 
                            e.handleCardInfo(), e.setBannerList(), C.a.track("bike_home_confirmUnlock_sw", {
                                interceptInfo: e.interceptInfo
                            }), n.next = 8, Object(v.q)();

                          case 8:
                            E = n.sent, I.a.getters.andriodDridectStatus && !E && Object(z.e)(1), n.next = 15;
                            break;

                          case 12:
                            n.prev = 12, n.t0 = n.catch(0), console.log(n.t0);

                          case 15:
                          case "end":
                            return n.stop();
                        }
                    }, n, null, [ [ 0, 12 ] ]);
                }))();
            },
            methods: {
                setBannerList() {
                    var t = this;
                    return c()(s.a.mark(function e() {
                        var n, i, c, a, o, d, p, u, f, m, g, k;
                        return s.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n = t.interceptInfo, i = t.location, c = n.type, a = void 0 !== c && c, o = n.bikeNum, 
                                void 0 !== o && o, d = n.bikeSupplier, void 0 !== d && d, p = n.bizType, void 0 !== p && p, 
                                e.t0 = I.a.state.location.cityId, e.t1 = h.a, e.next = 6, Object(v.l)();

                              case 6:
                                if (e.t2 = e.sent, e.t3 = {
                                    wxSdkVersion: e.t2
                                }, e.t4 = (0, e.t1)(e.t3), u = {
                                    marketingSpotId: "all-page-infoflows",
                                    cityId: e.t0,
                                    extra: e.t4
                                }, f = {}, m = [], e.prev = 12, 2 !== a) {
                                    e.next = 20;
                                    break;
                                }
                                return e.next = 16, Object(T.marketingSpotDelivery)(u);

                              case 16:
                                f = e.sent, m = i.noAuthBannerList && i.noAuthBannerList.length ? i.noAuthBannerList : [ "https://pt-starimg.didistatic.com/static/starimg/img/pbVfA1CQ2W1578483809220.png" ], 
                                e.next = 24;
                                break;

                              case 20:
                                return e.next = 22, Object(T.marketingSpotDelivery)(u);

                              case 22:
                                f = e.sent, m = i.bannerList && i.bannerList.length ? i.bannerList : [ "https://pt-starimg.didistatic.com/static/starimg/img/pbVfA1CQ2W1578483809220.png" ];

                              case 24:
                                e.next = 29;
                                break;

                              case 26:
                                e.prev = 26, e.t5 = e.catch(12), console.log(e.t5);

                              case 29:
                                g = f && f.variantInfo && JSON.parse(f.variantInfo);
                                try {
                                    g && g.length > 0 ? (t.bannerList = g, g && l()(k = b()(g).call(g, 0, 2)).call(k, function(t, e) {
                                        var n = {
                                            imgurl: t.img,
                                            biz_content: f.bizContent && f.bizContent[e]
                                        };
                                        C.a.track("qj_wx_atpage_bike_sw", n), f.tracking && Object(O.a)(f.tracking, "exposure");
                                        var i = {
                                            layout_id: f.layoutId,
                                            frame: e + 1,
                                            spot_id: "all-page-infoflows",
                                            biz_content: f.bizContent && f.bizContent[e]
                                        };
                                        C.a.track("phpub_cms_view_sw", r()(r()({}, n), i));
                                    })) : t.bannerList = m;
                                } catch (t) {
                                    console.log(t);
                                }

                              case 31:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 12, 26 ] ]);
                    }))();
                },
                toRules() {
                    Object(v.w)("/m/valuationRules.html?entrance=0&title=计价规则#/bike");
                },
                getEventType() {
                    try {
                        var t = this.interceptInfo.type, e = void 0 === t ? "default" : t;
                        return new k.a([ [ D[0], function() {
                            return 1;
                        } ], [ D[1], function() {
                            return 2;
                        } ], [ "default", function() {
                            return 12;
                        } ] ]).get(e)();
                    } catch (t) {
                        console.log(t);
                    }
                },
                callback(t) {
                    try {
                        var e = this.getEventType();
                        C.a.track("bike_home_function_info_ck", {
                            source: 1,
                            type: e,
                            bizContent: this.cmsCardInfo.bizContent
                        }), this.cardInfo.action ? (this.sureClick = !0, this.cardInfo.action()) : this.cmsCardInfo.action && this.cmsCardInfo.action();
                    } catch (t) {
                        console.log(t);
                    }
                },
                scan() {
                    var t = this;
                    return c()(s.a.mark(function e() {
                        var n, i, a;
                        return s.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                try {
                                    n = t.cardInfo, i = t.interceptInfo, C.a.track("bike_home_confirmUnlock_ck", {
                                        cardInfo: n,
                                        interceptInfo: i
                                    }), a = function() {
                                        var e = c()(s.a.mark(function e() {
                                            return s.a.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    if (!x.a.getSubscribeForDaysStatus()) {
                                                        e.next = 3;
                                                        break;
                                                    }
                                                    return e.next = 3, x.a.requestSubscribeMessageDMC("qj_dianjisaoma", "wxScan");

                                                  case 3:
                                                    t.sureClick = !0, w.j.$nextTick(w.i);

                                                  case 5:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }));
                                        return function() {
                                            return e.apply(this, arguments);
                                        };
                                    }(), i && i.type && p()(D).call(D, i.type) > -1 ? t.ActionCard() : a();
                                } catch (t) {
                                    console.log(t);
                                }

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                initActionCard(t) {
                    this.ActionCard = t.detail.ActionCard;
                },
                handleCardInfo() {
                    var t = this;
                    return c()(s.a.mark(function e() {
                        var n, i, c, a, r, o;
                        return s.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (n = t.interceptInfo, i = n.type, c = n.popupWindow, a = {}, e.prev = 2, 1 !== i) {
                                    e.next = 8;
                                    break;
                                }
                                a = y.a, C.a.track("bike_home_function_info_sw", {
                                    source: 1,
                                    type: t.getEventType()
                                }), e.next = 21;
                                break;

                              case 8:
                                if (2 !== i) {
                                    e.next = 20;
                                    break;
                                }
                                return r = {
                                    btnText: "我知道了",
                                    title: c.title || "",
                                    desc: c.content || "",
                                    action: function() {
                                        Object(j.navigateBack)(11);
                                    }
                                }, e.next = 12, Object(y.d)().catch(function(t) {
                                    console.log(t);
                                });

                              case 12:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 15;
                                    break;
                                }
                                e.t0 = r;

                              case 15:
                                3 === (o = e.t0).type ? ((a = o).btnText = "我知道了", a.action = function() {
                                    Object(j.navigateBack)(11);
                                }) : a = 4 === o.type ? o : r, a && C.a.track("bike_home_function_info_sw", {
                                    source: 1,
                                    type: t.getEventType()
                                }), e.next = 21;
                                break;

                              case 20:
                                t.getCmsCardInfo();

                              case 21:
                                t.cardInfo = a, e.next = 27;
                                break;

                              case 24:
                                e.prev = 24, e.t1 = e.catch(2), console.log(e.t1);

                              case 27:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 2, 24 ] ]);
                    }))();
                },
                getCmsCardInfo() {
                    var t = this;
                    return c()(s.a.mark(function e() {
                        var n, i, c, a, o, d;
                        return s.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n = new Date().getTime(), e.next = 3, Object(T.marketingSpotLogin)({
                                    marketingSpotId: "bike-unlocked-intercept-card",
                                    extra: h()({
                                        mac: Object(v.M)()
                                    })
                                }).catch(function(t) {
                                    console.log("获取资源位失败", t);
                                });

                              case 3:
                                if (i = e.sent) {
                                    e.next = 6;
                                    break;
                                }
                                return e.abrupt("return");

                              case 6:
                                if (c = {
                                    load_time: new Date().getTime() - n,
                                    result: i
                                }, C.a.track("tech_qj_wx_initpage_flow_sw", c), a = {
                                    biz_content: i.bizContent && i.bizContent[0],
                                    layout_id: i.layoutId,
                                    frame: 1,
                                    spot_id: "bike-unlocked-intercept-card"
                                }, C.a.track("phpub_cms_view_sw", r()(r()({}, c), a)), i && i.variantInfo && i.layoutId) {
                                    o = JSON.parse(i.variantInfo), t.cmsCardInfo = {
                                        title: o.title,
                                        desc: "".concat(o.subtitle),
                                        btnText: o.btnTitle,
                                        bizContent: i.bizContent,
                                        type: t.getEventType(),
                                        action: function() {
                                            var t = o.linkType, e = o.jumpLink, n = o.appId, c = void 0 === n ? "" : n, r = o.path, s = void 0 === r ? "" : r;
                                            try {
                                                i.thirdTrackings && Object(S.a)("阿土页跳转miaozhen", i.thirdTrackings, o.campaignUnitId, "miaozhen", "click");
                                            } catch (t) {
                                                console.log(t, "阿土页跳转");
                                            }
                                            if (1 == +t) {
                                                var d;
                                                if (p()(d = o.jumpLink).call(d, "http://schema.unlock.ebike") > -1) return void Object(L.c)({}, 6);
                                                Object(j.navigateTo)(A.e, {
                                                    url: e
                                                });
                                            } else 4 == +t ? Object(j.navigateTo)(e) : 2 == +t && (a.action = "wxpopupsw", a.element_id = "", 
                                            C.a.track("phpub_cms_view_ck", a), wx.navigateToMiniProgram({
                                                appId: c,
                                                path: s,
                                                envVersion: "release",
                                                success: function() {
                                                    a.action = "wxpopupck", C.a.track("phpub_cms_view_ck", a);
                                                },
                                                fail: function(t) {
                                                    a.action = "wxpopupcance", C.a.track("phpub_cms_view_ck", a);
                                                }
                                            }));
                                        }
                                    }, d = {
                                        source: 1,
                                        type: t.getEventType(),
                                        bizContent: i.bizContent
                                    }, C.a.track("bike_home_function_info_sw", d), C.a.track("phpub_cms_view_sw", r()(r()({}, d), a));
                                    try {
                                        i.thirdTrackings && Object(S.a)("阿土页miaozhen展示", i.thirdTrackings, o.campaignUnitId, "miaozhen", "show"), 
                                        i.thirdTrackings && Object(S.a)("阿土页cms展示", i.thirdTrackings, o.campaignUnitId, "cms", "show");
                                    } catch (t) {
                                        console.log(t, "阿土页miaozhen展示");
                                    }
                                }

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                setTitle() {
                    this.interceptInfo && 1 === this.interceptInfo.type && Object(j.setNav)("登录");
                }
            },
            onUnload() {
                I.a.getters.andriodDridectStatus && !E && (console.log("阿土页销毁、停止搜素"), wx.stopBluetoothDevicesDiscovery()), 
                this.sureClick || w.j.$backTick(w.i);
            },
            onHide() {}
        });
    }
}, [ [ 1052, 0 ] ] ]);
//# sourceMappingURL=bike_home_intercept.js.map