var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 56 ], {
    1100: function(e, t, n) {
        "use strict";
        n.r(t), function(e) {
            e.currentModuleId = "md2ada358", e.currentCtor = Component, e.currentResourceType = "component", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "md2ada358",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("bthText", this.bthText), 
                    this._r();
                }
            };
            n(426);
            e.currentModuleId;
        }.call(this, n(11));
    },
    426: function(e, t, n) {
        "use strict";
        var r = n(3), o = n.n(r), a = n(0), c = n.n(a), i = n(2), s = (n(7), n(8), n(134), 
        n(9), n(5), n(32), n(4));
        n(94), n(15);
        Object(i.b)({
            properties: {},
            watch: {},
            computed: {},
            data: {
                bthText: "去骑车",
                Number: 10,
                feeTimeTimer: null
            },
            attached() {
                return o()(c.a.mark(function e() {
                    return c.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            s.a.track("qj_wx_homepagenew_sw", {
                                source: 5
                            }), s.a.track("qj_wx_yangliuprevent_sw");

                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }))();
            },
            methods: {
                handleOtherPlatform() {
                    wx.navigateToMiniProgram({
                        appId: "wxaf35009675aa0b2a",
                        path: "qingju/pages/init/init",
                        success(e) {
                            console.log("小程序跳转成功", e);
                        },
                        fail(e) {
                            console.log("小程序跳转失败", e);
                        }
                    });
                },
                jumpApplet() {
                    s.a.track("qj_wx_yangliuprevent_ck"), this.handleOtherPlatform();
                }
            }
        });
    }
}, [ [ 1100, 0 ] ] ]);
//# sourceMappingURL=index.js.map