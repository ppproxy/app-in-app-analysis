var e, a = require("../../../@babel/runtime/helpers/defineProperty"), t = getApp(), n = t.request, o = t.dayjs, s = t.wxp, i = t.userStore, d = t.config, r = require("../../../utils/bese64.js"), c = require("../../../utils/mtaTarget.js").newspapers, g = /^[0-9]*$/;

Page({
    data: {
        windowHeight: "",
        windowWidth: "",
        list: [],
        renci_all: "0",
        renci_today: "0",
        renshu_all: "0",
        renshu_today: "0",
        isOpenBDCheck: "",
        qrCodeData: "",
        startTime: "",
        jiesushijian: "",
        rq: "",
        jintian: "",
        date: "",
        showSaoma: !0,
        pageNum: 1,
        totalPages: 0,
        daofang: {
            qrcode_unitname: "",
            qrcode_address: "",
            address: ""
        },
        tupian: "",
        userInfo: {},
        showCanvas: !1,
        totalHeight: "",
        img: "",
        canFresh: !1,
        showDownloadexl: !1,
        erweimaModal: !1
    },
    onLoad: function(e) {
        var a = this;
        console.log(e), i.confirmIsOnline().then(function(t) {
            if ((!t || 0 === i.userInfo.isOpenWu) && wx.getStorageSync("dfRenci_qrCodeData").length > 0) console.log(i.userInfo, "个人信息"), 
            a.setData({
                qrCodeData: wx.getStorageSync("dfRenci_qrCodeData"),
                userInfo: wx.getStorageSync("dfUserInfo"),
                daofang_imgUrl: wx.getStorageSync("daofang_imgUrl"),
                daofang: wx.getStorageSync("daofang_data"),
                list: wx.getStorageSync("dfList"),
                renci_all: wx.getStorageSync("dfRenci_all"),
                renci_today: wx.getStorageSync("dfRenci_today"),
                renshu_all: wx.getStorageSync("afRenshu_all"),
                renshu_today: wx.getStorageSync("afRenshu_today")
            }); else {
                a.getAnniu();
                var n = i.userInfo;
                if (wx.setStorageSync("dfUserInfo", i.userInfo), e && e.daofang) {
                    var o = JSON.parse(e.daofang);
                    console.log(o), a.setData({
                        daofang: o
                    });
                }
                a.setData({
                    userInfo: n
                }), a.scerma(a.data.daofang), i.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/images/yuanzhu.png", "daofang_wenhao", "daofang_imgUrl"), 
                i.arraybuffer("https://xcx-static.yqgz.beijing.gov.cn/statics/listnoData.png", "daofang_noList", "daofang_imgUrl"), 
                a.setData({
                    daofang_imgUrl: {
                        daofang_wenhao: "https://xcx-static.yqgz.beijing.gov.cn/images/yuanzhu.png",
                        daofang_noList: "https://xcx-static.yqgz.beijing.gov.cn/statics/listnoData.png"
                    }
                });
            }
        });
    },
    downloadexl: function() {
        if (c({
            eventId: "registry_tap_ExportRegistration"
        }), this.data.showDownloadexl) {
            wx.showLoading({
                title: "努力加载中",
                mask: !0
            }), this.setData({
                showDownloadexl: !1
            });
            var e = this, a = new Date().getTime();
            wx.setStorageSync("sao-ma-dengji-tongji-showDownloadexl", a);
            var t = setInterval(function() {
                new Date().getTime() - a >= 144e5 && (e.setData({
                    showDownloadexl: !0
                }), clearInterval(t), wx.removeStorageSync("sao-ma-dengji-tongji-showDownloadexl"));
            }, 1e3);
            wx.navigateTo({
                url: "/pages/jxzq/dao-chu-ji-lu/index"
            }), wx.hideLoading();
        }
    },
    onShow: function(e) {
        var a = this;
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        });
        var t = this, n = wx.getStorageSync("sao-ma-dengji-tongji-timestamp");
        if (n < 1e3) this.setData({
            canFresh: !0
        }); else var s = setInterval(function() {
            new Date().getTime() - n >= 144e5 && (t.setData({
                canFresh: !0
            }), wx.removeStorageSync("sao-ma-dengji-tongji-timestamp"), clearInterval(s));
        }, 1e3);
        var d = wx.getStorageSync("sao-ma-dengji-tongji-showDownloadexl");
        if (d < 1e3) this.setData({
            showDownloadexl: !0
        }); else var r = setInterval(function() {
            new Date().getTime() - d >= 144e5 && (t.setData({
                showDownloadexl: !0
            }), wx.removeStorageSync("sao-ma-dengji-tongji-showDownloadexl"), clearInterval(r));
        }, 1e3);
        var c = new Date(), g = o(c).format("DD"), l = ~~o(c).format("MM") + "月" + ~~g + "日", f = o(c).format("YYYY-MM-DD"), u = new Date(new Date().getTime() - 5184e5);
        u = o(u).format("YYYY-MM-DD"), console.log(f, u), this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            windowWidth: wx.getSystemInfoSync().windowWidth,
            jiesushijian: f,
            rq: l,
            jintian: f,
            startTime: u,
            date: f
        }), i.confirmIsOnline().then(function(e) {
            e && 1 === i.userInfo.isOpenWu ? (wx.showLoading({
                title: "努力加载中",
                mask: !0
            }), a.getMyScanLog(a.data.jiesushijian, 1, a.data.startTime)) : (console.log("离线"), 
            wx.hideLoading());
        });
    },
    scerma: function(e) {
        var t, o = this, s = this;
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        });
        try {
            t = wx.getStorageSync("dfRenci_qrCodeData").length > 1 ? 1 : 0;
        } catch (e) {
            t = 0;
        }
        console.log("codear", e.code);
        var i = {
            url: "/jingxinju/jkb/qrCode/apply",
            method: "POST",
            data: {
                qrcode_unitname: e.qrcode_unitname,
                qrcode_ring: e.success_value,
                qrcode_address: e.code,
                qrcode_detailaddress: e.qrcode_address,
                version: t
            }
        };
        n(i).then(function(e) {
            if (wx.hideLoading(), "-1" == e.code) wx.showModal({
                title: "提示",
                content: "您的健康状态不是未见异常，暂时无法生成本人二维码。",
                showCancel: !1,
                confirmColor: "#0D8CE6",
                confirmText: "我知道了",
                success: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            }); else if ("-7" == e.code) wx.showModal({
                title: "提示",
                content: "北京“健康宝”暂不能确认您的防疫相关健康状态，可能由于您过去14天内有进（返）京行为引起。若需要继续生成本人二维码，请先进行“本人健康状态查询”。",
                showCancel: !1,
                confirmColor: "#0D8CE6",
                confirmText: "我知道了",
                success: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            }); else if ("51" == e.code) wx.showModal({
                title: "提示",
                content: "北京“健康宝”暂不能确认您的防疫相关健康状态，可能由于您过去14天内有进（返）京行为引起。若需要继续生成本人二维码，请先进行“本人健康状态查询”。",
                showCancel: !1,
                confirmColor: "#0D8CE6",
                confirmText: "我知道了",
                success: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            }); else {
                if (s.setData({
                    daofang: {
                        qrcode_unitname: e.qrcode_unitname && "无" != e.qrcode_unitname ? e.qrcode_unitname : "",
                        qrcode_address: e.qrcode_detailaddress && "无" != e.qrcode_detailaddress ? e.qrcode_detailaddress : ""
                    }
                }), 1 == t) s.setData({
                    qrCodeData: wx.getStorageSync("dfRenci_qrCodeData")
                }), wx.getStorageSync("daofang_data").qrcode_address ? o.setData({
                    daofang: wx.getStorageSync("daofang_data")
                }) : o.resjson(e.qrcode_address); else wx.setStorageSync("dfRenci_qrCodeData", e.qrCodeData), 
                s.setData({
                    qrCodeData: e.qrCodeData
                }), console.log(g.test(e.qrcode_address), e.qrcode_address), g.test(e.qrcode_address) ? o.resjson(e.qrcode_address) : (o.setData(a({}, "daofang.address", e.qrcode_address)), 
                wx.setStorageSync("daofang_data", o.data.daofang));
                s.createNewImg(s.data.qrCodeData);
            }
        }).catch(function(e) {
            console.log(e), wx.hideLoading();
        });
    },
    resjson: function(e) {
        var t = this, n = e.substring(0, 6), o = new Date().getTime();
        s.request({
            url: d.areaPath,
            method: "get"
        }).then(function(s) {
            wx.canIUse("reportPerformance") && wx.reportPerformance(1002, Number(new Date().getTime() - o), d.areaPath);
            var i = s.data;
            console.log(i, n, e), i.map(function(o, s) {
                o.value == n && (t.setData(a({}, "daofang.address", o.name)), 8 == e.length && o.child.map(function(n, o) {
                    n.value == e && (t.setData(a({}, "daofang.address", t.data.daofang.address + n.name)), 
                    wx.setStorageSync("daofang_data", t.data.daofang));
                }));
            }), wx.hideLoading();
        }).catch(function(e) {
            wx.hideLoading();
        });
    },
    xinxi: function() {
        this.setData({
            erweimaModal: !0
        });
    },
    btnKonw: function() {
        this.setData({
            erweimaModal: !1
        });
    },
    downloadImg: function() {
        this.setData({
            showCanvas: !0
        }), this.createNewImg(this.data.qrCodeData);
    },
    cancel: function() {
        this.setData({
            showCanvas: !1
        });
    },
    changeIcon: function() {
        this.setData({
            showSaoma: !this.data.showSaoma
        }), this.setData({
            pageNum: 1
        }), this.getMyScanLog(this.data.date, 1, this.data.startTime);
    },
    handleOpenRegion: function() {
        wx.navigateBack({
            delta: 2
        });
    },
    fresh: function() {
        var e = this;
        i.confirmIsOnline().then(function(a) {
            if (a && 1 === i.userInfo.isOpenWu && e.data.canFresh) {
                wx.showLoading({
                    title: "努力加载中",
                    mask: !0
                }), e.getAnniu();
                var t = new Date(), n = o(t).format("DD"), s = ~~o(t).format("MM") + "月" + ~~n + "日";
                e.setData({
                    rq: s,
                    pageNum: 1,
                    date: e.data.jintian
                }), console.log(e.data.jintian);
                var d = e;
                e.getMyScanLog(e.data.jintian, 1, e.data.jintian), e.setData({
                    canFresh: !1
                });
                var r = new Date().getTime();
                wx.setStorageSync("sao-ma-dengji-tongji-timestamp", r);
                var c = setInterval(function() {
                    new Date().getTime() - r >= 15e3 && (d.setData({
                        canFresh: !0
                    }), wx.removeStorageSync("sao-ma-dengji-tongji-timestamp"), clearInterval(c));
                }, 1e3);
            }
        });
    },
    getMyScanLog: function(e, a, t) {
        var s = this;
        console.log(o().format("YYYY-MM-DD"), e, "日期");
        var i = this;
        return n({
            url: "/jingxinju/jkb/qrCode/showUsed",
            method: "post",
            data: {
                endtime: e,
                pageNum: a,
                pageSize: "10",
                starttime: e,
                format: "0"
            }
        }).then(function(t) {
            if (wx.hideLoading(), 1 == a && s.setData({
                list: []
            }), t.codeCountByIdDTO && t.codeCountByIdDTO.detail && t.codeCountByIdDTO.detail.length > 0) {
                t.codeCountByIdDTO.detail.map(function(e) {
                    e.date = e.scan_time.substring(0, 10), e.time = e.scan_time.substring(11, 19);
                }), i.setData({
                    list: s.data.list.concat(t.codeCountByIdDTO.detail)
                });
                var n = o().format("YYYY-MM-DD");
                a <= 2 && n == e && (console.log("缓存数据"), wx.setStorageSync("dfList", s.data.list));
            }
            i.setData({
                renci_all: t.codeCountByIdDTO.renci_all,
                renci_today: t.codeCountByIdDTO.renci_today,
                renshu_all: t.codeCountByIdDTO.renshu_all,
                renshu_today: t.codeCountByIdDTO.renshu_today,
                totalPages: t.codeCountByIdDTO.totalSize
            }), wx.setStorageSync("dfRenci_all", t.codeCountByIdDTO.renci_all), wx.setStorageSync("dfRenci_today", t.codeCountByIdDTO.renci_today), 
            wx.setStorageSync("afRenshu_all", t.codeCountByIdDTO.renshu_all), wx.setStorageSync("afRenshu_today", t.codeCountByIdDTO.renshu_today);
        }).catch(function(e) {
            wx.hideLoading(), console.log(e);
        });
    },
    websocket: function(e) {
        function a(a) {
            return e.apply(this, arguments);
        }
        return a.toString = function() {
            return e.toString();
        }, a;
    }(function(a) {
        var t = this;
        (e = new websocket({
            heartCheck: !0,
            isReconnection: !0
        })).initWebSocket({
            url: a,
            success: function(e) {
                console.log(e);
            },
            fail: function(e) {
                console.log(e);
            }
        }), e.onSocketClosed({
            url: a,
            success: function(e) {
                console.log(e);
            },
            fail: function(e) {
                console.log(e);
            }
        }), e.onNetworkChange({
            url: a,
            success: function(e) {
                console.log(e);
            },
            fail: function(e) {
                console.log(e);
            }
        }), e.onReceivedMsg(function(e) {
            console.log("app.js收到服务器内容：" + e, e), -1 != e.data.indexOf("chatevent") && t.getMyScanLog(t.data.jiesushijian, 1, t.data.startTime);
        });
    }),
    checkIsHasCode: function() {
        return n({
            url: "/jingxinju/jkb/qrCode/checkIsHasCode",
            method: "post",
            data: {}
        }).then(function(e) {
            e.code;
        }).catch(function(e) {
            console.log(e);
        });
    },
    delete: function() {
        c({
            eventId: "registry_tap_DeleteRegister"
        }), wx.showModal({
            title: "提示",
            content: "登记簿删除后，所有信息不能再次访问，是否确认删除？",
            confirmText: "是",
            confirmColor: "#0D8CE6",
            cancelText: "否",
            success: function(e) {
                if (e.confirm) return n({
                    url: "/jingxinju/jkb/qrCode/delete",
                    method: "post",
                    data: {}
                }).then(function(e) {
                    1 == e.errcode && (wx.removeStorageSync("daofang_imgUrl"), wx.removeStorageSync("dfList"), 
                    wx.removeStorageSync("dfRenci_all"), wx.removeStorageSync("dfRenci_today"), wx.removeStorageSync("afRenshu_all"), 
                    wx.removeStorageSync("afRenshu_today"), wx.removeStorageSync("dfRenci_qrCodeData"), 
                    wx.removeStorageSync("dfUserInfo"), wx.redirectTo({
                        url: "/pages/jxzq/delMessage/success/index"
                    }));
                }).catch(function(e) {
                    console.log(e);
                });
            }
        });
    },
    bindDateChange: function(e) {
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), console.log("picker发送选择改变，携带值为", e.detail.value);
        var a = o(e.detail.value).format("DD"), t = ~~o(e.detail.value).format("MM") + "月" + ~~a + "日";
        this.setData({
            rq: t,
            date: e.detail.value,
            pageNum: 1
        }), this.getMyScanLog(this.data.date, 1, this.data.startTime);
    },
    onReady: function() {
        var e = this;
        i.confirmIsOnline().then(function(a) {
            a && 1 === i.userInfo.isOpenWu ? e.checkIsHasCode() : console.log("离线");
        });
    },
    onReachBottom: function() {
        this.data.showSaoma && (this.data.totalPages == this.data.list.length ? wx.showToast({
            title: "已加载全部",
            icon: "none"
        }) : (wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), this.setData({
            pageNum: this.data.pageNum + 1
        }), this.getMyScanLog(this.data.date, this.data.pageNum, this.data.startTime)));
    },
    createBg: function(e, a, t, n) {
        var o = this;
        wx.getImageInfo({
            src: "https://xcx-static.yqgz.beijing.gov.cn/statics/canvasbg.png",
            success: function(s) {
                if (e.drawImage(s.path, 0, 0, parseInt(s.width * a) / 2, parseInt(s.height * a) / 2), 
                e.setFontSize(15), o.data.daofang.qrcode_unitname) if (e.setTextAlign("center"), 
                o.data.daofang.qrcode_unitname.length <= 25) e.fillText(o.data.daofang.qrcode_unitname, 165 * a, 50 * a); else {
                    var d = o.data.daofang.qrcode_unitname.substring(0, 25);
                    console.log(d), e.fillText(d + "...", 165 * a, 50 * a);
                }
                if (e.drawImage(n, parseInt(a * (o.data.windowWidth - 40 - t.width) / 2), parseInt(60 * a)), 
                e.setTextAlign("right"), e.fillText("登记员姓名", 90 * a, 340 * a), e.setTextAlign("left"), 
                e.fillText(i.userInfo.name, 140 * a, 340 * a), e.setTextAlign("right"), e.fillText("身份证号码", 90 * a, 370 * a), 
                e.setTextAlign("left"), e.fillText(i.userInfo.idCard, 140 * a, 370 * a), o.data.daofang.address || o.data.daofang.qrcode_address) if (e.setTextAlign("right"), 
                e.fillText("单位详细地址", 105 * a, 400 * a), e.setTextAlign("left"), (o.data.daofang.qrcode_address + o.data.daofang.address).length <= 10) e.fillText(o.data.daofang.address + o.data.daofang.qrcode_address, 140 * a, 400 * a); else if ((o.data.daofang.qrcode_address + o.data.daofang.address).length <= 20) {
                    var r = (o.data.daofang.address + o.data.daofang.qrcode_address).substring(0, 10), c = (o.data.daofang.address + o.data.daofang.qrcode_address).substring(10, 20);
                    e.fillText(r, 140 * a, 400 * a), e.fillText(c, 140 * a, 430 * a);
                } else {
                    var g = (o.data.daofang.address + o.data.daofang.qrcode_address).substring(0, 10), l = (o.data.daofang.address + o.data.daofang.qrcode_address).substring(10, 19);
                    e.fillText(g, 140 * a, 400 * a), e.fillText(l + "...", 140 * a, 420 * a);
                }
                e.draw(!0);
            }
        });
    },
    createNewImg: function(e) {
        var a = this, t = wx.createCanvasContext("myCanvas");
        r(e, function(e) {
            var n = a.data.windowWidth / 375;
            wx.getImageInfo({
                src: e,
                success: function(o) {
                    a.createBg(t, n, o, e);
                }
            });
        });
    },
    saveImage: function() {
        c({
            eventId: "registry_tap_PrintRegister"
        });
        var e = this;
        wx.showLoading({
            title: "保存中",
            mask: !0
        }), console.log(wx.getStorageSync("JKB-writePhotosAlbum")), wx.getStorageSync("JKB-writePhotosAlbum").length < 2 ? wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            canvasId: "myCanvas",
            success: function(a) {
                var t = a.tempFilePath;
                e.setData({
                    shareImg: t
                }), wx.setStorageSync("JKB-writePhotosAlbum", "true"), e.saveImg(), wx.hideLoading();
            },
            fail: function(e) {
                console.log(e, 1111), wx.hideLoading();
            }
        }) : wx.getSetting({
            success: function(a) {
                console.log(a), a.authSetting["scope.writePhotosAlbum"] ? wx.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    canvasId: "myCanvas",
                    success: function(a) {
                        var t = a.tempFilePath;
                        e.setData({
                            shareImg: t
                        }), wx.setStorageSync("JKB-writePhotosAlbum", !0), e.saveImg(), wx.hideLoading();
                    },
                    fail: function(e) {
                        console.log(e, 1111), wx.hideLoading();
                    }
                }) : (wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: "您还没有开启相册权限，开启之后即可保存照片",
                    showCancel: !1,
                    success: function() {
                        wx.openSetting({});
                    }
                }));
            }
        });
    },
    saveImg: function() {
        var e = this;
        wx.getSetting({
            success: function(a) {
                a.authSetting["scope.writePhotosAlbum"] ? wx.saveImageToPhotosAlbum({
                    filePath: e.data.shareImg,
                    success: function() {
                        wx.showToast({
                            title: "保存成功"
                        });
                    },
                    fail: function() {
                        wx.showToast({
                            title: "保存失败",
                            icon: "none"
                        });
                    }
                }) : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        wx.saveImageToPhotosAlbum({
                            filePath: e.data.shareImg,
                            success: function() {
                                wx.showToast({
                                    title: "保存成功"
                                });
                            },
                            fail: function() {
                                wx.showToast({
                                    title: "保存失败",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    fail: function() {
                        e.setData({
                            openSet: !0
                        });
                    }
                });
            }
        });
    },
    getAnniu: function() {
        var e = this, a = new Date().getTime();
        s.request({
            url: d.anniuCdn + "/jkb-poi-config.json",
            method: "GET"
        }).then(function(t) {
            console.log(t), wx.canIUse("reportPerformance") && wx.reportPerformance(1002, Number(new Date().getTime() - a), d.anniuCdn + "/jkb-poi-config.json"), 
            e.setData({
                isOpenBDCheck: t.data.isOpenBDCheck
            });
        }).catch(function(e) {});
    }
});