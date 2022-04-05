function observer(e, t) {
                this.resetStatus(), e && e !== t && this.validateValue.bind(this);
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
function validateValue() {
            var t = this;
            if (!this.id) throw new Error("请提供需要校验的组件 ID");
            var r = e({}, this.id, this.properties.value), a = this.getFormNode().properties, s = a.rules, o = void 0 === s ? {} : s, n = a.validateType;
            i(r, o, void 0 === n ? {} : n).then(function(e) {
                console.log("form-field validate: ", r, o, e), e.length > 0 ? t.setData({
                    _status: "warn",
                    _statusMessage: e[0].message
                }) : t.resetStatus();
            });
}
function handleTapClear(e) {
            if (this.properties.disabled) return !1;
}
function handleTapIcon() {
            var e = this.properties.icon;
            this.triggerEvent("iconTap", {
                type: e
            });
}
function handleActionTap(e) {
            this.triggerEvent("actionTap", e.detail);
}
