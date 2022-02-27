var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ZC_CART_PAGE_PATH = exports.WELCOME_PAGE_PATH = exports.ORDER_FOOD_PAGE_PATH = exports.ORDER_DETAIL_PAGE_PATH = exports.DINING_PAGE_PATH = void 0, 
exports.checkXcxTmlCode = function(e) {
    var t = i.default.get("xcxTmlCode") || "lightshopTemplate", r = !1;
    switch (e) {
      case "LIGHTSHOP":
        r = "lightshopTemplate" === t;
        break;

      case "HOSPITAL":
        r = "orderReservationTemplate" === t;
        break;

      default:
        r = "lightshopTemplate" === t;
    }
    return r;
}, exports.compareVersion = function(e, t) {
    var r = e.split("."), n = t.split("."), a = Math.max(e.length, t.length);
    for (;r.length < a; ) r.push("0");
    for (;n.length < a; ) n.push("0");
    for (var o = 0; o < a; o++) {
        var i = parseInt(r[o], 10), s = parseInt(n[o], 10);
        if (i > s) return 1;
        if (i < s) return -1;
    }
    return 0;
}, exports.createPendingPromise = void 0, exports.getAppGlobalData = function(e) {
    var t = getApp();
    if (e) return t.globalData[e];
    return t.globalData;
}, exports.getClosestStore = function(e) {
    return T.apply(this, arguments);
}, exports.getClosestStoreBizCodeMap = void 0, exports.getComposedLogoUrl = function(e) {
    if (![ "daily-s.alipay.net", "material-public-daily.oss-cn-hangzhou.aliyuncs.com", "saas-material.oss-cn-hangzhou.aliyuncs.com", "s.koubei.com" ].find(function(t) {
        return e.indexOf(t) > 0;
    })) return e;
    var t = function(e) {
        return e.replace(/https?:\/\/.+\//, "");
    }(e), r = e.replace(/\w+$/, "position_logo.png"), n = (0, c.encode)(t + "?x-oss-process=image/resize,m_fill,h_100,w_100,image/circle,r_50/format,png").replace(/\+/gm, "-").replace(/\//gm, "_").replace(/=$/, "");
    return "".concat(r, "?x-oss-process=image/resize,w_126/watermark,image_").concat(n, ",t_90,g_north,y_10/format,png");
}, exports.getHexColorAsRGBArray = function(e) {
    var t = e.toLowerCase();
    if (/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)) {
        if (4 === t.length) {
            for (var r = "#", n = 1; n < 4; n += 1) r += t.slice(n, n + 1).concat(t.slice(n, n + 1));
            t = r;
        }
        for (var a = [], o = 1; o < 7; o += 2) a.push(parseInt("0x" + t.slice(o, o + 2)));
        return a;
    }
    return t;
}, exports.getImageUrl = function(e, t) {
    if ("" === e || null == e) return e;
    if (/^http.+/i.test(e) && !function(e) {
        return [ "s.koubei.com", "material-public-daily.oss-cn-hangzhou.aliyuncs.com", "img-static.keruyun.com" ].find(function(t) {
            return (e || "").indexOf(t) >= 0;
        });
    }(e)) return e;
    var r = e, n = [];
    if (!/^http.+/i.test(e) && -1 === e.indexOf("x-oss-process")) {
        var o, i = (0, s.getEnv)(), c = {
            DAILY: "dev",
            PRE: "pre",
            PROD: "prod"
        }, u = (a(o = {}, c.DAILY, "https://material-public-daily.oss-cn-hangzhou.aliyuncs.com"), 
        a(o, c.PROD, "https://s.koubei.com"), a(o, c.PRE, "https://s.koubei.com"), o);
        r = "".concat(u[i], "/").concat(e);
    }
    "string" == typeof t ? n.push({
        action: "resize",
        value: t
    }) : Array.isArray(t) && (n = t);
    var l = n.reduce(function(e, t) {
        return t.action && t.value ? "".concat(e, "/").concat(t.action, ",").concat(t.value) : e;
    }, "");
    l && (r = (0, p.setQueryParamsToUrl)(r, {
        "x-oss-process": "image".concat(l)
    }));
    return r;
}, exports.getMiniSdkVersion = function() {
    var e = "", t = (0, s.getMiniType)(), r = d.default.getSync("systemInfo");
    switch (t) {
      case "wx":
        e = r.SDKVersion;
        break;

      case "my":
        e = my.SDKVersion;
    }
    return e;
}, exports.getNearbyShops = function(e) {
    return R.apply(this, arguments);
}, exports.getRGBColorAsHex = function(e) {
    var t = e;
    if (/^(rgb|RGB)/.test(t)) {
        for (var r = "#", n = t.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), a = 0; a < n.length; a++) {
            var o = Number(n[a]).toString(16);
            "0" === o && (o += o), r += o;
        }
        return r;
    }
    return String(t);
}, exports.getRedirectUrlByDinnerFlow = w, exports.getRedirectUrlByTableStatus = function(e) {
    var t = e.scanAction, r = e.tableStatus, n = e.firstDinnerFlow;
    switch (r) {
      case "TABLE_IDLE":
      case "TABLE_ORDERED":
        return w({
            scanAction: t,
            firstDinnerFlow: n
        });

      case "TABLE_UNAVAILABLE":
      default:
        return null;
    }
}, exports.getRiskParams = function() {
    var e = "", t = "", r = "", n = "", a = "", i = "", c = "", u = (0, s.getMiniType)();
    try {
        var l = Object.create(null);
        l = "my" === u ? my.getSystemInfoSync() : wx.getSystemInfoSync(), e = l.brand, t = l.model, 
        r = l.pixelRatio, a = l.locationEnabled, i = l.wifiEnabled, n = l.bluetoothEnabled, 
        null == a && (a = ""), null == i && (i = ""), null == n && (n = "");
        var p = (0, o.getGeoInfo)();
        p && (c = "".concat(p.longitude, ",").concat(p.latitude));
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        console.warn("获取系统信息失败", e);
    }
    return {
        devBrand: e,
        devModel: t,
        devPixelRatio: r,
        bluetoothSwitch: n,
        locationSwitch: a,
        wifiSwitch: i,
        gpsType: 1,
        gpsInfo: c
    };
}, exports.getStoreBaseConfig = x, exports.isForceMemberGuide = function() {
    return A.apply(this, arguments);
}, exports.isShowMemberGuide = function() {
    return I.apply(this, arguments);
}, exports.isTabBarPage = function(e) {
    return ((0, o.getTabBarList)() || []).filter(function(t) {
        return t.code === e;
    }).length > 0;
}, exports.saveStoreInfo = _, exports.setPageNavTitle = function(e) {
    try {
        var t = (0, s.getMiniType)(), r = e || "轻店小程序", n = ((0, o.getAppBaseInfo)() || {}).appName;
        n && (r = n);
        var a = (0, o.getBrandInfo)();
        switch (a && a.brandName && (r = a.brandName), t) {
          case "wx":
            wx.setNavigationBarTitle({
                title: r
            });
            break;

          case "my":
            my.setNavigationBar({
                title: r
            });
        }
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        console.log("设置页面导航标题失败", e);
    }
}, exports.switchStore = function(e) {
    return P.apply(this, arguments);
};

var t = require("../@babel/runtime/helpers/objectSpread2"), r = e(require("../@babel/runtime/regenerator")), n = require("../@babel/runtime/helpers/asyncToGenerator"), a = require("../@babel/runtime/helpers/defineProperty"), o = require("./wh"), i = e(require("../m/zl/5o")), s = require("./wa"), c = require("./wd/wb"), u = require("../v/ci/n"), l = require("../v/ci/36"), p = require("./wm"), d = e(require("../m/zl/59")), f = e(require("../m/zt"));

exports.WELCOME_PAGE_PATH = "/pages/welcome/index";

var g = "/".concat(f.default.MINI_PATH.ORDER_FOOD_PATH);

exports.ORDER_FOOD_PAGE_PATH = g;

exports.DINING_PAGE_PATH = "/pages/zcordercheck/index";

exports.ORDER_DETAIL_PAGE_PATH = "/pages/orderdetail/index";

exports.ZC_CART_PAGE_PATH = "/pages/zccomfirmorder/index";

var h, m, b = {
    ROUTER_PAGE: "ROUTER_PAGE",
    INDEX_PAGE: "INDEX_PAGE",
    ORDER_PAGE: "ORDER_PAGE"
};

exports.getClosestStoreBizCodeMap = b;

var v = !1;

function x() {
    return E.apply(this, arguments);
}

function E() {
    return (E = n(r.default.mark(function e() {
        var t, n, a, i, s, c, l, p, d = arguments;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t = d.length > 0 && void 0 !== d[0] ? d[0] : {}, n = t.storeId, a = void 0 === n ? (0, 
                o.getShopId)() : n, i = t.isForceFetch, !(void 0 !== i && i) && h) {
                    e.next = 13;
                    break;
                }
                return v || (v = !0, m = new Promise(function(e, t) {
                    var r = !1, n = function(t) {
                        !r && (r = !0) && e(t);
                    };
                    (0, u.fetchStoreBaseConfig)({
                        storeId: a
                    }, {
                        extraOptions: {
                            useCache: !0,
                            cacheTime: 3e4,
                            cacheRequestSilent: !0,
                            cacheCallback: function(e) {
                                var t = e.data;
                                n(void 0 === t ? {} : t);
                            }
                        }
                    }).then(function(e) {
                        n(e);
                    }).catch(function(e) {
                        t(e);
                    }).then(function() {
                        v = !1;
                    });
                })), e.next = 6, m;

              case 6:
                s = e.sent, c = s.data, l = c.paymentMode, p = {
                    BEFORE_PAY: "快餐",
                    AFTER_PAY: "正餐"
                }[l] || "", (0, o.setSceneType)(p), h = c;

              case 13:
                return e.abrupt("return", h);

              case 14:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function I() {
    return (I = n(r.default.mark(function e() {
        var t, n = arguments;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n.length > 0 && void 0 !== n[0] ? n[0] : {}, t = (0, o.getMemberFlag)(), 
                e.abrupt("return", !t);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function A() {
    return (A = n(r.default.mark(function e() {
        var t, n, a, i, s = arguments;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = s.length > 0 && void 0 !== s[0] ? s[0] : {}, e.next = 3, x(t);

              case 3:
                return n = e.sent, a = n.forceJoinMember, i = (0, o.getMemberFlag)(), e.abrupt("return", !i && 2 === a);

              case 7:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function _(e) {
    e && ((0, o.setGlobalShopId)(e.shopId), (0, o.setGlobalShopInfo)({
        shopId: e.shopId,
        shopName: e.shopName,
        address: e.address,
        distanceDesc: e.distanceDesc,
        distanceValue: e.distanceValue,
        latitude: e.latitude,
        longitude: e.longitude,
        phone: e.phone,
        provinceId: e.provinceId,
        cityId: e.cityId,
        areaId: e.areaId
    }));
}

function T() {
    return (T = n(r.default.mark(function e(t) {
        var n, a, o, i, s, c, u, p, d, f, g, h;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = t.params, a = void 0 === n ? {} : n, o = t.options, i = void 0 === o ? {} : o, 
                s = (a || {}).bizCode, c = void 0 === s ? b.INDEX_PAGE : s, u = (i || {}).needCache, 
                p = void 0 === u || u, e.next = 5, (0, l.getSmartStores)({
                    bizCode: c
                });

              case 5:
                if ((d = e.sent) && d.data && d.data.list && d.data.list[0]) {
                    e.next = 8;
                    break;
                }
                return e.abrupt("return", null);

              case 8:
                if (f = d.data.list[0], g = parseInt(f.storeStatus, 10), h = f.bizTags, 0 === g && null !== h && h.indexOf("MINI_APP") > -1) {
                    e.next = 14;
                    break;
                }
                return e.abrupt("return", null);

              case 14:
                if (p) {
                    e.next = 16;
                    break;
                }
                return e.abrupt("return", f);

              case 16:
                return _(f), e.abrupt("return", f);

              case 18:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function P() {
    return (P = n(r.default.mark(function e(t) {
        var n, a, o, i, s;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = t.shopId, e.next = 3, (0, u.getStoreInfoById)({
                    shopId: n
                });

              case 3:
                if (a = e.sent, o = a.data, i = parseInt(o.storeStatus, 10), s = o.bizTags, 0 === i && null !== s && s.indexOf("MINI_APP") > -1) {
                    e.next = 10;
                    break;
                }
                return e.abrupt("return", Promise.reject({
                    shopInfo: o
                }));

              case 10:
                return _(o), e.abrupt("return", Promise.resolve({
                    shopInfo: o
                }));

              case 12:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

exports.createPendingPromise = function() {
    var e = {};
    return e.promise = new Promise(function(t, r) {
        e.resolve = t, e.reject = r;
    }), e;
};

var y = {
    settleAccount: {
        searchParam: {
            bizTags: "MINI_APP,RESTAURANT"
        },
        bizCode: "MINI_APP_SETTLE_ACCOUNTS"
    },
    orderFood: {
        searchParam: {
            bizTags: "RESTAURANT"
        },
        bizCode: ""
    }
};

function R() {
    return (R = n(r.default.mark(function e(n) {
        var a, i, s, c, u, p, d, g, h, m, b, v, x, E;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return i = (a = n || {}).distance, s = void 0 === i ? f.default.DEF_NEARBY_DISTANCE : i, 
                c = a.bizScene, u = void 0 === c ? "orderFood" : c, p = (0, o.getGeoInfo)() || {}, 
                d = p.longitude, g = void 0 === d ? f.default.DEF_LONGITUDE : d, h = p.latitude, 
                m = void 0 === h ? f.default.DEF_LATITUDE : h, b = t({
                    longitude: g,
                    latitude: m
                }, y[u]), e.next = 5, (0, l.getStoreInfoList)(t({
                    pageNo: 1,
                    pageSize: 2
                }, b));

              case 5:
                return v = e.sent, x = v.data.list || [], E = x.filter(function(e) {
                    return parseFloat(e.distanceValue) <= s;
                }), e.abrupt("return", E);

              case 9:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function w(e) {
    var t, r, n, a = e.scanAction, o = e.firstDinnerFlow, i = "redirect", c = (n = getCurrentPages())[n.length - 1].route, u = o.dinerNum, l = o.dinnerStatus, p = o.dinnerFlowNo, d = o.orderNo, f = o.tableId, h = o.carts, m = o.dinnerFlowTips, b = h[0] ? h[0].cartBatchNo : void 0;
    if (u) switch (l) {
      case "BEFORE_PLACE_ORDER":
      case "BEFORE_PLACE_SUB_ORDER":
        i = "/" + c === (t = "/pages/zccomfirmorder/index") ? "redirect" : "navigate", r = {
            orderNo: d,
            cartId: b,
            tableId: f,
            dinnerStatus: l,
            dinnerFlowTips: m || ""
        };
        break;

      case "BEFORE_SETTLEMENT":
        t = "/pages/zcordercheck/index", i = "redirect", r = {
            orderNo: d,
            tableId: f,
            dinnerStatus: l
        };
        break;

      case "ORDER_FINISHED":
        t = "/pages/orderdetail/index", i = "redirect", r = {
            orderNo: d
        };
        break;

      case "INIT":
      case "ORDERING_FISH":
        if ("/" + c !== g) {
            t = g, i = "relaunch", r = {
                dinnerFlowTips: m || ""
            };
            break;
        }
        return null;

      default:
        return null;
    } else t = "/pages/welcome/index", i = "my" === (0, s.getMiniType)() ? "relaunch" : "redirect", 
    r = {
        dinnerStatus: l,
        dinnerFlowTips: m || "",
        dinnerFlowNo: p,
        scanAction: a,
        orderNo: d,
        cartId: b
    };
    return {
        url: t,
        query: r,
        type: i
    };
}