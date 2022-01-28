Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../gsd-lib/event/index");

Component({
    properties: {
        value: String,
        autofocus: Boolean,
        placeholder: {
            type: String,
            value: "搜索"
        },
        fill: Boolean,
        withText: Boolean,
        needChoose: Boolean,
        disabled: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        _isSearch: !1,
        _focus: !1,
        _value: ""
    },
    ready: function() {
        this.init(), this.initListener();
    },
    detached: function() {
        this.removeListener();
    },
    methods: {
        initListener: function() {
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
        },
        removeListener: function() {
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
        },
        init: function() {
            var e = this.properties.autofocus;
            e && this.setData({
                _isSearch: e,
                _focus: e
            });
        },
        handleInput: function(e) {
            this.setData({
                _value: e.detail.value,
                value: e.detail.value
            }), this.triggerEvent("change", e.detail);
        },
        handleConfirm: function(e) {
            this.setData({
                _focus: !1
            }), this.triggerEvent("confirm", e.detail);
        },
        handleInputFocus: function(e) {
            this.setData({
                _isSearch: !0,
                _focus: !0
            }), this.triggerEvent("focus", e.detail);
        },
        handleBlur: function(e) {
            this.setData({
                _focus: !1
            }), this.triggerEvent("blur", e.detail);
        },
        handleClear: function(e) {
            this.setData({
                _focus: !0,
                _value: "",
                value: ""
            }), this.triggerEvent("change", {
                value: ""
            });
        },
        handleCancel: function(e) {
            this.setData({
                _isSearch: !1,
                _value: "",
                value: ""
            }), this.triggerEvent("cancel", e.detail);
        }
    }
});