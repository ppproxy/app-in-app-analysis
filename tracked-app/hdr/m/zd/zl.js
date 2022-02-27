var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.platformMap = exports.initTracker = exports.initAEM = exports.getPageName = exports.getOriginMiniType = exports.getCurrentRoute = exports.getBaseInfo = exports.generatePvId = exports.defaultAemConfig = exports.checkSpmIdValid = void 0;

var t = require("../../@babel/runtime/helpers/objectWithoutProperties");

require("../../@babel/runtime/helpers/Arrayincludes");

var r, n = require("../../@babel/runtime/helpers/objectSpread2"), i = require("../../@babel/runtime/helpers/typeof"), o = e(require("./zb/z1")), a = require("./zb/zm"), s = e(require("../zl/59")), u = e(require("./zt")), p = [ "aemConfig", "observer" ], d = {
    pid: "",
    user_type: "101",
    requiredFields: [ "pid" ]
};

exports.defaultAemConfig = d;

var c = {
    wx: a.Constant.WX_PLATFORM,
    my: a.Constant.ALIPAY_PLATFORM
};

exports.platformMap = c;

exports.getOriginMiniType = function() {
    var e = "";
    return "object" === ("undefined" == typeof wx ? "undefined" : i(wx)) && "undefined" == typeof my && (e = "wx"), 
    "object" === ("undefined" == typeof my ? "undefined" : i(my)) && "undefined" == typeof wx && (e = "my"), 
    e;
};

var f = function() {
    var e = s.default.getSync("systemInfo"), t = s.default.getSync("deviceId");
    return {
        app_version: e.version,
        device_brand: e.brand,
        device_model: e.model,
        os: e.system,
        device_id: t
    };
};

exports.getBaseInfo = f;

exports.checkSpmIdValid = function(e) {
    return !e || "string" != typeof e;
};

exports.getCurrentRoute = function() {
    var e = getCurrentPages() || [];
    return e[e.length - 1].route || "";
};

exports.getPageName = function(e) {
    if (!e) return "";
    var t = e.split("/");
    return t.pop(), t.shift(), t.join("_").toLocaleUpperCase();
};

var l = function() {
    return "".concat(function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20, r = arguments.length > 1 ? arguments[1] : void 0;
        return r = r || "", t ? e(--t, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(60 * Math.random())) + r) : r;
    }(20)).concat(new Date().getTime().toString(16));
};

exports.generatePvId = l;

var v = function(e) {
    var t = n(n({}, d), e);
    o.default.setConfig(t), o.default.log = o.default.before(o.default.log, function(e, t) {
        if ("event" === e) {
            var r = (t || {}).p1;
            r.startsWith("/alsc.saas") || [ "/APP_MEMORY_RECORD", "/APP_WHITE_SCREEN_RECORD", "/APP_ON_LAUNCH", "/APP_ON_SHOW", "/APP_ON_HIDE", "/PAGE_NOT_FOUND", "/APP_CONTAINER_INIT", "/HOME_PAGE_GEO_AUTH_START", "/HOME_PAGE_GEO_AUTH_END", "/MTOP_ERROR_INFO", "/CART-IS-NULL", "/logic-plugin" ].includes(r) || (t.p1 = "/alsc.saas.miniapp.merchant_c".concat(t.p1.substr(1)));
        }
        var n = getApp() || {}, i = n[u.default.APP_ACTION_INFO] || {};
        if ("pv" === e) {
            var a = l();
            o.default.setConfig("pv_id", a), i.pvId = a;
        }
        i.pvId || (i.pvId = l());
        var s = "".concat(i.pvId).concat(new Date().getTime().toString(16)).concat(i.times || 1e3);
        return t.c6 = JSON.stringify({
            preActionId: i.actionId || "",
            actionId: s
        }), 9999 === i.times ? i.times = 1e3 : i.times += 1, i.actionId = s, n[u.default.APP_ACTION_INFO] = i, 
        [ e, t ];
    });
};

exports.initAEM = v;

exports.initTracker = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.aemConfig, i = void 0 === n ? {} : n, o = e.observer, s = t(e, p);
    if (v(i), r) return r;
    var u = f();
    return (r = (0, a.createTracert)(s)).setBaseInfo(u), r.setLogObserver(o), r;
};