var o = require("../../utils/request").request;

Page({
    data: {
        companyName: "",
        imgUrl: "",
        companyAddress: "",
        companyCode: "",
        companyId: "",
        socialCreditCode: "",
        errorpage: !1
    },
    onLoad: function(o) {
        var t = this;
        this.checkcompanyId(o.gridPointId).then(function(o) {
            return t.fetchCommpanyInfo(o);
        }).then(function(o) {
            t.createQrCode();
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(o) {
        return "button" === o.from && console.log(o.target), {
            title: "邀请你加入企业：" + this.data.companyName,
            path: "/pages/application/index?socialCreditCode=" + this.data.socialCreditCode,
            imageUrl: this.data.imgUrl
        };
    },
    saveImag: function() {
        wx.downloadFile({
            url: this.data.imgUrl,
            success: function(o) {
                var t = o.tempFilePath;
                wx.saveImageToPhotosAlbum({
                    filePath: t,
                    success: function(o) {
                        wx.showToast({
                            title: "已保存"
                        });
                    },
                    fail: function(o) {
                        console.log(o);
                    },
                    complete: function(o) {
                        console.log(o);
                    }
                });
            },
            fail: function(o) {
                console.log(o);
            }
        });
    },
    fetchCommpanyInfo: function(t) {
        var e = this;
        return wx.showLoading({
            title: "加载中"
        }), new Promise(function(n, a) {
            o({
                url: "/resumption/company/" + t,
                method: "GET",
                data: {}
            }).then(function(o) {
                wx.hideLoading();
                var t = o;
                e.setData({
                    companyName: t.companyName,
                    companyAddress: t.companyAddress,
                    companyId: t.id
                }), n();
            }).catch(function(o) {
                wx.hideLoading(), console.error(o), a(o);
            });
        });
    },
    backtonew: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    checkcompanyId: function(t) {
        var e = this;
        return new Promise(function(n, a) {
            o({
                url: "/resumption/point/company/" + t,
                method: "GET"
            }).then(function(o) {
                o ? (e.setData({
                    socialCreditCode: o.socialCreditCode
                }), n(o.socialCreditCode)) : (e.setData({
                    errorpage: !0
                }), wx.setNavigationBarTitle({
                    title: "提示"
                })), wx.hideLoading();
            }).catch(function(o) {
                console.error(o), wx.hideLoading();
            });
        });
    },
    createQrCode: function() {
        var t = this;
        o({
            url: "/resumption/manager/createQrCode",
            method: "POST",
            data: {
                socialCreditCode: this.data.socialCreditCode,
                companyId: this.data.companyId,
                page: "pages/application/index"
            }
        }).then(function(o) {
            t.setData({
                imgUrl: o.qrCodeKey
            });
        }).catch(function(o) {
            console.error(o);
        }), this.setData({
            imgUrl: this.data.imgUrl ? this.data.imgUrl : "/images/relativecode/correlationcode.png"
        });
    }
});