(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/app-vip-pop/index" ], {
    "4c36": function(t, e, n) {
        n.r(e);
        var o = n("99f4"), i = n.n(o);
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        e.default = i.a;
    },
    "54b0": function(t, e, n) {},
    "7f99": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this, e = (t.$createElement, t._self._c, (t.needSVip ? t.isSVIP : t.isVIP) && !t.renewShow || !t.isLogin ? null : t.platform.includes("mp-feishu"));
            t.$mp.data = Object.assign({}, {
                $root: {
                    g0: e
                }
            });
        }, i = [];
    },
    "99f4": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("325c")), i = n("2f62");
            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach(function(e) {
                        r(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var u = {
                name: "vip-pop",
                data: function() {
                    return {
                        type: 0,
                        step: 1,
                        someData: {},
                        btnClick: !1,
                        back: !1,
                        VipChanged: !1,
                        top: "43%",
                        bgImg: ""
                    };
                },
                components: {
                    appVipPay: function() {
                        n.e("components/app-vip-pay/index").then(function() {
                            return resolve(n("a8bd"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    paySourceType: {
                        type: String,
                        default: ""
                    },
                    titleText: {
                        type: String,
                        default: "此功能"
                    },
                    needSVip: {
                        type: Boolean,
                        default: !1
                    },
                    divCall: {
                        type: Boolean,
                        default: !1
                    },
                    isScroll: {
                        type: Boolean,
                        default: !1
                    },
                    isVip: {
                        type: Boolean,
                        default: !1
                    },
                    renewShow: {
                        type: Boolean,
                        default: !1
                    },
                    isTabBarPage: {
                        type: Boolean,
                        default: !1
                    },
                    customTop: {
                        type: Boolean,
                        default: !1
                    },
                    height: {
                        type: String,
                        default: ""
                    },
                    topHeight: {
                        type: Number,
                        default: 0
                    }
                },
                computed: {
                    paySource: function() {
                        return this.paySourceType || this.titleText;
                    },
                    userInfo: function() {
                        return this.$store.state.userInfo.userInfo;
                    },
                    token: function() {
                        return this.$store.state.userInfo.token || "";
                    },
                    platform: function() {
                        return this.$store.state.systemInfo.platform;
                    },
                    isLogin: function() {
                        return this.$store.state.userInfo.isLogin || !1;
                    },
                    isVIP: function() {
                        return this.$store.state.userInfo.userInfo.isVIP || !1;
                    },
                    isSVIP: function() {
                        return this.$store.state.userInfo.userInfo.isSVIP || !1;
                    },
                    isIPhone: function() {
                        return this.$store.state.systemInfo.isIPhone || !1;
                    },
                    windowHeight: function() {
                        return this.$store.state.systemInfo.systemInfo.windowHeight || 400;
                    },
                    reviewStatus: function() {
                        return this.$store.state.systemInfo.reviewStatus;
                    },
                    iosVipStatus: function() {
                        return this.$store.state.systemInfo.iosVipStatus;
                    },
                    loginType: function() {
                        return this.$store.state.userInfo.loginType;
                    }
                },
                mounted: function() {
                    1 !== this.loginType || this.userInfo.isCurrentWx ? this.step = 2 : this.step = 1, 
                    this.customTop && (this.top = "51%"), this.bgImg = this.needSVip ? "https://eciapp-img.qichacha.com/community/79388ddd-721a-4adb-9929-2078c38079ec1619317967960.png" : "https://eciapp-img.qichacha.com/community/64a1c2a6-01c7-4d6c-a476-50df516316b01619317964115.png", 
                    this.setType();
                },
                methods: a(a({}, (0, i.mapActions)({
                    checkLogin: "checkLogin",
                    refreshToken: "refreshToken"
                })), {}, {
                    toLogin: function() {
                        this.checkLogin("").then(function() {}).catch(function() {});
                    },
                    reportAnalytics: function() {
                        t.reportAnalytics && t.reportAnalytics("vippopup_goqcc", {
                            click: "true"
                        });
                    },
                    makePhone: function(e) {
                        var n = e.currentTarget.dataset.value;
                        n && t.makePhoneCall({
                            phoneNumber: n
                        });
                    },
                    toggleCouponPop: function(e) {
                        t.$emit("couponPop", e);
                    },
                    setType: function() {
                        var t;
                        return t = this.back && this.VipChanged ? 3 : this.back && !this.VipChanged ? 4 : 1 === this.iosVipStatus && 1 === this.step ? 1 : 1 === this.iosVipStatus && 2 === this.step ? 2 : 0, 
                        ("mp-baidu" === o.default.platform() || "mp-toutiao" === o.default.platform() || o.default.platform().includes("mp-feishu")) && (t = 0), 
                        "mp-weixin" === o.default.platform() && (t = 0 === this.iosVipStatus ? 0 : 2), this.type = t, 
                        t;
                    },
                    handleContact: function(e) {
                        var n = this;
                        this.refreshToken().then(function(e) {
                            n.back = !0, e && e.userInfo && (n.isVip ? (n.VipChanged = t.getStorageSync("vipEndDate") !== n.userInfo.vipEndDate, 
                            n.VipChanged && o.default.setStorageSync("vipEndDate", n.userInfo.vipEndDate)) : n.VipChanged = n.isVIP), 
                            n.setType();
                        }).catch(function() {});
                    },
                    bindGetUserInfo: function() {
                        var t = this;
                        this.$request({
                            url: "/v1/user/bindWX",
                            data: {},
                            method: "post"
                        }).then(function(e) {
                            e && 200 === e.status && (o.default.toast("绑定成功"), t.step = 2, t.setType());
                        }).catch(function() {});
                    },
                    cancel: function() {
                        this.isScroll && !this.divCall ? t.navigateBack({
                            delta: 1
                        }) : (this.$emit("hideVipPop"), this.step = 1, this.back = !1, this.setType());
                    }
                })
            };
            e.default = u;
        }).call(this, n("543d").default);
    },
    aef4: function(t, e, n) {
        var o = n("54b0");
        n.n(o).a;
    },
    f446: function(t, e, n) {
        n.r(e);
        var o = n("7f99"), i = n("4c36");
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        n("aef4");
        var a = n("f0c5"), r = Object(a.a)(i.default, o.b, o.c, !1, null, "7445ecaa", null, !1, o.a, void 0);
        e.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/app-vip-pop/index-create-component", {
    "components/app-vip-pop/index-create-component": function(t, e, n) {
        n("543d").createComponent(n("f446"));
    }
}, [ [ "components/app-vip-pop/index-create-component" ] ] ]);