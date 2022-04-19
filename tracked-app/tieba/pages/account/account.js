var _util = require("../../util/util.js");

var _url = require("../../util/url");

var _release = require("../../release");

var _trackTieba = require("../../util/trackTieba.js");

/**
 * @file account
 * @author wz
 */ Page({
    data: {
        IMG_CDN: _url.IMG_CDN,
        portrait: "",
        isLoading: true,
        isLogin: false,
        // 是否登录贴吧
        name: "",
        isWx: false,
        // 是否在微信
        isUnbind: false,
        // 是否解绑成功
        isAuth: false,
        // 是否微信授权
        clickNum: 0
    },
    onLoad: function onLoad() {
        (0, _util.track)("mine_tab");
    },
    onReady: function onReady() {
        // 页面曝光打点
        (0, _trackTieba.trackTiebaView)({
            page: "page/account/account",
            fr: ""
        });
    },
    onShow: function onShow() {
        (0, _util.updatePoint)();
        (0, _util.track)("mine_tab");
        this.initUser();
        this.clickNum = 0;
        // 页面曝光打点
                (0, _trackTieba.trackTiebaView)({
            page: "page/account/account",
            locate: "tb_smallapp_account_view",
            fr: ""
        });
    },
    // 初始化页面信息
    initUser: function initUser() {
        var self = this;
        var wxInfo = (0, _util.getGlobalData)("wxInfo");
        var isAuth = !!wxInfo;
        var isLogin = !!(0, _util.getBDUSS)();
        var isUnbind = wx.getStorageSync("wechatBindStatus") === "unbind";
        var isWx = (0, _util.getGlobalData)("__type__") === "weixin";
        var oldTime = (0, _util.getGlobalData)("syncreqtimestamp") || 0;
        var newTime = new Date().getTime();
        /**
     * SYNC接口是查询登录状态，但是后端要求不能短时间内连续发请求，会造成数据库写错误（这不是基本的高并发？）
     * 在onlaunch里，已经sync了一次，会记录时间，登录页的onshow 判断下间隔，小于1s就不发请求了
     * 但是onshow里可能onlanuch里的sync请求还没回来，导致获取失败，所以用一个timer来轮询
     * 这个处理可能不是最好的办法，但是为了改动最少，先这样
     *
     */        if (isLogin) {
            if (newTime - oldTime > 1e3) {
                (0, _util.getNewTbs)().then(function() {
                    var _getGlobalData = (0, _util.getGlobalData)("tbUser"), name = _getGlobalData.name, portrait = _getGlobalData.portrait;
                    if (name || portrait) {
                        self.setData({
                            name: name,
                            portrait: portrait
                        });
                    } else {
                        isLogin = false;
                    }
                });
            } else {
                var tid = setInterval(function() {
                    var obj = (0, _util.getGlobalData)("syncres");
                    if (obj && obj.user) {
                        self.setData({
                            name: obj.user.show_nickname || obj.user.name_show,
                            portrait: obj.user.portrait_url
                        });
                        clearInterval(tid);
                    }
                }, 200);
            }
        }
        if (!isLogin && isAuth) {
            var avatarUrl = wxInfo.avatarUrl, nickName = wxInfo.nickName;
            self.setData({
                name: nickName,
                portrait: avatarUrl
            });
        }
        self.setData({
            isLoading: false,
            isWx: isWx,
            isAuth: isAuth,
            // isUnbind,
            isLogin: isLogin
        });
    },
    login: function login() {
        var _this = this;
        if (wx.canIUse("button.open-type.login")) {
            this.onShow();
        } else {
            (0, _util.toLogin)(function() {
                _this.onShow();
            });
        }
    },
    switchAccount: function switchAccount() {
        wx.showModal({
            title: "切换账号",
            content: "每日重复登录次数有限，请谨慎操作哦~",
            success: function cb(res) {
                if (res.cancel) {// 隐藏弹框
                } else {
                    // wechatUnbind('/pages/login/login', getGlobalData('bdstoken'), function (errno, errmsg) {
                    //     if (errno === 1) {
                    //         // 处理bduss失效
                    //         self.login();
                    //     } else {
                    //         swan.showToast({
                    //             title: errmsg || '',
                    //             icon: 'none'
                    //         });
                    //     }
                    // });
                    wx.navigateTo({
                        url: "/pages/login/login"
                    });
                }
            }
        });
    },
    goAccountList: function goAccountList(e) {
        var category = e.currentTarget.dataset.category;
        if (category === "complaint") {
            wx.navigateTo({
                url: "/pages/frs/frs?kw=贴吧意见反馈"
            });
            return;
        }
        if (category === "posts") {
            (0, _util.track)("mine_post_click");
        } else {
            (0, _util.track)("mine_collect_click");
        }
        wx.navigateTo({
            url: "/pages/accountlist/accountlist?category=" + category
        });
    },
    showVersion: function showVersion() {
        // 这里主要是点击头像10次，显示一下app.json中的release字段
        // 表示发布的日期，方便上线以后看是不是新版本
        this.clickNum++;
        if (this.clickNum >= 10) {
            var res = wx.getSystemInfoSync();
            var obj = {};
            // 基础库版本
                        obj.SDKVersion = res.SDKVersion;
            // 客户端平台
                        obj.platform = res.platform;
            obj.model = res.model;
            obj.swanNativeVersion = res.swanNativeVersion;
            obj.version = res.version;
            obj.release = (0, _release.getRelease)();
            this.clickNum = 0;
            wx.showModal({
                content: JSON.stringify(obj),
                showCancel: false,
                confirmText: "确定"
            });
        }
    }
});