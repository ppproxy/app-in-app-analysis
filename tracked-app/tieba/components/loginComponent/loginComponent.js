var _util = require("../../util/util.js");

Component({
    data: {
        isBaidu: (0, _util.getGlobalData)("isBaidu"),
        canIUseLoginButton: wx.canIUse("button.open-type.login"),
        isLogin: (0, _util.getBDUSS)() || (0, _util.getGlobalData)("isBaidu") && wx.isLoginSync().isLogin
    },
    methods: {
        toLogin: function toLogin(e) {
            var _this = this;
            // errCode === 10004 表示未登录，未登录不做任何操作
                        if (e.detail.errCode !== "10004") {
                this.setData({
                    isLogin: true
                });
                (0, _util.baiduLoginSuccess)(function() {
                    _this.triggerEvent("loginSuccess");
                });
            }
        }
    }
});
/**
     * @file 统一登录兼容组件
     */