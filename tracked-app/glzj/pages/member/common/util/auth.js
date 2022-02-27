var e = require("../../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getPhoneAuth = function(e, u, l) {
    var n = this;
    (0, t.getAuthPhoneFlag)() ? u && u.call(this) : r.default.auth({
        context: e.getComponentById("authPhoneModal")
    }, function(e) {
        u && u.call(n);
    }, function(e) {
        l && l.call(n);
    });
};

var t = require("../../../../l/wh"), r = e(require("../../../../m/z3/zs"));