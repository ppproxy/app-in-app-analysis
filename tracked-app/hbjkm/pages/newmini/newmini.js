Page({
    data: {},
    onLoad: function(n) {
        console.log(n), this.setData({
            phone: n.phone,
            srcc: "https://xc.caict.ac.cn/?code=123&phone=" + n.phone
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