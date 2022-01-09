(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/login/index" ], {
    100: function(n, t, e) {
        e.r(t);
        var o = e(101);
        e.d(t, "render", function() {
            return o.render;
        }), e.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), e.d(t, "recyclableRender", function() {
            return o.recyclableRender;
        }), e.d(t, "components", function() {
            return o.components;
        });
    },
    101: function(n, t, e) {
        e.r(t), e.d(t, "render", function() {
            return i;
        }), e.d(t, "staticRenderFns", function() {
            return r;
        }), e.d(t, "recyclableRender", function() {
            return a;
        }), e.d(t, "components", function() {
            return o;
        });
        var o, i = function() {
            var n = this, t = n.$createElement;
            n._self._c;
        }, a = !1, r = [];
        i._withStripped = !0;
    },
    102: function(n, t, e) {
        e.r(t);
        var o = e(103), i = e.n(o);
        for (var a in o) "default" !== a && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(a);
        t.default = i.a;
    },
    103: function(n, t, e) {
        (function(n) {
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(e(22)), a = o(e(104)), r = o(e(16)), u = o(e(17)), c = {
                data: function() {
                    return {
                        hasCode: !1,
                        memo: "",
                        distributor: null,
                        scenic: {}
                    };
                },
                onPullDownRefresh: function() {
                    this.loadData();
                },
                onLoad: function(n) {
                    this.distributor = r.default.getDistributor(), this.distributor < 0 && (this.distributor = r.default.base_distributor, 
                    r.default.setDistributor(r.default.base_distributor));
                    var t = n.code;
                    t ? (this.hasCode = !0, this.h5LoginByCode(t)) : this.loadData();
                },
                methods: {
                    loadData: function() {
                        var t = this;
                        u.default.getScenic(parseInt(this.distributor)).then(function(e) {
                            n.stopPullDownRefresh(), e && e.success && e.data ? (t.scenic = e.data, t.scenic.Memo && t.scenic.Memo.length > 100 ? t.memo = t.scenic.Memo.substring(0, 100) + "..." : t.memo = t.scenic.Memo) : n.showToast({
                                title: e.message || "加载失败",
                                icon: "none",
                                duration: 2e3
                            });
                        }).catch(function(t) {
                            n.stopPullDownRefresh(), n.showToast({
                                title: "出错了，请检查网络连接",
                                icon: "none",
                                duration: 2e3
                            });
                        });
                    },
                    onGotUserInfo: function(t) {
                        var e = this;
                        t && t.detail && "getUserInfo:ok" == t.detail.errMsg && n.login({
                            provider: "weixin",
                            success: function(n) {
                                n && n.code && e.loginByWxOpen(t.detail.encryptedData, t.detail.iv, n.code, t.detail.userInfo);
                            }
                        });
                    },
                    loginByWxOpen: function(n, t, e, o) {
                        var r = this;
                        a.default.loginByWxOpen(n, t, e).then(function(n) {
                            n && n.success && (i.default.setUserInfo(o, n.data.Token), r.gotoMain());
                        });
                    },
                    h5Login: function() {
                        a.default.authorizUrl("").then(function(n) {
                            n && n.success && n.data && (window.location.href = n.data);
                        });
                    },
                    h5LoginByCode: function(n) {
                        var t = this;
                        a.default.loginByCode(n).then(function(n) {
                            n && n.success && n.data && (i.default.setUserInfo({
                                avatarUrl: n.data.Photo,
                                city: n.data.City,
                                language: "zh_CN",
                                nickName: n.data.UserName,
                                province: n.data.Province
                            }, n.data.Token), t.gotoMain());
                        });
                    },
                    gotoMain: function() {
                        n.switchTab({
                            url: "/pages/main/index"
                        });
                    }
                }
            };
            t.default = c;
        }).call(this, e(1).default);
    },
    105: function(n, t, e) {
        e.r(t);
        var o = e(106), i = e.n(o);
        for (var a in o) "default" !== a && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(a);
        t.default = i.a;
    },
    106: function(n, t, e) {},
    98: function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e(4);
            t(e(2));
            n(t(e(99)).default);
        }).call(this, e(1).createPage);
    },
    99: function(n, t, e) {
        e.r(t);
        var o = e(100), i = e(102);
        for (var a in i) "default" !== a && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(a);
        e(105);
        var r = e(8), u = Object(r.default)(i.default, o.render, o.staticRenderFns, !1, null, "4586967a", null, !1, o.components, void 0);
        u.options.__file = "pages/login/index.vue", t.default = u.exports;
    }
}, [ [ 98, "common/runtime", "common/vendor" ] ] ]);