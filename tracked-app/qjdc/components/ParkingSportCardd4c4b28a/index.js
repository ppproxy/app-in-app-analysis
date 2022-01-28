var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 41 ], {
    1070: function(t, e, n) {
        "use strict";
        n.r(e), function(t) {
            t.currentModuleId = "md4c4b28a", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "md4c4b28a",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("remindActive", this.remindActive), 
                    this._c("icon", this.icon), this._c("desc", this.desc) && this._c("desc", this.desc), 
                    this._c("btn_text[0]", this.btn_text[0]), this._r();
                }
            };
            n(409);
            t.currentModuleId;
        }.call(this, n(11));
    },
    409: function(t, e, n) {
        "use strict";
        var i = n(3), r = n.n(i), c = n(0), o = n.n(c), s = n(2), d = n(69), u = n(30);
        n(5);
        Object(s.b)({
            data: {
                remindActive: !1,
                actionBtn: {
                    fontSize: "32rpx",
                    color: "#FF7D41",
                    width: "200rpx",
                    height: "120rpx",
                    background: "#fff",
                    borderLeft: "1rpx solid rgba(0, 0, 0, 0.10)"
                }
            },
            properties: {
                title: {
                    type: String,
                    value: ""
                },
                desc: {
                    type: String,
                    value: ""
                },
                btn_text: {
                    type: Array,
                    value: []
                },
                index: {
                    type: Number,
                    value: 1e4
                },
                icon: {
                    type: String,
                    value: ""
                }
            },
            computed: {},
            ready() {
                var t = this;
                u.a.on(d.i, function(e) {
                    e.index === t.index && t.remind();
                });
            },
            methods: {
                callback(t) {
                    u.a.emit(d.a, {
                        index: this.index
                    });
                },
                remind() {
                    var t = this;
                    this.remindActive = !0, setTimeout(function() {
                        t.remindActive = !1;
                    }, 1e3);
                },
                formSubmit(t) {
                    return r()(o.a.mark(function t() {
                        return o.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            }
        });
    }
}, [ [ 1070, 0 ] ] ]);
//# sourceMappingURL=index.js.map