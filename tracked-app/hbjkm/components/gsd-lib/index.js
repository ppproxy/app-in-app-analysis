function e(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
    }
    return Array.from(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = require("./event/index"), t = require("./map/index"), n = require("./crypto/index"), i = require("./dayjs/index"), a = require("./utils/index"), o = require("./storage/index"), s = require("./anim/anim.min.js"), c = s.wedux, d = Object.assign({
    Event: r,
    Map: t,
    CryptoJS: n,
    dayjs: i,
    wedux: c,
    Anim: s,
    Storage: o
}, a);

[ [ [ "addEventListener", "removeEventListener", "removeSingleEventListener", "hasEventListener", "dispatch", "getEvents" ], r, d ], [ [ "search", "getSuggestion", "reverseGeocoder", "geocoder", "getCityList", "getDistrictByCityId", "calculateDistance" ], t, d ], [ [ "encryptByAES", "decryptByAES" ], n, d ], [ [ "mapToData", "observe" ], c, d ], [ [ "setStorageSync", "getStorageSync", "removeStorageSync", "clearStorageSync", "clearExpiredStorage" ], o, d ] ].forEach(function(r) {
    a.extendMethods.apply(a, e(r));
}), exports.default = d;