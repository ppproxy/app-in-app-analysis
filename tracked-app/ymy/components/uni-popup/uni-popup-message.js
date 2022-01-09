(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/uni-popup/uni-popup-message" ], {
    166: function(n, e, t) {
        t.r(e);
        var o = t(167), u = t(169);
        for (var r in u) "default" !== r && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(r);
        t(171);
        var p = t(8), i = Object(p.default)(u.default, o.render, o.staticRenderFns, !1, null, "2b5e1e44", null, !1, o.components, void 0);
        i.options.__file = "components/uni-popup/uni-popup-message.vue", e.default = i.exports;
    },
    167: function(n, e, t) {
        t.r(e);
        var o = t(168);
        t.d(e, "render", function() {
            return o.render;
        }), t.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), t.d(e, "recyclableRender", function() {
            return o.recyclableRender;
        }), t.d(e, "components", function() {
            return o.components;
        });
    },
    168: function(n, e, t) {
        t.r(e), t.d(e, "render", function() {
            return u;
        }), t.d(e, "staticRenderFns", function() {
            return p;
        }), t.d(e, "recyclableRender", function() {
            return r;
        }), t.d(e, "components", function() {
            return o;
        });
        var o, u = function() {
            var n = this, e = n.$createElement;
            n._self._c;
        }, r = !1, p = [];
        u._withStripped = !0;
    },
    169: function(n, e, t) {
        t.r(e);
        var o = t(170), u = t.n(o);
        for (var r in o) "default" !== r && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = u.a;
    },
    170: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "UniPopupMessage",
            props: {
                type: {
                    type: String,
                    default: "success"
                },
                message: {
                    type: String,
                    default: ""
                },
                duration: {
                    type: Number,
                    default: 3e3
                }
            },
            inject: [ "popup" ],
            data: function() {
                return {};
            },
            created: function() {
                this.popup.childrenMsg = this;
            },
            methods: {
                open: function() {
                    var n = this;
                    0 !== this.duration && (clearTimeout(this.popuptimer), this.popuptimer = setTimeout(function() {
                        n.popup.close();
                    }, this.duration));
                },
                close: function() {
                    clearTimeout(this.popuptimer);
                }
            }
        };
        e.default = o;
    },
    171: function(n, e, t) {
        t.r(e);
        var o = t(172), u = t.n(o);
        for (var r in o) "default" !== r && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = u.a;
    },
    172: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/uni-popup/uni-popup-message-create-component", {
    "components/uni-popup/uni-popup-message-create-component": function(n, e, t) {
        t("1").createComponent(t(166));
    }
}, [ [ "components/uni-popup/uni-popup-message-create-component" ] ] ]);