var t, n = require("../../@babel/runtime/helpers/typeof");

t = function() {
    var t = t || function(t, n) {
        var e = Object.create || function() {
            function t() {}
            return function(n) {
                var e;
                return t.prototype = n, e = new t(), t.prototype = null, e;
            };
        }(), i = {}, r = i.lib = {}, o = r.Base = {
            extend: function(t) {
                var n = e(this);
                return t && n.mixIn(t), n.hasOwnProperty("init") && this.init !== n.init || (n.init = function() {
                    n.$super.init.apply(this, arguments);
                }), n.init.prototype = n, n.$super = this, n;
            },
            create: function() {
                var t = this.extend();
                return t.init.apply(t, arguments), t;
            },
            init: function() {},
            mixIn: function(t) {
                for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
                t.hasOwnProperty("toString") && (this.toString = t.toString);
            },
            clone: function() {
                return this.init.prototype.extend(this);
            }
        }, s = r.WordArray = o.extend({
            init: function(t, n) {
                t = this.words = t || [], this.sigBytes = null != n ? n : 4 * t.length;
            },
            toString: function(t) {
                return (t || u).stringify(this);
            },
            concat: function(t) {
                var n = this.words, e = t.words, i = this.sigBytes, r = t.sigBytes;
                if (this.clamp(), i % 4) for (var o = 0; o < r; o++) {
                    var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                    n[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8;
                } else for (o = 0; o < r; o += 4) n[i + o >>> 2] = e[o >>> 2];
                return this.sigBytes += r, this;
            },
            clamp: function() {
                var n = this.words, e = this.sigBytes;
                n[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, n.length = t.ceil(e / 4);
            },
            clone: function() {
                var t = o.clone.call(this);
                return t.words = this.words.slice(0), t;
            },
            random: function(n) {
                for (var e, i = [], r = function(n) {
                    n = n;
                    var e = 987654321, i = 4294967295;
                    return function() {
                        var r = ((e = 36969 * (65535 & e) + (e >> 16) & i) << 16) + (n = 18e3 * (65535 & n) + (n >> 16) & i) & i;
                        return r /= 4294967296, (r += .5) * (t.random() > .5 ? 1 : -1);
                    };
                }, o = 0; o < n; o += 4) {
                    var a = r(4294967296 * (e || t.random()));
                    e = 987654071 * a(), i.push(4294967296 * a() | 0);
                }
                return new s.init(i, n);
            }
        }), a = i.enc = {}, u = a.Hex = {
            stringify: function(t) {
                for (var n = t.words, e = t.sigBytes, i = [], r = 0; r < e; r++) {
                    var o = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16));
                }
                return i.join("");
            },
            parse: function(t) {
                for (var n = t.length, e = [], i = 0; i < n; i += 2) e[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                return new s.init(e, n / 2);
            }
        }, c = a.Latin1 = {
            stringify: function(t) {
                for (var n = t.words, e = t.sigBytes, i = [], r = 0; r < e; r++) {
                    var o = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    i.push(String.fromCharCode(o));
                }
                return i.join("");
            },
            parse: function(t) {
                for (var n = t.length, e = [], i = 0; i < n; i++) e[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                return new s.init(e, n);
            }
        }, f = a.Utf8 = {
            stringify: function(t) {
                try {
                    return decodeURIComponent(escape(c.stringify(t)));
                } catch (t) {
                    throw new Error("Malformed UTF-8 data");
                }
            },
            parse: function(t) {
                return c.parse(unescape(encodeURIComponent(t)));
            }
        }, h = r.BufferedBlockAlgorithm = o.extend({
            reset: function() {
                this._data = new s.init(), this._nDataBytes = 0;
            },
            _append: function(t) {
                "string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
            },
            _process: function(n) {
                var e = this._data, i = e.words, r = e.sigBytes, o = this.blockSize, a = r / (4 * o), u = (a = n ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * o, c = t.min(4 * u, r);
                if (u) {
                    for (var f = 0; f < u; f += o) this._doProcessBlock(i, f);
                    var h = i.splice(0, u);
                    e.sigBytes -= c;
                }
                return new s.init(h, c);
            },
            clone: function() {
                var t = o.clone.call(this);
                return t._data = this._data.clone(), t;
            },
            _minBufferSize: 0
        }), p = (r.Hasher = h.extend({
            cfg: o.extend(),
            init: function(t) {
                this.cfg = this.cfg.extend(t), this.reset();
            },
            reset: function() {
                h.reset.call(this), this._doReset();
            },
            update: function(t) {
                return this._append(t), this._process(), this;
            },
            finalize: function(t) {
                return t && this._append(t), this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function(t) {
                return function(n, e) {
                    return new t.init(e).finalize(n);
                };
            },
            _createHmacHelper: function(t) {
                return function(n, e) {
                    return new p.HMAC.init(t, e).finalize(n);
                };
            }
        }), i.algo = {});
        return i;
    }(Math);
    return t;
}, "object" === ("undefined" == typeof exports ? "undefined" : n(exports)) ? module.exports = exports = t() : "function" == typeof define && define.amd ? define([], t) : (void 0).CryptoJS = t();