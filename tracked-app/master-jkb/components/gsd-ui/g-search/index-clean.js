function ready() {
        this.init(), this.initListener();
}
function detached() {
        this.removeListener();
}
function initListener() {
            var t = this;
            e.addEventListener("g-search__blur", function() {
                t.setData({
                    _isSearch: !1,
                    _focus: !1
                });
            }, this), e.addEventListener("g-search__focus", function() {
                t.setData({
                    _isSearch: !0,
                    _focus: !0
                });
            }, this);
}
function removeListener() {
            var t = this;
            e.removeSingleEventListener("g-search__blur", function() {
                t.setData({
                    _isSearch: !1,
                    _focus: !1
                });
            }, this), e.removeSingleEventListener("g-search__focus", function() {
                t.setData({
                    _isSearch: !0,
                    _focus: !0
                });
            }, this);
}
function init() {
            var e = this.properties.autofocus;
            e && this.setData({
                _isSearch: e,
                _focus: e
            });
}
function handleInput(e) {
            this.setData({
                _value: e.detail.value,
                value: e.detail.value
            }), this.triggerEvent("change", e.detail);
}
function handleConfirm(e) {
            this.setData({
                _focus: !1
            }), this.triggerEvent("confirm", e.detail);
}
function handleInputFocus(e) {
            this.setData({
                _isSearch: !0,
                _focus: !0
            }), this.triggerEvent("focus", e.detail);
}
function handleBlur(e) {
            this.setData({
                _focus: !1
            }), this.triggerEvent("blur", e.detail);
}
function handleClear(e) {
            this.setData({
                _focus: !0,
                _value: "",
                value: ""
            }), this.triggerEvent("change", {
                value: ""
            });
}
function handleCancel(e) {
            this.setData({
                _isSearch: !1,
                _value: "",
                value: ""
            }), this.triggerEvent("cancel", e.detail);
}
