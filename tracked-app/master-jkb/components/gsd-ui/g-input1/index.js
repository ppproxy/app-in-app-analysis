var e = require("../../../@babel/runtime/helpers/defineProperty");

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../behaviors/formController"), a = require("../utils/validator");

Component({
    __value__: "",
    options: {
        multipleSlots: !0
    },
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
        vcodeTime: {
            type: String,
            value: "60"
        },
        type: {
            type: String,
            value: "text"
        },
        password: Boolean,
        clearable: Boolean,
        vcode: Boolean,
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
        _focus: !1,
        _waitTime: 0
    },
    ready: function() {
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
    },
    methods: {
        getFormNode: function() {
            var e = this.getRelationNodes("../g-form/index");
            return e && e[0];
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
            var i = e({}, this.id, this.__value__), r = this.getFormNode().properties, s = r.rules, n = void 0 === s ? {} : s, o = r.validateType;
            a(i, n, void 0 === o ? {} : o).then(function(e) {
                console.log("form-field validate: ", i, n, e), e.length > 0 ? t.setData({
                    _status: "warn",
                    _statusMessage: e[0].message
                }) : t.resetStatus();
            });
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
            var t = this.properties.disabled, a = this.data._focus;
            if (t) return !1;
            this.triggerEvent("input", {
                value: ""
            }), this.triggerEvent("change", {
                value: ""
            }), a || this.validateInput();
        },
        handleTapIcon: function() {
            var e = this.properties.icon;
            this.triggerEvent("iconTap", {
                type: e
            });
        },
        handleVerifyCode: function() {
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
    }
});