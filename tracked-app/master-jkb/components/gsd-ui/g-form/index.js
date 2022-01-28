Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../behaviors/formController"), t = require("../behaviors/primarySecondButton"), o = require("../utils/validator"), i = require("../utils/helper");

Component({
    __loading__: !1,
    options: {
        multipleSlots: !0
    },
    behaviors: [ t ],
    relations: {
        "form-fields": {
            type: "descendant",
            target: e
        }
    },
    properties: {
        model: {
            type: Object,
            value: {}
        },
        rules: {
            type: Object,
            value: {},
            observer: function(e) {
                e && this.resetFormFiels();
            }
        },
        tip: Boolean,
        showAgree: Boolean,
        autoAgree: Boolean,
        disabled: Boolean,
        buttonDirection: {
            type: String,
            value: "horizontal"
        },
        validateType: {
            type: Object,
            value: {}
        }
    },
    data: {
        _isAgree: !1,
        _tipsShow: !1,
        _tipsMessage: "表单提交失败"
    },
    methods: {
        getFormFields: function() {
            return this.getRelationNodes("form-fields");
        },
        resetFormFiels: function() {
            (this.getFormFields() || []).forEach(function(e) {
                e.setData({
                    _status: "",
                    _statusMessage: ""
                });
            });
        },
        noticeFormFiels: function(e) {
            var t = this.getFormFields();
            this.showTopTips(e[0]), t.length > 0 && t.forEach(function(t) {
                e.forEach(function(e) {
                    i.standardPath(t.id) === i.standardPath(e.name) && t.warn && t.warn(e);
                });
            });
        },
        showTopTips: function(e) {
            var t = this;
            console.log("顶部通知框: ", e), e && this.setData({
                _tipsShow: !0,
                _tipsMessage: e.message || "表单输入有误"
            }, function() {
                setTimeout(function() {
                    t.setData({
                        _tipsShow: !1,
                        _tipsMessage: ""
                    });
                }, 3e3);
            });
        },
        handleTipsClose: function(e) {
            this.setData({
                _tipsShow: e.detail.isShow
            });
        },
        handleSubmit: function(e) {
            var t = this, i = this.properties, s = i.model, r = i.rules, n = i.validateType;
            if (this.__loading__) return !1;
            console.log("g-form 提交表单：", s, r), this.__loading__ = !0, o(s, r || {}, n || {}).then(function(o) {
                t.__loading__ = !1, 0 === o.length ? t.triggerEvent("submit", {
                    validStatus: !0,
                    value: s,
                    formId: e.detail.formId
                }) : (o = Array.from(new Set(o.map(function(e) {
                    return e.name;
                }))).map(function(e) {
                    var t;
                    return o.some(function(o) {
                        if (o.name === e) return t = o, !0;
                    }), t;
                }), t.noticeFormFiels(o), t.triggerEvent("submit", {
                    validStatus: !1,
                    value: o
                }));
            }).catch(function(e) {
                console.log("g-form error：", e), t.__loading__ = !1;
            });
        }
    }
});