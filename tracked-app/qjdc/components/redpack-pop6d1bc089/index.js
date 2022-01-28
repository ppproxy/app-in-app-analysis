var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 66 ], {
    1117: function(t, e, i) {
        "use strict";
        i.r(e), function(t) {
            t.currentModuleId = "m6d1bc089", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m6d1bc089",
                render: function() {
                    this._c("benefitList", this.benefitList).length > 0 && (!this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._c("options.bannerImg", this.options.bannerImg) && this._c("options.bannerImg", this.options.bannerImg), 
                    this._c("options.title", this.options.title), this._i(this._c("benefitList", this.benefitList), function(t, e) {
                        t.benefitTitle, t.benefitNotice, t.number, t.unit, t.btnTitle;
                    })), this._r();
                }
            };
            i(440);
            t.currentModuleId;
        }.call(this, i(11));
    },
    440: function(t, e, i) {
        "use strict";
        var n = i(44), o = i.n(n), s = i(2);
        i(5), i(9), i(4), i(134);
        Object(s.b)({
            data: {
                benefitList: []
            },
            properties: {
                options: {
                    type: Object,
                    value: {}
                }
            },
            attached() {
                var t = this.options.benefits;
                t && t.length > 0 && (t.forEach(function(t, e) {
                    var i = t.preferentialDesc.match(/\d+([.]{1}\d+){0,1}/g), n = t.preferentialDesc.match(/[\u4E00-\u9FA5]+/g);
                    i && n ? (t.isShow = !0, t.number = i[0], t.unit = n[0]) : t.isShow = !1;
                }), this.benefitList = o()(t).call(t, function(t) {
                    return t.isShow;
                }), this.triggerEvent("handlePopShow", {
                    isShowPop: this.benefitList.length > 0
                }));
            },
            computed: {},
            methods: {
                target(t, e) {
                    var i = t.linkType, n = t.linkUrl, o = t.wxJumpPull, s = void 0 !== o && o, r = t.enableAd, c = void 0 === r ? 0 : r;
                    this.triggerEvent("target", {
                        linkType: i,
                        linkUrl: n,
                        listIndex: e + 1,
                        wxJumpPull: s,
                        enableAd: c
                    });
                },
                close() {
                    this.triggerEvent("close");
                }
            }
        });
    }
}, [ [ 1117, 0 ] ] ]);
//# sourceMappingURL=index.js.map