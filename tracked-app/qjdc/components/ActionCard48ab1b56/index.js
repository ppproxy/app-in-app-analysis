var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 25 ], {
    1069: function(t, e, i) {
        "use strict";
        i.r(e), function(t) {
            t.currentModuleId = "m48ab1b56", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m48ab1b56",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("remindActive", this.remindActive), 
                    this._c("title", this.title), this._c("desc", this.desc) && this._c("desc", this.desc), 
                    this._c("btn_text[0]", this.btn_text[0]) && this._c("btn_text[0]", this.btn_text[0]), 
                    this._r();
                }
            };
            i(408);
            t.currentModuleId;
        }.call(this, i(11));
    },
    408: function(t, e, i) {
        "use strict";
        var n = i(2);
        Object(n.b)({
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
                dataType: {
                    type: Number,
                    value: 1e4
                }
            },
            computed: {},
            ready() {
                this.ActionRemind = this.remind.bind(this), this.triggerEvent("initActionCard", {
                    ActionCard: this.ActionRemind
                });
            },
            methods: {
                callback(t) {},
                remind() {
                    var t = this;
                    this.remindActive = !0, setTimeout(function() {
                        t.remindActive = !1;
                    }, 1e3);
                }
            }
        });
    }
}, [ [ 1069, 0 ] ] ]);
//# sourceMappingURL=index.js.map