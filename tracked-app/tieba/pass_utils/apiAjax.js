/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.apiAjax = void 0;

var _pass_config = require("../pass_config"), wxRequestApi = function wxRequestApi(e, t, n, a, s, o) {
    wx.request({
        url: (o ? o : _pass_config.hostName) + e,
        data: t,
        method: n ? n : "GET",
        dataType: "json",
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function success(e) {
            a(e, s);
        },
        fail: function fail() {
            wx.showToast({
                title: "网络连接失败，请检查您的网络设置并稍后再试。",
                icon: "none"
            });
        },
        complete: function complete() {}
    });
}, apiAjax = exports.apiAjax = function(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "POST", a = arguments[3], s = arguments[4], o = arguments[5];
    wxRequestApi(e, t, n, a, s, o);
};