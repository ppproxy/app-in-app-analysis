(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/main/success" ], {
    193: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t(4);
            e(t(2));
            n(e(t(194)).default);
        }).call(this, t(1).createPage);
    },
    194: function(n, e, t) {
        t.r(e);
        var r = t(195), u = t(197);
        for (var c in u) "default" !== c && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(c);
        var o = t(8), a = Object(o.default)(u.default, r.render, r.staticRenderFns, !1, null, null, null, !1, r.components, void 0);
        a.options.__file = "pages/main/success.vue", e.default = a.exports;
    },
    195: function(n, e, t) {
        t.r(e);
        var r = t(196);
        t.d(e, "render", function() {
            return r.render;
        }), t.d(e, "staticRenderFns", function() {
            return r.staticRenderFns;
        }), t.d(e, "recyclableRender", function() {
            return r.recyclableRender;
        }), t.d(e, "components", function() {
            return r.components;
        });
    },
    196: function(n, e, t) {
        t.r(e), t.d(e, "render", function() {
            return u;
        }), t.d(e, "staticRenderFns", function() {
            return o;
        }), t.d(e, "recyclableRender", function() {
            return c;
        }), t.d(e, "components", function() {
            return r;
        });
        var r, u = function() {
            var n = this, e = n.$createElement;
            n._self._c;
        }, c = !1, o = [];
        u._withStripped = !0;
    },
    197: function(n, e, t) {
        t.r(e);
        var r = t(198), u = t.n(r);
        for (var c in r) "default" !== c && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(c);
        e.default = u.a;
    },
    198: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = {
            data: function() {
                return {
                    msg: "注册提交成功，请耐心等待审核"
                };
            },
            onLoad: function(n) {
                this.msg = n.msg;
            }
        };
        e.default = r;
    }
}, [ [ 193, "common/runtime", "common/vendor" ] ] ]);