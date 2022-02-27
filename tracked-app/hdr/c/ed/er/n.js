var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../m/zk/za"));

e(require("../../../m/5y"));

(0, t.default)({
    name: "member-coupon-bag",
    data: {
        couponInfo: {},
        showModal: !1,
        styles: {
            item1: "eza",
            item2: "ezh",
            item3: "ez9",
            item4: "n5c",
            item5: "n5z"
        }
    },
    logProps: {
        $$expElement: [ ".member-coupon-bag-ele" ]
    },
    properties: {
        dishCouponBagActivityData: {
            type: Object,
            value: {}
        }
    },
    ready: function() {
        var e = this, t = this.data.dishCouponBagActivityData.coupon_bag_activity || {};
        this.setData({
            couponInfo: t
        }, function() {
            e.$root.$logReinit(e);
        });
    },
    methods: {
        handleModalClose: function() {
            this.setData({
                showModal: !1
            });
        },
        handleBuy: function() {
            var e = this.data.couponInfo, t = e.itemId, o = e.activityId;
            this.$root.$logClick(".quanbaoclick", {
                itemId: t || ""
            }), t && this.$root.$navigate("/pages/member/member-coupon-bag/index?id=".concat(t, "&activityId=").concat(o));
        }
    }
});