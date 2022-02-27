var e, t = require("../../../@babel/runtime/helpers/interopRequireDefault"), n = require("../../../@babel/runtime/helpers/objectSpread2"), a = t(require("../../../@babel/runtime/regenerator")), o = require("../../../@babel/runtime/helpers/asyncToGenerator"), r = t(require("../../../m/zk/za")), i = require("../../../m/z3/zf/n"), s = require("../../../v/ci/n"), c = require("../../../l/wh"), u = require("../../../l/wa"), l = "https://gw.alicdn.com/tfs/TB1NJ88QxD1gK0jSZFsXXbldVXa-320-320.png", d = "AUTH", h = "SMS", f = "CONFIRM", p = "CANCEL";

(0, r.default)({
    name: "auth-phone-modal",
    data: {
        visible: !1,
        initChoose: !1,
        verifyCodeLocked: !1,
        phoneCodeMode: !1,
        leftTime: 60,
        themeColor: (0, c.getThemeColor)(),
        needSMSMode: !0,
        hasUserAgreement: !0,
        agreeChecked: !1
    },
    components: {
        toast: "toast"
    },
    localData: {
        callback: null
    },
    ready: function() {
        this.$toast = this.getComponentById("toast");
    },
    detached: function() {
        this.__syncPhoneNumber = null, this.__syncCode = null, this.__syncVerifyCodeLocked = null;
    },
    methods: {
        auth: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = (0, 
            c.getBrandInfo)() || {}, a = n.brandName, o = n.brandLogo;
            this.setData({
                brandName: a || "",
                brandLogo: o || l,
                needSMSMode: void 0 === e.needSMSMode || !!e.needSMSMode,
                hasUserAgreement: void 0 === e.hasUserAgreement || !!e.hasUserAgreement
            }), this.localData.callback = t, this._show();
        },
        handleAgreeChange: function(e) {
            this.setData({
                agreeChecked: e.detail && e.detail.agreeChecked
            });
        },
        handleOneAuthClick: function() {
            this.setData({
                initChoose: !1,
                phoneCodeMode: !1,
                visible: !1
            });
        },
        showNoAgreeToast: function() {
            wx.showToast({
                title: "请先阅读并同意协议",
                icon: "none"
            });
        },
        phoneAuthLogin: function(e) {
            var t = this;
            return o(a.default.mark(function n() {
                var o, r, i, s, u, l, h, m, b;
                return a.default.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (o = t.data, r = o.needSMSMode, i = o.hasUserAgreement, s = e.detail, u = s.encryptedData, 
                        l = s.iv, h = (0, c.getSceneType)(), m = h.sceneType, u && l) {
                            n.next = 7;
                            break;
                        }
                        return t.handleFinish(!1, null, d, p), t.$root && t.$root.$logClick(".keruyun_menu.authorize_phone", {
                            customType: "不授权",
                            customScene: m
                        }), n.abrupt("return");

                      case 7:
                        return n.prev = 7, n.next = 10, t._bindMobile({
                            mobileSource: "AUTH",
                            encryptedData: u,
                            iv: l,
                            hasUserAgreement: i
                        });

                      case 10:
                        b = n.sent, t.handleFinish(!0, b, d, f), t.$root && t.$root.$logClick(".keruyun_menu.authorize_phone", {
                            customType: "授权",
                            customScene: m
                        }), n.next = 18;
                        break;

                      case 15:
                        n.prev = 15, n.t0 = n.catch(7), r ? t.showSMSModal() : t.handleFinish(!1, null, d, f);

                      case 18:
                      case "end":
                        return n.stop();
                    }
                }, n, null, [ [ 7, 15 ] ]);
            }))();
        },
        handleFinish: function(e, t, n, a) {
            this._hide(), (0, c.setGlobalAuthPhoneFlag)(e), this.localData && this.localData.callback && this.localData.callback(e, t, {
                scene: n,
                action: a
            });
        },
        onGetAuthorize: function() {
            var e = this;
            return o(a.default.mark(function t() {
                var n, o, r, i, s, u, l;
                return a.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return n = e.data, o = n.needSMSMode, r = n.hasUserAgreement, i = (0, c.getSceneType)(), 
                        s = i.sceneType, t.next = 4, new Promise(function(e) {
                            my.getAuthCode({
                                scopes: "auth_user",
                                success: function(t) {
                                    e(t.authCode);
                                },
                                fail: function(t) {
                                    e("");
                                }
                            });
                        });

                      case 4:
                        if (u = t.sent) {
                            t.next = 8;
                            break;
                        }
                        return e.handleFinish(!1, null, d, f), t.abrupt("return");

                      case 8:
                        return t.prev = 8, t.next = 11, e._bindMobile({
                            mobileSource: "ALIPAY_AUTH_V2",
                            alipayAuthCode: u,
                            hasUserAgreement: r
                        });

                      case 11:
                        l = t.sent, e.handleFinish(!0, l, d, f), e.$root && e.$root.$logClick(".keruyun_menu.authorize_phone", {
                            customType: "授权",
                            customScene: s
                        }), t.next = 19;
                        break;

                      case 16:
                        t.prev = 16, t.t0 = t.catch(8), o ? e.showSMSModal() : e.handleFinish(!1, null, d, f);

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 8, 16 ] ]);
            }))();
        },
        onAuthError: function() {
            var e = (0, c.getSceneType)().sceneType;
            this.handleFinish(!1, null, d, p), this.$root && this.$root.$logClick(".keruyun_menu.authorize_phone", {
                customType: "不授权",
                customScene: e
            });
        },
        handlePhoneCodeAuth: function() {
            var e = this;
            return o(a.default.mark(function t() {
                var n, o, r, i, s, c;
                return a.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!(n = e.validatePhone() || e.validatePhoneCode())) {
                            t.next = 4;
                            break;
                        }
                        return wx.showToast({
                            title: n,
                            icon: "none"
                        }), t.abrupt("return");

                      case 4:
                        return o = e.data, r = o.phone, i = o.code, s = o.hasUserAgreement, t.prev = 5, 
                        t.next = 8, e._bindMobile({
                            mobileSource: "SMS",
                            mobile: r,
                            code: i,
                            hasUserAgreement: s
                        });

                      case 8:
                        c = t.sent, e.handleFinish(!0, c, h, f), t.next = 15;
                        break;

                      case 12:
                        t.prev = 12, t.t0 = t.catch(5), wx.showToast({
                            title: t.t0.message,
                            icon: "none"
                        });

                      case 15:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 5, 12 ] ]);
            }))();
        },
        _bindMobile: function(e) {
            return o(a.default.mark(function t() {
                var o, r, s, l;
                return a.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return o = (0, c.getAppBaseInfo)(), r = o.appId, s = (0, u.getMiniType)(), t.next = 4, 
                        (0, i.bindMobile)(n({
                            appId: r,
                            appType: "wx" === s ? "WECHAT" : "ALIPAY"
                        }, e));

                      case 4:
                        return l = t.sent, t.abrupt("return", l);

                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        _show: function() {
            this.setData({
                initChoose: !0,
                visible: !0
            });
        },
        showSMSModal: function() {
            this.setData({
                initChoose: !1,
                phoneCodeMode: !0,
                visible: !0
            });
        },
        handleCancel: function() {
            this.handleFinish(!1, null, d, p);
        },
        handleSMSCancel: function() {
            this.handleFinish(!1, null, h, p);
        },
        _hide: function() {
            var e = this;
            this.setData({
                initChoose: !1,
                phoneCodeMode: !1,
                visible: !1
            }, function() {
                e.localData.callback = null;
            });
        },
        bindPhoneInput: function(e) {
            this.__syncPhoneNumber = e.detail.value, this.setData({
                phone: e.detail.value
            });
        },
        bindVerifyCodeInput: function(e) {
            this.__syncCode = e.detail.value, this.setData({
                code: e.detail.value
            });
        },
        validatePhone: function() {
            return /^\d{11}$/.test(this.__syncPhoneNumber) ? "" : "请检查手机号，输入11位中国手机号码";
        },
        validatePhoneCode: function() {
            return this.__syncCode ? "" : "请检查手机号验证码";
        },
        handleGetVerifyCode: function() {
            var e = this;
            return o(a.default.mark(function t() {
                return a.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!e.__syncVerifyCodeLocked) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        setTimeout(o(a.default.mark(function t() {
                            var n, o, r;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!(n = e.validatePhone())) {
                                        t.next = 4;
                                        break;
                                    }
                                    return wx.showToast({
                                        title: n,
                                        icon: "none"
                                    }), t.abrupt("return");

                                  case 4:
                                    return e.__syncVerifyCodeLocked = !0, e.setData({
                                        verifyCodeLocked: !0
                                    }), e.countdown(!1)(), o = e.data.phone, t.prev = 8, t.next = 11, (0, s.sendVerifyCode)({
                                        phone: o,
                                        codeSceneType: "C_MEMBER_REGISTER_SCENE"
                                    });

                                  case 11:
                                    (r = t.sent) && r.data || e.countdown(!0)(), t.next = 19;
                                    break;

                                  case 15:
                                    t.prev = 15, t.t0 = t.catch(8), e.countdown(!0)(), wx.showToast({
                                        title: t.t0.message || "发送验证码失败",
                                        icon: "none"
                                    });

                                  case 19:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 8, 15 ] ]);
                        })), 100);

                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        countdown: function(t) {
            var n = this;
            return function() {
                if (t && e) return clearInterval(e), n.__syncVerifyCodeLocked = !1, void n.setData({
                    verifyCodeLocked: !1,
                    leftTime: 60
                });
                e = setInterval(function() {
                    var a = n.data.leftTime;
                    --a <= 0 || t ? (clearInterval(e), n.__syncVerifyCodeLocked = !1, n.setData({
                        verifyCodeLocked: !1,
                        leftTime: 60
                    })) : (n.__syncVerifyCodeLocked = !0, n.setData({
                        verifyCodeLocked: !0,
                        leftTime: a
                    }));
                }, 1e3);
            };
        }
    }
});