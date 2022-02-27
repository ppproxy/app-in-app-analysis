Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.formatLogData = function(e) {
    var o = (0, t.omit)(e, "logkey");
    return {
        logkey: e.logkey || "",
        params: o
    };
}, exports.generateKey = function(t) {
    var e = [];
    for (var o in t) e.push(t[o]);
    return e.join("-");
}, exports.getViewVisibleRate = function(t, e) {
    function o(t, e) {
        return e.left >= t.pLeftTop[0] && e.left <= t.pRightBottom[0] && e.top >= t.pLeftTop[1] && e.top <= t.pRightBottom[1];
    }
    var r = o(t, e), p = o(t, {
        left: e.left + e.width,
        top: e.top
    }), i = o(t, {
        left: e.left,
        top: e.top + e.height
    }), f = o(t, {
        left: e.left + e.width,
        top: e.top + e.height
    }), n = (a = 0, r && f && (a = e.size / e.size), a);
    var a;
    if (n > 0) return n;
    if ((n = function() {
        var o = 0, n = 0;
        r && p && !i && !f ? (o = e.width, n = t.pLeftBottom[1] - e.top) : !r && p && !i && f ? (o = t.pLeftTop[0] - e.left, 
        n = e.top) : !r && !p && i && f ? (o = e.width, n = t.pLeftTop[1] - e.top) : r && !p && i && !f && (o = t.pRightTop[0] - e.left, 
        n = e.top);
        return e.size > 0 ? Math.abs(o * n) / e.size : 0;
    }()) > 0) return n;
    if ((n = function() {
        var o = 0, n = 0;
        !r || p || i || f ? r || !p || i || f ? r || p || !i || f ? r || p || i || !f || (o = t.pLeftTop[0] - e.left, 
        n = t.pLeftTop[1] - e.top) : (o = t.pRightTop[0] - e.left, n = t.pRightTop[1] - e.top) : (o = t.pLeftBottom[0] - e.left, 
        n = t.pLeftBottom[1] - e.top) : (o = t.pRightBottom[0] - e.left, n = t.pRightBottom[1] - e.top);
        return e.size > 0 ? Math.abs(o * n) / e.size : 0;
    }()) > 0) return n;
    return n;
}, exports.parseDataSet = function(t) {
    var e = {};
    return Object.keys(t).forEach(function(o) {
        if (/^track(\S+)/.test(o)) {
            var r = o.replace(/^track(\S+)/, function(t, e) {
                return "".concat(e.substring(0, 1).toLocaleLowerCase()).concat(e.substring(1));
            });
            e[r] = t[o];
        }
    }), e;
};

var t = require("../../../l/wm");