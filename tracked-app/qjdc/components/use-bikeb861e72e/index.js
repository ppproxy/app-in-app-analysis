var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 67 ], {
    1093: function(t, e, i) {
        "use strict";
        i.r(e), function(t) {
            t.currentModuleId = "mb861e72e", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "mb861e72e",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("current", this.current), 
                    this._i(this._c("msgFlowList", this.msgFlowList), function(t, e) {
                        this._c("getNewTaskStyle", this.getNewTaskStyle) && (2 == t.sceneType || 11 == t.sceneType || t.sceneType), 
                        !this._c("isStimulate", this.isStimulate) || t.jumpUrl && this._c("getNewTaskStyle", this.getNewTaskStyle), 
                        t.desc, t.btnText && (this._c("getNewTaskStyle", this.getNewTaskStyle), t.btnText);
                    }), this._c("findBikeImg", this.findBikeImg), this._c("findBikeDesc", this.findBikeDesc), 
                    this._c("moreRightImg", this.moreRightImg), this._c("useBikeOption.isShowFunctional", this.useBikeOption.isShowFunctional) && (this._i(this._c("functionalList", this.functionalList), function(t, e) {
                        t.iconUrl && t.iconUrl, t.iconDesc;
                    }), this._c("isMoreMoudle", this.isMoreMoudle)), this._c("customerOptions", this.customerOptions), 
                    this._c("optionAll", this.optionAll), this._r();
                }
            }, t.currentInject.getRefsData = function() {
                return [ {
                    key: "moreDlgRef",
                    selector: ".ref_moreDlgRef_1",
                    type: "component",
                    all: !1
                } ];
            };
            i(420);
            t.currentModuleId;
        }.call(this, i(11));
    },
    420: function(t, e, i) {
        "use strict";
        var s = i(3), n = i.n(s), o = i(1), r = i.n(o), c = i(0), a = i.n(c), u = i(26), l = i.n(u), h = i(6), m = i.n(h), p = i(2), g = i(9), k = i(7), d = i.n(k), _ = i(97), f = i(5), w = i(4), T = i(8), v = i(16), y = i(15), O = i(39), j = [ {
            iconUrl: "https://pt-starimg.didistatic.com/static/starimg/img/4o3VB9BDam1606127964707.png",
            iconDesc: "停车区",
            jumpUrl: y.k + "?type=park"
        }, {
            iconUrl: "https://pt-starimg.didistatic.com/static/starimg/img/fYIodHJsBv1606127952048.png",
            iconDesc: "计价规则",
            jumpUrl: "".concat(Object(T.i)("/m/valuationRules.html"))
        }, {
            iconUrl: "https://pt-starimg.didistatic.com/static/starimg/img/sYMWjLHMtr1608710973386.png",
            iconDesc: "联系客服",
            jumpUrl: "https://help.xiaojukeji.com/static/index.html?source=xcx_hmck_home&isc_optimus_trueRole=73"
        } ];
        Object(p.b)({
            properties: {
                msgFlowOption: {
                    type: Object,
                    value: {}
                },
                useBikeOption: {
                    type: Object,
                    value: {}
                },
                isLogin: {
                    type: Boolean,
                    value: !1
                },
                tracker: {
                    type: Object,
                    value: {}
                }
            },
            data: {
                moreRightImg: "https://pt-starimg.didistatic.com/static/starimg/img/gGiARxNPIQ1621509591455.png",
                findBikeImg: "https://pt-starimg.didistatic.com/static/starimg/img/F3Rwcs8T4s1621509362123.png",
                current: 0,
                customerOptions: {
                    open: !1,
                    content: "",
                    btnOk: {
                        text: "稍后再来"
                    }
                },
                riskTagsInfo: {},
                riskTimer: null
            },
            computed: r()(r()({}, f.a.mapState([ "location" ])), {}, {
                getNewTaskStyle() {
                    var t = d()(f.a, "state.common.apolloConfig", {});
                    return t && t[O.WX_HOME_NEW_TASK] || !1;
                },
                isStimulate() {
                    var t = this.msgFlowOption;
                    return d()(t, "stimulate", !1);
                },
                msgFlowList() {
                    var t = this.msgFlowOption;
                    return d()(t, "msgList") || [ {
                        desc: "骑滴滴青桔去兜风，天天快乐出行"
                    } ];
                },
                optionAll() {
                    var t = this.useBikeOption;
                    return d()(t, "list", j);
                },
                functionalList() {
                    var t;
                    return l()(t = this.optionAll).call(t, 0, 4);
                },
                isMoreMoudle() {
                    return this.optionAll && this.optionAll.length > 4;
                },
                findBikeDesc() {
                    var t = this.useBikeOption;
                    return d()(t, "desc") || "去看看附近可用的车";
                }
            }),
            detached() {
                this.riskTimer && (clearTimeout(this.riskTimer), this.riskTimer = null);
            },
            attached() {},
            methods: {
                closeCustomerConfirm() {
                    this.customerOptions = r()(r()({}, this.customerOptions), {}, {
                        open: !1
                    }), w.a.track("qj_wx_kefu_queue_ck", r()({}, this.riskTagsInfo)), clearTimeout(this.riskTimer), 
                    this.riskTimer = null;
                },
                msgFlowTap(t) {
                    var e = this.msgFlowOption, i = (void 0 === e ? {} : e).tapAction;
                    i && i(t);
                },
                findBikeTap() {
                    var t = this.useBikeOption || {}, e = t.bhVehicleNum, i = void 0 === e ? 0 : e, s = t.htwVehicleNum, n = void 0 === s ? 0 : s;
                    if (w.a.track("qj_wx_homepage_searchbike_ck", r()({
                        is_havecar: i + n > 0 ? 1 : 0
                    }, this.tracker)), i !== n) {
                        var o, c = i > n ? 1 : 0;
                        this.isLoginJudge(m()(o = "".concat(y.k, "?type=find&transmitIndex=")).call(o, c));
                    } else this.isLoginJudge(y.k + "?type=find");
                },
                clickMoreFunc(t) {
                    this.functionalTap(t.detail.item, t.detail.index + 4);
                },
                functionalTap(t, e) {
                    var i = t.jumpUrl, s = t.iconDesc;
                    "停车区" === s && (i = y.k + "?type=park"), "预约用车" === s && (i = y.k + "?type=find"), 
                    "我的" === s && wx.getUserInfo({
                        success: function(t) {
                            f.a.dispatch("setUserInfo", {
                                wxInfo: t.userInfo
                            });
                        }
                    }), w.a.track("qj_wx_homepage_function_ck", r()({
                        content: s,
                        order: e
                    }, this.tracker)), i && (-1 !== i.search("https://help.xiaojukeji.com/static/index.html") ? this.fetchQueryUserRiskTags(i) : /http/.test(i) ? this.isLoginJudge(y.e, {
                        url: i
                    }) : this.isLoginJudge(i));
                },
                fetchQueryUserRiskTags(t) {
                    var e = this;
                    return n()(a.a.mark(function i() {
                        var s;
                        return a.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return i.prev = 0, i.next = 3, Object(v.queryUserRiskTags)({
                                    lng: e.location.longitude,
                                    lat: e.location.latitude,
                                    bizType: 0
                                });

                              case 3:
                                (s = i.sent) && 100001 !== s.riskType && s.frontMsg && s.waitTime > 0 ? (e.riskTagsInfo = {
                                    biz_type: 0,
                                    user_btype: s.riskType,
                                    hold_time: s.waitTime
                                }, e.customerOptions = r()(r()({}, e.customerOptions), {}, {
                                    content: s.frontMsg,
                                    open: !0
                                }), w.a.track("qj_wx_kefu_queue_sw", r()({}, e.riskTagsInfo)), e.riskTimer = setTimeout(function() {
                                    e.customerOptions = r()(r()({}, e.customerOptions), {}, {
                                        open: !1
                                    }), e.isLoginJudge(y.e, {
                                        url: t
                                    });
                                }, 60 * s.waitTime * 1e3)) : e.isLoginJudge(y.e, {
                                    url: t
                                }), i.next = 11;
                                break;

                              case 7:
                                i.prev = 7, i.t0 = i.catch(0), console.log(i.t0), e.isLoginJudge(y.e, {
                                    url: t
                                });

                              case 11:
                              case "end":
                                return i.stop();
                            }
                        }, i, null, [ [ 0, 7 ] ]);
                    }))();
                },
                isLoginJudge(t, e) {
                    this.isLogin ? Object(g.navigateTo)(t, e) : Object(_.d)(this, !1, !1, {
                        callBack: function() {
                            Object(g.navigateTo)(t, e);
                        }
                    });
                },
                scanBikeTap() {
                    w.a.track("qj_wx_homepage_ultab_ck", r()({}, this.tracker)), this.triggerEvent("scan");
                },
                stopTouchMove() {
                    return !1;
                },
                clickMore() {
                    this.$refs && this.$refs.moreDlgRef && this.$refs.moreDlgRef.show(), w.a.track("qj_wx_homepage_moreentrance_ck");
                }
            },
            watch: {
                msgFlowList: function(t) {
                    t && t.length && (this.current = t.length - 1);
                },
                isMoreMoudle: {
                    handler(t) {
                        t && w.a.track("qj_wx_homepage_moreentrance_sw");
                    },
                    immediate: !0
                }
            }
        });
    }
}, [ [ 1093, 0 ] ] ]);
//# sourceMappingURL=index.js.map