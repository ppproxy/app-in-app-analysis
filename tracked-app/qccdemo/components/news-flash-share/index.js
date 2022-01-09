(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/news-flash-share/index" ], {
    "479d": function(t, e, i) {
        i.r(e);
        var a = i("d895"), d = i.n(a);
        for (var n in a) "default" !== n && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(n);
        e.default = d.a;
    },
    "5ef2": function(t, e, i) {
        i.r(e);
        var a = i("8d0a"), d = i("479d");
        for (var n in d) "default" !== n && function(t) {
            i.d(e, t, function() {
                return d[t];
            });
        }(n);
        i("8519");
        var o = i("f0c5"), s = Object(o.a)(d.default, a.b, a.c, !1, null, "281c39a8", null, !1, a.a, void 0);
        e.default = s.exports;
    },
    "661d": function(t, e, i) {},
    8519: function(t, e, i) {
        var a = i("661d");
        i.n(a).a;
    },
    "8d0a": function(t, e, i) {
        i.d(e, "b", function() {
            return a;
        }), i.d(e, "c", function() {
            return d;
        }), i.d(e, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, d = [];
    },
    d895: function(t, e, i) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(i("325c")), d = i("9f67");
            var n = {
                name: "news-flash-share",
                components: {},
                props: {
                    detail: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                data: function() {
                    return {
                        id: "",
                        name: "",
                        canvasWidth: 375,
                        canvasHeight: 700,
                        windowWidth: 375,
                        dataImage: "",
                        btnDataImage: "",
                        imageShareShow: !1,
                        sharePopupShow: !0,
                        btnCanvasWidth: 375,
                        btnCanvasHeight: 375
                    };
                },
                mounted: function() {
                    t.showToast({
                        title: "正在加载中...",
                        icon: "loading",
                        mask: !0,
                        duration: 1e3
                    });
                    var e = t.getSystemInfoSync();
                    this.isIPhoneX = e.model && e.model.indexOf("iPhone X") > -1, this.windowWidth = e.screenWidth, 
                    this.canvasWidth = a.default.rpxToPx(this.windowWidth, 660), this.canvasHeight = a.default.rpxToPx(this.windowWidth, 840), 
                    this.btnCanvasWidth = a.default.rpxToPx(this.windowWidth, 660), this.btnCanvasHeight = a.default.rpxToPx(this.windowWidth, 528), 
                    this.drawBtnCanvas();
                },
                methods: {
                    toImageShare: function() {
                        this.dataImage || this.drawCanvas(), this.imageShareShow || (this.sharePopupShow = !1, 
                        this.imageShareShow = !0);
                    },
                    showShareMenu: function(t) {},
                    cancelSave: function() {
                        this.imageShareShow && (this.$emit("hideSharePopup"), this.sharePopupShow = !1, 
                        this.imageShareShow = !1);
                    },
                    confirmSave: function() {
                        var e = this;
                        t.saveImageToPhotosAlbum({
                            filePath: this.dataImage,
                            success: function(t) {
                                a.default.toast("成功保存到相册"), e.cancelSave();
                            },
                            fail: function() {
                                a.default.toast("保存失败，请在小程序设置里查看是否已允许保存到相册"), e.cancelSave();
                            }
                        });
                    },
                    hideSharePopup: function(t) {
                        this.$emit("hideSharePopup");
                    },
                    drawBtnCanvas: function() {
                        var e = this, i = t.createCanvasContext("btn-share-canvas", this);
                        if (this.detail) {
                            var d, n = this.detail;
                            i.save(), i.beginPath(), i.setFillStyle("#F0F0F0"), i.fillRect(0, 0, this.canvasWidth, this.btnCanvasHeight), 
                            i.setFillStyle("#fff"), i.fillRect(a.default.rpxToPx(this.windowWidth, 15), a.default.rpxToPx(this.windowWidth, 15), this.canvasWidth - a.default.rpxToPx(this.windowWidth, 30), this.btnCanvasHeight - a.default.rpxToPx(this.windowWidth, 30)), 
                            i.setFontSize(a.default.rpxToPx(this.windowWidth, 36)), i.setTextBaseline("top"), 
                            i.setTextAlign("left"), i.font = "normal bold " + parseInt(a.default.rpxToPx(this.windowWidth, 38)) + "px sans-serif", 
                            i.setFillStyle("#333");
                            var o = 0;
                            2 === this.drawLineFeed(i, n.title, a.default.rpxToPx(this.windowWidth, 50), a.default.rpxToPx(this.windowWidth, 38), a.default.rpxToPx(this.windowWidth, 52), 2, !0) ? (d = a.default.rpxToPx(this.windowWidth, 174), 
                            o = 2) : (d = a.default.rpxToPx(this.windowWidth, 122), o = 1), i.draw(!0), i.font = "normal 200 " + parseInt(a.default.rpxToPx(this.windowWidth, 38)) + "px sans-serif", 
                            i.setFillStyle("#666");
                            var s = a.default.rpxToPx(this.windowWidth, 240);
                            switch (this.drawLineFeed(i, n.content.replace(/[  ]/g, ""), d, a.default.rpxToPx(this.windowWidth, 34), a.default.rpxToPx(this.windowWidth, 56), 4, !0)) {
                              case 1:
                                s = 2 === o ? a.default.rpxToPx(this.windowWidth, 240) : a.default.rpxToPx(this.windowWidth, 188);
                                break;

                              case 2:
                                s = 2 === o ? a.default.rpxToPx(this.windowWidth, 296) : a.default.rpxToPx(this.windowWidth, 240);
                                break;

                              case 3:
                                s = 2 === o ? a.default.rpxToPx(this.windowWidth, 352) : a.default.rpxToPx(this.windowWidth, 296);
                                break;

                              case 4:
                                s = 2 === o ? a.default.rpxToPx(this.windowWidth, 408) : a.default.rpxToPx(this.windowWidth, 352);
                            }
                            i.closePath(), i.restore(), i.draw(!0), i.font = "normal 200 " + parseInt(a.default.rpxToPx(this.windowWidth, 34)) + "px sans-serif", 
                            i.setTextBaseline("top"), i.setTextAlign("left"), i.setFillStyle("#128BED"), i.fillText("查查快讯", a.default.rpxToPx(this.windowWidth, 40), s), 
                            i.draw(!0), setTimeout(function() {
                                t.canvasToTempFilePath({
                                    x: 0,
                                    y: 0,
                                    width: e.canvasWidth,
                                    height: a.default.rpxToPx(e.windowWidth, 528),
                                    destWidth: 3 * e.canvasWidth,
                                    destHeight: 3 * a.default.rpxToPx(e.windowWidth, 528),
                                    canvasId: "btn-share-canvas",
                                    success: function(i) {
                                        e.btnDataImage = i.tempFilePath, t.hideToast(), e.$emit("setBtnDataImage", i.tempFilePath);
                                    }
                                }, e);
                            }, 300);
                        }
                    },
                    drawCanvas: function(e) {
                        var i = this;
                        t.showToast({
                            title: "正在生成中...",
                            icon: "loading",
                            mask: !0,
                            duration: 1e3
                        });
                        var n = t.createCanvasContext("share-canvas", this), o = 0, s = {
                            qcorde: "",
                            title: ""
                        }, h = function() {
                            if (2 === ++o && i.detail) {
                                var e = i.detail;
                                n.save(), n.beginPath(), n.setFillStyle("#fff"), n.fillRect(0, 0, i.canvasWidth, a.default.rpxToPx(i.windowWidth, 840)), 
                                n.drawImage(s.title, 0, 0, i.canvasWidth, a.default.rpxToPx(i.windowWidth, 184)), 
                                n.setFontSize(a.default.rpxToPx(i.windowWidth, 28)), n.setTextBaseline("top"), n.setTextAlign("left"), 
                                n.setFillStyle("#999");
                                var d, h = e.publish_time;
                                n.fillText(a.default.timestampToTime(h).substring(0, 16), a.default.rpxToPx(i.windowWidth, 32), a.default.rpxToPx(i.windowWidth, 212)), 
                                n.font = "normal bold " + parseInt(a.default.rpxToPx(i.windowWidth, 32)) + "px sans-serif", 
                                n.setFillStyle("#333");
                                var l = 0;
                                2 === i.drawLineFeed(n, e.title, a.default.rpxToPx(i.windowWidth, 272), a.default.rpxToPx(i.windowWidth, 33), a.default.rpxToPx(i.windowWidth, 44), 2) ? (d = a.default.rpxToPx(i.windowWidth, 380), 
                                l = 2) : (d = a.default.rpxToPx(i.windowWidth, 336), l = 1), n.draw(!0), n.font = "normal 200 " + parseInt(a.default.rpxToPx(i.windowWidth, 30)) + "px sans-serif", 
                                n.setFillStyle("#666");
                                var r = a.default.rpxToPx(i.windowWidth, 520);
                                switch (i.drawLineFeed(n, e.content.replace(/[  ]/g, ""), d, a.default.rpxToPx(i.windowWidth, 31), a.default.rpxToPx(i.windowWidth, 42), 3)) {
                                  case 1:
                                    r = 2 === l ? a.default.rpxToPx(i.windowWidth, 436) : a.default.rpxToPx(i.windowWidth, 392);
                                    break;

                                  case 2:
                                    r = 2 === l ? a.default.rpxToPx(i.windowWidth, 478) : a.default.rpxToPx(i.windowWidth, 434);
                                    break;

                                  case 3:
                                    r = 2 === l ? a.default.rpxToPx(i.windowWidth, 520) : a.default.rpxToPx(i.windowWidth, 476);
                                }
                                if (n.closePath(), n.restore(), n.draw(!0), e.entityList && e.entityList.length) {
                                    var w = e.entityList.map(function(t) {
                                        return t.name;
                                    });
                                    i.drawTags(n, r, a.default.rpxToPx(i.windowWidth, 46), w), n.draw(!0);
                                }
                                n.drawImage(s.qcorde, a.default.rpxToPx(i.windowWidth, 230), a.default.rpxToPx(i.windowWidth, 596), a.default.rpxToPx(i.windowWidth, 200), a.default.rpxToPx(i.windowWidth, 200)), 
                                n.draw(!0), setTimeout(function() {
                                    t.canvasToTempFilePath({
                                        x: 0,
                                        y: 0,
                                        width: i.canvasWidth,
                                        height: a.default.rpxToPx(i.windowWidth, 840),
                                        destWidth: 3 * i.canvasWidth,
                                        destHeight: 3 * a.default.rpxToPx(i.windowWidth, 840),
                                        canvasId: "share-canvas",
                                        success: function(e) {
                                            t.hideToast(), i.dataImage = e.tempFilePath;
                                        }
                                    }, i);
                                }, 300);
                            }
                        };
                        (0, d.createQRCode)({
                            page: "company-news/news-flash-detail/index",
                            scene: this.detail.id,
                            width: 400
                        }).then(function(e) {
                            var i;
                            i = e && 200 === e.status && e.result ? e.result : "https://share.qichacha.com/lite-app-resources/html/images/news-flash/qcorde.png", 
                            t.downloadFile({
                                url: i,
                                success: function(t) {
                                    200 === t.statusCode && (s.qcorde = t.tempFilePath, h());
                                }
                            });
                        }).catch(function() {}), t.downloadFile({
                            url: "https://share.qichacha.com/lite-app-resources/html/images/news-flash/share-title.png",
                            success: function(t) {
                                200 === t.statusCode && (s.title = t.tempFilePath, h());
                            }
                        });
                    },
                    roundRect: function(t, e, i, a, d, n) {
                        var o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "transparent";
                        a < 2 * n && (n = a / 2), d < 2 * n && (n = d / 2), t.beginPath(), t.fillStyle = o, 
                        t.arc(e + n, i + n, n, Math.PI, 1.5 * Math.PI), t.moveTo(e + n, i), t.lineTo(e + a - n, i), 
                        t.lineTo(e + a, i + n), t.arc(e + a - n, i + n, n, 1.5 * Math.PI, 2 * Math.PI), 
                        t.lineTo(e + a, i + d - n), t.lineTo(e + a - n, i + d), t.arc(e + a - n, i + d - n, n, 0, .5 * Math.PI), 
                        t.lineTo(e + n, i + d), t.lineTo(e, i + d - n), t.arc(e + n, i + d - n, n, .5 * Math.PI, Math.PI), 
                        t.lineTo(e, i + n), t.lineTo(e + n, i), t.fill(), t.closePath();
                    },
                    drawTags: function(t, e, i, d, n) {
                        var o = a.default.rpxToPx(this.windowWidth, 46), s = a.default.rpxToPx(this.windowWidth, 32), h = a.default.rpxToPx(this.windowWidth, 5), l = [], r = [];
                        n && (s = a.default.rpxToPx(this.windowWidth, 30)), t.setFontSize(a.default.rpxToPx(this.windowWidth, 24));
                        for (var w = 0; w < d.length; w++) l.push(t.measureText(d[w]).width + a.default.rpxToPx(this.windowWidth, 16)), 
                        0 === w ? r.push(s) : r.push(r[r.length - 1] + a.default.rpxToPx(this.windowWidth, 20) + t.measureText(d[w - 1]).width + a.default.rpxToPx(this.windowWidth, 16));
                        for (var f = 0; f < d.length; f++) r[f] + l[f] < a.default.rpxToPx(this.windowWidth, 600) && (this.roundRect(t, r[f], e, l[f], o, h, "#f3f3f3"), 
                        t.beginPath(), t.setFillStyle("#128BED"), t.setFontSize(a.default.rpxToPx(this.windowWidth, 24)), 
                        t.setTextBaseline("middle"), t.setTextAlign("center"), t.fillText(d[f], r[f] + l[f] / 2, e + o / 2), 
                        t.closePath());
                    },
                    drawLineFeed: function(t, e, i, d, n) {
                        for (var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 2, s = arguments.length > 6 ? arguments[6] : void 0, h = e.split(""), l = "", r = [], w = 0; w < h.length; w++) t.measureText(l).width < a.default.rpxToPx(this.windowWidth, 600) ? l += h[w] : (w--, 
                        r.push(l), l = "");
                        r.push(l);
                        var f = 0;
                        if (f = s ? a.default.rpxToPx(this.windowWidth, 580) : a.default.rpxToPx(this.windowWidth, 600), 
                        r.length > o) {
                            for (var u = r.slice(0, o), x = u[o - 1], c = "", p = [], T = 0; T < x.length && t.measureText(c).width < f - d; T++) c += x[T];
                            p.push(c);
                            var P = p[0] + "...";
                            u.splice(o - 1, 1, P), r = u;
                        }
                        for (var W = 0; W < r.length; W++) {
                            var v = 0;
                            v = s ? a.default.rpxToPx(this.windowWidth, 40) : a.default.rpxToPx(this.windowWidth, 32), 
                            t.fillText(r[W], v, i + W * n, f);
                        }
                        return r.length;
                    }
                }
            };
            e.default = n;
        }).call(this, i("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/news-flash-share/index-create-component", {
    "components/news-flash-share/index-create-component": function(t, e, i) {
        i("543d").createComponent(i("5ef2"));
    }
}, [ [ "components/news-flash-share/index-create-component" ] ] ]);