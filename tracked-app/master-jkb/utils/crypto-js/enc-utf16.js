var r, e = require("../../@babel/runtime/helpers/typeof");

r = function(r) {
    return function() {
        var e = r, t = e.lib.WordArray, n = e.enc;
        function o(r) {
            return r << 8 & 4278255360 | r >>> 8 & 16711935;
        }
        n.Utf16 = n.Utf16BE = {
            stringify: function(r) {
                for (var e = r.words, t = r.sigBytes, n = [], o = 0; o < t; o += 2) {
                    var i = e[o >>> 2] >>> 16 - o % 4 * 8 & 65535;
                    n.push(String.fromCharCode(i));
                }
                return n.join("");
            },
            parse: function(r) {
                for (var e = r.length, n = [], o = 0; o < e; o++) n[o >>> 1] |= r.charCodeAt(o) << 16 - o % 2 * 16;
                return t.create(n, 2 * e);
            }
        }, n.Utf16LE = {
            stringify: function(r) {
                for (var e = r.words, t = r.sigBytes, n = [], i = 0; i < t; i += 2) {
                    var f = o(e[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
                    n.push(String.fromCharCode(f));
                }
                return n.join("");
            },
            parse: function(r) {
                for (var e = r.length, n = [], i = 0; i < e; i++) n[i >>> 1] |= o(r.charCodeAt(i) << 16 - i % 2 * 16);
                return t.create(n, 2 * e);
            }
        };
    }(), r.enc.Utf16;
}, "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) ? module.exports = exports = r(require("./core")) : "function" == typeof define && define.amd ? define([ "./core" ], r) : r((void 0).CryptoJS);