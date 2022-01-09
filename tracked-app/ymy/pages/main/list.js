(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/main/list" ], {
    29: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n(4);
            e(n(2));
            t(e(n(30)).default);
        }).call(this, n(1).createPage);
    },
    30: function(t, e, n) {
        n.r(e);
        var o = n(31), i = n(33);
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        var a = n(8), r = Object(a.default)(i.default, o.render, o.staticRenderFns, !1, null, null, null, !1, o.components, void 0);
        r.options.__file = "pages/main/list.vue", e.default = r.exports;
    },
    31: function(t, e, n) {
        n.r(e);
        var o = n(32);
        n.d(e, "render", function() {
            return o.render;
        }), n.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), n.d(e, "recyclableRender", function() {
            return o.recyclableRender;
        }), n.d(e, "components", function() {
            return o.components;
        });
    },
    32: function(t, e, n) {
        n.r(e), n.d(e, "render", function() {
            return i;
        }), n.d(e, "staticRenderFns", function() {
            return a;
        }), n.d(e, "recyclableRender", function() {
            return s;
        }), n.d(e, "components", function() {
            return o;
        });
        var o;
        try {
            o = {
                uniPopup: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/uni-popup/uni-popup") ]).then(n.bind(null, 157));
                }
            };
        } catch (t) {
            if (-1 === t.message.indexOf("Cannot find module") || -1 === t.message.indexOf(".vue")) throw t;
            console.error(t.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var i = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, s = !1, a = [];
        i._withStripped = !0;
    },
    33: function(t, e, n) {
        n.r(e);
        var o = n(34), i = n.n(o);
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        e.default = i.a;
    },
    34: function(t, e, n) {
        (function(t) {
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = o(n(16)), s = o(n(17)), a = o(n(35)), r = o(n(36)), u = o(n(22)), c = {
                name: "app",
                data: function() {
                    return {
                        nomoreData: !1,
                        loadingText: "上拉显示更多",
                        page: 0,
                        productBookingContent: "",
                        pagesize: 15,
                        products: [],
                        scenic: {},
                        todaySession: {},
                        groupId: "",
                        sessions: []
                    };
                },
                components: {
                    noticeBar: function() {
                        n.e("components/uni-notice-bar/uni-notice-bar").then(function() {
                            return resolve(n(204));
                        }.bind(null, n)).catch(n.oe);
                    },
                    uniMessage: function() {
                        n.e("components/showmessage").then(function() {
                            return resolve(n(199));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                onLoad: function(t) {
                    this.groupId = parseInt(t.id);
                },
                onShow: function() {
                    this.loadGroup(), this.loadScenic(), this.loadSession(), this.loadProduct();
                },
                onPullDownRefresh: function() {
                    this.loadProduct();
                },
                methods: {
                    onShareAppMessage: function(t) {
                        return {
                            title: this.scenic.Name,
                            path: "/pages/main/index",
                            imageUrl: ""
                        };
                    },
                    confirmSuccess: function(e, n) {
                        t.navigateTo({
                            url: "/pages/order/create?productid=" + e + "&scenicname=" + n
                        });
                    },
                    loadScenic: function() {
                        var e = this;
                        this.distributor = i.default.getDistributor(), this.distributor < 0 && (this.distributor = i.default.base_distributor), 
                        s.default.getScenic(parseInt(this.distributor), null).then(function(n) {
                            t.stopPullDownRefresh(), n && n.success && n.data ? e.scenic = n.data : t.showToast({
                                title: n.message || "加载失败",
                                icon: "none",
                                duration: 2e3
                            });
                        }).catch(function(e) {
                            t.stopPullDownRefresh(), t.showToast({
                                title: "出错了，请检查网络连接",
                                icon: "none",
                                duration: 2e3
                            });
                        });
                    },
                    loadGroup: function() {
                        this.distributor = i.default.getDistributor(), this.distributor < 0 && (this.distributor = i.default.base_distributor), 
                        s.default.groupGet(parseInt(this.groupId)).then(function(e) {
                            t.stopPullDownRefresh(), e && e.success && e.data ? e.data.canBuy || t.navigateTo({
                                url: "/pages/main/guide"
                            }) : t.showToast({
                                title: e.message || "加载失败",
                                icon: "none",
                                duration: 2e3
                            });
                        }).catch(function(e) {
                            t.stopPullDownRefresh(), t.showToast({
                                title: "出错了，请检查网络连接",
                                icon: "none",
                                duration: 2e3
                            });
                        });
                    },
                    loadSession: function() {
                        var e = this;
                        this.distributor = i.default.getDistributor(), this.distributor < 0 && (this.distributor = i.default.base_distributor), 
                        a.default.getSession(parseInt(this.distributor), null, null, this.groupId).then(function(n) {
                            if (t.stopPullDownRefresh(), e.sessions = [], n && n.success && n.data) {
                                var o = n.data.length;
                                o > 6 && (o = 6);
                                for (var i = 0; i < o; i++) {
                                    var s = n.data[i];
                                    if (0 == i) e.todaySession = s; else {
                                        var a = s.Time.substr(5, 5);
                                        e.sessions.push({
                                            Time: a,
                                            StockList: s.StockList
                                        });
                                    }
                                }
                            } else t.showToast({
                                title: n.message || "加载失败",
                                icon: "none",
                                duration: 2e3
                            });
                        }).catch(function(e) {
                            t.stopPullDownRefresh(), t.showToast({
                                title: "出错了，请检查网络连接",
                                icon: "none",
                                duration: 2e3
                            });
                        });
                    },
                    loadProduct: function() {
                        this.groupId ? (this.products = [], this.loadProductsByGroup()) : (this.page = 0, 
                        this.nomoreData = !1, this.loadAllProducts(0, !0));
                    },
                    loadProductsByGroup: function() {
                        var t = this;
                        s.default.listByGroup(this.groupId).then(function(e) {
                            if (e && e.success && e.data && e.data.length > 0) {
                                for (var n = r.default.getDate(new Date()), o = 0; o < e.data.length; o++) {
                                    var i = e.data[o], s = r.default.getDate(new Date(i.StartDate));
                                    i.BookInfo = n == s ? "最早可今日预订" : "最早预定日期：" + s;
                                }
                                t.products = e.data;
                            }
                        });
                    },
                    loadAllProducts: function(t, e) {
                        var n = this;
                        this.nomoreData || (this.page = t + 1, s.default.productList(this.page, this.pagesize, this.distributor).then(function(t) {
                            e && (n.products = []), n.isLoaded = !0;
                            var o = 0;
                            if (t && t.success && t.data && t.data.list && t.data.list.length > 0) {
                                o = t.data.list.length;
                                for (var i = r.default.getDate(new Date()), s = 0; s < t.data.list.length; s++) {
                                    var a = t.data.list[s], u = r.default.getDate(new Date(a.StartDate));
                                    a.BookInfo = i == u ? "最早可今日预订" : "最早预定日期：" + u;
                                }
                                n.products = n.products.concat(t.data.list);
                            }
                            o < n.pagesize ? (n.nomoreData = !0, n.loadingText = "我是有底线的") : n.loadingText = "上拉显示更多";
                        }));
                    },
                    bookClick: function(e, n, o, i) {
                        this.isLogin = u.default.checkUserInfo(), this.isLogin && (o ? this.$refs.unimessage.init(o, e, n, i) : t.navigateTo({
                            url: "/pages/order/create?productid=" + e + "&scenicname=" + n
                        }));
                    },
                    open2: function(t) {
                        this.productBookingContent = t ? r.default.htmlReplace(t) : "", this.$refs.popup2.open();
                    },
                    close2: function() {
                        this.$refs.popup2.close();
                    }
                }
            };
            e.default = c;
        }).call(this, n(1).default);
    }
}, [ [ 29, "common/runtime", "common/vendor" ] ] ]);