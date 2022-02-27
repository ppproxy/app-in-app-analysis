var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getClosestStoreInfoByGeo = function(e) {
    var t = {
        brandId: "",
        shopId: ""
    }, r = {
        bizTags: e.bizTags
    };
    return Object.assign(t, {
        longitude: e.longitude,
        latitude: e.latitude,
        searchParam: JSON.stringify(r)
    }), o.default.request({
        api: "mtop.alsc.saas.cshop.search.store.getClosest",
        param: t
    }).then(function(e) {
        return e.data;
    }).catch(function(e) {
        console.error("error", e);
    });
}, exports.getSmartStores = function(e) {
    return c.apply(this, arguments);
}, exports.getStoreInfoById = function(e) {
    return o.default.request({
        api: "mtop.alsc.saas.cshop.search.store.getById",
        param: e
    }).then(function(e) {
        return e.data;
    }).catch(function(e) {
        console.error("error", e);
    });
}, exports.getStoreInfoList = function(e) {
    var t = {
        brandId: "",
        shopName: ""
    }, r = {};
    e.search && (r.storeSearchValue = e.search);
    e.searchParam && Object.assign(r, e.searchParam);
    e.cityId && (r.cityId = e.cityId);
    e.bizCode && (t.bizCode = e.bizCode);
    e.appType && (t.appType = e.appType);
    Array.isArray(e.tags) && (t.tags = JSON.stringify(e.tags));
    return Object.assign(t, {
        longitude: e.longitude,
        latitude: e.latitude,
        pageNo: e.pageNo || 1,
        pageSize: e.pageSize || 10,
        searchParam: JSON.stringify(r)
    }), o.default.request({
        api: "mtop.alsc.saas.cshop.search.store.queryClosest",
        param: t
    }).then(function(e) {
        return e.data;
    }).catch(function(e) {
        console.error("error", e);
    });
}, exports.getStoreRegions = function(e) {
    var t = a({
        brandId: "",
        shopId: "",
        type: "CITY"
    }, e);
    return o.default.request({
        api: "mtop.alsc.saas.cshop.search.store.queryStoreRegions",
        param: t
    }).then(function(e) {
        return e.data;
    }).catch(function(e) {
        console.error("error", e);
    });
};

var t = e(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/asyncToGenerator"), a = require("../../@babel/runtime/helpers/objectSpread2"), o = e(require("../../m/zl/5h")), s = e(require("../../m/z3/z6")), n = e(require("../../m/zl/5o")), u = require("../../l/wh"), i = require("../../l/wa");

function c() {
    return (c = r(t.default.mark(function e(r) {
        var c, l, p, d, h, f, g;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return c = (0, u.getScaneInfo)(), l = (0, u.getGeoInfo)() || {}, p = l.longitude, 
                d = void 0 === p ? null : p, h = l.latitude, f = void 0 === h ? null : h, e.t0 = a, 
                e.t1 = (0, u.getShopId)(), e.t2 = JSON, e.t3 = (0, u.getTableId)() || null, e.t4 = (0, 
                u.getFromShopId)() || null, e.t5 = c ? c.codeValue : null, e.t6 = (0, i.getSceneValue)(), 
                e.t7 = d, e.t8 = f, e.t9 = r.fromBizId, e.next = 14, s.default.isMinAuth();

              case 14:
                return e.t10 = e.sent, e.t11 = s.default.isSystemGPSOpen(), e.t12 = n.default.get("shop.list.last.biz"), 
                e.t13 = n.default.get("shop.list.last.shop"), e.t14 = {
                    fromTableId: e.t3,
                    fromShopId: e.t4,
                    codeValue: e.t5,
                    sceneCode: e.t6,
                    longitude: e.t7,
                    latitude: e.t8,
                    fromBizId: e.t9,
                    isDeniedGeoAuthorize: e.t10,
                    isGpsOpen: e.t11,
                    lastSelectStoreBiz: e.t12,
                    lastSelectStoreId: e.t13
                }, e.t15 = e.t2.stringify.call(e.t2, e.t14), e.t16 = {
                    shopId: e.t1,
                    feature: e.t15
                }, e.t17 = r, g = (0, e.t0)(e.t16, e.t17), e.abrupt("return", o.default.request({
                    api: "mtop.alsc.saas.cshop.search.store.smartQueryStores",
                    param: g
                }).then(function(e) {
                    return e.data;
                }).catch(function(e) {
                    console.error("error", e);
                }));

              case 24:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}