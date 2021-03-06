var e, t = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    var t, r, i, n, c, o, s, a, f, p, d, h, u, l, _, y, v, k;
    e.lib.Cipher || (r = (t = e).lib, i = r.Base, n = r.WordArray, c = r.BufferedBlockAlgorithm, 
    (o = t.enc).Utf8, s = o.Base64, a = t.algo.EvpKDF, f = r.Cipher = c.extend({
        cfg: i.extend(),
        createEncryptor: function(e, t) {
            return this.create(this._ENC_XFORM_MODE, e, t);
        },
        createDecryptor: function(e, t) {
            return this.create(this._DEC_XFORM_MODE, e, t);
        },
        init: function(e, t, r) {
            this.cfg = this.cfg.extend(r), this._xformMode = e, this._key = t, this.reset();
        },
        reset: function() {
            c.reset.call(this), this._doReset();
        },
        process: function(e) {
            return this._append(e), this._process();
        },
        finalize: function(e) {
            return e && this._append(e), this._doFinalize();
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function() {
            function e(e) {
                return "string" == typeof e ? k : y;
            }
            return function(t) {
                return {
                    encrypt: function(r, i, n) {
                        return e(i).encrypt(t, r, i, n);
                    },
                    decrypt: function(r, i, n) {
                        return e(i).decrypt(t, r, i, n);
                    }
                };
            };
        }()
    }), r.StreamCipher = f.extend({
        _doFinalize: function() {
            return this._process(!0);
        },
        blockSize: 1
    }), p = t.mode = {}, d = r.BlockCipherMode = i.extend({
        createEncryptor: function(e, t) {
            return this.Encryptor.create(e, t);
        },
        createDecryptor: function(e, t) {
            return this.Decryptor.create(e, t);
        },
        init: function(e, t) {
            this._cipher = e, this._iv = t;
        }
    }), h = p.CBC = function() {
        var e = d.extend();
        function t(e, t, r) {
            var i = this._iv;
            if (i) {
                var n = i;
                this._iv = void 0;
            } else n = this._prevBlock;
            for (var c = 0; c < r; c++) e[t + c] ^= n[c];
        }
        return e.Encryptor = e.extend({
            processBlock: function(e, r) {
                var i = this._cipher, n = i.blockSize;
                t.call(this, e, r, n), i.encryptBlock(e, r), this._prevBlock = e.slice(r, r + n);
            }
        }), e.Decryptor = e.extend({
            processBlock: function(e, r) {
                var i = this._cipher, n = i.blockSize, c = e.slice(r, r + n);
                i.decryptBlock(e, r), t.call(this, e, r, n), this._prevBlock = c;
            }
        }), e;
    }(), u = (t.pad = {}).Pkcs7 = {
        pad: function(e, t) {
            for (var r = 4 * t, i = r - e.sigBytes % r, c = i << 24 | i << 16 | i << 8 | i, o = [], s = 0; s < i; s += 4) o.push(c);
            var a = n.create(o, i);
            e.concat(a);
        },
        unpad: function(e) {
            var t = 255 & e.words[e.sigBytes - 1 >>> 2];
            e.sigBytes -= t;
        }
    }, r.BlockCipher = f.extend({
        cfg: f.cfg.extend({
            mode: h,
            padding: u
        }),
        reset: function() {
            f.reset.call(this);
            var e = this.cfg, t = e.iv, r = e.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var i = r.createEncryptor; else i = r.createDecryptor, 
            this._minBufferSize = 1;
            this._mode && this._mode.__creator == i ? this._mode.init(this, t && t.words) : (this._mode = i.call(r, this, t && t.words), 
            this._mode.__creator = i);
        },
        _doProcessBlock: function(e, t) {
            this._mode.processBlock(e, t);
        },
        _doFinalize: function() {
            var e = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                e.pad(this._data, this.blockSize);
                var t = this._process(!0);
            } else t = this._process(!0), e.unpad(t);
            return t;
        },
        blockSize: 4
    }), l = r.CipherParams = i.extend({
        init: function(e) {
            this.mixIn(e);
        },
        toString: function(e) {
            return (e || this.formatter).stringify(this);
        }
    }), _ = (t.format = {}).OpenSSL = {
        stringify: function(e) {
            var t = e.ciphertext, r = e.salt;
            if (r) var i = n.create([ 1398893684, 1701076831 ]).concat(r).concat(t); else i = t;
            return i.toString(s);
        },
        parse: function(e) {
            var t = s.parse(e), r = t.words;
            if (1398893684 == r[0] && 1701076831 == r[1]) {
                var i = n.create(r.slice(2, 4));
                r.splice(0, 4), t.sigBytes -= 16;
            }
            return l.create({
                ciphertext: t,
                salt: i
            });
        }
    }, y = r.SerializableCipher = i.extend({
        cfg: i.extend({
            format: _
        }),
        encrypt: function(e, t, r, i) {
            i = this.cfg.extend(i);
            var n = e.createEncryptor(r, i), c = n.finalize(t), o = n.cfg;
            return l.create({
                ciphertext: c,
                key: r,
                iv: o.iv,
                algorithm: e,
                mode: o.mode,
                padding: o.padding,
                blockSize: e.blockSize,
                formatter: i.format
            });
        },
        decrypt: function(e, t, r, i) {
            return i = this.cfg.extend(i), t = this._parse(t, i.format), e.createDecryptor(r, i).finalize(t.ciphertext);
        },
        _parse: function(e, t) {
            return "string" == typeof e ? t.parse(e, this) : e;
        }
    }), v = (t.kdf = {}).OpenSSL = {
        execute: function(e, t, r, i) {
            i || (i = n.random(8));
            var c = a.create({
                keySize: t + r
            }).compute(e, i), o = n.create(c.words.slice(t), 4 * r);
            return c.sigBytes = 4 * t, l.create({
                key: c,
                iv: o,
                salt: i
            });
        }
    }, k = r.PasswordBasedCipher = y.extend({
        cfg: y.cfg.extend({
            kdf: v
        }),
        encrypt: function(e, t, r, i) {
            var n = (i = this.cfg.extend(i)).kdf.execute(r, e.keySize, e.ivSize);
            i.iv = n.iv;
            var c = y.encrypt.call(this, e, t, n.key, i);
            return c.mixIn(n), c;
        },
        decrypt: function(e, t, r, i) {
            i = this.cfg.extend(i), t = this._parse(t, i.format);
            var n = i.kdf.execute(r, e.keySize, e.ivSize, t.salt);
            return i.iv = n.iv, y.decrypt.call(this, e, t, n.key, i);
        }
    }));
}, "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) ? module.exports = exports = e(require("./core"), require("./evpkdf")) : "function" == typeof define && define.amd ? define([ "./core", "./evpkdf" ], e) : e((void 0).CryptoJS);