var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/regenerator")), o = require("../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../m/zk/za")), a = require("../../v/ci/n"), r = require("../../l/wh"), i = require("../../l/w9"), s = e(require("../../m/zl/5o")), c = require("../../v/ci/3w"), u = require("../../pages/member/common/util/common"), p = [], l = [ "AMAP", "SAAS" ];

(0, n.default)({
    name: "consumption-send-popup",
    components: {
        customShowModal: "custom-show-modal",
        toast: "toast"
    },
    data: {
        couponTemplateList: [],
        showModal: !0,
        isShow: !1,
        themeColor: "",
        activityRuleList: [],
        txtNode: "",
        activityMode: "SAAS",
        jumpUrlAMAP: "",
        targetAppId: "",
        isHospital: (0, i.checkXcxTmlCode)("HOSPITAL"),
        imgUrlAMAP: ""
    },
    localData: {
        orderNo: "",
        activeIndex: 0,
        themeIcons: [ "IconConsumptionSendImgOneMax", "IconConsumptionSendImgOneMin", "IconConsumptionSendImgFourMax", "IconConsumptionSendImgFourMin", "IconConsumptionSendImgFive" ]
    },
    ready: function() {
        this.$customShowModal = this.getComponentById("customShowModal"), this.$toast = this.getComponentById("toast");
    },
    methods: {
        initConsumptionSendPopupInfo: function(e) {
            var n = this;
            return o(t.default.mark(function o() {
                var i, c, p, d, m, h, f, g, v, I, A, y, b, x, w, S, M, T, $, P, C, k, _, D, q, j, L, N, O, U, R, z, B, E, J, F, H, V, W, G, X;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (n.localData.orderNo = e, t.prev = 1, i = (0, r.getLoginCustomer)(), c = (0, 
                        r.getShopId)(), p = (0, r.getBrandInfo)(), d = p.brandId, m = n.localData.activeIndex, 
                        h = n.data.isHospital, !(c && c.length > 0)) {
                            t.next = 31;
                            break;
                        }
                        return f = {
                            customerId: i,
                            brandId: d,
                            storeId: c,
                            mealType: s.default.get("orderfood.type"),
                            orderNo: e
                        }, "AMAP" === l[m] && (g = (0, u.getAppType)(), f = Object.assign(f, {
                            appType: g,
                            activityModeList: JSON.stringify([ "AMAP" ])
                        })), t.next = 13, (0, a.queryAfterOrderPopInfo)(f);

                      case 13:
                        if (v = t.sent) {
                            t.next = 16;
                            break;
                        }
                        return t.abrupt("return");

                      case 16:
                        if (I = v.data, y = (A = I || {}).needShow, b = void 0 !== y && y, x = A.activityDTO, 
                        w = void 0 === x ? {} : x, S = A.activityMode, M = void 0 === S ? "" : S, T = A.amapActivityDTO, 
                        $ = void 0 === T ? {} : T, C = (P = w || {}).currentActivityRule, k = void 0 === C ? {} : C, 
                        _ = P.activityRuleList, D = void 0 === _ ? [] : _, j = (q = k || {}).couponTemplateList, 
                        L = void 0 === j ? [] : j, N = q.giftBagValueText, O = void 0 === N ? "" : N, R = (U = $ || {}).jumpUrl, 
                        z = void 0 === R ? "" : R, B = U.targetAppId, E = void 0 === B ? "" : B, J = U.imgUrl, 
                        F = void 0 === J ? "" : J, "AMAP" !== l[m]) {
                            t.next = 25;
                            break;
                        }
                        b && !h ? n.setData({
                            isShow: b || !1,
                            activityMode: "AMAP",
                            activityRuleList: D,
                            couponTemplateList: [],
                            txtNode: "",
                            jumpUrlAMAP: z,
                            imgUrlAMAP: F,
                            targetAppId: E
                        }, function() {
                            n.$root.$logExpo(".amap_popup_expo", {
                                customType: "高德券弹框透出"
                            });
                        }) : b || (n.localData.activeIndex = m + 1, n.initConsumptionSendPopupInfo(e)), 
                        t.next = 31;
                        break;

                      case 25:
                        if (L.length) {
                            t.next = 27;
                            break;
                        }
                        return t.abrupt("return");

                      case 27:
                        H = (0, r.getThemeColor)(), V = null, O && (V = O), n.setData({
                            isShow: !0,
                            activityRuleList: D,
                            couponTemplateList: L,
                            txtNode: V,
                            themeColor: H,
                            activityMode: M,
                            jumpUrlAMAP: "",
                            imgUrlAMAP: "",
                            targetAppId: ""
                        }, function() {
                            var e = n.data.isShow && !!L.length;
                            n.triggerEvent("handleConsumptionSendPopup", {
                                isShowPop: e
                            });
                        });

                      case 31:
                        t.next = 37;
                        break;

                      case 33:
                        t.prev = 33, t.t0 = t.catch(1), W = n.localData, G = W.activeIndex, X = W.orderNo, 
                        "AMAP" === l[G] && (n.localData.activeIndex = G + 1, n.initConsumptionSendPopupInfo(X));

                      case 37:
                      case "end":
                        return t.stop();
                    }
                }, o, null, [ [ 1, 33 ] ]);
            }))();
        },
        goToCouponPage: function() {
            var e = this;
            return o(t.default.mark(function o() {
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.getWechatTemplate();

                      case 2:
                        e.requestSubscribeMessage(p);

                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, o);
            }))();
        },
        getWechatTemplate: function() {
            var e = this;
            return o(t.default.mark(function o() {
                var n, a, i, s, l, d, m, h;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, n = (0, u.getAppType)(), a = (0, r.getBrandInfo)(), i = a.brandId, 
                        t.next = 6, (0, c.queryWechatTemplate)({
                            appType: n,
                            brandId: i,
                            bizScene: "CONSUME_SEND"
                        });

                      case 6:
                        if (s = t.sent, l = s.data, d = void 0 === l ? {} : l) {
                            t.next = 11;
                            break;
                        }
                        return t.abrupt("return");

                      case 11:
                        m = d.msgTemplateList, (h = void 0 === m ? [] : m).length || e.$root.$navigate("/pages/member/member-coupon-list/index"), 
                        p = h, t.next = 19;
                        break;

                      case 16:
                        t.prev = 16, t.t0 = t.catch(0), e.$root.$navigate("/pages/member/member-coupon-list/index");

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, o, null, [ [ 0, 16 ] ]);
            }))();
        },
        requestSubscribeMessage: function() {
            var e = arguments, n = this;
            return o(t.default.mark(function o() {
                var a, r;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return a = e.length > 0 && void 0 !== e[0] ? e[0] : [], r = n, t.prev = 2, t.abrupt("return", a.length ? new Promise(function(e) {
                            wx && wx.requestSubscribeMessage({
                                tmplIds: a.map(function(e) {
                                    return "string" == typeof e ? e : e.templateId;
                                }),
                                success: function(e) {
                                    r.$root.$navigate("/pages/member/member-coupon-list/index"), r.$root.$logClick(".consumption_send_jump", {
                                        customType: "消费送弹框点击去券包"
                                    });
                                    for (var t = Object.keys(e), o = {
                                        rejectIds: [],
                                        acceptIds: []
                                    }, n = 0, a = t; n < a.length; n++) {
                                        var i = a[n];
                                        "reject" === e[i] ? o.rejectIds.push(i) : o.acceptIds.push(i);
                                    }
                                    if (o.acceptIds.length) {
                                        var s = o.acceptIds.length === t.length ? "全部同意" : "部分同意";
                                        r.$root.$logClick(".consumption_send_popup_authorization", {
                                            customType: "消费送服务授权".concat(s),
                                            customValue: JSON.stringify(o)
                                        });
                                    } else r.$root.$logClick(".consumption_send_popup_authorization", {
                                        customType: "消费送服务授权全部拒绝",
                                        customValue: JSON.stringify(o)
                                    });
                                },
                                fail: function(e) {
                                    console.error("fail,e:::", e);
                                }
                            });
                        }) : Promise.resolve());

                      case 6:
                        return t.prev = 6, t.t0 = t.catch(2), console.error("catch,e:::", t.t0), t.abrupt("return", Promise.resolve());

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, o, null, [ [ 2, 6 ] ]);
            }))();
        },
        hidePop: function() {
            this.setData({
                isShow: !1
            });
            var e = this.localData, t = e.activeIndex, o = e.orderNo;
            "AMAP" === l[t] ? (this.localData.activeIndex = t + 1, this.initConsumptionSendPopupInfo(o), 
            this.$root.$logClick(".amap_popup_close", {
                customType: "高德券弹框关闭"
            })) : this.$root.$logClick(".consumption_send_popup_close", {
                customType: "消费送弹框关闭"
            });
        },
        preventTouchMove: function() {
            return null;
        },
        viewActivityDetail: function() {
            var e = this;
            return o(t.default.mark(function o() {
                var n, a;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        n = e.data.activityRuleList, e.setData({
                            isShow: !1
                        }), a = n.map(function(e, t) {
                            return "【活动".concat(t + 1, "】: ").concat(e.showText);
                        }), e.$customShowModal.confirm({
                            title: "送券活动详情",
                            bodyText: a,
                            bodyAlignLeft: !0,
                            confirmText: "知道了",
                            ok: function() {
                                e.setData({
                                    isShow: !0
                                });
                            }
                        });

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, o);
            }))();
        },
        handleJumpAMAP: function() {
            var e = this, t = this.data, o = t.jumpUrlAMAP, n = t.targetAppId, a = this;
            this.$root.$logClick(".amap_popup_click", {
                customType: "高德券弹框点击跳转"
            }), o ? n ? wx.navigateToMiniProgram({
                appId: n,
                path: o,
                success: function(t) {
                    a.hidePop(), e.$root.$logClick(".amap_popup_jump_success", {
                        customType: "高德券弹框跳转成功"
                    });
                },
                fail: function(t) {
                    t && "navigateToMiniProgram:fail cancel" === t.errMsg ? (e.$toast.show("跳转已取消"), 
                    e.$root.$logClick(".amap_popup_jump_cancel", {
                        customType: "高德券弹框跳转取消"
                    })) : (e.$toast.show("跳转失败"), e.$root.$logClick(".amap_popup_jump_fail", {
                        customType: "高德券弹框跳转失败"
                    }));
                }
            }) : this.$toast.show("跳转AppId不存在") : this.$toast.show("跳转链接不存在");
        }
    }
});