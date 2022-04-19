/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.wechatUnbind = exports.passChangeNormal = exports.passLoginForWechat = exports.passLogin = exports.miniPlatform = void 0;

var _extends = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];
        for (var t in o) {
            Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
        }
    }
    return e;
}, _apiAjax = require("./apiAjax"), _publicFn = require("./publicFn"), _pass_config = require("../pass_config"), miniPlatform = exports.miniPlatform = function() {
    var e = "wx";
    try {
        var n = qq.getSystemInfoSync();
        e = n.AppPlatform && n.AppPlatform || "wx";
    } catch (o) {}
    return e;
}, wechatLoginFn = function wechatLoginFn(e) {
    var n = function n() {
        wx.login({
            success: function success(n) {
                if (n.code) {
                    var o = n.code;
                    wx.getUserInfo({
                        withCredentials: !0,
                        success: function success(n) {
                            e(o, n);
                        }
                    });
                } else wx.showToast({
                    title: "授权失败！",
                    icon: "none"
                });
            }
        });
    };
    wx.getSetting({
        success: function success(e) {
            e.authSetting["scope.userInfo"] && n();
        }
    });
}, passLogin = exports.passLogin = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.url, o = void 0 === n ? "" : n, t = e.callback, a = void 0 === t ? "" : t, s = e.sms, r = void 0 === s ? "" : s, i = e.extra, c = void 0 === i ? "" : i, p = e.wechatLogin, l = void 0 === p ? "" : p, u = {
        tpl: _pass_config.tpl,
        sms: r,
        adapter: "3",
        client: "specialPhoenix",
        specialPlatform: "wechat",
        u: encodeURIComponent(_pass_config.hostName + o)
    }, m = {
        backUrl: encodeURIComponent(o),
        type: "jump",
        callbackType: a,
        jumpUrl: encodeURIComponent(_pass_config.hostName + "/passport/?login&" + _publicFn.serialize(u))
    }, g = function g() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        m.jumpUrl += encodeURIComponent("&wechatExtra=" + encodeURIComponent(JSON.stringify(e))), 
        wx.navigateTo({
            url: "/pages/pass_normal/normal?" + _publicFn.serialize(m)
        });
    };
    if (1 === +l) {
        var d = function d(e, n) {
            var o = _extends({}, c, {
                appid: _pass_config.APPID,
                supportGuestAccount: _pass_config.isGuideLogin ? 1 : "",
                code: encodeURIComponent(e),
                encryptedData: encodeURIComponent(n.encryptedData),
                iv: encodeURIComponent(n.iv),
                signature: encodeURIComponent(n.signature)
            });
            g(o);
        };
        wechatLoginFn(d);
    } else g(c);
}, passLoginForWechat = exports.passLoginForWechat = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments[1], o = function o(_o, t) {
        var a = {
            backUrl: e ? encodeURIComponent(e) : "",
            code: encodeURIComponent(_o),
            encryptedData: encodeURIComponent(t.encryptedData),
            iv: encodeURIComponent(t.iv),
            signature: encodeURIComponent(t.signature),
            type: "login",
            callbackType: n || "",
            u: encodeURIComponent(_pass_config.hostName + e)
        };
        wx.navigateTo({
            url: "/pages/pass_normal/normal?" + _publicFn.serialize(a)
        });
    };
    wechatLoginFn(o);
}, passChangeNormal = exports.passChangeNormal = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments[1], o = function o(_o2) {
        if (0 === _o2.data.errno) {
            var t = (_o2.encryptInfo || "", {
                backUrl: e ? encodeURIComponent(e) : "",
                theme: n && n.theme || "",
                type: "normal",
                lstr: encodeURIComponent(_o2.data.lstr),
                ltoken: encodeURIComponent(_o2.data.ltoken),
                u: encodeURIComponent(_pass_config.hostName + e),
                callbackType: n && n.callback || "",
                iv: n && n.iv ? encodeURIComponent(n.iv) : "",
                encryptedData: n && n.encryptedData ? encodeURIComponent(n.encryptedData) : "",
                code: n && n.code ? encodeURIComponent(n.code) : ""
            });
            wx.navigateTo({
                url: "/pages/pass_normal/normal?" + _publicFn.serialize(t)
            });
        } else wx.showToast({
            title: _o2.data.errmsg,
            icon: "none"
        });
    }, t = wx.getStorageSync("userInfo");
    t ? _apiAjax.apiAjax("/v3/login/getlogintoken", {
        BDUSS: t.bduss,
        STOKEN: t.stoken,
        u: "https://wappass.baidu.com" + e,
        tpl: _pass_config.tpl
    }, "POST", o, "", "https://passport.baidu.com") : wx.showToast({
        title: "请先登录",
        icon: "none"
    });
}, wechatUnbind = exports.wechatUnbind = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments[1], o = arguments[2], t = function t(n) {
        var t = {
            backUrl: e ? encodeURIComponent(e) : "",
            u: encodeURIComponent(_pass_config.hostName + e),
            type: "unbind"
        }, a = "/pages/pass_normal/normal?" + _publicFn.serialize(t) + "&jumpUrl=";
        if (0 === +n.data.errno) wx.setStorage({
            key: "wechatBindStatus",
            data: "unbind",
            success: function success() {
                wx.reLaunch({
                    url: e
                });
            }
        }); else if (2 === +n.data.errno) wx.navigateTo({
            url: a + encodeURIComponent(n.data.wapBindMobileUrl)
        }); else if (3 === +n.data.errno) wx.navigateTo({
            url: a + encodeURIComponent(n.data.wapFillUsernameUrl)
        }); else if (5 === +n.data.errno) wx.showToast({
            title: "未绑定百度帐号",
            icon: "none"
        }); else if (o) {
            var s = n.data.errno || "", r = n.data.errmsg || "";
            o(+s, r);
        } else wx.showToast({
            title: n.data.errmsg,
            icon: "none"
        });
    }, a = wx.getStorageSync("userInfo"), s = "wx" === miniPlatform() ? 42 : 15;
    a ? _apiAjax.apiAjax("/v3/ucenter/phoenixunbind", {
        BDUSS: a.bduss,
        STOKEN: a.stoken,
        u: _pass_config.hostName + e,
        ostype: s,
        clientfrom: "wap",
        client: "wx" === miniPlatform() ? "wechat" : "qq",
        adapter: 3,
        bdstoken: n,
        tpl: _pass_config.tpl
    }, "POST", t, "", "") : wx.showToast({
        title: "请先登录",
        icon: "none"
    });
};