(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/main/group" ], {
    181: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t(4);
            e(t(2));
            n(e(t(182)).default);
        }).call(this, t(1).createPage);
    },
    182: function(n, e, t) {
        t.r(e);
        var o = t(183), r = t(185);
        for (var u in r) "default" !== u && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(u);
        var i = t(8), c = Object(i.default)(r.default, o.render, o.staticRenderFns, !1, null, null, null, !1, o.components, void 0);
        c.options.__file = "pages/main/group.vue", e.default = c.exports;
    },
    183: function(n, e, t) {
        t.r(e);
        var o = t(184);
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
    184: function(n, e, t) {
        t.r(e), t.d(e, "render", function() {
            return r;
        }), t.d(e, "staticRenderFns", function() {
            return i;
        }), t.d(e, "recyclableRender", function() {
            return u;
        }), t.d(e, "components", function() {
            return o;
        });
        var o;
        try {
            o = {
                uniNoticeBar: function() {
                    return t.e("components/uni-notice-bar/uni-notice-bar").then(t.bind(null, 204));
                },
                uniPopup: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/uni-popup/uni-popup") ]).then(t.bind(null, 157));
                }
            };
        } catch (n) {
            if (-1 === n.message.indexOf("Cannot find module") || -1 === n.message.indexOf(".vue")) throw n;
            console.error(n.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var r = function() {
            var n = this, e = n.$createElement;
            n._self._c;
        }, u = !1, i = [];
        r._withStripped = !0;
    },
    185: function(n, e, t) {
        t.r(e);
        var o = t(186), r = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = r.a;
    },
    186: function(n, e, t) {
        (function(n) {
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(t(16)), u = o(t(17)), i = (o(t(22)), {
                components: {
                    noticeBar: function() {
                        t.e("components/uni-notice-bar/uni-notice-bar").then(function() {
                            return resolve(t(204));
                        }.bind(null, t)).catch(t.oe);
                    },
                    uniPopup: function() {
                        Promise.all([ t.e("common/vendor"), t.e("components/uni-popup/uni-popup") ]).then(function() {
                            return resolve(t(157));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        scenic: {},
                        groups: []
                    };
                },
                onLoad: function(n) {},
                onShow: function() {
                    this.loadScenic(), this.loadGroup();
                },
                methods: {
                    open: function() {
                        this.$refs.popup.open();
                    },
                    close: function() {
                        this.$refs.popup.close();
                    },
                    loadScenic: function() {
                        var e = this;
                        this.distributor = r.default.getDistributor(), this.distributor < 0 && (this.distributor = r.default.base_distributor), 
                        u.default.getScenic(parseInt(this.distributor), this.scenicId).then(function(t) {
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
                    },
                    loadGroup: function() {
                        var n = this;
                        u.default.groupList().then(function(e) {
                            if (e && e.success && e.data && e.data.length > 0) {
                                for (var t = 0; t < e.data.length; t++) {
                                    var o = e.data[t];
                                    o.show = !1;
                                    for (var r = 0; r < o.Products; r++) {
                                        var u = o.Products[r], i = util.getDate(new Date(u.StartDate));
                                        now == i ? u.BookInfo = "最早可今日预订" : u.BookInfo = "最早预定日期：" + i;
                                    }
                                }
                                n.groups = e.data;
                            }
                        });
                    }
                }
            });
            e.default = i;
        }).call(this, t(1).default);
    }
}, [ [ 181, "common/runtime", "common/vendor" ] ] ]);