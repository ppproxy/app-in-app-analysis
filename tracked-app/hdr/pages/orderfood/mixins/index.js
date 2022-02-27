var t = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../@babel/runtime/helpers/objectSpread2"), o = t(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../../l/wh"), i = t(require("../../../m/zt")), s = t(require("../../../m/zl/5o")), n = require("../../../v/ci/33"), d = require("../../../m/z8/zj"), c = {
    data: {
        isResult: !1,
        resultTitle: "",
        resultSubTitle: "",
        resultButtonText: "",
        memberFlag: !1,
        categoryDot: {},
        dishDot: {},
        cartLoading: !1,
        isCartEmpty: !0,
        isShowTip: !1,
        cartBatchNo: "",
        isScan: !1
    },
    localData: {
        isScanCodeCall: !1,
        cartReqTime: 0,
        cartData: {},
        resultType: "back.home"
    },
    components: {
        loading: "loading",
        toast: "toast",
        customShowModal: "custom-show-modal",
        navigationBar: "navigation-bar",
        orderfoodSpecs: "orderfood-specs",
        orderfoodDishdetail: "orderfood-dishdetail",
        cartParabola: "cart-parabola",
        authUserModal: "authUserModal",
        cartBubble: "cart-bubble",
        addPriceBuyConfirmModal: "add-price-buy-confirm-modal"
    },
    onReady: function() {
        var t = this;
        this.$loading = this.getComponentById("loading"), this.$toast = this.getComponentById("toast"), 
        this.$customShowModal = this.getComponentById("customShowModal"), this.$navigationBar = this.getComponentById("navigationBar"), 
        this.$orderfoodSpecs = this.getComponentById("orderfoodSpecs"), this.$orderfoodDishdetail = this.getComponentById("orderfoodDishdetail"), 
        this.$cartParabola = this.getComponentById("cartParabola"), this.$cartBubble = this.getComponentById("cartBubble");
        var e = s.default.get("orderfood.cart.id") || "";
        e && this.setData({
            cartBatchNo: e
        }), this.$root.$on("openSpecs", function(e) {
            var o = e.dish, a = e.isSetMeal, r = e.optionalNum, i = e.currentSelectedNum, n = e.setMealCallback, d = e.setMealGroupId, c = e.btnFlag, l = e.isFromDetailPage, u = e.openStatus, h = e.customType, p = e.groupName;
            if (t.localData.isShow) {
                var f = t.localData.cartData.list, m = void 0 === f ? [] : f;
                if (a) m = (s.default.get("dish.detail.setMeal.to.specs").find(function(t) {
                    return t.groupId === d;
                }) || {}).dishCartSkuList || [];
                t.$orderfoodSpecs.showSpecs(o, m, {
                    isSetMeal: a,
                    setMealCallback: n,
                    setMealOptionalNum: r,
                    currentSelectedNum: i,
                    btnFlag: c,
                    isFromDetailPage: l,
                    openStatus: u,
                    customType: h,
                    groupName: p
                });
            }
        }, this), this.$root.$on("openDishDetail", function(e) {
            if (t.localData.isShow) {
                var o = e.dishId, a = e.customType, r = e.groupName, i = e.dishName;
                t.$logClick(".keruyun_menu.product_details", {
                    customId: o,
                    customType: "菜品列表点击的选购按钮",
                    groupName: r,
                    dishName: i
                }), void 0 === t.$orderfoodDishdetail.show ? t.$logOther("ORDERFOODDISHDETAIL SHOW IS UNDEFINED", {
                    component: t.$orderfoodDishdetail
                }) : t.$orderfoodDishdetail.show({
                    dishId: o,
                    customType: a
                });
            }
            var s = t.$root.getTabBar();
            s && s.setData({
                isShow: !1
            });
        }, this);
    },
    onShow: function() {
        var t = (0, r.getMemberFlag)();
        !this.data.memberFlag && t && (this.setData({
            memberFlag: t,
            showMemberGuid: !1
        }), (0, r.removeShowMemberGuideFlag)());
    },
    onHide: function() {
        var t = this.$cartBubble || {};
        t.stopPoll && t.stopPoll();
    },
    onUnload: function() {
        this.offEmitter();
    },
    methods: {
        getMarketingGuideInfo: function() {
            var t = this;
            return a(o.default.mark(function e() {
                var a, r, i, s, d, c;
                return o.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, "CART", e.next = 4, (0, n.queryMarketingGuideInfo)("CART");

                      case 4:
                        if (a = e.sent) {
                            e.next = 7;
                            break;
                        }
                        return e.abrupt("return");

                      case 7:
                        r = a.data, s = (i = void 0 === r ? {} : r).needShow, d = "", s && (c = i.activityDTO, 
                        d = (void 0 === c ? {} : c).currentActivityRule.showText), t.setData({
                            needShow: s,
                            showText: d
                        }), e.next = 16;
                        break;

                      case 14:
                        e.prev = 14, e.t0 = e.catch(0);

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 14 ] ]);
            }))();
        },
        handleUpdateCart: function(t) {
            var e = this;
            return a(o.default.mark(function a() {
                var r, i, s, c, l, u, h, p, f, m, g, b, D;
                return o.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        if (!e.data.cartLoading) {
                            o.next = 2;
                            break;
                        }
                        return o.abrupt("return");

                      case 2:
                        if (r = t.detail, o.prev = 3, i = (0, d.getCartModel)("orderfood"), !r || "ORDERED" !== r.status) {
                            o.next = 25;
                            break;
                        }
                        return o.next = 8, i.checkTable({
                            scanAction: "ADD_DISH_ORDER"
                        });

                      case 8:
                        if (s = o.sent, i.getCartList(), !s || "string" != typeof s) {
                            o.next = 23;
                            break;
                        }
                        return o.next = 13, (0, n.queryOrderDishDiffInfo)();

                      case 13:
                        if (o.t0 = o.sent, o.t0) {
                            o.next = 16;
                            break;
                        }
                        o.t0 = {};

                      case 16:
                        c = o.t0, l = c.data, u = (void 0 === l ? {} : l).placeOrderDishDTO, p = (h = void 0 === u ? {} : u).dishList, 
                        f = void 0 === p ? [] : p, m = h.orderNo, g = void 0 === m ? s : m, b = e.data.dishListOrderedMap, 
                        D = void 0 === b ? {} : b, f.forEach(function(t) {
                            D[t.dishId] = t;
                        }), e.setData({
                            dishListOrderedMap: D,
                            showOrderedIconOrderNo: g
                        });

                      case 23:
                        o.next = 26;
                        break;

                      case 25:
                        i.multOrderUpdateCart(r);

                      case 26:
                        o.next = 30;
                        break;

                      case 28:
                        o.prev = 28, o.t1 = o.catch(3);

                      case 30:
                      case "end":
                        return o.stop();
                    }
                }, a, null, [ [ 3, 28 ] ]);
            }))();
        },
        showResult: function(t) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "back.home";
            this.localData.resultType = o;
            var a = e({
                isResult: !0,
                resultButtonText: "返回首页",
                isLoading: !1
            }, t);
            this.setData(a);
        },
        handleResultBtn: function() {
            switch (this.localData.resultType) {
              case "back.home":
                this.goToHomePage();
                break;

              case "back.gotoShop":
                this.gotoShopList();
                break;

              case "back.gotoback":
                this.gotoBack();
            }
        },
        gotoShopList: function() {
            this.$root.$navigate("/pages/store-list/index", {
                origin: "LIGHTSHOP_PAGE"
            });
        },
        gotoBack: function() {
            this.$root.$relaunch("/pages/orderfood/index");
        },
        goToHomePage: function() {
            var t = i.default.MINI_PATH;
            this.$relaunch("/".concat(t.LIGHT_SHOP_PATH));
        },
        offEmitter: function() {
            this.$root && this.$root.$off("openSpecs", this), this.$root && this.$root.$off("openDishDetail", this);
        }
    }
};

exports.default = c;