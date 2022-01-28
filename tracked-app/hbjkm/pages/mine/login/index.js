var e = getApp(), n = e.Anim, o = e.userStore, t = e.request, s = e.config, i = e.wxp, c = require("../../../utils/session").fetchSessionId;

n.Page({
    store: function(e) {
        return {
            isAuth: e.user.userInfo.isAuth,
            userInfo: e.user.userInfo
        };
    },
    data: {
        needCheckSession: !0,
        cityName: s.cityName,
        authTitle: "请先登录账号",
        authDesc: "",
        authBtnText: "登录"
    },
    onLoad: function(e) {
        this.checkWxSession();
    },
    checkWxSession: function() {
        var e = this;
        i.checkSession().then(function() {
            console.log("当前的 sessionKey 未过期"), e.setData({
                needCheckSession: !1
            });
        }).catch(function(n) {
            console.log("当前的 sessionKey 已过期"), e.setData({
                needCheckSession: !1
            }), e.onTapLogout(), c();
        });
    },
    onTapLogin: function(e) {
        var n = e.detail, s = n.iv, i = n.encryptedData;
        {
            if (s && i) return wx.showLoading({
                title: "努力加载中..."
            }), t({
                url: "/wll/account/getphone",
                method: "POST",
                data: {
                    encryptedData: i,
                    iv: s
                }
            }).then(function(e) {
                wx.hideLoading(), console.log("res", e), e && e.phone && o.fetchUserInfo().then(function() {
                    wx.navigateBack();
                });
            }).catch(function(e) {
                wx.hideLoading(), console.error(e);
            });
            console.error("用户拒绝授权登录");
        }
    }
});