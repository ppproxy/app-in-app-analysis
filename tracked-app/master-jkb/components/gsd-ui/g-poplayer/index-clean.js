function observer(t, i) {
                t !== i && (t ? e.dispatch("g-textarea__hidden") : setTimeout(function() {
                    e.dispatch("g-textarea__show");
                }, 50), this.setData({
                    _visible: t
                }));
}
function ready() {
        var e = this.properties.direction;
        "left" !== e && "right" !== e || this.setData({
            __levelDirection: !0
        });
}
function handleCloseSelf(e) {
            this.triggerEvent("close", {
                visible: !1
            });
}
