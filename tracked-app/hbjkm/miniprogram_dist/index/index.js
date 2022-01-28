var t = Object.assign || function(t) {
    for (var i = 1; i < arguments.length; i++) {
        var e = arguments[i];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
}, i = {
    drawBlock: function(t) {
        var i = t.text, e = t.width, o = void 0 === e ? 0 : e, s = t.height, n = t.x, r = t.y, h = t.paddingLeft, a = void 0 === h ? 0 : h, c = t.paddingRight, x = void 0 === c ? 0 : c, l = t.borderWidth, u = t.backgroundColor, d = t.borderColor, f = t.borderRadius, g = void 0 === f ? 0 : f, P = t.opacity, v = void 0 === P ? 1 : P, p = 0, m = 0, w = 0;
        if (void 0 !== i) {
            var b = this._getTextWidth("string" == typeof i.text ? i : i.text);
            p = b > o ? b : o, p += a + a;
            var I = i.textAlign, y = void 0 === I ? "left" : I;
            i.text;
            w = s / 2 + r, m = "left" === y ? n + a : "center" === y ? p / 2 + n : n + p - x;
        } else p = o;
        u && (this.ctx.save(), this.ctx.setGlobalAlpha(v), this.ctx.setFillStyle(u), g > 0 ? (this._drawRadiusRect(n, r, p, s, g), 
        this.ctx.fill()) : this.ctx.fillRect(this.toPx(n), this.toPx(r), this.toPx(p), this.toPx(s)), 
        this.ctx.restore()), l && (this.ctx.save(), this.ctx.setGlobalAlpha(v), this.ctx.setStrokeStyle(d), 
        this.ctx.setLineWidth(this.toPx(l)), g > 0 ? (this._drawRadiusRect(n, r, p, s, g), 
        this.ctx.stroke()) : this.ctx.strokeRect(this.toPx(n), this.toPx(r), this.toPx(p), this.toPx(s)), 
        this.ctx.restore()), i && this.drawText(Object.assign(i, {
            x: m,
            y: w
        }));
    },
    drawText: function(i) {
        var e = this, o = i.x, s = i.y, n = (i.fontSize, i.color, i.baseLine), r = (i.textAlign, 
        i.text);
        i.opacity, i.width, i.lineNum, i.lineHeight;
        if ("[object Array]" === Object.prototype.toString.call(r)) {
            var h = {
                x: o,
                y: s,
                baseLine: n
            };
            r.forEach(function(i) {
                h.x += i.marginLeft || 0;
                var o = e._drawSingleText(Object.assign(i, t({}, h)));
                h.x += o + (i.marginRight || 0);
            });
        } else this._drawSingleText(i);
    },
    drawImage: function(t) {
        var i = t.imgPath, e = t.x, o = t.y, s = t.w, n = t.h, r = t.sx, h = t.sy, a = t.sw, c = t.sh, x = t.borderRadius, l = void 0 === x ? 0 : x, u = t.borderWidth, d = void 0 === u ? 0 : u, f = t.borderColor;
        this.ctx.save(), l > 0 ? (this._drawRadiusRect(e, o, s, n, l), this.ctx.strokeStyle = "rgba(255,255,255,0)", 
        this.ctx.stroke(), this.ctx.clip(), this.ctx.drawImage(i, this.toPx(r), this.toPx(h), this.toPx(a), this.toPx(c), this.toPx(e), this.toPx(o), this.toPx(s), this.toPx(n)), 
        d > 0 && (this.ctx.setStrokeStyle(f), this.ctx.setLineWidth(this.toPx(d)), this.ctx.stroke())) : this.ctx.drawImage(i, this.toPx(r), this.toPx(h), this.toPx(a), this.toPx(c), this.toPx(e), this.toPx(o), this.toPx(s), this.toPx(n)), 
        this.ctx.restore();
    },
    drawLine: function(t) {
        var i = t.startX, e = t.startY, o = t.endX, s = t.endY, n = t.color, r = t.width;
        this.ctx.save(), this.ctx.beginPath(), this.ctx.setStrokeStyle(n), this.ctx.setLineWidth(this.toPx(r)), 
        this.ctx.moveTo(this.toPx(i), this.toPx(e)), this.ctx.lineTo(this.toPx(o), this.toPx(s)), 
        this.ctx.stroke(), this.ctx.closePath(), this.ctx.restore();
    },
    downloadResource: function(t) {
        var i = this, e = t.images, o = void 0 === e ? [] : e, s = t.pixelRatio, n = void 0 === s ? 1 : s, r = [];
        return this.drawArr = [], o.forEach(function(t, e) {
            return r.push(i._downloadImageAndInfo(t, e, n));
        }), Promise.all(r);
    },
    initCanvas: function(t, i, e) {
        var o = this;
        return new Promise(function(s) {
            o.setData({
                pxWidth: o.toPx(t),
                pxHeight: o.toPx(i),
                debug: e
            }, s);
        });
    }
}, e = {
    _drawRadiusRect: function(t, i, e, o, s) {
        var n = s / 2;
        this.ctx.beginPath(), this.ctx.moveTo(this.toPx(t + n), this.toPx(i)), this.ctx.lineTo(this.toPx(t + e - n), this.toPx(i)), 
        this.ctx.arc(this.toPx(t + e - n), this.toPx(i + n), this.toPx(n), 2 * Math.PI * .75, 2 * Math.PI * 1), 
        this.ctx.lineTo(this.toPx(t + e), this.toPx(i + o - n)), this.ctx.arc(this.toPx(t + e - n), this.toPx(i + o - n), this.toPx(n), 0, 2 * Math.PI * .25), 
        this.ctx.lineTo(this.toPx(t + n), this.toPx(i + o)), this.ctx.arc(this.toPx(t + n), this.toPx(i + o - n), this.toPx(n), 2 * Math.PI * .25, 2 * Math.PI * .5), 
        this.ctx.lineTo(this.toPx(t), this.toPx(i + n)), this.ctx.arc(this.toPx(t + n), this.toPx(i + n), this.toPx(n), 2 * Math.PI * .5, 2 * Math.PI * .75);
    },
    _getTextWidth: function(t) {
        var i = this, e = [];
        "[object Object]" === Object.prototype.toString.call(t) ? e.push(t) : e = t;
        var o = 0;
        return e.forEach(function(t) {
            var e = t.fontSize, s = t.text, n = t.marginLeft, r = void 0 === n ? 0 : n, h = t.marginRight, a = void 0 === h ? 0 : h;
            i.ctx.setFontSize(i.toPx(e)), o += i.ctx.measureText(s).width + r + a;
        }), this.toRpx(o);
    },
    _drawSingleText: function(t) {
        var i = this, e = t.x, o = t.y, s = t.fontSize, n = t.color, r = t.baseLine, h = t.textAlign, a = void 0 === h ? "left" : h, c = t.text, x = t.opacity, l = void 0 === x ? 1 : x, u = t.textDecoration, d = void 0 === u ? "none" : u, f = t.width, g = t.lineNum, P = void 0 === g ? 1 : g, v = t.lineHeight, p = void 0 === v ? 0 : v, m = t.fontWeight, w = void 0 === m ? "normal" : m, b = t.fontStyle, I = void 0 === b ? "normal" : b, y = t.fontFamily, T = void 0 === y ? "sans-serif" : y;
        this.ctx.save(), this.ctx.beginPath(), this.ctx.font = I + " " + w + " " + this.toPx(s, !0) + "px " + T, 
        this.ctx.setGlobalAlpha(l), this.ctx.setFillStyle(n), this.ctx.setTextBaseline(r), 
        this.ctx.setTextAlign(a);
        var S = this.toRpx(this.ctx.measureText(c).width), R = [];
        if (S > f) {
            for (var A = "", _ = 1, k = 0; k <= c.length - 1; k++) A += c[k], this.toRpx(this.ctx.measureText(A).width) >= f ? (_ === P && k !== c.length - 1 && (A = A.substring(0, A.length - 1) + "..."), 
            _ <= P && R.push(A), A = "", _++) : _ <= P && k === c.length - 1 && R.push(A);
            S = f;
        } else R.push(c);
        if (R.forEach(function(t, n) {
            i.ctx.fillText(t, i.toPx(e), i.toPx(o + (p || s) * n));
        }), this.ctx.restore(), "none" !== d) {
            var z = o;
            if ("line-through" === d) {
                z = o;
                switch (r) {
                  case "top":
                    z += s / 2 + 5;
                    break;

                  case "middle":
                    break;

                  case "bottom":
                    z -= s / 2 + 5;
                    break;

                  default:
                    z -= s / 2 - 5;
                }
            }
            this.ctx.save(), this.ctx.moveTo(this.toPx(e), this.toPx(z)), this.ctx.lineTo(this.toPx(e) + this.toPx(S), this.toPx(z)), 
            this.ctx.setStrokeStyle(n), this.ctx.stroke(), this.ctx.restore();
        }
        return S;
    }
}, o = {
    _downloadImageAndInfo: function(t, i, e) {
        var o = this;
        return new Promise(function(s, n) {
            var r = t.x, h = t.y, a = t.url, c = t.zIndex, x = a;
            o._downImage(x, i).then(function(e) {
                return o._getImageInfo(e, i, t.type);
            }).then(function(n) {
                var a = n.imgPath, x = n.imgInfo;
                console.log(a, x);
                var l = void 0, u = void 0, d = t.borderRadius || 0, f = t.width, g = t.height, P = o.toRpx(x.width / e), v = o.toRpx(x.height / e);
                P / v <= f / g ? (l = 0, u = (v - P / f * g) / 2) : (u = 0, l = (P - v / g * f) / 2), 
                o.drawArr.push({
                    type: "image",
                    borderRadius: d,
                    borderWidth: t.borderWidth,
                    borderColor: t.borderColor,
                    zIndex: void 0 !== c ? c : i,
                    imgPath: a,
                    sx: l,
                    sy: u,
                    sw: P - 2 * l,
                    sh: v - 2 * u,
                    x: r,
                    y: h,
                    w: f,
                    h: g
                }), s();
            }).catch(function(t) {
                return n(t);
            });
        });
    },
    _downImage: function(t) {
        var i = this;
        return new Promise(function(e, o) {
            /^http/.test(t) && !new RegExp(wx.env.USER_DATA_PATH).test(t) ? wx.downloadFile({
                url: i._mapHttpToHttps(t),
                success: function(t) {
                    200 === t.statusCode ? e(t.tempFilePath) : o(t.errMsg);
                },
                fail: function(t) {
                    o(t);
                }
            }) : e(t);
        });
    },
    _getImageInfo: function(t, i, e) {
        if (console.log(t), "url" == e) return this._getImageInfoUrl(t, i);
        if ("base64" == e) {
            var o = wx.getFileSystemManager(), s = wx.env.USER_DATA_PATH + "/image_name" + Date.now() + ".png";
            return new Promise(function(i, e) {
                o.writeFile({
                    filePath: s,
                    data: t,
                    encoding: "base64",
                    success: function(t) {
                        i(s);
                    }
                });
            }).then(function(t) {
                return new Promise(function(e, o) {
                    wx.getImageInfo({
                        src: t,
                        success: function(o) {
                            console.log(o), e({
                                imgPath: t,
                                imgInfo: o,
                                index: i
                            });
                        },
                        fail: function(t) {
                            o(t);
                        }
                    });
                });
            });
        }
    },
    _getImageInfoUrl: function(t, i) {
        return console.log(t), new Promise(function(e, o) {
            wx.getImageInfo({
                src: t,
                success: function(t) {
                    console.log(t), e({
                        imgPath: t.path,
                        imgInfo: t,
                        index: i
                    });
                },
                fail: function(t) {
                    o(t);
                }
            });
        });
    },
    writePhotosAlbum: function(t) {
        var i = this;
        wx.getSetting({
            success: function(e) {
                e.authSetting["scope.writePhotosAlbum"] ? i.saveImg(t) : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        i.saveImg(t);
                    },
                    fail: function(t) {
                        console.log(t), wx.showModal({
                            title: "保存失败",
                            content: "请开启访问手机相册权限",
                            success: function(t) {
                                wx.openSetting();
                            }
                        });
                    }
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    saveImg: function(t) {
        wx.saveImageToPhotosAlbum({
            filePath: t,
            success: function(t) {
                console.log(t), wx.showToast({
                    title: "已保存到相册"
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    toPx: function(t, i) {
        return i ? parseInt(t * this.factor * this.pixelRatio) : t * this.factor * this.pixelRatio;
    },
    toRpx: function(t, i) {
        return i ? parseInt(t / this.factor) : t / this.factor;
    },
    _mapHttpToHttps: function(t) {
        if (t.indexOf(":") < 0) return t;
        var i = t.split(":");
        return 2 === i.length && "http" === i[0] ? (i[0] = "https", i[0] + ":" + i[1]) : t;
    }
};

Component({
    properties: {},
    created: function() {
        var t = wx.getSystemInfoSync().screenWidth;
        this.factor = t / 750;
    },
    methods: Object.assign({
        getHeight: function(i) {
            var e = function(t) {
                var i = t.lineHeight || t.fontSize;
                return "top" === t.baseLine ? i : "middle" === t.baseLine ? i / 2 : 0;
            }, o = [];
            (i.blocks || []).forEach(function(t) {
                o.push(t.y + t.height);
            }), (i.texts || []).forEach(function(i) {
                var s = void 0;
                "[object Array]" === Object.prototype.toString.call(i.text) ? i.text.forEach(function(n) {
                    s = e(t({}, n, {
                        baseLine: i.baseLine
                    })), o.push(i.y + s);
                }) : (s = e(i), o.push(i.y + s));
            }), (i.images || []).forEach(function(t) {
                o.push(t.y + t.height);
            }), (i.lines || []).forEach(function(t) {
                o.push(t.startY), o.push(t.endY);
            });
            var s = o.sort(function(t, i) {
                return i - t;
            }), n = 0;
            return s.length > 0 && (n = s[0]), i.height < n || !i.height ? n : i.height;
        },
        create: function(t) {
            var i = this;
            this.ctx = wx.createCanvasContext("canvasid", this), this.pixelRatio = t.pixelRatio || 1;
            var e = this.getHeight(t);
            this.initCanvas(t.width, e, t.debug).then(function() {
                t.backgroundColor && (i.ctx.save(), i.ctx.setFillStyle(t.backgroundColor), i.ctx.fillRect(0, 0, i.toPx(t.width), i.toPx(e)), 
                i.ctx.restore());
                var o = t.texts, s = void 0 === o ? [] : o, n = (t.images, t.blocks), r = void 0 === n ? [] : n, h = t.lines, a = void 0 === h ? [] : h, c = i.drawArr.concat(s.map(function(t) {
                    return t.type = "text", t.zIndex = t.zIndex || 0, t;
                })).concat(r.map(function(t) {
                    return t.type = "block", t.zIndex = t.zIndex || 0, t;
                })).concat(a.map(function(t) {
                    return t.type = "line", t.zIndex = t.zIndex || 0, t;
                }));
                c.sort(function(t, i) {
                    return t.zIndex - i.zIndex;
                }), c.forEach(function(t) {
                    "image" === t.type ? i.drawImage(t) : "text" === t.type ? i.drawText(t) : "block" === t.type ? i.drawBlock(t) : "line" === t.type && i.drawLine(t);
                });
                var x = 0;
                "android" === wx.getSystemInfoSync().platform && (x = 300), i.ctx.draw(!1, function() {
                    setTimeout(function() {
                        wx.canvasToTempFilePath({
                            canvasId: "canvasid",
                            success: function(t) {
                                i.writePhotosAlbum(t.tempFilePath);
                            },
                            fail: function(t) {
                                i.triggerEvent("fail", t);
                            }
                        }, i);
                    }, x);
                });
            }).catch(function(t) {
                wx.showToast({
                    icon: "none",
                    title: t.errMsg || "生成失败"
                }), console.error(t);
            });
        }
    }, i, e, o)
});