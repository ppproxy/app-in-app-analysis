var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 38 ], {
    1107: function(e, t, n) {
        "use strict";
        n.r(t), function(e) {
            e.currentModuleId = "m8aa90ce2", e.currentCtor = Component, e.currentResourceType = "component", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "m8aa90ce2",
                render: function() {
                    this._c("bgStyle", this.bgStyle), this._c("mpxShow", this.mpxShow) || this._c("mpxShow", this.mpxShow), 
                    this._c("bannerItem.itemLink", this.bannerItem.itemLink), this._c("idx", this.idx), 
                    this._c("bannerItem.appId", this.bannerItem.appId), this._c("bannerItem.path", this.bannerItem.path), 
                    this._c("bannerItem.enableAd", this.bannerItem.enableAd), this._c("bannerItem.title", this.bannerItem.title), 
                    this._c("bannerItem.desc", this.bannerItem.desc), this._c("bannerItem.btnTitle", this.bannerItem.btnTitle), 
                    this._c("bannerItem.img", this.bannerItem.img), this._r();
                }
            };
            n(431);
            e.currentModuleId;
        }.call(this, n(11));
    },
    431: function(e, t, n) {
        "use strict";
        var i = n(2);
        Object(i.b)({
            properties: {
                bgStyle: {
                    type: String,
                    value: ""
                },
                bannerItem: {
                    type: Object,
                    value: {}
                }
            },
            methods: {
                openBannerUrl() {
                    this.triggerEvent("handleOpenBanner");
                }
            }
        });
    }
}, [ [ 1107, 0 ] ] ]);
//# sourceMappingURL=index.js.map