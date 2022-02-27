var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../@babel/runtime/helpers/slicedToArray"), i = e(require("../../../m/zk/za")), r = require("../../../l/wu"), a = require("../../../m/z8/zj"), o = require("../../../l/wh"), s = require("../../../l/wa"), n = require("../../../l/wm"), c = e(require("../../../m/zl/5o")), d = require("../../../v/ci/zj");

(0, i.default)({
    name: "choose-default-dish-modal",
    data: {
        visible: !1,
        title: "请确认默认菜数量",
        goodsList: [],
        cartList: [],
        confirmText: "确认添加",
        subtitle: "以下菜品将自动加购",
        memberFlag: !1,
        storedPayMemberPriceSwitch: !1,
        memberDayTagSwitch: !1,
        customScene: ""
    },
    localData: {
        ok: null
    },
    logProps: {
        $$expElement: [ ".component-default-dish-show-modal" ]
    },
    methods: {
        _hide: function() {
            this.setData({
                visible: !1
            });
        },
        confirm: function(e) {
            var t = this;
            if (!e) throw new Error("confirm method must has options!");
            var i = (0, o.getSceneType)().sceneType, r = Object.assign({}, this.data, (0, n.omit)(e, "ok", "from"), {
                visible: !0,
                memberFlag: (0, o.getMemberFlag)(),
                customScene: i
            });
            this.setData(r, function() {
                t.$root.$logReinit(t);
            }, {
                instant: !0
            }), this._initConfirm(e), (0, a.getCartModel)(e.from || "orderfood").bindCartListChange(function(e) {
                var i = e.cartData, r = i.list, a = i.info, o = a.specialItemWithRecharge, s = a.memberDayTag;
                t.setData({
                    storedPayMemberPriceSwitch: o,
                    memberDayTagSwitch: s,
                    cartList: r
                });
            }, !0);
        },
        _initConfirm: function(e) {
            this.localData.ok = e.ok ? e.ok : this._hide.bind(this);
        },
        _resetConfirm: function() {
            this.localData = {
                ok: null
            }, this._hide();
        },
        handleOk: function() {
            var e = this, i = this.data, r = i.goodsList, a = i.cartList, s = r.filter(function(e) {
                return 0 !== e.num;
            });
            s.forEach(function(i) {
                var r = e.calcDishMd5(i);
                i.dishMd5 = r, i.changeNum = i.num;
                var o = a.filter(function(e) {
                    return e.dishMd5 === r;
                }), s = t(o, 1)[0];
                s && (i.num += s.num);
            }), this.localData.ok({
                dishes: s
            }), this.setCartTag(), this._resetConfirm();
            var n = (0, o.getSceneType)().sceneType;
            this.$root.$logClick(".orderfood_page.default_dish_layer_confirm_btn_click", {
                customScene: n
            });
        },
        forbidMove: function() {
            return null;
        },
        dishChange: function(e) {
            var t = e.detail, i = t.num, r = t.skuId, a = this.data.goodsList;
            a.forEach(function(e) {
                e.skuId === r && (e.num = i);
            }), this.setData({
                goodsList: a
            });
        },
        calcDishMd5: function(e) {
            var t = e.dishId, i = e.skuId, a = e.practices, o = void 0 === a ? [] : a, s = e.sideDishes, n = void 0 === s ? [] : s, c = {}, d = {};
            return o.forEach(function(e, t) {
                c[t] = {
                    detailId: e.detailId
                };
            }), n.forEach(function(e, t) {
                d[t] = {
                    detailId: e.detailId
                };
            }), (0, r.createDishMd5)({
                dishId: t,
                skuId: i,
                selectPratices: c,
                selectSideDishs: d
            });
        },
        setCartTag: function() {
            var e = {
                mealType: c.default.get("orderfood.type"),
                appType: "wx" === (0, s.getMiniType)() ? "WECHAT" : "ALIPAY",
                tableId: (0, o.getTableId)(),
                storeId: (0, o.getShopId)(),
                cartId: c.default.get("orderfood.cart.id"),
                tagKey: "MUST_ORDER_FIXED_TAB_SHOW",
                tagValue: "true"
            };
            try {
                (0, d.cartTag)(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.error(e);
            }
        }
    }
});