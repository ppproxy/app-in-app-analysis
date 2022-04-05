function observer(e) {
                this.setData({
                    _isShow: e
                });
}
function ready() {
        this.initTimer();
}
function initTimer() {
            var e = this, t = this.properties.duration;
            t > 0 && (clearTimeout(this._timer), this._timer = setTimeout(function() {
                e.handleClose();
            }, 1e3 * t));
}
function handleClose() {
            this.setData({
                _isShow: !1
            }), this.triggerEvent("close", {
                isShow: !1
            });
}
function handleTap() {
            this.navigator();
}
