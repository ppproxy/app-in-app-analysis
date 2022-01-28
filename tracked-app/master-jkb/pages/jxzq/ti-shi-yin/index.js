var e = require("../../../@babel/runtime/helpers/defineProperty"), t = getApp(), a = (t.request, 
t.wxp), i = t.userStore, r = t.config, o = require("../../../utils/util").audioContext;

Page({
    data: {
        checkItems: [],
        type: "",
        formData: {
            radioA: ""
        },
        rules: {
            radioA: [ {
                type: "required",
                message: "请选择扫码提示音"
            } ]
        }
    },
    onLoad: function(t) {
        this.resjson(t.type), this.setData(e({
            type: t.type
        }, "formData.radioA", t.str)), "success" == t.type ? wx.setNavigationBarTitle({
            title: "扫码成功提示音"
        }) : wx.setNavigationBarTitle({
            title: "扫码失败提示音"
        });
    },
    resjson: function(e) {
        var t = this;
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        });
        var i = new Date().getTime();
        return a.request({
            url: r.ma4Path,
            method: "get"
        }).then(function(a) {
            wx.canIUse("reportPerformance") && wx.reportPerformance(1002, Number(new Date().getTime() - i), r.ma4Path);
            var o = a.data[e];
            console.log(o);
            var n = o.map(function(e) {
                return {
                    name: e.title_cn,
                    value: e.value,
                    url: e.url
                };
            });
            console.log(n), t.setData({
                checkItems: n
            }), wx.hideLoading();
        }).catch(function(e) {
            wx.hideLoading();
        });
    },
    handleChange: function(t) {
        this.setData(e({}, "formData.".concat(t.target.id), t.detail.value)), this.data.checkItems.map(function(e) {
            e.value == t.detail.value && o(e.url);
        }), console.log(t);
    },
    handleFormSubmit: function(e) {
        var t = this;
        if (e.detail.validStatus) {
            var a = {};
            this.data.checkItems.map(function(e) {
                e.value == t.data.formData.radioA && (a = e);
            }), i.userInfo[this.data.type] = a, wx.navigateBack({
                delta: 1
            });
        }
        console.log(e);
    }
});