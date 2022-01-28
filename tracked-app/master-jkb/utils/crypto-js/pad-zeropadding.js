var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.pad.ZeroPadding = {
        pad: function(e, r) {
            var i = 4 * r;
            e.clamp(), e.sigBytes += i - (e.sigBytes % i || i);
        },
        unpad: function(e) {
            for (var r = e.words, i = e.sigBytes - 1; !(r[i >>> 2] >>> 24 - i % 4 * 8 & 255); ) i--;
            e.sigBytes = i + 1;
        }
    }, e.pad.ZeroPadding;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./cipher-core" ], e) : e((void 0).CryptoJS);