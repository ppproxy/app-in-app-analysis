var a = getApp(), t = a.Anim, n = (a.request, a.requestHb), o = a.dayjs, i = a.wxp, s = a.config, c = a.utils, r = a.userStore, d = (require("../../services/index"), 
require("../../utils/util").navigateToWebview), u = require("../../services/health-code.js"), l = require("../../services/feedback"), h = (require("../../services/league"), 
s.domain, require("../../utils/util.js"), require("../../utils/weapp.qrcode.js"), 
null);

t.Page({
    store: function(e) {
        return {
            isAuth: e.user.userInfo.isAuth,
            userInfo: e.user.userInfo
        };
    },
    data: {
        id: "",
        biankuangUrl: s.cdnDomain + "/hbjkm",
        code: "",
        disabled: !1,
        time: "获取验证码",
        currentTime: 61,
        cacheFlag: "99",
        check: !0,
        phone: "",
        hiddenmodalput: !0,
        link: "",
        notice: "",
        fxdjflag1: null,
        c: " \n    您的河北健康码可与河北省卫生健康委推行的个人电子健康码进行融合升级，升级后自动生成一张个人专属电子健康码，可替代医院就诊卡作为就诊凭证，实现跨机构、跨区域一码通用，永不丢失。是否升级？",
        havePlace: !1,
        jump: !1,
        fxdjflag: "",
        reportflag: "",
        tap: !0,
        count: 0,
        name: "",
        identity: "",
        pdfUrl: "https://wyj-1301318828.file.myqcloud.com/doc/jkm_guide.pdf",
        imgSrc: "https://wyj-1301318828.file.myqcloud.com/image/jmk/jkm_guide_icon.png",
        fileName: "帮助指引.pdf",
        cityName: s.cityName,
        isShowBg: !0,
        visible: !1,
        value: s.cityName,
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
        qrcode: "",
        this_province: !1
    },
    navigateToWebview: function(e) {
        var a = e.currentTarget.dataset.url;
        d(a);
    },
    onShareAppMessage: function() {},
    gogogo: function() {
        wx.navigateTo({
            url: "/pages/family-add/family-add?uid=" + this.data.userInfo.uid
        });
    },
    gogo: function() {
        var e = this;
        n({
            url: "/hbjkm-traffic-gate/trafficgate/query/" + this.data.userInfo.uid,
            method: "POST"
        }).then(function(a) {
            wx.getLaunchOptionsSync(), a.data && a.data.id ? e.setData({
                havePlace: !0,
                gateName: a.data.gateName,
                carNo: a.data.carNo,
                gateType: a.data.gateType,
                namere: a.data.name,
                phonere: a.data.phone,
                idre: a.data.id,
                addressre: a.data.address
            }) : e.setData({
                havePlace: !1
            }), e.data.havePlace ? wx.navigateTo({
                url: "/pages/my-placeCode/my-placeCode?gateName=" + e.data.gateName + "&carNo=" + e.data.carNo + "&gateType=" + e.data.gateType + "&name=" + e.data.namere + "&phone=" + e.data.phonere + "&id=" + e.data.idre + "&address=" + e.data.addressre
            }) : wx.navigateTo({
                url: "/pages/place-code/place-code"
            });
        });
    },
    goLink: function() {
        this.data.link && wx.navigateTo({
            url: "../link/index"
        });
    },
    onLoad: function(e) {
        var a = this;
        console.log(e, "options"), this.setData({
            id: e.id
        }), u.getCacheInfo().then(function(e) {
            console.log(e, "--"), a.setData({
                cacheFlag: e
            });
        }), i.request({
            url: s.cdnDomain + "/hbjkm/gdt.json?t=" + Date.now()
        }).then(function(e) {
            a.setData({
                notice: e.data.name,
                link: e.data.link
            });
        }), wx.setStorageSync("flag", !0);
        var t = decodeURIComponent(e.scene);
        if (console.log("---------------qrcode---------------------"), e.q && "" != e.q) {
            var n = decodeURIComponent(e.q);
            console.log(n), t = n.replace("https://sjzhe.tgovcloud.com/qrcode/traffic/?QR=", ""), 
            console.log(t);
        }
        this.setData({
            gateId: t
        });
    },
    onShow: function(e) {
        console.log(this.userInfo);
        var a = this;
        this.time(), r.fetchUserInfo().then(function(e) {
            r.checkAuth() && (a.setData({
                userInfo: e
            }), a.realnames());
        });
    },
    inoculationDetail: function(e) {
        wx.navigateTo({
            url: "/pages/inoculation/inoculation?codeNo=" + this.data.identity + "&name=" + this.data.name
        });
    },
    detectionmechanism: function(e) {
        wx.navigateTo({
            url: "/pages/detectionmechanism/detectionmechanism?codeNo=" + this.data.identity + "&name=" + this.data.name
        });
    },
    time: function() {
        var e = this;
        setInterval(function() {
            var a = Date.parse(new Date()), t = 1e3 * (a /= 1e3), n = new Date(t), o = n.getFullYear() + "-" + (n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1) + "-" + (n.getDate() < 10 ? "0" + n.getDate() : n.getDate()) + " " + (n.getHours() < 10 ? "0" + n.getHours() : n.getHours()) + ":" + (n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes()) + ":" + (n.getSeconds() < 10 ? "0" + n.getSeconds() : n.getSeconds());
            e.setData({
                now: o
            });
        }, 1e3);
    },
    placeCode: function() {
        var e = this, a = this;
        n({
            url: "/hbjkm-traffic-gate/trafficgate/querybyid/" + this.data.gateId,
            method: "POST",
            data: {}
        }).then(function(t) {
            console.log(t, "ffffffffffffffffffff"), null != t.data ? n({
                url: "/hbjkm/userHealth/info",
                method: "POST",
                data: {}
            }).then(function(t) {
                if ("00" == t.data.fxdj) a.setData({
                    issafe: 1,
                    uuid: t.data.uuid
                }); else if (a.setData({
                    issafe: 0,
                    warmMsgs: t.data.warmMsgs,
                    uuid: t.data.uuid
                }), e.data.warmMsgs[0] && "{" == e.data.warmMsgs[0].split("")[0]) {
                    var o = e.data.warmMsgs[0].split("")[1];
                    i.request({
                        url: s.cdnDomain + "/hbjkm/flts/" + o + ".json"
                    }).then(function(a) {
                        e.setData({
                            this_province: !0,
                            warmMsgs: a.data.tsxx,
                            warmprompt: a.data.wxtx
                        });
                    });
                }
                n({
                    url: "/hbjkm-traffic-gate/passrecord/save/" + e.data.userInfo.uid + "/" + e.data.uuid + "/" + e.data.gateId,
                    method: "POST",
                    data: {}
                }).then(function(e) {}), e.setData({
                    gateId: ""
                });
            }) : (wx.showModal({
                title: "提示",
                content: "场所码无效",
                showCancel: !1,
                success: function(e) {
                    e.confirm && wx.switchTab({
                        url: "/pages/index/index"
                    });
                }
            }), e.setData({
                gateId: ""
            }));
        });
    },
    drawimg: function(e, a, t) {
        var n = "#000";
        "00" == t ? n = "#39b778" : "01" == t ? n = "#f5d000" : "10" == t && (n = "#d8242b"), 
        this.audio(t);
        var o = n, i = a, s = "../../images/logo.png";
        this.data.severalvaccine && 0 !== this.data.severalvaccine.num && (s = "../../images/logo1.png");
        var c = wx.createCanvasContext("myQrcode"), r = new Int8Array(wx.base64ToArrayBuffer(e)), d = 3 * (i + 10);
        c.white = c.height = d;
        for (var u = i, l = Math.ceil(u / 8), h = 0; h < u; h++) for (var g = h * l, f = 0; f < u; f++) {
            var m = 0 == (r[g + parseInt(f / 8, 10)] & 1 << 7 - f % 8) ? "#ffffff" : o;
            c.setFillStyle(m), c.fillRect(3 * (f + 5), 3 * (h + 5), 3, 3);
        }
        if (s) {
            var p = d, w = d;
            c.drawImage(s, (p - 48) / 2, (w - 48) / 2);
        }
        c.draw();
    },
    re: function() {
        wx.showLoading({
            title: "加载中"
        }), wx.reLaunch({
            url: "/pages/index/index"
        }), wx.hideLoading();
    },
    onTapFeedback: function() {
        l.goFeedback(0, this.data.userInfo.uid);
    },
    onPageScroll: function(e) {
        var a = parseInt(e.scrollTop) < 80;
        this.setData({
            isShowBg: a
        });
    },
    go: function(e) {
        console.log("go");
        var a = this;
        if (a.data.tap && (this.setData({
            tap: !1
        }), setTimeout(function() {
            a.setData({
                tap: !0
            });
        }, 2e3), r.checkAuth())) if (e.currentTarget.dataset.real) u.realnameUser(this.data.userInfo.uid).then(function(t) {
            t.realnameAut && a.setData({
                name: t.realnameAut.name,
                identity: t.realnameAut.identity
            }), 0 == t.isAut ? wx.showModal({
                title: "温馨提示",
                content: "请先实名认证",
                confirmColor: "#1890ff",
                showCancel: !1,
                confirmText: "去认证",
                success: function(a) {
                    a.cancel || wx.navigateTo({
                        url: "/packages/health-code/pages/realname-submit/index?path=" + e.currentTarget.dataset.url
                    });
                }
            }) : wx.scanCode({
                success: function(a) {
                    n({
                        url: "/hbjkm/code/validateCode",
                        method: "POST",
                        data: {
                            qrCode: a.result
                        }
                    }).then(function(a) {
                        wx.navigateTo({
                            url: e.currentTarget.dataset.url + "?bizExtData=" + a.data.bizExtData
                        });
                    });
                }
            });
        }); else {
            var t = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: c.urlJoinParams(e.currentTarget.dataset.url, {
                    id: t
                })
            });
        }
    },
    onTapAccess: function(e) {
        var a = this, t = this;
        if (t.data.tap && (this.setData({
            tap: !1
        }), setTimeout(function() {
            t.setData({
                tap: !0
            });
        }, 2e3), r.checkAuth())) if (e.currentTarget.dataset.real) u.realnameUser(this.data.userInfo.uid).then(function(n) {
            n.realnameAut && t.setData({
                name: n.realnameAut.name,
                identity: n.realnameAut.identity
            }), 0 == n.isAut ? wx.showModal({
                title: "温馨提示",
                content: "请先实名认证",
                confirmColor: "#1890ff",
                showCancel: !1,
                confirmText: "去认证",
                success: function(a) {
                    a.cancel || wx.navigateTo({
                        url: "/packages/health-code/pages/realname-submit/index?path=" + e.currentTarget.dataset.url
                    });
                }
            }) : wx.navigateTo({
                url: e.currentTarget.dataset.url + "?name=" + encodeURIComponent(n.realnameAut.name) + "&phone=" + n.realnameAut.phone + "&identity=" + n.realnameAut.identity + "&uid=" + a.data.userInfo.uid
            });
        }); else {
            var n = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: c.urlJoinParams(e.currentTarget.dataset.url, {
                    id: n
                })
            });
        }
    },
    gotoYoungOld: function() {
        wx.navigateTo({
            url: "../health-young-old/index"
        });
    },
    goAnswer: function() {
        wx.navigateTo({
            url: "../answers/index"
        });
    },
    realnames: function() {
        var e = this, a = this;
        u.realnameUser(this.data.userInfo.uid).then(function(t) {
            a.setData({
                srcc: "https://xc.caict.ac.cn/?code=123&phone=" + e.data.userInfo.phone
            }), t.realnameAut && a.setData({
                name: t.realnameAut.name,
                identity: t.realnameAut.identity
            }), null == t.realnameAut ? wx.showModal({
                title: "温馨提示",
                content: "请先实名认证",
                confirmColor: "#1890ff",
                showCancel: !1,
                confirmText: "去认证",
                success: function(e) {
                    e.cancel || wx.navigateTo({
                        url: "/packages/health-code/pages/realname-submit/index"
                    });
                }
            }) : (wx.setStorageSync({
                name: t.realnameAut.name,
                identity: t.realnameAut.identity
            }), e.setData({
                name: t.realnameAut.name,
                identity: t.realnameAut.identity
            }), e.data.gateId && "undefined" != e.data.gateId && "" != e.data.gateId && e.placeCode(), 
            wx.getStorageSync("flag") && (n({
                url: "/hbjkm/ymjzxq/infoxqNum",
                method: "POST",
                timeout: 2e5
            }).then(function(a) {
                var t = Date.parse(new Date()), n = 1e3 * (t /= 1e3), o = new Date(n), i = o.getFullYear() + "-" + (o.getMonth() + 1 < 10 ? "0" + (o.getMonth() + 1) : o.getMonth() + 1) + "-" + (o.getDate() < 10 ? "0" + o.getDate() : o.getDate()), s = Date.parse(new Date(a.data.lastTime.split(/\s+/)[0])), c = Date.parse(new Date(i)), r = parseInt((c - s) / 864e5);
                e.setData({
                    severalvaccine: a.data,
                    interval_day: r
                });
            }).catch(function(e) {
                console.log(e);
            }), wx.setStorageSync("flag", !1), n({
                url: "/hbjkm/userHealth/info",
                method: "POST",
                timeout: 2e5
            }).then(function(t) {
                var c = null, r = JSON.parse(t.data.content);
                if (0 != r.data.yqReports.length) {
                    var d = r.data.yqReports[0].date, u = new Date();
                    console.log("--------" + o(d).format("YYYY-MM-DD")), console.log("--------" + o(u).format("YYYY-MM-DD")), 
                    c = o(d).format("YYYY-MM-DD") == o(u).format("YYYY-MM-DD") ? 0 : 1;
                } else c = 15;
                if (console.log("------------day-------" + c), a.setData({
                    warmMsgs: t.data.warmMsgs
                }), e.data.warmMsgs[0] && "{" == e.data.warmMsgs[0].split("")[0]) {
                    var l = e.data.warmMsgs[0].split("")[1];
                    i.request({
                        url: s.cdnDomain + "/hbjkm/flts/" + l + ".json"
                    }).then(function(a) {
                        e.setData({
                            this_province: !0,
                            warmMsgs: a.data.tsxx,
                            warmprompt: a.data.wxtx
                        });
                    });
                }
                console.log(t.data.hasWarm), "未见异常" == t.data.hasWarm ? a.setData({
                    flag: 1
                }) : a.setData({
                    flag: 0
                }), 0 != t.errcode && wx.setStorageSync("flag", !0), a.setData({
                    hsjc: t.data.hsjc ? t.data.hsjc.hsjcjg : "",
                    hsjcjgmc: t.data.hsjc ? t.data.hsjc.hsjcjgmc : "",
                    ktjc: t.data.ktjc ? t.data.ktjc.ktjcjg : "",
                    hsjcsj: t.data.hsjc ? t.data.hsjc.hsjcsj : "",
                    ktjcsj: t.data.ktjc ? t.data.ktjc.ktjcsj : ""
                }), t.data.fxdj ? a.setData({
                    fxdjflag: t.data.fxdj
                }) : a.setData({
                    fxdjflag: 20
                }), n({
                    url: "/hbjkm/code/createCode",
                    method: "POST"
                }).then(function(t) {
                    if (console.log("++++++++++++++"), wx.setStorageSync("flag", !0), 0 != t.errcode) ; else if (e.data.fxdjflag) {
                        var o = t.data.imgStream, i = t.data.width;
                        e.setData({
                            canimg: o,
                            canwi: i
                        }), console.log(wx.getLaunchOptionsSync().scene), "1001" == wx.getLaunchOptionsSync().scene || "1006" == wx.getLaunchOptionsSync().scene || "1005" == wx.getLaunchOptionsSync().scene || "1089" == wx.getLaunchOptionsSync().scene ? n({
                            url: "/hbjkm/dzjkm/getFlag",
                            method: "POST",
                            data: {}
                        }).then(function(t) {
                            t.data.flag ? (a.setData({
                                newflag: !1
                            }), e.drawimg(o, parseInt(i), e.data.fxdjflag)) : a.setData({
                                newflag: !0
                            });
                        }) : e.drawimg(o, parseInt(i), e.data.fxdjflag);
                    }
                }).catch(function(e) {
                    wx.setStorageSync("flag", !0);
                });
            }).catch(function(e) {
                wx.setStorageSync("flag", !0), a.setData({
                    fxdjflag: 20
                });
            })), n({
                url: "/hbjkm/userHealth/reportNum",
                method: "POST"
            }).then(function(e) {
                "0" == e.data.count ? a.setData({
                    reportflag: ""
                }) : a.setData({
                    reportflag: "今日已打卡"
                });
            }));
        });
    },
    toMiniProgramSuccess: function() {},
    toMiniProgramFail: function(e) {},
    getAnitEpidemicAllianceData: function() {},
    on_refresh: function() {
        var e = this;
        n({
            url: "/hbjkm/ymjzxq/infoxq",
            method: "POST"
        }).then(function(a) {
            if (console.log(a), n({
                url: "/hbjkm/ymjzxq/infoxqNum",
                method: "POST",
                timeout: 2e5
            }).then(function(a) {
                var t = Date.parse(new Date()), n = 1e3 * (t /= 1e3), o = new Date(n), i = o.getFullYear() + "-" + (o.getMonth() + 1 < 10 ? "0" + (o.getMonth() + 1) : o.getMonth() + 1) + "-" + (o.getDate() < 10 ? "0" + o.getDate() : o.getDate()), s = Date.parse(new Date(a.data.lastTime.split(/\s+/)[0])), c = Date.parse(new Date(i)), r = parseInt((c - s) / 864e5);
                e.setData({
                    severalvaccine: a.data,
                    interval_day: r
                });
            }).catch(function(e) {
                console.log(e);
            }), a.data) a.data.map(function(e) {
                "1" == e.vaccinateorders && (e.vaccinateorders = "一"), "2" == e.vaccinateorders && (e.vaccinateorders = "二"), 
                "3" == e.vaccinateorders && (e.vaccinateorders = "三");
            });
            e.setData({
                inoculationList: a.data
            });
        });
    },
    gogogogo: function() {
        this.data.userInfo.uid ? wx.navigateToMiniProgram({
            appId: "wxdde89133f540099d",
            envVersion: "release",
            path: "pages/authorize/index?healthCodeId=" + this.data.userInfo.uid + "&phone=" + this.data.userInfo.phone,
            success: function(e) {}
        }) : wx.showModal({
            title: "温馨提示",
            content: "请先实名认证",
            confirmColor: "#1890ff",
            showCancel: !1,
            confirmText: "去认证",
            success: function(a) {
                a.cancel || wx.navigateTo({
                    url: "/packages/health-code/pages/realname-submit/index?path=" + e.currentTarget.dataset.url
                });
            }
        });
    },
    gogogogoo: function() {
        this.setData({
            newflag: !1
        }), this.data.userInfo.uid ? wx.navigateToMiniProgram({
            appId: "wxdde89133f540099d",
            envVersion: "release",
            path: "pages/authorize/index?healthCodeId=" + this.data.userInfo.uid + "&phone=" + this.data.userInfo.phone,
            success: function(e) {}
        }) : wx.showModal({
            title: "温馨提示",
            content: "请先实名认证",
            confirmColor: "#1890ff",
            showCancel: !1,
            confirmText: "去认证",
            success: function(a) {
                a.cancel || wx.navigateTo({
                    url: "/packages/health-code/pages/realname-submit/index?path=" + e.currentTarget.dataset.url
                });
            }
        });
    },
    gogogogogo: function() {
        this.data.userInfo.phone ? wx.reLaunch({
            url: "../Traveler/Traveler?phone=" + this.data.userInfo.phone
        }) : wx.showModal({
            title: "温馨提示",
            content: "请先实名认证",
            confirmColor: "#1890ff",
            showCancel: !1,
            confirmText: "去认证",
            success: function(a) {
                a.cancel || wx.navigateTo({
                    url: "/packages/health-code/pages/realname-submit/index?path=" + e.currentTarget.dataset.url
                });
            }
        });
    },
    newmini: function() {
        console.log("==="), wx.navigateToMiniProgram({
            appId: "wx8f446acf8c4a85f5",
            envVersion: "release"
        });
    },
    closedark: function() {
        var e = this;
        this.setData({
            newflag: !1
        }), setTimeout(function() {
            e.drawimg(e.data.canimg, parseInt(e.data.canwi), e.data.fxdjflag);
        }, 2e3);
    },
    authSucess: function() {
        this.setData({
            newflag: !1
        }), requirePlugin("healthCard").login(function(e, a) {
            n({
                url: "/hbjkm/dzjkm/upgrade?wechatCode=" + a.result.wechatCode,
                method: "POST"
            }).then(function(e) {});
        }, {
            wechatcode: !0,
            healthcode: !0
        });
    },
    audio: function(e) {
        var a = wx.createInnerAudioContext();
        a.autoplay = !0, a.volume = 1, a.src = "https://wyy-1253323744.file.myqcloud.com/hbjkm/tsy/tsy_" + e + ".mp3", 
        a.onPlay(function() {
            console.log("开始播放");
        }), a.onError(function(e) {
            console.log(e);
        });
    },
    hyClick: function() {
        this.setData({
            phone: this.data.userInfo.phone.substring(0, 3) + "****" + this.data.userInfo.phone.substring(7),
            hiddenmodalput: !this.data.hiddenmodalput
        });
    },
    getVerificationCode: function() {
        this.getCode(), this.setData({
            disabled: !0
        });
    },
    getCode: function(e) {
        var a = this, t = a.data.currentTime;
        u.sendMessage().then(function(e) {
            console.log(e, "-------获取验证码");
        }).catch(function(e) {}), h = setInterval(function() {
            t--, a.setData({
                time: "重新获取(" + t + "s)"
            }), t <= 0 && (clearInterval(h), a.setData({
                time: "重新发送",
                currentTime: 61,
                disabled: !1
            }));
        }, 1e3);
    },
    handleInputChange: function(e) {
        console.log(e, "---");
        var a = e.detail.value;
        "" !== a ? this.setData({
            activeHy: !0
        }) : this.setData({
            activeHy: !1
        }), this.setData({
            code: a
        });
    },
    cancel: function() {
        this.setData({
            hiddenmodalput: !0,
            code: ""
        });
    },
    checkFn: function(e) {
        this.setData({
            check: !this.data.check
        });
    },
    confirm: function() {
        var e = this;
        if (console.log(this.data.check), this.data.check) {
            var a = this.data.code;
            u.getXckInfo(a).then(function(a) {
                "99" == a ? wx.showToast({
                    title: "核验失败",
                    icon: "none",
                    duration: 2e3
                }) : wx.showToast({
                    title: "核验成功",
                    icon: "none",
                    duration: 2e3
                }), e.setData({
                    cacheFlag: a,
                    code: ""
                }), console.log(a, "=====");
            }).catch(function(e) {}), this.setData({
                hiddenmodalput: !0
            });
        } else wx.showToast({
            title: "请勾选同意",
            icon: "none",
            duration: 2e3
        });
    }
});