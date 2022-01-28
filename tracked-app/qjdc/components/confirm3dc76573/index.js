var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 54 ], {
    1110: function(t, n, i) {
        "use strict";
        i.r(n), function(t) {
            t.currentModuleId = "m3dc76573", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m3dc76573",
                render: function() {
                    this._c("options.open", this.options.open) && (!this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._c("options.single", this.options.single) ? this._c("options.singleText", this.options.singleText) : (this._c("options.icon", this.options.icon) && this._c("options.icon", this.options.icon), 
                    this._c("options.title", this.options.title) && this._c("options.title", this.options.title), 
                    this._c("options.content", this.options.content), this._c("options.btnCancel.text", this.options.btnCancel.text) && this._c("options.btnCancel.text", this.options.btnCancel.text), 
                    this._c("options.btnOk.text", this.options.btnOk.text) && this._c("options.btnOk.text", this.options.btnOk.text))), 
                    this._r();
                }
            };
            i(434);
            t.currentModuleId;
        }.call(this, i(11));
    },
    434: function(t, n, i) {
        "use strict";
        var o = i(2), e = i(30), s = i(69);
        Object(o.b)({
            properties: {
                options: {
                    type: Object,
                    value: {
                        open: !1,
                        icon: "",
                        title: "",
                        content: "",
                        btnOk: {
                            text: ""
                        },
                        btnCancel: {
                            text: ""
                        }
                    }
                }
            },
            methods: {
                singleTap() {
                    this.cancel();
                },
                cancel() {
                    e.a.emit(s.f, !1), this.triggerEvent("cancel", {});
                },
                ok() {
                    e.a.emit(s.f, !0), this.triggerEvent("ok", {});
                },
                singleHandler() {
                    e.a.emit(s.f, !0), this.triggerEvent("singleHandler", {});
                }
            }
        });
    }
}, [ [ 1110, 0 ] ] ]);
//# sourceMappingURL=index.js.map