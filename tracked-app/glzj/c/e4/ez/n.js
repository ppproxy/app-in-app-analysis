var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = e(require("../../../m/zk/za")), t = require("../../../l/wh"), r = e(require("../../../x/wl"));

(0, a.default)({
    name: "auth-agreement",
    components: {},
    data: {
        themeColor: (0, t.getThemeColor)(),
        agreeChecked: !1
    },
    localData: {},
    properties: {
        noAgreement: {
            type: Boolean,
            value: !1
        }
    },
    ready: function() {},
    methods: {
        toAgreementPage: function() {
            r.default && r.default.methods && r.default.methods.$navigate("/pages/webview/index?pageUrl=" + encodeURIComponent("https://pages.koubei.com/wow/alsc/mod/5ecc748debbd00d4f390fa1d"));
        },
        handleChange: function(e) {
            var a = this;
            this.setData({
                agreeChecked: !this.data.agreeChecked
            }, function() {
                a.triggerEvent("handleAgreeChange", {
                    agreeChecked: a.data.agreeChecked
                });
            });
        }
    }
});