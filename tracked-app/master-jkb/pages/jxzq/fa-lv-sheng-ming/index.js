Page({
    data: {
        windowHeight: ""
    },
    onLoad: function(n) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});