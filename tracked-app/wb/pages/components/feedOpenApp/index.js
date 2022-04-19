var o = getApp();

Component({
    properties: {},
    data: {
        launchFromApp: !1
    },
    ready: function() {
        var a = this;
        this.setData({
            launchFromApp: o.globalData.launchFromApp
        }, function() {
            console.log("launchFromApp:", a.data.launchFromApp);
        });
    },
    methods: {
        launchAppError: function(o) {
            console.log(o), wx.showToast({
                title: "下载微博客户端查看更多内容",
                icon: "none",
                duration: 3e3
            });
        }
    }
});