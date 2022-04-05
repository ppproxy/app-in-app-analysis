function observer(e) {
                e && this.resetFormFiels();
}
function getFormFields() {
            return this.getRelationNodes("form-fields");
}
function resetFormFiels() {
            (this.getFormFields() || []).forEach(function(e) {
                e.setData({
                    _status: "",
                    _statusMessage: ""
                });
            });
}
function noticeFormFiels(e) {
            var t = this.getFormFields();
            this.showTopTips(e[0]), t.length > 0 && t.forEach(function(t) {
                e.forEach(function(e) {
                    i.standardPath(t.id) === i.standardPath(e.name) && t.warn && t.warn(e);
                });
            });
}
function showTopTips(e) {
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
}
function handleTipsClose(e) {
            this.setData({
                _tipsShow: e.detail.isShow
            });
}
function handleSubmit(e) {
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
