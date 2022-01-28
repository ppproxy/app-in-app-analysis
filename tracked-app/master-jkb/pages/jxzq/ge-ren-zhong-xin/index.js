var e = require("../../../@babel/runtime/helpers/objectSpread2"), n = getApp(), t = n.request, o = n.userStore, a = (require("../../../utils/base64Src.js"), 
require("../../../utils/bese64.js").base64src, require("../../../utils/mtaTarget.js").newspapers);

Page({
    data: {
        windowHeight: "",
        authTitle: "请先登录账号",
        authBtnText: "登录",
        mineServices: [],
        canGetMine: !1,
        imgUrl: "https://xcx-static.yqgz.beijing.gov.cn/statics/",
        userInfo: {},
        img: "",
        tupian: "",
        daofang: {},
        phone: "",
        str: "个人中心",
        phoneNote: !1,
        geren_wenhao: "",
        systemInfo: {},
        showHeSuan: !1,
        isHesuan: !1,
        greyPhones: [],
        zhifubao: !1
    },
    onLoad: function(e) {
        var n = this, a = this;
        wx.getSystemInfo({
            success: function(e) {
                console.log(e), a.setData({
                    systemInfo: e
                });
            }
        }), o.confirmIsOnline().then(function(e) {
            if (console.log(o.getIsWork(e.networkType), "什么"), e && 1 === o.userInfo.isOpenWu) {
                o.userInfo.bjtNo ? (n.setData({
                    str: "个人中心(" + o.userInfo.bjtNo + ")"
                }), wx.setStorageSync("personalTiele", "个人中心(" + o.userInfo.bjtNo + ")")) : t({
                    url: "/jingxinju/jkb/user/getBjIdNo",
                    method: "post"
                }).then(function(e) {
                    console.log("人脸识别成功", e), e.length > 0 ? (n.setData({
                        str: "个人中心(" + e + ")"
                    }), wx.setStorageSync("personalTiele", "个人中心(" + e + ")")) : (n.setData({
                        str: "个人中心"
                    }), wx.setStorageSync("personalTiele", "个人中心"));
                }).catch(function(e) {
                    n.setData({
                        str: "个人中心"
                    }), wx.setStorageSync("personalTiele", "个人中心"), console.log(e);
                }), o.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/images/yuanzhu.png", "geren_wenhao");
                var a = o.userInfo;
                n.setData({
                    windowHeight: wx.getSystemInfoSync().windowHeight,
                    userInfo: a,
                    geren_wenhao: "https://xcx-static.yqgz.beijing.gov.cn/images/yuanzhu.png"
                }), wx.setStorageSync("personalUserInfo", a), n.getPhone(), n.getCode(), wx.hideLoading();
            } else o.getUserStorage().then(function() {
                2 == wx.getStorageSync("user-session").realLevel && (o.userInfo.isAuth = !0, n.setData({
                    str: wx.getStorageSync("personalTiele") || "个人中心",
                    windowHeight: wx.getSystemInfoSync().windowHeight,
                    userInfo: o.userInfo,
                    phone: wx.getStorageSync("personalPhone"),
                    geren_wenhao: wx.getStorageSync("geren_wenhao"),
                    greyPhones: wx.getStorageSync("greyPhones") || []
                }), console.log(n.data.str, n.data.userInfo, n.data.phone, "离线信息"));
            });
        }), wx.reportMonitor("2", 1);
    },
    getPhone: function() {
        var n = this;
        t({
            url: "/jingxinju/jkb/phone/authList",
            method: "get",
            disableModalWhenApiError: !0
        }).then(function(t) {
            wx.hideLoading();
            var o = t;
            console.log(o, "手机号");
            var a, s = /(\d{3})\d*(\d{3})/;
            o.phones.length > 0 && (a = o.phones.map(function(n) {
                return e(e({}, n), {}, {
                    phone: n.phone.replace(s, "$1*****$2")
                });
            })), o && o.greyPhones && o.greyPhones.length > 0 ? (n.setData({
                greyPhones: o.greyPhones.map(function(n) {
                    return e(e({}, n), {}, {
                        phone: n.phone.replace(s, "$1*****$2")
                    });
                })
            }), wx.setStorageSync("greyPhones", n.data.greyPhones)) : n.setData({
                greyPhones: []
            }), console.log(a), n.setData({
                phone: a
            }), wx.setStorageSync("personalPhone", a);
        }).catch(function(e) {
            wx.hideLoading();
        });
    },
    onShow: function() {
        var e = o.userInfo;
        this.setData({
            userInfo: e
        });
    },
    onTapLogin: function() {
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), wx.navigateTo({
            url: "/pages/gsd-ui/g-auth/face/face"
        }), wx.hideLoading();
    },
    onTapAccess: function(e) {
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), wx.navigateTo({
            url: e.currentTarget.dataset.url
        }), wx.hideLoading();
    },
    onTapLogout: function() {
        var e = this;
        a({
            eventId: "my_tap_LogOut"
        }), wx.showLoading({
            title: "退出中...",
            mask: !0
        }), t({
            url: "/auth-server/auth/logout",
            method: "GET"
        }).then(function(n) {
            console.log(n), wx.hideLoading(), wx.setNavigationBarColor({
                frontColor: "#000000",
                backgroundColor: "#ffffff"
            }), o.userInfo.isAuth = !1, wx.removeStorageSync("dfRenci_qrCodeData"), e.setData({
                userInfo: o.userInfo
            }), wx.setStorageSync("wx-logout", 11), wx.removeStorageSync("img"), wx.navigateBack({
                delta: 1
            }), wx.hideLoading();
        }).catch(function(e) {
            wx.hideLoading(), wx.showModal({
                title: "温馨提示",
                content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
                showCancel: !1
            });
        });
    },
    xinxi: function() {
        this.setData({
            phoneNote: !0
        });
    },
    btnPhone: function() {
        this.setData({
            phoneNote: !1
        });
    },
    handleOpenRegion: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    ewmsm: function() {
        wx.showModal({
            title: "提示",
            content: "此二维码将包含您的身份证号（保留4位），姓名（保留姓），手机号（保留5位）信息，可作为您所在公共场所（单位）登记二维码，用于到访人员的进出登记或自然人之间互相扫码，以便于防疫部门通过扫码记录准确获取防疫追溯信。二维码可导出打印或以电子二维码展示界面查询相关扫码统计信息。",
            showCancel: !1,
            confirmText: "我知道了",
            success: function() {}
        });
    },
    brsmjl: function() {
        wx.showModal({
            title: "提示",
            content: "二维码可打印张贴或以电子二维码形式使用。您可以点击“展示使用”打开电子二维码展示界面并查询相关扫码统计信息。",
            showCancel: !1,
            confirmText: "我知道了",
            success: function() {
                wx.navigateTo({
                    url: "/pages/jxzq/ben-ren-sao-ma-ji-lv/index"
                });
            }
        });
    },
    getCode: function() {
        return new Promise(function(e, n) {
            wx.login({
                success: function(o) {
                    console.log(o.code);
                    var a = {
                        url: "/auth-server/auth/refreshSessionKey",
                        method: "POST",
                        data: {
                            code: o.code
                        }
                    };
                    t(a).then(function(n) {
                        e(!0);
                    }).catch(function(e) {
                        n(!1);
                    });
                }
            });
        });
    },
    getPhoneNumber: function(e) {
        var n = this, o = e.detail, a = o.iv, s = o.encryptedData;
        if (!a || !s) return wx.hideLoading(), void console.error("用户拒绝授权登录");
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), t({
            url: "/push/phone/update",
            method: "POST",
            data: {
                encryptedData: s,
                iv: a
            },
            disableModalWhenApiError: !0
        }).then(function(e) {
            n.getCode(), n.getPhone(), console.log(e, "用户手机号");
        }).catch(function(e) {
            console.log(e, "手机号报错信息"), wx.hideLoading();
        });
    },
    bindZfb: function() {
        this.setData({
            zhifubao: !0
        });
    },
    btnKON: function() {
        this.setData({
            zhifubao: !1
        });
    },
    ermt: function() {
        wx.showModal({
            title: "提示",
            content: "二维码可打印张贴或以电子二维码形式使用。您可以点击“展示使用”打开电子二维码展示界面并查询相关扫码统计信息。",
            showCancel: !1,
            confirmText: "我知道了"
        });
    },
    handleHesuan: function() {
        this.setData({
            isHesuan: !0
        });
    },
    showHeSuan: function() {
        this.setData({
            isHesuan: !1
        });
    },
    showHeSuan1: function() {
        a({
            eventId: "detection_home_GoAssay"
        }), wx.navigateTo({
            url: "/pages/jxzq/he-suan-jie-guo/index"
        }), this.setData({
            isHesuan: !1
        });
    }
});