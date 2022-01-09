(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/index" ], {
    38: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t(4);
            e(t(2));
            n(e(t(39)).default);
        }).call(this, t(1).createPage);
    },
    39: function(n, e, t) {
        t.r(e);
        var o = t(40), u = t(44);
        for (var i in u) "default" !== i && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(i);
        var r = t(8), c = Object(r.default)(u.default, o.render, o.staticRenderFns, !1, null, null, null, !1, o.components, void 0);
        c.options.__file = "pages/my/index.vue", e.default = c.exports;
    },
    40: function(n, e, t) {
        t.r(e);
        var o = t(41);
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
    41: function(n, e, t) {
        t.r(e), t.d(e, "render", function() {
            return u;
        }), t.d(e, "staticRenderFns", function() {
            return r;
        }), t.d(e, "recyclableRender", function() {
            return i;
        }), t.d(e, "components", function() {
            return o;
        });
        var o, u = function() {
            var n = this, e = n.$createElement, o = (n._self._c, 1 == n.isInvoice ? t(42) : null), u = 1 == n.isInvoice ? t(43) : null;
            n.$mp.data = Object.assign({}, {
                $root: {
                    m0: o,
                    m1: u
                }
            });
        }, i = !1, r = [];
        u._withStripped = !0;
    },
    44: function(n, e, t) {
        t.r(e);
        var o = t(45), u = t.n(o);
        for (var i in o) "default" !== i && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(i);
        e.default = u.a;
    },
    45: function(n, e, t) {
        (function(n) {
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = o(t(22)), i = o(t(16)), r = {
                data: function() {
                    return {
                        src: "",
                        isLogin: !1,
                        userInfo: {},
                        servicePhone: u.default.service_phone,
                        isInvoice: i.default.isInvoice,
                        isCoupon: i.default.isCoupon
                    };
                },
                onLoad: function() {},
                onShow: function() {
                    this.isLogin = u.default.checkUserInfo(!0), this.isLogin && (this.userInfo = u.default.getUserInfo());
                },
                methods: {
                    onShareAppMessage: function(n) {
                        return {
                            title: "我的订单",
                            path: "/pages/my/index",
                            imageUrl: ""
                        };
                    },
                    phoneClick: function(e) {
                        n.makePhoneCall({
                            phoneNumber: e
                        });
                    },
                    loginClick: function() {
                        n.navigateTo({
                            url: "/pages/login/index"
                        });
                    },
                    logOut: function() {
                        n.showModal({
                            title: "提示",
                            content: "确定退出登录?",
                            success: function(n) {
                                n.confirm && u.default.logOut();
                            }
                        });
                    }
                }
            };
            e.default = r;
        }).call(this, t(1).default);
    }
}, [ [ 38, "common/runtime", "common/vendor" ] ] ]);