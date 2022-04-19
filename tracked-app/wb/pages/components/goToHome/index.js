getApp();

Component({
    properties: {},
    data: {},
    methods: {
        backHome: function() {
            wx.reLaunch({
                url: "/pages/index/index",
                fail: function() {}
            });
        }
    }
});