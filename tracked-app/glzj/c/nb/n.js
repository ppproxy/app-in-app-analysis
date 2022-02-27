var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/toConsumableArray"), o = e(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../m/zk/za")), a = e(require("../../m/zl/5o")), i = require("../../l/w9"), s = require("../../l/wh"), c = require("../../m/z8/zj"), d = e(require("../../m/zd/n")), l = require("../../l/wm"), u = function() {
    return new Promise(function(e) {
        return setTimeout(e, 1e3 / 30);
    });
}, h = d.default.$ltracker;

(0, n.default)({
    name: "购物车",
    components: {
        authPhoneModal: "auth-phone-modal",
        toast: "toast"
    },
    logProps: {
        $$expElement: [ ".component-scan-code", ".component-orderfood-cart-redeem_product_of_cart", ".component-must-add-dish-tips" ]
    },
    properties: {
        loading: {
            type: Boolean,
            value: !1
        },
        hideCart: {
            type: Boolean,
            value: !1
        },
        memberFlag: {
            type: Boolean,
            value: !1
        },
        isScan: {
            type: Boolean,
            value: !1
        },
        searchPage: {
            type: Boolean,
            value: !1
        },
        logType: {
            type: String,
            value: ""
        },
        orderNo: {
            type: String,
            value: ""
        },
        cartDecorationInfo: {
            type: Object,
            value: {}
        },
        rejectMemberFlag: {
            type: Boolean,
            value: !1
        },
        needShow: {
            type: Boolean,
            value: !1
        },
        showText: {
            type: String,
            value: ""
        },
        orderedTips: {
            type: String,
            value: ""
        },
        isDinner: {
            type: Boolean,
            value: !1
        },
        showOrderedIconOrderNo: {
            type: String,
            value: ""
        }
    },
    data: {
        show: !1,
        modalShow: !1,
        modalDisplay: !1,
        cartSum: 0,
        loadingNum: 0,
        cartList: [],
        cartGifts: [],
        cartInfo: {},
        txtNode: null,
        iconUrl: null,
        orderedIconUrl: null,
        custom: !1,
        isUpdate: !1,
        customScene: "",
        showMemberEnforce: !1,
        canJoinMember: !1,
        showMemberGuid: !1,
        mustAddDishCheckResult: !0,
        enableShowOrderPrice: !0,
        dishIdSelect: "",
        dinnerTips: "",
        showDinnerTips: !1,
        showOrderTips: !1,
        couponTipArr: []
    },
    localData: {
        showAnimationDone: !1,
        themeIcons: [ "IconDinnerCart", "OrderedIcon", "DinnerCartDefaultIcon" ],
        cartModel: null,
        dinnerCartTipsTimer: null,
        dinnerOrderedTipsTimer: null
    },
    observers: {
        cartDecorationInfo: function() {
            this.setDishCartComponent();
        },
        orderedTips: function(e) {
            e && ("去买单" === e && this.$root && this.$root.$logExpo && this.$root.$logExpo(".orderfood_card.to_pay_tips_exposure", {
                customType: "去买单tips透出"
            }), this.showOrderTips());
        },
        showOrderedIconOrderNo: function(e) {
            e && this.$root && this.$root.$logExpo && this.$root.$logExpo(".orderfood_card.ordered_icon_exposure", {
                customType: "购物车已下单icon透出"
            });
        },
        showText: function(e) {
            var t = this.data.needShow;
            e && t && this.showDinnerTips(e);
        }
    },
    ready: function() {
        var e = this;
        return r(o.default.mark(function t() {
            return o.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.$toast = e.getComponentById("toast"), e.bindEvent(), e.getStoreBaseInfo();

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    detached: function() {
        this.$root && this.$root.$off("cartBottomUpdate", this), this.$root && this.$root.$off("handleDishListMinus", this);
    },
    methods: {
        bindEvent: function() {
            var e = this, o = (0, c.getCartModel)("orderfood");
            this.localData.cartModel = o, o.bindCartListChange(function(o) {
                var r = o.cartData;
                if ((Object.keys(r) || []).length) {
                    var n = r.list, a = void 0 === n ? [] : n, i = r.gifts, c = void 0 === i ? [] : i, d = r.info, l = void 0 === d ? {} : d, u = r.unfoldCart, h = void 0 !== u && u, p = [].concat(t(a), t(c)), m = 0 === p.length, g = (0, 
                    s.getSceneType)().sceneType, f = null, T = [], D = e.data, v = D.dinnerTips, y = D.dishIdSelect, w = void 0 === y ? "" : y, $ = D.isDinner, S = D.needShow, b = D.showText;
                    if ($) {
                        if (l.cartOrderHighlightDiscountTip) {
                            var C = l.cartOrderHighlightDiscountTip.replace(/\{|\}/g, "");
                            v !== C && e.showDinnerTips(C);
                        }
                    } else l.enjoyedHighlightDiscountGuideTip && (f = l.enjoyedHighlightDiscountGuideTip), 
                    l.preDiscountGuideTip && T.push(l.preDiscountGuideTip), l.hasPreConsultVoucherValue && T.push("{预估券后价¥".concat((l.preConsultVoucherValue || 0) / 100, "}")), 
                    T.length || !S || f || T.push(b);
                    var _ = l.totalAmount;
                    l.totalDiscountAmount > 0 && (e.data.memberFlag || !l.onlyHasMemberPricePromotion) && (_ = l.totalActualAmount);
                    var k = (0, s.getShowMemberGuideFlag)(), M = (0, s.getForceMemberGuideFlag)(), I = (0, 
                    s.getMemberJoinEnableFlag)(), x = a;
                    $ && w && (x = a.filter(function(e) {
                        return e.dishId === w;
                    })), e.setData({
                        show: !m,
                        modalDisplay: !m && e.data.modalDisplay,
                        modalShow: !m && e.data.modalShow,
                        cartSum: p.reduce(function(e, t) {
                            return e + (t.weighDishFlag ? 1 : t.num);
                        }, 0),
                        cartList: x,
                        cartGifts: c,
                        cartInfo: l,
                        loadingNum: _,
                        txtNode: f,
                        showMemberGuid: k,
                        showMemberEnforce: M,
                        customScene: g,
                        couponTipArr: T,
                        canJoinMember: I
                    }), h && e.handleToggleCart();
                }
            }, !0), o.bindMustAddDishCheckResultChange(function(t) {
                var o = t.result;
                e.setData({
                    mustAddDishCheckResult: o
                }, function() {
                    e.$root.$logReinit(e);
                });
            }, !0), this.$root.$on("cartBottomUpdate", function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = t.isUpdate, r = void 0 !== o && o;
                e.setData({
                    isUpdate: r
                });
            }, this), this.$root.$on("handleDishListMinus", function(t) {
                var o = t.dishId, r = e.data, n = r.cartList, a = void 0 === n ? [] : n, i = a;
                r.isDinner && (i = a.filter(function(e) {
                    return e.dishId === o;
                })), e.setData({
                    cartList: i,
                    dishIdSelect: t.dishId
                }, {
                    instant: !0
                }), e.handleToggleCart(), setTimeout(function() {
                    e.$toast.show("请选择您要去掉的菜品", 2e3);
                }, 100);
            }, this);
        },
        setDishCartComponent: function() {
            var e = this.data.cartDecorationInfo;
            if (e) {
                var t = e.iconUrl, o = e.orderedIconUrl;
                this.setData({
                    iconUrl: (0, i.getImageUrl)(t),
                    orderedIconUrl: (0, i.getImageUrl)(o)
                });
            }
        },
        handleToggleCart: function() {
            var e = this;
            this.data.modalShow ? this.handleCloseCart() : (this.setData({
                modalDisplay: !0
            }, {
                instant: !0
            }), Promise.resolve().then(u).then(function() {
                e.setData({
                    modalShow: !e.data.modalShow
                }, {
                    instant: !0
                }), setTimeout(function() {
                    e.localData.showAnimationDone = !0;
                }, 200);
            }));
        },
        handleCloseCart: function() {
            var e = this;
            this.localData.showAnimationDone && (this.setData({
                modalShow: !1
            }, {
                instant: !0
            }), setTimeout(function() {
                e.setData({
                    modalDisplay: !1,
                    dishIdSelect: ""
                }, {
                    instant: !0
                }), e.localData.showAnimationDone = !1;
            }, 200));
        },
        handleClearCart: function() {
            var e = this, t = (0, s.getSceneType)().sceneType;
            this.$root.$logClick(".keruyun_menu.empty_cart", {
                customScene: t
            }), this.$root.getGlobalComponentById("customShowModal").confirm({
                title: "确定清空购物车",
                bodyText: "",
                zIndex: 1001,
                showCancel: !0,
                ok: function() {
                    e.$root.$logClick(".keruyun_menu.empty_cart_modal_click", {
                        customType: "确定",
                        customScene: t
                    }), e.localData.cartModel.clearCart(), e.setData({
                        modalShow: !1,
                        modalDisplay: !1
                    }, {
                        instant: !0
                    });
                },
                cancel: function() {
                    e.$root.$logClick(".keruyun_menu.empty_cart_modal_click", {
                        customType: "取消",
                        customScene: t
                    });
                }
            });
        },
        handleToSubmit: function() {
            var e = this;
            return r(o.default.mark(function t() {
                var r, n, i, c, d, l, u, p, m, g, f, T, D, v;
                return o.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, r = (0, s.getSceneType)(), n = r.sceneType, e.$root.$logClick(".keruyun_menu.scan_code_click", {
                            customScene: n
                        }), i = e.data, c = i.loading, d = i.memberFlag, l = i.searchPage, u = i.showMemberGuid, 
                        p = i.rejectMemberFlag, m = i.showMemberEnforce, g = i.mustAddDishCheckResult, f = i.canJoinMember, 
                        g) {
                            t.next = 9;
                            break;
                        }
                        return "pages/orderfood/index" === e.$root.route ? e.triggerEvent("handleScrollToMustAddDishCate") : (a.default.put("orderfood.position.mustAddDish", !0), 
                        e.$root.$back()), T = e.data.logType, e.$root.$logClick(".orderfood_card.required_dishes_not_ordered_click", {
                            customScene: n,
                            customType: T
                        }), t.abrupt("return");

                      case 9:
                        if (!c) {
                            t.next = 11;
                            break;
                        }
                        return t.abrupt("return");

                      case 11:
                        D = f && (u && !p || m), !d && D && !l ? e.triggerEvent("handleShowMemberGuideJoinModel", {
                            showRegMemberFromCart: !0
                        }) : e.succes(), t.next = 20;
                        break;

                      case 16:
                        t.prev = 16, t.t0 = t.catch(0), v = e.$root.$getCustomError("点餐页点击去结算按钮异常", {
                            c1: t.t0.message
                        }), h.logError(v);

                      case 20:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 16 ] ]);
            }))();
        },
        dinnerToSubmit: function() {
            var e = this.data.isScan;
            this.setData({
                showDinnerTips: !1
            });
            var t = (0, s.getSceneType)().sceneType;
            this.$root.$logClick(".keruyun_menu.is_dinner_cart_click", {
                customScene: t,
                customType: e ? "扫码" : "跳转购物车"
            }), e ? this.scanCode() : this.succes();
        },
        scanCode: (0, l.debounce)(function() {
            this.localData.cartModel.scanCode();
        }, 300),
        succes: function() {
            if (this.data.isDinner) {
                var e = this.data.orderNo;
                this.$root.$navigate("/pages/zccomfirmorder/index", {
                    orderNo: e
                });
            } else this.navigateToSettleAccount();
        },
        navigateToSettleAccount: function() {
            var e = this.data, t = e.logType, o = e.cartSum, r = (0, s.getSceneType)().sceneType;
            t && this.$root.$logClick(".keruyun_menu.checkout", {
                customType: t,
                customScene: r
            }), this.$root.$navigate("/pages/settleaccount/index", {
                cartSum: o
            });
        },
        handleForbidMove: function() {
            return null;
        },
        handleToggleOrder: function() {
            this.setData({
                showOrderTips: !1
            });
            var e = (0, s.getSceneType)().sceneType;
            this.$root.$logClick(".keruyun_menu.is_ordered", {
                customScene: e
            });
            var t = this.data.showOrderedIconOrderNo;
            this.$root.$navigate("/pages/zcordercheck/index", {
                orderNo: t
            });
        },
        getStoreBaseInfo: function() {
            var e = this;
            return r(o.default.mark(function t() {
                var r, n, a;
                return o.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, (0, i.getStoreBaseConfig)();

                      case 2:
                        r = t.sent, n = r.enableShowOrderPrice, a = void 0 === n || n, e.setData({
                            enableShowOrderPrice: a
                        });

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        showDinnerTips: (0, l.debounce)(function(e) {
            var t = this;
            this.setData({
                showDinnerTips: !0,
                dinnerTips: e
            });
            var o = "扫码下单" === e, r = o ? ".orderfood_card.scan_code_tips_exposure" : ".orderfood_card.cart_guide_tips_exposure";
            this.$root && this.$root.$logExpo && this.$root.$logExpo(r, {
                customType: o ? "扫码下单tips透出" : "导购tips透出"
            });
            var n = this.localData.dinnerCartTipsTimer;
            n && clearTimeout(n);
            var a = setTimeout(function() {
                t.setData({
                    showDinnerTips: !1
                });
            }, 1e4);
            this.localData.dinnerCartTipsTimer = a;
        }, 2e3, !0),
        showOrderTips: function() {
            var e = this;
            this.setData({
                showOrderTips: !0
            });
            var t = this.localData.dinnerOrderedTipsTimer;
            t && clearTimeout(t);
            var o = setTimeout(function() {
                e.setData({
                    showOrderTips: !1
                });
            }, 1e4);
            this.localData.dinnerOrderedTipsTimer = o;
        },
        clickTips: function() {
            var e = this.data, t = e.isScan, o = e.dinnerTips;
            t && "扫码下单" === o && this.localData.cartModel.scanCode();
        }
    }
});