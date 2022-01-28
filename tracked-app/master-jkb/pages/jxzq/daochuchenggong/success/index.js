var t = getApp().config;

Page({
    data: {
        windowHeight: ""
    },
    onLoad: function(a) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            url: t.xlsxDomains + a.url
        });
    },
    sure: function() {
        wx.setClipboardData({
            data: this.data.url,
            success: function(t) {
                wx.showToast({
                    title: "链接已复制",
                    icon: "none",
                    duration: 2e3
                }), console.log(t);
            }
        });
    },
    back: function() {
        wx.navigateBack({
            delta: 1
        });
    }
});