var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 55 ], {
    1119: function(t, e, n) {
        "use strict";
        n.r(e), function(t) {
            t.currentModuleId = "m3e28a9dd", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m3e28a9dd",
                render: function() {
                    this._c("benefitList", this.benefitList).length > 0 && (!this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._c("options.bannerImg", this.options.bannerImg) && this._c("options.bannerImg", this.options.bannerImg), 
                    this._c("bgColor", this.bgColor), this._i(this._c("benefitList", this.benefitList), function(t, e) {
                        t.number, t.unit, t.benefitTitle, t.benefitNotice, t.btnTitle;
                    })), this._r();
                }
            };
            n(442);
            t.currentModuleId;
        }.call(this, n(11));
    },
    442: function(t, e, n) {
        "use strict";
        var i = n(44), o = n.n(i), r = n(2);
        n(32), n(5);
        Object(r.b)({
            properties: {
                options: {
                    type: Object,
                    value: {}
                }
            },
            data: {
                benefitList: []
            },
            attached() {
                var t = this.options.benefits;
                t && t.length > 0 && (t.forEach(function(t, e) {
                    var n = t.preferentialDesc.match(/\d+([.]{1}\d+){0,1}/g), i = t.preferentialDesc.match(/[\u4E00-\u9FA5]+/g);
                    n && i ? (t.isShow = !0, t.number = n[0], t.unit = i[0]) : t.isShow = !1;
                }), this.benefitList = o()(t).call(t, function(t) {
                    return t.isShow;
                }), this.triggerEvent("handlePopShow", {
                    isShowPop: !0
                }));
            },
            computed: {
                bgColor() {
                    var t = this.options;
                    return "background-color: ".concat(t.color || "#f42a35");
                }
            },
            methods: {
                target(t, e) {
                    var n = t.linkType, i = t.linkUrl, o = t.wxJumpPull, r = void 0 !== o && o, s = t.enableAd, c = void 0 === s ? 0 : s;
                    this.triggerEvent("target", {
                        linkType: n,
                        linkUrl: i,
                        listIndex: e + 1,
                        wxJumpPull: r,
                        enableAd: c
                    });
                },
                close() {
                    this.triggerEvent("close");
                }
            }
        });
    }
}, [ [ 1119, 0 ] ] ]);
//# sourceMappingURL=index.js.map