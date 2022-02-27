var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/classCallCheck"), r = require("../../@babel/runtime/helpers/createClass"), a = e(require("../../m/zk/za")), i = require("../5v/n"), s = require("../../l/wm"), o = e(require("../../m/zd/n")).default.$ltracker, c = ((0, 
i.getSystemInfoSync)() || {}).screenWidth, n = (void 0 === c ? 375 : c) / 375, l = (0, 
i.getDevicePixelRatio)(), u = [ "quality", "resize", "format", "interlace" ], h = function() {
    function e(r) {
        t(this, e), this._src = r, this._processParams = {}, this._originProcessStr = "", 
        this.parseProcess();
    }
    return r(e, [ {
        key: "parseProcess",
        value: function() {
            var e = this._src.replace(/[^?]*(.*)/, "$1"), t = decodeURIComponent(e).match(/x-oss-process=image\/([^&]*)/, "$1");
            if (t && t[1]) {
                var r = t[1];
                this._originProcessStr = r;
            }
        }
    }, {
        key: "buildUrl",
        value: function() {
            var e = this, t = this._originProcessStr ? "image/".concat(this._originProcessStr) : "image";
            return u.forEach(function(r) {
                var a = e._processParams[r];
                if (a) {
                    var i = "";
                    i = a instanceof Array ? a.join(",") : a, t += "/".concat(r, ",").concat(i);
                }
            }), (0, s.setQueryParamsToUrl)(this._src, {
                "x-oss-process": t
            });
        }
    }, {
        key: "setProcess",
        value: function(e, t) {
            return t ? this._processParams[e] = t instanceof Array ? t.join(",") : t : this._processParams[e] && delete this._processParams[e], 
            this;
        }
    } ]), e;
}(), p = function(e) {
    return e + "_q90_.webp";
}, d = function(e) {
    var t, r, a = e.src, i = e.supportWebp, s = e.isOss, o = e.smart, c = a || "", u = !1, d = "";
    if (o) {
        var v = function(e) {
            var t, r = e.width, a = e.height, i = e.preview, s = void 0 === i || i, o = e.previewScale, c = e.previewOpenSize, u = e.scale || 2, h = parseInt(r * n * l / u, 10), p = parseInt(a * n * l / u, 10);
            if (t = {
                width: h,
                height: p
            }, s && h * p > (c || 1e4)) {
                var d = o || 2;
                return {
                    src: t,
                    preview: {
                        width: parseInt(r * n / (u * d), 10),
                        height: parseInt(a * n / (u * d), 10)
                    }
                };
            }
            return {
                src: t
            };
        }(o);
        t = v.src, r = v.preview;
    }
    if ("string" != typeof c) return setTimeout(function() {
        throw new Error("cook-image src's type must be string.");
    }, 0), {
        previewSrc: d,
        actuallySrc: c,
        actuallyWebp: u
    };
    var m = !/\.[^/]+$/.test(c) || /\.(gif|GIF)$/.test(c), y = /^.+\.svg(\?.+)?$/i.test(c), f = (c.startsWith("https://s.koubei.com") || c.startsWith("https://s-daily.koubei.com")) && m && !i || y;
    if (!c.startsWith("http") || f) return {
        previewSrc: d,
        actuallySrc: c,
        actuallyWebp: u
    };
    if (c.startsWith("https://img.alicdn.com")) i && !a.endsWith(".svg") && (t && (c = a + "_".concat(t.width, "x").concat(t.height)), 
    r && (d = a + "_".concat(r.width, "x").concat(r.height), d = p(d)), c = p(c), u = !0); else if (s) {
        u = i;
        var w = new h(a);
        w.setProcess("quality", "q_90"), i && w.setProcess("format", "webp"), t && w.setProcess("resize", [ "m_fill", "w_".concat(t.width), "h_".concat(t.height) ]), 
        c = w.buildUrl(), r && (w.setProcess("resize", [ "m_fill", "w_".concat(r.width), "h_".concat(r.height) ]), 
        d = w.buildUrl());
    }
    return {
        previewSrc: d,
        actuallySrc: c,
        actuallyWebp: u
    };
};

(0, a.default)({
    name: "cook-image",
    properties: {
        className: {
            type: String,
            value: ""
        },
        style: {
            type: String,
            value: ""
        },
        src: {
            type: String,
            value: ""
        },
        defaultSource: {
            type: String,
            value: ""
        },
        mode: {
            type: String,
            value: "scaleToFill"
        },
        webp: {
            type: Boolean,
            value: !0
        },
        lazyLoad: {
            type: Boolean,
            value: !0
        },
        showMenuByLongpress: {
            type: Boolean,
            value: !1
        },
        smart: {
            type: Object,
            value: void 0
        },
        onError: {
            type: Function,
            value: function() {}
        },
        onLoad: {
            type: Function,
            value: function() {}
        },
        binderror: {
            type: Function,
            value: void 0
        },
        bindload: {
            type: Function,
            value: void 0
        },
        isOss: {
            type: Boolean,
            value: !0
        },
        needMonitor: {
            type: Boolean,
            value: !0
        },
        monitorTimeMin: {
            type: Number,
            value: 5e3
        },
        monitorTimeMax: {
            type: Number,
            value: 15e3
        }
    },
    observers: {
        src: function() {
            this.init();
        }
    },
    data: {
        actuallySrc: "",
        actuallyWebp: !1,
        innerStyle: "",
        showDefault: !0,
        showPreview: !1,
        previewSrc: ""
    },
    localData: {
        processedSrc: "",
        previewLoadStartTime: "",
        actuallyLoadStartTime: ""
    },
    ready: function() {},
    methods: {
        init: function() {
            var e = this, t = this.data, r = t.src, a = void 0 === r ? "" : r, s = t.webp, o = void 0 === s || s, c = t.isOss, n = void 0 === c || c, l = t.smart, u = void 0 === l ? void 0 : l;
            if (this.localData.processedSrc !== a) {
                this.localData.processedSrc = a;
                var h = o && (0, i.isSupportWebp)() && a.startsWith("http"), p = d({
                    src: a,
                    supportWebp: h,
                    isOss: n,
                    smart: u
                }), v = p.actuallySrc, m = p.actuallyWebp, y = p.previewSrc, f = "";
                u && (f = "width:".concat(u.width, "rpx;height:").concat(u.height, "rpx;")), this.setData({
                    actuallySrc: v,
                    actuallyWebp: m,
                    showPreview: !!y,
                    previewSrc: y,
                    innerStyle: f
                }, function() {
                    var t = +new Date();
                    e.localData.previewLoadStartTime = t, e.localData.actuallyLoadStartTime = t;
                });
            }
        },
        bindPreviewLoad: function() {
            this.setData({
                showDefault: !1
            }), this.handleLoadMonitor("preview");
        },
        bindPreviewError: function(e) {
            this.setData({
                showDefault: !1
            }), this.binderror(e, "preview");
        },
        bindload: function(e) {
            this.setData({
                showDefault: !1,
                showPreview: !1
            }), this.triggerEvent("load", e), this.handleLoadMonitor("actually");
        },
        handleLoadMonitor: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "actually", t = this.localData["".concat(e, "LoadStartTime")], r = this.data, a = r.needMonitor, i = r.lazyLoad, s = r.monitorTimeMin, c = r.monitorTimeMax, n = r.actuallyWebp, l = r.src, u = this.data["".concat(e, "Src")];
            if (a) {
                if (i) return;
                if (!t || !u) return;
                var h = +new Date(), p = h - t;
                p > (s || 5e3) && p < (c || 15e3) && o && o.other(".base.image_slow", {
                    imgUrl: u,
                    duration: p,
                    actuallyWebp: n,
                    originSrc: l,
                    prefix: e
                }, {
                    sampleRate: .3
                }), this.localData["".concat(e, "LoadStartTime")] = "";
            }
        },
        binderror: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "actually", r = this.data, a = r.needMonitor, i = r.actuallyWebp, s = r.src, c = this.data["".concat(t, "Src")], n = e.detail || {}, l = n.errMsg, u = void 0 === l ? "" : l;
            this.triggerEvent("error", e), a && o && o.other(".base.image_error", {
                imgUrl: c,
                errMsg: u,
                actuallyWebp: i,
                originSrc: s,
                prefix: t
            });
        }
    }
});