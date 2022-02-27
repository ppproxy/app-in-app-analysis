(0, require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")).default)({
    name: "kc-order-good",
    properties: {
        dishData: {
            type: Object,
            value: null
        },
        showPrice: {
            type: Boolean,
            value: !0
        },
        showNum: {
            type: Boolean,
            value: !0
        },
        memberDayTagSwitch: {
            type: Boolean,
            value: !1
        },
        storedPayMemberPriceSwitch: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        toggleClose: !1,
        isAddPrice: !1,
        originalPriceFlag: !1
    },
    observers: {
        dishData: function(e) {
            this.handleIsAddPrice(e);
        }
    },
    methods: {
        handleToggle: function() {
            var e = this.data.toggleClose;
            this.setData({
                toggleClose: !e
            });
        },
        handleIsAddPrice: function(e) {
            var t = e.cartPromotions && e.cartPromotions.length ? e.cartPromotions.filter(function(e) {
                return "ADD_PRICE_BUY" === e.promotionSource;
            }) : [];
            this.setData({
                isAddPrice: !!t.length,
                originalPriceFlag: t.length > 0 && t[0].originalPriceFlag
            });
        }
    }
});