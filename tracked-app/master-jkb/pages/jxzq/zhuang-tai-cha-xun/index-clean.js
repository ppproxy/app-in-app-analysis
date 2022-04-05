function onShow(t) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        }), this.res(), wx.onLocalServiceDiscoveryStop(function(t) {});
}
function guanli() {
        n({
            eventId: "otherslist_tap_DeleteOthersStatus"
        }), wx.navigateTo({
            url: "/pages/jxzq/ta-ren-shan-chu/index"
        });
}
function res() {
        var t = this;
        wx.showLoading({
            title: "请稍等...",
            mask: !0
        });
        e({
            url: "/jingxinju/jkb/other/others/list",
            method: "GET"
        }).then(function(e) {
            wx.hideLoading(), console.log(e), t.setData({
                data: e,
                delList: e.delList || [],
                othersList: e.othersList || []
            });
        }).catch(function(t) {
            if (wx.hideLoading(), "BIF:10401" === t.errcode) return a.userInfo.isAuth = !1, 
            wx.removeStorageSync("wx-sessionid"), wx.removeStorageSync("wx-logout"), wx.hideLoading(), 
            void wx.showModal({
                title: "提示",
                content: "本次操作需要您进行登录验证",
                success: function(t) {
                    console.log(t), t.confirm ? (console.log(t), wx.redirectTo({
                        url: "/pages/gsd-ui/g-auth/face/face"
                    })) : wx.navigateBack({
                        delta: 5
                    });
                }
            });
        });
}
function handleTap(t) {
        2 == t.currentTarget.dataset.id.activeStatus ? wx.navigateTo({
            url: "/pages/gsd-ui/g-auth/face/face?url=/pages/jxzq/cha-xun-jie-guo/index&dd=1"
        }) : wx.navigateTo({
            url: "/pages/jxzq/cha-xun-jie-guo/index"
        });
}
function handleTap1(t) {
        var a = this;
        wx.showLoading({
            title: "努力加载中...",
            mask: !0
        }), n({
            eventId: "otherslist_tap_CheckOthersStatus"
        }), console.log(t.currentTarget.dataset.id);
        var i = {
            url: "/jingxinju/jkb/other/other/isbeisanxian",
            method: "GET",
            data: {
                id: t.currentTarget.dataset.id.id
            }
        };
        e(i).then(function(e) {
            return console.log("打印log", e), "41" == e.code ? (n({
                eventId: "otherslist_tap_AbnormalState"
            }), a.setData({
                scanWrong: !0
            }), void wx.hideLoading()) : "-7" == e.code || "51" == e.code ? (n({
                eventId: "otherslist_tap_AbnormalState"
            }), wx.hideLoading(), wx.showModal({
                title: "提示",
                content: "由于行程查询基于个人手机号码，他人代查功能暂不支持此服务。为正常使用“健康宝”，请您使用本人实名手机号登录“健康宝”小程序，完成本人健康状态查询，或者与所居住社区或相关单位联系，按要求正确履行防疫相关义务。",
                showCancel: !1,
                confirmText: "我知道了",
                success: function() {}
            })) : "-3" == e.code ? (wx.hideLoading(), n({
                eventId: "otherslist_tap_AbnormalState"
            }), void a.setData({
                isNo: !0
            })) : "4" == e.code ? (wx.hideLoading(), void a.setData({
                lulukouan: !0
            })) : e.isBeisanxian ? (n({
                eventId: "otherslist_tap_AbnormalState"
            }), wx.hideLoading(), void wx.showModal({
                title: "提示",
                content: "由于行程查询基于个人手机号码，他人代查功能暂不支持此服务。为正常使用“健康宝”，请您使用本人实名手机号登录“健康宝”小程序，完成本人健康状态查询，或者与所居住社区或相关单位联系，按要求正确履行防疫相关义务。",
                showCancel: !1,
                confirmText: "我知道了"
            })) : void (2 == t.currentTarget.dataset.id.activeStatus ? (n({
                eventId: "otherslist_tap_Accredit"
            }), wx.hideLoading(), a.setData({
                params: t.currentTarget.dataset.id
            }), wx.showModal({
                title: "提示",
                content: "健康状态已在其他账号查询，本次操作需要重新授权",
                showCancel: !0,
                confirmText: "授权",
                success: function(t) {
                    t.cancel || wx.navigateTo({
                        url: "/pages/gsd-ui/g-auth/trface/trface"
                    });
                }
            })) : (n({
                eventId: "otherslist_tap_GoOthersSearchData"
            }), a.setData({
                params: t.currentTarget.dataset.id
            }), wx.navigateTo({
                url: "/pages/jxzq/ta-ren-cha-xun/index?userId=" + t.currentTarget.dataset.id.id + "&idCard=" + t.currentTarget.dataset.id.idCard + "&name=" + t.currentTarget.dataset.id.name
            }), wx.hideLoading()));
        }).catch(function(t) {
            wx.hideLoading(), o(i, t, customError.otherList.UncaughtExp);
        });
}
function tianjia() {
        this.setData({
            params: !1
        }), this.data.othersList.length >= 4 ? wx.showModal({
            title: "提示",
            content: "您已代查4人健康状态，无法代查更多",
            showCancel: !1
        }) : (n({
            eventId: "otherslist_tap_AddOthersStatus"
        }), console.log(123), wx.navigateTo({
            url: "/pages/gsd-ui/g-auth/trface/trface"
        }));
}
function wHtap() {
        this.setData({
            wisNo: !0
        });
}
function showZd() {
        console.log(123), this.setData({
            isNo: !1
        }), wx.navigateBack({
            delta: 10
        });
}
function showYw() {
        this.setData({
            isNo: !0
        }), wx.redirectTo({
            url: "/pages/jxzq/message/index"
        });
}
function wHao() {
        this.setData({
            wisNo: !1
        });
}
function luluqueding() {
        wx.navigateBack({
            delta: 10
        }), this.setData({
            lulukouan: !1
        });
}
function btnScanWrong() {
        this.setData({
            scanWrong: !1
        });
}
