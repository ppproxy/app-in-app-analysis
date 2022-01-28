var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 30 ], {
    1104: function(t, e, i) {
        "use strict";
        i.r(e), function(t) {
            t.currentModuleId = "m0ab990b3", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m0ab990b3",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("selfAnimation", this.selfAnimation), 
                    this._c("topImgUrl", this.topImgUrl), this._c("dlgData.text", this.dlgData.text), 
                    this._c("dlgData.button2", this.dlgData.button2), this._c("dlgData.button1", this.dlgData.button1), 
                    this._r();
                }
            }, t.currentInject.getRefsData = function() {
                return [ {
                    key: "animation",
                    selector: ".ref_animation_1",
                    type: "component",
                    all: !1
                } ];
            };
            i(429);
            t.currentModuleId;
        }.call(this, i(11));
    },
    429: function(t, e, i) {
        "use strict";
        var n = i(2), a = i(4), o = i(15);
        Object(n.b)({
            properties: {
                dlgData: {
                    type: Object,
                    value: {}
                }
            },
            data: {
                selfAnimation: "hide"
            },
            computed: {
                topImgUrl() {
                    return this.dlgData.image || "https://dpubstatic.udache.com/static/dpubimg/eb37362b-2b9d-4716-bb24-146137c24c4f.png";
                }
            },
            methods: {
                show() {
                    this.selfAnimation = "show", this.$refs.animation && this.$refs.animation.show(), 
                    a.a.track("bike_home_function_alert_sw", {
                        type: 10
                    });
                },
                hide() {
                    this.selfAnimation = "hide", this.$refs.animation && this.$refs.animation.hide();
                },
                close() {
                    a.a.track("bike_home_function_alert_ck", {
                        swtype: 10,
                        cktype: 0
                    }), this.hide();
                },
                jump() {
                    n.d.navigateTo({
                        url: "/webx-mp-next/transfer-station/index?type=sms&activity_id=qingjuyangliu_huiduan1&back_url=".concat(encodeURIComponent(o.i))
                    }), this.hide(), a.a.track("bike_home_function_alert_ck", {
                        swtype: 10,
                        cktype: 1
                    });
                },
                backToScan() {
                    this.triggerEvent("goOnScan"), this.hide(), a.a.track("bike_home_function_alert_ck", {
                        swtype: 10,
                        cktype: 2
                    });
                }
            }
        });
    }
}, [ [ 1104, 0 ] ] ]);
//# sourceMappingURL=index.js.map