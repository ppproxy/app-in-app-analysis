var window = window || {};

window.webpackJsonp = require("../../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 175 ], {
    1062: function(e, n, r) {
        "use strict";
        r.r(n), function(e) {
            e.currentModuleId = "mb7195b68", e.currentCtor = Component, e.currentResourceType = "page", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "mb7195b68",
                render: function() {
                    this._r();
                }
            };
            r(401);
            e.currentModuleId;
        }.call(this, r(11));
    },
    401: function(e, n, r) {
        "use strict";
        var o = r(1), t = r.n(o), c = r(2), u = r(8), s = r(738), d = r.n(s);
        Object(c.c)({
            onLoad(e) {
                var n = Object(u.c)(d.a, t()({}, e), !1);
                c.d.showLoading({
                    title: "加载中",
                    mask: !1
                }), c.d.redirectTo({
                    url: n
                });
            }
        });
    },
    738: function(e, n, r) {
        e.exports = "/subpackages/paymentProcess/no_secret_pay/no_secret_pay";
    }
}, [ [ 1062, 0 ] ] ]);
//# sourceMappingURL=no_secret_pay.js.map