var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return function() {
        if ("function" == typeof ArrayBuffer) {
            var r = e.lib.WordArray, n = r.init;
            (r.init = function(e) {
                if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), 
                e instanceof Uint8Array) {
                    for (var r = e.byteLength, t = [], i = 0; i < r; i++) t[i >>> 2] |= e[i] << 24 - i % 4 * 8;
                    n.call(this, t, r);
                } else n.apply(this, arguments);
            }).prototype = r;
        }
    }(), e.lib.WordArray;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core")) : "function" == typeof define && define.amd ? define([ "./core" ], e) : e((void 0).CryptoJS);