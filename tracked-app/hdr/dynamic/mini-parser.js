Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, r) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], t = p(e = n ? "{".concat(e, "}") : e);
    if (0 === t.length) return null;
    var u = new c(r), a = t.map(function(e) {
        return "str" === e.type ? e.value : i(v(e.value), u);
    });
    return 1 === a.length ? a[0] : a.join("");
};

var e = require("../@babel/runtime/helpers/defineProperty"), r = require("../@babel/runtime/helpers/classCallCheck"), n = require("../@babel/runtime/helpers/createClass");

function t(e) {
    var r = 0, n = 1, t = 0, u = {
        pos: 0,
        line: 1,
        col: 0
    };
    return {
        mark: function() {
            Object.assign(u, {
                pos: r,
                line: n,
                col: t
            });
        },
        rollback: function() {
            r = u.pos, n = u.line, t = u.col;
        },
        next: function() {
            var u = e.charAt(r++);
            "\n" == u ? (n++, t = 0) : t++;
            return u;
        },
        peek: a,
        eof: function() {
            return "" == a();
        },
        croak: function(e) {
            throw new Error(e + " (" + n + ":" + t + ")");
        }
    };
    function a() {
        return e.charAt(r);
    }
}

function u(e) {
    var r = null, n = [ "false", "true", "null", "undefined", "NaN" ];
    return {
        mark: e.mark,
        rollback: function() {
            r = null, e.rollback();
        },
        next: function() {
            var e = r;
            return r = null, e || p();
        },
        peek: s,
        eof: function() {
            return null == s();
        },
        croak: e.croak
    };
    function t(e) {
        return /[0-9]/i.test(e);
    }
    function u(e) {
        return /[a-z$_]/i.test(e);
    }
    function a(e) {
        return u(e) || /[0-9]/.test(e);
    }
    function o(e) {
        return "+-*/%=><|&!".indexOf(e) > -1;
    }
    function c(e) {
        return "." === e;
    }
    function i(e) {
        return " \t\n".indexOf(e) >= 0;
    }
    function l(r) {
        for (var n = ""; !e.eof() && r(e.peek()); ) n += e.next();
        return n;
    }
    function f(r) {
        var n = !1, t = "";
        for (e.next(); !e.eof(); ) {
            var u = e.next();
            if (n) t += u, n = !1; else if ("\\" === u) n = !0; else {
                if (u === r) break;
                t += u;
            }
        }
        return t;
    }
    function p() {
        if (l(i), e.eof()) return null;
        var r, p, s, v, y = e.peek();
        return '"' === y || "'" === y ? function(e) {
            return {
                type: "str",
                value: f(e)
            };
        }(y) : t(y) ? (r = !1, p = l(function(e) {
            return "." == e ? !r && (r = !0, !0) : t(e);
        }), {
            type: "num",
            value: parseFloat(p)
        }) : u(y) ? (v = l(a), {
            type: (s = v, n.indexOf(s) > -1 ? "kw" : "var"),
            value: v
        }) : function(e) {
            return "[]{}(),:.?".indexOf(e) > -1;
        }(y) ? "." === y ? {
            type: "punc",
            value: l(c)
        } : {
            type: "punc",
            value: e.next()
        } : o(y) ? {
            type: "op",
            value: l(o)
        } : void e.croak("Can't handle character: ".concat(y));
    }
    function s() {
        return r || (r = p());
    }
}

var a = {
    type: "kw",
    value: !1
};

function o(e) {
    var r = {
        "||": 2,
        "&&": 3,
        "<": 7,
        ">": 7,
        "<=": 7,
        ">=": 7,
        "==": 7,
        "!=": 7,
        "===": 7,
        "!==": 7,
        "+": 10,
        "-": 10,
        "*": 20,
        "/": 20,
        "%": 20
    };
    return e.eof() ? a : s();
    function n(r) {
        var n = e.peek();
        return n && "punc" == n.type && (!r || n.value == r) && n;
    }
    function t(r) {
        var n = e.peek();
        return n && "op" == n.type && (!r || n.value == r) && n;
    }
    function u(r) {
        n(r) ? e.next() : e.croak("Expecting punctuation: ".concat(r));
    }
    function o(n, u) {
        var a = t();
        if (a && r[a.value] > u) return e.next(), o({
            type: "binary",
            operator: a.value,
            left: n,
            right: s(!1)
        }, u);
        return n;
    }
    function c(r) {
        if (n("?")) {
            e.next();
            var t = s();
            return u(":"), {
                type: "condition",
                test: r,
                consequent: t,
                alternate: s()
            };
        }
        return r;
    }
    function i(r) {
        for (var t = []; n(".") || n("["); ) {
            var a = !!n("[");
            e.next(), t.push(!!a), a ? t.push(s()) : t.push(p()), a && u("]");
        }
        return 0 === t.length ? r : function e(r) {
            var n = r.pop();
            if (0 === r.length) return n;
            var t = r.pop();
            return {
                type: "expr",
                object: e(r),
                property: n,
                computed: t
            };
        }([ r ].concat(t));
    }
    function l(r, t, a, o) {
        var c = [], i = !0;
        for (u(r); !e.eof() && !n(t) && (i ? i = !1 : u(a), !n(t)); ) c.push(o());
        return u(t), c;
    }
    function f() {
        var r = e.peek();
        if (function() {
            var r = e.peek();
            return r && "str" == r.type && r;
        }()) return e.next(), u(":"), {
            type: "property",
            name: r.value,
            value: s()
        };
        if (function() {
            var r = e.peek();
            return r && "var" == r.type && r;
        }()) {
            if (e.mark(), e.next(), n(":")) {
                e.next();
                var t = s();
                return {
                    type: "property",
                    name: r.value,
                    value: t
                };
            }
            return e.rollback(), {
                type: "property",
                name: r.value,
                value: r
            };
        }
        return n("...") ? (e.next(), {
            type: "spread",
            value: s()
        }) : void 0;
    }
    function p() {
        var r = null;
        if (n("(")) {
            e.next();
            var a = s();
            u(")"), r = a;
        }
        t("!") && (e.next(), r = o({
            type: "binary",
            operator: "!",
            left: null,
            right: p()
        }, 0));
        if (n("{") && (r = {
            type: "obj",
            elements: l("{", "}", ",", f)
        }), n("[") && (r = {
            type: "array",
            elements: l("[", "]", ",", s)
        }), function() {
            var r = e.peek();
            return r && "kw" == r.type && r;
        }() && (r = {
            type: "kw",
            value: {
                true: !0,
                false: !1,
                undefined: void 0,
                null: null,
                NaN: NaN
            }[e.next().value]
        }), !r) {
            var c = e.next();
            !c || "var" != c.type && "num" != c.type && "str" != c.type ? e.croak("Unexpected token: " + JSON.stringify(e.peek())) : r = c;
        }
        return r;
    }
    function s() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return i(e ? c(o(p(), 0)) : o(p(), 0));
    }
}

var c = function() {
    function e(n) {
        r(this, e), this.context = Object.create(n || null);
    }
    return n(e, [ {
        key: "get",
        value: function(e) {
            if (e in this.context) return this.context[e];
        }
    } ]), e;
}();

function i(r, n) {
    switch (r.type) {
      case "num":
      case "str":
      case "kw":
        return r.value;

      case "array":
        return r.elements.map(function(e) {
            return i(e, n);
        });

      case "obj":
        return r.elements.reduce(function(r, t) {
            return "spread" === t.type ? Object.assign(Object.assign({}, r), i(t.value, n)) : Object.assign(Object.assign({}, r), e({}, t.name, i(t.value, n)));
        }, {});

      case "var":
        return n.get(r.value);

      case "binary":
        return function(e, r, n) {
            switch (e) {
              case "!":
                return !n;

              case "+":
                return r + n;

              case "-":
                return r - n;

              case "*":
                return r * n;

              case "/":
                return r / n;

              case "%":
                return r % n;

              case "&&":
                return r && n;

              case "||":
                return r || n;

              case "<":
                return r < n;

              case ">":
                return r > n;

              case "<=":
                return r <= n;

              case ">=":
                return r >= n;

              case "==":
                return r == n;

              case "===":
                return r === n;

              case "!=":
                return r != n;

              case "!==":
                return r !== n;
            }
            throw new Error("Can't apply operator ".concat(e));
        }(r.operator, r.left ? i(r.left, n) : null, i(r.right, n));

      case "expr":
        return function(e, r) {
            var n, t = i(e.object, r);
            e.computed ? n = i(e.property, r) : "var" === e.property.type && (n = e.property.value);
            try {
                return t[n];
            } catch (e) {}
        }(r, n);

      case "condition":
        return function(e, r) {
            var n = i(e.test, r);
            return i(n ? e.consequent : e.alternate, r);
        }(r, n);

      default:
        throw new Error("I don't know how to evaluate ".concat(r.type));
    }
}

function l(e) {
    var r = null;
    return {
        next: function() {
            var e = r;
            return r = null, e || o();
        },
        eof: function() {
            return null == (r || (r = o()));
        }
    };
    function n(r) {
        for (var n = ""; !e.eof() && !r(); ) n += e.next();
        return n;
    }
    function t(r) {
        for (var n = !1, t = ""; !e.eof(); ) {
            var u = e.next();
            if (n) t += u, n = !1; else if ("\\" === u) n = !0; else {
                if (u === r) break;
                t += u;
            }
        }
        return t;
    }
    function u() {
        return e.mark(), "{" === e.peek() && (e.next(), "{" === e.peek()) ? (e.next(), e.rollback(), 
        !0) : (e.rollback(), !1);
    }
    function a() {
        return e.mark(), "}" === e.peek() && "}" === e.next() ? (e.rollback(), !0) : (e.rollback(), 
        !1);
    }
    function o() {
        return e.eof() ? null : u() ? function() {
            var r = "", n = 0;
            for (e.next(), e.next(); !e.eof(); ) {
                var u = e.next();
                if ("'" === u || '"' === u) r += u, r += t(u); else if ("{" === u) n += 1; else if ("}" === u) if (0 === n) {
                    if (a()) break;
                    e.croak("parse error");
                } else n -= 1;
                r += u;
            }
            return e.next(), {
                type: "expr",
                value: r
            };
        }() : {
            type: "str",
            value: n(u)
        };
    }
}

var f = new Map();

function p(e) {
    if (!f.get(e)) {
        for (var r = [], n = l(t(e)); !n.eof(); ) r.push(n.next());
        f.set(e, r);
    }
    return f.get(e);
}

var s = new Map();

function v(e) {
    return s.get(e) || s.set(e, o(u(t(e)))), s.get(e);
}