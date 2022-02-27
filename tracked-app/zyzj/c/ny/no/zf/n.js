var e = require("../../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateFulfillOrderByShipped = function() {
    return n.apply(this, arguments);
};

var r = e(require("../../../../@babel/runtime/regenerator")), t = require("../../../../@babel/runtime/helpers/objectSpread2"), a = require("../../../../@babel/runtime/helpers/asyncToGenerator"), u = e(require("../../../../m/zl/5h"));

function n() {
    return (n = a(r.default.mark(function e() {
        var a, n = arguments;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = n.length > 0 && void 0 !== n[0] ? n[0] : {}, e.next = 3, u.default.request({
                    api: "mtop.alsc.saas.capp.orderagg.fulfill.updateFulfillOrderByShipped",
                    param: t({}, a)
                });

              case 3:
                return e.abrupt("return", e.sent);

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}