function r(r, t) {
    return r(t = {
        exports: {}
    }, t.exports), t.exports;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = r(function(r) {
    !function() {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
            rotl: function(r, t) {
                return r << t | r >>> 32 - t;
            },
            rotr: function(r, t) {
                return r << 32 - t | r >>> t;
            },
            endian: function(r) {
                if (r.constructor == Number) return 16711935 & n.rotl(r, 8) | 4278255360 & n.rotl(r, 24);
                for (var t = 0; t < r.length; t++) r[t] = n.endian(r[t]);
                return r;
            },
            randomBytes: function(r) {
                for (var t = []; r > 0; r--) t.push(Math.floor(256 * Math.random()));
                return t;
            },
            bytesToWords: function(r) {
                for (var t = [], n = 0, o = 0; n < r.length; n++, o += 8) t[o >>> 5] |= r[n] << 24 - o % 32;
                return t;
            },
            wordsToBytes: function(r) {
                for (var t = [], n = 0; n < 32 * r.length; n += 8) t.push(r[n >>> 5] >>> 24 - n % 32 & 255);
                return t;
            },
            bytesToHex: function(r) {
                for (var t = [], n = 0; n < r.length; n++) t.push((r[n] >>> 4).toString(16)), t.push((15 & r[n]).toString(16));
                return t.join("");
            },
            hexToBytes: function(r) {
                for (var t = [], n = 0; n < r.length; n += 2) t.push(parseInt(r.substr(n, 2), 16));
                return t;
            },
            bytesToBase64: function(r) {
                for (var n = [], o = 0; o < r.length; o += 3) for (var e = r[o] << 16 | r[o + 1] << 8 | r[o + 2], u = 0; u < 4; u++) 8 * o + 6 * u <= 8 * r.length ? n.push(t.charAt(e >>> 6 * (3 - u) & 63)) : n.push("=");
                return n.join("");
            },
            base64ToBytes: function(r) {
                r = r.replace(/[^A-Z0-9+\/]/gi, "");
                for (var n = [], o = 0, e = 0; o < r.length; e = ++o % 4) 0 != e && n.push((t.indexOf(r.charAt(o - 1)) & Math.pow(2, -2 * e + 8) - 1) << 2 * e | t.indexOf(r.charAt(o)) >>> 6 - 2 * e);
                return n;
            }
        };
        r.exports = n;
    }();
}), n = {
    utf8: {
        stringToBytes: function(r) {
            return n.bin.stringToBytes(unescape(encodeURIComponent(r)));
        },
        bytesToString: function(r) {
            return decodeURIComponent(escape(n.bin.bytesToString(r)));
        }
    },
    bin: {
        stringToBytes: function(r) {
            for (var t = [], n = 0; n < r.length; n++) t.push(255 & r.charCodeAt(n));
            return t;
        },
        bytesToString: function(r) {
            for (var t = [], n = 0; n < r.length; n++) t.push(String.fromCharCode(r[n]));
            return t.join("");
        }
    }
}, o = n, e = function(r) {
    return null != r && (u(r) || function(r) {
        return "function" == typeof r.readFloatLE && "function" == typeof r.slice && u(r.slice(0, 0));
    }(r) || !!r._isBuffer);
};

function u(r) {
    return !!r.constructor && "function" == typeof r.constructor.isBuffer && r.constructor.isBuffer(r);
}

var i = r(function(r) {
    !function() {
        var n = t, u = o.utf8, i = e, s = o.bin, f = function r(t, o) {
            t.constructor == String ? t = o && "binary" === o.encoding ? s.stringToBytes(t) : u.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());
            for (var e = n.bytesToWords(t), f = 8 * t.length, c = 1732584193, a = -271733879, g = -1732584194, h = 271733878, l = 0; l < e.length; l++) e[l] = 16711935 & (e[l] << 8 | e[l] >>> 24) | 4278255360 & (e[l] << 24 | e[l] >>> 8);
            e[f >>> 5] |= 128 << f % 32, e[14 + (f + 64 >>> 9 << 4)] = f;
            var p = r._ff, y = r._gg, v = r._hh, d = r._ii;
            for (l = 0; l < e.length; l += 16) {
                var b = c, T = a, B = g, x = h;
                c = p(c, a, g, h, e[l + 0], 7, -680876936), h = p(h, c, a, g, e[l + 1], 12, -389564586), 
                g = p(g, h, c, a, e[l + 2], 17, 606105819), a = p(a, g, h, c, e[l + 3], 22, -1044525330), 
                c = p(c, a, g, h, e[l + 4], 7, -176418897), h = p(h, c, a, g, e[l + 5], 12, 1200080426), 
                g = p(g, h, c, a, e[l + 6], 17, -1473231341), a = p(a, g, h, c, e[l + 7], 22, -45705983), 
                c = p(c, a, g, h, e[l + 8], 7, 1770035416), h = p(h, c, a, g, e[l + 9], 12, -1958414417), 
                g = p(g, h, c, a, e[l + 10], 17, -42063), a = p(a, g, h, c, e[l + 11], 22, -1990404162), 
                c = p(c, a, g, h, e[l + 12], 7, 1804603682), h = p(h, c, a, g, e[l + 13], 12, -40341101), 
                g = p(g, h, c, a, e[l + 14], 17, -1502002290), c = y(c, a = p(a, g, h, c, e[l + 15], 22, 1236535329), g, h, e[l + 1], 5, -165796510), 
                h = y(h, c, a, g, e[l + 6], 9, -1069501632), g = y(g, h, c, a, e[l + 11], 14, 643717713), 
                a = y(a, g, h, c, e[l + 0], 20, -373897302), c = y(c, a, g, h, e[l + 5], 5, -701558691), 
                h = y(h, c, a, g, e[l + 10], 9, 38016083), g = y(g, h, c, a, e[l + 15], 14, -660478335), 
                a = y(a, g, h, c, e[l + 4], 20, -405537848), c = y(c, a, g, h, e[l + 9], 5, 568446438), 
                h = y(h, c, a, g, e[l + 14], 9, -1019803690), g = y(g, h, c, a, e[l + 3], 14, -187363961), 
                a = y(a, g, h, c, e[l + 8], 20, 1163531501), c = y(c, a, g, h, e[l + 13], 5, -1444681467), 
                h = y(h, c, a, g, e[l + 2], 9, -51403784), g = y(g, h, c, a, e[l + 7], 14, 1735328473), 
                c = v(c, a = y(a, g, h, c, e[l + 12], 20, -1926607734), g, h, e[l + 5], 4, -378558), 
                h = v(h, c, a, g, e[l + 8], 11, -2022574463), g = v(g, h, c, a, e[l + 11], 16, 1839030562), 
                a = v(a, g, h, c, e[l + 14], 23, -35309556), c = v(c, a, g, h, e[l + 1], 4, -1530992060), 
                h = v(h, c, a, g, e[l + 4], 11, 1272893353), g = v(g, h, c, a, e[l + 7], 16, -155497632), 
                a = v(a, g, h, c, e[l + 10], 23, -1094730640), c = v(c, a, g, h, e[l + 13], 4, 681279174), 
                h = v(h, c, a, g, e[l + 0], 11, -358537222), g = v(g, h, c, a, e[l + 3], 16, -722521979), 
                a = v(a, g, h, c, e[l + 6], 23, 76029189), c = v(c, a, g, h, e[l + 9], 4, -640364487), 
                h = v(h, c, a, g, e[l + 12], 11, -421815835), g = v(g, h, c, a, e[l + 15], 16, 530742520), 
                c = d(c, a = v(a, g, h, c, e[l + 2], 23, -995338651), g, h, e[l + 0], 6, -198630844), 
                h = d(h, c, a, g, e[l + 7], 10, 1126891415), g = d(g, h, c, a, e[l + 14], 15, -1416354905), 
                a = d(a, g, h, c, e[l + 5], 21, -57434055), c = d(c, a, g, h, e[l + 12], 6, 1700485571), 
                h = d(h, c, a, g, e[l + 3], 10, -1894986606), g = d(g, h, c, a, e[l + 10], 15, -1051523), 
                a = d(a, g, h, c, e[l + 1], 21, -2054922799), c = d(c, a, g, h, e[l + 8], 6, 1873313359), 
                h = d(h, c, a, g, e[l + 15], 10, -30611744), g = d(g, h, c, a, e[l + 6], 15, -1560198380), 
                a = d(a, g, h, c, e[l + 13], 21, 1309151649), c = d(c, a, g, h, e[l + 4], 6, -145523070), 
                h = d(h, c, a, g, e[l + 11], 10, -1120210379), g = d(g, h, c, a, e[l + 2], 15, 718787259), 
                a = d(a, g, h, c, e[l + 9], 21, -343485551), c = c + b >>> 0, a = a + T >>> 0, g = g + B >>> 0, 
                h = h + x >>> 0;
            }
            return n.endian([ c, a, g, h ]);
        };
        f._ff = function(r, t, n, o, e, u, i) {
            var s = r + (t & n | ~t & o) + (e >>> 0) + i;
            return (s << u | s >>> 32 - u) + t;
        }, f._gg = function(r, t, n, o, e, u, i) {
            var s = r + (t & o | n & ~o) + (e >>> 0) + i;
            return (s << u | s >>> 32 - u) + t;
        }, f._hh = function(r, t, n, o, e, u, i) {
            var s = r + (t ^ n ^ o) + (e >>> 0) + i;
            return (s << u | s >>> 32 - u) + t;
        }, f._ii = function(r, t, n, o, e, u, i) {
            var s = r + (n ^ (t | ~o)) + (e >>> 0) + i;
            return (s << u | s >>> 32 - u) + t;
        }, f._blocksize = 16, f._digestsize = 16, r.exports = function(r, t) {
            if (null == r) throw new Error("Illegal argument " + r);
            var o = n.wordsToBytes(f(r, t));
            return t && t.asBytes ? o : t && t.asString ? s.bytesToString(o) : n.bytesToHex(o);
        };
    }();
});

exports.default = i;