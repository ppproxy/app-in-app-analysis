var e = require("../../@babel/runtime/helpers/interopRequireDefault"), r = e(require("../../m/zk/za"));

e(require("../../m/5y"));

(0, r.default)({
    name: "展示数量-小红点",
    data: {
        styles: {
            large: "e9l",
            small: "ext"
        }
    },
    properties: {
        extStyle: {
            type: String,
            value: ""
        },
        num: {
            type: Number,
            value: 0
        },
        size: {
            type: String,
            value: "large"
        }
    }
});