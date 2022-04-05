function observer(e) {
                this.setData({
                    _visible: e
                });
}
function handleCancel() {
            this.triggerEvent("cancel");
}
function handleConfirm() {
            this.triggerEvent("confirm");
}
