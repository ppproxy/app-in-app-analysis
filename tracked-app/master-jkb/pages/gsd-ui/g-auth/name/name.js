var e = require("../../../../@babel/runtime/helpers/defineProperty"), a = getApp().sdk;

Page({
    data: {
        isNeedFace: !1,
        formData: {
            idCardNumber: "",
            name: ""
        },
        rules: {
            name: [ {
                type: "required",
                message: "不能为空"
            } ],
            idCardNumber: [ {
                type: "required",
                message: "不能为空"
            } ]
        },
        texts: "请认证你的个人身份信息"
    },
    onLoad: function(e) {
        e.isNeedFace && this.setData({
            isNeedFace: !0
        });
    },
    handleChange: function(a) {
        this.setData(e({}, "formData.".concat(a.target.id), a.detail.value.replace(/\s/g, "")));
    },
    handleFormSubmit: function(e) {
        var t = e.detail, i = t.validStatus, d = t.value, r = d.name, n = d.idCardNumber, s = this.data.isNeedFace;
        i && (wx.showLoading({
            title: "请稍等..."
        }), a.request({
            url: "/api/gwy/user/center_login",
            data: {
                appid: a.appid,
                openid: wx.getStorageSync("openid"),
                sid: wx.getStorageSync("tif-sid"),
                type: 2,
                isbind: 1,
                name: r.replace(/\s/g, ""),
                id_card_number: n.replace(/\s/g, "")
            }
        }).then(function(e) {
            if (wx.hideLoading(), !s) return wx.setStorageSync("login_hasIdCardNumber", 1), 
            Event.dispatch("updateUserInfo", {
                errcode: 0,
                data: e
            }), void Event.dispatch("setVerifyTypeByLoginWay", {
                errcode: 0,
                data: e
            });
            wx.navigateTo({
                url: "/pages/gsd-ui/g-auth/face/face",
                success: function() {
                    wx.showToast({
                        title: "实名成功，请进行人脸认证",
                        icon: "none"
                    });
                }
            });
        }).catch(function(e) {
            wx.hideLoading(), console.log("err", e);
        }));
    }
});