var e = require("../../../@babel/runtime/helpers/objectSpread2"), a = require("../../../@babel/runtime/helpers/defineProperty"), t = getApp(), s = (t.request, 
t.wxp), i = t.userStore, n = t.config, r = (require("../../../utils/base64Src.js"), 
require("../../../utils/bese64.js").base64src, require("../../../utils/mtaTarget.js").newspapers);

Page({
    data: {
        windowHeight: "",
        visible: !1,
        formData: {
            qrcode_unitname: "",
            qrcode_address: "",
            address: "",
            phone: "",
            fail: "失败提示音0",
            success: ""
        },
        rules: {
            fail: [ {
                type: "required",
                message: "请选择扫码提示音"
            } ],
            success: [ {
                type: "required",
                message: "请选择扫码提示音"
            } ]
        },
        areas: [],
        firstData1: [],
        userInfo: {},
        range: [],
        hujiArr: [],
        jiedoaData: [],
        shequData: [],
        success: "",
        fail: 0,
        code: ""
    },
    onShow: function() {
        var e, t, s = i.userInfo;
        (this.setData({
            userInfo: s
        }), i.userInfo.success) && this.setData((a(e = {}, "formData.success", i.userInfo.success.name), 
        a(e, "success", i.userInfo.success.value), e));
        i.userInfo.fail && this.setData((a(t = {}, "formData.fail", i.userInfo.fail.name), 
        a(t, "fail", i.userInfo.fail.value), t));
        i.userInfo.gongName && this.setData(a({}, "formData.qrcode_unitname", i.userInfo.gongName.name));
        try {
            var n = i.userInfo.mobile, r = /(\d{3})\d*(\d{3})/, o = n.replace(r, "$1****$2");
            console.log(o, r), this.setData({
                phone: o
            });
        } catch (e) {}
    },
    onLoad: function(e) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        }), this.getJson(), wx.reportMonitor("1", 1);
    },
    getJson: function() {
        var e = this, a = new Date().getTime();
        s.request({
            url: n.areaPath,
            method: "GET"
        }).then(function(t) {
            wx.canIUse("reportPerformance") && wx.reportPerformance(1002, Number(new Date().getTime() - a), n.areaPath), 
            wx.hideLoading(), e.setData({
                areas: t.data
            }), console.log(e.areas, "yann"), e.getQuyu(1);
        }).catch(function(e) {
            console.log(e), wx.hideLoading();
        });
    },
    getQuyu: function(e) {
        var a = {
            title: "区",
            data: this.data.areas
        };
        this.setData({
            range: [ a ],
            firstData: a
        });
    },
    handleColumnChange: function(e) {
        var t, s, i = e.detail, n = i.item, r = i.index, o = n.value, u = n.name;
        switch (console.log(n), r) {
          case 0:
            this.setData((a(t = {}, "hujiArr[0]", u), a(t, "hujiArr[1]", ""), a(t, "hujiArr[2]", ""), 
            a(t, "code", n.value), t)), this.getJidao(o);
            break;

          case 1:
            this.setData((a(s = {}, "hujiArr[1]", u), a(s, "hujiArr[2]", ""), a(s, "visible", !1), 
            a(s, "code", n.value), s));
        }
        console.log(this.data.hujiArr);
    },
    getJidao: function(e) {
        var a = this.data.areas.filter(function(a) {
            return a.value == e;
        });
        if (console.log(a, "yann"), a.length > 0) {
            var t = {
                title: "街道",
                data: a[0].child
            };
            this.setData({
                range: [ this.data.firstData, t ],
                jiedoaData: t
            });
        }
    },
    dilog1: function() {
        r({
            eventId: "createqrcode_tap_SelectUnit"
        }), wx.showLoading({
            title: "加载中",
            mask: !0
        }), wx.navigateTo({
            url: "/pages/jxzq/searchName/index"
        }), wx.hideLoading();
    },
    getShequ: function(e) {
        console.log(this.data.jiedoaData);
        var a = this.data.jiedoaData.data.filter(function(a) {
            return a.value == e;
        });
        if (console.log(a, "yann", this.areas), a.length > 0) {
            var t = {
                title: "社区",
                data: a[0].child
            };
            this.setData({
                range: [ this.data.firstData, this.data.jiedoaData, t ],
                shequData: t
            });
        }
    },
    handleChange: function(e) {
        console.log(e), "address" != e.target.id ? this.setData(a({}, "formData.".concat(e.target.id), e.detail.value)) : this.setData(a({}, "formData.address", this.data.hujiArr.join("")));
    },
    dilog: function() {
        this.setData({
            visible: !0
        });
    },
    handleClose: function() {
        this.setData({
            visible: !1
        });
    },
    handleOpenRegion: function() {
        i.userInfo.success = null, i.userInfo.fail = null, wx.navigateBack({
            delta: 1
        });
    },
    onUnload: function() {
        i.userInfo.success = null, i.userInfo.fail = null, i.userInfo.gongName = {};
    },
    handleSecondTap: function() {
        i.userInfo.gongName = {}, wx.navigateBack({
            delta: 1
        });
    },
    handleFormSubmit: function(a) {
        if (console.log(a), a.detail.validStatus) {
            r({
                eventId: "createqrcode_tap_Submitted"
            }), i.userInfo.success = null, i.userInfo.fail = null;
            var t = a.detail.value, s = e(e({}, t), {}, {
                success_value: this.data.success,
                fail_value: this.data.fail,
                code: this.data.code
            });
            console.log(s), wx.redirectTo({
                url: "/pages/jxzq/sao-ma-dengji-tongji/index?daofang=" + JSON.stringify(s)
            });
        }
    },
    handleTao: function(e) {
        var a;
        "success" == e.currentTarget.id ? (a = this.data.success, r({
            eventId: "createqrcode_tap_SuccessPrompt"
        })) : r({
            eventId: "createqrcode_tap_FailPrompt"
        }), wx.navigateTo({
            url: "/pages/jxzq/ti-shi-yin/index?type=" + e.currentTarget.id + "&str=" + a
        }), console.log(e);
    }
});