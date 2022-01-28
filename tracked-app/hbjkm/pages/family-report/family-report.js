function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

function a() {
    return {
        openid: wx.getStorageSync("wx-openid"),
        sessionid: wx.getStorageSync("wx-sessionid")
    };
}

function t(e) {
    return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e);
}

function n() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", a = e.length, t = "";
    return 15 === a ? t = "19".concat(e.substr(6, 6)) : 18 === a && (t = e.substr(6, 8)), 
    t;
}

function i() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", a = e.length, t = "";
    return 15 == a ? t = parseInt(e.substr(14, 1)) % 2 == 1 ? "男" : "女" : a >= 17 && (t = parseInt(e.substr(16, 1)) % 2 == 1 ? "男" : "女"), 
    t;
}

var o, s = getApp(), r = s.Anim, m = (s.Event, s.resetTab), l = s.config, u = s.dayjs, d = s.request, c = s.requestHb, f = (s.systemInfo, 
s.wxp), g = require("../../utils/util").chooseLocation, h = (require("../../services/report"), 
require("../../services/region"), require("../../services/map.js"), [ {
    name: "北京",
    ename: "beijing"
}, {
    name: "天津",
    ename: "tianjin"
}, {
    name: "上海",
    ename: "shanghai"
}, {
    name: "重庆",
    ename: "chongqing"
}, {
    name: "中国香港",
    ename: "xianggang"
}, {
    name: "中国澳门",
    ename: "aomen"
}, {
    name: "河北",
    ename: "hebei"
}, {
    name: "山西",
    ename: "shanxi"
}, {
    name: "内蒙古",
    ename: "neimenggu"
}, {
    name: "辽宁",
    ename: "liaoning"
}, {
    name: "吉林",
    ename: "jilin"
}, {
    name: "黑龙江",
    ename: "heilongjiang"
}, {
    name: "江苏",
    ename: "jiangsu"
}, {
    name: "浙江",
    ename: "zhejiang"
}, {
    name: "安徽",
    ename: "anhui"
}, {
    name: "福建",
    ename: "fujian"
}, {
    name: "江西",
    ename: "jiangxi"
}, {
    name: "山东",
    ename: "shandong"
}, {
    name: "河南",
    ename: "henan"
}, {
    name: "湖北",
    ename: "hubei"
}, {
    name: "湖南",
    ename: "hunan"
}, {
    name: "广东",
    ename: "guangdong"
}, {
    name: "广西",
    ename: "guangxi"
}, {
    name: "海南",
    ename: "hainan"
}, {
    name: "四川",
    ename: "sichuan"
}, {
    name: "贵州",
    ename: "guizhou"
}, {
    name: "云南",
    ename: "yunnan"
}, {
    name: "西藏",
    ename: "xizang"
}, {
    name: "陕西",
    ename: "shanxi1"
}, {
    name: "甘肃",
    ename: "gansu"
}, {
    name: "青海",
    ename: "qinghai"
}, {
    name: "宁夏",
    ename: "ningxia"
}, {
    name: "新疆",
    ename: "xinjiang"
}, {
    name: "中国台湾",
    ename: "taiwan"
} ]), y = [ {
    name: "北京",
    ename: "beijing"
}, {
    name: "天津",
    ename: "tianjin"
}, {
    name: "上海",
    ename: "shanghai"
}, {
    name: "重庆",
    ename: "chongqing"
}, {
    name: "河北",
    ename: "hebei"
}, {
    name: "山西",
    ename: "shanxi"
}, {
    name: "内蒙古",
    ename: "neimenggu"
}, {
    name: "辽宁",
    ename: "liaoning"
}, {
    name: "吉林",
    ename: "jilin"
}, {
    name: "河北",
    ename: "heilongjiang"
}, {
    name: "江苏",
    ename: "jiangsu"
}, {
    name: "浙江",
    ename: "zhejiang"
}, {
    name: "安徽",
    ename: "anhui"
}, {
    name: "福建",
    ename: "fujian"
}, {
    name: "江西",
    ename: "jiangxi"
}, {
    name: "山东",
    ename: "shandong"
}, {
    name: "河南",
    ename: "henan"
}, {
    name: "湖北",
    ename: "hubei"
}, {
    name: "湖南",
    ename: "hunan"
}, {
    name: "广东",
    ename: "guangdong"
}, {
    name: "广西",
    ename: "guangxi"
}, {
    name: "海南",
    ename: "hainan"
}, {
    name: "四川",
    ename: "sichuan"
}, {
    name: "贵州",
    ename: "guizhou"
}, {
    name: "云南",
    ename: "yunnan"
}, {
    name: "西藏",
    ename: "xizang"
}, {
    name: "陕西",
    ename: "shanxi1"
}, {
    name: "甘肃",
    ename: "gansu"
}, {
    name: "青海",
    ename: "qinghai"
}, {
    name: "宁夏",
    ename: "ningxia"
}, {
    name: "新疆",
    ename: "xinjiang"
}, {
    name: "中国香港",
    ename: "xianggang"
}, {
    name: "中国澳门",
    ename: "aomen"
}, {
    name: "中国台湾",
    ename: "taiwan"
}, {
    name: "国外",
    ename: "guowai"
} ];

r.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        tapflag: !1,
        regionCodeone: "",
        areaone: "",
        cityone: "",
        agreement: [],
        reportSubmitCount: 0,
        pdfUrl: "https://wyj-1301318828.file.myqcloud.com/doc/jkm_guide.pdf",
        imgSrc: "https://wyj-1301318828.file.myqcloud.com/image/jmk/jkm_guide_icon.png",
        fileName: "帮助指引",
        currentType: "1",
        regionData: [],
        today: u().format("YYYY-MM-DD"),
        startDay: u().subtract(130, "year").format("YYYY-MM-DD"),
        halfMonthAgo: u().subtract(15, "day").format("YYYY-MM-DD"),
        cityName: l.cityName,
        headers: {},
        activeTab: "self",
        showHBCityPicker: !1,
        showRegionPicker: !1,
        uploadUrl: l.domain + "/report/uploadfile",
        identityInputType: "idcard",
        disableDetail: !0,
        provinceIncludes: [ "中国香港", "河北省" ],
        regionRange: [],
        sexRange: [ {
            name: "男",
            value: "男"
        }, {
            name: "女",
            value: "女"
        } ],
        nationRange: [ {
            name: "中国大陆",
            value: 1
        }, {
            name: "中国港澳台地区",
            value: 2
        }, {
            name: "外国",
            value: 3
        } ],
        domicilePlaceRange: [ {
            name: "河北省",
            value: 1
        }, {
            name: "湖北省",
            value: 3
        }, {
            name: "其他",
            value: 4
        } ],
        nativePlaceRange: function() {
            var e = [];
            return h.map(function(a) {
                e.push({
                    name: a.name,
                    value: a.name
                });
            }), e;
        }(),
        residentPlaceItems: function() {
            var e = [];
            return y.map(function(a) {
                e.push({
                    name: a.name,
                    value: a.name
                });
            }), e;
        }(),
        cardTypeRange: [ {
            name: "身份证",
            value: 1
        } ],
        residentFlagItems: [ {
            name: "是，在河北居住了已有半年以上",
            value: 1
        }, {
            name: "否，我是临时来河北的",
            value: 2
        } ],
        questionOneItems: [ {
            name: "是",
            value: 1
        }, {
            name: "否",
            value: 2
        } ],
        questionTwoItems: [ {
            name: "是",
            value: 1
        }, {
            name: "否",
            value: 2
        } ],
        questionThreeItems: [ {
            name: "是",
            value: 1
        }, {
            name: "否",
            value: 2
        }, {
            name: "不确定",
            value: 3
        } ],
        residentConditionItems: [ {
            name: "一直在河北3个月或以上",
            value: 1
        }, {
            name: "来或返回河北超过14日",
            value: 2
        }, {
            name: "来或返回河北不超过14日（含14日）",
            value: 3
        }, {
            name: "目前仍在外地",
            value: 4
        } ],
        agreementItems: [ {
            name: "上述信息是我本人填写，本人对信息内容的真实性和完整性负责。",
            value: 2
        } ],
        travelRegionClassItems: [ {
            name: "武汉市",
            value: 1
        }, {
            name: "湖北（不含武汉）",
            value: 2
        }, {
            name: "温州市",
            value: 6
        }, {
            name: "中国大陆其他省(自治区)市",
            value: 4
        }, {
            name: "中国港澳台地区",
            value: 3
        }, {
            name: "国外",
            value: 5
        } ],
        personTypeItems: [ {
            name: "未返河北本地常住居民",
            value: 1,
            desc: "在2020-1-1之后一直没返河北的本地常住居民。"
        }, {
            name: "持续在河北人员",
            value: 2,
            desc: "于2020-1-1之前到目前一直在河北人员。"
        }, {
            name: "一月初返河北居民",
            value: 3,
            desc: "在2020-1-1至2020-1-15间返河北本地常住居民。"
        }, {
            name: "一月初来河北人员",
            value: 4,
            desc: "在2020-1-1至2020-1-15间来河北外地临时人员。"
        }, {
            name: "一月中返河北居民",
            value: 5,
            desc: "于2020-1-15后返河北本地常住居民。"
        }, {
            name: "一月中来河北人员",
            value: 6,
            desc: "于2020-1-15后来河北外地临时人员。"
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
            name: "发热，37.3 ℃以下",
            value: 11
        }, {
            name: "发热37.3 ℃（含）以上",
            value: 12
        }, {
            name: "干咳",
            value: 13
        }, {
            name: "乏力",
            value: 14
        }, {
            name: "其他症状",
            value: 15
        } ],
        questionFourItems: [ {
            name: "没有出现症状",
            value: 1,
            disabled: !1,
            checked: !1
        }, {
            name: "感冒样症状：乏力、咳嗽、发烧、肌肉痛、头痛",
            value: 2,
            disabled: !1,
            checked: !1
        }, {
            name: "喘憋、呼吸急促",
            value: 3,
            disabled: !1,
            checked: !1
        }, {
            name: "恶心呕吐、腹泻",
            value: 4,
            disabled: !1,
            checked: !1
        }, {
            name: "心慌、胸闷",
            value: 5,
            disabled: !1,
            checked: !1
        }, {
            name: "结膜炎（红眼病样表现：眼睛涩、红、分泌物）",
            value: 6,
            disabled: !1,
            checked: !1
        }, {
            name: "其他症状",
            value: 7,
            disabled: !1,
            checked: !1
        } ],
        socialContactItems: [ {
            name: "14天内有省内外疫情发生较严重城市、地区旅居史",
            value: 1,
            desc: "包含有与省外、省内疫情发生较严重城市旅居人员的密切接触史"
        }, {
            name: "14天内与确诊患者、疑似患者和无症状感染者可能存在密切接触",
            value: 2,
            desc: "如乘搭同一公共交通工具、居住在同一楼栋单元等情况"
        } ],
        healthStateItems: [ {
            name: "正常活动",
            value: 1,
            desc: "自觉正常无不适症状"
        }, {
            name: "居家健康服务",
            value: 2,
            desc: "河北有固定住处，在家自我健康观察"
        }, {
            name: "集中健康服务",
            value: 3,
            desc: "河北无固定住处，如住酒店等实施集中健康观察"
        }, {
            name: "集中医学观察",
            value: 4,
            desc: "在医疗机构医学观察"
        } ],
        showNativePlacePicker: !1,
        selfForm: {
            myUid: "",
            username: "",
            gender: "",
            isChinese: 1,
            nativePlace: "",
            domicilePlace: "",
            phone: "",
            birthday: "",
            identity: "",
            identityType: 1,
            street: "",
            addr: "",
            residentFlag: "",
            residentCondition: "",
            returnDate: "",
            recentRegionName: "",
            travelRegionClass: "",
            socialContact: "",
            socialContact1: "",
            socialContact2: "",
            quasiReturnDate: "",
            contactDateRecent: "",
            contactDateLike: "",
            healthState: "",
            symptoms: [],
            symptomDscr: "",
            regionData: [],
            clueType: 0,
            questionOne: "",
            questionTwo: "",
            questionThree: "",
            questionFour: "",
            questionFive: ""
        },
        selfFormRules: {
            symptomDscr: [ {
                type: "symptomDscrLength",
                message: "其他症状描述不超过10个汉字"
            } ],
            username: [ {
                type: "required",
                message: "请填写姓名"
            } ],
            personType: [ {
                type: "required",
                message: "请选择人员类型"
            } ],
            phone: [ {
                type: "required",
                message: "请输入中国大陆手机号码"
            }, {
                type: "mobile",
                message: "请输入中国大陆手机号码"
            } ],
            identityType: [ {
                type: "required",
                message: "请选择证件类型"
            } ],
            identity: [ {
                type: "required",
                message: "请输入证件号码"
            }, {
                type: "id",
                message: "请输入正确的身份证号码"
            } ],
            birthday: [ {
                type: "required",
                message: "请选择正确的出生日期"
            }, {
                type: "birthdayLength",
                message: "请选择正确的出生日期"
            } ],
            street: [ {
                type: "required",
                message: "请选择居住地址"
            } ],
            addr: [ {
                type: "required",
                message: "请输入详细住址"
            } ],
            gender: [ {
                type: "required",
                message: "请选择性别"
            } ]
        },
        validateType: {
            symptomDscrLength: function(e) {
                return e.length <= 10;
            },
            contentLength: function(e) {
                return e.length > 10;
            },
            titleLength: function(e) {
                return e.length <= 20;
            },
            checkBirthday: function(e) {
                if (!birthday) return !1;
                var a = u().diff(u(e).format("YYYY-MM-DD"), "year");
                return a >= 0 && a <= 130;
            }
        }
    },
    bindSelectData: function(e) {
        this.setData({
            "selfForm.addr": e.detail.address
        });
    },
    watch: (o = {
        "selfForm.socialContact1": function(e) {
            try {
                if (e) {
                    var a = [ {
                        type: "required",
                        message: "请选择接触日期"
                    } ];
                    this.setData({
                        "selfFormRules.contactDateRecent": a
                    });
                } else this.setData({
                    "selfFormRules.contactDateRecent": ""
                });
            } catch (e) {}
        },
        "selfForm.socialContact2": function(e) {
            try {
                if (e) {
                    var a = [ {
                        type: "required",
                        message: "请选择接触日期"
                    } ];
                    this.setData({
                        "selfFormRules.contactDateLike": a
                    });
                } else this.setData({
                    "selfFormRules.contactDateLike": ""
                });
            } catch (e) {}
        },
        selfForm: function(e) {
            console.log("selfForm Data Change", e);
        },
        "selfForm.identityType": function(e) {
            var a = this.data.selfFormRules || [], t = "text";
            switch (console.error("监听函数", e), parseInt(e)) {
              case 1:
                t = "idcard", a.identity[1] = {
                    type: "id",
                    message: "请输入正确的身份证号码"
                };
                break;

              case 5:
                a.identity[1] = {
                    type: "twCome",
                    message: "请输入正确的证件号码"
                };
                break;

              case 6:
              case 7:
                a.identity[1] = {
                    type: "hmHid",
                    message: "请输入正确的证件号码"
                };
                break;

              default:
                a.identity = a.identity.slice(0, 1);
            }
            this.setData({
                identityInputType: t,
                selfFormRules: a
            });
        },
        "selfForm.symptoms": function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], a = -1 === e.indexOf("15"), t = e.slice(-1)[0], n = !1;
            if (1 != t ? e.forEach(function(a, t) {
                1 == a && (e.splice(t, 1), n = !0);
            }) : e.forEach(function(a, t) {
                1 != a && (e = [ "1" ], n = !0);
            }), 11 == t) {
                var i = e.indexOf("12");
                i > -1 && (e.splice(i, 1), n = !0);
            } else if (12 == t) {
                var o = e.indexOf("11");
                o > -1 && (e.splice(o, 1), n = !0);
            }
            n && this.setData({
                "selfForm.symptoms": e
            });
            var s = [];
            a || (s = [ {
                type: "required",
                message: "请输入其他症状"
            }, {
                type: "symptomDscrLength",
                message: "其他症状描述不超过10个汉字"
            } ]), this.setData({
                disableDetail: a,
                "selfFormRules.symptomDscr": s
            });
        },
        "selfForm.birthday": function(e) {
            try {
                if (e && u(u(e).format("YYYY-MM-DD")).isValid()) {
                    var a = n(e);
                    if (u().diff(u(e).format("YYYY-MM-DD"), "year") > 130 || a && Math.abs(u(a).format("YYYYMMDD").diff(u(e).format("YYYY-MM-DD"), "year") > 1)) {
                        var t = this.data.selfFormRules || [];
                        t.birthday.push({
                            type: "checkBirthday",
                            message: "请输入正确的出生日期"
                        }), this.setData({
                            selfFormRules: t
                        });
                    }
                }
            } catch (e) {}
        },
        "selfForm.residentCondition": function(e) {
            var a = [];
            1 !== parseInt(e) && (a = [ {
                type: "required",
                message: "请选择近一个月旅居史"
            } ]), this.setData({
                "selfFormRules.travelRegionClass": a
            });
        },
        "selfForm.healthState": function(e) {
            var a = [];
            a = [ {
                type: "required",
                message: "请选择症状"
            } ], this.setData({
                "selfFormRules.symptoms": a
            });
        }
    }, e(o, "selfForm.residentCondition", function(e) {
        var a = [];
        1 !== parseInt(e) && (a = [ {
            type: "required",
            message: "请选择近一个月旅居史"
        } ]), this.setData({
            "selfFormRules.travelRegionClass": a
        });
    }), e(o, "selfForm.socialContact", function(e) {
        console.log("selfForm.socialContact", e);
    }), o),
    computed: {
        isSelf: function() {
            return "1" == this.data.currentType;
        },
        agree: function() {
            return this.data.agreement.length >= 1;
        },
        maxReportSubmitTime: function() {
            return "1" == this.data.currentType && this.data.reportSubmitCount >= 2;
        },
        showContactDateRecent: function() {
            return this.data.selfForm.socialContact.length > 0 && this.data.selfForm.socialContact.indexOf("1") > -1;
        },
        showContactDateLike: function() {
            return this.data.selfForm.socialContact.length > 0 && this.data.selfForm.socialContact.indexOf("2") > -1;
        }
    },
    onLoad: function(t) {
        var n, i = this;
        if (console.log(t), this.setData((n = {
            familyid: t.familyid,
            familyidentity: t.familyidentity,
            familyname: decodeURIComponent(t.familyname),
            familyRelationType: t.familyRelationType,
            familyrelation: decodeURIComponent(t.familyrelation)
        }, e(n, "selfForm.myUid", t.uid), e(n, "selfForm.username", t.name), e(n, "selfForm.phone", t.phone), 
        e(n, "selfForm.identity", t.identity), n)), this.getReportSubmitTime(t.isExpired), 
        console.error("onload options:", t), this.setData({
            currentType: t.type || "1"
        }), 1 == t.type || 2 == t.type) {
            var o = [ "健康自查上报", "上报我的健康信息", "为他人上报健康状况" ];
            console.log("title[options.type]", o[t.type]), wx.setNavigationBarTitle({
                title: o[t.type]
            }), this.setData({
                "selfForm.clueType": 2 == t.type ? 2 : 0
            });
        }
        t.target && this.setData({
            activeTab: t.target
        }), t.isFromBuy && (this.isFromBuy = parseInt(t.isFromBuy)), this.getRegionCity(), 
        this.setData({
            headers: a()
        });
        var s = null;
        s = "1" == t.type ? "fromDataKey" : "fromOtherKey", this.getStorage(s).then(function(e) {
            "1" == t.type ? i.setData({
                regionData: e.regionData,
                disableDetail: e.disableDetail,
                "selfForm.gender": e.formData.gender,
                "selfForm.username": e.formData.username,
                "selfForm.isChinese": e.formData.isChinese,
                "selfForm.domicilePlace": e.formData.domicilePlace,
                "selfForm.nativePlace": e.formData.nativePlace,
                "selfForm.phone": e.formData.phone,
                "selfForm.identityType": e.formData.identityType,
                "selfForm.identity": e.formData.identity,
                "selfForm.birthday": e.formData.birthday,
                "selfForm.street": e.formData.street,
                "selfForm.addr": e.formData.addr,
                "selfForm.residentFlag": e.formData.residentFlag,
                "selfForm.residentCondition": e.formData.residentCondition,
                "selfForm.returnDate": e.formData.returnDate,
                "selfForm.recentRegionName": e.formData.recentRegionName,
                "selfForm.quasiReturnDate": e.formData.quasiReturnDate,
                "selfForm.travelRegionClass": e.formData.travelRegionClass,
                "selfForm.socialContact1": e.formData.socialContact1,
                "selfForm.socialContact2": e.formData.socialContact2,
                "selfForm.healthState": e.formData.healthState,
                "selfForm.symptoms": e.formData.symptoms
            }) : i.setData({
                regionData: e.regionData,
                "selfForm.street": e.formData.street,
                "selfForm.addr": e.formData.addr
            });
        }).catch(function(e) {
            console.log("user data error", e);
        });
    },
    getReportSubmitTime: function(e) {
        if (e) this.setData({
            reportSubmitCount: 0
        }); else {
            var a = Date.parse(new Date());
            a /= 1e3;
            var t = wx.getStorageSync("timestamp"), n = wx.getStorageSync("report__submitCount") || this.data.reportSubmitCount;
            !t || a - t > 86400 && 2 == n ? (this.setData({
                reportSubmitCount: 0
            }), wx.setStorageSync("report__submitCount", 0)) : this.setData({
                reportSubmitCount: n
            });
        }
    },
    setStorage: function(e, a) {
        return new Promise(function(t, n) {
            wx.setStorage({
                key: e,
                data: a,
                success: function(e) {
                    t(e);
                },
                fail: function(e) {
                    n(e);
                }
            });
        });
    },
    getStorage: function(e) {
        return new Promise(function(a, t) {
            wx.getStorage({
                key: e,
                success: function(e) {
                    a(e.data);
                },
                fail: function(e) {
                    t(e);
                }
            });
        });
    },
    onShareAppMessage: function() {},
    handleIdentityChange: function(e) {
        if (t(e.detail.value)) {
            var a = i(e.detail.value), o = n(e.detail.value);
            o && u(u(o).format("YYYYMMDD")).isValid() && u().diff(u(o).format("YYYYMMDD"), "year") <= 130 && this.setData({
                "selfForm.birthday": u(o).format("YYYY-MM-DD")
            }), this.setData({
                "selfForm.gender": a,
                "selfForm.identity": e.detail.value
            });
        } else this.setData({
            "selfForm.identity": e.detail.value
        });
    },
    handleTabChange: function(e) {
        this.setData({
            activeTab: e.detail.value.key
        });
    },
    handleFormChange: function(a) {
        console.log(a);
        var t = a.target, n = t.dataset, i = t.id;
        this.setData(e({}, n.form + "." + i, a.detail.value));
    },
    handleFormChanges: function(a) {
        var t = this;
        console.log(a);
        var n = a.target, i = n.dataset, o = n.id;
        a.detail.value.forEach(function(n, s) {
            -1 == t.data.selfForm.questionFour.indexOf(n) && ("1" == n ? (t.data.questionFourItems.forEach(function(e) {
                console.log(e), 1 != e.value && (e.disabled = !0), e.checked = !1;
            }), t.setData(e({
                questionFourItems: t.data.questionFourItems
            }, i.form + "." + o, [ "1" ]))) : t.setData(e({}, i.form + "." + o, a.detail.value)));
        }), t.data.selfForm.questionFour.length > a.detail.value.length && t.data.selfForm.questionFour.forEach(function(n, s) {
            -1 == a.detail.value.indexOf(n) ? "1" == n && (t.data.questionFourItems.forEach(function(e) {
                1 != e.value && (e.disabled = !1);
            }), t.setData(e({
                questionFourItems: t.data.questionFourItems
            }, i.form + "." + o, []))) : t.setData(e({}, i.form + "." + o, a.detail.value));
        });
    },
    handleNationChange: function(e) {
        this.setData({
            "selfForm.isChinese": e.detail.value ? 1 : 0
        });
    },
    handleSocialContact1Change: function(e) {
        this.setData({
            "selfForm.socialContact1": e.detail.value ? "1" : ""
        });
    },
    handleSocialContact2Change: function(e) {
        this.setData({
            "selfForm.socialContact2": e.detail.value ? "2" : ""
        });
    },
    handleGetLocation: function(a) {
        var t = this;
        g().then(function(n) {
            var i;
            console.log(n);
            var o = a.target, s = o.dataset, r = o.id;
            t.setData((i = {}, e(i, s.form + "." + r, n.address), e(i, s.form + ".lng", n.longitude), 
            e(i, s.form + ".lat", n.latitude), i), m);
        });
    },
    handleHBPickerChange: function(e) {
        this.setData({
            "selfForm.hubeiLivingCity": e.detail.value[1].name,
            "selfForm.hubeiLivingCityCode": e.detail.value[1].code
        });
    },
    handleNativePlaceChange: function(e) {
        this.setData({
            "selfForm.nativePlace": e.detail.value[0].name
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
    handleNativePlaceClose: function() {
        this.setData({
            showNativePlacePicker: !1
        });
    },
    handleNativePlaceOpen: function(e) {
        this.setData({
            showNativePlacePicker: !0
        });
    },
    getRegionData: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, t = this;
        console.log("调用区"), wx.showLoading(), console.log(e.value.regionCode), console.log("*******", a), 
        3 === a ? this.data.placesec.ins.forEach(function(a, n) {
            a.id == e.value.regionCode && t.setData({
                placesec: a
            });
        }) : this.data.place.ins.forEach(function(a, n) {
            a.id == e.value.regionCode && t.setData({
                placesec: a
            });
        });
        var n = this.data.regionRange.slice(0, a);
        console.log("看一下数据", n), void 0 == t.data.placesec.ins ? (t.handleRegionClose(), 
        wx.hideLoading()) : (n[a] = {
            title: 0 === a ? "省/直辖市" : 1 === a ? "市/区" : 2 === a ? "区/街道" : "村/镇",
            data: t.data.placesec.ins.map(function(e) {
                return {
                    name: e.name,
                    value: {
                        regionName: e.name,
                        regionCode: e.id
                    },
                    regionList: e.regionList
                };
            })
        }, this.setData({
            regionRange: n
        }, function() {
            return wx.hideLoading();
        }));
    },
    getRegionCity: function() {
        var e = this;
        wx.showLoading({
            title: "努力加载中"
        }), f.request({
            url: l.cdnDomain + "/hbjkm/xzqh.json?t=" + Date.now()
        }).then(function(a) {
            e.setData({
                tablelist: a.data
            }), console.log("进页面就调用", a);
            var t = e.data.regionRange.slice(0, 0);
            console.log("看一下数据", t), t[0] = {
                title: "省/直辖市",
                data: a.data.map(function(e) {
                    return {
                        name: e.name,
                        value: {
                            regionName: e.name,
                            regionCode: e.id
                        },
                        regionList: e.regionList
                    };
                })
            }, e.setData({
                regionRange: t
            }, function() {
                return wx.hideLoading();
            });
        });
    },
    getOtherRegionData: function(e, a) {
        var t = this;
        wx.showLoading(), console.log("下一级的数据是", e.value.regionCode), this.data.tablelist.forEach(function(a, n) {
            a.id == e.value.regionCode && t.setData({
                place: a
            });
        }), console.log("调用市", t.data.place);
        var n = this.data.regionRange.slice(0, a);
        console.log("看一下数据", n), n[a] = {
            title: 0 === a ? "省/直辖市" : 1 === a ? "市/区" : "区/街道",
            data: t.data.place.ins.map(function(e) {
                return {
                    name: e.name,
                    value: {
                        regionName: e.name,
                        regionCode: e.id
                    },
                    regionList: e.regionList
                };
            })
        }, this.setData({
            regionRange: n
        }, function() {
            return wx.hideLoading();
        });
    },
    handleOpenRegion: function(e) {
        this.regionPickerForm = e.target.dataset.form, this.setData({
            showRegionPicker: !0,
            regionRange: this.data.regionRange.slice(0, 1)
        });
    },
    handleRegionChange: function(a) {
        console.log("+++++++++++++++", a);
        var t = a.detail.value;
        if (2 === t.length && void 0 == this.data.placesec.ins) {
            var n, i = t[1].regionCode.substring(0, 8);
            this.setData((n = {
                cityone: t[0].regionName,
                areaone: t[1].regionName,
                regionCodeone: i
            }, e(n, this.regionPickerForm + ".regionData", t), e(n, this.regionPickerForm + ".street", t.map(function(e) {
                return e.regionName;
            }).join("")), n));
        } else if (3 === t.length || 4 === t.length) {
            var o, i = t[2].regionCode.substring(0, 8);
            this.setData((o = {
                cityone: t[0].regionName,
                areaone: t[1].regionName,
                regionCodeone: i
            }, e(o, this.regionPickerForm + ".regionData", t), e(o, this.regionPickerForm + ".street", t.map(function(e) {
                return e.regionName;
            }).join("")), o));
        }
    },
    handleRegionColumnChange: function(e) {
        console.log("调用监控");
        var a = e.detail.item, t = e.detail.index;
        console.log(e), console.log("当前是第几级", t), 3 === t ? this.handleRegionClose() : 0 == t ? this.getOtherRegionData(a, t + 1) : this.getRegionData(a, t + 1);
    },
    handleRegionClose: function() {
        this.setData({
            showRegionPicker: !1
        });
    },
    handleAgreeChange: function(e) {
        console.log("++++++++++++++", e), this.setData({
            agreement: e.detail.value
        });
    },
    getPhoneNumber: function(e) {
        var a = this, t = e.detail, n = t.iv, i = t.encryptedData;
        if (console.log(1, n, i), n && i) return wx.showLoading({
            title: "努力加载中..."
        }), d({
            url: "/wll/account/getphone",
            method: "POST",
            data: {
                encryptedData: i,
                iv: n
            }
        }).then(function(e) {
            wx.hideLoading(), console.log("res", e), e && e.phone && a.setData({
                "selfForm.phone": e.phone
            });
        }).catch(function(e) {
            wx.hideLoading(), console.error(e);
        });
        console.error("用户拒绝授权登录");
    },
    handleSelfSubmits: function() {
        for (var e = /^\d+$|^\d*\.\d+$/g, a = "", t = 0; t < this.data.selfForm.questionFour.length; t++) 1 == this.data.selfForm.questionFour.length ? a += this.data.selfForm.questionFour[t] : t == this.data.selfForm.questionFour.length - 1 ? a += this.data.selfForm.questionFour[t] : a += this.data.selfForm.questionFour[t] + "^";
        if ("" == this.data.selfForm.street) wx.showToast({
            title: "请填写居住地",
            duration: 2e3,
            icon: "none"
        }); else if ("" == this.data.selfForm.questionThree) wx.showToast({
            title: "请选择是否接触病患",
            duration: 2e3,
            icon: "none"
        }); else if ("" == a) wx.showToast({
            title: "请选择健康状况",
            duration: 2e3,
            icon: "none"
        }); else if ("" == this.data.selfForm.questionFive) wx.showToast({
            title: "请填写体温",
            duration: 2e3,
            icon: "none"
        }); else if (this.data.reportSubmitCount > 1) wx.showToast({
            title: "每日只可提交两次",
            duration: 2e3,
            icon: "none"
        }); else if (e.test(this.data.selfForm.questionFive)) if (parseInt(this.data.selfForm.questionFive) > 42 || parseInt(this.data.selfForm.questionFive) < 35) wx.showToast({
            title: "请输入正确体温",
            duration: 3e3,
            icon: "none"
        }); else if ("" == this.data.cityone || "" == this.data.areaone) this.setData({
            cityone: "石家庄市",
            areaone: "长安区",
            regionCodeone: "130102"
        }); else {
            var n = this;
            this.setData({
                tapflag: !0
            }), setTimeout(function() {
                n.setData({
                    tapflag: !1
                });
            }, 2e3), wx.showModal({
                title: "提示",
                content: "所填信息是否确认无误，立即提交",
                success: function(e) {
                    e.confirm ? c({
                        url: "/hbjkm/familyHealth/saveReport",
                        method: "POST",
                        data: {
                            uid: parseInt(n.data.selfForm.myUid),
                            city: n.data.selfForm.street,
                            area: n.data.selfForm.street,
                            xzqhdm: parseInt(n.data.regionCodeone),
                            contactPatientFlag: parseInt(n.data.selfForm.questionThree),
                            symptom: a,
                            temperature: parseFloat(n.data.selfForm.questionFive),
                            familyId: parseInt(n.data.familyid),
                            familyRelationType: parseInt(n.data.familyRelationType)
                        }
                    }).then(function(e) {
                        wx.redirectTo({
                            url: "/pages/family-page/family-page?id=" + n.data.familyid + "&name=" + encodeURIComponent(n.data.familyname) + "&identity=" + n.data.familyidentity + "&familyRelationType=" + n.data.familyRelationType + "&relation=" + encodeURIComponent(n.data.familyrelation)
                        });
                    }) : e.cancel;
                }
            });
        } else wx.showToast({
            title: "体温格式有误（示例：36.3）",
            duration: 3e3,
            icon: "none"
        });
    }
});