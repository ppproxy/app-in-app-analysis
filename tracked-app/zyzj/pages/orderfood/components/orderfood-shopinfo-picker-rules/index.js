var e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../m/zk/za")), t = require("../../../../l/wh");

(0, e.default)({
    name: "点餐页门店信息详情",
    data: {
        visible: !1,
        rulesList: [ {
            title: "什么叫全品商品？",
            content: "指店铺内的所有商品均可参与活动。"
        }, {
            title: "什么叫部分商品？",
            content: "指店铺内仅部分商品可参与该活动，对于使用的商品，在商品下方均有活动标签。"
        }, {
            title: "什么叫同品？",
            content: "指仅同一种商品叠加才能享受优惠，如第二杯半价，仅两个品都是同品才能享受其中一杯半价。"
        }, {
            title: "什么叫跨品？",
            content: "指仅不同商品叠加才能享受优惠，如第二杯半价，用户可以买A+B享受优惠，也可以买2个A享受优惠。"
        } ],
        themeColor: (0, t.getThemeColor)()
    },
    ready: function() {
        this.setData({
            visible: !0
        });
    },
    methods: {
        close: function() {
            this.setData({
                visible: !1
            });
        },
        handleCancel: function() {
            var e = this;
            this.close(), setTimeout(function() {
                e.$root.handleRulesCancel();
            }, 300);
        },
        forbidMove: function() {
            return !1;
        }
    }
});