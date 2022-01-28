var e = getApp(), t = e.Anim, a = (e.request, e.requestHb), n = (e.dayjs, e.wxp, 
e.config, e.utils, e.userStore), s = require("../../services/health-code.js");

require("../../services/feedback");

t.Page({
    store: function(e) {
        return {
            isAuth: e.user.userInfo.isAuth,
            userInfo: e.user.userInfo
        };
    },
    data: {
        issafe: 2,
        warmMsgs: ""
    },
    go: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    goo: function() {
        wx.navigateTo({
            url: "/pages/self/self"
        });
    },
    realnames: function() {
        var e = this, t = this;
        s.realnameUser(this.data.userInfo.uid).then(function(n) {
            console.log(n), wx.setStorageSync({
                name: n.realnameAut.name,
                identity: n.realnameAut.identity
            }), n.realnameAut && t.setData({
                name: n.realnameAut.name,
                identity: n.realnameAut.identity
            }), null == n.realnameAut ? wx.showModal({
                title: "温馨提示",
                content: "请先实名认证",
                confirmColor: "#1890ff",
                showCancel: !1,
                confirmText: "去认证",
                success: function(e) {
                    e.cancel || wx.navigateTo({
                        url: "/packages/health-code/pages/realname-submit/index"
                    });
                }
            }) : (e.setData({
                name: n.realnameAut.name,
                identity: n.realnameAut.identity
            }), a({
                url: "/hbjkm-traffic-gate/trafficgate/querybyid/" + e.data.gateId,
                method: "POST",
                data: {}
            }).then(function(n) {
                null != n.data ? a({
                    url: "/hbjkm/userHealth/info",
                    method: "POST",
                    data: {}
                }).then(function(n) {
                    console.log(n), "00" == n.data.fxdj ? e.setData({
                        issafe: 1,
                        uuid: n.data.uuid
                    }) : t.setData({
                        issafe: 0,
                        warmMsgs: n.data.warmMsgs,
                        uuid: n.data.uuid
                    }), a({
                        url: "/hbjkm-traffic-gate/passrecord/save/" + e.data.userInfo.uid + "/" + e.data.uuid + "/" + e.data.gateId,
                        method: "POST",
                        data: {}
                    }).then(function(e) {});
                }) : wx.showModal({
                    title: "提示",
                    content: "场所码无效",
                    showCancel: !1,
                    success: function(e) {
                        e.confirm && wx.switchTab({
                            url: "/pages/index/index"
                        });
                    }
                });
            }));
        });
    },
    time: function() {
        var e = this, t = Date.parse(new Date()), a = 1e3 * (t /= 1e3), n = new Date(a), s = n.getFullYear() + "-" + (n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1) + "-" + (n.getDate() < 10 ? "0" + n.getDate() : n.getDate()) + " " + (n.getHours() < 10 ? "0" + n.getHours() : n.getHours()) + ":" + (n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes()) + ":" + (n.getSeconds() < 10 ? "0" + n.getSeconds() : n.getSeconds());
        e.setData({
            now: s
        });
    },
    onLoad: function(e) {
        var t = decodeURIComponent(e.scene);
        this.setData({
            gateId: t
        });
        var a = this;
        this.time(), n.fetchUserInfo().then(function(e) {
            e.isAuth && a.realnames();
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