var r = function(r, t) {
    var e = r, n = f[t], o = null, a = 0, u = null, i = new Array(), g = {}, c = function(r, t) {
        o = function(r) {
            for (var t = new Array(r), e = 0; e < r; e += 1) {
                t[e] = new Array(r);
                for (var n = 0; n < r; n += 1) t[e][n] = null;
            }
            return t;
        }(a = 4 * e + 17), h(0, 0), h(a - 7, 0), h(0, a - 7), s(), l(), w(r, t), e >= 7 && v(r), 
        null == u && (u = p(e, n, i)), d(u, t);
    }, h = function(r, t) {
        for (var e = -1; e <= 7; e += 1) if (!(r + e <= -1 || a <= r + e)) for (var n = -1; n <= 7; n += 1) t + n <= -1 || a <= t + n || (o[r + e][t + n] = 0 <= e && e <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == e || 6 == e) || 2 <= e && e <= 4 && 2 <= n && n <= 4);
    }, l = function() {
        for (var r = 8; r < a - 8; r += 1) null == o[r][6] && (o[r][6] = r % 2 == 0);
        for (var t = 8; t < a - 8; t += 1) null == o[6][t] && (o[6][t] = t % 2 == 0);
    }, s = function() {
        for (var r = y.getPatternPosition(e), t = 0; t < r.length; t += 1) for (var n = 0; n < r.length; n += 1) {
            var a = r[t], u = r[n];
            if (null == o[a][u]) for (var i = -2; i <= 2; i += 1) for (var f = -2; f <= 2; f += 1) o[a + i][u + f] = -2 == i || 2 == i || -2 == f || 2 == f || 0 == i && 0 == f;
        }
    }, v = function(r) {
        for (var t = y.getBCHTypeNumber(e), n = 0; n < 18; n += 1) {
            var u = !r && 1 == (t >> n & 1);
            o[Math.floor(n / 3)][n % 3 + a - 8 - 3] = u;
        }
        for (n = 0; n < 18; n += 1) {
            u = !r && 1 == (t >> n & 1);
            o[n % 3 + a - 8 - 3][Math.floor(n / 3)] = u;
        }
    }, w = function(r, t) {
        for (var e = n << 3 | t, u = y.getBCHTypeInfo(e), i = 0; i < 15; i += 1) {
            var f = !r && 1 == (u >> i & 1);
            i < 6 ? o[i][8] = f : i < 8 ? o[i + 1][8] = f : o[a - 15 + i][8] = f;
        }
        for (i = 0; i < 15; i += 1) {
            f = !r && 1 == (u >> i & 1);
            i < 8 ? o[8][a - i - 1] = f : i < 9 ? o[8][15 - i - 1 + 1] = f : o[8][15 - i - 1] = f;
        }
        o[a - 8][8] = !r;
    }, d = function(r, t) {
        for (var e = -1, n = a - 1, u = 7, i = 0, f = y.getMaskFunction(t), g = a - 1; g > 0; g -= 2) for (6 == g && (g -= 1); ;) {
            for (var c = 0; c < 2; c += 1) if (null == o[n][g - c]) {
                var h = !1;
                i < r.length && (h = 1 == (r[i] >>> u & 1)), f(n, g - c) && (h = !h), o[n][g - c] = h, 
                -1 == (u -= 1) && (i += 1, u = 7);
            }
            if ((n += e) < 0 || a <= n) {
                n -= e, e = -e;
                break;
            }
        }
    }, p = function(r, t, e) {
        for (var n = C.getRSBlocks(r, t), o = A(), a = 0; a < e.length; a += 1) {
            var u = e[a];
            o.put(u.getMode(), 4), o.put(u.getLength(), y.getLengthInBits(u.getMode(), r)), 
            u.write(o);
        }
        var i = 0;
        for (a = 0; a < n.length; a += 1) i += n[a].dataCount;
        if (o.getLengthInBits() > 8 * i) throw new Error("code length overflow. (" + o.getLengthInBits() + ">" + 8 * i + ")");
        for (o.getLengthInBits() + 4 <= 8 * i && o.put(0, 4); o.getLengthInBits() % 8 != 0; ) o.putBit(!1);
        for (;!(o.getLengthInBits() >= 8 * i || (o.put(236, 8), o.getLengthInBits() >= 8 * i)); ) o.put(17, 8);
        return function(r, t) {
            for (var e = 0, n = 0, o = 0, a = new Array(t.length), u = new Array(t.length), i = 0; i < t.length; i += 1) {
                var f = t[i].dataCount, g = t[i].totalCount - f;
                n = Math.max(n, f), o = Math.max(o, g), a[i] = new Array(f);
                for (var c = 0; c < a[i].length; c += 1) a[i][c] = 255 & r.getBuffer()[c + e];
                e += f;
                var h = y.getErrorCorrectPolynomial(g), l = B(a[i], h.getLength() - 1).mod(h);
                u[i] = new Array(h.getLength() - 1);
                for (c = 0; c < u[i].length; c += 1) {
                    var s = c + l.getLength() - u[i].length;
                    u[i][c] = s >= 0 ? l.getAt(s) : 0;
                }
            }
            var v = 0;
            for (c = 0; c < t.length; c += 1) v += t[c].totalCount;
            var w = new Array(v), d = 0;
            for (c = 0; c < n; c += 1) for (i = 0; i < t.length; i += 1) c < a[i].length && (w[d] = a[i][c], 
            d += 1);
            for (c = 0; c < o; c += 1) for (i = 0; i < t.length; i += 1) c < u[i].length && (w[d] = u[i][c], 
            d += 1);
            return w;
        }(o, n);
    };
    return g.addData = function(r) {
        var t = m(r);
        i.push(t), u = null;
    }, g.isDark = function(r, t) {
        if (r < 0 || a <= r || t < 0 || a <= t) throw new Error(r + "," + t);
        return o[r][t];
    }, g.getModuleCount = function() {
        return a;
    }, g.make = function() {
        c(!1, function() {
            for (var r = 0, t = 0, e = 0; e < 8; e += 1) {
                c(!0, e);
                var n = y.getLostPoint(g);
                (0 == e || r > n) && (r = n, t = e);
            }
            return t;
        }());
    }, g.createTableTag = function(r, t) {
        r = r || 2;
        var e = "";
        e += '<table style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", 
        e += " padding: 0px; margin: " + (t = void 0 === t ? 4 * r : t) + "px;", e += '">', 
        e += "<tbody>";
        for (var n = 0; n < g.getModuleCount(); n += 1) {
            e += "<tr>";
            for (var o = 0; o < g.getModuleCount(); o += 1) e += '<td style="', e += " border-width: 0px; border-style: none;", 
            e += " border-collapse: collapse;", e += " padding: 0px; margin: 0px;", e += " width: " + r + "px;", 
            e += " height: " + r + "px;", e += " background-color: ", e += g.isDark(n, o) ? "#000000" : "#ffffff", 
            e += ";", e += '"/>';
            e += "</tr>";
        }
        return e += "</tbody>", e += "</table>";
    }, g.createImgTag = function(r, t, e) {
        r = r || 2;
        var n = t = void 0 === t ? 4 * r : t, o = g.getModuleCount() * r + t;
        return M(e, e, function(t, e) {
            if (n <= t && t < o && n <= e && e < o) {
                var a = Math.floor((t - n) / r), u = Math.floor((e - n) / r);
                return g.isDark(u, a) ? 0 : 1;
            }
            return 1;
        });
    }, g;
};

r.stringToBytes = function(r) {
    for (var t = new Array(), e = 0; e < r.length; e += 1) {
        var n = r.charCodeAt(e);
        t.push(255 & n);
    }
    return t;
}, r.createStringToBytes = function(r, t) {
    var e = function() {
        for (var e = L(r), n = function() {
            var r = e.read();
            if (-1 == r) throw new Error();
            return r;
        }, o = 0, a = {}; ;) {
            var u = e.read();
            if (-1 == u) break;
            var i = n(), f = n() << 8 | n();
            a[String.fromCharCode(u << 8 | i)] = f, o += 1;
        }
        if (o != t) throw new Error(o + " != " + t);
        return a;
    }(), n = "?".charCodeAt(0);
    return function(r) {
        for (var t = new Array(), o = 0; o < r.length; o += 1) {
            var a = r.charCodeAt(o);
            if (a < 128) t.push(a); else {
                var u = e[r.charAt(o)];
                "number" == typeof u ? (255 & u) == u ? t.push(u) : (t.push(u >>> 8), t.push(255 & u)) : t.push(n);
            }
        }
        return t;
    };
};

var t, e, n, o = 1, a = 2, u = 4, i = 8, f = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
}, g = 0, c = 1, h = 2, l = 3, s = 4, v = 5, w = 6, d = 7, y = (t = [ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ], 
n = function(r) {
    for (var t = 0; 0 != r; ) t += 1, r >>>= 1;
    return t;
}, (e = {}).getBCHTypeInfo = function(r) {
    for (var t = r << 10; n(t) - n(1335) >= 0; ) t ^= 1335 << n(t) - n(1335);
    return 21522 ^ (r << 10 | t);
}, e.getBCHTypeNumber = function(r) {
    for (var t = r << 12; n(t) - n(7973) >= 0; ) t ^= 7973 << n(t) - n(7973);
    return r << 12 | t;
}, e.getPatternPosition = function(r) {
    return t[r - 1];
}, e.getMaskFunction = function(r) {
    switch (r) {
      case g:
        return function(r, t) {
            return (r + t) % 2 == 0;
        };

      case c:
        return function(r, t) {
            return r % 2 == 0;
        };

      case h:
        return function(r, t) {
            return t % 3 == 0;
        };

      case l:
        return function(r, t) {
            return (r + t) % 3 == 0;
        };

      case s:
        return function(r, t) {
            return (Math.floor(r / 2) + Math.floor(t / 3)) % 2 == 0;
        };

      case v:
        return function(r, t) {
            return r * t % 2 + r * t % 3 == 0;
        };

      case w:
        return function(r, t) {
            return (r * t % 2 + r * t % 3) % 2 == 0;
        };

      case d:
        return function(r, t) {
            return (r * t % 3 + (r + t) % 2) % 2 == 0;
        };

      default:
        throw new Error("bad maskPattern:" + r);
    }
}, e.getErrorCorrectPolynomial = function(r) {
    for (var t = B([ 1 ], 0), e = 0; e < r; e += 1) t = t.multiply(B([ 1, p.gexp(e) ], 0));
    return t;
}, e.getLengthInBits = function(r, t) {
    if (1 <= t && t < 10) switch (r) {
      case o:
        return 10;

      case a:
        return 9;

      case u:
      case i:
        return 8;

      default:
        throw new Error("mode:" + r);
    } else if (t < 27) switch (r) {
      case o:
        return 12;

      case a:
        return 11;

      case u:
        return 16;

      case i:
        return 10;

      default:
        throw new Error("mode:" + r);
    } else {
        if (!(t < 41)) throw new Error("type:" + t);
        switch (r) {
          case o:
            return 14;

          case a:
            return 13;

          case u:
            return 16;

          case i:
            return 12;

          default:
            throw new Error("mode:" + r);
        }
    }
}, e.getLostPoint = function(r) {
    for (var t = r.getModuleCount(), e = 0, n = 0; n < t; n += 1) for (var o = 0; o < t; o += 1) {
        for (var a = 0, u = r.isDark(n, o), i = -1; i <= 1; i += 1) if (!(n + i < 0 || t <= n + i)) for (var f = -1; f <= 1; f += 1) o + f < 0 || t <= o + f || 0 == i && 0 == f || u == r.isDark(n + i, o + f) && (a += 1);
        a > 5 && (e += 3 + a - 5);
    }
    for (n = 0; n < t - 1; n += 1) for (o = 0; o < t - 1; o += 1) {
        var g = 0;
        r.isDark(n, o) && (g += 1), r.isDark(n + 1, o) && (g += 1), r.isDark(n, o + 1) && (g += 1), 
        r.isDark(n + 1, o + 1) && (g += 1), 0 != g && 4 != g || (e += 3);
    }
    for (n = 0; n < t; n += 1) for (o = 0; o < t - 6; o += 1) r.isDark(n, o) && !r.isDark(n, o + 1) && r.isDark(n, o + 2) && r.isDark(n, o + 3) && r.isDark(n, o + 4) && !r.isDark(n, o + 5) && r.isDark(n, o + 6) && (e += 40);
    for (o = 0; o < t; o += 1) for (n = 0; n < t - 6; n += 1) r.isDark(n, o) && !r.isDark(n + 1, o) && r.isDark(n + 2, o) && r.isDark(n + 3, o) && r.isDark(n + 4, o) && !r.isDark(n + 5, o) && r.isDark(n + 6, o) && (e += 40);
    var c = 0;
    for (o = 0; o < t; o += 1) for (n = 0; n < t; n += 1) r.isDark(n, o) && (c += 1);
    return e += Math.abs(100 * c / t / t - 50) / 5 * 10;
}, e), p = function() {
    for (var r = new Array(256), t = new Array(256), e = 0; e < 8; e += 1) r[e] = 1 << e;
    for (e = 8; e < 256; e += 1) r[e] = r[e - 4] ^ r[e - 5] ^ r[e - 6] ^ r[e - 8];
    for (e = 0; e < 255; e += 1) t[r[e]] = e;
    var n = {
        glog: function(r) {
            if (r < 1) throw new Error("glog(" + r + ")");
            return t[r];
        },
        gexp: function(t) {
            for (;t < 0; ) t += 255;
            for (;t >= 256; ) t -= 255;
            return r[t];
        }
    };
    return n;
}();

function B(r, t) {
    if (void 0 === r.length) throw new Error(r.length + "/" + t);
    var e = function() {
        for (var e = 0; e < r.length && 0 == r[e]; ) e += 1;
        for (var n = new Array(r.length - e + t), o = 0; o < r.length - e; o += 1) n[o] = r[o + e];
        return n;
    }(), n = {
        getAt: function(r) {
            return e[r];
        },
        getLength: function() {
            return e.length;
        },
        multiply: function(r) {
            for (var t = new Array(n.getLength() + r.getLength() - 1), e = 0; e < n.getLength(); e += 1) for (var o = 0; o < r.getLength(); o += 1) t[e + o] ^= p.gexp(p.glog(n.getAt(e)) + p.glog(r.getAt(o)));
            return B(t, 0);
        },
        mod: function(r) {
            if (n.getLength() - r.getLength() < 0) return n;
            for (var t = p.glog(n.getAt(0)) - p.glog(r.getAt(0)), e = new Array(n.getLength()), o = 0; o < n.getLength(); o += 1) e[o] = n.getAt(o);
            for (o = 0; o < r.getLength(); o += 1) e[o] ^= p.gexp(p.glog(r.getAt(o)) + t);
            return B(e, 0).mod(r);
        }
    };
    return n;
}

var C = function() {
    var r = [ [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ], t = function(r, t) {
        var e = {};
        return e.totalCount = r, e.dataCount = t, e;
    }, e = {};
    return e.getRSBlocks = function(e, n) {
        var o = function(t, e) {
            switch (e) {
              case f.L:
                return r[4 * (t - 1) + 0];

              case f.M:
                return r[4 * (t - 1) + 1];

              case f.Q:
                return r[4 * (t - 1) + 2];

              case f.H:
                return r[4 * (t - 1) + 3];

              default:
                return;
            }
        }(e, n);
        if (void 0 === o) throw new Error("bad rs block [url=home.php?mod=space&uid=5302]@[/url] typeNumber:" + e + "/errorCorrectLevel:" + n);
        for (var a = o.length / 3, u = new Array(), i = 0; i < a; i += 1) for (var g = o[3 * i + 0], c = o[3 * i + 1], h = o[3 * i + 2], l = 0; l < g; l += 1) u.push(t(c, h));
        return u;
    }, e;
}(), A = function() {
    var r = new Array(), t = 0, e = {
        getBuffer: function() {
            return r;
        },
        getAt: function(t) {
            var e = Math.floor(t / 8);
            return 1 == (r[e] >>> 7 - t % 8 & 1);
        },
        put: function(r, t) {
            for (var n = 0; n < t; n += 1) e.putBit(1 == (r >>> t - n - 1 & 1));
        },
        getLengthInBits: function() {
            return t;
        },
        putBit: function(e) {
            var n = Math.floor(t / 8);
            r.length <= n && r.push(0), e && (r[n] |= 128 >>> t % 8), t += 1;
        }
    };
    return e;
}, m = function(r) {
    for (var t = u, e = r, n = [], o = {}, a = 0, i = e.length; a < i; a++) {
        var f = [], g = e.charCodeAt(a);
        g > 65536 ? (f[0] = 240 | (1835008 & g) >>> 18, f[1] = 128 | (258048 & g) >>> 12, 
        f[2] = 128 | (4032 & g) >>> 6, f[3] = 128 | 63 & g) : g > 2048 ? (f[0] = 224 | (61440 & g) >>> 12, 
        f[1] = 128 | (4032 & g) >>> 6, f[2] = 128 | 63 & g) : g > 128 ? (f[0] = 192 | (1984 & g) >>> 6, 
        f[1] = 128 | 63 & g) : f[0] = g, n.push(f);
    }
    (n = Array.prototype.concat.apply([], n)).length != e.length && (n.unshift(191), 
    n.unshift(187), n.unshift(239));
    var c = n;
    return o.getMode = function() {
        return t;
    }, o.getLength = function(r) {
        return c.length;
    }, o.write = function(r) {
        for (var t = 0; t < c.length; t += 1) r.put(c[t], 8);
    }, o;
}, k = function() {
    var r = new Array(), t = {
        writeByte: function(t) {
            r.push(255 & t);
        },
        writeShort: function(r) {
            t.writeByte(r), t.writeByte(r >>> 8);
        },
        writeBytes: function(r, e, n) {
            e = e || 0, n = n || r.length;
            for (var o = 0; o < n; o += 1) t.writeByte(r[o + e]);
        },
        writeString: function(r) {
            for (var e = 0; e < r.length; e += 1) t.writeByte(r.charCodeAt(e));
        },
        toByteArray: function() {
            return r;
        },
        toString: function() {
            var t = "";
            t += "[";
            for (var e = 0; e < r.length; e += 1) e > 0 && (t += ","), t += r[e];
            return t += "]";
        }
    };
    return t;
}, L = function(r) {
    var t = r, e = 0, n = 0, o = 0, a = {
        read: function() {
            for (;o < 8; ) {
                if (e >= t.length) {
                    if (0 == o) return -1;
                    throw new Error("unexpected end of file./" + o);
                }
                var r = t.charAt(e);
                if (e += 1, "=" == r) return o = 0, -1;
                r.match(/^\s$/) || (n = n << 6 | u(r.charCodeAt(0)), o += 6);
            }
            var a = n >>> o - 8 & 255;
            return o -= 8, a;
        }
    }, u = function(r) {
        if (65 <= r && r <= 90) return r - 65;
        if (97 <= r && r <= 122) return r - 97 + 26;
        if (48 <= r && r <= 57) return r - 48 + 52;
        if (43 == r) return 62;
        if (47 == r) return 63;
        throw new Error("c:" + r);
    };
    return a;
}, D = function(r, t) {
    var e = r, n = t, o = new Array(r * t), a = {
        setPixel: function(r, t, n) {
            o[t * e + r] = n;
        },
        write: function(r) {
            r.writeString("GIF87a"), r.writeShort(e), r.writeShort(n), r.writeByte(128), r.writeByte(0), 
            r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(255), 
            r.writeByte(255), r.writeByte(255), r.writeString(","), r.writeShort(0), r.writeShort(0), 
            r.writeShort(e), r.writeShort(n), r.writeByte(0);
            var t = u(2);
            r.writeByte(2);
            for (var o = 0; t.length - o > 255; ) r.writeByte(255), r.writeBytes(t, o, 255), 
            o += 255;
            r.writeByte(t.length - o), r.writeBytes(t, o, t.length - o), r.writeByte(0), r.writeString(";");
        }
    }, u = function(r) {
        for (var t = 1 << r, e = 1 + (1 << r), n = r + 1, a = i(), u = 0; u < t; u += 1) a.add(String.fromCharCode(u));
        a.add(String.fromCharCode(t)), a.add(String.fromCharCode(e));
        var f = k(), g = function(r) {
            var t = r, e = 0, n = 0, o = {
                write: function(r, o) {
                    if (r >>> o != 0) throw new Error("length over");
                    for (;e + o >= 8; ) t.writeByte(255 & (r << e | n)), o -= 8 - e, r >>>= 8 - e, n = 0, 
                    e = 0;
                    n |= r << e, e += o;
                },
                flush: function() {
                    e > 0 && t.writeByte(n);
                }
            };
            return o;
        }(f);
        g.write(t, n);
        var c = 0, h = String.fromCharCode(o[c]);
        for (c += 1; c < o.length; ) {
            var l = String.fromCharCode(o[c]);
            c += 1, a.contains(h + l) ? h += l : (g.write(a.indexOf(h), n), a.size() < 4095 && (a.size() == 1 << n && (n += 1), 
            a.add(h + l)), h = l);
        }
        return g.write(a.indexOf(h), n), g.write(e, n), g.flush(), f.toByteArray();
    }, i = function() {
        var r = {}, t = 0, e = {
            add: function(n) {
                if (e.contains(n)) throw new Error("dup key:" + n);
                r[n] = t, t += 1;
            },
            size: function() {
                return t;
            },
            indexOf: function(t) {
                return r[t];
            },
            contains: function(t) {
                return void 0 !== r[t];
            }
        };
        return e;
    };
    return a;
}, M = function(r, t, e, n) {
    for (var o = D(r, t), a = 0; a < t; a += 1) for (var u = 0; u < r; u += 1) o.setPixel(u, a, e(u, a));
    var i = k();
    o.write(i);
    for (var f = function() {
        var r = 0, t = 0, e = 0, n = "", o = {}, a = function(r) {
            n += String.fromCharCode(u(63 & r));
        }, u = function(r) {
            if (r < 0) ; else {
                if (r < 26) return 65 + r;
                if (r < 52) return r - 26 + 97;
                if (r < 62) return r - 52 + 48;
                if (62 == r) return 43;
                if (63 == r) return 47;
            }
            throw new Error("n:" + r);
        };
        return o.writeByte = function(n) {
            for (r = r << 8 | 255 & n, t += 8, e += 1; t >= 6; ) a(r >>> t - 6), t -= 6;
        }, o.flush = function() {
            if (t > 0 && (a(r << 6 - t), r = 0, t = 0), e % 3 != 0) for (var o = 3 - e % 3, u = 0; u < o; u += 1) n += "=";
        }, o.toString = function() {
            return n;
        }, o;
    }(), g = i.toByteArray(), c = 0; c < g.length; c += 1) f.writeByte(g[c]);
    f.flush();
    var h = "";
    return h += "data:image/gif;base64,", h += f;
};

module.exports = {
    createQrCodeImg: function(t, e) {
        var n, o = (e = e || {}).typeNumber || 4, a = e.errorCorrectLevel || "M", u = e.size || 500;
        try {
            (n = r(o, a || "M")).addData(t), n.make();
        } catch (r) {
            if (o >= 40) throw new Error("Text too long to encode");
            return gen(t, {
                size: u,
                errorCorrectLevel: a,
                typeNumber: o + 1
            });
        }
        var i = parseInt(u / n.getModuleCount()), f = parseInt((u - n.getModuleCount() * i) / 2);
        return n.createImgTag(i, f, u);
    },
    base64DecodeInputStream: L
};