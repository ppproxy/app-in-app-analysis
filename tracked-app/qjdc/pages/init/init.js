var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 167 ], {
    1047: function(e, t, n) {
        "use strict";
        n.r(t), function(e) {
            e.currentModuleId = "m71ad8696", e.currentCtor = Component, e.currentResourceType = "page", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "m71ad8696",
                render: function() {
                    this._c("loading", this.loading) && (this._c("isPrivacy", this.isPrivacy) && (this._c("interceptSwitch", this.interceptSwitch) || (this._c("isScan", this.isScan) ? this._c("iconImages.bikeLoading", this.iconImages.bikeLoading) : (this._c("showPopupWindow", this.showPopupWindow), 
                    this._c("grayScale", this.grayScale), this._c("bgColor", this.bgColor), this._c("activityStyle", this.activityStyle), 
                    this._c("boxList", this.boxList), this._c("tracker", this.tracker), this._c("isActivity", this.isActivity) && this._c("clickHeight", this.clickHeight), 
                    this._c("useBikeStyle", this.useBikeStyle), this._c("isLogin", this.isLogin), this._c("msgFlowOption", this.msgFlowOption), 
                    this._c("useBikeOption", this.useBikeOption), this._c("tracker", this.tracker), 
                    this._c("showBenefit", this.showBenefit) && (this._c("isLogin", this.isLogin), this._c("isScan", this.isScan), 
                    this._c("benefitTxt", this.benefitTxt), this._c("benefitBizContent", this.benefitBizContent), 
                    this._c("tracker", this.tracker)), this._c("loadMoudle", this.loadMoudle) && (this._c("tracker.source", this.tracker.source), 
                    this._c("tracker.sourcetype", this.tracker.sourcetype)), this._c("topAd", this.topAd) && this._c("adReload", this.adReload) && this._c("layoutId", this.layoutId), 
                    this._c("adReload", this.adReload), this._c("tracker", this.tracker), this._c("activeInfo", this.activeInfo), 
                    this._c("bottomAd", this.bottomAd), "loading" === this._c("loading", this.loading) || this._c("loading", this.loading), 
                    this._c("renderMarketing", this.renderMarketing) && this._c("popupNeedInfo", this.popupNeedInfo), 
                    this._c("user.agreeInsuranceProtocol", this.user.agreeInsuranceProtocol) || this._c("insuranceProtocolNote", this.insuranceProtocolNote), 
                    this._c("envVersion", this.envVersion) && this._c("buildEnv", this.buildEnv), this._c("toast", this.toast), 
                    this._c("messageBoxOptions", this.messageBoxOptions), this._c("ddCardDlgData", this.ddCardDlgData), 
                    this._c("isShowPopupConfirm", this.isShowPopupConfirm) && this._c("popModelData", this.popModelData)))), 
                    this._c("isPrivacy", this.isPrivacy)), this._r();
                }
            }, e.currentInject.getRefsData = function() {
                return [ {
                    key: "ddCardDlgRef",
                    selector: ".ref_ddCardDlgRef_1",
                    type: "component",
                    all: !1
                } ];
            };
            n(389);
            e.currentModuleId;
        }.call(this, n(11));
    },
    1051: function(e, t, n) {
        e.exports = "/subpackages/commonProcess/config/config";
    },
    316: function(e, t, n) {
        "use strict";
        var r = n(3), a = n.n(r), i = n(0), c = n.n(i), o = n(104);
        function s() {
            return (s = a()(c.a.mark(function e() {
                return c.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        try {
                            Object(o.c)({
                                scenes: "qj_liebian1,qj_liebian2,qj_liebian3,qj_bcliandong,qj_fulizhongxin,qj_baoxiu,qj_dianjisaoma,qj_guansuochenggong,qj_linshisuoche,qj_renzheng,qj_chongdan,qj_chongfenri,qj_renwu,qj_daxingyingxiaohuodong,qj_qixingka,qj_manghe,qj_fulizhonxinmiaosha,qj_richangmiaosha,qj_kaisuotanchuang1",
                                srvno: "htw",
                                success() {
                                    console.log("初始化模版信息成功");
                                },
                                fail(e) {
                                    console.log(e);
                                }
                            });
                        } catch (e) {
                            console.log("error:", e);
                        }

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))).apply(this, arguments);
        }
        t.a = function() {
            return s.apply(this, arguments);
        };
    },
    317: function(e, t, n) {
        "use strict";
        var r = n(3), a = n.n(r), i = n(0), c = n.n(i), o = n(142), s = n(36), h = n(2), u = n(54);
        function l() {
            return (l = a()(c.a.mark(function e() {
                return c.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        try {
                            h.d.use(o.a, {
                                usePromise: !0,
                                optimize: !0
                            }).use(function(e) {
                                e.injectMixins(s.Omega.trackApp({
                                    appId: u.a.appid,
                                    patchReport: !0,
                                    patchCount: 10,
                                    patchInterval: 1e4,
                                    autoLocation: !0
                                }), "app").injectMixins(s.Omega.trackPage(), "page");
                            });
                        } catch (e) {
                            console.log(e);
                        }

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))).apply(this, arguments);
        }
        t.a = function() {
            return l.apply(this, arguments);
        };
    },
    389: function(e, t, n) {
        "use strict";
        (function(e) {
            var t = n(70), r = n.n(t), a = n(3), i = n.n(a), c = n(1), o = n.n(c), s = n(14), h = n.n(s), u = n(13), l = n.n(u), d = n(6), p = n.n(d), g = n(44), f = n.n(g), _ = n(0), m = n.n(_), b = n(2), k = n(7), v = n.n(k), w = n(63), y = n(4), x = n(5), I = n(304), S = n.n(I), O = (n(34), 
            n(16)), j = n(97), C = n(199), P = n.n(C), T = n(60), B = n(93), E = n(9), N = n(55), A = n(32), F = n(78), q = n(151), D = n(130), L = n(8), R = n(85), M = n(121), U = n(69), H = n(30), V = n(217), z = n(94), J = n(15), G = n(259), W = n(154), X = n(316), $ = n(317), K = n(36), Q = n(737), Y = n(39), Z = n(84), ee = {};
            Object(b.c)({
                mixins: [ G.a ],
                data: {
                    loading: !1,
                    interceptSwitch: !1,
                    popModelData: {
                        imgSrc: "",
                        vehicleCategoryJumpUrl: "",
                        btnType: 0
                    },
                    isShowPopupConfirm: !1,
                    showBenefit: "",
                    envVersion: "",
                    benefitTxt: "",
                    benefitBizContent: "",
                    renderMarketing: !1,
                    showPopupWindow: !1,
                    activeHeight: null,
                    loadMoudle: !1,
                    titleBar: "opacity:0;",
                    grayScale: !1,
                    buildEnv: "PRD",
                    oid: "",
                    activityStyle: "",
                    adReload: !0,
                    adRefresh: !1,
                    insuranceProtocolNote: "",
                    toast: {
                        msg: "",
                        type: "warn",
                        open: !1
                    },
                    topStyle: "",
                    clickHeight: 0,
                    isActivity: !1,
                    scanUrl: "",
                    bikeNum: "",
                    bFirstEnter: !0,
                    isScan: !1,
                    isScanShow: !1,
                    msgFlowOption: {},
                    useBikeOption: {
                        isShowFunctional: !0
                    },
                    messageBoxOptions: {
                        type: 0,
                        bShow: !1,
                        title: "提示",
                        content: "",
                        showCancel: !0,
                        cancelText: "取消",
                        confirmText: "确定",
                        confirmCallback: null,
                        cancelCallback: null
                    },
                    otherPlatformParams: {},
                    isBadDebtPaied: !1,
                    topBannerInfo: {},
                    boxList: [],
                    isScrollTracker: !1,
                    bgColor: "",
                    iconImages: {
                        bikeLoading: "https://pt-starimg.didistatic.com/static/starimg/img/VIod696ck61621587290332.gif"
                    },
                    bottomAd: "",
                    layoutId: "",
                    topAd: !1,
                    userStatusInfo: {},
                    tracker: {},
                    botBanner: [],
                    exposure: {
                        "h5-home-bottom-banner": !1,
                        "h5-activity-center-banner": !1
                    },
                    botInfo: null,
                    activeInfo: {
                        botInfo: {},
                        msgInfo: {},
                        msgBanner: [],
                        botBanner: [],
                        exposure: {
                            "h5-home-bottom-banner": !1,
                            "h5-activity-center-banner": !1
                        }
                    },
                    isPrivacy: !1,
                    useCustomDisagree: !0,
                    options: null,
                    isDiDi: !1,
                    getUserCityIdFirst: !0
                },
                computed: o()(o()(o()({}, x.a.mapState([ "user", "location", "bike", "common", "ebike" ])), x.a.mapGetters([ "loading" ])), {}, {
                    isLogin() {
                        return !!this.user.token;
                    },
                    popupNeedInfo() {
                        return {
                            isScan: this.isScan,
                            isLogin: this.isLogin
                        };
                    },
                    source() {
                        return this.isScan ? 1 : 0;
                    },
                    useBikeStyle() {
                        return "margin-top: -112rpx;";
                    },
                    ddCardDlgData() {
                        return this.user.didiCardInfo || {};
                    }
                }),
                methods: o()(o()({}, x.a.mapActions([ "getUserCityId", "canUnlockVehicle", "canUnlockVehicleFullplatform", "setApolloConfig", "queryApolloConfig", "queryUserInfoAction", "setDidiCardInfo" ])), {}, {
                    yangliuIntercept() {
                        var e = this;
                        return i()(m.a.mark(function t() {
                            var n, r;
                            return m.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = "hm_yangliu_search_switch", t.next = 4, e.queryApolloConfig([ n ]).catch(function(e) {
                                        console.log(e);
                                    });

                                  case 4:
                                    r = t.sent, console.log(e.isScan, "========"), r && r[n] && (console.log("不是滴滴的环境"), 
                                    e.isScan ? e.interceptSwitch = !1 : e.interceptSwitch = !0);

                                  case 7:
                                    return t.abrupt("return", e.interceptSwitch);

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    closePopupConfirm() {
                        this.isShowPopupConfirm = !1;
                    },
                    showInitPagePop(e) {
                        var t = e.detail.showInitPagePop;
                        this.showPopupWindow = t, this.renderMarketing = t;
                    },
                    getGrayScale() {
                        this.grayScale = v()(x.a, "getters.homepageGrey", !1);
                    },
                    toConfig() {
                        var e = this;
                        return i()(m.a.mark(function t() {
                            var r, a;
                            return m.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (r = {}, t.prev = 1, !e.isLogin) {
                                        t.next = 10;
                                        break;
                                    }
                                    return t.next = 5, Object(O.orderRecover)().catch(function(e) {
                                        return console.log(e);
                                    });

                                  case 5:
                                    if (t.t0 = t.sent, t.t0) {
                                        t.next = 8;
                                        break;
                                    }
                                    t.t0 = {};

                                  case 8:
                                    a = t.t0, r.orderId = a.orderIdStr;

                                  case 10:
                                    t.next = 14;
                                    break;

                                  case 12:
                                    t.prev = 12, t.t1 = t.catch(1);

                                  case 14:
                                    return t.prev = 14, Object(E.redirectTo)(n(1051), r), t.finish(14);

                                  case 17:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 1, 12, 14, 17 ] ]);
                        }))();
                    },
                    checkProtocol() {
                        var e = arguments, t = this;
                        return i()(m.a.mark(function n() {
                            var r;
                            return m.a.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    r = e.length > 0 && void 0 !== e[0] ? e[0] : {};
                                    try {
                                        r.haveReadInsuranceProtocolNote && (y.a.track("bike_home_insure_sw", {
                                            source: t.isScan ? 1 : 0
                                        }), t.insuranceProtocolNote = r.haveReadInsuranceProtocolNote, x.a.commit(T.c, {
                                            insuranceProtocolNote: r.haveReadInsuranceProtocolNote
                                        }));
                                    } catch (e) {
                                        console.log(e);
                                    }

                                  case 2:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    loadUserInfo() {
                        var e = this;
                        return i()(m.a.mark(function t() {
                            return m.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, e.queryUserInfoAction().catch(function() {});

                                  case 3:
                                    e.userStatusInfo = t.sent, e.userStatusInfo && e.checkProtocol(e.userStatusInfo.userAuthResult), 
                                    t.next = 10;
                                    break;

                                  case 7:
                                    t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);

                                  case 10:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 7 ] ]);
                        }))();
                    },
                    goPersonCenter() {
                        try {
                            y.a.track("qj_wx_homepage_my_ck", this.tracker), this.isLogin ? Object(E.navigateTo)(J.l) : this.toLogin();
                        } catch (e) {
                            console.log(e);
                        }
                    },
                    toLogin() {
                        Object(j.d)(this, ee);
                    },
                    getMsgFlowInfo() {
                        var e = this;
                        return i()(m.a.mark(function t() {
                            var n, a, i, c, o, s, u, l, d, p, g, f, _, b;
                            return m.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = {}, t.prev = 1, t.next = 4, Object(q.c)({
                                        hasStimulate: !0
                                    });

                                  case 4:
                                    a = t.sent, c = (i = a || {}).stimulate, o = i.btnText, s = i.desc, u = i.action, 
                                    l = i.sceneType, d = i.list, p = void 0 === d ? [] : d, g = i.type, e.msgFlowResult = !c && a, 
                                    f = {
                                        default: 1,
                                        "领任务": 0,
                                        "领奖励": 2,
                                        "领取成功": 3
                                    }, a && (b = c ? p : [ {
                                        desc: s,
                                        btnText: o,
                                        action: u,
                                        sceneType: l
                                    } ], e.bFirstEnter && h()(_ = r()(q.b)).call(_, g) > -1 && !e.isScan && !e.otherPlatformParams.phone && u(), 
                                    n = {
                                        msgList: b,
                                        stimulate: c,
                                        tapAction: function(t) {
                                            var n = b[t] || {};
                                            !c && e.trackEvent("qj_wx_homepage_message_ck", {
                                                type: n.sceneType,
                                                task_id: a.assignId,
                                                task_childid: a.subAssignId
                                            }), c && e.trackEvent("qj_wx_homepage_inspireinfo_ck", {
                                                type: n.sceneType,
                                                content: n.content,
                                                task_id: n.task_id,
                                                task_childid: n.task_childid
                                            }), e.trackEvent("qj_wx_taskbtn_ck", {
                                                task_id: a.assignId || n.task_id,
                                                task_childid: a.subAssignId || n.task_childid,
                                                btn_type: f[n.btnText || "default"] || 1,
                                                frame: 1,
                                                sw_origin: 1
                                            }), n.action && n.action();
                                        }
                                    }, b.forEach(function(t, n) {
                                        !c && e.trackEvent("qj_wx_homepage_message_sw", {
                                            type: t.sceneType,
                                            task_id: a.assignId,
                                            task_childid: a.subAssignId
                                        }), c && e.trackEvent("qj_wx_homepage_inspireinfo_sw", {
                                            type: t.sceneType,
                                            content: t.content,
                                            task_id: t.task_id,
                                            task_childid: t.task_childid
                                        }), e.trackEvent("qj_wx_task_sw", {
                                            task_id: a.assignId || t.task_id,
                                            task_childid: a.subAssignId || t.task_childid,
                                            btn_type: f[t.btnText || "default"] || 1,
                                            frame: 1,
                                            sw_origin: 1
                                        });
                                    })), t.next = 13;
                                    break;

                                  case 11:
                                    t.prev = 11, t.t0 = t.catch(1);

                                  case 13:
                                    return t.prev = 13, e.bFirstEnter = !1, e.msgFlowOption = n, H.a.once("homeTask", function(t) {
                                        console.log("info: ", t), n.msgList && (n.msgList[0].btnText = t.btnText), e.msgFlowOption = n;
                                    }), t.finish(13);

                                  case 18:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 1, 11, 13, 18 ] ]);
                        }))();
                    },
                    getUseBikeInfo() {
                        var e = this;
                        return i()(m.a.mark(function t() {
                            var n, r, a;
                            return m.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (e.isLogin) {
                                        t.next = 3;
                                        break;
                                    }
                                    return e.useBikeOption = {
                                        isShowFunctional: !0
                                    }, t.abrupt("return");

                                  case 3:
                                    return t.prev = 3, t.next = 6, Object(O.queryFindingBikePageInfo)({
                                        lng: e.location.longitude,
                                        lat: e.location.latitude
                                    });

                                  case 6:
                                    (n = t.sent) ? (r = n.htwVehicleNum, a = n.bhVehicleNum, e.useBikeOption = {
                                        htwVehicleNum: r,
                                        bhVehicleNum: a,
                                        desc: n.desc,
                                        list: n.extraFuncInfoList || [],
                                        isShowFunctional: n.extraFuncInfoList && n.extraFuncInfoList.length > 0
                                    }, e.trackEvent("qj_wx_homepage_searchbike_sw", {
                                        is_havecar: a + r > 0 ? 1 : 0
                                    }), n.extraFuncInfoList && n.extraFuncInfoList.forEach(function(t, n) {
                                        n <= 3 && e.trackEvent("qj_wx_homepage_function_sw", {
                                            content: t.iconDesc,
                                            order: n
                                        });
                                    })) : e.useBikeOption.isShowFunctional = !1, t.next = 14;
                                    break;

                                  case 10:
                                    t.prev = 10, t.t0 = t.catch(3), console.log(t.t0), e.useBikeOption.isShowFunctional = !1;

                                  case 14:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 3, 10 ] ]);
                        }))();
                    },
                    getHeight() {
                        var e = this;
                        return i()(m.a.mark(function t() {
                            var n;
                            return m.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    try {
                                        e.topStyle = "padding-top: ".concat(2 * Object(L.h)().top, "rpx; padding-bottom: 60rpx;"), 
                                        n = 720 + Object(L.m)(), A.a.getRect("boxArea", e).then(function(t) {
                                            e.clickHeight = n - 180 - t.height - 112;
                                        });
                                    } catch (e) {
                                        console.log(e);
                                    }

                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    goActivity() {
                        Object(L.H)({
                            type: "cms",
                            data: this.topBannerInfo,
                            index: 0,
                            tracker: this.tracker
                        }), Object(L.N)("h5-home-top-banner", "ck");
                    },
                    waitGetDidiCard() {
                        var e = this;
                        return i()(m.a.mark(function t() {
                            var n;
                            return m.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, Object(O.getDidiCardStatus)({
                                        uid: e.user.uid || "",
                                        cityId: e.location.cityId || ""
                                    }).catch(function() {
                                        e.setDidiCardInfo({});
                                    });

                                  case 2:
                                    n = t.sent, e.setDidiCardInfo(n);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    scan() {
                        var e = this;
                        return i()(m.a.mark(function t() {
                            var n, r, a, i, c, o, s, h;
                            return m.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (e.isScan = !1, t.prev = 1, !N.a.getSubscribeForDaysStatus()) {
                                        t.next = 12;
                                        break;
                                    }
                                    return t.prev = 3, n = e.isScan ? "wxScan" : "initScan", t.next = 7, N.a.requestSubscribeMessageDMC("qj_dianjisaoma", n);

                                  case 7:
                                    t.next = 12;
                                    break;

                                  case 9:
                                    t.prev = 9, t.t0 = t.catch(3), console.log(t.t0);

                                  case 12:
                                    if (x.a.commit(B.b, {
                                        appointment: !1
                                    }), r = e.user, a = r.ageLessThan12, i = r.certStatus, c = r.ageLessThan12Toast, 
                                    0 !== i || !a) {
                                        t.next = 20;
                                        break;
                                    }
                                    return o = {
                                        title: "提示",
                                        content: c || "根据法律规定，您未满12周岁不能使用共享单车",
                                        confirmText: "我知道了",
                                        confirmColor: "#FF8037",
                                        showCancel: !1,
                                        success: function(e) {}
                                    }, wx.showModal(o), y.a.track("bike_home_function_alert_sw", {
                                        type: 2
                                    }), t.abrupt("return");

                                  case 20:
                                    if (3 !== e.user.banStatus) {
                                        t.next = 25;
                                        break;
                                    }
                                    return e.trackEvent("qj_bike_scan_disable_sw"), e.trackEvent("bike_scan_error_sw", {
                                        type: 1
                                    }), ee.show(e.user.banNotes || "当前账号被限制/冻结， 无法用车"), t.abrupt("return");

                                  case 25:
                                    return e.trackEvent("tech_qj_new_home_can_ck", {
                                        msgFlowResult: e.msgFlowResult
                                    }), t.next = 28, Object(q.f)({
                                        mBox: e.mBox,
                                        msgFlowResult: e.msgFlowResult
                                    }).catch(function(e) {
                                        console.log("信息流check报错", e);
                                    });

                                  case 28:
                                    if (!1 !== (s = t.sent) && null !== s) {
                                        t.next = 32;
                                        break;
                                    }
                                    return e.msgFlowResult = {}, t.abrupt("return");

                                  case 32:
                                    if (!e.user.uid) {
                                        t.next = 38;
                                        break;
                                    }
                                    return h = !1, t.next = 36, e.waitGetDidiCard().finally(function() {
                                        var t = e.$refs && e.$refs.ddCardDlgRef;
                                        e.user.didiCardInfo && e.user.didiCardInfo.shouldIntercept && t && (e.$refs.ddCardDlgRef.show(), 
                                        h = !0);
                                    });

                                  case 36:
                                    if (!h) {
                                        t.next = 38;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 38:
                                    e.isScanShow = !0, Object(F.c)(e, 2), t.next = 45;
                                    break;

                                  case 42:
                                    t.prev = 42, t.t1 = t.catch(1), console.log(t.t1);

                                  case 45:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 1, 42 ], [ 3, 9 ] ]);
                        }))();
                    },
                    goOnScan() {
                        this.isScanShow = !0, Object(F.c)(this, 2);
                    },
                    trackEvent(e, t) {
                        y.a.track(e, o()(o()({}, t), this.tracker));
                    },
                    jumpToH5ByScan(e) {
                        if (!e) return !1;
                        var t = Object(L.k)(decodeURIComponent(e));
                        if (t.url) {
                            var n = t.url, r = t.needLogin, a = {
                                url: decodeURIComponent(n)
                            };
                            return "false" === r && (a.noNeedParams = !0), Object(E.navigateTo)(J.e, a), !0;
                        }
                        if (t.nativeurl) {
                            var i = t.nativeurl;
                            return Object(E.navigateTo)("".concat(decodeURIComponent(i)), t), !0;
                        }
                        return !1;
                    },
                    otherPlatformForPay() {
                        var e = this;
                        return i()(m.a.mark(function t() {
                            var n, r, a;
                            return m.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (t.prev = 0, r = (n = e).otherPlatformParams.phone, a = n.otherPlatformParams.orderID, 
                                    !r || !a) {
                                        t.next = 17;
                                        break;
                                    }
                                    if (r !== x.a.state.user.phone) {
                                        t.next = 9;
                                        break;
                                    }
                                    Object(R.b)({
                                        orderIdStr: a,
                                        bizType: 1
                                    }, {}, {
                                        text: "未支付",
                                        url: J.p
                                    }, n, "otherPlatform"), t.next = 14;
                                    break;

                                  case 9:
                                    return t.next = 11, e.mBox.alert("当前登入的账号与尾号".concat(r.substr(r.length - 4), "账号不一致，请重新登入"), "账号提示", "重新登入");

                                  case 11:
                                    x.a.dispatch("logout"), M.a.setConfig({
                                        phone: r
                                    }), Object(j.d)(n, ee);

                                  case 14:
                                    return t.abrupt("return", !0);

                                  case 17:
                                    return t.abrupt("return", !1);

                                  case 18:
                                    t.next = 23;
                                    break;

                                  case 20:
                                    t.prev = 20, t.t0 = t.catch(0), console.log(t.t0);

                                  case 23:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 20 ] ]);
                        }))();
                    },
                    getMarketing() {
                        var e = this;
                        return i()(m.a.mark(function t() {
                            var n, r, a, i, c, o, s, h, u, d, g, f, _;
                            return m.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, i = "h5-home-entry-txt", s = [ r = "h5-home-top-banner", a = "h5-home-weixin-ads", c = "h5-home-bottom-banner", o = "h5-activity-center-banner" ], 
                                    "benefit_center_switch", t.next = 10, e.queryApolloConfig([ "benefit_center_switch" ]).catch(function(e) {
                                        console.log(e);
                                    });

                                  case 10:
                                    return h = t.sent, u = h.benefit_center_switch, d = void 0 !== u && u, e.showBenefit = d, 
                                    e.showBenefit && (s.push(i), e.trackEvent("qj_wx_homepage_benefitenter_sw")), t.next = 17, 
                                    Object(L.d)({
                                        type: "cms",
                                        marketingSpotIds: s,
                                        frame: [ 1, 1, 9, 9 ],
                                        tracker: e.tracker,
                                        extra: l()({
                                            mac: Object(L.M)()
                                        })
                                    });

                                  case 17:
                                    g = t.sent, e.activityStyle += p()(n = "padding-top:".concat(170 + Object(L.m)(), "rpx; height: ")).call(n, 460 + Object(L.m)(), "rpx;"), 
                                    f = {
                                        H5_HOME_TOP_BANNER: r,
                                        H5_HOME_WEIXIN_ADS: a,
                                        FLOW_BENEFIT_BANNER: i
                                    }, e.handleOriginContent(g, f), _ = {
                                        ACTIVE_CENTER_BANNER: o,
                                        HOME_BOTTOM_BANNER: c
                                    }, e.handleActiveCenter(g, _), t.next = 28;
                                    break;

                                  case 25:
                                    t.prev = 25, t.t0 = t.catch(0), console.log("首页cms资源位请求出错", t.t0);

                                  case 28:
                                    return t.prev = 28, e.getHeight(), t.finish(28);

                                  case 31:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 25, 28, 31 ] ]);
                        }))();
                    },
                    handleOriginContent(e, t) {
                        try {
                            var n = t.H5_HOME_TOP_BANNER, r = t.H5_HOME_WEIXIN_ADS, a = t.FLOW_BENEFIT_BANNER;
                            if (e && Object.keys(e.get(n)).length) {
                                var i, c, o = e.get(n), s = o.img, h = o.imgXdpi;
                                this.isActivity = !0, Object(L.m)() >= 30 ? this.activityStyle += p()(i = "height: ".concat(720 + Object(L.m)(), "rpx; background: url(")).call(i, h, ") no-repeat top center / 100% auto") : this.activityStyle += p()(c = "height: ".concat(720 + Object(L.m)(), "rpx; background: url(")).call(c, s, ") no-repeat top center / 100% auto"), 
                                this.getHeight(), this.topBannerInfo = e.get(n + "_data"), Object(L.N)(n, "sw");
                            }
                            if (e && Object.keys(e.get(r)).length && (this.topAd = e.get(r).adEnable, this.layoutId = e.get(r + "_data").layoutId, 
                            e.get(r).adEnable && this.trackEvent("qj_wx_homepage_ad_sw")), this.showBenefit && e && Object.keys(e.get(a + "_data")).length) {
                                var u = e.get(a + "_data"), l = u.variantInfo, d = u.bizContent;
                                this.benefitTxt = l && JSON.parse(l) && JSON.parse(l).txt, this.benefitBizContent = d && d[0];
                            }
                        } catch (e) {
                            console.log(e, "出错了");
                        }
                    },
                    handleActiveCenter(e, t) {
                        try {
                            var n = t.ACTIVE_CENTER_BANNER, r = t.HOME_BOTTOM_BANNER;
                            if (e && e.get(r) && (this.exposure[r] = !1, this.botInfo = e.get("".concat(r, "_data")), 
                            this.botBanner = e.get(r)), this.activeInfo = o()(o()({}, this.activeInfo), {
                                exposure: this.exposure,
                                botInfo: this.botInfo,
                                botBanner: this.botBanner
                            }), e && e.get(n)) {
                                this.exposure[n] = [];
                                var a = Array.isArray(e.get(n)) ? e.get(n) : [ e.get(n) ], i = e.get("".concat(n, "_data"));
                                if (a = f()(a).call(a, function(e) {
                                    return "false" !== e.AdEnable && e.campaignId;
                                }), this.bottomAd = e.get("".concat(n, "_data")) && e.get("".concat(n, "_data")).layoutId || "wechat:ad:banner", 
                                this.activeInfo = o()(o()({}, this.activeInfo), {
                                    msgInfo: i,
                                    msgBanner: a,
                                    exposure: this.exposure
                                }), this.activeInfo.msgBanner.length && !this.isScan) {
                                    var c = i.variantInfo && JSON.parse(i.variantInfo) || [];
                                    try {
                                        c.length && c.forEach(function(e) {
                                            i.thirdTrackings && Object(z.a)("活动中心miaozhen加秒针", i.thirdTrackings, e.campaignUnitId, "miaozhen", "show"), 
                                            i.thirdTrackings && Object(z.a)("活动中心cms加秒针", i.thirdTrackings, e.campaignUnitId, "cms", "show");
                                        });
                                    } catch (e) {
                                        console.log(e, "活动中心miaozhen加秒针");
                                    }
                                }
                                Object(L.N)(n, "sw");
                            }
                        } catch (e) {
                            console.log(e, "出错了");
                        }
                    },
                    getFlowCenter() {
                        var e = this;
                        return i()(m.a.mark(function t() {
                            var n, r;
                            return m.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, n = "hm-top-balls-banner", t.t1 = L.d, t.t2 = [ n ], t.t3 = l.a, 
                                    t.next = 7, Object(L.l)();

                                  case 7:
                                    return t.t4 = t.sent, t.t5 = {
                                        wxSdkVersion: t.t4
                                    }, t.t6 = (0, t.t3)(t.t5), t.t7 = {
                                        type: "flow",
                                        marketingSpotIds: t.t2,
                                        extra: t.t6
                                    }, t.next = 13, (0, t.t1)(t.t7);

                                  case 13:
                                    if (t.t0 = t.sent, t.t0) {
                                        t.next = 16;
                                        break;
                                    }
                                    t.t0 = {};

                                  case 16:
                                    if (r = t.t0, Object.keys(r).length) {
                                        t.next = 19;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 19:
                                    e.boxList = r.frames, Object(L.N)(n, "sw"), t.next = 26;
                                    break;

                                  case 23:
                                    t.prev = 23, t.t8 = t.catch(0), console.log("流量中心球区请求错误", t.t8);

                                  case 26:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 23 ] ]);
                        }))();
                    },
                    reloadInit() {
                        try {
                            this.isScan = !1, this.bFirstEnter = !1;
                        } catch (e) {
                            y.a.track("tech_bike_crux_interface_error", {
                                msg: "reloadInitError"
                            });
                        }
                    },
                    getOnLoad(t) {
                        var n = this;
                        return i()(m.a.mark(function r() {
                            var a, i, c, o, s;
                            return m.a.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    try {
                                        t.alone && (n.trackEvent("tech_qj_wx_blank_scan", {
                                            type: 1
                                        }), Object(F.c)(n)), n.envVersion = "release" !== __wxConfig.envVersion;
                                    } catch (e) {
                                        console.log("init error", e), n.trackEvent("tech_qj_wx_blank_scan", {
                                            type: 2,
                                            err: e
                                        });
                                    }
                                    return r.prev = 1, n.beginTime = new Date().getTime(), ee = new w.a({
                                        context: n.toast
                                    }), n.scanUrl = t.q, a = n.jumpToH5ByScan(n.scanUrl) || !1, n.isScan = !!n.scanUrl && !a, 
                                    r.prev = 7, r.next = 10, n.yangliuIntercept();

                                  case 10:
                                    if (!r.sent) {
                                        r.next = 13;
                                        break;
                                    }
                                    return r.abrupt("return");

                                  case 13:
                                    r.next = 18;
                                    break;

                                  case 15:
                                    r.prev = 15, r.t0 = r.catch(7), console.log(r.t0, "error");

                                  case 18:
                                    return n.user.introChannel = n.scanUrl ? "scanOpen" : "commonOpen", n.buildEnv = P.a, 
                                    n.mBox = new D.a(n.messageBoxOptions), r.next = 23, n.getUserCityId(!n.getUserCityIdFirst).catch(function(e) {
                                        n.trackEvent("tech_bike_crux_interface_error", {
                                            error: e,
                                            msg: "获取定位报错"
                                        });
                                    }).finally(function(e) {
                                        n.getUserCityIdFirst = !1;
                                    });

                                  case 23:
                                    t.phoneNum && t.oid && (i = new e(t.oid, "base64"), c = new e(i.toString(), "base64"), 
                                    t.oid = c.toString(), Object(L.u)("oid", t.oid), n.oid = t.oid, n.otherPlatformParams = {
                                        phone: t.phoneNum,
                                        orderID: t.oid
                                    }, n.otherPlatformForPay(), H.a.once(U.b, function(e) {
                                        Object(L.u)("BAD_SUCCESS", e), n.isBadDebtPaied = !0;
                                    }), Object(L.u)("其它平台坏账参数", n.otherPlatformParams)), n.isLogin && Object(O.sendMsgInfo)({
                                        usingType: 4,
                                        channel: "h5"
                                    }), r.next = 29;
                                    break;

                                  case 27:
                                    r.prev = 27, r.t1 = r.catch(1);

                                  case 29:
                                    return r.prev = 29, o = !1, r.next = 34, x.a.dispatch("getOpenId").catch(function(e) {
                                        y.a.track("tech_bike_crux_interface_error", {
                                            error: e,
                                            msg: "登录获取openID报错"
                                        });
                                    });

                                  case 34:
                                    return r.next = 36, Object(j.a)().catch(function(e) {
                                        y.a.track("tech_bike_crux_interface_error", {
                                            error: e,
                                            msg: "登录check报错"
                                        });
                                    });

                                  case 36:
                                    return r.next = 38, x.a.dispatch("getCityConfigInfo").catch(function(e) {
                                        y.a.track("tech_bike_crux_interface_error", {
                                            error: e,
                                            msg: "获取城市配置报错"
                                        });
                                    });

                                  case 38:
                                    return r.next = 40, x.a.dispatch("setApolloConfig").catch(function(e) {
                                        y.a.track("tech_bike_crux_interface_error", {
                                            error: e,
                                            msg: "获取阿波罗配置报错"
                                        });
                                    });

                                  case 40:
                                    if (n.renderMarketing = !0, n.getMarketing(), n.getFlowCenter(), n.getGrayScale(), 
                                    o || n.getMsgFlowInfo(), n.loadMoudle = !0, n.isScan && (n.scanUrl = decodeURIComponent(n.scanUrl), 
                                    s = Object(V.a)(n.scanUrl), n.bikeNum = s.id, n.bikeNum || (n.isScan = !1), Object(F.b)(n, s.type, s.id)), 
                                    n.isLogin) {
                                        n.loadUserInfo(), n.getUseBikeInfo();
                                        try {
                                            Object(O.pradoEvent)({
                                                eventName: "LLC_USER_BEHAVIOR_EVENT",
                                                bizId: 309,
                                                channelId: 1,
                                                body: l()({
                                                    cityId: n.location.cityId || "",
                                                    lat: n.location.latitude,
                                                    lng: n.location.longitude,
                                                    appType: "QINGJU_MINI_APP",
                                                    clientType: "QINGJU_MINI_APP",
                                                    behaviorType: "HOME_PAGE"
                                                })
                                            });
                                        } catch (e) {
                                            console.log(e);
                                        }
                                        x.a.dispatch("getMemberBaseInfo");
                                    }
                                    return A.a.removeStorage("searchResult"), A.a.removeStorage("noSearchBack"), y.a.track("tech_init_page_load_time", {
                                        load_time: new Date().getTime() - n.beginTime
                                    }), y.a.track("init_page_load_time", {
                                        load_time: new Date().getTime() - n.beginTime
                                    }), o && Object(E.navigateTo)(S.a, {
                                        bizType: t && t.orderTypeFromDidi ? t.orderTypeFromDidi : 1,
                                        fromHistory: !0,
                                        orderId: t && t.orderIdFromDidi ? t.orderIdFromDidi : ""
                                    }), r.finish(29);

                                  case 54:
                                    H.a.once("vehicleCategoryInfo", function(e) {
                                        var t = e.vehicleCategoryImg, r = e.vehicleCategoryJumpUrl;
                                        n.popModelData.imgSrc = t, n.popModelData.vehicleCategoryJumpUrl = r, t && r && (n.isShowPopupConfirm = !0);
                                    }), Object(L.o)();

                                  case 56:
                                  case "end":
                                    return r.stop();
                                }
                            }, r, null, [ [ 1, 27, 29, 54 ], [ 7, 15 ] ]);
                        }))();
                    },
                    getOnReady() {
                        var e = this;
                        try {
                            this.isScan && (this.reloadTimer = setTimeout(function() {
                                try {
                                    e.reloadInit(), y.a.track("tech_bike_crux_interface_error", {
                                        msg: "10s兜底初始化首页"
                                    });
                                } catch (e) {
                                    y.a.track("tech_bike_crux_interface_error", {
                                        error: e,
                                        msg: "10s滞空首也状态错误"
                                    });
                                }
                            }, 1e4));
                        } catch (e) {}
                    },
                    getOnShow() {
                        var e = this;
                        return i()(m.a.mark(function t() {
                            return m.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (t.prev = 0, e.bFirstEnter || e.isScanShow || e.common.isTriggerScanFromOther) {
                                        t.next = 7;
                                        break;
                                    }
                                    return e.isBadDebtPaied && (e.otherPlatformParams = {}), t.next = 5, Object(j.a)().catch(function() {});

                                  case 5:
                                    e.getMsgFlowInfo(), e.showBenefit && e.trackEvent("qj_wx_homepage_benefitenter_sw");

                                  case 7:
                                    e.common.isTriggerScanFromOther && x.a.commit(T.c, {
                                        isTriggerScanFromOther: !1
                                    }), t.next = 12;
                                    break;

                                  case 10:
                                    t.prev = 10, t.t0 = t.catch(0);

                                  case 12:
                                    return t.prev = 12, e.adReload = !0, e.isScanShow = !1, e.tracker = {
                                        source: e.isScan ? 1 : 0,
                                        sourcetype: e.common.pageId
                                    }, !e.isScan && e.trackEvent("qj_wx_homepagenew_sw"), e.isScan && e.trackEvent("qj_wx_scan_sw"), 
                                    y.a.track("bike_home_sw", {
                                        source: e.isScan ? 1 : 2
                                    }), t.finish(12);

                                  case 20:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 10, 12, 20 ] ]);
                        }))();
                    },
                    onLaunch() {
                        var e = this;
                        return i()(m.a.mark(function t() {
                            var n, r, a;
                            return m.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, e.queryApolloConfig([ Y.HM_WX_GOLDEN_OFFLINE ]).catch(function(e) {
                                        console.log(e);
                                    });

                                  case 3:
                                    return n = "hm_access_mas_switch", t.next = 6, e.queryApolloConfig([ n ]).catch(function(e) {
                                        console.log(e);
                                    });

                                  case 6:
                                    (r = t.sent) && r[n];
                                    try {
                                        Object(Q.a)(K.Omega, wx), y.a.track("tech_mas_init_result");
                                    } catch (e) {
                                        y.a.track("tech_mas_init_error");
                                    }
                                    return t.next = 10, Object(Z.a)();

                                  case 10:
                                    a = t.sent, x.a.state.user.os = /iOS/.test(a.system) ? "iOS" : "Android", t.next = 17;
                                    break;

                                  case 14:
                                    t.prev = 14, t.t0 = t.catch(0), Object(L.u)("onLaunch", t.t0);

                                  case 17:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 14 ] ]);
                        }))();
                    },
                    disagree() {
                        getCurrentPages().length <= 1 ? wx.redirectTo({
                            url: "/home/pages/index"
                        }) : wx.navigateBack();
                    },
                    agree() {
                        this.isPrivacy = !0, A.a.setStorage("isPrivacy", this.isPrivacy), Object($.a)(), 
                        Object(X.a)(), this.onLaunch(), this.getOnLoad(this.options), this.getOnShow(), 
                        this.getOnReady();
                    },
                    initPrivacy(e) {
                        var t = this;
                        return i()(m.a.mark(function n() {
                            var r;
                            return m.a.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    n.prev = 0, n.next = 5;
                                    break;

                                  case 5:
                                    return n.next = 7, Object(W.a)("isPrivacy");

                                  case 7:
                                    r = n.sent, t.isPrivacy = Boolean(r);

                                  case 9:
                                    n.next = 14;
                                    break;

                                  case 11:
                                    n.prev = 11, n.t0 = n.catch(0), console.log(n.t0);

                                  case 14:
                                    return n.prev = 14, t.loading = !0, e && e.callBack && e.callBack(), n.finish(14);

                                  case 18:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, null, [ [ 0, 11, 14, 18 ] ]);
                        }))();
                    }
                }),
                onLoad(e) {
                    var t = this;
                    return i()(m.a.mark(function n() {
                        return m.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                t.isDiDi = !1, t.options = e, t.initPrivacy({
                                    callBack: function() {
                                        t.isPrivacy && (Object($.a)(), Object(X.a)(), t.onLaunch(), t.getOnLoad(e));
                                    }
                                });

                              case 3:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                onReady() {
                    this.isPrivacy && this.getOnReady();
                },
                onShow() {
                    var e = this;
                    return i()(m.a.mark(function t() {
                        return m.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e.initPrivacy({
                                    callBack: function() {
                                        e.isPrivacy && e.getOnShow();
                                    }
                                });

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                onHide() {
                    var e = this;
                    this.isPrivacy && (this.adReload = !1, setTimeout(function() {
                        try {
                            e.reloadInit();
                        } catch (e) {
                            y.a.track("tech_bike_crux_interface_error", {
                                error: e,
                                msg: "1s滞空首页状态错误"
                            });
                        }
                    }, 1e3), this.reloadTimer && (clearTimeout(this.reloadTimer), this.reloadTimer = null));
                },
                watch: {
                    isLogin: function(e) {
                        try {
                            !this.renderMarketing && e && (this.renderMarketing = !0), e && !this.bFirstEnter && (this.loadUserInfo(), 
                            this.getMarketing(), this.getFlowCenter(), x.a.dispatch("getMemberBaseInfo"), this.getUseBikeInfo());
                        } catch (e) {
                            console.log(e);
                        }
                    }
                },
                onPageScroll(e) {
                    if (this.isPrivacy && !this.showPopupWindow) try {
                        e.scrollTop >= 10 ? (this.titleBar = "".concat(this.topStyle, " animation: interimTo 500ms linear;"), 
                        this.bgColor = "#14D0B4") : (this.titleBar = "".concat(this.topStyle, " animation: interimLeave 500ms linear; opacity:0;"), 
                        this.bgColor = ""), e.scrollTop > 300 && !this.isScrollTracker && (this.trackEvent("qj_wx_homepage_sd"), 
                        this.isScrollTracker = !0);
                    } catch (e) {
                        console.log(e);
                    }
                }
            });
        }).call(this, n(390).Buffer);
    },
    737: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o;
        });
        var r = n(92), a = n.n(r), i = n(18), c = n.n(i);
        function o(e, t) {
            if (e && t) try {
                var n = {};
                t.getSystemInfo({
                    success(e) {
                        var t = e.SDKVersion, r = e.benchmarkLevel, a = e.brand, i = e.model;
                        e.platform, e.version;
                        n = {
                            SDKVersion: t,
                            benchmarkLevel: r,
                            brand: a,
                            model: i
                        };
                    }
                });
                var r = t.getAccountInfoSync ? t.getAccountInfoSync() : {};
                r.miniProgram && (n.appVersion = r.version), t.getNetworkType({
                    success(e) {
                        n.networkType = e.networkType;
                    }
                });
                var i = t.getPerformance(), o = !1;
                i.createObserver(function(t) {
                    var r, i = t.getEntries(), s = {}, h = 0, u = a()(i);
                    try {
                        for (u.s(); !(r = u.n()).done; ) {
                            var l = r.value, d = l.duration;
                            s[l.name + "_duration"] = Math.abs(d), h += Math.abs(d);
                        }
                    } catch (e) {
                        u.e(e);
                    } finally {
                        u.f();
                    }
                    s.total_duration = h, s = c()({}, s, n), e.trackEvent(o ? "tech_performance_run" : "tech_performance_init", s), 
                    o = !0;
                }).observe({
                    entryTypes: [ "render", "script", "navigation" ]
                });
            } catch (e) {}
        }
    }
}, [ [ 1047, 0 ] ] ]);
//# sourceMappingURL=init.js.map