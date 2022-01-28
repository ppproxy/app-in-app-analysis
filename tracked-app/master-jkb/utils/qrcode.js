var t;

!function() {
    function e(t, e) {
        for (var r = 1, o = function(t) {
            var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
            return e.length + (e.length != t ? 3 : 0);
        }(t), n = 0, a = _.length; n <= a; n++) {
            var s = 0;
            switch (e) {
              case i.L:
                s = _[n][0];
                break;

              case i.M:
                s = _[n][1];
                break;

              case i.Q:
                s = _[n][2];
                break;

              case i.H:
                s = _[n][3];
            }
            if (o <= s) break;
            r++;
        }
        if (r > _.length) throw new Error("Too long data");
        return r;
    }
    function r(t) {
        this.mode = n.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
        for (var e = 0, r = this.data.length; e < r; e++) {
            var o = [], i = this.data.charCodeAt(e);
            i > 65536 ? (o[0] = 240 | (1835008 & i) >>> 18, o[1] = 128 | (258048 & i) >>> 12, 
            o[2] = 128 | (4032 & i) >>> 6, o[3] = 128 | 63 & i) : i > 2048 ? (o[0] = 224 | (61440 & i) >>> 12, 
            o[1] = 128 | (4032 & i) >>> 6, o[2] = 128 | 63 & i) : i > 128 ? (o[0] = 192 | (1984 & i) >>> 6, 
            o[1] = 128 | 63 & i) : o[0] = i, this.parsedData.push(o);
        }
        this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), 
        this.parsedData.unshift(187), this.parsedData.unshift(239));
    }
    function o(t, e) {
        this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, 
        this.dataCache = null, this.dataList = [];
    }
    r.prototype = {
        getLength: function(t) {
            return this.parsedData.length;
        },
        write: function(t) {
            for (var e = 0, r = this.parsedData.length; e < r; e++) t.put(this.parsedData[e], 8);
        }
    }, o.prototype = {
        addData: function(t) {
            var e = new r(t);
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
            this.makeImpl(!1, this.getBestMaskPattern());
        },
        makeImpl: function(t, e) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var r = 0; r < this.moduleCount; r++) {
                this.modules[r] = new Array(this.moduleCount);
                for (var n = 0; n < this.moduleCount; n++) this.modules[r][n] = null;
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), 
            this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), 
            this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), 
            null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), 
            this.mapData(this.dataCache, e);
        },
        setupPositionProbePattern: function(t, e) {
            for (var r = -1; r <= 7; r++) if (!(t + r <= -1 || this.moduleCount <= t + r)) for (var o = -1; o <= 7; o++) e + o <= -1 || this.moduleCount <= e + o || (this.modules[t + r][e + o] = 0 <= r && r <= 6 && (0 == o || 6 == o) || 0 <= o && o <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= o && o <= 4);
        },
        getBestMaskPattern: function() {
            for (var t = 0, e = 0, r = 0; r < 8; r++) {
                this.makeImpl(!0, r);
                var o = d.getLostPoint(this);
                (0 == r || t > o) && (t = o, e = r);
            }
            return e;
        },
        createMovieClip: function(t, e, r) {
            var o = t.createEmptyMovieClip(e, r);
            this.make();
            for (var n = 0; n < this.modules.length; n++) for (var i = 1 * n, a = 0; a < this.modules[n].length; a++) {
                var s = 1 * a;
                this.modules[n][a] && (o.beginFill(0, 100), o.moveTo(s, i), o.lineTo(s + 1, i), 
                o.lineTo(s + 1, i + 1), o.lineTo(s, i + 1), o.endFill());
            }
            return o;
        },
        setupTimingPattern: function() {
            for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
        },
        setupPositionAdjustPattern: function() {
            for (var t = d.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var r = 0; r < t.length; r++) {
                var o = t[e], n = t[r];
                if (null == this.modules[o][n]) for (var i = -2; i <= 2; i++) for (var a = -2; a <= 2; a++) this.modules[o + i][n + a] = -2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a;
            }
        },
        setupTypeNumber: function(t) {
            for (var e = d.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
                var o = !t && 1 == (e >> r & 1);
                this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = o;
            }
            for (r = 0; r < 18; r++) {
                o = !t && 1 == (e >> r & 1);
                this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = o;
            }
        },
        setupTypeInfo: function(t, e) {
            for (var r = this.errorCorrectLevel << 3 | e, o = d.getBCHTypeInfo(r), n = 0; n < 15; n++) {
                var i = !t && 1 == (o >> n & 1);
                n < 6 ? this.modules[n][8] = i : n < 8 ? this.modules[n + 1][8] = i : this.modules[this.moduleCount - 15 + n][8] = i;
            }
            for (n = 0; n < 15; n++) {
                i = !t && 1 == (o >> n & 1);
                n < 8 ? this.modules[8][this.moduleCount - n - 1] = i : n < 9 ? this.modules[8][15 - n - 1 + 1] = i : this.modules[8][15 - n - 1] = i;
            }
            this.modules[this.moduleCount - 8][8] = !t;
        },
        mapData: function(t, e) {
            for (var r = -1, o = this.moduleCount - 1, n = 7, i = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--; ;) {
                for (var s = 0; s < 2; s++) if (null == this.modules[o][a - s]) {
                    var h = !1;
                    i < t.length && (h = 1 == (t[i] >>> n & 1)), d.getMask(e, o, a - s) && (h = !h), 
                    this.modules[o][a - s] = h, -1 == --n && (i++, n = 7);
                }
                if ((o += r) < 0 || this.moduleCount <= o) {
                    o -= r, r = -r;
                    break;
                }
            }
        }
    }, o.PAD0 = 236, o.PAD1 = 17, o.createData = function(t, e, r) {
        for (var n = C.getRSBlocks(t, e), i = new L(), a = 0; a < r.length; a++) {
            var s = r[a];
            i.put(s.mode, 4), i.put(s.getLength(), d.getLengthInBits(s.mode, t)), s.write(i);
        }
        var h = 0;
        for (a = 0; a < n.length; a++) h += n[a].dataCount;
        if (i.getLengthInBits() > 8 * h) throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * h + ")");
        for (i.getLengthInBits() + 4 <= 8 * h && i.put(0, 4); i.getLengthInBits() % 8 != 0; ) i.putBit(!1);
        for (;!(i.getLengthInBits() >= 8 * h || (i.put(o.PAD0, 8), i.getLengthInBits() >= 8 * h)); ) i.put(o.PAD1, 8);
        return o.createBytes(i, n);
    }, o.createBytes = function(t, e) {
        for (var r = 0, o = 0, n = 0, i = new Array(e.length), a = new Array(e.length), s = 0; s < e.length; s++) {
            var h = e[s].dataCount, u = e[s].totalCount - h;
            o = Math.max(o, h), n = Math.max(n, u), i[s] = new Array(h);
            for (var l = 0; l < i[s].length; l++) i[s][l] = 255 & t.buffer[l + r];
            r += h;
            var g = d.getErrorCorrectPolynomial(u), f = new v(i[s], g.getLength() - 1).mod(g);
            a[s] = new Array(g.getLength() - 1);
            for (l = 0; l < a[s].length; l++) {
                var c = l + f.getLength() - a[s].length;
                a[s][l] = c >= 0 ? f.get(c) : 0;
            }
        }
        var p = 0;
        for (l = 0; l < e.length; l++) p += e[l].totalCount;
        var m = new Array(p), C = 0;
        for (l = 0; l < o; l++) for (s = 0; s < e.length; s++) l < i[s].length && (m[C++] = i[s][l]);
        for (l = 0; l < n; l++) for (s = 0; s < e.length; s++) l < a[s].length && (m[C++] = a[s][l]);
        return m;
    };
    for (var n = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    }, i = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }, a = 0, s = 1, h = 2, u = 3, l = 4, g = 5, f = 6, c = 7, d = {
        PATTERN_POSITION_TABLE: [ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function(t) {
            for (var e = t << 10; d.getBCHDigit(e) - d.getBCHDigit(d.G15) >= 0; ) e ^= d.G15 << d.getBCHDigit(e) - d.getBCHDigit(d.G15);
            return (t << 10 | e) ^ d.G15_MASK;
        },
        getBCHTypeNumber: function(t) {
            for (var e = t << 12; d.getBCHDigit(e) - d.getBCHDigit(d.G18) >= 0; ) e ^= d.G18 << d.getBCHDigit(e) - d.getBCHDigit(d.G18);
            return t << 12 | e;
        },
        getBCHDigit: function(t) {
            for (var e = 0; 0 != t; ) e++, t >>>= 1;
            return e;
        },
        getPatternPosition: function(t) {
            return d.PATTERN_POSITION_TABLE[t - 1];
        },
        getMask: function(t, e, r) {
            switch (t) {
              case a:
                return (e + r) % 2 == 0;

              case s:
                return e % 2 == 0;

              case h:
                return r % 3 == 0;

              case u:
                return (e + r) % 3 == 0;

              case l:
                return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;

              case g:
                return e * r % 2 + e * r % 3 == 0;

              case f:
                return (e * r % 2 + e * r % 3) % 2 == 0;

              case c:
                return (e * r % 3 + (e + r) % 2) % 2 == 0;

              default:
                throw new Error("bad maskPattern:" + t);
            }
        },
        getErrorCorrectPolynomial: function(t) {
            for (var e = new v([ 1 ], 0), r = 0; r < t; r++) e = e.multiply(new v([ 1, p.gexp(r) ], 0));
            return e;
        },
        getLengthInBits: function(t, e) {
            if (1 <= e && e < 10) switch (t) {
              case n.MODE_NUMBER:
                return 10;

              case n.MODE_ALPHA_NUM:
                return 9;

              case n.MODE_8BIT_BYTE:
              case n.MODE_KANJI:
                return 8;

              default:
                throw new Error("mode:" + t);
            } else if (e < 27) switch (t) {
              case n.MODE_NUMBER:
                return 12;

              case n.MODE_ALPHA_NUM:
                return 11;

              case n.MODE_8BIT_BYTE:
                return 16;

              case n.MODE_KANJI:
                return 10;

              default:
                throw new Error("mode:" + t);
            } else {
                if (!(e < 41)) throw new Error("type:" + e);
                switch (t) {
                  case n.MODE_NUMBER:
                    return 14;

                  case n.MODE_ALPHA_NUM:
                    return 13;

                  case n.MODE_8BIT_BYTE:
                    return 16;

                  case n.MODE_KANJI:
                    return 12;

                  default:
                    throw new Error("mode:" + t);
                }
            }
        },
        getLostPoint: function(t) {
            for (var e = t.getModuleCount(), r = 0, o = 0; o < e; o++) for (var n = 0; n < e; n++) {
                for (var i = 0, a = t.isDark(o, n), s = -1; s <= 1; s++) if (!(o + s < 0 || e <= o + s)) for (var h = -1; h <= 1; h++) n + h < 0 || e <= n + h || 0 == s && 0 == h || a == t.isDark(o + s, n + h) && i++;
                i > 5 && (r += 3 + i - 5);
            }
            for (o = 0; o < e - 1; o++) for (n = 0; n < e - 1; n++) {
                var u = 0;
                t.isDark(o, n) && u++, t.isDark(o + 1, n) && u++, t.isDark(o, n + 1) && u++, t.isDark(o + 1, n + 1) && u++, 
                0 != u && 4 != u || (r += 3);
            }
            for (o = 0; o < e; o++) for (n = 0; n < e - 6; n++) t.isDark(o, n) && !t.isDark(o, n + 1) && t.isDark(o, n + 2) && t.isDark(o, n + 3) && t.isDark(o, n + 4) && !t.isDark(o, n + 5) && t.isDark(o, n + 6) && (r += 40);
            for (n = 0; n < e; n++) for (o = 0; o < e - 6; o++) t.isDark(o, n) && !t.isDark(o + 1, n) && t.isDark(o + 2, n) && t.isDark(o + 3, n) && t.isDark(o + 4, n) && !t.isDark(o + 5, n) && t.isDark(o + 6, n) && (r += 40);
            var l = 0;
            for (n = 0; n < e; n++) for (o = 0; o < e; o++) t.isDark(o, n) && l++;
            return r += 10 * (Math.abs(100 * l / e / e - 50) / 5);
        }
    }, p = {
        glog: function(t) {
            if (t < 1) throw new Error("glog(" + t + ")");
            return p.LOG_TABLE[t];
        },
        gexp: function(t) {
            for (;t < 0; ) t += 255;
            for (;t >= 256; ) t -= 255;
            return p.EXP_TABLE[t];
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    }, m = 0; m < 8; m++) p.EXP_TABLE[m] = 1 << m;
    for (m = 8; m < 256; m++) p.EXP_TABLE[m] = p.EXP_TABLE[m - 4] ^ p.EXP_TABLE[m - 5] ^ p.EXP_TABLE[m - 6] ^ p.EXP_TABLE[m - 8];
    for (m = 0; m < 255; m++) p.LOG_TABLE[p.EXP_TABLE[m]] = m;
    function v(t, e) {
        if (null == t.length) throw new Error(t.length + "/" + e);
        for (var r = 0; r < t.length && 0 == t[r]; ) r++;
        this.num = new Array(t.length - r + e);
        for (var o = 0; o < t.length - r; o++) this.num[o] = t[o + r];
    }
    function C(t, e) {
        this.totalCount = t, this.dataCount = e;
    }
    function L() {
        this.buffer = [], this.length = 0;
    }
    v.prototype = {
        get: function(t) {
            return this.num[t];
        },
        getLength: function() {
            return this.num.length;
        },
        multiply: function(t) {
            for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++) for (var o = 0; o < t.getLength(); o++) e[r + o] ^= p.gexp(p.glog(this.get(r)) + p.glog(t.get(o)));
            return new v(e, 0);
        },
        mod: function(t) {
            if (this.getLength() - t.getLength() < 0) return this;
            for (var e = p.glog(this.get(0)) - p.glog(t.get(0)), r = new Array(this.getLength()), o = 0; o < this.getLength(); o++) r[o] = this.get(o);
            for (o = 0; o < t.getLength(); o++) r[o] ^= p.gexp(p.glog(t.get(o)) + e);
            return new v(r, 0).mod(t);
        }
    }, C.RS_BLOCK_TABLE = [ [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ], 
    C.getRSBlocks = function(t, e) {
        var r = C.getRsBlockTable(t, e);
        if (null == r) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
        for (var o = r.length / 3, n = [], i = 0; i < o; i++) for (var a = r[3 * i + 0], s = r[3 * i + 1], h = r[3 * i + 2], u = 0; u < a; u++) n.push(new C(s, h));
        return n;
    }, C.getRsBlockTable = function(t, e) {
        switch (e) {
          case i.L:
            return C.RS_BLOCK_TABLE[4 * (t - 1) + 0];

          case i.M:
            return C.RS_BLOCK_TABLE[4 * (t - 1) + 1];

          case i.Q:
            return C.RS_BLOCK_TABLE[4 * (t - 1) + 2];

          case i.H:
            return C.RS_BLOCK_TABLE[4 * (t - 1) + 3];

          default:
            return;
        }
    }, L.prototype = {
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
    };
    var _ = [ [ 17, 14, 11, 7 ], [ 32, 26, 20, 14 ], [ 53, 42, 32, 24 ], [ 78, 62, 46, 34 ], [ 106, 84, 60, 44 ], [ 134, 106, 74, 58 ], [ 154, 122, 86, 64 ], [ 192, 152, 108, 84 ], [ 230, 180, 130, 98 ], [ 271, 213, 151, 119 ], [ 321, 251, 177, 137 ], [ 367, 287, 203, 155 ], [ 425, 331, 241, 177 ], [ 458, 362, 258, 194 ], [ 520, 412, 292, 220 ], [ 586, 450, 322, 250 ], [ 644, 504, 364, 280 ], [ 718, 560, 394, 310 ], [ 792, 624, 442, 338 ], [ 858, 666, 482, 382 ], [ 929, 711, 509, 403 ], [ 1003, 779, 565, 439 ], [ 1091, 857, 611, 461 ], [ 1171, 911, 661, 511 ], [ 1273, 997, 715, 535 ], [ 1367, 1059, 751, 593 ], [ 1465, 1125, 805, 625 ], [ 1528, 1190, 868, 658 ], [ 1628, 1264, 908, 698 ], [ 1732, 1370, 982, 742 ], [ 1840, 1452, 1030, 790 ], [ 1952, 1538, 1112, 842 ], [ 2068, 1628, 1168, 898 ], [ 2188, 1722, 1228, 958 ], [ 2303, 1809, 1283, 983 ], [ 2431, 1911, 1351, 1051 ], [ 2563, 1989, 1423, 1093 ], [ 2699, 2099, 1499, 1139 ], [ 2809, 2213, 1579, 1219 ], [ 2953, 2331, 1663, 1273 ] ];
    (t = function(t, e) {
        if (this._htOption = {
            width: 256,
            height: 256,
            typeNumber: 4,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: i.H
        }, "string" == typeof e && (e = {
            text: e
        }), e) for (var r in e) this._htOption[r] = e[r];
        this._oQRCode = null, this.canvasId = t, this._htOption.text && this.canvasId && this.makeCode(this._htOption.text);
    }).prototype.makeCode = function(t) {
        this._oQRCode = new o(e(t, this._htOption.correctLevel), this._htOption.correctLevel), 
        this._oQRCode.addData(t), this._oQRCode.make(), this.makeImage();
    }, t.prototype.makeImage = function() {
        var t, e = this;
        t = this._htOption.usingIn ? wx.createCanvasContext(this.canvasId, this._htOption.usingIn) : wx.createCanvasContext(this.canvasId);
        var r = this._htOption, o = this._oQRCode, n = o.getModuleCount(), i = r.padding ? (r.width - 2 * r.padding) / n : r.width / n, a = r.padding ? (r.height - 2 * r.padding) / n : r.height / n, s = Math.round(a), h = Math.round(i);
        r.image && "" != r.image && t.drawImage(r.image, 0, 0, r.width, r.height), t.setFillStyle("#fff"), 
        t.fillRect(0, 0, r.width, r.height), t.save();
        for (var u = 0; u < n; u++) for (var l = 0; l < n; l++) {
            var g = o.isDark(u, l), f = r.padding ? l * i + r.padding : l * i, c = r.padding ? u * a + r.padding : u * a;
            t.setStrokeStyle(g ? r.colorDark : r.colorLight), t.setLineWidth(1), t.setFillStyle(g ? r.colorDark : r.colorLight), 
            t.fillRect(f, c, i, a), t.strokeRect(Math.floor(f) + .5, Math.floor(c) + .5, s), 
            t.strokeRect(Math.ceil(f) - .5, Math.ceil(c) - .5, h, s);
        }
        t.draw(!1, function() {
            setTimeout(function() {
                e.exportImage();
            }, 800);
        });
    }, t.prototype.exportImage = function(t) {
        var e = this;
        this._htOption.callback && "function" == typeof this._htOption.callback && wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: this._htOption.width,
            height: this._htOption.height,
            destWidth: this._htOption.width,
            destHeight: this._htOption.height,
            canvasId: this.canvasId,
            success: function(t) {
                e._htOption.callback({
                    path: t.tempFilePath
                });
            }
        });
    }, t.CorrectLevel = i;
}(), module.exports = t;