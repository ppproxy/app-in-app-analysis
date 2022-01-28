var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 32 ], {
    1106: function(t, e, i) {
        "use strict";
        i.r(e), function(t) {
            t.currentModuleId = "m78cd31c3", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m78cd31c3",
                render: function() {
                    this._c("lineStyle", this.lineStyle), !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._i(this._c("descList", this.descList), function(t, e) {
                        t.highlight ? this._c("highlightStyle", this.highlightStyle) : this._c("textStyle", this.textStyle), 
                        t.text;
                    }), this._r();
                }
            };
            i(430);
            t.currentModuleId;
        }.call(this, i(11));
    },
    430: function(t, e, i) {
        "use strict";
        var n = i(65), h = i.n(n), l = i(6), o = i.n(l), r = i(2);
        Object(r.b)({
            data: {
                lineStyle: ""
            },
            properties: {
                text: {
                    type: String,
                    value: ""
                },
                color: {
                    type: String,
                    value: "#333"
                },
                highlightColor: {
                    type: String,
                    value: "#fe7f3f"
                },
                fontSize: {
                    type: String,
                    value: "24rpx"
                },
                lineTwo: {
                    type: Boolean,
                    value: !1
                },
                lineThree: {
                    type: Boolean,
                    String: !1
                },
                font: {
                    type: String
                },
                ellipsis: {
                    type: Boolean,
                    String: !1
                },
                lineHight: {
                    type: String,
                    value: ""
                }
            },
            computed: {
                descList() {
                    var t;
                    return this.text ? h()(t = this.text.split(/[{}]/)).call(t, function(t, e, i) {
                        return t.push({
                            text: e.replace("\\n", "\n"),
                            highlight: i % 2 == 1
                        }), t;
                    }, []) : [];
                },
                textStyle() {
                    var t, e, i;
                    return o()(t = o()(e = o()(i = "font-size: ".concat(this.fontSize, ";color: ")).call(i, this.color, ";font-weight:")).call(e, this.font, ";line-height:")).call(t, this.lineHight);
                },
                highlightStyle() {
                    var t, e, i;
                    return o()(t = o()(e = o()(i = "font-size: ".concat(this.fontSize, ";color: ")).call(i, this.highlightColor, ";font-weight:")).call(e, this.font, ";line-height:")).call(t, this.lineHight);
                }
            },
            methods: {
                getLineStyle() {
                    var t = this.lineTwo, e = this.lineThree, i = this.ellipsis;
                    this.lineStyle = t ? "line-two highlight-text" : e ? "line-three highlight-text" : i ? "ellipsis highlight-text" : "highlight-text";
                }
            },
            ready() {
                this.getLineStyle();
            }
        });
    }
}, [ [ 1106, 0 ] ] ]);
//# sourceMappingURL=index.js.map