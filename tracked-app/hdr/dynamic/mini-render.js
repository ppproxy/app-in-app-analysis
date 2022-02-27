var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = o, require("../@babel/runtime/helpers/Arrayincludes");

var r = require("../@babel/runtime/helpers/defineProperty"), t = require("../@babel/runtime/helpers/toArray"), a = require("../@babel/runtime/helpers/toConsumableArray"), n = require("../@babel/runtime/helpers/slicedToArray"), s = require("../@babel/runtime/helpers/createForOfIteratorHelper"), i = e(require("./mini-parser"));

function o(e, r) {
    return function e(r) {
        var t = r.nodes, a = r.a, n = r.name, s = r.iscatch, i = r.iscustom, o = r.key;
        return "block" === n ? t && t.length > 0 ? t.map(function(t) {
            return e(Object.assign(Object.assign({}, t), {
                key: "".concat(r.key, "-b-").concat(t.key)
            }));
        }).flat(1 / 0) : [] : t && 0 !== t.length ? {
            name: n,
            a: a,
            nodes: t.map(function(r) {
                return e(r);
            }).flat(1 / 0),
            iscustom: i,
            iscatch: s,
            key: o
        } : r;
    }(l({
        node: {
            name: "root",
            key: "-1",
            a: {},
            nodes: e.nodes
        },
        templates: e.templates,
        css: e.css,
        mode: e.mode
    }, r)).nodes;
}

var c = {
    wx: {
        for: "wx:for",
        item: "wx:for-item",
        index: "wx:for-index",
        key: "wx:key",
        if: "wx:if",
        elif: "wx:elif",
        else: "wx:else"
    },
    my: {
        for: "a:for",
        item: "a:for-item",
        index: "a:for-index",
        key: "a:key",
        if: "a:if",
        elif: "a:elif",
        else: "a:else"
    }
};

function l(e, u, d) {
    var m = e.node, y = e.templates, p = e.css, h = e.mode, v = m.name, k = m.a, b = m.nodes, g = m.key, x = m.iscatch, w = m.iscustom, O = c[h].if, j = c[h].elif, A = c[h].else;
    if (O in k) {
        if ((0, i.default)(k[O], u)) return l({
            node: {
                name: v,
                a: f(k, [ O ]),
                nodes: b,
                key: g,
                iscatch: x,
                iscustom: w
            },
            templates: y,
            css: p,
            mode: h
        }, u);
        if (d && d.length > 0) {
            var q, _ = s(d);
            try {
                for (_.s(); !(q = _.n()).done; ) {
                    var E = q.value, P = E.a, C = E.name, D = E.iscustom, F = E.iscatch, H = E.nodes, I = E.key;
                    if (j in P && (0, i.default)(P[j], u)) return l({
                        node: {
                            name: C,
                            iscustom: D,
                            iscatch: F,
                            nodes: H,
                            key: I,
                            a: f(P, [ j ])
                        },
                        templates: y,
                        css: p,
                        mode: h
                    }, u);
                    if (A in P) return l({
                        node: {
                            name: C,
                            iscustom: D,
                            iscatch: F,
                            nodes: H,
                            key: I,
                            a: f(P, [ A ])
                        },
                        templates: y,
                        css: p,
                        mode: h
                    }, u);
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                _.e(e);
            } finally {
                _.f();
            }
        }
        return null;
    }
    var M = c[h].for, R = c[h].item, T = c[h].index, z = c[h].key;
    if (M in k) return function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "item", a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "index", n = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, o = arguments.length > 5 ? arguments[5] : void 0;
        if ("string" != typeof e && !Array.isArray(e)) return [];
        var c, f = [], u = i.node, d = i.templates, m = i.css, y = i.mode, p = 0, h = s(e);
        try {
            for (h.s(); !(c = h.n()).done; ) {
                var v, k = c.value, b = "".concat(u.key, "-f-").concat(p), g = Object.assign(Object.assign({}, o), (r(v = {}, a, p), 
                r(v, t, k), v)), x = l({
                    node: Object.assign(Object.assign({}, u), {
                        key: b
                    }),
                    templates: d,
                    css: m,
                    mode: y
                }, g);
                n && (x.key = k[n]), f.push(x), p++;
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            h.e(e);
        } finally {
            h.f();
        }
        return f;
    }((0, i.default)(k[M], u), k[R], k[T], k[z], {
        node: {
            name: v,
            a: f(k, [ M, R, T, z ]),
            nodes: b,
            key: g,
            iscatch: x,
            iscustom: w
        },
        templates: y,
        css: p,
        mode: h
    }, u);
    var B = {};
    for (var G in k) "string" != typeof k[G] ? B[G] = k[G] : "data" === G && "template" === v ? B.data = (0, 
    i.default)(k[G], u, !0) : B[G] = (0, i.default)(k[G], u);
    var J = [];
    if (p && B.id && "string" == typeof B.id) {
        var K, L = "#".concat(B.id.trim()), N = s(p);
        try {
            for (N.s(); !(K = N.n()).done; ) {
                var Q = K.value, S = n(Q, 2), U = S[0], V = S[1];
                if (L === U) {
                    J.push.apply(J, a(V));
                    break;
                }
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            N.e(e);
        } finally {
            N.f();
        }
    }
    if (p && B.class && "string" == typeof B.class) {
        var W, X = B.class.trim().split(/\s+/).map(function(e) {
            return ".".concat(e);
        }), Y = s(p);
        try {
            for (Y.s(); !(W = Y.n()).done; ) {
                var Z = W.value, $ = n(Z, 2), ee = $[0], re = $[1];
                X.includes(ee) && J.push.apply(J, a(re));
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            Y.e(e);
        } finally {
            Y.f();
        }
    }
    if (Object.keys(J).length > 0 && (B.style || (B.style = ""), B.style = "".concat(function(e) {
        var r, t = "", a = s(e);
        try {
            for (a.s(); !(r = a.n()).done; ) {
                var i = n(r.value, 2), o = i[0], c = i[1];
                t += "".concat(o, ": ").concat(c, ";").replace(/"/g, "'");
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            a.e(e);
        } finally {
            a.f();
        }
        return t;
    }(J)).concat(B.style)), "template" === v) {
        var te = B.is, ae = B.data, ne = y[te];
        if (te && ne) {
            var se = ne.nodes;
            if (se && se.length > 0) return o({
                nodes: se.map(function(e) {
                    return Object.assign(Object.assign({}, e), {
                        key: "".concat(m.key, "-t-").concat(e.key)
                    });
                }),
                templates: y,
                css: p,
                mode: h
            }, ae);
        }
        return null;
    }
    var ie = {
        name: v,
        a: B,
        key: g,
        iscatch: x,
        iscustom: w
    };
    if (b && b.length) {
        var oe = function(e, r) {
            var t = r.if_key, a = r.elif_key, n = r.else_key;
            return e.reduce(function(e, r) {
                if (r.a[t]) e.push([ r ]); else if (r.a[n] || r.a[a]) {
                    var s = e[e.length - 1];
                    if (!Array.isArray(s)) throw new Error("parse xml error");
                    if (s[s.length - 1].a[n]) throw new Error("parse xml error");
                    s.push(r);
                } else e.push(r);
                return e;
            }, []);
        }(b, {
            if_key: O,
            elif_key: j,
            else_key: A
        });
        ie.nodes = oe.map(function(e) {
            if (Array.isArray(e)) {
                var r = t(e), a = r[0], n = r.slice(1);
                return l({
                    node: a,
                    templates: y,
                    css: p,
                    mode: h
                }, u, n);
            }
            return l({
                node: e,
                templates: y,
                css: p,
                mode: h
            }, u);
        }).filter(function(e) {
            return !!e;
        }).flat(1 / 0);
    }
    return ie;
}

function f(e, r) {
    var t = {};
    for (var a in e) r.includes(a) || (t[a] = e[a]);
    return t;
}