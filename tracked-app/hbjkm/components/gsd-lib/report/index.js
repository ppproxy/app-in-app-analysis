function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, o = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var r = t[o];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, o, r) {
        return o && e(t.prototype, o), r && e(t, r), t;
    };
}(), r = function() {
    function r(t) {
        e(this, r), this.originPage = Page, this.originApp = App, this.logTimer = null, 
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
        }, this.config = Object.assign(this.config, t || {}), this.reportLogs = [], this._init();
    }
    return o(r, [ {
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
            App = function(o) {
                var r = o.onError || function() {}, n = o.onLaunch || function() {}, i = o.onHide || function() {};
                o.onLaunch = function(e) {
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
                    }), n.apply(this, arguments);
                }, e.config.isError && (o.onError = function(e) {
                    var o = e.split(/\n/) || [], n = void 0, i = void 0, a = void 0, s = e.match(/\(.+?\)/);
                    return s && s.length && (s = s[0]), s = s.replace(/\w.+js/g, function(e) {
                        return n = e, "";
                    }), (s = s.split(":")) && s.length > 1 && (a = parseInt(s[1] || 0)), i = parseInt(s[2] || 0), 
                    t._reportError(JSON.stringify({
                        col: i,
                        line: a,
                        name: n,
                        msg: o[0] + ";" + o[1] + ";" + o[2] + ";",
                        type: "js"
                    })), r.apply(this, arguments);
                }), o.onHide = function() {
                    return t.logTimer && clearInterval(t.logTimer), t._logRequest(!0), i.apply(this, arguments);
                }, t.originApp(o);
            };
        }
    }, {
        key: "_spyPage",
        value: function() {
            var e = this;
            Page = function(t) {
                var o = t.onShow || function() {};
                t.onShow = function() {
                    return e.config.autoReportPV && setTimeout(function() {
                        e.pagePV(e.config.commonPageEId);
                    }, 500), o.apply(this, arguments);
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
                    var o = arguments[0] || {}, r = Date.now(), n = o.complete || function(e) {};
                    return o.complete = function(e) {
                        return -1 === o.url.indexOf(t.config.reportUrl) && t.cgiSpeed({
                            code: e.statusCode,
                            time: Date.now() - r,
                            path: o.url
                        }), n.apply(this, arguments);
                    }, e.apply(this, arguments);
                }
            });
        }
    }, {
        key: "_collectLogs",
        value: function(e) {
            var o = [], r = this.reportLogs;
            Array.isArray(e) ? o = e : o.push(e), o.forEach(function(e) {
                for (var o in e) {
                    var r = e[o];
                    ("" === r || "object" === (void 0 === r ? "undefined" : t(r)) && 0 === Object.keys(r).length) && delete e[o];
                }
            }), r.length > 100 && r.splice(0, o.length), this.reportLogs = r.concat(o);
        }
    }, {
        key: "_statpid",
        value: function(e) {
            if (!e.path) {
                var t = getCurrentPages();
                if (t && t.length) {
                    var o = t[t.length - 1];
                    e.path = o.__route__, e.ext = o.options || {};
                }
            }
            var r = this._getCookiedReportData(e);
            this._collectLogs(r);
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
                var o = t.reportLogs;
                if (0 !== o.length) {
                    var r = o.splice(0, t.config.reportLogsNum);
                    wx.request({
                        url: t.config.reportUrl,
                        header: {
                            "x-tif-sid": wx.getStorageSync("tif-sid"),
                            "x-tif-did": wx.getStorageSync("tif-did")
                        },
                        data: r,
                        method: "POST",
                        complete: function(n) {
                            e && n.data && 0 === Number(n.data.errcode) && o.length > 0 && t._logRequest(!0), 
                            n.data && 0 !== Number(n.data.errcode) && ((r = r.filter(function(e) {
                                return 1 !== e.rate;
                            })).forEach(function(e) {
                                e.rate = 1;
                            }), r && 0 !== r.length && t._collectLogs(r));
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
    } ]), r;
}();

module.exports = r;