var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../../@babel/runtime/helpers/objectSpread2"), a = e(require("../../../../m/zk/za")), s = e(require("../../../../m/zl/5o")), i = require("../../../../l/wu"), r = require("../../../../m/z8/zj");

(0, a.default)({
    name: "购物车-列表-item",
    properties: {
        showAddPriceBuy: {
            type: Boolean,
            value: !1
        },
        isDinner: {
            type: Boolean,
            value: !1
        },
        item: {
            type: Object,
            value: {}
        },
        memberFlag: {
            type: Boolean,
            value: !1
        },
        isJustShowNum: {
            type: Boolean,
            value: !1
        },
        storedPayMemberPriceSwitch: {
            type: Boolean,
            value: !1
        },
        memberDayTagSwitch: {
            type: Boolean,
            value: !1
        },
        dishIdSelect: {
            type: String,
            value: ""
        }
    },
    data: {
        num: 0,
        isSetMeal: !1,
        setMealToggle: !1,
        disableAddInner: !1,
        isShowMinus: !1,
        isSimpleMeal: !1
    },
    localData: {
        cartList: [],
        resetSurplusStatusId: null,
        cartModelKey: "orderfood"
    },
    observers: {
        item: function(e) {
            this.itemChange(e), this.resetSurplusStatus();
        },
        num: function() {
            this.resetSurplusStatus();
        }
    },
    ready: function() {
        var e = this;
        "pages/zccomfirmorder/index" === this.$root.route && (this.localData.cartModelKey = "zccomfirmorder"), 
        (0, r.getCartModel)(this.localData.cartModelKey).bindCartListChange(function(t) {
            var a = t.cartData;
            e.updateCartList(a);
        }, !0);
    },
    methods: {
        updateCartList: function(e) {
            var t = e.list, a = void 0 === t ? [] : t;
            this.localData.cartList = a, this.resetSurplusStatus();
        },
        resetSurplusStatus: function() {
            var e = this;
            this.localData.resetSurplusStatusId && clearTimeout(this.localData.resetSurplusStatusId), 
            this.localData.resetSurplusStatusId = setTimeout(function() {
                var t = e.data, a = t.item, s = t.num;
                if (a) {
                    var r = e.localData.cartList.filter(function(e) {
                        return e.skuId === a.skuId && e.dishMd5 !== a.dishMd5;
                    }).map(function(e) {
                        return e.num;
                    }).reduce(function(e, t) {
                        return e + t;
                    }, 0);
                    (0, i.getSurplusData)({
                        dish: a,
                        currentSku: a,
                        num: s,
                        skuOtherNumSum: r
                    }).then(function(t) {
                        var a = t.disableAdd, s = t.disableMinus;
                        e.setData({
                            disableAddInner: a,
                            isShowMinus: s
                        });
                    });
                }
            }, 50);
        },
        itemChange: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = s.default.get("orderfood.current.update.dish.sku.id");
            t !== e.dishId && this.setData({
                isSetMeal: e.packageDishGroupList && e.packageDishGroupList.length > 0,
                num: e.num
            });
            var a = function(e) {
                return e && e.length;
            };
            this.setData({
                isSimpleMeal: !(e.dishName !== e.skuName || a(e.practices) || a(e.sideDishes) || a(e.remarks))
            });
        },
        handleToggleSetMeal: function() {
            var e = this.data, t = e.isSetMeal, a = e.setMealToggle;
            t && this.setData({
                setMealToggle: !a
            });
        },
        handleChangeNum: function(e) {
            var a = this.data, i = a.item, u = a.showAddPriceBuy, l = e.detail.num, o = {
                type: "cart-item",
                dishes: t(t({}, i), {}, {
                    num: l
                })
            };
            s.default.put("orderfood.current.update.dish.sku.id", o.dishes.dishId), (0, r.getCartModel)(this.localData.cartModelKey).updateCart(o), 
            this.setData({
                num: l
            }), this.$root.$logClick(".menu.add_to_cart", {
                dishid: i.dishId,
                types: "购物车加购"
            }), u && 0 === l && this.$root.$logClick(".menu.delect_product_of_cart", {
                customId: "".concat(i.dishId, "-").concat(i.skuId),
                customInfo: "购物车换购商品删除"
            });
        }
    }
});