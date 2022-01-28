var e = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1, t = require("../behaviors/formController");

Component({
    behaviors: [ t ],
    options: {
        multipleSlots: !0
    },
    properties: {
        label: {
            type: String,
            value: ""
        },
        desc: {
            type: String,
            value: ""
        },
        min: {
            type: Number,
            value: -e
        },
        max: {
            type: Number,
            value: e
        },
        value: {
            type: Number,
            value: 0,
            observer: function(e) {
                var t = this.properties.fixed;
                this.setData({
                    _value: e.toFixed(t)
                });
            }
        },
        step: {
            type: Number,
            value: 1
        },
        fixed: {
            type: Number,
            value: 0
        },
        disabled: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        _value: 0
    },
    methods: {
        commanValue: function(e) {
            var t = this.properties, a = t.step, u = t.min, l = t.max, s = this.data._value, i = "sub" === e ? +s - a : +s + a;
            ("sub" === e && i >= u || "plus" === e && i <= l) && this.triggerEvent("change", {
                value: i
            });
        },
        subValue: function() {
            this.commanValue("sub");
        },
        plusValue: function() {
            this.commanValue("plus");
        }
    }
});