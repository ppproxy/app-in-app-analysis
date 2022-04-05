function idName(e, a) {
                return console.log(e.indexOf(" ")), -1 == e.indexOf(" ");
}
function idcard(e, a) {
                return /([A-Z]|[a-z]|[0-9]|\*){18}/g.test(e);
}
function onLoad(e) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        }), console.log(e);
        var a = n();
        e && this.setData({
            url: e.url
        }), a && this.setData({
            disabled: !0,
            data: {
                name: a.name,
                idCardNumber: a.idCard
            },
            formData: {
                name: a.userName,
                idCardNumber: a.hideIdCard
            }
        }), console.log(a);
}
function onInputChange(e) {
        this.setData(a({
            isShow: !0
        }, "formData.".concat(e.target.id), e.detail.value));
}
function startFaceVerify(a) {
        var t = this;
        console.log(a), wx.startFacialRecognitionVerify({
            name: a.name,
            idCardNumber: a.idCardNumber,
            checkAliveType: 2,
            success: function(i) {
                t.onCheckFaceInfo(e({
                    verify_result: i.verifyResult
                }, a));
            },
            fail: function(e) {
                console.error("wechat startFacialRecognitionVerify fali", e), wx.hideLoading();
                var i = e.errCode, o = (e.errMsg, a.idCardNumber), n = t.getAge(o);
                console.log(n), (n <= 16 || n >= 60) && 10003 != i && 90100 != i ? (console.log("刷脸失败"), 
                t.setData({
                    paizhao: !0
                })) : (wx.hideLoading(), wx.showToast({
                    title: "人脸识别失败",
                    icon: "none"
                }));
            }
        });
}
function onCheckFaceInfo(e) {
        wx.showLoading({
            title: "请稍等...",
            mask: !0
        }), i({
            url: "/auth-server/auth/check_other_face_verify_result_ext",
            method: "POST",
            data: {
                idCard: e.idCardNumber.toUpperCase(),
                name: e.name,
                verifyResult: e.verify_result
            }
        }).then(function(a) {
            console.log("人脸识别成功", a), o({
                eventId: "othersregistra_tap_OthersFacesSuccess"
            }), 1 == n().isPai ? wx.navigateBack({
                delta: 1
            }) : wx.redirectTo({
                url: "/pages/jxzq/ta-ren-cha-xun/index?id=" + a.id + "&name=" + e.name + "&idCardNumber=" + e.idCardNumber
            });
        }).catch(function(e) {
            o({
                eventId: "othersregistra_tap_OthersFacesFail"
            }), wx.hideLoading(), wx.navigateTo({
                url: "/pages/gsd-ui/g-auth/error/error"
            }), console.log("人脸识别失败", e);
        });
}
function onStartVerify(e) {
        console.log(e), e.detail.validStatus && (wx.showLoading({
            title: "请稍等...",
            mask: !0
        }), console.log(this.data.data), null == this.data.data ? this.getIsShequ() : this.startFaceVerify(this.data.data));
}
function getIsShequ() {
        var e = this;
        wx.showLoading({
            title: "请稍等...",
            mask: !0
        }), i({
            url: "/jingxinju/jkb/check/is/beisanxian",
            method: "get",
            data: {
                idCard: this.data.formData.idCardNumber
            }
        }).then(function(a) {
            return console.log(a), "41" == a.code ? (o({
                eventId: "othersregistra_tap_OthersStatusAbnormal"
            }), e.setData({
                scanWrong: !0
            }), void wx.hideLoading()) : "-7" == a.code || "51" == a.code ? (o({
                eventId: "othersregistra_tap_OthersStatusAbnormal"
            }), wx.hideLoading(), wx.showModal({
                title: "提示",
                content: "由于行程查询基于个人手机号码，他人代查功能暂不支持此服务。为正常使用“健康宝”，请您使用本人实名手机号登录“健康宝”小程序，完成本人健康状态查询，或者与所居住社区或相关单位联系，按要求正确履行防疫相关义务。",
                showCancel: !1,
                confirmText: "我知道了",
                success: function() {}
            })) : "-3" == a.code ? (o({
                eventId: "othersregistra_tap_OthersStatusAbnormal"
            }), wx.hideLoading(), e.setData({
                isNo: !0
            }), "") : "4" == a.code ? (wx.hideLoading(), void e.setData({
                lulukouan: !0
            })) : void (a.isBeisanxian ? (o({
                eventId: "othersregistra_tap_OthersStatusAbnormal"
            }), wx.hideLoading(), wx.showModal({
                title: "提示",
                content: "由于行程查询基于个人手机号码，他人代查功能暂不支持此服务。为正常使用“健康宝”，请您使用本人实名手机号登录“健康宝”小程序，完成本人健康状态查询，或者与所居住社区或相关单位联系，按要求正确履行防疫相关义务。",
                confirmText: "我知道了",
                showCancel: !1
            })) : e.getBindStatus());
        }).catch(function(e) {
            console.log(e), wx.hideLoading(), wx.showModal({
                title: "温馨提示",
                content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
                showCancel: !1
            });
        });
}
function getBindStatus(e) {
        var a = this;
        wx.showLoading({
            title: "请稍等...",
            mask: !0
        }), i({
            url: "/jingxinju/jkb/other/bind/status",
            method: "GET",
            data: {
                idCard: this.data.formData.idCardNumber,
                name: this.data.formData.name
            }
        }).then(function(e) {
            if (console.log("人脸识别成功", e), e.isIam) return wx.hideLoading(), void wx.showModal({
                title: "提示",
                content: "不可代查本人信息",
                showCancel: !1,
                confirmText: "我知道了"
            });
            "1" != e.activeStatus ? a.startFaceVerify(a.data.formData) : wx.redirectTo({
                url: "/pages/jxzq/ta-ren-cha-xun/index?id=" + e.userId
            });
        }).catch(function(e) {
            wx.hideLoading(), wx.showModal({
                title: "温馨提示",
                content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
                showCancel: !1
            }), console.log("人脸识别失败", e);
        });
}
function checkFacet(e) {
        wx.showLoading({
            title: "请稍等...",
            mask: !0
        }), i({
            url: "/auth-server/auth/sixteen_check_other_face",
            method: "POST",
            data: e
        }).then(function(a) {
            console.log("人脸识别成功", a), wx.redirectTo({
                url: "/pages/jxzq/ta-ren-cha-xun/index?id=" + a.id + "&name=" + e.name + "&idCard=" + e.idCard
            });
        }).catch(function(e) {
            wx.hideLoading(), wx.navigateTo({
                url: "/pages/gsd-ui/g-auth/error/error"
            }), console.log("人脸识别失败", e);
        });
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
function getAge(e) {
        var a = e, t = a.substring(6, 10), i = a.substring(10, 14), o = t + "." + i;
        console.log(t + "." + i);
        var n = new Date(), r = n.getFullYear(), s = n.getMonth() + 1;
        s < 10 && (s = "0" + s);
        var d = n.getDate();
        d < 10 && (d = "0" + d);
        var c = r + "." + s + d;
        console.log(r + "." + s + d);
        var l = c - o;
        return console.log(l), l;
}
function quxiao() {
        this.setData({
            paizhao: !1
        });
}
function paizhao() {
        var e = this;
        console.log(), this.setData({
            paizhao: !1
        }), wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "camera" ],
            success: function(a) {
                var t = a.tempFilePaths[0];
                wx.getFileSystemManager().readFile({
                    filePath: t,
                    encoding: "base64",
                    success: function(a) {
                        console.log(a);
                        var t = "data:image/png;base64," + a.data;
                        e.setData({
                            imgsd: "data:image/png;base64," + a.data
                        }), console.log(e.data.imgsd), console.log(e.data.formData.idCardNumber);
                        var i = e.data.formData.idCardNumber;
                        if (-1 != i.indexOf("*")) var o = {
                            idCardNumber: e.data.data.idCardNumber,
                            name: e.data.data.name
                        }; else o = {
                            idCardNumber: e.data.formData.idCardNumber,
                            name: e.data.formData.name
                        };
                        var n = r.encrypt(JSON.stringify(o));
                        console.log("加密前数据:%o", o), console.log("加密后数据:%o", n), wx.showLoading({
                            title: "加载中...",
                            mask: !0
                        }), console.log(e.data.data), -1 != i.indexOf("*") ? e.checkFacet({
                            idCard: e.data.data.idCardNumber,
                            name: e.data.data.name,
                            decryptStr: n,
                            imageBase64: t
                        }) : e.checkFacet({
                            idCard: e.data.formData.idCardNumber,
                            name: e.data.formData.name,
                            decryptStr: n,
                            imageBase64: t
                        });
                    },
                    fail: function(e) {
                        realtimeLog.info({
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
