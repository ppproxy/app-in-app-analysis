var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r, t = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../z3/z2")), s = e(require("../../zl/5h")), i = {
    name: "no-session-middleware",
    action: (r = a(t.default.mark(function e(r, a) {
        var i, u, o, p;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a();

              case 2:
                if (i = r.res.response ? r.res.response : {}, u = (i || {}).ret, !((o = void 0 === u ? [] : u)[0] && o[0].indexOf("FAIL_SYS_SESSION_EXPIRED") > -1)) {
                    e.next = 13;
                    break;
                }
                if (!((p = r.req.retryTime || 0) < 3)) {
                    e.next = 13;
                    break;
                }
                return e.next = 9, n.default.login();

              case 9:
                return e.next = 11, s.default.request({
                    api: r.req.api,
                    param: r.req.param,
                    options: r.req.options,
                    retryTime: p + 1
                });

              case 11:
                r.res = e.sent, r.status = !0;

              case 13:
              case "end":
                return e.stop();
            }
        }, e);
    })), function(e, t) {
        return r.apply(this, arguments);
    })
};

exports.default = i;