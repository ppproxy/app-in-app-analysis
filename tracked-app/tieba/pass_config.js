Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * @file pass config
 * @author wz
 */
// qatestc测试环境域名
// export const hostName= 'https://wappass.qatest.baidu.com/';
// export const hostName= 'https://wappassalltest.baidu.com/';
// 线上环境域名
var hostName = exports.hostName = "https://wappass.baidu.com";

// 产品线配置的tpl
var tpl = exports.tpl = "tb";

// 是否开启debug模式
var DEBUG = exports.DEBUG = false;

// 是否开启 登录后webview跳转模式
var isWebview = exports.isWebview = false;

// 是否开启微信授权登录
var isWechatLogin = exports.isWechatLogin = true;

// 产品线配置的appid
var appType = "weixin";

var appIdMap = {
    qq: "1111264064",
    weixin: "wx7a2de562948f667b"
};

var APPID = exports.APPID = appIdMap[appType];

// 产品线配置的pass登录页微信授权登录完成跳转地址
var wechatLoginBackUrl = exports.wechatLoginBackUrl = "";

// 是否接入游客帐号登录
var isGuideLogin = exports.isGuideLogin = false;