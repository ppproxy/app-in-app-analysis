var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../@babel/runtime/helpers/defineProperty"), r = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/objectSpread2"), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), s = e(require("../../../m/zk/za")), o = require("../../../l/wh"), i = require("../../../l/wa"), c = require("../../../v/3s/ed"), u = require("../../../v/ci/n"), m = require("../../../pages/member/common/util/url"), d = e(require("../../../m/zl/5o"));

(0, s.default)({
    name: "member-join-order",
    data: {
        freeJoinTip: "",
        titleTip: "",
        confirmTip: "",
        cancelTip: "",
        customerInfo: {},
        isL100Merchant: !1,
        supportAlipayMobileAuth: !1,
        templateAgreementsList: [],
        summaryValue: "",
        summaryList: [],
        currentSummaryList: [],
        dish: {},
        joinMemberScene: "wx" === (0, i.getMiniType)() ? "auth" : "sms",
        authPhoneFlag: (0, o.getAuthPhoneFlag)(),
        miniType: (0, i.getMiniType)(),
        sms: {
            mobile: "",
            code: "",
            restTime: 60,
            restText: "已发送(".concat(60, ")"),
            pending: !1,
            reset: !1
        },
        scrollTop: 0,
        openCardGiftCouponList: [],
        themeColor: (0, o.getThemeColor)(),
        isEmpty: !1
    },
    properties: {
        data: {
            type: Object,
            value: null
        },
        mealType: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: "force"
        }
    },
    components: {
        customShowModal: "custom-show-modal",
        benefitFree: "benefit-free",
        toast: "toast",
        loading: "loading",
        memberJoinedShowAlert: "member-joined-show-alert"
    },
    observers: {
        data: function(e) {
            e && this.init();
        }
    },
    ready: function() {
        this.$customShowModal = this.getComponentById("customShowModal"), this.$toast = this.getComponentById("toast"), 
        this.$loading = this.getComponentById("loading"), this.$memberJoinedShowAlert = this.getComponentById("memberJoinedShowAlert"), 
        this.getOrderCase();
    },
    methods: {
        loadData: function() {
            var e = this;
            return n(r.default.mark(function t() {
                var n, s, i, u, m, d, l, p, h, f, b, g, v, y, M, T, C, w, x, S, E, k, D, A, R, I, J, $;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, n = e.data, s = n.data, i = n.mealType, u = n.miniType, s) {
                            t.next = 9;
                            break;
                        }
                        return e.$loading.showLoading("加载中..."), t.next = 6, (0, c.queryMemberComponentQuery)({
                            mealType: i
                        });

                      case 6:
                        m = t.sent, d = m.data, s = d || {};

                      case 9:
                        l = s.memberGuide, p = l.customerInfo, h = void 0 === p ? {} : p, f = l.memberCardTemplate, 
                        b = void 0 === f ? {} : f, g = l.isL100Merchant, v = l.isCrmMerchant, y = l.supportAlipayMobileAuth, 
                        M = b.summaryValue, T = void 0 === M ? "" : M, C = b.summaryList, w = void 0 === C ? [] : C, 
                        x = b.openCardGiftCouponList, S = void 0 === x ? [] : x, E = b.memberCardTemplateName, 
                        k = void 0 === E ? "" : E, D = (0, o.getAppBaseInfo)(), A = D.xcxTmlCode, k = "orderReservationTemplate" === (void 0 === A ? "" : A) ? k.replace(/会员卡/g, "") : k, 
                        R = s.memberDish, "https://img.alicdn.com/tfs/TB1tCVYXIieb18jSZFvXXaI3FXa-164-164.png", 
                        R && (R = a(a({}, s.memberDish), {}, {
                            dishImg: s.memberDish.dishImg || "https://img.alicdn.com/tfs/TB1tCVYXIieb18jSZFvXXaI3FXa-164-164.png",
                            totalDishNum: Number(s.memberDish.totalDishNum)
                        })), I = h.customerType, 0 === Number(I) && v ? (e.setData({
                            customerInfo: h,
                            memberCardTemplate: b,
                            memberCardTemplateName: k,
                            isL100Merchant: g,
                            isCrmMerchant: v,
                            supportAlipayMobileAuth: y,
                            summaryValue: T,
                            summaryList: w,
                            currentSummaryList: w.slice(0, 3),
                            dish: R,
                            openCardGiftCouponList: S.slice(0, 2),
                            isEmpty: !(S && S.length || R && R.totalDishNum || w && w.length)
                        }), J = {
                            showClose: !1,
                            maskClosable: !0,
                            zIndex: 888888,
                            cancel: function() {
                                e.triggerEvent("handleCancelJoinMember");
                            }
                        }, e.$customShowModal.show(J), e.setJoinMeberScene(h, u, y)) : (e.triggerEvent("handleLoadDataFail", {
                            errorCode: null,
                            errorMessage: "当前商户未开通CRM 或者当前用户已经是会员"
                        }), e.$toast.show("当前商户未开通CRM 或者当前用户已经是会员")), e.$loading.hideLoading(), t.next = 28;
                        break;

                      case 21:
                        t.prev = 21, t.t0 = t.catch(0), e.$loading.hideLoading(), $ = {}, t.t0.response && t.t0.response.data && ($.errorCode = t.t0.response.data.errorCode, 
                        $.errorMessage = t.t0.response.data.errorMessage), e.triggerEvent("handleLoadDataFail", $), 
                        e.$toast.show(t.t0.message || t.t0.errorMessage);

                      case 28:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 21 ] ]);
            }))();
        },
        init: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.type;
            t && this.setData({
                type: t
            }), this.loadData();
        },
        getOrderCase: function() {
            var e = (0, o.getAppBaseInfo)().xcxTmlCode;
            "orderReservationTemplate" === (void 0 === e ? "" : e) ? this.setData({
                titleTip: "登录",
                confirmTip: "快速登录",
                cancelTip: "暂不登录",
                freeJoinTip: "快速登录"
            }) : this.setData({
                titleTip: "入会",
                confirmTip: "同意协议并入会",
                cancelTip: "暂不加入",
                freeJoinTip: "免费加入会员"
            });
        },
        handleMemberJoinOrderSuccess: function() {
            (0, o.setGlobalMemberFlag)(!0), (0, o.setGlobalAuthPhoneFlag)(!0), this.close(), 
            this.triggerEvent("handleMemberJoinOrderSuccess");
        },
        close: function() {
            clearTimeout(this.timer), this.setData({
                sms: {
                    mobile: "",
                    code: "",
                    restTime: 60,
                    restText: "已发送(".concat(60, ")"),
                    pending: !1,
                    reset: !1
                }
            }), this.$customShowModal.close({});
        },
        setJoinMeberScene: function(e, t, r) {
            e.mobile ? this.setData({
                joinMemberScene: "mobile"
            }) : "wx" === t || "my" === t && r ? this.setData({
                joinMemberScene: "auth"
            }) : this.setData({
                joinMemberScene: "sms"
            });
        },
        bindSmsInput: function(e) {
            var r = (e.currentTarget.dataset || {}).key;
            if (r) {
                var n = this.data.sms;
                n = a(a({}, n), {}, t({}, r, e.detail.value)), this.setData({
                    sms: n
                });
            }
        },
        needFetchRecitify: function() {
            var e = this.data, t = e.miniType, r = e.isL100Merchant;
            return "my" === t && r;
        },
        handleJoinMember: function(e) {
            var t = this;
            return n(r.default.mark(function a() {
                var n, s, i, u, m, d, l, p, h, f;
                return r.default.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        if (s = !1, !(n = t).needFetchRecitify()) {
                            r.next = 6;
                            break;
                        }
                        return r.next = 5, n.queryRectify();

                      case 5:
                        s = r.sent;

                      case 6:
                        if (s) {
                            r.next = 15;
                            break;
                        }
                        return r.next = 9, (0, c.joinMember)(e);

                      case 9:
                        i = r.sent, u = i.data, m = u.isNewRegister, d = u.registerTips, l = u.sendOpenGift, 
                        m || !m && l ? (p = (0, o.getAppBaseInfo)(), h = p.xcxTmlCode, f = void 0 === h ? "" : h, 
                        n.$toast.show("orderReservationTemplate" === f ? "登录成功" : d, function() {
                            n.handleMemberJoinOrderSuccess();
                        }, 1e3)) : n.$memberJoinedShowAlert.show(d, function() {
                            n.handleMemberJoinOrderSuccess();
                        });

                      case 15:
                      case "end":
                        return r.stop();
                    }
                }, a);
            }))();
        },
        cancelMember: function() {
            this.close();
        },
        joinMember: function() {
            var e = this;
            return n(r.default.mark(function t() {
                var a, n;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, a = {
                            mobileSource: "SELF"
                        }, t.next = 4, e.handleJoinMember(a);

                      case 4:
                        e.$root.$logClick(".keruyun_menu.registered_member", {
                            customType: "加入"
                        }), e.$root.$logClick(".join_member_dish", {
                            action: "点餐-入会组件-正常入会",
                            joinType: "JOIN_MEMBER_BY_MOBILE"
                        }), t.next = 13;
                        break;

                      case 8:
                        t.prev = 8, t.t0 = t.catch(0), n = {}, t.t0.response && t.t0.response.data && (n.errorCode = t.t0.response.data.errorCode, 
                        n.errorMessage = t.t0.response.data.errorMessage), e.triggerEvent("handleMemberJoinOrderFail", n);

                      case 13:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 8 ] ]);
            }))();
        },
        joinMemberByAuth: function(e) {
            var t = this;
            return n(r.default.mark(function a() {
                var s, o, i, c, u, m, d;
                return r.default.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (a.prev = 0, (s = t).$root.$logClick(".join_member_dish", {
                            action: "点餐-入会组件-手机号授权入会",
                            joinType: "JOIN_MEMBER_BY_AUTH"
                        }), "wx" !== (o = s.data.miniType)) {
                            a.next = 12;
                            break;
                        }
                        if (i = e.detail, c = i.encryptedData, u = i.iv, !c || !u) {
                            a.next = 12;
                            break;
                        }
                        return m = {
                            mobileSource: "AUTH",
                            encryptedData: c,
                            iv: u
                        }, a.next = 10, s.handleJoinMember(m);

                      case 10:
                        a.next = 12;
                        break;

                      case 12:
                        "my" === o && my.getAuthCode({
                            scopes: "auth_user",
                            success: function(e) {
                                return n(r.default.mark(function t() {
                                    var a;
                                    return r.default.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                          case 0:
                                            return t.prev = 0, a = {
                                                mobileSource: "ALIPAY_AUTH_V2",
                                                alipayAuthCode: e.authCode
                                            }, t.next = 4, s.handleJoinMember(a);

                                          case 4:
                                            t.next = 9;
                                            break;

                                          case 6:
                                            t.prev = 6, t.t0 = t.catch(0), s.joinMemberByAuthError();

                                          case 9:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t, null, [ [ 0, 6 ] ]);
                                }))();
                            },
                            fail: function(e) {
                                s.joinMemberByAuthError();
                            }
                        }), a.next = 20;
                        break;

                      case 15:
                        a.prev = 15, a.t0 = a.catch(0), d = {}, a.t0.response && a.t0.response.data && (d.errorCode = a.t0.response.data.errorCode, 
                        d.errorMessage = a.t0.response.data.errorMessage), t.triggerEvent("handleMemberJoinOrderFail", d);

                      case 20:
                      case "end":
                        return a.stop();
                    }
                }, a, null, [ [ 0, 15 ] ]);
            }))();
        },
        joinMemberByAuthError: function() {
            var e = this;
            return n(r.default.mark(function t() {
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        e.setData({
                            joinMemberScene: "sms"
                        });

                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        joinMemberBySms: function() {
            var e = this;
            return n(r.default.mark(function t() {
                var a, n, s, o, i, c, u, m, d, l;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, e.$root.$logClick(".join_member_dish", {
                            action: "点餐-入会组件-验证码入会",
                            joinType: "JOIN_MEMBER_BY_SMS"
                        }), a = e.data.sms, n = {
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
                        }, t.next = 6, e.validateSms(a, n);

                      case 6:
                        if (s = t.sent, o = s.error, i = s.errorList, c = s.values, u = c.mobile, m = c.code, 
                        !o) {
                            t.next = 11;
                            break;
                        }
                        return e.$toast.show(i[0]), t.abrupt("return", null);

                      case 11:
                        return d = {
                            mobileSource: "SMS",
                            mobile: u,
                            code: m
                        }, t.next = 14, e.handleJoinMember(d);

                      case 14:
                        t.next = 21;
                        break;

                      case 16:
                        t.prev = 16, t.t0 = t.catch(0), l = {}, t.t0.response && t.t0.response.data && (l.errorCode = t.t0.response.data.errorCode, 
                        l.errorMessage = t.t0.response.data.errorMessage), "CODE_ERROR" === l.errorCode ? e.$toast.show(l.errorMessage) : e.triggerEvent("handleMemberJoinOrderFail", l);

                      case 21:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 16 ] ]);
            }))();
        },
        validateSms: function(e, t) {
            return new Promise(function(r) {
                var n = [];
                Object.keys(e).forEach(function(r) {
                    var a = e[r], s = t[r];
                    s && s.length && s.forEach(function(e) {
                        void 0 === e.empty || e.empty || a || n.push(e.msg), e.reg && (e.reg.test(a) || n.push(e.msg));
                    });
                }), r({
                    error: !!n.length,
                    errorList: n,
                    values: a({}, e)
                });
            });
        },
        sendVerifyCode: function() {
            var e = this;
            return n(r.default.mark(function t() {
                var n, s, o;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, n = e.data.sms, s = n.mobile, e.setData({
                            sms: a(a({}, n), {}, {
                                pending: !0
                            })
                        }), t.next = 6, (0, u.sendVerifyCode)({
                            phone: s,
                            codeSceneType: "C_MEMBER_REGISTER_SCENE"
                        });

                      case 6:
                        e.startRestTimer(), t.next = 14;
                        break;

                      case 9:
                        t.prev = 9, t.t0 = t.catch(0), e.$toast.show(t.t0.message || t.t0.errorMessage || t.t0), 
                        o = e.data.sms, e.setData({
                            sms: a(a({}, o), {}, {
                                pending: !1
                            })
                        });

                      case 14:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 9 ] ]);
            }))();
        },
        startRestTimer: function() {
            var e = this.data.sms, t = e.restTime;
            (t -= 1) <= 0 ? this.setData({
                sms: a(a({}, e), {}, {
                    restTime: 60,
                    restText: "重新获取",
                    pending: !1,
                    reset: !0
                })
            }) : (this.setData({
                sms: a(a({}, e), {}, {
                    restTime: t,
                    restText: "已发送(".concat(t, ")"),
                    pending: !0,
                    reset: !1
                })
            }), this.timer = setTimeout(this.startRestTimer.bind(this), 1e3));
        },
        queryRectify: function() {
            return n(r.default.mark(function e() {
                var t, a, n, s;
                return r.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, (0, c.queryRectify)({
                            bizScene: "JOIN_MEMBER"
                        });

                      case 2:
                        return t = e.sent, a = t.data, n = a.needRectify, s = a.rectifyUrl, n && "false" !== n && (d.default.put("syncCouponsKey", !0), 
                        (0, m.openUrl)({
                            url: s
                        })), e.abrupt("return", n);

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        openUrl: function(e) {
            var t = (e.target.dataset || {}).url;
            "wx" === this.data.miniType ? this.$root.$navigate("/pages/webview/index?pageUrl=" + encodeURIComponent(t)) : (0, 
            m.openUrl)({
                url: t
            });
        },
        bindFocus: function() {
            this.setData({
                scrollTop: 4e6
            });
        }
    }
});