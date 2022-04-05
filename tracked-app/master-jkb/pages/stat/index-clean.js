function onShow() {
        var e = this;
        l(), i.getJson(), i.userInfo.DengJiArr1 = void 0, i.confirmIsOnline().then(function(t) {
            if (t && 1 === i.userInfo.isOpenWu) {
                e.setData({
                    userInfo: i.userInfo
                }), e.dailyAppointment();
                var n = new Date().getTime();
                e.jkbConfigeTest().then(function(t) {
                    wx.canIUse("reportPerformance") && wx.reportPerformance(1002, Number(new Date().getTime() - n), r.jsonCdn), 
                    console.log(t);
                    var a = new Date().getTime(), o = wx.getStorageSync("TimeSing") || "";
                    1 == t.data.isLogoutUserByPhone && a - o > 864e5 ? e.isAuthPhone().then(function(t) {
                        if (console.log(t, 1), 1 == t.code) {
                            wx.setStorageSync("wx-logout", 11);
                            var n = new Date().getTime();
                            wx.setStorageSync("TimeSing", n);
                        } else wx.getStorageSync("wx-sessionid") && e.getLogin1();
                    }).catch(function(t) {
                        console.log(t, 0), wx.getStorageSync("wx-sessionid") && e.getLogin1();
                    }) : wx.getStorageSync("wx-sessionid") && e.getLogin1();
                }).catch(function() {
                    wx.getStorageSync("wx-sessionid") && e.getLogin1();
                });
            } else i.getUserStorage().then(function() {
                2 == wx.getStorageSync("user-session").realLevel && (i.userInfo.isAuth = !0, e.setData({
                    userInfo: i.userInfoTimeSing
                }));
            });
        });
}
function jkbConfigeTest() {
        var e = {
            url: r.jsonCdn,
            method: "get"
        };
        return h.request(e);
}
function isAuthPhone() {
        return s({
            url: "/auth-server/auth/isAuthPhone",
            method: "post",
            disableModalWhenApiError: !0
        });
}
function onLoad(e) {
        var t = this;
        console.log(e), "1" == e.tanchu && this.setData({
            tanchu: !0
        });
        var n = this;
        wx.getSystemInfo({
            success: function(e) {
                n.setData({
                    systemInfo: e,
                    windowHeight: wx.getSystemInfoSync().windowHeight,
                    windowWidth: wx.getSystemInfoSync().windowWidth
                });
            }
        }), 0 == i.flag && this.setData({
            jxxzAdvanced: !1
        }), this.setData({
            ma4Path: wx.getStorageSync("home_ma4Path")
        }), i.confirmIsOnline().then(function(e) {
            e && 1 === i.userInfo.isOpenWu ? (t.ma4Path(), i.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/statics/bg.webp", "home_bg", "home_imgUrl"), 
            i.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/statics/syjt.png", "home_jian", "home_imgUrl"), 
            i.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/statics/title.webp", "home_title", "home_imgUrl"), 
            i.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/statics/home_saomaicon.png", "home_syjt", "home_imgUrl"), 
            i.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/statics/ztcx.png", "home_ztcx", "home_imgUrl"), 
            i.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/statics/trjkzt.png", "home_trjkzt", "home_imgUrl"), 
            t.getNoticeList(), t.setData({
                imgUrl: {
                    home_bg: "https://xcx-static.yqgz.beijing.gov.cn/statics/bg.webp",
                    home_title: "https://xcx-static.yqgz.beijing.gov.cn/statics/title.webp",
                    home_syjt: "https://xcx-static.yqgz.beijing.gov.cn/statics/home_saomaicon.png",
                    home_ztcx: "https://xcx-static.yqgz.beijing.gov.cn/statics/ztcx.png",
                    home_trjkzt: "https://xcx-static.yqgz.beijing.gov.cn/statics/trjkzt.png",
                    home_jian: "https://xcx-static.yqgz.beijing.gov.cn/statics/syjt.png"
                }
            }), i.userInfo.isAuth && t.setData({
                userInfo: i.userInfo
            }), i.userInfo.isShow ? t.setData({
                xianshi: !0
            }) : t.setData({
                xianshi: !1
            })) : t.setData({
                imgUrl: wx.getStorageSync("home_imgUrl"),
                list: wx.getStorageSync("home_list") ? wx.getStorageSync("home_list").data : []
            });
        });
        var a = new Date().getTime();
        console.log("当前时间戳为：" + a);
        var o = wx.getStorageSync("shengming");
        if (console.log(o, "12", "" != o && "0" != o && o), "" != o && "0" != o && o) {
            var s = a - o;
            console.log(s), s < 2592e6 ? this.setData({
                zhanshi: !1
            }) : this.setData({
                zhanshi: !0
            });
        }
}
function getAythList() {}
function btn2() {
        this.setData({
            showModal: !1
        });
}
function btn1() {
        var e = this;
        wx.navigateTo({
            url: "/pages/jxzq/daofangren-xinxi-dengji/index",
            success: function() {
                e.setData({
                    showModal: !1
                });
            }
        });
}
function changeImg() {
        this.setData({
            showtitleImg: !this.data.showtitleImg
        });
}
function changeImgback() {
        this.setData({
            showtitleImg: !1
        });
}
function goDetail(e) {
        u({
            eventId: "home_tap_Inform"
        }), wx.navigateTo({
            url: "/pages/jxzq/xiao-xi-xiang-qing/index?index=" + e.currentTarget.dataset.index
        });
}
function getLogin1() {
        var e = this;
        return s({
            url: "/auth-server/auth/user/session",
            method: "get"
        }).then(function(n) {
            w.initApmUk(n), 11 === wx.getStorageSync("wx-logout") || (-1 == n.faceExpires ? (e.getScancode(), 
            e.getAythList(), i.userInfo = t(t({}, i.userInfo), n), i.userInfo.isAuth = !0, e.setData({
                userInfo: i.userInfo,
                isReplace: n.isReplace
            }), wx.removeStorageSync({
                key: "wx-logout"
            })) : (i.userInfo.isAuth = !1, wx.removeStorageSync("img")));
        }).catch(function(t) {
            wx.hideLoading(), console.log(t), "BIF:10401" === t.errcode && (wx.removeStorageSync("wx-sessionid"), 
            i.userInfo.isAuth = !1, wx.removeStorageSync("wx-logout")), e.setData({
                userInfo: i.userInfo
            });
        });
}
function getLogin() {
        var e = this;
        return new Promise(function(n, a) {
            s({
                url: "/auth-server/auth/user/session",
                method: "get"
            }).then(function(a) {
                console.log(a), w.initApmUk(a), 11 === wx.getStorageSync("wx-logout") || (-1 == a.faceExpires ? (i.userInfo = t(t({}, i.userInfo), a), 
                w.initApmUk(a), i.userInfo.isAuth = !0, e.setData({
                    userInfo: i.userInfo,
                    isReplace: a.isReplace
                }), wx.removeStorageSync({
                    key: "wx-logout"
                })) : i.userInfo.isAuth = !1), n(a);
            }).catch(function(t) {
                if (console.log(t), wx.hideLoading(), "BIF:10401" === t.errcode) return i.userInfo.isAuth = !1, 
                wx.removeStorageSync("wx-logout"), wx.removeStorageSync("wx-sessionid"), void n(t);
                wx.showModal({
                    title: "温馨提示",
                    content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
                    confirmText: "确定",
                    showCancel: !1
                }), a(t), e.setData({
                    userInfo: i.userInfo
                });
            });
        });
}
function onPageScroll(e) {
        var t = parseInt(e.scrollTop) < 80;
        this.setData({
            isShowBg: t
        });
}
function notLoginTips(e) {
        wx.showModal({
            title: "提示",
            content: "本次操作需要您进行登录验证",
            success: function(t) {
                t.confirm && wx.navigateTo({
                    url: e
                });
            }
        });
}
function success(e) {
                            e.confirm && wx.navigateTo({
                                url: "/pages/gsd-ui/g-auth/face/face?url=/pages/jxzq/cha-xun-jie-guo/index"
                            });
}
function success(e) {
                            e.confirm && wx.navigateTo({
                                url: "/pages/gsd-ui/g-auth/face/face?dd=1&url=/pages/jxzq/cha-xun-jie-guo/index"
                            });
}
function chaichutui() {
        this.setData({
            isxianshi1: !1
        });
}
function handchuchai() {
        var e = this;
        this.setData({
            isxianshi1: !1
        }), wx.showLoading({
            title: "努力加载中",
            mask: !0
        });
        var t = {
            url: "/auth-server/auth/isBindPhone",
            method: "POST",
            data: {
                idCard: i.userInfo.realldCard
            }
        };
        s(t).then(function(t) {
            var n = t;
            wx.hideLoading(), 1 == n.code ? (e.getCode(), e.setData({
                xianshi1: !0
            })) : (u({
                eventId: "declare_home_InDeclaration"
            }), wx.navigateTo({
                url: "/pages/registration/yan-zheng/index?time=" + e.data.time
            }));
        }).catch(function(e) {
            wx.hideLoading();
        });
}
function btnScanWrong1() {
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), this.setData({
            xianshi1sa: !1
        }), wx.navigateTo({
            url: "/pages/registration/yan-zheng/index?time=" + this.data.time
        }), wx.hideLoading();
}
function success(e) {
                        e.confirm && wx.navigateTo({
                            url: "/pages/gsd-ui/g-auth/face/face?dd=1&url=/pages/jxzq/zhuang-tai-cha-xun/index"
                        });
}
function scanCode() {
        u({
            eventId: "home_tap_ScanCode"
        });
        var e = this, t = new Date(), n = t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate();
        i.confirmIsOnline().then(function(t) {
            t && 1 === i.userInfo.isOpenWu ? e.getOline(1) : n != wx.getStorageSync("br_timestamp") ? wx.showModal({
                title: "提示",
                content: "北京“健康宝”暂不能确认您的防疫相关健康状态，请先进行“本人健康码自查询”。",
                showCancel: !1,
                confirmText: "我知道了"
            }) : e.getOline(2);
        });
}
function btnsScan() {
        var e = this;
        this.setData({
            scancodeTrue: !1
        }), 1 == this.data.iSnote && wx.setStorageSync("scanShow", "true"), u({
            eventId: "scancode_home_SweepUpCode"
        }), wx.scanCode({
            scanType: "[qrCode]",
            success: function(t) {
                console.log(t, 2042);
                var n = t.result;
                if (-1 != n.indexOf("BJID=")) console.log("药店码", n), e.ydm(n); else try {
                    var a = JSON.parse(t.result);
                    console.log(a, 1024);
                    try {
                        var o = t.result.split(",");
                        o[1] ? e.getSancodeNote(o[0], parseInt(o[1]) - 1) : e.getSancodeNote(o[0], 1);
                    } catch (n) {
                        try {
                            S(e.data.ma4Path.fail[0].savedFilePath);
                        } catch (e) {}
                        wx.showToast({
                            title: "无效二维码",
                            icon: "none",
                            duration: 2e3
                        }), I.info({
                            eventMsg: "点击[本人信息扫码登记]，调起扫码成功，解析失败，wx.scanCode#success#result为空",
                            error: t
                        });
                    }
                } catch (n) {
                    try {
                        var i = t.result.split(",");
                        i[1] ? e.getSancodeNote(i[0], parseInt(i[1]) - 1) : e.getSancodeNote(i[0], 1);
                    } catch (n) {
                        try {
                            S(e.data.ma4Path.fail[0].savedFilePath);
                        } catch (e) {}
                        wx.showToast({
                            title: "无效二维码",
                            icon: "none",
                            duration: 2e3
                        }), I.info({
                            eventMsg: "点击[本人信息扫码登记]，调起扫码成功，解析失败，wx.scanCode#success#result为空",
                            error: t
                        });
                    }
                }
            },
            fail: function(t) {
                if (t && "scanCode:fail cancel" != t.errMsg) {
                    try {
                        S(e.data.ma4Path.fail[0].savedFilePath);
                    } catch (e) {}
                    wx.showToast({
                        title: "无效二维码",
                        icon: "none",
                        duration: 2e3
                    }), I.info({
                        eventMsg: "点击[本人信息扫码登记]，调起扫码失败，wx.scanCode#fail",
                        error: t
                    });
                }
            }
        }), wx.reportMonitor("9", 1);
}
function getSancode() {
        var e = this;
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), s({
            url: "/jingxinju/jkb/qrCode/beforeScan",
            method: "post"
        }).then(function(t) {
            if (wx.hideLoading(), wx.setStorageSync("home_code", t.code), -1 == t.code) return u({
                eventId: "scancode_home_AbnormalState"
            }), void wx.showModal({
                title: "提示",
                content: "北京“健康宝”暂不能确认您的防疫相关健康状态，请先进行“本人健康状态查询”。",
                showCancel: !1,
                confirmText: "我知道了"
            });
            "1" == t.code ? e.getsaoyisao() : (u({
                eventId: "scancode_home_AbnormalState"
            }), wx.showModal({
                title: "提示",
                content: "请先进行本人健康状态查询。",
                showCancel: !1,
                confirmText: "我知道了",
                success: function(e) {
                    wx.hideLoading();
                }
            }));
        }).catch(function(e) {
            wx.hideLoading(), wx.showModal({
                title: "温馨提示",
                content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
                confirmText: "确定",
                showCancel: !1
            }), I.info({
                eventMsg: "点击[本人信息扫码登记]，在线，接口 qrCode/beforeScan 失败",
                response: e
            });
        });
}
function getSancodeNote(e, t) {
        var n = this;
        s({
            url: "/jingxinju/jkb/qrCode/scan",
            method: "POST",
            data: {
                qrcode_content: e
            }
        }).then(function(a) {
            if (wx.hideLoading(), wx.removeStorageSync("erweimaArr"), "1" == a.code) n.getCheck(t); else {
                u({
                    eventId: "scancode_home_QrCodeFailure"
                });
                try {
                    S(n.data.ma4Path.fail[0].savedFilePath);
                } catch (e) {}
                wx.showModal({
                    title: "提示",
                    content: "无效二维码",
                    showCancel: !1,
                    confirmColor: "#0d8ce6",
                    confirmText: "我知道了",
                    success: function(e) {
                        console.log(e), wx.hideLoading();
                    }
                }), I.info({
                    eventMsg: '点击[本人信息扫码登记]，扫码成功，识别结果失败，/jingxinju/jkb/qrCode/scan # success code != "1"',
                    res: a,
                    qrcode_content: e
                });
            }
        }).catch(function(e) {
            wx.hideLoading(), I.info({
                eventMsg: "点击[本人信息扫码登记]，扫码成功，识别结果失败，/jingxinju/jkb/qrCode/scan # catch",
                error: e
            });
        });
}
function noteClick() {
        this.setData({
            iSnote: !this.data.iSnote
        });
}
function GrzxTap() {
        this.setData({
            Grzx: !1
        }), i.userInfo.Grzx = !0, wx.navigateTo({
            url: "/pages/jxzq/ge-ren-zhong-xin/index"
        });
}
function tapLogin() {
        var e = this;
        u({
            eventId: "home_tap_Personal"
        }), i.confirmIsOnline().then(function(t) {
            if (t && 1 === i.userInfo.isOpenWu) {
                if (!wx.getStorageSync("wx-sessionid")) return void e.notLoginTips("/pages/gsd-ui/g-auth/face/face?url=/pages/jxzq/ge-ren-zhong-xin/index");
                wx.showLoading({
                    title: "努力加载中",
                    mask: !0
                }), s({
                    url: "/auth-server/auth/user/session",
                    method: "get"
                }).then(function(e) {
                    wx.hideLoading(), w.initApmUk(e), i.userInfo.isAuth ? wx.navigateTo({
                        url: "/pages/jxzq/ge-ren-zhong-xin/index"
                    }) : (wx.navigateTo({
                        url: "/pages/gsd-ui/g-auth/face/face?url=/pages/jxzq/ge-ren-zhong-xin/index"
                    }), I.info({
                        eventMsg: "点击[个人中心]入口，不能跳转到个人中心，session.then",
                        isAuth: i.userInfo.isAuth,
                        faceExpires: e && e.faceExpires,
                        sid: e && e.sid,
                        mobile: e && e.mobile,
                        realLevel: e && e.realLevel
                    }), I.addFilterMsg("tapLoginSession"));
                }).catch(function(t) {
                    wx.hideLoading();
                    var n = e;
                    if (console.log(t), t && "BIF:10401" === t.errcode) return wx.hideLoading(), void wx.showModal({
                        title: "提示",
                        content: "本次操作需要您进行登录验证",
                        success: function(e) {
                            e.confirm ? wx.navigateTo({
                                url: "/pages/gsd-ui/g-auth/face/face?url=/pages/jxzq/ge-ren-zhong-xin/index"
                            }) : (i.userInfo.isAuth = !1, wx.removeStorageSync("wx-sessionid"), wx.removeStorageSync("wx-logout"), 
                            n.setData({
                                userInfo: i.userInfo
                            })), wx.hideLoading();
                        }
                    });
                    wx.showModal({
                        title: "温馨提示",
                        content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
                        confirmText: "确定",
                        showCancel: !1
                    }), wx.removeStorage({
                        key: "img"
                    }), I.info({
                        eventMsg: "点击[个人中心]入口，tapLogin 请求 session.catch 失败",
                        isAuth: i.userInfo.isAuth,
                        response: t
                    });
                });
            } else {
                if (wx.hideLoading(), !i.userInfo.mobile) return void wx.showModal({
                    title: "提示",
                    content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
                    showCancel: !1
                });
                wx.navigateTo({
                    url: "/pages/jxzq/ge-ren-zhong-xin/index"
                });
            }
        });
}
function resjson() {
        var e = this;
        return h.request({
            url: y,
            method: "get"
        }).then(function(t) {
            e.setData({
                isOpenBDCheck: t.data.isOpenBDCheck
            }), wx.hideLoading();
        }).catch(function(e) {
            wx.hideLoading();
        });
}
function btns() {
        if ("1" == this.data.shengming) {
            var e = new Date().getTime();
            console.log("设置当前时间戳为：" + e), wx.setStorage({
                key: "shengming",
                data: e
            });
        }
        this.setData({
            xianshi: !1
        }), i.userInfo.isShow = !1;
}
function onShareAppMessage(e) {}
function tuichu() {
        this.setData({
            xianshi1: !1
        });
}
function tuichu1() {
        this.setData({
            isPhoneSan: !1
        });
}
function getPhoneNumber(e) {
        var t = this;
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), this.setData({
            xianshi1: !1,
            isPhoneSan: !1
        });
        var n = e.detail, a = n.iv, o = n.encryptedData;
        if (a && o) {
            u({
                eventId: "declare_home_GetPhone"
            });
            var c = {
                url: "/auth-server/auth/getPhone",
                method: "POST",
                data: {
                    encryptedData: o,
                    iv: a,
                    type: 0
                }
            };
            s(c).then(function(e) {
                i.userInfo.phone = e.phone, i.userInfo.mobile = e.phone, t.getPhone(), u({
                    eventId: "declare_home_InDeclaration"
                }), wx.navigateTo({
                    url: "/pages/registration/nationality/nationality"
                }), wx.hideLoading();
            }).catch(function(e) {
                wx.hideLoading(), p(c, e, j.shixiang.getPhone.UncaughtExp);
            });
        } else wx.hideLoading();
}
function getPhone() {
        s({
            url: "/push/notice/session/backup",
            method: "post",
            disableModalWhenApiError: !0
        }).then(function(e) {
            console.log(e, 11), w.initApmUk(e), console.log("人脸识别成功", e, wx.getStorageSync("wx-logout"));
        }).catch(function(e) {
            console.log(e, 10);
        });
}
function getCode() {
        wx.login({
            success: function(e) {
                var t = {
                    url: "/auth-server/auth/refreshSessionKey",
                    method: "POST",
                    data: {
                        code: e.code
                    }
                };
                s(t).then(function(e) {}).catch(function(e) {
                    wx.hideLoading(), p(t, e, j.shixiang.refreshSessionKey.UncaughtExp);
                });
            }
        });
}
function getIsPhone(e) {
        i.userInfo.mobile ? "1" == e ? wx.navigateTo({
            url: "/pages/jxzq/ge-ren-zhong-xin/index"
        }) : "2" == e ? this.getsaoyisao() : 3 == e && this.dengjibu() : (this.getCode(), 
        this.setData({
            isPhoneSan: !0
        }), this.setData({
            num: e
        }));
}
function getsaoyisao() {
        if ("true" == wx.getStorageSync("scanShow")) wx.setStorageSync("scanShow", "true"), 
        this.setData({
            scancodeTrue: !1
        }), this.btnsScan(); else {
            if (wx.setStorageSync("scanShow", "false"), i.userInfo.isAuth) {
                this.setData({
                    userInfo: i.userInfo
                });
                try {
                    var e = i.userInfo.mobile, t = /(\d{3})\d*(\d{3})/, n = e.replace(t, "$1*****$2");
                } catch (a) {
                    t = /(\d{3})\d*(\d{3})/, n = (e = i.userInfo.phone).replace(t, "$1*****$2");
                }
                this.setData({
                    phone: n || ""
                });
            }
            this.setData({
                scancodeTrue: !0
            });
        }
}
function goMessage() {
        this.getLogin().then(function() {
            i.userInfo.isAuth ? (u({
                eventId: "message_home_GoFeedback"
            }), wx.navigateTo({
                url: "/pages/jxzq/message/index"
            })) : wx.showModal({
                title: "提示",
                content: "本次操作需要您进行登录验证",
                success: function(e) {
                    e.confirm && wx.navigateTo({
                        url: "/pages/gsd-ui/g-auth/face/face?url=/pages/jxzq/message/index"
                    });
                }
            });
        });
}
function goBenren() {
        if (!i.userInfo.isAuth) return wx.hideLoading(), void wx.showModal({
            title: "提示",
            content: "本次操作需要您进行登录验证",
            success: function(e) {
                e.confirm && wx.navigateTo({
                    url: "/pages/gsd-ui/g-auth/face/face"
                });
            }
        });
        u({
            eventId: "coderecord_home_GoRecordList"
        }), wx.navigateTo({
            url: "/pages/jxzq/ben-ren-sao-ma-ji-lv/index"
        });
}
function getNoticeList() {
        var e = this, t = this;
        console.log(wx.getStorageSync("home_list"));
        var n = wx.getStorageSync("home_list") ? wx.getStorageSync("home_list").hashCode : "";
        s({
            url: "/jingxinju/jkb/notice/list",
            method: "get",
            data: {
                hashCode: n
            }
        }).then(function(n) {
            console.log(n, "顶部通告"), n.valid && e.setData({
                list: wx.getStorageSync("home_list").data
            }), n && n.data && n.data.length > 0 && (wx.setStorageSync("home_list", n), t.setData({
                list: n.data
            }));
        }).catch(function(e) {
            console.log(e);
        });
}
function success(e) {
                            e.confirm && wx.navigateTo({
                                url: "/pages/gsd-ui/g-auth/face/face"
                            });
}
function checkIsHasCode() {
        var e = this;
        s({
            url: "/jingxinju/jkb/qrCode/checkIsHasCode",
            method: "POST",
            data: {}
        }).then(function(t) {
            wx.hideLoading(), "-1" == t.code ? (u({
                eventId: "registry_home_Out"
            }), wx.removeStorageSync("dfRenci_qrCodeData"), e.setData({
                showModal: !0
            })) : (u({
                eventId: "registry_home_GoResult"
            }), wx.navigateTo({
                url: "/pages/jxzq/sao-ma-dengji-tongji/index"
            }));
        }).catch(function(e) {
            wx.hideLoading();
        });
}
function dengjibu() {
        var e = this;
        s({
            url: "/jingxinju/jkb/qrCode/checkCodeStatus",
            method: "POST",
            data: {}
        }).then(function(t) {
            if (wx.hideLoading(), "1" == t.code || "-2" == t.code || "0" == t.code || "11" == t.code) e.getHealthCode(), 
            console.log("登记"); else {
                if (0 == t.error) return u({
                    eventId: "registry_home_CodeLoseEfficacy"
                }), wx.hideLoading(), void wx.showModal({
                    title: "提示",
                    content: "二维码已失效，请确认您的健康状态。",
                    showCancel: !1,
                    confirmText: "我知道了",
                    confirmColor: "#0d8ce6"
                });
                if (1 == t.error) return wx.hideLoading(), u({
                    eventId: "registry_home_CodeAbnormalState"
                }), void wx.showModal({
                    title: "提示",
                    content: "您的健康状态不是未见异常，暂时无法生成本人二维码。",
                    confirmText: "我知道了",
                    showCancel: !1,
                    confirmColor: "#0d8ce6"
                });
                if (2 == t.error) return wx.hideLoading(), u({
                    eventId: "registry_home_NeedQueryStatus"
                }), void wx.showModal({
                    title: "提示",
                    content: "北京“健康宝”暂不能确认您的防疫相关健康状态，可能由于您过去14天内有进（返）京行为引起。若需要继续生成本人二维码，请先进行“本人健康状态查询”。",
                    showCancel: !1,
                    confirmColor: "#0D8CE6",
                    confirmText: "我知道了"
                });
                if (11 == t.error) return void wx.showModal({
                    title: "提示",
                    content: "您的健康状态不是未见异常，暂时无法生成本人二维码。",
                    confirmText: "我知道了",
                    showCancel: !1,
                    confirmColor: "#0d8ce6"
                });
            }
        }).catch(function(e) {
            wx.hideLoading();
        });
}
function getHealthCode() {
        var e = this;
        s({
            url: "/jingxinju/jkb/businessTravel/getHealthCode",
            method: "GET"
        }).then(function(t) {
            return -7 == t.code || 51 == t.code ? (u({
                eventId: "registry_home_NeedQueryStatus"
            }), wx.hideLoading(), void e.setData({
                daofangWrong: !0
            })) : -3 == t.code || 4 == t.code ? (u({
                eventId: "registry_home_AbnormalState"
            }), wx.hideLoading(), void wx.showModal({
                title: "提示",
                content: "您的健康状态不是未见异常，暂时无法生成本人二维码。",
                confirmText: "我知道了",
                showCancel: !1,
                confirmColor: "#0d8ce6"
            })) : 41 == t.code ? (u({
                eventId: "registry_home_AbnormalState"
            }), wx.hideLoading(), void wx.showModal({
                title: "提示",
                content: "北京“健康宝”暂不能确认您的防疫相关健康状态，可能由于您过去14天内有进（返）京行为引起。若需要继续生成本人二维码，请先进行“本人健康状态查询”。",
                confirmText: "我知道了",
                showCancel: !1,
                confirmColor: "#0d8ce6"
            })) : (u({
                eventId: "registry_home_QRCodeIsInvalid"
            }), void e.checkIsHasCode());
        }).catch(function(e) {
            wx.hideLoading();
        });
}
function getOline(e) {
        var t = this, n = t.data.windowWidth, a = t.data.windowHeight;
        if (!i.userInfo.isAuth) return wx.getStorageSync("wx-sessionid") ? void this.getLogin().then(function() {
            i.userInfo.isAuth || (wx.hideLoading(), wx.showModal({
                title: "提示",
                content: "本次操作需要您进行登录验证",
                success: function(e) {
                    e.confirm && wx.navigateTo({
                        url: "/pages/gsd-ui/g-auth/face/face"
                    });
                }
            }));
        }) : void this.notLoginTips("/pages/gsd-ui/g-auth/face/face");
        if ("1" == e) this.getSancode(); else {
            if (-1 == wx.getStorageSync("home_code")) return void wx.showModal({
                title: "提示",
                content: "北京“健康宝”暂不能确认您的防疫相关健康状态，请先进行“本人健康状态查询”。",
                showCancel: !1,
                confirmText: "我知道了"
            });
            if (!i.userInfo.mobile) return void wx.showModal({
                title: "提示",
                content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
                showCancel: !1
            });
            wx.chooseImage({
                count: 1,
                sizeType: [ "original", "compressed" ],
                sourceType: [ "camera" ],
                success: function(e) {
                    var o = e.tempFilePaths[0];
                    t.data.windowWidth;
                    wx.getImageInfo({
                        src: o,
                        success: function(e) {
                            f.drawImage(e.path, 0, 0, n, a), f.draw(!0), setTimeout(function() {
                                wx.canvasGetImageData({
                                    canvasId: "myCanvas",
                                    x: 0,
                                    y: 0,
                                    width: n,
                                    height: a,
                                    success: function(e) {
                                        var o;
                                        try {
                                            o = d(e.data, n, a);
                                        } catch (e) {
                                            I.info({
                                                eventMsg: "点击[本人信息扫码登记]，离线拍照，jsQR 识别二维码失败",
                                                response: e,
                                                code: o
                                            });
                                        }
                                        if (o) {
                                            f.clearRect(0, 0, 1e3, 1e3), f.draw();
                                            try {
                                                var i = wx.getStorageSync("home_qrcode") || [], s = o.data.split(","), r = c().format("HH:mm:ss"), h = c().format("YYYY-MM-DD");
                                                try {
                                                    S(t.data.ma4Path.success[parseInt(s[1]) - 1].savedFilePath);
                                                } catch (e) {
                                                    S(t.data.ma4Path.success[1].savedFilePath);
                                                }
                                                i.push({
                                                    qrcode_content: s[0],
                                                    scan_offlinetime: h + " " + r
                                                }), wx.setStorageSync("home_qrcode", i), wx.navigateTo({
                                                    url: "/pages/saomadengji/saomajieguo/index"
                                                });
                                            } catch (e) {
                                                I.info({
                                                    eventMsg: "点击[本人信息扫码登记]，离线拍照，解析 code 失败",
                                                    response: e,
                                                    code: o
                                                });
                                                var g = wx.getStorageSync("home_qrcode") || [], u = o.data, l = c().format("HH:mm:ss"), x = c().format("YYYY-MM-DD");
                                                g.push({
                                                    qrcode_content: u,
                                                    scan_offlinetime: x + " " + l
                                                }), console.log(t.data.ma4Path);
                                                try {
                                                    S(t.data.ma4Path.success[1].savedFilePath);
                                                } catch (e) {}
                                                wx.setStorageSync("home_qrcode", g), wx.navigateTo({
                                                    url: "/pages/saomadengji/saomajieguo/index"
                                                });
                                            }
                                        } else {
                                            I.info({
                                                eventMsg: "点击[本人信息扫码登记]，离线拍照，二维码 code 为空"
                                            });
                                            try {
                                                S(t.data.ma4Path.fail[0].savedFilePath);
                                            } catch (e) {}
                                            f.clearRect(0, 0, 1e3, 1e3), f.draw(), wx.showModal({
                                                title: "提示",
                                                content: "扫码失败，此二维码已失效。",
                                                showCancel: !1,
                                                confirmColor: "#0d8ce6",
                                                confirmText: "我知道了",
                                                success: function(e) {
                                                    wx.hideLoading();
                                                }
                                            });
                                        }
                                    },
                                    fail: function(e) {
                                        I.info({
                                            eventMsg: "点击[本人信息扫码登记]，离线拍照，wx.canvasGetImageData 失败",
                                            response: e
                                        });
                                    }
                                });
                            }, 1e3);
                        },
                        fail: function(e) {
                            I.info({
                                eventMsg: "点击[本人信息扫码登记]，离线拍照，wx.getImageInfo 失败",
                                response: e
                            });
                        }
                    });
                },
                fail: function(e) {
                    I.info({
                        eventMsg: "点击[本人信息扫码登记]，离线拍照，wx.chooseImage 失败",
                        response: e
                    });
                }
            });
        }
}
function btnDaofangWrong() {
        this.setData({
            daofangWrong: !1
        });
}
function getCheck(e) {
        var t = this, n = {
            url: "/jingxinju/jkb/businessTravel/check",
            method: "get"
        };
        s(n).then(function(n) {
            t.resjson().then(function() {
                if (wx.hideLoading(), null != n.healthStatus && n.healthStatus && "41" == n.healthStatus.code) {
                    u({
                        eventId: "scancode_home_OutScope"
                    });
                    try {
                        S(t.data.ma4Path.fail[0].savedFilePath);
                    } catch (e) {}
                    return wx.hideLoading(), t.setData({
                        scanWrong: !0
                    }), void I.info({
                        eventMsg: "点击[本人信息扫码登记]，扫码成功，识别成功，/jingxinju/jkb/businessTravel/check # success 健康码为41",
                        businessTravelCheck: n
                    });
                }
                var a = n;
                s({
                    url: "/jingxinju/jkb/businessTravel/getHealthCode",
                    method: "GET"
                }).then(function(n) {
                    if (wx.hideLoading(), u({
                        eventId: "scancode_home_ScanCodeResult"
                    }), 0 == n.code || 30 == n.code) {
                        try {
                            S(t.data.ma4Path.success[e].savedFilePath);
                        } catch (e) {
                            S(t.data.ma4Path.success[1].savedFilePath);
                        }
                        wx.navigateTo({
                            url: "/pages/saomadengji/saomajieguo/index"
                        });
                    } else {
                        try {
                            S(t.data.ma4Path.fail[0].savedFilePath);
                        } catch (e) {}
                        wx.navigateTo({
                            url: "/pages/saomadengji/saomajieguo/index?isOpenBDCheck=" + t.data.isOpenBDCheck + "&code=" + a.isLeaveOrEnterBj
                        }), I.info({
                            eventMsg: "点击[本人信息扫码登记]，扫码成功，识别成功，/jingxinju/jkb/businessTravel/getHealthCode # code != 0 健康码状态异常",
                            businessTravelCheck: a,
                            getHealthCode: n
                        });
                    }
                }).catch(function(e) {
                    wx.hideLoading(), I.info({
                        eventMsg: "点击[本人信息扫码登记]，扫码成功，识别成功，/jingxinju/jkb/businessTravel/getHealthCode # catch 查询健康状态失败",
                        err: e,
                        businessTravelCheck: a
                    });
                });
            });
        }).catch(function(e) {
            wx.hideLoading(), p(n, e, j.shixiang.businessTravelCheck.UncaughtExp), I.info({
                eventMsg: "点击[本人信息扫码登记]，扫码成功，识别成功，/jingxinju/jkb/businessTravel/check # catch 查询行程失败",
                err: e
            });
        });
}
function btnScanWrong() {
        this.setData({
            scanWrong: !1,
            xianshi1sa: !1,
            xianshi1: !1
        });
}
function getScancode() {
        var e = wx.getStorageSync("home_qrcode") || [];
        e.length > 0 && e.map(function(t, n) {
            var a = {
                url: "/jingxinju/jkb/qrCode/scan",
                method: "POST",
                data: {
                    qrcode_content: t.qrcode_content,
                    scan_offlinetime: t.scan_offlinetime
                },
                disableModalWhenApiError: !0
            };
            s(a).then(function(n) {
                e.splice(t, 1), wx.setStorageSync("home_qrcode", e);
            }).catch(function(e) {});
        });
}
function ma4Path() {
        var e = this;
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), setTimeout(function() {
            return h.request({
                url: r.ma4Path,
                method: "get",
                timeout: 6e3
            }).then(function(a) {
                wx.hideLoading();
                var o = [], i = [];
                e.setData({
                    ma4Path: a.data
                }), a.data.success.map(function(a, i) {
                    wx.downloadFile({
                        url: a.url,
                        success: function(s) {
                            wx.saveFile({
                                tempFilePath: s.tempFilePath,
                                success: function(s) {
                                    o[i] = t(t({}, a), {}, {
                                        savedFilePath: s.savedFilePath
                                    }), e.setData(n({}, "ma4Path.success", o)), wx.setStorageSync("home_ma4Path", e.data.ma4Path);
                                },
                                fail: function(e) {}
                            });
                        }
                    });
                }), a.data.fail.map(function(a, o) {
                    wx.downloadFile({
                        url: a.url,
                        success: function(s) {
                            wx.saveFile({
                                tempFilePath: s.tempFilePath,
                                success: function(s) {
                                    var c = wx.getStorageSync("home_ma4Path").fail || [];
                                    c.length > 0 && wx.removeSavedFile({
                                        filePath: c[o].savedFilePath,
                                        complete: function(e) {
                                            console.log(e);
                                        }
                                    }), i[o] = t(t({}, a), {}, {
                                        savedFilePath: s.savedFilePath
                                    }), e.setData(n({}, "ma4Path.fail", i)), wx.setStorageSync("home_ma4Path", e.data.ma4Path);
                                }
                            });
                        }
                    });
                });
            }).catch(function(e) {
                wx.hideLoading();
            });
        }, 2e3);
}
function handleHesuan() {
        var e = this;
        if (i.userInfo.isAuth) this.setData({
            isHesuan: !0
        }); else {
            if (!wx.getStorageSync("wx-sessionid")) return void this.notLoginTips("/pages/gsd-ui/g-auth/face/face");
            wx.showLoading({
                title: "努力加载中",
                mask: !0
            }), this.getLogin().then(function() {
                i.checkAuth() && (e.setData({
                    isHesuan: !0
                }), wx.hideLoading());
            });
        }
}
function showHeSuan() {
        this.setData({
            isHesuan: !1
        });
}
function showHeSuan1() {
        u({
            eventId: "detection_home_GoAssay"
        }), wx.navigateTo({
            url: "/pages/jxzq/he-suan-jie-guo/index"
        }), this.setData({
            isHesuan: !1
        });
}
function isJingxinManage() {
        var e = this;
        if (i.userInfo.isAuth) 0 == i.flag && this.setData({
            checkIDcard: !0
        }), 1 == i.flag && wx.navigateTo({
            url: "/pages/jxzq/jing-xin-xiang-zhu-list/index"
        }); else {
            if (!wx.getStorageSync("wx-sessionid")) return void this.notLoginTips("/pages/gsd-ui/g-auth/face/face");
            wx.showLoading({
                title: "努力加载中",
                mask: !0
            }), this.getLogin().then(function() {
                i.checkAuth() && (0 == i.flag && e.setData({
                    checkIDcard: !0
                }), 1 == i.flag && wx.navigateTo({
                    url: "/pages/jxzq/jing-xin-xiang-zhu-list/index"
                }), wx.hideLoading());
            });
        }
}
function btnCheckCancel() {
        this.setData({
            checkIDcard: !1,
            IdcardSixNum: ""
        });
}
function bindinput(e) {
        this.setData({
            IdcardSixNum: e.detail.value
        });
}
function btnCheckIDcard() {
        i.userInfo.realIdCard.slice(-6) == this.data.IdcardSixNum ? (i.flag = !0, this.setData({
            checkIDcard: !1
        }), wx.navigateTo({
            url: "/pages/jxzq/jing-xin-xiang-zhu-list/index"
        })) : wx.showToast({
            title: "核验失败，请重新输入",
            icon: "none"
        });
}
function laoyou() {
        if (i.userInfo.isAuth) wx.navigateTo({
            url: "/pages/jxzq/laoYaoJianKangMa/index"
        }); else {
            if (!wx.getStorageSync("wx-sessionid")) return void this.notLoginTips("/pages/gsd-ui/g-auth/face/face");
            wx.showLoading({
                title: "努力加载中",
                mask: !0
            }), this.getLogin().then(function() {
                i.checkAuth() && (wx.navigateTo({
                    url: "/pages/jxzq/laoYaoJianKangMa/index"
                }), wx.hideLoading());
            });
        }
}
function HesuanTo() {
        if (i.userInfo.isAuth) wx.navigateTo({
            url: "/pages/hsjc/he-suan-jie-guo/index"
        }); else {
            if (!wx.getStorageSync("wx-sessionid")) return void this.notLoginTips("/pages/gsd-ui/g-auth/face/face");
            wx.showLoading({
                title: "努力加载中",
                mask: !0
            }), this.getLogin().then(function() {
                i.checkAuth() && (wx.navigateTo({
                    url: "/pages/hsjc/he-suan-jie-guo/index"
                }), wx.hideLoading());
            });
        }
}
function dailyAppointment() {
        var e = this;
        h.request({
            url: "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/hsjc/dailyAppointment.json",
            method: "get"
        }).then(function(t) {
            console.log(t), e.setData({
                reshsjc: t.data.hsjc
            });
        });
}
function checkboxChange(e) {
        console.log(e), this.setData({
            shengming: e.detail.value.length
        });
}
function showZd() {
        this.setData({
            tanchu: !1
        }), wx.redirectTo({
            url: "/pages/registration/yan-zheng/index?time=" + this.data.time
        });
}
function showYw() {
        this.setData({
            tanchu: !1
        }), wx.navigateTo({
            url: "/pages/registration/success/index"
        });
}
function bindClode() {
        this.setData({
            tanchu: !1
        });
}
function ydm(e) {
        var t = this;
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), s({
            url: "/jingxinju/jkb/citycode/getDrugstoreCode",
            method: "post",
            data: {
                qrcode_content: e
            }
        }).then(function(e) {
            if (wx.hideLoading(), "1" == e.code) {
                var n = "bjqr_code_string=".concat(e.data.bjqr_code_string, "&cert_num=").concat(e.data.cert_num, "&name=").concat(e.data.name, "&phone=").concat(e.data.phone, "&app_name=").concat(e.data.app_name, "&cert_type=").concat(e.data.cert_type, "&request_id=").concat(e.data.request_id, "&platform=").concat(e.data.platform), a = t.ydmcsjm(n), o = "&appId=".concat(e.safeInfo.appId, "&nonce=").concat(e.safeInfo.nonce, "&signature=").concat(e.safeInfo.signature, "&timestamp=").concat(e.safeInfo.timestamp);
                console.log(o), wx.navigateTo({
                    url: "/pages/saomadengji/h5/index?url=" + a + o
                });
            } else wx.showModal({
                title: "提示",
                content: "扫码失败，此二维码已失效。",
                showCancel: !1,
                confirmColor: "#0d8ce6",
                confirmText: "我知道了",
                success: function(e) {
                    wx.hideLoading();
                }
            });
            console.log(e, "药店码");
        }).catch(function(e) {
            wx.hideLoading(), console.log(e, "药店码");
        });
}
function ydmcsjm(e) {
        var t = _.enc.Utf8.parse("s7o6u5n8d2aicode"), n = _.enc.Utf8.parse(e);
        return _.AES.encrypt(n, t, {
            iv: t,
            mode: _.mode.CBC,
            padding: _.pad.Pkcs7
        }).ciphertext.toString().toUpperCase();
}
