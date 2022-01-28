var e = require("../../../@babel/runtime/helpers/objectSpread2"), t = require("../../../@babel/runtime/helpers/defineProperty"), a = getApp(), i = a.request, n = (a.config, 
a.wxp), o = a.userStore, s = a.dayjs, r = require("../../../utils/util"), c = r.apiErrorAndNavigateBack, g = r.apiError, d = require("../../../utils/customErrors"), u = require("../../../utils/qrcode.js"), h = require("../../../utils/qrcode-jianrong.js"), l = require("../../../utils/util.js"), x = (l.apm, 
l.GetAge), f = (require("../../../utils/getCountdown.js"), require("../../../utils/base64Src.js")), m = wx.getSystemInfoSync().windowWidth, w = require("../../../utils/mtaTarget.js").newspapers, b = 250 / (750 / m), p = new (require("../../../utils/jsencrypt.js").JSEncrypt)();

p.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC95A/NJpsjMG8i2Z7/+LkTptel3KLYS6O81NVAH3anwNcwtiYSujvoa1su1J2kXW9828hryaQevcVGDyiJFzJKAa3ckmI3PJIX7qAWopePrlUKHQt3XfjSSMDgjjHukRyF6Omu934jA5mqBOXUAGs/obdoAMl1yHCKBKdmeb929QIDAQAB-----END PUBLIC KEY-----"), 
Page({
    data: {
        lulukouan: !1,
        riqi: "",
        isNo: !1,
        wisNo: !1,
        xianshi1: !1,
        windowHeight: "",
        xq: {},
        tuichu2: !1,
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
        img: "",
        code: "",
        IsSixTeen: !1,
        disabled: !1,
        isxianshi1: !1,
        sacnImg: "",
        br_beijing: "",
        br_erweima: "",
        br_yuanzhu: "",
        br_logo: "",
        br_xgwjyc: "",
        br_xgjzgc: "",
        br_xgjjgc: "",
        IsWork: ""
    },
    onLoad: function(e) {
        var a = this;
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            qrcode_w: b
        }), o.confirmIsOnline().then(function(i) {
            a.setData({
                IsWork: i
            });
            var n = new Date(), r = n.getFullYear(), c = n.getMonth(), g = n.getDate(), d = r + "-" + c + "-" + g;
            i && 0 !== o.userInfo.isOpenWu || d != wx.getStorageSync("br_timestamp") ? (wx.setStorageSync("br_timestamp", r + "-" + c + "-" + g), 
            o.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/images/wodebj.png", "br_beijing"), 
            o.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/images/logo.png", "br_logo"), 
            o.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/images/erweima.png", "br_erweima"), 
            o.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/images/xgwjyc.png", "br_xgwjyc"), 
            o.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/images/xgjjgc.png", "br_xgjjgc"), 
            o.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/images/xgjzgc.png", "br_xgjzgc"), 
            o.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/images/yuanzhu.png", "br_yuanzhu"), 
            a.setData({
                br_beijing: "https://xcx-static.yqgz.beijing.gov.cn/images/wodebj.png",
                br_erweima: "https://xcx-static.yqgz.beijing.gov.cn/images/erweima.png",
                br_yuanzhu: "https://xcx-static.yqgz.beijing.gov.cn/images/yuanzhu.png",
                br_logo: "https://xcx-static.yqgz.beijing.gov.cn/images/logo.png",
                br_xgwjyc: "https://xcx-static.yqgz.beijing.gov.cn/images/xgwjyc.png",
                br_xgjzgc: "https://xcx-static.yqgz.beijing.gov.cn/images/xgjzgc.png",
                br_xgjjgc: "https://xcx-static.yqgz.beijing.gov.cn/images/xgjjgc.png"
            }), o.userInfo.gongName = "", setInterval(function() {
                s().format("HH:mm:ss");
                a.setData({
                    time: s().format("HH:mm:ss"),
                    date: s().format("YYYY-MM-DD").split("-")[0] + "年" + s().format("YYYY-MM-DD").split("-")[1] + "月" + s().format("YYYY-MM-DD").split("-")[2] + "日"
                });
            }, 1e3), a.setData({
                isOpenBDCheck: e.isOpenBDCheck
            }), console.log(e.isOpenBDCheck), console.log(0 != e.isOpenBDCheck), e.time && a.setData({
                riqi: e.time
            }), 0 != e.isOpenBDCheck ? a.getJian() : (a.getAdd(), a.setData({
                code: 0
            }), "false" == e.code && a.getJian1())) : (o.arraybuffer(i.gifUrl, "br_iconUrl"), 
            o.arraybuffer(i.icomUrl, "br_gifUrl"), a.setData({
                imgSrc: f(wx.getStorageSync("img").img),
                data: wx.getStorageSync("br_xq"),
                br_beijing: wx.getStorageSync("br_beijing"),
                br_erweima: wx.getStorageSync("br_erweima"),
                br_yuanzhu: wx.getStorageSync("br_yuanzhu"),
                br_logo: wx.getStorageSync("br_logo"),
                br_xgwjyc: wx.getStorageSync("br_xgwjyc"),
                br_xgjzgc: wx.getStorageSync("br_xgjzgc"),
                br_xgjjgc: wx.getStorageSync("br_xgjjgc"),
                code: wx.getStorageSync("br_code")
            }), a.setData(t({}, "data.gifUrl", wx.getStorageSync("br_gifUrl"))), -3 == a.data.code ? a.setData({
                isNo: !0
            }) : "-7" == a.data.code || "51" == a.data.code ? a.setData({
                isxianshi1: !0
            }) : "4" == a.data.code ? a.setData({
                lulukouan: !0
            }) : "30" != a.data.code && "0" != a.data.code || a.dongaohuan());
        }), wx.reportMonitor("0", 1);
    },
    verificat: function() {
        var e = this;
        i({
            url: "/ymjz/jkb/vaccination/verificat",
            method: "GET",
            timeout: 6e3
        }).then(function(t) {
            e.setData({
                verificat: t
            });
        }).catch(function(e) {});
    },
    onShow: function() {
        var e = this;
        o.confirmIsOnline().then(function(t) {
            if (t && 1 === o.userInfo.isOpenWu) {
                var a = wx.getStorageSync("img");
                e.setData({
                    img: a
                }), a ? e.getxq(0) : e.getxq(1), e.data.code.length > 0 && e.getJian();
            }
        });
    },
    tuichu0: function() {
        i({
            url: "/xiangzhu/jkb/healthy/isFill",
            method: "get"
        }).then(function(e) {
            wx.hideLoading(), console.log("是否登记", e), 1 == e.state ? wx.navigateTo({
                url: "/pages/registration/success/index"
            }) : wx.navigateTo({
                url: "/pages/registration/home/index"
            });
        }).catch(function(e) {
            wx.hideLoading();
        });
    },
    getPhoneNumber1: function() {
        wx.showLoading({
            title: "努力加载中...",
            mask: !0
        }), wx.redirectTo({
            url: "/pages/registration/yan-zheng/index?time=" + this.data.riqi
        }), wx.hideLoading();
    },
    takePhoto: function() {
        var e = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "camera" ],
            success: function(t) {
                var a = t.tempFilePaths[0];
                wx.getFileSystemManager().readFile({
                    filePath: a,
                    encoding: "base64",
                    success: function(t) {
                        var a = "data:image/png;base64," + t.data;
                        e.setData({
                            imgsd: "data:image/png;base64," + t.data
                        });
                        var i = {
                            idCardNumber: o.userInfo.realIdCard,
                            name: o.userInfo.name
                        }, n = p.encrypt(JSON.stringify(i));
                        e.checkFacet(i.idCardNumber, i.name, n, a);
                    }
                });
            }
        });
    },
    checkFacet: function(e, t, a, n) {
        var s = this;
        i({
            url: "/auth-server/auth/sixteen_check_face",
            method: "POST",
            data: {
                idCard: e,
                name: t,
                decryptStr: a,
                imageBase64: n
            }
        }).then(function(e) {
            o.userInfo.isAuth = !0, wx.removeStorageSync("wx-logout"), s.getSession().then(function() {
                s.getxq(1), s.getJian(), wx.hideLoading();
            });
        }).catch(function(e) {
            console.log(e), wx.hideLoading(), wx.navigateTo({
                url: "/pages/gsd-ui/g-auth/error/error"
            });
        });
    },
    longPress: function() {
        var e = this;
        w({
            eventId: "self_tap_ChangingPhoto"
        }), o.confirmIsOnline().then(function(t) {
            if (console.log(o.getIsWork(t.networkType)), t && 1 === o.userInfo.isOpenWu) {
                var a = e;
                wx.showModal({
                    title: "提示",
                    content: "是否重新拍摄头像照片？",
                    confirmText: "确定",
                    success: function(e) {
                        e.confirm && a.takePhoto();
                    }
                });
            }
        });
    },
    getSession: function() {
        var t = this;
        return i({
            url: "/auth-server/auth/user/session",
            method: "get"
        }).then(function(a) {
            wx.removeStorageSync("wx-logout"), o.userInfo = e(e({}, o.userInfo), a), x(o.userInfo.realIdCard) > 16 && x(o.userInfo.realIdCard) < 60 ? t.setData({
                IsSixTeen: !1
            }) : t.setData({
                IsSixTeen: !0
            });
        }).catch(function(e) {
            console.log(e);
        });
    },
    getCode: function() {
        var e = this, t = new Date().getTime();
        n.request({
            url: "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/user-state-code.json",
            method: "GET"
        }).then(function(a) {
            wx.canIUse("reportPerformance") && wx.reportPerformance(1002, Number(new Date().getTime() - t), "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/user-state-code.json"), 
            wx.hideLoading(), console.log(a.data.code), e.setData({
                code: a.data.code
            });
        }).catch(function(e) {});
    },
    mark: function() {
        if (this.data.IsWork) this.getxq(1), this.setData({
            xianshi: !0
        }); else {
            this.setData({
                xianshi: !0
            });
            h("canvas", {
                text: this.data.data.encourage,
                width: b,
                height: b,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: h.CorrectLevel.L
            });
        }
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
    getJian: function() {
        var e = this, t = {
            url: "/jingxinju/jkb/businessTravel/getHealthCode",
            method: "GET"
        };
        i(t).then(function(t) {
            if (console.log(t.code, "接口返回的code"), wx.setStorageSync("br_code", t.code), wx.hideLoading(), 
            "-7" == t.code) {
                w({
                    eventId: "self_load_CodeAbnormal"
                }), e.getJsCode(), console.log(t.code);
                var a = {
                    url: "/auth-server/auth/isBindPhone",
                    method: "POST",
                    data: {
                        idCard: o.userInfo.realldCard
                    }
                };
                i(a).then(function(t) {
                    console.log(t), 1 == t.code ? e.setData({
                        xianshi1: !0
                    }) : e.setData({
                        isxianshi1: !0
                    });
                }).catch(function(e) {
                    wx.hideLoading();
                });
            }
            if ("51" == t.code) {
                w({
                    eventId: "self_load_CodeAbnormal"
                }), e.getJsCode(), console.log(t.code);
                var n = {
                    url: "/auth-server/auth/isBindPhone",
                    method: "POST",
                    data: {
                        idCard: o.userInfo.realldCard
                    }
                };
                i(n).then(function(t) {
                    console.log(t), 1 == t.code ? e.setData({
                        xianshi1: !0
                    }) : e.setData({
                        isxianshi1: !0
                    });
                }).catch(function(e) {
                    wx.hideLoading();
                });
            }
            "-3" == t.code && (w({
                eventId: "self_load_CodeXin"
            }), e.setData({
                isNo: !0
            })), "4" == t.code && e.setData({
                lulukouan: !0
            }), "-1" != t.code ? (wx.hideLoading(), 0 == t.code && w({
                eventId: "self_load_CodeLv"
            }), 1 == t.code && w({
                eventId: "self_load_CodeHuang"
            }), 2 == t.code && w({
                eventId: "self_load_CodeHong"
            }), e.setData({
                code: t.code
            })) : e.getCode(), wx.hideLoading();
        }).catch(function(e) {
            wx.hideLoading(), c(t, e);
        });
    },
    getJian1: function() {
        var e = this, t = {
            url: "/jingxinju/jkb/businessTravel/getHealthCode",
            method: "GET"
        };
        i(t).then(function(t) {
            console.log(t.code, "接口返回的code"), wx.setStorageSync("br_code", t.code), wx.hideLoading(), 
            "-7" == t.code && e.setData({
                isxianshi1: !0
            }), "51" == t.code && e.setData({
                isxianshi1: !0
            }), "-3" == t.code && e.setData({
                isNo: !0
            }), "4" == t.code && e.setData({
                lulukouan: !0
            }), wx.hideLoading();
        }).catch(function(e) {
            wx.hideLoading(), c(t, e);
        });
    },
    tuichu2: function() {
        wx.navigateBack({
            delta: 10
        });
    },
    getAdd: function() {
        var e = {
            url: "/jingxinju/jkb/log/add",
            method: "GET"
        };
        i(e).then(function(e) {
            wx.hideLoading();
        }).catch(function(t) {
            wx.hideLoading(), c(e, t);
        });
    },
    getxq: function(e) {
        var t = this, a = {
            url: "/jingxinju/jkb/businessTravel/getBaseData",
            method: "GET",
            data: {
                type: e
            }
        };
        i(a).then(function(a) {
            if (wx.setStorageSync("br_xq", a), o.arraybuffer(a.gifUrl, "br_gifUrl"), "0" == e) t.setData({
                data: a,
                imgSrc: f(t.data.img.img)
            }); else {
                t.setData({
                    data: a
                }), t.setData({
                    imgSrc: f(a.image)
                }), console.log("没有缓存");
                var i = {
                    img: a.image
                };
                wx.setStorageSync("img", i);
                new u("canvas", {
                    text: a.encourage,
                    width: b,
                    height: b,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: u.CorrectLevel.L
                });
            }
            wx.hideLoading();
        }).catch(function(e) {
            wx.hideLoading(), g(a, e, d.shixiang.benrenHealthStatus.UncaughtExp);
        });
    },
    btn1: function() {
        wx.navigateBack({
            delta: 4
        });
    },
    getPhoneNumber: function(e) {
        var t = this, a = e.detail, n = a.iv, s = a.encryptedData;
        if (!n || !s) return wx.hideLoading(), wx.navigateBack({
            delta: 1
        }), void console.error("用户拒绝授权登录");
        this.setData({
            xianshi1: !1
        }), console.log(e.detail.errMsg, "授权失败");
        var r = {
            url: "/auth-server/auth/getPhone",
            method: "POST",
            data: {
                encryptedData: s,
                iv: n
            }
        };
        i(r).then(function(e) {
            console.log(e.phone, "手机号"), o.userInfo.isChu = "22", o.userInfo.phone = e.phone, 
            wx.redirectTo({
                url: "/pages/registration/yan-zheng/index?time=" + t.data.riqi
            }), wx.hideLoading(), console.log(e, "用户手机号");
        }).catch(function(e) {
            console.log(e, "手机号报错信息"), wx.hideLoading(), g(r, res, d.shixiang.getPhone.UncaughtExp);
        });
    },
    tuichu: function() {
        wx.redirectTo({
            url: "/pages/fusion/benren-list/index"
        });
    },
    getJsCode: function() {
        wx.login({
            success: function(e) {
                console.log(e.code);
                var t = {
                    url: "/auth-server/auth/refreshSessionKey",
                    method: "POST",
                    data: {
                        code: e.code
                    }
                };
                i(t).then(function(e) {
                    console.log(e, "刷新解密seeion返回值");
                }).catch(function(e) {
                    wx.hideLoading(), g(t, e, d.shixiang.refreshSessionKey.UncaughtExp);
                });
            }
        });
    },
    handleTap: function() {
        w({
            eventId: "self_tap_ChangingPhoto"
        }), o.confirmIsOnline().then(function(e) {
            e && 1 === o.userInfo.isOpenWu && !0 !== o.userInfo.isShengpizi && wx.showModal({
                title: "提示",
                content: "是否重新拍摄头像照片？",
                success: function(e) {
                    e.confirm && wx.navigateTo({
                        url: "/pages/gsd-ui/g-auth/face/face?dd=1&isReport=11",
                        success: function() {
                            wx.hideLoading();
                        }
                    });
                }
            });
        });
    },
    bindClode: function() {
        wx.navigateBack({
            delta: 1
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
    },
    luluqueding: function() {
        wx.navigateBack({
            delta: 10
        }), this.setData({
            lulukouan: !1
        });
    }
});