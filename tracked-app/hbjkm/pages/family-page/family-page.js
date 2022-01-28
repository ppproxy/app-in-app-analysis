var a = getApp(), e = a.Anim, t = (a.request, a.requestHb), n = (a.dayjs, a.wxp), i = a.config, o = a.utils, r = a.userStore, s = (require("../../services/index"), 
require("../../utils/util").navigateToWebview, require("../../services/health-code.js")), l = require("../../services/feedback");

require("../../services/league"), i.domain, require("../../utils/util.js"), require("../../utils/weapp.qrcode.js");

e.Page({
    store: function(a) {
        return {
            isAuth: a.user.userInfo.isAuth,
            userInfo: a.user.userInfo
        };
    },
    data: {
        biankuangUrl: i.cdnDomain + "/hbjkm",
        havePlace: !1,
        jump: !1,
        fxdjflag: "",
        reportflag: "",
        tap: !0,
        count: 0,
        signin: !1,
        name: "",
        identity: "",
        pdfUrl: "https://wyj-1301318828.file.myqcloud.com/doc/jkm_guide.pdf",
        imgSrc: "https://wyj-1301318828.file.myqcloud.com/image/jmk/jkm_guide_icon.png",
        fileName: "帮助指引.pdf",
        cityName: i.cityName,
        isShowBg: !0,
        visible: !1,
        value: i.cityName,
        residentCount: 0,
        communistCount: 0,
        floatingCount: 0,
        endTime: "",
        todayCount: 0,
        confirm: 0,
        suspect: 0,
        cure: 0,
        dead: 0,
        now: "",
        punch: "",
        lineVisible: !1,
        singleLine: {
            xAxis: {
                data: []
            },
            series: [ {
                name: "确诊人数",
                data: [],
                label: {
                    normal: {
                        show: !0
                    }
                }
            } ]
        },
        epidemicData: {
            confirm: 0,
            suspect: 0,
            dead: 0,
            heal: 0,
            lastUpdateTime: ""
        },
        statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
        leagueList: [],
        severalvaccine: 0,
        interval_day: "",
        this_province: !1
    },
    onShareAppMessage: function() {},
    onLoad: function(a) {
        console.log(a), this.setData({
            familyname: decodeURIComponent(a.name),
            familyidentity: a.identity,
            familyrelation: decodeURIComponent(a.relation),
            familyid: a.id,
            familyRelationType: a.familyRelationType
        });
    },
    onShow: function(a) {
        var e = this;
        this.time(), r.fetchUserInfo().then(function(a) {
            e.realnames();
        });
    },
    time: function() {
        var a = this;
        setInterval(function() {
            var e = Date.parse(new Date()), t = 1e3 * (e /= 1e3), n = new Date(t), i = n.getFullYear() + "-" + (n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1) + "-" + (n.getDate() < 10 ? "0" + n.getDate() : n.getDate()) + " " + (n.getHours() < 10 ? "0" + n.getHours() : n.getHours()) + ":" + (n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes()) + ":" + (n.getSeconds() < 10 ? "0" + n.getSeconds() : n.getSeconds());
            a.setData({
                now: i
            });
        }, 1e3);
    },
    drawimg: function(a, e, t) {
        var n = "#000";
        "00" == t ? n = "#39b778" : "01" == t ? n = "#f5d000" : "10" == t && (n = "#d8242b");
        var i = n, o = e, r = "../../images/logo.png";
        this.data.severalvaccine && 0 !== this.data.severalvaccine.num && (r = "../../images/logo1.png");
        var s = wx.createCanvasContext("myQrcode"), l = new Int8Array(wx.base64ToArrayBuffer(a)), d = 3 * (o + 10);
        s.white = s.height = d;
        for (var c = o, m = Math.ceil(c / 8), u = 0; u < c; u++) for (var f = u * m, g = 0; g < c; g++) {
            var h = 0 == (l[f + parseInt(g / 8, 10)] & 1 << 7 - g % 8) ? "#ffffff" : i;
            s.setFillStyle(h), s.fillRect(3 * (g + 5), 3 * (u + 5), 3, 3);
        }
        if (r) {
            var y = d, p = d;
            s.drawImage(r, (y - 48) / 2, (p - 48) / 2);
        }
        s.draw();
    },
    re: function() {
        wx.showLoading({
            title: "加载中"
        }), wx.redirectTo({
            url: "/pages/family-page/family-page?name=" + encodeURIComponent(this.data.familyname) + "&identity=" + this.data.familyidentity + "&relation=" + encodeURIComponent(this.data.familyrelation) + "&id=" + this.data.familyid + "&familyRelationType=" + this.data.familyRelationType
        }), wx.hideLoading();
    },
    onTapFeedback: function() {
        l.goFeedback(0, this.data.userInfo.uid);
    },
    onPageScroll: function(a) {
        var e = parseInt(a.scrollTop) < 80;
        this.setData({
            isShowBg: e
        });
    },
    onTapAccess: function(a) {
        var e = this, t = this;
        if (t.data.tap && (this.setData({
            tap: !1
        }), setTimeout(function() {
            t.setData({
                tap: !0
            });
        }, 2e3), r.checkAuth())) if (a.currentTarget.dataset.real) s.realnameUser(this.data.userInfo.uid).then(function(n) {
            console.log(n), n.realnameAut && t.setData({
                name: n.realnameAut.name,
                identity: n.realnameAut.identity
            }), 0 == n.isAut ? wx.showModal({
                title: "温馨提示",
                content: "请先实名认证",
                confirmColor: "#1890ff",
                showCancel: !1,
                confirmText: "去认证",
                success: function(e) {
                    e.cancel || wx.navigateTo({
                        url: "/packages/health-code/pages/realname-submit/index?path=" + a.currentTarget.dataset.url
                    });
                }
            }) : wx.navigateTo({
                url: a.currentTarget.dataset.url + "?name=" + n.realnameAut.name + "&phone=" + n.realnameAut.phone + "&identity=" + n.realnameAut.identity + "&uid=" + e.data.userInfo.uid + "&familyid=" + e.data.familyid + "&familyname=" + encodeURIComponent(e.data.familyname) + "&familyidentity=" + e.data.familyidentity + "&familyRelationType=" + e.data.familyRelationType + "&familyrelation=" + encodeURIComponent(e.data.familyrelation)
            });
        }); else {
            var n = a.currentTarget.dataset.id;
            wx.navigateTo({
                url: o.urlJoinParams(a.currentTarget.dataset.url, {
                    id: n
                })
            });
        }
    },
    realnames: function() {
        var a = this;
        console.log("+_+_+_+_+_+_+_+_+__+__+_+_+_+_+_+_", this.data.userInfo.uid);
        var e = this;
        s.realnameUser(this.data.userInfo.uid).then(function(o) {
            wx.setStorageSync({
                name: o.realnameAut.name,
                identity: o.realnameAut.identity
            }), o.realnameAut && e.setData({
                name: o.realnameAut.name,
                identity: o.realnameAut.identity
            }), null == o.realnameAut ? wx.showModal({
                title: "温馨提示",
                content: "请先实名认证",
                confirmColor: "#1890ff",
                showCancel: !1,
                confirmText: "去认证",
                success: function(a) {
                    a.cancel || wx.navigateTo({
                        url: "/packages/health-code/pages/realname-submit/index"
                    });
                }
            }) : (a.setData({
                name: o.realnameAut.name,
                identity: o.realnameAut.identity
            }), a.data.gateId && "undefined" != a.data.gateId && "" != a.data.gateId && a.placeCode(), 
            wx.getStorageSync("flag") && t({
                url: "/hbjkm/family/ymjzxq/infoxqNum",
                method: "POST",
                timeout: 2e5,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: {
                    id: a.data.familyid
                }
            }).then(function(e) {
                console.log(e.data);
                var t = Date.parse(new Date()), n = 1e3 * (t /= 1e3), i = new Date(n), o = i.getFullYear() + "-" + (i.getMonth() + 1 < 10 ? "0" + (i.getMonth() + 1) : i.getMonth() + 1) + "-" + (i.getDate() < 10 ? "0" + i.getDate() : i.getDate()), r = Date.parse(new Date(e.data.lastTime.split(/\s+/)[0])), s = Date.parse(new Date(o)), l = parseInt((s - r) / 864e5);
                a.setData({
                    severalvaccine: e.data,
                    interval_day: l
                });
            }).catch(function(a) {
                console.log(a);
            }), t({
                url: "/hbjkm/familyHealth/info/" + a.data.familyid,
                method: "POST"
            }).then(function(o) {
                if (e.setData({
                    hsjc: o.data.hsjc.hsjcjg,
                    hsjcsj: o.data.hsjc ? o.data.hsjc.hsjcsj : "",
                    ktjc: o.data.ktjc.ktjcjg
                }), e.setData({
                    warmMsgs: o.data.warmMsgs
                }), a.data.warmMsgs[0] && "{" == a.data.warmMsgs[0].split("")[0]) {
                    var r = a.data.warmMsgs[0].split("")[1];
                    n.request({
                        url: i.cdnDomain + "/hbjkm/flts/" + r + ".json"
                    }).then(function(e) {
                        a.setData({
                            this_province: !0,
                            warmMsgs: e.data.tsxx,
                            warmprompt: e.data.wxtx
                        });
                    });
                }
                "未见异常" == o.data.hasWarm ? e.setData({
                    flag: 1
                }) : e.setData({
                    flag: 0
                }), o.data.fxdj ? e.setData({
                    fxdjflag: o.data.fxdj
                }) : e.setData({
                    fxdjflag: 20
                }), t({
                    url: "/hbjkm/code/createFamilyCode/" + a.data.familyid,
                    method: "POST"
                }).then(function(e) {
                    0 != e.errcode || (a.setData({
                        url: e.data.familyIdentityImage
                    }), a.data.fxdjflag && a.drawimg(e.data.imgStream, parseInt(e.data.width), a.data.fxdjflag));
                });
            }).catch(function(a) {
                e.setData({
                    fxdjflag: 20
                });
            }), t({
                url: "/hbjkm/familyHealth/reportNum/" + a.data.familyid,
                method: "POST"
            }).then(function(a) {
                "0" == a.data.count ? e.setData({
                    reportflag: ""
                }) : e.setData({
                    reportflag: "今日已打卡"
                });
            }));
        });
    },
    on_refresh: function() {
        var a = this;
        t({
            url: "/hbjkm/family/ymjzxq/infoxq",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                id: this.data.familyid
            }
        }).then(function(e) {
            if (console.log(e), t({
                url: "/hbjkm/family/ymjzxq/infoxqNum",
                method: "POST",
                timeout: 2e5,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: {
                    id: a.data.familyid
                }
            }).then(function(e) {
                var t = Date.parse(new Date()), n = 1e3 * (t /= 1e3), i = new Date(n), o = i.getFullYear() + "-" + (i.getMonth() + 1 < 10 ? "0" + (i.getMonth() + 1) : i.getMonth() + 1) + "-" + (i.getDate() < 10 ? "0" + i.getDate() : i.getDate()), r = Date.parse(new Date(e.data.lastTime.split(/\s+/)[0])), s = Date.parse(new Date(o)), l = parseInt((s - r) / 864e5);
                a.setData({
                    severalvaccine: e.data,
                    interval_day: l
                });
            }).catch(function(a) {
                console.log(a);
            }), e.data) e.data.map(function(a) {
                "1" == a.vaccinateorders && (a.vaccinateorders = "一"), "2" == a.vaccinateorders && (a.vaccinateorders = "二"), 
                "3" == a.vaccinateorders && (a.vaccinateorders = "三");
            });
            a.setData({
                inoculationList: e.data
            });
        });
    },
    inoculationDetail: function(a) {
        wx.navigateTo({
            url: "/pages/family-inoculation/inoculation?familycodeNo=" + this.data.familyidentity + "&familyname=" + this.data.familyname + "&id=" + this.data.familyid
        });
    },
    toMiniProgramSuccess: function() {
        console.log("success");
    },
    toMiniProgramFail: function(a) {
        console.error("跳转小程序失败", a);
    },
    getAnitEpidemicAllianceData: function() {}
});