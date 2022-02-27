function e(e, t) {
    for (var r = e.split("."), n = t.split("."), o = Math.max(e.length, t.length); r.length < o; ) r.push("0");
    for (;n.length < o; ) n.push("0");
    for (var i = 0; i < o; i++) {
        var s = parseInt(r[i], 10), u = parseInt(n[i], 10);
        if (s > u) return 1;
        if (s < u) return -1;
    }
    return 0;
}

var t, r;

function n() {
    return void 0 !== t ? t : t = wx.getSystemInfoSync();
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.compareVersion = e, exports.getDevicePixelRatio = function() {
    if (o) return o;
    var e = n();
    (o = e ? e.devicePixelRatio : void 0) || (o = 2);
    return o;
}, exports.getNetworkType = function() {
    return i || "4g";
}, exports.getSystemInfoSync = n, exports.isSupportWebp = function() {
    if (void 0 === r) {
        var t = (n() || {}).SDKVersion;
        r = e(void 0 === t ? "" : t, "2.9.0") >= 0;
    }
    return r;
};

var o;

var i;

wx.getNetworkType({
    success: function(e) {
        var t = e.networkType;
        i = t;
    }
}), wx.onNetworkStatusChange(function(e) {
    var t = e.networkType;
    i = t;
});