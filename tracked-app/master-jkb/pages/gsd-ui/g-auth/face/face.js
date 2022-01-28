var e = require("../../../../@babel/runtime/helpers/objectSpread2"), a = require("../../../../@babel/runtime/helpers/defineProperty"), t = getApp(), i = t.request, n = (t.config, 
t.wxp), o = t.userStore, r = require("../../../../utils/util"), s = (r.apiErrorAndNavigateBack, 
r.apiError), d = require("../../../../utils/customErrors"), c = require("../../../../config/index").domain, u = require("../../../../utils/genDid"), l = require("../../../../utils/realtimeLog"), h = require("../../../../utils/sha256.js"), g = require("../../../../utils/util.js").apm, f = require("../../../../utils/mtaTarget.js").newspapers, m = (h.sha256_digest, 
require("../../../../utils/jsencrypt.js")), x = require("../../../../utils/aegisInstance"), w = new m.JSEncrypt();

w.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC95A/NJpsjMG8i2Z7/+LkTptel3KLYS6O81NVAH3anwNcwtiYSujvoa1su1J2kXW9828hryaQevcVGDyiJFzJKAa3ckmI3PJIX7qAWopePrlUKHQt3XfjSSMDgjjHukRyF6Omu934jA5mqBOXUAGs/obdoAMl1yHCKBKdmeb929QIDAQAB-----END PUBLIC KEY-----"), 
Page({
    store: function(e) {
        return {
            userInfo: o.userInfo
        };
    },
    data: {
        isNo: !1,
        primaryText: "",
        checkItems: [ {
            name: "反光识别",
            value: 1,
            desc: "需要静止并等待屏幕闪烁"
        }, {
            name: "读数识别",
            value: 0,
            desc: "需要朗读手机屏幕展示的数字"
        } ],
        remoteData: {
            idCardNumber: "",
            name: ""
        },
        report: "",
        dd: "",
        formData: {
            idCardNumber: "",
            name: "",
            authType: "1"
        },
        data: {},
        rules: {
            name: [ {
                type: "required",
                message: "请输入姓名"
            }, {
                type: "idName",
                message: "请输入正确的姓名"
            } ],
            idCardNumber: [ {
                type: "required",
                message: "请输入身份证号"
            }, {
                type: "idcard",
                message: "请输入正确的身份证号"
            } ]
        },
        imgsd: "",
        validateType: {
            idName: function(e, a) {
                return console.log(e.indexOf(" ")), -1 == e.indexOf(" ");
            },
            idcard: function(e, a) {
                return /([A-Z]|[a-z]|[0-9]|\*){18}/g.test(e);
            }
        },
        tips: "当前业务需要人脸识别认证",
        realLevel: "",
        isShow: !1,
        isReplace: "",
        userIdKey: "",
        url: "",
        xianshi1: !1,
        windowHeight: "",
        postData: "",
        postNum: "",
        isBindPhone: "",
        typeRange: [ {
            name: "人脸识别认证",
            value: "1"
        }, {
            name: "线下实人认证",
            value: "2"
        } ],
        typeValue: 1,
        sfxzStatus: !1,
        alreadyLogin: !1
    },
    onLoad: function(e) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        }), e && (console.log(e, "参数"), this.setData({
            url: e.url,
            dd: e.dd,
            report: e.isReport
        })), "" != wx.getStorageSync("wx-sessionid") && null != wx.getStorageSync("wx-sessionid") ? this.getSession1() : this.initUserInfo();
    },
    getSession1: function() {
        var e = this;
        i({
            url: "/auth-server/auth/user/session",
            method: "get"
        }).then(function(a) {
            g.initApmUk(a), "" != a.idCard && null != a.idCard && a.idCard && 1 != e.data.dd ? e.setData({
                primaryText: "登录",
                alreadyLogin: !0
            }) : e.setData({
                primaryText: "开始人脸识别认证"
            }), e.setData({
                realLevel: a.realLevel,
                remoteData: {
                    idCardNumber: a.idCard,
                    name: a.name
                },
                formData: {
                    idCardNumber: a.idCard,
                    name: a.name
                },
                data: {
                    idCardNumber: a.realIdCard,
                    name: a.realName
                }
            });
        }).catch(function(e) {
            wx.hideLoading();
        });
    },
    onChoiceChange: function(e) {
        this.setData(a({}, "formData.".concat(e.target.id), e.detail.value));
    },
    focus: function(e) {
        this.setData(a({}, "formData.".concat(e.target.id), ""));
    },
    initUserInfo: function() {
        var a, t = this;
        a = "" != wx.getStorageSync("wx-did") || wx.getStorageSync("wx-did") ? wx.getStorageSync("wx-did") : u();
        var i;
        i = wx.getStorageSync("reqTimestamp") && wx.getStorageSync("reqTimestamp") ? parseInt((new Date().getTime() + wx.getStorageSync("reqTimestamp")) / 1e3, 10) : parseInt(new Date().getTime() / 1e3, 10);
        var o = "123456789abcdefg", r = (0, h.sha256_digest)("".concat(i).concat("LPDyeNiS18TToJQqSwtULTdGq1ZftoYY").concat(o).concat(i)).toUpperCase();
        wx.showLoading(), n.login().then(function(s) {
            var d = s.code, u = {
                url: c + "/auth-server/auth/login",
                method: "POST",
                header: {
                    did: a,
                    "x-tif-nonce": o,
                    "x-tif-paasid": "jxjxcxzcfu",
                    "x-tif-signature": r,
                    "x-tif-timestamp": i
                },
                data: {
                    code: d
                }
            }, l = new Date().getTime();
            return console.log("before request", u), n.request(u).then(function(i) {
                if (wx.canIUse("reportPerformance") && wx.reportPerformance(1001, Number(new Date().getTime() - l), "/auth-server/auth/login"), 
                wx.hideLoading(), "BIF:10401" != i.data.errcode) {
                    if ("BIS:10200" == i.data.errcode) {
                        var n = i.data.data;
                        wx.setStorageSync("wx-did", a), wx.setStorageSync("wx-sessionid", n.sid), x.setConfig({
                            uin: n.sid
                        }), "" != n.idCard && null != n.idCard && n.idCard && 1 != t.data.dd ? t.setData({
                            primaryText: "登录"
                        }) : t.setData({
                            primaryText: "开始人脸识别认证"
                        }), t.setData({
                            userIdKey: n.userIdKey,
                            realLevel: n.realLevel,
                            remoteData: {
                                idCardNumber: n.idCard,
                                name: n.name
                            },
                            formData: e(e({}, t.data.formData), {}, {
                                idCardNumber: n.idCard,
                                name: n.name
                            }),
                            data: {
                                idCardNumber: n.realIdCard,
                                name: n.realName
                            }
                        });
                    }
                } else t.initUserInfo();
            }).catch(function(e) {
                wx.hideLoading(), "BIF:10401" != e.data.errcode ? wx.showModal({
                    title: "温馨提示",
                    content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
                    showCancel: !1,
                    success: function(e) {
                        console.log(e), e.confirm && (console.log(e), wx.navigateBack({
                            delta: 1
                        }));
                    }
                }) : t.initUserInfo();
            });
        });
    },
    onInputChange: function(e) {
        var t;
        this.setData((a(t = {}, "formData.".concat(e.target.id), e.detail.value), a(t, "isShow", !0), 
        a(t, "alreadyLogin", !1), t)), "2" != this.data.typeValue ? this.setData({
            primaryText: "开始人脸识别认证"
        }) : this.setData({
            primaryText: "查询本人健康状态"
        });
    },
    showTypeBox: function() {
        this.setData({
            sfxzStatus: !this.data.sfxzStatus
        });
    },
    handleChange: function(e) {
        if (this.setData({
            typeValue: e.detail.value
        }), 0 == this.data.alreadyLogin) {
            if ("2" == this.data.typeValue) return void this.setData({
                primaryText: "查询本人健康状态"
            });
            this.setData({
                primaryText: "开始人脸识别认证"
            });
        }
        console.log("------------身份认证方式选择", this.data.typeValue);
    },
    onStartVerify: function(e) {
        console.log("提交开始刷脸", e);
        var a = e.detail, t = a.validStatus, i = a.value, n = i.name, o = i.idCardNumber, r = null != n ? n.replace(/\s/g, "") : "", s = null != o ? o.replace(/\s/g, "") : "";
        if (this.wxFaceVerifyData = {
            name: r,
            id_card_number: s
        }, t) if (wx.showLoading({
            title: "请稍等..."
        }), f({
            eventId: "login_tap_TriggerLogin"
        }), 0 == this.data.realLevel) {
            if ("2" == this.data.typeValue) return void this.isShengPhone({
                name: this.wxFaceVerifyData.name,
                idCardNumber: this.wxFaceVerifyData.id_card_number
            }, 1);
            this.isBindPhone({
                idCardNumber: this.wxFaceVerifyData.id_card_number
            }, 1);
        } else if (this.data.isShow) {
            if (this.data.formData.name != this.data.remoteData.name && this.data.formData.idCardNumber == this.data.remoteData.idCardNumber) return "2" == this.data.typeValue ? void this.isShengPhone({
                name: this.data.formData.name,
                idCardNumber: this.data.data.idCardNumber
            }, 0) : void this.isBindPhone({
                name: this.data.formData.name,
                idCardNumber: this.data.data.idCardNumber
            }, 0);
            if (this.data.formData.name == this.data.remoteData.name && this.data.formData.idCardNumber != this.data.remoteData.idCardNumber) return "2" == this.data.typeValue ? void this.isShengPhone({
                name: this.data.data.name,
                idCardNumber: this.data.formData.idCardNumber
            }, 0) : void this.isBindPhone({
                name: this.data.data.name,
                idCardNumber: this.data.formData.idCardNumber
            }, 0);
            if (this.data.formData.name == this.data.remoteData.name && this.data.formData.idCardNumber == this.data.remoteData.idCardNumber && "2" == this.data.typeValue) return void this.isShengPhone({
                name: this.data.data.name,
                idCardNumber: this.data.data.idCardNumber
            }, 0);
            if ("2" == this.data.typeValue) return void this.isShengPhone({
                name: this.wxFaceVerifyData.name,
                idCardNumber: this.wxFaceVerifyData.id_card_number
            }, 1);
            this.isBindPhone({
                idCardNumber: this.wxFaceVerifyData.id_card_number
            }, 1);
        } else {
            var d = wx.getStorageSync("wx-logout");
            if ("2" == this.data.typeValue) return void (11 === d ? this.isShengPhone(this.data.data, 4) : (console.log(d), 
            this.isShengPhone(this.data.data, 2)));
            11 === d ? (f({
                eventId: "login_tap_FakeLogin"
            }), this.isBindPhone(this.data.data, 4)) : (console.log(d), this.isBindPhone(this.data.data, 2));
        }
    },
    isBindPhone: function(e, a) {
        var t = this, n = {
            url: "/auth-server/auth/isBindPhone",
            method: "POST",
            data: {
                idCard: e.idCardNumber
            }
        };
        return i(n).then(function(i) {
            console.log(i, 11), console.log(a), f({
                eventId: "login_tap_AuthLogin"
            }), 1 == i.code ? (11 == t.data.report ? 0 === a ? t.startFaceVerify2(e) : 1 === a ? t.startFaceVerify() : 4 == a ? (f({
                eventId: "login_tap_FakeLogin"
            }), t.getSession().then(function() {
                if (t.data.isReplace) return wx.setStorageSync("wx-logout", 11), void t.isBindPhone(t.data.data, 2);
                o.userInfo.isAuth = !0, wx.removeStorageSync("wx-logout"), wx.hideLoading(), "undefined" != t.data.url && t.data.url ? "/pages/jxzq/cha-xun-jie-guo/index" == t.data.url ? t.getCheck() : wx.redirectTo({
                    url: t.data.url
                }) : wx.navigateBack({
                    delta: 1
                });
            })) : t.startFaceVerify1() : (t.getCode(), t.setData({
                xianshi1: !0,
                postData: e,
                postNum: a,
                isBindPhone: 1
            })), wx.hideLoading()) : 0 === a ? t.startFaceVerify2(e) : 1 === a ? t.startFaceVerify() : 4 == a ? (f({
                eventId: "login_tap_FakeLogin"
            }), t.getSession().then(function() {
                if (t.data.isReplace) return wx.setStorageSync("wx-logout", 11), void t.isBindPhone(t.data.data, 2);
                o.userInfo.isAuth = !0, wx.removeStorageSync("wx-logout"), wx.hideLoading(), "undefined" != t.data.url && t.data.url ? "/pages/jxzq/cha-xun-jie-guo/index" == t.data.url ? t.getCheck() : wx.redirectTo({
                    url: t.data.url
                }) : wx.navigateBack({
                    delta: 1
                });
            })) : t.startFaceVerify1();
        }).catch(function(e) {
            wx.hideLoading();
        });
    },
    getPhoneNumber: function(e) {
        var a = this;
        this.setData({
            xianshi1: !1
        });
        var t = e.detail, n = t.iv, r = t.encryptedData;
        if (!n || !r) return wx.hideLoading(), void console.error("用户拒绝授权登录");
        var c = 1;
        4 == this.data.postNum && (c = 0), wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var u = {
            url: "/auth-server/auth/getPhone",
            method: "POST",
            data: {
                encryptedData: r,
                iv: n,
                type: c
            },
            disableModalWhenApiError: !0
        };
        i(u).then(function(e) {
            f({
                eventId: "login_tap_GetPhone"
            }), 1 === a.data.isBindPhone ? 0 === a.data.postNum ? a.startFaceVerify2(a.data.postData) : 1 === a.data.postNum ? a.startFaceVerify(a.data.postData) : 4 === a.data.postNum ? a.getSession().then(function() {
                if (a.data.isReplace) return wx.setStorageSync("wx-logout", 11), void a.isBindPhone(a.data.data, 2);
                o.userInfo.isAuth = !0, wx.removeStorageSync("wx-logout"), wx.hideLoading(), "undefined" != a.data.url && a.data.url ? ("/pages/jxzq/cha-xun-jie-guo/index" == a.data.url ? a.getCheck() : wx.redirectTo({
                    url: a.data.url
                }), console.log(0)) : (console.log(1), wx.navigateBack({
                    delta: 1
                }));
            }) : a.startFaceVerify1(a.data.postData) : (console.log("this.postData", a.data.postData), 
            a.isShengLogin(a.data.postData)), console.log(e, "用户手机号");
        }).catch(function(e) {
            console.log(e, "手机号报错信息"), wx.hideLoading(), s(u, e, d.shixiang.getPhone.UncaughtExp);
        });
    },
    isShengPhone: function(e, a) {
        var t = this;
        console.log(e);
        var n = {
            url: "/auth-server/auth/isBindPhone",
            method: "POST",
            data: {
                idCard: e.idCardNumber
            }
        };
        return i(n).then(function(i) {
            console.log(i, 11), console.log(a), 1 == i.code ? (11 == t.data.report ? t.isShengLogin(e) : (t.getCode(), 
            t.setData({
                xianshi1: !0,
                postData: e,
                postNum: a,
                isBindPhone: 2
            })), wx.hideLoading()) : (t.setData({
                postData: e,
                isBindPhone: 2
            }), t.isShengLogin(e));
        }).catch(function(e) {
            wx.hideLoading();
        });
    },
    isShengLogin: function(e) {
        var a = this;
        if (e.name) {
            var t = e.name.replace("（", "(");
            e.name = t.replace("）", ")");
        }
        console.log("dataname-------", e.name);
        var n = {
            name: e.name || "",
            idCard: e.idCardNumber || ""
        };
        i({
            url: "/auth-server/auth/shengpizi_check_face",
            method: "POST",
            data: n
        }).then(function(e) {
            wx.hideLoading(), "-2" == e.errorCode ? wx.showModal({
                title: "提示",
                content: "北京“健康宝”暂不掌握您的个人信息，请核对后重试。",
                showCancel: !1,
                confirmText: "我知道了"
            }) : "-3" == e.errorCode ? wx.showModal({
                title: "提示",
                content: "您已在其他微信登录此账号。",
                showCancel: !1,
                confirmText: "我知道了"
            }) : "0" == e.errorCode ? a.getSession().then(function() {
                "undefined" != a.data.url && a.data.url ? "/pages/jxzq/cha-xun-jie-guo/index" == a.data.url ? a.getCheck() : wx.redirectTo({
                    url: a.data.url
                }) : wx.navigateBack({
                    delta: 1
                });
            }) : wx.showModal({
                title: "温馨提示",
                content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
                showCancel: !1,
                confirmText: "确定"
            }), console.log("登录成功", e);
        });
    },
    startFaceVerify: function() {
        var e = this, a = this.wxFaceVerifyData, t = a.name, i = a.id_card_number;
        console.log(this.wxFaceVerifyData, 112), wx.startFacialRecognitionVerify({
            name: t,
            idCardNumber: i,
            checkAliveType: 2,
            success: function(a) {
                console.log(a), e.onCheckFaceInfo({
                    verify_result: a.verifyResult
                });
            },
            fail: function(a) {
                console.error("wechat startFacialRecognitionVerify fali", a), wx.hideLoading();
                var t = a.errCode, n = (a.errMsg, i), o = e.getAge(n);
                console.log(o), o <= 16 || o >= 60 ? 10003 != t && 90100 != t ? (console.log("刷脸失败"), 
                e.setData({
                    isNo: !0
                })) : (wx.hideLoading(), wx.showToast({
                    title: "人脸识别失败",
                    icon: "none"
                }), l.info({
                    eventMsg: "人脸识别失败，fail，用户小于或等于16岁，但是状态码为 10003(身份证号不匹配) 或者 90100(用户取消)",
                    err: a,
                    age: o,
                    functionName: "startFaceVerify"
                })) : (wx.hideLoading(), wx.showToast({
                    title: "人脸识别失败",
                    icon: "none"
                }), l.info({
                    eventMsg: "人脸识别失败，fail，且用户大于16岁",
                    err: a,
                    age: o,
                    functionName: "startFaceVerify"
                }));
            }
        });
    },
    startFaceVerify1: function() {
        var e = this;
        console.log(this.data.data), wx.startFacialRecognitionVerify({
            name: this.data.data.name,
            idCardNumber: this.data.data.idCardNumber,
            checkAliveType: 2,
            success: function(a) {
                e.onCheckFaceInfo1({
                    verify_result: a.verifyResult
                });
            },
            fail: function(a) {
                console.error("wechat startFacialRecognitionVerify fali", a);
                var t = a.errCode, i = (a.errMsg, e.data.data.idCardNumber), n = e.getAge(i);
                if (n <= 16 || n >= 60) if (10003 != t && 90100 != t) {
                    wx.showLoading({
                        title: "请稍等...",
                        mask: !0
                    });
                    var o = {
                        idCardNumber: e.data.data.idCardNumber,
                        name: e.data.data.name
                    }, r = w.encrypt(JSON.stringify(o));
                    console.log("加密前数据:%o", o), console.log("加密后数据:%o", r), e.checkFacet({
                        idCard: e.data.data.idCardNumber,
                        name: e.data.data.name,
                        decryptStr: r
                    });
                } else wx.hideLoading(), wx.showToast({
                    title: "人脸识别失败",
                    icon: "none"
                }), l.info({
                    eventMsg: "人脸识别失败，fail，用户小于或等于16岁，但是状态码为 10003(身份证号不匹配) 或者 90100(用户取消)",
                    err: a,
                    age: n,
                    functionName: "startFaceVerify1"
                }); else wx.hideLoading(), wx.showToast({
                    title: "人脸识别失败",
                    icon: "none"
                }), l.info({
                    eventMsg: "人脸识别失败，fail，且用户大于16岁",
                    err: a,
                    age: n,
                    functionName: "startFaceVerify1"
                });
            }
        });
    },
    startFaceVerify2: function(e) {
        var a = this;
        console.log(e), wx.startFacialRecognitionVerify({
            name: e.name,
            idCardNumber: e.idCardNumber,
            checkAliveType: 2,
            success: function(e) {
                console.log(e), a.onCheckFaceInfo1({
                    verify_result: e.verifyResult
                });
            },
            fail: function(t) {
                console.error("wechat startFacialRecognitionVerify fali", t);
                var i = t.errCode, n = (t.errMsg, e.idCardNumber.substring(6, 10), e.idCardNumber), o = a.getAge(n);
                if (o <= 16 || o >= 60) if (10003 != i && 90100 != i) {
                    wx.showLoading({
                        title: "请稍等...",
                        mask: !0
                    });
                    var r = {
                        idCardNumber: e.idCardNumber,
                        name: e.name
                    }, s = w.encrypt(JSON.stringify(r));
                    console.log("加密前数据:%o", r), console.log("加密后数据:%o", s), a.checkFacet({
                        idCard: e.idCardNumber,
                        name: e.name,
                        decryptStr: s
                    });
                } else wx.hideLoading(), wx.showToast({
                    title: "人脸识别失败",
                    icon: "none"
                }), l.info({
                    eventMsg: "人脸识别失败，fail，用户小于或等于16岁，但是状态码为 10003(身份证号不匹配) 或者 90100(用户取消)",
                    err: t,
                    age: o,
                    functionName: "startFaceVerify2"
                }); else wx.hideLoading(), wx.showToast({
                    title: "人脸识别失败",
                    icon: "none"
                }), l.info({
                    eventMsg: "人脸识别失败，fail，且用户大于16岁",
                    err: t,
                    age: o,
                    functionName: "startFaceVerify2"
                });
            }
        });
    },
    onCheckFaceInfo2: function() {
        var e = this;
        wx.showLoading({
            title: "请稍等..."
        }), i({
            url: "/auth-server/auth/sixteen_check_face",
            method: "POST",
            data: {
                idCard: this.data.formData.idCardNumber.toUpperCase(),
                name: this.data.formData.name,
                verifyResult: data.verify_result
            }
        }).then(function(a) {
            console.log("人脸识别成功", a), o.userInfo.isAuth = !0, wx.removeStorageSync("img"), wx.removeStorageSync("wx-logout"), 
            f({
                eventId: "authlogin_success"
            }), e.getPhone(), e.getSession().then(function() {
                wx.hideLoading(), console.log(e.data.url), "undefined" != e.data.url && e.data.url ? ("/pages/jxzq/cha-xun-jie-guo/index" == e.data.url ? e.getCheck() : wx.redirectTo({
                    url: e.data.url
                }), console.log(0)) : (console.log(1), wx.navigateBack({
                    delta: 1
                }));
            });
        }).catch(function(e) {
            f({
                eventId: "authlogin_fail"
            }), console.log(e), console.log("人脸识别失败", e);
        });
    },
    onCheckFaceInfo: function(e) {
        var a = this;
        console.log(e), wx.showLoading({
            title: "请稍等..."
        }), i({
            url: "/auth-server/auth/check_face_verify_result_ext",
            method: "POST",
            data: {
                idCard: this.data.formData.idCardNumber.toUpperCase(),
                name: this.data.formData.name,
                verifyResult: e.verify_result
            }
        }).then(function(e) {
            console.log("人脸识别成功", e), o.userInfo.isAuth = !0, f({
                eventId: "authlogin_success"
            }), wx.removeStorageSync("img"), wx.removeStorageSync("wx-logout"), a.getPhone(), 
            a.getSession().then(function() {
                wx.hideLoading(), console.log(a.data.url, "-------url--------"), "undefined" != a.data.url && a.data.url ? ("/pages/jxzq/cha-xun-jie-guo/index" == a.data.url ? a.getCheck() : wx.redirectTo({
                    url: a.data.url
                }), console.log(0)) : (console.log(1), wx.navigateBack({
                    delta: 1
                }));
            });
        }).catch(function(e) {
            f({
                eventId: "authlogin_fail"
            }), console.log(e), wx.hideLoading(), wx.navigateTo({
                url: "/pages/gsd-ui/g-auth/error/error"
            }), console.log("人脸识别失败", e), l.info({
                eventMsg: "人脸识别失败，fail check_face_verify_result_ext # catch",
                response: e,
                functionName: "onCheckFaceInfo"
            });
        });
    },
    onCheckFaceInfo1: function(e) {
        var a = this;
        console.log(e), wx.showLoading({
            title: "请稍等..."
        }), i({
            url: "/auth-server/auth/check_face_verify_result_ext",
            method: "POST",
            data: {
                idCard: this.data.data.idCardNumber.toUpperCase(),
                name: this.data.data.name,
                verifyResult: e.verify_result
            }
        }).then(function(e) {
            console.log("人脸识别成功", e), wx.removeStorageSync("img"), o.userInfo.isAuth = !0, f({
                eventId: "authlogin_success"
            }), wx.removeStorageSync("wx-logout"), a.getPhone(), a.getSession().then(function() {
                wx.hideLoading(), console.log(a.data.url, "路径"), "undefined" != a.data.url && a.data.url ? ("/pages/jxzq/cha-xun-jie-guo/index" == a.data.url ? a.getCheck() : wx.redirectTo({
                    url: a.data.url
                }), console.log(0)) : (console.log(1), wx.navigateBack({
                    delta: 1
                }));
            });
        }).catch(function(e) {
            console.log(e), wx.hideLoading(), f({
                eventId: "authlogin_fail"
            }), wx.navigateTo({
                url: "/pages/gsd-ui/g-auth/error/error"
            }), console.log("人脸识别失败", e), l.info({
                eventMsg: "人脸识别失败，fail check_face_verify_result_ext # catch",
                response: e,
                functionName: "onCheckFaceInfo1"
            });
        });
    },
    getSession: function() {
        var a = this;
        return i({
            url: "/auth-server/auth/user/session",
            method: "get"
        }).then(function(t) {
            wx.hideLoading(), console.log("人脸识别成功", t), g.initApmUk(t), wx.removeStorageSync("wx-logout"), 
            o.userInfo = e(e({}, o.userInfo), t), a.setData({
                isReplace: t.isReplace
            });
        }).catch(function(e) {
            wx.navigateTo({
                url: "/pages/gsd-ui/g-auth/error/error"
            }), wx.hideLoading(), console.log("人脸识别失败", e);
        });
    },
    checkFacet: function(e) {
        var a = this;
        f({
            eventId: "login_tap_16AnnumLogin"
        }), console.log(e), i({
            url: "/auth-server/auth/sixteen_check_face",
            method: "POST",
            data: e
        }).then(function(t) {
            console.log("人脸识别成功", t), o.userInfo.isAuth = !0, wx.removeStorageSync("wx-logout"), 
            f({
                eventId: "16AnnumLogin_success"
            }), a.getPhone(), a.getSession().then(function() {
                wx.hideLoading(), "undefined" != a.data.url && a.data.url ? ("/pages/jxzq/cha-xun-jie-guo/index" == a.data.url ? a.getCheck() : wx.redirectTo({
                    url: a.data.url
                }), console.log(0)) : (console.log(1), wx.navigateBack({
                    delta: 1
                }));
            }).catch(function(a) {
                wx.hideLoading(), l.info({
                    eventMsg: "人脸识别成功，用户小于等于16岁，获取 getSession 失败 # catch",
                    response: a,
                    requestData: e
                });
            });
        }).catch(function(a) {
            console.log(a), f({
                eventId: "16AnnumLogin_fail"
            }), wx.hideLoading(), wx.navigateTo({
                url: "/pages/gsd-ui/g-auth/error/error"
            }), console.log("人脸识别失败", a), l.info({
                eventMsg: "人脸识别失败，用户小于等于16岁，sixteen_check_face # catch",
                response: a,
                requestData: e
            });
        });
    },
    getCheck: function() {
        var e = this, a = {
            url: "/jingxinju/jkb/businessTravel/check",
            method: "get"
        };
        return i(a).then(function(a) {
            if (console.log(a, 11), null != a.healthStatus && a.healthStatus && "41" == a.healthStatus.code) return wx.hideLoading(), 
            void wx.navigateBack({
                delta: 1
            });
            a.isLeaveOrEnterBj ? (wx.hideLoading(), wx.navigateBack({
                delta: 1
            })) : (wx.redirectTo({
                url: e.data.url
            }), wx.hideLoading());
        }).catch(function(e) {
            wx.hideLoading(), s(a, e, d.shixiang.businessTravelCheck.UncaughtExp), l.info({
                eventMsg: "人脸识别成功，获取 businessTravelCheck 失败 # catch",
                response: e
            });
        });
    },
    getCode: function() {
        wx.login({
            success: function(e) {
                console.log(e.code);
                var a = {
                    url: "/auth-server/auth/refreshSessionKey",
                    method: "POST",
                    data: {
                        code: e.code
                    }
                };
                i(a).then(function(e) {
                    console.log(e, "刷新解密seeion返回值");
                }).catch(function(e) {
                    wx.hideLoading(), s(a, e, d.shixiang.refreshSessionKey.UncaughtExp);
                });
            }
        });
    },
    getPhone: function() {
        i({
            url: "/push/notice/session/backup",
            method: "post",
            disableModalWhenApiError: !0
        }).then(function(e) {
            console.log(e, 11), g.initApmUk(e), console.log("人脸识别成功", e, wx.getStorageSync("wx-logout"));
        }).catch(function(e) {
            console.log(e, 10);
        });
    },
    getAge: function(e) {
        var a = e, t = a.substring(6, 10), i = a.substring(10, 14), n = t + "." + i;
        console.log(t + "." + i);
        var o = new Date(), r = o.getFullYear(), s = o.getMonth() + 1;
        s < 10 && (s = "0" + s);
        var d = o.getDate();
        d < 10 && (d = "0" + d);
        var c = r + "." + s + d;
        console.log(r + "." + s + d);
        var u = c - n;
        return console.log(u), u;
    },
    showZd: function() {
        this.setData({
            isNo: !1
        });
    },
    showYw: function() {
        var e = this.wxFaceVerifyData, a = e.name, t = e.id_card_number, i = this;
        console.log(), this.setData({
            isNo: !1
        }), wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "camera" ],
            success: function(e) {
                var n = e.tempFilePaths[0];
                wx.getFileSystemManager().readFile({
                    filePath: n,
                    encoding: "base64",
                    success: function(e) {
                        console.log(e);
                        var n = "data:image/png;base64," + e.data;
                        i.setData({
                            imgsd: "data:image/png;base64," + e.data
                        }), console.log(i.data.imgsd);
                        var o = {
                            idCardNumber: t,
                            name: a
                        }, r = w.encrypt(JSON.stringify(o));
                        console.log("加密前数据:%o", o), console.log("加密后数据:%o", r), wx.showLoading({
                            title: "加载中...",
                            mask: !0
                        }), i.checkFacet({
                            idCard: t,
                            name: a,
                            decryptStr: r,
                            imageBase64: n
                        });
                    },
                    fail: function(e) {
                        l.info({
                            eventMsg: "人脸识别失败，fail，用户小于或等于16岁，读取照片失败 wx.getFileSystemManager().readFile # fail",
                            faceErr: err,
                            nowErr: e,
                            age: _age,
                            functionName: "startFaceVerify"
                        });
                    }
                });
            }
        });
    }
});