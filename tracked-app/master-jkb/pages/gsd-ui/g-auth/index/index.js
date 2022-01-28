var o = getApp().sdk, n = getApp().userStore;

Page({
    store: function(o) {
        return {
            userInfo: o.user.userInfo,
            userInfoStr: JSON.stringify(o.user.userInfo, null, 2)
        };
    },
    onLoad: function() {
        n.updateUserInfo();
    },
    onShow: function() {
        console.log("onShow, userInfo:", this.data.userInfo);
    },
    onGoToLogin: function() {
        n.goToAuth().then(function() {
            console.log("userStore.goToAuth Success");
        });
    },
    onGetUserInfo: function() {
        n.updateUserInfo();
    },
    onLogout: function() {
        var n = this;
        o.request({
            method: "GET",
            url: "/api/mp/logout"
        }).then(function() {
            n.handleLogout();
        }).catch(function() {
            n.handleLogout();
        });
    },
    handleLogout: function() {
        wx.removeStorageSync("tif-sid"), n.initUserInfo();
    }
});