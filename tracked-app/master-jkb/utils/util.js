var e = require("../@babel/runtime/helpers/objectSpread2"), n = require("./elasticAPM.js");

require("./customErrors");

function o(o, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        level: "error",
        disableModalWhenApiError: !1
    }, a = wx.getStorageSync("language"), c = {};
    "English" === a && (c = {
        title: "Reminder",
        content: "There are many people at present. Please try again later.",
        confirmText: "OK",
        showCancel: !1,
        success: function(e) {
            wx.navigateBack({
                delta: 1
            });
        }
    }), c = e(e({}, c), i.showModalOptions);
    var l = r.errcode || "", s = r.errmsg || "", u = t && t.header && t.header["x-transaction-id"] || "", g = n.getSid() || "", d = n.getDid() || "", f = n.getApmUk() || "";
    "".concat(u, "@tid-").concat(g, "@sid-").concat(d, "@did-").concat(f, "@uk-").concat(l, "@errcode-").concat(s, "@errmsg"), 
    c.content = c.content, o && o.disableModalWhenApiError || i && i.disableModalWhenApiError;
}

function t(n, t, r) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        level: "info"
    };
    o(n, t, r, e(e({}, i), {}, {
        disableModalWhenApiError: !0
    }));
}

module.exports = {
    chooseLocation: function() {
        return new Promise(function(e, n) {
            wx.getLocation({
                type: "gcj02",
                success: function(n) {
                    var o = n.latitude, t = n.longitude;
                    wx.chooseLocation({
                        latitude: o,
                        longitude: t,
                        scale: 18,
                        success: e,
                        fail: function(e) {
                            e.errMsg.includes("fail auth deny") && wx.showModal({
                                title: "无法获取定位",
                                content: "请先授权获取当前定位信息",
                                success: function(e) {
                                    e.confirm && wx.openSetting();
                                }
                            });
                        }
                    });
                },
                fail: function(e) {
                    e.errMsg.includes("fail auth deny") && wx.showModal({
                        title: "无法获取定位",
                        content: "请先授权获取当前定位信息",
                        success: function(e) {
                            e.confirm && wx.openSetting();
                        }
                    });
                }
            });
        });
    },
    apm: n,
    throttle: function(e, n) {
        null != n && null != n || (n = 1e3);
        var o = null;
        return function() {
            var t = +new Date();
            (t - o > n || !o) && (e.apply(this, arguments), o = t);
        };
    },
    apiErrorAndNavigateBack: o,
    apiError: function(n, t, r) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        o(n, t, r, e(e({}, i), {}, {
            showModalOptions: e(e({}, i.showModalOptions), {}, {
                success: function(e) {}
            })
        }));
    },
    apiBizInfo: function(n, o, r, i) {
        t(n, o, r, e(e({}, i), {}, {
            level: "info"
        }));
    },
    apiBizWarning: function(n, o, r, i) {
        t(n, o, r, e(e({}, i), {}, {
            level: "warn"
        }));
    },
    apiBizMonitor: t,
    GetAge: function(e) {
        var n = (e + "").length;
        if (0 == n) return 0;
        if (15 != n && 18 != n) return 0;
        var o = "";
        18 == n && (o = e.substr(6, 4) + "/" + e.substr(10, 2) + "/" + e.substr(12, 2)), 
        15 == n && (o = "19" + e.substr(6, 2) + "/" + e.substr(8, 2) + "/" + e.substr(10, 2));
        var t = new Date(o), r = new Date(), i = r.getFullYear() - t.getFullYear();
        return (r.getMonth() < t.getMonth() || r.getMonth() == t.getMonth() && r.getDate() < t.getDate()) && i--, 
        i;
    },
    audioContext: function(e) {
        console.log(e), wx.getSystemInfo({
            success: function(n) {
                var o;
                console.log(n), console.log(n.platform, "手机类型"), o = wx.createInnerAudioContext(), 
                wx.setInnerAudioOption({
                    mixWithOther: !0,
                    obeyMuteSwitch: !1
                }), o.onCanplay(function() {
                    console.log("可以播放");
                }), o.onPlay(function() {
                    console.log("监听到音频开始播放");
                }), o.onEnded(function() {
                    console.log("音频自然播放结束事件");
                }), o.onStop(function() {
                    console.log("音频停止事件");
                }), o.onError(function(e) {
                    console.log(e.errMsg), console.log(e.errCode);
                }), o.onWaiting(function(e) {
                    console.log("音频加载中事件，当音频因为数据不足，需要停下来加载时会触发");
                }), o.src = e, o.play();
            }
        });
    }
};