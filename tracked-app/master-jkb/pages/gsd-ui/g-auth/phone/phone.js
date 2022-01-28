getApp().sdk;

Page({
    data: {},
    onLoad: function(e) {
        console.log("g-auth-choose 页面配置", e);
    },
    getPhoneNumber: function(e) {
        if ("getPhoneNumber:ok" === e.detail.errMsg) {
            var t = getCurrentPages(), o = t[t.length - 2];
            o.setData({
                "phone.iv": e.detail.iv,
                "phone.encrypted_data": e.detail.encryptedData
            }), wx.navigateBack({
                delta: 1
            }), setTimeout(function() {
                o.startFaceVerify();
            }, 500);
        } else {
            var a = e.detail.errMsg.split("getPhoneNumber:fail ");
            console.log("errmsg[1]", a[1]), a.length > 1 && "user deny" !== a[1] ? wx.showToast({
                title: a[1] || "授权手机失败，请稍后再尝试",
                icon: "none"
            }) : console.log("取消授权手机号码");
        }
    }
});