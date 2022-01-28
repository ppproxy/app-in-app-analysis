var t = require("../../../@babel/runtime/helpers/objectSpread2"), e = getApp(), a = e.request, i = (e.config, 
e.wxp, e.userStore), s = e.dayjs, n = require("../../../utils/util"), o = (n.apiErrorAndNavigateBack, 
n.apiError), r = require("../../../utils/customErrors"), c = require("../../../utils/qrcode-jianrong.js"), d = (require("../../../utils/getCountdown.js"), 
require("../../../utils/base64Src.js")), h = require("../../../utils/mtaTarget.js").newspapers, u = require("../../../utils/uitls.js").getPrevPageData, g = 250 / (750 / wx.getSystemInfoSync().windowWidth), l = new (require("../../../utils/jsencrypt.js").JSEncrypt)();

l.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC95A/NJpsjMG8i2Z7/+LkTptel3KLYS6O81NVAH3anwNcwtiYSujvoa1su1J2kXW9828hryaQevcVGDyiJFzJKAa3ckmI3PJIX7qAWopePrlUKHQt3XfjSSMDgjjHukRyF6Omu934jA5mqBOXUAGs/obdoAMl1yHCKBKdmeb929QIDAQAB-----END PUBLIC KEY-----"), 
Page({
    data: {
        windowHeight: "",
        isNo: !1,
        wisNo: !1,
        xq: {},
        qrcode_w: "",
        xianshi: !1,
        isShowFlsm: !1,
        timer: "",
        countDownNum: "60",
        hhh: "00",
        mmm: "00",
        sss: "00",
        data: [],
        imgSrc: "",
        time: "",
        fen: "",
        miao: "",
        date: "",
        hourAngle: "",
        secondAngle: "",
        minuteAngle: "",
        id: "",
        da: "",
        isSixteen: !1,
        tuichu2: !1
    },
    onLoad: function(t) {
        console.log(t, "人脸信息"), u().id ? this.setData({
            id: u().id
        }) : this.setData({
            da: t,
            id: t.id,
            idCard: t.idCard,
            name: t.name
        }), t && t.idCard && this.setData({
            idCard: t.idCard,
            name: t.name
        });
    },
    verificat: function(t) {
        var e = this;
        console.log(t), a({
            url: "/ymjz/jkb/vaccination/verificat",
            method: "GET",
            timeout: 6e3,
            data: {
                type: 0,
                idCard: t
            }
        }).then(function(t) {
            e.setData({
                verificat: t
            });
        }).catch(function(t) {});
    },
    onShow: function(t) {
        var e = this;
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), setInterval(function() {
            s().format("HH:mm:ss");
            e.setData({
                time: s().format("HH:mm:ss"),
                date: s().format("YYYY-MM-DD").split("-")[0] + "年" + s().format("YYYY-MM-DD").split("-")[1] + "月" + s().format("YYYY-MM-DD").split("-")[2] + "日"
            });
        }, 1e3), console.log(this.data.id), this.getxq(this.data.id), this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            qrcode_w: g
        });
    },
    tuichu2: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    mark: function() {
        c("canvas", {
            text: this.data.data.encourage,
            width: g,
            height: g,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: c.CorrectLevel.L
        });
        this.setData({
            xianshi: !0
        });
    },
    getSession: function() {
        return a({
            url: "/auth-server/auth/user/session",
            method: "get"
        }).then(function(e) {
            wx.removeStorageSync("wx-logout"), i.userInfo = t(t({}, i.userInfo), e);
        }).catch(function(t) {
            console.log(t);
        });
    },
    checkFacet: function(t, e, s, n) {
        var o = this;
        a({
            url: "/auth-server/auth/sixteen_check_other_face",
            method: "POST",
            data: {
                idCard: t,
                name: e,
                decryptStr: s,
                imageBase64: n
            }
        }).then(function(t) {
            i.userInfo.isAuth = !0, wx.removeStorageSync("wx-logout"), o.getxq(t.id), wx.hideLoading();
        }).catch(function(t) {
            console.log(t), wx.hideLoading(), wx.navigateTo({
                url: "/pages/gsd-ui/g-auth/error/error"
            });
        });
    },
    takePhoto: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "camera" ],
            success: function(e) {
                var a = e.tempFilePaths[0];
                wx.getFileSystemManager().readFile({
                    filePath: a,
                    encoding: "base64",
                    success: function(e) {
                        var a = "data:image/png;base64," + e.data;
                        t.setData({
                            imgsd: "data:image/png;base64," + e.data
                        });
                        var i = {
                            idCardNumber: t.data.idCard,
                            name: t.data.name
                        }, s = l.encrypt(JSON.stringify(i));
                        wx.showLoading({
                            title: "加载中...",
                            mask: !0
                        }), t.checkFacet(i.idCardNumber, i.name, s, a);
                    }
                });
            }
        });
    },
    longPress: function() {
        h({
            eventId: "otherSratus_tap_ChangingPhoto"
        });
        var t = this;
        wx.showModal({
            title: "提示",
            content: "是否重新拍摄头像照片？",
            confirmText: "确定",
            success: function(e) {
                e.confirm && t.takePhoto();
            }
        });
    },
    btns: function() {
        this.setData({
            xianshi: !1,
            isShowFlsm: !1
        });
    },
    flsm: function() {
        this.setData({
            isShowFlsm: !0
        });
    },
    getxq: function(t) {
        var e = this;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var i = {
            url: "/jingxinju/jkb/other/other/health/status",
            method: "GET",
            data: {
                id: t
            }
        };
        a(i).then(function(t) {
            if (h({
                eventId: "otherSratus_load_HealthCode"
            }), e.setData({
                isSixteen: t.isSixteen
            }), "-3" == t.code && e.setData({
                isNo: !0
            }), null != t.code) {
                if (t.name && null != t.name) {
                    e.setData({
                        data: t
                    }), 1 != t.isDefaultImg ? e.setData({
                        imgSrc: d(t.image)
                    }) : e.setData({
                        imgSrc: "https://xcx-static.yqgz.beijing.gov.cn/statics/16sui.png"
                    });
                    c("canvas", {
                        text: t.encourage,
                        width: g,
                        height: g,
                        colorDark: "#000000",
                        colorLight: "#ffffff",
                        correctLevel: c.CorrectLevel.L
                    });
                } else o(i, t, r.shixiang.otherHealthStatus.InvalidResp_NoName);
                wx.hideLoading();
            } else o(i, t, r.shixiang.otherHealthStatus.InvalidResp_NoCode);
        }).catch(function(t) {
            wx.hideLoading(), o(i, t, r.shixiang.otherHealthStatus.UncaughtExp);
        });
    },
    btn1: function() {
        wx.navigateBack({
            delta: 4
        });
    },
    handleTap: function() {
        h({
            eventId: "otherSratus_tap_ChangingPhoto"
        }), u() ? this.setData({
            params: t(t({}, u()), {}, {
                isPai: !0
            })
        }) : this.setData({
            params: {
                name: this.data.da.name,
                idCard: this.data.da.idCardNumber,
                userName: this.data.data.name,
                hideIdCard: this.data.data.idCard,
                isPai: !0
            }
        }), wx.showModal({
            title: "提示",
            content: "是否重新拍摄头像照片？",
            success: function(t) {
                t.confirm && (wx.showLoading({
                    title: "加载中...",
                    mask: !0
                }), wx.navigateTo({
                    url: "/pages/gsd-ui/g-auth/trface/trface",
                    success: function() {
                        wx.hideLoading();
                    }
                }));
            }
        });
    },
    wHtap: function() {
        this.setData({
            wisNo: !0
        });
    },
    showZd: function() {
        console.log(123), this.setData({
            isNo: !1
        }), wx.navigateBack({
            delta: 10
        });
    },
    showYw: function() {
        this.setData({
            isNo: !0
        }), wx.redirectTo({
            url: "/pages/jxzq/message/index"
        });
    },
    wHao: function() {
        this.setData({
            wisNo: !1
        });
    }
});