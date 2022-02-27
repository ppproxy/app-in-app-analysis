Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.utob = exports.toUint8Array = exports.toBase64 = exports.fromUint8Array = exports.fromBase64 = exports.extendUint8Array = exports.extendString = exports.extendBuiltins = exports.encodeURL = exports.encodeURI = exports.encode = exports.decode = exports.btou = exports.btoa = exports.atob = exports.VERSION = exports.Base64 = void 0;

var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper");

exports.VERSION = "3.2.4";

var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = function(r) {
    var e, n = {}, o = 0, a = t("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
    try {
        for (a.s(); !(e = a.n()).done; ) {
            n[e.value] = o++;
        }
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        a.e(t);
    } finally {
        a.f();
    }
    return n;
}(), n = String.fromCharCode, o = function(t) {
    return String(t).replace(/[+\/]/g, function(t) {
        return "+" === t ? "-" : "_";
    }).replace(/=/g, "");
}, a = function(t, e) {
    for (var n = "", a = 0, i = t.length; a < i; a += 3) {
        var u = t[a], c = t[a + 1], s = t[a + 2], f = u << 16 | c << 8 | s;
        n += r.charAt(f >>> 18) + r.charAt(f >>> 12 & 63) + (void 0 !== c ? r.charAt(f >>> 6 & 63) : "=") + (void 0 !== s ? r.charAt(63 & f) : "=");
    }
    return e ? o(n) : n;
};

exports.fromUint8Array = a;

var i = "function" == typeof btoa ? function(t) {
    return btoa(t);
} : function(t) {
    if (t.match(/[^\x00-\xFF]/)) throw new RangeError("The string contains invalid characters.");
    return a(Uint8Array.from(t, function(t) {
        return t.charCodeAt(0);
    }));
};

exports.btoa = i;

var u = function(t) {
    return unescape(encodeURIComponent(t));
};

exports.utob = u;

var c = function(t, r) {
    var e = i(u(t));
    return r ? o(e) : e;
};

exports.encode = exports.toBase64 = c;

var s = function(t) {
    return c(t, !0);
};

exports.encodeURL = exports.encodeURI = s;

var f = function(t) {
    return decodeURIComponent(escape(t));
};

exports.btou = f;

var p = function(t) {
    var r = t.length, o = r % 4, a = (r > 0 ? e[t.charAt(0)] << 18 : 0) | (r > 1 ? e[t.charAt(1)] << 12 : 0) | (r > 2 ? e[t.charAt(2)] << 6 : 0) | (r > 3 ? e[t.charAt(3)] : 0), i = [ n(a >>> 16), n(a >>> 8 & 255), n(255 & a) ];
    return i.length -= [ 0, 0, 2, 1 ][o], i.join("");
}, x = "function" == typeof atob ? function(t) {
    return atob(t);
} : function(t) {
    return String(t).replace(/[^A-Za-z0-9\+\/]/g, "").replace(/\S{1,4}/g, p);
};

exports.atob = x;

var d = function(t) {
    return String(t).replace(/[-_]/g, function(t) {
        return "-" === t ? "+" : "/";
    }).replace(/[^A-Za-z0-9\+\/]/g, "");
}, v = function(t) {
    return r = d(t), f(x(r));
    var r;
};

exports.decode = exports.fromBase64 = v;

var h = function(t) {
    return Uint8Array.from(x(d(t)), function(t) {
        return t.charCodeAt(0);
    });
};

exports.toUint8Array = h;

var l = function(t) {
    return {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
    };
}, A = function() {
    var t = function(t, r) {
        return Object.defineProperty(String.prototype, t, l(r));
    };
    t("fromBase64", function() {
        return v(this);
    }), t("toBase64", function(t) {
        return c(this, t);
    }), t("toBase64URI", function() {
        return c(this, !0);
    }), t("toBase64URL", function() {
        return c(this, !0);
    }), t("toUint8Array", function() {
        return h(this);
    });
};

exports.extendString = A;

var U = function() {
    var t = function(t, r) {
        return Object.defineProperty(Uint8Array.prototype, t, l(r));
    };
    t("toBase64", function(t) {
        return a(this, t);
    }), t("toBase64URI", function() {
        return a(this, !0);
    }), t("toBase64URL", function() {
        return a(this, !0);
    });
};

exports.extendUint8Array = U;

var b = function() {
    A(), U();
};

exports.extendBuiltins = b;

var y = {
    VERSION: "3.2.4",
    atob: x,
    btoa: i,
    fromBase64: v,
    toBase64: c,
    encode: c,
    encodeURI: s,
    encodeURL: s,
    utob: u,
    btou: f,
    decode: v,
    fromUint8Array: a,
    toUint8Array: h,
    extendString: A,
    extendUint8Array: U,
    extendBuiltins: b
};

exports.Base64 = y;