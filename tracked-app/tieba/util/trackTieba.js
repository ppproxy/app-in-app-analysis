Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

/**
                                                                                                                                                                                                                                                                   * 贴吧打点，同智能版，此打点可以让数据组拿到日志，和小程序自带打点不同
                                                                                                                                                                                                                                                                   * @file trackTieba.js
                                                                                                                                                                                                                                                                   * @author lishuaishuai01
                                                                                                                                                                                                                                                                   */ exports.trackTiebaView = trackTiebaView;

exports.trackTiebaClick = trackTiebaClick;

exports.trackTiebaError = trackTiebaError;

var _util = require("./util");

var url = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK/tb/img/track.gif";

// event_url， searchid 必须有，可以为空
var task_type = "baidu_smallapp";

/** ~~weixin only begin~~ */ task_type = "weixin_smallapp";

/** ~~weixin only end~~ */ var system = (0, _util.getGlobalData)("systemInfo") || wx.getStorageSync("systemInfo") || null;

var platform = system && system.platform || "";

// 0:其他，1:iphone，2:android
var platform_type = 0;

if (platform == "ios") {
    platform_type = 1;
} else if (platform == "android") {
    platform_type = 2;
}

var baseParams = {
    task: task_type,
    cuid: (0, _util.getGlobalData)("cuid") || wx.getStorageSync("cuid") || "",
    event_cuid: (0, _util.getGlobalData)("cuid") || wx.getStorageSync("cuid") || "",
    browser: system && system.host || "",
    uid: (0, _util.getGlobalData)("baiduid") || wx.getStorageSync("baiduid") || "",
    os: platform_type,
    event_day: (0, _util.getTimeValue)(),
    event_time: Date.now(),
    userid: (0, _util.getGlobalData)("uid") || "",
    event_url: "",
    searchid: "",
    page_type: +(0, _util.getGlobalData)("callNAScene") === 1036 ? "share" : "",
    event_type: task_type,
    event_page_type: "landing",
    // 防作弊标识，必传
    is_spam: 0
};

/**
 * 打点公共函数
 * @param {Object} params 动态参数
 */ function trackTieba(type, params) {
    // 下面字段因为时效性问题，需要在点击时候实时获取
    var system = (0, _util.getGlobalData)("systemInfo") || wx.getStorageSync("systemInfo") || null;
    var data = _extends({
        type: type,
        locate: params.locate || "",
        event_page_name: params.page || "",
        time_stamp: new Date().getTime(),
        system: system && system.system || "",
        wise_sample_id: (0, _util.getMixSid)(),
        model: system && system.model || "",
        from: (0, _util.getFrFromScene)((0, _util.getGlobalData)("callNAScene"))
    }, baseParams, params);
    wx.request({
        url: url,
        data: data,
        method: "GET",
        defer: true
    });
}

/**
 * 曝光打点
 * @param {Object} params 动态参数
 */ function trackTiebaView(params) {
    trackTieba("view", params);
}

/**
 * 点击打点
 * @param {Object} params 动态参数
 */ function trackTiebaClick(params) {
    trackTieba("click", params);
}

/**
 * 错误打点
 * @param {Object} params 动态参数
 */ function trackTiebaError() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    params.locate = "tb_smallapp_error";
    trackTieba("error", params);
}