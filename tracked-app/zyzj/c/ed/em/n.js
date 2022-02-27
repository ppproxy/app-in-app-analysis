var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")), t = require("../../../l/wh");

(0, e.default)({
    name: "member-assistance-coupon",
    properties: {
        couponInfo: {
            type: Object,
            value: {}
        },
        themecolor: {
            type: String,
            value: ""
        },
        fontColor: {
            type: String,
            value: "#FF1616"
        },
        bgColor: {
            type: String,
            value: ""
        },
        opacity: {
            type: Number,
            value: 0
        }
    },
    data: {
        themecolor: ""
    },
    ready: function() {
        this.setData({
            themecolor: this.data.themecolor || (0, t.getThemeColor)() || ""
        });
    }
});