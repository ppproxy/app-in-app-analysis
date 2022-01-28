var t = getApp(), a = t.request, i = (t.config, t.wxp, t.userStore, t.dayjs), e = require("../../../utils/util"), o = (e.apiErrorAndNavigateBack, 
e.apiError, require("../../../utils/customErrors"), require("../../../config/index").jsonCdn, 
require("../../../utils/mtaTarget.js").newspapers);

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
        var a = new Date(), e = i(a).format("DD"), o = ~~i(a).format("MM") + "月" + ~~e + "日", s = i(a).format("YYYY-MM-DD"), n = new Date(new Date().getTime() - 5184e5);
        n = i(n).format("YYYY-MM-DD"), console.log(n), this.libiao(s, s, this.data.pageNum), 
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            jiesushijian: s,
            rq: o,
            jintian: s,
            startTime: n
        });
    },
    handleTap: function() {
        if (0 == this.data.list.length) wx.showToast({
            title: "当前日期暂无数据",
            icon: "none",
            duration: 2e3
        }); else {
            wx.showLoading({
                title: "努力加载中",
                mask: !0
            });
            var t = {
                url: "/poi/jkb/poi/log",
                method: "get",
                data: {
                    time: this.data.jintian
                }
            };
            a(t).then(function(t) {
                o({
                    eventId: "derivedrecord_load_Success"
                }), console.log(t, "接口返回的code"), wx.navigateTo({
                    url: "/pages/jxzq/daochuchenggong/success/index?url=" + t
                }), wx.hideLoading();
            }).catch(function(t) {
                wx.showModal({
                    title: "温馨提示",
                    content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
                    confirmText: "确定",
                    showCancel: !1,
                    success: function(t) {}
                }), wx.hideLoading();
            });
        }
    },
    bindDateChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value);
        var a = i(t.detail.value).format("DD"), e = i(t.detail.value).format("MM");
        console.log(~~e + "月" + ~~a + "日");
        var o = ~~e + "月" + ~~a + "日";
        this.setData({
            rq: o,
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
        }), a({
            url: "/jingxinju/jkb/qrCode/showUsed",
            method: "POST",
            data: {
                endtime: t,
                pageNum: e,
                pageSize: "10",
                starttime: t,
                format: "1"
            }
        }).then(function(t) {
            console.log(t.codeCountByIdDTO.detail, "接口返回的code");
            var a = t.codeCountByIdDTO.detail;
            o.setData({
                list: o.data.list.concat(a),
                totalPages: t.codeCountByIdDTO.totalPages
            }), wx.hideLoading();
        }).catch(function(t) {
            wx.hideLoading();
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