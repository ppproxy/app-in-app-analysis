var e = getApp(), t = e.Anim, o = e.userStore, n = e.request, a = e.config, s = (e.requestHb, 
e.configStore), i = e.wxp, c = require("../../../services/health-code.js"), r = require("../../../utils/session"), l = require("../../../services/feedback");

t.Page({
    store: function(e) {
        return {
            isAuth: e.user.userInfo.isAuth,
            userInfo: e.user.userInfo,
            wllConfig: e.config.wllConfig
        };
    },
    computed: {
        role: function() {
            return (this.data.userInfo.role || []).some(function(e) {
                return "GRID_MANAGER" == e || "GRID_USER" == e || "RESUMPTION_CHECKER" == e;
            });
        }
    },
    data: {
        havePlace: !1,
        needCheckSession: !1,
        cityName: a.cityName,
        authTitle: "请先登录账号",
        authDesc: "",
        authBtnText: "登录",
        isRealName: !1,
        refreshtimestamp: 0
    },
    onLoad: function(e) {
        this.checkWxSession();
    },
    checkWxSession: function() {
        var e = this;
        this.setData({
            needCheckSession: !0
        }), i.checkSession().then(function() {
            console.log("当前的 sessionKey 未过期"), e.setData({
                needCheckSession: !1
            });
        }).catch(function(t) {
            console.log("当前的 sessionKey 已过期"), e.setData({
                needCheckSession: !1
            }), e.onTapLogout();
        });
    },
    onTapNavigateTo: function(e) {
        e.currentTarget.dataset.path && wx.navigateTo({
            url: e.currentTarget.dataset.path
        });
    },
    gogogo: function() {
        wx.showToast({
            title: "此功能即将上线",
            icon: "none"
        });
    },
    gogo: function() {
        this.data.havePlace ? wx.navigateTo({
            url: "/pages/my-placeCode/my-placeCode?gateName=" + this.data.gateName + "&carNo=" + this.data.carNo + "&gateType=" + this.data.gateType + "&name=" + this.data.name + "&phone=" + this.data.phone + "&id=" + this.data.id + "&address=" + this.data.address
        }) : wx.navigateTo({
            url: "/pages/place-code/place-code"
        });
    },
    onShow: function() {
        this.setData({
            havePlace: !1
        }), s.fetchWllConfig(), this.realnameUser();
    },
    onJump: function(e) {
        wx.navigateTo({
            url: "/packages/health-code/pages/new-workbench/new-workbench"
        });
    },
    onTapBook: function() {
        var e = this.data.wllConfig.personal_center_info || {};
        e && 1 === e.is_open ? wx.navigateTo({
            url: "/packages/buy/pages/reservation-list/index"
        }) : wx.showModal({
            title: "温馨提示",
            content: e.tips || "系统异常，请稍后再试",
            showCancel: !1
        });
    },
    onTapCompany: function() {
        wx.navigateTo({
            url: "pages/mine/company/list/index"
        });
    },
    onTapEnterprise: function() {
        wx.navigateTo({
            url: "/pages/mine/company/list/index",
            fail: function(e) {
                console.log(e);
            }
        });
    },
    onTapFeedback: function() {
        l.goFeedback(0, this.data.userInfo.uid);
    },
    onTapLogin: function(e) {
        var t = this;
        this.data.isRealName = !1;
        var a = e.detail, s = a.iv, i = a.encryptedData;
        return s && i ? (wx.showLoading({
            title: "努力加载中..."
        }), n({
            url: "/wll/account/getphone",
            method: "POST",
            data: {
                encryptedData: i,
                iv: s
            }
        }).then(function(e) {
            wx.hideLoading(), console.log("res", e), e && e.phone && o.fetchUserInfo(), setTimeout(function() {
                t.realnameUser();
            }, 300);
        }).catch(function(e) {
            wx.hideLoading(), console.error(e);
        })) : (console.error("用户拒绝授权登录"), void wx.showToast({
            title: "取消授权",
            icon: "none"
        }));
    },
    onTapLogout: function() {
        return this.data.isRealName = !1, wx.showLoading({
            title: "努力加载中..",
            mask: !0
        }), n({
            url: "/wll/account/logout",
            method: "POST"
        }).then(function() {
            wx.hideLoading(), wx.removeStorageSync("wx-sessionid"), o.initUserInfo(), console.log("我的退出成功了"), 
            r.fetchSessionId();
        }).catch(function() {
            wx.hideLoading(), wx.removeStorageSync("wx-sessionid"), o.initUserInfo(), console.log("我的退出成功了"), 
            r.fetchSessionId();
        });
    },
    lifeCycleMethod: function() {},
    realnameUser: function() {
        var e = this, t = wx.getStorageSync("delAuthFlag");
        if (!this.data.isRealName || "0" != t) {
            var o = this.data.userInfo.uid;
            console.log("realnameUser", o), o && c.realnameUser(o).then(function(t) {
                e.data.isRealName = 1 == t.isAut || 2 == t.isAut, t.isAut, console.log("isRealName", t.isAut), 
                e.setData({
                    isRealName: e.data.isRealName
                }), e.data.isRealName && wx.setStorageSync("delAuthFlag", "0");
            }, function(e) {});
        }
    },
    onPullDownRefresh: function() {
        var e = this;
        return console.log("isAuth", this.data.isAuth), this.data.isAuth ? (console.log("下拉刷新"), 
        new Date().getTime() - this.data.refreshtimestamp < 2e4 ? (wx.stopPullDownRefresh(), 
        void wx.showToast({
            title: "刷新频率过高，请稍侯再试",
            icon: "none"
        })) : (this.data.refreshtimestamp = new Date().getTime(), void c.refreshloginuserinfo().then(function(t) {
            wx.stopPullDownRefresh(), t && t.phone && (o.fetchUserInfo(), e.data.isRealName = !1, 
            e.realnameUser()), wx.hideLoading(), setTimeout(function() {
                wx.showToast({
                    title: "刷新成功",
                    icon: "none"
                });
            }, 800);
        }, function(e) {
            wx.stopPullDownRefresh(), wx.showToast({
                title: "刷新失败" + e.errmsg,
                icon: "none"
            });
        }))) : (console.log("下拉刷新，未登录"), void wx.stopPullDownRefresh());
    }
});