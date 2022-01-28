var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 50 ], {
    1112: function(t, e, n) {
        "use strict";
        n.r(e), function(t) {
            t.currentModuleId = "m0ed911ac", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m0ed911ac",
                render: function() {
                    this._c("classname", this.classname), !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._c("iphoneXClass", this.iphoneXClass), this._c("noMask", this.noMask) || this._c("animationType", this.animationType), 
                    this._c("maskStyle", this.maskStyle), this._r();
                }
            };
            n(686);
            t.currentModuleId;
        }.call(this, n(11));
    },
    686: function(t, e, n) {
        "use strict";
        var i, s = n(2);
        n(31), n(18), n(6);
        var o = function() {
            if (!i) try {
                i = s.d.getSystemInfoSync();
            } catch (t) {}
            return i;
        }(), a = o && o.model && ~o.model.search(/iPhone ?(X|1[1-9]+)/);
        Object(s.b)({
            properties: {
                animationType: String,
                disabledCloseAnimation: Boolean,
                noMask: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {
                isShow: null
            },
            computed: {
                classname() {
                    return !0 === this.isShow ? "isShow" : !1 === this.isShow ? "isHide" : "";
                },
                iphoneXClass() {
                    return a ? "iPhoneX-wrapper" : "";
                },
                maskStyle() {
                    return this.noMask ? "display:none;" : "opacity: ".concat(this.isShow ? 1 : 0);
                }
            },
            methods: {
                show() {
                    this.isShow = !0;
                },
                hide() {
                    this.isShow = !!this.disabledCloseAnimation && null;
                },
                clickLayer(t) {
                    "animation-container-content" === t.target.id && this.triggerEvent("clicklayer");
                },
                stopDefault() {}
            }
        });
    }
}, [ [ 1112, 0 ] ] ]);
//# sourceMappingURL=index.js.map