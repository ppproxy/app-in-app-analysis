var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.authPrivacyAgree = function(e) {
    return u.apply(this, arguments);
};

var r = e(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../../m/zl/5h"));

function u() {
    return (u = t(r.default.mark(function e(t) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.saas.clogin.member.authPrivacy",
                    param: t || {}
                });

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}