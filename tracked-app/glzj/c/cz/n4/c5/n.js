(0, require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../m/zk/za")).default)({
    name: "combo-cart-item",
    data: {},
    properties: {
        cartDishSku: {
            type: Object,
            value: {}
        },
        cookbookComboGroupList: {
            type: Array,
            value: []
        },
        dishIdSelect: {
            type: String,
            value: ""
        }
    },
    observers: {},
    ready: function() {},
    localData: {
        themeIcons: [ "IconNumControlMinus" ]
    },
    methods: {
        handleMinusSubmenu: function() {
            var e = this.data.cartDishSku, t = e.startInterval, r = e.comboStartNumber, a = e.num;
            a > r ? a -= t : a = 0, e.num = a, this.triggerEvent("handleCartListSkuChange", {
                cartDishSku: e
            });
        }
    }
});