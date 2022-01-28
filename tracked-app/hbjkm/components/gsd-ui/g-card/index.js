Component({
    options: {},
    properties: {
        iconType: {
            type: String,
            value: "radio"
        },
        checked: {
            type: Boolean,
            value: !1
        },
        disabled: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        __radioType: !1
    },
    ready: function() {
        "radio" === this.properties.iconType && this.setData({
            __radioType: !0
        });
    },
    methods: {
        bindtap: function() {
            var e = this.properties, i = e.iconType, t = e.disabled;
            if ("none" !== i && !t) {
                var o = this.properties.checked;
                this.triggerEvent("change", {
                    value: !o
                });
            }
        }
    }
});