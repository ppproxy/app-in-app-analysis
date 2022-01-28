var t = getApp(), e = t.Anim, n = t.request;

e.Page({
    data: {
        emptyIcon: "https://imgcache.gzonline.gov.cn/cos/empty_0283358d.svg",
        list: []
    },
    onLoad: function(t) {
        var e = this;
        wx.showLoading(), n({
            url: "/donation/mylist",
            data: {
                pageSize: 1e5
            }
        }).then(function(t) {
            wx.hideLoading(), console.log(t);
            var n = t.list;
            n = n.map(function(t) {
                var e = t.name, n = t.status, a = t.create_time;
                return {
                    materials: JSON.parse(e),
                    create_time: a,
                    status: n
                };
            }), e.setData({
                list: n
            });
        }).catch(function(t) {
            wx.hideLoading(), wx.showToast({
                title: t.errmsg || "服务器错误",
                icon: "none"
            });
        });
    },
    onShow: function() {},
    onShareAppMessage: function() {}
});