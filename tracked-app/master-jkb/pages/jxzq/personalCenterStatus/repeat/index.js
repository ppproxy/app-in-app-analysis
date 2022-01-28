var e = getApp().request;

Page({
    data: {
        windowHeight: "",
        type: "",
        name: "",
        idCard: ""
    },
    onLoad: function(e) {
        console.log("-----重复", e), e.time && this.setData({
            time: e.time
        }), this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            type: e.adminType,
            name: e.name,
            idCard: e.idCard
        });
    },
    startScan: function() {
        var a = this, t = this.data.type;
        wx.scanCode({
            success: function(n) {
                try {
                    var d, i = JSON.parse(n.result);
                    d = {
                        qrCodeData: i.data,
                        scanType: t
                    }, 1 == i.type ? e({
                        url: "/xiangzhu/scan/scanByType",
                        method: "post",
                        data: d
                    }).then(function(e) {
                        if (0 == e.errcode) {
                            var n = e.data.data || "";
                            if (1 == t) if (a.setData({
                                name: e.data.name || "----",
                                idCard: e.data.idCard || "----"
                            }), "1" == n) wx.redirectTo({
                                url: "/pages/jxzq/personalCenterStatus/success/index?adminType=1&name=" + a.data.name + "&idCard=" + a.data.idCard
                            }); else if ("4" == n || "3" == n || "2" == n) wx.redirectTo({
                                url: "/pages/jxzq/personalCenterStatus/fail/index?adminType=1&name=" + a.data.name + "&idCard=" + a.data.idCard
                            }); else if ("8" == n) wx.redirectTo({
                                url: "/pages/jxzq/personalCenterStatus/fail/index?adminType=1&data=" + JSON.stringify(e.data) + "&name=" + a.data.name + "&idCard=" + a.data.idCard
                            }); else if ("6" == n) {
                                var d = e.data.time || "";
                                wx.redirectTo({
                                    url: "/pages/jxzq/personalCenterStatus/repeat/index?adminType=1&time=此人已于" + d + "时间报到&name=" + a.data.name + "&idCard=" + a.data.idCard
                                });
                            } else "9" == n ? wx.redirectTo({
                                url: "/pages/jxzq/personalCenterStatus/repeat/index?adminType=1&name=" + a.data.name + "&idCard=" + a.data.idCard
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
                            }); else if (2 == t) if (a.setData({
                                name: e.data.name || "----",
                                idCard: e.data.reportIdCard || "----"
                            }), "1" == n) wx.redirectTo({
                                url: "/pages/jxzq/personalCenterStatus/success/index?adminType=2&name=" + a.data.name + "&idCard=" + a.data.idCard
                            }); else if ("2" == n) wx.redirectTo({
                                url: "/pages/jxzq/personalCenterStatus/fail/index?adminType=2&name=" + a.data.name + "&idCard=" + a.data.idCard
                            }); else if ("3" == n) {
                                var i = e.data.registeringTime;
                                wx.redirectTo({
                                    url: "/pages/jxzq/personalCenterStatus/repeat/index?adminType=2&time=此人已于" + i + "时间报到&name=" + a.data.name + "&idCard=" + a.data.idCard
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
                            var o = "";
                            switch (e.errcode) {
                              case "-1":
                                o = "您不是管理人员，无操作权限";
                                break;

                              case "-2":
                                o = "扫码失败，请重试";
                                break;

                              case "-3":
                                o = "此人已被删除";
                                break;

                              case "-4":
                                o = 1 == t ? "请扫描社区信息登记二维码" : "请扫描教委信息登记二维码";
                                break;

                              default:
                                o = "扫码失败，请重试";
                            }
                            wx.showModal({
                                title: "提示",
                                content: o,
                                showCancel: !1,
                                confirmText: "我知道了"
                            });
                        }
                    }) : wx.showModal({
                        title: "提示",
                        content: "扫码失败，请重试",
                        showCancel: !1,
                        confirmText: "我知道了"
                    });
                } catch (e) {
                    console.log("-----重复33333", e), 1 == t ? wx.showModal({
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
            fail: function(e) {
                console.log("-----重复2222", a.data.type), console.log(100, e), "scanCode:fail cancel" == e.errMsg || (1 == t ? wx.showModal({
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
});