var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.mode.CFB = function() {
        var r = e.lib.BlockCipherMode.extend();
        function i(e, r, i, o) {
            var c = this._iv;
            if (c) {
                var t = c.slice(0);
                this._iv = void 0;
            } else t = this._prevBlock;
            o.encryptBlock(t, 0);
            for (var n = 0; n < i; n++) e[r + n] ^= t[n];
        }
        return r.Encryptor = r.extend({
            processBlock: function(e, r) {
                var o = this._cipher, c = o.blockSize;
                i.call(this, e, r, c, o), this._prevBlock = e.slice(r, r + c);
            }
        }), r.Decryptor = r.extend({
            processBlock: function(e, r) {
                var o = this._cipher, c = o.blockSize, t = e.slice(r, r + c);
                i.call(this, e, r, c, o), this._prevBlock = t;
            }
        }), r;
    }(), e.mode.CFB;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./cipher-core" ], e) : e((void 0).CryptoJS);