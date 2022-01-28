var e = require("../../../../@babel/runtime/helpers/defineProperty"), a = getApp().userStore;

Page({
    data: {
        formData: {
            loginType: 3,
            isDefault: !1
        },
        loginItems: [ {
            name: "人脸识别认证",
            value: 3,
            desc: "使用人脸识别进行认证"
        }, {
            name: "支付密码登录",
            value: 2,
            desc: "使用微信支付密码进行认证",
            disabled: !0
        } ]
    },
    onLoad: function(e) {
        console.log("g-auth-choose 页面配置", e);
    },
    handleChange: function(a) {
        this.setData(e({}, "formData.".concat(a.currentTarget.id), a.detail.value));
    },
    handleSubmit: function(e) {
        if (e.detail.validStatus) {
            var t = e.detail.value.isDefault, n = parseInt(e.detail.value.loginType);
            if (t ? wx.setStorageSync("verifyType__loginType", parseInt(n)) : wx.removeStorageSync("verifyType__loginType"), 
            2 === n) return void wx.navigateTo({
                url: "/pages/gsd-ui/g-auth/soter/soter"
            });
            if (3 === n) return void a.authFace().then(function(e) {
                console.log("我的登陆成功了" + e), wx.navigateBack({
                    delta: 1
                });
            });
            wx.navigateTo({
                url: "/pages/gsd-ui/g-auth/name/name"
            });
        }
    }
});