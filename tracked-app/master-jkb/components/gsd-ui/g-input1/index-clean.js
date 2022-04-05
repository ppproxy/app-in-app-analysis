function observer(e) {
                console.log(e, this.__value__), e !== this.__value__ && (this.__value__ = e, this.setData({
                    _value: e
                }), this.data._status && this.resetStatus());
}
function observer(e) {
                this.setData({
                    _focus: e
                });
}
function ready() {
        var e = this;
        this.initSlots();
        var t = wx.getStorageSync("inp-timestamp"), a = new Date().getTime();
        if (console.log(a - t), a - t <= 18e4) {
            var i = parseInt(-(a - t - 18e4) / 1e3);
            this.setData({
                _waitTime: i
            });
            var r = setInterval(function() {
                0 === i ? (clearInterval(r), wx.removeStorageSync("inp-timestamp")) : (--i, e.setData({
                    _waitTime: i
                }));
            }, 1e3);
        }
}
function getFormNode() {
            var e = this.getRelationNodes("../g-form/index");
            return e && e[0];
}
function initSlots() {
            this.createSelectorQuery().selectAll(".slot").boundingClientRect().exec(console.log);
}
function resetStatus() {
            this.setData({
                _status: "",
                _statusMessage: ""
            });
}
function validateInput() {
            var t = this;
            if (!this.id) throw new Error("请提供需要校验的组件 ID");
            var i = e({}, this.id, this.__value__), r = this.getFormNode().properties, s = r.rules, n = void 0 === s ? {} : s, o = r.validateType;
            a(i, n, void 0 === o ? {} : o).then(function(e) {
                console.log("form-field validate: ", i, n, e), e.length > 0 ? t.setData({
                    _status: "warn",
                    _statusMessage: e[0].message
                }) : t.resetStatus();
            });
}
function handleTap(e) {
            this.setData({
                _focus: !0
            });
}
function handleInput(e) {
            this.data._status && this.resetStatus(), this.__value__ = e.detail.value, this.triggerEvent("input", e.detail), 
            this.triggerEvent("change", e.detail);
}
function handleFocus(e) {
            this.setData({
                _focus: !0
            }), this.triggerEvent("focus", e.detail);
}
function handleBlur(e) {
            "blur" === this.properties.validateTrigger && this.validateInput(), this.setData({
                _focus: !1
            }), this.triggerEvent("blur", e.detail), this.__value__ !== e.detail.value && (this.__value__ = e.detail.value, 
            this.triggerEvent("input", e.detail), this.triggerEvent("change", e.detail));
}
function handleConfirm(e) {
            this.triggerEvent("confirm", e.detail);
}
function handleTapClear(e) {
            var t = this.properties.disabled, a = this.data._focus;
            if (t) return !1;
            this.triggerEvent("input", {
                value: ""
            }), this.triggerEvent("change", {
                value: ""
            }), a || this.validateInput();
}
function handleTapIcon() {
            var e = this.properties.icon;
            this.triggerEvent("iconTap", {
                type: e
            });
}
function handleVerifyCode() {
            var e = this, t = this.properties.vcodeTime;
            this.setData({
                _waitTime: t
            });
            var a = new Date().getTime();
            wx.setStorageSync("inp-timestamp", a);
            var i = setInterval(function() {
                0 === t ? (clearInterval(i), wx.removeStorageSync("inp-timestamp"), e.setData({
                    _waitTime: 0
                })) : (--t, e.setData({
                    _waitTime: t
                }));
            }, 1e3);
            this.triggerEvent("getVerifyCode", {
                value: ""
            });
}
