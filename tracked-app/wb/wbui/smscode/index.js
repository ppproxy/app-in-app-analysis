var n = require("../../4D54D8E2ACE07ADF2B32B0E54061A2D7.js");

Page({
    data: {},
    onLoad: function(n) {
        this.setData({
            options: n
        });
    },
    onReady: function() {
        n.exec(this, "ready", {});
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    open: function(o) {
        n.exec(this, "open", this.data.options);
    },
    inputSmsCode: function(o) {
        n.exec(this, "inputSmsCode", o);
    },
    getSmsCode: function(o) {
        n.exec(this, "getSmsCode", this.data.options);
    },
    smsLogin: function(o) {
        n.exec(this, "smsLogin", this.data.options);
    }
});