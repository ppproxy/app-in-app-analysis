var r, e = require("../../@babel/runtime/helpers/typeof");

r = function(r) {
    var e, t;
    return t = (e = r).lib.WordArray, e.enc.Base64 = {
        stringify: function(r) {
            var e = r.words, t = r.sigBytes, a = this._map;
            r.clamp();
            for (var n = [], i = 0; i < t; i += 3) for (var o = (e[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, f = 0; f < 4 && i + .75 * f < t; f++) n.push(a.charAt(o >>> 6 * (3 - f) & 63));
            var s = a.charAt(64);
            if (s) for (;n.length % 4; ) n.push(s);
            return n.join("");
        },
        parse: function(r) {
            var e = r.length, a = this._map, n = this._reverseMap;
            if (!n) {
                n = this._reverseMap = [];
                for (var i = 0; i < a.length; i++) n[a.charCodeAt(i)] = i;
            }
            var o = a.charAt(64);
            if (o) {
                var f = r.indexOf(o);
                -1 !== f && (e = f);
            }
            return function(r, e, a) {
                for (var n = [], i = 0, o = 0; o < e; o++) if (o % 4) {
                    var f = a[r.charCodeAt(o - 1)] << o % 4 * 2, s = a[r.charCodeAt(o)] >>> 6 - o % 4 * 2;
                    n[i >>> 2] |= (f | s) << 24 - i % 4 * 8, i++;
                }
                return t.create(n, i);
            }(r, e, n);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }, r.enc.Base64;
}, "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) ? module.exports = exports = r(require("./core")) : "function" == typeof define && define.amd ? define([ "./core" ], r) : r((void 0).CryptoJS);