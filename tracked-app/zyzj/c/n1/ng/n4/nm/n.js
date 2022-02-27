var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../m/zk/za")), t = require("../../zt");

(0, e.default)({
    name: "cart-bubble-item",
    properties: {
        bubble: {
            type: Object,
            value: null
        }
    },
    data: {
        inner: !1,
        outer: !1
    },
    ready: function() {
        var e = this;
        this.setData({
            inner: !0
        }), setTimeout(function() {
            e.setData({
                inner: !1,
                outer: !0
            });
        }, t.BUBBLE_INTERVAL);
    }
});