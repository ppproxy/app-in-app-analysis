var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 34 ], {
    1072: function(t, n, e) {
        "use strict";
        e.r(n), function(t) {
            t.currentModuleId = "m48a8f956", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m48a8f956",
                render: function() {
                    this._c("isIphonex", this.isIphonex), !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._r();
                }
            };
            e(411);
            t.currentModuleId;
        }.call(this, e(11));
    },
    411: function(t, n, e) {
        "use strict";
        var o = e(2), c = e(8);
        Object(o.b)({
            data: {
                isIphonex: "height-normal"
            },
            attached() {
                var t = this;
                try {
                    Object(c.t)().then(function(n) {
                        n && (t.isIphonex = "height-x");
                    });
                } catch (t) {}
            }
        });
    }
}, [ [ 1072, 0 ] ] ]);
//# sourceMappingURL=index.js.map