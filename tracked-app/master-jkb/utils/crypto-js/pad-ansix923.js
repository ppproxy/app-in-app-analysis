var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.pad.AnsiX923 = {
        pad: function(e, r) {
            var i = e.sigBytes, o = 4 * r, t = o - i % o, n = i + t - 1;
            e.clamp(), e.words[n >>> 2] |= t << 24 - n % 4 * 8, e.sigBytes += t;
        },
        unpad: function(e) {
            var r = 255 & e.words[e.sigBytes - 1 >>> 2];
            e.sigBytes -= r;
        }
    }, e.pad.Ansix923;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./cipher-core" ], e) : e((void 0).CryptoJS);