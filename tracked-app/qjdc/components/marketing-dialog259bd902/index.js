var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 61 ], {
    1118: function(t, e, n) {
        "use strict";
        n.r(e), function(t) {
            t.currentModuleId = "m259bd902", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m259bd902",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("options.enableAd", this.options.enableAd), 
                    this._c("options.backImg", this.options.backImg), this._c("closeIcon", this.closeIcon), 
                    this._r();
                }
            };
            n(441);
            t.currentModuleId;
        }.call(this, n(11));
    },
    441: function(t, e, n) {
        "use strict";
        var o = n(2);
        Object(o.b)({
            data: {
                closeIcon: "https://pt-starimg.didistatic.com/static/starimg/img/pPOwFFaMo01621587273059.png"
            },
            properties: {
                options: {
                    type: Object,
                    value: {
                        backImg: "",
                        backLink: "",
                        enableAd: 0,
                        linkType: 1,
                        wxJumpPull: !1
                    }
                }
            },
            computed: {},
            methods: {
                target() {
                    var t = this.options, e = t.linkType, n = t.backLink, o = t.appId, i = t.path, c = t.wxJumpPull, s = void 0 !== c && c, p = t.enableAd, r = o ? {
                        appId: o,
                        path: i
                    } : null;
                    this.triggerEvent("target", {
                        linkType: e,
                        linkUrl: n,
                        extInfo: r,
                        wxJumpPull: s,
                        enableAd: p
                    });
                },
                close() {
                    this.triggerEvent("close");
                }
            }
        });
    }
}, [ [ 1118, 0 ] ] ]);
//# sourceMappingURL=index.js.map