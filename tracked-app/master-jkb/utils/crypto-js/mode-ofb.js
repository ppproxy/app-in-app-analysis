var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    var r, o;
    return e.mode.OFB = (r = e.lib.BlockCipherMode.extend(), o = r.Encryptor = r.extend({
        processBlock: function(e, r) {
            var o = this._cipher, i = o.blockSize, t = this._iv, c = this._keystream;
            t && (c = this._keystream = t.slice(0), this._iv = void 0), o.encryptBlock(c, 0);
            for (var n = 0; n < i; n++) e[r + n] ^= c[n];
        }
    }), r.Decryptor = o, r), e.mode.OFB;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./cipher-core" ], e) : e((void 0).CryptoJS);