function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function t() {
    return {
        openid: wx.getStorageSync("wx-openid"),
        sessionid: wx.getStorageSync("wx-sessionid")
    };
}

function a(e) {
    return e ? l(e).format("YYYY-MM-DD") : e;
}

var n, i = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
}, o = getApp(), s = o.Anim, r = o.Event, c = o.config, l = o.dayjs, u = o.userStore, d = require("../../../utils/util").chooseLocation, h = require("../../../services/report"), g = require("../../../services/region"), m = require("../../../services/health-code.js"), f = {
    username: "",
    reportName: "",
    phone: "",
    report: "",
    pic: [],
    pictrues: [],
    street: "",
    addr: "",
    orgName: "",
    identify: ""
}, p = {
    reportName: [ {
        type: "required",
        message: "请输入报事名称"
    }, {
        type: "titleLength",
        message: "输入内容小于 20 个字"
    } ],
    username: [ {
        type: "required",
        message: "请输入报事人"
    } ],
    report: [ {
        type: "required",
        message: "请输入报事内容"
    }, {
        type: "contentLength",
        message: "输入内容需大于 10 个字"
    } ]
};

s.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        pdfUrl: "https://imgcache.gzonline.gov.cn/doc/Report_Clues_Instructions.pdf",
        imgSrc: "/images/report/caozuozhiyin.png",
        fileName: "Report Clues Instructions.pdf",
        tipsEvent: "form__tips",
        cityName: c.cityName,
        headers: {},
        activeTab: "self",
        showVehicleKeyboard: !1,
        showHBCityPicker: !1,
        showRegionPicker: !1,
        uploadUrl: c.domain + "/report/uploadfile",
        today: l().format("YYYY-MM-DD"),
        startDay: l().subtract(130, "year").format("YYYY-MM-DD"),
        halfMonthAgo: l().subtract(15, "day").format("YYYY-MM-DD"),
        identityInputType: "text",
        regionRange: [],
        sexRange: [ {
            name: "男",
            value: "男"
        }, {
            name: "女",
            value: "女"
        }, {
            name: "未知",
            value: "未知"
        } ],
        cardTypeRange: [ {
            name: "身份证",
            value: 1
        }, {
            name: "回乡证",
            value: 2
        }, {
            name: "护照",
            value: 3
        }, {
            name: "军官证",
            value: 4
        }, {
            name: "台胞证",
            value: 5
        }, {
            name: "港澳居民居住证",
            value: 6
        }, {
            name: "台湾居民居住证",
            value: 7
        } ],
        personTypeItems: [ {
            name: "未返穗本地常住居民",
            value: 1,
            desc: "在2020-1-1之后一直没返穗的本地常住居民。"
        }, {
            name: "持续在穗人员",
            value: 2,
            desc: "于2020-1-1之前到目前一直在穗人员。"
        }, {
            name: "一月初返穗居民",
            value: 3,
            desc: "在2020-1-1至2020-1-15间返穗本地常住居民。"
        }, {
            name: "一月初来穗人员",
            value: 4,
            desc: "在2020-1-1至2020-1-15间来穗外地临时人员。"
        }, {
            name: "一月中返穗居民",
            value: 5,
            desc: "于2020-1-15后返穗本地常住居民。"
        }, {
            name: "一月中来穗人员",
            value: 6,
            desc: "于2020-1-15后来穗外地临时人员。"
        }, {
            name: "居家医学观察人员 ",
            value: 11
        }, {
            name: "集中医学观察人员 ",
            value: 12
        } ],
        symptomItems: [ {
            name: "自觉正常",
            value: 1
        }, {
            name: "发热",
            value: 2
        }, {
            name: "干咳",
            value: 3
        }, {
            name: "乏力",
            value: 4
        }, {
            name: "腹泻",
            value: 5
        }, {
            name: "感冒",
            value: 6
        }, {
            name: "头疼头晕",
            value: 7
        } ],
        agree: !1,
        selfForm: (n = {
            regionData: [],
            username: "",
            gender: "",
            identity: "",
            identityType: "",
            hubeiLivingCity: "",
            hubeiLivingCityCode: "",
            personType: "",
            recentInHubei: !1,
            phone: "",
            clueVehicle: "",
            birthday: "",
            symptomDscr: "",
            symptoms: [],
            addr: "",
            street: "",
            clueSupplier: "",
            clueSupplierPhone: ""
        }, e(n, "clueVehicle", ""), e(n, "socialContact", ""), e(n, "socialContact1", ""), 
        e(n, "socialContact2", ""), e(n, "socialContact3", ""), e(n, "socialContact4", ""), 
        e(n, "returnDate", ""), e(n, "contactDateRecent", ""), e(n, "quasiReturnDate", ""), 
        n),
        selfFormRules: {
            clueSupplier: [ {
                type: "required",
                message: "请输入您的姓名"
            }, {
                type: "usernameLength",
                message: "姓名不能超过50个字符"
            } ],
            username: [ {
                type: "usernameLength",
                message: "姓名不能超过50个字符"
            } ],
            gender: [ {
                type: "required",
                message: "请选择性别"
            } ],
            phone: [ {
                type: "mobile",
                message: "请输入正确的手机号码"
            } ],
            clueVehicle: [ {
                type: "clueVehicleLength",
                message: "车牌号码长度必须少于 8"
            }, {
                type: "checkAnyOne",
                message: "联系电话，关联车牌，居住地址，三者至少填一个"
            }, {
                type: "carId",
                message: "请输入正确的车牌号"
            } ],
            symptomDscr: [ {
                type: "required",
                message: "请详细描述涉事人相关信息"
            }, {
                type: "descLength",
                message: "描述信息长度不少于5"
            } ]
        },
        companyForm: i({}, f),
        companyFormRules: i({}, p),
        validateType: {
            clueVehicleLength: function(e) {
                return console.log("clueVehicleLength", e), !e || e && e.length <= 8;
            },
            usernameLength: function(e) {
                return !e || e.length < 50;
            },
            contentLength: function(e) {
                return e.length > 10;
            },
            titleLength: function(e) {
                return e.length <= 20;
            },
            descLength: function(e) {
                return e.length >= 5;
            },
            checkAnyOne: function(e, t) {
                return !!(t.phone || t.street || t.clueVehicle);
            }
        }
    },
    watch: {
        "selfForm.identityType": function(e) {
            var t = this.data.selfFormRules || [], a = "text";
            switch (parseInt(e)) {
              case 1:
                t.identity[1] = {
                    type: "id",
                    message: "请输入正确的身份证号码"
                }, a = "idcard";
                break;

              case 5:
                t.identity[1] = {
                    type: "twCome",
                    message: "请输入正确的证件号码"
                };
                break;

              case 6:
              case 7:
                t.identity[1] = {
                    type: "hmHid",
                    message: "请输入正确的证件号码"
                };
                break;

              default:
                t.identity = t.identity.slice(0, 1);
            }
            this.setData({
                selfFormRules: t,
                identityInputType: a
            });
        },
        "selfForm.recentInHubei": function(e) {
            var t = this.data.selfFormRules || [];
            e ? (console.log("动态规则", t), t.hubeiLivingCity = [ {
                type: "required",
                message: "请选择湖北的城市"
            } ]) : delete t.hubeiLivingCity, this.setData({
                selfFormRules: t
            });
        },
        showVehicleKeyboard: function(e) {
            console.log("键盘事件", e);
        }
    },
    onLoad: function(e) {
        e.target && this.setData({
            activeTab: e.target
        });
    },
    onShow: function() {
        var e = this, a = this;
        u.fetchUserInfo().then(function(n) {
            n.uid && m.realnameUser(n.uid).then(function(n) {
                0 === n.isAut ? wx.showModal({
                    title: "未实名",
                    content: "是否需要实名认证？",
                    confirmColor: "#1890ff",
                    success: function(e) {
                        e.confirm ? wx.navigateTo({
                            url: "/packages/health-code/pages/realname-submit/index?path=/pages/report/inform/index"
                        }) : e.cancel && wx.reLaunch({
                            url: "/pages/index/index"
                        });
                    }
                }) : (wx.showModal({
                    title: "温馨提示",
                    content: "感谢您提供疫情线索，请如实填报，尽量提供全面详细信息，以便工作人员核实情况",
                    confirmText: "立即上报",
                    success: function(e) {
                        e.confirm ? (console.log("立即上报"), a.getRegionData()) : e.cancel && (console.log("取消"), 
                        wx.reLaunch({
                            url: "/pages/index/index"
                        }));
                    }
                }), e.setData({
                    headers: t()
                }));
            });
        });
    },
    onShareAppMessage: function() {},
    handleTabChange: function(e) {
        this.setData({
            activeTab: e.detail.value.key
        });
    },
    handleOpenVehicleKeyboard: function(e) {},
    handleFormChange: function(t) {
        var a = t.target, n = a.dataset, i = a.id;
        this.setData(e({}, n.form + "." + i, t.detail.value));
    },
    bindSelectData: function(e) {
        this.setData({
            "selfForm.addr": e.detail.address
        });
    },
    handlePlateChange: function(e) {
        console.log(e), this.setData({
            "selfForm.clueVehicle": e.detail.value
        });
    },
    handlePlateClose: function(e) {
        console.log("解决texteare内容穿透问题", e), this.setData({
            showVehicleKeyboard: e.detail
        });
    },
    handleGetLocation: function(t) {
        var a = this;
        d().then(function(n) {
            var i;
            console.log(n);
            var o = t.target, s = o.dataset, r = o.id;
            a.setData((i = {}, e(i, s.form + "." + r, n.address), e(i, s.form + ".lng", n.longitude), 
            e(i, s.form + ".lat", n.latitude), i));
        });
    },
    handleHBPickerChange: function(e) {
        console.log(e), this.setData({
            "selfForm.hubeiLivingCity": e.detail.value[1].name,
            "selfForm.hubeiLivingCityCode": e.detail.value[1].code
        });
    },
    handleHBPickerOpen: function() {
        this.setData({
            showHBCityPicker: !0
        });
    },
    handleHBPickerClose: function() {
        this.setData({
            showHBCityPicker: !1
        });
    },
    getRegionData: function() {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        wx.showLoading(), g.getRegionData(t.regionCode, t.regionList).then(function(t) {
            var n = e.data.regionRange.slice(0, a);
            n[a] = {
                title: 0 === a ? "区" : 1 === a ? "街道" : "社区",
                data: t.map(function(e) {
                    return {
                        name: e.regionName,
                        value: {
                            regionName: e.regionName,
                            regionCode: e.regionCode
                        },
                        regionList: e.regionList
                    };
                })
            }, e.setData({
                regionRange: n
            }, function() {
                return wx.hideLoading();
            });
        }).catch(function(e) {
            return wx.hideLoading();
        });
    },
    handleOpenRegion: function(e) {
        this.regionPickerForm = e.target.dataset.form, this.setData({
            showRegionPicker: !0,
            regionRange: this.data.regionRange.slice(0, 1)
        });
    },
    handleRegionChange: function(t) {
        var a = t.detail.value;
        if (3 === a.length) {
            var n;
            this.setData((n = {}, e(n, this.regionPickerForm + ".regionData", a), e(n, this.regionPickerForm + ".street", a.map(function(e) {
                return e.regionName;
            }).join("")), n));
        }
    },
    handleRegionColumnChange: function(e) {
        var t = e.detail, a = t.item, n = t.index;
        2 === n ? this.handleRegionClose() : this.getRegionData(a, n + 1);
    },
    handleRegionClose: function() {
        this.setData({
            showRegionPicker: !1
        });
    },
    handleAgreeChange: function() {
        this.setData({
            agree: !this.data.agree
        });
    },
    handleSocialContact1Change: function(e) {
        this.setData({
            "selfForm.socialContact1": e.detail.value ? "11" : ""
        });
    },
    handleSocialContact2Change: function(e) {
        this.setData({
            "selfForm.socialContact2": e.detail.value ? "12" : ""
        });
    },
    handleSocialContact3Change: function(e) {
        this.setData({
            "selfForm.socialContact3": e.detail.value ? "13" : ""
        });
    },
    handleSocialContact4Change: function(e) {
        this.setData({
            "selfForm.socialContact4": e.detail.value ? "14" : ""
        });
    },
    handleSelfSubmit: function(e) {
        if (e.detail.validStatus) {
            var t = i({}, e.detail.value);
            if (!(t.socialContact1 || t.socialContact2 || t.socialContact3 || t.socialContact4)) return r.dispatch(this.data.tipsEvent, "请选择涉事人类型");
            t.recentInHubei = t.recentInHubei ? 1 : 0, t.clueSupplierPhone = this.data.userInfo.phone;
            var n = t.regionData;
            if (n && (t.city = c.cityName, t.cityCode = c.cityCode, n.length > 0 && (t.area = n[0].regionName, 
            t.areaCode = n[0].regionCode), n.length > 1 && (t.street = n[1].regionName, t.streetCode = n[1].regionCode), 
            n.length > 2 && (t.community = n[2].regionName, t.communityCode = n[2].regionCode)), 
            t.clueType = 1, t.birthday = a(t.birthday), t.returnDate = a(t.returnDate), t.contactDateRecent = a(t.contactDateRecent), 
            t.quasiReturnDate = a(t.quasiReturnDate), t.socialContact1 || t.socialContact2 || t.socialContact3 || t.socialContact4) {
                var o = [];
                [ t.socialContact1, t.socialContact2, t.socialContact3, t.socialContact4 ].map(function(e) {
                    e && o.push(e);
                }), t.socialContact = o.join(","), delete t.socialContact1, delete t.socialContact2, 
                delete t.socialContact3, delete t.socialContact4;
            }
            delete t.regionData, wx.showLoading(), h.nCovSave(t).then(function(e) {
                wx.hideLoading(), wx.navigateTo({
                    url: "../msg/index?source=report"
                });
            }).catch(function() {
                return wx.hideLoading();
            });
        }
    }
});