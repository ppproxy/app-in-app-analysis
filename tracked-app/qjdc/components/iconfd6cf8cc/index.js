var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 58 ], {
    1113: function(c, n, t) {
        "use strict";
        t.r(n), function(c) {
            c.currentModuleId = "mfd6cf8cc", c.currentCtor = Component, c.currentResourceType = "component", 
            c.currentCtorType = "component", c.currentSrcMode = "wx", c.currentInject = {
                moduleId: "mfd6cf8cc",
                render: function() {
                    this._c("iconClass", this.iconClass), !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._r();
                }
            };
            t(436);
            c.currentModuleId;
        }.call(this, t(11));
    },
    436: function(c, n, t) {
        "use strict";
        var e = t(2);
        Object(e.b)({
            properties: {
                type: String
            },
            computed: {
                iconClass() {
                    return "mpxic mpxic-".concat(this.type);
                }
            }
        });
    }
}, [ [ 1113, 0 ] ] ]);
//# sourceMappingURL=index.js.map