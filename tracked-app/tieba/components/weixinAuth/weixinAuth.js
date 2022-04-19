var _util = require("../../util/util");

var _loginFn = require("../../pass_utils/loginFn");

var _url = require("../../util/url");

Component({
    properties: {
        isShow: {
            type: Boolean,
            value: true
        },
        from: {
            type: String,
            value: ""
        }
    },
    data: {
        isShow: false,
        from: "",
        IMG_CDN: _url.IMG_CDN,
        appType: (0, _util.getGlobalData)("__type__")
    },
    methods: {
        goAgreement: function goAgreement() {
            var agreeUrl = "https://tieba.baidu.com/tb/mobile/wisemainstatic/secretright.html?noshare=1&page=page1";
            wx.myNavigateTo({
                url: "/pages/webview/webview?from=link&url=" + agreeUrl
            });
        },
        bindGetUserInfo: function bindGetUserInfo(e) {
            var self = this;
            if (e.detail.userInfo) {
                // 允许授权
                (0, _util.setGlobalData)("wxInfo", e.detail.userInfo);
                self.closeModal();
                if (self.data.from === "login") {
                    (0, _util.addLoginCb)();
                    (0, _loginFn.passLoginForWechat)("/pages/account/account", "refreshTbs");
                } else {
                    var path = (0, _util.getCurrentUrl)();
                    (0, _loginFn.passLoginForWechat)(path, "refreshTbs");
                }
            }
        },
        closeModal: function closeModal(bindClose) {
            this.setData({
                isShow: !this.data.isShow
            });
        }
    }
});
/**
     * @file 授权的弹窗
     * @author wz
     */