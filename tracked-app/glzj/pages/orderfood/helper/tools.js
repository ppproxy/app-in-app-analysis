var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hadDistanceOrMultipleShopReminder = function() {
    return r.default.get("shop.distance.judge");
}, exports.isOrderAgain = function(e) {
    return "orderAgain" === e.actionType;
}, exports.isTouchedShop = function() {
    return !!r.default.get("shop.list.touched");
};

var r = e(require("../../../m/zl/5o"));