var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"), i = require("../../../@babel/runtime/helpers/toConsumableArray"), s = t(require("../../../BC47E9B1ACE07ADFDA2181B62860A2D7.js")), n = t(require("../../../DEF4C075ACE07ADFB892A8724A40A2D7.js")), o = require("../../../1E8CCD17ACE07ADF78EAA5102980A2D7.js"), r = new n.default();

function c(t, e) {
    String.prototype.toPx = function(i, s) {
        if ("0" === this) return 0;
        var n = (i ? /^-?[0-9]+([.]{1}[0-9]+){0,1}(rpx|px|%)$/g : /^[0-9]+([.]{1}[0-9]+){0,1}(rpx|px|%)$/g).exec(this);
        if (!this || !n) return console.error("The size: ".concat(this, " is illegal")), 
        0;
        var o = n[2], r = parseFloat(this), c = 0;
        return "rpx" === o ? c = Math.round(r * (t || .5) * (e || 1)) : "px" === o ? c = Math.round(r * (e || 1)) : "%" === o && (c = Math.round(r * s / 100)), 
        c;
    };
}

Component({
    canvasWidthInPx: 0,
    canvasHeightInPx: 0,
    paintCount: 0,
    currentPalette: {},
    movingCache: {},
    outterDisabled: !1,
    isDisabled: !1,
    needClear: !1,
    properties: {
        customStyle: {
            type: String
        },
        customActionStyle: {
            type: Object
        },
        palette: {
            type: Object,
            observer: function(t, e) {
                this.isNeedRefresh(t, e) && (this.paintCount = 0, this.startPaint());
            }
        },
        dancePalette: {
            type: Object,
            observer: function(t, e) {
                this.isEmpty(t) || this.initDancePalette(t);
            }
        },
        scaleRatio: {
            type: Number,
            value: 1
        },
        widthPixels: {
            type: Number,
            value: 0
        },
        dirty: {
            type: Boolean,
            value: !1
        },
        LRU: {
            type: Boolean,
            value: !0
        },
        action: {
            type: Object,
            observer: function(t, e) {
                var i = this;
                t && !this.isEmpty(t) && this.doAction(t, function(t) {
                    i.movingCache = t;
                }, !1, !0);
            }
        },
        disableAction: {
            type: Boolean,
            observer: function(t) {
                this.outterDisabled = t, this.isDisabled = t;
            }
        },
        clearActionBox: {
            type: Boolean,
            observer: function(t) {
                var e = this;
                t && !this.needClear && this.frontContext && (setTimeout(function() {
                    e.frontContext.draw();
                }, 100), this.touchedView = {}, this.prevFindedIndex = this.findedIndex, this.findedIndex = -1), 
                this.needClear = t;
            }
        }
    },
    data: {
        picURL: "",
        showCanvas: !0,
        painterStyle: ""
    },
    methods: {
        isEmpty: function(t) {
            for (var e in t) return !1;
            return !0;
        },
        isNeedRefresh: function(t, e) {
            return !(!t || this.isEmpty(t) || this.data.dirty && o.equal(t, e));
        },
        getBox: function(t, e) {
            var i = {
                type: "rect",
                css: {
                    height: "".concat(t.bottom - t.top, "px"),
                    width: "".concat(t.right - t.left, "px"),
                    left: "".concat(t.left, "px"),
                    top: "".concat(t.top, "px"),
                    borderWidth: "4rpx",
                    borderColor: "#1A7AF8",
                    color: "transparent"
                }
            };
            return "text" === e && (i.css = Object.assign({}, i.css, {
                borderStyle: "dashed"
            })), this.properties.customActionStyle && this.properties.customActionStyle.border && (i.css = Object.assign({}, i.css, this.properties.customActionStyle.border)), 
            Object.assign(i, {
                id: "box"
            }), i;
        },
        getScaleIcon: function(t, e) {
            var i = {}, s = this.properties.customActionStyle;
            return (i = s && s.scale ? {
                type: "image",
                url: "text" === e ? s.scale.textIcon : s.scale.imageIcon,
                css: {
                    height: "".concat(48, "rpx"),
                    width: "".concat(48, "rpx"),
                    borderRadius: "".concat(24, "rpx")
                }
            } : {
                type: "rect",
                css: {
                    height: "".concat(48, "rpx"),
                    width: "".concat(48, "rpx"),
                    borderRadius: "".concat(24, "rpx"),
                    color: "#0000ff"
                }
            }).css = Object.assign({}, i.css, {
                align: "center",
                left: "".concat(t.right + "2rpx".toPx(), "px"),
                top: "".concat("text" === e ? t.top - "2rpx".toPx() - i.css.height.toPx() / 2 : t.bottom - "2rpx".toPx() - i.css.height.toPx() / 2, "px")
            }), Object.assign(i, {
                id: "scale"
            }), i;
        },
        getDeleteIcon: function(t) {
            var e = {}, i = this.properties.customActionStyle;
            return (e = i && i.scale ? {
                type: "image",
                url: i.delete.icon,
                css: {
                    height: "".concat(48, "rpx"),
                    width: "".concat(48, "rpx"),
                    borderRadius: "".concat(24, "rpx")
                }
            } : {
                type: "rect",
                css: {
                    height: "".concat(48, "rpx"),
                    width: "".concat(48, "rpx"),
                    borderRadius: "".concat(24, "rpx"),
                    color: "#0000ff"
                }
            }).css = Object.assign({}, e.css, {
                align: "center",
                left: "".concat(t.left - "2rpx".toPx(), "px"),
                top: "".concat(t.top - "2rpx".toPx() - e.css.height.toPx() / 2, "px")
            }), Object.assign(e, {
                id: "delete"
            }), e;
        },
        doAction: function(t, e, s, n) {
            var o = this, c = null;
            if (t && (c = t.view), c && c.id && this.touchedView.id !== c.id) for (var a = this.currentPalette.views, h = 0; h < a.length; h++) if (a[h].id === c.id) {
                this.touchedView = a[h], this.findedIndex = h, this.sliceLayers();
                break;
            }
            var d = this.touchedView;
            d && !this.isEmpty(d) && (c && c.css && (n ? d.css = c.css : Array.isArray(d.css) && Array.isArray(c.css) ? d.css = Object.assign.apply(Object, [ {} ].concat(i(d.css), i(c.css))) : Array.isArray(d.css) ? d.css = Object.assign.apply(Object, [ {} ].concat(i(d.css), [ c.css ])) : Array.isArray(c.css) ? d.css = Object.assign.apply(Object, [ {}, d.css ].concat(i(c.css))) : d.css = Object.assign({}, d.css, c.css)), 
            c && c.rect && (d.rect = c.rect), c && c.url && d.url && c.url !== d.url ? r.download(c.url, this.properties.LRU).then(function(t) {
                c.url.startsWith("https") && (d.originUrl = c.url), d.url = t, wx.getImageInfo({
                    src: t,
                    success: function(t) {
                        d.sHeight = t.height, d.sWidth = t.width, o.reDraw(d, e, s);
                    },
                    fail: function() {
                        o.reDraw(d, e, s);
                    }
                });
            }).catch(function(t) {
                console.error(t), o.reDraw(d, e, s);
            }) : (c && c.text && d.text && c.text !== d.text && (d.text = c.text), c && c.content && d.content && c.content !== d.content && (d.content = c.content), 
            this.reDraw(d, e, s)));
        },
        reDraw: function(t, e, i) {
            var n = this, o = {
                width: this.currentPalette.width,
                height: this.currentPalette.height,
                views: this.isEmpty(t) ? [] : [ t ]
            }, r = new s.default(this.globalContext, o);
            i && "text" === t.type ? r.paint(function(t) {
                e && e(t), n.triggerEvent("viewUpdate", {
                    view: n.touchedView
                });
            }, !0, this.movingCache) : (i || this.isScale || r.paint(), r.paint(function(t) {
                e && e(t), n.triggerEvent("viewUpdate", {
                    view: n.touchedView
                });
            }));
            var c = t.rect, a = t.css, h = t.type;
            this.block = {
                width: this.currentPalette.width,
                height: this.currentPalette.height,
                views: this.isEmpty(t) ? [] : [ this.getBox(c, t.type) ]
            }, a && a.scalable && this.block.views.push(this.getScaleIcon(c, h)), a && a.deletable && this.block.views.push(this.getDeleteIcon(c)), 
            new s.default(this.frontContext, this.block).paint();
        },
        isInView: function(t, e, i) {
            return t > i.left && e > i.top && t < i.right && e < i.bottom;
        },
        isInDelete: function(t, i) {
            var s, n = e(this.block.views);
            try {
                for (n.s(); !(s = n.n()).done; ) {
                    var o = s.value;
                    if ("delete" === o.id) return t > o.rect.left && i > o.rect.top && t < o.rect.right && i < o.rect.bottom;
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                n.e(t);
            } finally {
                n.f();
            }
            return !1;
        },
        isInScale: function(t, i) {
            var s, n = e(this.block.views);
            try {
                for (n.s(); !(s = n.n()).done; ) {
                    var o = s.value;
                    if ("scale" === o.id) return t > o.rect.left && i > o.rect.top && t < o.rect.right && i < o.rect.bottom;
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                n.e(t);
            } finally {
                n.f();
            }
            return !1;
        },
        touchedView: {},
        findedIndex: -1,
        onClick: function() {
            for (var t = this.startX, e = this.startY, i = [], s = !1, n = -1, o = this.currentPalette.views.length - 1; o >= 0; o--) {
                var r = this.currentPalette.views[o], c = r.rect;
                if (this.touchedView && this.touchedView.id && this.touchedView.id === r.id && this.isInDelete(t, e, c)) {
                    i.length = 0, n = o, s = !0;
                    break;
                }
                this.isInView(t, e, c) && i.push({
                    view: r,
                    index: o
                });
            }
            if (this.touchedView = {}, 0 === i.length) this.findedIndex = -1; else {
                var a = 0, h = i.filter(function(t) {
                    return Boolean(t.view.id);
                });
                if (0 === h.length) this.findedIndex = i[0].index; else {
                    for (a = 0; a < h.length; a++) if (this.findedIndex === h[a].index) {
                        a++;
                        break;
                    }
                    a === h.length && (a = 0), this.touchedView = h[a].view, this.findedIndex = h[a].index, 
                    this.triggerEvent("viewClicked", {
                        view: this.touchedView
                    });
                }
            }
            this.findedIndex < 0 || this.touchedView && !this.touchedView.id ? (this.frontContext.draw(), 
            s ? (this.triggerEvent("touchEnd", {
                view: this.currentPalette.views[n],
                index: n,
                type: "delete"
            }), this.doAction()) : this.findedIndex < 0 && this.triggerEvent("viewClicked", {}), 
            this.findedIndex = -1, this.prevFindedIndex = -1) : this.touchedView && this.touchedView.id && this.sliceLayers();
        },
        sliceLayers: function() {
            var t = this, e = this.currentPalette.views.slice(0, this.findedIndex), i = this.currentPalette.views.slice(this.findedIndex + 1), n = {
                width: this.currentPalette.width,
                height: this.currentPalette.height,
                background: this.currentPalette.background,
                views: e
            }, o = {
                width: this.currentPalette.width,
                height: this.currentPalette.height,
                views: i
            };
            this.prevFindedIndex < this.findedIndex ? (new s.default(this.bottomContext, n).paint(), 
            this.doAction(null, function(e) {
                t.movingCache = e;
            }), new s.default(this.topContext, o).paint()) : (new s.default(this.topContext, o).paint(), 
            this.doAction(null, function(e) {
                t.movingCache = e;
            }), new s.default(this.bottomContext, n).paint()), this.prevFindedIndex = this.findedIndex;
        },
        startX: 0,
        startY: 0,
        startH: 0,
        startW: 0,
        isScale: !1,
        startTimeStamp: 0,
        onTouchStart: function(t) {
            if (!this.isDisabled) {
                var e = t.touches[0], i = e.x, s = e.y;
                if (this.startX = i, this.startY = s, this.startTimeStamp = new Date().getTime(), 
                this.touchedView && !this.isEmpty(this.touchedView)) {
                    var n = this.touchedView.rect;
                    this.isInScale(i, s, n) ? (this.isScale = !0, this.movingCache = {}, this.startH = n.bottom - n.top, 
                    this.startW = n.right - n.left) : this.isScale = !1;
                } else this.isScale = !1;
            }
        },
        onTouchEnd: function(t) {
            this.isDisabled || (new Date().getTime() - this.startTimeStamp <= 500 && !this.hasMove ? !this.isScale && this.onClick(t) : this.touchedView && !this.isEmpty(this.touchedView) && this.triggerEvent("touchEnd", {
                view: this.touchedView
            }), this.hasMove = !1);
        },
        onTouchCancel: function(t) {
            this.isDisabled || this.onTouchEnd(t);
        },
        hasMove: !1,
        onTouchMove: function(t) {
            var e = this;
            if (!this.isDisabled && (this.hasMove = !0, this.touchedView && (!this.touchedView || this.touchedView.id))) {
                var i = t.touches[0], s = i.x, n = i.y, o = s - this.startX, r = n - this.startY, c = this.touchedView, a = c.rect, h = c.type, d = {};
                if (this.isScale) {
                    var l = this.startW + o > 1 ? this.startW + o : 1;
                    if (this.touchedView.css && this.touchedView.css.minWidth && l < this.touchedView.css.minWidth.toPx()) return;
                    if (this.touchedView.rect && this.touchedView.rect.minWidth && l < this.touchedView.rect.minWidth) return;
                    var u = this.startH + r > 1 ? this.startH + r : 1;
                    d = {
                        width: "".concat(l, "px")
                    }, "text" !== h && (d.height = "".concat("image" === h ? l * this.startH / this.startW : u, "px"));
                } else this.startX = s, this.startY = n, d = {
                    left: "".concat(a.x + o, "px"),
                    top: "".concat(a.y + r, "px"),
                    right: void 0,
                    bottom: void 0
                };
                this.doAction({
                    view: {
                        css: d
                    }
                }, function(t) {
                    e.isScale && (e.movingCache = t);
                }, !this.isScale);
            }
        },
        initScreenK: function() {
            if (!(getApp() && getApp().systemInfo && getApp().systemInfo.screenWidth)) try {
                getApp().systemInfo = wx.getSystemInfoSync();
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return void console.error("Painter get system info failed, ".concat(JSON.stringify(t)));
            }
            this.screenK = .5, getApp() && getApp().systemInfo && getApp().systemInfo.screenWidth && (this.screenK = getApp().systemInfo.screenWidth / 750), 
            c(this.screenK, this.properties.scaleRatio);
        },
        initDancePalette: function() {
            var t = this;
            this.isDisabled = !0, this.initScreenK(), this.downloadImages(this.properties.dancePalette).then(function(e) {
                t.currentPalette = e;
                var i = e.width, n = e.height;
                i && n ? (t.setData({
                    painterStyle: "width:".concat(i.toPx(), "px;height:").concat(n.toPx(), "px;")
                }), t.frontContext || (t.frontContext = wx.createCanvasContext("front", t)), t.bottomContext || (t.bottomContext = wx.createCanvasContext("bottom", t)), 
                t.topContext || (t.topContext = wx.createCanvasContext("top", t)), t.globalContext || (t.globalContext = wx.createCanvasContext("k-canvas", t)), 
                new s.default(t.bottomContext, e).paint(function() {
                    t.isDisabled = !1, t.isDisabled = t.outterDisabled, t.triggerEvent("didShow");
                }), t.globalContext.draw(), t.frontContext.draw(), t.topContext.draw()) : console.error("You should set width and height correctly for painter, width: ".concat(i, ", height: ").concat(n));
            }), this.touchedView = {};
        },
        startPaint: function() {
            var t = this;
            this.initScreenK(), this.downloadImages(this.properties.palette).then(function(e) {
                var i = e.width, n = e.height;
                i && n ? (t.canvasWidthInPx = i.toPx(), t.properties.widthPixels && (c(t.screenK, t.properties.widthPixels / t.canvasWidthInPx), 
                t.canvasWidthInPx = t.properties.widthPixels), t.canvasHeightInPx = n.toPx(), t.setData({
                    photoStyle: "width:".concat(t.canvasWidthInPx, "px;height:").concat(t.canvasHeightInPx, "px;")
                }), t.photoContext || (t.photoContext = wx.createCanvasContext("photo", t)), new s.default(t.photoContext, e).paint(function() {
                    t.saveImgToLocal();
                }), c(t.screenK, t.properties.scaleRatio)) : console.error("You should set width and height correctly for painter, width: ".concat(i, ", height: ").concat(n));
            });
        },
        downloadImages: function(t) {
            var i = this;
            return new Promise(function(s, n) {
                var o = 0, c = 0, a = JSON.parse(JSON.stringify(t));
                if (a.background && (o++, r.download(a.background, i.properties.LRU).then(function(t) {
                    a.background = t, c++, o === c && s(a);
                }, function() {
                    c++, o === c && s(a);
                })), a.views) {
                    var h, d = e(a.views);
                    try {
                        var l = function() {
                            var t = h.value;
                            t && "image" === t.type && t.url && (o++, r.download(t.url, i.properties.LRU).then(function(e) {
                                t.originUrl = t.url, t.url = e, wx.getImageInfo({
                                    src: e,
                                    success: function(e) {
                                        t.sWidth = e.width, t.sHeight = e.height;
                                    },
                                    fail: function(e) {
                                        t.url = "", console.error("getImageInfo ".concat(t.url, " failed, ").concat(JSON.stringify(e)));
                                    },
                                    complete: function() {
                                        c++, o === c && s(a);
                                    }
                                });
                            }, function() {
                                c++, o === c && s(a);
                            }));
                        };
                        for (d.s(); !(h = d.n()).done; ) l();
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        d.e(t);
                    } finally {
                        d.f();
                    }
                }
                0 === o && s(a);
            });
        },
        saveImgToLocal: function() {
            var t = this, e = this;
            setTimeout(function() {
                wx.canvasToTempFilePath({
                    canvasId: "photo",
                    destWidth: e.canvasWidthInPx,
                    destHeight: e.canvasHeightInPx,
                    success: function(t) {
                        e.getImageInfo(t.tempFilePath);
                    },
                    fail: function(t) {
                        console.error("canvasToTempFilePath failed, ".concat(JSON.stringify(t))), e.triggerEvent("imgErr", {
                            error: t
                        });
                    }
                }, t);
            }, 300);
        },
        getImageInfo: function(t) {
            var e = this;
            wx.getImageInfo({
                src: t,
                success: function(i) {
                    if (e.paintCount > 5) {
                        var s = "The result is always fault, even we tried ".concat(5, " times");
                        return console.error(s), void e.triggerEvent("imgErr", {
                            error: s
                        });
                    }
                    Math.abs((i.width * e.canvasHeightInPx - e.canvasWidthInPx * i.height) / (i.height * e.canvasHeightInPx)) < .01 ? e.triggerEvent("imgOK", {
                        path: t
                    }) : e.startPaint(), e.paintCount++;
                },
                fail: function(t) {
                    console.error("getImageInfo failed, ".concat(JSON.stringify(t))), e.triggerEvent("imgErr", {
                        error: t
                    });
                }
            });
        }
    }
});