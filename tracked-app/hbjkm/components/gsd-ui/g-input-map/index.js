function e(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../behaviors/formController"), i = require("../utils/validator"), a = require("../../../utils/util");

Component({
    relations: {
        "../g-form-item/index": {
            type: "child"
        },
        "../g-form/index": {
            type: "ancestor"
        }
    },
    __value__: "",
    options: {
        multipleSlots: !0
    },
    behaviors: [ t ],
    properties: {
        iconDesc: {
            type: String,
            value: ""
        },
        label: String,
        value: {
            type: String,
            value: "",
            observer: function(e) {
                console.log(e, this.__value__), e !== this.__value__ && (this.__value__ = e, this.setData({
                    _value: e
                }), this.data._status && this.resetStatus());
            }
        },
        placeholder: {
            type: String,
            value: "请输入"
        },
        validateTrigger: {
            type: String,
            value: "blur"
        },
        type: {
            type: String,
            value: "text"
        },
        password: Boolean,
        clearable: Boolean,
        disabled: Boolean,
        prepend: Boolean,
        append: Boolean,
        maxlength: {
            type: Number,
            value: 140
        },
        cursorSpacing: {
            type: Number,
            value: 0
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
        confirmType: {
            type: String,
            value: "done"
        },
        confirmHold: Boolean,
        cursor: Number,
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
        icon: {
            type: String,
            value: ""
        }
    },
    data: {
        _status: "",
        _value: "",
        _statusMessage: "",
        _focus: !1
    },
    ready: function() {
        this.initSlots();
    },
    methods: {
        bindSelect: function() {
            var e = this;
            a.chooseLocation().then(function(t) {
                t.address;
                e.triggerEvent("bindSelect", {
                    address: t.address
                });
            });
        },
        initSlots: function() {
            this.createSelectorQuery().selectAll(".slot").boundingClientRect().exec(console.log);
        },
        resetStatus: function() {
            this.setData({
                _status: "",
                _statusMessage: ""
            });
        },
        validateInput: function() {
            var t = this;
            if (!this.id) throw new Error("请提供需要校验的组件 ID");
            var a = e({}, this.id, this.__value__), n = this.getFormNode();
            if (n) {
                var r = n.properties, s = r.rules, l = void 0 === s ? {} : s, o = r.validateType;
                i(a, l, void 0 === o ? {} : o).then(function(e) {
                    console.log("form-field validate: ", a, l, e), e.length > 0 ? t.warn(e[0]) : t.resetStatus();
                });
            }
        },
        handleTap: function(e) {
            this.setData({
                _focus: !0
            });
        },
        handleInput: function(e) {
            this.data._status && this.resetStatus(), this.__value__ = e.detail.value, this.triggerEvent("input", e.detail), 
            this.triggerEvent("change", e.detail);
        },
        handleFocus: function(e) {
            this.setData({
                _focus: !0
            }), this.triggerEvent("focus", e.detail);
        },
        handleBlur: function(e) {
            "blur" === this.properties.validateTrigger && this.validateInput(), this.setData({
                _focus: !1
            }), this.triggerEvent("blur", e.detail), this.__value__ !== e.detail.value && (this.__value__ = e.detail.value, 
            this.triggerEvent("input", e.detail), this.triggerEvent("change", e.detail));
        },
        handleConfirm: function(e) {
            this.triggerEvent("confirm", e.detail);
        },
        handleTapClear: function(e) {
            var t = this.properties.disabled, i = this.data._focus;
            if (t) return !1;
            this.triggerEvent("input", {
                value: ""
            }), this.triggerEvent("change", {
                value: ""
            }), i || this.validateInput();
        },
        handleTapIcon: function() {
            var e = this.properties.icon;
            this.triggerEvent("iconTap", {
                type: e
            });
        }
    }
});