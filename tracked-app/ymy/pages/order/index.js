(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/order/index" ], {
    59: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t(4);
            e(t(2));
            n(e(t(60)).default);
        }).call(this, t(1).createPage);
    },
    60: function(n, e, t) {
        t.r(e);
        var o = t(61), a = t(63);
        for (var r in a) "default" !== r && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        var i = t(8), s = Object(i.default)(a.default, o.render, o.staticRenderFns, !1, null, null, null, !1, o.components, void 0);
        s.options.__file = "pages/order/index.vue", e.default = s.exports;
    },
    61: function(n, e, t) {
        t.r(e);
        var o = t(62);
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
    62: function(n, e, t) {
        t.r(e), t.d(e, "render", function() {
            return a;
        }), t.d(e, "staticRenderFns", function() {
            return i;
        }), t.d(e, "recyclableRender", function() {
            return r;
        }), t.d(e, "components", function() {
            return o;
        });
        var o, a = function() {
            var n = this, e = n.$createElement, o = (n._self._c, t(43));
            n.$mp.data = Object.assign({}, {
                $root: {
                    m0: o
                }
            });
        }, r = !1, i = [];
        a._withStripped = !0;
    },
    63: function(n, e, t) {
        t.r(e);
        var o = t(64), a = t.n(o);
        for (var r in o) "default" !== r && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = a.a;
    },
    64: function(n, e, t) {
        (function(n) {
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(t(22)), r = o(t(65)), i = {
                components: {
                    uniLoadMore: function() {
                        t.e("components/uni-load-more/uni-load-more").then(function() {
                            return resolve(t(218));
                        }.bind(null, t)).catch(t.oe);
                    },
                    nullData: function() {
                        t.e("components/nulldata").then(function() {
                            return resolve(t(225));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        isLogin: !1,
                        status: "more",
                        contentText: {
                            contentdown: "上拉显示更多",
                            contentrefresh: "加载中",
                            contentnomore: "我是有底线的"
                        },
                        nomoreData: !1,
                        loadingText: "上拉显示更多",
                        page: 0,
                        pagesize: 10,
                        orders: []
                    };
                },
                onShow: function() {
                    this.isLogin = a.default.checkUserInfo(), this.isLogin && (n.pageScrollTo({
                        scrollTop: 0
                    }), this.page = 0, this.loadDatas(this.page, !0));
                },
                onPullDownRefresh: function() {
                    this.page = 0, this.loadDatas(this.page, !0);
                },
                onReachBottom: function() {
                    this.loadDatas(this.page, !1);
                },
                methods: {
                    onShareAppMessage: function(n) {
                        return {
                            title: "我的订单",
                            path: "/pages/order/index",
                            imageUrl: ""
                        };
                    },
                    handleClickLinks: function() {},
                    loadDatas: function(e, t) {
                        var o = this;
                        this.isLogin ? (t && (this.nomoreData = !1), this.nomoreData || (this.page = e + 1, 
                        this.status = "loading", r.default.getOrders(this.page, this.pagesize).then(function(e) {
                            if (n.stopPullDownRefresh(), t && (o.orders = []), e && e.success) {
                                var a = 0;
                                e.data && e.data.list && e.data.list.length > 0 && (o.orders = o.orders.concat(e.data.list), 
                                a = e.data.list.length), a < o.pagesize ? (o.nomoreData = !0, o.status = "noMore", 
                                o.loadingText = "我是有底线的") : (o.status = "more", o.loadingText = "上拉显示更多");
                            } else n.showToast({
                                title: e.message || "加载失败",
                                icon: "none",
                                duration: 2e3
                            });
                        }).catch(function(e) {
                            n.stopPullDownRefresh(), n.showToast({
                                title: e.toString(),
                                icon: "none",
                                duration: 2e3
                            });
                        }))) : n.stopPullDownRefresh();
                    }
                }
            };
            e.default = i;
        }).call(this, t(1).default);
    }
}, [ [ 59, "common/runtime", "common/vendor" ] ] ]);