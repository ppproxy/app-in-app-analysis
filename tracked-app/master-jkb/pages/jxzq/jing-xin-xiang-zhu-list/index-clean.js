function onLoad(a) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            type: a.type
        }), this.checkUserType();
}
function onShow() {
        e.userInfo.DengJiArr = void 0, e.userInfo.brgwdj = void 0, e.userInfo.schoolName = void 0, 
        e.userInfo.gj = void 0, e.userInfo.jzggb = void 0;
}
function checkUserType() {
        var a = this;
        t({
            url: "/xiangzhu/admin/isAdmin",
            method: "get"
        }).then(function(t) {
            console.log("身份验证", t), a.setData({
                adminType: t.adminType
            });
        }).catch(function(a) {
            wx.hideLoading();
        });
}
function toOther() {
        var a = this;
        0 == this.data.clockInStatus ? t({
            url: "/xiangzhu/jkb/healthy/isFill",
            method: "get"
        }).then(function(t) {
            console.log("是否登记", t), 1 == t.state ? (a.setData({
                clockInStatus: !0
            }), wx.navigateTo({
                url: "/pages/fusion/taren-list/index"
            })) : wx.showModal({
                title: "提示",
                content: "请先进行“本人信息登记”。",
                confirmText: "信息登记",
                cancelText: "取消",
                confirmColor: "#0D8CE6",
                success: function(a) {
                    a.confirm && wx.navigateTo({
                        url: "/pages/fusion/benren-list/index?type=jiankang"
                    });
                }
            });
        }).catch(function(a) {
            wx.hideLoading();
        }) : wx.navigateTo({
            url: "/pages/fusion/taren-list/index"
        });
}
function showJianchatongxing() {
        this.setData({
            tongXingStatus: !0
        });
}
function toJianchatongxing(a) {
        this.setData({
            tongXingStatus: !1
        }), wx.navigateToMiniProgram({
            appId: a.currentTarget.dataset.appid,
            path: a.currentTarget.dataset.url,
            success: function(a) {
                wx.hideLoading(), console.log(a);
            }
        });
}
function goJingxinxiangzhu(a) {
        wx.navigateToMiniProgram({
            appId: a.currentTarget.dataset.appid,
            path: a.currentTarget.dataset.url,
            success: function(a) {
                wx.hideLoading(), console.log(a);
            }
        });
}
function isHealthManage() {
        var a = this;
        0 == this.data.clockInStatus ? t({
            url: "/xiangzhu/jkb/healthy/isFill",
            method: "get"
        }).then(function(t) {
            console.log("是否登记", t), 1 == t.state ? (a.setData({
                clockInStatus: !0
            }), wx.navigateTo({
                url: "/pages/jxzq/da-ka-ji-lu/index"
            })) : wx.showModal({
                title: "提示",
                content: "请先进行“本人信息登记”。",
                confirmText: "信息登记",
                cancelText: "取消",
                confirmColor: "#0D8CE6",
                success: function(a) {
                    a.confirm && wx.navigateTo({
                        url: "/pages/fusion/benren-list/index?type=jiankang"
                    });
                }
            });
        }).catch(function(a) {
            wx.hideLoading();
        }) : wx.navigateTo({
            url: "/pages/jxzq/da-ka-ji-lu/index"
        });
}
function toScanCode() {
        1 == this.data.adminType || 2 == this.data.adminType ? this.startScan(this.data.adminType) : 3 == this.data.adminType && this.setData({
            showAdminType: !0
        });
}
function startScan(a) {
        var e = this;
        wx.scanCode({
            success: function(n) {
                try {
                    var i;
                    console.log(n);
                    var o = JSON.parse(n.result);
                    i = {
                        qrCodeData: o.data,
                        scanType: a
                    }, 1 == o.type ? t({
                        url: "/xiangzhu/scan/scanByType",
                        method: "post",
                        data: i
                    }).then(function(t) {
                        if (console.log("------扫码结果", t), 0 == t.errcode) {
                            var n = t.data.data || "";
                            if (1 == a) if (e.setData({
                                name: t.data.name || "----",
                                idCard: t.data.idCard || "----"
                            }), "1" == n) wx.navigateTo({
                                url: "/pages/jxzq/personalCenterStatus/success/index?adminType=1&name=" + e.data.name + "&idCard=" + e.data.idCard
                            }); else if ("4" == n || "3" == n || "2" == n) wx.navigateTo({
                                url: "/pages/jxzq/personalCenterStatus/fail/index?adminType=1&name=" + e.data.name + "&idCard=" + e.data.idCard
                            }); else if ("8" == n) wx.navigateTo({
                                url: "/pages/jxzq/personalCenterStatus/fail/index?adminType=1&data=" + JSON.stringify(t.data) + "&name=" + e.data.name + "&idCard=" + e.data.idCard
                            }); else if ("6" == n) {
                                var i = t.data.time || "";
                                wx.navigateTo({
                                    url: "/pages/jxzq/personalCenterStatus/repeat/index?adminType=1&time=此人已于" + i + "时间报到&name=" + e.data.name + "&idCard=" + e.data.idCard
                                });
                            } else "9" == n ? wx.navigateTo({
                                url: "/pages/jxzq/personalCenterStatus/repeat/index?adminType=1&name=" + e.data.name + "&idCard=" + e.data.idCard
                            }) : "5" == n ? wx.showModal({
                                title: "提示",
                                content: "您不是管理人员，无操作权限",
                                showCancel: !1,
                                confirmText: "我知道了"
                            }) : "7" == n ? wx.showModal({
                                title: "提示",
                                content: "扫码失败，请重试",
                                showCancel: !1,
                                confirmText: "我知道了"
                            }) : "10" == n ? wx.showModal({
                                title: "提示",
                                content: "此人已被删除",
                                showCancel: !1,
                                confirmText: "我知道了"
                            }) : wx.showModal({
                                title: "提示",
                                content: "请扫描社区信息登记二维码",
                                showCancel: !1,
                                confirmText: "我知道了"
                            }); else if (2 == a) if (e.setData({
                                name: t.data.name || "----",
                                idCard: t.data.reportIdCard || "----"
                            }), "1" == n) wx.navigateTo({
                                url: "/pages/jxzq/personalCenterStatus/success/index?adminType=2&name=" + e.data.name + "&idCard=" + e.data.idCard
                            }); else if ("2" == n) wx.navigateTo({
                                url: "/pages/jxzq/personalCenterStatus/fail/index?adminType=2&name=" + e.data.name + "&idCard=" + e.data.idCard
                            }); else if ("3" == n) {
                                var o = t.data.registeringTime;
                                wx.navigateTo({
                                    url: "/pages/jxzq/personalCenterStatus/repeat/index?adminType=2&time=此人已于" + o + "时间报到&name=" + e.data.name + "&idCard=" + e.data.idCard
                                });
                            } else "4" == n ? wx.showModal({
                                title: "提示",
                                content: "您不是管理人员，无操作权限",
                                showCancel: !1,
                                confirmText: "我知道了"
                            }) : "-1" == n ? wx.showModal({
                                title: "提示",
                                content: "扫码失败，请重试",
                                showCancel: !1,
                                confirmText: "我知道了"
                            }) : wx.showModal({
                                title: "提示",
                                content: "请扫描教委信息登记二维码",
                                showCancel: !1,
                                confirmText: "我知道了"
                            });
                        } else {
                            var s = "";
                            switch (t.errcode) {
                              case "-1":
                                s = "您不是管理人员，无操作权限";
                                break;

                              case "-2":
                                s = "扫码失败，请重试";
                                break;

                              case "-3":
                                s = "此人已被删除";
                                break;

                              case "-4":
                                s = 1 == a ? "请扫描社区信息登记二维码" : "请扫描教委信息登记二维码";
                                break;

                              default:
                                s = "扫码失败，请重试";
                            }
                            wx.showModal({
                                title: "提示",
                                content: s,
                                showCancel: !1,
                                confirmText: "我知道了"
                            });
                        }
                    }).catch(function(a) {
                        wx.hideLoading();
                    }) : wx.showModal({
                        title: "提示",
                        content: "扫码失败，请重试",
                        showCancel: !1,
                        confirmText: "我知道了"
                    });
                } catch (t) {
                    1 == a ? wx.showModal({
                        title: "提示",
                        content: "请扫描社区信息登记二维码",
                        showCancel: !1,
                        confirmText: "我知道了"
                    }) : wx.showModal({
                        title: "提示",
                        content: "请扫描教委信息登记二维码",
                        showCancel: !1,
                        confirmText: "我知道了"
                    });
                }
            },
            fail: function(t) {
                console.log(100, t), "scanCode:fail cancel" == t.errMsg || (1 == a ? wx.showModal({
                    title: "提示",
                    content: "请扫描社区信息登记二维码",
                    showCancel: !1,
                    confirmText: "我知道了"
                }) : wx.showModal({
                    title: "提示",
                    content: "请扫描教委信息登记二维码",
                    showCancel: !1,
                    confirmText: "我知道了"
                }));
            }
        });
}
function showBenren() {
        0 == this.data.checkBindpnone ? this.isBindPhone() : this.setData({
            brdjAdvanced: !this.data.brdjAdvanced
        });
}
function isBindPhone(a) {
        var n = this;
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        });
        var i = {
            url: "/auth-server/auth/isBindPhone",
            method: "POST",
            data: {
                idCard: e.userInfo.realIdCard || ""
            }
        };
        t(i).then(function(a) {
            1 == a.code ? (wx.hideLoading(), n.getCode(), n.setData({
                xianshi1: !0
            })) : (wx.hideLoading(), n.setData({
                brdjAdvanced: !n.data.brdjAdvanced,
                checkBindpnone: !0
            }));
        }).catch(function(a) {
            wx.hideLoading(), console.log("error", a);
        });
}
function getPhoneNumber(a) {
        var e = this;
        this.setData({
            xianshi1: !1
        });
        var n = a.detail, i = n.iv, o = n.encryptedData;
        if (!i || !o) return wx.hideLoading(), void console.error("用户拒绝授权登录");
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), t({
            url: "/auth-server/auth/getPhone",
            method: "POST",
            data: {
                encryptedData: o,
                iv: i
            },
            disableModalWhenApiError: !0
        }).then(function(a) {
            wx.hideLoading(), e.setData({
                brdjAdvanced: !e.data.brdjAdvanced,
                checkBindpnone: !0
            });
        }).catch(function(a) {
            wx.hideLoading();
        });
}
function getCode() {
        wx.login({
            success: function(a) {
                var e = {
                    url: "/auth-server/auth/refreshSessionKey",
                    method: "POST",
                    data: {
                        code: a.code
                    }
                };
                t(e).then(function(a) {
                    console.log(a, "刷新解密seeion返回值");
                }).catch(function(a) {
                    wx.hideLoading(), apiError(e, a, customErrors.shixiang.refreshSessionKey.UncaughtExp);
                });
            }
        });
}
function handleTap(a) {
        var t = this;
        wx.showLoading({
            title: "努力加载中...",
            mask: !0
        }), this.getxp("/xiangzhu/jkb/school/get/teacherAndStudent").then(function(e) {
            null != e.qrcode && e.qrcode.length > 0 != null && e.qrcode ? wx.navigateTo({
                url: a.currentTarget.dataset.success + "?type=" + t.data.type,
                success: function(a) {
                    wx.hideLoading();
                },
                fail: function() {
                    wx.hideLoading();
                }
            }) : wx.navigateTo({
                url: a.currentTarget.dataset.url + "?type=" + t.data.type,
                success: function(a) {
                    wx.hideLoading();
                },
                fail: function() {
                    wx.hideLoading();
                }
            });
        }).catch(function(a) {
            wx.hideLoading();
        });
}
function handleTap1(a) {
        var t = this;
        wx.showLoading({
            title: "努力加载中...",
            mask: !0
        }), this.getxp("/xiangzhu/jkb/community/fillInDetail").then(function(e) {
            null != e.qrcode && e.qrcode.length > 0 != null && e.qrcode ? wx.navigateTo({
                url: a.currentTarget.dataset.success + "?type=" + t.data.type,
                success: function(a) {
                    wx.hideLoading();
                },
                fail: function() {
                    wx.hideLoading();
                }
            }) : wx.navigateTo({
                url: a.currentTarget.dataset.url + "?type=" + t.data.type,
                success: function(a) {
                    wx.hideLoading();
                },
                fail: function() {
                    wx.hideLoading();
                }
            });
        }).catch(function(a) {
            wx.hideLoading();
        });
}
function getxp(a) {
        return t({
            url: a,
            method: "GET"
        });
}
function changeShequRadio() {
        this.setData({
            shequRadioStatus: !0,
            jiaogongRadioStatus: !1
        });
}
function changeJiaogongRadio() {
        this.setData({
            shequRadioStatus: !1,
            jiaogongRadioStatus: !0
        });
}
function btnChooseCancel() {
        this.setData({
            showAdminType: !1
        });
}
function btnChooseSubmit() {
        if (1 == this.data.shequRadioStatus) {
            this.startScan(1);
        } else {
            this.startScan(2);
        }
}
function handleHesuan() {
        this.setData({
            isHesuan: !0
        });
}
function showHeSuan() {
        this.setData({
            isHesuan: !1
        });
}
function showHeSuan1() {
        n({
            eventId: "detection_home_GoAssay"
        }), wx.navigateTo({
            url: "/pages/jxzq/he-suan-jie-guo/index"
        }), this.setData({
            isHesuan: !1
        });
}
