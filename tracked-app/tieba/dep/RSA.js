/* eslint-disable */
"use strict";

function setMaxDigits(i) {
    maxDigits = i, ZERO_ARRAY = new Array(maxDigits);
    for (var t = 0; t < ZERO_ARRAY.length; t++) {
        ZERO_ARRAY[t] = 0;
    }
    bigZero = new BigInt(), bigOne = new BigInt(), bigOne.digits[0] = 1;
}

function BigInt(i) {
    this.digits = "boolean" == typeof i && 1 == i ? null : ZERO_ARRAY.slice(0), this.isNeg = !1;
}

function biFromDecimal(i) {
    for (var t, r = "-" == i.charAt(0), e = r ? 1 : 0; e < i.length && "0" == i.charAt(e); ) {
        ++e;
    }
    if (e == i.length) t = new BigInt(); else {
        var g = i.length - e, n = g % dpl10;
        for (0 == n && (n = dpl10), t = biFromNumber(Number(i.substr(e, n))), e += n; e < i.length; ) {
            t = biAdd(biMultiply(t, lr10), biFromNumber(Number(i.substr(e, dpl10)))), e += dpl10;
        }
        t.isNeg = r;
    }
    return t;
}

function biCopy(i) {
    var t = new BigInt(!0);
    return t.digits = i.digits.slice(0), t.isNeg = i.isNeg, t;
}

function biFromNumber(i) {
    var t = new BigInt();
    t.isNeg = 0 > i, i = Math.abs(i);
    for (var r = 0; i > 0; ) {
        t.digits[r++] = i & maxDigitVal, i >>= biRadixBits;
    }
    return t;
}

function reverseStr(i) {
    for (var t = "", r = i.length - 1; r > -1; --r) {
        t += i.charAt(r);
    }
    return t;
}

function biToString(i, t) {
    var r = new BigInt();
    r.digits[0] = t;
    for (var e = biDivideModulo(i, r), g = hexatrigesimalToChar[e[1].digits[0]]; 1 == biCompare(e[0], bigZero); ) {
        e = biDivideModulo(e[0], r), digit = e[1].digits[0], g += hexatrigesimalToChar[e[1].digits[0]];
    }
    return (i.isNeg ? "-" : "") + reverseStr(g);
}

function biToDecimal(i) {
    var t = new BigInt();
    t.digits[0] = 10;
    for (var r = biDivideModulo(i, t), e = String(r[1].digits[0]); 1 == biCompare(r[0], bigZero); ) {
        r = biDivideModulo(r[0], t), e += String(r[1].digits[0]);
    }
    return (i.isNeg ? "-" : "") + reverseStr(e);
}

function digitToHex(i) {
    for (var t = 15, r = "", e = 0; 4 > e; ++e) {
        r += hexToChar[i & t], i >>>= 4;
    }
    return reverseStr(r);
}

function biToHex(i) {
    for (var t = "", r = (biHighIndex(i), biHighIndex(i)); r > -1; --r) {
        t += digitToHex(i.digits[r]);
    }
    return t;
}

function charToHex(i) {
    var t, r = 48, e = r + 9, g = 97, n = g + 25, s = 65, d = 90;
    return t = i >= r && e >= i ? i - r : i >= s && d >= i ? 10 + i - s : i >= g && n >= i ? 10 + i - g : 0;
}

function hexToDigit(i) {
    for (var t = 0, r = Math.min(i.length, 4), e = 0; r > e; ++e) {
        t <<= 4, t |= charToHex(i.charCodeAt(e));
    }
    return t;
}

function biFromHex(i) {
    for (var t = new BigInt(), r = i.length, e = r, g = 0; e > 0; e -= 4, ++g) {
        t.digits[g] = hexToDigit(i.substr(Math.max(e - 4, 0), Math.min(e, 4)));
    }
    return t;
}

function biFromString(i, t) {
    var r = "-" == i.charAt(0), e = r ? 1 : 0, g = new BigInt(), n = new BigInt();
    n.digits[0] = 1;
    for (var s = i.length - 1; s >= e; s--) {
        var d = i.charCodeAt(s), o = charToHex(d), a = biMultiplyDigit(n, o);
        g = biAdd(g, a), n = biMultiplyDigit(n, t);
    }
    return g.isNeg = r, g;
}

function biToBytes(i) {
    for (var t = "", r = biHighIndex(i); r > -1; --r) {
        t += digitToBytes(i.digits[r]);
    }
    return t;
}

function digitToBytes(i) {
    var t = String.fromCharCode(255 & i);
    i >>>= 8;
    var r = String.fromCharCode(255 & i);
    return r + t;
}

function biDump(i) {
    return (i.isNeg ? "-" : "") + i.digits.join(" ");
}

function biAdd(i, t) {
    var r;
    if (i.isNeg != t.isNeg) t.isNeg = !t.isNeg, r = biSubtract(i, t), t.isNeg = !t.isNeg; else {
        r = new BigInt();
        for (var e, g = 0, n = 0; n < i.digits.length; ++n) {
            e = i.digits[n] + t.digits[n] + g, r.digits[n] = 65535 & e, g = Number(e >= biRadix);
        }
        r.isNeg = i.isNeg;
    }
    return r;
}

function biSubtract(i, t) {
    var r;
    if (i.isNeg != t.isNeg) t.isNeg = !t.isNeg, r = biAdd(i, t), t.isNeg = !t.isNeg; else {
        r = new BigInt();
        var e, g;
        g = 0;
        for (var n = 0; n < i.digits.length; ++n) {
            e = i.digits[n] - t.digits[n] + g, r.digits[n] = 65535 & e, r.digits[n] < 0 && (r.digits[n] += biRadix), 
            g = 0 - Number(0 > e);
        }
        if (-1 == g) {
            g = 0;
            for (var n = 0; n < i.digits.length; ++n) {
                e = 0 - r.digits[n] + g, r.digits[n] = 65535 & e, r.digits[n] < 0 && (r.digits[n] += biRadix), 
                g = 0 - Number(0 > e);
            }
            r.isNeg = !i.isNeg;
        } else r.isNeg = i.isNeg;
    }
    return r;
}

function biHighIndex(i) {
    for (var t = i.digits.length - 1; t > 0 && 0 == i.digits[t]; ) {
        --t;
    }
    return t;
}

function biNumBits(i) {
    var t, r = biHighIndex(i), e = i.digits[r], g = (r + 1) * bitsPerDigit;
    for (t = g; t > g - bitsPerDigit && 0 == (32768 & e); --t) {
        e <<= 1;
    }
    return t;
}

function biMultiply(i, t) {
    for (var r, e, g, n = new BigInt(), s = biHighIndex(i), d = biHighIndex(t), o = 0; d >= o; ++o) {
        r = 0, g = o;
        for (var a = 0; s >= a; ++a, ++g) {
            e = n.digits[g] + i.digits[a] * t.digits[o] + r, n.digits[g] = e & maxDigitVal, 
            r = e >>> biRadixBits;
        }
        n.digits[o + s + 1] = r;
    }
    return n.isNeg = i.isNeg != t.isNeg, n;
}

function biMultiplyDigit(i, t) {
    var r, e, g, n = new BigInt();
    r = biHighIndex(i), e = 0;
    for (var s = 0; r >= s; ++s) {
        g = n.digits[s] + i.digits[s] * t + e, n.digits[s] = g & maxDigitVal, e = g >>> biRadixBits;
    }
    return n.digits[1 + r] = e, n;
}

function arrayCopy(i, t, r, e, g) {
    for (var n = Math.min(t + g, i.length), s = t, d = e; n > s; ++s, ++d) {
        r[d] = i[s];
    }
}

function biShiftLeft(i, t) {
    var r = Math.floor(t / bitsPerDigit), e = new BigInt();
    arrayCopy(i.digits, 0, e.digits, r, e.digits.length - r);
    for (var g = t % bitsPerDigit, n = bitsPerDigit - g, s = e.digits.length - 1, d = s - 1; s > 0; --s, 
    --d) {
        e.digits[s] = e.digits[s] << g & maxDigitVal | (e.digits[d] & highBitMasks[g]) >>> n;
    }
    return e.digits[0] = e.digits[s] << g & maxDigitVal, e.isNeg = i.isNeg, e;
}

function biShiftRight(i, t) {
    var r = Math.floor(t / bitsPerDigit), e = new BigInt();
    arrayCopy(i.digits, r, e.digits, 0, i.digits.length - r);
    for (var g = t % bitsPerDigit, n = bitsPerDigit - g, s = 0, d = s + 1; s < e.digits.length - 1; ++s, 
    ++d) {
        e.digits[s] = e.digits[s] >>> g | (e.digits[d] & lowBitMasks[g]) << n;
    }
    return e.digits[e.digits.length - 1] >>>= g, e.isNeg = i.isNeg, e;
}

function biMultiplyByRadixPower(i, t) {
    var r = new BigInt();
    return arrayCopy(i.digits, 0, r.digits, t, r.digits.length - t), r;
}

function biDivideByRadixPower(i, t) {
    var r = new BigInt();
    return arrayCopy(i.digits, t, r.digits, 0, r.digits.length - t), r;
}

function biModuloByRadixPower(i, t) {
    var r = new BigInt();
    return arrayCopy(i.digits, 0, r.digits, 0, t), r;
}

function biCompare(i, t) {
    if (i.isNeg != t.isNeg) return 1 - 2 * Number(i.isNeg);
    for (var r = i.digits.length - 1; r >= 0; --r) {
        if (i.digits[r] != t.digits[r]) return i.isNeg ? 1 - 2 * Number(i.digits[r] > t.digits[r]) : 1 - 2 * Number(i.digits[r] < t.digits[r]);
    }
    return 0;
}

function biDivideModulo(i, t) {
    var r, e, g = biNumBits(i), n = biNumBits(t), s = t.isNeg;
    if (n > g) return i.isNeg ? (r = biCopy(bigOne), r.isNeg = !t.isNeg, i.isNeg = !1, 
    t.isNeg = !1, e = biSubtract(t, i), i.isNeg = !0, t.isNeg = s) : (r = new BigInt(), 
    e = biCopy(i)), new Array(r, e);
    r = new BigInt(), e = i;
    for (var d = Math.ceil(n / bitsPerDigit) - 1, o = 0; t.digits[d] < biHalfRadix; ) {
        t = biShiftLeft(t, 1), ++o, ++n, d = Math.ceil(n / bitsPerDigit) - 1;
    }
    e = biShiftLeft(e, o), g += o;
    for (var a = Math.ceil(g / bitsPerDigit) - 1, u = biMultiplyByRadixPower(t, a - d); -1 != biCompare(e, u); ) {
        ++r.digits[a - d], e = biSubtract(e, u);
    }
    for (var b = a; b > d; --b) {
        var h = b >= e.digits.length ? 0 : e.digits[b], l = b - 1 >= e.digits.length ? 0 : e.digits[b - 1], f = b - 2 >= e.digits.length ? 0 : e.digits[b - 2], c = d >= t.digits.length ? 0 : t.digits[d], x = d - 1 >= t.digits.length ? 0 : t.digits[d - 1];
        r.digits[b - d - 1] = h == c ? maxDigitVal : Math.floor((h * biRadix + l) / c);
        for (var m = r.digits[b - d - 1] * (c * biRadix + x), v = h * biRadixSquared + (l * biRadix + f); m > v; ) {
            --r.digits[b - d - 1], m = r.digits[b - d - 1] * (c * biRadix | x), v = h * biRadix * biRadix + (l * biRadix + f);
        }
        u = biMultiplyByRadixPower(t, b - d - 1), e = biSubtract(e, biMultiplyDigit(u, r.digits[b - d - 1])), 
        e.isNeg && (e = biAdd(e, u), --r.digits[b - d - 1]);
    }
    return e = biShiftRight(e, o), r.isNeg = i.isNeg != s, i.isNeg && (r = s ? biAdd(r, bigOne) : biSubtract(r, bigOne), 
    t = biShiftRight(t, o), e = biSubtract(t, e)), 0 == e.digits[0] && 0 == biHighIndex(e) && (e.isNeg = !1), 
    new Array(r, e);
}

function biDivide(i, t) {
    return biDivideModulo(i, t)[0];
}

function biModulo(i, t) {
    return biDivideModulo(i, t)[1];
}

function biMultiplyMod(i, t, r) {
    return biModulo(biMultiply(i, t), r);
}

function biPow(i, t) {
    for (var r = bigOne, e = i; ;) {
        if (0 != (1 & t) && (r = biMultiply(r, e)), t >>= 1, 0 == t) break;
        e = biMultiply(e, e);
    }
    return r;
}

function biPowMod(i, t, r) {
    for (var e = bigOne, g = i, n = t; ;) {
        if (0 != (1 & n.digits[0]) && (e = biMultiplyMod(e, g, r)), n = biShiftRight(n, 1), 
        0 == n.digits[0] && 0 == biHighIndex(n)) break;
        g = biMultiplyMod(g, g, r);
    }
    return e;
}

function BarrettMu(i) {
    this.modulus = biCopy(i), this.k = biHighIndex(this.modulus) + 1;
    var t = new BigInt();
    t.digits[2 * this.k] = 1, this.mu = biDivide(t, this.modulus), this.bkplus1 = new BigInt(), 
    this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, 
    this.powMod = BarrettMu_powMod;
}

function BarrettMu_modulo(i) {
    var t = biDivideByRadixPower(i, this.k - 1), r = biMultiply(t, this.mu), e = biDivideByRadixPower(r, this.k + 1), g = biModuloByRadixPower(i, this.k + 1), n = biMultiply(e, this.modulus), s = biModuloByRadixPower(n, this.k + 1), d = biSubtract(g, s);
    d.isNeg && (d = biAdd(d, this.bkplus1));
    for (var o = biCompare(d, this.modulus) >= 0; o; ) {
        d = biSubtract(d, this.modulus), o = biCompare(d, this.modulus) >= 0;
    }
    return d;
}

function BarrettMu_multiplyMod(i, t) {
    var r = biMultiply(i, t);
    return this.modulo(r);
}

function BarrettMu_powMod(i, t) {
    var r = new BigInt();
    r.digits[0] = 1;
    for (var e = i, g = t; ;) {
        if (0 != (1 & g.digits[0]) && (r = this.multiplyMod(r, e)), g = biShiftRight(g, 1), 
        0 == g.digits[0] && 0 == biHighIndex(g)) break;
        e = this.multiplyMod(e, e);
    }
    return r;
}

function RSAKeyPair(i, t, r, e) {
    this.e = biFromHex(i), this.d = biFromHex(t), this.m = biFromHex(r), this.chunkSize = "number" != typeof e ? 2 * biHighIndex(this.m) : e / 8, 
    this.radix = 16, this.barrett = new BarrettMu(this.m);
}

function encryptedString(i, t, r, e) {
    var g, n, s, d, o, a, u, b, h, l, f = new Array(), c = t.length, x = "";
    for (d = "string" == typeof r ? r == RSAAPP.NoPadding ? 1 : r == RSAAPP.PKCS1Padding ? 2 : 0 : 0, 
    o = "string" == typeof e && e == RSAAPP.RawEncoding ? 1 : 0, 1 == d ? c > i.chunkSize && (c = i.chunkSize) : 2 == d && c > i.chunkSize - 11 && (c = i.chunkSize - 11), 
    g = 0, n = 2 == d ? c - 1 : i.chunkSize - 1; c > g; ) {
        d ? f[n] = t.charCodeAt(g) : f[g] = t.charCodeAt(g), g++, n--;
    }
    for (1 == d && (g = 0), n = i.chunkSize - c % i.chunkSize; n > 0; ) {
        if (2 == d) {
            for (a = Math.floor(256 * Math.random()); !a; ) {
                a = Math.floor(256 * Math.random());
            }
            f[g] = a;
        } else f[g] = 0;
        g++, n--;
    }
    for (2 == d && (f[c] = 0, f[i.chunkSize - 2] = 2, f[i.chunkSize - 1] = 0), u = f.length, 
    g = 0; u > g; g += i.chunkSize) {
        for (b = new BigInt(), n = 0, s = g; s < g + i.chunkSize; ++n) {
            b.digits[n] = f[s++], b.digits[n] += f[s++] << 8;
        }
        h = i.barrett.powMod(b, i.e), l = 1 == o ? biToBytes(h) : 16 == i.radix ? biToHex(h) : biToString(h, i.radix), 
        x += l;
    }
    return x;
}

function decryptedString(i, t) {
    var r, e, g, n, s = t.split(" "), d = "";
    for (e = 0; e < s.length; ++e) {
        for (n = 16 == i.radix ? biFromHex(s[e]) : biFromString(s[e], i.radix), r = i.barrett.powMod(n, i.d), 
        g = 0; g <= biHighIndex(r); ++g) {
            d += String.fromCharCode(255 & r.digits[g], r.digits[g] >> 8);
        }
    }
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d;
}

var biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1, biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998, maxDigits, ZERO_ARRAY, bigZero, bigOne;

setMaxDigits(20);

var dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535), RSAAPP = {};

RSAAPP.NoPadding = "NoPadding", RSAAPP.PKCS1Padding = "PKCS1Padding", RSAAPP.RawEncoding = "RawEncoding", 
RSAAPP.NumericEncoding = "NumericEncoding", module.exports = {
    setMaxDigits: setMaxDigits,
    RSAKeyPair: RSAKeyPair,
    encryptedString: encryptedString
};