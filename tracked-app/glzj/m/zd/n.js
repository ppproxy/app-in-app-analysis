var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "ALog", {
    enumerable: !0,
    get: function() {
        return o.ALog;
    }
}), Object.defineProperty(exports, "AUTO_EXP_DURATION", {
    enumerable: !0,
    get: function() {
        return i.AUTO_EXP_DURATION;
    }
}), Object.defineProperty(exports, "EXP_ELEMENT", {
    enumerable: !0,
    get: function() {
        return i.EXP_ELEMENT;
    }
}), Object.defineProperty(exports, "GLOBAL_EXP_MAP", {
    enumerable: !0,
    get: function() {
        return i.GLOBAL_EXP_MAP;
    }
}), Object.defineProperty(exports, "OBSERVERS", {
    enumerable: !0,
    get: function() {
        return i.OBSERVERS;
    }
}), Object.defineProperty(exports, "PerfType", {
    enumerable: !0,
    get: function() {
        return o.PerfType;
    }
}), Object.defineProperty(exports, "WhiteScreenListener", {
    enumerable: !0,
    get: function() {
        return i.WhiteScreenListener;
    }
}), exports.default = void 0, Object.defineProperty(exports, "getCurrentRoute", {
    enumerable: !0,
    get: function() {
        return l.getCurrentRoute;
    }
}), Object.defineProperty(exports, "getPageName", {
    enumerable: !0,
    get: function() {
        return l.getPageName;
    }
}), Object.defineProperty(exports, "handleInitExp", {
    enumerable: !0,
    get: function() {
        return i.handleInitExp;
    }
}), Object.defineProperty(exports, "handleReconnectExp", {
    enumerable: !0,
    get: function() {
        return i.handleReconnectExp;
    }
}), Object.defineProperty(exports, "handleRemoveExp", {
    enumerable: !0,
    get: function() {
        return i.handleRemoveExp;
    }
}), Object.defineProperty(exports, "handleUploadExp", {
    enumerable: !0,
    get: function() {
        return i.handleUploadExp;
    }
}), Object.defineProperty(exports, "hookAppOnHide", {
    enumerable: !0,
    get: function() {
        return o.hookAppOnHide;
    }
}), Object.defineProperty(exports, "hookAppOnShow", {
    enumerable: !0,
    get: function() {
        return o.hookAppOnShow;
    }
}), Object.defineProperty(exports, "hookPageOnHide", {
    enumerable: !0,
    get: function() {
        return o.hookPageOnHide;
    }
}), Object.defineProperty(exports, "hookPageOnLoad", {
    enumerable: !0,
    get: function() {
        return o.hookPageOnLoad;
    }
}), Object.defineProperty(exports, "hookPageOnShow", {
    enumerable: !0,
    get: function() {
        return o.hookPageOnShow;
    }
}), Object.defineProperty(exports, "logConstants", {
    enumerable: !0,
    get: function() {
        return c.default;
    }
}), exports.sdkVersion = void 0;

var t = require("../../@babel/runtime/helpers/objectSpread2"), r = require("../../@babel/runtime/helpers/classCallCheck"), n = require("../../@babel/runtime/helpers/createClass"), o = require("./zb/zm"), a = e(require("../zt")), i = require("./z0/n"), l = require("./zl"), c = e(require("./zt")), u = e(require("./z0/zk")), p = require("../../p/wx"), s = a.default.MONITOR_CONFIG, f = void 0 === s ? {} : s, g = (0, 
l.getOriginMiniType)();

exports.sdkVersion = "2.0.20";

var h = +new Date(), d = (0, l.initTracker)({
    bizType: "KOUBEI",
    app: l.platformMap[g],
    debug: !1,
    needLog: !0,
    commitChannel: f.COMMIT_CHANNEL || {},
    aemConfig: {
        pid: f.PROJECT_ID || ""
    },
    observer: function(e) {
        var t = e || {}, r = t.params, n = void 0 === r ? {} : r, a = t.logType, i = n.biz, l = void 0 === i ? {} : i, c = "".concat(a, "|").concat(n.logType || n.type || "", " ").concat(n.logKey || l.name || "", " ---------");
        o.ALog.info(c, e, !1);
    }
}), O = function() {
    function e() {
        r(this, e), this.$ltracker = d;
    }
    return n(e, [ {
        key: "$logAppear",
        value: function(e) {
            (0, i.handleUploadExp)(e);
        }
    }, {
        key: "$logReinit",
        value: function(e) {
            i.handleReconnectExp.call(e);
        }
    }, {
        key: "$logExpo",
        value: function(e, t) {
            if ((0, l.checkSpmIdValid)(e)) throw new Error("spmId is not valid!");
            t || (t = Object.create(null)), this.$ltracker && this.$ltracker.expo(e, t);
        }
    }, {
        key: "$logClick",
        value: function(e, t) {
            if (!e || "string" != typeof e) throw new Error("spmId is not empty!");
            t || (t = Object.create(null)), this.$ltracker && this.$ltracker.click(e, t);
        }
    }, {
        key: "$logOther",
        value: function(e, t) {
            if (!e || "string" != typeof e) throw new Error("spmId is not empty!");
            t || (t = Object.create(null)), this.$ltracker && this.$ltracker.other(e, t);
        }
    }, {
        key: "$logAvailableTrace",
        value: function(r) {
            try {
                var n = getApp() || {}, a = (0, l.getPageName)((0, l.getCurrentRoute)());
                if (!a) return;
                var i = n[c.default.PAGE_NAVIGATE_START], u = this.localData ? this.localData.__realStartTime : "", p = n[c.default.PAGE_COLD_STATUS], s = !!this.localData && this.localData.__hasLogAvailable, f = !1, g = function(t) {
                    var r = t || {}, n = r.end, l = r.type, g = void 0 === l ? "AVAILABLE" : l, h = r.extInfo, d = void 0 === h ? {} : h, O = +new Date(), b = /^AVAILABLE/.test(g);
                    if (!b || !s) if (b && (f = !0), u && !p) {
                        var P = (n || O) - u;
                        if (+P > c.default.ValuableCostTime) return;
                        e.$ltracker && e.$ltracker.logPerf(o.PerfType.mark, {
                            name: "PAGE_".concat(a, "_").concat(g, "_COLD"),
                            markDuration: P,
                            extInfo: d,
                            instant: !1
                        });
                    } else if (i && !s) {
                        var E = (n || O) - i;
                        if (+E > c.default.ValuableCostTime) return;
                        e.$ltracker && e.$ltracker.logPerf(o.PerfType.mark, {
                            name: "PAGE_".concat(a, "_").concat(g),
                            markDuration: E,
                            extInfo: d,
                            instant: !1
                        });
                    }
                };
                if ("[object Array]" === Object.prototype.toString.call(r) ? r.forEach(function(e) {
                    g(e);
                }) : g(r), !f) return;
                n[c.default.PAGE_COLD_STATUS] = !0, this.localData = t(t({}, this.localData), {}, {
                    __hasLogAvailable: !0
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                o.ALog.warn("monitor-mixin $logAvailableTrace error", e);
            }
        }
    }, {
        key: "bindExp",
        value: function(e) {
            if ("Exp" === e.type) if ("" !== e.currentTarget.id) {
                var r = e.detail || {};
                this.logProps = this.logProps || {}, this.logProps[i.OBSERVERS] = this.logProps[i.OBSERVERS] || [];
                var n = this;
                Object.prototype.hasOwnProperty.call(this, "$origincomponent") && (n = this.$origincomponent), 
                Object.prototype.hasOwnProperty.call(this, "$originpage") && (n = this.$originpage);
                var a = new u.default(t(t({}, r), {}, {
                    context: n,
                    selector: "#".concat(e.currentTarget.id)
                }));
                a.connect(), this.logProps[i.OBSERVERS].push(a);
            } else o.ALog.error("请为曝光元素加上唯一id");
        }
    }, {
        key: "initActionTraceInfo",
        value: function() {
            var e = getApp();
            return e && (e[c.default.APP_ACTION_INFO] = {
                pvId: "",
                actionId: "",
                times: 1e3
            }), this;
        }
    }, {
        key: "initIgnoreUpload",
        value: function(e) {
            return this.$ltracker && this.$ltracker.setInitInfo({
                debug: e
            }), this;
        }
    }, {
        key: "initConsole",
        value: function(e) {
            return this.$ltracker && this.$ltracker.setInitInfo({
                needLog: e
            }), this;
        }
    }, {
        key: "logAppLaunch",
        value: function(e) {
            return this.$logOther(c.default.EVENT_APP_ON_LAUNCH, {
                options: JSON.stringify(e)
            }), this;
        }
    }, {
        key: "recordAppPerf",
        value: function(e) {
            var t = (0, p.getGlobalParams)();
            return this.$ltracker && this.$ltracker.logPerf(o.PerfType.mark, {
                name: c.default.EVENT_APP_CONTAINER_INIT,
                markDuration: +new Date() - h,
                instant: !1
            }, t), e.$root && (e.$root[c.default.APP_START_TIME] = h), this;
        }
    }, {
        key: "listenMemory",
        value: function() {
            return wx.canIUse("onMemoryWarning") && wx.onMemoryWarning(function(e) {
                var t = "TRIM_MEMORY_RUNNING_LOW";
                if (e) switch (e.level) {
                  case 5:
                    t = "TRIM_MEMORY_RUNNING_MODERATE";
                    break;

                  case 10:
                    t = "TRIM_MEMORY_RUNNING_LOW";
                    break;

                  case 15:
                    t = "TRIM_MEMORY_RUNNING_CRITICAL";
                }
                this.$ltracker && this.$ltracker.other(c.default.EVENT_APP_MEMORY_RECORD, {
                    levelString: t
                });
            }), this;
        }
    }, {
        key: "offListenMemory",
        value: function() {
            return wx.canIUse("offMemoryWarning") && wx.offMemoryWarning(), this;
        }
    } ]), e;
}();

O.$ltracker = d;

var b = new O();

exports.default = b;