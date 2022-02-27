var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../m/zk/za"));

e(require("../../../m/5y"));

(0, t.default)({
    name: "member-coupon-bag-lightshop",
    data: {
        couponInfo: {},
        showTitle: !1,
        titleType: "text",
        name: "",
        titleImage: "",
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
    localData: {
        options: {}
    },
    methods: {
        init: function(e) {
            return this.localData.options = e, this;
        },
        render: function() {
            var e = this, t = this.localData.options.data, o = t.coupon_bag_activity, i = t.showTitle, a = t.titleType, n = t.name, c = t.titleImage;
            this.setData({
                showTitle: i,
                titleType: a,
                name: n,
                titleImage: c,
                couponInfo: o
            }, function() {
                e.$root.$logReinit(e);
            });
        },
        handleBuy: function() {
            var e = this.data.couponInfo, t = e.itemId, o = e.activityId;
            this.$root.$logClick(".quanbaoclick", {
                itemId: t || ""
            }), t && this.$root.$navigate("/pages/member/member-coupon-bag/index?id=".concat(t, "&activityId=").concat(o));
        },
        handleUse: function() {
            var e = this.data.couponInfo.couponList, t = "/pages/orderfood/index?couponBizTag=couponPackage&couponTemplateId=".concat(e[0].voucherTemplateId);
            this.$root.$relaunch(t);
        }
    }
});