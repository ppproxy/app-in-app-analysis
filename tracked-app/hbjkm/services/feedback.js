var e = getApp(), o = e.request, n = e.config, t = e.utils;

exports.goFeedback = function(e, i) {
    console.log(i, "uid"), o({
        url: n.domain + "/brand/feedback",
        method: "POST",
        data: {
            userid: i,
            version: "",
            ip: "",
            hardware: "",
            os: "",
            net: ""
        }
    }).then(function(e) {
        wx.hideLoading(), wx.navigateTo({
            url: t.urlJoinParams("/pages/web-view/index", {
                webUrl: encodeURIComponent(e.faqUrl),
                title: "帮助反馈"
            })
        }), console.log("res", e);
    }).catch(function(e) {
        wx.showModal({
            title: "温馨提示",
            content: "服务器拥挤，请稍后再试",
            showCancel: !1
        }), wx.hideLoading(), console.log("err", e);
    });
};