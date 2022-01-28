var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return function() {
        var r = e, i = r.lib.BlockCipher, o = r.algo, t = [], n = [], s = [], c = [], d = [], u = [], f = [], h = [], p = [], a = [];
        !function() {
            for (var e = [], r = 0; r < 256; r++) e[r] = r < 128 ? r << 1 : r << 1 ^ 283;
            var i = 0, o = 0;
            for (r = 0; r < 256; r++) {
                var y = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4;
                y = y >>> 8 ^ 255 & y ^ 99, t[i] = y, n[y] = i;
                var v = e[i], l = e[v], _ = e[l], k = 257 * e[y] ^ 16843008 * y;
                s[i] = k << 24 | k >>> 8, c[i] = k << 16 | k >>> 16, d[i] = k << 8 | k >>> 24, u[i] = k, 
                k = 16843009 * _ ^ 65537 * l ^ 257 * v ^ 16843008 * i, f[y] = k << 24 | k >>> 8, 
                h[y] = k << 16 | k >>> 16, p[y] = k << 8 | k >>> 24, a[y] = k, i ? (i = v ^ e[e[e[_ ^ v]]], 
                o ^= e[e[o]]) : i = o = 1;
            }
        }();
        var y = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], v = o.AES = i.extend({
            _doReset: function() {
                if (!this._nRounds || this._keyPriorReset !== this._key) {
                    for (var e = this._keyPriorReset = this._key, r = e.words, i = e.sigBytes / 4, o = 4 * ((this._nRounds = i + 6) + 1), n = this._keySchedule = [], s = 0; s < o; s++) if (s < i) n[s] = r[s]; else {
                        var c = n[s - 1];
                        s % i ? i > 6 && s % i == 4 && (c = t[c >>> 24] << 24 | t[c >>> 16 & 255] << 16 | t[c >>> 8 & 255] << 8 | t[255 & c]) : (c = t[(c = c << 8 | c >>> 24) >>> 24] << 24 | t[c >>> 16 & 255] << 16 | t[c >>> 8 & 255] << 8 | t[255 & c], 
                        c ^= y[s / i | 0] << 24), n[s] = n[s - i] ^ c;
                    }
                    for (var d = this._invKeySchedule = [], u = 0; u < o; u++) s = o - u, c = u % 4 ? n[s] : n[s - 4], 
                    d[u] = u < 4 || s <= 4 ? c : f[t[c >>> 24]] ^ h[t[c >>> 16 & 255]] ^ p[t[c >>> 8 & 255]] ^ a[t[255 & c]];
                }
            },
            encryptBlock: function(e, r) {
                this._doCryptBlock(e, r, this._keySchedule, s, c, d, u, t);
            },
            decryptBlock: function(e, r) {
                var i = e[r + 1];
                e[r + 1] = e[r + 3], e[r + 3] = i, this._doCryptBlock(e, r, this._invKeySchedule, f, h, p, a, n), 
                i = e[r + 1], e[r + 1] = e[r + 3], e[r + 3] = i;
            },
            _doCryptBlock: function(e, r, i, o, t, n, s, c) {
                for (var d = this._nRounds, u = e[r] ^ i[0], f = e[r + 1] ^ i[1], h = e[r + 2] ^ i[2], p = e[r + 3] ^ i[3], a = 4, y = 1; y < d; y++) {
                    var v = o[u >>> 24] ^ t[f >>> 16 & 255] ^ n[h >>> 8 & 255] ^ s[255 & p] ^ i[a++], l = o[f >>> 24] ^ t[h >>> 16 & 255] ^ n[p >>> 8 & 255] ^ s[255 & u] ^ i[a++], _ = o[h >>> 24] ^ t[p >>> 16 & 255] ^ n[u >>> 8 & 255] ^ s[255 & f] ^ i[a++], k = o[p >>> 24] ^ t[u >>> 16 & 255] ^ n[f >>> 8 & 255] ^ s[255 & h] ^ i[a++];
                    u = v, f = l, h = _, p = k;
                }
                v = (c[u >>> 24] << 24 | c[f >>> 16 & 255] << 16 | c[h >>> 8 & 255] << 8 | c[255 & p]) ^ i[a++], 
                l = (c[f >>> 24] << 24 | c[h >>> 16 & 255] << 16 | c[p >>> 8 & 255] << 8 | c[255 & u]) ^ i[a++], 
                _ = (c[h >>> 24] << 24 | c[p >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & f]) ^ i[a++], 
                k = (c[p >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[f >>> 8 & 255] << 8 | c[255 & h]) ^ i[a++], 
                e[r] = v, e[r + 1] = l, e[r + 2] = _, e[r + 3] = k;
            },
            keySize: 8
        });
        r.AES = i._createHelper(v);
    }(), e.AES;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core" ], e) : e((void 0).CryptoJS);