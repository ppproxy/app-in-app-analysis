var window = window || {};

window.webpackJsonp = require("../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 163 ], {
    1065: function(n, e, r) {
        "use strict";
        r.r(e), function(n) {
            n.currentModuleId = "m219f0023", n.currentCtor = Component, n.currentResourceType = "page", 
            n.currentCtorType = "component", n.currentSrcMode = "wx", n.currentInject = {
                moduleId: "m219f0023",
                render: function() {
                    this._c("params", this.params), this._c("env", this.env), this._r();
                }
            };
            r(404);
            n.currentModuleId;
        }.call(this, r(11));
    },
    404: function(n, e, r) {
        "use strict";
        var t = r(1), o = r.n(t), c = r(18), i = r.n(c), s = r(2);
        Object(s.c)({
            data: {
                params: {
                    ticket: "",
                    from: "xwebapp"
                },
                env: ""
            },
            onLoad(n) {
                n = n || {}, this.env = n.env || "online", this.params = i()({}, this.params, o()(o()({}, n), {}, {
                    appid: +(n.appid || 0)
                }));
            },
            methods: {}
        });
    }
}, [ [ 1065, 0 ] ] ]);
//# sourceMappingURL=account-delete.js.map