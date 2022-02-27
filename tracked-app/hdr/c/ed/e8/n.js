var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), r = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../../m/zk/za")), n = require("../../../v/3s/ed"), s = require("../../../l/wh"), o = require("../../../pages/member/common/util/common");

(0, a.default)({
    name: "member-join",
    data: {
        themeColor: (0, s.getThemeColor)(),
        componentStatus: !1,
        customerInfo: {
            customerId: "",
            mobile: "",
            name: "",
            customerType: ""
        },
        memberCardTemplate: {
            memberCardTemplateId: "",
            memberCardTemplateName: "",
            memberCardTemplateLogo: "",
            memberCardTemplateBg: "",
            summaryGuideTips: "",
            subGuideTips: "",
            joinMemberTips: ""
        },
        isL100Merchant: !1,
        isCrmMerchant: !1,
        isMemberOpen: !1,
        summaryValue: "",
        summaryList: [],
        activityList: [],
        isNewRegister: !0,
        showSuccessScene: !1
    },
    logProps: {
        $$expElement: [ ".component-member-join-order", ".component-member-join-success-content" ]
    },
    properties: {
        scene: {
            type: String,
            value: "home"
        },
        showBack: {
            type: Boolean,
            value: !0
        },
        autoClose: {
            type: Boolean,
            value: !0
        },
        fromPage: {
            type: String,
            value: ""
        },
        redirectUrl: {
            type: String,
            value: ""
        },
        guideInfo: {
            type: Object,
            value: null
        }
    },
    components: {
        toast: "toast",
        loading: "loading"
    },
    observers: {
        guideInfo: function(e) {
            e && this._init();
        }
    },
    ready: function() {
        this.setData({
            themeColor: (0, s.getThemeColor)()
        }), this.$toast = this.getComponentById("toast"), this.$loading = this.getComponentById("loading"), 
        this._init();
    },
    methods: {
        _init: function() {
            var e = this;
            return r(t.default.mark(function r() {
                var a, s, o, i, m, u, c, l, d, h, g, p, b, f, C, v, y, S, T, w, $, k, L, I, M;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, a = e.data, s = a.guideInfo, o = a.scene, s) {
                            t.next = 10;
                            break;
                        }
                        return i = {}, "success" === o && (i = {
                            scene: "REGISTER_SUCCESS"
                        }), t.next = 7, (0, n.queryMemberCardGuideInfo)(i);

                      case 7:
                        m = t.sent, u = m.data, s = u;

                      case 10:
                        if (l = (c = s).customerInfo, d = void 0 === l ? {} : l, h = c.memberCardTemplate, 
                        g = void 0 === h ? {} : h, p = c.isL100Merchant, b = c.isCrmMerchant, f = c.isMemberOpen, 
                        C = g.summaryValue, v = void 0 === C ? "" : C, y = g.summaryList, S = void 0 === y ? [] : y, 
                        T = g.activityList, w = void 0 === T ? [] : T, $ = d.customerType, k = d.member, 
                        L = (void 0 === k ? {} : k).isNewRegister, "success" === o || f) {
                            t.next = 17;
                            break;
                        }
                        return e.triggerEvent("handleChange", {
                            status: !1,
                            error: "会员功能不可用"
                        }), t.abrupt("return");

                      case 17:
                        0 === Number($) && b || "success" === o ? (I = !L || L && w && w.length, M = {
                            componentStatus: !0,
                            customerInfo: d,
                            memberCardTemplate: g,
                            isL100Merchant: p,
                            isCrmMerchant: b,
                            summaryValue: v,
                            summaryList: "my" === o ? S.slice(0, 4) : S,
                            activityList: w.slice(0, 9),
                            isNewRegister: L,
                            showSuccessScene: I
                        }, I && "success" === o ? (e.$loading && e.$loading.showLoading("正在加载中..."), setTimeout(function() {
                            e.$loading && e.$loading.hideLoading(), e.setData(M, function() {
                                e.$root.$logReinit(e);
                            }), e.triggerEvent("handleChange", {
                                status: !0
                            });
                        }, 2e3)) : (e.setData(M), e.triggerEvent("handleChange", {
                            status: !0
                        }))) : (e.setData({
                            componentStatus: !1
                        }), e.triggerEvent("handleChange", {
                            status: !1,
                            error: "当前商户未开通CRM 或者当前用户已经是会员"
                        })), t.next = 24;
                        break;

                      case 20:
                        t.prev = 20, t.t0 = t.catch(0), e.setData({
                            componentStatus: !1
                        }), e.triggerEvent("handleChange", {
                            status: !1,
                            error: t.t0.message || t.t0
                        });

                      case 24:
                      case "end":
                        return t.stop();
                    }
                }, r, null, [ [ 0, 20 ] ]);
            }))();
        },
        handleBtnClick: function() {
            var e = this.data, t = e.showBack, r = e.autoClose, a = e.redirectUrl, n = e.scene, s = e.fromPage;
            "home" === n && this.$root.$logClick(".home.member", {
                action: "轻店首页-立即入会按钮点击"
            }), this.$root.$navigate("/pages/member/member-index/index", {
                showBack: t,
                autoClose: r,
                redirectUrl: a,
                fromPage: s
            });
        },
        handleClose: function() {
            var e = this;
            return r(t.default.mark(function r() {
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        e.setData({
                            componentStatus: !1
                        });

                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, r);
            }))();
        },
        handleCloseSendCoupon: function() {
            o.customLog.click("/alsc.saas.miniapp.hyzx-ckwcdqy"), this.handleClose();
        },
        refresh: function() {
            this._init();
        }
    }
});