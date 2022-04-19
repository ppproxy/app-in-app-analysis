var _util = require("../../util/util");

var isPan = /.*((https|http):\/\/pan\.baidu\.com\/[a-zA-Z0-9\/#=%_\?]+)\b/;

/**
                                                                             * @file 网盘链接组件
                                                                             */ var indexReg = /https:\/\/tieba\.baidu\.com\/index(\.html|\/tbwise\/forum)(\?|$)/;

var frsReg = /https:\/\/tieba\.baidu\.com\/f\?(\w+=\w*&+)*(kw|kz)=([^&]*)[&$]?/;

var pbReg = /https:\/\/tieba\.baidu\.com\/p\/(\d+)(\?|$)/;

var userReg = /https:\/\/tieba\.baidu\.com\/(home\/main|index\/tbwise\/mine)(\?|$)/;

Component({
    properties: {
        linkText: {
            type: "String",
            value: "",
            observer: function observer(value) {
                value = value.trim();
                var jumpUrl = "";
                if (isPan.test(value)) {
                    this.setData({
                        isPan: true
                    });
                }
                if (pbReg.test(value)) {
                    var query = pbReg.exec(value);
                    var tid = query && query[1];
                    jumpUrl = tid ? "/pages/pb/pb?tid=" + tid : "";
                } else if (frsReg.test(value)) {
                    var _query = frsReg.exec(value);
                    var kw = _query && _query[3];
                    jumpUrl = kw ? "/pages/frs/frs?kw=" + kw : "";
                } else if (indexReg.test(value)) {
                    jumpUrl = "/pages/index/index";
                } else if (userReg.test(value)) {
                    jumpUrl = "pages/account/account";
                }
                this.setData({
                    jumpUrl: jumpUrl
                });
            }
        }
    },
    data: {
        jumpUrl: "",
        isPan: false
    },
    methods: {
        goLink: function goLink() {
            var link = this.properties.linkText;
            var env = (0, _util.getGlobalData)("__type__");
            if (this.data.isPan) {
                if (env === "weixin") {
                    wx.setClipboardData({
                        data: link,
                        success: function success() {
                            wx.showToast({
                                title: "复制成功",
                                icon: "none"
                            });
                        }
                    });
                } else {
                    wx.navigateToSmartProgram({
                        appKey: "OyIvf6LYVhKkbIHS1USP7xnSKYxc36SH",
                        // 要打开的小程序 App Key
                        path: "pages/outsite-chain/share-code/index?url=" + link + "&from=tieba",
                        // 打开的页面路径，如果为空则打开首页
                        extraData: {},
                        success: function success(res) {// do somthing
                        },
                        fail: function fail(err) {// do somthing
                        }
                    });
                }
            }
            if (this.data.jumpUrl) {
                wx.navigateTo({
                    url: this.data.jumpUrl
                });
            }
        }
    }
});