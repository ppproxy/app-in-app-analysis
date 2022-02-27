var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../../@babel/runtime/regenerator")), a = require("../../../../../@babel/runtime/helpers/asyncToGenerator"), r = e(require("../../../../../m/zk/za")), o = require("../../../../../l/wh"), n = require("../../../../../v/3s/3k"), i = require("../../../../member/common/util/point/point"), m = require("../../../../member/common/util/common");

(0, r.default)({
    name: "member-card",
    components: {
        toast: "toast",
        memberCode: "member-code"
    },
    properties: {
        showBack: {
            type: Boolean,
            value: !0
        },
        autoClose: {
            type: Boolean,
            value: !1
        },
        redirectUrl: {
            type: String,
            value: ""
        }
    },
    data: {
        themeColor: (0, o.getThemeColor)(),
        joinMemberTips: "",
        memberCardTemplateName: "",
        summaryGuideTips: "",
        showPointTag: !1,
        componentStatus: ""
    },
    localData: {
        options: Object.create(null)
    },
    logProps: {
        $$expElement: [ ".component-member-card-container" ]
    },
    ready: function(e) {
        this.$toast = this.getComponentById("toast"), this.$memberCode = this.getComponentById("memberCode"), 
        this.handlePointMall();
    },
    methods: {
        init: function(e) {
            return this.localData.options = e, this;
        },
        render: function() {
            var e = this.localData.options || {}, t = e.data, a = void 0 === t ? {} : t, r = e.status, o = a["member-assets-info"], n = a["member-guide-info"], i = n.memberCardTemplate || {}, m = i.joinMemberTips, s = void 0 === m ? "" : m, u = i.memberCardTemplateName, l = void 0 === u ? "" : u, c = i.summaryGuideTips, d = void 0 === c ? "" : c;
            this.setData({
                componentStatus: r,
                memberInfo: o,
                memberGuideInfo: n,
                joinMemberTips: s,
                memberCardTemplateName: l,
                summaryGuideTips: d
            });
        },
        getMemberCode: function() {
            m.customLog.click("/alsc.saas.miniapp.hykklyh.grzx-hymdj"), this.$memberCode.showCode();
        },
        JumpToMemberCenter: function() {
            m.customLog.click("/alsc.saas.miniapp.hykklyh.grzx-qwhyzx");
            var e = this.data, t = e.showBack, a = e.autoClose, r = e.redirectUrl;
            this.$root.$navigate("/pages/member/member-index/index", {
                showBack: t,
                autoClose: a,
                redirectUrl: r
            });
        },
        handlePointMall: function() {
            var e = this;
            return a(t.default.mark(function a() {
                var r, o, i;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, (0, n.queryPointCouponListLoad)({
                            pageNo: 1,
                            pageSize: 1
                        });

                      case 3:
                        (r = t.sent) && r.data && r.data.data && r.data.data.itemList && (o = r.data.data, 
                        i = e.transferToL100CouponModelList(o.itemList).slice(0, 1) || [], e.setData({
                            showPointTag: !!i
                        })), t.next = 9;
                        break;

                      case 7:
                        t.prev = 7, t.t0 = t.catch(0);

                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, a, null, [ [ 0, 7 ] ]);
            }))();
        },
        transferToL100CouponModelList: function(e) {
            var t = [];
            if (e && e.length) for (var a = 0; a < e.length; a++) t[a] = (0, i.transferCRMToL100CouponModel)(e[a], this.data.memberInfo.currentLevelNo);
            return t;
        },
        JumpMyWalletPage: function() {
            this.$root.$navigate("/pages/recharge/recharge-wallet/index", {});
        },
        JumpScorePage: function() {
            var e = this;
            return a(t.default.mark(function a() {
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        e.$root.$navigate("/pages/member/member-point/member-point-mall/index", {});

                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, a);
            }))();
        }
    }
});