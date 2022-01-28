var e = require("../../../@babel/runtime/helpers/defineProperty"), t = require("../../../@babel/runtime/helpers/objectSpread2"), a = 3, i = getApp(), o = i.request, n = (i.config, 
i.wxp), s = i.userStore, r = (i.dayjs, require("../../../utils/util")), d = r.apiErrorAndNavigateBack, h = r.apiError, c = require("../../../utils/customErrors"), l = require("../../../config/index").jsonCdn, u = require("../../../utils/mtaTarget.js").newspapers;

Page({
    data: {
        xianshi1: !1,
        last_time: "",
        is_show: !0,
        isOpenBDCheck: "",
        xianshi: !1,
        windowHeight: "",
        isSubmitting: !1,
        visible: !1,
        isShowFlsm: !1,
        isShow: !1,
        agree: !1,
        isTijiao: !0,
        flag: !1,
        primarytext: "提交",
        provinceArr: [],
        phoneKoneWrap: !1,
        checkItems: [ {
            name: "是",
            value: "0"
        }, {
            name: "否",
            value: "1"
        } ],
        vcodeTime: 5,
        formData: t({}, {
            phone: "",
            yzm: "",
            dfdq: "",
            radioA: ""
        }),
        rules: t({}, {
            yzm: [ {
                type: "required",
                message: "请输入验证码"
            } ],
            dfdq: [ {
                type: "required",
                message: "请选择到访过的地区"
            } ],
            phone: [ {
                type: "required",
                message: "填写不能为空"
            } ]
        }),
        array: [],
        inputVal: [],
        codeArr: [],
        isChu: "",
        phoneArr: [],
        Array1: [],
        isShowAgree: !0,
        ishsjc: ""
    },
    onLoad: function(t) {
        var a;
        console.log(t), this.resjson();
        var i = JSON.parse(t.arr), o = JSON.parse(t.Array);
        this.arrN = [], this.setData((a = {
            windowHeight: wx.getSystemInfoSync().windowHeight,
            ishsjc: t.ishsjc
        }, e(a, "formData.phone", i[1].phone), e(a, "phoneArr", i), e(a, "Array1", o), a)), 
        this.data.phoneArr.length > 2 && this.setData({
            isShowAgree: !1,
            isTijiao: !1,
            primarytext: "下一步"
        });
    },
    onUnload: function() {
        s.userInfo.gongName = "";
    },
    phoneKone: function() {
        this.setData({
            phoneKoneWrap: !1
        });
    },
    flsm: function() {
        this.setData({
            phoneKoneWrap: !0
        });
    },
    onShow: function() {
        if (console.log(this.data.flag), 0 == this.data.flag) s.userInfo.gongName && (console.log(s.userInfo.gongName), 
        this.setData(e({}, "formData.dfdq", s.userInfo.gongName.name)), this.arrN[0] = {
            cityCode: s.userInfo.gongName.value.toString(),
            cityName: s.userInfo.gongName.arrName
        }); else if (s.userInfo.index == this.ind) {
            console.log(s.userInfo.gongName, this.data.inputVal), console.log("下面吗", s.userInfo.index, this.ind);
            var t = s.userInfo.index, a = s.userInfo.gongName.name, i = this.data.inputVal;
            console.log(i, t, a), i[t] = a;
            var o = this.data.codeArr;
            o[t] = {
                cityCode: s.userInfo.gongName.value,
                cityName: s.userInfo.gongName.arrName
            }, console.log(o), console.log(i);
            var n = [];
            n[0] = this.data.formData.dfdq;
            for (var r = this.data.inputVal.concat(n), d = 0; d < r.length; d++) {
                if (r[d] === r[d + 1]) return void wx.showModal({
                    title: "提示",
                    content: "您已添加该地区，无法重复添加。",
                    showCancel: !1,
                    confirmText: "我知道了"
                });
                null == r[d] && (console.log(r[d]), o[d] = "");
            }
            this.setData({
                inputVal: i,
                codeArr: o
            });
        }
    },
    add: function() {
        if (this.data.formData.dfdq) {
            var e = [];
            e[0] = this.data.formData.dfdq;
            this.data.inputVal.concat(e);
            console.log(e, this.data.inputVal.concat(e));
            var t = this.data.array, a = this.data.codeArr;
            if (a.length > 0 && "" == a[a.length - 1]) return void wx.showModal({
                title: "提示",
                content: "你的到访地区尚未填写，请填写后继续添加。",
                showCancel: !1,
                confirmText: "我知道了"
            });
            a.push(""), t.push("");
            var i = {
                title: "省",
                data: this.province
            };
            console.log(t), this.setData({
                codeArr: a,
                array: t,
                range: [ i ],
                flag: !0
            });
        } else wx.showModal({
            title: "提示",
            content: "你的到访地区尚未填写，请填写后继续添加。",
            showCancel: !1,
            confirmText: "我知道了"
        });
    },
    del: function(e) {
        var t = e.currentTarget.dataset.idx, a = this.data.inputVal, i = this.data.codeArr, o = this.data.array;
        o.splice(t, 1), a.splice(t, 1), i.splice(t, 1), console.log(i), o.length < 1 && (o = []), 
        this.setData({
            array: o,
            inputVal: a,
            codeArr: i
        }), console.log(this.data.codeArr, "删除数组");
    },
    dianji: function() {
        wx.navigateTo({
            url: "/pages/gsd-ui/g-web-page/g-web-page?phone=" + this.data.formData.phone
        }), console.log("点击查询");
    },
    shuoming: function() {
        this.setData({
            isShowFlsm: !0
        });
    },
    getVerifyCode: function(e) {
        u({
            eventId: "secondcell_tap_GetVerifyCode"
        });
        var t = {
            url: "/jingxinju/jkb/businessTravel/sendSms",
            method: "POST",
            data: {
                mobile: this.data.formData.phone,
                source: this.data.phoneArr[1].source,
                sign: this.data.phoneArr[1].sign
            }
        };
        o(t).then(function(e) {
            console.log(e, "验证码"), wx.hideLoading();
        }).catch(function(e) {
            wx.hideLoading(), e && e.data && "您的验证码仍在有效期内" == e.data.errmsg && wx.showModal({
                title: "提示",
                content: "您的验证码仍在有效期内",
                showCancel: !1
            }), d(t, e, c.shixiang.businessTravelSendSms.UncaughtExp);
        }), console.log("获取验证码");
    },
    handleTap: function() {
        this.setData({
            flag: !1
        }), wx.navigateTo({
            url: "/pages/jxzq/sheng-shi-list/index"
        });
    },
    dilog1: function(e) {
        console.log(e.currentTarget.dataset.idx), s.userInfo.index = e.currentTarget.dataset.idx, 
        this.ind = e.currentTarget.dataset.idx, wx.navigateTo({
            url: "/pages/jxzq/sheng-shi-list/index"
        }), s.userInfo.gongName = "", this.setData({
            flag: !0
        });
    },
    handleChange: function(t) {
        this.data.rules;
        this.setData(e({
            isSubmitting: !1
        }, "formData.".concat(t.target.id), t.detail.value)), "dfdq" == t.target.id && this.setData(e({}, "formData.dfdq", this.data.provinceArr.join("")));
    },
    agree: function() {
        this.setData({
            agree: !this.data.agree,
            isTijiao: !this.data.isTijiao
        });
    },
    handleFormSubmit: function(e) {
        var t = this;
        this.resjson().then(function() {
            t.setData({
                isSubmitting: !0
            }), wx.showLoading({
                title: "加载中",
                mask: !0
            });
            var a = t;
            if ("1" == t.data.isOpenBDCheck) console.log("1" == t.data.isOpenBDCheck), e.detail.validStatus ? (console.log(a.data.formData, "=======提交表单的值"), 
            u({
                eventId: "secondcell_tap_Submitted"
            }), a.subTrain(3e3)) : wx.hideLoading(); else if ("1" != t.data.isOpenBDCheck && e.detail.validStatus) return wx.hideLoading(), 
            void wx.showModal({
                title: "提示",
                content: "暂未反馈您的相关信息，请稍后再试。",
                showCancel: !1,
                confirmText: "我知道了",
                success: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            });
        });
    },
    subTrain: function(t) {
        var a = this;
        console.log(this.arrN);
        var i = this, n = setTimeout(function() {
            i.setData({
                xianshi: !0
            }), i.clickVerify(), wx.hideLoading();
        }, 3e3);
        if (console.log(this.data.codeArr, this.arrN, this.data.codeArr.concat(this.arrN)), 
        this.data.codeArr.concat(this.arrN).every(function(e) {
            return "" != e;
        })) {
            var r;
            this.data.phoneArr.length > 2 && (r = 1);
            var d = {
                url: "/jingxinju/jkb/businessTravel/submit",
                method: "POST",
                data: e({
                    verification: this.data.formData.yzm,
                    visitAreaList: this.data.codeArr.concat(this.arrN),
                    wjyc: this.data.formData.radioA,
                    type: this.data.Array1.length,
                    mobile: this.data.formData.phone,
                    source: this.data.phoneArr[1].source,
                    sign: this.data.phoneArr[1].sign
                }, "type", r),
                timeout: 6e3,
                disableModalWhenApiError: !0
            };
            o(d).then(function(e) {
                if (a.setData({
                    xianshi: !1
                }), console.log(s.userInfo.isChu, "22" == s.userInfo.isChu), wx.hideLoading(), console.log(e, "请求成功"), 
                clearTimeout(n), "0" == e.code ? u({
                    eventId: "secondcell_tap_SubmitSuccess"
                }) : u({
                    eventId: "secondcell_tap_SubmitFail"
                }), "4" == e.code && (wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: "您提交的近14天行程轨迹核验失败，请重新填写到访地区。",
                    showCancel: !1,
                    confirmText: "我知道了",
                    success: function() {
                        wx.hideLoading();
                    }
                })), "3" == e.code && (wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: "未查询到您的到访地风险等级信息",
                    showCancel: !1,
                    confirmText: "返回首页",
                    success: function(e) {
                        wx.hideLoading(), e.cancel && wx.navigateBack({
                            delta: 1
                        });
                    }
                })), "-6" == e.code) return wx.hideLoading(), void wx.showModal({
                    title: "提示",
                    content: "暂未反馈您的相关信息，请稍后再试",
                    showCancel: !1,
                    confirmText: "我知道了"
                });
                if ("-7" == e.code && (a.getCode(), wx.hideLoading(), a.setData({
                    xianshi1: !0
                })), "-1" == e.code) return wx.hideLoading(), void wx.showModal({
                    title: "提示",
                    content: e.msg,
                    showCancel: !1,
                    confirmText: "我知道了"
                });
                if ("0" == e.code) if (wx.hideLoading(), 2 == a.data.phoneArr.length) {
                    if ("1" == a.data.ishsjc) return void wx.navigateBack({
                        delta: 1
                    });
                    wx.redirectTo({
                        url: "/pages/jxzq/cha-xun-jie-guo/index"
                    });
                } else {
                    var t = a.data.phoneArr, i = a.data.Array1;
                    i.push(a.data.phoneArr[1].phone), t.splice(1, 1), wx.redirectTo({
                        url: "/pages/jxzq/chu-chai-2/index?arr=" + JSON.stringify(t) + "&Array=" + JSON.stringify(i) + "&ishsjc =" + a.data.ishsjc
                    });
                }
            }).catch(function(e) {
                u({
                    eventId: "secondcell_tap_SubmitFail"
                }), wx.hideLoading(), a.setData({
                    xianshi: !1
                }), console.log(e, "提交信息返回的报错"), clearTimeout(n), wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: '暂未反馈您的相关信息，北京"健康宝”将继续为您调取结果，请您稍后查看。',
                    confirmText: "返回首页",
                    showCancel: !1,
                    success: function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            });
        } else clearTimeout(n), wx.hideLoading(), wx.showModal({
            title: "提示",
            content: "你的到访地区尚未填写，请填写后继续提交。",
            showCancel: !1,
            confirmText: "我知道了"
        });
    },
    btns: function() {
        this.setData({
            isShowFlsm: !1
        });
    },
    btns123: function() {
        this.setData({
            xianshi: !1
        }), wx.showLoading({
            title: "加载中",
            mask: !0
        });
    },
    resjson: function() {
        var e = this;
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        });
        var t = new Date().getTime();
        return n.request({
            url: l,
            method: "get"
        }).then(function(a) {
            wx.canIUse("reportPerformance") && wx.reportPerformance(1002, Number(new Date().getTime() - t), l), 
            console.log(a), e.setData({
                isOpenBDCheck: a.data.isOpenBDCheck
            }), wx.hideLoading();
        }).catch(function(e) {
            wx.hideLoading();
        });
    },
    clickVerify: function() {
        wx.hideLoading();
        this.setData({
            is_show: !this.data.is_show
        }), function e(t) {
            if (0 == a) return t.setData({
                is_show: !0
            }), void (a = 3);
            t.setData({
                is_show: !1,
                last_time: a
            }), "0" == --a && t.setData({
                xianshi: !1
            }), setTimeout(function() {
                e(t);
            }, 1e3);
        }(this);
    },
    getPhoneNumber: function(e) {
        this.setData({
            xianshi1: !1
        }), wx.redirectTo({
            url: "/pages/jxzq/chu-chai-2/index?arr=" + JSON.stringify(this.data.phoneArr)
        });
    },
    tuichu: function() {
        this.setData({
            xianshi1: !1
        }), wx.navigateBack({
            delta: 1
        });
    },
    getCode: function() {
        wx.login({
            success: function(e) {
                console.log(e.code);
                var t = {
                    url: "/auth-server/auth/refreshSessionKey",
                    method: "POST",
                    data: {
                        code: e.code
                    }
                };
                o(t).then(function(e) {
                    console.log(e, "刷新解密seeion返回值");
                }).catch(function(e) {
                    wx.hideLoading(), h(t, e, c.shixiang.refreshSessionKey.UncaughtExp);
                });
            }
        });
    }
});