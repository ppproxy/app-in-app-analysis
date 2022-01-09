(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/main/index" ], [ , , , , , , , , , , function(n, e, t) {
    (function(n) {
        function e(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        t(4);
        e(t(2));
        n(e(t(11)).default);
    }).call(this, t(1).createPage);
}, function(n, e, t) {
    t.r(e);
    var i = t(12), r = t(14);
    for (var o in r) "default" !== o && function(n) {
        t.d(e, n, function() {
            return r[n];
        });
    }(o);
    var u = t(8), a = Object(u.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null, !1, i.components, void 0);
    a.options.__file = "pages/main/index.vue", e.default = a.exports;
}, function(n, e, t) {
    t.r(e);
    var i = t(13);
    t.d(e, "render", function() {
        return i.render;
    }), t.d(e, "staticRenderFns", function() {
        return i.staticRenderFns;
    }), t.d(e, "recyclableRender", function() {
        return i.recyclableRender;
    }), t.d(e, "components", function() {
        return i.components;
    });
}, function(n, e, t) {
    t.r(e), t.d(e, "render", function() {
        return r;
    }), t.d(e, "staticRenderFns", function() {
        return u;
    }), t.d(e, "recyclableRender", function() {
        return o;
    }), t.d(e, "components", function() {
        return i;
    });
    var i, r = function() {
        var n = this, e = n.$createElement;
        n._self._c;
    }, o = !1, u = [];
    r._withStripped = !0;
}, function(n, e, t) {
    t.r(e);
    var i = t(15), r = t.n(i);
    for (var o in i) "default" !== o && function(n) {
        t.d(e, n, function() {
            return i[n];
        });
    }(o);
    e.default = r.a;
}, function(n, e, t) {
    (function(n) {
        function i(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = i(t(16)), o = i(t(17)), u = {
            name: "app",
            data: function() {
                return {
                    distributor: null,
                    alreadyRead: !1,
                    scenic: {}
                };
            },
            onLoad: function(n) {},
            onShow: function() {
                this.loadScenic();
            },
            onPullDownRefresh: function() {
                this.loadScenic();
            },
            methods: {
                onShareAppMessage: function(n) {
                    return {
                        title: this.scenic.Name,
                        path: "/pages/main/index",
                        imageUrl: ""
                    };
                },
                read: function() {
                    this.alreadyRead = !this.alreadyRead;
                },
                buy: function() {
                    n.navigateTo({
                        url: "/pages/main/group"
                    });
                },
                loadScenic: function() {
                    var e = this;
                    this.distributor = r.default.getDistributor(), this.distributor < 0 && (this.distributor = r.default.base_distributor), 
                    o.default.getScenic(parseInt(this.distributor), this.scenicId).then(function(t) {
                        n.stopPullDownRefresh(), t && t.success && t.data ? e.scenic = t.data : n.showToast({
                            title: t.message || "加载失败",
                            icon: "none",
                            duration: 2e3
                        });
                    }).catch(function(e) {
                        n.stopPullDownRefresh(), n.showToast({
                            title: "出错了，请检查网络连接",
                            icon: "none",
                            duration: 2e3
                        });
                    });
                }
            }
        };
        e.default = u;
    }).call(this, t(1).default);
} ], [ [ 10, "common/runtime", "common/vendor" ] ] ]);