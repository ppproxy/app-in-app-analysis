var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../m/zk/za")), o = require("../../../../../l/wa");

(0, e.default)({
    name: "function-entrance",
    components: {},
    data: {
        couponTips: "",
        userInfoTips: "",
        entranceOrder: !1,
        personalInfoShowContent: !1,
        personalInfoContent: "",
        personalInfoIconImgUrl: ""
    },
    localData: {
        options: Object.create(null)
    },
    ready: function() {},
    methods: {
        init: function(e) {
            return this.localData.options = e, this;
        },
        render: function() {
            var e = this.localData.options.data, o = e.couponTips, n = void 0 === o ? "" : o, t = e.userInfoTips, r = void 0 === t ? "" : t, i = e.entranceOrder, a = void 0 !== i && i, s = e.personal_complete_personal_info, l = (void 0 === s ? {} : s) || {}, p = l.showContent, c = void 0 === p ? "" : p, u = l.content, d = void 0 === u ? "" : u, m = l.iconImgUrl, f = void 0 === m ? "" : m;
            this.setData({
                couponTips: n,
                userInfoTips: r,
                entranceOrder: a,
                personalInfoShowContent: c,
                personalInfoContent: d,
                personalInfoIconImgUrl: f
            });
        },
        handleMoreClick: function() {
            this.$root.$navigate("/pages/member/member-coupon-list/index", {
                couponType: "SAAS",
                goodsType: "COUPON"
            });
        },
        handleGoToOrder: function() {
            this.$root.$relaunch("/pages/orderlist/index?fromPage=MEMBER_MY");
        },
        showAboutView: function() {
            var e = (0, o.getVersion)() || "";
            e && (this.setData({
                miniVersion: e
            }), this.$root.$navigate("/pages/member/member-about/index", {
                miniVersion: e
            }));
        },
        goToPersonalInfo: function(e) {
            this.$root.$navigate("/pages/member/member-personal-info/index");
        }
    }
});