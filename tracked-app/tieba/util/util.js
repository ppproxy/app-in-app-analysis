Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.metaImage = exports.GEN_PORTRAIT = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

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
                                                                                                                                                                                                                                                                   * 请求封装
                                                                                                                                                                                                                                                                   * @file request
                                                                                                                                                                                                                                                                   * @author wuzhen
                                                                                                                                                                                                                                                                   */
// import {toLogin} from './login';
exports.get = get;

exports.extendSign = extendSign;

exports.post = post;

exports.authPost = authPost;

exports.getRandomTxt = getRandomTxt;

exports.getGlobalData = getGlobalData;

exports.setGlobalData = setGlobalData;

exports.isIphoneX = isIphoneX;

exports.getStatusHeight = getStatusHeight;

exports.urlParamToStr = urlParamToStr;

exports.getSinglePicWH = getSinglePicWH;

exports.urlParamEncode = urlParamEncode;

exports.urlParamDecode = urlParamDecode;

exports.override = override;

exports.px2rpx = px2rpx;

exports.rpx2px = rpx2px;

exports.throttle = throttle;

exports.debounce = debounce;

exports.checkRepeat = checkRepeat;

exports.setFrsHistory = setFrsHistory;

exports.track = track;

exports.getNetType = getNetType;

exports.getClientType = getClientType;

exports.trackNavToOtherApp = trackNavToOtherApp;

exports.getBDUSS = getBDUSS;

exports.getRandomId = getRandomId;

exports.fastConcat = fastConcat;

exports.compareVersion = compareVersion;

exports.getSystemType = getSystemType;

exports.renderAgree = renderAgree;

exports.subscribeMsg = subscribeMsg;

exports.updatePoint = updatePoint;

exports.goHybridMsg = goHybridMsg;

exports.getGroupMsg = getGroupMsg;

exports.pollingMsg = pollingMsg;

exports.getNewTbs = getNewTbs;

exports.baiduLogin = baiduLogin;

exports.baiduLoginSuccess = baiduLoginSuccess;

exports.loginModal = loginModal;

exports.weixinLogin = weixinLogin;

exports.toLogin = toLogin;

exports.addLoginCb = addLoginCb;

exports.getCurrentUrl = getCurrentUrl;

exports.getAdEid = getAdEid;

exports.getSchemeData = getSchemeData;

exports.appendZero = appendZero;

exports.getTimeValue = getTimeValue;

exports.getSystemTypeInfo = getSystemTypeInfo;

exports.getViewportHeight = getViewportHeight;

exports.getSystemOptions = getSystemOptions;

exports.getBannerOptions = getBannerOptions;

exports.openAdWebPage = openAdWebPage;

exports.createDownloadApp = createDownloadApp;

exports.packedArraysByIdx = packedArraysByIdx;

exports.loadBannerData = loadBannerData;

exports.dateFormat = dateFormat;

exports.getAndroidSource = getAndroidSource;

exports.getQueryString = getQueryString;

exports.isHitTest = isHitTest;

exports.getMixSid = getMixSid;

exports.getOperationConfig = getOperationConfig;

exports.getPageFromPath = getPageFromPath;

exports.getFrFromScene = getFrFromScene;

exports.getTokenFromSchema = getTokenFromSchema;

var _url2 = require("./url.js");

var _md = require("./md5.js");

var _filters = require("./filters");

var _loginFn = require("../pass_utils/loginFn");

var _bannerModifier = require("./bannerModifier.js");

var _bannerModifier2 = _interopRequireDefault(_bannerModifier);

var _trackTieba = require("./trackTieba.js");

var _wakeup = require("./wakeup");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

/**
 * 异步提交
 *
 * @param {Object}   options                异步提交参数 除了swan.request正常参数之外 还包括以下：
 * @param {boolean}  options.showLoading    是否展示loading 默认为false
 * @param {string}   options.loadingText    loading显示的文案 默认：数据加载中
 * @param {boolean}  options.race           是否竞态处理 默认不做竞态处理
 * @param {Function} options.resFormat      response解析函数 不传按照默认格式解析
 * @param {Function} options.success        成功回调 请求成功但no为0时会调用
 * @param {Function} options.fail           错误回调 请求成功但no不为0时或者请求失败时会调用
 *                                          如果传fail了 就不会调用默认的错误处理
 */ function request(method, url, param, errMsg) {
    var showLoading = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var loginCb = arguments[5];
    var self = this;
    if (showLoading) {
        wx.showLoading({
            title: "加载中...",
            mask: true
        });
    }
    var openFailPage = void 0;
    if (param && param.openFailPage) {
        openFailPage = param.openFailPage;
        delete param.openFailPage;
    }
    var tbsInStorage = getGlobalData("tbs") || wx.getStorageSync("tbs") || "";
    var nickName = getGlobalData("nickname") || "";
    var callfrom = typeof wx !== "undefined" ? "weixin" : "";
    var sourcePlatform = "baidu";
    /** ~~weixin only begin~~ */    sourcePlatform = "weixin";
    /** ~~weixin only end~~ */    var randomId = getGlobalData("randomId") || "";
    var swanid = getGlobalData("swanid") || "";
    if (!randomId) {
        // 判断storage中有没有随机数，没就生成一个
        var tempId = getRandomId();
        setGlobalData("randomId", tempId);
        randomId = tempId;
    }
    var systemInfo = getGlobalData("systemInfo") || wx.getStorageSync("systemInfo");
    var host = "";
    if (systemInfo && JSON.stringify(systemInfo) != "{}" && systemInfo.host) {
        setGlobalData("systemInfo", systemInfo);
        host = getGlobalData("systemInfo") && getGlobalData("systemInfo").host || wx.getStorageSync("systemInfo").host || "";
    } else {
        systemInfo = wx.getSystemInfoSync();
        if (!(systemInfo instanceof Error)) {
            setGlobalData("systemInfo", systemInfo);
            host = systemInfo.host;
            // console.log('getSystemInfoSync success', systemInfo);
                } else {
            setGlobalData("systemInfo", {});
            host = "";
            // console.log('getSystemInfoSync fail', systemInfo.message);
                }
    }
    var data = {
        fr: "smallapp",
        timestamp: new Date().getTime(),
        tbs: tbsInStorage,
        itb_tbs: tbsInStorage,
        source_platform: sourcePlatform,
        // obj_param2 代表端外浏览器类型, 端内 baiduboxapp,vivo : vivobrowser,oppo: heytapbrowser, xiaomi: mibrowser
        // call_from: callfrom,
        // server要小写
        randomid: randomId
    };
    if (nickName) {
        data.nick_name = nickName;
    }
    if (callfrom) {
        data.call_from = callfrom;
    }
    if (swanid) {
        data.swanid = swanid;
    }
    var header = {};
    // cookie
        var cookie = getCookie();
    if (cookie) {
        header.Cookie = cookie;
    }
    // post添加Content-Type
        method = method.toUpperCase();
    if (method === "POST") {
        header["Content-Type"] = "application/x-www-form-urlencoded";
    }
    return new Promise(function(resolve, reject) {
        var pages = getCurrentPages();
        var curCtx = pages[pages.length - 1];
        var swan_cuid = getGlobalData("cuid") || wx.getStorageSync("cuid") || "";
        /** ~~weixin only begin~~ */        sendrequest(url, data, method, header, showLoading, loginCb, curCtx, param, swan_cuid, openFailPage, errMsg, resolve, reject);
        /** ~~weixin only end~~ */    });
}

function sendrequest(url, data, method, header, showLoading, loginCb, curCtx, param, cuid, openFailPage, errMsg, resolve, reject) {
    data.swan_cuid = cuid || "";
    data = extendSign(_extends({}, param || {}, data));
    var deferUrl = [ "/sync", "/getGroupMsg", "/playStat", "/recomSiteTids", "/thirdAd", "/track.gif", "/topicList" ];
    wx.request({
        url: url,
        data: data,
        method: method,
        header: header,
        defer: deferUrl.some(function(item) {
            return url.includes(item);
        }),
        // defer是一个延迟fmp结束以后发送，针对非必要接口延迟发送，
        success: function success(res) {
            if (showLoading) {
                wx.hideLoading();
            }
            var data = res.data && res.data.data;
            // 拿abtest实验相关数据，保存一下，这个不保证每次都一样，所以需要每次都更新
                        setGlobalData("ubs_sample_ids", data && data.ubs_sample_ids || "");
            wx.setStorageSync("ubs_sample_ids", data && data.ubs_sample_ids || "");
            setGlobalData("ubs_abtest_config", data && data.ubs_abtest_config || []);
            var no = +res.data.no;
            if (no === 0) {
                resolve(data);
            } else if (no === 3001) {
                // 2017年之前帖子无法访问，重定向
                reject(res.data);
            } else if (no === 2e4 || no === 11e4) {
                // 没登录
                if (loginCb && typeof loginCb === "function") {
                    toLogin(loginCb);
                } else {
                    var page = getCurrentPages();
                    var _url = page[page.length == 0 ? 0 : page.length - 1];
                    if (_url && _url.route && _url.route.includes("pages/msg/msg")) {
                        // 如果是消息页面，直接提示，为什么不弹框登录？
                        // 因为弹框登录后，再回到这个页面，页面的后退失效了
                        wx.showToast({
                            icon: "none",
                            title: "请先登录小程序"
                        });
                    } else {
                        // 否则弹框登录
                        wx.showToast({
                            icon: "none",
                            title: "请先登录小程序",
                            complete: function complete(res) {
                                setTimeout(function() {
                                    toLogin(function() {});
                                }, 1500);
                            }
                        });
                    }
                }
            } else {
                // 后端返回失败信息
                showLoading && wx.hideLoading();
                wx.showToast({
                    icon: "none",
                    title: res.data.error || errMsg || "网络出错了..."
                });
                var system = getGlobalData("systemInfo") || wx.getStorageSync("systemInfo") || null;
                var error_data = {};
                error_data.system = system.system;
                error_data.model = system.model;
                error_data.data = res.data;
                (0, _trackTieba.trackTiebaError)({
                    locate: "tb_smallapp_error",
                    params: JSON.stringify(error_data)
                });
                reject(res.data);
                curCtx && curCtx.setData({
                    isLoading: false,
                    error_code: res.data.no || -1
                });
            }
        },
        fail: function fail(res) {
            var system = getGlobalData("systemInfo") || wx.getStorageSync("systemInfo") || null;
            var error_data = {};
            error_data.system = system.system;
            error_data.model = system.model;
            error_data.data = res;
            (0, _trackTieba.trackTiebaError)({
                locate: "tb_smallapp_error",
                params: JSON.stringify(error_data)
            });
            if (showLoading) {
                wx.hideLoading();
            }
            if (openFailPage) {
                curCtx && curCtx.setData({
                    isBroken: true
                });
            }
            curCtx && curCtx.setData({
                isLoading: false,
                isBroken: true
            });
            showLoading && wx.hideLoading();
            wx.showToast({
                icon: "none",
                title: "网络出错了..."
            });
            reject(res);
            // 网络问题请求失败
                }
    });
}

/**
 * @param {string} url 请求路径
 * @param {object} param 请求参数
 * @param {string} errMsg 兜底信息
 * @param {boolean} showLoading 是否loading
 */ function get(url, param, errMsg) {
    var showLoading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return request("GET", url, param, errMsg, showLoading);
}

/**
 * sign
 *
 * @param  {Object} opts 请求参数
 * @return {Object}      请求参数
 */ function extendSign(opts) {
    var paramStr = "";
    var paramsList = [];
    for (var name in opts) {
        paramsList.push(name);
    }
    paramsList = paramsList.sort(function(x, y) {
        if (x > y) {
            return 1;
        }
        return -1;
    });
    paramsList.forEach(function(name) {
        paramStr += name + "=" + opts[name];
    });
    paramStr += "0039d79dc3cc2075129745a30237a3c4";
    return _extends({}, opts, {
        sign: (0, _md.md5)(paramStr)
    });
}

function post(url, param, errMsg) {
    var showLoading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return request("POST", url, param, errMsg, showLoading);
}

/**
 * 需要登录权限的请求，如：发帖点赞删帖收藏
 * @param {string} url 请求路径
 * @param {object} param 请求参数
 * @param {string} errMsg 兜底信息
 * @param {Function} loginCb 登录并且回调
 */ function authPost(url, param, errMsg, loginCb) {
    return request("POST", url, param, errMsg, false, loginCb);
}

/**
 * 请求相关，后面再改，没时间了
 *
 * @return {string} cookie字符串
 */ function getCookie() {
    var isWx = typeof swan === "undefined";
    var keys = isWx ? [ "cuid", "imei" ] : [ "cuid", "imei", "BDUSS" ];
    var cookie = [];
    keys.map(function(key) {
        var value = wx.getStorageSync(key.toLowerCase());
        if (value) {
            cookie.push(key + "=" + value);
        }
    });
    if (isWx) {
        var userInfo = getGlobalData("userInfo") || wx.getStorageSync("userInfo");
        var bduss = userInfo && userInfo.bduss;
        cookie.push("BDUSS=" + bduss);
    }
    var baiduid = getGlobalData("baiduid") || wx.getStorageSync("baiduid");
    cookie.push("BAIDUID=" + baiduid);
    return cookie.join(";");
}

// =======================================================================================
/**
 * @file  util
 * @author  qinhongxu
 */
// export const TB_DOMAIN = 'https://tieba.baidu.com';
// export const TB_DOMAIN = 'http://liguang03.tieba.otp.baidu.com';
// export const TB_DOMAIN = 'http://pzynobugfe.tieba.otp.baidu.com';
// export const TB_DOMAIN = 'http://kangqinmou.tieba.otp.baidu.com';
// export const TB_DOMAIN = 'http://guojun04.tieba.otp.baidu.com'
// export const TB_DOMAIN = 'http://yyxfe.tieba.otp.baidu.com';
// export const TB_DOMAIN = 'http://sjfe1.tieba.otp.baidu.com';
// export const TB_DOMAIN = 'http://xssfe.tieba.otp.baidu.com';
// export const TB_DOMAIN = 'http://liqianfe.tieba.otp.baidu.com';
var GEN_PORTRAIT = exports.GEN_PORTRAIT = "https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/";

var metaImage = exports.metaImage = "http://t.hiphotos.baidu.com/forum/w=720;g=0/sign=b1d60559b699a9013b3559342dae6d46/f8b978faaf51f3de1a6960299aeef01f382979d0.jpg";

function getRandomTxt() {
    var arr = [ "我有一个大胆的想法…", "说说你的看法…", "我也说一句…", "前方高能，火速评论！", "评论一句，前排打call！", "评论点赞，都要勇往直前~", "咦，不留点儿评论还想走？" ];
    var index = Math.round(Math.random() * 6);
    return arr[index];
}

/**
 * 获取全局数据
 * @param {*} key
 */ function getGlobalData(key) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getApp();
    var returnData = "";
    if (arguments.length === 0) {
        returnData = getApp().globalData;
    } else if (arguments.length === 1) {
        // 只有引用的时候
        if (key && (typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
            returnData = key.globalData;
        } // 只有key的时候
         else if (key && typeof key === "string") {
            returnData = getApp() && getApp().globalData && getApp().globalData[key];
        } else {
            returnData = getApp() && getApp().globalData;
        }
    } else {
        returnData = context && context.globalData[key];
    }
    return returnData;
}

/**
 * 设置全局数据
 * @param {*} key
 * @param {*} value
 */ function setGlobalData(key) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getApp();
    if (context && context.globalData) {
        context.globalData[key] = value;
    } else {
        if (getApp() && getApp().globalData) {
            getApp().globalData[key] = value;
        }
    }
}

/**
 * 判断手机是否有 HomeIndicator ,目前已知 iPhone X，以及 iPhone 10+ 机型有 HomeIndicator
 * @param {*} info
 */ function isIphoneX(info) {
    var model = info.model || "";
    var flag = model.split("<")[0].trim();
    var reg = /iphone (x|[1-9]\d)/gi;
    return reg.test(flag) || flag === "0";
}

/**
 * 获取顶部状态栏高度
 * @param {String} info 系统信息
 */ function getStatusHeight(sys) {
    // 计算是否支持自定义头
    var isSupportHead = void 0;
    var isSupportVideo = void 0;
    var systemInfo = getGlobalData("systemInfo") || wx.getStorageSync("systemInfo");
    if (systemInfo && systemInfo.SDKVersion && (typeof wx === "undefined" ? "undefined" : _typeof(wx)) !== "object") {
        var system = systemInfo.system, SDKVersion = systemInfo.SDKVersion, version = systemInfo.version;
        var benchmark = "2.10.34";
        if (system.indexOf("iOS") !== -1) {
            benchmark = "3.0.39";
        }
        var result = compareVersion(benchmark, SDKVersion);
        var videoRes = compareVersion("11.18", version);
        if (result < 0) {
            isSupportHead = true;
        } else {
            isSupportHead = false;
        }
        isSupportHead = result < 0;
        isSupportVideo = videoRes < 0;
    } else {
        isSupportHead = true;
        isSupportVideo = true;
    }
    setGlobalData("isSupportVideo", isSupportVideo);
    if (sys) {
        var _sys$statusBarHeight = sys.statusBarHeight, statusBarHeight = _sys$statusBarHeight === undefined ? 20 : _sys$statusBarHeight, _sys$navigationBarHei = sys.navigationBarHeight, navigationBarHeight = _sys$navigationBarHei === undefined ? 44 : _sys$navigationBarHei;
        var allH = +navigationBarHeight + +statusBarHeight;
        if (!isSupportHead) {
            allH = 0;
        }
        return {
            statusH: +statusBarHeight,
            titleH: +navigationBarHeight,
            allH: allH
        };
    }
}

/**
 * 将url中的参数变成字符串
 * @param {*} option 需要转化的对象
 * @param {*} filters 需要过滤的参数
 *  @param {*} adds 需要额外添加的参数
 */ function urlParamToStr() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var adds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var param = "";
    var datas = Object.assign(options, adds);
    for (var key in datas) {
        if (!filters.includes(key)) {
            param += key + "=" + datas[key] + "&";
        }
    }
    if (param) {
        param = param.slice(0, -1);
    }
    return param;
}

/**
 * 图片宽高按比例压缩
 * @param {Number} srcW 图片原宽
 * @param {Number} srcH 图片原高
 */ function getSinglePicWH(srcW, srcH) {
    if (!srcW || !srcH) {
        return {};
    }
    var screenH = getApp().globalData.systemInfo.screenWidth;
    // 图片的最大宽度为  （屏幕总宽度-左右padding宽-2* 间隙）/ 3*2+间隙
        var picMaxWH = (screenH - 34 - 2 * 4) / 3 * 2 + 4;
    var singePicWH = (screenH - 34 - 2 * 4) / 3;
    var resultW = srcW;
    var resultH = srcH;
    var isWH = srcW / srcH;
    var picType = "normal";
    if (isWH > 1) {
        // 横图
        if (isWH >= 2) {
            // 超长横图  按高度自适应 nw = ow * nh / oh
            resultH = singePicWH;
            resultW = srcW * singePicWH / srcH;
            picType = "superW";
        } else {
            // 按宽度自适应 nh= nw * oh / ow
            resultW = picMaxWH;
            resultH = picMaxWH * srcH / srcW;
        }
    } else if (isWH < 1) {
        // 竖图
        if (isWH <= .5) {
            // 超长竖图  按宽度自适应nh= nw * oh / ow
            resultW = singePicWH;
            resultH = singePicWH * srcH / srcW;
            picType = "superH";
        } else {
            // 按照高度自适应
            resultH = picMaxWH;
            resultW = srcW * picMaxWH / srcH;
        }
    } else {
        resultW = picMaxWH;
        resultH = picMaxWH;
    }
    return {
        picType: picType,
        resultW: resultW,
        resultH: resultH
    };
}

/**
 * 将url中的参数部分编码
 * @param {String} url
 */ function urlParamEncode(url) {
    var returnPath = "";
    if (!url) {
        return returnPath;
    }
    var all = url.split("#");
    var hash = all[1] ? "#" + all[1] : "";
    var path = all[0].split("?");
    if (path.length > 1) {
        var sec = "?";
        var sec1 = "";
        var query = path[1];
        var items = query.split("&");
        if (items.length > 1) {
            items.forEach(function(v, i) {
                var left = v.split("=")[0];
                var right = v.split("=")[1];
                var encodeRight = encodeURIComponent(right);
                if (i === 0) {
                    sec1 = left + "=" + encodeRight;
                } else {
                    sec1 = sec1 + "&" + left + "=" + encodeRight;
                }
            });
        } else {
            var part = items[0].split("=");
            var left1 = part[0];
            var right1 = part[1];
            var encodeRight1 = encodeURIComponent(right1);
            sec = sec + left1 + "=" + encodeRight1;
        }
        returnPath = sec + sec1;
    }
    return path[0] + returnPath + hash;
}

/**
 * 参数对象
 * @param {Object} options
 */ function urlParamDecode(options) {
    if (!options) {
        return {};
    }
    for (var item in options) {
        try {
            options[item] = decodeURIComponent(options[item]);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            options[item] = options[item];
        }
        // options[item] = decodeURIComponent(options[item]);
        }
    return options;
}

/**
 * 劫持redirectTo，navigateTo，reLaunch
 */ function override() {
    var oldRedirectTo = wx.redirectTo;
    var oldNavigateTo = wx.navigateTo;
    // let oldReLaunch = swan.reLaunch;
        wx._redirectTo = function(options) {
        var encodeUrl = urlParamEncode(options.url);
        options.url = encodeUrl;
        oldRedirectTo.call(wx, options);
    };
    wx.myNavigateTo = function(options) {
        if (!options.hasEncode) {
            var encodeUrl = urlParamEncode(options.url);
            options.url = encodeUrl;
        } else {
            delete options.hasEncode;
        }
        if (options.url) {
            oldNavigateTo.call(wx, options);
        }
    };
    // swan.reLaunch = function(options){
    //     let encodeUrl = urlParamEncode(options.url);
    //     options.url = encodeUrl;
    //     oldReLaunch.call(swan, options);
    // };
}

/**
 * 将px转为rpx
 * @param {*} px
 */ function px2rpx(px) {
    var systemInfo = getGlobalData("systemInfo") || wx.getStorageSync("systemInfo");
    var sysWidth = systemInfo.windowWidth;
    var rpx = px / sysWidth * 750;
    return rpx;
}

/**
 * 将rpx转为px
 * @param {*} rpx
 */ function rpx2px(rpx) {
    var systemInfo = getGlobalData("systemInfo") || wx.getStorageSync("systemInfo");
    var sysWidth = systemInfo.windowWidth;
    var px = rpx / 750 * sysWidth;
    return px;
}

/**
 * 节流函数
 * @param {*} func
 * @param {*} wait
 * @param {*} mustRun
 */ function throttle(func, wait) {
    var timeout = void 0;
    var startTime = new Date();
    return function() {
        var context = this;
        var args = arguments;
        var curTime = new Date();
        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
                if (curTime - startTime >= wait) {
            func.apply(context, args);
            startTime = curTime;
        }
    };
}

/**
 * 防抖函数
 * @param {*} fn
 * @param {*} delay
 */ function debounce(fn, delay) {
    var timer = null;
    return function() {
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
    };
}

/**
 * 检查frs历史是否重复
 *
 * @param  {string} forum   吧名称
 * @param  {Array}  history 吧历史列表
 * @return {boolean}        true为不重复；false为重复
 */ function checkRepeat(forum, history) {
    var result = true;
    for (var i = 0, len = history.length; i < len; i++) {
        if (history[i].forum === forum) {
            result = false;
            break;
        }
    }
    return result;
}

/**
 * 设置frs历史记录
 *
 * @param  {Object} opts 吧信息
 * @param  {string} opts.forum 吧名称
 * @param  {string} opts.avatar 吧头像地址
 */ function setFrsHistory(opts) {
    if (!opts || !opts.forum) {
        return;
    }
    var frsHistory = [];
    try {
        frsHistory = wx.getStorageSync("frsHistory") || [];
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        e;
    }
    var newHistory = [ {
        forum: opts.forum,
        avatar: opts.avatar,
        fid: opts.fid,
        memberNum: opts.memberNum,
        slogen: opts.slogen
    } ];
    for (var i = 0, len = Math.min(frsHistory.length, 20); i < len; i++) {
        var item = frsHistory[i];
        if (checkRepeat(item.forum, newHistory)) {
            newHistory.push(item);
        }
    }
    wx.setStorageSync("frsHistory", newHistory);
}

/**
 *
 * @param {string} eventId 事件id
 * @param {Object} data 事件payload
 */ function track(eventId) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // 这里组装一些通用参数
        var uid = getGlobalData("uid") || "";
    var cuid = getGlobalData("cuid") || "";
    var allData = _extends({
        uid: uid,
        cuid: cuid
    }, data);
    wx.reportAnalytics(eventId, allData);
}

/**
 *
 * @param {string} key 网络类型
 */ function getNetType(key) {
    var value = "";
    switch (key) {
      case "wifi":
        value = 1;
        break;

      case "2g":
        value = 2;
        break;

      case "3g":
        value = 3;
        break;

      case "4g":
        value = 4;
        break;
    }
    return value;
}

/**
 *
 * @param {string} clientType 系统类型
 */ function getClientType(clientType) {
    var reg = /ios/gi;
    if (reg.test(clientType)) {
        return 1;
    }
    return 2;
}

/**
 * @param {obj} data 发送的数据
 */ function trackNavToOtherApp(data) {
    var trackData = _extends({}, data, {
        cuid: getGlobalData("cuid") || ""
    });
    post(_url2.LOG, trackData);
}

/**
 * 获取bduss
 */ function getBDUSS() {
    var bduss = void 0;
    if (typeof swan === "undefined") {
        // 微信
        var storageUserInfo = getGlobalData("userInfo") || wx.getStorageSync("userInfo");
        if (storageUserInfo) {
            bduss = storageUserInfo.bduss;
        }
    } else {
        bduss = getGlobalData("bduss") || wx.getStorageSync("bduss") || "";
    }
    return bduss;
}

function getRandomId() {
    return Math.random().toString(36).substr(2) + Date.now();
}

/**
 * 快速连接数据，减小每次setData数据量
 * @param {Array} oldList 原有数组
 * @param {Array} newList 要新加的数组
 * @param {string} keyName setdata的名字
 */ function fastConcat(oldList, newList, keyName) {
    var startIndex = oldList.length;
    var newItem = {};
    if (startIndex === 0) {
        newItem["" + keyName] = newList;
    } else {
        newList.forEach(function(item, index) {
            newItem[keyName + "[" + (startIndex + index) + "]"] = item;
        });
    }
    return newItem;
}

function compareVersion(v1, v2) {
    v1 = v1.split(".");
    v2 = v2.split(".");
    var len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
        v1.push("0");
    }
    while (v2.length < len) {
        v2.push("0");
    }
    for (var i = 0; i < len; i++) {
        var num1 = parseInt(v1[i]);
        var num2 = parseInt(v2[i]);
        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
}

/**
 * 判断手机系统类型
 * @param {*} info
 */ function getSystemType(info) {
    var sys = info.globalData.systemInfo.system.toUpperCase();
    var res = void 0;
    if (sys.match("IOS")) {
        res = "IOS";
    }
    if (sys.match("ANDROID")) {
        res = "ANDROID";
    }
    return res;
}

// =======================================================================================
/**
 * 业务相关的通用操作
 * @file bussiness
 * @author wuzhen
 */
/**
 * 点赞后假渲染
 * @param {*} targetItem  目标agree对象
 * @param {*} keyName 渲染key
 * @param {*} camel 是否下划线写法
 */ function renderAgree(targetItem, keyName, camel) {
    targetItem.has_agree = !targetItem.has_agree;
    if (camel) {
        targetItem.agree_num = !targetItem.has_agree ? targetItem.agree_num - 1 : targetItem.agree_num + 1;
        targetItem.formatAgree = (0, _filters.numFormat)(targetItem.agree_num);
    } else {
        targetItem.agreeNum = !targetItem.has_agree ? targetItem.agreeNum - 1 : targetItem.agreeNum + 1;
        targetItem.formatAgree = (0, _filters.numFormat)(targetItem.agreeNum);
    }
    var pages = getCurrentPages();
    var curCtx = pages[pages.length - 1];
    curCtx && curCtx.setData(_defineProperty({}, "" + keyName, targetItem));
    return targetItem;
}

// 各页面订阅消息
function subscribeMsg(ctx, dataKey, page) {
    ctx.observer = wx.subscribe(function(_ref) {
        var at_me = _ref.at_me, reply_me = _ref.reply_me, agree_me = _ref.agree_me;
        if (page === "msgTab") {
            ctx.setData({
                atCount: at_me || 0,
                agreeCount: agree_me || 0
            });
        } else if (page === "app") {
            ctx.observer = wx.subscribe(function() {
                var pages = getCurrentPages();
                var path = void 0;
                if (pages.length > 0) {
                    path = pages[pages.length - 1].route;
                    // 当前页面路径
                                }
                var mainPages = [ "index", "msgtab", "enterpage", "account" ];
                // 主页
                                var isMainPage = mainPages.some(function(item) {
                    return path && path.includes(item);
                });
                // 当前页面是主页
                                if (!isMainPage && pages.length > 0) {
                    // 不是主页不处理红点
                    return;
                }
                // 当前页面是主页面或者是首次进入小程序, 处理红点
                                updatePoint(ctx);
            });
        } else {
            var msgCount = at_me + agree_me + reply_me;
            ctx.setData(_defineProperty({}, "" + dataKey, msgCount));
            msgCount > 0 && track("message_entrance_expose");
        }
    });
}

/**
 * 控制tab的红点隐藏显示
 */ function updatePoint(context) {
    var app = getGlobalData(context);
    var at_me = app.at_me;
    var agree_me = app.agree_me;
    var reply_me = app.reply_me;
    var currentPoint = at_me + agree_me + reply_me > 0;
    var oldRedPoint = app.isRedPoint;
    if (oldRedPoint && !(currentPoint ^ oldRedPoint)) {
        // 是否红点没有改变
        return;
    }
    if (currentPoint) {
        wx.showTabBarRedDot({
            index: 2,
            success: function success() {
                app.isRedPoint = true;
            }
        });
    } else {
        wx.hideTabBarRedDot({
            index: 2,
            success: function success() {
                app.isRedPoint = false;
            }
        });
    }
}

/**
 * 从消息入口进入聚合消息页
 * @param {string} from 从哪里跳到消息聚合页 pb/frs
 */ function goHybridMsg(from) {
    track("message_entrance_click", {
        obj_locate: from
    });
    wx.myNavigateTo({
        url: "/pages/msg/msg?from=" + from
    });
}

/**
 * 请求推送接口，更新前端缓存
 * @param {object} context
 * @param {string} from 来自页面
 */ function getGroupMsg(context) {
    setTimeout(function() {
        get(_url2.GROUP_MSG, {
            swan_id: getGlobalData("swanid")
        }).then(function(data) {
            var app = getGlobalData(context);
            var msgData = data.remind_msg;
            var at_me = msgData.at_me, agree_me = msgData.agree_me, reply_me = msgData.reply_me;
            app.at_me = at_me;
            app.agree_me = agree_me;
            app.reply_me = reply_me;
        }).catch(function(e) {
            console.log(e);
        });
    }, 1e3);
}

/**
 * 轮询消息
 * @param {object} context 整个app
 * @param {object} interval 轮询间隔
 */ function pollingMsg(context, interval) {
    if (!getBDUSS()) {
        return;
        // 没有登录
        }
    getGroupMsg(context);
    wx.multicast("at_me", "agree_me", "reply_me");
    context.timer = setTimeout(function() {
        pollingMsg(context, interval);
    }, interval);
}

/**
 * 获取新的tbs
 * @param  {Function} cb    cb
 * @param  {...Array} args  传参
 */ function getNewTbs() {
    var _this = this;
    return post(_url2.SYNC).then(function(res) {
        setGlobalData("syncres", res);
        var config = res.config, user = res.user, stoken = res.stoken;
        // switch 是关键字，不能用来解构赋值
                var isUseThumbnail = res.switch.is_use_thumbnail;
        var userInfo = {
            name: user.show_nickname || user.name_show,
            portrait: user.portrait_url
        };
        if (user.is_login === false) {
            // 没有登录，清掉bduss
            wx.setStorageSync("userInfo", null);
            wx.setStorageSync("bduss", "");
            setGlobalData("userInfo", null, _this);
            setGlobalData("bduss", "", _this);
        }
        setGlobalData("tbUser", userInfo);
        setGlobalData("tbs", user.tbs);
        wx.setStorageSync("tbs", user.tbs);
        setGlobalData("bdstoken", stoken);
        setGlobalData("swanSyncConfig", config);
        setGlobalData("isUseThumbnail", isUseThumbnail);
        setGlobalData("pollInterval", config.poll_msg_interval);
        setGlobalData("foldXFloor", config.fold_x_floor);
        setGlobalData("thirdRecomAdRate", config.third_recom_ad_rate);
        setGlobalData("openTiebaAppUrl", config.open_tieba_app_url);
        setGlobalData("bdLaunchAppFirstFloor", config.bdLaunchApp_firstFloor);
        setGlobalData("bdLaunchAppFloorFolder", config.bdLaunchApp_floorFolder);
        setGlobalData("wxLaunchAppRightBtn", config.wxLaunchApp_rightBtn);
        if (user.user_nickname) {
            setGlobalData("nickname", user.user_nickname, _this);
        }
        if (user.user_id) {
            setGlobalData("uid", user.user_id, _this);
        } else {
            setGlobalData("uid", "", _this);
        }
        return res;
    }).catch(function(e) {
        console.log(e);
    });
}

function baiduLogin(callback) {
    if (wx.openNASmartProgram) {
        wx.openNASmartProgram();
    } else {
        var info = getGlobalData("systemInfo") || wx.getStorageSync("systemInfo");
        // 兼容性处理，swanNativeVersion 低于 2.30.0 支持 swan.login
                if (compareVersion(info.swanNativeVersion, "2.30.0") < 0) {
            wx.login({
                success: function success() {
                    baiduLoginSuccess(callback);
                },
                fail: function fail(err) {
                    baiduLoginFail(err);
                }
            });
        }
    }
}

/**
 * 登录成功回调
 * @param {Function} callback
 * @return void
 */ function baiduLoginSuccess(callback) {
    var bdussApi = wx.canIUse("getBDUSS") ? "getBDUSS" : "getUnionBDUSS";
    wx[bdussApi]({
        success: function success(res) {
            if ((typeof res === "undefined" ? "undefined" : _typeof(res)) === "object") {
                wx.setStorageSync("bduss", res.bduss);
                setGlobalData("bduss", res.bduss, this);
            } else {
                wx.setStorageSync("bduss", res);
                setGlobalData("bduss", res, this);
            }
            getNewTbs().then(callback);
        }
    });
}

/**
 * 登录失败回调
 * @param {Object} err
 * @return void
 */ function baiduLoginFail(err) {
    switch (err.code) {
      // 110000 表示用户没有登录，但是如果用户在登录后，在其他设备更换密码，是无法弹登录的
        case 11e4:
      case 110001:
      case 10001:
        wx.showToast({
            icon: "none",
            title: "请在手百重新登录"
        });
        break;

        // 此code专门针对 弹出登录框 不输入X掉后的回调，无操作～
              case 10004:
        break;

      default:
        wx.showToast({
            icon: "none",
            title: "网络异常，请稍后再试"
        });
    }
}

// 微信小程序交互触发登录弹窗
function loginModal(ctx, path) {
    var loginComponent = ctx.selectComponent("#login-com");
    if (loginComponent) {
        loginComponent.wxLogin = function() {
            // 微信一键登录
            weixinLogin(path, loginComponent);
        };
        loginComponent.accountLogin = function() {
            // 帐密登录
            (0, _loginFn.passLogin)({
                url: path,
                sms: 1,
                callback: "refreshTbs"
            });
        };
        ctx.setData({
            showLoginModal: true
        });
    } else {
        (0, _loginFn.passLoginForWechat)(path, "refreshTbs");
    }
}

// 微信授权登录(授权或直接登录)
function weixinLogin(path, ctx) {
    if (getGlobalData("wxInfo")) {
        (0, _loginFn.passLoginForWechat)(path, "refreshTbs");
    } else {
        ctx.setData({
            isAuth: false
        });
    }
}

// 登录
function toLogin(callback) {
    var pages = getCurrentPages();
    var curCtx = pages[pages.length - 1];
    // 清掉bduss
        wx.setStorageSync("bduss", "");
    wx.setStorageSync("userInfo", null);
    setGlobalData("bduss", "", this);
    if (typeof swan === "undefined") {
        // 在微信
        var path = getCurrentUrl();
        addLoginCb(callback);
        if (!callback) {
            (0, _loginFn.passLoginForWechat)(path, "refreshTbs");
        } else {
            loginModal(curCtx, path);
        }
    } else {
        // 在手百
        baiduLogin(callback);
    }
}

// 登录后回调执行（存登录态，刷新tbs）
function addLoginCb(callback) {
    getApp().refreshTbs = function(arg) {
        var userInfo = {};
        userInfo.bduss = arg.bduss;
        wx.setStorageSync("userInfo", userInfo);
        setGlobalData("userInfo", userInfo, this);
        setGlobalData("bduss", arg.bduss, this);
        getNewTbs().then(callback).catch(function(err) {
            console.log(err);
        });
    };
}

/**
 * 获取当前的location.href
 */ function getCurrentUrl() {
    var pages = getCurrentPages();
    var path = void 0;
    if (pages.length > 0) {
        var current = pages[pages.length - 1];
        path = "/" + current.route;
        // 当前页面路径
                var query = "?";
        if (current.options) {
            var opts = Object.entries(current.options);
            if (opts.length > 0) {
                opts.forEach(function(item, index) {
                    var res = item[0] + "=" + item[1];
                    if (index < opts.length - 1) {
                        res += "&";
                    }
                    query += res;
                });
                path += query;
            }
        }
    }
    return path;
}

/**
 * ad 组件 eid 根据是否评论截断，截断取 2020120102, 不截断取 2020120101
 * @param {boolean} needPbCut 是否截断
 * @return {number} 返回 eid
 */ function getAdEid(needPbCut) {
    return needPbCut ? "2020120102" : "2020120101";
}

/**
 * 封装调起数据，避免反复定义
 * @param {string} val 组件传进来的值
 * @return {object} 返回 调起数据
 */ function getSchemeData(val) {
    var launchSchemeData = val;
    var schemeData = {
        launchSchemeData: launchSchemeData,
        openAppIos: "https://itunes.apple.com/cn/app/id477927812?pt=328057&ct=bottom_layer&mt=8",
        openTiebaAppUrl: getGlobalData("bdLaunchAppFirstFloor") || "https://downpack.baidu.com/baidutieba_AndroidPhone_1023564b.apk"
    };
    return schemeData;
}

/**
 * 月份，天小于 10 的时候前面补 0
 * @param {number} value
 * @return {string} 格式化后的值
 */ function appendZero(value) {
    return value < 10 ? "0" + value : value;
}

/**
 * 获取当天年月日
 * @return {number} 返回number格式的，年 + 月 + 日
 */ function getTimeValue() {
    var date = new Date();
    var year = date.getFullYear();
    var month = appendZero(date.getMonth() + 1);
    var day = appendZero(date.getDate());
    var timeValue = +("" + year + month + day);
    return timeValue;
}

/**
 * 获取系统参数
 * @returns {object}
 */ function getSystemTypeInfo() {
    var system = getGlobalData("systemInfo").system || wx.getStorageSync("systemInfo").system;
    var version = system.version;
    var type = system.toUpperCase();
    if (type.match("IOS")) {
        return {
            name: "ios",
            version: version
        };
    }
    return {
        name: "android",
        version: version
    };
}

/**
 * 获取视口高度
 * @returns {number} 高度
 */ function getViewportHeight() {
    var systemInfo = getGlobalData("systemInfo") || wx.getStorageSync("systemInfo");
    var windowHeight = systemInfo.windowHeight;
    return windowHeight;
}

/**
 * 获取 System 参数
 * @param {function} callback
 */ function getSystemOptions(callback) {
    var systemInfo = getGlobalData("systemInfo") && wx.getStorageSync("systemInfo") || {};
    var type = systemInfo && systemInfo.system && systemInfo.system.toUpperCase().match("IOS") ? 1 : 2;
    var bannerOptions = {
        ct: 2,
        // 小程序=2
        mod: systemInfo && systemInfo.model && systemInfo.model.replace(/\</g, "&lt;").replace(/\>/g, "&gt;"),
        // mod: 'iPhone 11 &lt;iPhone 12,1&gt; &lt;iPhone 12,1&gt;',
        // 不要删 有用
        // iPhone 11 <iPhone 12,1>
        // 序列化成
        // iPhone 11 &lt;iPhone 12,1&gt;
        // mod: 'iPhone 11 <iPhone 12,1>'.replace(/\>/g, '&lt;').replace(/\</g, '&gt;'),
        ver: systemInfo.version,
        ot: type,
        ov: systemInfo.system,
        nt: 0,
        imei: "",
        idfa: ""
    };
    // ios 1 安卓 2
        if (type === 1) {
        var getSystemID = new Promise(function(resolve
        /* , reject */) {
            var idfa = "N/A";
            // getGlobalData('idfa') || swan.getStorageSync('idfa') || '';
                        if (idfa) {
                bannerOptions.idfa = idfa || "N/A";
                resolve();
            } else {
                bannerOptions.idfa = "N/A";
                // 这个api没有权限，申请非常麻烦，先不用了
                /* swan.getDeviceInfo({
            success: res => {
                swan.setStorageSync('idfa',res.idfa || 'N/A');
                setGlobalData('idfa',res.idfa || 'N/A');
                bannerOptions.idfa = res.idfa || 'N/A';
            },
            fail: () => {},
            complete: () => {
                resolve();
            }
        });
        */            }
        });
        Promise.all([ getSystemID ]).then(function() {
            callback && callback(bannerOptions);
        });
    } else if (type === 2) {
        bannerOptions.imei = getGlobalData("imei") || "";
        callback && callback({});
    }
}

/**
 * 获取 banner 广告参数
 * @param {function} callback
 */ function getBannerOptions(callback) {
    var bannerOptions = getGlobalData("bannerOptions") || {};
    wx.getNetworkType({
        success: function success(res) {
            var ntMaps = {
                unknown: 0,
                wifi: 1,
                "2g": 2,
                "3g": 3,
                "4g": 4,
                "5g": 5,
                none: 0
            };
            if (res && res.networkType) {
                bannerOptions.nt = ntMaps[res.networkType] || 0;
            } else {
                bannerOptions.nt = 0;
            }
        },
        fail: function fail(err) {
            bannerOptions.nt = 0;
        }
    });
    if (bannerOptions && bannerOptions.mod) {
        callback && callback(bannerOptions);
    } else {
        getSystemOptions(callback);
    }
}

/**
 * 手百小程序跳广告外链
 * @param {string} url
 * @return {void}
 */ function openAdWebPage(url) {
    if (!url) {
        return;
    }
    wx.openAdWebPage({
        url: url,
        success: function success(res) {// console.log('openAdWebPage success', res);
        },
        fail: function fail(err) {// console.log('openAdWebPage fail', url, err);
        }
    });
}

/**
 * 手百小程序下载广告
 * @param {string} appId
 * @param {string} url
 * @return {void}
 */ function createDownloadApp(appId, url) {
    // 二者必须存在一个
    if (!appId && !url) {
        return;
    }
    var appInstallManager = wx.createAppInstallManager();
    // ios 需要提供 appId, 且为 string 类型
        appInstallManager.appId = appId;
    // android 需要提供 url
        appInstallManager.url = url;
    appInstallManager.start({
        success: function success(res) {
            console.log("已开始下载", res);
            wx.showToast({
                title: "开始下载",
                icon: "none"
            });
        },
        fail: function fail(err) {
            console.log("已开始下载失败", appId, url, err);
            wx.showModal({
                title: "error",
                content: JSON.stringify(err)
            });
        }
    });
}

/**
 * 数组穿插插入
 * @param {Array} array 插入数组
 * @param {Array} insertArray 待插入数组
 * @param {{insertIndexArray: Array<number>}} options
 *          insertIndexArray 待插入数据的下标
 * @returns {Array} 新数组
 */ function packedArraysByIdx(source, target) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        insertIndexArray: []
    };
    var insertIndexArray = options.insertIndexArray || [];
    var floors = insertIndexArray.map(function(v, i) {
        // 真实楼层
        return v + i;
    });
    var res = [];
    var i = 0;
    // 源数组 长度
        var il = source.length;
    var j = 0;
    // 插入楼层数组 长度
        var jl = floors.length;
    var k = 0;
    // 既定整个数组长度
        var kl = il + jl;
    // 目标数组 长度
        var xl = target.length;
    for (;k < kl; k++) {
        // 下标与楼层相等
        if (k === floors[j]) {
            // 有效插入楼层
            if (j < jl && j < xl) {
                res.push(target[j]);
                j++;
            }
        } else {
            // 有效原数组楼层
            if (i < il) {
                res.push(source[i]);
                i++;
            }
        }
    }
    return res;
}

// mock
function loadBannerData(url, params) {
    return new Promise(function(resolve, reject) {
        getBannerOptions(function(bannerOptions) {
            var options = _extends({}, bannerOptions, params);
            get(url, options, "", "").then(function(res) {
                var bannerList = (0, _bannerModifier2.default)(res.banner_list || []);
                resolve({
                    banner_list: bannerList,
                    banner_floors: res.banner_floors || []
                });
            }).catch(function(e) {// ignore
            });
        });
    });
}

/**
 * 时间戳转换xxxx年xx月xx日
 * @param {number} timeStamp 时间戳
 * @return {string} 返回xxxx年xx月xx日
 */ function dateFormat(timeStamp) {
    var date = new Date(timeStamp);
    return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
}

// 从androidDownUrl中获取渠道号
function getAndroidSource(androidDownUrl) {
    if (!androidDownUrl) {
        return;
    }
    var reg = /(\d*.)\.apk/;
    var androidSource = reg.exec(androidDownUrl)[1] || "";
    return androidSource;
}

// 分割url参数
function getQueryString(url) {
    if (url) {
        url = url.substr(url.indexOf("?") + 1);
        // 字符串截取，比我之前的split()方法效率高
        }
    var result = {};
    // 创建一个对象，用于存name，和value
        var queryString = url || location && location.search && location.search.substring(1);
    // location.search设置或返回从问号 (?) 开始的 URL（查询部分）。
        var re = /([^&=]+)=([^&]*)/g;
    // 正则，具体不会用
        var m = void 0;
    while (m = re.exec(queryString)) {
        // exec()正则表达式的匹配，具体不会用
        result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        // 使用 decodeURIComponent() 对编码后的 URI 进行解码
        }
    return result;
}

// 是否命中某个试验
function isHitTest(configList, sidStr) {
    return configList.some(function(config) {
        return config.sid === sidStr;
    });
}

// 合并外部传入sid和小程序ubs_sample_ids
function getMixSid() {
    var ubsSampleIds = getGlobalData("ubs_sample_ids") || wx.getStorageSync("ubs_sample_ids") || "";
    var outerSid = getGlobalData("outerSid") || "";
    return "" + ubsSampleIds + (ubsSampleIds && outerSid ? "-" : "") + outerSid;
}

// 获取运营配置
function getOperationConfig() {
    // 存储方式:日期#剩余次数
    return new Promise(function(resolve, reject) {
        get(_url2.OPERATION_CONFIG, {
            fr: "smallapp"
        }).then(function(res) {
            var buoyConfig = res.buoy_config || [];
            var bannerConfig = res.banner_config[0] || {};
            setGlobalData("buoyConfig", buoyConfig);
            setGlobalData("bannerConfig", bannerConfig);
            resolve({
                buoyConfig: buoyConfig,
                bannerConfig: bannerConfig
            });
        }).catch(function(err) {
            return reject(err);
        });
    });
}

function getPageFromPath(path) {
    var pageMap = {
        "pages/index/index": "index",
        "pages/frs/frs": "frs",
        "pages/pb/pb": "pb"
    };
    return pageMap[path];
}

function getFrFromScene(scene) {
    var FROM_SCENE = {
        10810008: "自然结果",
        10810009: "阿拉丁",
        10810012: "搜索词推荐直达"
    };
    return FROM_SCENE[scene] || "其他";
}

function getTokenFromSchema(schema) {
    var urlparam = getQueryString(schema);
    var portrait = urlparam.portrait || "";
    if (portrait) {
        portrait = portrait.substring(0, portrait.includes("?t=") ? portrait.indexOf("?t=") : 999);
    }
    var option = {
        page: urlparam.obj_type,
        param: {
            custom: {
                wise_sample_id: urlparam.wise_sample_id || "",
                obj_param1: urlparam.obj_param1 || ""
            },
            browser: urlparam.obj_param2 || getGlobalData("systemInfo") && getGlobalData("systemInfo").host || "",
            locate: urlparam.obj_locate || "",
            obj_source: urlparam.obj_source,
            obj_type: urlparam.obj_type || "",
            query: urlparam.query || "",
            tid: urlparam.tid || "",
            kw: urlparam.kw || "",
            topic_id: urlparam.topic_id || "",
            qd: urlparam.realQd || "",
            portrait: portrait || ""
        },
        androidSource: urlparam.realQd
    };
    return (0, _wakeup.generateToken)(option);
}