var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 57 ], {
    1116: function(t, e, o) {
        "use strict";
        o.r(e), function(t) {
            t.currentModuleId = "m92bfa076", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m92bfa076",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("options.title", this.options.title), 
                    this._c("options.desc", this.options.desc), this._c("options.btnTitle", this.options.btnTitle), 
                    this._r();
                }
            };
            o(439);
            t.currentModuleId;
        }.call(this, o(11));
    },
    439: function(t, e, o) {
        "use strict";
        var n = o(1), i = o.n(n), s = o(2), p = o(32), r = o(5);
        Object(s.b)({
            properties: {
                options: {
                    type: Object,
                    value: {}
                }
            },
            attached() {
                p.a.setStorage("full_screen_".concat(this.user.phone), "show");
            },
            computed: i()({}, r.a.mapState([ "user" ])),
            methods: {
                toPage() {
                    var t = this.options, e = t.linkType, o = t.jumpLink, n = t.appId, i = t.path, s = t.wxJumpPull, p = void 0 !== s && s, r = t.enableAd, c = void 0 === r ? 0 : r, u = n ? {
                        appId: n,
                        path: i
                    } : null;
                    (o || u || p) && this.triggerEvent("target", {
                        linkType: e,
                        linkUrl: o,
                        extInfo: u,
                        wxJumpPull: p,
                        enableAd: c
                    });
                },
                close() {
                    this.triggerEvent("close");
                }
            }
        });
    }
}, [ [ 1116, 0 ] ] ]);
//# sourceMappingURL=index.js.map