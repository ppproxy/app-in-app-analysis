var e = require("../@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../@babel/runtime/helpers/objectSpread2"), r = function(t, r) {
    if (!r && t && t.__esModule) return t;
    if (null === t || "object" !== e(t) && "function" != typeof t) return {
        default: t
    };
    var a = o(r);
    if (a && a.has(t)) return a.get(t);
    var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var l in t) if ("default" !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var s = i ? Object.getOwnPropertyDescriptor(t, l) : null;
        s && (s.get || s.set) ? Object.defineProperty(n, l, s) : n[l] = t[l];
    }
    n.default = t, a && a.set(t, n);
    return n;
}(require("../m/zd/n"));

function o(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), r = new WeakMap();
    return (o = function(e) {
        return e ? r : t;
    })(e);
}

var a = {
    onLoad: function(e) {
        var o = this, a = +new Date();
        e && e.realStartTime && (this.localData = t(t({}, this.localData), {}, {
            __realStartTime: +e.realStartTime
        })), this.$root && (this.$root.__onLoadStartTime = a), this.$logAvailableTrace({
            end: a,
            type: "ON_LOAD"
        }), this.logProps && this.logProps.$whiteScreenConfig && Promise.resolve().then(function() {
            var e = o.logProps.$whiteScreenConfig, t = e.meaningFulSelectors, a = e.needJump, n = e.delay, i = new r.WhiteScreenListener({
                needJump: a,
                meaningFulSelectors: t,
                delay: n
            });
            try {
                o.$root.whiteListener = i.connect().start();
            } catch (e) {}
        });
    },
    onReady: function() {
        var e = +new Date();
        this.$root && (this.$root.__onReadyStartTime = e), this.$logAvailableTrace({
            end: e,
            type: "ON_READY"
        });
    },
    onHide: function() {
        this.localData = t(t({}, this.localData), {}, {
            __hasLogAvailable: !0
        });
        var e = getApp(), o = this.route;
        "pages/home/index" !== (void 0 === o ? "" : o) && (e[r.logConstants.PAGE_COLD_STATUS] = !0), 
        r.default.$ltracker.logPerf(r.PerfType.upload), this.$root.whiteListener && this.$root.whiteListener.stop();
    },
    onUnload: function() {
        var e = r.default.$ltracker, t = getApp() || {}, o = this.route;
        "pages/home/index" !== (void 0 === o ? "" : o) && (t[r.logConstants.PAGE_COLD_STATUS] = !0), 
        e.logPerf(r.PerfType.upload), t[r.GLOBAL_EXP_MAP] = {}, this.$root.whiteListener && this.$root.whiteListener.stop();
    }
};

exports.default = a;