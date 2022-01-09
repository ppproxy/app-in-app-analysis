(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/app-simple-footer/index" ], {
    1266: function(n, e, t) {},
    "67aa": function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "731a": function(n, e, t) {
        t.r(e);
        var o = t("9a77"), a = t.n(o);
        for (var i in o) "default" !== i && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(i);
        e.default = a.a;
    },
    "9a77": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        e.default = {
            name: "app-simple-footer",
            data: function() {
                return {
                    startTime: 0,
                    height: "52rpx"
                };
            },
            computed: {
                isIPhone: function() {
                    return this.$store.state.systemInfo.isIPhone || !1;
                },
                isIPhoneX: function() {
                    return this.$store.state.systemInfo.isIPhoneX || !1;
                }
            },
            mounted: function() {
                var n = this;
                this.$nextTick(function() {
                    n.isIPhoneX && (n.height = "72rpx");
                });
            }
        };
    },
    d47a: function(n, e, t) {
        var o = t("1266");
        t.n(o).a;
    },
    dc44: function(n, e, t) {
        t.r(e);
        var o = t("67aa"), a = t("731a");
        for (var i in a) "default" !== i && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(i);
        t("d47a");
        var c = t("f0c5"), r = Object(c.a)(a.default, o.b, o.c, !1, null, "65ffe483", null, !1, o.a, void 0);
        e.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/app-simple-footer/index-create-component", {
    "components/app-simple-footer/index-create-component": function(n, e, t) {
        t("543d").createComponent(t("dc44"));
    }
}, [ [ "components/app-simple-footer/index-create-component" ] ] ]);