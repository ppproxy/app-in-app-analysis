function ready() {
        "radio" === this.properties.iconType && this.setData({
            __radioType: !0
        });
}
function bindtap() {
            var e = this.properties, i = e.iconType, t = e.disabled;
            if ("none" !== i && !t) {
                var o = this.properties.checked;
                this.triggerEvent("change", {
                    value: !o
                });
            }
}
