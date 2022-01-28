Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.promisify = void 0, exports.promisifyAll = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    Object.keys(e).forEach(function(i) {
        var f = e[i];
        "function" == typeof f && t.asyncMethods.indexOf(i) >= 0 ? o[i] = function(e) {
            if (!n(e)) return r(f)(e);
            f(e);
        } : o[i] = f;
    });
};

var e = require("../../../@babel/runtime/helpers/typeof"), t = require("./method");

function n(t) {
    if (!t || "object" !== e(t)) return !1;
    for (var n = 0, r = [ "success", "fail", "complete" ]; n < r.length; n++) {
        if ("function" == typeof t[r[n]]) return !0;
    }
    return !1;
}

function r(e) {
    return "function" != typeof e ? fn : function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise(function(n, r) {
            e(Object.assign(t, {
                success: n,
                fail: r
            }));
        });
    };
}

var o = r;

exports.promisify = o;