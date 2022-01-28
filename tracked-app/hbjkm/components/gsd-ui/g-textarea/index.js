function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../behaviors/formController"), a = require("../../gsd-lib/event/index"), i = require("../utils/validator");

Component({
    externalClasses: [ "action-class" ],
    options: {
        multipleSlots: !0
    },
    __value__: "",
    behaviors: [ t ],
    relations: {
        "../g-form-item/index": {
            type: "child"
        },
        "../g-form/index": {
            type: "ancestor"
        }
    },
    properties: {
        value: {
            type: String,
            observer: function(e) {
                e !== this.__value__ && (this.__value__ = e, this.setData({
                    _value: e
                }));
            }
        },
        placeholder: {
            type: String,
            value: "请输入内容"
        },
        label: String,
        disabled: Boolean,
        maxlength: {
            type: Number,
            value: 140
        },
        autoFocus: {
            type: Boolean,
            value: !1
        },
        focus: {
            type: Boolean,
            value: !1,
            observer: function(e) {
                this.setData({
                    _focus: e
                });
            }
        },
        height: {
            type: Number,
            value: 144
        },
        autoHeight: {
            type: Boolean,
            value: !1
        },
        cursorSpacing: {
            type: Number,
            value: 72
        },
        cursor: {
            type: Number,
            value: 0
        },
        showConfirmBar: {
            type: Boolean,
            value: !1
        },
        selectionStart: {
            type: Number,
            value: -1
        },
        selectionEnd: {
            type: Number,
            value: -1
        },
        adjustPosition: {
            type: Boolean,
            value: !0
        },
        showCount: Boolean
    },
    data: {
        _hideElement: !1,
        _value: "",
        _status: "",
        _statusMessage: "",
        _focus: !1,
        _platform: wx.getSystemInfoSync().platform.toLowerCase()
    },
    ready: function() {
        this.initListener();
    },
    detached: function() {
        this.removeListener();
    },
    methods: {
        initListener: function() {
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
        },
        removeListener: function() {
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
        },
        getFormNode: function() {
            var e = this.getRelationNodes("../g-form/index");
            return e && e[0];
        },
        resetStatus: function() {
            this.setData({
                _status: "",
                _statusMessage: ""
            });
        },
        handleTap: function() {
            this.setData({
                _focus: !0
            });
        },
        validateInput: function() {
            var t = this;
            if (!this.id) throw new Error("请提供需要校验的组件 ID");
            var a = e({}, this.id, this.__value__), n = this.getFormNode(), s = n && n.properties && n.properties.rules;
            s && i(a, s).then(function(e) {
                console.log("form-field validate: ", a, s, e), e.length > 0 ? t.warn(e[0]) : t.resetStatus();
            });
        },
        handleInput: function(e) {
            this.data._status && this.resetStatus(), this.__value__ = e.detail.value, this.setData({
                _value: e.detail.value
            }), this.triggerEvent("input", e.detail), this.triggerEvent("change", e.detail);
        },
        handleFocus: function(e) {
            console.log("textarea focus", e), this.triggerEvent("focus", e.detail);
        },
        handleBlur: function(e) {
            console.log("textarea blur", e), this.validateInput(), this.triggerEvent("blur", e.detail);
        },
        handleConfirm: function(e) {
            this.triggerEvent("confirm", e.detail);
        }
    }
});