var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, require("../../../@babel/runtime/helpers/Arrayincludes");

var r = e(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/objectSpread2"), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../zd/n")), s = [ "requestStart", "requestEnd", "responseStart", "responseEnd", "rtt", "estimate_nettype", "throughputKbps", "peerIP", "socketReused" ];

function u() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", r = e, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
    return "string" != typeof e && (r = JSON.stringify(e)), r.substr(0, t);
}

var o, i = {
    name: "common-monitor-middleware",
    action: (o = a(r.default.mark(function e(a, o) {
        var i, c, p, d, l, b, f, m, v, g, h, q, y, x, k, w, S, _, T, j, A, D, E, O, H, M, P;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return i = Date.now(), e.next = 3, o();

              case 3:
                if (e.prev = 3, c = n.default.$ltracker, p = new Date().getTime() - i, d = a.req.api, 
                l = a.res || {}, b = l.retType, f = l.ret, m = void 0 === f ? [] : f, v = l.errorMessage, 
                g = l.errorType, h = l.responseHeaders, q = void 0 === h ? {} : h, y = l.response, 
                x = l.request, k = void 0 === x ? {} : x, w = l.data, S = void 0 === w ? {} : w, 
                _ = l.skipCore, T = l.profile, j = l.duration, !_) {
                    e.next = 10;
                    break;
                }
                return e.abrupt("return");

              case 10:
                if (d) {
                    e.next = 12;
                    break;
                }
                return e.abrupt("return");

              case 12:
                A = {
                    url: d,
                    duration: j > 4e3 ? p > 4e3 ? 4e3 : p : j,
                    params: k.param,
                    rtype: "mtop",
                    headers: ""
                }, a.status ? (T && (D = Object.keys(T).filter(function(e) {
                    return s.includes(e);
                }), E = D.reduce(function(e, r) {
                    return T[r] ? e ? "".concat(e, "&").concat(r, "=").concat(T[r]) : "".concat(r, "=").concat(T[r]) : e;
                }, ""), A.headers = E, (O = T.requestEnd - T.requestStart) && O < 4e3 && (A.duration = O)), 
                c.logApi(t(t({}, A), {}, {
                    success: !0,
                    response: u(S, 300),
                    code: b,
                    msg: m[0] || "mtop::success",
                    trace_id: q["x-eagleeye-id"]
                }))) : (H = t(t({}, A), {}, {
                    success: !1,
                    msg: v || "mtop::fail",
                    code: g
                }), y && (M = y.responseHeaders, P = void 0 === M ? {} : M, H.response = u(P, 300), 
                H.trace_id = P["x-eagleeye-id"]), c.logApi(H)), e.next = 19;
                break;

              case 17:
                e.prev = 17, e.t0 = e.catch(3);

              case 19:
                return e.abrupt("return", a);

              case 20:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 3, 17 ] ]);
    })), function(e, r) {
        return o.apply(this, arguments);
    })
};

exports.default = i;