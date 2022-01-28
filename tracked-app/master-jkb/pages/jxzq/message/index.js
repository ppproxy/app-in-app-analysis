var e = getApp(), t = e.Anim, a = (e.userStore, e.request), n = (e.wxp, require("../../../utils/mtaTarget.js").newspapers);

t.Page({
    data: {
        placehoder: "欢迎使用健康宝！请详细描述您在使用中遇到的问题或您对健康宝的使用意见建议，我们将尽快为您办理。",
        textarea: "",
        windowHeight: "",
        text: ""
    },
    onShow: function() {
        this.setData({
            textarea: ""
        });
    },
    clearText: function() {
        this.setData({
            placehoder: ""
        });
    },
    handleChange: function(e) {
        e.detail.value && this.setData({
            placehoder: ""
        }), this.setData({
            text: e.detail.value
        });
    },
    onLoad: function(e) {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                t.setData({
                    systemInfo: e,
                    windowHeight: wx.getSystemInfoSync().windowHeight
                });
            }
        });
    },
    sendMsg: function(e) {
        n({
            eventId: "feedback_load_MessageSubmitted"
        }), a({
            url: "/jingxinju/jkb/feedback/add",
            method: "POST",
            data: e
        }).then(function(e) {
            wx.navigateTo({
                url: "/pages/jxzq/message/success/index"
            });
        }).catch(function(e) {
            wx.showToast({
                title: "提交失败",
                icon: "none"
            });
        });
    },
    formSubmit: function(e) {
        console.log(e.detail.value.textarea), e.detail.value.textarea.trim() ? this.sendMsg({
            opinion: e.detail.value.textarea.trim()
        }) : wx.showToast({
            title: "请您填写留言内容",
            icon: "none"
        });
    }
});