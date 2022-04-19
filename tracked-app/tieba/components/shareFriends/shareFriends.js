var _util = require("../../util/util");

var _url = require("../../util/url");

/**
 * @file 助理吊起app功能
 */ Component({
    properties: {
        tid: {
            type: String,
            value: ""
        },
        reportPIcData: {
            type: Object,
            value: function value() {
                return {};
            }
        },
        showShareFrame: {
            type: Boolean,
            value: false,
            observer: function observer(v) {
                if (!v) {
                    return;
                }
                this.renderPic();
            }
        }
    },
    data: {
        who: "",
        imageH: "",
        isCenter: false,
        IMG_CDN: _url.IMG_CDN,
        pic: "",
        isIPX: (0, _util.getGlobalData)("isIphoneX")
    },
    detached: function detached() {
        this.delay && clearTimeout(this.delay);
    },
    methods: {
        renderPic: function renderPic() {
            var _this = this;
            var datas = this.data.reportPIcData;
            var imgH = 207 * +datas.imgh / +datas.imgw;
            this.setData({
                imageH: imgH.toFixed(1)
            });
            this.delay && clearTimeout(this.delay);
            this.delay = setTimeout(function() {
                _this.setData({
                    pic: datas.url
                });
            }, 300);
        },
        close: function close() {
            this.setData({
                pic: ""
            });
            this.triggerEvent("wxCloseFrame", {});
        },
        authorize: function authorize() {
            var self = this;
            wx.getSetting({
                success: function success(res) {
                    if (res.authSetting["scope.writePhotosAlbum"]) {
                        self.saveImg();
                    } else if (res.authSetting["scope.writePhotosAlbum"] == null) {
                        wx.authorize({
                            scope: "scope.writePhotosAlbum",
                            success: function success(res) {
                                self.saveImg();
                            },
                            fail: function fail(err) {
                                wx.showToast({
                                    title: "您没有授权，无法保存到相册",
                                    icon: "none"
                                });
                            }
                        });
                    } else {
                        wx.openSetting({
                            success: function success(res) {
                                if (res.authSetting["scope.writePhotosAlbum"]) {
                                    self.saveImg();
                                } else {
                                    wx.showToast({
                                        title: "您没有授权，无法保存到相册",
                                        icon: "none"
                                    });
                                }
                            }
                        });
                    }
                }
            });
        },
        saveImg: function saveImg() {
            var picPath = this.data.pic;
            if (!picPath) {
                return;
            }
            wx.downloadFile({
                url: picPath,
                success: function success(res) {
                    if (res.statusCode === 200) {
                        wx.saveImageToPhotosAlbum({
                            filePath: res.tempFilePath,
                            success: function success() {
                                wx.showToast({
                                    title: "已保存到本地相册，快去分享吧",
                                    icon: "none"
                                });
                            },
                            fail: function fail(err) {
                                console.log("saveImageToPhotosAlbum fail", err);
                            }
                        });
                    }
                },
                fail: function fail(err) {
                    console.log("downloadFile fail", err);
                }
            });
        }
    }
});