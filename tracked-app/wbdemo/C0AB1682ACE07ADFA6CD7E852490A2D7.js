var _typeof2 = require("@babel/runtime/helpers/typeof.js");

!function(e, r) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof2(exports)) && "undefined" != typeof module ? module.exports = r(e) : "function" == typeof define && define.amd ? define(r) : r(e);
}("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0, function(global) {
    var _Base64 = global.Base64, version = "2.4.9", buffer;
    if ("undefined" != typeof module && module.exports) try {
        buffer = eval("require('buffer').Buffer");
    } catch (e) {
        buffer = void 0;
    }
    var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b64tab = function(e) {
        for (var r = {}, o = 0, t = e.length; o < t; o++) r[e.charAt(o)] = o;
        return r;
    }(b64chars), fromCharCode = String.fromCharCode, cb_utob = function(e) {
        if (e.length < 2) return (r = e.charCodeAt(0)) < 128 ? e : r < 2048 ? fromCharCode(192 | r >>> 6) + fromCharCode(128 | 63 & r) : fromCharCode(224 | r >>> 12 & 15) + fromCharCode(128 | r >>> 6 & 63) + fromCharCode(128 | 63 & r);
        var r = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
        return fromCharCode(240 | r >>> 18 & 7) + fromCharCode(128 | r >>> 12 & 63) + fromCharCode(128 | r >>> 6 & 63) + fromCharCode(128 | 63 & r);
    }, re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, utob = function(e) {
        return e.replace(re_utob, cb_utob);
    }, cb_encode = function(e) {
        var r = [ 0, 2, 1 ][e.length % 3], o = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
        return [ b64chars.charAt(o >>> 18), b64chars.charAt(o >>> 12 & 63), r >= 2 ? "=" : b64chars.charAt(o >>> 6 & 63), r >= 1 ? "=" : b64chars.charAt(63 & o) ].join("");
    }, btoa = global.btoa ? function(e) {
        return global.btoa(e);
    } : function(e) {
        return e.replace(/[\s\S]{1,3}/g, cb_encode);
    }, _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(e) {
        return (e.constructor === buffer.constructor ? e : buffer.from(e)).toString("base64");
    } : function(e) {
        return (e.constructor === buffer.constructor ? e : new buffer(e)).toString("base64");
    } : function(e) {
        return btoa(utob(e));
    }, encode = function(e, r) {
        return r ? _encode(String(e)).replace(/[+\/]/g, function(e) {
            return "+" == e ? "-" : "_";
        }).replace(/=/g, "") : _encode(String(e));
    }, encodeURI = function(e) {
        return encode(e, !0);
    }, re_btou = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), cb_btou = function(e) {
        switch (e.length) {
          case 4:
            var r = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
            return fromCharCode(55296 + (r >>> 10)) + fromCharCode(56320 + (1023 & r));

          case 3:
            return fromCharCode((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

          default:
            return fromCharCode((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
        }
    }, btou = function(e) {
        return e.replace(re_btou, cb_btou);
    }, cb_decode = function(e) {
        var r = e.length, o = r % 4, t = (r > 0 ? b64tab[e.charAt(0)] << 18 : 0) | (r > 1 ? b64tab[e.charAt(1)] << 12 : 0) | (r > 2 ? b64tab[e.charAt(2)] << 6 : 0) | (r > 3 ? b64tab[e.charAt(3)] : 0), n = [ fromCharCode(t >>> 16), fromCharCode(t >>> 8 & 255), fromCharCode(255 & t) ];
        return n.length -= [ 0, 0, 2, 1 ][o], n.join("");
    }, atob = global.atob ? function(e) {
        return global.atob(e);
    } : function(e) {
        return e.replace(/[\s\S]{1,4}/g, cb_decode);
    }, _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(e) {
        return (e.constructor === buffer.constructor ? e : buffer.from(e, "base64")).toString();
    } : function(e) {
        return (e.constructor === buffer.constructor ? e : new buffer(e, "base64")).toString();
    } : function(e) {
        return btou(atob(e));
    }, decode = function(e) {
        return _decode(_decode(String(binaryToStr(xor(e))).replace(/[-_]/g, function(e) {
            return "-" == e ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, "")));
    }, binaryToStr = function(e) {
        for (var r = [], o = e.split(" "), t = 17; t < o.length; t++) {
            var n = o[t], f = parseInt(n, 2), a = String.fromCharCode(f);
            r.push(a);
        }
        return r.join("");
    }, xor = function(e) {
        for (var r = [], o = 0; o < e.length; o++) {
            var t = e[o];
            if (" " != t) {
                var n = 1 ^ t;
                r.push(n);
            } else r.push(t);
        }
        return r.join("");
    }, strToBinary = function(e) {
        for (var r = [], o = e.split(""), t = 0; t < o.length; t++) {
            0 != t && r.push(" ");
            var n = o[t].charCodeAt().toString(2);
            r.push(n);
        }
        return r.join("");
    }, noConflict = function() {
        var e = global.Base64;
        return global.Base64 = _Base64, e;
    };
    if (global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    }, "function" == typeof Object.defineProperty) {
        var noEnum = function(e) {
            return {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            };
        };
        global.Base64.extendString = function() {
            Object.defineProperty(String.prototype, "fromBase64", noEnum(function() {
                return decode(this);
            })), Object.defineProperty(String.prototype, "toBase64", noEnum(function(e) {
                return encode(this, e);
            })), Object.defineProperty(String.prototype, "toBase64URI", noEnum(function() {
                return encode(this, !0);
            }));
        };
    }
    return global.Meteor && (Base64 = global.Base64), "undefined" != typeof module && module.exports ? module.exports.Base64 = global.Base64 : "function" == typeof define && define.amd && define([], function() {
        return global.Base64;
    }), {
        Base64: global.Base64
    };
});