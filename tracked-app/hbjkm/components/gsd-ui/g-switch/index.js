Component({
    properties: {
        value: Boolean,
        label: String,
        desc: String,
        disabled: Boolean
    },
    data: {},
    methods: {
        handleChange: function() {
            this.properties.disabled || (wx.vibrateShort(), this.triggerEvent("change", {
                value: !this.properties.value
            }));
        }
    }
});