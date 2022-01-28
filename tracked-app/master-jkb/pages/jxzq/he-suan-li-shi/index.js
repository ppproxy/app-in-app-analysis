var e = require("../../../utils/uitls.js").getPrevPageData, t = getApp().userStore;

Page({
    data: {
        windowHeight: "",
        isShows: !1,
        arr: []
    },
    onLoad: function(i) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            arr: e(),
            userInfo: t.userInfo
        });
    }
});