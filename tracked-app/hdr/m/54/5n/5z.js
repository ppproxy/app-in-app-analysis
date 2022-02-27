var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r, t = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = {
    name: "common-error-middleware",
    action: (r = a(t.default.mark(function e(r, a) {
        var n, o, u, s;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a();

              case 2:
                return n = r.req, o = n.limitLevel, u = n.useCommonErrorToast, !r.status && u && ((s = r.res.response) && "limit" === s.fetchErrorCode && ("alert" === o || "toast" === o) || wx.showToast({
                    title: "网络错误",
                    icon: "none",
                    duration: 2e3
                })), e.abrupt("return", r);

              case 5:
              case "end":
                return e.stop();
            }
        }, e);
    })), function(e, t) {
        return r.apply(this, arguments);
    })
};

exports.default = n;