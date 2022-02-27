var i = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../@babel/runtime/helpers/objectSpread2"), e = require("../../../@babel/runtime/helpers/toConsumableArray"), a = require("../../../@babel/runtime/helpers/objectWithoutProperties"), r = i(require("../../../m/zk/za")), o = require("../../../l/wm"), s = [ "dishName", "skuName", "skuImgUrl", "spec", "num", "totalSkuAmount", "practices", "sideDishes", "remarks", "packageDishGroupList", "dishSkuPrice" ];

(0, r.default)({
    name: "orderfood-order-repeat-modal",
    data: {
        visible: !1,
        title: "商品存在变动",
        goodsList: [],
        mustAddDish: [],
        oridinaryDish: [],
        confirmText: "知道了",
        subtitle: null,
        isBack: !1
    },
    localData: {
        isConfirm: !1,
        ok: null
    },
    methods: {
        show: function(i) {
            var t = Object.assign({}, this.data, i, {
                visible: !0
            }), e = t.goodsList, a = this.formatList(e);
            t.goodsList = a, this.setData(t);
        },
        _hide: function() {
            this.setData({
                visible: !1
            });
        },
        confirm: function(i) {
            if (!i) throw new Error("confirm method must has options!");
            this.show((0, o.omit)(i, "isConfirm", "ok")), this._initConfirm(i);
        },
        _initConfirm: function(i) {
            this.localData.isConfirm = !0, this.localData.ok = i.ok ? i.ok : this._hide.bind(this);
        },
        _resetConfirm: function() {
            this.localData = {
                isConfirm: !1,
                ok: null
            }, this._hide();
        },
        handleOk: function() {
            var i = this.localData.isConfirm;
            this.data.isBack ? this.$root.$relaunch("/pages/orderfood/index") : i ? (this.localData.ok(), 
            this._resetConfirm()) : this._hide();
        },
        forbidMove: function() {
            return null;
        },
        formatList: function() {
            var i = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            if (!t || 0 === t.length) return [];
            var e = t.map(function(t) {
                return i.formatDish(t);
            });
            return e;
        },
        formatDish: function(i) {
            var r = this;
            if (!i) return null;
            var o = i.dishName, n = i.skuName, d = i.skuImgUrl, u = (i.spec, i.num), l = i.totalSkuAmount, m = i.practices, h = void 0 === m ? [] : m, c = i.sideDishes, f = void 0 === c ? [] : c, k = i.remarks, p = void 0 === k ? [] : k, D = i.packageDishGroupList, b = void 0 === D ? [] : D, v = i.dishSkuPrice, g = a(i, s), I = [].concat(e(h.map(function(i) {
                return {
                    detailId: i.detailId,
                    additionalItemName: i.name,
                    additionalItemFee: i.addPrice
                };
            })), e(f.map(function(i) {
                return {
                    detailId: i.detailId,
                    additionalItemName: i.name,
                    additionalItemFee: i.addPrice
                };
            })), e(p.map(function(i) {
                return {
                    detailId: i.detailId,
                    additionalItemName: i.name
                };
            }))), C = [];
            return b && 0 !== b.length && (C = b.reduce(function(i, t) {
                var a = t.dishCartSkuList, o = (void 0 === a ? [] : a).map(function(i) {
                    return r.formatDish(i);
                });
                return [].concat(e(i), e(o));
            }, [])), t({
                dishName: o,
                dishSkuName: n,
                dishPhotoUrl: d,
                totalFee: l,
                dishAddItemList: I,
                multiSpecFlag: o !== n,
                dishQuantity: u,
                dishPackageList: C,
                addDishFee: v
            }, g);
        }
    }
});