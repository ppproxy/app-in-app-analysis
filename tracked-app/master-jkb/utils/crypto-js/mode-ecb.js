var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    var r;
    return e.mode.ECB = ((r = e.lib.BlockCipherMode.extend()).Encryptor = r.extend({
        processBlock: function(e, r) {
            this._cipher.encryptBlock(e, r);
        }
    }), r.Decryptor = r.extend({
        processBlock: function(e, r) {
            this._cipher.decryptBlock(e, r);
        }
    }), r), e.mode.ECB;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./cipher-core" ], e) : e((void 0).CryptoJS);