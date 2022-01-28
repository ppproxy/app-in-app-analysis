Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../behaviors/formController"), t = require("../behaviors/primarySecondButton"), i = require("../utils/validator"), n = require("../utils/helper"), o = require("../../gsd-lib/event/index"), r = require("../../gsd-lib/utils/index").debounce;

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
        showTips: {
            type: Boolean,
            value: !0
        },
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
        },
        submitEvent: String,
        tipsEvent: String,
        debounceDuration: {
            type: Number,
            value: 300
        }
    },
    data: {
        _isAgree: !1,
        _tipsShow: !1,
        _tipsMessage: "表单提交失败"
    },
    onLoad: function() {
        this.handleSubmit = r(this.handleSubmit, this.props.debounceDuration);
    },
    ready: function() {
        var e = this, t = this.properties, i = t.submitEvent, n = t.tipsEvent;
        i && o.addEventListener(i, function() {
            return e.handleSubmit();
        }), n && o.addEventListener(n, function(t) {
            return e.showTopTips({
                message: t.target
            });
        });
    },
    detached: function() {
        var e = this.properties.submitEvent;
        e && o.removeEventListener(e);
    },
    methods: {
        getFormField: function(e) {
            var t = this.getFormFields();
            if (t && t.length > 0) return t.find(function(t) {
                return n.standardPath(t.id) === n.standardPath(e);
            });
        },
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
                    n.standardPath(t.id) === n.standardPath(e.name) && t.warn && t.warn(e);
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
        handleSecondTap: function(e) {
            this.triggerEvent("second", {
                event: e
            });
        },
        handleSubmit: function(e) {
            var t = this, n = this.properties, o = n.model, r = n.rules, s = n.validateType;
            if (this.__loading__) return !1;
            console.log("g-form 提交表单：", o, r), this.__loading__ = !0, i(o, r || {}, s || {}).then(function(i) {
                t.__loading__ = !1, 0 === i.length ? t.triggerEvent("submit", {
                    validStatus: !0,
                    value: o,
                    formId: e && e.detail && e.detail.formId || "no-formID"
                }) : (console.log(i), i = Array.from(new Set(i.map(function(e) {
                    return e.name;
                }))).map(function(e) {
                    var t = void 0;
                    return i.some(function(i) {
                        if (i.name === e) return t = i, !0;
                    }), t;
                }), t.noticeFormFiels(i), t.triggerEvent("submit", {
                    validStatus: !1,
                    value: i
                }));
            }).catch(function(e) {
                console.log("g-form error：", e), t.__loading__ = !1;
            });
        }
    }
});