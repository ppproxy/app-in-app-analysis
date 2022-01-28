var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.mode.CTRGladman = function() {
        var r = e.lib.BlockCipherMode.extend();
        function o(e) {
            if (255 == (e >> 24 & 255)) {
                var r = e >> 16 & 255, o = e >> 8 & 255, i = 255 & e;
                255 === r ? (r = 0, 255 === o ? (o = 0, 255 === i ? i = 0 : ++i) : ++o) : ++r, e = 0, 
                e += r << 16, e += o << 8, e += i;
            } else e += 1 << 24;
            return e;
        }
        var i = r.Encryptor = r.extend({
            processBlock: function(e, r) {
                var i = this._cipher, t = i.blockSize, n = this._iv, c = this._counter;
                n && (c = this._counter = n.slice(0), this._iv = void 0), function(e) {
                    0 === (e[0] = o(e[0])) && (e[1] = o(e[1]));
                }(c);
                var u = c.slice(0);
                i.encryptBlock(u, 0);
                for (var d = 0; d < t; d++) e[r + d] ^= u[d];
            }
        });
        return r.Decryptor = i, r;
    }(), e.mode.CTRGladman;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./cipher-core" ], e) : e((void 0).CryptoJS);