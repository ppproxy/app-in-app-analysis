function ready() {
        this.setData({
            __id: this.id
        });
}
function handleChange(e) {
            this.triggerEvent("change", e.detail);
}
