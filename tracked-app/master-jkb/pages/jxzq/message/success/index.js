Page({
    data: {
        windowHeight: ""
    },
    onLoad: function(t) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        });
    },
    sure: function() {
        wx.navigateBack({
            delta: 6
        });
    },
    back: function() {
        wx.navigateBack({
            delta: 1
        });
    }
});