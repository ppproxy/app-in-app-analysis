(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ksp-image-cutter/ksp-image-cutter" ], {
    211: function(t, e, i) {
        i.r(e);
        var h = i(212), a = i(214);
        for (var s in a) "default" !== s && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(s);
        i(216);
        var r = i(8), m = Object(r.default)(a.default, h.render, h.staticRenderFns, !1, null, "4e360878", null, !1, h.components, void 0);
        m.options.__file = "components/ksp-image-cutter/ksp-image-cutter.vue", e.default = m.exports;
    },
    212: function(t, e, i) {
        i.r(e);
        var h = i(213);
        i.d(e, "render", function() {
            return h.render;
        }), i.d(e, "staticRenderFns", function() {
            return h.staticRenderFns;
        }), i.d(e, "recyclableRender", function() {
            return h.recyclableRender;
        }), i.d(e, "components", function() {
            return h.components;
        });
    },
    213: function(t, e, i) {
        i.r(e), i.d(e, "render", function() {
            return a;
        }), i.d(e, "staticRenderFns", function() {
            return r;
        }), i.d(e, "recyclableRender", function() {
            return s;
        }), i.d(e, "components", function() {
            return h;
        });
        var h, a = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, s = !1, r = [];
        a._withStripped = !0;
    },
    214: function(t, e, i) {
        i.r(e);
        var h = i(215), a = i.n(h);
        for (var s in h) "default" !== s && function(t) {
            i.d(e, t, function() {
                return h[t];
            });
        }(s);
        e.default = a.a;
    },
    215: function(t, e, i) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                props: {
                    url: {
                        type: String,
                        default: ""
                    },
                    fixed: {
                        type: Boolean,
                        default: !1
                    },
                    width: {
                        type: Number,
                        default: 200
                    },
                    height: {
                        type: Number,
                        default: 200
                    },
                    maxWidth: {
                        type: Number,
                        default: 1024
                    },
                    maxHeight: {
                        type: Number,
                        default: 1024
                    },
                    blob: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        mask: {
                            show: !1
                        },
                        frame: {
                            left: 50,
                            top: 50,
                            width: this.width,
                            height: this.height
                        },
                        image: {
                            left: 20,
                            top: 20,
                            width: 300,
                            height: 400
                        },
                        real: {
                            width: 100,
                            height: 100
                        },
                        target: {
                            width: this.width,
                            height: this.height
                        },
                        touches: [],
                        type: "",
                        start: {
                            frame: {
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0
                            },
                            image: {
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0
                            }
                        },
                        timeoutId: -1,
                        context: null
                    };
                },
                mounted: function() {
                    this.context = t.createCanvasContext("canvas", this), this.targetContext = t.createCanvasContext("target", this);
                },
                methods: {
                    imageLoad: function(e) {
                        var i = this;
                        this.mask.show = !0, this.real.width = e.detail.width, this.real.height = e.detail.height, 
                        this.image.width = e.detail.width, this.image.height = e.detail.height, this.frame.width = this.width, 
                        this.frame.height = this.height, this.fixed || (this.frame.width = this.image.width, 
                        this.frame.height = this.image.height), t.createSelectorQuery().in(this).select(".body").boundingClientRect(function(t) {
                            var e = t.width, h = t.height, a = i.frame.width, s = i.frame.height, r = .8 * e, m = .8 * h, n = r / a, o = m / s, f = n;
                            n < o && (f = o);
                            var g = (e - (r = a * f)) / 2, c = (h - (m = s * f)) / 2;
                            i.frame.width = r, i.frame.height = m, i.frame.left = g, i.frame.top = c;
                            var l = i.image.width, d = i.image.height;
                            f = n = r / l, n < (o = m / d) && (f = o), i.image.width = l * f, i.image.height = d * f, 
                            i.image.left = (e - i.image.width) / 2, i.image.top = (h - i.image.height) / 2, 
                            setTimeout(function() {
                                i.trimImage();
                            }, 100);
                        }).exec();
                    },
                    touchHandle: function() {},
                    touchStart: function(t, e) {
                        this.stopTime(), this.mask.show = !1, 0 == this.touches.length && (this.type = e, 
                        this.start.frame.left = this.frame.left, this.start.frame.top = this.frame.top, 
                        this.start.frame.width = this.frame.width, this.start.frame.height = this.frame.height, 
                        this.start.image.left = this.image.left, this.start.image.top = this.image.top, 
                        this.start.image.width = this.image.width, this.start.image.height = this.image.height);
                        for (var i = t.changedTouches, h = 0; h < i.length; h++) {
                            var a = i[h];
                            this.touches.push(a);
                        }
                    },
                    touchMove: function(t) {
                        this.stopTime(), t.preventDefault();
                        var e = t.touches;
                        if (1 == this.touches.length) "plank" == this.type || "frame" == this.type || this.fixed ? this.moveImage(this.touches[0], e[0]) : this.scaleFrame(this.touches[0], e[0], this.type); else if (2 == this.touches.length && 2 == e.length) {
                            var i = this.touches[0], h = this.touches[1], a = e[0], s = e[1];
                            if (i.identifier != a.identifier) {
                                var r = a;
                                a = s, s = r;
                            }
                            this.scaleImage(i, h, a, s);
                        }
                    },
                    touchEnd: function(t) {
                        this.type = "", this.touches = [], this.startTime();
                    },
                    touchCancel: function(t) {
                        this.type = "", this.touches = [], this.startTime();
                    },
                    startTime: function() {
                        var t = this;
                        this.stopTime(), this.timeoutId = setTimeout(function() {
                            t.trimImage();
                        }, 800);
                    },
                    stopTime: function() {
                        this.timeoutId >= 0 && (clearTimeout(this.timeoutId), this.timeoutId = -1);
                    },
                    trimImage: function() {
                        var e = this;
                        this.mask.show = !0, t.createSelectorQuery().in(this).select(".body").boundingClientRect(function(t) {
                            var i = t.width, h = t.height, a = e.frame.width, s = e.frame.height, r = .8 * i, m = .8 * h, n = r / a, o = m / s, f = n;
                            n > o && (f = o);
                            var g = (i - (r = a * f)) / 2, c = (h - (m = s * f)) / 2, l = g - e.frame.left + (e.frame.left - e.image.left) * (1 - f), d = c - e.frame.top + (e.frame.top - e.image.top) * (1 - f);
                            e.frame.width = r, e.frame.height = m, e.frame.left = g, e.frame.top = c, e.image.width *= f, 
                            e.image.height *= f, e.image.left += l, e.image.top += d;
                        }).exec(), setTimeout(function() {
                            var t = e.image.width / e.real.width, i = (e.frame.left - e.image.left) / t, h = (e.frame.top - e.image.top) / t, a = e.frame.width / t, s = e.frame.height / t;
                            e.context.drawImage(e.url, i, h, a, s, 0, 0, e.frame.width, e.frame.height), e.context.draw(!1);
                        }, 100);
                    },
                    moveImage: function(t, e) {
                        var i = e.clientX - t.clientX, h = e.clientY - t.clientY;
                        this.image.left = this.start.image.left + i, this.image.top = this.start.image.top + h, 
                        this.image.left > this.frame.left && (this.image.left = this.frame.left), this.image.top > this.frame.top && (this.image.top = this.frame.top), 
                        this.image.left + this.image.width < this.frame.left + this.frame.width && (this.image.left = this.frame.left + this.frame.width - this.image.width), 
                        this.image.top + this.image.height < this.frame.top + this.frame.height && (this.image.top = this.frame.top + this.frame.height - this.image.height);
                    },
                    scaleImage: function(t, e, i, h) {
                        var a = t.clientX, s = t.clientY, r = e.clientX, m = e.clientY, n = i.clientX, o = i.clientY, f = h.clientX, g = h.clientY, c = Math.sqrt((a - r) * (a - r) + (s - m) * (s - m)), l = (a + r) / 2, d = (s + m) / 2, u = (n + f) / 2 - l, p = (o + g) / 2 - d, w = Math.sqrt((n - f) * (n - f) + (o - g) * (o - g)) / c;
                        this.start.image.width * w < this.frame.width && (w = this.frame.width / this.start.image.width), 
                        this.start.image.height * w < this.frame.height && (w = this.frame.height / this.start.image.height), 
                        this.start.image.width * w < this.frame.width && (w = this.frame.width / this.start.image.width), 
                        this.image.left = this.start.image.left + u - (l - this.start.image.left) * (w - 1), 
                        this.image.top = this.start.image.top + p - (d - this.start.image.top) * (w - 1), 
                        this.image.width = this.start.image.width * w, this.image.height = this.start.image.height * w, 
                        this.image.left > this.frame.left && (this.image.left = this.frame.left), this.image.top > this.frame.top && (this.image.top = this.frame.top), 
                        this.image.left + this.image.width < this.frame.left + this.frame.width && (this.image.left = this.frame.left + this.frame.width - this.image.width), 
                        this.image.top + this.image.height < this.frame.top + this.frame.height && (this.image.top = this.frame.top + this.frame.height - this.image.height);
                    },
                    scaleFrame: function(t, e, i) {
                        var h = e.clientX - t.clientX, a = e.clientY - t.clientY, s = this.start.frame.left, r = this.start.frame.top, m = this.start.frame.left + this.start.frame.width, n = this.start.frame.top + this.start.frame.height;
                        "left" == i ? s += h : "right" == i ? m += h : "top" == i ? r += a : "bottom" == i ? n += a : "left-top" == i ? (s += h, 
                        r += a) : "left-bottom" == i ? (s += h, n += a) : "right-top" == i ? (m += h, r += a) : "right-bottom" == i && (m += h, 
                        n += a), s < this.image.left && (s = this.image.left), r < this.image.top && (r = this.image.top), 
                        m > this.image.left + this.image.width && (m = this.image.left + this.image.width), 
                        n > this.image.top + this.image.height && (n = this.image.top + this.image.height), 
                        this.frame.left = s, this.frame.top = r, this.frame.width = m - s, this.frame.height = n - r;
                    },
                    parseBlob: function(t) {
                        for (var e = t.split(","), i = e[0].match(/:(.*?);/)[1], h = atob(e[1]), a = h.length, s = new Uint8Array(a), r = 0; r < a; r++) s[r] = h.charCodeAt(r);
                        return (URL || webkitURL).createObjectURL(new Blob([ s ], {
                            type: i
                        }));
                    },
                    onok: function() {
                        var e = this, i = this.image.width / this.real.width, h = (this.frame.left - this.image.left) / i, a = (this.frame.top - this.image.top) / i, s = this.frame.width / i, r = this.frame.height / i, m = s, n = r;
                        if (this.fixed) m = this.width / 2, n = this.height / 2; else {
                            if (m > this.maxWidth / 2) {
                                o = this.maxWidth / 2 / m;
                                m *= o, n *= o;
                            }
                            if (n > this.maxHeight / 2) {
                                var o = this.maxHeight / 2 / n;
                                n *= o, m *= o;
                            }
                        }
                        this.target.width = m, this.target.height = n, t.showLoading({
                            title: "正在裁剪"
                        }), setTimeout(function() {
                            e.targetContext.drawImage(e.url, h, a, s, r, 0, 0, m, n), e.targetContext.draw(!1, function() {
                                t.canvasToTempFilePath({
                                    canvasId: "target",
                                    success: function(t) {
                                        var i = t.tempFilePath;
                                        e.$emit("ok", {
                                            path: i
                                        });
                                    },
                                    fail: function(t) {
                                        console.log(t);
                                    },
                                    complete: function() {
                                        t.hideLoading();
                                    }
                                }, e);
                            });
                        }, 100);
                    },
                    oncancle: function() {
                        this.$emit("cancel");
                    }
                }
            };
            e.default = i;
        }).call(this, i(1).default);
    },
    216: function(t, e, i) {
        i.r(e);
        var h = i(217), a = i.n(h);
        for (var s in h) "default" !== s && function(t) {
            i.d(e, t, function() {
                return h[t];
            });
        }(s);
        e.default = a.a;
    },
    217: function(t, e, i) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ksp-image-cutter/ksp-image-cutter-create-component", {
    "components/ksp-image-cutter/ksp-image-cutter-create-component": function(t, e, i) {
        i("1").createComponent(i(211));
    }
}, [ [ "components/ksp-image-cutter/ksp-image-cutter-create-component" ] ] ]);