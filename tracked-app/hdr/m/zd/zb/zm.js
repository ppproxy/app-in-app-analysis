var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "AEM", {
    enumerable: !0,
    get: function() {
        return t.default;
    }
}), exports.PerfType = exports.Constant = exports.CommitType = exports.CommitChannelEnum = exports.ALog = void 0, 
Object.defineProperty(exports, "aplus", {
    enumerable: !0,
    get: function() {
        return o.aplus_universal;
    }
}), exports.createTracert = function(e) {
    e && void 0 !== e.needLog && (r.isDebug = e.needLog);
    var t;
    t = e && e.app ? e.app : function() {
        var e = getApp();
        if (e && e[h]) {
            var t = e[h].systemInfo;
            return t || ((t = v().getSystemInfo() || {}) && (e[h].systemInfo = t), t);
        }
        e && !e[h] && (e[h] = {});
        return v().getSystemInfo() || {};
    }().app || p.OTHER_PLATFORM;
    t === p.OTHER_PLATFORM && r.info("init error! app = 'other'!");
    var o = new $(d(d({}, e), {
        app: t
    }));
    try {
        var n = getApp();
        n && (n[c.Tracker] = n[c.Tracker] || o);
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        r.error("global tracert init error! error msg is :", e);
    }
    return o;
}, exports.hookAppOnHide = function() {
    try {
        B = Date.now();
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        r.error("appOnHide() error! " + e);
    }
}, exports.hookAppOnShow = function(e, t) {
    var o, n = (void 0 === t ? {} : t).instance;
    try {
        var i = n || (null === (o = null == e ? void 0 : e.$getLogger) || void 0 === o ? void 0 : o.call(e)) || getApp()[c.Tracker];
        if (i) {
            var a = Date.now(), s = (i.getInitInfo() || {}).autoSession;
            (void 0 === s || s) && B > 0 && a - B > 18e5 && (i.setBaseInfo({
                sessionid: I()
            }), B = -1);
        }
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        r.error("appOnShow() error! " + e);
    }
}, exports.hookPageOnHide = function(e, t) {
    var o, n = (void 0 === t ? {} : t).instance;
    try {
        var i = n || (null === (o = null == e ? void 0 : e.$getLogger) || void 0 === o ? void 0 : o.call(e)) || getApp()[c.Tracker];
        if (i) {
            if (!e.spmInfo) return;
            e.spmInfo.viewId = y(e), i.onHide(e.spmInfo);
        }
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        r.error("pageOnHide() error! " + e);
    }
}, exports.hookPageOnLoad = function(e, t) {
    var o;
    void 0 === t && (t = {});
    var n = t.instance, i = function(e, t) {
        var o = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (o[n[r]] = e[n[r]]);
        }
        return o;
    }(t, [ "instance" ]);
    try {
        var a = getApp() || {}, s = n || (null === (o = null == e ? void 0 : e.$getLogger) || void 0 === o ? void 0 : o.call(e)) || a[c.Tracker];
        if (s) {
            if (!e.spmInfo) return;
            e.spmInfo.viewId = y(e), e.spmInfo.startParams = i || {}, s.onLoad(e.spmInfo);
        }
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        r.error("pageonLoad() error! " + e);
    }
}, exports.hookPageOnShow = function(e, t) {
    var o, n = (void 0 === t ? {} : t).instance;
    try {
        e.spmInfo || (e.spmInfo = {});
        var i = n || (null === (o = null == e ? void 0 : e.$getLogger) || void 0 === o ? void 0 : o.call(e)) || getApp()[c.Tracker];
        if (i) {
            if (e.spmInfo.viewId = y(e), !1 === e.spmInfo.autoPv) return void r.log("pageOnShow this.spmInfo.autoPv is false");
            i.onShow(e.spmInfo);
        }
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        r.error("pageOnShow() error! " + e);
    }
};

var t = e(require("./z1")), o = require("./zg"), n = e(require("./zi")), r = function() {
    function e() {}
    return e.setDebug = function(e) {
        this.isDebug = e;
    }, e.error = function(e, t, o) {
        if (void 0 === o && (o = !0), this.isDebug) try {
            t ? console.error(this.TAG + e, o ? JSON.stringify(t) : t) : console.error(this.TAG + e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.error(this.TAG, e);
        }
    }, e.info = function(e, t, o) {
        if (void 0 === o && (o = !0), this.isDebug) try {
            t ? console.info(this.TAG + e, o ? JSON.stringify(t) : t) : console.info(this.TAG + e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.error(this.TAG, e);
        }
    }, e.log = function(e, t, o) {
        if (void 0 === o && (o = !0), this.isDebug) try {
            t ? console.log(this.TAG + e, o ? JSON.stringify(t) : t) : console.log(this.TAG + e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.error(this.TAG, e);
        }
    }, e.warn = function(e, t, o) {
        if (void 0 === o && (o = !0), this.isDebug) try {
            t ? console.warn(this.TAG + e, o ? JSON.stringify(t) : t) : console.warn(this.TAG + e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.error(this.TAG, e);
        }
    }, e.isDebug = !0, e.TAG = "[SaaS Log] ", e;
}();

exports.ALog = r;

var i, a, s, p = function() {
    function e() {}
    return e.ALIPAY_PLATFORM = "alipay", e.OTHER_PLATFORM = "other", e.WX_PLATFORM = "wx", 
    e.baseConfig = {
        os: "os",
        city: "city",
        title: "title",
        page_id: "page_id",
        env: "env",
        pu_i: "uid",
        uid: "uid",
        ps_i: "sid",
        pc_i: "device_id",
        pv_id: "pv_id",
        sdk_version: "sdk_version",
        app_version: "app_version",
        device_brand: "device_brand",
        device_model: "device_model",
        origin_url: "origin_url",
        user_type: "user_type",
        pid: "pid",
        net_type: "net_type",
        sr: "sr",
        cpu: "cpu",
        memory: "memory",
        spm_a: "spm_a",
        spm_b: "spm_b"
    }, e.pvConfig = {
        dim1: "dim1",
        dim2: "dim2",
        dim3: "dim3",
        dim4: "dim4",
        dim5: "dim5",
        dim6: "dim6",
        dim7: "dim7",
        dim8: "dim8",
        dim9: "dim9",
        dim10: "dim10"
    }, e.systemKeys = [ "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "p19", "p20" ], 
    e.eventKeys = [ "c1", "c2", "c3", "c4", "c5", "c6" ], e;
}();

exports.Constant = p, exports.CommitChannelEnum = i, function(e) {
    e.AEM = "AEM", e.APLUS = "APLUS";
}(i || (exports.CommitChannelEnum = i = {})), exports.CommitType = a, function(e) {
    e.pv = "pv", e.leave = "leave", e.record = "record", e.updateNextPageProperties = "updateNextPageProperties", 
    e.error = "error", e.api = "api", e.perf = "perf", e.monitor = "monitor", e.log = "log", 
    e.getConfig = "getConfig", e.setConfig = "setConfig";
}(a || (exports.CommitType = a = {})), exports.PerfType = s, function(e) {
    e.navigation = "navigation", e.mark = "mark", e.measure = "measure", e.upload = "upload";
}(s || (exports.PerfType = s = {}));

var f = function(e, t) {
    return (f = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
    })(e, t);
};

function u(e, t) {
    function o() {
        this.constructor = e;
    }
    f(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, 
    new o());
}

var c, g, m, l, d = function() {
    return (d = Object.assign || function(e) {
        for (var t, o = 1, n = arguments.length; o < n; o++) for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e;
    }).apply(this, arguments);
};

!function(e) {
    e.Tracker = "$tracker", e.OnLaunch = "onLaunch", e.OnShow = "onShow", e.OnHide = "oHide", 
    e.OnError = "onError", e.OnUnhandledRejection = "onUnhandledRejection";
}(c || (c = {})), function(e) {
    e.Tracker = "$tracker", e.OnShow = "onShow", e.OnHide = "oHide", e.OnLoad = "onLoad", 
    e.OnUnload = "oUnload", e.LogCustomError = "logCustomError", e.UseLogExp = "useLogExp", 
    e.UseLogClk = "useLogClk", e.UseLogClkAndExp = "useLogClkAndExp", e.UseLogOther = "useLogOther";
}(g || (g = {})), function(e) {
    e.Tracker = "$tracker", e.OnInit = "onInit", e.LogCustomError = "logCustomError", 
    e.UseLogExp = "useLogExp", e.UseLogClk = "useLogClk", e.UseLogClkAndExp = "useLogClkAndExp", 
    e.UseLogOther = "useLogOther";
}(m || (m = {})), function(e) {
    e.c1 = "c1", e.c2 = "c2", e.c3 = "c3", e.c4 = "c4", e.c5 = "c5", e.c6 = "c6";
}(l || (l = {}));

var h = Symbol.for("$context");

function v() {
    var e = function() {}, t = {
        getSystemInfo: e,
        setStorageSync: e,
        getStorage: e
    };
    return "undefined" != typeof wx ? t = wx : "undefined" != typeof my ? t = my : "undefined" != typeof dd && (t = dd), 
    t;
}

var P, I = function() {
    var e = "0123456789ABCDEF".length;
    return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g, function() {
        return "0123456789ABCDEF".charAt(Math.floor(Math.random() * e));
    });
}, y = function(e) {
    var t = e.$originpage || e;
    return t.$viewId || t.__wxWebviewId__ || "";
};

var b = ((P = {})[a.pv] = [ i.APLUS, i.AEM ], P[a.leave] = [ i.AEM ], P[a.record] = [ i.APLUS ], 
P[a.perf] = [ i.AEM ], P[a.api] = [ i.AEM ], P[a.error] = [ i.AEM ], P[a.updateNextPageProperties] = [ i.APLUS ], 
P[a.monitor] = [ i.AEM ], P[a.log] = [ i.AEM ], P), x = function() {
    function e(e) {
        this.initInfo = {
            debug: !1,
            needLog: !0,
            autoSession: !0,
            commitChannel: b,
            sampleRate: 1,
            errorSampleRate: 1,
            apiSampleRate: 1,
            perfSampleRate: 1
        }, this.spmId = "", this.genericData = {}, this.baseInfo = {}, this.spmInfo = e, 
        this.setInitInfo(e);
    }
    return e.prototype.onLoad = function(e) {
        this.updateSpmPageInfo(e);
    }, e.prototype.onShow = function(e) {
        this.updateSpmPageInfo(e);
    }, e.prototype.getInitInfo = function() {
        return this.initInfo;
    }, e.prototype.setInitInfo = function(e) {
        this.initInfo = d(d(d({}, this.initInfo), e), {
            commitChannel: d(d({}, this.initInfo.commitChannel), e.commitChannel)
        }), void 0 !== e.needLog && (r.isDebug = e.needLog);
    }, e.prototype.updateSpmPageInfo = function(e) {
        this.spmInfo = e, this.genericData = d({}, e.genericData);
        var t = e.spmAPos, o = e.spmBPos;
        this.spmId = t + "." + o;
    }, e.prototype.setSpmPos = function(e, t) {
        this.spmInfo.spmAPos = e, this.spmInfo.spmBPos = t;
    }, e.prototype.setBaseInfo = function(e) {
        this.baseInfo = d(d({}, this.baseInfo), e);
    }, e.prototype.createBaseInfoParams = function() {
        if (this.baseInfo) return {
            env: this.baseInfo.env || "",
            pc_i: this.baseInfo.device_id || "",
            pu_i: this.baseInfo.pu_i || this.baseInfo.uid || "",
            ps_i: this.baseInfo.sessionid || this.baseInfo.sid || "",
            aplus_app: this.spmInfo.app || this.initInfo.app || "",
            app_version: this.baseInfo.app_version || "",
            sdk_version: this.baseInfo.sdk_version || "",
            os: this.baseInfo.os || "",
            cpu: this.baseInfo.cpu || "",
            memory: this.baseInfo.memory || "",
            device_brand: this.baseInfo.device_brand || "",
            device_model: this.baseInfo.device_model || "",
            aplus_pixelRatio: this.baseInfo.aplus_pixelRatio || "",
            aplus_platform: this.baseInfo.aplus_platform || "",
            aplus_language: this.baseInfo.aplus_language || "",
            aplus_locationEnabled: this.baseInfo.aplus_locationEnabled || "",
            aplus_locationAuthorized: this.baseInfo.aplus_locationAuthorized || ""
        };
    }, e.prototype.setLogObserver = function(e) {
        this.logObserver = e;
    }, e.prototype.onLogAppend = function(e) {
        this.logObserver && this.logObserver(e);
    }, e.prototype.logPerf = function(e, t, o, n) {}, e.prototype.logError = function(e, t, o) {}, 
    e.prototype.logApi = function(e, t, o) {}, e.prototype.expo = function(e, t, o) {}, 
    e.prototype.click = function(e, t, o) {}, e.prototype.other = function(e, t, o) {}, 
    e.prototype.setGenericParams = function(e, t) {}, e;
}(), _ = function() {
    function e() {}
    return e.prototype.pv = function(e, t) {}, e.prototype.leave = function(e, t) {}, 
    e.prototype.record = function(e, t) {}, e.prototype.error = function(e, t) {}, e.prototype.api = function(e, t) {}, 
    e.prototype.perf = function(e, t) {}, e.prototype.updateNextPageProperties = function(e, t) {}, 
    e.prototype.monitor = function(e, t) {}, e.prototype.log = function(e, t) {}, e.prototype.getConfig = function(e) {}, 
    e.prototype.setConfig = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    }, e;
}(), A = function(e, t) {
    return Object.getOwnPropertyNames(t).reduce(function(o, n) {
        return e && e[n] && (o[t[n]] = e[n]), o;
    }, {});
}, O = function(e, t) {
    for (var o = {}, n = (t || []).length, r = Object.getOwnPropertyNames(e), i = 0; i < n; i++) {
        var a = e[r[i]];
        void 0 !== a && (o[t[i]] = a);
    }
    return o;
}, C = function(e, t) {
    return void 0 === e && (e = ""), void 0 === t && (t = 500), "string" != typeof e ? JSON.stringify(e) : e.substr(0, t);
}, S = new Date().getTime(), T = [], L = function(e) {
    return T.slice().reverse().find(function(t) {
        return t.name === "".concat(e);
    });
}, w = function(e) {
    var t = e || {}, o = t.markStart, n = void 0 === o ? "" : o, r = t.markDuration, i = void 0 === r ? "" : r;
    if (i || 0 === i) return i;
    var a = new Date().getTime();
    return n ? a - n : a - S;
}, E = function(e) {
    var o = e.extInfo, n = O(void 0 === o ? {} : o, p.eventKeys);
    t.default.log("usertiming", d({
        p1: e.startTime,
        p2: e.duration,
        p3: e.entryType,
        p4: e.name
    }, n));
}, k = function(e, t, o, n) {
    if (void 0 !== e) {
        var r = void 0 === t ? null : L(t), i = void 0 === o ? null : L(o);
        if ((void 0 === t || r) && (void 0 === o || i)) {
            r = r || {
                startTime: 0
            }, i = i || {
                startTime: 0
            };
            var a = {
                name: "" + e,
                entryType: s.measure,
                startTime: r.startTime,
                duration: (i.startTime || w()) - r.startTime,
                extInfo: n
            };
            E(a);
        }
    }
}, D = function(e) {
    var t = e || {}, o = t.name, n = void 0 === o ? "" : o, r = t.extInfo, i = void 0 === r ? {} : r, a = t.instant, p = void 0 === a || a;
    if (n) {
        var f = w(e);
        if (!(f < 0)) {
            var u = {
                name: "" + n,
                entryType: s.mark,
                startTime: f,
                duration: 0,
                extInfo: i
            };
            p && (u.uploaded = !0, E(u)), T.push(u);
        }
    }
}, U = function() {
    T.filter(function(e) {
        return !e.uploaded && (e.uploaded = !0, !0);
    }).forEach(function(e) {
        E(e);
    });
}, M = function(e) {
    var t = e.message.match(/Uncaught (\w+):/), o = e.stack.match(/(\w+Error):/);
    return t && t[1] ? t[1] : o && o[1] ? o[1] : e.error_type ? e.error_type : e.name ? e.name : /Error$/.test(e.constructor.name) ? e.constructor.name : "Error";
}, z = p.baseConfig, R = p.pvConfig, N = function(e) {
    function r() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return u(r, e), r.prototype.setCommonConfig = function(e) {
        var o = A(e, z), n = A(e, R);
        t.default.setConfig(d(d({}, o), n));
    }, r.prototype.pv = function(e, n) {
        var r = e.spmAPos, i = e.spmBPos, a = e.extParam, s = e.pageParams, f = O(void 0 === s ? {} : s, p.eventKeys);
        r && i && o.aplus_universal.setPageSPM(r, i), this.setCommonConfig(a), t.default.updatePVID && t.default.updatePVID(), 
        t.default.log("pv", f, n.spmInfo.logConfig || {});
    }, r.prototype.leave = function(e, o) {
        var n = e.extParam, r = e.pageParams, i = O(void 0 === r ? {} : r, p.eventKeys);
        this.setCommonConfig(n), t.default.log("leave", i, o.spmInfo.logConfig || {});
    }, r.prototype.handleEvent = function(e) {
        var t = e.logKey, o = e.logType, r = e.base, i = e.biz, a = O(i, p.eventKeys);
        this.setCommonConfig(r), (0, n.default)(t, d({
            et: o
        }, a));
    }, r.prototype.record = function(e) {
        return this.handleEvent(e);
    }, r.prototype.monitor = function(e) {
        return this.handleEvent(e);
    }, r.prototype.log = function(e) {
        var o = e.base, n = e.biz;
        this.setCommonConfig(o), t.default.log.apply(t.default, n);
    }, r.prototype.error = function(e, o) {
        var n = e.base, r = e.biz;
        this.setCommonConfig(n), t.default.log("js_error", function(e) {
            var t = e;
            if ("string" == typeof e) {
                t = {};
                var o = e.split("\n");
                o.length >= 3 && o[0].indexOf("MiniProgramError") > -1 ? (t.message = o[1], t.stack = o.slice(2).join("\n")) : o.length >= 2 ? (t.message = o[0], 
                t.stack = o.slice(1).join("\n")) : (t.message = o[0], t.stack = "");
            }
            var n, r, i, a, s = p.eventKeys.reduce(function(e, o) {
                return Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]), e;
            }, {});
            return d({
                message: t.message,
                stack: (a = t.stack, n = a ? ((a = a.split("\n").slice(1)).length > 3 && (a = a.slice(0, 2).concat([ "...", a[a.length - 1] ])), 
                a.map(function(e) {
                    return e.replace(/^\s+at\s+/g, "");
                }).join("^")) : "", r = 1e3, i = r || 1e3, n.substr(0, i)),
                error_type: M(t)
            }, s);
        }(r), o.spmInfo.logConfig || {});
    }, r.prototype.api = function(e, o) {
        var n = e.base, r = e.biz;
        this.setCommonConfig(n), r.params && (r.params = C(r.params)), r.response && (r.response = C(r.response)), 
        t.default.log("api", r, o.spmInfo.logConfig || {});
    }, r.prototype.perf = function(e, o) {
        var n = e.type, r = e.base, i = e.biz;
        switch (this.setCommonConfig(r), n) {
          case s.navigation:
            t.default.log("perf", i, o.spmInfo.logConfig || {});
            break;

          case s.mark:
            D(i);
            break;

          case s.upload:
            U();
            break;

          case s.measure:
            k(i.name, i.startMarkName, i.endMarkName, i.extInfo);
        }
    }, r.pluginType = i.AEM, r;
}(_), j = function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return u(t, e), t.prototype.pv = function(e) {
        var t = e.spmAPos, n = e.spmBPos, r = e.pageName, i = e.pageUrl, a = e.spmUrl, s = e.extParam;
        o.aplus_universal.setPageSPM(t, n), o.aplus_universal.enter({
            pageName: r,
            pageUrl: i,
            spmUrl: a,
            referrer: ""
        }, d({}, s));
    }, t.prototype.record = function(e) {
        var t = e.logKey, n = e.logType, r = e.base, i = void 0 === r ? {} : r, a = e.biz, s = void 0 === a ? {} : a, p = e.method, f = void 0 === p ? "POST" : p;
        o.aplus_universal.record(t, n, d(d({}, i), s), f);
    }, t.prototype.updateNextPageProperties = function(e) {
        o.aplus_universal.updateNextPageProperties(e);
    }, t.pluginType = i.APLUS, t;
}(_), G = new (function() {
    function e() {
        this.baseConfig = {}, this.plugins = {};
    }
    return e.prototype.setConfig = function(e) {
        void 0 === e && (e = {}), this.baseConfig = d(d({}, this.baseConfig), e);
    }, e.prototype.use = function(e) {
        var t = this;
        e.forEach(function(e) {
            t.plugins[e.pluginType] = new e();
        });
    }, e.prototype.execute = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var o = this.baseConfig || {}, n = o.type, r = o.channels, i = this.plugins;
        n && r && r.length && r.forEach(function(t) {
            "function" == typeof i[t][n] && i[t][n].apply(i[t], e);
        });
    }, e;
}())();

G.use([ N, j ]);

var H = function(e) {
    var t = e.context, o = e.type, n = e.params, r = e.options, i = void 0 === r ? {} : r, a = t.initInfo.commitChannel, s = t.spmInfo.commitChannel, p = d(d({}, a), s);
    (void 0 === t.spmInfo.debug ? t.initInfo.debug : t.spmInfo.debug) || function(e) {
        return !!e && (e >= 1 || "100%" === e || (/^\d+(\.\d+)?%$/.test(e) ? Math.random() < parseFloat(e) / 100 : e > 0 && e < 1 && Math.random() < e));
    }(i.sampleRate || t.initInfo[o + "SampleRate"] || t.initInfo.sampleRate) && (G.setConfig({
        type: o,
        channels: p[o]
    }), G.execute(n, t), t.onLogAppend({
        logType: o,
        params: n
    }));
}, $ = function(e) {
    function o(t) {
        var o = e.call(this, t) || this;
        return o.currentPageInfo = {
            pageId: "",
            pageParam4: {},
            genericData: {},
            spmInfo: {},
            referPageId: "",
            referPageIdPre: "",
            referPageUrl: "",
            startParams: {},
            chInfo: "",
            laninfo: ""
        }, o.aplusParam4 = {}, o.initInfo && o.initInfo.autoSession && (o.baseInfo.sessionid = I()), 
        r.log("Aplus tracert has been created."), o;
    }
    return u(o, e), o.prototype.onLoad = function(t) {
        e.prototype.onLoad.call(this, t), this.currentPageInfo.spmInfo = t, this.currentPageInfo.genericData = d({}, this.genericData), 
        this.updateAplusSpmPagesInfoOnLoad();
    }, o.prototype.onShow = function(t) {
        e.prototype.onShow.call(this, t), this.currentPageInfo.spmInfo = t;
        var o = this.getGenericData();
        this.currentPageInfo.genericData = o || d({}, this.genericData), this.aplusParam4 = d(d(d({}, this.aplusParam4), this.createBaseInfoParams()), this.currentPageInfo.genericData), 
        this.updateAplusStartParams(t), this.updateAplusSpmPagesInfoOnShow(t);
    }, o.prototype.onHide = function(e) {
        var t = this.getPageSpmInfoFromApp(e);
        t && t.isPageEnd || this.leave(), this.updateAplusSpmPagesInfoOnHide(e);
    }, o.prototype.getAplusParam4 = function() {
        var e = (this.spmInfo || {}).bizType, t = void 0 === e ? "" : e, o = this.currentPageInfo || {}, n = o.pageId, r = void 0 === n ? "" : n, i = o.referPageId, a = void 0 === i ? "" : i, s = o.referPageUrl, p = void 0 === s ? "" : s;
        return d(d(d(d({}, this.createBaseInfoParams()), {
            alsc_bizcode: t,
            kb_pageid: r,
            kb_refer: a,
            referPageUrl: p,
            kb_spmid: this.spmId
        }), this.aplusParam4), this.currentPageInfo.pageParam4);
    }, o.prototype.updateAplusStartParams = function(e) {
        var t = (e || {}).startParams, o = void 0 === t ? {} : t, n = o.scm, r = o.spmUrl, i = o.clickid, a = o.spm, s = o._h5url, p = o.chInfo, f = o.laninfo;
        this.currentPageInfo.startParams || (this.currentPageInfo.startParams = {}), this.currentPageInfo.startParams.scm = n, 
        this.currentPageInfo.startParams.clickid = i, this.currentPageInfo.startParams.spmUrl = r || o["spm-url"] || a || (function(e) {
            if (e) {
                var t = {};
                return e.split("&").forEach(function(e) {
                    if (e) {
                        var o = e.split("="), n = o[0], r = o[1];
                        t[n] = decodeURIComponent(r);
                    }
                }), t;
            }
        }(s) || {}).spm;
        var u = function() {
            var e = {};
            try {
                "string" == typeof (e = v().getLaunchOptionsSync().query || {}) && (e = JSON.parse(e.replace(/([^,\s{=]+)=([^,\s}]+)/g, '"$1":"$2"')));
            } catch (e) {}
            return e;
        }() || {};
        this.currentPageInfo.chInfo = p || u.chInfo || "", this.currentPageInfo.laninfo = f || u.laninfo || "";
    }, o.prototype.setGenericParams = function(e, t) {
        var o = this.currentPageInfo.genericData;
        this.currentPageInfo.genericData = d(d({}, o), e), this.aplusParam4 = d(d({}, this.aplusParam4), this.currentPageInfo.genericData);
        var n = getApp() || {};
        n[h] || (n[h] = {});
        var r, i = n[h];
        i.spmPages || (i.spmPages = {});
        var a = i.spmPages[r = t && y(t) ? y(t) : this.currentPageInfo.spmInfo.viewId];
        a = d(d({}, a), {
            genericData: this.currentPageInfo.genericData
        }), i.spmPages[r] = a, n[h] = i;
    }, o.prototype.getPageSpmInfoFromApp = function(e) {
        var t = ((getApp() || {})[h] || {}).spmPages;
        return t && e.viewId && t[e.viewId] ? t[e.viewId] : null;
    }, o.prototype.getGenericData = function() {
        var e = getApp() || {};
        e[h] || (e[h] = {});
        var t = e[h];
        return t.spmPages || (t.spmPages = {}), ((t.spmPages || {})[this.currentPageInfo.spmInfo.viewId] || {}).genericData;
    }, Object.defineProperty(o.prototype, "commonSpmPages", {
        get: function() {
            return {
                pageId: this.currentPageInfo.pageId,
                referId: this.currentPageInfo.referPageId,
                spmId: this.spmId,
                bizType: this.spmInfo.bizType,
                pageName: this.spmInfo.pageName,
                pageUrl: this.spmInfo.pageUrl
            };
        },
        enumerable: !1,
        configurable: !0
    }), o.prototype.updateAplusSpmPagesInfoOnLoad = function() {
        var e = getApp() || {};
        e[h] || (e[h] = {});
        var t = e[h];
        t.spmPages || (t.spmPages = {});
        var o = t.spmPages;
        this.currentPageInfo.pageId = this.spmId + "__" + I() + "__" + Date.now() + "_", 
        o[this.spmInfo.viewId] = d(d({}, this.commonSpmPages), {
            isPageEnd: !0
        }), t.spmPages = o, e[h] = t;
    }, o.prototype.updateAplusSpmPagesInfoOnShow = function(e) {
        var t = getApp();
        if (t && t[h] && t[h].spmPages) {
            if (t[h].spmPages[e.viewId]) {
                if (!1 === t[h].spmPages[e.viewId].isPageEnd) return void r.log("updateTbSpmPagesInfoOnShow(): never left current page.", t);
            } else ;
            t[h] || (t[h] = {});
            var o = t[h];
            o.spmPages || (o.spmPages = {});
            var n = o.spmPages;
            this.currentPageInfo.pageId = this.spmId + "__" + I() + "__" + Date.now() + "_", 
            n[this.spmInfo.viewId] = d(d({}, this.commonSpmPages), {
                isPageEnd: !1
            }), o.spmPages = n, t[h] = o, this.logPv(), this.currentPageInfo.chInfo = "", this.currentPageInfo.referPageUrl = this.currentPageInfo.genericData ? this.currentPageInfo.genericData.page_id : "", 
            this.currentPageInfo.referPageIdPre = this.currentPageInfo.referPageId, this.currentPageInfo.referPageId = encodeURI(this.spmId + "|" + this.currentPageInfo.pageId);
        }
    }, o.prototype.updateAplusSpmPagesInfoOnHide = function(e) {
        this.commit({
            type: a.updateNextPageProperties,
            params: {
                "spm-url": this.spmId + ".0.0"
            }
        });
        var t = getApp() || {};
        this.currentPageInfo.pageParam4 = {}, this.currentPageInfo.genericData = {};
        var o = t[h];
        if (o) {
            var n = o.spmPages;
            n && (e.viewId && n[e.viewId] && (n[e.viewId].isPageEnd = !0), o.spmPages = n, t[h] = o);
        }
    }, o.prototype.getPvParams = function(e) {
        var t = this.spmInfo, o = t.spmAPos, n = void 0 === o ? "" : o, r = t.spmBPos, i = void 0 === r ? "" : r, a = t.pageName, s = (this.currentPageInfo || {}).startParams, p = (void 0 === s ? {} : s) || {}, f = p.scm, u = void 0 === f ? "" : f, c = p.spmUrl, g = void 0 === c ? void 0 : c, m = p.clickid, l = d(d({
            scm: u,
            clickid: void 0 === m ? "" : m
        }, this.getAplusParam4()), e);
        return this.currentPageInfo.chInfo && (l.chInfo = this.currentPageInfo.chInfo), 
        this.currentPageInfo.laninfo && (l.laninfo = this.currentPageInfo.laninfo), {
            spmAPos: n,
            spmBPos: i,
            pageName: a || this.spmId,
            pageUrl: "https://" + (a || this.spmId),
            spmUrl: g,
            referrer: "",
            extParam: l,
            pageParams: this.currentPageInfo.pageParam4
        };
    }, o.prototype.logPv = function(e, t) {
        var o = this.getPvParams(e);
        this.commit({
            type: a.pv,
            params: o,
            options: t
        });
    }, o.prototype.leave = function(e, t) {
        var o = this.getPvParams(e);
        this.commit({
            type: a.leave,
            params: o,
            options: t
        });
    }, o.prototype.setPageParams = function(e) {
        this.currentPageInfo.pageParam4 = e;
    }, o.prototype.logPvEnd = function(e) {}, o.prototype.expo = function(e, t, o) {
        this.commitLog(e, "EXP", this.getAplusParam4(), t, o);
    }, o.prototype.click = function(e, t, o) {
        void 0 === t && (t = {}), this.commitLog(e, "CLK", this.getAplusParam4(), t, o);
    }, o.prototype.other = function(e, t, o) {
        void 0 === t && (t = {}), this.commitLog(e, "OTHER", this.getAplusParam4(), t, o);
    }, o.prototype.monitor = function(e, t, o) {
        void 0 === t && (t = {}), this.commit({
            type: a.monitor,
            params: {
                logKey: e,
                logType: "OTHER",
                base: this.getAplusParam4(),
                biz: t
            },
            options: o
        });
    }, o.prototype.log = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.commit({
            type: a.log,
            params: {
                biz: e,
                base: this.getAplusParam4()
            }
        });
    }, o.prototype.getConfig = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.commit({
            type: a.getConfig,
            params: {
                biz: e
            }
        });
    }, o.prototype.setConfig = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.commit({
            type: a.setConfig,
            params: {
                biz: e
            }
        });
    }, o.prototype.getCurrentPageId = function() {
        return this.currentPageInfo.pageId;
    }, o.prototype.setSpmPos = function(t, o) {
        e.prototype.setSpmPos.call(this, t, o), this.logPv();
    }, o.prototype.commitLog = function(e, t, o, n, r) {
        void 0 === o && (o = {}), void 0 === n && (n = {});
        var i = /^\//.test(e) ? e : "/" + e;
        this.commit({
            type: a.record,
            params: {
                logKey: i,
                logType: t,
                base: o,
                biz: n,
                method: "POST"
            },
            options: r
        });
    }, o.prototype.logApi = function(e, t, o) {
        void 0 === t && (t = {}), this.commit({
            type: a.api,
            params: {
                base: d(d({}, this.getAplusParam4()), t),
                biz: e || {}
            },
            options: o
        });
    }, o.prototype.logError = function(e, t, o) {
        void 0 === t && (t = {}), this.commit({
            type: a.error,
            params: {
                base: d(d({}, this.getAplusParam4()), t),
                biz: e
            },
            options: o
        });
    }, o.prototype.logPerf = function(e, t, o, n) {
        void 0 === t && (t = {}), void 0 === o && (o = {}), this.commit({
            type: a.perf,
            params: {
                type: e,
                base: d(d({}, this.getAplusParam4()), o),
                biz: t
            },
            options: n
        });
    }, o.prototype.commit = function(e) {
        var o, n;
        return e && e.type === a.getConfig ? t.default.getConfig.apply(t.default, null === (o = null == e ? void 0 : e.params) || void 0 === o ? void 0 : o.biz) : e && e.type === a.setConfig ? t.default.setConfig.apply(t.default, null === (n = null == e ? void 0 : e.params) || void 0 === n ? void 0 : n.biz) : H(d(d({}, e), {
            context: this
        }));
    }, o;
}(x), B = -1;