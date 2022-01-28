var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

require("./../config/index");

Date.prototype.format = function(t) {
    var e = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var o in e) new RegExp("(" + o + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[o] : ("00" + e[o]).substr(("" + e[o]).length)));
    return t;
}, module.exports = {
    chooseLocation: function() {
        return new Promise(function(t, e) {
            wx.getLocation({
                type: "gcj02",
                success: function(e) {
                    var o = e.latitude, n = e.longitude;
                    wx.chooseLocation({
                        latitude: o,
                        longitude: n,
                        scale: 18,
                        success: t,
                        fail: function(t) {
                            t.errMsg.includes("fail auth deny") && wx.showModal({
                                title: "无法获取定位",
                                content: "请先授权获取当前定位信息",
                                success: function(t) {
                                    t.confirm && wx.openSetting();
                                }
                            });
                        }
                    });
                },
                fail: function(t) {
                    t.errMsg.includes("fail auth deny") && wx.showModal({
                        title: "无法获取定位",
                        content: "请先授权获取当前定位信息",
                        success: function(t) {
                            t.confirm && wx.openSetting();
                        }
                    });
                }
            });
        });
    },
    navigateToWebview: function(t) {
        wx.navigateTo({
            url: "/pages/web-view/index?webUrl=" + encodeURIComponent(t)
        });
    },
    isJson: function(e) {
        try {
            if ("object" == t(JSON.parse(e))) return !0;
        } catch (t) {}
        return !1;
    },
    formatTime: function(t) {
        var e = t.getFullYear(), o = t.getMonth() + 1, n = t.getDate(), i = t.getHours(), r = t.getMinutes(), s = t.getSeconds();
        return [ e, o, n ].map(formatNumber).join("/") + " " + [ i, r, s ].map(formatNumber).join(":");
    }
};