function observer(e) {
                e !== this.__value__ && (this.__value__ = e, this.setData({
                    _value: e
                }));
}
function observer(e) {
                this.setData({
                    _focus: e
                });
}
function ready() {
        this.initListener();
}
function detached() {
        this.removeListener();
}
function initListener() {
            var e = this;
            a.addEventListener("g-textarea__hidden", function() {
                e.setData({
                    _hideElement: !0
                });
            }, this), a.addEventListener("g-textarea__show", function() {
                e.setData({
                    _hideElement: !1
                });
            }, this);
}
function removeListener() {
            var e = this;
            a.removeSingleEventListener("g-textarea__hidden", function() {
                e.setData({
                    _hideElement: !0
                });
            }, this), a.removeSingleEventListener("g-textarea__show", function() {
                e.setData({
                    _hideElement: !1
                });
            }, this);
}
function getFormNode() {
            var e = this.getRelationNodes("../g-form/index");
            return e && e[0];
}
function resetStatus() {
            this.setData({
                _status: "",
                _statusMessage: ""
            });
}
function handleTap() {
            this.setData({
                _focus: !0
            });
}
function validateInput() {
            var t = this;
            if (!this.id) throw new Error("请提供需要校验的组件 ID");
            var a = e({}, this.id, this.__value__), n = this.getFormNode(), s = n && n.properties && n.properties.rules;
            s && i(a, s).then(function(e) {
                console.log("form-field validate: ", a, s, e), e.length > 0 ? t.warn(e[0]) : t.resetStatus();
            });
}
function handleInput(e) {
            this.data._status && this.resetStatus(), this.__value__ = e.detail.value, this.setData({
                _value: e.detail.value
            }), this.triggerEvent("input", e.detail), this.triggerEvent("change", e.detail);
}
function handleFocus(e) {
            console.log("textarea focus", e), this.triggerEvent("focus", e.detail);
}
function handleBlur(e) {
            console.log("textarea blur", e), this.validateInput(), this.triggerEvent("blur", e.detail);
}
function handleConfirm(e) {
            this.triggerEvent("confirm", e.detail);
}
