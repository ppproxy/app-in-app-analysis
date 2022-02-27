var e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../m/zk/za")), t = require("../../../../l/wu"), u = require("../../../../l/wh");

(0, e.default)({
    name: "default-dish-item",
    properties: {
        item: {
            type: Object,
            value: {}
        },
        cartList: {
            type: Array,
            value: []
        },
        memberFlag: {
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
        }
    },
    data: {
        num: 0,
        disableAddInner: !1,
        isShowMinus: !1,
        isSimpleMeal: !1
    },
    localData: {
        resetSurplusStatusId: null
    },
    observers: {
        item: function(e) {
            this.itemChange(e), this.resetSurplusStatus();
        },
        num: function() {
            this.resetSurplusStatus();
        },
        cartList: function() {
            this.resetSurplusStatus();
        }
    },
    ready: function() {},
    detached: function() {},
    methods: {
        resetSurplusStatus: function() {
            var e = this;
            this.localData.resetSurplusStatusId && clearTimeout(this.localData.resetSurplusStatusId), 
            this.localData.resetSurplusStatusId = setTimeout(function() {
                var u = e.data, a = u.item, s = u.num, i = u.cartList;
                if (a) {
                    var r = i.filter(function(e) {
                        return e.skuId === a.skuId;
                    }).map(function(e) {
                        return e.num;
                    }).reduce(function(e, t) {
                        return e + t;
                    }, 0);
                    (0, t.getSurplusData)({
                        dish: a,
                        currentSku: a,
                        num: s,
                        skuOtherNumSum: r
                    }).then(function(t) {
                        var u = t.disableAdd, a = t.disableMinus;
                        e.setData({
                            disableAddInner: u,
                            isShowMinus: a
                        });
                    });
                }
            }, 50);
        },
        itemChange: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = function(e) {
                return e && e.length;
            };
            this.setData({
                num: e.num,
                isSimpleMeal: !(e.dishName !== e.skuName || t(e.practices) || t(e.sideDishes) || t(e.remarks))
            });
        },
        handleChangeNum: function(e) {
            var t = this.data.item, a = e.detail, s = a.num, i = a.type, r = t.skuId;
            this.triggerEvent("handleDishChange", {
                num: s,
                skuId: r
            });
            var n = (0, u.getSceneType)().sceneType;
            this.$root.$logClick(".orderfood_page.default_dish_layer_dish_".concat(i, "_btn_click"), {
                customScene: n,
                customId: r,
                num: s
            });
        }
    }
});