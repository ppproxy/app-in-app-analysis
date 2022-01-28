var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 64 ], {
    1068: function(t, e, n) {
        "use strict";
        n.r(e), function(t) {
            t.currentModuleId = "mc816977e", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "mc816977e",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("styleName", this.styleName), 
                    this._c("style", this.style), this._c("text", this.text), this._r();
                }
            };
            n(407);
            t.currentModuleId;
        }.call(this, n(11));
    },
    407: function(t, e, n) {
        "use strict";
        var r = n(3), c = n.n(r), s = n(0), o = n.n(s), i = n(13), u = n.n(i), p = n(2);
        n(5), n(59);
        Object(p.b)({
            data: {},
            computed: {
                style() {
                    return u()(this.css).replace(/{|}|"/g, "").replace(/,/g, ";") || "";
                },
                styleName() {
                    return "disable" === this.btnType ? "button btn-gray" : "button";
                }
            },
            properties: {
                text: {
                    type: String,
                    value: ""
                },
                css: {
                    type: Object,
                    value: {}
                },
                btnType: {
                    type: String,
                    value: ""
                }
            },
            onLoad() {},
            methods: {
                formSubmit(t) {
                    var e = this;
                    return c()(o.a.mark(function t() {
                        return o.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e.triggerEvent("btnclick", {});

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            }
        });
    }
}, [ [ 1068, 0 ] ] ]);
//# sourceMappingURL=index.js.map