var e, i = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    var i, n, r, t, o, a, d;
    return n = (i = e).x64, r = n.Word, t = n.WordArray, o = i.algo, a = o.SHA512, d = o.SHA384 = a.extend({
        _doReset: function() {
            this._hash = new t.init([ new r.init(3418070365, 3238371032), new r.init(1654270250, 914150663), new r.init(2438529370, 812702999), new r.init(355462360, 4144912697), new r.init(1731405415, 4290775857), new r.init(2394180231, 1750603025), new r.init(3675008525, 1694076839), new r.init(1203062813, 3204075428) ]);
        },
        _doFinalize: function() {
            var e = a._doFinalize.call(this);
            return e.sigBytes -= 16, e;
        }
    }), i.SHA384 = a._createHelper(d), i.HmacSHA384 = a._createHmacHelper(d), e.SHA384;
}, "object" === ("undefined" == typeof exports ? "undefined" : i(exports)) ? module.exports = exports = e(require("./core"), require("./x64-core"), require("./sha512")) : "function" == typeof define && define.amd ? define([ "./core", "./x64-core", "./sha512" ], e) : e((void 0).CryptoJS);