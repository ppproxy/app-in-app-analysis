var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 43 ], {
    1071: function(e, t, i) {
        "use strict";
        i.r(t), function(e) {
            e.currentModuleId = "m0e8daf57", e.currentCtor = Component, e.currentResourceType = "component", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "m0e8daf57",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("remindActive", this.remindActive), 
                    this._c("icon", this.icon), this._c("title", this.title), this._c("title", this.title), 
                    this._c("desc", this.desc) && this._c("desc", this.desc), this._r();
                }
            };
            i(410);
            e.currentModuleId;
        }.call(this, i(11));
    },
    410: function(e, t, i) {
        "use strict";
        var r = i(2), c = i(69), s = i(30);
        Object(r.b)({
            data: {
                remindActive: !1
            },
            properties: {
                icon: {
                    type: String,
                    value: ""
                },
                title: {
                    type: String,
                    value: ""
                },
                desc: {
                    type: String,
                    value: ""
                },
                index: {
                    type: Number,
                    value: 1e4
                }
            },
            computed: {
                descArr() {
                    return this.desc.match(/^(\S*)\{(\S+)\}(\S*)$/);
                },
                beforeDesc() {
                    return this.descArr ? this.descArr[1] : this.desc;
                },
                highlightDesc() {
                    return this.descArr ? this.descArr[2] : "";
                },
                afterDesc() {
                    return this.descArr ? this.descArr[3] : "";
                }
            },
            onLoad() {},
            ready() {
                var e = this;
                s.a.on(c.i, function(t) {
                    t.index === e.index && e.remind();
                });
            },
            methods: {
                remind() {
                    var e = this;
                    this.remindActive = !0, setTimeout(function() {
                        e.remindActive = !1;
                    }, 1e3);
                }
            }
        });
    }
}, [ [ 1071, 0 ] ] ]);
//# sourceMappingURL=index.js.map