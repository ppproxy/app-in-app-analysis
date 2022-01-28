var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 176 ], {
    1054: function(t, e, n) {
        "use strict";
        n.r(e), function(t) {
            t.currentModuleId = "m2cc33c95", t.currentCtor = Component, t.currentResourceType = "page", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m2cc33c95",
                render: function() {
                    this._c("toast", this.toast), this._r();
                }
            };
            n(393);
            t.currentModuleId;
        }.call(this, n(11));
    },
    393: function(t, e, n) {
        "use strict";
        var o = n(2), c = n(63);
        Object(o.c)({
            data: {
                toast: {
                    msg: "",
                    type: "warn",
                    open: !1
                }
            },
            computed: {},
            onLoad() {
                new c.a({
                    context: this.toast
                }).loading("跳转中，请稍等...");
            },
            methods: {}
        });
    }
}, [ [ 1054, 0 ] ] ]);
//# sourceMappingURL=transfer.js.map