var t = require("./crypto-js/crypto-js"), e = "x-apm-uk", r = "x-apm-uk-mingwen", n = "x-apm-uid", c = "x-apm-userinfo", a = {
    key: t.enc.Utf8.parse("1234123412ABCDEF"),
    iv: t.enc.Utf8.parse("ABCDEF1234123412")
}, o = {
    iv: a.iv,
    mode: t.mode.CBC,
    padding: t.pad.Pkcs7
};

function i(t) {
    wx.setStorageSync(c, t);
}

function g(e) {
    if (e) return t.AES.encrypt(e, a.key, o).toString(t.format.Hex);
}

module.exports = {
    initApmUk: function(t) {
        try {
            try {
                i(t);
            } catch (t) {
                console.error(t);
            }
            var c = t && t.realName || t && t.phone || t && t.realIdCard, a = t.userUUID;
            if (c) {
                var o = wx.getStorageSync(r);
                o && o === c || (wx.setStorageSync(r, c), wx.setStorageSync(e, g(c)));
            }
            if (a) {
                var S = wx.getStorageSync(n);
                S && S === a && wx.setStorageSync(n, a);
            }
        } catch (t) {}
    },
    getApmUk: function() {
        try {
            return wx.getStorageSync("x-apm-uk");
        } catch (t) {}
    },
    getApmUid: function() {
        try {
            return wx.getStorageSync("x-apm-uid");
        } catch (t) {}
    },
    getDid: function() {
        try {
            return wx.getStorageSync("wx-did");
        } catch (t) {}
    },
    getSid: function() {
        try {
            return wx.getStorageSync("wx-sid");
        } catch (t) {}
    },
    enc: g,
    getUser: function() {
        return wx.getStorageSync(c);
    },
    setUser: i
};