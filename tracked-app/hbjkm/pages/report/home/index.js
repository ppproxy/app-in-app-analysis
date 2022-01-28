var e = getApp(), t = e.Anim, n = e.userStore, o = require("../../../services/report");

t.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        visible: !0,
        toUrl: "",
        isReported: wx.getStorageSync("selfForm__submit"),
        imgUrls: [ "https://imgcache.gzonline.gov.cn/cos/shangbao_dbc3d59b.png" ]
    },
    watch: {},
    onLoad: function(e) {},
    checkSelfReport: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        e.indexOf("type=1") > -1 ? wx.navigateTo({
            url: e
        }) : o.hasReported().then(function(t) {
            t ? wx.navigateTo({
                url: e
            }) : wx.showModal({
                title: "温馨提示",
                content: "为他人上报健康情况前，请先为自己上报健康情况",
                confirmText: "知道了",
                showCancel: !1
            });
        }).catch(function() {
            wx.hideLoading(), wx.showToast({
                title: "服务器拥挤，请稍后再试",
                icon: "none"
            });
        });
    },
    onTapAccess: function(e) {
        n.checkAuth() && this.checkSelfReport(e.currentTarget.dataset.url);
    }
});