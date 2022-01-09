var t = require("F76D5AA1ACE07ADF910B32A610A0A2D7.js"), o = require("81CC8A51ACE07ADFE7AAE2566711A2D7.js");

function e(o, e, n, a) {
    var c = "".concat(t.host, "account/login_sendcode?from=").concat(t.fromValue, "&area=").concat(e, "&phone=").concat(e + o), i = {
        phone: o,
        area: e
    };
    wx.request({
        url: c,
        params: i,
        success: function(t) {
            !function(t) {
                n(t.data);
            }(t);
        },
        fail: function(t) {}
    });
}

function n(o, e, n) {
    var a = getApp(), c = o.phoneNum, i = o.veriCode, u = o.area, r = "";
    if (10 == a.globalData.uid.length) try {
        r = wx.getStorageSync("uid");
    } catch (t) {
        r = "";
    } else r = a.globalData.uid;
    var s = "".concat(t.host, "account/login?from=").concat(t.fromValue, "&c=").concat(t.c, "&checktoken=").concat(a.globalData.checktoken, "&wm=").concat(t.wm, "&guestid=").concat(r, "&phone=").concat(c, "&smscode=").concat(i), d = {
        phone: c,
        smscode: i,
        getcookie: 0,
        guestid: r,
        area: u
    };
    wx.request({
        url: s,
        data: d,
        success: function(t) {
            !function(t) {
                t.data.errno || (wx.setStorage({
                    key: "login_type",
                    data: "WB"
                }), wx.setStorage({
                    key: "uid",
                    data: t.data.uid
                }), wx.setStorage({
                    key: "gsid",
                    data: t.data.gsid
                })), "function" == typeof e && e(t.data);
            }(t);
        },
        fail: function(t) {
            !function(t) {
                console.log("===== sign in fail ====="), n(t);
            }(t);
        },
        complete: function(t) {}
    });
}

function a() {
    var t = getCurrentPages();
    return t.length > 0 && (t[t.length - 1].options || {}).sourceSight || "";
}

function c(e, n, a) {
    var c = getApp(), i = e.account, u = e.pswd, r = o.calculateS(i + u), s = "";
    if (10 == c.globalData.uid.length) try {
        s = wx.getStorageSync("uid");
    } catch (t) {
        s = "";
    } else s = c.globalData.uid;
    var d = o.getSaltedP(u), l = "http://172.16.143.90:10710/2/account/login?uid=".concat(s, "&from=").concat(t.fromValue, "&c=").concat(t.c, "&s=").concat(r, "&checktoken=").concat(c.globalData.checktoken, "&guestid=").concat(s, "&wm=").concat(t.wm, "&u=").concat(i, "&flag=1"), g = {
        u: i,
        p: d,
        c: t.c,
        s: r,
        getCookie: 0,
        checktoken: c.globalData.checktoken
    };
    wx.request({
        method: "POST",
        url: l,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: g,
        success: function(t) {
            !function(t) {
                t.data.errno || (wx.setStorage({
                    key: "login_type",
                    data: "WB"
                }), wx.setStorage({
                    key: "uid",
                    data: t.data.uid
                }), wx.setStorage({
                    key: "gsid",
                    data: t.data.gsid
                })), "function" == typeof n && n(t.data);
            }(t);
        },
        fail: function(t) {
            console.log("===== sign in fail ====="), a();
        },
        complete: function(t) {}
    });
}

module.exports = {
    sendSMS: function(t) {
        return new Promise(function(o, n) {
            e(t.phone, t.area, function(t) {
                t.errno ? n(t) : o(t);
            });
        });
    },
    smsLogin: function(t) {
        return new Promise(function(o, e) {
            n({
                sourceSight: a(),
                phoneNum: t.phone,
                veriCode: t.smscode,
                area: t.area
            }, function(t) {
                t && !t.errno ? o(t) : e(t);
            }, e);
        });
    },
    accountLogin: function(t) {
        return new Promise(function(o, e) {
            c({
                account: t.account,
                pswd: t.pwd,
                sourceSight: a()
            }, function(t) {
                t && !t.errno ? o(t) : e(t);
            }, e);
        });
    }
};