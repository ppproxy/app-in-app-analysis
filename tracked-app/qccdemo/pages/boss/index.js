(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/boss/index" ], {
    "0491": function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = e("2f62"), c = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("0190")), i = e("b291");
            function a(t, n) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    n && (o = o.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable;
                    })), e.push.apply(e, o);
                }
                return e;
            }
            function r(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? a(Object(e), !0).forEach(function(n) {
                        u(t, n, e[n]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : a(Object(e)).forEach(function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                    });
                }
                return t;
            }
            function u(t, n, e) {
                return n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e, t;
            }
            var s = {
                components: {
                    appNoData: function() {
                        e.e("components/app-no-data/index").then(function() {
                            return resolve(e("cc7b"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    appBottomLoading: function() {
                        e.e("components/app-bottom-loading/index").then(function() {
                            return resolve(e("c761"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    appAutoLogo: function() {
                        e.e("components/app-auto-logo/index").then(function() {
                            return resolve(e("28fe"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        list: [],
                        loading: !1,
                        isInit: !1
                    };
                },
                onLoad: function(t) {},
                computed: {
                    token: function() {
                        return this.$store.state.userInfo.token || "";
                    },
                    hasCode: function() {
                        return this.$store.state.userInfo.hasCode;
                    }
                },
                watch: {
                    token: function() {
                        this.isInit = !1, this.init();
                    }
                },
                onShow: function() {
                    this.hasCode ? (this.token && this.init(), (0, i.track)("corepage_exposure", {
                        "page_name|页面名称": "搜老板",
                        "page_detail|页面详情": ""
                    })) : this.getToken().then(function() {}).catch(function() {});
                },
                onShareAppMessage: function() {
                    return {
                        title: "推荐你一款专业的企业查询工具，商务精英都在用！",
                        path: "/pages/home/index",
                        imageUrl: "https://eciapp-img.qichacha.com/community/5a607122-4a54-4992-9ebb-5e746cffcca51627524003777.png"
                    };
                },
                onTabItemTap: function() {},
                methods: r(r({}, (0, o.mapActions)([ "getToken" ])), {}, {
                    init: function() {
                        this.isInit || this.getData();
                    },
                    toSearchBoss: function() {
                        t.navigateTo({
                            url: "/pages/search/index/index?index=1"
                        }), (0, i.track)("searchboss_button_click", {
                            "button_name|按钮名称": "搜老板输入框"
                        });
                    },
                    getData: function() {
                        var t = this;
                        this.loading = !0, this.$request({
                            url: "/v1/boss/getHotBossListByTopic",
                            method: "GET",
                            data: {
                                app_channel: "qcc",
                                platform: "other"
                            }
                        }).then(function(n) {
                            t.loading = !1, n && 200 === n.status && (t.list = t.list.concat(n.result.Result));
                        }).catch(function() {}).finally(function() {
                            t.isInit = !0;
                        });
                    },
                    toCopDetail: function(t) {
                        var n = t.currentTarget.dataset, e = n.name, o = n.unique;
                        c.default.toCopDetail(o, e), (0, i.track)("searchboss_contentclick", {
                            "person_name|人员名称": e,
                            "content_type|内容类型": "人员主页"
                        });
                    }
                })
            };
            n.default = s;
        }).call(this, e("543d").default);
    },
    "43cd": function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("a601")).default);
        }).call(this, e("543d").createPage);
    },
    8320: function(t, n, e) {
        e.r(n);
        var o = e("0491"), c = e.n(o);
        for (var i in o) "default" !== i && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(i);
        n.default = c.a;
    },
    "9b6c": function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return c;
        }), e.d(n, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    a601: function(t, n, e) {
        e.r(n);
        var o = e("9b6c"), c = e("8320");
        for (var i in c) "default" !== i && function(t) {
            e.d(n, t, function() {
                return c[t];
            });
        }(i);
        e("e430");
        var a = e("f0c5"), r = Object(a.a)(c.default, o.b, o.c, !1, null, "677d1238", null, !1, o.a, void 0);
        n.default = r.exports;
    },
    e430: function(t, n, e) {
        var o = e("ebc7");
        e.n(o).a;
    },
    ebc7: function(t, n, e) {}
}, [ [ "43cd", "common/runtime", "common/vendor" ] ] ]);