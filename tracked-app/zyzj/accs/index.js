var t, e, n = require("../@babel/runtime/helpers/typeof");

t = void 0, e = function(t) {
    function e() {
        return (e = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            }
            return t;
        }).apply(this, arguments);
    }
    var o;
    !function(t) {
        !function(t) {
            t.ACCS_H5 = "ACCS_H5", t.ACCS_WV = "ACCS_WV";
        }(t.Protocol || (t.Protocol = {})), function(t) {
            t.RES = "RES", t.DATA = "DATA";
        }(t.Type || (t.Type = {})), function(t) {
            t.COMMON = "COMMON", t.GZIP = "GZIP", t.ZLIB = "ZLIB", t.INVALID = "INVALID";
        }(t.CompressType || (t.CompressType = {}));
    }(o || (o = {}));
    var r = {
        utf16ToUtf8: function(t) {
            if (t) {
                var e, n, o = [], r = t.length;
                for (e = 0; e < r; e++) (n = t.charCodeAt(e)) > 0 && n <= 127 ? o.push(t.charAt(e)) : n >= 128 && n <= 2047 ? o.push(String.fromCharCode(192 | n >> 6 & 31), String.fromCharCode(128 | 63 & n)) : n >= 2048 && n <= 65535 && o.push(String.fromCharCode(224 | n >> 12 & 15), String.fromCharCode(128 | n >> 6 & 63), String.fromCharCode(128 | 63 & n));
                return o.join("");
            }
        },
        utf8ToUtf16: function(t) {
            if (t) {
                var e, n, o, r = [], i = t.length;
                for (e = 0; e < i; e++) (n = []).push(t.charCodeAt(e)), 0 == (n[0] >> 7 & 255) ? r.push(t.charAt(e)) : 6 == (n[0] >> 5 & 255) ? (n.push(t.charCodeAt(++e)), 
                (o = []).push(31 & n[0]), o.push(63 & n[1]), r.push(String.fromCharCode(o[0] << 6 | o[1]))) : 14 == (n[0] >> 4 & 255) && (n.push(t.charCodeAt(++e)), 
                n.push(t.charCodeAt(++e)), (o = []).push(n[0] << 4 | n[1] >> 2 & 15), o.push((3 & n[1]) << 6 | 63 & n[2]), 
                r.push(String.fromCharCode(o[0] << 8 | o[1])));
                return r.join("");
            }
        },
        binaryStringToBinaryArray: function(t) {
            return new Uint8Array(t.split("").map(function(t) {
                return t.charCodeAt(0);
            }));
        },
        binaryArrayToBinaryString: function(t) {
            return [].map.call(t, function(t) {
                return String.fromCharCode(t);
            }).join("");
        }
    }, i = function(t) {
        try {
            if ("undefined" != typeof window && atob) return atob(t);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.log(t);
        }
        var e = String(t).replace(/[=]+$/, "");
        if (e.length % 4 == 1) throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        for (var n, o, r = "", i = 0, s = 0; o = e.charAt(s++); ~o && (n = i % 4 ? 64 * n + o : o, 
        i++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);
        return r;
    }, s = null;
    !function(t) {
        function e(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return t[o].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports;
        }
        var n = {};
        e.m = t, e.c = n, e.p = "", e(0);
    }([ function(t, e, n) {
        (function(t) {
            var e = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n(1));
            s = e.default;
        }).call(e, function() {
            return this;
        }());
    }, function(t, e, n) {
        !function() {
            function e(t, e) {
                e.push(255 & t);
            }
            function o(t, e) {
                e.push(255 & t), e.push(t >>> 8);
            }
            function r(t, e) {
                o(65535 & t, e), o(t >>> 16, e);
            }
            function i(t) {
                return t.shift();
            }
            function s(t) {
                return t.shift() | t.shift() << 8;
            }
            function c(t) {
                var e = s(t), n = s(t);
                return n > 32768 ? ((n -= 32768) << 16 | e) + 32768 * Math.pow(2, 16) : n << 16 | e;
            }
            function a(t) {
                for (var e = []; 0 !== t[0]; ) e.push(String.fromCharCode(t.shift()));
                return t.shift(), e.join("");
            }
            var u = n(2), f = n(3), l = 31, h = 139, d = {
                deflate: 8
            }, p = {
                FTEXT: 1,
                FHCRC: 2,
                FEXTRA: 4,
                FNAME: 8,
                FCOMMENT: 16
            }, _ = {
                fat: 0,
                amiga: 1,
                vmz: 2,
                unix: 3,
                "vm/cms": 4,
                atari: 5,
                hpfs: 6,
                macintosh: 7,
                "z-system": 8,
                cplm: 9,
                "tops-20": 10,
                ntfs: 11,
                qdos: 12,
                acorn: 13,
                vfat: 14,
                vms: 15,
                beos: 16,
                tandem: 17,
                theos: 18
            }, m = "unix", g = 6;
            t.exports = {
                zip: function(t, n) {
                    var o, i = 0, s = [];
                    return n || (n = {}), o = n.level || g, "string" == typeof t && (t = Array.prototype.map.call(t, function(t) {
                        return t.charCodeAt(0);
                    })), e(l, s), e(h, s), e(d.deflate, s), n.name && (i |= p.FNAME), e(i, s), r(n.timestamp || parseInt(Date.now() / 1e3, 10), s), 
                    e(1 === o ? 4 : 9 === o ? 2 : 0, s), e(_[m], s), n.name && (function(t, n) {
                        var o, r = t.length;
                        for (o = 0; r > o; o += 1) e(t.charCodeAt(o), n);
                    }(n.name.substring(n.name.lastIndexOf("/") + 1), s), e(0, s)), f.deflate(t, o).forEach(function(t) {
                        e(t, s);
                    }), r(parseInt(u(t), 16), s), r(t.length, s), s;
                },
                unzip: function(t, e) {
                    var n, o, r, m, g = Array.prototype.slice.call(t, 0);
                    if (i(g) !== l || i(g) !== h) throw "Not a GZIP file";
                    if (n = i(g), !(n = Object.keys(d).some(function(t) {
                        return o = t, d[t] === n;
                    }))) throw "Unsupported compression method";
                    if (r = i(g), c(g), i(g), n = i(g), Object.keys(_).some(function(t) {
                        return _[t] === n || void 0;
                    }), r & p.FEXTRA && function(t, e) {
                        var n, o = [];
                        for (n = 0; e > n; n += 1) o.push(t.shift());
                    }(g, n = s(g)), r & p.FNAME && a(g), r & p.FCOMMENT && a(g), r & p.FHCRC && s(g), 
                    "deflate" === o && (m = f.inflate(g.splice(0, g.length - 8))), r & p.FTEXT && (m = Array.prototype.map.call(m, function(t) {
                        return String.fromCharCode(t);
                    }).join("")), c(g) !== parseInt(u(m), 16)) throw "Checksum does not match";
                    if (c(g) !== m.length) throw "Size of decompressed file not correct";
                    return m;
                },
                get DEFAULT_LEVEL() {
                    return g;
                }
            };
        }();
    }, function(t, e) {
        !function() {
            function e(t) {
                var e, n, o, i, s = -1;
                for (e = 0, o = t.length; o > e; e += 1) {
                    for (i = 255 & (s ^ t[e]), n = 0; 8 > n; n += 1) 1 == (1 & i) ? i = i >>> 1 ^ r : i >>>= 1;
                    s = s >>> 8 ^ i;
                }
                return -1 ^ s;
            }
            function n(t, e) {
                var r, i, s;
                if (void 0 !== n.crc && e && t || (n.crc = -1, t)) {
                    for (r = n.crc, i = 0, s = t.length; s > i; i += 1) r = r >>> 8 ^ o[255 & (r ^ t[i])];
                    return n.crc = r, -1 ^ r;
                }
            }
            var o = [], r = 3988292384;
            (function() {
                var t, e, n;
                for (e = 0; 256 > e; e += 1) {
                    for (t = e, n = 0; 8 > n; n += 1) 1 & t ? t = r ^ t >>> 1 : t >>>= 1;
                    o[e] = t >>> 0;
                }
            })(), t.exports = function(t, o) {
                return t = "string" == typeof t ? function(t) {
                    return Array.prototype.map.call(t, function(t) {
                        return t.charCodeAt(0);
                    });
                }(t) : t, ((o ? e(t) : n(t)) >>> 0).toString(16);
            }, t.exports.direct = e, t.exports.table = n;
        }();
    }, function(t, e, n) {
        t.exports = {
            inflate: n(4),
            deflate: n(5)
        };
    }, function(t, e) {
        !function() {
            function e() {
                this.next = null, this.list = null;
            }
            function n() {
                this.e = 0, this.b = 0, this.n = 0, this.t = null;
            }
            function o(t, o, r, i, s, c) {
                this.BMAX = 16, this.N_MAX = 288, this.status = 0, this.root = null, this.m = 0;
                var a, u, f, l, h, d, p, _, m, g, v, b, y, C, S, w, E, O = [], A = [], T = new n(), k = [], x = [], N = [];
                for (E = this.root = null, d = 0; d < this.BMAX + 1; d++) O[d] = 0;
                for (d = 0; d < this.BMAX + 1; d++) A[d] = 0;
                for (d = 0; d < this.BMAX; d++) k[d] = null;
                for (d = 0; d < this.N_MAX; d++) x[d] = 0;
                for (d = 0; d < this.BMAX + 1; d++) N[d] = 0;
                u = o > 256 ? t[256] : this.BMAX, m = t, g = 0, d = o;
                do {
                    O[m[g]]++, g++;
                } while (--d > 0);
                if (O[0] === o) return this.root = null, this.m = 0, void (this.status = 0);
                for (p = 1; p <= this.BMAX && 0 === O[p]; p++) ;
                for (_ = p, p > c && (c = p), d = this.BMAX; 0 !== d && 0 === O[d]; d--) ;
                for (l = d, c > d && (c = d), C = 1 << p; d > p; p++, C <<= 1) if ((C -= O[p]) < 0) return this.status = 2, 
                void (this.m = c);
                if ((C -= O[d]) < 0) return this.status = 2, void (this.m = c);
                for (O[d] += C, N[1] = p = 0, m = O, g = 1, y = 2; --d > 0; ) N[y++] = p += m[g++];
                m = t, g = 0, d = 0;
                do {
                    0 !== (p = m[g++]) && (x[N[p]++] = d);
                } while (++d < o);
                for (o = N[l], N[0] = d = 0, m = x, g = 0, h = -1, b = A[0] = 0, v = null, S = 0; l >= _; _++) for (a = O[_]; a-- > 0; ) {
                    for (;_ > b + A[1 + h]; ) {
                        if (b += A[1 + h], h++, S = (S = l - b) > c ? c : S, (f = 1 << (p = _ - b)) > a + 1) for (f -= a + 1, 
                        y = _; ++p < S && !((f <<= 1) <= O[++y]); ) f -= O[y];
                        for (b + p > u && u > b && (p = u - b), S = 1 << p, A[1 + h] = p, v = [], w = 0; S > w; w++) v[w] = new n();
                        (E = E ? E.next = new e() : this.root = new e()).next = null, E.list = v, k[h] = v, 
                        h > 0 && (N[h] = d, T.b = A[h], T.e = 16 + p, T.t = v, p = (d & (1 << b) - 1) >> b - A[h], 
                        k[h - 1][p].e = T.e, k[h - 1][p].b = T.b, k[h - 1][p].n = T.n, k[h - 1][p].t = T.t);
                    }
                    for (T.b = _ - b, g >= o ? T.e = 99 : m[g] < r ? (T.e = m[g] < 256 ? 16 : 15, T.n = m[g++]) : (T.e = s[m[g] - r], 
                    T.n = i[m[g++] - r]), f = 1 << _ - b, p = d >> b; S > p; p += f) v[p].e = T.e, v[p].b = T.b, 
                    v[p].n = T.n, v[p].t = T.t;
                    for (p = 1 << _ - 1; 0 != (d & p); p >>= 1) d ^= p;
                    for (d ^= p; (d & (1 << b) - 1) !== N[h]; ) b -= A[h], h--;
                }
                this.m = A[1], this.status = 0 !== C && 1 !== l ? 1 : 0;
            }
            function r(t) {
                for (;t > v; ) g |= (T.length === k ? -1 : 255 & T[k++]) << v, v += 8;
            }
            function i(t) {
                return g & L[t];
            }
            function s(t) {
                g >>= t, v -= t;
            }
            function c(t, e, n) {
                var o, c, a;
                if (0 === n) return 0;
                for (a = 0; ;) {
                    for (r(O), o = (c = w.list[i(O)]).e; o > 16; ) {
                        if (99 === o) return -1;
                        s(c.b), r(o -= 16), o = (c = c.t[i(o)]).e;
                    }
                    if (s(c.b), 16 !== o) {
                        if (15 === o) break;
                        for (r(o), C = c.n + i(o), s(o), r(A), o = (c = E.list[i(A)]).e; o > 16; ) {
                            if (99 === o) return -1;
                            s(c.b), r(o -= 16), o = (c = c.t[i(o)]).e;
                        }
                        for (s(c.b), r(o), S = d - c.n - i(o), s(o); C > 0 && n > a; ) C--, S &= x - 1, 
                        d &= x - 1, t[e + a++] = h[d++] = h[S++];
                        if (a === n) return n;
                    } else if (d &= x - 1, t[e + a++] = h[d++] = c.n, a === n) return n;
                }
                return b = -1, a;
            }
            function a(t, e, n) {
                var o;
                if (s(o = 7 & v), r(16), o = i(16), s(16), r(16), o !== (65535 & ~g)) return -1;
                for (s(16), C = o, o = 0; C > 0 && n > o; ) C--, d &= x - 1, r(8), t[e + o++] = h[d++] = i(8), 
                s(8);
                return 0 === C && (b = -1), o;
            }
            function u(t, e, n) {
                if (!j) {
                    var r, i, s = [];
                    for (r = 0; 144 > r; r++) s[r] = 8;
                    for (;256 > r; r++) s[r] = 9;
                    for (;280 > r; r++) s[r] = 7;
                    for (;288 > r; r++) s[r] = 8;
                    if (0 !== (i = new o(s, 288, 257, D, H, _ = 7)).status) return console.error("HufBuild error: " + i.status), 
                    -1;
                    for (j = i.root, _ = i.m, r = 0; 30 > r; r++) s[r] = 5;
                    if ((i = new o(s, 30, 0, F, K, m = 5)).status > 1) return j = null, console.error("HufBuild error: " + i.status), 
                    -1;
                    p = i.root, m = i.m;
                }
                return w = j, E = p, O = _, A = m, c(t, e, n);
            }
            function f(t, e, n) {
                var a, u, f, l, h, d, p, _, m, g = [];
                for (a = 0; 316 > a; a++) g[a] = 0;
                if (r(5), p = 257 + i(5), s(5), r(5), _ = 1 + i(5), s(5), r(4), d = 4 + i(4), s(4), 
                p > 286 || _ > 30) return -1;
                for (u = 0; d > u; u++) r(3), g[B[u]] = i(3), s(3);
                for (;19 > u; u++) g[B[u]] = 0;
                if (0 !== (m = new o(g, 19, 19, null, null, O = 7)).status) return -1;
                for (w = m.root, O = m.m, l = p + _, a = f = 0; l > a; ) if (r(O), s(u = (h = w.list[i(O)]).b), 
                16 > (u = h.n)) g[a++] = f = u; else if (16 === u) {
                    if (r(2), u = 3 + i(2), s(2), a + u > l) return -1;
                    for (;u-- > 0; ) g[a++] = f;
                } else if (17 === u) {
                    if (r(3), u = 3 + i(3), s(3), a + u > l) return -1;
                    for (;u-- > 0; ) g[a++] = 0;
                    f = 0;
                } else {
                    if (r(7), u = 11 + i(7), s(7), a + u > l) return -1;
                    for (;u-- > 0; ) g[a++] = 0;
                    f = 0;
                }
                if (m = new o(g, p, 257, D, H, O = R), 0 === O && (m.status = 1), 0 !== m.status && 1 !== m.status) return -1;
                for (w = m.root, O = m.m, a = 0; _ > a; a++) g[a] = g[a + p];
                return m = new o(g, _, 0, F, K, A = P), E = m.root, 0 === (A = m.m) && p > 257 || 0 !== m.status ? -1 : c(t, e, n);
            }
            function l(t, e, n) {
                var o, l;
                for (o = 0; n > o; ) {
                    if (y && -1 === b) return o;
                    if (C > 0) {
                        if (b !== N) for (;C > 0 && n > o; ) C--, S &= x - 1, d &= x - 1, t[e + o++] = h[d++] = h[S++]; else {
                            for (;C > 0 && n > o; ) C--, d &= x - 1, r(8), t[e + o++] = h[d++] = i(8), s(8);
                            0 === C && (b = -1);
                        }
                        if (o === n) return o;
                    }
                    if (-1 === b) {
                        if (y) break;
                        r(1), 0 !== i(1) && (y = !0), s(1), r(2), b = i(2), s(2), w = null, C = 0;
                    }
                    switch (b) {
                      case N:
                        l = a(t, e + o, n - o);
                        break;

                      case M:
                        l = w ? c(t, e + o, n - o) : u(t, e + o, n - o);
                        break;

                      case I:
                        l = w ? c(t, e + o, n - o) : f(t, e + o, n - o);
                        break;

                      default:
                        l = -1;
                    }
                    if (-1 === l) return y ? 0 : -1;
                    o += l;
                }
                return o;
            }
            var h, d, p, _, m, g, v, b, y, C, S, w, E, O, A, T, k, x = 32768, N = 0, M = 1, I = 2, R = 9, P = 6, j = null, L = [ 0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535 ], D = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0 ], H = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99 ], F = [ 1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577 ], K = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ], B = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];
            t.exports = function(t) {
                var e, n = [];
                h || (h = []), d = 0, g = 0, v = 0, b = -1, y = !1, C = S = 0, w = null, T = t, 
                k = 0;
                do {
                    e = l(n, n.length, 1024);
                } while (e > 0);
                return T = null, n;
            };
        }();
    }, function(t, e) {
        !function() {
            function e() {
                this.fc = 0, this.dl = 0;
            }
            function n() {
                this.dyn_tree = null, this.static_tree = null, this.extra_bits = null, this.extra_base = 0, 
                this.elems = 0, this.max_length = 0, this.max_code = 0;
            }
            function o(t, e, n, o) {
                this.good_length = t, this.max_lazy = e, this.nice_length = n, this.max_chain = o;
            }
            function r() {
                this.next = null, this.len = 0, this.ptr = [], this.off = 0;
            }
            function i(t) {
                var o;
                if (t ? 1 > t ? t = 1 : t > 9 && (t = 9) : t = Ft, it = t, L = !1, et = !1, null === pe) {
                    for (R = P = j = null, pe = [], K = [], B = [], X = [], U = [], at = [], o = 0; he > o; o++) at[o] = new e();
                    for (ut = [], o = 0; 2 * ce + 1 > o; o++) ut[o] = new e();
                    for (ft = [], o = 0; se + 2 > o; o++) ft[o] = new e();
                    for (lt = [], o = 0; ce > o; o++) lt[o] = new e();
                    for (ht = [], o = 0; 2 * ae + 1 > o; o++) ht[o] = new e();
                    dt = new n(), pt = new n(), _t = new n(), mt = [], gt = [], yt = [], Ct = [], St = [], 
                    wt = [], Et = [], Ot = [];
                }
            }
            function s(t) {
                t.next = R, R = t;
            }
            function c(t) {
                return U[jt + t];
            }
            function a(t, e) {
                return U[jt + t] = e;
            }
            function u(t) {
                pe[H + D++] = t, H + D === Bt && function() {
                    var t, e;
                    if (0 !== D) {
                        for (t = function() {
                            var t;
                            return null !== R ? (t = R, R = R.next) : t = new r(), t.next = null, t.len = t.off = 0, 
                            t;
                        }(), null === P ? P = j = t : j = j.next = t, t.len = D - H, e = 0; e < t.len; e++) t.ptr[e] = pe[H + e];
                        D = H = 0;
                    }
                }();
            }
            function f(t) {
                t &= 65535, Bt - 2 > H + D ? (pe[H + D++] = 255 & t, pe[H + D++] = t >>> 8) : (u(255 & t), 
                u(t >>> 8));
            }
            function l() {
                z = (z << de ^ 255 & K[$ + Ut - 1]) & Jt, J = c(z), U[$ & Vt] = J, a(z, $);
            }
            function h(t, e) {
                N(e[t].fc, e[t].dl);
            }
            function d(t) {
                return 255 & (256 > t ? St[t] : St[256 + (t >> 7)]);
            }
            function p(t, e, n) {
                return t[e].fc < t[n].fc || t[e].fc === t[n].fc && yt[e] <= yt[n];
            }
            function _(t, e, n) {
                var o;
                for (o = 0; n > o && Pt < Rt.length; o++) t[e + o] = 255 & Rt[Pt++];
                return o;
            }
            function m(t) {
                var e, n, o, r, i = ot, s = $, c = Y, a = $ > $t ? $ - $t : qt, u = $ + Wt, f = K[s + c - 1], l = K[s + c];
                Y >= st && (i >>= 2);
                do {
                    if (K[(e = t) + c] === l && K[e + c - 1] === f && K[e] === K[s] && K[++e] === K[s + 1]) {
                        for (s += 2, e++; u > s; ) {
                            for (r = !1, o = 0; 8 > o; o += 1) if (e += 1, K[s += 1] !== K[e]) {
                                r = !0;
                                break;
                            }
                            if (r) break;
                        }
                        if (n = Wt - (u - s), s = u - Wt, n > c) {
                            if (tt = t, c = n, Kt) ; else if (n >= ct) break;
                            f = K[s + c - 1], l = K[s + c];
                        }
                    }
                } while ((t = U[t & Vt]) > a && 0 != --i);
                return c;
            }
            function g() {
                var t, e, n = Xt - nt - $;
                if (-1 === n) n--; else if ($ >= jt + $t) {
                    for (t = 0; jt > t; t++) K[t] = K[t + jt];
                    for (tt -= jt, $ -= jt, Z -= jt, t = 0; zt > t; t++) a(t, (e = c(t)) >= jt ? e - jt : qt);
                    for (t = 0; jt > t; t++) e = U[t], U[t] = e >= jt ? e - jt : qt;
                    n += jt;
                }
                et || (0 >= (t = _(K, $ + nt, n)) ? et = !0 : nt += t);
            }
            function v() {
                et || (W = 0, G = 0, function() {
                    var t, e, n, o, r;
                    if (0 === lt[0].dl) {
                        for (dt.dyn_tree = at, dt.static_tree = ft, dt.extra_bits = _e, dt.extra_base = re + 1, 
                        dt.elems = se, dt.max_length = ee, dt.max_code = 0, pt.dyn_tree = ut, pt.static_tree = lt, 
                        pt.extra_bits = me, pt.extra_base = 0, pt.elems = ce, pt.max_length = ee, pt.max_code = 0, 
                        _t.dyn_tree = ht, _t.static_tree = null, _t.extra_bits = ge, _t.extra_base = 0, 
                        _t.elems = ae, _t.max_length = ne, _t.max_code = 0, n = 0, o = 0; oe - 1 > o; o++) for (wt[o] = n, 
                        t = 0; t < 1 << _e[o]; t++) Ct[n++] = o;
                        for (Ct[n - 1] = o, r = 0, o = 0; 16 > o; o++) for (Et[o] = r, t = 0; t < 1 << me[o]; t++) St[r++] = o;
                        for (r >>= 7; ce > o; o++) for (Et[o] = r << 7, t = 0; t < 1 << me[o] - 7; t++) St[256 + r++] = o;
                        for (e = 0; ee >= e; e++) mt[e] = 0;
                        for (t = 0; 143 >= t; ) ft[t++].dl = 8, mt[8]++;
                        for (;255 >= t; ) ft[t++].dl = 9, mt[9]++;
                        for (;279 >= t; ) ft[t++].dl = 7, mt[7]++;
                        for (;287 >= t; ) ft[t++].dl = 8, mt[8]++;
                        for (w(ft, se + 1), t = 0; ce > t; t++) lt[t].dl = 5, lt[t].fc = M(t, 5);
                        C();
                    }
                }(), function() {
                    var t;
                    for (t = 0; zt > t; t++) U[jt + t] = 0;
                    if (rt = be[it].max_lazy, st = be[it].good_length, ct = be[it].nice_length, ot = be[it].max_chain, 
                    $ = 0, Z = 0, 0 >= (nt = _(K, 0, 2 * jt))) return et = !0, void (nt = 0);
                    for (et = !1; Yt > nt && !et; ) g();
                    for (z = 0, t = 0; Ut - 1 > t; t++) z = (z << de ^ 255 & K[t]) & Jt;
                }(), P = null, D = 0, H = 0, 3 >= it ? (Y = Ut - 1, Q = 0) : (Q = Ut - 1, q = !1), 
                F = !1);
            }
            function b(t, e, n) {
                var o;
                return L || (v(), L = !0, 0 !== nt) ? (o = y(t, e, n)) === n ? n : F ? o : (3 >= it ? function() {
                    for (;0 !== nt && null === P; ) {
                        var t;
                        if (l(), J !== qt && $t >= $ - J && (Q = m(J)) > nt && (Q = nt), Q >= Ut) if (t = k($ - tt, Q - Ut), 
                        nt -= Q, rt >= Q) {
                            Q--;
                            do {
                                $++, l();
                            } while (0 != --Q);
                            $++;
                        } else $ += Q, Q = 0, z = ((z = 255 & K[$]) << de ^ 255 & K[$ + 1]) & Jt; else t = k(0, 255 & K[$]), 
                        nt--, $++;
                        for (t && (T(0), Z = $); Yt > nt && !et; ) g();
                    }
                }() : function() {
                    for (;0 !== nt && null === P; ) {
                        if (l(), Y = Q, V = tt, Q = Ut - 1, J !== qt && rt > Y && $t >= $ - J && ((Q = m(J)) > nt && (Q = nt), 
                        Q === Ut && $ - tt > Qt && Q--), Y >= Ut && Y >= Q) {
                            var t;
                            t = k($ - 1 - V, Y - Ut), nt -= Y - 1, Y -= 2;
                            do {
                                $++, l();
                            } while (0 != --Y);
                            q = !1, Q = Ut - 1, $++, t && (T(0), Z = $);
                        } else q ? (k(0, 255 & K[$ - 1]) && (T(0), Z = $), $++, nt--) : (q = !0, $++, nt--);
                        for (;Yt > nt && !et; ) g();
                    }
                }(), 0 === nt && (q && k(0, 255 & K[$ - 1]), T(1), F = !0), o + y(t, o + e, n - o)) : (F = !0, 
                0);
            }
            function y(t, e, n) {
                var o, r, i;
                for (o = 0; null !== P && n > o; ) {
                    for ((r = n - o) > P.len && (r = P.len), i = 0; r > i; i++) t[e + o + i] = P.ptr[P.off + i];
                    var c;
                    P.off += r, P.len -= r, o += r, 0 === P.len && (c = P, P = P.next, s(c));
                }
                if (o === n) return o;
                if (D > H) {
                    for ((r = n - o) > D - H && (r = D - H), i = 0; r > i; i++) t[e + o + i] = pe[H + i];
                    o += r, D === (H += r) && (D = H = 0);
                }
                return o;
            }
            function C() {
                var t;
                for (t = 0; se > t; t++) at[t].fc = 0;
                for (t = 0; ce > t; t++) ut[t].fc = 0;
                for (t = 0; ae > t; t++) ht[t].fc = 0;
                at[ie].fc = 1, Mt = It = 0, At = Tt = kt = 0, xt = 0, Nt = 1;
            }
            function S(t, e) {
                for (var n = gt[e], o = e << 1; vt >= o && (vt > o && p(t, gt[o + 1], gt[o]) && o++, 
                !p(t, n, gt[o])); ) gt[e] = gt[o], e = o, o <<= 1;
                gt[e] = n;
            }
            function w(t, e) {
                var n, o, r = [], i = 0;
                for (n = 1; ee >= n; n++) i = i + mt[n - 1] << 1, r[n] = i;
                for (o = 0; e >= o; o++) {
                    var s = t[o].dl;
                    0 !== s && (t[o].fc = M(r[s]++, s));
                }
            }
            function E(t) {
                var e, n, o = t.dyn_tree, r = t.static_tree, i = t.elems, s = -1, c = i;
                for (vt = 0, bt = he, e = 0; i > e; e++) 0 !== o[e].fc ? (gt[++vt] = s = e, yt[e] = 0) : o[e].dl = 0;
                for (;2 > vt; ) {
                    var a = gt[++vt] = 2 > s ? ++s : 0;
                    o[a].fc = 1, yt[a] = 0, Mt--, null !== r && (It -= r[a].dl);
                }
                for (t.max_code = s, e = vt >> 1; e >= 1; e--) S(o, e);
                do {
                    e = gt[te], gt[te] = gt[vt--], S(o, te), n = gt[te], gt[--bt] = e, gt[--bt] = n, 
                    o[c].fc = o[e].fc + o[n].fc, yt[e] > yt[n] + 1 ? yt[c] = yt[e] : yt[c] = yt[n] + 1, 
                    o[e].dl = o[n].dl = c, gt[te] = c++, S(o, te);
                } while (vt >= 2);
                gt[--bt] = gt[te], function(t) {
                    var e, n, o, r, i, s, c = t.dyn_tree, a = t.extra_bits, u = t.extra_base, f = t.max_code, l = t.max_length, h = t.static_tree, d = 0;
                    for (r = 0; ee >= r; r++) mt[r] = 0;
                    for (c[gt[bt]].dl = 0, e = bt + 1; he > e; e++) (r = c[c[n = gt[e]].dl].dl + 1) > l && (r = l, 
                    d++), c[n].dl = r, n > f || (mt[r]++, i = 0, n >= u && (i = a[n - u]), s = c[n].fc, 
                    Mt += s * (r + i), null !== h && (It += s * (h[n].dl + i)));
                    if (0 !== d) {
                        do {
                            for (r = l - 1; 0 === mt[r]; ) r--;
                            mt[r]--, mt[r + 1] += 2, mt[l]--, d -= 2;
                        } while (d > 0);
                        for (r = l; 0 !== r; r--) for (n = mt[r]; 0 !== n; ) (o = gt[--e]) > f || (c[o].dl !== r && (Mt += (r - c[o].dl) * c[o].fc, 
                        c[o].fc = r), n--);
                    }
                }(t), w(o, s);
            }
            function O(t, e) {
                var n, o, r = -1, i = t[0].dl, s = 0, c = 7, a = 4;
                for (0 === i && (c = 138, a = 3), t[e + 1].dl = 65535, n = 0; e >= n; n++) o = i, 
                i = t[n + 1].dl, ++s < c && o === i || (a > s ? ht[o].fc += s : 0 !== o ? (o !== r && ht[o].fc++, 
                ht[ue].fc++) : 10 >= s ? ht[fe].fc++ : ht[le].fc++, s = 0, r = o, 0 === i ? (c = 138, 
                a = 3) : o === i ? (c = 6, a = 3) : (c = 7, a = 4));
            }
            function A(t, e) {
                var n, o, r = -1, i = t[0].dl, s = 0, c = 7, a = 4;
                for (0 === i && (c = 138, a = 3), n = 0; e >= n; n++) if (o = i, i = t[n + 1].dl, 
                !(++s < c && o === i)) {
                    if (a > s) do {
                        h(o, ht);
                    } while (0 != --s); else 0 !== o ? (o !== r && (h(o, ht), s--), h(ue, ht), N(s - 3, 2)) : 10 >= s ? (h(fe, ht), 
                    N(s - 3, 3)) : (h(le, ht), N(s - 11, 7));
                    s = 0, r = o, 0 === i ? (c = 138, a = 3) : o === i ? (c = 6, a = 3) : (c = 7, a = 4);
                }
            }
            function T(t) {
                var e, n, o, r, i;
                if (r = $ - Z, Ot[kt] = xt, E(dt), E(pt), o = function() {
                    var t;
                    for (O(at, dt.max_code), O(ut, pt.max_code), E(_t), t = ae - 1; t >= 3 && 0 === ht[ve[t]].dl; t--) ;
                    return Mt += 3 * (t + 1) + 5 + 5 + 4, t;
                }(), (e = Mt + 3 + 7 >> 3) >= (n = It + 3 + 7 >> 3) && (e = n), e >= r + 4 && Z >= 0) for (N((Lt << 1) + t, 3), 
                I(), f(r), f(~r), i = 0; r > i; i++) u(K[Z + i]); else n === e ? (N((Dt << 1) + t, 3), 
                x(ft, lt)) : (N((Ht << 1) + t, 3), function(t, e, n) {
                    var o;
                    for (N(t - 257, 5), N(e - 1, 5), N(n - 4, 4), o = 0; n > o; o++) N(ht[ve[o]].dl, 3);
                    A(at, t - 1), A(ut, e - 1);
                }(dt.max_code + 1, pt.max_code + 1, o + 1), x(at, ut));
                C(), 0 !== t && I();
            }
            function k(t, e) {
                if (X[At++] = e, 0 === t ? at[e].fc++ : (t--, at[Ct[e] + re + 1].fc++, ut[d(t)].fc++, 
                B[Tt++] = t, xt |= Nt), Nt <<= 1, 0 == (7 & At) && (Ot[kt++] = xt, xt = 0, Nt = 1), 
                it > 2 && 0 == (4095 & At)) {
                    var n, o = 8 * At, r = $ - Z;
                    for (n = 0; ce > n; n++) o += ut[n].fc * (5 + me[n]);
                    if (o >>= 3, Tt < parseInt(At / 2, 10) && o < parseInt(r / 2, 10)) return !0;
                }
                return At === Gt - 1 || Tt === Zt;
            }
            function x(t, e) {
                var n, o, r, i, s = 0, c = 0, a = 0, u = 0;
                if (0 !== At) do {
                    0 == (7 & s) && (u = Ot[a++]), o = 255 & X[s++], 0 == (1 & u) ? h(o, t) : (h((r = Ct[o]) + re + 1, t), 
                    0 !== (i = _e[r]) && N(o -= wt[r], i), h(r = d(n = B[c++]), e), 0 !== (i = me[r]) && N(n -= Et[r], i)), 
                    u >>= 1;
                } while (At > s);
                h(ie, t);
            }
            function N(t, e) {
                G > ye - e ? (f(W |= t << G), W = t >> ye - G, G += e - ye) : (W |= t << G, G += e);
            }
            function M(t, e) {
                var n = 0;
                do {
                    n |= 1 & t, t >>= 1, n <<= 1;
                } while (--e > 0);
                return n >> 1;
            }
            function I() {
                G > 8 ? f(W) : G > 0 && u(W), W = 0, G = 0;
            }
            var R, P, j, L, D, H, F, K, B, X, U, W, G, Z, z, J, V, q, Q, Y, $, tt, et, nt, ot, rt, it, st, ct, at, ut, ft, lt, ht, dt, pt, _t, mt, gt, vt, bt, yt, Ct, St, wt, Et, Ot, At, Tt, kt, xt, Nt, Mt, It, Rt, Pt, jt = 32768, Lt = 0, Dt = 1, Ht = 2, Ft = 6, Kt = !1, Bt = 8192, Xt = 2 * jt, Ut = 3, Wt = 258, Gt = 8192, Zt = Gt, zt = 32768, Jt = zt - 1, Vt = jt - 1, qt = 0, Qt = 4096, Yt = Wt + Ut + 1, $t = jt - Yt, te = 1, ee = 15, ne = 7, oe = 29, re = 256, ie = 256, se = re + 1 + oe, ce = 30, ae = 19, ue = 16, fe = 17, le = 18, he = 2 * se + 1, de = parseInt((15 + Ut - 1) / Ut, 10), pe = null, _e = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0 ], me = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ], ge = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7 ], ve = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ], be = [ new o(0, 0, 0, 0), new o(4, 4, 8, 4), new o(4, 5, 16, 8), new o(4, 6, 32, 32), new o(4, 4, 16, 16), new o(8, 16, 32, 32), new o(8, 16, 128, 128), new o(8, 32, 128, 256), new o(32, 128, 258, 1024), new o(32, 258, 258, 4096) ], ye = 16;
            t.exports = function(t, e) {
                var n, o;
                Rt = t, Pt = 0, void 0 === e && (e = Ft), i(e), o = [];
                do {
                    n = b(o, o.length, 1024);
                } while (n > 0);
                return Rt = null, o;
            }, t.exports.DEFAULT_LEVEL = Ft;
        }();
    } ]);
    var c = s, a = function() {
        function t(t) {
            this.protocol = void 0, this.type = void 0, this.compressType = void 0, this.err = "0", 
            this.serviceId = "", this.dataId = "", this.data = "", this.source = "", this.target = "", 
            this.ip = "";
            var e = JSON.parse(t);
            for (var n in e) e.hasOwnProperty(n) && (this[n] = e[n]);
        }
        var e = t.prototype;
        return e.getText = function() {
            return this.data ? r.utf8ToUtf16(i(this.data)) : "";
        }, e.getBinaryArray = function() {
            var t = this;
            return new Promise(function(e) {
                if (t.data) {
                    var n = i(t.data), o = t.compressType || "COMMON", s = r.binaryStringToBinaryArray(n);
                    if ("GZIP" === String(o)) {
                        var a = {
                            level: 6,
                            name: "",
                            timestamp: parseInt("" + Date.now() / 1e3, 10)
                        };
                        e(s = new Uint8Array(c.unzip(s, a)));
                    } else e(s);
                } else e([]);
            });
        }, t;
    }(), u = function(t) {
        try {
            if ("undefined" != typeof window && btoa) return btoa(t);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.log(t);
        }
        for (var e, n, o, r, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = "", c = 0, a = (t = String(t)).length % 3; c < t.length; ) {
            if ((n = t.charCodeAt(c++)) > 255 || (o = t.charCodeAt(c++)) > 255 || (r = t.charCodeAt(c++)) > 255) throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
            s += i.charAt((e = n << 16 | o << 8 | r) >> 18 & 63) + i.charAt(e >> 12 & 63) + i.charAt(e >> 6 & 63) + i.charAt(63 & e);
        }
        return a ? s.slice(0, a - 3) + "===".substring(a) : s;
    };
    function f(t) {
        return "function" == typeof t;
    }
    function l(t) {
        var e = n(t);
        return "string" === e || "object" === e && null != t && !Array.isArray(t) && "[object String]" == function(t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
        }(t);
    }
    var h, d, p = function() {
        function t() {
            this.ackMap = {}, this.msgMap = {}, this.subscribeMap = {}, this.__stack__ = {}, 
            this.__sl__ = 0;
        }
        var e = t.prototype;
        return e.packMsg = function(t, e, o) {
            var i;
            if (e instanceof Uint8Array && e.buffer) {
                var s = r.binaryArrayToBinaryString(e);
                i = u(s);
            } else {
                if (!l(e)) throw "non-binary data must be string";
                i = u(r.utf16ToUtf8(e));
            }
            var c, a, f = {};
            if (a = n(c = o), null != c && ("object" === a || "function" === a) && o.headers) {
                var h = o.headers;
                Object.keys(h).forEach(function(t) {
                    Number(t) && t >= 0 && t <= 63 && l(h[t]) && (!1 !== o.base64Encode ? f[t] = u(h[t]) : f[t] = h[t]);
                });
            }
            return {
                type: "REQ",
                protocol: "ACCS_H5",
                dataId: Date.now() % 1e8 + "_" + Math.round(1e4 * Math.random()),
                serviceId: t,
                target: t,
                source: t,
                data: i,
                extHeader: f
            };
        }, e.processDownlinkMsg = function(t, e) {
            var n = new a(t);
            if (n.protocol === o.Protocol.ACCS_H5 || n.protocol === o.Protocol.ACCS_WV) {
                if ("1" == n.err) {
                    var r = i(n.data), s = {};
                    try {
                        s = JSON.parse(r), console.log(s);
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        console.error(t);
                    }
                }
                switch (n.type) {
                  case "RES":
                    var c = this.ackMap["_" + n.dataId];
                    c && (c(n), delete this.ackMap["_" + n.dataId], delete this.msgMap["_" + n.dataId]);
                    break;

                  case "DATA":
                    if (!this.__stack__[n.dataId]) {
                        this.__stack__[n.dataId] = !0, this.__sl__++ >= 50 && (this.__sl__ = 0, this.__stack__ = {});
                        var u = this.subscribeMap["_" + n.serviceId];
                        u && u(n);
                    }
                    n.extHeader && (n.decodedExtHeader = {}, Object.keys(n.extHeader).forEach(function(t) {
                        n.decodedExtHeader[t] = i(n.extHeader[t]);
                    })), e && e(n);
                }
            }
        }, t;
    }(), _ = {
        TOKEN: {
            type: "TOKEN_CLOSE",
            message: "关闭链接, 获取 token 不合法",
            reconnectAble: !1
        },
        RECONNECT: {
            type: "CLOSE_RECONNECT",
            message: "关闭链接, webSocket 重连结束",
            reconnectAble: !1
        },
        NORMAL: {
            type: "CLOSE",
            message: "关闭链接, webSocket onClose 触发"
        }
    };
    !function(t) {
        t[t.INITIALIZED = 0] = "INITIALIZED", t[t.ONOPEN = 1] = "ONOPEN", t[t.CLOSE = 2] = "CLOSE", 
        t[t.ONCLOSE = 3] = "ONCLOSE", t[t.CONNECT_FAILED = 4] = "CONNECT_FAILED", t[t.ON_SOCKET_ERROR = 5] = "ON_SOCKET_ERROR";
    }(d || (d = {}));
    var m = function() {
        function t(t) {
            var n = this;
            this.onopen = null, this.onclose = null, this.onmessage = null, this.onerror = null, 
            my.connectSocket({
                url: t,
                success: function() {},
                fail: function(t) {
                    n.readyState = d.CONNECT_FAILED, n && n._onError && f(n._onError) && n._onError(t);
                }
            }), this.readyState = d.INITIALIZED, my.onSocketOpen(function(t) {
                n && (n.readyState = d.ONOPEN, n.onopen && f(n.onopen) && n.onopen(t));
            }), my.onSocketClose(function(t) {
                n && (n.readyState = d.ONCLOSE, n.onclose && f(n.onclose) && n.onclose(e({}, t, {
                    accsMessage: _.NORMAL
                })));
            }), my.onSocketError(function(t) {
                n && (n.readyState = d.ON_SOCKET_ERROR, n._onError && f(n._onError) && n._onError(t));
            }), my.onSocketMessage(function(t) {
                n && n.onmessage && f(n.onmessage) && n.onmessage(t);
            });
        }
        var n = t.prototype;
        return n._onError = function(t) {
            this && this.onerror && f(this.onerror) && this.onerror(t);
        }, n.close = function() {
            this.readyState = d.CLOSE, my.closeSocket();
        }, n.send = function(t) {
            this.readyState === d.ONOPEN && my.sendSocketMessage({
                data: t,
                fail: function(t) {
                    throw t;
                }
            });
        }, t;
    }(), g = function() {
        function t(t) {
            var n = this;
            this.onopen = null, this.onclose = null, this.onmessage = null, this.onerror = null, 
            this.socketTask = wx.connectSocket({
                url: t,
                success: function() {},
                fail: function(t) {
                    n.readyState = d.CONNECT_FAILED, n && n._onError && f(n._onError) && n._onError(t);
                }
            }), this.readyState = d.INITIALIZED, this.socketTask.onOpen(function(t) {
                n && (n.readyState = d.ONOPEN, n.onopen && f(n.onopen) && n.onopen(t));
            }), this.socketTask.onClose(function(t) {
                n && (n.readyState = d.ONCLOSE, n.onclose && f(n.onclose) && n.onclose(e({}, t, {
                    accsMessage: _.NORMAL
                })));
            }), this.socketTask.onError(function(t) {
                n && (n.readyState = d.ON_SOCKET_ERROR, n._onError && f(n._onError) && n._onError(t));
            }), this.socketTask.onMessage(function(t) {
                n && n.onmessage && f(n.onmessage) && n.onmessage(t);
            });
        }
        var n = t.prototype;
        return n._onError = function(t) {
            this && this.onerror && f(this.onerror) && this.onerror(t);
        }, n.close = function() {
            this.readyState = d.CLOSE, this.socketTask.close();
        }, n.send = function(t) {
            this.readyState === d.ONOPEN && this.socketTask.send({
                data: t,
                fail: function(t) {
                    throw t;
                }
            });
        }, t;
    }();
    function v() {
        if (y() && window.WebSocket) return window.WebSocket;
        if (C() && my.connectSocket) return m;
        if (S() && wx.connectSocket) return g;
        throw "Not find WebSocket API!";
    }
    function b() {
        return y() ? window.sessionStorage : (h = h || {}, {
            setItem: function(t, e) {
                h[t] = e;
            },
            getItem: function(t) {
                return h[t];
            }
        });
    }
    function y() {
        return "undefined" != typeof window && "undefined" != typeof document && !C() && !S();
    }
    function C() {
        return "undefined" != typeof my;
    }
    function S() {
        return "undefined" != typeof wx;
    }
    var w = v(), E = b();
    function O(t, n) {
        return new Promise(function(o, r) {
            var i = n, s = t.deviceId, c = t.appKey;
            i || (y() && window.lib && window.lib.mtop ? i = window.lib.mtop : r("Not find lib.mtop!")), 
            i.request(e({
                api: "mtop.mediaplatform.live.encryption",
                v: "1.0",
                ecode: 0,
                AntiCreep: !0,
                data: {
                    appKey: c,
                    windowId: s
                }
            }, t.m_params)).then(function(t) {
                if (t && t.data && t.data.result) {
                    var e = t.data.result;
                    o(e);
                } else o(null);
            }).catch(function(t) {
                t.ret[0].indexOf("FAIL_SYS_SESSION_EXPIRED") > -1 ? r({
                    type: "USER_NOT_LOGIN",
                    message: "用户未登录"
                }) : r({
                    type: "GET_TOKEN_ERROR",
                    message: "获取ACCS token时出错",
                    error: t
                });
            });
        });
    }
    var A = function() {
        function t(t, e, n, o, r, i, s) {
            var c = this;
            void 0 === n && (n = ""), void 0 === i && (i = 3e3), this._subscribeMap = {}, this.accsMsg = new p(), 
            this._subscribeMap = this.accsMsg.subscribeMap, this._ackMap = this.accsMsg.ackMap, 
            this._msgMap = this.accsMsg.msgMap, this._aserverProxy = n, this._ports = r, this._token = o, 
            this._opt = s, this._reconnectAble = !1, this._closeTimes = 0, this._detectTimer = void 0, 
            this._url = "", this.onHeartbeatError = null, this.onClose = null, this.onReconnect = null, 
            this.heartCheck = {
                stopped: !1,
                timeoutObj: void 0,
                serverTimeoutObj: void 0,
                stop: function() {},
                reset: function() {},
                start: function() {}
            }, s.reconnect && (s.accsToken ? console.warn('The custom "accsToken" can\'t use reconnect mode!') : this._reconnectAble = !0), 
            this._getConnectionUrl(), this._initConnection(function(n) {
                n.isSuccess ? (c._connection = n.connection, c._sendProbe(), c._bindEventHandler(), 
                c._opt.accsHeartbeat && (c.heartCheck = {
                    stopped: !1,
                    timeoutObj: void 0,
                    serverTimeoutObj: void 0,
                    stop: function() {
                        var t = c.heartCheck;
                        t.timeoutObj && clearTimeout(t.timeoutObj), t.serverTimeoutObj && clearTimeout(t.serverTimeoutObj), 
                        t.stopped = !0;
                    },
                    reset: function(t) {
                        var e = c.heartCheck;
                        e.timeoutObj && clearTimeout(e.timeoutObj), e.serverTimeoutObj && clearTimeout(e.serverTimeoutObj), 
                        e.stopped || e.start(t);
                    },
                    start: function(t) {
                        var e = c.heartCheck, n = t || 3e4;
                        e.stopped || (e.timeoutObj = setTimeout(function() {
                            c.send("h5_ping", JSON.stringify({})).then(function(t) {
                                if (!e.stopped) try {
                                    c.heartCheck.reset(1e3 * JSON.parse(t.getText()).timeInterval);
                                } catch (t) {}
                            }, function() {}), e.serverTimeoutObj = setTimeout(function() {
                                c.onHeartbeatError && c.onHeartbeatError(), e.stop();
                            }, n);
                        }, n));
                    }
                }, c.heartCheck.start()), t(c)) : e({
                    type: "OPEN_CONNECTION_ERROR",
                    message: "开启连接失败",
                    error: n.error,
                    customError: {
                        deviceId: c._opt.__accs_device,
                        url: c._url
                    }
                });
            }), setTimeout(function() {
                c.getStatus() || e({
                    type: "OPEN_CONNECTION_TIMEOUT",
                    message: "开启连接超时",
                    error: "",
                    customError: {
                        deviceId: c._opt.__accs_device,
                        url: c._url
                    }
                });
            }, i);
        }
        var n = t.prototype;
        return n._getConnectionUrl = function() {
            var t = "m", e = this._opt.protocol || "ws:";
            "undefined" != typeof lib && lib.mtop.config && lib.mtop.config.subDomain && (t = lib.mtop.config.subDomain), 
            y() && "https:" === window.location.protocol && (e = "wss:"), this._aserverProxy ? this._url = e + "//" + this._aserverProxy + ":" + this._ports + "/accs/auth?token=" + this._token : this._url = e + "//ws-msgacs." + t + ".taobao.com:" + this._ports + "/accs/auth?token=" + this._token;
        }, n._initConnection = function(t) {
            var e = w && new w(this._url);
            e.onopen = function() {
                e.onerror = null, e.onopen = null, t && t({
                    isSuccess: !0,
                    connection: e
                });
            }, e.onerror = function(n) {
                e.onerror = null, e.onopen = null, t && t({
                    isSuccess: !1,
                    connection: e,
                    error: n
                });
            };
        }, n._bindEventHandler = function() {
            var t = this;
            this._connection.onerror = function(e) {
                console.log("accs_onerror", e), t.onError && t.onError(e);
            }, this._connection.onclose = function(n) {
                clearTimeout(t._detectTimer), t._reconnectAble ? t._reconnect() : t.onClose && t.onClose(e({}, n, {
                    accsMessage: _.NORMAL
                }));
            }, this._connection.onmessage = function(e) {
                t._processDownlinkMsg && t._processDownlinkMsg(e.data);
            };
        }, n._sendProbe = function() {
            var t = this;
            this._detectTimer = setTimeout(function() {
                !0 === t._opt.heartbeat ? (t._connection.send(JSON.stringify({
                    type: "ACK",
                    protocol: "HEARTBEAT_ACCS_H5",
                    data: ""
                })), t._sendProbe()) : clearTimeout(t._detectTimer);
            }, 3e4);
        }, n._sendACK = function(t) {
            this._connection.send(JSON.stringify({
                type: "ACK",
                protocol: "ACCS_H5",
                dataId: t.dataId,
                serviceId: t.serviceId,
                target: t.source || "",
                source: t.target || "",
                ip: t.ip || "",
                data: "",
                extHeader: t.extHeader || {}
            }));
        }, n._processDownlinkMsg = function(t) {
            var e = this;
            this.accsMsg.processDownlinkMsg(t, function(t) {
                e._sendACK(t);
            });
        }, n.onMessage = function(t, e) {
            f(e) && (clearTimeout(this._detectTimer), this._sendProbe(), this._subscribeMap.token = this._subscribeMap["_" + t] = e);
        }, n.onError = function(t) {
            console.log(t), console.log("webSocket onerror");
        }, n.offMessage = function(t) {
            delete this._subscribeMap["_" + t];
        }, n.send = function(t, e, n) {
            var o = this;
            return new Promise(function(r, i) {
                try {
                    if (!o.getStatus()) throw "websocket not available";
                    var s = o.accsMsg.packMsg(t, e, n);
                    r && (o._ackMap["_" + s.dataId] = r, o._msgMap["_" + s.dataId] = s, "accs_h5_binduser" === t && (o._msgMap.binduser = s)), 
                    clearTimeout(o._detectTimer), o._sendProbe(), o._connection.send(JSON.stringify(s));
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    i(t);
                }
            });
        }, n.close = function() {
            this.getStatus() && (this._reconnectAble = !1, this._connection.close());
        }, n._reconnect = function() {
            var t = this;
            ++this._closeTimes < 5 ? setTimeout(function() {
                (t._opt.getToken || O)({
                    appKey: t._opt.appKey,
                    deviceId: t._opt.__accs_device,
                    m_params: t._opt.m_params
                }).then(function(e) {
                    e ? (t._token = e, t._getConnectionUrl(), t._initConnection(function(e) {
                        e.isSuccess ? (t._connection = e.connection, t._sendProbe(), t._bindEventHandler(), 
                        t.onReconnect && t.onReconnect(t)) : t._reconnect();
                    })) : (t._reconnectAble = !1, console.log("webSocket reconnect get TOKEN response error"), 
                    t.onClose && t.onClose({
                        accsMessage: _.TOKEN
                    }));
                }).catch(function() {
                    t._reconnect();
                });
            }, this._opt.reconnectInterval || 2e3) : (this._reconnectAble = !1, console.log("webSocket reconnect end!"), 
            this.onClose && this.onClose({
                accsMessage: _.RECONNECT
            }));
        }, n.dangerouslyReconnect = function(t, e, n) {
            var o = this;
            this._token = t, this._getConnectionUrl(), this._initConnection(function(t) {
                t.isSuccess ? (o._connection = t.connection, o._sendProbe(), o._bindEventHandler(), 
                o._msgMap.binduser ? o.send("accs_h5_binduser", o._msgMap.binduser).then(function(t) {
                    Object.keys(o._ackMap).length > 0 && Object.keys(o._ackMap).forEach(function(t) {
                        o._connection.send(JSON.stringify(o._msgMap[t]));
                    });
                }) : Object.keys(o._ackMap).length > 0 && Object.keys(o._ackMap).forEach(function(t) {
                    o._connection.send(JSON.stringify(o._msgMap[t]));
                }), e && e(o)) : n && n();
            });
        }, n.getStatus = function() {
            return this._connection && 1 === Number(this._connection.readyState);
        }, t;
    }(), T = function(t) {
        var e, o;
        e = Array.prototype.forEach, o = Array.prototype.map, this.each = function(t, n, o) {
            if (null !== t) if (e && t.forEach === e) t.forEach(n, o); else if (t.length === +t.length) {
                for (var r = 0, i = t.length; r < i; r++) if (n.call(o, t[r], r, t) === {}) return;
            } else for (var s in t) if (t.hasOwnProperty(s) && n.call(o, t[s], s, t) === {}) return;
        }, this.map = function(t, e, n) {
            var r = [];
            return null == t ? r : o && t.map === o ? t.map(e, n) : (this.each(t, function(t, o, i) {
                r[r.length] = e.call(n, t, o, i);
            }), r);
        }, "object" == n(t) ? (this.hasher = t.hasher, this.screen_resolution = t.screen_resolution, 
        this.canvas = t.canvas, this.ie_activex = t.ie_activex) : "function" == typeof t && (this.hasher = t);
    };
    T.prototype = {
        get: function() {
            var t = [];
            return t.push(navigator.userAgent), t.push(navigator.language), t.push(screen.colorDepth), 
            this.screen_resolution && void 0 !== this.getScreenResolution() && t.push(this.getScreenResolution().join("x")), 
            t.push(new Date().getTimezoneOffset()), t.push(this.hasSessionStorage()), t.push(this.hasLocalStorage()), 
            t.push(!!window.indexedDB), document.body ? t.push(n(document.body.addBehavior)) : t.push("undefined"), 
            t.push(n(window.openDatabase)), t.push(navigator.cpuClass), t.push(navigator.platform), 
            t.push(navigator.doNotTrack), t.push(this.getPluginsString()), this.canvas && this.isCanvasSupported() && t.push(this.getCanvasFingerprint()), 
            this.hasher ? this.hasher(t.join("###"), 31) : this.murmurhash3_32_gc(t.join("###"), 31);
        },
        murmurhash3_32_gc: function(t, e) {
            var n, o, r, i, s, c, a, u;
            for (n = 3 & t.length, o = t.length - n, r = e, s = 3432918353, c = 461845907, u = 0; u < o; ) a = 255 & t.charCodeAt(u) | (255 & t.charCodeAt(++u)) << 8 | (255 & t.charCodeAt(++u)) << 16 | (255 & t.charCodeAt(++u)) << 24, 
            ++u, r = 27492 + (65535 & (i = 5 * (65535 & (r = (r ^= a = (65535 & (a = (a = (65535 & a) * s + (((a >>> 16) * s & 65535) << 16) & 4294967295) << 15 | a >>> 17)) * c + (((a >>> 16) * c & 65535) << 16) & 4294967295) << 13 | r >>> 19)) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (i >>> 16) & 65535) << 16);
            switch (a = 0, n) {
              case 3:
                a ^= (255 & t.charCodeAt(u + 2)) << 16;

              case 2:
                a ^= (255 & t.charCodeAt(u + 1)) << 8;

              case 1:
                r ^= a = (65535 & (a = (a = (65535 & (a ^= 255 & t.charCodeAt(u))) * s + (((a >>> 16) * s & 65535) << 16) & 4294967295) << 15 | a >>> 17)) * c + (((a >>> 16) * c & 65535) << 16) & 4294967295;
            }
            return r ^= t.length, r = 2246822507 * (65535 & (r ^= r >>> 16)) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, 
            r = 3266489909 * (65535 & (r ^= r >>> 13)) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, 
            (r ^= r >>> 16) >>> 0;
        },
        hasLocalStorage: function() {
            try {
                return !!window.localStorage;
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return !0;
            }
        },
        hasSessionStorage: function() {
            try {
                return !!window.sessionStorage;
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return !0;
            }
        },
        isCanvasSupported: function() {
            var t = document.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"));
        },
        isIE: function() {
            return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent));
        },
        getPluginsString: function() {
            return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString();
        },
        getRegularPluginsString: function() {
            return this.map(navigator.plugins, function(t) {
                var e = this.map(t, function(t) {
                    return [ t.type, t.suffixes ].join("~");
                }).join(",");
                return [ t.name, t.description, e ].join("::");
            }, this).join(";");
        },
        getIEPluginsString: function() {
            return window.ActiveXObject ? this.map([ "ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection" ], function(t) {
                try {
                    return new ActiveXObject(t), t;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return null;
                }
            }).join(";") : "";
        },
        getScreenResolution: function() {
            return [ screen.height, screen.width ];
        },
        getCanvasFingerprint: function() {
            var t = document.createElement("canvas"), e = t.getContext("2d"), n = "http://valve.github.io";
            return e.textBaseline = "top", e.font = "14px 'Arial'", e.textBaseline = "alphabetic", 
            e.fillStyle = "#f60", e.fillRect(125, 1, 62, 20), e.fillStyle = "#069", e.fillText(n, 2, 15), 
            e.fillStyle = "rgba(102, 204, 0, 0.7)", e.fillText(n, 4, 17), t.toDataURL();
        }
    };
    var k = "", x = "", N = M();
    function M() {
        if (E.getItem("__accs_device")) return E.getItem("__accs_device");
        var t = Math.floor(899 * Math.random() + 100), e = y() ? new T({
            screen_resolution: !0,
            canvas: !0
        }).get() : Math.floor(1e9 * Math.random());
        e = e.toString().substr(0, 11);
        var n = (e += new Array(11 - e.length).join("0")) + "_" + t;
        return E.setItem("__accs_device", n), n;
    }
    function I(t, e, n, o, r, i, s) {
        new A(r, i, t, e, n, o, s);
    }
    var R = (y() ? window.lib || (window.lib = {}) : {}).accs = {
        init: function(t) {
            var n = e({}, t, {
                __accs_device: ""
            }), o = n.ports, r = void 0 === o ? 80 : o, i = n.timeout, s = void 0 === i ? 3e3 : i, c = n.aserverProxy, a = void 0 === c ? "" : c, u = n.getToken, f = void 0 === u ? O : u;
            return new Promise(function(e, o) {
                var i = y() && window.WebSocket || C() && my.connectSocket || S() && wx.connectSocket;
                x = t.appKey, n.__accs_device = N, n && n.appKey || o({
                    type: "NO_APP_KEY",
                    message: "请传入appKey"
                }), i ? n.accsToken ? I(a, n.accsToken, r, s, e, o, n) : f({
                    appKey: n.appKey,
                    deviceId: N,
                    m_params: n.m_params
                }).then(function(t) {
                    if (!t) return o({
                        type: "GET_TOKEN_ERROR",
                        message: "获取ACCS token时出错",
                        error: "Not get token!"
                    });
                    k = t, I(a, t, r, s, e, o, n);
                }).catch(function(t) {
                    o({
                        type: "GET_TOKEN_ERROR",
                        message: "获取ACCS token时出错",
                        error: t
                    });
                }) : o({
                    type: "NO_WS_SUPPORT",
                    message: "浏览器不支持 WebSocket"
                });
            });
        },
        bindAble: !0,
        getToken: function() {
            return k;
        },
        getAccsDeviceId: function() {
            return N;
        },
        getAppKey: function() {
            return x;
        }
    };
    t.default = R, Object.defineProperty(t, "__esModule", {
        value: !0
    });
}, "object" === ("undefined" == typeof exports ? "undefined" : n(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([ "exports" ], e) : e((t = t || self).accs = {});