var e = require("../@babel/runtime/helpers/objectSpread2"), r = require("./wx-promise"), t = require("../config/index"), o = t.domain, n = (t.appid, 
t.env, t.timestampDomains), a = (require("./session").getSessionId, require("./genDid.js")), i = require("./sha256.js"), s = require("../utils/realtimeLog"), c = require("./util.js").apm, u = (i.sha256_digest, 
require("../utils/util")), d = (u.apiErrorAndNavigateBack, u.apiError), g = u.apiBizInfo, x = require("../utils/customErrors");

function m(t) {
    var o, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, u = "jxjxcxzcfu", w = "LPDyeNiS18TToJQqSwtULTdGq1ZftoYY";
    o = wx.getStorageSync("reqTimestamp") && wx.getStorageSync("reqTimestamp") ? parseInt((new Date().getTime() + wx.getStorageSync("reqTimestamp")) / 1e3, 10) : parseInt(new Date().getTime() / 1e3, 10);
    var f, S, h, v = a(), y = i.sha256_digest, I = y("".concat(o).concat(w).concat(v).concat(o)).toUpperCase();
    if (0 === n) return Promise.reject(null);
    try {
        var j = wx && wx.getSystemInfoSync && wx.getSystemInfoSync();
        console.log(j), j && j.brand && (S = j.brand + "&" + j.model + "&" + j.version + "&" + j.SDKVersion + "&" + j.system);
    } catch (e) {}
    try {
        var q = wx && wx.getAccountInfoSync && wx.getAccountInfoSync();
        q && q.miniProgram ? (f = wx.getAccountInfoSync().miniProgram.version.length > 1 ? wx.getAccountInfoSync().miniProgram.version : "3.1.6", 
        console.log("获取线上小程序版本号", f)) : (f = "3.1.6", console.log("版本号获取失败", f));
    } catch (e) {
        f = "3.1.6", console.log("版本号获取失败", f);
    }
    var T, _ = wx.getStorageSync("wx-sessionid"), b = wx.getStorageSync("wx-did");
    return new Promise(function(a, i) {
        T = e(e({}, t), {}, {
            url: p(t.url),
            header: e(e({}, t.header), {}, {
                did: b,
                sid: _,
                envVersion: f,
                "phone-info": S,
                "Content-Type": "application/json",
                "x-tif-nonce": v,
                "x-tif-paasid": u,
                "x-tif-signature": I,
                "x-tif-timestamp": o,
                "x-apm-uk": c.getApmUk(),
                "x-apm-uid": c.getApmUid()
            }),
            timeout: t.timeout || 15e3
        }), h = T.url;
        var w = new Date().getTime();
        return console.log("接口请求", T), r.request(T).then(function(r) {
            wx.canIUse("reportPerformance") && wx.reportPerformance(1001, Number(new Date().getTime() - w), t.url), 
            "/auth-server/auth/user/session" === t.url ? wx.reportMonitor("3", 1) : "/jingxinju/jkb/businessTravel/getHealthCode" === t.url ? wx.reportMonitor("4", 1) : "/jingxinju/jkb/businessTravel/getBaseData" === t.url && wx.reportMonitor("5", 1), 
            console.log("接口返回", e({
                url: h
            }, r));
            var o = r.statusCode, c = r.data, u = c.errcode, p = getApp().userStore;
            if ("BIF:10401" == u && (p.userInfo.isAuth = !1, wx.removeStorageSync("wx-logout"), 
            wx.removeStorageSync("wx-sessionid"), wx.removeStorageSync("dfRenci_qrCodeData")), 
            200 !== o) return d(T, r, x.common.apiServer.statusCode.not_support_status_code_prefix_err_gen(r)), 
            i(r);
            if ("BIS:10200" === u && 200 === o || (s.warn({
                statusCode: o,
                errcode: u,
                req: T,
                data: c
            }), wx.reportMonitor("6", 1)), "BIS:10500" === u) return d(T, r, x.common.apiServer.apiBodyErrcode.code_10500_prefix_err_gen(r.data)), 
            i(r);
            if (0 === u.indexOf("AGW")) return "AGW.1433" == u ? (wx.reportMonitor("7", 1), 
            l(), m(t, n - 1).then(a)) : (wx.reportMonitor("7", 1), d(T, r, x.common.apiServer.gatewayErrcode.gateway_errcode_gen(r.data)), 
            i(r));
            if ("BIF:10403" === u) return wx.removeStorageSync("wx-logout"), void wx.showModal({
                title: "提示",
                content: "本次操作需要您进行登录验证",
                success: function(e) {
                    console.log(e), e.confirm ? wx.redirectTo({
                        url: "/pages/gsd-ui/g-auth/face/face?dd=1"
                    }) : wx.navigateBack({
                        delta: 5
                    });
                }
            });
            if ("BIF:10401" === u && "/auth-server/auth/user/session" !== t.url && "/auth-server/auth/isAuthPhone" !== t.url) return wx.removeStorage("user-session"), 
            wx.hideLoading(), void wx.showModal({
                title: "提示",
                content: "本次操作需要您进行登录验证",
                success: function(e) {
                    e.confirm ? (console.log(e), wx.redirectTo({
                        url: "/pages/gsd-ui/g-auth/face/face"
                    })) : wx.navigateBack({
                        delta: 5
                    });
                }
            });
            if ("/auth-server/auth/user/session" == t.url && "BIS:10200" === u && wx.setStorageSync("user-session", r.data.data), 
            "BIS:10200" === u) {
                try {
                    -1 !== t.url.indexOf("/jingxinju/jkb/businessTravel/getHealthCode") && c.data && "0" !== c.data.code && g(T, r, x.shixiang.businessTravelGetHealthCode.ApiReturnNotLvSeGen(c.data));
                } catch (e) {}
                return a(c.data);
            }
            return -1 === [ "BIF:10401", "BIF:10403" ].indexOf(u) && d(T, r, x.common.apiServer.apiBodyErrcode.not_support_api_body_errcode_gen(r.data)), 
            i(r.data);
        }).catch(function(e) {
            return wx.reportMonitor("8", 1), wx.canIUse("reportPerformance") && wx.reportPerformance(1001, Number(new Date().getTime() - w), t.url), 
            console.log(e), d(T, e, x.common.client.UncaughtExpGen(e)), s.error({
                req: T,
                err: e
            }), i(e);
        });
    });
}

function l(e) {
    return m({
        url: n + "/jxjxcxzcfu/jxjxcxzcfu/auth-server/system/timestamp/",
        method: "get",
        disableModalWhenApiError: !0
    }).then(function(e) {
        var r = new Date().getTime();
        wx.setStorageSync("reqTimestamp", e - r), console.log(1424);
    }).catch(function(e) {
        return resolve(!1);
    });
}

function p(e) {
    return 0 === e.indexOf("http") ? e : "".concat(o).concat(e);
}

module.exports = {
    request: m
};