(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ui-iphonex-spacer/index" ], {
    "03e3": function(n, e, t) {},
    "06ab": function(n, e, t) {
        t.r(e);
        var o = t("216c"), i = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = i.a;
    },
    "216c": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "ui-iphonex-spacer",
            props: {
                bgColor: {
                    type: String,
                    default: function() {
                        return "transparent";
                    }
                }
            },
            data: function() {
                return {
                    height: "0"
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
                    n.isIPhoneX ? n.height = "20rpx" : n.height = "0";
                });
            }
        };
        e.default = o;
    },
    "6fe3": function(n, e, t) {
        var o = t("03e3");
        t.n(o).a;
    },
    "96f4": function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return i;
        }), t.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    a0c9: function(n, e, t) {
        t.r(e);
        var o = t("96f4"), i = t("06ab");
        for (var c in i) "default" !== c && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(c);
        t("6fe3");
        var a = t("f0c5"), r = Object(a.a)(i.default, o.b, o.c, !1, null, "20e643db", null, !1, o.a, void 0);
        e.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ui-iphonex-spacer/index-create-component", {
    "components/ui-iphonex-spacer/index-create-component": function(n, e, t) {
        t("543d").createComponent(t("a0c9"));
    }
}, [ [ "components/ui-iphonex-spacer/index-create-component" ] ] ]);