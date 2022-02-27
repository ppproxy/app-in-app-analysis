Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(r, e) {
    for (var t in e) n(t, e[t], r);
    return r;
};

var r = ".".charCodeAt(0), e = /\\(\\)?/g, t = RegExp("[^.[\\]]+|\\[(?:([^\"'][^[]*)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))", "g");

function n(n, a, u) {
    n in u && (u[n] = a);
    for (var o, i, c = (i = [], (o = n).charCodeAt(0) === r && i.push(""), o.replace(t, function(r, t, n, a) {
        var u = r;
        return n ? u = a.replace(e, "$1") : t && (u = t.trim()), i.push(u), "";
    }), i), p = c.length - 1, s = u, f = 0; f < c.length; f++) {
        var l = c[f];
        f === p && (s[l] = a);
        var v = c[f + 1];
        l in s || (Number.parseInt(v).toString() === v ? s[l] = [] : s[l] = {}), s = s[l];
    }
    return u;
}