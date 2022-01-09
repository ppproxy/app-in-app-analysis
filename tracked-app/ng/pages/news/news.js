var t = getApp();

require("../../utils/util.js");

Page({
    data: {
        isShowAllContent: !1,
        navState: 0,
        news: [],
        swiperCurrent: 0,
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 3e3,
        circular: !0
    },
    bindchange: function(t) {
        var a = t.detail.current;
        this.setData({
            navState: a
        });
    },
    navSwitch: function(t) {
        var a = t.currentTarget.dataset.index;
        this.setData({
            navState: a
        });
    },
    onLoad: function() {
        var a = this;
        wx.request({
            url: "https://www.ngzyq.top/news/findNoContent",
            method: "GET",
            success: function(t) {
                a.setData({
                    news: t.data
                });
            },
            fail: function(t) {
                console.log(t), wx.showModal({
                    title: "错误",
                    content: "服务器错误"
                });
            }
        }), t.globalData.userInfo ? this.setData({
            userInfo: t.globalData.userInfo,
            hasUserInfo: !0
        }) : this.data.canIUse ? t.userInfoReadyCallback = function(t) {
            a.setData({
                userInfo: t.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(e) {
                t.globalData.userInfo = e.userInfo, a.setData({
                    userInfo: e.userInfo,
                    hasUserInfo: !0
                });
            }
        }), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    pixelRatio: t.pixelRatio,
                    windowHeight: t.windowHeight,
                    windowWidth: t.windowWidth
                });
            }
        });
    },
    switchNav: function(t) {
        var a = t.currentTarget.dataset.current, e = this.data.windowWidth / 5;
        if (this.setData({
            navScrollLeft: (a - 2) * e
        }), this.data.currentTab == a) return !1;
        this.setData({
            currentTab: a
        });
    },
    switchTab: function(t) {
        var a = t.detail.current, e = this.data.windowWidth / 5;
        this.setData({
            currentTab: a,
            navScrollLeft: (a - 2) * e
        });
    },
    swiperChange: function(t) {
        var a = t.detail, e = a.current, n = a.source;
        "autoplay" != n && "touch" != n || this.setData({
            swiperCurrent: e
        });
    },
    chuangEvent: function(t) {
        this.setData({
            swiperCurrent: t.currentTarget.id
        });
    },
    swipclick: function(t) {
        wx.navigateTo({
            url: "/pages/content/content?newsId=" + this.data.news[this.data.swiperCurrent].id
        });
    },
    opencontent: function(t) {
        wx.navigateTo({
            url: "/pages/content/content?newsId=" + t.currentTarget.dataset.newsid
        });
    }
});