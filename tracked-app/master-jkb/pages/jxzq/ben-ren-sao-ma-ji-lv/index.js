var t = getApp(), a = t.request, i = (t.config, t.wxp, t.userStore, t.dayjs), e = require("../../../utils/util"), s = e.apiErrorAndNavigateBack;

e.apiError, require("../../../utils/customErrors"), require("../../../config/index").jsonCdn;

Page({
    data: {
        windowHeight: "",
        rq: "",
        jintian: "",
        startTime: "",
        jiesushijian: "",
        show: !1,
        pageNum: 1,
        list: [],
        totalPages: 1
    },
    onLoad: function(t) {
        var a = new Date(), e = i(a).format("DD"), s = ~~i(a).format("MM") + "月" + ~~e + "日", o = i(a).format("YYYY-MM-DD"), n = new Date(new Date().getTime() - 5184e5);
        n = i(n).format("YYYY-MM-DD"), console.log(n), this.libiao(o, o, this.data.pageNum), 
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            jiesushijian: o,
            rq: s,
            jintian: o,
            startTime: n
        });
    },
    bindDateChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value);
        var a = i(t.detail.value).format("DD"), e = i(t.detail.value).format("MM");
        console.log(~~e + "月" + ~~a + "日");
        var s = ~~e + "月" + ~~a + "日";
        this.setData({
            rq: s,
            jintian: t.detail.value,
            show: !this.data.show,
            pageNum: 1,
            list: []
        }), this.libiao(t.detail.value, this.data.jiesushijian, this.data.pageNum);
    },
    libiao: function(t, i, e) {
        var o = this;
        wx.showLoading({
            title: "加载中",
            mask: !0
        });
        var n = {
            url: "/jingxinju/jkb/qrCode/getMyScanLog",
            method: "POST",
            data: {
                endtime: t,
                pageNum: e,
                pageSize: "10",
                starttime: t
            }
        };
        a(n).then(function(t) {
            console.log(t.list, "接口返回的code");
            var a = t.list;
            o.setData({
                list: o.data.list.concat(a),
                totalPages: t.totalPages
            }), wx.hideLoading();
        }).catch(function(t) {
            wx.hideLoading(), s(n, t);
        });
    },
    show: function() {
        this.setData({
            show: !this.data.show
        });
    },
    onReachBottom: function() {
        this.data.totalPages == this.data.pageNum ? wx.showToast({
            title: "已加载全部",
            icon: "none"
        }) : (this.setData({
            pageNum: this.data.pageNum + 1
        }), this.libiao(this.data.jintian, this.data.jiesushijian, this.data.pageNum));
    }
});