(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/invoice" ], {
    107: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n(4);
            t(n(2));
            e(t(n(108)).default);
        }).call(this, n(1).createPage);
    },
    108: function(e, t, n) {
        n.r(t);
        var o = n(109), s = n(111);
        for (var r in s) "default" !== r && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(r);
        var i = n(8), a = Object(i.default)(s.default, o.render, o.staticRenderFns, !1, null, null, null, !1, o.components, void 0);
        a.options.__file = "pages/my/invoice.vue", t.default = a.exports;
    },
    109: function(e, t, n) {
        n.r(t);
        var o = n(110);
        n.d(t, "render", function() {
            return o.render;
        }), n.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), n.d(t, "recyclableRender", function() {
            return o.recyclableRender;
        }), n.d(t, "components", function() {
            return o.components;
        });
    },
    110: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return s;
        }), n.d(t, "staticRenderFns", function() {
            return i;
        }), n.d(t, "recyclableRender", function() {
            return r;
        }), n.d(t, "components", function() {
            return o;
        });
        var o, s = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, r = !1, i = [];
        s._withStripped = !0;
    },
    111: function(e, t, n) {
        n.r(t);
        var o = n(112), s = n.n(o);
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = s.a;
    },
    112: function(e, t, n) {
        (function(e) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = o(n(22)), r = o(n(113)), i = {
                components: {
                    uniLoadMore: function() {
                        n.e("components/uni-load-more/uni-load-more").then(function() {
                            return resolve(n(218));
                        }.bind(null, n)).catch(n.oe);
                    },
                    nullData: function() {
                        n.e("components/nulldata").then(function() {
                            return resolve(n(225));
                        }.bind(null, n)).catch(n.oe);
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
                        orders: [],
                        selectIds: [],
                        allSelected: !1
                    };
                },
                onShow: function() {
                    this.allSelected = !1, this.selectIds = [], e.removeStorageSync("Invoice"), this.isLogin = s.default.checkUserInfo(), 
                    this.isLogin && (e.pageScrollTo({
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
                    orderClick: function(e) {
                        for (var t = 0; t < this.orders.length; t++) {
                            var n = this.orders[t];
                            n.OrderID == e && (console.log(n.IsSelected), n.IsSelected = !n.IsSelected);
                        }
                    },
                    checkAll: function() {
                        if (this.allSelected) {
                            this.allSelected = !1;
                            for (var e = this.orders, t = 0, n = e.length; t < n; ++t) e[t].IsSelected = !1;
                        } else {
                            this.allSelected = !0;
                            for (var t = 0, n = (e = this.orders).length; t < n; ++t) e[t].IsSelected = !0;
                        }
                    },
                    submitData: function() {
                        this.selectIds = [];
                        for (var t = 0; t < this.orders.length; t++) {
                            var n = this.orders[t];
                            n.IsSelected && this.selectIds.push(n);
                        }
                        0 != this.selectIds.length ? (e.setStorageSync("Invoice", this.selectIds), e.navigateTo({
                            url: "../my/invoiceopen"
                        })) : e.showToast({
                            title: "请选择要开票的订单",
                            icon: "none",
                            duration: 2e3
                        });
                    },
                    loadDatas: function(t, n) {
                        var o = this;
                        this.isLogin ? (n && (this.nomoreData = !1), this.nomoreData || (this.page = t + 1, 
                        this.status = "loading", r.default.listOrder(this.page, this.pagesize).then(function(t) {
                            if (e.stopPullDownRefresh(), n && (o.orders = []), t && t.success) {
                                var s = 0;
                                if (t.data && t.data.list && t.data.list.length > 0) {
                                    for (var r = 0; r < t.data.list.length; r++) t.data.list[r].IsSelected = !1;
                                    o.orders = o.orders.concat(t.data.list), s = t.data.list.length;
                                }
                                s < o.pagesize ? (o.nomoreData = !0, o.status = "noMore", o.loadingText = "我是有底线的") : (o.status = "more", 
                                o.loadingText = "上拉显示更多");
                            } else e.showToast({
                                title: t.message || "加载失败",
                                icon: "none",
                                duration: 2e3
                            });
                        }).catch(function(t) {
                            e.stopPullDownRefresh(), e.showToast({
                                title: t.toString(),
                                icon: "none",
                                duration: 2e3
                            });
                        }))) : e.stopPullDownRefresh();
                    }
                }
            };
            t.default = i;
        }).call(this, n(1).default);
    }
}, [ [ 107, "common/runtime", "common/vendor" ] ] ]);