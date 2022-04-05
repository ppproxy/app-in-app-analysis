function onLoad(e) {
        var a;
        console.log(e), e.data && (a = JSON.parse(e.data)), this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            data: a,
            type: e.adminType,
            name: e.name,
            idCard: e.idCard
        }), console.log(a);
}
function startScan() {
        var a = this, t = this.data.type;
        wx.scanCode({
            success: function(n) {
                try {
                    var d;
                    console.log(n);
                    var o = JSON.parse(n.result);
                    d = {
                        qrCodeData: o.data,
                        scanType: t
                    }, 1 == o.type ? e({
                        url: "/xiangzhu/scan/scanByType",
                        method: "post",
                        data: d
                    }).then(function(e) {
                        if (console.log("------扫码结果", e), 0 == e.errcode) {
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
                                var o = e.data.registeringTime;
                                wx.redirectTo({
                                    url: "/pages/jxzq/personalCenterStatus/repeat/index?adminType=2&time=此人已于" + o + "时间报到&name=" + a.data.name + "&idCard=" + a.data.idCard
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
                            var i = "";
                            switch (e.errcode) {
                              case "-1":
                                i = "您不是管理人员，无操作权限";
                                break;

                              case "-2":
                                i = "扫码失败，请重试";
                                break;

                              case "-3":
                                i = "此人已被删除";
                                break;

                              case "-4":
                                i = 1 == t ? "请扫描社区信息登记二维码" : "请扫描教委信息登记二维码";
                                break;

                              default:
                                i = "扫码失败，请重试";
                            }
                            wx.showModal({
                                title: "提示",
                                content: i,
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
                    1 == t ? wx.showModal({
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
                console.log(100, e), "scanCode:fail cancel" == e.errMsg || (1 == t ? wx.showModal({
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
