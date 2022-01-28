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

var t = require("../behaviors/formController"), i = require("../utils/validator");

Component({
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
        slot: Boolean,
        label: String,
        value: {
            type: String,
            value: "",
            observer: function(e, t) {
                this.resetStatus(), e && e !== t && this.validateValue.bind(this);
            }
        },
        placeholder: {
            type: String,
            value: "请输入"
        },
        disabled: Boolean,
        icon: String,
        actionText: String
    },
    data: {
        _status: "",
        _value: "",
        _statusMessage: ""
    },
    methods: {
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
        validateValue: function() {
            var t = this;
            if (!this.id) throw new Error("请提供需要校验的组件 ID");
            var a = e({}, this.id, this.properties.value), r = this.getFormNode().properties, s = r.rules, o = void 0 === s ? {} : s, n = r.validateType;
            i(a, o, void 0 === n ? {} : n).then(function(e) {
                console.log("form-field validate: ", a, o, e), e.length > 0 ? t.setData({
                    _status: "warn",
                    _statusMessage: e[0].message
                }) : t.resetStatus();
            });
        },
        handleTapClear: function(e) {
            if (this.properties.disabled) return !1;
        },
        handleTapIcon: function() {
            var e = this.properties.icon;
            this.triggerEvent("iconTap", {
                type: e
            });
        },
        handleActionTap: function(e) {
            this.triggerEvent("actionTap", e.detail);
        }
    }
});