(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/uni-load-more/uni-load-more" ], {
    218: function(n, e, t) {
        t.r(e);
        var o = t(219), r = t(221);
        for (var u in r) "default" !== u && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(u);
        t(223);
        var c = t(8), a = Object(c.default)(r.default, o.render, o.staticRenderFns, !1, null, null, null, !1, o.components, void 0);
        a.options.__file = "components/uni-load-more/uni-load-more.vue", e.default = a.exports;
    },
    219: function(n, e, t) {
        t.r(e);
        var o = t(220);
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
    220: function(n, e, t) {
        t.r(e), t.d(e, "render", function() {
            return r;
        }), t.d(e, "staticRenderFns", function() {
            return c;
        }), t.d(e, "recyclableRender", function() {
            return u;
        }), t.d(e, "components", function() {
            return o;
        });
        var o, r = function() {
            var n = this, e = n.$createElement;
            n._self._c;
        }, u = !1, c = [];
        r._withStripped = !0;
    },
    221: function(n, e, t) {
        t.r(e);
        var o = t(222), r = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = r.a;
    },
    222: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "UniLoadMore",
            props: {
                status: {
                    type: String,
                    default: "more"
                },
                showIcon: {
                    type: Boolean,
                    default: !0
                },
                color: {
                    type: String,
                    default: "#777777"
                },
                contentText: {
                    type: Object,
                    default: function() {
                        return {
                            contentdown: "上拉显示更多",
                            contentrefresh: "正在加载...",
                            contentnomore: "没有更多数据了"
                        };
                    }
                }
            },
            data: function() {
                return {};
            }
        };
        e.default = o;
    },
    223: function(n, e, t) {
        t.r(e);
        var o = t(224), r = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = r.a;
    },
    224: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/uni-load-more/uni-load-more-create-component", {
    "components/uni-load-more/uni-load-more-create-component": function(n, e, t) {
        t("1").createComponent(t(218));
    }
}, [ [ "components/uni-load-more/uni-load-more-create-component" ] ] ]);