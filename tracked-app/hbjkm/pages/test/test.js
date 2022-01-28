require("../../data/xzqh.js");

var n = getApp();

n.requestHb, n.config, n.wxp;

Page({
    data: {},
    onLoad: function(n) {
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(n) {
                n.tempFilePaths;
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});