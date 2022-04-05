function ready() {
        this.properties.autoAgree && this.setData({
            _agreeChecked: this.properties.autoAgree
        });
}
function handleAgreeChange(e) {
            this.setData({
                _agreeChecked: e.detail.value
            });
}
function handelButtonListTap(e) {
            e.currentTarget.dataset.item && this.triggerEvent("buttonListTap", {
                item: e.currentTarget.dataset.item
            });
}
