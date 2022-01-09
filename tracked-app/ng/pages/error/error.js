var t = [];

Page({
    data: {
        question: null,
        current: 0,
        total: 0
    },
    onLoad: function(n) {
        var o = wx.getStorageSync("errorOptions");
        o && o.length > 0 && (t = o, this.setData({
            question: t[0],
            total: t.length,
            current: 0
        }));
    },
    submit: function(n) {
        this.data.current += 1, this.data.current < this.data.total ? this.setData({
            question: t[this.data.current],
            current: this.data.current
        }) : (this.data.current = this.data.total, wx.showToast({
            title: "已经到底啦",
            icon: "none",
            duration: 500
        }));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});