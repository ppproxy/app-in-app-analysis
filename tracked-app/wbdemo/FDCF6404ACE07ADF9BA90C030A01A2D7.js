var a = require("81CC8A51ACE07ADFE7AAE2566711A2D7.js"), o = require("F76D5AA1ACE07ADF910B32A610A0A2D7.js"), t = null;

var c = new function() {
    this.vuidLogin = function() {
        return new Promise(function(o, c) {
            t = t || getApp(), wx.login({
                success: function(c) {
                    t.globalData.vid = a.crc32To13(c.code), wx.setStorage({
                        key: "vid",
                        data: t.globalData.vid
                    }), o(t.globalData.vid);
                },
                fail: function(a) {
                    c("");
                }
            });
        });
    }, this.sdkLogin = function(c) {
        t = t || getApp(), wx.login({
            success: function(c) {
                var n = a.calculateS(c.code), e = "".concat(o.host, "sdk/login?") + "new_version=".concat(o.newVersion, "&appkey=").concat(o.appkey, "&wm=").concat(o.wm, "&from=").concat(o.fromValue, "&c=").concat(o.c, "&wechat_code=").concat(c.code, "&m=").concat(n);
                console.log(e), console.log(c.code);
                wx.request({
                    url: e,
                    header: {
                        "X-Sessionid": a.generateSessionId(t.globalData.uid)
                    },
                    success: function(o) {
                        "" == o.data.gsid || function(o) {
                            o.data.errno || (console.log(o.data), t.globalData.uid = o.data.uid, t.globalData.vid = o.data.uid, 
                            t.globalData.gsid = o.data.gsid, t.globalData.vgsid = o.data.gsid, t.globalData.s = a.calculateS(t.globalData.uid), 
                            t.globalData.userStatus = 0);
                        }(o);
                    },
                    fail: function(a) {},
                    complete: function(a) {}
                });
            },
            fail: function(a) {}
        });
    };
}();

module.exports = {
    userManager: c
};