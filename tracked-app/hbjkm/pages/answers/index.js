var t = getApp(), n = (t.Anim, t.Event, t.resetTab, t.config), a = (t.dayjs, t.request, 
t.requestHb, t.systemInfo, t.wxp);

Page({
    data: {
        data: []
    },
    onLoad: function(t) {
        var o = this;
        a.request({
            url: n.cdnDomain + "/hbjkm/cjwt/question.json?t=" + Date.now()
        }).then(function(t) {
            t.data.forEach(function(t, n) {
                t.id = n, t.val = !1;
            }), o.setData({
                data: t.data
            });
        });
    },
    answerFn: function(t) {
        var n = t.currentTarget.dataset.id, a = this.data.data;
        a[n].val = !a[n].val, this.setData({
            data: a
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