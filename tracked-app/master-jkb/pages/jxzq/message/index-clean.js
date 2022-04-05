function onShow() {
        this.setData({
            textarea: ""
        });
}
function clearText() {
        this.setData({
            placehoder: ""
        });
}
function handleChange(e) {
        e.detail.value && this.setData({
            placehoder: ""
        }), this.setData({
            text: e.detail.value
        });
}
function onLoad(e) {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                t.setData({
                    systemInfo: e,
                    windowHeight: wx.getSystemInfoSync().windowHeight
                });
            }
        });
}
function sendMsg(e) {
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
}
function formSubmit(e) {
        console.log(e.detail.value.textarea), e.detail.value.textarea.trim() ? this.sendMsg({
            opinion: e.detail.value.textarea.trim()
        }) : wx.showToast({
            title: "请您填写留言内容",
            icon: "none"
        });
}
