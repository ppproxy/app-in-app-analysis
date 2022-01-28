var t = getApp().config;

Page({
    data: {
        title: "",
        chapter: "",
        images: [],
        active: !0,
        healthData: []
    },
    onLoad: function(t) {
        var a = this;
        this.getChapter(t), this.getStorage("healthData").then(function(t) {
            a.setData({
                healthData: t
            });
        }).catch(function(t) {
            console.error(t);
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        console.log("监听用户下拉动作");
    },
    onReachBottom: function() {
        console.log("页面上拉触底事件的处理函数");
    },
    onShareAppMessage: function() {},
    showButton: function() {
        this.setData({
            active: !this.data.active
        });
    },
    prevIcon: function() {
        var t = this, a = this.data.healthData.findIndex(function(a) {
            return a.id == t.data.chapter;
        });
        a ? (a--, wx.redirectTo({
            url: "/pages/health-guide-detail/index?id=" + this.data.healthData[a].id + "&label=" + this.data.healthData[a].label + "&total=" + this.data.healthData[a].total
        })) : wx.showToast({
            icon: "none",
            title: "前面没有了～"
        });
    },
    nextIcon: function() {
        var t = this, a = this.data.healthData.findIndex(function(a) {
            return a.id == t.data.chapter;
        });
        a != this.data.healthData.length - 1 ? (a++, wx.redirectTo({
            url: "/pages/health-guide-detail/index?id=" + this.data.healthData[a].id + "&label=" + this.data.healthData[a].label + "&total=" + this.data.healthData[a].total
        })) : wx.showToast({
            icon: "none",
            title: "已经是最后一节了～"
        });
    },
    setStorage: function(t, a) {
        return new Promise(function(e, n) {
            wx.setStorage({
                key: t,
                data: a,
                success: function(t) {
                    e(t);
                },
                fail: function(t) {
                    n(t);
                }
            });
        });
    },
    getStorage: function(t) {
        return new Promise(function(a, e) {
            wx.getStorage({
                key: t,
                success: function(t) {
                    a(t.data);
                },
                fail: function(t) {
                    e(t);
                }
            });
        });
    },
    getChapter: function(a) {
        for (var e = a.id, n = a.total, o = [], i = 0; i < n; i++) {
            o.push({
                chapter: e,
                src: t.cdnDomain + "/cos/HealthGuide/01" + e + ".jpg",
                show: !1
            });
        }
        this.setData({
            images: o,
            chapter: e
        });
    }
});