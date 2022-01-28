var n = getApp(), t = (n.Anim, n.request, n.requestHb, n.dayjs, n.wxp), o = n.config;

n.utils, n.userStore;

Page({
    data: {
        link: ""
    },
    onLoad: function(n) {
        var e = this;
        t.request({
            url: o.cdnDomain + "/hbjkm/gdt.json?t=" + Date.now()
        }).then(function(n) {
            e.setData({
                notice: n.data.name,
                link: n.data.link
            });
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