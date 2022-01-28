var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 33 ], {
    1120: function(t, e, i) {
        "use strict";
        i.r(e), function(t) {
            t.currentModuleId = "m1fe74194", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m1fe74194",
                render: function() {
                    this._c("lineWrap", this.lineWrap), !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._i(this._c("descList", this.descList), function(t, e) {
                        t.highlight ? this._c("highlightStyle", this.highlightStyle) : this._c("textStyle", this.textStyle), 
                        t.text;
                    }), this._r();
                }
            };
            i(443);
            t.currentModuleId;
        }.call(this, i(11));
    },
    443: function(t, e, i) {
        "use strict";
        var n = i(65), o = i.n(n), h = i(6), r = i.n(h), c = i(2);
        Object(c.b)({
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
                fontWeight: {
                    type: Number,
                    value: 400
                },
                lineWrap: {
                    type: Boolean,
                    value: !1
                }
            },
            computed: {
                descList() {
                    var t;
                    return this.text ? o()(t = this.text.split(/[\{\}]/)).call(t, function(t, e, i) {
                        return t.push({
                            text: e,
                            highlight: i % 2 == 1
                        }), t;
                    }, []) : [];
                },
                textStyle() {
                    var t, e;
                    return r()(t = r()(e = "font-size: ".concat(this.fontSize, ";color: ")).call(e, this.color, ";font-weight:")).call(t, this.fontWeight);
                },
                highlightStyle() {
                    var t, e;
                    return r()(t = r()(e = "font-size: ".concat(this.fontSize, ";color: ")).call(e, this.highlightColor, ";font-weight:")).call(t, this.fontWeight);
                }
            },
            methods: {}
        });
    }
}, [ [ 1120, 0 ] ] ]);
//# sourceMappingURL=index.js.map