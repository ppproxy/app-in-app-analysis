var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 45 ], {
    1091: function(e, t, r) {
        "use strict";
        r.r(t), function(e) {
            e.currentModuleId = "m6dd919b3", e.currentCtor = Component, e.currentResourceType = "component", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "m6dd919b3",
                render: function() {
                    this._c("imageUrl", this.imageUrl), this._c("mode", this.mode), this._c("webp", this.webp), 
                    this._c("lazyLoad", this.lazyLoad), this._c("showMenuByLongpress", this.showMenuByLongpress), 
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._r();
                }
            };
            r(418);
            e.currentModuleId;
        }.call(this, r(11));
    },
    418: function(e, t, r) {
        "use strict";
        var n = r(58), i = r.n(n), o = r(6), s = r.n(o), h = r(18), a = r.n(h), c = r(2), d = r(8);
        Object(c.b)({
            properties: {
                src: {
                    type: String,
                    value: ""
                },
                width: {
                    type: String,
                    value: ""
                },
                height: {
                    type: String,
                    value: ""
                },
                mode: {
                    type: String,
                    value: "widthFix"
                },
                webp: {
                    type: Boolean,
                    value: !0
                },
                lazyLoad: {
                    type: Boolean,
                    value: !1
                },
                showMenuByLongpress: {
                    type: Boolean,
                    value: !1
                },
                srcWidth: {
                    type: Number,
                    value: 0
                }
            },
            computed: {
                imageUrl() {
                    var e, t = i()(e = this.src).call(e);
                    return Object(d.L)({
                        src: t,
                        width: this.srcWidth || 0
                    });
                },
                renderStryle() {
                    var e;
                    return s()(e = "width:".concat(this.width, "rpx;height:")).call(e, this.height, "rpx");
                }
            },
            data: {},
            methods: {
                handleError(e) {
                    this.triggerEvent("error", this.getEventData(e.detail, e));
                },
                handleLoad(e) {
                    this.triggerEvent("load", this.getEventData(e.detail, e));
                },
                getEventData(e, t) {
                    return a()(e, {
                        originEvent: t
                    });
                }
            },
            created() {}
        });
    }
}, [ [ 1091, 0 ] ] ]);
//# sourceMappingURL=index.js.map