Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("@babel/runtime/helpers/toConsumableArray.js"), s = require("@babel/runtime/helpers/createForOfIteratorHelper.js"), e = require("@babel/runtime/helpers/classCallCheck.js"), i = require("@babel/runtime/helpers/createClass.js"), h = require("C3BB1057ACE07ADFA5DD7850F570A2D7.js"), r = require("2EDAF0E4ACE07ADF48BC98E3C750A2D7.js"), o = function() {
    function o(t, s) {
        e(this, o), this.isMoving = !1, this.movingCache = {}, this.callbackInfo = {}, this.ctx = t, 
        this.data = s, this.globalWidth = {}, this.globalHeight = {};
    }
    return i(o, [ {
        key: "paint",
        value: function(t, e, i) {
            var h = this;
            this.style = {
                width: this.data.width.toPx(),
                height: this.data.height.toPx()
            }, e && (this.isMoving = !0, this.movingCache = i), this._background();
            var r, o = s(this.data.views);
            try {
                for (o.s(); !(r = o.n()).done; ) {
                    var c = r.value;
                    this._drawAbsolute(c);
                }
            } catch (t) {
                o.e(t);
            } finally {
                o.f();
            }
            this.ctx.draw(!1, function() {
                t && t(h.callbackInfo);
            });
        }
    }, {
        key: "_background",
        value: function() {
            this.ctx.save();
            var t = this.style, s = t.width, e = t.height, i = this.data.background;
            this.ctx.translate(s / 2, e / 2), this._doClip(this.data.borderRadius, s, e), i ? i.startsWith("#") || i.startsWith("rgba") || "transparent" === i.toLowerCase() ? (this.ctx.fillStyle = i, 
            this.ctx.fillRect(-s / 2, -e / 2, s, e)) : r.api.isGradient(i) ? (r.api.doGradient(i, s, e, this.ctx), 
            this.ctx.fillRect(-s / 2, -e / 2, s, e)) : this.ctx.drawImage(i, -s / 2, -e / 2, s, e) : (this.ctx.fillStyle = "transparent", 
            this.ctx.fillRect(-s / 2, -e / 2, s, e)), this.ctx.restore();
        }
    }, {
        key: "_drawAbsolute",
        value: function(s) {
            if (s && s.type) switch (s.css && s.css.length && (s.css = Object.assign.apply(Object, t(s.css))), 
            s.type) {
              case "image":
                this._drawAbsImage(s);
                break;

              case "text":
                this._fillAbsText(s);
                break;

              case "rect":
                this._drawAbsRect(s);
                break;

              case "qrcode":
                this._drawQRCode(s);
            }
        }
    }, {
        key: "_border",
        value: function(t) {
            var s = t.borderRadius, e = void 0 === s ? 0 : s, i = t.width, h = t.height, r = t.borderWidth, o = void 0 === r ? 0 : r, c = t.borderStyle, a = void 0 === c ? "solid" : c, l = 0, n = 0, d = 0, x = 0, g = Math.min(i, h);
            if (e) {
                var f = e.split(/\s+/);
                4 === f.length ? (l = Math.min(f[0].toPx(!1, g), i / 2, h / 2), n = Math.min(f[1].toPx(!1, g), i / 2, h / 2), 
                d = Math.min(f[2].toPx(!1, g), i / 2, h / 2), x = Math.min(f[3].toPx(!1, g), i / 2, h / 2)) : l = n = d = x = Math.min(e && e.toPx(!1, g), i / 2, h / 2);
            }
            var b = o && o.toPx(!1, g);
            this.ctx.lineWidth = b, "dashed" === a ? this.ctx.setLineDash([ 4 * b / 3, 4 * b / 3 ]) : "dotted" === a && this.ctx.setLineDash([ b, b ]);
            var u = "solid" !== a;
            this.ctx.beginPath(), u && 0 === l && this.ctx.moveTo(-i / 2 - b, -h / 2 - b / 2), 
            0 !== l && this.ctx.arc(-i / 2 + l, -h / 2 + l, l + b / 2, 1 * Math.PI, 1.5 * Math.PI), 
            this.ctx.lineTo(0 === n ? u ? i / 2 : i / 2 + b / 2 : i / 2 - n, -h / 2 - b / 2), 
            u && 0 === n && this.ctx.moveTo(i / 2 + b / 2, -h / 2 - b), 0 !== n && this.ctx.arc(i / 2 - n, -h / 2 + n, n + b / 2, 1.5 * Math.PI, 2 * Math.PI), 
            this.ctx.lineTo(i / 2 + b / 2, 0 === d ? u ? h / 2 : h / 2 + b / 2 : h / 2 - d), 
            u && 0 === d && this.ctx.moveTo(i / 2 + b, h / 2 + b / 2), 0 !== d && this.ctx.arc(i / 2 - d, h / 2 - d, d + b / 2, 0, .5 * Math.PI), 
            this.ctx.lineTo(0 === x ? u ? -i / 2 : -i / 2 - b / 2 : -i / 2 + x, h / 2 + b / 2), 
            u && 0 === x && this.ctx.moveTo(-i / 2 - b / 2, h / 2 + b), 0 !== x && this.ctx.arc(-i / 2 + x, h / 2 - x, x + b / 2, .5 * Math.PI, 1 * Math.PI), 
            this.ctx.lineTo(-i / 2 - b / 2, 0 === l ? u ? -h / 2 : -h / 2 - b / 2 : -h / 2 + l), 
            u && 0 === l && this.ctx.moveTo(-i / 2 - b, -h / 2 - b / 2), u || this.ctx.closePath();
        }
    }, {
        key: "_doClip",
        value: function(t, s, e, i) {
            t && s && e && (this.ctx.globalAlpha = 0, this.ctx.fillStyle = "white", this._border({
                borderRadius: t,
                width: s,
                height: e,
                borderStyle: i
            }), this.ctx.fill(), getApp().systemInfo && getApp().systemInfo.version <= "6.6.6" && "ios" === getApp().systemInfo.platform || this.ctx.clip(), 
            this.ctx.globalAlpha = 1);
        }
    }, {
        key: "_doBorder",
        value: function(t, s, e) {
            if (t.css) {
                var i = t.css, h = i.borderRadius, r = i.borderWidth, o = i.borderColor, c = i.borderStyle;
                r && (this.ctx.save(), this._preProcess(t, !0), this.ctx.strokeStyle = o || "black", 
                this._border({
                    borderRadius: h,
                    width: s,
                    height: e,
                    borderWidth: r,
                    borderStyle: c
                }), this.ctx.stroke(), this.ctx.restore());
            }
        }
    }, {
        key: "_preProcess",
        value: function(t, s) {
            var e, i, h, r, o = 0, c = this._doPaddings(t);
            switch (t.type) {
              case "text":
                for (var a = t.text.split("\n"), l = 0; l < a.length; ++l) "" === a[l] && (a[l] = " ");
                var n = "bold" === t.css.fontWeight ? "bold" : "normal", d = "italic" === t.css.textStyle ? "italic" : "normal";
                t.css.fontSize || (t.css.fontSize = "20rpx");
                var x = t.css.fontFamily || "PingFangSC-Regular";
                this.ctx.font = "".concat(d, " ").concat(n, " ").concat(t.css.fontSize.toPx(), 'px "').concat(x, '"');
                for (var g = 0, f = [], b = 0; b < a.length; ++b) {
                    var u = this.ctx.measureText(a[b]).width, v = t.css.fontSize.toPx() + c[1] + c[3], y = t.css.width ? t.css.width.toPx(!1, this.style.width) - c[1] - c[3] : u;
                    y < v && (y = v);
                    var p = Math.ceil(u / y);
                    o = y > o ? y : o, g += p, f[b] = p;
                }
                g = t.css.maxLines < g ? t.css.maxLines : g;
                var P = t.css.lineHeight ? t.css.lineHeight.toPx() : t.css.fontSize.toPx();
                e = P * g, i = {
                    lines: g,
                    lineHeight: P,
                    textArray: a,
                    linesArray: f
                };
                break;

              case "image":
                !(getApp().systemInfo.pixelRatio && getApp().systemInfo.pixelRatio <= 2) || getApp().systemInfo.pixelRatio, 
                t.css && (t.css.width || (t.css.width = "auto"), t.css.height || (t.css.height = "auto")), 
                !t.css || "auto" === t.css.width && "auto" === t.css.height ? (o = Math.round(t.sWidth / ratio), 
                e = Math.round(t.sHeight / ratio)) : "auto" === t.css.width ? (e = t.css.height.toPx(!1, this.style.height), 
                o = t.sWidth / t.sHeight * e) : "auto" === t.css.height ? (o = t.css.width.toPx(!1, this.style.width), 
                e = t.sHeight / t.sWidth * o) : (o = t.css.width.toPx(!1, this.style.width), e = t.css.height.toPx(!1, this.style.height));
                break;

              default:
                if (!t.css.width || !t.css.height) return void console.error("You should set width and height");
                o = t.css.width.toPx(!1, this.style.width), e = t.css.height.toPx(!1, this.style.height);
            }
            if (t.css && t.css.right) if ("string" == typeof t.css.right) h = this.style.width - t.css.right.toPx(!0, this.style.width); else {
                var w = t.css.right;
                h = this.style.width - w[0].toPx(!0, this.style.width) - this.globalWidth[w[1]] * (w[2] || 1);
            } else if (t.css && t.css.left) if ("string" == typeof t.css.left) h = t.css.left.toPx(!0, this.style.width); else {
                var m = t.css.left;
                h = m[0].toPx(!0, this.style.width) + this.globalWidth[m[1]] * (m[2] || 1);
            } else h = 0;
            if (t.css && t.css.bottom) r = this.style.height - e - t.css.bottom.toPx(!0, this.style.height); else if (t.css && t.css.top) if ("string" == typeof t.css.top) r = t.css.top.toPx(!0, this.style.height); else {
                var k = t.css.top;
                r = k[0].toPx(!0, this.style.height) + this.globalHeight[k[1]] * (k[2] || 1);
            } else r = 0;
            var _ = t.css && t.css.rotate ? this._getAngle(t.css.rotate) : 0, T = t.css && t.css.align ? t.css.align : t.css && t.css.right ? "right" : "left", S = t.css && t.css.verticalAlign ? t.css.verticalAlign : "top", A = 0;
            switch (T) {
              case "center":
                A = h;
                break;

              case "right":
                A = h - o / 2;
                break;

              default:
                A = h + o / 2;
            }
            var W = 0;
            switch (S) {
              case "center":
                W = r;
                break;

              case "bottom":
                W = r - e / 2;
                break;

              default:
                W = r + e / 2;
            }
            this.ctx.translate(A, W);
            var I = h;
            "center" === T ? I = h - o / 2 : "right" === T && (I = h - o);
            var M = r;
            return "center" === S ? M = r - e / 2 : "bottom" === S && (M = r - e), t.rect ? (t.rect.left = I, 
            t.rect.top = M, t.rect.right = I + o, t.rect.bottom = M + e, t.rect.x = t.css && t.css.right ? h - o : h, 
            t.rect.y = r) : t.rect = {
                left: I,
                top: M,
                right: I + o,
                bottom: M + e,
                x: t.css && t.css.right ? h - o : h,
                y: r
            }, t.rect.left = t.rect.left - c[3], t.rect.top = t.rect.top - c[0], t.rect.right = t.rect.right + c[1], 
            t.rect.bottom = t.rect.bottom + c[2], "text" === t.type && (t.rect.minWidth = t.css.fontSize.toPx() + c[1] + c[3]), 
            this.ctx.rotate(_), !s && t.css && t.css.borderRadius && "rect" !== t.type && this._doClip(t.css.borderRadius, o, e, t.css.borderStyle), 
            this._doShadow(t), t.id && (this.globalWidth[t.id] = o, this.globalHeight[t.id] = e), 
            {
                width: o,
                height: e,
                x: h,
                y: r,
                extra: i
            };
        }
    }, {
        key: "_doPaddings",
        value: function(t) {
            var s = t.css.padding, e = [ 0, 0, 0, 0 ];
            if (s) {
                var i = s.split(/\s+/);
                if (1 === i.length) {
                    var h = i[0].toPx();
                    e = [ h, h, h, h ];
                }
                if (2 === i.length) {
                    var r = i[0].toPx(), o = i[1].toPx();
                    e = [ r, o, r, o ];
                }
                if (3 === i.length) {
                    var c = i[0].toPx(), a = i[1].toPx();
                    e = [ c, a, i[2].toPx(), a ];
                }
                if (4 === i.length) e = [ i[0].toPx(), i[1].toPx(), i[2].toPx(), i[3].toPx() ];
            }
            return e;
        }
    }, {
        key: "_doBackground",
        value: function(t) {
            this.ctx.save();
            var s = this._preProcess(t, !0), e = s.width, i = s.height, h = t.css.background, o = this._doPaddings(t), c = e + o[1] + o[3], a = i + o[0] + o[2];
            this._doClip(t.css.borderRadius, c, a, t.css.borderStyle), r.api.isGradient(h) ? r.api.doGradient(h, c, a, this.ctx) : this.ctx.fillStyle = h, 
            this.ctx.fillRect(-c / 2, -a / 2, c, a), this.ctx.restore();
        }
    }, {
        key: "_drawQRCode",
        value: function(t) {
            this.ctx.save();
            var s = this._preProcess(t), e = s.width, i = s.height;
            h.api.draw(t.content, this.ctx, -e / 2, -i / 2, e, i, t.css.background, t.css.color), 
            this.ctx.restore(), this._doBorder(t, e, i);
        }
    }, {
        key: "_drawAbsImage",
        value: function(t) {
            if (t.url) {
                this.ctx.save();
                var s = this._preProcess(t), e = s.width, i = s.height, h = t.sWidth, r = t.sHeight, o = 0, c = 0, a = e / i;
                a >= t.sWidth / t.sHeight ? (r = h / a, c = Math.round((t.sHeight - r) / 2)) : (h = r * a, 
                o = Math.round((t.sWidth - h) / 2)), t.css && "scaleToFill" === t.css.mode ? this.ctx.drawImage(t.url, -e / 2, -i / 2, e, i) : (this.ctx.drawImage(t.url, o, c, h, r, -e / 2, -i / 2, e, i), 
                t.rect.startX = o / t.sWidth, t.rect.startY = c / t.sHeight, t.rect.endX = (o + h) / t.sWidth, 
                t.rect.endY = (c + r) / t.sHeight), this.ctx.restore(), this._doBorder(t, e, i);
            }
        }
    }, {
        key: "_fillAbsText",
        value: function(e) {
            if (e.text) {
                e.css.background && this._doBackground(e), this.ctx.save();
                var i = this._preProcess(e, e.css.background && e.css.borderRadius), h = i.width, r = i.height, o = i.extra;
                if (this.ctx.fillStyle = e.css.color || "black", this.isMoving && JSON.stringify(this.movingCache) !== JSON.stringify({})) {
                    this.globalWidth[e.id] = this.movingCache.globalWidth, this.ctx.setTextAlign(e.css.textAlign ? e.css.textAlign : "left");
                    var c, a = s(this.movingCache.lineArray);
                    try {
                        for (a.s(); !(c = a.n()).done; ) {
                            var l = c.value, n = l.measuredWith, d = l.text, x = l.x, g = l.y, f = l.textDecoration;
                            if ("stroke" === e.css.textStyle ? this.ctx.strokeText(d, x, g, n) : this.ctx.fillText(d, x, g, n), 
                            f) {
                                var b, u, v = e.css.fontSize.toPx();
                                this.ctx.lineWidth = v / 13, this.ctx.beginPath(), (b = this.ctx).moveTo.apply(b, t(f.moveTo)), 
                                (u = this.ctx).lineTo.apply(u, t(f.lineTo)), this.ctx.closePath(), this.ctx.strokeStyle = e.css.color, 
                                this.ctx.stroke();
                            }
                        }
                    } catch (t) {
                        a.e(t);
                    } finally {
                        a.f();
                    }
                } else {
                    var y = o.lines, p = (o.lineHeight, o.textArray), P = o.linesArray;
                    if (e.id) {
                        for (var w = 0, m = 0; m < p.length; ++m) {
                            var k = this.ctx.measureText(p[m]).width;
                            w = k > w ? k : w;
                        }
                        this.globalWidth[e.id] = h ? w < h ? w : h : w, this.isMoving || Object.assign(this.callbackInfo, {
                            globalWidth: this.globalWidth[e.id]
                        });
                    }
                    for (var _ = 0, T = 0; T < p.length; ++T) for (var S = Math.ceil(p[T].length / P[T]), A = 0, W = 0, I = 0; I < P[T] && !(_ >= y); ++I) {
                        W = S;
                        for (var M = p[T].substr(A, W), R = this.ctx.measureText(M).width; A + W <= p[T].length && (h - R > e.css.fontSize.toPx() || R - h > e.css.fontSize.toPx()); ) {
                            if (R < h) M = p[T].substr(A, ++W); else {
                                if (M.length <= 1) break;
                                M = p[T].substr(A, --W);
                            }
                            R = this.ctx.measureText(M).width;
                        }
                        if (A += M.length, _ === y - 1 && (T < p.length - 1 || A < p[T].length)) {
                            for (;this.ctx.measureText("".concat(M, "...")).width > h && !(M.length <= 1); ) M = M.substring(0, M.length - 1);
                            M += "...", R = this.ctx.measureText(M).width;
                        }
                        this.ctx.setTextAlign(e.css.textAlign ? e.css.textAlign : "left");
                        var C = void 0, H = void 0;
                        switch (e.css.textAlign) {
                          case "center":
                            H = (C = 0) - R / 2;
                            break;

                          case "right":
                            H = (C = h / 2) - R;
                            break;

                          default:
                            H = C = -h / 2;
                        }
                        var z = -r / 2 + (0 === _ ? e.css.fontSize.toPx() : e.css.fontSize.toPx() + _ * (e.css.lineHeight ? e.css.lineHeight.toPx() : e.css.fontSize.toPx()));
                        _++, "stroke" === e.css.textStyle ? this.ctx.strokeText(M, C, z, R) : this.ctx.fillText(M, C, z, R);
                        var D = e.css.fontSize.toPx(), O = void 0;
                        e.css.textDecoration && (this.ctx.lineWidth = D / 13, this.ctx.beginPath(), /\bunderline\b/.test(e.css.textDecoration) && (this.ctx.moveTo(H, z), 
                        this.ctx.lineTo(H + R, z), O = {
                            moveTo: [ H, z ],
                            lineTo: [ H + R, z ]
                        }), /\boverline\b/.test(e.css.textDecoration) && (this.ctx.moveTo(H, z - D), this.ctx.lineTo(H + R, z - D), 
                        O = {
                            moveTo: [ H, z - D ],
                            lineTo: [ H + R, z - D ]
                        }), /\bline-through\b/.test(e.css.textDecoration) && (this.ctx.moveTo(H, z - D / 3), 
                        this.ctx.lineTo(H + R, z - D / 3), O = {
                            moveTo: [ H, z - D / 3 ],
                            lineTo: [ H + R, z - D / 3 ]
                        }), this.ctx.closePath(), this.ctx.strokeStyle = e.css.color, this.ctx.stroke()), 
                        this.isMoving || (this.callbackInfo.lineArray ? this.callbackInfo.lineArray.push({
                            text: M,
                            x: C,
                            y: z,
                            measuredWith: R,
                            textDecoration: O
                        }) : this.callbackInfo.lineArray = [ {
                            text: M,
                            x: C,
                            y: z,
                            measuredWith: R,
                            textDecoration: O
                        } ]);
                    }
                }
                this.ctx.restore(), this._doBorder(e, h, r);
            }
        }
    }, {
        key: "_drawAbsRect",
        value: function(t) {
            this.ctx.save();
            var s = this._preProcess(t), e = s.width, i = s.height;
            r.api.isGradient(t.css.color) ? r.api.doGradient(t.css.color, e, i, this.ctx) : this.ctx.fillStyle = t.css.color;
            var h = t.css, o = h.borderRadius, c = h.borderStyle, a = h.borderWidth;
            this._border({
                borderRadius: o,
                width: e,
                height: i,
                borderWidth: a,
                borderStyle: c
            }), this.ctx.fill(), this.ctx.restore(), this._doBorder(t, e, i);
        }
    }, {
        key: "_doShadow",
        value: function(t) {
            if (t.css && t.css.shadow) {
                var s = t.css.shadow.replace(/,\s+/g, ",").split(/\s+/);
                s.length > 4 ? console.error("shadow don't spread option") : (this.ctx.shadowOffsetX = parseInt(s[0], 10), 
                this.ctx.shadowOffsetY = parseInt(s[1], 10), this.ctx.shadowBlur = parseInt(s[2], 10), 
                this.ctx.shadowColor = s[3]);
            }
        }
    }, {
        key: "_getAngle",
        value: function(t) {
            return Number(t) * Math.PI / 180;
        }
    } ]), o;
}();

exports.default = o;