var e = require("../@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = function(t, r) {
    if (!r && t && t.__esModule) return t;
    if (null === t || "object" !== e(t) && "function" != typeof t) return {
        default: t
    };
    var n = o(r);
    if (n && n.has(t)) return n.get(t);
    var a = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in t) if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var l = i ? Object.getOwnPropertyDescriptor(t, u) : null;
        l && (l.get || l.set) ? Object.defineProperty(a, u, l) : a[u] = t[u];
    }
    a.default = t, n && n.set(t, a);
    return a;
}(require("../m/zd/n")), r = require("../l/wa");

function o(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), r = new WeakMap();
    return (o = function(e) {
        return e ? r : t;
    })(e);
}

var n = {
    onLaunch: function(e) {
        try {
            var o = (0, r.getDebugSwitch)(), n = (0, r.getLogSwitch)(), a = o ? n : "dev" !== (0, 
            r.getEnv)();
            t.default.initActionTraceInfo().initIgnoreUpload(!a).initConsole("prod" !== (0, 
            r.getEnv)()).logAppLaunch(e).recordAppPerf(this);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            t.ALog.warn("monitor-app onLaunch error", e);
        }
    },
    onShow: function(e) {
        setTimeout(function() {
            t.default.$logOther(t.logConstants.EVENT_APP_ON_SHOW, {
                options: JSON.stringify(e)
            }), t.default.listenMemory();
        }, 0);
    },
    onHide: function() {
        setTimeout(function() {
            t.default.$logOther(t.logConstants.EVENT_APP_ON_HIDE), t.default.offListenMemory();
        }, 0);
    },
    onError: function(e) {
        try {
            t.default.$ltracker && t.default.$ltracker.logError(e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            t.ALog.error("monitor-app onError error", e);
        }
    },
    onPageNotFound: function(e) {
        var r = e || {}, o = r.isEntryPage, n = r.path, a = r.query, i = void 0 === a ? {} : a;
        t.default.$logOther(t.logConstants.EVENT_PAGE_NOT_FOUND, {
            path: n,
            isEntryPage: o,
            query: JSON.stringify(i)
        });
    },
    onUnhandledRejection: function(e) {
        try {
            t.default.$ltracker && t.default.$ltracker.logError(e.reason);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            t.ALog.error("monitor-app onUnhandledRejection error", e);
        }
    }
};

exports.default = n;