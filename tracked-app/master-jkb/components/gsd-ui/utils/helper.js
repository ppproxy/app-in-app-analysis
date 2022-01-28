var r = require("../../../@babel/runtime/helpers/typeof");

module.exports = {
    standardPath: function(r) {
        var t = ".".charCodeAt(0), e = /\\(\\)?/g, n = [];
        return r.charCodeAt(0) === t && n.push(""), r.replace(/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, function(r, t, a, o) {
            var c = r;
            return a ? c = o.replace(e, "$1") : t && (c = t.trim()), n.push(c), "";
        }), n.join(".");
    },
    get: function(r, t, e) {
        if (void 0 === t) throw new Error("请输入正确的 path 参数！");
        var n = Array.isArray(t) ? t : this.standardPath(t).split(".");
        return n && "" === n[0] && n.splice(0, 1), n.reduce(function(r, t) {
            return (r || {})[t];
        }, r) || e;
    },
    paths: function(t, e) {
        var n, a, o = [];
        if (e = e || [], "object" !== r(t)) throw new Error("model 属性必须是一个 Object");
        for (a in t) n = t[a], Array.isArray(n) && n.length && "object" === r(n[0]) || n && "[object Object]" === n.toString() ? o = o.concat(this.paths(n, e.concat([ a ]))) : o.push(e.concat(a).join("."));
        return o;
    }
};