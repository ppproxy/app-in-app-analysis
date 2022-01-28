Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getPrevPageData = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "params", r = null;
    try {
        var a = getCurrentPages(), n = a[a.length - e];
        r = n.data[t];
    } catch (e) {}
    return r;
};