var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var e = {}, r = function(r, o) {
        if (!e[r]) return require(o);
        if (!e[r].status) {
            var n = e[r].m;
            n._exports = n._tempexports;
            var i = Object.getOwnPropertyDescriptor(n, "exports");
            i && i.configurable && Object.defineProperty(n, "exports", {
                set: function(e) {
                    "object" === (void 0 === e ? "undefined" : t(e)) && e !== n._exports && (n._exports.__proto__ = e.__proto__, 
                    Object.keys(e).forEach(function(t) {
                        n._exports[t] = e[t];
                    })), n._tempexports = e;
                },
                get: function() {
                    return n._tempexports;
                }
            }), e[r].status = 1, e[r].func(e[r].req, n, n.exports);
        }
        return e[r].m.exports;
    };
    return function(t, r, o) {
        var n = {
            exports: {},
            _tempexports: {}
        };
        e[t] = {
            status: 0,
            func: r,
            req: o,
            m: n
        };
    }(1582902163598, function(e, r, o) {
        function n(t) {
            this.mode = E.MODE_8BIT_BYTE, this.data = t;
        }
        function i(t, e) {
            this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, 
            this.dataCache = null, this.dataList = new Array();
        }
        function a(t, e) {
            if (void 0 == t.length) throw new Error(t.length + "/" + e);
            for (var r = 0; r < t.length && 0 == t[r]; ) r++;
            this.num = new Array(t.length - r + e);
            for (var o = 0; o < t.length - r; o++) this.num[o] = t[o + r];
        }
        function u(t, e) {
            this.totalCount = t, this.dataCount = e;
        }
        function s() {
            this.buffer = new Array(), this.length = 0;
        }
        function h(t) {
            var e, r, o, n;
            for (e = "", o = t.length, r = 0; r < o; r++) (n = t.charCodeAt(r)) >= 1 && n <= 127 ? e += t.charAt(r) : n > 2047 ? (e += String.fromCharCode(224 | n >> 12 & 15), 
            e += String.fromCharCode(128 | n >> 6 & 63), e += String.fromCharCode(128 | n >> 0 & 63)) : (e += String.fromCharCode(192 | n >> 6 & 31), 
            e += String.fromCharCode(128 | n >> 0 & 63));
            return e;
        }
        var f = Object.prototype.hasOwnProperty, l = Object.prototype.toString, g = Object.defineProperty, c = Object.getOwnPropertyDescriptor, d = function(t) {
            return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === l.call(t);
        }, m = function(t) {
            if (!t || "[object Object]" !== l.call(t)) return !1;
            var e, r = f.call(t, "constructor"), o = t.constructor && t.constructor.prototype && f.call(t.constructor.prototype, "isPrototypeOf");
            if (t.constructor && !r && !o) return !1;
            for (e in t) ;
            return void 0 === e || f.call(t, e);
        }, p = function(t, e) {
            g && "__proto__" === e.name ? g(t, e.name, {
                enumerable: !0,
                configurable: !0,
                value: e.newValue,
                writable: !0
            }) : t[e.name] = e.newValue;
        }, v = function(t, e) {
            if ("__proto__" === e) {
                if (!f.call(t, e)) return;
                if (c) return c(t, e).value;
            }
            return t[e];
        }, C = function e() {
            var r, o, n, i, a, u, s = arguments[0], h = 1, f = arguments.length, l = !1;
            for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, h = 2), (null == s || "object" != (void 0 === s ? "undefined" : t(s)) && "function" != typeof s) && (s = {}); h < f; ++h) if (null != (r = arguments[h])) for (o in r) n = v(s, o), 
            s !== (i = v(r, o)) && (l && i && (m(i) || (a = d(i))) ? (a ? (a = !1, u = n && d(n) ? n : []) : u = n && m(n) ? n : {}, 
            p(s, {
                name: o,
                newValue: e(l, u, i)
            })) : void 0 !== i && p(s, {
                name: o,
                newValue: i
            }));
            return s;
        };
        n.prototype = {
            getLength: function(t) {
                return this.data.length;
            },
            write: function(t) {
                for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8);
            }
        }, i.prototype = {
            addData: function(t) {
                var e = new n(t);
                this.dataList.push(e), this.dataCache = null;
            },
            isDark: function(t, e) {
                if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
                return this.modules[t][e];
            },
            getModuleCount: function() {
                return this.moduleCount;
            },
            make: function() {
                if (this.typeNumber < 1) {
                    var t = 1;
                    for (t = 1; t < 40; t++) {
                        for (var e = u.getRSBlocks(t, this.errorCorrectLevel), r = new s(), o = 0, n = 0; n < e.length; n++) o += e[n].dataCount;
                        for (n = 0; n < this.dataList.length; n++) {
                            var i = this.dataList[n];
                            r.put(i.mode, 4), r.put(i.getLength(), A.getLengthInBits(i.mode, t)), i.write(r);
                        }
                        if (r.getLengthInBits() <= 8 * o) break;
                    }
                    this.typeNumber = t;
                }
                this.makeImpl(!1, this.getBestMaskPattern());
            },
            makeImpl: function(t, e) {
                this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                for (var r = 0; r < this.moduleCount; r++) {
                    this.modules[r] = new Array(this.moduleCount);
                    for (var o = 0; o < this.moduleCount; o++) this.modules[r][o] = null;
                }
                this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), 
                this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), 
                this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), 
                null == this.dataCache && (this.dataCache = i.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), 
                this.mapData(this.dataCache, e);
            },
            setupPositionProbePattern: function(t, e) {
                for (var r = -1; r <= 7; r++) if (!(t + r <= -1 || this.moduleCount <= t + r)) for (var o = -1; o <= 7; o++) e + o <= -1 || this.moduleCount <= e + o || (this.modules[t + r][e + o] = 0 <= r && r <= 6 && (0 == o || 6 == o) || 0 <= o && o <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= o && o <= 4);
            },
            getBestMaskPattern: function() {
                for (var t = 0, e = 0, r = 0; r < 8; r++) {
                    this.makeImpl(!0, r);
                    var o = A.getLostPoint(this);
                    (0 == r || t > o) && (t = o, e = r);
                }
                return e;
            },
            createMovieClip: function(t, e, r) {
                var o = t.createEmptyMovieClip(e, r);
                this.make();
                for (var n = 0; n < this.modules.length; n++) for (var i = 1 * n, a = 0; a < this.modules[n].length; a++) {
                    var u = 1 * a;
                    this.modules[n][a] && (o.beginFill(0, 100), o.moveTo(u, i), o.lineTo(u + 1, i), 
                    o.lineTo(u + 1, i + 1), o.lineTo(u, i + 1), o.endFill());
                }
                return o;
            },
            setupTimingPattern: function() {
                for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
                for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
            },
            setupPositionAdjustPattern: function() {
                for (var t = A.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var r = 0; r < t.length; r++) {
                    var o = t[e], n = t[r];
                    if (null == this.modules[o][n]) for (var i = -2; i <= 2; i++) for (var a = -2; a <= 2; a++) this.modules[o + i][n + a] = -2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a;
                }
            },
            setupTypeNumber: function(t) {
                for (var e = A.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
                    var o = !t && 1 == (e >> r & 1);
                    this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = o;
                }
                for (r = 0; r < 18; r++) o = !t && 1 == (e >> r & 1), this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = o;
            },
            setupTypeInfo: function(t, e) {
                for (var r = this.errorCorrectLevel << 3 | e, o = A.getBCHTypeInfo(r), n = 0; n < 15; n++) {
                    var i = !t && 1 == (o >> n & 1);
                    n < 6 ? this.modules[n][8] = i : n < 8 ? this.modules[n + 1][8] = i : this.modules[this.moduleCount - 15 + n][8] = i;
                }
                for (n = 0; n < 15; n++) i = !t && 1 == (o >> n & 1), n < 8 ? this.modules[8][this.moduleCount - n - 1] = i : n < 9 ? this.modules[8][15 - n - 1 + 1] = i : this.modules[8][15 - n - 1] = i;
                this.modules[this.moduleCount - 8][8] = !t;
            },
            mapData: function(t, e) {
                for (var r = -1, o = this.moduleCount - 1, n = 7, i = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--; ;) {
                    for (var u = 0; u < 2; u++) if (null == this.modules[o][a - u]) {
                        var s = !1;
                        i < t.length && (s = 1 == (t[i] >>> n & 1)), A.getMask(e, o, a - u) && (s = !s), 
                        this.modules[o][a - u] = s, -1 == --n && (i++, n = 7);
                    }
                    if ((o += r) < 0 || this.moduleCount <= o) {
                        o -= r, r = -r;
                        break;
                    }
                }
            }
        }, i.PAD0 = 236, i.PAD1 = 17, i.createData = function(t, e, r) {
            for (var o = u.getRSBlocks(t, e), n = new s(), a = 0; a < r.length; a++) {
                var h = r[a];
                n.put(h.mode, 4), n.put(h.getLength(), A.getLengthInBits(h.mode, t)), h.write(n);
            }
            var f = 0;
            for (a = 0; a < o.length; a++) f += o[a].dataCount;
            if (n.getLengthInBits() > 8 * f) throw new Error("code length overflow. (" + n.getLengthInBits() + ">" + 8 * f + ")");
            for (n.getLengthInBits() + 4 <= 8 * f && n.put(0, 4); n.getLengthInBits() % 8 != 0; ) n.putBit(!1);
            for (;!(n.getLengthInBits() >= 8 * f || (n.put(i.PAD0, 8), n.getLengthInBits() >= 8 * f)); ) n.put(i.PAD1, 8);
            return i.createBytes(n, o);
        }, i.createBytes = function(t, e) {
            for (var r = 0, o = 0, n = 0, i = new Array(e.length), u = new Array(e.length), s = 0; s < e.length; s++) {
                var h = e[s].dataCount, f = e[s].totalCount - h;
                o = Math.max(o, h), n = Math.max(n, f), i[s] = new Array(h);
                for (var l = 0; l < i[s].length; l++) i[s][l] = 255 & t.buffer[l + r];
                r += h;
                var g = A.getErrorCorrectPolynomial(f), c = new a(i[s], g.getLength() - 1).mod(g);
                for (u[s] = new Array(g.getLength() - 1), l = 0; l < u[s].length; l++) {
                    var d = l + c.getLength() - u[s].length;
                    u[s][l] = d >= 0 ? c.get(d) : 0;
                }
            }
            var m = 0;
            for (l = 0; l < e.length; l++) m += e[l].totalCount;
            var p = new Array(m), v = 0;
            for (l = 0; l < o; l++) for (s = 0; s < e.length; s++) l < i[s].length && (p[v++] = i[s][l]);
            for (l = 0; l < n; l++) for (s = 0; s < e.length; s++) l < u[s].length && (p[v++] = u[s][l]);
            return p;
        };
        for (var E = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, y = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, T = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, A = {
            PATTERN_POSITION_TABLE: [ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(t) {
                for (var e = t << 10; A.getBCHDigit(e) - A.getBCHDigit(A.G15) >= 0; ) e ^= A.G15 << A.getBCHDigit(e) - A.getBCHDigit(A.G15);
                return (t << 10 | e) ^ A.G15_MASK;
            },
            getBCHTypeNumber: function(t) {
                for (var e = t << 12; A.getBCHDigit(e) - A.getBCHDigit(A.G18) >= 0; ) e ^= A.G18 << A.getBCHDigit(e) - A.getBCHDigit(A.G18);
                return t << 12 | e;
            },
            getBCHDigit: function(t) {
                for (var e = 0; 0 != t; ) e++, t >>>= 1;
                return e;
            },
            getPatternPosition: function(t) {
                return A.PATTERN_POSITION_TABLE[t - 1];
            },
            getMask: function(t, e, r) {
                switch (t) {
                  case T.PATTERN000:
                    return (e + r) % 2 == 0;

                  case T.PATTERN001:
                    return e % 2 == 0;

                  case T.PATTERN010:
                    return r % 3 == 0;

                  case T.PATTERN011:
                    return (e + r) % 3 == 0;

                  case T.PATTERN100:
                    return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;

                  case T.PATTERN101:
                    return e * r % 2 + e * r % 3 == 0;

                  case T.PATTERN110:
                    return (e * r % 2 + e * r % 3) % 2 == 0;

                  case T.PATTERN111:
                    return (e * r % 3 + (e + r) % 2) % 2 == 0;

                  default:
                    throw new Error("bad maskPattern:" + t);
                }
            },
            getErrorCorrectPolynomial: function(t) {
                for (var e = new a([ 1 ], 0), r = 0; r < t; r++) e = e.multiply(new a([ 1, _.gexp(r) ], 0));
                return e;
            },
            getLengthInBits: function(t, e) {
                if (1 <= e && e < 10) switch (t) {
                  case E.MODE_NUMBER:
                    return 10;

                  case E.MODE_ALPHA_NUM:
                    return 9;

                  case E.MODE_8BIT_BYTE:
                  case E.MODE_KANJI:
                    return 8;

                  default:
                    throw new Error("mode:" + t);
                } else if (e < 27) switch (t) {
                  case E.MODE_NUMBER:
                    return 12;

                  case E.MODE_ALPHA_NUM:
                    return 11;

                  case E.MODE_8BIT_BYTE:
                    return 16;

                  case E.MODE_KANJI:
                    return 10;

                  default:
                    throw new Error("mode:" + t);
                } else {
                    if (!(e < 41)) throw new Error("type:" + e);
                    switch (t) {
                      case E.MODE_NUMBER:
                        return 14;

                      case E.MODE_ALPHA_NUM:
                        return 13;

                      case E.MODE_8BIT_BYTE:
                        return 16;

                      case E.MODE_KANJI:
                        return 12;

                      default:
                        throw new Error("mode:" + t);
                    }
                }
            },
            getLostPoint: function(t) {
                for (var e = t.getModuleCount(), r = 0, o = 0; o < e; o++) for (var n = 0; n < e; n++) {
                    for (var i = 0, a = t.isDark(o, n), u = -1; u <= 1; u++) if (!(o + u < 0 || e <= o + u)) for (var s = -1; s <= 1; s++) n + s < 0 || e <= n + s || 0 == u && 0 == s || a == t.isDark(o + u, n + s) && i++;
                    i > 5 && (r += 3 + i - 5);
                }
                for (o = 0; o < e - 1; o++) for (n = 0; n < e - 1; n++) {
                    var h = 0;
                    t.isDark(o, n) && h++, t.isDark(o + 1, n) && h++, t.isDark(o, n + 1) && h++, t.isDark(o + 1, n + 1) && h++, 
                    0 != h && 4 != h || (r += 3);
                }
                for (o = 0; o < e; o++) for (n = 0; n < e - 6; n++) t.isDark(o, n) && !t.isDark(o, n + 1) && t.isDark(o, n + 2) && t.isDark(o, n + 3) && t.isDark(o, n + 4) && !t.isDark(o, n + 5) && t.isDark(o, n + 6) && (r += 40);
                for (n = 0; n < e; n++) for (o = 0; o < e - 6; o++) t.isDark(o, n) && !t.isDark(o + 1, n) && t.isDark(o + 2, n) && t.isDark(o + 3, n) && t.isDark(o + 4, n) && !t.isDark(o + 5, n) && t.isDark(o + 6, n) && (r += 40);
                var f = 0;
                for (n = 0; n < e; n++) for (o = 0; o < e; o++) t.isDark(o, n) && f++;
                return r += Math.abs(100 * f / e / e - 50) / 5 * 10;
            }
        }, _ = {
            glog: function(t) {
                if (t < 1) throw new Error("glog(" + t + ")");
                return _.LOG_TABLE[t];
            },
            gexp: function(t) {
                for (;t < 0; ) t += 255;
                for (;t >= 256; ) t -= 255;
                return _.EXP_TABLE[t];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, B = 0; B < 8; B++) _.EXP_TABLE[B] = 1 << B;
        for (B = 8; B < 256; B++) _.EXP_TABLE[B] = _.EXP_TABLE[B - 4] ^ _.EXP_TABLE[B - 5] ^ _.EXP_TABLE[B - 6] ^ _.EXP_TABLE[B - 8];
        for (B = 0; B < 255; B++) _.LOG_TABLE[_.EXP_TABLE[B]] = B;
        a.prototype = {
            get: function(t) {
                return this.num[t];
            },
            getLength: function() {
                return this.num.length;
            },
            multiply: function(t) {
                for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++) for (var o = 0; o < t.getLength(); o++) e[r + o] ^= _.gexp(_.glog(this.get(r)) + _.glog(t.get(o)));
                return new a(e, 0);
            },
            mod: function(t) {
                if (this.getLength() - t.getLength() < 0) return this;
                for (var e = _.glog(this.get(0)) - _.glog(t.get(0)), r = new Array(this.getLength()), o = 0; o < this.getLength(); o++) r[o] = this.get(o);
                for (o = 0; o < t.getLength(); o++) r[o] ^= _.gexp(_.glog(t.get(o)) + e);
                return new a(r, 0).mod(t);
            }
        }, u.RS_BLOCK_TABLE = [ [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ], 
        u.getRSBlocks = function(t, e) {
            var r = u.getRsBlockTable(t, e);
            if (void 0 == r) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
            for (var o = r.length / 3, n = new Array(), i = 0; i < o; i++) for (var a = r[3 * i + 0], s = r[3 * i + 1], h = r[3 * i + 2], f = 0; f < a; f++) n.push(new u(s, h));
            return n;
        }, u.getRsBlockTable = function(t, e) {
            switch (e) {
              case y.L:
                return u.RS_BLOCK_TABLE[4 * (t - 1) + 0];

              case y.M:
                return u.RS_BLOCK_TABLE[4 * (t - 1) + 1];

              case y.Q:
                return u.RS_BLOCK_TABLE[4 * (t - 1) + 2];

              case y.H:
                return u.RS_BLOCK_TABLE[4 * (t - 1) + 3];

              default:
                return;
            }
        }, s.prototype = {
            get: function(t) {
                var e = Math.floor(t / 8);
                return 1 == (this.buffer[e] >>> 7 - t % 8 & 1);
            },
            put: function(t, e) {
                for (var r = 0; r < e; r++) this.putBit(1 == (t >>> e - r - 1 & 1));
            },
            getLengthInBits: function() {
                return this.length;
            },
            putBit: function(t) {
                var e = Math.floor(this.length / 8);
                this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), 
                this.length++;
            }
        }, r.exports = function(t) {
            t = t || {}, (t = C(!0, {
                width: 256,
                height: 256,
                x: 0,
                y: 0,
                typeNumber: -1,
                correctLevel: y.H,
                background: "#ffffff",
                foreground: "#000000",
                image: {
                    imageResource: "",
                    dx: 0,
                    dy: 0,
                    dWidth: 100,
                    dHeight: 100
                }
            }, t)).canvasId || t.ctx ? function() {
                var e, r = new i(t.typeNumber, t.correctLevel);
                r.addData(h(t.text)), r.make(), e = t.ctx ? t.ctx : t._this ? wx.createCanvasContext && wx.createCanvasContext(t.canvasId, t._this) : wx.createCanvasContext && wx.createCanvasContext(t.canvasId);
                for (var o = t.width / r.getModuleCount(), n = t.height / r.getModuleCount(), a = 0; a < r.getModuleCount(); a++) for (var u = 0; u < r.getModuleCount(); u++) {
                    var s = r.isDark(a, u) ? t.foreground : t.background;
                    e.setFillStyle(s);
                    var f = Math.ceil((u + 1) * o) - Math.floor(u * o), l = Math.ceil((a + 1) * o) - Math.floor(a * o);
                    e.fillRect(Math.round(u * o) + t.x, Math.round(a * n) + t.y, f, l);
                }
                t.image.imageResource && e.drawImage(t.image.imageResource, t.image.dx, t.image.dy, t.image.dWidth, t.image.dHeight), 
                e.draw(!1, function(e) {
                    t.callback && t.callback(e);
                });
            }() : console.warn("please set canvasId or ctx!");
        };
    }, function(t) {
        return r({}[t], t);
    }), r(1582902163598);
}();