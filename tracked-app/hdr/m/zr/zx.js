var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../zt")), a = {
    home: {
        text: "首页",
        code: "home",
        pagePath: t.default.MINI_PATH.LIGHT_SHOP_PATH,
        selectedIconPath: "https://gw.alicdn.com/tfs/TB1HxhQUxD1gK0jSZFsXXbldVXa-48-48.svg"
    },
    dish: {
        text: "点餐",
        code: "dish",
        pagePath: t.default.MINI_PATH.ORDER_FOOD_PATH,
        selectedIconPath: "https://gw.alicdn.com/tfs/TB1L9OAfZieb18jSZFvXXaI3FXa-48-48.svg"
    },
    order: {
        text: "订单",
        code: "order",
        pagePath: t.default.MINI_PATH.ORDER_LIST_PATH,
        selectedIconPath: "https://gw.alicdn.com/tfs/TB1.wWnlaNj0u4jSZFyXXXgMVXa-48-48.svg"
    },
    mall: {
        text: "商城",
        code: "mall",
        pagePath: "pages/shopmall/index",
        selectedIconPath: "https://gw.alicdn.com/tfs/TB1LnGdl639YK4jSZPcXXXrUFXa-48-48.svg"
    },
    personal: {
        text: "我的",
        code: "personal",
        pagePath: t.default.MINI_PATH.MEMBER_BY_PATH,
        selectedIconPath: "https://gw.alicdn.com/tfs/TB1wajCe4vbeK8jSZPfXXariXXa-48-48.svg"
    }
};

exports.default = a;