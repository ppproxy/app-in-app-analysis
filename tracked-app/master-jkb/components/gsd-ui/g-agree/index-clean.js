function handleChange(e) {
            this.triggerEvent("change", {
                value: e.detail.value.length > 0
            });
}
