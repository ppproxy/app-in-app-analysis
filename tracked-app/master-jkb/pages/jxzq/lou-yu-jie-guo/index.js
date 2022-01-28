var a = require("../../../@babel/runtime/helpers/defineProperty"), t = getApp(), e = t.request, i = t.userStore, o = require("../../../utils/util"), n = o.apiErrorAndNavigateBack, s = o.apiError, d = require("../../../utils/customErrors"), r = require("../../../utils/uitls.js").getPrevPageData, g = require("../../../utils/base64Src.js");

Page({
    data: {
        windowHeight: "",
        img: "",
        imgSrc: "",
        data: {},
        code: "",
        opt: {},
        xianshi: !1,
        formData: {
            name: "",
            name1: "",
            idcard: "",
            idcard1: "",
            tiwen: ""
        },
        rules: {
            name: [ {
                type: "required",
                message: "请输入姓名"
            } ],
            idcard: [ {
                type: "required",
                message: "请输入身份证号"
            } ]
        },
        validateType: {
            customPassword: function(a, t) {
                return a.length > 3 && a.length < 6;
            }
        }
    },
    onLoad: function(a) {
        console.log(i), this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        });
        var t = r() || {};
        console.log(t, "接收到的地址");
        var e = wx.getStorageSync("img");
        this.setData({
            img: e,
            opt: t
        }), console.log(this.data.opt.name), this.getJian(), this.getIdCard(), e ? (this.getxq(0), 
        console.log("缓存", e)) : (console.log("没有缓存"), this.getxq(1));
    },
    getIdCard: function() {
        var t = this, i = {
            url: "/auth-server/auth/user/session",
            method: "GET"
        };
        e(i).then(function(e) {
            var i;
            console.log(e), t.setData((a(i = {}, "formData.name1", e.realName), a(i, "formData.idcard1", e.realIdCard), 
            i)), wx.hideLoading();
        }).catch(function(a) {
            wx.hideLoading(), s(i, a);
        });
    },
    getxq: function(t) {
        var i = this;
        console.log("zouzhege "), wx.showLoading({
            title: "加载中",
            mask: !0
        });
        var o = {
            url: "/jingxinju/jkb/businessTravel/getBaseData",
            method: "GET",
            data: {
                type: t
            }
        };
        e(o).then(function(e) {
            if (console.log(e, "接口返回的数据", t), "0" == t) {
                var o;
                console.log("缓存", i.data.img.img), i.setData((o = {
                    data: e,
                    imgSrc: g(i.data.img.img)
                }, a(o, "formData.name", e.name), a(o, "formData.idcard", e.idCard), o));
            } else {
                var n;
                i.setData((n = {
                    data: e,
                    imgSrc: g(e.image)
                }, a(n, "formData.name", e.name), a(n, "formData.idcard", e.idCard), n)), console.log("没有缓存");
                var s = {
                    img: e.image
                };
                wx.setStorage({
                    key: "img",
                    data: s
                });
            }
            wx.hideLoading();
        }).catch(function(a) {
            wx.hideLoading(), s(o, a);
        });
    },
    getJian: function() {
        var a = this;
        wx.showLoading({
            title: "加载中",
            mask: !0
        });
        var t = {
            url: "/jingxinju/jkb/businessTravel/getHealthCode",
            method: "GET"
        };
        e(t).then(function(t) {
            console.log(t.code, "接口返回的code"), "-1" != t.code ? a.setData({
                code: t.code
            }) : a.getCode(), wx.hideLoading();
        }).catch(function(a) {
            wx.hideLoading(), n(t, a);
        });
    },
    getCode: function() {
        var a = this;
        wxp.request({
            url: "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/user-state-code.json",
            method: "GET"
        }).then(function(t) {
            console.log(t.data.code), a.setData({
                code: t.data.code
            });
        }).catch(function(a) {});
    },
    handleChange: function(t) {
        this.setData(a({}, "formData.".concat(t.target.id), t.detail.value));
    },
    handleFormSubmit: function(a) {
        if (console.log(a.detail.value), wx.showLoading({
            title: "加载中",
            mask: !0
        }), a.detail.validStatus) {
            var t = {
                animalHeat: a.detail.value.tiwen,
                buildingName: this.data.opt.name,
                buildingUuid: this.data.opt.id,
                dataType: this.data.opt.type,
                healthCode: this.data.code,
                healthTreasureUuid: this.data.data.userUUID,
                idCard: this.data.formData.idcard1,
                idCardType: "1",
                name: this.data.formData.name1,
                type: "11"
            };
            console.log(t), console.log("submit: ", a);
            var i = {
                url: "/jingxinju/jkb/building/setInfoApp",
                method: "post",
                data: t
            };
            e(i).then(function(a) {
                console.log(a, "提交信息接口返回"), a.state && wx.navigateTo({
                    url: "/pages/jxzq/success/index"
                }), wx.hideLoading();
            }).catch(function(a) {
                wx.hideLoading(), s(i, a, d.shixiang.otherDel.UncaughtExp);
            });
        }
    },
    returnShoe: function() {
        wx.navigateBack({
            delta: 6
        });
    },
    flsm: function() {
        this.setData({
            xianshi: !0
        });
    },
    btns: function() {
        this.setData({
            xianshi: !1
        });
    }
});