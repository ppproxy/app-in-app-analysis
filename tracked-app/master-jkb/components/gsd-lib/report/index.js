var e = require("../../../@babel/runtime/helpers/typeof"), t = require("../../../@babel/runtime/helpers/classCallCheck"), r = require("../../../@babel/runtime/helpers/createClass"), o = function() {
    function o(e) {
        t(this, o), this.originPage = Page, this.originApp = App, this.logTimer = null, 
        this.config = {
            stopReport: !1,
            isNet: !0,
            isSys: !0,
            isError: !1,
            autoReportPV: !1,
            autoReportCgi: !0,
            commonPageEId: "YSS_ALLPAGES_ONSHOW",
            getRemoteParamsUrl: "",
            reportUrl: "",
            intervalTime: 3,
            reportLogsNum: 5
        }, this.reportData = {
            openid: "",
            platform: "",
            report_type: 2,
            path: "",
            type: 1,
            code: -711,
            time: 0,
            apn: "unknow",
            desc: "",
            rate: 100,
            system_info: {},
            create_time: "",
            channel: "",
            source: "",
            expansion1: "",
            expansion2: "",
            expansion3: "",
            appid: "001",
            eid: "001",
            scene: "",
            region: ""
        }, this.config = Object.assign(this.config, e || {}), this.reportLogs = [], this._init();
    }
    return r(o, [ {
        key: "startReport",
        value: function() {
            var e = this;
            e._logRequest(), e.logTimer = setInterval(function() {
                e._logRequest();
            }, 1e3 * e.config.intervalTime);
        }
    }, {
        key: "eventClick",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this._statpid({
                report_type: 2,
                type: 1,
                code: 200,
                rate: 100,
                source: "click",
                eid: e,
                exp1: t.itemId || "",
                exp2: t.itemStatus || "",
                region: t.region || ""
            });
        }
    }, {
        key: "cgiSpeed",
        value: function(e) {
            var t = 1;
            0 !== e.code && (t = 2), this._statpid({
                report_type: 1,
                type: t,
                code: e.code,
                path: e.path,
                time: e.time,
                rate: 100,
                source: "cgi"
            });
        }
    }, {
        key: "pagePV",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this._statpid({
                report_type: 2,
                type: 1,
                code: 200,
                rate: 100,
                source: "page",
                eid: e,
                region: t.region || ""
            });
        }
    }, {
        key: "_init",
        value: function() {
            this.config.stopReport || (this._spyApp(), this._spyPage(), this.config.autoReportCgi && this._spyRequest(), 
            this.config.isNet && this._network(), this.config.isSys && this._system());
        }
    }, {
        key: "_spyApp",
        value: function() {
            var e = this, t = this;
            App = function(r) {
                var o = r.onError || function() {}, i = r.onLaunch || function() {}, n = r.onHide || function() {};
                r.onLaunch = function(e) {
                    return t.reportData.appid = e.referrerInfo && e.referrerInfo.appId || "", t.reportData.scene = e.scene, 
                    t.config.getRemoteParamsUrl && wx.request({
                        url: t.config.getRemoteParamsUrl,
                        data: {}
                    }).then(function(e) {
                        e.open && (t.config = Object.assign(t.config, {
                            intervalTime: e.sec || t.config.intervalTime,
                            reportLogsNum: e.num || t.config.reportLogsNum,
                            stopReport: !!e.stop
                        }));
                    }), i.apply(this, arguments);
                }, e.config.isError && (r.onError = function(e) {
                    var r, i, n, a = e.split(/\n/) || [], s = e.match(/\(.+?\)/);
                    return s && s.length && (s = s[0]), (s = (s = s.replace(/\w.+js/g, function(e) {
                        return r = e, "";
                    })).split(":")) && s.length > 1 && (n = parseInt(s[1] || 0)), i = parseInt(s[2] || 0), 
                    t._reportError(JSON.stringify({
                        col: i,
                        line: n,
                        name: r,
                        msg: "".concat(a[0], ";").concat(a[1], ";").concat(a[2], ";"),
                        type: "js"
                    })), o.apply(this, arguments);
                }), r.onHide = function() {
                    return t.logTimer && clearInterval(t.logTimer), t._logRequest(!0), n.apply(this, arguments);
                }, t.originApp(r);
            };
        }
    }, {
        key: "_spyPage",
        value: function() {
            var e = this;
            Page = function(t) {
                var r = t.onShow || function() {};
                t.onShow = function() {
                    return e.config.autoReportPV && setTimeout(function() {
                        e.pagePV(e.config.commonPageEId);
                    }, 500), r.apply(this, arguments);
                }, e.originPage(t);
            };
        }
    }, {
        key: "_spyRequest",
        value: function() {
            var e = wx.request, t = this;
            Object.defineProperty(wx, "request", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function() {
                    var r = arguments[0] || {}, o = Date.now(), i = r.complete || function(e) {};
                    return r.complete = function(e) {
                        return -1 === r.url.indexOf(t.config.reportUrl) && t.cgiSpeed({
                            code: e.statusCode,
                            time: Date.now() - o,
                            path: r.url
                        }), i.apply(this, arguments);
                    }, e.apply(this, arguments);
                }
            });
        }
    }, {
        key: "_collectLogs",
        value: function(t) {
            var r = [], o = this.reportLogs;
            Array.isArray(t) ? r = t : r.push(t), r.forEach(function(t) {
                for (var r in t) {
                    var o = t[r];
                    ("" === o || "object" === e(o) && 0 === Object.keys(o).length) && delete t[r];
                }
            }), o.length > 100 && o.splice(0, r.length), this.reportLogs = o.concat(r);
        }
    }, {
        key: "_statpid",
        value: function(e) {
            if (!e.path) {
                var t = getCurrentPages();
                if (t && t.length) {
                    var r = t[t.length - 1];
                    e.path = r.__route__, e.ext = r.options || {};
                }
            }
            var o = this._getCookiedReportData(e);
            this._collectLogs(o);
        }
    }, {
        key: "_reportError",
        value: function(e) {
            this._statpid({
                report_type: 2,
                type: 3,
                code: -7001,
                rate: 100,
                source: "click",
                desc: e
            });
        }
    }, {
        key: "_getCookiedReportData",
        value: function(e) {
            return Object.assign({}, this.reportData, {
                openid: wx.getStorageSync("openid") || e.openid,
                type: e.type,
                report_type: e.report_type,
                eid: e.eid || "",
                path: e.path || "",
                desc: e.desc || "",
                time: e.time || 0,
                create_time: +new Date(),
                expansion1: e.exp1 || "",
                expansion2: e.exp2 || "",
                expansion3: e.exp3 || "",
                expath: e.expath || "",
                source: e.source || "",
                region: e.region || wx.getStorageSync("reportRegion") || "",
                ext: e.ext || ""
            });
        }
    }, {
        key: "_logRequest",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this;
            if (!t.config.stopReport) {
                var r = t.reportLogs;
                if (0 !== r.length) {
                    var o = r.splice(0, t.config.reportLogsNum);
                    wx.request({
                        url: t.config.reportUrl,
                        header: {
                            "x-tif-sid": wx.getStorageSync("tif-sid"),
                            "x-tif-did": wx.getStorageSync("tif-did")
                        },
                        data: o,
                        method: "POST",
                        complete: function(i) {
                            e && i.data && 0 === Number(i.data.errcode) && r.length > 0 && t._logRequest(!0), 
                            i.data && 0 !== Number(i.data.errcode) && ((o = o.filter(function(e) {
                                return 1 !== e.rate;
                            })).forEach(function(e) {
                                e.rate = 1;
                            }), o && 0 !== o.length && t._collectLogs(o));
                        }
                    });
                }
            }
        }
    }, {
        key: "_network",
        value: function() {
            var e = this;
            wx.getNetworkType({
                success: function(t) {
                    e.reportData.apn = t.networkType;
                }
            });
        }
    }, {
        key: "_system",
        value: function() {
            var e = this;
            wx.getSystemInfo({
                success: function(t) {
                    e.reportData.system_info = t, e.reportData.platform = t.platform;
                }
            });
        }
    } ]), o;
}();

module.exports = o;