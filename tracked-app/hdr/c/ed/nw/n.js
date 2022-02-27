var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), r = require("../../../@babel/runtime/helpers/objectSpread2"), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../../m/zk/za")), o = require("../../../v/3s/ed"), s = require("../../../v/ci/n"), i = require("../../../pages/member/common/util/url"), u = require("../../../pages/member/common/util/imageUtil"), c = require("../../../l/wh"), l = e(require("../../../m/zl/5o")), d = require("../../../l/wa"), m = 0, p = 1, h = 2;

(0, a.default)({
    name: "member-join-universal",
    data: {
        componentStatus: p,
        joinMemberScene: "wx" === (0, d.getMiniType)() ? "auth" : "sms",
        memberCardTemplate: {
            memberCardTemplateId: "",
            memberCardTemplateName: "",
            brandLogo: "",
            memberCardTemplateBg: "",
            joinMemberTips: "免费领取"
        },
        miniType: (0, d.getMiniType)(),
        supportAlipayMobileAuth: !1,
        sms: {
            mobile: "",
            code: "",
            restTime: 60,
            restText: "已发送(".concat(60, ")"),
            pending: !1
        }
    },
    properties: {
        title: {
            type: String,
            value: "免费入会"
        },
        errStyle: {
            type: String,
            value: ""
        },
        errorTitle: {
            type: String,
            value: "加载失败，点击重试"
        },
        scene: {
            type: String,
            value: ""
        },
        btnStyle: {
            type: String,
            value: ""
        },
        btnTextStyle: {
            type: String,
            value: ""
        },
        showSuccessToast: {
            type: Boolean,
            value: !0
        },
        agreeChecked: {
            type: Boolean,
            value: !0
        }
    },
    components: {
        payPhoneModal: "pay-phone-modal",
        toast: "toast",
        loading: "loading"
    },
    ready: function() {
        this.$toast = this.getComponentById("toast"), this.$loading = this.getComponentById("loading"), 
        this.$payPhoneModal = this.getComponentById("payPhoneModal"), this._init();
    },
    methods: {
        _init: function() {
            this.loadData();
        },
        openUrl: function(e) {
            var t = (e.target.dataset || {}).url;
            "wx" === this.data.miniType ? this.$root.$navigate("/pages/webview/index?pageUrl=" + encodeURIComponent(t)) : (0, 
            i.openUrl)({
                url: t
            });
        },
        loadData: function() {
            var e = this;
            return n(t.default.mark(function n() {
                var a, s, i, c, l, d, b, f, g, M, v, y;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, e.$loading.showLoading("正在加载中..."), a = e.data.miniType, t.next = 5, 
                        (0, o.queryMemberCardGuideInfo)();

                      case 5:
                        s = t.sent, i = s.data, c = i.customerInfo, l = void 0 === c ? {} : c, d = i.memberCardTemplate, 
                        b = void 0 === d ? {} : d, f = i.isL100Merchant, g = i.isCrmMerchant, M = i.supportAlipayMobileAuth, 
                        v = l.customerType, e.setJoinMeberScene(l, a, M), 0 === Number(v) ? e.setData({
                            componentStatus: p,
                            customerInfo: l,
                            memberCardTemplate: r(r({}, b), {}, {
                                brandLogo: b.brandLogo ? (0, u.getValidImageUrl)(b.brandLogo) : "https://gw.alicdn.com/tfs/TB1KngXOuL2gK0jSZPhXXahvXXa-72-72.png"
                            }),
                            isL100Merchant: f,
                            isCrmMerchant: g
                        }) : e.setData({
                            componentStatus: h
                        }), e.$loading.hideLoading(), t.next = 21;
                        break;

                      case 14:
                        t.prev = 14, t.t0 = t.catch(0), e.setData({
                            componentStatus: m
                        }), y = {}, t.t0.response && t.t0.response.data && (y.errorCode = t.t0.response.data.errorCode, 
                        y.errorMessage = t.t0.response.data.errorMessage), e.$loading.hideLoading(), e.triggerEvent("handleLoadDataFail", y);

                      case 21:
                      case "end":
                        return t.stop();
                    }
                }, n, null, [ [ 0, 14 ] ]);
            }))();
        },
        setJoinMeberScene: function(e, t, r) {
            e && e.mobile ? this.setData({
                joinMemberScene: "mobile"
            }) : "wx" === t || "my" === t && r ? this.setData({
                joinMemberScene: "auth"
            }) : this.setData({
                joinMemberScene: "sms"
            });
        },
        bindPhoneAuthPage: function() {
            var e = this.data, t = e.memberCardTemplate;
            if (e.disabled) return null;
            this.$payPhoneModal.init(t);
        },
        joinMember: function() {
            var e = this;
            return n(t.default.mark(function r() {
                var n, a, o, s, i;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, n = e.data, a = n.disabled, "shopgift" === (o = n.scene) && e.$root.$logClick(".join_member_shopgift", {
                            action: "进店领券-入会组件-正常入会",
                            joinType: "JOIN_MEMBER_BY_MOBILE"
                        }), "getcoupon" === o && e.$root.$logClick(".join_m_getcoupon", {
                            action: "进店领券-入会组件-正常入会",
                            joinType: "JOIN_MEMBER_BY_MOBILE"
                        }), !a) {
                            t.next = 6;
                            break;
                        }
                        return t.abrupt("return", null);

                      case 6:
                        return s = {
                            mobileSource: "SELF"
                        }, t.next = 9, e.handleJoinMember(s);

                      case 9:
                        t.next = 16;
                        break;

                      case 11:
                        t.prev = 11, t.t0 = t.catch(0), i = {}, t.t0.response && t.t0.response.data && (i.errorMessage = t.t0.response.data.errorMessage, 
                        i.errorCode = t.t0.response.data.errorCode), e.triggerEvent("handleMemberJoinFail", i);

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, r, null, [ [ 0, 11 ] ]);
            }))();
        },
        joinMemberByAuth: function(e) {
            var r = this;
            return n(t.default.mark(function a() {
                var o, s, i, u, c, l, d, m, p, h;
                return t.default.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (a.prev = 0, s = (o = r).data, i = s.miniType, u = s.disabled, "shopgift" === (c = s.scene) && o.$root.$logClick(".join_member_shopgift", {
                            action: "进店领券-入会组件-手机号授权入会",
                            joinType: "JOIN_MEMBER_BY_AUTH"
                        }), "getcoupon" === c && o.$root.$logClick(".join_m_getcoupon", {
                            action: "进店领券-入会组件-手机号授权入会",
                            joinType: "JOIN_MEMBER_BY_AUTH"
                        }), !u) {
                            a.next = 7;
                            break;
                        }
                        return a.abrupt("return");

                      case 7:
                        if ("wx" !== i) {
                            a.next = 15;
                            break;
                        }
                        if (l = e.detail, d = l.encryptedData, m = l.iv, !d || !m) {
                            a.next = 15;
                            break;
                        }
                        return p = {
                            mobileSource: "AUTH",
                            encryptedData: d,
                            iv: m
                        }, a.next = 13, o.handleJoinMember(p);

                      case 13:
                        a.next = 15;
                        break;

                      case 15:
                        "my" === i && my.getAuthCode({
                            scopes: "auth_user",
                            success: function(e) {
                                return n(t.default.mark(function r() {
                                    var n;
                                    return t.default.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                          case 0:
                                            return t.prev = 0, n = {
                                                mobileSource: "ALIPAY_AUTH_V2",
                                                alipayAuthCode: e.authCode
                                            }, t.next = 4, o.handleJoinMember(n);

                                          case 4:
                                            t.next = 10;
                                            break;

                                          case 6:
                                            t.prev = 6, t.t0 = t.catch(0), o.joinMemberByAuthError(), o.bindPhoneAuthPage();

                                          case 10:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, r, null, [ [ 0, 6 ] ]);
                                }))();
                            },
                            fail: function(e) {
                                o.joinMemberByAuthError(), o.bindPhoneAuthPage();
                            }
                        }), a.next = 23;
                        break;

                      case 18:
                        a.prev = 18, a.t0 = a.catch(0), h = {}, a.t0.response && a.t0.response.data && (h.errorMessage = a.t0.response.data.errorMessage, 
                        h.errorCode = a.t0.response.data.errorCode), r.triggerEvent("handleMemberJoinFail", h);

                      case 23:
                      case "end":
                        return a.stop();
                    }
                }, a, null, [ [ 0, 18 ] ]);
            }))();
        },
        joinMemberByAuthError: function() {
            var e = this;
            return n(t.default.mark(function r() {
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        e.setData({
                            joinMemberScene: "sms"
                        });

                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, r);
            }))();
        },
        showNoAgreeToast: function() {
            wx.showToast({
                title: "请先阅读并同意协议",
                icon: "none"
            });
        },
        handleMemberJoinSuccess: function(e) {
            var t = this.data.joinMemberScene;
            (0, c.setGlobalMemberFlag)(!0), (0, c.setGlobalAuthPhoneFlag)(!0), "sms" === t && this.$payPhoneModal.close(), 
            e = !0 === e, this.triggerEvent("handleMemberJoinSuccess", {
                joinMemberScene: t,
                fetchJoinMember: e
            });
        },
        needFetchRecitify: function() {
            var e = this.data, t = e.miniType, r = e.isL100Merchant;
            return "my" === t && r;
        },
        handleJoinMember: function(e) {
            var r = this;
            return n(t.default.mark(function n() {
                var a, s, i, u;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (s = !1, !(a = r).needFetchRecitify()) {
                            t.next = 6;
                            break;
                        }
                        return t.next = 5, a.queryRectify();

                      case 5:
                        s = t.sent;

                      case 6:
                        if (s) {
                            t.next = 16;
                            break;
                        }
                        return t.next = 9, (0, o.joinMember)(e);

                      case 9:
                        if (i = t.sent, u = i.data.isNewRegister, a.data.showSuccessToast) {
                            t.next = 15;
                            break;
                        }
                        return a.handleMemberJoinSuccess(!0), t.abrupt("return");

                      case 15:
                        u ? a.$toast.show("入会成功", function() {
                            a.handleMemberJoinSuccess(!0);
                        }, 1e3) : a.$toast.show("欢迎回来", function() {
                            a.handleMemberJoinSuccess(!0);
                        }, 1e3);

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, n);
            }))();
        },
        queryRectify: function() {
            var e = this;
            return n(t.default.mark(function r() {
                var n, a, s, u, c;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return n = e.data.scene, t.next = 3, (0, o.queryRectify)({
                            bizScene: "JOIN_MEMBER"
                        });

                      case 3:
                        return a = t.sent, s = a.data, u = s.needRectify, c = s.rectifyUrl, u && "false" !== u && (l.default.put("syncCouponsKey", !0), 
                        l.default.put("member-join-universal-".concat(n), !0), (0, i.openUrl)({
                            url: c
                        })), t.abrupt("return", u);

                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, r);
            }))();
        },
        bindSmsInput: function(e) {
            var t = this.data.sms;
            t = r(r({}, t), e.detail), this.setData({
                sms: t
            });
        },
        joinMemberBySms: function() {
            var e = this;
            return n(t.default.mark(function r() {
                var n, a, o, s, i, u, c, l, d, m, p, h, b;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, n = e.data, a = n.disabled, "shopgift" === (o = n.scene) && e.$root.$logClick(".join_member_shopgift", {
                            action: "进店领券-入会组件-验证码入会",
                            joinType: "JOIN_MEMBER_BY_SMS"
                        }), "getcoupon" === o && e.$root.$logClick(".join_m_getcoupon", {
                            action: "进店领券-入会组件-验证码入会",
                            joinType: "JOIN_MEMBER_BY_SMS"
                        }), !a) {
                            t.next = 6;
                            break;
                        }
                        return t.abrupt("return", null);

                      case 6:
                        return s = e.data.sms, i = {
                            mobile: [ {
                                empty: !1,
                                msg: "手机号不能为空"
                            }, {
                                reg: /\d{11}/,
                                msg: "手机号不合法"
                            } ],
                            code: [ {
                                empty: !1,
                                msg: "验证码不能为空"
                            } ]
                        }, t.next = 10, e.validateSms(s, i);

                      case 10:
                        if (u = t.sent, c = u.error, l = u.errorList, d = u.values, m = d.mobile, p = d.code, 
                        !c) {
                            t.next = 15;
                            break;
                        }
                        return e.$toast.show(l[0]), t.abrupt("return", null);

                      case 15:
                        return h = {
                            mobileSource: "SMS",
                            mobile: m,
                            code: p
                        }, t.next = 18, e.handleJoinMember(h);

                      case 18:
                        t.next = 25;
                        break;

                      case 20:
                        t.prev = 20, t.t0 = t.catch(0), b = {}, t.t0.response && t.t0.response.data && (b.errorCode = t.t0.response.data.errorCode, 
                        b.errorMessage = t.t0.response.data.errorMessage), "CODE_ERROR" === b.errorCode ? e.$toast.show(b.errorMessage) : e.triggerEvent("handleMemberJoinFail", b);

                      case 25:
                      case "end":
                        return t.stop();
                    }
                }, r, null, [ [ 0, 20 ] ]);
            }))();
        },
        validateSms: function(e, t) {
            return new Promise(function(n) {
                var a = [];
                Object.keys(e).forEach(function(r) {
                    var n = e[r], o = t[r];
                    o && o.length && o.forEach(function(e) {
                        void 0 === e.empty || e.empty || n || a.push(e.msg), e.reg && (e.reg.test(n) || a.push(e.msg));
                    });
                }), n({
                    error: !!a.length,
                    errorList: a,
                    values: r({}, e)
                });
            });
        },
        sendVerifyCode: function() {
            var e = this;
            return n(t.default.mark(function n() {
                var a, o, i, u, c, l;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, a = e.data.sms, o = a.mobile, i = {
                            mobile: [ {
                                empty: !1,
                                msg: "手机号不能为空"
                            }, {
                                reg: /\d{11}/,
                                msg: "手机号不合法"
                            } ]
                        }, t.next = 6, e.validateSms(a, i);

                      case 6:
                        if (u = t.sent, c = u.error, l = u.errorList, !c) {
                            t.next = 11;
                            break;
                        }
                        return e.$toast.show(l[0]), t.abrupt("return", null);

                      case 11:
                        return t.next = 13, (0, s.sendVerifyCode)({
                            phone: o,
                            codeSceneType: "C_MEMBER_REGISTER_SCENE"
                        });

                      case 13:
                        e.setData({
                            sms: r(r({}, a), {}, {
                                pending: !0
                            })
                        }), e.startRestTimer(), t.next = 20;
                        break;

                      case 17:
                        t.prev = 17, t.t0 = t.catch(0), e.$toast.show(t.t0.message || t.t0.errorMessage || t.t0);

                      case 20:
                      case "end":
                        return t.stop();
                    }
                }, n, null, [ [ 0, 17 ] ]);
            }))();
        },
        startRestTimer: function() {
            var e = this.data.sms, t = e.restTime;
            (t -= 1) <= 0 ? this.setData({
                sms: r(r({}, e), {}, {
                    restTime: 60,
                    restText: "已发送(".concat(60, ")"),
                    pending: !1
                })
            }) : (this.setData({
                sms: r(r({}, e), {}, {
                    restTime: t,
                    restText: "已发送(".concat(t, ")"),
                    pending: !0
                })
            }), this.timer = setTimeout(this.startRestTimer.bind(this), 1e3));
        },
        close: function() {
            clearTimeout(this.timer), this.setData({
                sms: {
                    mobile: "",
                    code: "",
                    restTime: 60,
                    restText: "已发送(".concat(60, ")"),
                    pending: !1
                }
            }), this.$payPhoneModal.close();
        }
    }
});