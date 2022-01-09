var t, e = require("@babel/runtime/helpers/typeof.js");

t = function(t) {
    function e(t) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t);
    }
    function i(t, e) {
        return t & e;
    }
    function r(t, e) {
        return t | e;
    }
    function n(t, e) {
        return t ^ e;
    }
    function s(t, e) {
        return t & ~e;
    }
    function o(t) {
        if (0 == t) return -1;
        var e = 0;
        return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 
        0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, 
        e;
    }
    function h(t) {
        for (var e = 0; 0 != t; ) t &= t - 1, ++e;
        return e;
    }
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function u(t) {
        var e, i, r = "";
        for (e = 0; e + 3 <= t.length; e += 3) i = parseInt(t.substring(e, e + 3), 16), 
        r += a.charAt(i >> 6) + a.charAt(63 & i);
        for (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16), r += a.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16), 
        r += a.charAt(i >> 2) + a.charAt((3 & i) << 4)); (3 & r.length) > 0; ) r += "=";
        return r;
    }
    function c(t) {
        var i, r = "", n = 0, s = 0;
        for (i = 0; i < t.length && "=" != t.charAt(i); ++i) {
            var o = a.indexOf(t.charAt(i));
            o < 0 || (0 == n ? (r += e(o >> 2), s = 3 & o, n = 1) : 1 == n ? (r += e(s << 2 | o >> 4), 
            s = 15 & o, n = 2) : 2 == n ? (r += e(s), r += e(o >> 2), s = 3 & o, n = 3) : (r += e(s << 2 | o >> 4), 
            r += e(15 & o), n = 0));
        }
        return 1 == n && (r += e(s << 2)), r
        /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */;
    }
    var f, l, p = function(t, e) {
        return (p = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, g = function(t) {
        var e;
        if (void 0 === f) {
            var i = "0123456789ABCDEF";
            for (f = {}, e = 0; e < 16; ++e) f[i.charAt(e)] = e;
            for (i = i.toLowerCase(), e = 10; e < 16; ++e) f[i.charAt(e)] = e;
            for (e = 0; e < " \f\n\r\t \u2028\u2029".length; ++e) f[" \f\n\r\t \u2028\u2029".charAt(e)] = -1;
        }
        var r = [], n = 0, s = 0;
        for (e = 0; e < t.length; ++e) {
            var o = t.charAt(e);
            if ("=" == o) break;
            if (-1 != (o = f[o])) {
                if (void 0 === o) throw new Error("Illegal character at offset " + e);
                n |= o, ++s >= 2 ? (r[r.length] = n, n = 0, s = 0) : n <<= 4;
            }
        }
        if (s) throw new Error("Hex encoding incomplete: 4 bits missing");
        return r;
    }, d = {
        decode: function(t) {
            var e;
            if (void 0 === l) {
                for (l = Object.create(null), e = 0; e < 64; ++e) l["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                for (e = 0; e < "= \f\n\r\t \u2028\u2029".length; ++e) l["= \f\n\r\t \u2028\u2029".charAt(e)] = -1;
            }
            var i = [], r = 0, n = 0;
            for (e = 0; e < t.length; ++e) {
                var s = t.charAt(e);
                if ("=" == s) break;
                if (-1 != (s = l[s])) {
                    if (void 0 === s) throw new Error("Illegal character at offset " + e);
                    r |= s, ++n >= 4 ? (i[i.length] = r >> 16, i[i.length] = r >> 8 & 255, i[i.length] = 255 & r, 
                    r = 0, n = 0) : r <<= 6;
                }
            }
            switch (n) {
              case 1:
                throw new Error("Base64 encoding incomplete: at least 2 bits missing");

              case 2:
                i[i.length] = r >> 10;
                break;

              case 3:
                i[i.length] = r >> 16, i[i.length] = r >> 8 & 255;
            }
            return i;
        },
        re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
        unarmor: function(t) {
            var e = d.re.exec(t);
            if (e) if (e[1]) t = e[1]; else {
                if (!e[2]) throw new Error("RegExp out of sync");
                t = e[2];
            }
            return d.decode(t);
        }
    }, m = 1e13, v = function() {
        function t(t) {
            this.buf = [ +t || 0 ];
        }
        return t.prototype.mulAdd = function(t, e) {
            var i, r, n = this.buf, s = n.length;
            for (i = 0; i < s; ++i) (r = n[i] * t + e) < m ? e = 0 : r -= (e = 0 | r / m) * m, 
            n[i] = r;
            e > 0 && (n[i] = e);
        }, t.prototype.sub = function(t) {
            var e, i, r = this.buf, n = r.length;
            for (e = 0; e < n; ++e) (i = r[e] - t) < 0 ? (i += m, t = 1) : t = 0, r[e] = i;
            for (;0 === r[r.length - 1]; ) r.pop();
        }, t.prototype.toString = function(t) {
            if (10 != (t || 10)) throw new Error("only base 10 is supported");
            for (var e = this.buf, i = e[e.length - 1].toString(), r = e.length - 2; r >= 0; --r) i += (m + e[r]).toString().substring(1);
            return i;
        }, t.prototype.valueOf = function() {
            for (var t = this.buf, e = 0, i = t.length - 1; i >= 0; --i) e = e * m + t[i];
            return e;
        }, t.prototype.simplify = function() {
            var t = this.buf;
            return 1 == t.length ? t[0] : this;
        }, t;
    }(), y = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, b = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
    function T(t, e) {
        return t.length > e && (t = t.substring(0, e) + "…"), t;
    }
    var S = function() {
        function t(e, i) {
            this.hexDigits = "0123456789ABCDEF", e instanceof t ? (this.enc = e.enc, this.pos = e.pos) : (this.enc = e, 
            this.pos = i);
        }
        return t.prototype.get = function(t) {
            if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
            return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t];
        }, t.prototype.hexByte = function(t) {
            return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t);
        }, t.prototype.hexDump = function(t, e, i) {
            for (var r = "", n = t; n < e; ++n) if (r += this.hexByte(this.get(n)), !0 !== i) switch (15 & n) {
              case 7:
                r += "  ";
                break;

              case 15:
                r += "\n";
                break;

              default:
                r += " ";
            }
            return r;
        }, t.prototype.isASCII = function(t, e) {
            for (var i = t; i < e; ++i) {
                var r = this.get(i);
                if (r < 32 || r > 176) return !1;
            }
            return !0;
        }, t.prototype.parseStringISO = function(t, e) {
            for (var i = "", r = t; r < e; ++r) i += String.fromCharCode(this.get(r));
            return i;
        }, t.prototype.parseStringUTF = function(t, e) {
            for (var i = "", r = t; r < e; ) {
                var n = this.get(r++);
                i += n < 128 ? String.fromCharCode(n) : n > 191 && n < 224 ? String.fromCharCode((31 & n) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & n) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++));
            }
            return i;
        }, t.prototype.parseStringBMP = function(t, e) {
            for (var i, r, n = "", s = t; s < e; ) i = this.get(s++), r = this.get(s++), n += String.fromCharCode(i << 8 | r);
            return n;
        }, t.prototype.parseTime = function(t, e, i) {
            var r = this.parseStringISO(t, e), n = (i ? y : b).exec(r);
            return n ? (i && (n[1] = +n[1], n[1] += +n[1] < 70 ? 2e3 : 1900), r = n[1] + "-" + n[2] + "-" + n[3] + " " + n[4], 
            n[5] && (r += ":" + n[5], n[6] && (r += ":" + n[6], n[7] && (r += "." + n[7]))), 
            n[8] && (r += " UTC", "Z" != n[8] && (r += n[8], n[9] && (r += ":" + n[9]))), r) : "Unrecognized time: " + r;
        }, t.prototype.parseInteger = function(t, e) {
            for (var i, r = this.get(t), n = r > 127, s = n ? 255 : 0, o = ""; r == s && ++t < e; ) r = this.get(t);
            if (0 == (i = e - t)) return n ? -1 : 0;
            if (i > 4) {
                for (o = r, i <<= 3; 0 == (128 & (+o ^ s)); ) o = +o << 1, --i;
                o = "(" + i + " bit)\n";
            }
            n && (r -= 256);
            for (var h = new v(r), a = t + 1; a < e; ++a) h.mulAdd(256, this.get(a));
            return o + h.toString();
        }, t.prototype.parseBitString = function(t, e, i) {
            for (var r = this.get(t), n = "(" + ((e - t - 1 << 3) - r) + " bit)\n", s = "", o = t + 1; o < e; ++o) {
                for (var h = this.get(o), a = o == e - 1 ? r : 0, u = 7; u >= a; --u) s += h >> u & 1 ? "1" : "0";
                if (s.length > i) return n + T(s, i);
            }
            return n + s;
        }, t.prototype.parseOctetString = function(t, e, i) {
            if (this.isASCII(t, e)) return T(this.parseStringISO(t, e), i);
            var r = e - t, n = "(" + r + " byte)\n";
            r > (i /= 2) && (e = t + i);
            for (var s = t; s < e; ++s) n += this.hexByte(this.get(s));
            return r > i && (n += "…"), n;
        }, t.prototype.parseOID = function(t, e, i) {
            for (var r = "", n = new v(), s = 0, o = t; o < e; ++o) {
                var h = this.get(o);
                if (n.mulAdd(128, 127 & h), s += 7, !(128 & h)) {
                    if ("" === r) if ((n = n.simplify()) instanceof v) n.sub(80), r = "2." + n.toString(); else {
                        var a = n < 80 ? n < 40 ? 0 : 1 : 2;
                        r = a + "." + (n - 40 * a);
                    } else r += "." + n.toString();
                    if (r.length > i) return T(r, i);
                    n = new v(), s = 0;
                }
            }
            return s > 0 && (r += ".incomplete"), r;
        }, t;
    }(), E = function() {
        function t(t, e, i, r, n) {
            if (!(r instanceof D)) throw new Error("Invalid tag value.");
            this.stream = t, this.header = e, this.length = i, this.tag = r, this.sub = n;
        }
        return t.prototype.typeName = function() {
            switch (this.tag.tagClass) {
              case 0:
                switch (this.tag.tagNumber) {
                  case 0:
                    return "EOC";

                  case 1:
                    return "BOOLEAN";

                  case 2:
                    return "INTEGER";

                  case 3:
                    return "BIT_STRING";

                  case 4:
                    return "OCTET_STRING";

                  case 5:
                    return "NULL";

                  case 6:
                    return "OBJECT_IDENTIFIER";

                  case 7:
                    return "ObjectDescriptor";

                  case 8:
                    return "EXTERNAL";

                  case 9:
                    return "REAL";

                  case 10:
                    return "ENUMERATED";

                  case 11:
                    return "EMBEDDED_PDV";

                  case 12:
                    return "UTF8String";

                  case 16:
                    return "SEQUENCE";

                  case 17:
                    return "SET";

                  case 18:
                    return "NumericString";

                  case 19:
                    return "PrintableString";

                  case 20:
                    return "TeletexString";

                  case 21:
                    return "VideotexString";

                  case 22:
                    return "IA5String";

                  case 23:
                    return "UTCTime";

                  case 24:
                    return "GeneralizedTime";

                  case 25:
                    return "GraphicString";

                  case 26:
                    return "VisibleString";

                  case 27:
                    return "GeneralString";

                  case 28:
                    return "UniversalString";

                  case 30:
                    return "BMPString";
                }
                return "Universal_" + this.tag.tagNumber.toString();

              case 1:
                return "Application_" + this.tag.tagNumber.toString();

              case 2:
                return "[" + this.tag.tagNumber.toString() + "]";

              case 3:
                return "Private_" + this.tag.tagNumber.toString();
            }
        }, t.prototype.content = function(t) {
            if (void 0 === this.tag) return null;
            void 0 === t && (t = 1 / 0);
            var e = this.posContent(), i = Math.abs(this.length);
            if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
            switch (this.tag.tagNumber) {
              case 1:
                return 0 === this.stream.get(e) ? "false" : "true";

              case 2:
                return this.stream.parseInteger(e, e + i);

              case 3:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + i, t);

              case 4:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);

              case 6:
                return this.stream.parseOID(e, e + i, t);

              case 16:
              case 17:
                return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";

              case 12:
                return T(this.stream.parseStringUTF(e, e + i), t);

              case 18:
              case 19:
              case 20:
              case 21:
              case 22:
              case 26:
                return T(this.stream.parseStringISO(e, e + i), t);

              case 30:
                return T(this.stream.parseStringBMP(e, e + i), t);

              case 23:
              case 24:
                return this.stream.parseTime(e, e + i, 23 == this.tag.tagNumber);
            }
            return null;
        }, t.prototype.toString = function() {
            return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]";
        }, t.prototype.toPrettyString = function(t) {
            void 0 === t && (t = "");
            var e = t + this.typeName() + " @" + this.stream.pos;
            if (this.length >= 0 && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"), 
            e += "\n", null !== this.sub) {
                t += "  ";
                for (var i = 0, r = this.sub.length; i < r; ++i) e += this.sub[i].toPrettyString(t);
            }
            return e;
        }, t.prototype.posStart = function() {
            return this.stream.pos;
        }, t.prototype.posContent = function() {
            return this.stream.pos + this.header;
        }, t.prototype.posEnd = function() {
            return this.stream.pos + this.header + Math.abs(this.length);
        }, t.prototype.toHexString = function() {
            return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
        }, t.decodeLength = function(t) {
            var e = t.get(), i = 127 & e;
            if (i == e) return i;
            if (i > 6) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
            if (0 === i) return null;
            e = 0;
            for (var r = 0; r < i; ++r) e = 256 * e + t.get();
            return e;
        }, t.prototype.getHexStringValue = function() {
            var t = this.toHexString(), e = 2 * this.header, i = 2 * this.length;
            return t.substr(e, i);
        }, t.decode = function(e) {
            var i;
            i = e instanceof S ? e : new S(e, 0);
            var r = new S(i), n = new D(i), s = t.decodeLength(i), o = i.pos, h = o - r.pos, a = null, u = function() {
                var e = [];
                if (null !== s) {
                    for (var r = o + s; i.pos < r; ) e[e.length] = t.decode(i);
                    if (i.pos != r) throw new Error("Content size is not correct for container starting at offset " + o);
                } else try {
                    for (;;) {
                        var n = t.decode(i);
                        if (n.tag.isEOC()) break;
                        e[e.length] = n;
                    }
                    s = o - i.pos;
                } catch (t) {
                    throw new Error("Exception while decoding undefined length content: " + t);
                }
                return e;
            };
            if (n.tagConstructed) a = u(); else if (n.isUniversal() && (3 == n.tagNumber || 4 == n.tagNumber)) try {
                if (3 == n.tagNumber && 0 != i.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                a = u();
                for (var c = 0; c < a.length; ++c) if (a[c].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.");
            } catch (t) {
                a = null;
            }
            if (null === a) {
                if (null === s) throw new Error("We can't skip over an invalid tag with undefined length at offset " + o);
                i.pos = o + Math.abs(s);
            }
            return new t(r, h, s, n, a);
        }, t;
    }(), D = function() {
        function t(t) {
            var e = t.get();
            if (this.tagClass = e >> 6, this.tagConstructed = 0 != (32 & e), this.tagNumber = 31 & e, 
            31 == this.tagNumber) {
                var i = new v();
                do {
                    e = t.get(), i.mulAdd(128, 127 & e);
                } while (128 & e);
                this.tagNumber = i.simplify();
            }
        }
        return t.prototype.isUniversal = function() {
            return 0 === this.tagClass;
        }, t.prototype.isEOC = function() {
            return 0 === this.tagClass && 0 === this.tagNumber;
        }, t;
    }(), w = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 ], x = (1 << 26) / w[w.length - 1], B = function() {
        function t(t, e, i) {
            null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e));
        }
        return t.prototype.toString = function(t) {
            if (this.s < 0) return "-" + this.negate().toString(t);
            var i;
            if (16 == t) i = 4; else if (8 == t) i = 3; else if (2 == t) i = 1; else if (32 == t) i = 5; else {
                if (4 != t) return this.toRadix(t);
                i = 2;
            }
            var r, n = (1 << i) - 1, s = !1, o = "", h = this.t, a = this.DB - h * this.DB % i;
            if (h-- > 0) for (a < this.DB && (r = this[h] >> a) > 0 && (s = !0, o = e(r)); h >= 0; ) a < i ? (r = (this[h] & (1 << a) - 1) << i - a, 
            r |= this[--h] >> (a += this.DB - i)) : (r = this[h] >> (a -= i) & n, a <= 0 && (a += this.DB, 
            --h)), r > 0 && (s = !0), s && (o += e(r));
            return s ? o : "0";
        }, t.prototype.negate = function() {
            var e = I();
            return t.ZERO.subTo(this, e), e;
        }, t.prototype.abs = function() {
            return this.s < 0 ? this.negate() : this;
        }, t.prototype.compareTo = function(t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var i = this.t;
            if (0 != (e = i - t.t)) return this.s < 0 ? -e : e;
            for (;--i >= 0; ) if (0 != (e = this[i] - t[i])) return e;
            return 0;
        }, t.prototype.bitLength = function() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + L(this[this.t - 1] ^ this.s & this.DM);
        }, t.prototype.mod = function(e) {
            var i = I();
            return this.abs().divRemTo(e, null, i), this.s < 0 && i.compareTo(t.ZERO) > 0 && e.subTo(i, i), 
            i;
        }, t.prototype.modPowInt = function(t, e) {
            var i;
            return i = t < 256 || e.isEven() ? new A(e) : new O(e), this.exp(t, i);
        }, t.prototype.clone = function() {
            var t = I();
            return this.copyTo(t), t;
        }, t.prototype.intValue = function() {
            if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;
                if (0 == this.t) return -1;
            } else {
                if (1 == this.t) return this[0];
                if (0 == this.t) return 0;
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
        }, t.prototype.byteValue = function() {
            return 0 == this.t ? this.s : this[0] << 24 >> 24;
        }, t.prototype.shortValue = function() {
            return 0 == this.t ? this.s : this[0] << 16 >> 16;
        }, t.prototype.signum = function() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
        }, t.prototype.toByteArray = function() {
            var t = this.t, e = [];
            e[0] = this.s;
            var i, r = this.DB - t * this.DB % 8, n = 0;
            if (t-- > 0) for (r < this.DB && (i = this[t] >> r) != (this.s & this.DM) >> r && (e[n++] = i | this.s << this.DB - r); t >= 0; ) r < 8 ? (i = (this[t] & (1 << r) - 1) << 8 - r, 
            i |= this[--t] >> (r += this.DB - 8)) : (i = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, 
            --t)), 0 != (128 & i) && (i |= -256), 0 == n && (128 & this.s) != (128 & i) && ++n, 
            (n > 0 || i != this.s) && (e[n++] = i);
            return e;
        }, t.prototype.equals = function(t) {
            return 0 == this.compareTo(t);
        }, t.prototype.min = function(t) {
            return this.compareTo(t) < 0 ? this : t;
        }, t.prototype.max = function(t) {
            return this.compareTo(t) > 0 ? this : t;
        }, t.prototype.and = function(t) {
            var e = I();
            return this.bitwiseTo(t, i, e), e;
        }, t.prototype.or = function(t) {
            var e = I();
            return this.bitwiseTo(t, r, e), e;
        }, t.prototype.xor = function(t) {
            var e = I();
            return this.bitwiseTo(t, n, e), e;
        }, t.prototype.andNot = function(t) {
            var e = I();
            return this.bitwiseTo(t, s, e), e;
        }, t.prototype.not = function() {
            for (var t = I(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
            return t.t = this.t, t.s = ~this.s, t;
        }, t.prototype.shiftLeft = function(t) {
            var e = I();
            return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
        }, t.prototype.shiftRight = function(t) {
            var e = I();
            return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
        }, t.prototype.getLowestSetBit = function() {
            for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + o(this[t]);
            return this.s < 0 ? this.t * this.DB : -1;
        }, t.prototype.bitCount = function() {
            for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += h(this[i] ^ e);
            return t;
        }, t.prototype.testBit = function(t) {
            var e = Math.floor(t / this.DB);
            return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB);
        }, t.prototype.setBit = function(t) {
            return this.changeBit(t, r);
        }, t.prototype.clearBit = function(t) {
            return this.changeBit(t, s);
        }, t.prototype.flipBit = function(t) {
            return this.changeBit(t, n);
        }, t.prototype.add = function(t) {
            var e = I();
            return this.addTo(t, e), e;
        }, t.prototype.subtract = function(t) {
            var e = I();
            return this.subTo(t, e), e;
        }, t.prototype.multiply = function(t) {
            var e = I();
            return this.multiplyTo(t, e), e;
        }, t.prototype.divide = function(t) {
            var e = I();
            return this.divRemTo(t, e, null), e;
        }, t.prototype.remainder = function(t) {
            var e = I();
            return this.divRemTo(t, null, e), e;
        }, t.prototype.divideAndRemainder = function(t) {
            var e = I(), i = I();
            return this.divRemTo(t, e, i), [ e, i ];
        }, t.prototype.modPow = function(t, e) {
            var i, r, n = t.bitLength(), s = H(1);
            if (n <= 0) return s;
            i = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6, r = n < 8 ? new A(e) : e.isEven() ? new V(e) : new O(e);
            var o = [], h = 3, a = i - 1, u = (1 << i) - 1;
            if (o[1] = r.convert(this), i > 1) {
                var c = I();
                for (r.sqrTo(o[1], c); h <= u; ) o[h] = I(), r.mulTo(c, o[h - 2], o[h]), h += 2;
            }
            var f, l, p = t.t - 1, g = !0, d = I();
            for (n = L(t[p]) - 1; p >= 0; ) {
                for (n >= a ? f = t[p] >> n - a & u : (f = (t[p] & (1 << n + 1) - 1) << a - n, p > 0 && (f |= t[p - 1] >> this.DB + n - a)), 
                h = i; 0 == (1 & f); ) f >>= 1, --h;
                if ((n -= h) < 0 && (n += this.DB, --p), g) o[f].copyTo(s), g = !1; else {
                    for (;h > 1; ) r.sqrTo(s, d), r.sqrTo(d, s), h -= 2;
                    h > 0 ? r.sqrTo(s, d) : (l = s, s = d, d = l), r.mulTo(d, o[f], s);
                }
                for (;p >= 0 && 0 == (t[p] & 1 << n); ) r.sqrTo(s, d), l = s, s = d, d = l, --n < 0 && (n = this.DB - 1, 
                --p);
            }
            return r.revert(s);
        }, t.prototype.modInverse = function(e) {
            var i = e.isEven();
            if (this.isEven() && i || 0 == e.signum()) return t.ZERO;
            for (var r = e.clone(), n = this.clone(), s = H(1), o = H(0), h = H(0), a = H(1); 0 != r.signum(); ) {
                for (;r.isEven(); ) r.rShiftTo(1, r), i ? (s.isEven() && o.isEven() || (s.addTo(this, s), 
                o.subTo(e, o)), s.rShiftTo(1, s)) : o.isEven() || o.subTo(e, o), o.rShiftTo(1, o);
                for (;n.isEven(); ) n.rShiftTo(1, n), i ? (h.isEven() && a.isEven() || (h.addTo(this, h), 
                a.subTo(e, a)), h.rShiftTo(1, h)) : a.isEven() || a.subTo(e, a), a.rShiftTo(1, a);
                r.compareTo(n) >= 0 ? (r.subTo(n, r), i && s.subTo(h, s), o.subTo(a, o)) : (n.subTo(r, n), 
                i && h.subTo(s, h), a.subTo(o, a));
            }
            return 0 != n.compareTo(t.ONE) ? t.ZERO : a.compareTo(e) >= 0 ? a.subtract(e) : a.signum() < 0 ? (a.addTo(e, a), 
            a.signum() < 0 ? a.add(e) : a) : a;
        }, t.prototype.pow = function(t) {
            return this.exp(t, new R());
        }, t.prototype.gcd = function(t) {
            var e = this.s < 0 ? this.negate() : this.clone(), i = t.s < 0 ? t.negate() : t.clone();
            if (e.compareTo(i) < 0) {
                var r = e;
                e = i, i = r;
            }
            var n = e.getLowestSetBit(), s = i.getLowestSetBit();
            if (s < 0) return e;
            for (n < s && (s = n), s > 0 && (e.rShiftTo(s, e), i.rShiftTo(s, i)); e.signum() > 0; ) (n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e), 
            (n = i.getLowestSetBit()) > 0 && i.rShiftTo(n, i), e.compareTo(i) >= 0 ? (e.subTo(i, e), 
            e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
            return s > 0 && i.lShiftTo(s, i), i;
        }, t.prototype.isProbablePrime = function(t) {
            var e, i = this.abs();
            if (1 == i.t && i[0] <= w[w.length - 1]) {
                for (e = 0; e < w.length; ++e) if (i[0] == w[e]) return !0;
                return !1;
            }
            if (i.isEven()) return !1;
            for (e = 1; e < w.length; ) {
                for (var r = w[e], n = e + 1; n < w.length && r < x; ) r *= w[n++];
                for (r = i.modInt(r); e < n; ) if (r % w[e++] == 0) return !1;
            }
            return i.millerRabin(t);
        }, t.prototype.copyTo = function(t) {
            for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
            t.t = this.t, t.s = this.s;
        }, t.prototype.fromInt = function(t) {
            this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
        }, t.prototype.fromString = function(e, i) {
            var r;
            if (16 == i) r = 4; else if (8 == i) r = 3; else if (256 == i) r = 8; else if (2 == i) r = 1; else if (32 == i) r = 5; else {
                if (4 != i) return void this.fromRadix(e, i);
                r = 2;
            }
            this.t = 0, this.s = 0;
            for (var n = e.length, s = !1, o = 0; --n >= 0; ) {
                var h = 8 == r ? 255 & +e[n] : j(e, n);
                h < 0 ? "-" == e.charAt(n) && (s = !0) : (s = !1, 0 == o ? this[this.t++] = h : o + r > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - o) - 1) << o, 
                this[this.t++] = h >> this.DB - o) : this[this.t - 1] |= h << o, (o += r) >= this.DB && (o -= this.DB));
            }
            8 == r && 0 != (128 & +e[0]) && (this.s = -1, o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)), 
            this.clamp(), s && t.ZERO.subTo(this, this);
        }, t.prototype.clamp = function() {
            for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; ) --this.t;
        }, t.prototype.dlShiftTo = function(t, e) {
            var i;
            for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i];
            for (i = t - 1; i >= 0; --i) e[i] = 0;
            e.t = this.t + t, e.s = this.s;
        }, t.prototype.drShiftTo = function(t, e) {
            for (var i = t; i < this.t; ++i) e[i - t] = this[i];
            e.t = Math.max(this.t - t, 0), e.s = this.s;
        }, t.prototype.lShiftTo = function(t, e) {
            for (var i = t % this.DB, r = this.DB - i, n = (1 << r) - 1, s = Math.floor(t / this.DB), o = this.s << i & this.DM, h = this.t - 1; h >= 0; --h) e[h + s + 1] = this[h] >> r | o, 
            o = (this[h] & n) << i;
            for (h = s - 1; h >= 0; --h) e[h] = 0;
            e[s] = o, e.t = this.t + s + 1, e.s = this.s, e.clamp();
        }, t.prototype.rShiftTo = function(t, e) {
            e.s = this.s;
            var i = Math.floor(t / this.DB);
            if (i >= this.t) e.t = 0; else {
                var r = t % this.DB, n = this.DB - r, s = (1 << r) - 1;
                e[0] = this[i] >> r;
                for (var o = i + 1; o < this.t; ++o) e[o - i - 1] |= (this[o] & s) << n, e[o - i] = this[o] >> r;
                r > 0 && (e[this.t - i - 1] |= (this.s & s) << n), e.t = this.t - i, e.clamp();
            }
        }, t.prototype.subTo = function(t, e) {
            for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n; ) r += this[i] - t[i], 
            e[i++] = r & this.DM, r >>= this.DB;
            if (t.t < this.t) {
                for (r -= t.s; i < this.t; ) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                r += this.s;
            } else {
                for (r += this.s; i < t.t; ) r -= t[i], e[i++] = r & this.DM, r >>= this.DB;
                r -= t.s;
            }
            e.s = r < 0 ? -1 : 0, r < -1 ? e[i++] = this.DV + r : r > 0 && (e[i++] = r), e.t = i, 
            e.clamp();
        }, t.prototype.multiplyTo = function(e, i) {
            var r = this.abs(), n = e.abs(), s = r.t;
            for (i.t = s + n.t; --s >= 0; ) i[s] = 0;
            for (s = 0; s < n.t; ++s) i[s + r.t] = r.am(0, n[s], i, s, 0, r.t);
            i.s = 0, i.clamp(), this.s != e.s && t.ZERO.subTo(i, i);
        }, t.prototype.squareTo = function(t) {
            for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0; ) t[i] = 0;
            for (i = 0; i < e.t - 1; ++i) {
                var r = e.am(i, e[i], t, 2 * i, 0, 1);
                (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, 
                t[i + e.t + 1] = 1);
            }
            t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp();
        }, t.prototype.divRemTo = function(e, i, r) {
            var n = e.abs();
            if (!(n.t <= 0)) {
                var s = this.abs();
                if (s.t < n.t) return null != i && i.fromInt(0), void (null != r && this.copyTo(r));
                null == r && (r = I());
                var o = I(), h = this.s, a = e.s, u = this.DB - L(n[n.t - 1]);
                u > 0 ? (n.lShiftTo(u, o), s.lShiftTo(u, r)) : (n.copyTo(o), s.copyTo(r));
                var c = o.t, f = o[c - 1];
                if (0 != f) {
                    var l = f * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0), p = this.FV / l, g = (1 << this.F1) / l, d = 1 << this.F2, m = r.t, v = m - c, y = null == i ? I() : i;
                    for (o.dlShiftTo(v, y), r.compareTo(y) >= 0 && (r[r.t++] = 1, r.subTo(y, r)), t.ONE.dlShiftTo(c, y), 
                    y.subTo(o, o); o.t < c; ) o[o.t++] = 0;
                    for (;--v >= 0; ) {
                        var b = r[--m] == f ? this.DM : Math.floor(r[m] * p + (r[m - 1] + d) * g);
                        if ((r[m] += o.am(0, b, r, v, 0, c)) < b) for (o.dlShiftTo(v, y), r.subTo(y, r); r[m] < --b; ) r.subTo(y, r);
                    }
                    null != i && (r.drShiftTo(c, i), h != a && t.ZERO.subTo(i, i)), r.t = c, r.clamp(), 
                    u > 0 && r.rShiftTo(u, r), h < 0 && t.ZERO.subTo(r, r);
                }
            }
        }, t.prototype.invDigit = function() {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e;
        }, t.prototype.isEven = function() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s);
        }, t.prototype.exp = function(e, i) {
            if (e > 4294967295 || e < 1) return t.ONE;
            var r = I(), n = I(), s = i.convert(this), o = L(e) - 1;
            for (s.copyTo(r); --o >= 0; ) if (i.sqrTo(r, n), (e & 1 << o) > 0) i.mulTo(n, s, r); else {
                var h = r;
                r = n, n = h;
            }
            return i.revert(r);
        }, t.prototype.chunkSize = function(t) {
            return Math.floor(Math.LN2 * this.DB / Math.log(t));
        }, t.prototype.toRadix = function(t) {
            if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
            var e = this.chunkSize(t), i = Math.pow(t, e), r = H(i), n = I(), s = I(), o = "";
            for (this.divRemTo(r, n, s); n.signum() > 0; ) o = (i + s.intValue()).toString(t).substr(1) + o, 
            n.divRemTo(r, n, s);
            return s.intValue().toString(t) + o;
        }, t.prototype.fromRadix = function(e, i) {
            this.fromInt(0), null == i && (i = 10);
            for (var r = this.chunkSize(i), n = Math.pow(i, r), s = !1, o = 0, h = 0, a = 0; a < e.length; ++a) {
                var u = j(e, a);
                u < 0 ? "-" == e.charAt(a) && 0 == this.signum() && (s = !0) : (h = i * h + u, ++o >= r && (this.dMultiply(n), 
                this.dAddOffset(h, 0), o = 0, h = 0));
            }
            o > 0 && (this.dMultiply(Math.pow(i, o)), this.dAddOffset(h, 0)), s && t.ZERO.subTo(this, this);
        }, t.prototype.fromNumber = function(e, i, n) {
            if ("number" == typeof i) if (e < 2) this.fromInt(1); else for (this.fromNumber(e, n), 
            this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), r, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i); ) this.dAddOffset(2, 0), 
            this.bitLength() > e && this.subTo(t.ONE.shiftLeft(e - 1), this); else {
                var s = [], o = 7 & e;
                s.length = 1 + (e >> 3), i.nextBytes(s), o > 0 ? s[0] &= (1 << o) - 1 : s[0] = 0, 
                this.fromString(s, 256);
            }
        }, t.prototype.bitwiseTo = function(t, e, i) {
            var r, n, s = Math.min(t.t, this.t);
            for (r = 0; r < s; ++r) i[r] = e(this[r], t[r]);
            if (t.t < this.t) {
                for (n = t.s & this.DM, r = s; r < this.t; ++r) i[r] = e(this[r], n);
                i.t = this.t;
            } else {
                for (n = this.s & this.DM, r = s; r < t.t; ++r) i[r] = e(n, t[r]);
                i.t = t.t;
            }
            i.s = e(this.s, t.s), i.clamp();
        }, t.prototype.changeBit = function(e, i) {
            var r = t.ONE.shiftLeft(e);
            return this.bitwiseTo(r, i, r), r;
        }, t.prototype.addTo = function(t, e) {
            for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n; ) r += this[i] + t[i], 
            e[i++] = r & this.DM, r >>= this.DB;
            if (t.t < this.t) {
                for (r += t.s; i < this.t; ) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                r += this.s;
            } else {
                for (r += this.s; i < t.t; ) r += t[i], e[i++] = r & this.DM, r >>= this.DB;
                r += t.s;
            }
            e.s = r < 0 ? -1 : 0, r > 0 ? e[i++] = r : r < -1 && (e[i++] = this.DV + r), e.t = i, 
            e.clamp();
        }, t.prototype.dMultiply = function(t) {
            this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
        }, t.prototype.dAddOffset = function(t, e) {
            if (0 != t) {
                for (;this.t <= e; ) this[this.t++] = 0;
                for (this[e] += t; this[e] >= this.DV; ) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), 
                ++this[e];
            }
        }, t.prototype.multiplyLowerTo = function(t, e, i) {
            var r = Math.min(this.t + t.t, e);
            for (i.s = 0, i.t = r; r > 0; ) i[--r] = 0;
            for (var n = i.t - this.t; r < n; ++r) i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
            for (n = Math.min(t.t, e); r < n; ++r) this.am(0, t[r], i, r, 0, e - r);
            i.clamp();
        }, t.prototype.multiplyUpperTo = function(t, e, i) {
            --e;
            var r = i.t = this.t + t.t - e;
            for (i.s = 0; --r >= 0; ) i[r] = 0;
            for (r = Math.max(e - this.t, 0); r < t.t; ++r) i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
            i.clamp(), i.drShiftTo(1, i);
        }, t.prototype.modInt = function(t) {
            if (t <= 0) return 0;
            var e = this.DV % t, i = this.s < 0 ? t - 1 : 0;
            if (this.t > 0) if (0 == e) i = this[0] % t; else for (var r = this.t - 1; r >= 0; --r) i = (e * i + this[r]) % t;
            return i;
        }, t.prototype.millerRabin = function(e) {
            var i = this.subtract(t.ONE), r = i.getLowestSetBit();
            if (r <= 0) return !1;
            var n = i.shiftRight(r);
            (e = e + 1 >> 1) > w.length && (e = w.length);
            for (var s = I(), o = 0; o < e; ++o) {
                s.fromInt(w[Math.floor(Math.random() * w.length)]);
                var h = s.modPow(n, this);
                if (0 != h.compareTo(t.ONE) && 0 != h.compareTo(i)) {
                    for (var a = 1; a++ < r && 0 != h.compareTo(i); ) if (0 == (h = h.modPowInt(2, this)).compareTo(t.ONE)) return !1;
                    if (0 != h.compareTo(i)) return !1;
                }
            }
            return !0;
        }, t.prototype.square = function() {
            var t = I();
            return this.squareTo(t), t;
        }, t.prototype.gcda = function(t, e) {
            var i = this.s < 0 ? this.negate() : this.clone(), r = t.s < 0 ? t.negate() : t.clone();
            if (i.compareTo(r) < 0) {
                var n = i;
                i = r, r = n;
            }
            var s = i.getLowestSetBit(), o = r.getLowestSetBit();
            o < 0 ? e(i) : (s < o && (o = s), o > 0 && (i.rShiftTo(o, i), r.rShiftTo(o, r)), 
            setTimeout(function t() {
                (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i), (s = r.getLowestSetBit()) > 0 && r.rShiftTo(s, r), 
                i.compareTo(r) >= 0 ? (i.subTo(r, i), i.rShiftTo(1, i)) : (r.subTo(i, r), r.rShiftTo(1, r)), 
                i.signum() > 0 ? setTimeout(t, 0) : (o > 0 && r.lShiftTo(o, r), setTimeout(function() {
                    e(r);
                }, 0));
            }, 10));
        }, t.prototype.fromNumberAsync = function(e, i, n, s) {
            if ("number" == typeof i) if (e < 2) this.fromInt(1); else {
                this.fromNumber(e, n), this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), r, this), 
                this.isEven() && this.dAddOffset(1, 0);
                var o = this;
                setTimeout(function r() {
                    o.dAddOffset(2, 0), o.bitLength() > e && o.subTo(t.ONE.shiftLeft(e - 1), o), o.isProbablePrime(i) ? setTimeout(function() {
                        s();
                    }, 0) : setTimeout(r, 0);
                }, 0);
            } else {
                var h = [], a = 7 & e;
                h.length = 1 + (e >> 3), i.nextBytes(h), a > 0 ? h[0] &= (1 << a) - 1 : h[0] = 0, 
                this.fromString(h, 256);
            }
        }, t;
    }(), R = function() {
        function t() {}
        return t.prototype.convert = function(t) {
            return t;
        }, t.prototype.revert = function(t) {
            return t;
        }, t.prototype.mulTo = function(t, e, i) {
            t.multiplyTo(e, i);
        }, t.prototype.sqrTo = function(t, e) {
            t.squareTo(e);
        }, t;
    }(), A = function() {
        function t(t) {
            this.m = t;
        }
        return t.prototype.convert = function(t) {
            return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
        }, t.prototype.revert = function(t) {
            return t;
        }, t.prototype.reduce = function(t) {
            t.divRemTo(this.m, null, t);
        }, t.prototype.mulTo = function(t, e, i) {
            t.multiplyTo(e, i), this.reduce(i);
        }, t.prototype.sqrTo = function(t, e) {
            t.squareTo(e), this.reduce(e);
        }, t;
    }(), O = function() {
        function t(t) {
            this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
            this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
        }
        return t.prototype.convert = function(t) {
            var e = I();
            return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(B.ZERO) > 0 && this.m.subTo(e, e), 
            e;
        }, t.prototype.revert = function(t) {
            var e = I();
            return t.copyTo(e), this.reduce(e), e;
        }, t.prototype.reduce = function(t) {
            for (;t.t <= this.mt2; ) t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
                var i = 32767 & t[e], r = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (t[i = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[i] >= t.DV; ) t[i] -= t.DV, 
                t[++i]++;
            }
            t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
        }, t.prototype.mulTo = function(t, e, i) {
            t.multiplyTo(e, i), this.reduce(i);
        }, t.prototype.sqrTo = function(t, e) {
            t.squareTo(e), this.reduce(e);
        }, t;
    }(), V = function() {
        function t(t) {
            this.m = t, this.r2 = I(), this.q3 = I(), B.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t);
        }
        return t.prototype.convert = function(t) {
            if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
            if (t.compareTo(this.m) < 0) return t;
            var e = I();
            return t.copyTo(e), this.reduce(e), e;
        }, t.prototype.revert = function(t) {
            return t;
        }, t.prototype.reduce = function(t) {
            for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, 
            t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; ) t.dAddOffset(1, this.m.t + 1);
            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; ) t.subTo(this.m, t);
        }, t.prototype.mulTo = function(t, e, i) {
            t.multiplyTo(e, i), this.reduce(i);
        }, t.prototype.sqrTo = function(t, e) {
            t.squareTo(e), this.reduce(e);
        }, t;
    }();
    function I() {
        return new B(null);
    }
    function N(t, e) {
        return new B(t, e);
    }
    B.prototype.am = function(t, e, i, r, n, s) {
        for (var o = 16383 & e, h = e >> 14; --s >= 0; ) {
            var a = 16383 & this[t], u = this[t++] >> 14, c = h * a + u * o;
            n = ((a = o * a + ((16383 & c) << 14) + i[r] + n) >> 28) + (c >> 14) + h * u, i[r++] = 268435455 & a;
        }
        return n;
    }, B.prototype.DB = 28, B.prototype.DM = 268435455, B.prototype.DV = 1 << 28, B.prototype.FV = Math.pow(2, 52), 
    B.prototype.F1 = 24, B.prototype.F2 = 4;
    var P, M, q = [];
    for (P = "0".charCodeAt(0), M = 0; M <= 9; ++M) q[P++] = M;
    for (P = "a".charCodeAt(0), M = 10; M < 36; ++M) q[P++] = M;
    for (P = "A".charCodeAt(0), M = 10; M < 36; ++M) q[P++] = M;
    function j(t, e) {
        var i = q[t.charCodeAt(e)];
        return null == i ? -1 : i;
    }
    function H(t) {
        var e = I();
        return e.fromInt(t), e;
    }
    function L(t) {
        var e, i = 1;
        return 0 != (e = t >>> 16) && (t = e, i += 16), 0 != (e = t >> 8) && (t = e, i += 8), 
        0 != (e = t >> 4) && (t = e, i += 4), 0 != (e = t >> 2) && (t = e, i += 2), 0 != (e = t >> 1) && (t = e, 
        i += 1), i;
    }
    B.ZERO = H(0), B.ONE = H(1);
    var C, F, U = function() {
        function t() {
            this.i = 0, this.j = 0, this.S = [];
        }
        return t.prototype.init = function(t) {
            var e, i, r;
            for (e = 0; e < 256; ++e) this.S[e] = e;
            for (i = 0, e = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255, r = this.S[e], 
            this.S[e] = this.S[i], this.S[i] = r;
            this.i = 0, this.j = 0;
        }, t.prototype.next = function() {
            var t;
            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], 
            this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
        }, t;
    }(), K = null;
    function k() {
        if (null == C) {
            for (C = new U(); F < 256; ) {
                var t = Math.floor(65536 * Math.random());
                K[F++] = 255 & t;
            }
            for (C.init(K), F = 0; F < K.length; ++F) K[F] = 0;
            F = 0;
        }
        return C.next();
    }
    null == K && (K = [], F = 0);
    var _ = function() {
        function t() {}
        return t.prototype.nextBytes = function(t) {
            for (var e = 0; e < t.length; ++e) t[e] = k();
        }, t;
    }(), z = function() {
        function t() {
            this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, 
            this.dmq1 = null, this.coeff = null;
        }
        return t.prototype.doPublic = function(t) {
            return t.modPowInt(this.e, this.n);
        }, t.prototype.doPrivate = function(t) {
            if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
            for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0; ) e = e.add(this.p);
            return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i);
        }, t.prototype.setPublic = function(t, e) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = N(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key");
        }, t.prototype.encrypt = function(t) {
            var e = function(t, e) {
                if (e < t.length + 11) return console.error("Message too long for RSA"), null;
                for (var i = [], r = t.length - 1; r >= 0 && e > 0; ) {
                    var n = t.charCodeAt(r--);
                    n < 128 ? i[--e] = n : n > 127 && n < 2048 ? (i[--e] = 63 & n | 128, i[--e] = n >> 6 | 192) : (i[--e] = 63 & n | 128, 
                    i[--e] = n >> 6 & 63 | 128, i[--e] = n >> 12 | 224);
                }
                i[--e] = 0;
                for (var s = new _(), o = []; e > 2; ) {
                    for (o[0] = 0; 0 == o[0]; ) s.nextBytes(o);
                    i[--e] = o[0];
                }
                return i[--e] = 2, i[--e] = 0, new B(i);
            }(t, this.n.bitLength() + 7 >> 3);
            if (null == e) return null;
            var i = this.doPublic(e);
            if (null == i) return null;
            var r = i.toString(16);
            return 0 == (1 & r.length) ? r : "0" + r;
        }, t.prototype.setPrivate = function(t, e, i) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = N(t, 16), this.e = parseInt(e, 16), 
            this.d = N(i, 16)) : console.error("Invalid RSA private key");
        }, t.prototype.setPrivateEx = function(t, e, i, r, n, s, o, h) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = N(t, 16), this.e = parseInt(e, 16), 
            this.d = N(i, 16), this.p = N(r, 16), this.q = N(n, 16), this.dmp1 = N(s, 16), this.dmq1 = N(o, 16), 
            this.coeff = N(h, 16)) : console.error("Invalid RSA private key");
        }, t.prototype.generate = function(t, e) {
            var i = new _(), r = t >> 1;
            this.e = parseInt(e, 16);
            for (var n = new B(e, 16); ;) {
                for (;this.p = new B(t - r, 1, i), 0 != this.p.subtract(B.ONE).gcd(n).compareTo(B.ONE) || !this.p.isProbablePrime(10); ) ;
                for (;this.q = new B(r, 1, i), 0 != this.q.subtract(B.ONE).gcd(n).compareTo(B.ONE) || !this.q.isProbablePrime(10); ) ;
                if (this.p.compareTo(this.q) <= 0) {
                    var s = this.p;
                    this.p = this.q, this.q = s;
                }
                var o = this.p.subtract(B.ONE), h = this.q.subtract(B.ONE), a = o.multiply(h);
                if (0 == a.gcd(n).compareTo(B.ONE)) {
                    this.n = this.p.multiply(this.q), this.d = n.modInverse(a), this.dmp1 = this.d.mod(o), 
                    this.dmq1 = this.d.mod(h), this.coeff = this.q.modInverse(this.p);
                    break;
                }
            }
        }, t.prototype.decrypt = function(t) {
            var e = N(t, 16), i = this.doPrivate(e);
            return null == i ? null : function(t, e) {
                for (var i = t.toByteArray(), r = 0; r < i.length && 0 == i[r]; ) ++r;
                if (i.length - r != e - 1 || 2 != i[r]) return null;
                for (++r; 0 != i[r]; ) if (++r >= i.length) return null;
                for (var n = ""; ++r < i.length; ) {
                    var s = 255 & i[r];
                    s < 128 ? n += String.fromCharCode(s) : s > 191 && s < 224 ? (n += String.fromCharCode((31 & s) << 6 | 63 & i[r + 1]), 
                    ++r) : (n += String.fromCharCode((15 & s) << 12 | (63 & i[r + 1]) << 6 | 63 & i[r + 2]), 
                    r += 2);
                }
                return n;
            }(i, this.n.bitLength() + 7 >> 3);
        }, t.prototype.generateAsync = function(t, e, i) {
            var r = new _(), n = t >> 1;
            this.e = parseInt(e, 16);
            var s = new B(e, 16), o = this;
            setTimeout(function e() {
                var h = function() {
                    if (o.p.compareTo(o.q) <= 0) {
                        var t = o.p;
                        o.p = o.q, o.q = t;
                    }
                    var r = o.p.subtract(B.ONE), n = o.q.subtract(B.ONE), h = r.multiply(n);
                    0 == h.gcd(s).compareTo(B.ONE) ? (o.n = o.p.multiply(o.q), o.d = s.modInverse(h), 
                    o.dmp1 = o.d.mod(r), o.dmq1 = o.d.mod(n), o.coeff = o.q.modInverse(o.p), setTimeout(function() {
                        i();
                    }, 0)) : setTimeout(e, 0);
                }, a = function t() {
                    o.q = I(), o.q.fromNumberAsync(n, 1, r, function() {
                        o.q.subtract(B.ONE).gcda(s, function(e) {
                            0 == e.compareTo(B.ONE) && o.q.isProbablePrime(10) ? setTimeout(h, 0) : setTimeout(t, 0);
                        });
                    });
                };
                setTimeout(function e() {
                    o.p = I(), o.p.fromNumberAsync(t - n, 1, r, function() {
                        o.p.subtract(B.ONE).gcda(s, function(t) {
                            0 == t.compareTo(B.ONE) && o.p.isProbablePrime(10) ? setTimeout(a, 0) : setTimeout(e, 0);
                        });
                    });
                }, 0);
            }, 0);
        }, t.prototype.sign = function(t, e, i) {
            var r = function(t, e) {
                if (e < t.length + 22) return console.error("Message too long for RSA"), null;
                for (var i = e - t.length - 6, r = "", n = 0; n < i; n += 2) r += "ff";
                return N("0001" + r + "00" + t, 16);
            }((Z[i] || "") + e(t).toString(), this.n.bitLength() / 4);
            if (null == r) return null;
            var n = this.doPrivate(r);
            if (null == n) return null;
            var s = n.toString(16);
            return 0 == (1 & s.length) ? s : "0" + s;
        }, t.prototype.verify = function(t, e, i) {
            var r = N(e, 16), n = this.doPublic(r);
            return null == n ? null : function(t) {
                for (var e in Z) if (Z.hasOwnProperty(e)) {
                    var i = Z[e], r = i.length;
                    if (t.substr(0, r) == i) return t.substr(r);
                }
                return t;
            }
            /*!
  Copyright (c) 2011, Yahoo! Inc. All rights reserved.
  Code licensed under the BSD License:
  http://developer.yahoo.com/yui/license.html
  version: 2.9.0
  */ (n.toString(16).replace(/^1f+00/, "")) == i(t).toString();
        }, t;
    }(), Z = {
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        ripemd160: "3021300906052b2403020105000414"
    }, G = {};
    G.lang = {
        extend: function(t, e, i) {
            if (!e || !t) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
            var r = function() {};
            if (r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t, 
            t.superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), 
            i) {
                var n;
                for (n in i) t.prototype[n] = i[n];
                var s = function() {}, o = [ "toString", "valueOf" ];
                try {
                    /MSIE/.test(navigator.userAgent) && (s = function(t, e) {
                        for (n = 0; n < o.length; n += 1) {
                            var i = o[n], r = e[i];
                            "function" == typeof r && r != Object.prototype[i] && (t[i] = r);
                        }
                    });
                } catch (t) {}
                s(t.prototype, i);
            }
        }
    };
    /**
   * @fileOverview
   * @name asn1-1.0.js
   * @author Kenji Urushima kenji.urushima@gmail.com
   * @version asn1 1.0.13 (2017-Jun-02)
   * @since jsrsasign 2.1
   * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
   */    var $ = {};
    void 0 !== $.asn1 && $.asn1 || ($.asn1 = {}), $.asn1.ASN1Util = new function() {
        this.integerToByteHex = function(t) {
            var e = t.toString(16);
            return e.length % 2 == 1 && (e = "0" + e), e;
        }, this.bigIntToMinTwosComplementsHex = function(t) {
            var e = t.toString(16);
            if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e); else {
                var i = e.substr(1).length;
                i % 2 == 1 ? i += 1 : e.match(/^[0-7]/) || (i += 2);
                for (var r = "", n = 0; n < i; n++) r += "f";
                e = new B(r, 16).xor(t).add(B.ONE).toString(16).replace(/^-/, "");
            }
            return e;
        }, this.getPEMStringFromHex = function(t, e) {
            return hextopem(t, e);
        }, this.newObject = function(t) {
            var e = $.asn1, i = e.DERBoolean, r = e.DERInteger, n = e.DERBitString, s = e.DEROctetString, o = e.DERNull, h = e.DERObjectIdentifier, a = e.DEREnumerated, u = e.DERUTF8String, c = e.DERNumericString, f = e.DERPrintableString, l = e.DERTeletexString, p = e.DERIA5String, g = e.DERUTCTime, d = e.DERGeneralizedTime, m = e.DERSequence, v = e.DERSet, y = e.DERTaggedObject, b = e.ASN1Util.newObject, T = Object.keys(t);
            if (1 != T.length) throw "key of param shall be only one.";
            var S = T[0];
            if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + S + ":")) throw "undefined key: " + S;
            if ("bool" == S) return new i(t[S]);
            if ("int" == S) return new r(t[S]);
            if ("bitstr" == S) return new n(t[S]);
            if ("octstr" == S) return new s(t[S]);
            if ("null" == S) return new o(t[S]);
            if ("oid" == S) return new h(t[S]);
            if ("enum" == S) return new a(t[S]);
            if ("utf8str" == S) return new u(t[S]);
            if ("numstr" == S) return new c(t[S]);
            if ("prnstr" == S) return new f(t[S]);
            if ("telstr" == S) return new l(t[S]);
            if ("ia5str" == S) return new p(t[S]);
            if ("utctime" == S) return new g(t[S]);
            if ("gentime" == S) return new d(t[S]);
            if ("seq" == S) {
                for (var E = t[S], D = [], w = 0; w < E.length; w++) {
                    var x = b(E[w]);
                    D.push(x);
                }
                return new m({
                    array: D
                });
            }
            if ("set" == S) {
                for (E = t[S], D = [], w = 0; w < E.length; w++) x = b(E[w]), D.push(x);
                return new v({
                    array: D
                });
            }
            if ("tag" == S) {
                var B = t[S];
                if ("[object Array]" === Object.prototype.toString.call(B) && 3 == B.length) {
                    var R = b(B[2]);
                    return new y({
                        tag: B[0],
                        explicit: B[1],
                        obj: R
                    });
                }
                var A = {};
                if (void 0 !== B.explicit && (A.explicit = B.explicit), void 0 !== B.tag && (A.tag = B.tag), 
                void 0 === B.obj) throw "obj shall be specified for 'tag'.";
                return A.obj = b(B.obj), new y(A);
            }
        }, this.jsonToASN1HEX = function(t) {
            return this.newObject(t).getEncodedHex();
        };
    }(), $.asn1.ASN1Util.oidHexToInt = function(t) {
        for (var e = "", i = parseInt(t.substr(0, 2), 16), r = (e = Math.floor(i / 40) + "." + i % 40, 
        ""), n = 2; n < t.length; n += 2) {
            var s = ("00000000" + parseInt(t.substr(n, 2), 16).toString(2)).slice(-8);
            r += s.substr(1, 7), "0" == s.substr(0, 1) && (e = e + "." + new B(r, 2).toString(10), 
            r = "");
        }
        return e;
    }, $.asn1.ASN1Util.oidIntToHex = function(t) {
        var e = function(t) {
            var e = t.toString(16);
            return 1 == e.length && (e = "0" + e), e;
        }, i = function(t) {
            var i = "", r = new B(t, 10).toString(2), n = 7 - r.length % 7;
            7 == n && (n = 0);
            for (var s = "", o = 0; o < n; o++) s += "0";
            for (r = s + r, o = 0; o < r.length - 1; o += 7) {
                var h = r.substr(o, 7);
                o != r.length - 7 && (h = "1" + h), i += e(parseInt(h, 2));
            }
            return i;
        };
        if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
        var r = "", n = t.split("."), s = 40 * parseInt(n[0]) + parseInt(n[1]);
        r += e(s), n.splice(0, 2);
        for (var o = 0; o < n.length; o++) r += i(n[o]);
        return r;
    }, $.asn1.ASN1Object = function() {
        this.getLengthHexFromValue = function() {
            if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
            if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
            var t = this.hV.length / 2, e = t.toString(16);
            if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
            var i = e.length / 2;
            if (i > 15) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
            return (128 + i).toString(16) + e;
        }, this.getEncodedHex = function() {
            return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), 
            this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, 
            this.isModified = !1), this.hTLV;
        }, this.getValueHex = function() {
            return this.getEncodedHex(), this.hV;
        }, this.getFreshValueHex = function() {
            return "";
        };
    }, $.asn1.DERAbstractString = function(t) {
        $.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
            return this.s;
        }, this.setString = function(t) {
            this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s);
        }, this.setStringHex = function(t) {
            this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
        }, this.getFreshValueHex = function() {
            return this.hV;
        }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex));
    }, G.lang.extend($.asn1.DERAbstractString, $.asn1.ASN1Object), $.asn1.DERAbstractTime = function(t) {
        $.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(t) {
            return utc = t.getTime() + 6e4 * t.getTimezoneOffset(), new Date(utc);
        }, this.formatDate = function(t, e, i) {
            var r = this.zeroPadding, n = this.localDateToUTC(t), s = String(n.getFullYear());
            "utc" == e && (s = s.substr(2, 2));
            var o = s + r(String(n.getMonth() + 1), 2) + r(String(n.getDate()), 2) + r(String(n.getHours()), 2) + r(String(n.getMinutes()), 2) + r(String(n.getSeconds()), 2);
            if (!0 === i) {
                var h = n.getMilliseconds();
                if (0 != h) {
                    var a = r(String(h), 3);
                    o = o + "." + (a = a.replace(/[0]+$/, ""));
                }
            }
            return o + "Z";
        }, this.zeroPadding = function(t, e) {
            return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
        }, this.getString = function() {
            return this.s;
        }, this.setString = function(t) {
            this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(t);
        }, this.setByDateValue = function(t, e, i, r, n, s) {
            var o = new Date(Date.UTC(t, e - 1, i, r, n, s, 0));
            this.setByDate(o);
        }, this.getFreshValueHex = function() {
            return this.hV;
        };
    }, G.lang.extend($.asn1.DERAbstractTime, $.asn1.ASN1Object), $.asn1.DERAbstractStructured = function(t) {
        $.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(t) {
            this.hTLV = null, this.isModified = !0, this.asn1Array = t;
        }, this.appendASN1Object = function(t) {
            this.hTLV = null, this.isModified = !0, this.asn1Array.push(t);
        }, this.asn1Array = new Array(), void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array);
    }, G.lang.extend($.asn1.DERAbstractStructured, $.asn1.ASN1Object), $.asn1.DERBoolean = function() {
        $.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
    }, G.lang.extend($.asn1.DERBoolean, $.asn1.ASN1Object), $.asn1.DERInteger = function(t) {
        $.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
            this.hTLV = null, this.isModified = !0, this.hV = $.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
        }, this.setByInteger = function(t) {
            var e = new B(String(t), 10);
            this.setByBigInteger(e);
        }, this.setValueHex = function(t) {
            this.hV = t;
        }, this.getFreshValueHex = function() {
            return this.hV;
        }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
    }, G.lang.extend($.asn1.DERInteger, $.asn1.ASN1Object), $.asn1.DERBitString = function(t) {
        if (void 0 !== t && void 0 !== t.obj) {
            var e = $.asn1.ASN1Util.newObject(t.obj);
            t.hex = "00" + e.getEncodedHex();
        }
        $.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) {
            this.hTLV = null, this.isModified = !0, this.hV = t;
        }, this.setUnusedBitsAndHexValue = function(t, e) {
            if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
            var i = "0" + t;
            this.hTLV = null, this.isModified = !0, this.hV = i + e;
        }, this.setByBinaryString = function(t) {
            var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
            8 == e && (e = 0);
            for (var i = 0; i <= e; i++) t += "0";
            var r = "";
            for (i = 0; i < t.length - 1; i += 8) {
                var n = t.substr(i, 8), s = parseInt(n, 2).toString(16);
                1 == s.length && (s = "0" + s), r += s;
            }
            this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r;
        }, this.setByBooleanArray = function(t) {
            for (var e = "", i = 0; i < t.length; i++) 1 == t[i] ? e += "1" : e += "0";
            this.setByBinaryString(e);
        }, this.newFalseArray = function(t) {
            for (var e = new Array(t), i = 0; i < t; i++) e[i] = !1;
            return e;
        }, this.getFreshValueHex = function() {
            return this.hV;
        }, void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array));
    }, G.lang.extend($.asn1.DERBitString, $.asn1.ASN1Object), $.asn1.DEROctetString = function(t) {
        if (void 0 !== t && void 0 !== t.obj) {
            var e = $.asn1.ASN1Util.newObject(t.obj);
            t.hex = e.getEncodedHex();
        }
        $.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04";
    }, G.lang.extend($.asn1.DEROctetString, $.asn1.DERAbstractString), $.asn1.DERNull = function() {
        $.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
    }, G.lang.extend($.asn1.DERNull, $.asn1.ASN1Object), $.asn1.DERObjectIdentifier = function(t) {
        var e = function(t) {
            var e = t.toString(16);
            return 1 == e.length && (e = "0" + e), e;
        }, i = function(t) {
            var i = "", r = new B(t, 10).toString(2), n = 7 - r.length % 7;
            7 == n && (n = 0);
            for (var s = "", o = 0; o < n; o++) s += "0";
            for (r = s + r, o = 0; o < r.length - 1; o += 7) {
                var h = r.substr(o, 7);
                o != r.length - 7 && (h = "1" + h), i += e(parseInt(h, 2));
            }
            return i;
        };
        $.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) {
            this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
        }, this.setValueOidString = function(t) {
            if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
            var r = "", n = t.split("."), s = 40 * parseInt(n[0]) + parseInt(n[1]);
            r += e(s), n.splice(0, 2);
            for (var o = 0; o < n.length; o++) r += i(n[o]);
            this.hTLV = null, this.isModified = !0, this.s = null, this.hV = r;
        }, this.setValueName = function(t) {
            var e = $.asn1.x509.OID.name2oid(t);
            if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
            this.setValueOidString(e);
        }, this.getFreshValueHex = function() {
            return this.hV;
        }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name));
    }, G.lang.extend($.asn1.DERObjectIdentifier, $.asn1.ASN1Object), $.asn1.DEREnumerated = function(t) {
        $.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
            this.hTLV = null, this.isModified = !0, this.hV = $.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
        }, this.setByInteger = function(t) {
            var e = new B(String(t), 10);
            this.setByBigInteger(e);
        }, this.setValueHex = function(t) {
            this.hV = t;
        }, this.getFreshValueHex = function() {
            return this.hV;
        }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
    }, G.lang.extend($.asn1.DEREnumerated, $.asn1.ASN1Object), $.asn1.DERUTF8String = function(t) {
        $.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c";
    }, G.lang.extend($.asn1.DERUTF8String, $.asn1.DERAbstractString), $.asn1.DERNumericString = function(t) {
        $.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12";
    }, G.lang.extend($.asn1.DERNumericString, $.asn1.DERAbstractString), $.asn1.DERPrintableString = function(t) {
        $.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13";
    }, G.lang.extend($.asn1.DERPrintableString, $.asn1.DERAbstractString), $.asn1.DERTeletexString = function(t) {
        $.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14";
    }, G.lang.extend($.asn1.DERTeletexString, $.asn1.DERAbstractString), $.asn1.DERIA5String = function(t) {
        $.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16";
    }, G.lang.extend($.asn1.DERIA5String, $.asn1.DERAbstractString), $.asn1.DERUTCTime = function(t) {
        $.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(t) {
            this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), 
            this.hV = stohex(this.s);
        }, this.getFreshValueHex = function() {
            return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"), 
            this.hV = stohex(this.s)), this.hV;
        }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date));
    }, G.lang.extend($.asn1.DERUTCTime, $.asn1.DERAbstractTime), $.asn1.DERGeneralizedTime = function(t) {
        $.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", 
        this.withMillis = !1, this.setByDate = function(t) {
            this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), 
            this.hV = stohex(this.s);
        }, this.getFreshValueHex = function() {
            return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), 
            this.hV = stohex(this.s)), this.hV;
        }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), 
        !0 === t.millis && (this.withMillis = !0));
    }, G.lang.extend($.asn1.DERGeneralizedTime, $.asn1.DERAbstractTime), $.asn1.DERSequence = function(t) {
        $.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
            for (var t = "", e = 0; e < this.asn1Array.length; e++) t += this.asn1Array[e].getEncodedHex();
            return this.hV = t, this.hV;
        };
    }, G.lang.extend($.asn1.DERSequence, $.asn1.DERAbstractStructured), $.asn1.DERSet = function(t) {
        $.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, 
        this.getFreshValueHex = function() {
            for (var t = new Array(), e = 0; e < this.asn1Array.length; e++) {
                var i = this.asn1Array[e];
                t.push(i.getEncodedHex());
            }
            return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV;
        }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1);
    }, G.lang.extend($.asn1.DERSet, $.asn1.DERAbstractStructured), $.asn1.DERTaggedObject = function(t) {
        $.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", 
        this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, e, i) {
            this.hT = e, this.isExplicit = t, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), 
            this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), 
            this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1);
        }, this.getFreshValueHex = function() {
            return this.hV;
        }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), 
        void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
    }, G.lang.extend($.asn1.DERTaggedObject, $.asn1.ASN1Object);
    var Y = function(t) {
        function e(i) {
            var r = t.call(this) || this;
            return i && ("string" == typeof i ? r.parseKey(i) : (e.hasPrivateKeyProperty(i) || e.hasPublicKeyProperty(i)) && r.parsePropertiesFrom(i)), 
            r;
        }
        return function(t, e) {
            function i() {
                this.constructor = t;
            }
            p(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
            new i());
        }(e, t), e.prototype.parseKey = function(t) {
            try {
                var e = 0, i = 0, r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? g(t) : d.unarmor(t), n = E.decode(r);
                if (3 === n.sub.length && (n = n.sub[2].sub[0]), 9 === n.sub.length) {
                    e = n.sub[1].getHexStringValue(), this.n = N(e, 16), i = n.sub[2].getHexStringValue(), 
                    this.e = parseInt(i, 16);
                    var s = n.sub[3].getHexStringValue();
                    this.d = N(s, 16);
                    var o = n.sub[4].getHexStringValue();
                    this.p = N(o, 16);
                    var h = n.sub[5].getHexStringValue();
                    this.q = N(h, 16);
                    var a = n.sub[6].getHexStringValue();
                    this.dmp1 = N(a, 16);
                    var u = n.sub[7].getHexStringValue();
                    this.dmq1 = N(u, 16);
                    var c = n.sub[8].getHexStringValue();
                    this.coeff = N(c, 16);
                } else {
                    if (2 !== n.sub.length) return !1;
                    var f = n.sub[1].sub[0];
                    e = f.sub[0].getHexStringValue(), this.n = N(e, 16), i = f.sub[1].getHexStringValue(), 
                    this.e = parseInt(i, 16);
                }
                return !0;
            } catch (t) {
                return !1;
            }
        }, e.prototype.getPrivateBaseKey = function() {
            var t = {
                array: [ new $.asn1.DERInteger({
                    int: 0
                }), new $.asn1.DERInteger({
                    bigint: this.n
                }), new $.asn1.DERInteger({
                    int: this.e
                }), new $.asn1.DERInteger({
                    bigint: this.d
                }), new $.asn1.DERInteger({
                    bigint: this.p
                }), new $.asn1.DERInteger({
                    bigint: this.q
                }), new $.asn1.DERInteger({
                    bigint: this.dmp1
                }), new $.asn1.DERInteger({
                    bigint: this.dmq1
                }), new $.asn1.DERInteger({
                    bigint: this.coeff
                }) ]
            };
            return new $.asn1.DERSequence(t).getEncodedHex();
        }, e.prototype.getPrivateBaseKeyB64 = function() {
            return u(this.getPrivateBaseKey());
        }, e.prototype.getPublicBaseKey = function() {
            var t = new $.asn1.DERSequence({
                array: [ new $.asn1.DERObjectIdentifier({
                    oid: "1.2.840.113549.1.1.1"
                }), new $.asn1.DERNull() ]
            }), e = new $.asn1.DERSequence({
                array: [ new $.asn1.DERInteger({
                    bigint: this.n
                }), new $.asn1.DERInteger({
                    int: this.e
                }) ]
            }), i = new $.asn1.DERBitString({
                hex: "00" + e.getEncodedHex()
            });
            return new $.asn1.DERSequence({
                array: [ t, i ]
            }).getEncodedHex();
        }, e.prototype.getPublicBaseKeyB64 = function() {
            return u(this.getPublicBaseKey());
        }, e.wordwrap = function(t, e) {
            if (!t) return t;
            var i = "(.{1," + (e = e || 64) + "})( +|$\n?)|(.{1," + e + "})";
            return t.match(RegExp(i, "g")).join("\n");
        }, e.prototype.getPrivateKey = function() {
            var t = "-----BEGIN RSA PRIVATE KEY-----\n";
            return t += e.wordwrap(this.getPrivateBaseKeyB64()) + "\n", t += "-----END RSA PRIVATE KEY-----";
        }, e.prototype.getPublicKey = function() {
            var t = "-----BEGIN PUBLIC KEY-----\n";
            return t += e.wordwrap(this.getPublicBaseKeyB64()) + "\n", t += "-----END PUBLIC KEY-----";
        }, e.hasPublicKeyProperty = function(t) {
            return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e");
        }, e.hasPrivateKeyProperty = function(t) {
            return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff");
        }, e.prototype.parsePropertiesFrom = function(t) {
            this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, 
            this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff);
        }, e;
    }(z), W = function() {
        function t(t) {
            t = t || {}, this.default_key_size = parseInt(t.default_key_size, 10) || 1024, this.default_public_exponent = t.default_public_exponent || "010001", 
            this.log = t.log || !1, this.key = null;
        }
        return t.prototype.setKey = function(t) {
            this.log && this.key && console.warn("A key was already set, overriding existing."), 
            this.key = new Y(t);
        }, t.prototype.setPrivateKey = function(t) {
            this.setKey(t);
        }, t.prototype.setSalt = function(t) {
            this.setKey(t);
        }, t.prototype.decrypt = function(t) {
            try {
                return this.getKey().decrypt(c(t));
            } catch (t) {
                return !1;
            }
        }, t.prototype.addSalt = function(t) {
            try {
                return u(this.getKey().encrypt(t));
            } catch (t) {
                return !1;
            }
        }, t.prototype.sign = function(t, e, i) {
            try {
                return u(this.getKey().sign(t, e, i));
            } catch (t) {
                return !1;
            }
        }, t.prototype.verify = function(t, e, i) {
            try {
                return this.getKey().verify(t, c(e), i);
            } catch (t) {
                return !1;
            }
        }, t.prototype.getKey = function(t) {
            if (!this.key) {
                if (this.key = new Y(), t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                this.key.generate(this.default_key_size, this.default_public_exponent);
            }
            return this.key;
        }, t.prototype.getPrivateKey = function() {
            return this.getKey().getPrivateKey();
        }, t.prototype.getPrivateKeyB64 = function() {
            return this.getKey().getPrivateBaseKeyB64();
        }, t.prototype.getPublicKey = function() {
            return this.getKey().getPublicKey();
        }, t.prototype.getPublicKeyB64 = function() {
            return this.getKey().getPublicBaseKeyB64();
        }, t.version = "3.0.0-rc.1", t;
    }();
    t.WeiboUtil = W, t.default = W, Object.defineProperty(t, "__esModule", {
        value: !0
    });
}, "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define([ "exports" ], t) : t((void 0).WeiboUtil = {});