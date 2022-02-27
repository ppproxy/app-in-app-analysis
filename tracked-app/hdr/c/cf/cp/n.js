var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")), t = require("../../../m/z8/zj");

(0, e.default)({
    name: "腰封推荐菜",
    data: {
        dishDot: {}
    },
    properties: {
        recommendedDishesData: {
            type: Object,
            value: {}
        },
        memberFlag: {
            type: Boolean,
            value: !1
        },
        openStatus: {
            type: Boolean,
            value: !0
        },
        dishListOrderedMap: {
            type: Object,
            value: {}
        }
    },
    ready: function() {
        var e = this;
        (0, t.getCartModel)("orderfood").bindDishDotChange(function(t) {
            var a = t.dishDot;
            e.setData({
                dishDot: a
            });
        });
    }
});