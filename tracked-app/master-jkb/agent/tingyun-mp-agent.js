var t = wx;

function e() {
    return +new Date();
}

var n = [], r = {
    context: null
}, a = {
    networkType: "",
    system: t.getSystemInfoSync()
};

function i() {
    n = [];
}

function o() {
    return n.slice();
}

function s(t) {
    return function(e) {
        return "Array" === t && Array.isArray ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object " + t + "]";
    };
}

var c = s("String"), u = s("Array"), d = s("Function"), f = s("Object"), l = s("Boolean"), h = s("Number");

function p(t, e) {
    return function() {
        if (d(e)) try {
            e.apply(this, arguments);
        } catch (t) {}
        if (d(t)) return t.apply(this, arguments);
    };
}

function m(t, e, n) {
    return function() {
        var r;
        if (d(e)) try {
            e.apply(this, arguments);
        } catch (r) {}
        if (d(t) && (r = t.apply(this, arguments)), d(n)) try {
            n.apply(this, arguments);
        } catch (r) {}
        return r;
    };
}

function v(t, e) {
    if (f(t) && d(t.handler)) {
        var n = t.name, r = t.handler, a = t.afterHandler;
        e[n] = m(e[n], r, a), e[n]._ty_hook = !0;
    }
}

var y = function() {
    function t(t) {
        return t < 0 ? NaN : t <= 30 ? 0 | Math.random() * (1 << t) : t <= 53 ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << t - 30)) * (1 << 30) : NaN;
    }
    function e(t, e) {
        for (var n = t.toString(16), r = e - n.length, a = "0"; 0 < r; r >>>= 1, a += a) 1 & r && (n = a + n);
        return n;
    }
    return function() {
        return e(t(32), 8) + "-" + e(t(16), 4) + "-" + e(16384 | t(12), 4) + "-" + e(32768 | t(14), 4) + "-" + e(t(48), 12);
    };
}();

function g(t) {
    try {
        return function(t) {
            return t && c(t) ? JSON.parse(t) : t;
        }(t);
    } catch (t) {}
    return null;
}

function T(t, e) {
    var n = "", r = !1;
    try {
        n = JSON.stringify(t);
    } catch (t) {
        r = !(n = "");
    }
    return e ? {
        error: r,
        value: n
    } : n;
}

function D(t) {
    return t + "";
}

function S(t) {
    return t ? f(t) ? T(t).length : c(t) ? t.length : t instanceof ArrayBuffer ? t.byteLength : t.length ? t.length : 0 : 0;
}

function x(t, e) {
    var n;
    return n = f(t) ? T(t) : c(t) ? t : "", e && (n = n.substring(0, e)), n;
}

var q = "TINGYUN_UID", b = "custom", E = "TRIGGER_LIFECYCLE", I = "2.6.4", k = "request", A = "api", _ = "timer", O = "TY_CONFIG", C = "TY_SAMPLING", P = "TY_SETDATA_THRESHOLD", L = "TY_SETDATA_TRACE", F = "TY_SETDATA_TRACEHINT", R = "TY_SETDATA_TIME_INTERVAL", N = [ 500, 1500 ], w = {}, M = !1;

function j() {
    return M;
}

function H() {
    for (var t = 0; t < arguments.length; t++) if (null != arguments[t]) return arguments[t];
}

var Y = J(C), z = !1;

function G(t) {
    return null != t && h(t);
}

function K(t) {
    return null != t && l(t);
}

function B(t) {
    return null != t && u(t);
}

function U(t) {
    return B(t) && 2 == t.length;
}

function J(e) {
    var n = t.getStorageSync(O);
    if (n && f(n)) return n[e];
}

function V(e) {
    var n = t.getStorageSync(O);
    if (n && f(n) || (n = {}), e) for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
    t.setStorageSync(O, n);
}

function X(e) {
    w.key && w.beacon && t.request({
        url: "".concat(w.beacon, "/mp-config/config/pullSampling?encodeMpId=").concat(w.key),
        method: "GET",
        _no_record: !0,
        success: function(t) {
            var e = t.data || {}, n = e.code, r = e.data;
            200 === n && r && (G(r.sampling) && (Y = r.sampling, V(function(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }({}, C, Y))), function(t, e) {
                var n = this, r = {};
                t.forEach(function(t) {
                    var a = t.key, i = t.storeKey, o = t.validFunc;
                    o && o.call(n, e[a]) && (w[a] = e[a], r[i] = e[a]);
                }), V(r);
            }([ {
                key: "setdataThreshold",
                storeKey: P,
                validFunc: G
            }, {
                key: "setdataTrace",
                storeKey: L,
                validFunc: K
            }, {
                key: "setdataTraceHint",
                storeKey: F,
                validFunc: K
            }, {
                key: "ignoreErrorCodes",
                storeKey: "TY_IGNORE_ERRCODES",
                validFunc: B
            }, {
                key: "setdataTimeInterval",
                storeKey: R,
                validFunc: U
            } ], r));
        },
        complete: function() {
            e && e(Y);
        }
    });
}

function Q() {
    return {
        uniqueId: 0,
        requestId: 0,
        apiId: 0,
        otherActions: [],
        eventActions: [],
        setData: {
            threshold: H(w.setdataThreshold, J(P), 1500),
            setDataTrace: H(w.setdataTrace, J(L), !0),
            setDataTraceHint: H(w.setdataTraceHint, J(F), !0),
            setDataTimeInterval: H(w.setdataTimeInterval, J(R), N),
            stuck: !1,
            max: 0,
            currentSegmentTime: 0,
            data: {},
            requestBridge: []
        },
        reqStat: {
            currentSegmentTime: 0,
            data: {}
        },
        lastSetDataInOnReady: 0,
        stuck: !1,
        jsError: !1,
        netError: !1,
        recordFirstLoad: !1
    };
}

setInterval(X, 6e5);

var W = {}, Z = [], $ = 0, tt = {}, et = Q(), nt = {
    stuck: !1,
    firstLoad: 0,
    jsError: !1,
    netError: !1
}, rt = {
    canSend: !1,
    sent: !1,
    apiRemain: 0,
    needClearDeferredData: !1
};

function at() {
    nt = {
        stuck: !1,
        firstLoad: 0,
        jsError: !1,
        netError: !1
    };
}

function it(t, e) {
    for (var n in e) e.hasOwnProperty(n) && e[n] && 0 < e[n].count && t.push(Object.assign(e[n] || {}, {
        timestamp: +n
    }));
}

function ot() {
    $ = e();
}

var st = {
    uid: function() {
        var e = t.getStorageSync(q);
        return e || (e = y(), t.setStorageSync(q, e)), e;
    }(),
    sid: y(),
    v: "1.3.6",
    at: "wx"
};

function ct(e) {
    if (z) {
        var n = Object.assign({}, st, a || {}, {
            key: w.key
        }, e || {});
        n.launch = !e, t.request({
            url: "".concat(w.beacon, "/mp-app"),
            data: n,
            method: "POST",
            _no_record: !0,
            success: function() {}
        });
    }
}

function ut(e) {
    if (z && (E === e && (rt.canSend = !0), !rt.sent && rt.canSend)) {
        var n = Object.assign({}, {
            path: tt.current,
            pageEvent: Object.assign({}, W),
            errs: Z.slice(),
            fromPath: tt.prev || "",
            actions: (et.eventActions || []).concat(et.otherActions || [])
        }, Object.assign({}, st, a || {}, {
            key: w.key
        }), 0 < $ ? {
            ct: $
        } : {}, function() {
            var t = [], e = [];
            it(t, et.setData.data), it(e, et.reqStat.data);
            var n = {
                metric: {
                    jsError: Z && 0 < Z.length,
                    netError: et.netError,
                    stuck: et.stuck
                }
            };
            if (0 < t.length && (n.setData = {
                threshold: H(et.setData.threshold, 1500),
                setDataTrace: H(et.setData.setDataTrace, !0),
                setDataTraceHint: H(et.setData.setDataTraceHint, !0),
                setDataTimeInterval: H(et.setData.setDataTimeInterval, N),
                max: et.setData.max,
                requestBridge: et.setData.requestBridge,
                data: t
            }), 0 < e.length && (n.reqStat = e), W.onLoad) {
                var r = et.lastSetDataInOnReady;
                if (r = r || W.onReady) {
                    var a = r - W.onLoad;
                    a = 0 < a ? a : 0, n.metric.firstLoad = a;
                }
            }
            return nt = n.metric, n;
        }()), r = o();
        r && (n.routeTrack = r), t.request({
            url: "".concat(w.beacon, "/mp-page"),
            data: n,
            method: "POST",
            _no_record: !0,
            success: function() {}
        }), W = {}, Z = [], $ = 0, rt.apiRemain = 0, et = Q(), rt.needClearDeferredData = !0, 
        rt.sent = !0, rt.canSend = !1;
    }
}

function dt(t, e) {
    var n = "";
    return t && t.system && (n = t.system.SDKVersion), n && e ? function(t, e) {
        t = t.split("."), e = e.split(".");
        for (var n = Math.max(t.length, e.length); t.length < n; ) t.push("0");
        for (;e.length < n; ) e.push("0");
        for (var r = 0; r < n; r++) {
            var a = parseInt(t[r]), i = parseInt(e[r]);
            if (i < a) return 1;
            if (a < i) return -1;
        }
        return 0;
    }(n, e) : -1;
}

var ft = [ {
    name: "onLaunch",
    handler: function(e) {
        !function() {
            Y = Y || +w.sampleRate || 1;
            var t = Math.random();
            z = t <= Y;
        }();
        var n = e.path, r = e.query, i = e.scene;
        a.openPath = n, w.disableFetchQuery || (a.query = r), a.scene = i, t.getNetworkType({
            success: function(t) {
                a.networkType = t.networkType;
            },
            complete: function() {
                ct();
            }
        });
    }
}, {
    name: "onError",
    handler: function(t) {
        var n = "", r = "";
        if (c(t) ? n = t : t && (n = t.stack, r = t.message), n) {
            var a = {
                time: e(),
                stack: n
            };
            r && (a.msg = r), Z.push(a);
        }
    }
}, {
    name: "onHide",
    handler: function() {
        var t = o();
        i();
        var e = tt.current;
        tt.prev = "", tt.current = "", ct({
            routeTrack: t,
            closePath: e,
            metric: nt
        });
    }
} ];

function lt(t) {
    return ft.forEach(function(e) {
        v(e, t);
    }), t;
}

function ht(t) {
    return w.ignoredPages && u(w.ignoredPages) ? w.ignoredPages.indexOf(t) < 0 : !w.pages || !u(w.pages) || -1 < w.pages.indexOf(t);
}

function pt() {
    var t = this.setData, n = et.setData.threshold, a = et.setData.setDataTrace, i = et.setData.setDataTraceHint, o = et.setData.setDataTimeInterval;
    this.setData = function() {
        var s = arguments[0], c = arguments[1], u = e(), d = {
            start: u
        }, f = r.context, l = f && f.type === k && f.data && f.data.recordFirstLoad;
        (et.recordFirstLoad || l) && (d.calcFirstLoad = !0);
        try {
            var h = et.setData.currentSegmentTime;
            1e3 < u - h ? (et.setData.currentSegmentTime = u, et.setData.data[u] = {
                count: 0,
                grade: {
                    good: {
                        count: 0
                    },
                    normal: {
                        count: 0
                    },
                    bad: {
                        count: 0
                    }
                },
                traces: []
            }, d.segmentTime = u) : d.segmentTime = h;
        } catch (u) {}
        function p() {
            try {
                d.end = e(), d.calcFirstLoad && d.end > et.lastSetDataInOnReady && (et.lastSetDataInOnReady = d.end), 
                d.duration = d.end - d.start;
                var t = et.setData.data[d.segmentTime];
                if (t.count++, d.duration > et.setData.max && (et.setData.max = d.duration), d.duration > o[1] ? t.grade.bad.count++ : d.duration > o[0] ? t.grade.normal.count++ : t.grade.good.count++, 
                d.duration > n && (et.stuck || (et.stuck = !0), t.traces.length < 5 && a)) try {
                    var r = T(s, !0), u = {
                        timestamp: d.start,
                        duration: d.duration,
                        size: r.value.length
                    };
                    i && (u.hint = r.value.substring(0, 200)), r.error && (u.error = r.error), t.traces.push(u);
                } catch (t) {}
                l && et.setData.requestBridge.push({
                    start: d.start,
                    end: d.end,
                    requestId: f.data.requestId,
                    url: f.data.url
                });
            } catch (t) {}
            return c && c.apply(this, arguments);
        }
        return t.call(this, arguments[0], p);
    };
}

var mt = [ {
    name: "onLoad",
    handler: function() {
        ht(this.route) && (rt.needClearDeferredData && (at(), rt.needClearDeferredData = !1), 
        et.recordFirstLoad = !0, pt.call(this), W.onLoad = e());
    }
}, {
    name: "onShow",
    handler: function() {
        ht(this.route) && (rt.needClearDeferredData && (at(), rt.needClearDeferredData = !1), 
        W.onShow = e(), function(t) {
            n.push({
                timestamp: e(),
                route: t
            });
        }(this.route), tt.prev = tt.current, tt.current = this.route, rt.sent = !1);
    }
}, {
    name: "onReady",
    handler: function() {
        ht(this.route) && (W.onReady = e());
    },
    afterHandler: function() {
        ht(this.route) && (et.recordFirstLoad = !1);
    }
}, {
    name: "onHide",
    handler: function() {
        ht(this.route) && (W.onHide = e(), ut(E));
    }
}, {
    name: "onUnload",
    handler: function() {
        ht(this.route) && (W.onUnload = e(), ut(E));
    }
} ];

var vt = [ k, A, _ ];

function yt(t, n, r, a, i) {
    this.id = ++et.uniqueId, this.parent = t || null, this.name = n || "<root>", this.type = r || "event", 
    this.subType = "event" === this.type ? a || "tap" : a, this.requests = [], this.apis = [], 
    this.remain = function() {
        var t = {};
        return vt.forEach(function(e) {
            t[e] = {
                current: 0,
                children: 0
            };
        }), t;
    }(), this.s = e(), this.e = null, this.data = i;
    var o = this, s = w && w.eventTimeout || 6e5;
    this.i = setTimeout(function() {
        o.timeout();
    }, s), this.closed = !1, this.path = tt.current, this.prevPath = tt.prev;
}

yt.prototype.end = function(t, n) {
    if (!this.closed) {
        if (t) if (t.type === k || t.type === A) {
            var a = t.requests || [], i = t.apis || [];
            this.requests.map(function(e) {
                "".concat(e.url, "-").concat(e.requestId) === t.name && (e.requests = a, e.apis = i);
            }), this.apis.map(function(e) {
                "".concat(e.name, "-").concat(e.apiId) === t.name && (e.requests = a, e.apis = i);
            });
        } else if (t.type === _) {
            var o = t.requests || [], s = t.apis || [];
            this.requests = [].concat.call(this.requests || [], o), this.apis = [].concat.call(this.apis || [], s);
        }
        (this.isNoRemain() || n) && (this.e = e(), this.closed = !0, this.i && clearTimeout(this.i), 
        this.parent ? this.parent.end(this) : (function(t) {
            if (et.eventActions || (et.eventActions = []), et.otherActions || (et.otherActions = []), 
            t) if ("event" === t.type) {
                var e = w && w.eventMaxSize || 20;
                et.eventActions && et.eventActions.length >= e && et.eventActions.shift(), et.eventActions.push(t);
            } else et.otherActions.push(t);
        }(this.composeActionData()), r.context = null));
    }
}, yt.prototype.isNoRemain = function(t) {
    var e = !0;
    for (var n in this.remain) if (this.remain.hasOwnProperty(n) && !(this.remain[n].current <= 0 && (t || this.remain[n].children <= 0))) {
        e = !1;
        break;
    }
    return e;
}, yt.prototype.timeout = function() {
    this.end(null, !0);
}, yt.prototype.setData = function(t) {
    this.data = t;
}, yt.prototype.hasPrevAssignedData = function() {
    return this.requests && 0 < this.requests.length || this.apis && 0 < this.apis.length;
}, yt.prototype.composeActionData = function() {
    var t = {
        id: this.id,
        name: this.name,
        type: this.type,
        start: this.s,
        end: this.e,
        duration: 0 < this.e - this.s ? this.e - this.s : 0,
        requests: (this.requests || []).slice(),
        apis: (this.apis || []).slice(),
        data: this.data || {},
        path: this.path,
        prevPath: this.prevPath
    };
    return this.type !== k && this.type !== A || delete (t = Object.assign({}, t, this.data)).data, 
    t;
}, yt.prototype.canEnd = function(t, e) {
    return this.isNoRemain(!0);
}, yt.prototype.isEventChildContext = function() {
    for (var t = this.parent, e = !1; null != t; ) {
        if ("event" === t.type) {
            e = !0;
            break;
        }
        t = t.parent;
    }
    return e;
}, yt.prototype.updateRemain = function(t, e) {
    e = e || k;
    var n = t || 0;
    this.remain[e].current = this.remain[e].current + n;
    for (var r = this.parent; r; ) r.remain[e].children = r.remain[e].children + n, 
    r = r.parent;
}, Object.defineProperty(yt.prototype, "current", {
    get: function() {
        return r.context;
    },
    enumerable: !0,
    configurable: !0
}), Object.defineProperty(yt, "createEvent", {
    value: function(t, e, n, r, a) {
        return new yt(t, e, n || "event", r || null, a);
    },
    enumerable: !0,
    configurable: !0,
    writable: !0
});

function gt(t) {
    return !t || "tap" !== t.type || !f(t.target) || !f(t.currentTarget) || null == t.timeStamp;
}

function Tt(t, e) {
    var n, a = t.target || {}, i = a.offsetLeft, o = a.offsetTop, s = a.id, c = a.dataset, u = t.detail || {}, d = u.x, f = u.y;
    t._relatedInfo && (n = t._relatedInfo.anchorTargetText);
    var l = {
        target: {
            offsetLeft: i,
            offsetTop: o,
            id: s,
            x: d,
            y: f
        },
        dataset: {
            name: c.tyname,
            targetName: n,
            methodName: e
        }
    }, h = e || "";
    r.context = yt.createEvent(null, h, "event", t.type, l);
}

function Dt() {
    r.context && r.context.canEnd() && r.context.end();
}

function St(t, e) {
    return function() {
        var n, r = arguments[0] || {}, a = gt(r);
        if (!a) try {
            Tt.call(this, r, t);
        } catch (n) {}
        try {
            n = e.apply(this, arguments);
        } finally {
            if (!a) try {
                Dt.call(this);
            } catch (n) {}
        }
        return n;
    };
}

function xt(t) {
    return function(t) {
        var e = r.context;
        return function() {
            var n, a = r.context;
            r.context = e;
            try {
                n = t.apply(this, arguments);
            } finally {
                a && !a.closed && (r.context = a);
            }
            return n;
        };
    }(t);
}

function qt(t) {
    return mt.forEach(function(e) {
        v(e, t);
    }), function(t, e) {
        for (var n in t) if (t.hasOwnProperty(n) && d(t[n]) && !t[n]._ty_hook && d(e)) {
            var r = t[n];
            t[n] = e.call(this, n, r), t[n]._ty_hook = !0;
        }
    }(t, St), t.recordTyTime = ot, t;
}

var bt = t.request;

function Et(t) {
    if (!t) return 0;
    var e = t.header, n = t.data, r = 0;
    return (r = +(e && e["Content-Length"])) && h(r) && !Number.isNaN(r) || (r = S(n) || 0), 
    r;
}

function It(t, e) {
    var n = {}, r = function(t, e) {
        if (t) {
            var n = g(t["X-Tingyun-Tx-Data"]);
            if (n && n.r && D(n.r) === D(e)) return n;
        }
        return null;
    }(t.header, e.r);
    return r && (n.s_id = r.id, n.s_name = r.action, r.time && (n.s_du = r.time.duration, 
    n.s_qu = r.time.qu), n.t_id = r.trId), n;
}

function kt(t, e, n) {
    return {
        requestId: t.requestId,
        type: k,
        url: t.url,
        method: t.method,
        start: t.start,
        end: t.end,
        cbTime: t.cbTime,
        duration: 0 < t.end - t.start ? t.end - t.start : 0,
        send: S(e.data),
        rec: Et(n),
        statusCode: n.statusCode || 0,
        failMessage: t.failMessage || ""
    };
}

function At(t, e) {
    if (!t.context) {
        var n = "".concat(t.url, "-").concat(t.requestId);
        t.context = yt.createEvent(e, n, k, null, {
            url: t.url,
            requestId: t.requestId,
            recordFirstLoad: t.recordFirstLoad
        });
    }
    r.context = t.context;
}

function _t(t, e, n) {
    r.context && r.context.setData(n);
    var a = r.context && r.context.hasPrevAssignedData(), i = r.context && r.context.canEnd();
    i && r.context.end(), e && e.id === t.cid && n && (e.requests.push(n), e.updateRemain(-1, k), 
    e.canEnd() && i && e.end(a ? r.context : null));
}

var Ot = function(t) {
    var n = t || {};
    if (!n._no_record && n.url && j()) {
        var a = e(), i = et.reqStat.currentSegmentTime;
        1e3 < a - i && (i = a, et.reqStat.currentSegmentTime = a, et.reqStat.data[a] = {
            count: 0
        }), et.reqStat.data[i].count++;
        var o = r.context, s = {
            requestId: ++et.requestId,
            url: n.url,
            method: n.method && n.method.toUpperCase() || "GET",
            callbackContextCreated: !1,
            cbTime: 0,
            recordFirstLoad: et.recordFirstLoad
        };
        s.r = e() % 1e9, n.header = n.header || {}, n.header["X-Tingyun-Id"] = "".concat(w.id, ";r=").concat(s.r);
        var c = n.success, u = n.fail, l = n.complete;
        n.success = xt(function() {
            var t;
            if (s.end || (s.end = e()), At(s, o), c) {
                var n = e();
                try {
                    t = c.apply(this, arguments);
                } finally {
                    var r = e() - n;
                    0 < r && (s.cbTime += r);
                }
            }
            return t;
        }), n.fail = xt(function() {
            var t;
            if (s.end || (s.end = e()), At(s, o), u) {
                var n = e();
                try {
                    t = u.apply(this, arguments);
                } finally {
                    var r = e() - n;
                    0 < r && (s.cbTime += r);
                }
            }
            return t;
        }), n.complete = xt(function(t) {
            var r, a;
            s.end || (s.end = e());
            var i = w[b];
            if (i && d(i)) try {
                var c = i.apply(this, arguments);
                f(c) && (a = {
                    custom: c
                });
            } catch (t) {}
            if (At(s, o), l) {
                var u = e();
                try {
                    r = l.apply(this, arguments);
                } finally {
                    var h = e() - u;
                    0 < h && (s.cbTime += h);
                }
            }
            var p = 400 <= t.statusCode && (w.ignoreErrorCodes || []).indexOf(t.statusCode) < 0;
            if (p && !et.netError && (et.netError = !0), p && t) {
                var m = t.data;
                s.failMessage = x(m, w.requestFailMessageSize);
            }
            var v = It(t, s), y = kt(s, n, t), g = Object.assign({}, y, v || {}, a || {});
            return _t(s, o, g), r;
        }), s.start = a, o && (s.cid = o.id, o.updateRemain(1));
    }
    return bt.apply(this, arguments);
};

function Ct(t) {
    return t.methods || (t.methods = {}), mt.forEach(function(e) {
        v(e, t.methods);
    }), t;
}

var Pt, Lt = {
    version: "1.3.6",
    setUser: function(e, n) {
        a.uid = e, t.setStorageSync(q, e);
    },
    hookApp: function(t) {
        return 0 <= dt(a, I) || !j() ? t : lt.apply(this, arguments);
    },
    hookPage: function(t) {
        return 0 <= dt(a, I) || !j() ? t : qt.apply(this, arguments);
    },
    hookComponent: function(t) {
        return 0 <= dt(a, I) || !j() ? t : Ct.apply(this, arguments);
    },
    request: Ot,
    getContext: function() {
        return r.context;
    }
}, Ft = [ "success", "fail" ], Rt = [], Nt = {
    requestPayment: {
        fail: function(t) {
            var e = arguments && t, n = "fail";
            return e && f(e) && "requestPayment:fail cancel" === e.errMsg && (n = "cancel"), 
            n;
        }
    }
};

function wt() {
    (Pt = w.hookApis || [ "requestPayment", "scanCode", "previewImage" ]).forEach(function(t) {
        -1 < Rt.indexOf(t) || "request" === t || Rt.push(t);
    });
}

function Mt(t) {
    return {
        apiId: t.apiId,
        type: A,
        name: t.name,
        success: t.success || 0,
        fail: t.fail || 0,
        cancel: t.cancel || 0,
        start: t.start,
        end: t.end,
        duration: 0 < t.end - t.start ? t.end - t.start : 0,
        count: 1,
        failMessage: t.failMessage || ""
    };
}

function jt(t, e) {
    if (!t.context) {
        var n = "".concat(t.name, "-").concat(t.apiId);
        t.context = yt.createEvent(e, n, A);
    }
    r.context = t.context;
}

function Ht(t, e, n) {
    r.context && r.context.setData(n);
    var a = r.context && r.context.hasPrevAssignedData(), i = r.context && r.context.canEnd();
    i && r.context.end(), e && e.id === t.cid && n && (e.apis.push(n), e.updateRemain(-1, A), 
    e.canEnd() && i && e.end(a ? r.context : null));
}

function Yt(n) {
    var a = t[n];
    return function() {
        var t = r.context, i = arguments[0] || {}, o = {
            apiId: ++et.apiId,
            name: n
        };
        return Ft.forEach(function(r) {
            i[r] = xt(p(i[r], function() {
                var a;
                if (o.end || (o.end = e()), jt(o, t), (a = Nt[n] && Nt[n][r] && d(Nt[n][r]) ? Nt[n][r].apply(this, arguments) : r) && (o[a] = 1), 
                "fail" === a) {
                    var i = arguments && arguments[0];
                    o.failMessage = x(i, w.apiFailMessageSize);
                }
            }));
        }), i.complete = xt(m(i.complete, function() {
            o.end || (o.end = e()), jt(o, t);
        }, function() {
            var e = Mt(o);
            Ht(o, t, e);
        })), t && (o.cid = t.id, t.updateRemain(1, A)), o.start = e(), a.apply(this, arguments);
    };
}

function zt() {
    Pt || wt(), Rt.forEach(function(e) {
        !function(e) {
            e && t[e] && Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: Yt(e)
            });
        }(e);
    });
}

function Gt(e) {
    (!e || 0 <= dt(a, I)) && (function() {
        var t = App;
        App = function(e) {
            if (e = lt(e), t) return t.call(this, e);
        };
    }(), function() {
        var t = Page;
        Page = function(e) {
            if (e = qt(e), t) return t.call(this, e);
        };
    }(), Object.defineProperty(t, "request", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: Ot
    }), function() {
        var t = Component;
        Component = function(e) {
            e = Ct(e), t && t.call(this, e);
        };
    }(), zt()), e && Object.assign(Lt, function() {
        Pt || wt();
        var t = {};
        return Rt.forEach(function(e) {
            t[e] = Yt(e);
        }), t;
    }() || {});
}

function Kt(t) {
    if (!j()) {
        (function(t) {
            null == (w = t || {}).requestFailMessageSize && (w.requestFailMessageSize = 256), 
            null == w.apiFailMessageSize && (w.apiFailMessageSize = 256);
        })(t || {}), function(t) {
            M = t;
        }(!0), X();
        var e = !0;
        null != w.plugin && (e = w.plugin), Gt(e);
    }
}

t.onNetworkStatusChange(function(t) {
    a.networkType = t.networkType;
});

var Bt = (Lt.config = Kt, Lt);

module.exports = Bt;