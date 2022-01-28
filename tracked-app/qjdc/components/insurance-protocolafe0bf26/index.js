var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 59 ], {
    1097: function(t, e, r) {
        "use strict";
        r.r(e), function(t) {
            t.currentModuleId = "mafe0bf26", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "mafe0bf26",
                render: function() {
                    this._c("user.agreeInsuranceProtocol", this.user.agreeInsuranceProtocol) || (!this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._c("imageUrl", this.imageUrl), this._c("title", this.title), this._c("insuranceProtocolNoteShow[0]", this.insuranceProtocolNoteShow[0]), 
                    this._c("insuranceProtocolNoteShow[1]", this.insuranceProtocolNoteShow[1])), this._r();
                }
            };
            r(423);
            t.currentModuleId;
        }.call(this, r(11));
    },
    423: function(t, e, r) {
        "use strict";
        var o = r(3), n = r.n(o), c = r(1), i = r.n(c), s = r(0), a = r.n(s), u = r(2), h = r(5), p = r(16), l = r(9), d = r(15);
        Object(u.b)({
            data: {},
            properties: {
                insuranceProtocolNote: {
                    type: String,
                    value: ""
                }
            },
            computed: i()(i()({}, h.a.mapState([ "user" ])), {}, {
                title() {
                    return this.user.insuranceProtocolNote;
                },
                imageUrl() {
                    return "https://pt-starimg.didistatic.com/static/starimg/img/8HgkAOV9pd1623824698671.png";
                },
                insuranceProtocolNoteShow() {
                    return this.insuranceProtocolNote ? this.insuranceProtocolNote.split("《保险投保须知》") : [];
                }
            }),
            methods: {
                agreeInsurance() {
                    var t = this;
                    return n()(a.a.mark(function e() {
                        return a.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, Object(p.agreeInsuranceProtocol)();

                              case 3:
                                return e.prev = 3, t.triggerEvent("reloadData"), t.user.agreeInsuranceProtocol = !0, 
                                e.finish(3);

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 0, , 3, 7 ] ]);
                    }))();
                },
                toNotePage() {
                    Object(l.navigateTo)(d.e, {
                        url: "https://s.didi.cn/dhaf"
                    });
                }
            }
        });
    }
}, [ [ 1097, 0 ] ] ]);
//# sourceMappingURL=index.js.map