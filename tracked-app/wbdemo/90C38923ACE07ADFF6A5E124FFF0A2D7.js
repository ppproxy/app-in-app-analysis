var e = require("@babel/runtime/helpers/interopRequireDefault.js")(require("@babel/runtime/regenerator.js")), a = require("@babel/runtime/helpers/asyncToGenerator.js"), t = require("@babel/runtime/helpers/classCallCheck.js"), r = require("@babel/runtime/helpers/createClass.js"), i = require("FDCF6404ACE07ADF9BA90C030A01A2D7.js"), o = (require("81CC8A51ACE07ADFE7AAE2566711A2D7.js"), 
require("A5F26265ACE07ADFC3940A6236C0A2D7.js")), l = new (function() {
    function l(e) {
        t(this, l), this.withBaseURL = e.withBaseURL, this.baseURL = e.baseURL;
    }
    var n;
    return r(l, [ {
        key: "get",
        value: function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return this.request("GET", e, a, t);
        }
    }, {
        key: "post",
        value: function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return this.request("POST", e, a, t);
        }
    }, {
        key: "put",
        value: function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return this.request("PUT", e, a, t);
        }
    }, {
        key: "request",
        value: (n = a(e.default.mark(function a(t, r) {
            var l, n, u, s, g = arguments;
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (l = g.length > 2 && void 0 !== g[2] ? g[2] : {}, n = g.length > 3 ? g[3] : void 0, 
                    u = getApp(), l.api_timeout = 2, 1154 === u.globalData.scene || 1155 === u.globalData.scene) {
                        e.next = 11;
                        break;
                    }
                    if (e.t0 = u.globalData.vid || wx.getStorageSync("vid"), e.t0) {
                        e.next = 10;
                        break;
                    }
                    return e.next = 9, i.userManager.vuidLogin();

                  case 9:
                    e.t0 = e.sent;

                  case 10:
                    l.vid = e.t0;

                  case 11:
                    return l.uid = wx.getStorageSync("uid") || l.vid, n && u.showLoading(), s = this, 
                    u.globalData.api_log = {
                        url: r,
                        params: l
                    }, e.abrupt("return", new Promise(function(e, a) {
                        wx.request({
                            url: s.withBaseURL ? s.baseURL + r : r,
                            data: l,
                            method: t,
                            success: function(t) {
                                t.data && 1 === t.data.error ? (u.globalData.api_log.url = r, u.globalData.api_log.info = "api timeout", 
                                o.track({
                                    page_type: 3e3,
                                    ext: {
                                        name: o.logMap(3e3),
                                        api_log: u.globalData.api_log,
                                        errMsg: t
                                    }
                                }), u.globalData.netWorkError = !0, a(t)) : e(t), n && u.hideLoading();
                            },
                            fail: function(e) {
                                n && u.hideLoading(), u.globalData.api_log.url = r, u.globalData.api_log.info = "api error", 
                                o.track({
                                    page_type: 3001,
                                    ext: {
                                        name: o.logMap(3001),
                                        api_log: u.globalData.api_log,
                                        errMsg: e
                                    }
                                }), u.globalData.netWorkError = !0, a({
                                    msg: "请求失败",
                                    url: s.withBaseURL ? s.baseURL + r : r,
                                    method: t,
                                    data: l
                                });
                            }
                        });
                    }));

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, a, this);
        })), function(e, a) {
            return n.apply(this, arguments);
        })
    } ]), l;
}())({
    baseURL: "https://s.weibo.com/ajax_proxy/",
    withBaseURL: !0
});

module.exports = l;