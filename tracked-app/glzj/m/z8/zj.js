var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createCartModel = function(e, t) {
    return (0, h.createModel)(new C(e), "cartModel", t);
}, exports.destoryCartModel = function(e) {
    (0, h.destoryModel)("cartModel", e);
}, exports.getCartModel = function(e) {
    return (0, h.getModel)("cartModel", e);
};

var r = require("../../@babel/runtime/helpers/typeof"), i = require("../../@babel/runtime/helpers/slicedToArray");

require("../../@babel/runtime/helpers/Arrayincludes");

var a = require("../../@babel/runtime/helpers/objectSpread2"), o = e(require("../../@babel/runtime/regenerator")), n = require("../../@babel/runtime/helpers/asyncToGenerator"), s = require("../../@babel/runtime/helpers/classCallCheck"), u = require("../../@babel/runtime/helpers/createClass"), d = require("../../@babel/runtime/helpers/inherits"), c = require("../../@babel/runtime/helpers/createSuper"), h = function(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" !== t(e) && "function" != typeof e) return {
        default: e
    };
    var i = y(r);
    if (i && i.has(e)) return i.get(e);
    var a = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n in e) if ("default" !== n && Object.prototype.hasOwnProperty.call(e, n)) {
        var s = o ? Object.getOwnPropertyDescriptor(e, n) : null;
        s && (s.get || s.set) ? Object.defineProperty(a, n, s) : a[n] = e[n];
    }
    a.default = e, i && i.set(e, a);
    return a;
}(require("../../l/wo")), l = require("../../l/wa"), p = require("../../l/wm"), g = require("../../l/wh"), f = e(require("../zl/5o")), D = require("../../v/ci/zj"), m = require("../../l/w9"), _ = require("../../v/ci/33"), T = require("../../v/ci/n"), b = e(require("../zt")), v = require("../../pages/orderfood/common/orderfood-error");

function y(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), r = new WeakMap();
    return (y = function(e) {
        return e ? r : t;
    })(e);
}

var C = function(e) {
    d(k, e);
    var t, h, y, C, A = c(k);
    function k(e) {
        var t;
        return s(this, k), (t = A.call(this, e)).cartData = {
            list: [],
            gifts: [],
            info: {}
        }, t.categoryDot = Object.create(null), t.dishDot = Object.create(null), t.fetchCartSuccessFlag = !1, 
        t.mustAddDishCheckResult = !0, t.defaultDishCheckResult = !0, t.cartReqTime = null, 
        t.init(), t;
    }
    return u(k, [ {
        key: "changeRoot",
        value: function(e) {
            if (!e) throw new Error("context is undefined");
            this.root = e;
        }
    }, {
        key: "bindCartListChange",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this._event.$on("cartList_change", e), t && this._emitCartList(this.cartData);
        }
    }, {
        key: "bindCategoryDotChange",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this._event.$on("category_dot_change", e), t && this._emitCategoryDotChange(this.categoryDot);
        }
    }, {
        key: "bindDishDotChange",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this._event.$on("dish_dot_change", e), t && this._emitDishDotChange(this.dishDot);
        }
    }, {
        key: "bindMustAddDishCheckResultChange",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this._event.$on("must_add_dish_check_result_change", e), t && this._emitMustAddDishCheckResultChange(this.mustAddDishCheckResult);
        }
    }, {
        key: "bindDefaultDishListChange",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this._event.$on("default_dish_list_change", e), t) {
                var r = {
                    defaultDishCheckResult: this.defaultDishCheckResult,
                    defaultDishList: this.defaultDishList || [],
                    needAddMustDishes: this.needAddMustDishes || [],
                    mustAddDishCheckResult: this.mustAddDishCheckResult
                };
                this._emitDefaultDishlistChange(r);
            }
        }
    }, {
        key: "unbindAll",
        value: function() {
            this._event.$off("cartList_change"), this._event.$off("category_dot_change"), this._event.$off("dish_dot_change"), 
            this._event.$off("must_add_dish_check_result_change"), this._event.$off("default_dish_list_change");
        }
    }, {
        key: "_emitCartList",
        value: function(e) {
            this.cartData = e, this.root.localData.cartData = e, this._event.$emit("cartList_change", {
                cartData: e
            });
        }
    }, {
        key: "_emitCategoryDotChange",
        value: function(e) {
            this._event.$emit("category_dot_change", {
                categoryDot: e
            });
        }
    }, {
        key: "_emitDishDotChange",
        value: function(e) {
            this._event.$emit("dish_dot_change", {
                dishDot: e
            });
        }
    }, {
        key: "_emitMustAddDishCheckResultChange",
        value: function(e) {
            this.mustAddDishCheckResult = e, this._event.$emit("must_add_dish_check_result_change", {
                result: e
            });
        }
    }, {
        key: "_emitDefaultDishlistChange",
        value: function(e) {
            this.defaultDishList = e.defaultDishList, this.defaultDishCheckResult = e.defaultDishCheckResult, 
            this.needAddMustDishes = e.needAddMustDishes, this.mustAddDishCheckResult = e.mustAddDishCheckResult, 
            this._event.$emit("default_dish_list_change", e);
        }
    }, {
        key: "getCartList",
        value: (C = n(o.default.mark(function e() {
            var t, r, i, a, n, s, u, d, c, h, p, _, T, b, y, C, A, k, I, x, O, P, R, H, M, S, G, L, w, E, N, $, V, q, F, B, U, j, W, Z, z, X, Y, J = arguments;
            return o.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = J.length > 0 && void 0 !== J[0] && J[0], J.length > 1 && void 0 !== J[1] && J[1], 
                    r = this.root, e.prev = 3, i = {
                        mealType: f.default.get("orderfood.type"),
                        appType: "wx" === (0, l.getMiniType)() ? "WECHAT" : "ALIPAY",
                        tableId: (0, g.getTableId)(),
                        storeId: (0, g.getShopId)(),
                        cartId: f.default.get("orderfood.cart.id"),
                        orderPreDishGreetingFlag: !(0, g.getTableId)(),
                        refreshMustDishRule: !0
                    }, e.next = 7, (0, D.getCart)(i);

                  case 7:
                    if (a = e.sent, n = a.data, this.fetchCartSuccessFlag = !0, s = n.dishes, u = void 0 === s ? [] : s, 
                    d = n.gifts, c = void 0 === d ? [] : d, h = n.totalAmount, p = n.totalActualAmount, 
                    _ = n.totalDiscountAmount, T = n.memberPrice, b = n.cartBatchNo, y = n.tableId, 
                    C = n.onlyHasMemberPricePromotion, A = n.highDiscountGuideTip, k = n.enjoyedHighlightDiscountGuideTip, 
                    I = n.preConsultVoucherValue, x = n.hasPreConsultVoucherValue, O = n.preDiscountGuideTip, 
                    P = n.preHighlightDiscountGuideTip, R = n.cartTip, H = void 0 === R ? {} : R, M = n.specialItemWithRecharge, 
                    S = n.memberDayTag, G = n.dishCheckDTO, L = void 0 === G ? {} : G, w = n.extInfo, 
                    E = void 0 === w ? {} : w, N = n.updateTime, $ = void 0 === N ? "" : N, V = n.orderNo, 
                    "pages/orderfood/index" !== r.route) {
                        e.next = 23;
                        break;
                    }
                    return e.next = 14, (0, m.getStoreBaseConfig)();

                  case 14:
                    if (q = e.sent, F = q && q.diningNumRequired, B = !E || !E.DINING_NUM || [ "", "0" ].includes(E.DINING_NUM), 
                    U = L.needAddFixedDishes, j = (void 0 === U ? [] : U).findIndex(function(e) {
                        return e.mustOrderDTO && "PERSON" === e.mustOrderDTO.mustOrderType;
                    }) > -1, !F && !j || !B) {
                        e.next = 23;
                        break;
                    }
                    return W = {
                        paymentMode: q.paymentMode
                    }, r.$navigate(m.WELCOME_PAGE_PATH, W), e.abrupt("return");

                  case 23:
                    return Z = {
                        list: u,
                        gifts: c,
                        info: {
                            totalAmount: h,
                            totalActualAmount: p,
                            totalDiscountAmount: _,
                            onlyHasMemberPricePromotion: C,
                            highDiscountGuideTip: A,
                            enjoyedHighlightDiscountGuideTip: k,
                            preConsultVoucherValue: I,
                            hasPreConsultVoucherValue: x,
                            preDiscountGuideTip: O,
                            preHighlightDiscountGuideTip: P,
                            rechargeTip: H.rechargeTip,
                            cartOrderHighlightDiscountTip: H.cartOrderHighlightDiscountTip,
                            afterPayPreHighlightDiscountGuideTip: H.afterPayPreHighlightDiscountGuideTip,
                            isMemberDish: T,
                            specialItemWithRecharge: M,
                            memberDayTag: S,
                            updateTime: $,
                            orderNo: V
                        },
                        unfoldCart: t && u.length + c.length !== 0
                    }, this._emitCartList(Z), this._setDot(u), r.setData({
                        orderPreDishGreetingTip: H.orderPreDishGreetingTip || "",
                        orderPreDishGreetingSubTip: H.orderPreDishGreetingSubTip || "",
                        cartBatchNo: b
                    }, function() {
                        "pages/orderfood/search/index" === r.route && r.$logAvailableTrace();
                    }), f.default.put("orderfood.cart.id", b, {
                        persistent: !0
                    }), this._cartChange(L, !0), r.data.isDinner && b && y && r.$cartBubble.startPoll(), 
                    e.abrupt("return", Z);

                  case 34:
                    return e.prev = 34, e.t0 = e.catch(3), [ "FAIL_BIZ_MUST_ORDER_DISH_NOT_ENOUGH", "FAIL_BIZ_MUST_HAVES_FIXED_DISH_INVALID", "FAIL_BIZ_CART_NOT_EXIST" ].includes(e.t0.errorType) && "pages/orderfood/index" === r.route && (z = e.t0.response.data || {}, 
                    v.pageErrorShow.call(this, r, z.extInfo), X = (0, g.getSceneType)(), Y = X.sceneType, 
                    r.$logExpo(".orderfood_card.default_dishes_is_not_of_stock_exposure", {
                        customScene: Y
                    })), e.abrupt("return", !1);

                  case 39:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 3, 34 ] ]);
        })), function() {
            return C.apply(this, arguments);
        })
    }, {
        key: "init",
        value: function() {
            var e = this;
            this.updateCart = (0, p.debounce)(function() {
                var t = n(o.default.mark(function t(r) {
                    var i, a, n, s, u, d, c, h, l, p, D, m, _, T, b, v, y, C, A;
                    return o.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if ("pages/zccomfirmorder/index" === (i = e.root).route || "pages/settleaccount/index" === i.route || i.localData.isShow) {
                                t.next = 4;
                                break;
                            }
                            return f.default.remove("orderfood.current.update.dish.sku.id"), t.abrupt("return");

                          case 4:
                            if (n = (a = r).dishes, s = a.type, u = i.localData.cartData, d = u.list, c = void 0 === d ? [] : d, 
                            h = u.info, l = void 0 === h ? {} : h, p = u.gifts, D = void 0 === p ? [] : p, m = "DINNER" === f.default.get("orderfood.type"), 
                            _ = f.default.get("orderfood.cart.id"), !m || !(0, g.getTableId)() || _) {
                                t.next = 20;
                                break;
                            }
                            return t.next = 12, e.checkTable({
                                scanAction: "ADD_DISH_ORDER"
                            });

                          case 12:
                            if (f.default.get("orderfood.cart.id")) {
                                t.next = 18;
                                break;
                            }
                            return i.$toast.show("获取购物车信息失败", 1500), f.default.remove("orderfood.current.update.dish.sku.id"), 
                            e._setDot(c), t.abrupt("return");

                          case 18:
                            t.next = 29;
                            break;

                          case 20:
                            if (e.fetchCartSuccessFlag) {
                                t.next = 29;
                                break;
                            }
                            return t.next = 23, e.getCartList();

                          case 23:
                            if (t.sent) {
                                t.next = 29;
                                break;
                            }
                            return i.$toast.show("获取购物车信息失败", 1500), f.default.remove("orderfood.current.update.dish.sku.id"), 
                            e._setDot(c), t.abrupt("return");

                          case 29:
                            if ("default-dish" !== s) {
                                t.next = 32;
                                break;
                            }
                            return e.handleSendUpdateCart(c, D, l, r, 0, n), t.abrupt("return");

                          case 32:
                            if (T = c.findIndex(function(e) {
                                return e.dishMd5 === n.dishMd5;
                            }), b = c[T] || {
                                num: 0
                            }, v = n.num - b.num, n.changeNum = v, n.packageDishGroupList && "cart-item" !== r.type && (n.changeNum = n.num, 
                            n.num = n.num + b.num), y = D.findIndex(function(e) {
                                return "".concat(e.dishId, "-").concat(e.skuId) === "".concat(n.dishId, "-").concat(n.skuId);
                            }), C = n.cartPromotions && n.cartPromotions.length && n.cartPromotions.filter(function(e) {
                                return "ADD_PRICE_BUY" === e.promotionSource;
                            }), A = !!C && !!C.length, -1 !== T || 0 === n.num) {
                                t.next = 50;
                                break;
                            }
                            if (-1 !== y) {
                                t.next = 45;
                                break;
                            }
                            c.push(n), t.next = 48;
                            break;

                          case 45:
                            return i.$logExpo(".orderfood_page.mutually_exclusive_Popup_exposure", {
                                customInfo: "点餐页互斥弹窗曝光"
                            }), i.$root.getGlobalComponentById("addPriceBuyConfirmModal").show({
                                title: "该商品与搭配推荐商品互斥，确定加购吗？",
                                bodyText: "",
                                ok: function() {
                                    c.push(n), D.splice(y, 1), e.handleSendUpdateCart(c, D, l, r, v, [ n ]), i.$logExpo(".orderfood_page.mutually_exclusive_Popup_click", {
                                        customScene: "exp",
                                        customInfo: "点餐页确认加购"
                                    });
                                },
                                cancel: function() {
                                    e.handleSendUpdateCart(c, D, l, r, v), i.$orderfoodSpecs.changeNum(0), i.$logExpo(".orderfood_page.mutually_exclusive_Popup_click", {
                                        customScene: "clk",
                                        customInfo: "点餐页取消加购"
                                    });
                                }
                            }), t.abrupt("return");

                          case 48:
                            t.next = 51;
                            break;

                          case 50:
                            0 === n.num ? A ? D.splice(y, 1) : c.splice(T, 1) : c[T].num = n.num;

                          case 51:
                            e.handleSendUpdateCart(c, D, l, r, v, [ n ]);

                          case 52:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }));
                return function(e) {
                    return t.apply(this, arguments);
                };
            }(), 300);
        }
    }, {
        key: "handleSendUpdateCart",
        value: (y = n(o.default.mark(function e(t, r, i, n, s, u) {
            var d, c, h, p, m, _, T, v, y, C, A, k, I, x, O, P, R, H, M, S, G, L, w, E, N, $, V, q, F, B;
            return o.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if ((d = this.root).data.isShowTip && (c = f.default.get("ORDERFOOD_TO_SEARCH_OPEN_STATUS"), 
                    f.default.put("ORDERFOOD_TO_SEARCH_OPEN_STATUS", a(a({}, c), {}, {
                        isShowTip: !1
                    })), d.setData({
                        isShowTip: !1
                    })), d.setData({
                        cartLoading: !0,
                        isShowTip: !1
                    }), this._setDot(t), this._emitCartList({
                        list: t,
                        gifts: r,
                        info: i
                    }), u && 0 !== u.length) {
                        e.next = 9;
                        break;
                    }
                    return d.setData({
                        cartLoading: !1
                    }), f.default.remove("orderfood.current.update.dish.sku.id"), e.abrupt("return");

                  case 9:
                    return n.x && (h = n.x, p = n.y, d.$cartParabola.touchOnGoods({
                        x: h,
                        y: p
                    })), n.toastText && s > 0 && d.$toast.show(n.toastText, 2e3), m = new Date().getTime(), 
                    this.cartReqTime = m, _ = {
                        mealType: f.default.get("orderfood.type"),
                        appType: "wx" === (0, l.getMiniType)() ? "WECHAT" : "ALIPAY",
                        cartId: f.default.get("orderfood.cart.id"),
                        dishes: JSON.stringify(u),
                        storeId: (0, g.getShopId)()
                    }, e.prev = 14, e.next = 17, (0, D.updateCart)(_);

                  case 17:
                    if (T = e.sent, v = T.data, this.cartReqTime === m) {
                        e.next = 21;
                        break;
                    }
                    return e.abrupt("return");

                  case 21:
                    y = v.dishes, C = v.gifts, A = v.totalAmount, k = v.totalActualAmount, I = v.totalDiscountAmount, 
                    x = v.memberPrice, O = v.onlyHasMemberPricePromotion, P = v.highDiscountGuideTip, 
                    R = v.enjoyedHighlightDiscountGuideTip, H = v.preConsultVoucherValue, M = v.hasPreConsultVoucherValue, 
                    S = v.preDiscountGuideTip, G = v.preHighlightDiscountGuideTip, L = v.cartTip, w = void 0 === L ? {} : L, 
                    E = v.specialItemWithRecharge, N = v.memberDayTag, $ = v.deletedAddPriceDish, V = v.updateTime, 
                    q = v.dishCheckDTO, F = void 0 === q ? {} : q, $ && d.$toast.show("不满足搭配推荐加购门槛，已移除搭配推荐商品", 3e3), 
                    d.setData({
                        cartLoading: !1
                    }), f.default.remove("orderfood.current.update.dish.sku.id"), this._cartChange(F), 
                    this._setDot(y), this._emitCartList({
                        list: y,
                        gifts: C,
                        info: {
                            totalAmount: A,
                            totalActualAmount: k,
                            totalDiscountAmount: I,
                            onlyHasMemberPricePromotion: O,
                            highDiscountGuideTip: P,
                            enjoyedHighlightDiscountGuideTip: R,
                            preConsultVoucherValue: H,
                            hasPreConsultVoucherValue: M,
                            preDiscountGuideTip: S,
                            preHighlightDiscountGuideTip: G,
                            rechargeTip: w.rechargeTip,
                            cartOrderHighlightDiscountTip: w.cartOrderHighlightDiscountTip,
                            afterPayPreHighlightDiscountGuideTip: w.afterPayPreHighlightDiscountGuideTip,
                            isMemberDish: x,
                            specialItemWithRecharge: E,
                            memberDayTag: N,
                            updateTime: V
                        }
                    }), e.next = 42;
                    break;

                  case 30:
                    if (e.prev = 30, e.t0 = e.catch(14), B = e.t0.errorType, d.setData({
                        cartLoading: !1
                    }), "FAIL_BIZ_CART_NOT_EXIST" !== B) {
                        e.next = 38;
                        break;
                    }
                    return d.$root.getGlobalComponentById("customShowModal").confirm({
                        zIndex: 1001,
                        title: "",
                        bodyText: [ "你的购物车已超时过期", "请重新选菜" ],
                        confirmText: "我知道了",
                        ok: function() {
                            var e = b.default.MINI_PATH;
                            d.$root.$relaunch("/".concat(e.ORDER_FOOD_PATH));
                        }
                    }), d.$cartBubble && d.$cartBubble.stopPoll(), e.abrupt("return");

                  case 38:
                    if ("FAIL_BIZ_MUST_ORDER_OPTIONAL_RULE_CHANGE" !== B) {
                        e.next = 41;
                        break;
                    }
                    return d.$root.getGlobalComponentById("customShowModal").confirm({
                        zIndex: 1001,
                        title: "",
                        bodyText: "必选菜规则已变化，请重新选购必选菜",
                        confirmText: "我知道了",
                        ok: function() {
                            if ("pages/orderfood/index" === d.route) d.refresh(); else {
                                var e = b.default.MINI_PATH;
                                d.$root.$relaunch("/".concat(e.ORDER_FOOD_PATH), {
                                    actionType: "positionMustAddDishCate"
                                }, !0);
                            }
                        }
                    }), e.abrupt("return");

                  case 41:
                    this.getCartList();

                  case 42:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 14, 30 ] ]);
        })), function(e, t, r, i, a, o) {
            return y.apply(this, arguments);
        })
    }, {
        key: "clearCart",
        value: (h = n(o.default.mark(function e() {
            var t, r, i, a, n, s, u, d, c, h, l, p, g, f, m, _, T, b, v, y, C, A, k, I, x, O;
            return o.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return this.root.setData({
                        cartLoading: !0
                    }), e.prev = 1, e.next = 4, (0, D.clearCart)();

                  case 4:
                    t = e.sent, r = t.data, i = r.data || {}, a = i.dishes, n = void 0 === a ? [] : a, 
                    s = i.gifts, u = void 0 === s ? [] : s, d = i.totalAmount, c = i.totalActualAmount, 
                    h = i.totalDiscountAmount, l = i.memberPrice, p = i.onlyHasMemberPricePromotion, 
                    g = i.highDiscountGuideTip, f = i.enjoyedHighlightDiscountGuideTip, m = i.preConsultVoucherValue, 
                    _ = i.hasPreConsultVoucherValue, T = i.preDiscountGuideTip, b = i.preHighlightDiscountGuideTip, 
                    v = i.cartTip, y = void 0 === v ? {} : v, C = i.specialItemWithRecharge, A = i.memberDayTag, 
                    k = i.dishCheckDTO, I = void 0 === k ? {} : k, x = i.updateTime, O = void 0 === x ? "" : x, 
                    this._emitCartList({
                        list: n,
                        gifts: u,
                        info: {
                            totalAmount: d,
                            totalActualAmount: c,
                            totalDiscountAmount: h,
                            onlyHasMemberPricePromotion: p,
                            highDiscountGuideTip: g,
                            enjoyedHighlightDiscountGuideTip: f,
                            preConsultVoucherValue: m,
                            hasPreConsultVoucherValue: _,
                            preDiscountGuideTip: T,
                            preHighlightDiscountGuideTip: b,
                            rechargeTip: y.rechargeTip,
                            cartOrderHighlightDiscountTip: y.cartOrderHighlightDiscountTip,
                            afterPayPreHighlightDiscountGuideTip: y.afterPayPreHighlightDiscountGuideTip,
                            isMemberDish: l,
                            specialItemWithRecharge: C,
                            memberDayTag: A,
                            updateTime: O
                        }
                    }), this._setDot(n), this._cartChange(I), this.root.setData({
                        cartLoading: !1
                    }), e.next = 16;
                    break;

                  case 13:
                    e.prev = 13, e.t0 = e.catch(1), this.root.setData({
                        cartLoading: !1
                    });

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 1, 13 ] ]);
        })), function() {
            return h.apply(this, arguments);
        })
    }, {
        key: "multOrderUpdateCart",
        value: function(e) {
            var t = e.dishes, r = e.gifts, i = void 0 === r ? [] : r, a = e.totalAmount, o = e.totalActualAmount, n = e.totalDiscountAmount, s = e.memberPrice, u = e.onlyHasMemberPricePromotion, d = e.highDiscountGuideTip, c = e.enjoyedHighlightDiscountGuideTip, h = e.preConsultVoucherValue, l = e.hasPreConsultVoucherValue, p = e.preDiscountGuideTip, g = e.preHighlightDiscountGuideTip, f = e.cartTip, D = void 0 === f ? {} : f, m = e.specialItemWithRecharge, _ = e.memberDayTag, T = e.updateTime, b = e.dishCheckDTO, v = void 0 === b ? {} : b, y = {
                list: t,
                gifts: i,
                info: {
                    totalAmount: a,
                    totalActualAmount: o,
                    totalDiscountAmount: n,
                    onlyHasMemberPricePromotion: u,
                    highDiscountGuideTip: d,
                    enjoyedHighlightDiscountGuideTip: c,
                    preConsultVoucherValue: h,
                    hasPreConsultVoucherValue: l,
                    preDiscountGuideTip: p,
                    preHighlightDiscountGuideTip: g,
                    rechargeTip: D.rechargeTip,
                    cartOrderHighlightDiscountTip: D.cartOrderHighlightDiscountTip,
                    afterPayPreHighlightDiscountGuideTip: D.afterPayPreHighlightDiscountGuideTip,
                    isMemberDish: s,
                    specialItemWithRecharge: m,
                    memberDayTag: _,
                    updateTime: T
                }
            };
            this._deepCompare(y, this.cartData) || (this._emitCartList(y), this._setDot(t), 
            this._cartChange(v));
        }
    }, {
        key: "scanCode",
        value: function() {
            var e, t = this, r = this.root;
            r.localData.isScanCodeCall = !0, wx.scanCode({
                success: (e = n(o.default.mark(function e(i) {
                    var a, n, s, u, d;
                    return o.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (e.prev = 0, a = i.result.split("/"), n = a[a.length - 1]) {
                                e.next = 5;
                                break;
                            }
                            throw new Error();

                          case 5:
                            return r.$loading.showLoading("努力加载中..."), s = {
                                codeValue: n,
                                storeId: (0, g.getShopId)()
                            }, e.next = 9, (0, T.queryCodeInfo)(s);

                          case 9:
                            if (u = e.sent, d = u.data.tableId) {
                                e.next = 15;
                                break;
                            }
                            return r.$loading.hideLoading(), r.$toast.show("获取桌码失败，请扫桌码", 1500), e.abrupt("return");

                          case 15:
                            return (0, g.setGlobalTableId)(d), e.next = 18, t.checkTable({
                                scanAction: "SCAN_AND_PLACE_ORDER"
                            });

                          case 18:
                            t.getCartList(), r.$loading.hideLoading(), e.next = 25;
                            break;

                          case 22:
                            e.prev = 22, e.t0 = e.catch(0), "FAIL_BIZ_MUST_ORDER_DISH_NOT_ENOUGH" === e.t0.errorType ? (r.$loading.hideLoading(), 
                            r.$toast.show("哎呀，默认菜售罄了，请联系商家哦～", 1500)) : (r.$loading.hideLoading(), r.$toast.show("获取桌码失败", 1500));

                          case 25:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 0, 22 ] ]);
                })), function(t) {
                    return e.apply(this, arguments);
                }),
                fail: function() {
                    r.$loading.hideLoading(), r.$toast.show("获取桌码失败", 1500);
                }
            });
        }
    }, {
        key: "checkTable",
        value: (t = n(o.default.mark(function e(t) {
            var r, i, a, n, s, u, d, c, h, l, p, D, m, T, y, C, A;
            return o.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = this.root, i = t.scanAction, a = void 0 === i ? "ENTER_DINNER_PAGE" : i, 
                    e.prev = 2, e.next = 5, (0, _.getPrecheckData)({
                        scanAction: a
                    });

                  case 5:
                    if (n = e.sent, s = n.redirect, "TABLE_UNAVAILABLE" !== (u = n.data).tableStatus) {
                        e.next = 11;
                        break;
                    }
                    return (0, g.removeTableId)(), r.$customShowModal.confirm({
                        zIndex: 1001,
                        title: "",
                        bodyText: [ "该桌台无法进行点餐", "请更换桌台或联系服务员" ],
                        confirmText: "回到首页",
                        ok: function() {
                            var e = b.default.MINI_PATH;
                            r.$relaunch("/".concat(e.LIGHT_SHOP_PATH));
                        }
                    }), e.abrupt("return");

                  case 11:
                    if (d = u.dinnerFlows[0].carts[0].cartBatchNo, r.setData({
                        cartBatchNo: d
                    }), f.default.put("orderfood.cart.id", d, {
                        persistent: !0
                    }), !s) {
                        e.next = 18;
                        break;
                    }
                    return c = s.url, h = s.query, l = s.type, r["$".concat(l)](c, h, !0), e.abrupt("return");

                  case 18:
                    if (!(p = u.dinnerFlows[0].orderNo)) {
                        e.next = 22;
                        break;
                    }
                    return r.setData({
                        orderNo: p,
                        showOrderedIconOrderNo: p
                    }), e.abrupt("return", p);

                  case 22:
                    return e.abrupt("return", !0);

                  case 25:
                    if (e.prev = 25, e.t0 = e.catch(2), D = e.t0.errorType, m = e.t0.errorMessage, T = void 0 === m ? "检查台位失败，请重新扫码" : m, 
                    (0, g.removeTableId)(), r.setData({
                        orderNo: ""
                    }), "FAIL_BIZ_GROUPZ_DINNER_ORDER_FAIL" !== D) {
                        e.next = 33;
                        break;
                    }
                    return r.showResult({
                        resultTitle: "扫码点餐暂不支持团餐",
                        resultScene: "NEED_CHANGE_SHOP_ERROR",
                        resultButtonLeftText: "回首页看看",
                        resultButtonRightText: "切换门店"
                    }), e.abrupt("return");

                  case 33:
                    throw [ "FAIL_BIZ_MUST_ORDER_DISH_NOT_ENOUGH", "FAIL_BIZ_MUST_HAVES_FIXED_DISH_INVALID" ].includes(D) && "pages/orderfood/index" === r.route && (y = e.t0.response.data || {}, 
                    v.pageErrorShow.call(this, r, y.extInfo), C = (0, g.getSceneType)(), A = C.sceneType, 
                    r.$logExpo(".orderfood_card.default_dishes_is_not_of_stock_exposure", {
                        customScene: A
                    })), "SCAN_AND_PLACE_ORDER" !== a && r.$toast.show(T, 2e3), e.t0;

                  case 37:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 2, 25 ] ]);
        })), function(e) {
            return t.apply(this, arguments);
        })
    }, {
        key: "_setDot",
        value: function(e) {
            var t = e.reduce(function(e, t) {
                var r = i(e, 2), a = r[0], o = r[1], n = t.weighDishFlag ? 1 : t.num;
                return a[t.cookbookCategoryId] ? a[t.cookbookCategoryId] += n : a[t.cookbookCategoryId] = n, 
                o[t.dishId] ? o[t.dishId] += t.num : o[t.dishId] = t.num, t.mustOrderDTO && "MULTI_CHOICE_ONE" === t.mustOrderDTO.mustOrderRule && (o["mustAddDish-".concat(t.dishId)] ? o["mustAddDish-".concat(t.dishId)] += t.num : o["mustAddDish-".concat(t.dishId)] = t.num), 
                e;
            }, [ {}, {} ]), r = i(t, 2), a = r[0], o = r[1];
            this._emitCategoryDotChange(a), this._emitDishDotChange(o), this.categoryDot = a, 
            this.dishDot = o;
        }
    }, {
        key: "_cartChange",
        value: function(e) {
            var t = this, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = e.unavailableOrderDishDTOList, a = void 0 === i ? [] : i, o = e.needAddFixedDishes, n = void 0 === o ? [] : o, s = e.needAddMustDishes, u = void 0 === s ? [] : s, d = e.needAddOptionalDishesFlag, c = void 0 !== d && d, h = e.showMustOrderFixedFlag, l = void 0 !== h && h, p = this.root, g = "pages/orderfood/index" !== p.route || f.default.get("dish_menu_hasMustDishCate", {
                persistent: !0
            }), D = !g || !c, m = !l, _ = {
                defaultDishList: n,
                needAddMustDishes: u,
                mustAddDishCheckResult: D,
                defaultDishCheckResult: m
            };
            0 !== a.length ? p.$orderfoodOrderRepeatModal && p.$orderfoodOrderRepeatModal.confirm({
                goodsList: a,
                title: "商品存在变动",
                subtitle: "以下商品已自动移除",
                confirmText: "我知道了",
                ok: function() {
                    r && t._emitDefaultDishlistChange(_);
                }
            }) : r && this._emitDefaultDishlistChange(_), this._emitMustAddDishCheckResultChange(D);
        }
    }, {
        key: "_deepCompare",
        value: function(e, t) {
            if ("object" !== r(e) || r(e) !== r(t)) return !1;
            var i = Object.keys(e), a = Object.keys(t);
            if (i.length !== a.length) return !1;
            for (var o = 0; o < i.length; o++) {
                var n = i[o];
                if ("object" !== r(e[n]) || null === e[n]) {
                    if (e[n] !== t[n]) return !1;
                } else if (!this._deepCompare(e[n], t[n])) return !1;
            }
            return !0;
        }
    } ]), k;
}(h.default);