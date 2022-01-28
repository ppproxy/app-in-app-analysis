var t = getApp(), e = (t.Anim, t.request, t.requestHb), a = (t.dayjs, t.wxp, t.config);

t.utils, t.userStore, require("../../services/index"), require("../../utils/util").navigateToWebview, 
require("../../services/health-code.js"), require("../../services/feedback"), require("../../services/league"), 
a.domain, require("../../utils/util.js"), require("../../utils/weapp.qrcode.js");

Page({
    data: {
        idCard: "",
        name: "",
        check: !1,
        imgSrc: "imgSrc"
    },
    onLoad: function(t) {
        wx.showModal({
            title: "特别提醒",
            showCancel: !1,
            content: "您将代为他人查询健康码状态，为了保障被查询人的个人隐私，请务必在获取被查询人授权后进行查询，我们会对您的查询操作全程留痕记录。同时，我们建议您优先使用本健康码代领功能获取被查询人健康码。代查询健康码15秒后自动退出，请您注意查看。"
        }), this.setData({
            imgSrc: a.cosDomain + "/hbjkm/lyzc.png?t=" + Date.now()
        });
    },
    checkFn: function(t) {
        this.setData({
            check: !this.data.check
        });
    },
    validation: function() {
        var t = this;
        if (this.data.check) {
            var a = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
            "" === this.data.name ? wx.showToast({
                title: "请输入姓名",
                icon: "none",
                duration: 2e3
            }) : "" === this.data.idCard ? wx.showToast({
                title: "请输入身份证号",
                icon: "none",
                duration: 2e3
            }) : a.test(this.data.idCard) ? this.GetAge(this.data.idCard) > 16 && this.GetAge(this.data.idCard) < 60 ? wx.showToast({
                title: "本服务仅可以查询60岁以上及16岁以下人员健康状态",
                icon: "none",
                duration: 5e3
            }) : e({
                url: "/hbjkm/lyzc/queryHealthInfo",
                method: "GET",
                data: {
                    identity: this.data.idCard,
                    name: this.data.name
                }
            }).then(function(e) {
                wx.navigateTo({
                    url: "../young-old-info/index?name=" + t.data.name + "&&idCard=" + t.data.idCard
                });
            }).catch(function(t) {
                wx.showToast({
                    title: t.errmsg,
                    icon: "none",
                    duration: 5e3
                });
            }) : wx.showToast({
                title: "身份证号输入有误",
                icon: "none",
                duration: 5e3
            });
        } else wx.showToast({
            title: "请勾选同意",
            icon: "none",
            duration: 2e3
        });
    },
    GetAge: function(t) {
        var e = (t + "").length;
        if (0 == e) return 0;
        if (15 != e && 18 != e) return 0;
        var a = "";
        18 == e && (a = t.substr(6, 4) + "/" + t.substr(10, 2) + "/" + t.substr(12, 2)), 
        15 == e && (a = "19" + t.substr(6, 2) + "/" + t.substr(8, 2) + "/" + t.substr(10, 2));
        var n = new Date(a), i = new Date(), o = i.getFullYear() - n.getFullYear();
        return (i.getMonth() < n.getMonth() || i.getMonth() == n.getMonth() && i.getDate() < n.getDate()) && o--, 
        o;
    },
    bindName: function(t) {
        this.setData({
            name: t.detail.value
        });
    },
    bindIdcard: function(t) {
        this.setData({
            idCard: t.detail.value
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});