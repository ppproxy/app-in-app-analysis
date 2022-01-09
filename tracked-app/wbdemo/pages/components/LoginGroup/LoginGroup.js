var t = getApp();

Component({
    properties: {},
    data: {
        showLogin: !1,
        isConnected: !0
    },
    methods: {
        weiboLogin: function() {
            wx.navigateTo({
                url: "/wbui/login/index",
                fail: function() {}
            });
        },
        showLoading: function() {
            wx.showLoading({
                title: "加载中",
                mask: !0
            });
        },
        wechatLogin: function(t) {
            t && t.detail && "getUserInfo:fail auth deny" !== t.detail.errMsg || wx.hideLoading({
                fail: function() {}
            });
        },
        catchRequest: function() {
            wx.showModal({
                content: "网络不可用，请检查网络设置",
                showCancel: !1
            });
        }
    },
    attached: function() {
        var n = this;
        this.setData({
            showLogin: 1 != t.globalData.userStatus
        }), wx.onNetworkStatusChange(function(t) {
            n.setData({
                isConnected: t.isConnected
            });
        });
    },
    detached: function() {}
});