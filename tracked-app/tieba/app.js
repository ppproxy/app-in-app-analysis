var _util = require("./util/util.js");

var _observable = require("./util/observable.js");

var _observable2 = _interopRequireDefault(_observable);

var _trackTieba = require("./util/trackTieba");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

// initData执行一次就够了，但是因为prefetch的时序问题，需要判断下
var init_flag = false;

var systemInfo = wx.getStorageSync("systemInfo") || {};

var dajialiaoSid = [ 192890, 192902, 192903, 192904, 192905, 192906, 192907, 192908, 192909, 197222, 197221, 197224 ];

function initData(options, ins) {
    if (init_flag) {
        return;
    }
    // console.log('app exec initData');
        init_flag = true;
    var instance = ins || getApp();
    var miniAppType = (0, _util.getGlobalData)("__type__", instance);
    (0, _util.setGlobalData)("isBaidu", miniAppType === "baidu", instance);
    if (typeof (0, _util.getGlobalData)("syncreqtimestamp", instance) === "undefined") {
        (0, _util.setGlobalData)("syncreqtimestamp", new Date().getTime(), instance);
    }
    // override重写navigator方法，对方法进行urlencode和urldecode
        (0, _util.override)();
    (0, _observable2.default)(wx, instance);
    // swan可观察化
    // 小程序来源，后面统计会用
        var scene = options.scene || "";
    (0, _util.setGlobalData)("scene", scene, instance);
    // 挂载systemInfo到内存
    // 先看看storage有没有存，有就直接读取，否则再查询
        if (systemInfo && JSON.stringify(systemInfo) != "{}" && systemInfo.platform && systemInfo.host) {
        (0, _util.setGlobalData)("systemInfo", systemInfo, instance);
        if (systemInfo && systemInfo.host !== "baiduboxapp") {
            (0, _util.setGlobalData)("isBrowser", true, instance);
            wx.setStorageSync("isBrowser", true);
        } else {
            (0, _util.setGlobalData)("isBrowser", false, instance);
            wx.setStorageSync("isBrowser", false);
        }
    } else {
        try {
            systemInfo = wx.getSystemInfoSync && wx.getSystemInfoSync();
            if (!(systemInfo instanceof Error)) {
                wx.setStorageSync("systemInfo", systemInfo);
                (0, _util.setGlobalData)("systemInfo", systemInfo, instance);
            } else {
                (0, _util.setGlobalData)("systemInfo", {}, instance);
                wx.setStorageSync("systemInfo", {});
            }
            wx.setStorageSync("systemInfo", systemInfo);
            (0, _util.setGlobalData)("systemInfo", systemInfo, instance);
            // console.log('调取systeminfo端能力');
                        if (systemInfo.host !== "baiduboxapp") {
                (0, _util.setGlobalData)("isBrowser", true, instance);
                wx.setStorageSync("isBrowser", true);
            } else {
                (0, _util.setGlobalData)("isBrowser", false, instance);
                wx.setStorageSync("isBrowser", false);
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            (0, _util.setGlobalData)("systemInfo", {}, instance);
            wx.setStorageSync("systemInfo", {});
            (0, _util.setGlobalData)("isBrowser", false, instance);
            wx.setStorageSync("isBrowser", false);
        }
    }
    // 判断机型信息
        (0, _util.setGlobalData)("isIphoneX", (0, _util.isIphoneX)((0, _util.getGlobalData)("systemInfo", instance)), instance);
    // 订阅消息tab的红点
        (0, _util.subscribeMsg)(instance, "msgCount", "app");
    var interval = (0, _util.getGlobalData)("pollInterval", instance) * 1e3 || 12e4;
    // 轮询间隔
        (0, _util.pollingMsg)(instance, interval);
    // 轮询消息
        (0, _util.setGlobalData)("readTids", {}, instance);
    /** ~~weixin only begin~~ */
    // 检测是否已经获得微信授权
        wx.getSetting({
        success: function success(res) {
            if (res.authSetting["scope.userInfo"]) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                    success: function success(res) {
                        (0, _util.setGlobalData)("wxInfo", res.userInfo);
                    }
                });
            }
            // 微信获取bduss
                        var bduss = (0, _util.getBDUSS)();
            if (bduss) {
                wx.setStorageSync("bduss", bduss);
                (0, _util.setGlobalData)("bduss", bduss, instance);
                (0, _util.setGlobalData)("syncreqtimestamp", new Date().getTime(), instance);
                (0, _util.getNewTbs)();
            } else {
                (0, _util.setGlobalData)("syncreqtimestamp", new Date().getTime(), instance);
                (0, _util.getNewTbs)();
            }
        }
    });
    /** ~~weixin only end~~ */
    // cuid  imei先给个空
        (0, _util.setGlobalData)("cuid", "", instance);
    (0, _util.setGlobalData)("imei", "", instance);
}

function isDajialiao(options) {
    var _options$query = options.query, sid = _options$query.sid, tplname = _options$query.tplname;
    var hitTest = sid && dajialiaoSid.some(function(item) {
        return sid.indexOf(item.toString()) !== -1;
    });
    var hitTemplate = tplname === "tieba_newforumxml";
    return Boolean(hitTest || hitTemplate);
}

function checkUpdate(options) {
    if (wx.canIUse("getUpdateManager")) {
        var updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate(function(res) {
            if (res.hasUpdate) {
                updateManager.onUpdateReady(function() {
                    (0, _trackTieba.trackTiebaView)({
                        locate: "pop_up",
                        page: options.path
                    });
                    wx.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否立即更新？",
                        success: function success(res) {
                            if (res.confirm) {
                                updateManager.applyUpdate();
                            }
                            (0, _trackTieba.trackTiebaClick)({
                                locate: res.confirm ? "pop_ups" : "pop_upc",
                                page: options.path
                            });
                        }
                    });
                });
            }
        });
    }
}

App({
    onLaunch: function onLaunch(options) {
        initData(options, this);
        checkUpdate(options);
    },
    onShow: function onShow(options) {
        (0, _util.setGlobalData)("cuid", wx.getStorageSync("cuid"), this);
        (0, _util.setGlobalData)("imei", wx.getStorageSync("imei"), this);
        (0, _util.setGlobalData)("idfa", wx.getStorageSync("idfa"), this);
        (0, _util.setGlobalData)("baiduid", wx.getStorageSync("baiduid"), this);
        (0, _util.setGlobalData)("initPath", options.path, this);
        init_flag = false;
        var scene = options.scene || "";
        var _options$query2 = options.query, fr = _options$query2.fr, sid = _options$query2.sid;
        (0, _util.setGlobalData)("callNAScene", scene, this);
        fr && (0, _util.setGlobalData)("fr", fr, this);
        sid && (0, _util.setGlobalData)("outerSid", sid, this);
        if (isDajialiao(options) && systemInfo.host === "baiduboxapp") {
            (0, _util.setGlobalData)("forbidWakeUp", true, this);
        }
    },
    onUnload: function onUnload() {},
    globalData: {
        __type__: "weixin"
    }
}); // 因为在preFetch模式下，不会执行APP.onLaunch，所以只能放在app({})外面才能执行
// 这个问题已经提交sdk那边优化，后续再改
// console.log('app outside');