var a = require("../../../81CC8A51ACE07ADFE7AAE2566711A2D7.js"), t = getApp();

Component({
    properties: {
        query: {
            type: String,
            value: ""
        },
        isSearch: {
            type: Boolean,
            value: !0
        },
        navigationTitle: {
            type: String,
            value: ""
        },
        isShare: {
            type: String,
            value: ""
        },
        isCustom: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        platform: t.globalData.platform,
        statusBarHeight: t.globalData.statusBarHeight,
        titleBarHeight: t.globalData.titleBarHeight,
        totalTopHeight: t.globalData.statusBarHeight + t.globalData.titleBarHeight,
        mainPaddingTop: "ios" === t.globalData.platform ? 6 : 10,
        backIconSrc: "https://h5.sinaimg.cn/upload/100/870/2020/02/26/navigation_icon_back.png",
        homeIconSrc: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/navigation_icon_home.png"
    },
    attached: function() {},
    methods: {
        goBack: function(t) {
            "search" === this.data.isShare || "app" == this.data.isShare ? wx.reLaunch({
                url: "/pages/index/index",
                fail: function() {}
            }) : "detail" === this.data.isShare ? wx.reLaunch({
                url: "/pages/comprehensiveSearch/index?q=" + a.decodeSearchKey(this.data.query) + "&is_share=search",
                fail: function() {}
            }) : wx.navigateBack({
                fail: function() {
                    wx.reLaunch({
                        url: "/pages/index/index",
                        fail: function() {}
                    });
                }
            });
        },
        goHome: function() {
            wx.reLaunch({
                url: "/pages/index/index",
                fail: function() {}
            });
        },
        searchQuery: function(a) {
            this.triggerEvent("searchQuery", {
                query: a.detail.value
            });
        }
    }
});