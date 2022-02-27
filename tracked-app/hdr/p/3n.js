var e = require("../@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = function(t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || "object" !== e(t) && "function" != typeof t) return {
        default: t
    };
    var o = r(n);
    if (o && o.has(t)) return o.get(t);
    var a = {}, u = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in t) if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
        var p = u ? Object.getOwnPropertyDescriptor(t, i) : null;
        p && (p.get || p.set) ? Object.defineProperty(a, i, p) : a[i] = t[i];
    }
    a.default = t, o && o.set(t, a);
    return a;
}(require("../m/zd/n"));

function r(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), n = new WeakMap();
    return (r = function(e) {
        return e ? n : t;
    })(e);
}

var n = {
    onShow: function() {
        try {
            this.$getLogger || (this.$getLogger = function() {
                return t.default.$ltracker;
            });
            var e = getApp();
            e && (e[t.logConstants.APP_HIDE_STATUS] = !1), (0, t.hookAppOnShow)(this);
        } catch (e) {}
    },
    onHide: function() {
        try {
            var e = getApp();
            e && (e[t.logConstants.APP_HIDE_STATUS] = !0), (0, t.hookAppOnHide)();
        } catch (e) {}
    }
};

exports.default = n;