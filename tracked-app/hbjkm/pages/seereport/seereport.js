var e = getApp(), t = e.Anim, a = (e.request, e.requestHb, e.dayjs, e.wxp, e.config, 
e.utils), n = e.userStore, r = (require("../../utils/util").navigateToWebview, require("../../services/health-code.js"));

require("../../services/feedback");

t.Page({
    store: function(e) {
        return {
            isAuth: e.user.userInfo.isAuth,
            userInfo: e.user.userInfo
        };
    },
    data: {
        report: []
    },
    getTime: function(e) {
        var t = new Date();
        return t.setDate(t.getDate() + e), t.getFullYear() + "-" + (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-" + (t.getDate() < 10 ? "0" + t.getDate() : t.getDate());
    },
    go: function() {
        wx.navigateTo({
            url: "/pages/report/index/index"
        });
    },
    onTapAccess: function(e) {
        var t = this, o = this;
        if (n.checkAuth()) if (e.currentTarget.dataset.real) console.log("1111"), r.realnameUser(this.data.userInfo.uid).then(function(a) {
            console.log(a), a.realnameAut && o.setData({
                name: a.realnameAut.name,
                identity: a.realnameAut.identity
            }), 0 == a.isAut ? wx.showModal({
                title: "温馨提示",
                content: "请先实名认证",
                confirmColor: "#1890ff",
                showCancel: !1,
                confirmText: "去认证",
                success: function(t) {
                    t.cancel || wx.navigateTo({
                        url: "/packages/health-code/pages/realname-submit/index?path=" + e.currentTarget.dataset.url
                    });
                }
            }) : wx.navigateTo({
                url: e.currentTarget.dataset.url + "?name=" + a.realnameAut.name + "&phone=" + a.realnameAut.phone + "&identity=" + a.realnameAut.identity + "&uid=" + t.data.userInfo.uid
            });
        }); else {
            var i = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: a.urlJoinParams(e.currentTarget.dataset.url, {
                    id: i
                })
            });
        }
    },
    onLoad: function(e) {
        var t = this, a = JSON.parse(e.report);
        JSON.parse(e.report).forEach(function(e, t) {
            var n = e.date;
            a[t].date = n.substring(0, 10);
        });
        for (var n = [], r = 0; r > -14; r--) {
            var o = this.getTime(r);
            n.push(o);
        }
        n.forEach(function(e) {
            var a = new Object();
            a.time = e, a.statu = "未打卡", t.data.report.push(a);
        }), a.forEach(function(e, a) {
            n.indexOf(e.date) > -1 && (t.data.report[n.indexOf(e.date)].time = e.date, t.data.report[n.indexOf(e.date)].statu = e.city);
        }), t.setData({
            report: t.data.report
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