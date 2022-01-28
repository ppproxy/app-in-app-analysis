var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 42 ], {
    1073: function(t, e, o) {
        "use strict";
        o.r(e), function(t) {
            t.currentModuleId = "m495a8160", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m495a8160",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("popModelData.imgSrc", this.popModelData.imgSrc), 
                    this._c("popModelData.btnType", this.popModelData.btnType), this._c("popModelData.btnType", this.popModelData.btnType), 
                    this._r();
                }
            };
            o(412);
            t.currentModuleId;
        }.call(this, o(11));
    },
    412: function(t, e, o) {
        "use strict";
        var n = o(2), p = o(9), r = o(15);
        o(5), o(7);
        Object(n.b)({
            properties: {
                popModelData: {
                    type: Object,
                    value: {
                        imgSrc: "",
                        vehicleCategoryJumpUrl: "",
                        btnType: null
                    }
                }
            },
            data: {},
            methods: {
                close() {
                    this.triggerEvent("close");
                },
                getBtn(t) {
                    this.triggerEvent("unlock", {
                        text: t,
                        btnType: this.popModelData.btnType
                    });
                },
                handleLink() {
                    var t = this.popModelData.vehicleCategoryJumpUrl;
                    t && Object(p.navigateTo)(r.e, {
                        url: t
                    });
                }
            },
            computed: {}
        });
    }
}, [ [ 1073, 0 ] ] ]);
//# sourceMappingURL=index.js.map