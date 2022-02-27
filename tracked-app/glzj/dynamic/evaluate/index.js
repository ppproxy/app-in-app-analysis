var n = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(n) {
    var e = (0, t.default)(n);
    return Object.assign(e, r), e.eval(u), {
        eval: function(n) {
            return e.eval(n);
        },
        extends: function(n) {
            return Object.assign(e, n);
        }
    };
};

var e = require("../../@babel/runtime/helpers/typeof"), t = n(require("./miniMAL")), r = {
    "{}": function(n) {
        for (var e = {}, t = 0; t < n.length; t++) e[n[t]] = t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1];
        return e;
    },
    "[]": function() {
        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
        return e;
    },
    "@": function(n) {
        return n;
    },
    "!": function(n) {
        return !n;
    },
    "=": function(n, e) {
        return n === e;
    },
    "!==": function(n, e) {
        return n !== e;
    },
    "==": function(n, e) {
        return n == e;
    },
    "!=": function(n, e) {
        return n != e;
    },
    "<": function(n, e) {
        return n < e;
    },
    ">": function(n, e) {
        return n > e;
    },
    ">=": function(n, e) {
        return n >= e;
    },
    "<=": function(n, e) {
        return n <= e;
    },
    "+": function(n, e) {
        return n + e;
    },
    "-": function(n, e) {
        return n - e;
    },
    "*": function(n, e) {
        return n * e;
    },
    "/": function(n, e) {
        return n / e;
    },
    "%": function(n, e) {
        return n % e;
    },
    in: function(n, e) {
        return n in e;
    },
    new: function(n) {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
        return Reflect.construct(n, t);
    },
    delete: function(n, e) {
        return Reflect.deleteProperty(n, e);
    },
    instanceof: function(n, e) {
        return n instanceof e;
    },
    typeof: function(n) {
        return e(n);
    },
    throw: function(n) {
        throw n;
    },
    "@reg": function(n, e) {
        return new RegExp(n, e);
    },
    void: void 0
}, u = [ [ "var", "&&", [ "~", [ "fn", [ "&", "xs" ], [ "if", [ "=", [ ".-", "xs", [ "`", "length" ] ] ], !0, [ "if", [ "=", 1, [ ".-", "xs", [ "`", "length" ] ] ], [ ".-", "xs", 0 ], [ "[]", [ "`", "let" ], [ "[]", [ "`", "@" ], [ ".-", "xs", 0 ] ], [ "[]", [ "`", "if" ], [ "`", "@" ], [ ".", [ "`", [ "&&" ] ], [ "`", "concat" ], [ ".", "xs", [ "`", "slice" ], 1 ] ], [ "`", "@" ] ] ] ] ] ] ] ], [ "var", "||", [ "~", [ "fn", [ "&", "xs" ], [ "if", [ "=", [ ".-", "xs", [ "`", "length" ] ] ], null, [ "if", [ "=", 1, [ ".-", "xs", [ "`", "length" ] ] ], [ ".-", "xs", 0 ], [ "[]", [ "`", "let" ], [ "[]", [ "`", "@" ], [ ".-", "xs", 0 ] ], [ "[]", [ "`", "if" ], [ "`", "@" ], [ "`", "@" ], [ ".", [ "`", [ "||" ] ], [ "`", "concat" ], [ ".", "xs", [ "`", "slice" ], 1 ] ] ] ] ] ] ] ] ], null ];