var e = require("../../../services/health-code.js"), t = getApp(), n = t.Anim;

t.userStore, t.config;

n.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        info: null,
        source: null
    },
    onLoad: function(e) {
        e.info && this.setData({
            info: JSON.parse(e.info)
        }), e.source && this.setData({
            source: e.source
        }), e.isFromBuy && this.setData({
            isFromBuy: e.isFromBuy
        });
    },
    handlePrimaryTap: function(t) {
        var n = this;
        1 === parseInt(this.data.isFromBuy) ? wx.navigateTo({
            url: "/packages/buy/pages/notice/index"
        }) : e.realnameUser(this.data.userInfo.uid).then(function(t) {
            if (0 == t.isAut) wx.showModal({
                title: "未实名",
                content: "是否需要实名认证？",
                confirmColor: "#1890ff",
                success: function(e) {
                    e.cancel || wx.navigateTo({
                        url: "/packages/health-code/pages/realname-submit/index?path=/pages/report/msg/index"
                    });
                }
            }); else {
                var o = n.data.info, a = o.clueType, i = o.identity, s = o.identityType;
                e.getUserCodeId({
                    clueType: a,
                    identity: i,
                    identityType: s,
                    uid: n.data.userInfo.uid
                }).then(function(e) {
                    wx.navigateTo({
                        url: "/packages/health-code/pages/report-health/index?codeId=" + e.codeId
                    });
                }).catch(function(e) {
                    console.log(e), wx.showToast({
                        title: e.errmsg,
                        icon: "none",
                        duration: 2e3
                    });
                });
            }
        }).catch(function(e) {
            console.log(e), wx.showToast({
                title: e.errmsg || "服务器错误",
                icon: "none",
                duration: 2e3
            });
        });
    },
    handleSecondTap: function(e) {
        wx.reLaunch({
            url: "/pages/index/index"
        });
    }
});