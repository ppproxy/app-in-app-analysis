var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 29 ], {
    1115: function(t, o, n) {
        "use strict";
        n.r(o), function(t) {
            t.currentModuleId = "m880b0a5e", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m880b0a5e",
                render: function() {
                    this._c("options.open", this.options.open) && (!this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._c("options.enableAd", this.options.enableAd), this._c("options.banner", this.options.banner), 
                    this._c("closeIcon", this.closeIcon)), this._r();
                }
            };
            n(438);
            t.currentModuleId;
        }.call(this, n(11));
    },
    438: function(t, o, n) {
        "use strict";
        var e = n(2), i = n(30), s = n(9), p = n(69), c = n(4), r = n(15);
        Object(e.b)({
            data: {
                closeIcon: "https://pt-starimg.didistatic.com/static/starimg/img/pPOwFFaMo01621587273059.png"
            },
            properties: {
                options: {
                    type: Object,
                    value: {
                        open: !1,
                        banner: "",
                        linkUrl: "",
                        enableAd: 0,
                        jumpType: 1,
                        extInfo: null,
                        tapAction: null
                    }
                }
            },
            methods: {
                target() {
                    this.options.tapAction && this.options.tapAction();
                    var t = Number(this.options.jumpType);
                    if (1 === t) {
                        if (!this.options.linkUrl) return;
                        Object(s.navigateTo)(r.e, {
                            url: this.options.linkUrl
                        });
                    } else if (2 === t && this.options.extInfo) {
                        var o = this.options.extInfo, n = o.appkey, e = o.linkAddressUrl, i = this.options, p = {
                            layout_id: i.layoutId,
                            frame: i.frame,
                            spot_id: i.spotId,
                            element_id: "",
                            biz_content: i.bizContent,
                            action: "wxpopupsw"
                        };
                        c.a.track("phpub_cms_view_ck", p), wx.navigateToMiniProgram({
                            appId: n,
                            path: e,
                            envVersion: "release",
                            success: function() {
                                p.action = "wxpopupck", c.a.track("phpub_cms_view_ck", p);
                            },
                            fail: function(t) {
                                p.action = "wxpopupcance", c.a.track("phpub_cms_view_ck", p);
                            }
                        });
                    } else 4 === t && Object(s.navigateTo)(this.options.linkUrl);
                },
                close() {
                    this.triggerEvent("close"), i.a.emit(p.d);
                },
                preventTouchMove() {}
            }
        });
    }
}, [ [ 1115, 0 ] ] ]);
//# sourceMappingURL=index.js.map