function handleChange() {
            this.properties.disabled || (wx.vibrateShort(), this.triggerEvent("change", {
                value: !this.properties.value
            }));
}
