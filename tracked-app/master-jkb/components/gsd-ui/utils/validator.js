var e = require("../../../@babel/runtime/helpers/defineProperty"), r = require("../../../@babel/runtime/helpers/typeof"), t = require("./validType"), n = require("./helper");

module.exports = function(i, o) {
    var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (t = Object.assign({}, t, u), !i || "object" !== r(i)) throw new Error("model 属性必须是一个 Object");
    if (!o || "object" !== r(o)) throw new Error("rules 属性必须是一个 Object");
    var s = n.paths(i).reduce(function(r, u) {
        var s = n.get(i, "".concat(u));
        s && "string" == typeof s && (s = s.trim ? s.trim() : s.replace(/(^\s*)|(\s*$)/g, ""));
        var f = (o = Object.keys(o).reduce(function(r, t) {
            var i = n.standardPath(t);
            if (!r[i]) {
                var u = e({}, i, o[t]);
                return Object.assign(r, u);
            }
        }, {}))[u];
        if (!f || !f.length) return r;
        var a = f.filter(function(e) {
            return "required" === e.type;
        }).length > 0;
        return f.some(function(e) {
            if (!e.type) throw console.log(e), new Error("验证规则必须配置 type");
            if (e.name = u, a && !t.required(s)) return r.push(Promise.resolve(e)), !1;
            if (s) if ("function" == typeof t[e.type]) {
                var n = t[e.type];
                if (e.isAsync) {
                    var o = n(s, i).then(function(r) {
                        if (!r) return e;
                    });
                    return r.push(o), !1;
                }
                if (!n(s, i, e)) return r.push(Promise.resolve(e)), !1;
            } else if ("regexp" === e.type) {
                if (!e.pattern.test(s)) return r.push(Promise.resolve(e)), !1;
            } else {
                var f = t[e.type];
                if (f && !f(s, i)) return r.push(Promise.resolve(e)), !1;
            }
        }), r;
    }, []);
    return Promise.all(s).then(function(e) {
        return e.filter(function(e) {
            return void 0 !== e;
        });
    });
};