var t, o = require("../../../@babel/runtime/helpers/defineProperty"), a = getApp(), i = a.request, e = a.config, s = (a.wxp, 
a.userStore, a.dayjs, require("../../../utils/genDid.js"), require("../../../utils/sha256.js"), 
require("../../../utils/base64Src.js"));

Page({
    data: {
        isNo: !1,
        wisNo: !1,
        idCardTt: "",
        tishi: !1,
        imgUrl: "",
        jieguo: "",
        time: "10",
        timer: "",
        windowHeight: "",
        isShow1: !0,
        zhuangtai: !1,
        beijingse: "",
        isShowFlsm: !1,
        conDomian: e.domain + "/jingxinju/jkb/oldAndYoung/profilePhoto",
        formData: {
            Idcard: "",
            money: "",
            prefix: ""
        },
        rules: {
            Idcard: [ {
                type: "required",
                message: "请输入身份证号"
            }, {
                type: "id",
                message: "请输入正确的身份证号"
            }, {
                type: "customPassword",
                message: "不在查询范围，请核对后重新填写"
            } ]
        },
        validateType: {
            customPassword: function(t, o) {
                var a = t, i = a.substring(6, 10), e = a.substring(10, 14), s = i + "." + e;
                console.log(i + "." + e);
                var n = new Date(), r = n.getFullYear(), c = n.getMonth() + 1;
                c < 10 && (c = "0" + c);
                var l = n.getDate();
                l < 10 && (l = "0" + l);
                var d = r + "." + c + l;
                console.log(r + "." + c + l);
                var h = d - s;
                return h <= 16 || h >= 60;
            }
        }
    },
    onLoad: function(t) {
        console.log(this.data.conDomian), this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        });
    },
    onInputChange: function(t) {
        var a;
        this.setData((o(a = {}, "formData.".concat(t.target.id), t.detail.value), o(a, "timer", ""), 
        o(a, "idCardTt", !1), a)), "" == t.detail.value ? (console.log(123), this.setData({
            isShow1: !0
        })) : this.setData({
            isShow1: !1
        });
    },
    handleFormSubmit: function(t) {
        t.detail.validStatus && (this.setData({
            imgUrl: ""
        }), wx.showLoading({
            title: "加载中",
            mask: !0
        }), this.getIsShequ());
    },
    setTime: function() {
        var o = this;
        t = setInterval(function() {
            if (console.log(o.data.time), o.setData({
                time: o.data.time - 1
            }), o.data.time <= 0) {
                clearInterval(t);
                o.setData({
                    timer: "",
                    formData: {
                        Idcard: ""
                    },
                    zhuangtai: !1,
                    time: 10,
                    isShowFlsm: !1,
                    beijingse: "",
                    wisNo: !1
                });
            }
        }, 1e3);
    },
    flsm: function() {
        this.setData({
            isShowFlsm: !0
        });
    },
    btns: function() {
        this.setData({
            isShowFlsm: !1
        });
    },
    clearable: function() {
        clearInterval(t);
        this.setData({
            timer: "",
            formData: {
                Idcard: ""
            },
            zhuangtai: !1,
            isShowFlsm: !1,
            time: 10,
            beijingse: "",
            wisNo: !1
        });
    },
    btnQcx: function() {
        this.setData({
            tishi: !1
        });
    },
    laoyou: function() {
        var t = this;
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), i({
            url: "/jingxinju/jkb/oldAndYoung/health/status",
            method: "post",
            data: {
                idCard: this.data.formData.Idcard
            }
        }).then(function(a) {
            if (console.log(a), wx.hideLoading(), 1 == a.errcode) {
                if ("" == a.otherName && ("-7" == a.color || "0" == a.color || "51" == a.color || "30" == a.color || "41" == a.color)) return void t.setData({
                    tishi: !0
                });
                "0" != a.color && "30" != a.color && "1" != a.color && "2" != a.color && "-7" != a.color && "-3" != a.color && "11" != a.color && "51" != a.color && "4" != a.color && "41" != a.color || (console.log("测试"), 
                t.setData({
                    jieguo: a,
                    zhuangtai: !0,
                    beijingse: a.color
                }), a.picUrl && t.setData(o({}, "jieguo.picUrl", s(a.picUrl))), t.setTime());
            } else 9 == a.errcode ? wx.showModal({
                title: "提示",
                content: "您已超过当日助查次数限制。",
                showCancel: !1,
                confirmText: "我知道了"
            }) : 3 == a.errcode ? t.setData({
                idCardTt: !0
            }) : wx.showToast({
                title: "查询失败",
                duration: 2e3,
                icon: "none"
            });
        }).catch(function(t) {
            wx.hideLoading(), wx.showToast({
                title: "查询失败",
                duration: 2e3,
                icon: "none"
            }), console.log(t);
        });
    },
    getIsShequ: function() {
        var t = this;
        wx.showLoading({
            title: "请稍等...",
            mask: !0
        }), i({
            url: "/jingxinju/jkb/check/is/beisanxian",
            method: "get",
            data: {
                idCard: this.data.formData.Idcard
            }
        }).then(function(o) {
            console.log(o), "-3" == o.code ? (wx.hideLoading(), t.setData({
                isNo: !0
            }), t.laoyou()) : t.laoyou();
        }).catch(function(t) {
            console.log(t), wx.hideLoading(), wx.showModal({
                title: "温馨提示",
                content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
                showCancel: !1
            });
        });
    },
    verificat: function(t) {
        var o = this;
        i({
            url: "/ymjz/jkb/vaccination/verificat",
            method: "GET",
            data: {
                type: 0,
                idCard: this.data.formData.Idcard
            }
        }).then(function(t) {
            o.setData({
                verificat: t
            });
        }).catch(function(t) {});
    },
    wHtap: function() {
        this.setData({
            wisNo: !0
        });
    },
    showZd: function() {
        console.log(123), this.setData({
            isNo: !1
        }), wx.navigateBack({
            delta: 10
        });
    },
    showYw: function() {
        this.setData({
            isNo: !0
        }), wx.redirectTo({
            url: "/pages/jxzq/message/index"
        });
    },
    wHao: function() {
        this.setData({
            wisNo: !1
        });
    }
});