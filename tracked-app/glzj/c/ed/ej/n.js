var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), r = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = require("../../../@babel/runtime/helpers/objectSpread2"), n = e(require("../../../m/zk/za")), o = e(require("../../../m/z3/z7")), i = require("../../../pages/member/common/util/url"), s = require("../../../pages/member/common/util/imageUtil"), m = require("../../../pages/member/common/util/common"), l = require("../../../l/wh"), u = require("../../../l/wa");

(0, n.default)({
    name: "member-join-home",
    localData: {
        options: Object.create(null),
        themeIcons: [ "IconArrow" ]
    },
    data: {
        memberCardTemplate: {
            memberCardTemplateId: "",
            memberCardTemplateName: "",
            memberCardTemplateLogo: "",
            memberCardTemplateBg: "",
            summaryGuideTips: "800元优惠券",
            subGuideTips: "",
            joinMemberTips: "免费领取"
        },
        summaryList: [],
        miniType: (0, u.getMiniType)(),
        sms: {
            mobile: "",
            code: "",
            restTime: 60,
            restText: "已发送(".concat(60, ")"),
            pending: !1
        },
        themeColor: (0, l.getThemeColor)(),
        customerType: -1,
        hasLogin: !1,
        name: "尊享会员",
        headIconUrl: "https://img.alicdn.com/imgextra/i1/O1CN01WggDir1XSJyiLpC15_!!6000000002922-2-tps-96-96.png",
        schedule: 0,
        growthValue: 0,
        needValue: 0,
        currentLevelName: "",
        levelSize: 0,
        currentLevelNo: null,
        needAuth: !0,
        guideInfo: null,
        isMemberOpen: !0,
        titleName: "会员",
        showTitle: !1,
        titleImage: "",
        titleType: "",
        showRecharge: !1,
        rechargeRules: "",
        pointRules: "积分兑换商品",
        nextLevelConsumeAmount: 0
    },
    components: {
        toast: "toast",
        loading: "loading",
        memberCode: "member-code",
        userWithAgreement: "user-with-agreement"
    },
    ready: function() {
        this.$toast = this.getComponentById("toast"), this.$loading = this.getComponentById("loading");
    },
    methods: {
        openUrl: function(e) {
            var t = (e.target.dataset || {}).url;
            "wx" === this.data.miniType ? this.$root.$navigate("/pages/webview/index?pageUrl=" + encodeURIComponent(t)) : (0, 
            i.openUrl)({
                url: t
            });
        },
        loadData: function(e) {
            var t = e.memberGuideInfo, r = void 0 === t ? {} : t, n = r.customerInfo, o = void 0 === n ? {} : n, i = r.memberCardTemplate, m = void 0 === i ? {} : i, l = r.isL100Merchant, u = r.isCrmMerchant, c = r.isMemberOpen, h = m.summaryList, d = void 0 === h ? [] : h, p = o.customerType;
            if (!c) return this.setData({
                customerType: 1,
                levelSize: 1,
                currentLevelName: 0,
                isMemberOpen: !1
            }), null;
            0 === Number(p) && u ? this.setData({
                customerInfo: o,
                isL100Merchant: l,
                isCrmMerchant: u,
                summaryList: d,
                memberCardTemplate: a(a({}, m), {}, {
                    brandLogo: m.brandLogo ? (0, s.getValidImageUrl)(m.brandLogo) : "https://gw.alicdn.com/tfs/TB1KngXOuL2gK0jSZPhXXahvXXa-72-72.png"
                }),
                customerType: p
            }) : (this.initUserinfoInfoContainer(), this.setData({
                customerType: 1
            }));
        },
        init: function(e) {
            return this.localData.options = e, {
                root: this,
                isShow: !0
            };
        },
        render: function() {
            var e = this.localData.options.data;
            if ("HIDDEN" !== this.localData.options.status && e && (e.memberGuideInfo || e.memberAssetsInfo)) {
                var t = e.name, r = void 0 === t ? "会员" : t, a = e.showTitle, n = e.titleImage, o = e.titleType, i = e.memberAssetsInfo.customerType, s = "";
                e.memberAssetsInfo && 1 === Number(i) ? (this.initUserinfoInfoContainer(), this.setData({
                    customerType: 1
                }), s = "/alsc.saas.miniapp.syhyzxyruh") : (this.loadData(e), s = "/alsc.saas.miniapp.syhyzxwruh"), 
                this.setData({
                    titleName: r,
                    showTitle: a,
                    titleImage: n,
                    titleType: o
                }, function() {
                    m.customLog.expo(s);
                });
            }
        },
        initUserinfoInfoContainer: function() {
            var e = this;
            return r(t.default.mark(function r() {
                var a, n, i, s, m, u;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return a = "尊享会员", n = "https://img.alicdn.com/imgextra/i1/O1CN01WggDir1XSJyiLpC15_!!6000000002922-2-tps-96-96.png", 
                        i = e.parseUserData(), t.prev = 3, t.next = 6, o.default.getUserBaseInfo();

                      case 6:
                        s = t.sent, t.next = 11;
                        break;

                      case 9:
                        t.prev = 9, t.t0 = t.catch(3);

                      case 11:
                        i && i.name && i.headIconUrl ? (a = o.default.getRealNickName(i.name), n = i.headIconUrl, 
                        m = {
                            avatarUrl: n,
                            nickName: a
                        }, (0, l.setGlobalUserInfo)(m), e.setData({
                            needAuth: !1
                        })) : s && s.nickName && s.avatarUrl && (a = s.nickName, n = s.avatarUrl, e.setData({
                            name: a,
                            headIconUrl: n
                        })), u = {
                            customerType: 1,
                            name: a,
                            headIconUrl: n,
                            schedule: parseInt(i.growthValue) / parseInt(i.nextLevelGrowthValue) * 360,
                            growthValue: i.growthValue,
                            needValue: i.nextLevelGrowthValue,
                            currentLevelName: i.currentLevelName,
                            nextLevelConsumeAmount: i.nextLevelConsumeAmount,
                            currentLevelNo: i.currentLevelNo,
                            levelSize: i.levelSize,
                            showRecharge: i.showRecharge,
                            rechargeRules: i.rechargeRules ? i.rechargeRules[0] : "",
                            pointRules: i.pointRules ? i.pointRules[0] : "",
                            score: i.score ? i.score : "0",
                            balance: i.balance ? (+i.balance).toFixed(2) : "0.00",
                            themeColor: (0, l.getThemeColor)()
                        }, i && e.setData(u);

                      case 14:
                      case "end":
                        return t.stop();
                    }
                }, r, null, [ [ 3, 9 ] ]);
            }))();
        },
        parseUserData: function() {
            var e = this.localData.options.data;
            if (e) return e.memberAssetsInfo;
        },
        bindGetUserInfo: function(e) {
            var t = this;
            o.default.auth({
                hasUserAgreement: !0,
                context: this.getComponentById("userWithAgreement")
            }, function(e) {
                t.renderUserInfo(e), t.setData({
                    needAuth: !1
                });
            }, function(e) {});
        },
        renderUserInfo: function(e) {
            this.setData({
                name: e.nickName,
                headIconUrl: e.avatarUrl
            });
        },
        gotoMemberIndex: function() {
            this.$root.$navigate("/pages/member/member-index/index", {
                showBack: !0,
                autoClose: !1,
                redirectUrl: ""
            });
        },
        toRecharge: function() {
            this.$root.$navigate("/pages/recharge/recharge-payment/index");
        },
        handleQrcode: function() {
            this.$memberCode = this.getComponentById("memberCode"), this.$memberCode.showCode();
        }
    }
});