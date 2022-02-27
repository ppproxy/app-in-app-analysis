var t = require("../../../@babel/runtime/helpers/typeof");

module.exports = function(t) {
    function e(a) {
        if (n[a]) return n[a].exports;
        var r = n[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return t[a].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports;
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0);
}([ function(t, e, n) {
    t.exports = n(1);
}, function(t, e, n) {
    e.aplus_universal = n(2);
}, function(e, n, a) {
    var r, s, i, o, p = a(3);
    try {
        r = my;
    } catch (e) {}
    try {
        s = wx;
    } catch (e) {}
    try {
        i = tt;
    } catch (e) {}
    try {
        o = swan;
    } catch (e) {}
    var c = r || s || i || o, u = !1;
    "object" == t(c) && (u = !(!c.request && !c.httpRequest || !c.getSystemInfo));
    var f, l, h = {
        AplusWindmillAlipay: a(4)
    };
    u && (f = p.isTB() ? "AplusWindmill" : "AplusWindmillAlipay");
    try {
        var g = h[f = f || "Common"];
        l = p.createGoldlogInstance(g);
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        console, l = {};
    }
    e.exports = l;
}, function(e, n) {
    function a(t) {
        for (var e = [], n = 0; n < t.length; n++) {
            var a = t[n][0], r = t[n][1];
            e.push(a + "=" + encodeURIComponent(r));
        }
        return e.join("&");
    }
    function r() {
        var t = function() {}, e = {
            getSystemInfo: t,
            setStorageSync: t,
            getStorage: t
        }, n = e;
        try {
            n = dd;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            try {
                n = my;
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                try {
                    n = ks;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    try {
                        n = wx;
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        try {
                            n = tt;
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            try {
                                n = swan;
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                n = e;
                            }
                        }
                    }
                }
            }
        }
        return n;
    }
    n.getAplusUniversalVersion = function() {
        return "4.6.1";
    }, n.paramsToObj = function(t) {
        for (var e = {}, n = (t = "string" == typeof t ? t : "").split("&"), a = 0; a < n.length; a++) {
            var r = n[a], s = r.split("="), i = s[0], o = "";
            if (2 === s.length) o = s[1]; else if (s.length > 2) {
                var p = r.indexOf("=");
                o = r.slice(p + 1);
            }
            i && (e[i] = o);
        }
        return e;
    }, n.objToParams = function(t, e) {
        var n = [];
        for (var a in t) {
            var r = a, s = e ? encodeURIComponent(t[a]) : t[a];
            n.push(r + "=" + s);
        }
        return n.join("&");
    }, n.getParamFromURL = function(t, e) {
        var n = "";
        (e || (e = "spm"), t) && (t.split("?")[1] || "").split("&").forEach(function(t) {
            0 === t.indexOf(e + "=") && (n = t.substr(e.length + 1));
        });
        return n;
    }, n.simplifyURL = function(t) {
        t || (t = "");
        var e = "_wx_tpl=";
        return t.indexOf(e) > -1 && (t = t.substring(t.indexOf(e) + e.length, t.indexOf(".js") + ".js".length)), 
        t.split("?")[0];
    }, n.getLocation = function() {
        var t;
        try {
            t = location || {};
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            t = {};
        }
        return t;
    }, n.getCurrentPage = function() {
        var t = getCurrentPages();
        return t[t.length - 1] || {};
    }, n.getPVLogUrl = function(t) {
        var e = "";
        return e = /^\/\/\w+/.test(t) ? "https:" + t : "https://" + t, /\w+\.gif$/.test(t) || (e += "/vx.gif"), 
        e;
    }, n.getEtagUrl = function(t) {
        return (/^\/\/\w+/.test(t) ? "https:" + t : "https://" + t) + "/eg.js";
    }, n.getGoldlogUrl = function(t) {
        return /^\/\/\w+/.test(t) ? "https:" + t : "https://" + t;
    }, n.makeCacheNum = function() {
        return Math.floor(268435456 * Math.random()).toString(16);
    }, n.makeUrl = function(t) {
        return [ t.preParams ? a(t.preParams) : "", "&aplus&", t.endParams ? a(t.endParams) : "" ].join("");
    }, n.hostValidity = function(t) {
        return /^(\/\/){0,1}(\w+\.){1,}\w+((\/\w+){1,})?$/.test(t);
    }, n.vhostValidity = function(t) {
        return /^(\/\/){0,1}(\w+\.){1,}\w+\/\w+\.gif$/.test(t);
    }, n.getContext = r, n.getAppInfo = function() {
        var t = {};
        return function() {
            if (t.appId) return t;
            try {
                var e = r();
                if (e.getAccountInfoSync && e.canIUse("getAccountInfoSync")) {
                    var n = e.getAccountInfoSync(), a = n.miniProgram || {}, s = n.plugin || {};
                    t.appId = a.appId, t.appVersion = a.version || a.envVersion, t.pluginAppId = s.appId, 
                    t.pluginAppVersion = s.version;
                } else if (e.getAppIdSync && e.canIUse("getAppIdSync")) {
                    var i = e.getAppIdSync() || {};
                    t.appId = i.appId || "";
                }
            } catch (t) {}
            return t;
        };
    }(), n.isTriver = function() {
        try {
            var t = navigator ? navigator.userAgent || navigator.swuserAgent : "";
            return /Triver/g.test(t);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return !1;
        }
    }, n.isTB = function() {
        var t = !1;
        try {
            var e = navigator ? navigator.userAgent || navigator.swuserAgent : "";
            if (t = !!/AliApp/i.test(e), /AliApp\((AP|DingTalk|AMAP|UC|QUARK)/i.test(e) && (t = !1), 
            /AliApp\(KB/i.test(e) && (t = !!/Mist/.test(e)), t) {
                var n = r();
                "function" == typeof n.canIUse && (t = !!n.canIUse("callUserTrack"));
            }
        } catch (t) {}
        return t;
    };
    var s = {
        CLK: {
            name: "click",
            alias: "CLK",
            id: "2101"
        },
        EXP: {
            name: "expose",
            alias: "EXP",
            id: "2201"
        },
        IMPEXP: {
            name: "expose",
            alias: "IMPEXP",
            id: "2202"
        },
        OTHER: {
            name: "other",
            alias: "OTHER",
            id: "19999"
        }
    };
    n.getGmObj = function(t) {
        var e = s[t] || s.OTHER;
        if ("19999" === e.id) try {
            var n = parseInt(t);
            if (n + "" != "NaN" && n > 3e3 && n < 19999) {
                var a = t + "";
                e = {
                    name: a,
                    alias: a,
                    id: a
                };
            }
        } catch (t) {}
        return e;
    }, n.createGoldlogInstance = function(e, n) {
        var a = "object" == t(n) ? n : {};
        return e.default ? e.default.create(a) : e.create(a);
    };
}, function(t, e, n) {
    var a = n(3), r = n(5), s = "__ETAG__CNA__ID__", i = n(6), o = "EMPTY_CNA", p = i.extend({
        aplus_queue: [],
        CNA: "",
        hasSyncCna: !1,
        syncLaunchOptions: !1,
        _syncEtag: function(t) {
            var e = this.method || "request", n = function(e) {
                var n = e && e.data ? e.data.cna : "";
                n ? t(n) : i();
            }, i = function() {
                var n = a.getEtagUrl("log.mmstat.com");
                n ? r.get(n, {
                    dataType: "text",
                    requestMethodName: e
                }, function(e) {
                    var n = "";
                    try {
                        if (!e.failure) {
                            var r = (e ? e.data : "").split(";");
                            if (r.length > 1) n = (n = r[1].split("=")[1] || "").replace(/\"/g, ""), a.getContext().setStorage({
                                key: s,
                                data: {
                                    cna: n
                                }
                            });
                        }
                    } catch (t) {}
                    n || (n = o), t(n);
                }) : t(o);
            }, p = a.getContext();
            p && p.getStorage && p.getStorage({
                key: s,
                success: function(t) {
                    n(t);
                },
                fail: function(t) {
                    n(t);
                }
            });
        },
        _addDetailParam: function(t) {
            return t.itemId ? {
                _p_typ: "pdp",
                _p_item: t.itemId,
                _p_ispdp: "1"
            } : {};
        },
        _addSellerParam: function(t) {
            return t.sellerId ? {
                _p_typ: t.itemId ? "pdp" : "slr",
                _p_slr: t.sellerId,
                _p_isdpp: "1"
            } : {};
        },
        tryAyncEtag: function() {
            var t = this;
            this.hasSyncCna && t.CNA !== o || (this.hasSyncCna = !0, this._syncEtag(function(e) {
                t.CNA = e, e && t.publish("cnaReady", e);
            }));
        },
        getLaunchOptionsSync: function() {
            var t = this;
            if (!t.syncLaunchOptions) {
                t.syncLaunchOptions = !0;
                var e = a.getContext();
                if (e && e.getLaunchOptionsSync) {
                    var n = e.getLaunchOptionsSync(), r = n && n.query || {};
                    if (r.miniappDebugId) {
                        var s = r.miniappDebugId.trim(), i = s.split("_"), o = {
                            aplus_work_no: i.length > 2 ? i[1] : s,
                            aplus_track_debug_id: s,
                            aplus_flag: "aplus_test"
                        };
                        t.setMetaInfo("aplus-exdata", o), t.setMetaInfo("aplus-cpvdata", o);
                    }
                }
            }
        },
        subscribeCna: function() {
            var t = this;
            this.subscribe("cnaReady", function(e) {
                if (e && t.aplus_queue && t.aplus_queue.length > 0) for (;t.aplus_queue.length > 0; ) {
                    t.aplus_queue.pop().call(t, e);
                }
            });
        },
        logQueue: function(t) {
            "function" == typeof t && (this.CNA ? t(this.CNA !== o ? this.CNA : "") : this.aplus_queue.push(t));
        },
        record: function(t, e, n, s) {
            var i = this;
            i.getLaunchOptionsSync(), n = this.getUserInjectGokey({
                logkey: t,
                gmkey: e,
                gokey: n
            });
            var o = i.method || "request", p = function(p) {
                var c = a.getGoldlogUrl(i._meta_info["aplus-rhost-g"]), u = i._getRecordParams(e, n, p);
                if (c && u) {
                    0 !== t.indexOf("/vx") && (t = "/vx" + t), c += /^\//.test(t) ? t : "/" + t;
                    var f = [];
                    for (var l in u) f.push(l + "=" + u[l]);
                    c = c + "?" + f.join("&"), r.get(c, {
                        method: s,
                        requestMethodName: o,
                        data: u,
                        _extInfo: i.getMetaInfo("aplus-request-extinfo")
                    }, function(t) {});
                }
            };
            i.tryAyncEtag(), i.logQueue(function(t) {
                p(t);
            });
        },
        enter: function(t, e) {
            this.getLaunchOptionsSync(), t || (t = {}), e || (e = {});
            var n = this, s = n.method || "request";
            a.getPVLogUrl(n._meta_info["aplus-rhost-v"]) && (n.tryAyncEtag(), n.logQueue(function(i) {
                e.cna = i, n._getEnterParams(t, e, function(t) {
                    var e = a.getPVLogUrl(n._meta_info["aplus-rhost-v"]);
                    e && r.get(e + "?" + a.makeUrl(t), {
                        requestMethodName: s,
                        _extInfo: n.getMetaInfo("aplus-request-extinfo")
                    }, function(t) {});
                });
            }));
        },
        updateNextPageProperties: function(t) {
            t || (t = {}), this._updateNextPageSpm(t);
        }
    });
    t.exports = p;
}, function(e, n, a) {
    var r = a(3), s = "httpRequest", i = "request";
    n.get = function(e, n, a) {
        var o = r.getContext() || {}, p = n.requestMethodName || i, c = o[p];
        "function" != typeof c && p !== i && (c = o[p = i]), "function" != typeof c && p !== s && (console, 
        c = o[p = s]);
        var u, f, l = n && n.dataType ? n.dataType : "base64", h = n && n.timeout ? n.timeout : 3e3, g = n && n._extInfo ? n._extInfo : null, m = n.method || "GET";
        if ("function" == typeof c) {
            var d = {
                url: e,
                method: m,
                dataType: l,
                timeout: h,
                success: function(t) {
                    u || (u = !0, a(t));
                },
                fail: function(t) {
                    console, u || (u = !0, a({
                        failure: !0,
                        data: t
                    }));
                }
            };
            "POST" === m && "object" == t(n.data) && (d.data = n.data, d.url = d.url.split("?")[0]), 
            g && (d._extInfo = g), c(d);
        } else f = '方法"' + p + '"不存在!', console, u || (u = !0, a({
            failure: !0,
            data: f
        }));
        setTimeout(function() {
            u || (u = !0, f = 'aplus日志请求"' + e + '超时", 超时时长' + h + "ms", console, a({
                failure: !0,
                data: f
            }));
        }, h);
    }, n.sendBeacon = function(t, e) {
        for (var n in e) "cna" !== n && (e[n] = encodeURIComponent(e[n]));
        return navigator.sendBeacon(t, JSON.stringify(e)), t;
    };
}, function(e, n, a) {
    function r(t) {
        var e = "";
        try {
            if (!(e = y[t ? t.app || t.appName : ""] || "")) {
                var n = !1;
                try {
                    n = !!dd;
                } catch (t) {}
                var a = !1;
                try {
                    a = !!swan;
                } catch (t) {}
                var r = !1;
                try {
                    r = !!ks;
                } catch (t) {}
                var s = !1;
                try {
                    s = !!tt;
                } catch (t) {}
                var i = !1;
                try {
                    i = !!wx;
                } catch (t) {}
                var o = "";
                try {
                    o = navigator ? navigator.userAgent || navigator.swuserAgent : "";
                } catch (t) {}
                if (!o) try {
                    o = clientInformation ? clientInformation.appVersion : "";
                } catch (t) {}
                n || /AliApp\(DingTalk/i.test(o) ? e = "dd" : a ? e = "swan" : s ? e = "tt" : r ? e = "ks" : i ? e = "wx" : /AliApp\(TB/i.test(o) ? e = "tb" : /AliApp\(AP/i.test(o) && (e = "my");
            }
        } catch (t) {}
        return e;
    }
    function s(t) {
        var e = "";
        return t && (e = {
            iphone: "ios",
            ipad: "ios",
            ios: "ios",
            android: "andr",
            yunos: "yun",
            wp: "wp",
            linux: "linux",
            unix: "unix",
            macos: "mac",
            windows: "win"
        }[t.toLowerCase()] || ""), e;
    }
    function i() {
        return function(t) {
            function e(t) {
                return 1 === t ? "0123456789abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ".substr(Math.floor(60 * Math.random()), 1) : 2 === t ? "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ".substr(Math.floor(60 * Math.random()), 1) : "0";
            }
            for (var n, a = "", r = !1; a.length < t; ) n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(Math.floor(62 * Math.random()), 1), 
            !r && a.length <= 2 && ("g" === n.toLowerCase() || "l" === n.toLowerCase()) && (0 === a.length && "g" === n.toLowerCase() ? Math.random() < .5 && (n = e(1), 
            r = !0) : 1 === a.length && "l" === n.toLowerCase() && "g" === a.charAt(0).toLowerCase() && (n = e(2), 
            r = !0)), a += n;
            return a;
        }(14);
    }
    var o = a(7), p = a(3), c = p.paramsToObj, u = p.objToParams, f = p.getParamFromURL, l = p.simplifyURL, h = p.getAplusUniversalVersion, g = p.getLocation, m = p.getCurrentPage, d = p.getAppInfo().appId, y = {
        alipay: "my",
        TB: "tb",
        Weixin: "wx",
        Dingtalk: "dd",
        Toutiao: "tt",
        SWAN: "swan"
    }, v = o.extend({
        create: function(t) {
            var e = new this();
            for (var n in t) e[n] = t[n];
            try {
                e._meta_info = Object.assign({
                    "aplus-rhost-v": "log.mmstat.com",
                    "aplus-rhost-g": "wgo.mmstat.com",
                    "aplus-channel": "GET"
                }, e._meta_info || {});
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                e._meta_info = {}, console;
            }
            return e.subscribeCna(), e;
        },
        subscribeCna: function() {},
        setPageSPM: function(t, e, n) {
            if (t && e) {
                var a = [];
                a.push(t), a.push(e), this.spmAB = a, this.pageName = "", this.pageId = "", this.pvid = i();
            }
            "function" == typeof n && n();
        },
        _updateNextPageSpm: function(t) {
            t && (this.spmPre = this.spmUrl, this.spmUrl = t["spm-url"] || t.spmUrl);
        },
        getPageSPM: function() {
            return this.spmAB;
        },
        getPageSPMStr: function() {
            return this.spmAB.join(".");
        },
        _getPageSpmInfo: function(e, n) {
            this.pvid || (this.pvid = i()), "enter" === e.from && (this.pageId = e.pageId ? "/" + e.pageId : "");
            var a = this.getPageSPMStr();
            if (!a || "0.0" === a) try {
                if (console && console.warn) "object" == t(n) && JSON.stringify(n);
            } catch (e) {}
            return a + "" + (this.pageId || "") + ".0.0." + this.pvid;
        },
        _getRecordParams: function(e, n, a) {
            var r = g(), s = m(), i = this.getMetaInfo("aplus-exdata");
            if (i) if ("string" == typeof n) {
                var o = [];
                for (var l in i) o.push(l + "=" + i[l]);
                if (o.length > 0) n += (n ? "&" : "") + o.join("&");
            } else "object" == t(n) && (n = Object.assign({}, i, n));
            var y = "string" == typeof n ? c(n) : n;
            "object" == t(y) && y || (y = {}, console);
            var v = y.url || r.currentpagename || r.href || "https://" + d + "_" + s.route || "";
            this.spmUrl || (this.spmUrl = f(v, "spm") || ""), this.spmPre || (this.spmPre = f(y.referrer, "spm") || "");
            var _ = p.getGmObj(e);
            return (y = Object.assign({}, y, {
                pc_i: y.pc_i || "",
                ps_i: y.ps_i || "",
                pu_i: y.pu_i || "",
                _p_url: v,
                _p_ref: y.pre || "",
                "spm-url": this.spmUrl,
                "spm-pre": this.spmPre,
                jsver: "aplus_universal",
                lver: h(),
                windmill: "1",
                cache: p.makeCacheNum(),
                mini_app_id: d
            }))._g_encode || (y._g_encode = "utf-8"), y["spm-cnt"] = this._getPageSpmInfo({
                from: "record"
            }, y), {
                logtype: "2",
                cna: a,
                gokey: encodeURIComponent(u(y, !0)),
                gmkey: _.alias
            };
        },
        _addDetailParam: function(t) {
            return t.itemId ? {
                _p_typ: "pdp",
                _p_item: t.itemId,
                _p_ispdp: "1"
            } : {};
        },
        _initPageSpmParams: function(t, e) {
            var n = t.spmUrl || t["spm-url"] || f(t.pageUrl, "spm") || this.spmUrl || "", a = t.spmPre || t["spm-pre"] || f(t.referrer, "spm") || this.spmPre || "", r = g(), s = t.pageName || r.currentpagename || l(t.pageUrl) || "", i = m(), o = t.pageUrl || "https://" + d + "_" + i.route || "";
            this.spmUrl = n, this.spmPre = a, this.pageName = s, this.pageUrl = o;
            var p = {
                pageName: s,
                pageUrl: o,
                spmUrl: n,
                spmPre: a
            };
            return p.spmCnt = this._getPageSpmInfo({
                from: "enter",
                pageId: t.pageId
            }, p), p;
        },
        _addSellerParam: function(t) {
            return t.sellerId ? {
                _p_typ: t.itemId ? "pdp" : "slr",
                _p_slr: t.sellerId,
                _p_isdpp: "1"
            } : {};
        },
        _appendParamsIntoArray: function(t, e) {
            return t && e && Object.keys(e).forEach(function(n) {
                t.push([ n, e[n] ]);
            }), t;
        },
        _appendUserParams: function(t, e) {
            return Object.keys(e).forEach(function(n) {
                t.push([ n, e[n] ]);
            }), t;
        },
        _getSystemInfo: function(t) {
            var e = this, n = {}, a = e.SYSTEM_INFO || {};
            if (a && a.version) t(e.SYSTEM_INFO); else try {
                p.getContext().getSystemInfo({
                    complete: function(a) {
                        a && a.version ? (e.SYSTEM_INFO = a, t(a)) : t(n);
                    }
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                t(n);
            }
        },
        _getEnterParams: function(e, n, a) {
            e || (e = {}), n || (n = {});
            var i = this._initPageSpmParams(e, n), o = [ [ "logtype", "1" ], [ "title", encodeURIComponent(i.pageName) ], [ "cna", n.cna || "" ] ], c = this;
            c._getSystemInfo(function(u) {
                var f = [ [ "_p_url", i.pageUrl ], [ "_p_ref", e.referrer || "" ], [ "_p_os", s(u.platform) || "" ], [ "_p_scr", u.screenWidth + "x" + u.screenHeight ], [ "_p_pf", r(u) ], [ "spm-cnt", i.spmCnt ], [ "spm-url", i.spmUrl ], [ "spm-pre", i.spmPre ], [ "mini_app_id", d ] ];
                f["spm-url"] && (c.spmUrl = f["spm-url"]), f["spm-pre"] && (c.spmPre = f["spm-pre"]);
                var l = c.getMetaInfo("aplus-cpvdata");
                if (l && "object" == t(l) && (f = c._appendParamsIntoArray(f, l)), f = c._appendParamsIntoArray(f, c._addDetailParam(n)), 
                f = c._appendParamsIntoArray(f, c._addSellerParam(n)), f = c._appendUserParams(f, n), 
                f = c._appendParamsIntoArray(f, {
                    jsver: "aplus_universal",
                    lver: h(),
                    windmill: "1",
                    cache: p.makeCacheNum()
                }), "function" == typeof a) {
                    var g = {
                        pageName: i.pageName,
                        preParams: o,
                        endParams: f
                    };
                    a(g);
                }
            });
        }
    });
    e.exports = v;
}, function(e, n, a) {
    function r(t) {
        return "function" == typeof t;
    }
    function s(t) {
        if (!r(t)) throw new TypeError(t + " is not a function");
        return t;
    }
    var i = a(3), o = a(8), p = function() {}, c = function(t) {
        for (var e = t.length, n = new Array(e - 1), a = 1; a < e; a++) n[a - 1] = t[a];
        return n;
    }, u = o.extend({
        spmAB: [ "0", "0" ],
        spmUrl: "",
        spmPre: "",
        pageName: "",
        isPageDisAppear: !0,
        isPageAppear: !1,
        _meta_info: {},
        record: p,
        setPageSPM: p,
        getPageSPM: p,
        enter: p,
        setHandlers: function(t) {
            this.handlers = t;
        },
        subscribe: function(t, e) {
            s(e);
            var n = this, a = (n.pubs || {})[t] || [];
            if (a) for (var r = 0; r < a.length; r++) {
                var i = a[r]();
                e.apply(n, i);
            }
            var o = n.handlers || [];
            return t in o || (o[t] = []), o[t].push(e), n.setHandlers(o), n;
        },
        subscribeOnce: function(t, e) {
            s(e);
            var n, a = this;
            return this.subscribe.call(this, t, n = function() {
                a.unsubscribe.call(a, t, n);
                var r = Array.prototype.slice.call(arguments);
                e.apply(a, r);
            }), this;
        },
        unsubscribe: function(e, n) {
            s(n);
            var a = this.handlers[e];
            if (!a) return this;
            if ("object" == t(a) && a.length > 0) {
                for (var r = 0; r < a.length; r++) {
                    n.toString() === a[r].toString() && a.splice(r, 1);
                }
                this.handlers[e] = a;
            } else delete this.handlers[e];
            return this;
        },
        publish: function(t) {
            var e = c(arguments), n = this.handlers || [], a = n[t] ? n[t].length : 0;
            if (a > 0) for (var s = 0; s < a; s++) {
                var i = n[t][s];
                r(i) && i.apply(this, e);
            }
            return this;
        },
        cachePubs: function(t) {
            var e = this.pubs || {}, n = c(arguments);
            e[t] || (e[t] = []), e[t].push(function() {
                return n;
            });
        },
        updatePageProperties: function(e) {
            "object" == t(e) && this.setMetaInfo("aplus-cpvdata", e);
        },
        updateNextPageProperties: p,
        updatePageUtparam: p,
        updateNextPageUtparam: p,
        skipPage: p,
        pageAppear: p,
        pageDisappear: p,
        setExposureView: p,
        updateSessionProperties: p,
        getPageSpmUrl: p,
        getPageSpmPre: p,
        getUserInjectGokey: function(t) {
            var e = this.getMetaInfo("aplus-inject-record-gokey");
            return "function" == typeof e ? e(t) : t.gokey;
        },
        setMetaInfo: function(e, n) {
            switch (e) {
              case "aplus-rhost-v":
              case "aplus-rhost-g":
                var a = i.hostValidity(n);
                a || "aplus-rhost-v" !== e || (a = i.vhostValidity(n)), a ? this._meta_info[e] = n : this.catchException("sorry, metaValue of " + n + " is not legality!");
                break;

              case "aplus-exdata":
              case "aplus-cpvdata":
              case "aplus-request-extinfo":
                "object" == t(n) ? this._meta_info[e] = n : this.catchException("sorry, type of " + n + "  must be object!");
                break;

              case "aplus-channel":
                this._meta_info[e] = n;
                break;

              case "aplus-inject-record-gokey":
                "function" == typeof n ? this._meta_info[e] = n : this.catchException("sorry, type of " + n + "  must be function!");
                break;

              default:
                this.catchException("sorry, aplus do not support the metaKey of " + e);
            }
        },
        appendMetaInfo: function(e, n) {
            switch (e) {
              case "aplus-exdata":
              case "aplus-cpvdata":
                if ("object" == t(n)) {
                    var a = this._meta_info[e];
                    this._meta_info[e] = Object.assign(a, n);
                } else this.catchException("sorry, type of " + n + "  must be object!");
                break;

              default:
                this.setMetaInfo(e, n);
            }
        },
        getMetaInfo: function(t, e) {
            var n = this._meta_info[t];
            return "function" != typeof e ? n : void e(n);
        },
        catchException: function(t) {
            try {
                console && console.error(t);
            } catch (t) {}
        }
    });
    e.exports = u;
}, function(t, e) {
    function n() {}
    n.prototype.extend = function() {}, n.prototype.create = function() {}, n.extend = function(t) {
        return this.prototype.extend.call(this, t);
    }, n.prototype.create = function(t) {
        var e = new this();
        for (var n in t) e[n] = t[n];
        return e;
    }, n.prototype.extend = function(t) {
        var e = function() {};
        try {
            for (var n in "function" != typeof Object.create && (Object.create = function(t) {
                function e() {}
                return e.prototype = t, new e();
            }), e.prototype = Object.create(this.prototype), t) e.prototype[n] = t[n];
            e.prototype.constructor = e, e.extend = e.prototype.extend, e.create = e.prototype.create;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            e = function() {};
        }
        return e;
    }, t.exports = n;
} ]);