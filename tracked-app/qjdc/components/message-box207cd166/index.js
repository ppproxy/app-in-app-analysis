var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 62 ], {
    1101: function(t, e, n) {
        "use strict";
        n.r(e), function(t) {
            t.currentModuleId = "m207cd166", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m207cd166",
                render: function() {
                    this._c("options.bShow", this.options.bShow) && (!this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._c("options.title", this.options.title), this._c("options.content", this.options.content), 
                    this._c("options.showCancel", this.options.showCancel) && this._c("options.cancelText", this.options.cancelText), 
                    this._c("options.confirmText", this.options.confirmText)), this._r();
                }
            };
            n(427);
            t.currentModuleId;
        }.call(this, n(11));
    },
    427: function(t, e, n) {
        "use strict";
        var o = n(3), c = n.n(o), s = n(0), i = n.n(s), r = n(2), a = n(55);
        Object(r.b)({
            data: {},
            properties: {
                options: {
                    type: Object,
                    value: {
                        bShow: !1,
                        title: "提示",
                        content: "",
                        showCancel: !0,
                        cancelText: "取消",
                        confirmText: "确定",
                        confirmCallback: null,
                        cancelCallback: null
                    }
                }
            },
            computed: {},
            methods: {
                confirm() {
                    var t = this;
                    return c()(i.a.mark(function e() {
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (e.prev = 0, "auth" !== t.options.type) {
                                    e.next = 5;
                                    break;
                                }
                                if (!a.a.getSubscribeForDaysStatus("AuthSubscribe")) {
                                    e.next = 5;
                                    break;
                                }
                                return e.next = 5, a.a.requestSubscribeMessageDMC("qj_renzheng", "authAlert");

                              case 5:
                                e.next = 10;
                                break;

                              case 7:
                                e.prev = 7, e.t0 = e.catch(0), console.log(e.t0);

                              case 10:
                                t.options.confirmCallback && t.options.confirmCallback();

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 0, 7 ] ]);
                    }))();
                },
                cancel() {
                    this.options.cancelCallback && this.options.cancelCallback();
                },
                preventTouchMove() {}
            }
        });
    }
}, [ [ 1101, 0 ] ] ]);
//# sourceMappingURL=index.js.map