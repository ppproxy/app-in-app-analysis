var r, e = require("../../@babel/runtime/helpers/typeof");

r = function(r) {
    return function(e) {
        var o = r, t = o.lib, i = t.WordArray, h = t.Hasher, a = o.x64.Word, n = o.algo, f = [], s = [], c = [];
        !function() {
            for (var r = 1, e = 0, o = 0; o < 24; o++) {
                f[r + 5 * e] = (o + 1) * (o + 2) / 2 % 64;
                var t = (2 * r + 3 * e) % 5;
                r = e % 5, e = t;
            }
            for (r = 0; r < 5; r++) for (e = 0; e < 5; e++) s[r + 5 * e] = e + (2 * r + 3 * e) % 5 * 5;
            for (var i = 1, h = 0; h < 24; h++) {
                for (var n = 0, l = 0, v = 0; v < 7; v++) {
                    if (1 & i) {
                        var g = (1 << v) - 1;
                        g < 32 ? l ^= 1 << g : n ^= 1 << g - 32;
                    }
                    128 & i ? i = i << 1 ^ 113 : i <<= 1;
                }
                c[h] = a.create(n, l);
            }
        }();
        var l = [];
        !function() {
            for (var r = 0; r < 25; r++) l[r] = a.create();
        }();
        var v = n.SHA3 = h.extend({
            cfg: h.cfg.extend({
                outputLength: 512
            }),
            _doReset: function() {
                for (var r = this._state = [], e = 0; e < 25; e++) r[e] = new a.init();
                this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
            },
            _doProcessBlock: function(r, e) {
                for (var o = this._state, t = this.blockSize / 2, i = 0; i < t; i++) {
                    var h = r[e + 2 * i], a = r[e + 2 * i + 1];
                    h = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8), a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                    (B = o[i]).high ^= a, B.low ^= h;
                }
                for (var n = 0; n < 24; n++) {
                    for (var v = 0; v < 5; v++) {
                        for (var g = 0, u = 0, w = 0; w < 5; w++) g ^= (B = o[v + 5 * w]).high, u ^= B.low;
                        var d = l[v];
                        d.high = g, d.low = u;
                    }
                    for (v = 0; v < 5; v++) {
                        var p = l[(v + 4) % 5], _ = l[(v + 1) % 5], x = _.high, H = _.low;
                        for (g = p.high ^ (x << 1 | H >>> 31), u = p.low ^ (H << 1 | x >>> 31), w = 0; w < 5; w++) (B = o[v + 5 * w]).high ^= g, 
                        B.low ^= u;
                    }
                    for (var y = 1; y < 25; y++) {
                        var S = (B = o[y]).high, b = B.low, m = f[y];
                        m < 32 ? (g = S << m | b >>> 32 - m, u = b << m | S >>> 32 - m) : (g = b << m - 32 | S >>> 64 - m, 
                        u = S << m - 32 | b >>> 64 - m);
                        var A = l[s[y]];
                        A.high = g, A.low = u;
                    }
                    var k = l[0], z = o[0];
                    for (k.high = z.high, k.low = z.low, v = 0; v < 5; v++) for (w = 0; w < 5; w++) {
                        var B = o[y = v + 5 * w], q = l[y], L = l[(v + 1) % 5 + 5 * w], W = l[(v + 2) % 5 + 5 * w];
                        B.high = q.high ^ ~L.high & W.high, B.low = q.low ^ ~L.low & W.low;
                    }
                    B = o[0];
                    var j = c[n];
                    B.high ^= j.high, B.low ^= j.low;
                }
            },
            _doFinalize: function() {
                var r = this._data, o = r.words, t = (this._nDataBytes, 8 * r.sigBytes), h = 32 * this.blockSize;
                o[t >>> 5] |= 1 << 24 - t % 32, o[(e.ceil((t + 1) / h) * h >>> 5) - 1] |= 128, r.sigBytes = 4 * o.length, 
                this._process();
                for (var a = this._state, n = this.cfg.outputLength / 8, f = n / 8, s = [], c = 0; c < f; c++) {
                    var l = a[c], v = l.high, g = l.low;
                    v = 16711935 & (v << 8 | v >>> 24) | 4278255360 & (v << 24 | v >>> 8), g = 16711935 & (g << 8 | g >>> 24) | 4278255360 & (g << 24 | g >>> 8), 
                    s.push(g), s.push(v);
                }
                return new i.init(s, n);
            },
            clone: function() {
                for (var r = h.clone.call(this), e = r._state = this._state.slice(0), o = 0; o < 25; o++) e[o] = e[o].clone();
                return r;
            }
        });
        o.SHA3 = h._createHelper(v), o.HmacSHA3 = h._createHmacHelper(v);
    }(Math), r.SHA3;
}, "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) ? module.exports = exports = r(require("./core"), require("./x64-core")) : "function" == typeof define && define.amd ? define([ "./core", "./x64-core" ], r) : r((void 0).CryptoJS);