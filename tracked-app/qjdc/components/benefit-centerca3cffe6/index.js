var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 51 ], {
    1096: function(e, t, n) {
        "use strict";
        n.r(t), function(e) {
            e.currentModuleId = "mca3cffe6", e.currentCtor = Component, e.currentResourceType = "component", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "mca3cffe6",
                render: function() {
                    this._c("showEntrance", this.showEntrance) && (!this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._c("benefitStyle", this.benefitStyle) ? (this._c("benefitStyle", this.benefitStyle), 
                    this._c("benefitTxt", this.benefitTxt)) : this._c("benefitTxt", this.benefitTxt)), 
                    this._r();
                }
            };
            n(422);
            e.currentModuleId;
        }.call(this, n(11));
    },
    422: function(e, t, n) {
        "use strict";
        var i = n(3), r = n.n(i), c = n(1), o = n.n(c), a = n(6), s = n.n(a), u = n(0), p = n.n(u), h = n(2), f = n(5), l = n(4), b = n(8), g = n(9), w = n(101), d = n(742), m = n.n(d), v = n(15);
        Object(h.b)({
            properties: {
                benefitTxt: {
                    type: String,
                    value: ""
                },
                benefitBizContent: {
                    type: String,
                    value: ""
                },
                isLogin: {
                    type: Boolean,
                    value: !1
                },
                tracker: {
                    type: Object,
                    value: {}
                },
                isScan: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {
                showEntrance: !1,
                benefitStyle: ""
            },
            methods: o()(o()({}, f.a.mapActions([ "queryApolloConfig" ])), {}, {
                getBenefitImg() {
                    var e = this;
                    return r()(p.a.mark(function t() {
                        var n, i;
                        return p.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.prev = 0, t.next = 3, Object(w.b)();

                              case 3:
                                n = t.sent, (i = n && n.data && n.data.qj_miniapp_init_page).benefitCenterImg && (e.benefitStyle = "background: url(".concat(i.benefitCenterImg, ") no-repeat; background-size: 100%;")), 
                                t.next = 11;
                                break;

                              case 8:
                                t.prev = 8, t.t0 = t.catch(0), console.log("获取福利中心图片配置失败", t.t0);

                              case 11:
                                return t.prev = 11, e.showEntrance = !0, t.finish(11);

                              case 14:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 0, 8, 11, 14 ] ]);
                    }))();
                },
                goBenefitCenter() {
                    var e = this;
                    return r()(p.a.mark(function t() {
                        var n, i, r, c, a;
                        return p.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return l.a.track("qj_wx_homepage_benefitenter_ck", o()({
                                    biz_content: e.benefitBizContent
                                }, e.tracker)), n = Object(b.i)("/m/benefitCenter.html?sourceentrance=wx_homepage&isScan=".concat(e.isScan)), 
                                i = !0, t.prev = 3, r = "miniapp_benefit_center_useh5_switch", t.next = 7, e.queryApolloConfig([ r ]).catch(function(e) {
                                    console.log(e);
                                });

                              case 7:
                                (c = t.sent) && c[r] && (i = !1), t.next = 14;
                                break;

                              case 11:
                                t.prev = 11, t.t0 = t.catch(3), console.log(t.t0);

                              case 14:
                                return t.prev = 14, i ? e.isLogin ? Object(g.navigateTo)(v.e, {
                                    url: n
                                }) : e.triggerEvent("toLogin") : e.isLogin ? Object(g.navigateTo)(s()(a = "".concat(m.a, "?sourceentrance=wx_homepage&isScan=")).call(a, e.isScan)) : e.triggerEvent("toLogin"), 
                                t.finish(14);

                              case 17:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 3, 11, 14, 17 ] ]);
                    }))();
                }
            }),
            attached() {
                this.getBenefitImg();
            }
        });
    },
    742: function(e, t, n) {
        e.exports = "/npm/_didi/qingju-user-invite/src/pages/benefit-center/index";
    }
}, [ [ 1096, 0 ] ] ]);
//# sourceMappingURL=index.js.map