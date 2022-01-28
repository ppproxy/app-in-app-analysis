var e = require("../../@babel/runtime/helpers/toConsumableArray");

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = require("./event/index"), t = require("./map/index"), i = require("./crypto/index"), n = require("./dayjs/index"), a = require("./utils/index"), s = require("./storage/index"), o = require("./anim/anim.min.js"), d = o.wedux, c = Object.assign({
    Event: r,
    Map: t,
    CryptoJS: i,
    dayjs: n,
    wedux: d,
    Anim: o,
    Storage: s
}, a);

[ [ [ "addEventListener", "removeEventListener", "removeSingleEventListener", "hasEventListener", "dispatch", "getEvents" ], r, c ], [ [ "search", "getSuggestion", "reverseGeocoder", "geocoder", "getCityList", "getDistrictByCityId", "calculateDistance" ], t, c ], [ [ "encryptByAES", "decryptByAES" ], i, c ], [ [ "mapToData", "observe" ], d, c ], [ [ "setStorageSync", "getStorageSync", "removeStorageSync", "clearStorageSync", "clearExpiredStorage" ], s, c ] ].forEach(function(r) {
    a.extendMethods.apply(a, e(r));
}), exports.default = c;