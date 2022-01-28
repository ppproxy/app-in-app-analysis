var t = require("../../services/car-code/passenger.js"), e = require("../../utils/request").request;

getApp().Anim.Page({
    store: function(t) {
        return {
            userInfo: t.user.userInfo
        };
    },
    data: {
        applicationType: "你正在申请关联以下单位",
        name: "",
        address: "",
        companyId: "",
        socialCreditCode: ""
    },
    onLoad: function(t) {
        var e = this.data.userInfo.uid;
        this.fetchHealthStatus(e);
        var n;
        t && t.scene ? n = decodeURIComponent(t.scene) : t && t.socialCreditCode && (n = t.socialCreditCode), 
        this.fetchCommpanyInfo(n);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    fetchHealthStatus: function(e) {
        t.getUserHealthInfo(e).then(function(t) {
            if (t && t.reportData) JSON.parse(t.reportData); else wx.showModal({
                title: "提示",
                content: "请先上报个人健康自查！",
                showCancel: !1,
                confirmText: "去上报",
                success: function(t) {
                    t.confirm && wx.navigateTo({
                        url: "/pages/report/index/index"
                    });
                }
            });
        });
    },
    onShareAppMessage: function() {},
    handleSubmuit: function() {
        this.submitApplycation();
    },
    submitApplycation: function() {
        e({
            url: "/resumption/user/apply",
            method: "POST",
            data: {
                companyId: this.data.companyId,
                companyName: this.data.name
            }
        }).then(function(t) {
            wx.showToast({
                title: "申请已发送"
            }), wx.redirectTo({
                url: "/pages/mine/company/list/index"
            });
        }).catch(function(t) {
            wx.showToast({
                title: "不能重复申请"
            });
        });
    },
    fetchCommpanyInfo: function(t) {
        var n = this;
        e({
            url: "/resumption/company/" + t,
            method: "GET",
            data: {}
        }).then(function(t) {
            var e = t;
            n.setData({
                name: e.companyName,
                address: e.companyAddress,
                companyId: e.id
            });
        }).catch(function(t) {
            wx.hideLoading(), wx.showToast({
                title: "获取企业信息失败"
            });
        });
    }
});