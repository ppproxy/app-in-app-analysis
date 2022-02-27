var t = require("../../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.customLog = exports.appTypeConstant = exports.CHANNEL = exports.BIND_RECTIFY_BIZ_TYPE = void 0, 
exports.getApp = function() {
    return {
        globalData: {
            queryParams: {
                site: "eleme"
            }
        }
    };
}, exports.getAppType = function() {
    var t = (0, e.getMiniType)();
    return o[t] || o.wx;
}, exports.getCurrentSite = function() {
    return "Koubei";
}, exports.getPageContext = function() {
    var t = getCurrentPages();
    return t[t.length - 1] ? t[t.length - 1].$page : "";
}, exports.isApp = function(t) {
    if ("ap" === t) return !0;
    return !1;
};

var e = require("../../../../l/wa"), r = t(require("../../../../m/zd/n"));

exports.BIND_RECTIFY_BIZ_TYPE = {
    POINT_MALL: "pointMall",
    MEMBER: "member"
};

exports.CHANNEL = {
    TB: "Taobao",
    ELE: "Eleme",
    KB: "Koubei",
    ALIPAY: "Alipay",
    UNKNOWN: "unknown",
    YK: "Youku"
};

var o = {
    wx: "WECHAT",
    my: "ALIPAY"
};

exports.appTypeConstant = o;

var a = {
    log: function(t) {
        var e = t.title, o = void 0 === e ? "" : e, a = t.data, n = void 0 === a ? {} : a;
        try {
            var i = {
                title: o,
                data: this.formateData(n)
            };
            r.default && r.default.$logOther(".member.log", i);
        } catch (t) {}
    },
    error: function(t) {
        var e = t.title, o = void 0 === e ? "" : e, a = t.data, n = void 0 === a ? {} : a;
        try {
            var i = {
                title: o,
                data: this.formateData(n)
            };
            r.default && r.default.$logOther(".member.error", i);
        } catch (t) {}
    },
    other: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            r.default && r.default.$logOther(t, e);
        } catch (t) {}
    },
    formateData: function(t) {
        return [ "[object Object]", "[object Array]" ].indexOf(Object.prototype.toString.call(t)) > -1 ? JSON.stringify(t) : t.toString();
    },
    click: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            r.default && r.default.$logClick(t, e);
        } catch (t) {}
    },
    expo: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            r.default && r.default.$logExpo(t, e);
        } catch (t) {}
    }
};

exports.customLog = a;