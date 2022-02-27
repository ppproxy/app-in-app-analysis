var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/slicedToArray"), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), o = e(require("../../zv")), s = {
    cdn: "cdn"
}, c = {
    http: "http",
    mtop: "mtop"
}, i = {
    type: s.cdn,
    requestType: c.mtop,
    projectName: "alsc-merchant-mini-c"
}, u = o.default.mockConfig, p = void 0 === u ? {} : u, l = p.type || i.type, d = p.requestType || i.defaultConfig, f = p.projectName || i.projectName, m = function() {
    var e = n(r.default.mark(function e(t, n) {
        var o, s, i, u;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = null, s = t.req, i = s.api, u = s.param, "on", e.next = 6, new Promise(function(e, r) {
                    wx.request({
                        url: "https://apistudio.alibaba-inc.com/mock/".concat(c[d], "/").concat(f, "/").concat(i),
                        method: "POST",
                        data: u,
                        headers: {
                            "content-type": "application/json"
                        },
                        dataType: "json",
                        success: function(n) {
                            if (200 === n.statusCode) {
                                if (t.skipCore = !0, d === c.mtop) {
                                    var o = n.data.ret;
                                    if (o && o.length > 0) {
                                        var s = (o[0] || "").split("::"), i = a(s, 2), u = i[0], p = i[1];
                                        "SUCCESS" !== u ? r({
                                            errorType: u,
                                            errorMessage: p,
                                            message: p,
                                            response: n.data
                                        }) : e(n.data);
                                    } else r(new Error("请设置mtop接口的ret值"));
                                } else if (d === c.http) {
                                    var l = n.data.success;
                                    l ? e(n.data) : r(n.data);
                                }
                            } else r(n);
                        },
                        fail: function(e) {
                            r(e);
                        }
                    });
                });

              case 6:
                o = e.sent;

              case 7:
                return e.next = 9, n();

              case 9:
                o && (t.res = o, t.status = !0);

              case 10:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(t, r) {
        return e.apply(this, arguments);
    };
}(), h = {
    name: "mock-middleware",
    action: (t = n(r.default.mark(function e(t, a) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t.isMock = !0, l !== s.local) {
                    e.next = 5;
                    break;
                }
                console.error("mock-middleware将不再支持本地mock，请将type设置为cdn类型"), e.next = 8;
                break;

              case 5:
                if (l !== s.cdn) {
                    e.next = 8;
                    break;
                }
                return e.next = 8, m(t, a);

              case 8:
              case "end":
                return e.stop();
            }
        }, e);
    })), function(e, r) {
        return t.apply(this, arguments);
    })
};

exports.default = h;