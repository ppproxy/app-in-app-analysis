(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ui-toast/index" ], {
    2160: function(t, n, e) {
        var o = e("34d0");
        e.n(o).a;
    },
    "34d0": function(t, n, e) {},
    "5fe7": function(t, n, e) {
        e.r(n);
        var o = e("91bd"), u = e("e43c");
        for (var a in u) "default" !== a && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(a);
        e("2160");
        var i = e("f0c5"), c = Object(i.a)(u.default, o.b, o.c, !1, null, "509eb0de", null, !1, o.a, void 0);
        n.default = c.exports;
    },
    "91bd": function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    e43c: function(t, n, e) {
        e.r(n);
        var o = e("f8d5"), u = e.n(o);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = u.a;
    },
    f8d5: function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            name: "ui-toast",
            props: {
                val: {
                    type: String,
                    default: ""
                },
                timeout: {
                    type: Number,
                    default: 1500
                }
            },
            data: function() {
                return {
                    timer: null
                };
            },
            computed: {},
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    clearTimeout(t.timer), t.timer = setTimeout(function() {
                        t.$emit("toggleToast", !1);
                    }, t.timeout);
                });
            }
        };
        n.default = o;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ui-toast/index-create-component", {
    "components/ui-toast/index-create-component": function(t, n, e) {
        e("543d").createComponent(e("5fe7"));
    }
}, [ [ "components/ui-toast/index-create-component" ] ] ]);