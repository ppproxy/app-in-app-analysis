var e, t, n = require("../../@babel/runtime/helpers/typeof");

module.exports = (e = {}, t = function(t, i) {
    if (!e[t]) return require(i);
    if (!e[t].status) {
        var o = e[t].m;
        o._exports = o._tempexports;
        var r = Object.getOwnPropertyDescriptor(o, "exports");
        r && r.configurable && Object.defineProperty(o, "exports", {
            set: function(e) {
                "object" === n(e) && e !== o._exports && (o._exports.__proto__ = e.__proto__, Object.keys(e).forEach(function(t) {
                    o._exports[t] = e[t];
                })), o._tempexports = e;
            },
            get: function() {
                return o._tempexports;
            }
        }), e[t].status = 1, e[t].func(e[t].req, o, o.exports);
    }
    return e[t].m.exports;
}, function(t, n, i) {
    e[t] = {
        status: 0,
        func: n,
        req: i,
        m: {
            exports: {},
            _tempexports: {}
        }
    };
}(1637215358185, function(e, t, i) {
    !function(e, o) {
        "object" == n(i) && void 0 !== t ? o(i) : "function" == typeof define && define.amd ? define([ "exports" ], o) : o((e = "undefined" != typeof globalThis ? globalThis : e || self).Aegis = {});
    }(this, function(e) {
        var t = function(e, n) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, n);
        };
        function i(e, n) {
            function i() {
                this.constructor = e;
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, 
            new i());
        }
        var o = function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }).apply(this, arguments);
        };
        Object.assign || Object.defineProperty(Object, "assign", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function(e) {
                if (null == e) throw new TypeError("Cannot convert first argument to object");
                for (var t = Object(e), n = 1; n < arguments.length; n++) if (null != (i = arguments[n])) for (var i = Object(i), o = Object.keys(Object(i)), r = 0, s = o.length; r < s; r++) {
                    var a = o[r], u = Object.getOwnPropertyDescriptor(i, a);
                    null != u && u.enumerable && (t[a] = i[a]);
                }
                return t;
            }
        });
        var r = (a.prototype.indexOf = function(e, t) {
            for (var n = 0; n < e.length; n++) if (e[n].callback === t) return n;
            return -1;
        }, a.prototype.on = function(e, t, n) {
            if (void 0 === n && (n = 0), this) {
                var i = this.eventsList[e];
                return i || (this.eventsList[e] = [], i = this.eventsList[e]), -1 !== this.indexOf(i, t) || i.push({
                    name: e,
                    type: n || 0,
                    callback: t
                }), this;
            }
        }, a.prototype.one = function(e, t) {
            this.on(e, t, 1);
        }, a.prototype.remove = function(e, t) {
            if (this) {
                var n = this.eventsList[e];
                if (!n) return null;
                if (t) return n.length && (t = this.indexOf(n, t), n.splice(t, 1)), this;
                try {
                    delete this.eventsList[e];
                } catch (e) {}
                return null;
            }
        }, a.prototype.clear = function() {
            this.eventsList = {};
        }, a), s = function(e) {
            try {
                return encodeURIComponent(decodeURIComponent(e));
            } catch (t) {
                return e;
            }
        };
        function a() {
            var e = this;
            this.emit = function(t, n) {
                if (e) {
                    var i;
                    if (null != (o = e.eventsList[t]) && o.length) for (var o = o.slice(), r = 0; r < o.length; r++) {
                        i = o[r];
                        try {
                            var s = i.callback.apply(e, [ n ]);
                            if (1 === i.type && e.remove(t, i.callback), !1 === s) break;
                        } catch (t) {
                            throw t;
                        }
                    }
                    return e;
                }
            }, this.eventsList = {};
        }
        function u(e, t) {
            return "string" == typeof e ? e.split("?")[t ? 1 : 0] || "" : e;
        }
        function c(e) {
            return "string" == typeof e && e.startsWith("//") ? "undefined" != typeof location && "https:" === location.protocol : /^https/.test(e);
        }
        function l(e, t) {
            var n;
            try {
                "string" == typeof e && (e = JSON.parse(e)), "function" == typeof (null === (n = null == t ? void 0 : t.ret) || void 0 === n ? void 0 : n.join) && (v = [].concat(t.ret.map(function(e) {
                    return e.toLowerCase();
                })));
                var i = Object.getOwnPropertyNames(e).filter(function(e) {
                    return -1 !== v.indexOf(e.toLowerCase());
                });
                return i.length ? "" + e[i[0]] : "unknown";
            } catch (e) {
                return "unknown";
            }
        }
        function f(e, t) {
            var n = (n = null === (n = e.api) || void 0 === n ? void 0 : n.errCode) && [].concat(n);
            return e = (e = null === (e = e.api) || void 0 === e ? void 0 : e.code) && [].concat(e), 
            n && -1 !== n.indexOf(t) || e && -1 === e.indexOf(t) || !n && !e && "0" !== t && "unknown" !== t;
        }
        function p(e) {
            if ("string" == typeof e) return e;
            try {
                return (JSON.stringify(e, (t = [], i = [], function(e, o) {
                    if (o instanceof Error) return "Error.message: " + o.message + " \n  Error.stack: " + o.stack;
                    if ("object" == n(o) && null !== o) {
                        var r = t.indexOf(o);
                        if (-1 !== r) return "[Circular " + i[r] + "]";
                        t.push(o), i.push(e || "root");
                    }
                    return o;
                }), 4) || "undefined").replace(/"/gim, "");
            } catch (e) {
                return "error happen when aegis stringify: \n " + e.message + " \n " + e.stack;
            }
            var t, i;
        }
        (V = {})[V.number = -1] = "number", V.string = "";
        var d, h, g, m, v = [ "ret", "retcode", "code", "errcode" ], y = function(e, t) {
            var n, i = {
                fetch: [],
                static: []
            }, r = {};
            return Array.isArray(e) ? e.forEach(function(e) {
                var t;
                null === (t = i[e.type]) || void 0 === t || t.push(e);
            }) : null === (n = i[e.type]) || void 0 === n || n.push(e), r.payload = JSON.stringify(o({
                duration: i
            }, t)), r;
        };
        function b(e) {
            return e.filter(function(t, n) {
                return "static" !== t.type || !e.find(function(e, i) {
                    return n !== i && t.url === e.url && 200 === t.status;
                });
            });
        }
        function w(e) {
            e.level === d.INFO_ALL && (e.level = d.INFO);
        }
        function O() {}
        function R(e, t) {
            Object.getOwnPropertyNames(e).forEach(function(n) {
                "function" == typeof e[n] && "constructor" !== n && (t ? t[n] = function() {} : e[n] = function() {});
            });
        }
        function P() {
            try {
                var e = getCurrentPages();
                return (e[e.length - 1] || {}).route || "";
            } catch (e) {
                return "";
            }
        }
        function x(e) {
            return new z(e);
        }
        ($ = d = d || {}).INFO_ALL = "-1", $.API_RESPONSE = "1", $.INFO = "2", $.ERROR = "4", 
        $.PROMISE_ERROR = "8", $.AJAX_ERROR = "16", $.SCRIPT_ERROR = "32", $.IMAGE_ERROR = "64", 
        $.CSS_ERROR = "128", $.CONSOLE_ERROR = "256", $.MEDIA_ERROR = "512", $.RET_ERROR = "1024", 
        $.REPORT = "2048", $.PV = "4096", $.EVENT = "8192", (K = h = h || {})[K.android = 1] = "android", 
        K[K.ios = 2] = "ios", K[K.windows = 3] = "windows", K[K.macos = 4] = "macos", K[K.linux = 5] = "linux", 
        K[K.devtools = 6] = "devtools", K[K.other = 100] = "other", (G = g = g || {})[G.unknown = 100] = "unknown", 
        G[G.wifi = 1] = "wifi", G[G.net2g = 2] = "net2g", G[G.net3g = 3] = "net3g", G[G.net4g = 4] = "net4g", 
        G[G.net5g = 5] = "net5g", G[G.net6g = 6] = "net6g", (te = m = m || {}).LOG = "log", 
        te.SPEED = "speed", te.PERFORMANCE = "performance", te.OFFLINE = "offline", te.WHITE_LIST = "whiteList", 
        te.VITALS = "vitals", te.PV = "pv", te.CUSTOM_PV = "customPV", te.EVENT = "event", 
        te.CUSTOM = "custom", te.SDK_ERROR = "sdkError";
        var E, S, T, L = function(e, t) {
            return function(n, i) {
                var o = t.logCreated;
                return "function" != typeof o ? (e("beforeWrite", n), i(n)) : (n = n.filter(function(e) {
                    return !1 !== o(e);
                }), e("beforeWrite", n), i(n));
            };
        }, C = function(e, t) {
            var n, i = [], o = e.config;
            return e.lifeCycle.on("destroy", function() {
                i.length = 0;
            }), function(e, r) {
                if (i.push(e), t && i.length >= t) return i = b(i), r(i.splice(0, i.length)), void (n && clearTimeout(n));
                n && clearTimeout(n), n = setTimeout(function() {
                    n = null, 0 < (i = b(i)).length && r(i.splice(0, i.length));
                }, o.delay);
            };
        }, k = function(e, t) {
            return Array.isArray(e) ? t(e.map(function(e) {
                return o(o({}, e), {
                    msg: "string" == typeof e.msg ? e.msg : [].concat(e.msg).map(p).join(" ")
                });
            })) : t(o(o({}, e), {
                msg: "string" == typeof e.msg ? e.msg : p(e.msg)
            }));
        }, N = function(e) {
            var t, n = !1, i = !1, o = !1, r = [];
            return e.lifeCycle.on("onConfigChange", function() {
                t && clearTimeout(t), t = setTimeout(function() {
                    var t;
                    !o && e.config && (o = !0, (t = void 0 === (t = e.config.whiteListUrl) ? "" : t) && e.send({
                        url: t,
                        type: m.WHITE_LIST
                    }, function(t) {
                        i = !0;
                        try {
                            var o = t.data || JSON.parse(t), s = o.retcode, a = o.result, u = void 0 === a ? {} : a;
                            if (0 === s) {
                                if (n = u.is_in_white_list, e.isWhiteList = n, u.shutdown) return void e.destroy();
                                0 <= u.rate && u.rate <= 1 && (e.config.random = u.rate);
                            }
                            e.isWhiteList && r.length ? A(e)(r.splice(0), function() {}) : !e.isWhiteList && r.length && (r.length = 0);
                            var c = e.config.onWhitelist;
                            "function" == typeof c && c(n);
                        } catch (t) {}
                    }, function(t) {
                        "403 forbidden" === t && e.destroy(), i = !0;
                    }), o = !1);
                }, e.config.uin ? 50 : 500);
            }), e.lifeCycle.on("destroy", function() {
                r.length = 0;
            }), function(e, t) {
                n ? t(e.concat(r.splice(0)).map(function(e) {
                    return w(e), e;
                })) : (e = e.filter(function(e) {
                    return e.level !== d.INFO && e.level !== d.API_RESPONSE ? (w(e), !0) : (i || (r.push(e), 
                    200 <= r.length && (r.length = 200)), !1);
                })).length && t(e);
            };
        }, _ = function(e) {
            return setTimeout(function() {
                var t;
                (t = void 0 === (t = e.config.pvUrl) ? "" : t) && e.send({
                    url: t,
                    type: m.PV
                }, function() {}, function(t) {
                    "403 forbidden" === t && e.destroy();
                });
            }, 100), function(e, t) {
                t(e);
            };
        }, j = function(e) {
            var t = {};
            return function(i, o) {
                var r, s;
                e.speedSample ? (s = "object" == n(e.repeat) ? e.repeat : {
                    repeat: e.repeat
                }, r = +s.speed || +s.repeat || 5, Array.isArray(i) ? (s = i.filter(function(e) {
                    var n = !t[e.url] || t[e.url] < r;
                    return t[e.url] = 1 + ~~t[e.url], n;
                })).length && o(s) : (!t[i.url] || t[i.url] < r) && (t[i.url] = 1 + ~~t[i.url], 
                o(i))) : o(i);
            };
        }, U = function(e) {
            var t = {};
            return function(n, i) {
                var o = "number" == typeof e.repeat ? e.repeat : 5;
                if (0 === o) return i(n);
                i(n.filter(function(e) {
                    return e.level !== d.ERROR && e.level !== d.PROMISE_ERROR && e.level !== d.AJAX_ERROR && e.level !== d.SCRIPT_ERROR && e.level !== d.IMAGE_ERROR && e.level !== d.CSS_ERROR && e.level !== d.MEDIA_ERROR || (t[e.msg] = t[e.msg] || 0, 
                    t[e.msg] += 1, !(t[e.msg] > o));
                }));
            };
        }, A = function(e) {
            return function(t, n) {
                return e.send({
                    url: e.config.url || "",
                    data: (i = t, (i = Array.isArray(i) ? i : [ i ]).map(function(e, t) {
                        return Object.getOwnPropertyNames(e).map(function(n) {
                            return s(n) + "[" + t + "]=" + (void 0 === e[n] ? "" : s(e[n]));
                        }).join("&");
                    }).join("&") + (i.length ? "&count=" + i.length : "")),
                    method: "post",
                    contentType: "application/x-www-form-urlencoded",
                    type: m.LOG,
                    log: t
                }, function() {
                    var i = e.config.onReport;
                    "function" == typeof i && t.forEach(function(e) {
                        i(e);
                    }), "function" == typeof n && n([]);
                }, function(t) {
                    "403 forbidden" === t && e.destroy();
                });
                var i;
            };
        }, I = function(e) {
            if (!e || !e.reduce || !e.length) throw new TypeError("createPipeline need at least one function param");
            return 1 === e.length ? function(t, n) {
                e[0](t, n || O);
            } : e.reduce(function(e, t) {
                return function(n, i) {
                    return void 0 === i && (i = O), e(n, function(e) {
                        return null == t ? void 0 : t(e, i);
                    });
                };
            });
        }, q = (Object.defineProperty(ue.prototype, "__version__", {
            get: function() {
                return console.warn("__version__ has discard, please use version"), "1.24.49";
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(ue.prototype, "LogType", {
            get: function() {
                return console.warn("LogType has discard, please use logType"), d;
            },
            enumerable: !1,
            configurable: !0
        }), ue.prototype.init = function(e) {
            this.setConfig(e);
            for (var t = 0; t < ue.installedPlugins.length; t++) try {
                ue.installedPlugins[t].patch(this);
            } catch (e) {
                this.sendSDKError(e);
            }
            this.lifeCycle.emit("onInited");
        }, ue.prototype.setConfig = function(e) {
            Object.assign(this.config, e);
            var t = (a = this.config).id, n = a.uin, i = a.version, o = a.ext1, r = a.ext2, s = a.ext3, a = (e = a.aid, 
            this.bean.id !== t || this.bean.uin !== n || this.bean.aid !== e);
            return this.bean.id = t || "", this.bean.uin = n || "", this.bean.version = i || "1.24.49", 
            this.bean.aid = e || "", o && (this.bean.ext1 = o), r && (this.bean.ext2 = r), s && (this.bean.ext3 = s), 
            a && this.lifeCycle.emit("onConfigChange", this.config), this.config;
        }, ue.use = function(e) {
            -1 === ue.installedPlugins.indexOf(e) && e.aegisPlugin && ue.installedPlugins.push(e);
        }, ue.unuse = function(e) {
            -1 !== (e = ue.installedPlugins.indexOf(e)) && ue.installedPlugins.splice(e, 1);
        }, ue.prototype.info = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = {
                level: d.INFO,
                msg: e
            };
            1 === e.length && e[0].msg && Object.assign(n, o({}, e[0]), {
                level: d.INFO
            }), this.normalLogPipeline(n);
        }, ue.prototype.infoAll = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = {
                level: d.INFO_ALL,
                msg: e
            };
            1 === e.length && e[0].msg && Object.assign(n, o({}, e[0]), {
                level: d.INFO_ALL
            }), this.normalLogPipeline(n);
        }, ue.prototype.report = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = {
                level: d.REPORT,
                msg: e
            };
            1 === e.length && e[0].msg && Object.assign(n, o({}, e[0])), this.normalLogPipeline(n);
        }, ue.prototype.error = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = {
                level: d.ERROR,
                msg: e
            };
            1 === e.length && e[0].msg && Object.assign(n, o({}, e[0]), {
                level: d.ERROR
            }), this.normalLogPipeline(n);
        }, ue.prototype.speedLogPipeline = function(e) {
            throw new Error('You need to override "speedLogPipeline" method');
        }, ue.prototype.reportPv = function(e) {
            var t, n = this;
            e && (console.warn("reportPv is deprecated, please use reportEvent"), t = "" + Object.getOwnPropertyNames(this.bean).filter(function(e) {
                return "id" !== e;
            }).map(function(e) {
                return e + "=" + n.bean[e];
            }).join("&"), this.send({
                url: this.config.url + "/" + e + "?" + t,
                addBean: !1,
                type: m.CUSTOM_PV
            }, function() {}, function(e) {
                "403 forbidden" === e && n.destroy();
            }));
        }, ue.prototype.reportEvent = function(e) {
            e && ((e = "string" == typeof e ? {
                name: e,
                ext1: this.config.ext1 || "",
                ext2: this.config.ext2 || "",
                ext3: this.config.ext3 || ""
            } : e).name ? this.eventPipeline(e) : console.warn("reportEvent params error"));
        }, ue.prototype.reportTime = function(e, t) {
            if ("object" == n(e)) return this.reportT(e);
            "string" == typeof e ? "number" == typeof t ? t < 0 || 6e4 < t ? console.warn("reportTime: duration must between 0 and 60000") : this.submitCustomTime(e, t) : console.warn("reportTime: second param must be number") : console.warn("reportTime: first param must be a string");
        }, ue.prototype.reportT = function(e) {
            var t = e.name, n = e.duration, i = void 0 === (o = e.ext1) ? "" : o, o = void 0 === (r = e.ext2) ? "" : r, r = void 0 === (r = e.ext3) ? "" : r;
            if (e = e.from, "string" == typeof t && "number" == typeof n && "string" == typeof i && "string" == typeof o && "string" == typeof r) {
                if (!(n < 0 || 6e4 < n)) return this.submitCustomTime(t, n, i, o, r, void 0 === e ? "" : e);
                console.warn("reportTime: duration must between 0 and 60000");
            } else console.warn("reportTime: params error");
        }, ue.prototype.time = function(e) {
            "string" == typeof e ? this.timeMap[e] ? console.warn("Timer " + e + " already exists") : this.timeMap[e] = Date.now() : console.warn("time: first param must be a string");
        }, ue.prototype.timeEnd = function(e) {
            "string" == typeof e ? this.timeMap[e] ? (this.submitCustomTime(e, Date.now() - this.timeMap[e]), 
            delete this.timeMap[e]) : console.warn("Timer " + e + " does not exist") : console.warn("timeEnd: first param must be a string");
        }, ue.prototype.submitCustomTime = function(e, t, n, i, o, r) {
            this.customTimePipeline({
                name: e,
                duration: t,
                ext1: n || this.config.ext1,
                ext2: i || this.config.ext2,
                ext3: o || this.config.ext3,
                from: r || void 0
            });
        }, ue.prototype.extendBean = function(e, t) {
            this.bean[e] = t;
        }, ue.prototype.send = function(e, t, n) {
            var i, o, r, s = this;
            I([ (o = e.type, function(e, t) {
                if (!e) return t(e);
                e = Array.isArray(e) ? e : [ e ], i.lifeCycle.emit("beforeRequest", e);
                var n = i.config.beforeRequest;
                (e = "function" == typeof n ? e.filter(function(e) {
                    return !1 !== n({
                        logs: e,
                        logType: o
                    });
                }) : e).length && t(e);
            }), function(i, o) {
                s.request(e, function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    o({
                        isErr: !1,
                        result: n,
                        logType: e.type,
                        logs: i
                    }), null == t || t.apply(void 0, n);
                }, function() {
                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    o({
                        isErr: !0,
                        result: t,
                        logType: e.type,
                        logs: i
                    }), null == n || n.apply(void 0, t);
                });
            }, (r = i = this, function(e, t) {
                r.lifeCycle.emit("afterRequest", e);
                var n = r.config.afterRequest;
                "function" == typeof n && !1 === n(e) || t(e);
            }) ])(e.log);
        }, ue.prototype.request = function(e, t, n) {
            throw new Error('You need to override "request" method');
        }, ue.prototype.sendSDKError = function(e) {
            this.send({
                url: this.config.url + "?id=1085&msg[0]=" + encodeURIComponent(p(e)) + "&level[0]=2&from=" + this.config.id + "&count=1&version=" + this.config.id + "(1.24.49)",
                addBean: !1,
                method: "get",
                type: m.SDK_ERROR
            });
        }, ue.prototype.destroy = function(e) {
            void 0 === e && (e = !1);
            var t, n, i = ue.instances.indexOf(this);
            -1 !== i && ue.instances.splice(i, 1);
            for (var o = ue.installedPlugins.length - 1; 0 <= o; o--) try {
                ue.installedPlugins[o].unpatch(this);
            } catch (e) {
                this.sendSDKError(e);
            }
            if (this.lifeCycle.emit("destroy"), this.lifeCycle.clear(), e) t = this, n = Object.getOwnPropertyDescriptors(t), 
            Object.keys(n).forEach(function(e) {
                n[e].writable && (t[e] = null);
            }), Object.setPrototypeOf(this, null); else {
                for (var r = this; r.constructor !== Object && R(r, this), r = Object.getPrototypeOf(r); ) ;
                0 === ue.instances.length && (R(e = Object.getPrototypeOf(this).constructor), R(ue));
            }
        }, ue.version = "1.24.49", ue.instances = [], ue.logType = d, ue.installedPlugins = [], 
        ue), F = (ae.prototype.patch = function(e) {
            this.canUse(e) && this.exist(e) && (this.instances.push(e), this.triggerInit(e), 
            this.triggerOnNewAegis(e));
        }, ae.prototype.unpatch = function(e) {
            -1 !== (e = this.instances.indexOf(e)) && this.instances.splice(e, 1);
        }, ae.prototype.countInstance = function() {
            return this.instances.length;
        }, ae.prototype.uninstall = function() {
            var e;
            null === (e = null === (e = this.option) || void 0 === e ? void 0 : e.destroy) || void 0 === e || e.apply(this);
        }, ae.prototype.walk = function(e) {
            var t = this;
            this.instances.forEach(function(n) {
                var i = t.canUse(n);
                i && e(n, i);
            });
        }, ae.prototype.canUse = function(e) {
            return !(!(e = this.getConfig(e)) || "object" != n(e)) || !!e;
        }, ae.prototype.getConfig = function(e) {
            return null === (e = e.config) || void 0 === e ? void 0 : e[this.name];
        }, ae.prototype.exist = function(e) {
            return -1 === this.instances.indexOf(e);
        }, ae.prototype.triggerInit = function(e) {
            var t;
            this.inited || (this.inited = !0, null === (t = null === (t = this.option) || void 0 === t ? void 0 : t.init) || void 0 === t || t.call(this.option, this.getConfig(e)));
        }, ae.prototype.triggerOnNewAegis = function(e) {
            var t;
            null === (t = null === (t = this.option) || void 0 === t ? void 0 : t.onNewAegis) || void 0 === t || t.call(this.option, e, this.getConfig(e));
        }, ae), M = wx || qq, D = function(e) {
            return function(e, t) {
                if ("string" == typeof e) {
                    if (e === t) return 1;
                    for (var n = e.split("."), i = t.split("."), o = Math.max(n.length, i.length), r = 0; r < o; r++) {
                        var s = ~~n[r], a = ~~i[r];
                        if (s < a) return;
                        if (a < s) return 1;
                    }
                }
            }(M.getSystemInfoSync().SDKVersion, "1.1.1") && M.canIUse ? M.canIUse(e) : !!M[e];
        }, H = new F({
            name: "offlineLog",
            onNewAegis: function(e) {
                if (M.getFileSystemManager) try {
                    var t = e.config, n = t.id, i = void 0 === n ? "" : n, o = t.uin, r = void 0 === o ? 0 : o, s = t.offlineUrl, a = void 0 === s ? "" : s, u = t.offlineLogLimit, c = new B({
                        limit: u
                    });
                    e.lifeCycle.on("beforeWrite", function(t) {
                        c.save2Offline(t = void 0 === t ? [] : t, e.config);
                    }), c.ready(function(t) {
                        var n = (e.bean || {}).aid, o = void 0 === n ? "" : n;
                        !t && i && (r || o) && e.send({
                            url: a + "/offlineAuto"
                        }, function(n) {
                            var s = (null == n ? void 0 : n.data).secretKey;
                            s && (t || c.getLogs({
                                id: i,
                                uin: r
                            }, function(t, n) {
                                t ? console.error(t) : e.send({
                                    url: a + "/offlineLog",
                                    data: {
                                        logs: n,
                                        secretKey: s,
                                        id: i,
                                        uin: r,
                                        aid: o
                                    },
                                    method: "post"
                                }, function() {
                                    c.clearLogs();
                                });
                            }));
                        });
                    });
                } catch (e) {
                    console.error(e);
                } else console.warn("[aegis-mp-sdk]unsupport getFileSystemManager offline log not work!");
            }
        }), B = (se.prototype.getLogs = function(e, t) {
            var n = this.fileSystem, i = this.filePath;
            n.readFile({
                filePath: i,
                encoding: "utf8",
                fail: function(e) {
                    console.error(e);
                },
                success: function(e) {
                    e = (void 0 === (e = e.data) ? "" : e).toString().split("\n").filter(function(e) {
                        return e;
                    }).map(function(e) {
                        return JSON.parse(e);
                    }), t(null, e);
                }
            });
        }, se.prototype.checkLimit = function(e, t) {
            void 0 === t && (t = function() {});
            var n = this.fileSystem, i = this.filePath, o = this.limitSize;
            n.readFile({
                filePath: i,
                encoding: "utf8",
                success: function(r) {
                    if ((r = (r = void 0 === (r = r.data) ? "" : r).toString() + e).length > o) {
                        for (var s = r.split("\n"), a = "", u = s.length - 1; 0 <= u && !(s[u] && (a = s[u] + "\n" + a).length > o); u--) ;
                        n.writeFile({
                            filePath: i,
                            data: a,
                            success: t
                        });
                    } else n.appendFile({
                        data: e,
                        filePath: i,
                        encoding: "utf8",
                        success: t,
                        fail: function(e) {
                            console.error(e);
                        }
                    });
                }
            });
        }, se), J = function(e) {
            for (var t, n = {
                unknown: /unknown|none/i,
                wifi: /wifi/i,
                net2g: /2g/i,
                net3g: /3g/i,
                net4g: /4g/i,
                net5g: /5g/i,
                net6g: /6g/i
            }, i = g.unknown, o = 0; o < Object.keys(n).length; o++) {
                var r = Object.keys(n)[o];
                if (null !== (t = n[r]) && void 0 !== t && t.test(e)) {
                    i = g[r];
                    break;
                }
            }
            return i;
        }, V = new F({
            name: "device",
            onNewAegis: function(e) {
                return t = this, o = function() {
                    return n = this, i = function(t) {
                        return this.setSystemInfo(e), this.refreshNetwork(e), this.setNetworkChange(e), 
                        [ 2 ];
                    }, a = {
                        label: 0,
                        sent: function() {
                            if (1 & s[0]) throw s[1];
                            return s[1];
                        },
                        trys: [],
                        ops: []
                    }, u = {
                        next: t(0),
                        throw: t(1),
                        return: t(2)
                    }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                        return this;
                    }), u;
                    function t(e) {
                        return function(t) {
                            return function(e) {
                                if (o) throw new TypeError("Generator is already executing.");
                                for (;a; ) try {
                                    if (o = 1, r && (s = 2 & e[0] ? r.return : e[0] ? r.throw || ((s = r.return) && s.call(r), 
                                    0) : r.next) && !(s = s.call(r, e[1])).done) return s;
                                    switch (r = 0, (e = s ? [ 2 & e[0], s.value ] : e)[0]) {
                                      case 0:
                                      case 1:
                                        s = e;
                                        break;

                                      case 4:
                                        return a.label++, {
                                            value: e[1],
                                            done: !1
                                        };

                                      case 5:
                                        a.label++, r = e[1], e = [ 0 ];
                                        continue;

                                      case 7:
                                        e = a.ops.pop(), a.trys.pop();
                                        continue;

                                      default:
                                        if (!((s = 0 < (s = a.trys).length && s[s.length - 1]) || 6 !== e[0] && 2 !== e[0])) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                            a.label = e[1];
                                            break;
                                        }
                                        if (6 === e[0] && a.label < s[1]) {
                                            a.label = s[1], s = e;
                                            break;
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(e);
                                            break;
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                    }
                                    e = i.call(n, a);
                                } catch (t) {
                                    e = [ 6, t ], r = 0;
                                } finally {
                                    o = s = 0;
                                }
                                if (5 & e[0]) throw e[1];
                                return {
                                    value: e[0] ? e[1] : void 0,
                                    done: !0
                                };
                            }([ e, t ]);
                        };
                    }
                    var n, i, o, r, s, a, u;
                }, new (i = (i = n = void 0) || Promise)(function(e, r) {
                    function s(e) {
                        try {
                            u(o.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function a(e) {
                        try {
                            u(o.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function u(t) {
                        var n;
                        t.done ? e(t.value) : ((n = t.value) instanceof i ? n : new i(function(e) {
                            e(n);
                        })).then(s, a);
                    }
                    u((o = o.apply(t, n || [])).next());
                });
                var t, n, i, o;
            },
            setSystemInfo: function(e) {
                var t = this;
                try {
                    D("getSystemInfo") && M.getSystemInfo({
                        success: function(n) {
                            var i = n.platform;
                            n = n.model, e.extendBean("platform", t.getPlatFormType(i)), e.extendBean("model", n);
                        }
                    });
                } catch (e) {}
            },
            getPlatFormType: function(e) {
                for (var t, n = {
                    android: /android/i,
                    ios: /ios/i,
                    windows: /windows/i,
                    macos: /mac/i,
                    devtools: /devtools/i
                }, i = h.other, o = 0; o < Object.keys(n).length; o++) {
                    var r = Object.keys(n)[o];
                    if (null !== (t = n[r]) && void 0 !== t && t.test(e)) {
                        i = h[r];
                        break;
                    }
                }
                return i;
            },
            setNetworkChange: function(e) {
                D("onNetworkStatusChange") && M.onNetworkStatusChange(function(t) {
                    t = J(t.networkType), e.extendBean("netType", t);
                });
            },
            setNetworkType: function(e) {
                D("getNetworkType") && M.getNetworkType({
                    success: function(t) {
                        t = J(t.networkType), e.extendBean("netType", t);
                    }
                });
            },
            refreshNetwork: function(e) {
                var t = this;
                this.timer && clearTimeout(this.timer), this.setNetworkType(e), this.timer = setTimeout(function() {
                    t.refreshNetwork(e);
                }, 1e4);
            }
        }), W = M.request, $ = (i(re, T = q), Object.defineProperty(re.prototype, "getBean", {
            get: function() {
                var e = this;
                return this.bean ? Object.getOwnPropertyNames(this.bean).map(function(t) {
                    return t + "=" + e.bean[t];
                }).join("&") + "&from=" + encodeURIComponent(P()) : "from=" + encodeURIComponent(P());
            },
            enumerable: !1,
            configurable: !0
        }), re.prototype.initOfflineLog = function() {
            re.use(H);
        }, re.prototype.uploadLogs = function(e, t) {
            this.lifeCycle.emit("uploadLogs", e = void 0 === e ? {} : e, t = void 0 === t ? {} : t);
        }, re.prototype.reportPv = function(e) {
            var t, n = this;
            e && (t = Object.getOwnPropertyNames(this.bean).filter(function(e) {
                return "id" !== e;
            }).map(function(e) {
                return e + "=" + n.bean[e];
            }).join("&") + "&from=" + encodeURIComponent(P()), this.send({
                url: this.config.url + "/" + e + "?" + t,
                addBean: !1
            }, function() {}, function() {}));
        }, re.sessionID = "session-" + Date.now(), re.asyncPluginIndex = 0, re), K = new F({
            name: "aid",
            onNewAegis: function(e) {
                this.initAid(function(t) {
                    e.bean.aid = t, e.config.aid = t;
                });
            },
            initAid: function(e) {
                M.getStorage({
                    key: "AEGIS_ID",
                    success: function(t) {
                        e(t.data);
                    },
                    fail: function() {
                        var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                            var t = 16 * Math.random() | 0;
                            return ("x" === e ? t : 3 & t | 8).toString(16);
                        });
                        M.setStorage({
                            key: "AEGIS_ID",
                            data: t,
                            success: function() {
                                e(t);
                            }
                        });
                    }
                });
            }
        }), G = (oe.prototype.prefixHandler = function(e) {
            e.aegisRequestStartTime = Date.now();
        }, oe.prototype.successHandler = function(e, t) {
            var n;
            this.callbacks.forEach(function(n) {
                var i;
                try {
                    null === (i = n.success) || void 0 === i || i.call(n, e, t);
                } catch (n) {}
            }), null === (n = t.success) || void 0 === n || n.call(t, e, t);
        }, oe.prototype.failHandler = function(e, t) {
            var n;
            this.callbacks.forEach(function(n) {
                var i;
                try {
                    null === (i = n.fail) || void 0 === i || i.call(n, e, t);
                } catch (n) {}
            }), null === (n = t.fail) || void 0 === n || n.call(t, e, t);
        }, oe.prototype.completeHandler = function(e, t) {
            var n;
            this.callbacks.forEach(function(n) {
                var i;
                try {
                    null === (i = n.complete) || void 0 === i || i.call(n, e, t);
                } catch (n) {}
            }), null === (n = t.complete) || void 0 === n || n.call(t, e, t);
        }, oe.prototype.override = function() {
            try {
                this.defineApiProperty();
            } catch (e) {
                console.warn("cannot override `" + this.apiName + "`, error is: " + e);
            } finally {
                this.isOverride = !0;
            }
        }, oe), Q = wx || qq, X = Q.request, z = (i(ie, S = G), ie.prototype.defineApiProperty = function() {
            var e = this;
            Object.defineProperty(Q, "request", {
                get: function() {
                    return e.hackHandler.bind(e);
                }
            });
        }, ie.prototype.hackHandler = function(e) {
            var t = this;
            return this.prefixHandler(e), new Promise(function(n, i) {
                X(o(o({}, e), {
                    success: function(i) {
                        t.successHandler(i, e), n(i);
                    },
                    fail: function(n) {
                        t.failHandler(n, e), i(n);
                    },
                    complete: function(n) {
                        t.completeHandler(n, e);
                    }
                }));
            });
        }, ie), Y = wx || qq, Z = null === (te = Y.cloud) || void 0 === te ? void 0 : te.callFunction, ee = (i(ne, E = G), 
        ne.prototype.defineApiProperty = function() {
            var e = this;
            Y.cloud && Y.cloud.callFunction && Object.defineProperty(Y.cloud, "callFunction", {
                get: function() {
                    return e.hackHandler.bind(e);
                }
            });
        }, ne.prototype.hackHandler = function(e) {
            var t = this;
            return this.prefixHandler(e), new Promise(function(n, i) {
                Z(o(o({}, e), {
                    success: function(i) {
                        t.successHandler(i, e), n(i);
                    },
                    fail: function(n) {
                        t.failHandler(n, e), i(n);
                    },
                    complete: function(n) {
                        t.completeHandler(n, e);
                    }
                }));
            });
        }, ne), te = (q = new F({
            name: "reportApiSpeed",
            override: !1,
            onNewAegis: function(e) {
                this.override || (this.override = !0, this.hackRequest(e.config), this.overrideCallFunction(e.config));
            },
            hackRequest: function(e) {
                var t = this;
                x({
                    success: function(n, i) {
                        var o = {
                            method: i.method || "get",
                            url: u(i.url),
                            duration: Date.now() - i.aegisRequestStartTime,
                            status: n.statusCode || 0,
                            isHttps: c(i.url),
                            type: "fetch"
                        }, r = null === (s = e.api) || void 0 === s ? void 0 : s.apiDetail, s = "req url: " + o.url + " \n                        \nreq method: " + o.method + " \n                        \nreq param: " + (r ? p(i.data) : "") + " \n                        \nres duration: " + o.duration + " \n                        \nres status: " + (n.statusCode || 0) + " \n                        \nres data: " + (r ? JSON.stringify(n.data) : "");
                        t.publishNormalLog({
                            msg: s,
                            level: d.API_RESPONSE
                        }), t.publishSpeedLog(o), ("function" == typeof (null === (r = e.api) || void 0 === r ? void 0 : r.retCodeHandler) ? (i = (r = e.api.retCodeHandler(n.data, i.url, i, n) || {}).code, 
                        r = void 0 !== (r = r.isErr) && r, o.ret = void 0 === i ? 0 : i, r) : (n = l(n.data, e.api), 
                        o.ret = n, f(e, n))) && t.publishNormalLog({
                            msg: s,
                            level: d.RET_ERROR
                        });
                    },
                    fail: function(e, n) {
                        n = {
                            method: n.method || "get",
                            url: u(n.url),
                            duration: Date.now() - n.aegisRequestStartTime,
                            status: 0,
                            isHttps: c(n.url),
                            type: "fetch"
                        }, t.publishSpeedLog(n);
                    }
                });
            },
            overrideCallFunction: function(e) {
                var t = this;
                new ee({
                    success: function(n, i) {
                        var o = {
                            method: "call",
                            url: "wx.cloud.callFunction." + i.name,
                            duration: Date.now() - i.aegisRequestStartTime,
                            status: 200,
                            type: "fetch",
                            errMsg: n.errMsg,
                            isHttps: !0
                        }, r = null === (s = e.api) || void 0 === s ? void 0 : s.apiDetail, s = "req url: " + o.url + "\n                        \nreq type: " + o.type + "\n                        \nres duration: " + o.duration + "\n                        \nres errMsg: " + o.errMsg + "\n                        \nres data: " + (r ? JSON.stringify(n.result) : "") + "\n                        ";
                        t.publishNormalLog({
                            msg: s,
                            level: d.API_RESPONSE
                        }), t.publishSpeedLog(o), ("function" == typeof (null === (r = e.api) || void 0 === r ? void 0 : r.retCodeCloudFunctionHandler) ? (i = (r = e.api.retCodeCloudFunctionHandler(n.result, i.name, i, n) || {}).code, 
                        r = void 0 !== (r = r.isErr) && r, o.ret = i, r) : (n = l(n.result, e.api), o.ret = n, 
                        f(e, n))) && t.publishNormalLog({
                            msg: s,
                            level: d.RET_ERROR
                        });
                    },
                    fail: function(e, n) {
                        e = {
                            method: "call",
                            url: "wx.cloud.callFunction." + n.name,
                            duration: Date.now() - n.aegisRequestStartTime,
                            status: 0,
                            type: "fetch",
                            errMsg: e.errMsg,
                            isHttps: !0
                        }, t.publishSpeedLog(e);
                    }
                });
            },
            publishSpeedLog: function(e) {
                this.$walk(function(t) {
                    t.speedLogPipeline(e);
                });
            },
            publishNormalLog: function(e) {
                this.$walk(function(t) {
                    t.normalLogPipeline(e);
                });
            }
        }), new F({
            name: "onError",
            onNewAegis: function(e) {
                e = e.config, this.listenError(), this.hackRequest(e);
            },
            listenError: function() {
                var e = this;
                M.onError(function(t) {
                    t && e.publishErrorLog({
                        msg: t,
                        level: d.ERROR
                    });
                }), D("onUnhandledRejection") && M.onUnhandledRejection(function(t) {
                    (t = t.reason) && e.publishErrorLog({
                        msg: t,
                        level: d.PROMISE_ERROR
                    });
                });
            },
            publishErrorLog: function(e) {
                this.$walk(function(t) {
                    t.normalLogPipeline(e);
                });
            },
            hackRequest: function(e) {
                var t = this;
                x({
                    complete: function(n, i) {
                        var o, r = n.errMsg, s = n.statusCode, a = n.data;
                        n = null === (n = e.api) || void 0 === n ? void 0 : n.apiDetail, e.hostUrl && -1 < (null === (o = i.url) || void 0 === o ? void 0 : o.indexOf(e.hostUrl)) || (o = "", 
                        -1 < r.indexOf("timeout") ? o = "timeout" : -1 < r.indexOf("fail") || !s || s < 0 ? o = "failed" : 400 <= s && (o = "error"), 
                        o && t.publishErrorLog({
                            msg: "AJAX_ERROR: request " + o + "\n                  \nres status: " + (s || 0) + "\n                  \nres duration: " + (Date.now() - i.aegisRequestStartTime) + "\n                  \nres data: " + (n ? p(a) : "") + "\n                  \nreq url: " + i.url + "\n                  \nreq method: " + (i.method || "get") + "\n                  \nreq param: " + (n ? p(i.data) : "") + "\n                  \nerrMsg: " + r.slice(0, 1e3),
                            level: d.AJAX_ERROR
                        }));
                    }
                });
            }
        }));
        function ne() {
            return null !== E && E.apply(this, arguments) || this;
        }
        function ie() {
            return null !== S && S.apply(this, arguments) || this;
        }
        function oe(e) {
            this.isOverride = !1, this.callbacks = [], this.isOverride || this.override(), this.callbacks.push(e);
        }
        function re(e) {
            var t, i = T.call(this, e) || this;
            i.originRequest = W, i.speedLogPipeline = I([ j(i.config), C(i), (t = i, function(e, n) {
                D("getNetworkType") ? M.getNetworkType({
                    success: function(i) {
                        i = J(i.networkType), t.extendBean("netType", i), n(e);
                    }
                }) : n(e);
            }), function(e, t) {
                i.lifeCycle.emit("beforeReportSpeed", e);
                var n = i.config.beforeReportSpeed;
                if ((e = "function" == typeof n ? e.filter(function(e) {
                    return !1 !== n(e);
                }) : e).length) return t(e);
            }, function(e) {
                i.send({
                    url: "" + i.config.speedUrl,
                    method: "post",
                    data: y(e, i.bean)
                });
            } ]), i.requestQueue = [], i.requesting = !1, i.request = function(e, t, o) {
                if (e.url && i.bean.id) if (/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(String(i.bean.aid))) {
                    if (!(i.requesting || D("getNetworkType") && void 0 === i.bean.netType)) {
                        i.requesting = !0;
                        var r, s = e.url;
                        i.config.whiteListUrl === s && (r = t, t = function(e) {
                            null == r || r(JSON.stringify(e.data));
                        }), !1 !== e.addBean && (s = s + (-1 === s.indexOf("?") ? "?" : "&") + i.getBean);
                        var a = e.method || "get", u = function() {
                            i.requesting = !1;
                            var e = i.requestQueue.shift();
                            e && i.send(e.options, e.success, e.fail);
                        }, c = e, l = i.config.onBeforeRequest;
                        if (!(c = l ? l(e, i) : c) || !c.url) {
                            var f = "";
                            return c || (f = "Sending request blocked", console.log(f)), c.url || (f = "Please handle the parameters reasonably, options.url is necessary", 
                            console.warn(f)), null == o || o(f), u(), !1;
                        }
                        return f = i.config.enableHttp2 || !1, "get" === a ? (s = function(e, t) {
                            if ("string" != typeof e) return "";
                            if ("object" == n(t) && t) {
                                var i = Object.getOwnPropertyNames(t).map(function(e) {
                                    var n = t[e];
                                    return e + "=" + ("string" == typeof n ? encodeURIComponent(n) : encodeURIComponent(JSON.stringify(n)));
                                }).join("&").replace(/eval/gi, "evaI");
                                return e + (-1 === e.indexOf("?") ? "?" : "&") + i;
                            }
                            return e;
                        }(s, c.data), i.originRequest({
                            url: s,
                            enableHttp2: f,
                            success: t,
                            fail: o,
                            complete: u
                        })) : ("string" == typeof c.data && (c.data = c.data.replace(/eval/gi, "evaI")), 
                        i.originRequest({
                            url: s,
                            enableHttp2: f,
                            header: c.contentType ? {
                                "content-type": c.contentType
                            } : void 0,
                            method: "POST",
                            data: c.data,
                            success: t,
                            fail: o,
                            complete: u
                        })), !0;
                    }
                    i.requestQueue.push({
                        options: e,
                        success: t,
                        fail: o
                    });
                } else i.requestQueue.push({
                    options: e,
                    success: t,
                    fail: o
                });
            };
            try {
                e.offlineLog && i.initOfflineLog(), i.init(e), i.extendBean("sessionId", re.sessionID), 
                i.extendBean("referer", (D("getLaunchOptionsSync") ? M.getLaunchOptionsSync() : {
                    scene: ""
                }).scene || "");
            } catch (e) {
                console.warn(e), console.log("%cThe above error occurred in the process of initializing Aegis, which will affect your normal use of Aegis.\nIt is recommended that you contact us for feedback and thank you for your support.", "color: red"), 
                i.sendSDKError(e);
            }
            return i;
        }
        function se(e) {
            var t, n, i = this, o = (e = void 0 === (e = (o = void 0 === e ? {} : e).path) ? "/.aegis.offline.log" : e, 
            void 0 === (o = o.limit) ? 2e4 : o);
            this.offlineBuffer = [], this.insertLog = (t = null, n = [], function(e) {
                n = n.concat(e), t = t || setTimeout(function() {
                    t = null;
                    var e, o = i.fileSystem, r = i.filePath, s = n.map(function(e) {
                        return JSON.stringify(e);
                    }).join("\n") + "\n";
                    s && (e = function(e) {
                        e ? i.checkLimit(s, function() {
                            n = [];
                        }) : o.writeFile({
                            data: s,
                            filePath: r,
                            encoding: "utf8",
                            fail: function(e) {
                                console.error(e);
                            },
                            success: function() {
                                n = [];
                            }
                        });
                    }, o.access({
                        path: r,
                        success: function() {
                            e(!0);
                        },
                        fail: function() {
                            e();
                        }
                    }));
                }, 2e3);
            }), this.ready = function(e) {
                i.fileSystem ? setTimeout(function() {
                    e(null);
                }, 0) : (e(new Error("getFileSystemManager file")), i.offlineLog = !1);
            }, this.clearLogs = function() {
                var e = i.fileSystem, t = i.filePath;
                e.writeFile({
                    filePath: t,
                    data: "",
                    fail: function() {
                        e.unlinkSync(t);
                    }
                });
            }, this.save2Offline = function(e, t) {
                e = (e = Array.isArray(e) ? e : [ e ]).map(function(e) {
                    return "string" == typeof e && (e = {
                        msg: e
                    }), function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        if (0 === e.length) throw new TypeError("Cannot convert undefined or null to object");
                        for (var n = Object(e[0]), i = 1; i < e.length; i++) {
                            var o = e[i];
                            if (null !== o) for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r]);
                        }
                        return n;
                    }({
                        id: t.id,
                        uin: t.uin,
                        time: +Date.now(),
                        version: t.version,
                        from: P()
                    }, e);
                }), i.fileSystem ? i.insertLog(e) : (i.fileSystem || i.offlineBuffer.length || i.ready(function(e) {
                    e ? console.error(e) : i.offlineBuffer.length && (i.addLogs(i.offlineBuffer), i.offlineBuffer = []);
                }), i.offlineBuffer = i.offlineBuffer.concat(e));
            }, this.addLogs = function(e) {
                i.fileSystem && i.insertLog(e);
            }, this.filePath = M.env.USER_DATA_PATH + e, this.fileSystem = M.getFileSystemManager(), 
            this.limitSize = o;
        }
        function ae(e) {
            this.aegisPlugin = !0, this.name = "", this.instances = [], this.inited = !1, e.$walk = this.walk.bind(this), 
            e.$getConfig = this.getConfig.bind(this), this.option = e, this.name = e.name;
        }
        function ue(e) {
            var t, n, i = this;
            this.config = {
                version: 0,
                delay: 1e3,
                onError: !0,
                repeat: 5,
                random: 1,
                aid: !0,
                device: !0,
                pagePerformance: !0,
                webVitals: !0,
                speedSample: !0,
                hostUrl: "https://aegis.qq.com",
                url: "",
                offlineUrl: "",
                whiteListUrl: "",
                pvUrl: "",
                speedUrl: "",
                customTimeUrl: "",
                performanceUrl: "",
                webVitalsUrl: "",
                eventUrl: ""
            }, this.isWhiteList = !1, this.lifeCycle = new r(), this.bean = {}, this.normalLogPipeline = I([ C(this, 5), k, function(e, n) {
                if ("number" != typeof t.config.random && (console.warn("random must in [0, 1], default is 1."), 
                t.config.random = 1), Math.random() < t.config.random) return n(e);
            }, U((t = this).config), L(this.lifeCycle.emit, this.config), _(this), N(this), function(e, t) {
                var n = JSON.parse(JSON.stringify(e));
                i.lifeCycle.emit("beforeReport", n);
                var o = i.config.beforeReport;
                (e = "function" == typeof o ? e.filter(function(e) {
                    return !1 !== o(e);
                }) : e).length && t(e);
            }, A(this) ]), this.eventPipeline = I([ C(this, 5), function(e) {
                var t = e.map(function(e) {
                    return {
                        name: e.name,
                        ext1: e.ext1 || i.config.ext1 || "",
                        ext2: e.ext2 || i.config.ext2 || "",
                        ext3: e.ext3 || i.config.ext3 || ""
                    };
                });
                return i.send({
                    url: i.config.eventUrl + "?payload=" + encodeURIComponent(JSON.stringify(t)),
                    type: m.EVENT,
                    log: e
                }, function() {}, function(e) {
                    "403 forbidden" === e && i.destroy();
                });
            } ]), this.timeMap = {}, this.customTimePipeline = I([ C(this, 5), function(e) {
                return i.send({
                    url: i.config.customTimeUrl + "?payload=" + encodeURIComponent(JSON.stringify({
                        custom: e
                    })),
                    type: m.CUSTOM,
                    log: e
                }, function() {}, function(e) {
                    "403 forbidden" === e && i.destroy();
                });
            } ]), this.config = (n = this.config, void 0 === (e = e.hostUrl) && (e = "https://aegis.qq.com"), 
            n.url = n.url || e + "/collect", n.offlineUrl = n.offlineUrl || e + "/offline", 
            n.whiteListUrl = n.whiteListUrl || e + "/collect/whitelist", n.pvUrl = n.pvUrl || e + "/collect/pv", 
            n.eventUrl = n.eventUrl || e + "/collect/events", n.speedUrl = n.speedUrl || e + "/speed", 
            n.customTimeUrl = n.customTimeUrl || e + "/speed/custom", n.performanceUrl = n.performanceUrl || e + "/speed/performance", 
            n.webVitalsUrl = n.webVitalsUrl || e + "/speed/webvitals", n), ue.instances.push(this);
        }
        G = new F({
            name: "reportAssetSpeed",
            isStart: !1,
            onNewAegis: function(e) {
                this.isStart || (this.isStart = !0, this.start(e));
            },
            start: function() {
                var e = this;
                M.getPerformance && M.getPerformance().createObserver(function(t) {
                    t.getEntries().forEach(function(t) {
                        !t.duration || t.duration <= 0 || "script" === t.entryType && e.publishAssetLog(t);
                    });
                }).observe({
                    entryTypes: [ "script" ]
                });
            },
            generateLog: function(e) {
                return {
                    url: u(e.path || e.moduleName) + "js",
                    method: "get",
                    duration: Number(e.duration.toFixed(2)),
                    status: 200,
                    type: "static",
                    isHttps: !0,
                    urlQuery: "",
                    domainLookup: 0,
                    connectTime: 0
                };
            },
            publishAssetLog: function(e) {
                var t = this;
                this.$walk(function(n) {
                    n.speedLogPipeline(t.generateLog(e));
                });
            }
        }), F = new F({
            name: "pagePerformance",
            onNewAegis: function(e) {
                try {
                    D("getPerformance") && this.reportPerformance(e), this.setPagePV(e), this.reportSetDataTiming(e);
                } catch (e) {}
            },
            reportPerformance: function(e) {
                var t, n = this;
                null == (t = null == (t = M.getPerformance()) ? void 0 : t.createObserver(function(t) {
                    var i = {}, o = (s = t.getEntries()).find(function(e) {
                        return "appLaunch" === e.name && 0 < e.duration;
                    }), r = s.find(function(e) {
                        return "firstRender" === e.name && 0 < e.duration;
                    }), s = (t = s.find(function(e) {
                        return "evaluateScript" === e.name && 0 < e.duration;
                    }), s.find(function(e) {
                        return "route" === e.name && 0 < e.duration;
                    }));
                    o && (i.appLaunch = o.duration), r && (i.firstScreenTiming = r.duration), t && (i.scriptEvaluateTiming = t.duration), 
                    s && (i.pageRouteTiming = s.duration), n.publish(i, e);
                })) || t.observe({
                    entryTypes: [ "navigation", "render", "script" ]
                });
            },
            publish: function(e, t) {
                var n, i, o = [], r = this.$getConfig(t), s = -1 === (null === (n = t.config.performanceUrl) || void 0 === n ? void 0 : n.indexOf("?")) ? "?" : "&";
                for (i in e) o.push(i + "=" + e[i]);
                "function" == typeof r.urlHandler ? this.$walk(function(e) {
                    e.send({
                        url: t.config.performanceUrl + s + o.join("&") + "&from=" + (encodeURIComponent(r.urlHandler()) || window.location.href),
                        beanFilter: [ "from" ],
                        type: m.PERFORMANCE
                    });
                }) : this.$walk(function(e) {
                    e.send({
                        url: t.config.performanceUrl + s + o.join("&"),
                        type: m.PERFORMANCE
                    });
                });
            },
            setPagePV: function(e) {
                var t = this;
                M.onAppRoute && M.onAppRoute(function(e) {
                    "appLaunch" !== e.openType && t.$walk(function(e) {
                        e.send({
                            url: "" + e.config.pvUrl,
                            type: m.PV
                        });
                    });
                });
            },
            reportSetDataTiming: function(e) {
                var t = I([ C(e, 5), function(t) {
                    t = t.map(function(e) {
                        return {
                            component: e.from,
                            duration: e.duration,
                            fields: e.dataPaths.sort().join(";")
                        };
                    }), e.send({
                        url: e.config.customTimeUrl + "?payload=" + encodeURIComponent(JSON.stringify({
                            miniProgramData: t
                        })),
                        type: m.CUSTOM,
                        log: t
                    });
                } ]), n = Page, i = Component, o = e.config.updatePerformanceReportThreshold;
                (!o || isNaN(+o) || o < 5) && (o = 5), Page = function(e) {
                    var i = e.onReady;
                    return e.onReady = function() {
                        var e = this;
                        return "function" == typeof this.setUpdatePerformanceListener && this.setUpdatePerformanceListener({
                            withDataPaths: !0
                        }, function(n) {
                            var i = n.updateStartTimestamp, r = n.updateEndTimestamp;
                            n = void 0 === (n = n.dataPaths) ? [] : n, i = r - i, isNaN(i) || i < o || (n = {
                                duration: i,
                                from: e.is,
                                dataPaths: n
                            }, t(n));
                        }), null == i ? void 0 : i.call(this);
                    }, n(e);
                }, Component = function(e) {
                    var n = e.attached;
                    return e.attached = function() {
                        var e = this;
                        return "function" == typeof this.setUpdatePerformanceListener && this.setUpdatePerformanceListener({
                            withDataPaths: !0
                        }, function(n) {
                            var i = n.updateStartTimestamp, r = n.updateEndTimestamp;
                            n = n.dataPaths, i = r - i, isNaN(i) || i < o || (n = {
                                duration: i,
                                from: e.is,
                                dataPaths: n
                            }, t(n));
                        }), null == n ? void 0 : n.call(this);
                    }, i(e);
                };
            }
        }), $.use(te), $.use(q), $.use(K), $.use(G), $.use(F), $.use(V), e.HackCloud = ee, 
        e.default = $, Object.defineProperty(e, "__esModule", {
            value: !0
        });
    });
}, function(e) {
    return t({}[e], e);
}), t(1637215358185));