var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 53 ], {
    1092: function(e, t, n) {
        "use strict";
        n.r(t), function(e) {
            e.currentModuleId = "m0e396084", e.currentCtor = Component, e.currentResourceType = "component", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "m0e396084",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("buildEnv", this.buildEnv), 
                    this._r();
                }
            };
            n(419);
            e.currentModuleId;
        }.call(this, n(11));
    },
    419: function(e, t, n) {
        "use strict";
        var o = n(2);
        Object(o.b)({
            properties: {
                buildEnv: {
                    type: String,
                    value: "PRD"
                },
                params: {
                    type: Object,
                    value: {}
                }
            },
            data: {},
            methods: {
                toConfig() {
                    this.triggerEvent("toConfig");
                }
            },
            ready() {}
        });
    }
}, [ [ 1092, 0 ] ] ]);
//# sourceMappingURL=index.js.map