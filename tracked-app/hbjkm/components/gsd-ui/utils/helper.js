var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = {
    standardPath: function(t) {
        var r = ".".charCodeAt(0), o = /\\(\\)?/g, n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, e = [];
        return t.charCodeAt(0) === r && e.push(""), t.replace(n, function(t, r, n, c) {
            var i = t;
            return n ? i = c.replace(o, "$1") : r && (i = r.trim()), e.push(i), "";
        }), e.join(".");
    },
    get: function(t, r, o) {
        if (void 0 === r) throw new Error("请输入正确的 path 参数！");
        var n = Array.isArray(r) ? r : this.standardPath(r).split(".");
        return n && "" === n[0] && n.splice(0, 1), n.reduce(function(t, r) {
            return (t || {})[r];
        }, t) || o;
    },
    paths: function(r, o) {
        var n = [], e = void 0, c = void 0;
        if (o = o || [], "object" !== (void 0 === r ? "undefined" : t(r))) throw new Error("model 属性必须是一个 Object");
        for (c in r) e = r[c], Array.isArray(e) && e.length && "object" === t(e[0]) || e && "[object Object]" === e.toString() ? n = n.concat(this.paths(e, o.concat([ c ]))) : n.push(o.concat(c).join("."));
        return n;
    }
};