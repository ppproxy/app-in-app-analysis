Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var t = function(r, t, n) {
        return n ? (t = Object.create(t), r.some(function(e, i) {
            return "&" == e ? t[r[i + 1]] = n.slice(i) : (t[e] = n[i], 0);
        }), t) : Array.isArray(r) ? r.map(function() {
            return f(arguments.length <= 0 ? void 0 : arguments[0], t);
        }) : "string" == typeof r ? r in t ? t[r] : e.throw(r + " not found") : r;
    };
    function n(e, t) {
        for (;Array.isArray(e) && e[0] in t && t[e[0]].M; ) e = t[e[0]].apply(t, r(e.slice(1)));
        return e;
    }
    function i(r, t) {
        for (;r; ) {
            if (r === e) return r;
            if (Object.prototype.hasOwnProperty.call(r, t)) return r;
            r = Reflect.getPrototypeOf(r);
        }
    }
    function f(e, u) {
        for (;;) {
            if (!Array.isArray(e)) return t(e, u);
            if (("&&" === e[0] || "||" === e[0]) && (e = n(e, u), !Array.isArray(e))) return t(e, u);
            if ("if" == e[0]) e = f(e[1], u) ? e[2] : e[3]; else if ("do" == e[0]) {
                t(e.slice(1, e.length - 1), u);
                e = e[e.length - 1];
            } else {
                if ("`" == e[0]) return e[1];
                if ("." == e[0]) {
                    var a = t(e.slice(1), u);
                    return a[0][a[1]].apply(a[0], a.slice(2));
                }
                if ("`-" == e[0]) {
                    var o = t(e.slice(2), u);
                    return i(u, e[1])[e[1]] = o[0];
                }
                if ("var" == e[0]) return u[e[1]] = f(e[2], u);
                if ("fn" == e[0] || "fx" == e[0]) {
                    var l = function() {
                        for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        return u.this = this, u.arguments = arguments, f(e[2], t(e[1], u, n));
                    };
                    return "fn" === e[0] && (l.A = [ e[2], u, e[1] ]), l;
                }
                if ("for" === e[0]) {
                    for (f(e[1], u), u[e[5]] = {}; f(e[2], u) && (f(e[4], u), !u[e[5]]["@b"]); f(e[3], u)) ;
                    return;
                }
                if ("while" === e[0]) {
                    for (u[e[3]] = {}; f(e[1], u) && (f(e[2], u), !u[e[3]]["@b"]); ) ;
                    return;
                }
                if (".-" == e[0]) {
                    var c = t(e.slice(1), u), s = c[0][c[1]];
                    return 2 in c ? c[0][c[1]] = c[2] : s;
                }
                if ("try" == e[0]) try {
                    return f(e[1], u);
                } catch (r) {
                    r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                    return f(e[2][2], t([ e[2][1] ], u, [ r ]));
                } else {
                    if ("~" == e[0]) {
                        var y = f(e[1], u);
                        return y.M = 1, y;
                    }
                    if ("let" == e[0]) {
                        for (var p in u = Object.create(u), e[1]) p % 2 && (u[e[1][p - 1]] = f(e[1][p], u));
                        e = e[2];
                    } else {
                        var v = t(e, u), A = v[0];
                        if (!A.A) return A.apply(void 0, r(v.slice(1)));
                        e = A.A[0], u = t(A.A[2], A.A[1], v.slice(1));
                    }
                }
            }
        }
    }
    return e = Object.assign(Object.create(e), {
        eval: function() {
            return f(arguments.length <= 0 ? void 0 : arguments[0], e);
        }
    });
};

var r = require("../../@babel/runtime/helpers/toConsumableArray");