var t = getApp(), e = t.Anim;

t.request;

e.Page({
    data: {
        emptyIcon: "https://imgcache.gzonline.gov.cn/cos/empty_0283358d.svg"
    },
    onLoad: function(t) {
        var e = t.title;
        e && wx.setNavigationBarTitle({
            title: e
        });
    }
});