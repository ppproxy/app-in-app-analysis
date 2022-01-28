Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../behaviors/formController");

Component({
    externalClasses: [ "dropdown-class" ],
    behaviors: [ e ],
    relations: {
        "../g-form-item/index": {
            type: "child"
        },
        "../g-form/index": {
            type: "ancestor"
        }
    },
    properties: {
        label: String,
        actionText: {
            type: String,
            value: "选择"
        },
        range: {
            type: Array,
            value: [],
            __type__: function(e) {
                return e;
            }
        },
        rangeKey: {
            type: String,
            value: "name",
            observer: function(e) {
                this.setData({
                    _rangeKey: e
                });
            }
        },
        value: {
            type: [ String, Array ],
            observer: function(e) {
                this.initStatus(e), this.initValue();
            }
        },
        type: {
            type: String,
            value: "formItem"
        },
        mode: {
            type: String,
            value: "selector"
        },
        disabled: {
            type: Boolean
        },
        start: {
            type: String
        },
        end: {
            type: String
        },
        fields: {
            type: String,
            value: "day"
        },
        customItem: {
            type: String
        },
        splitKey: {
            type: String,
            value: ",",
            observer: function(e) {
                this.setData({
                    _splitKey: e
                });
            }
        },
        placeholder: {
            type: String,
            value: "请选择",
            observer: function(e) {
                this.properties.value || this.setData({
                    _displayName: e
                });
            }
        }
    },
    data: {
        _readonly: !1,
        _rangeKey: "name",
        _splitKey: ",",
        _displayName: "请选择",
        _valueIndex: void 0,
        _status: "",
        _statusMessage: "",
        _isEmpty: !0
    },
    ready: function() {
        var e = this.properties, t = e.mode, a = e.splitKey;
        "region" === t && this.setData({
            _rangeKey: "",
            _splitKey: "," === a ? "" : a
        }), "multiSelector" === t && this.setData({
            _valueIndex: []
        }), this.initValue();
    },
    methods: {
        isValueEmpty: function(e) {
            var t = this.properties.mode;
            return "selector" === t || "date" === t || "time" === t || "none" === t ? void 0 === e || "" === e : Array.isArray(e) && 0 === e.length;
        },
        initStatus: function(e) {
            var t = this.properties.placeholder;
            this.isValueEmpty(e) ? this.setData({
                _status: "",
                _statusMessage: "",
                _isEmpty: !0,
                _displayName: t,
                _valueIndex: e || ""
            }) : this.setData({
                _isEmpty: !1,
                _status: "",
                _statusMessage: ""
            });
        },
        initValue: function() {
            var e = this.properties, t = e.value, a = e.mode, i = e.splitKey;
            if (!Array.isArray(t) && t || Array.isArray(t) && t.length > 0) {
                if ("none" === a) return void this.setData({
                    _isEmpty: !1,
                    _readonly: !0,
                    _displayName: Array.isArray(t) ? t.join("") : t
                });
                if ("selector" === a || "multiSelector" === a) Array.isArray(t) ? t.length > 0 && this.setValue(t) : this.setValue(t); else {
                    var r = "";
                    "region" === a ? Array.isArray(t) && (r = t.join(i)) : r = t, this.setData({
                        _isEmpty: !1,
                        _valueIndex: t,
                        _displayName: r
                    });
                }
            }
        },
        setValue: function(e) {
            var t, a, i = this.properties, r = i.range, n = i.splitKey, s = this.data._rangeKey;
            if (Array.isArray(e)) {
                var l = [];
                a = e.map(function(e, t) {
                    var a;
                    return r[t].some(function(t, i) {
                        if (t.value === e) return a = i, l.push(t.displayName || t[s]), !1;
                    }), a;
                }), t = l.join(n);
            } else r.some(function(i, r) {
                if (i.value === e) return a = r, t = i.displayName || i[s] || i.value, !1;
            });
            if (void 0 === a) return console.warn("无法检索到选项，请检查传入的 value 值和 range 值是否对应"), !1;
            this.setData({
                _isEmpty: !1,
                _valueIndex: a,
                _displayName: t
            });
        },
        handleChange: function(e) {
            this.initStatus();
            var t = this.properties.mode;
            "selector" === t || "multiSelector" === t ? this.triggerRangeChange(e) : "time" === t || "date" === t ? this.triggerDateTimeChange(e) : "region" === t && this.triggerRegionChange(e);
        },
        triggerRangeChange: function(e) {
            var t, a, i, r = e.detail.value, n = this.properties, s = n.range, l = n.splitKey, o = this.data._rangeKey;
            s.length < 1 || (Array.isArray(r) ? (i = r.map(function(e, t) {
                var a = s[t];
                return a[e = e || 0] && (a.displayName || a[e][o]);
            }), a = r.map(function(e, t) {
                var a = s[t];
                return a[e = e || 0] && a[e].value;
            }), t = i.filter(function(e) {
                return !!e;
            }).join(l)) : (t = s[r]._displayName || s[r][o], a = s[r].value), this.setData({
                _isEmpty: !1,
                _valueIndex: e.detail.value,
                _displayName: t
            }), this.triggerEvent("change", {
                value: a,
                index: r
            }));
        },
        triggerDateTimeChange: function(e) {
            this.setData({
                _isEmpty: !1,
                _valueIndex: e.detail.value,
                _displayName: e.detail.value
            }), this.triggerEvent("change", e.detail);
        },
        triggerRegionChange: function(e) {
            var t = new Set(e.detail.value), a = Array.from(t).filter(function(e) {
                return -1 === [ "县", "省直辖县级行政区划" ].indexOf(e);
            }).join(this.properties.splitKey);
            this.setData({
                _isEmpty: !1,
                _valueIndex: e.detail.value,
                _displayName: a
            }), this.triggerEvent("change", e.detail);
        },
        triggerColumnchange: function(e) {
            var t = this.properties.range, a = this.data._valueIndex, i = e.detail, r = i.column, n = i.value, s = t[r][n].value;
            a[r] = n;
            for (var l = r + 1; l < t.length; l++) a[l] = 0;
            this.setData({
                _valueIndex: a
            }), this.triggerEvent("columnchange", {
                column: r,
                index: n,
                value: s
            });
        },
        triggerCancel: function(e) {
            this.triggerEvent("cancel", e.detail);
        },
        handleActionTap: function(e) {
            this.triggerEvent("actionTap", e.detail);
        }
    }
});