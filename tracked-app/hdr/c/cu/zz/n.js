var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../@babel/runtime/helpers/objectSpread2"), n = e(require("../../../@babel/runtime/regenerator")), o = require("../../../@babel/runtime/helpers/asyncToGenerator"), r = e(require("../../../m/zk/za")), a = e(require("../../../m/z3/z7")), i = e(require("../../../m/z3/zs")), s = require("../../../l/wh"), u = require("../../../l/wa"), l = require("../zf/n");

function c() {
    return {
        customerType: 0,
        hasLogin: !1,
        name: "欢迎光临",
        headIconUrl: "https://img.alicdn.com/imgextra/i1/O1CN01WggDir1XSJyiLpC15_!!6000000002922-2-tps-96-96.png",
        introduction: "登录查看我的资产",
        couponCount: 0,
        schedule: 0,
        growthValue: 0,
        needValue: 0,
        currentLevelName: "",
        nextLevelName: "",
        themeColor: "",
        levelSize: 0,
        needAuth: !0,
        guideInfo: null,
        isMemberOpen: !0,
        supportGetUserProfile: "undefined" != typeof wx && wx.canIUse && wx.canIUse("getUserProfile")
    };
}

var h = !1;

(0, r.default)({
    name: "userinfo-info",
    components: {
        authPhoneModal: "auth-phone-modal",
        authUserWithAgreementModalLightshop: "auth-user-with-agreement-modal-lightshop"
    },
    logProps: {
        $$expElement: [ ".component-lightshop-user-info-image", ".component-lightshop-user-info-right-coupon", ".component-lightshop-user-info-right-login" ]
    },
    localData: {
        options: Object.create(null),
        themeIcons: [ "IconCoupon", "IconArrow" ],
        componentCode: "user-info-component",
        bizCodes: "member-assets-info"
    },
    data: c(),
    methods: {
        init: function(e) {
            return this.localData.options = e, {
                root: this,
                isShow: !0
            };
        },
        render: function() {
            this.initUserinfoInfoContainer();
        },
        initUserinfoInfoContainer: function() {
            var e = this;
            return o(n.default.mark(function t() {
                var o, r, i, u, l, c, h;
                return n.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return o = "欢迎光临", r = "https://img.alicdn.com/imgextra/i1/O1CN01WggDir1XSJyiLpC15_!!6000000002922-2-tps-96-96.png", 
                        i = e.parseUserData(), t.prev = 3, t.next = 6, a.default.getUserBaseInfo();

                      case 6:
                        u = t.sent, t.next = 11;
                        break;

                      case 9:
                        t.prev = 9, t.t0 = t.catch(3);

                      case 11:
                        i && i.name && i.headIconUrl ? (o = a.default.getRealNickName(i.name), r = i.headIconUrl, 
                        l = {
                            avatarUrl: r,
                            nickName: o
                        }, (0, s.setGlobalUserInfo)(l), e.setData({
                            needAuth: !1
                        })) : u && u.nickName && u.avatarUrl && (o = u.nickName, r = u.avatarUrl, e.setData({
                            name: o,
                            headIconUrl: r,
                            introduction: "在这里遇见美味生活"
                        })), c = {
                            customerType: parseInt(i.customerType),
                            name: o,
                            headIconUrl: r,
                            introduction: "在这里遇见美味生活",
                            schedule: parseInt(i.growthValue) / parseInt(i.nextLevelGrowthValue) * 260,
                            growthValue: i.growthValue,
                            needValue: i.nextLevelGrowthValue,
                            currentLevelName: i.currentLevelName,
                            nextLevelName: i.nextLevelName,
                            levelSize: i.levelSize,
                            couponCount: i.couponCount,
                            themeColor: (0, s.getThemeColor)()
                        }, (h = e.parseMemberData()) && (c.guidInfo = h, c.isMemberOpen = h.isMemberOpen, 
                        h.isMemberOpen || (c.customerType = 0, c.levelSize = 1, c.currentLevelName = 0)), 
                        i && e.setData(c);

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 3, 9 ] ]);
            }))();
        },
        parseUserData: function() {
            var e = this.localData.options.data;
            if (e) return e["member-assets-info"];
        },
        parseMemberData: function() {
            var e = this.localData.options.data;
            return e ? e.member_guid : c();
        },
        getUserInfoFail: function(e) {
            h = !1;
        },
        userInfoAuthAgreementPage: function(e) {
            var n = this;
            if (!h) {
                var o = {
                    hasUserAgreement: !0
                };
                e && (o = t({
                    event: e
                }, o)), h = !0, a.default.auth(t({}, o), function(e) {
                    n.renderUserInfo(e), n.$root.$logClick(".home.userinformation", {});
                }, this.getUserInfoFail);
            }
        },
        renderUserInfo: function(e) {
            h = !1, this.setData({
                name: e.nickName,
                headIconUrl: e.avatarUrl,
                needAuth: !1
            });
        },
        gotoMemberJoin: function() {
            this.$root.$logClick(".home.login", {}), this.$root.$navigate("/pages/member/member-index/index", {
                showBack: !0,
                autoClose: !1,
                redirectUrl: ""
            });
        },
        gotoCoupon: function() {
            this.$root.$logClick(".home.chakanquan", {}), this.$root.$navigate("/pages/member/member-coupon-list/index");
        },
        bindPhoneAuthPage: function() {
            var e = this;
            (0, s.getAuthPhoneFlag)() ? this.gotoCoupon() : (this.$root.$logClick(".home.login", {}), 
            i.default.auth({
                context: this.getComponentById("authPhoneModal")
            }, function(t) {
                e.updateInfos(), e.gotoCoupon();
            }, function(e) {}));
        },
        updateInfos: function() {
            var e = this;
            return o(n.default.mark(function t() {
                var o, r, a, i, c, h;
                return n.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return o = (0, s.getAppBaseInfo)(), r = o.appId, a = (0, s.getAuthPhoneFlag)(), 
                        i = {
                            appId: r,
                            componentCode: e.localData.componentCode,
                            bizCodes: e.localData.bizCodes,
                            appType: (0, u.getMiniType)()
                        }, t.next = 5, (0, l.queryService)(i);

                      case 5:
                        c = t.sent, "user-info-component", "member-assets-info", h = c.data["user-info-component"].data["member-assets-info"], 
                        e.setData({
                            hasLogin: a,
                            couponCount: h.couponCount
                        });

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        handleAppear: function(e) {
            var t = (e.currentTarget || {}).dataset.trackLogkey;
            t && this.$root.$logExpo(t, {});
        },
        handleChange: function() {}
    }
});