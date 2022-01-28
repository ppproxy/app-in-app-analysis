var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.HmacMD5;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./md5"), require("./hmac")) : "function" == typeof define && define.amd ? define([ "./core", "./md5", "./hmac" ], e) : e((void 0).CryptoJS);