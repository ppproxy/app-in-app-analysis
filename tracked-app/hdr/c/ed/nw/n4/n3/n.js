var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../../../@babel/runtime/helpers/defineProperty"), o = e(require("../../../../../m/zk/za")), n = require("../../../../../pages/member/common/util/imageUtil"), r = require("../../../../../l/wh");

(0, o.default)({
    name: "pay-phone-modal",
    data: {
        visible: !1,
        themeColor: (0, r.getThemeColor)()
    },
    properties: {
        joinMemberScene: {
            type: String,
            value: ""
        },
        customerInfo: {
            type: Object,
            value: {}
        },
        miniType: {
            type: String,
            value: ""
        },
        sms: {
            type: Object,
            value: {}
        }
    },
    components: {
        customShowModal: "custom-show-modal"
    },
    ready: function() {
        this.$payPhoneModal = this.getComponentById("customShowModal");
    },
    methods: {
        getLogoUrl: function(e) {
            return /(http|https):\/\/([\w.]+\/?)\S*/.test(e) ? e : (0, n.getValidImageUrl)(e);
        },
        init: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this.getLogoUrl(e.brandLogo);
            this.setData({
                brandName: e.memberCardTemplateName,
                brandLogo: t
            }), this.$payPhoneModal.show({});
        },
        joinMemberBySms: function() {
            this.triggerEvent("handleJoinMemberBySms");
        },
        close: function() {
            this.$payPhoneModal.close();
        },
        bindSmsInput: function(e) {
            var o = (e.currentTarget.dataset || {}).key;
            o && this.triggerEvent("handleBindSmsInput", t({}, o, e.detail.value));
        },
        handleSendVerifyCode: function() {
            this.triggerEvent("handleSendVerifyCode");
        }
    }
});