var e = getApp(), t = (e.request, e.config, e.wxp, e.userStore);

Page({
    data: {
        windowHeight: ""
    },
    onLoad: function(e) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        });
    },
    arge: function() {
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), t.checkAuth("/pages/jxzq/cha-xun-jie-guo/index") && (wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), wx.navigateTo({
            url: "/pages/jxzq/cha-xun-jie-guo/index"
        }), wx.hideLoading());
    },
    cancle: function() {
        wx.navigateBack({
            delta: 1
        });
    }
});