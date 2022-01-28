getApp().utils;

Page({
    data: {
        webUrl: ""
    },
    onLoad: function(t) {
        var e = decodeURIComponent(t.webUrl || t.h5Url);
        console.log("h5 url: ", e), e && this.setData({
            webUrl: e
        }), t.title && wx.setNavigationBarTitle({
            title: decodeURIComponent(t.title)
        });
    }
});