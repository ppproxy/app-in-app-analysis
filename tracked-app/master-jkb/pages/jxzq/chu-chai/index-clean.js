function onLoad(e) {
        console.log(e), this.resjson(), console.log(s.userInfo.phone, "手机号");
        this.arrN = [], console.log(s.userInfo), this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            isChu: e.isChu,
            ishsjc: e.ishsjc
        });
}
function getPhone() {
        var t = this;
        o({
            url: "/jingxinju/jkb/phone/authList",
            method: "get",
            disableModalWhenApiError: !0
        }).then(function(a) {
            var i = a;
            console.log(i, "手机号"), t.setData(e({
                phoneArr: i.phones.concat(i.greyPhones)
            }, "formData.phone", i.phones[0].phone)), t.data.phoneArr.length > 1 && t.setData({
                isShowAgree: !1,
                isTijiao: !1,
                primarytext: "下一步"
            });
        }).catch(function(e) {});
}
function isOpengetVerifyCode() {
        this.setData({
            isOpengetVerifyCode: !1
        });
}
function getVerifyCode(e) {
        if (u({
            eventId: "firstcell_tap_GetVerifyCode"
        }), 0 !== this.data.isOpenGbRequest) {
            var t = {
                url: "/jingxinju/jkb/businessTravel/sendSms",
                method: "POST",
                data: {
                    mobile: this.data.formData.phone,
                    source: this.data.phoneArr[0].source,
                    sign: this.data.phoneArr[0].sign
                }
            };
            o(t).then(function(e) {
                console.log(e, "验证码"), wx.hideLoading();
            }).catch(function(e) {
                wx.hideLoading(), console.log(e.data.errmsg), e && e.data && "您的验证码仍在有效期内" == e.data.errmsg && wx.showModal({
                    title: "提示",
                    content: "您的验证码仍在有效期内",
                    showCancel: !1
                }), h(t, e, d.shixiang.businessTravelSendSms.UncaughtExp);
            }), console.log("获取验证码");
        } else this.setData({
            isOpengetVerifyCode: !0
        });
}
function onUnload() {
        s.userInfo.gongName = "";
}
function phoneKone() {
        this.setData({
            phoneKoneWrap: !1
        });
}
function flsm() {
        this.setData({
            phoneKoneWrap: !0
        });
}
function onShow() {
        if (this.getPhone(), console.log(this.data.flag), 0 == this.data.flag) s.userInfo.gongName && (console.log(s.userInfo.gongName), 
        this.setData(e({}, "formData.dfdq", s.userInfo.gongName.name)), this.arrN[0] = t({
            cityCode: s.userInfo.gongName.value.toString(),
            cityName: s.userInfo.gongName.arrName
        }, s.userInfo.gongName)); else if (s.userInfo.index == this.ind) {
            console.log(s.userInfo.gongName, this.data.inputVal), console.log("下面吗", s.userInfo.index, this.ind);
            var a = s.userInfo.index, i = s.userInfo.gongName.name, o = this.data.inputVal;
            console.log(o, a, i), o[a] = i;
            var n = this.data.codeArr;
            n[a] = t({
                cityCode: s.userInfo.gongName.value,
                cityName: s.userInfo.gongName.arrName
            }, s.userInfo.gongName), console.log(n), console.log(o);
            var r = [];
            r[0] = this.data.formData.dfdq;
            for (var h = this.data.inputVal.concat(r), c = 0; c < h.length; c++) {
                if (h[c] === h[c + 1]) return void wx.showModal({
                    title: "提示",
                    content: "您已添加该地区，无法重复添加。",
                    showCancel: !1,
                    confirmText: "我知道了"
                });
                null == h[c] && (console.log(h[c]), n[c] = "");
            }
            this.setData({
                inputVal: o,
                codeArr: n
            });
        }
}
function add() {
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
}
function del(e) {
        var t = e.currentTarget.dataset.idx, a = this.data.inputVal, i = this.data.codeArr, o = this.data.array;
        o.splice(t, 1), a.splice(t, 1), i.splice(t, 1), console.log(i), o.length < 1 && (o = []), 
        this.setData({
            array: o,
            inputVal: a,
            codeArr: i
        }), console.log(this.data.codeArr, "删除数组");
}
function dianji() {
        wx.navigateTo({
            url: "/pages/gsd-ui/g-web-page/g-web-page?phone=" + this.data.formData.phone
        }), console.log("点击查询");
}
function shuoming() {
        this.setData({
            isShowFlsm: !0
        });
}
function handleTap() {
        this.setData({
            flag: !1
        }), wx.navigateTo({
            url: "/pages/jxzq/sheng-shi-list/index"
        });
}
function dilog1(e) {
        console.log(e.currentTarget.dataset.idx), s.userInfo.index = e.currentTarget.dataset.idx, 
        this.ind = e.currentTarget.dataset.idx, wx.navigateTo({
            url: "/pages/jxzq/sheng-shi-list/index"
        }), s.userInfo.gongName = "", this.setData({
            flag: !0
        });
}
function handleChange(t) {
        this.data.rules;
        this.setData(e({
            isSubmitting: !1
        }, "formData.".concat(t.target.id), t.detail.value)), "dfdq" == t.target.id && this.setData(e({}, "formData.dfdq", this.data.provinceArr.join("")));
}
function agree() {
        this.setData({
            agree: !this.data.agree,
            isTijiao: !this.data.isTijiao
        });
}
function handleFormSubmit(e) {
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
                eventId: "firstcell_tap_Submitted"
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
}
function subTrain(e) {
        var t = this;
        console.log(this.arrN);
        var a = this, i = setTimeout(function() {
            a.setData({
                xianshi: !0
            }), a.clickVerify(), wx.hideLoading();
        }, 3e3);
        console.log(this.data.codeArr, this.arrN, this.data.codeArr.concat(this.arrN));
        var n, r = this.data.codeArr.concat(this.arrN);
        if (this.data.phoneArr.length > 1 && (n = 1), r.every(function(e) {
            return "" != e;
        })) {
            var h = {
                url: "/jingxinju/jkb/businessTravel/submit",
                method: "POST",
                data: {
                    verification: this.data.formData.yzm,
                    visitAreaList: this.data.codeArr.concat(this.arrN),
                    wjyc: this.data.formData.radioA,
                    mobile: this.data.formData.phone,
                    source: this.data.phoneArr[0].source,
                    sign: this.data.phoneArr[0].sign,
                    type: n
                },
                timeout: 6e3,
                disableModalWhenApiError: !0
            };
            o(h).then(function(e) {
                if (t.setData({
                    xianshi: !1
                }), console.log(s.userInfo.isChu, "22" == s.userInfo.isChu), wx.hideLoading(), console.log(e, "请求成功"), 
                clearTimeout(i), "0" == e.code ? u({
                    eventId: "firstcell_tap_SubmitSuccess"
                }) : u({
                    eventId: "firstcell_tap_SubmitFail"
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
                if ("-7" == e.code && (t.getCode(), wx.hideLoading(), t.setData({
                    xianshi1: !0
                })), "-1" == e.code) return wx.hideLoading(), void wx.showModal({
                    title: "提示",
                    content: e.msg,
                    showCancel: !1,
                    confirmText: "我知道了"
                });
                if ("0" == e.code) if (wx.hideLoading(), t.data.phoneArr.length > 1) {
                    var a = [ t.data.phoneArr[0].phone ];
                    console.log(a), wx.redirectTo({
                        url: "/pages/jxzq/chu-chai-2/index?arr=" + JSON.stringify(t.data.phoneArr) + "&Array=" + JSON.stringify(a) + "&ishsjc =" + t.data.ishsjc
                    });
                } else {
                    if ("1" == t.data.ishsjc) return void wx.navigateBack({
                        delta: 1
                    });
                    wx.redirectTo({
                        url: "/pages/jxzq/cha-xun-jie-guo/index"
                    });
                }
            }).catch(function(e) {
                wx.hideLoading(), u({
                    eventId: "firstcell_tap_SubmitFail"
                }), t.setData({
                    xianshi: !1
                }), console.log(e, "提交信息返回的报错"), clearTimeout(i), wx.hideLoading(), wx.showModal({
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
        } else clearTimeout(i), wx.hideLoading(), wx.showModal({
            title: "提示",
            content: "你的到访地区尚未填写，请填写后继续提交。",
            showCancel: !1,
            confirmText: "我知道了"
        });
}
function btns() {
        this.setData({
            isShowFlsm: !1
        });
}
function btns123() {
        this.setData({
            xianshi: !1
        }), wx.showLoading({
            title: "加载中",
            mask: !0
        });
}
function resjson() {
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
                isOpenBDCheck: a.data.isOpenBDCheck,
                isOpenGbRequest: a.data.isOpenGbRequest
            }), wx.hideLoading();
        }).catch(function(e) {
            wx.hideLoading();
        });
}
function clickVerify() {
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
}
function getPhoneNumber(e) {
        this.setData({
            xianshi1: !1
        }), wx.showLoading({
            title: "努力加载中...",
            mask: !0
        }), wx.redirectTo({
            url: "/pages/jxzq/chu-chai/index"
        }), wx.hideLoading();
}
function tuichu() {
        this.setData({
            xianshi1: !1
        });
}
function tuichu1() {
        var e = this.arrN.concat(this.data.codeArr);
        console.log("选择地区-------DengJiArr1", e), s.userInfo.DengJiArr1 = e, wx.navigateTo({
            url: "/pages/fusion/benren-list/index?type=chuchai"
        });
}
function getCode() {
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
                    wx.hideLoading(), c(t, e, d.shixiang.refreshSessionKey.UncaughtExp);
                });
            }
        });
}
