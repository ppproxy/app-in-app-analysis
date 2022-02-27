var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.queryCouponInfo = function(e) {
    return u.apply(this, arguments);
};

var r = e(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../m/zl/5h"));

function u() {
    return (u = t(r.default.mark(function e(t) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, i(a, t, 6e3);

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

var a = function(e) {
    var r = {
        activityId: e,
        extInfo: JSON.stringify({
            businessScene: "SAAS_APPLET"
        })
    };
    return n.default.request({
        api: "mtop.alsc.saas.promoprod.api.syncApplyVoucher",
        param: r
    });
}, i = function(e, n) {
    var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e4, a = null, i = new Promise(function(e) {
        a = function() {
            e("TIMEOUT");
        };
    });
    setTimeout(function() {
        a();
    }, u);
    var s = new Promise(function() {
        var u = t(r.default.mark(function t(u, a) {
            var i;
            return r.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.prev = 0, r.next = 3, e(n);

                  case 3:
                    (i = r.sent) && u(i), r.next = 10;
                    break;

                  case 7:
                    r.prev = 7, r.t0 = r.catch(0), r.t0.response.ret ? u("FAILURE") : a(r.t0);

                  case 10:
                  case "end":
                    return r.stop();
                }
            }, t, null, [ [ 0, 7 ] ]);
        }));
        return function(e, r) {
            return u.apply(this, arguments);
        };
    }());
    return Promise.race([ s, i ]);
};