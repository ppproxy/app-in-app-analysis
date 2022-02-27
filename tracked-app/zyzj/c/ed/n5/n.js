var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), r = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../../m/zk/za")), n = require("../../../v/3s/ed"), i = require("../../../l/wh");

(0, a.default)({
    name: "member-join",
    data: {
        themeColor: (0, i.getThemeColor)(),
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
        activityList: []
    },
    properties: {
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
    ready: function() {
        this._init();
    },
    methods: {
        _init: function() {
            var e = this;
            return r(t.default.mark(function r() {
                var a, i, s, m, o, u, l, c, d, p, h, b, g, v, f, C, y, T;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, a = e.data.guideInfo) {
                            t.next = 8;
                            break;
                        }
                        return t.next = 5, (0, n.queryMemberCardGuideInfo)();

                      case 5:
                        i = t.sent, s = i.data, a = s;

                      case 8:
                        if (o = (m = a).customerInfo, u = void 0 === o ? {} : o, l = m.memberCardTemplate, 
                        c = void 0 === l ? {} : l, d = m.isL100Merchant, p = m.isCrmMerchant, h = m.isMemberOpen, 
                        b = c.summaryValue, g = void 0 === b ? "" : b, v = c.summaryList, f = void 0 === v ? [] : v, 
                        C = c.activityList, y = void 0 === C ? [] : C, T = u.customerType, h) {
                            t.next = 14;
                            break;
                        }
                        return e.triggerEvent("handleChange", {
                            status: !1,
                            error: "会员功能不可用"
                        }), t.abrupt("return");

                      case 14:
                        0 === Number(T) && p && f.length ? (e.setData({
                            componentStatus: !0,
                            customerInfo: u,
                            memberCardTemplate: c,
                            isL100Merchant: d,
                            isCrmMerchant: p,
                            summaryValue: g,
                            summaryList: f.slice(0, 9),
                            activityList: y.slice(0, 9)
                        }), e.triggerEvent("handleChange", {
                            status: !0
                        })) : (e.setData({
                            componentStatus: !1
                        }), e.triggerEvent("handleChange", {
                            status: !1,
                            error: "当前商户未开通CRM 或者当前用户已经是会员"
                        })), t.next = 21;
                        break;

                      case 17:
                        t.prev = 17, t.t0 = t.catch(0), e.setData({
                            componentStatus: !1
                        }), e.triggerEvent("handleChange", {
                            status: !1,
                            error: t.t0.message || t.t0
                        });

                      case 21:
                      case "end":
                        return t.stop();
                    }
                }, r, null, [ [ 0, 17 ] ]);
            }))();
        },
        handleBtnClick: function() {
            var e = this.data, t = e.showBack, r = e.autoClose, a = e.redirectUrl, n = e.fromPage;
            this.$root.$navigate("/pages/member/member-index/index", {
                showBack: t,
                autoClose: r,
                redirectUrl: a,
                fromPage: n
            });
        },
        handleClose: function() {
            this.setData({
                componentStatus: !1
            });
        },
        refresh: function() {
            this._init();
        }
    }
});