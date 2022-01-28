Page({
    onLoad: function() {
        wx.reLaunch({
            url: "/pages/stat/index",
            success: function(n) {
                console.log(n);
            },
            fail: function(n) {
                console.log(n);
            }
        });
    }
});