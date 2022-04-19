var e = getApp().systemInfo || wx.getSystemInfoSync(), t = Math.min(e.screenWidth, e.screenHeight) / 750;

Component({
    properties: {
        gohome: {
            type: Boolean,
            value: !0
        },
        goback: {
            type: Boolean,
            value: !0
        },
        leftbar: {
            type: Boolean,
            value: !0
        },
        theme: {
            type: String
        },
        transparent: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        height: e.statusBarHeight + 88 * t,
        paddingTop: e.statusBarHeight
    },
    methods: {
        onBack: function(e) {
            wx.navigateBack({
                delta: 1
            });
        },
        onHome: function(e) {
            wx.reLaunch({
                url: "/pages/index/index",
                fail: function() {}
            });
        }
    }
});