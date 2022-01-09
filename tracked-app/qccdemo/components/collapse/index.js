(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/collapse/index" ], {
    "0575": function(n, e, t) {
        var o = t("419a");
        t.n(o).a;
    },
    "419a": function(n, e, t) {},
    "728f": function(n, e, t) {
        t.r(e);
        var o = t("9515"), a = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = a.a;
    },
    9515: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "collapse",
            props: {
                title: {
                    type: String,
                    default: "暂时没有找到相关数据"
                },
                center: {
                    type: Boolean,
                    default: !1
                },
                content: {
                    type: Array,
                    default: []
                }
            },
            data: function() {
                return {
                    isCollapse: !1
                };
            },
            mounted: function() {
                var n = this;
                setTimeout(function() {
                    n.isInitial = !0;
                }, 300);
            },
            methods: {
                collapse: function() {
                    this.isCollapse = !this.isCollapse;
                }
            }
        };
        e.default = o;
    },
    ab46: function(n, e, t) {
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
    d9cf9: function(n, e, t) {
        t.r(e);
        var o = t("ab46"), a = t("728f");
        for (var c in a) "default" !== c && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("0575");
        var l = t("f0c5"), i = Object(l.a)(a.default, o.b, o.c, !1, null, "4a1f0422", null, !1, o.a, void 0);
        e.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/collapse/index-create-component", {
    "components/collapse/index-create-component": function(n, e, t) {
        t("543d").createComponent(t("d9cf9"));
    }
}, [ [ "components/collapse/index-create-component" ] ] ]);