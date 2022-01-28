function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = require("../../../services/league"), a = require("../../../components/gsd-ui/utils/validator");

Page({
    data: {
        formData: {
            org: "",
            name: "",
            email: "",
            phone: "",
            otherQuestion: ""
        },
        rules: {
            org: [ {
                type: "required",
                message: "请输入公司/单位名称"
            }, {
                type: "ruleOrgLength",
                message: "输入不能超过25个字"
            } ],
            name: [ {
                type: "required",
                message: "请输入联系人"
            }, {
                type: "ruleNameLength",
                message: "输入不能超过10个字"
            } ],
            email: [ {
                type: "required",
                message: "请填写邮箱"
            }, {
                type: "email",
                message: "请输入正确的邮箱"
            } ],
            phone: [ {
                type: "required",
                message: "请输入手机号码"
            }, {
                type: "mobile",
                message: "请输入正确的手机号码"
            }, {
                type: "rulePhoneLength",
                message: "输入不能超过22个字符"
            } ],
            otherQuestion: [ {
                type: "ruleOtherLength",
                message: "输入不能超过100个字"
            } ]
        },
        validateType: {
            ruleOrgLength: function(e, t) {
                return !(e.length > 25);
            },
            ruleNameLength: function(e, t) {
                return !(e.length > 10);
            },
            rulePhoneLength: function(e, t) {
                return !(e.length > 22);
            },
            ruleOtherLength: function(e, t) {
                return !(e.length > 100);
            }
        },
        miniProgramId: "",
        disabled: !0
    },
    onLoad: function(e) {
        var a = this;
        console.log("query", e), this.setData({
            miniProgramId: e.id
        }), "1" == e.status && t.getProgramAddInfo(e.id).then(function(e) {
            var t = {
                org: e.companyName,
                name: e.contacts,
                email: e.email,
                phone: e.telephone,
                otherQuestion: e.otherQuestion
            };
            a.setData({
                formData: t
            }), a.validFrom();
        });
    },
    handleChange: function(t) {
        this.setData(e({}, "formData." + t.target.id, t.detail.value)), this.validFrom();
    },
    validFrom: function() {
        var e = this;
        a(this.data.formData, this.data.rules, this.data.validateType).then(function(t) {
            var a = !0;
            0 == t.length && (a = !1), e.setData({
                disabled: a
            });
        });
    },
    handleFormSubmit: function(e) {
        if (console.log("submit: ", e), e.detail.validStatus) {
            var a = {
                miniProgramId: this.data.miniProgramId,
                companyName: e.detail.value.org,
                contacts: e.detail.value.name,
                email: e.detail.value.email,
                telephone: e.detail.value.phone,
                otherQuestion: e.detail.value.otherQuestion
            };
            t.addProgramTest(a).then(function(e) {
                if ("success" == e) {
                    var t = getCurrentPages();
                    t[t.length - 2].setData({
                        status: 1
                    }), wx.navigateBack({
                        delta: 1
                    });
                }
            });
        }
    }
});