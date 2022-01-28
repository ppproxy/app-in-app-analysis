function e(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = require("./validType"), n = require("./helper");

module.exports = function(o, i) {
    var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (t = Object.assign({}, t, u), !o || "object" !== (void 0 === o ? "undefined" : r(o))) throw new Error("model 属性必须是一个 Object");
    if (!i || "object" !== (void 0 === i ? "undefined" : r(i))) throw new Error("rules 属性必须是一个 Object");
    var f = n.paths(o).reduce(function(r, u) {
        var f = n.get(o, "" + u);
        f && "string" == typeof f && (f = f.trim ? f.trim() : f.replace(/(^\s*)|(\s*$)/g, ""));
        var s = (i = Object.keys(i).reduce(function(r, t) {
            var o = n.standardPath(t);
            if (!r[o]) {
                var u = e({}, o, i[t]);
                return Object.assign(r, u);
            }
        }, {}))[u];
        if (!s || !s.length) return r;
        var l = s.filter(function(e) {
            return "required" === e.type;
        }).length > 0;
        return s.some(function(e) {
            if (!e.type) throw console.log(e), new Error("验证规则必须配置 type");
            if (e.name = u, l && !t.required(f)) return r.push(Promise.resolve(e)), !1;
            if (f) if ("function" == typeof t[e.type]) {
                var n = t[e.type];
                if (e.isAsync) {
                    var i = n(f, o).then(function(r) {
                        if (!r) return e;
                    });
                    return r.push(i), !1;
                }
                if (!n(f, o, e)) return r.push(Promise.resolve(e)), !1;
            } else if ("regexp" === e.type) {
                if (!e.pattern.test(f)) return r.push(Promise.resolve(e)), !1;
            } else {
                var s = t[e.type];
                if (s && !s(f, o)) return r.push(Promise.resolve(e)), !1;
            }
        }), r;
    }, []);
    return Promise.all(f).then(function(e) {
        return e.filter(function(e) {
            return void 0 !== e;
        });
    });
};