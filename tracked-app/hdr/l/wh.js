var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.cachePrivilegeConsult = function(e, o) {
    u.default.put(n.default.PRIVILEGE_CACHE_KEY, t(t({}, e), {}, {
        isFirst: o
    }));
}, exports.cachePrivilegeParams = function(e) {
    u.default.put(n.default.REAL_CONSULT_PARAMS_CACHE_KEY, e);
}, exports.getAppBaseInfo = function() {
    var e = u.default.get("appName"), t = u.default.get("APPID"), n = u.default.get("xcxTmlCode");
    return {
        appId: t,
        appName: e,
        xcxTmlCode: n
    };
}, exports.getAuthPhoneFlag = function() {
    return u.default.get(n.default.GLOBAL_IS_PHONE) || !1;
}, exports.getBrandInfo = function() {
    return u.default.get(n.default.GLOBAL_BRAND_INFO) || null;
}, exports.getCachedPrivilegeConsult = function() {
    var e = u.default.get(n.default.PRIVILEGE_CACHE_KEY);
    return console.log("cached privilege consult: ", e), e;
}, exports.getCachedPrivilegeParams = function() {
    var e = u.default.get(n.default.REAL_CONSULT_PARAMS_CACHE_KEY);
    return console.log("cached privilege params: ", e), e;
}, exports.getForceMemberGuideFlag = function() {
    return u.default.get(n.default.GLOBAL_FORCE_MEMBER_GUIDE) || !1;
}, exports.getFromShopId = function() {
    return u.default.get(n.default.FROM_SHOPID) || "";
}, exports.getGeoAuthFailFlag = function() {
    return u.default.get(n.default.GLOBAL_GEO_FAIL_FLAG) || !1;
}, exports.getGeoInfo = function() {
    var e = u.default.get(n.default.GLOBAL_GEO_INFO) || {};
    if (0 === Object.keys(e).length) return null;
    return {
        longitude: e.longitude,
        latitude: e.latitude
    };
}, exports.getGlobalMiniChannel = function() {
    return u.default.get(n.default.GLOBAL_MINI_CHANNEL) || null;
}, exports.getGlobalMiniChannelPath = function() {
    return u.default.get(n.default.GLOBAL_MINI_CHANNEL_PATH) || null;
}, exports.getGlobalMiniPath = function() {
    return u.default.get(n.default.GLOBAL_MINI_PATH) || null;
}, exports.getGlobalSpecialEffectConfig = function() {
    return u.default.get(n.default.GLOBAL_SPECIAL_EFFECT_CONFIG) || null;
}, exports.getGoodsModelInfo = function() {
    return u.default.get(n.default.GLOBAL_GOODS_MODEL) || null;
}, exports.getLanuchJumpInfo = function() {
    return u.default.get(n.default.GLOBAL_LANUCH_JUMP_INFO) || null;
}, exports.getLoadingGifUrl = function() {
    return u.default.get(n.default.GLOBAL_LOADING_GIF) || "";
}, exports.getLoginCustomer = function() {
    return u.default.get(n.default.GLOBAL_LOGIN_CUSTOMER) || "";
}, exports.getLoginToken = function() {
    return u.default.get(n.default.GLOBAL_LOGIN_TOKEN) || "";
}, exports.getMarketingColor = function() {
    return u.default.get(n.default.GLOBAL_MARKETING_COLOR) || "#FF4B33";
}, exports.getMemberFlag = function() {
    return u.default.get(n.default.GLOBAL_IS_MEMBER) || !1;
}, exports.getMemberJoinEnableFlag = function() {
    return u.default.get(n.default.GLOBAL_JOIN_MEMBER_ENABLE) || !1;
}, exports.getPreviewMode = function() {
    return u.default.get(n.default.GLOBAL_PREVIEW_MODE) || "";
}, exports.getQueryPathInfo = function() {
    return u.default.get(n.default.GLOBAL_QUERY_PATH) || "";
}, exports.getReferInfo = function() {
    return u.default.get(n.default.GLOBAL_REFER_INFO) || null;
}, exports.getRejectMemberGuideFlag = function() {
    return u.default.get(n.default.GLOBAL_REJECT_MEMBER_GUIDE) || !1;
}, exports.getScaneInfo = function() {
    return u.default.get(n.default.GLOBAL_SCANE_INFO) || null;
}, exports.getScaneOriginInfo = function() {
    return u.default.get(n.default.GLOBAL_SCANE_ORIGIN_INFO) || {};
}, exports.getSceneType = function() {
    return u.default.get(n.default.GLOBAL_BUSINESS_SCENE) || {
        sceneType: ""
    };
}, exports.getShopId = function() {
    return u.default.get(n.default.GLOBAL_SHOPID) || "";
}, exports.getShopInfo = function() {
    return u.default.get(n.default.GLOBAL_SHOP_INFO) || null;
}, exports.getShopScaneFlag = function() {
    return u.default.get(n.default.IS_SHOP_SCANE) || !1;
}, exports.getShopState = function() {
    return u.default.get(n.default.GLOBAL_SHOP_STATE) || void 0;
}, exports.getShowMemberGuideFlag = function() {
    return u.default.get(n.default.GLOBAL_SHOW_MEMBER_GUIDE) || !1;
}, exports.getTabBarList = function() {
    return u.default.get(n.default.GLOBAL_CUSTOM_TAB_BAR_LIST) || [];
}, exports.getTableId = function() {
    return u.default.get(n.default.GLOBAL_TABLEID) || "";
}, exports.getThemeColor = function() {
    return u.default.get(n.default.GLOBAL_THEME_COLOR) || "#8BBB11";
}, exports.getUserDetlInfo = function() {
    return u.default.get(n.default.GLOBAL_USERINFO) || null;
}, exports.removeConsultCache = function() {
    u.default.remove(n.default.PRIVILEGE_CACHE_KEY), u.default.remove(n.default.REAL_CONSULT_PARAMS_CACHE_KEY);
}, exports.removeGlobalMiniPath = function() {
    u.default.remove(n.default.GLOBAL_MINI_PATH);
}, exports.removeGoodsModelInfo = function() {
    u.default.remove(n.default.GLOBAL_GOODS_MODEL);
}, exports.removeLanuchJumpInfo = function() {
    u.default.remove(n.default.GLOBAL_LANUCH_JUMP_INFO);
}, exports.removeQueryPathInfo = function() {
    u.default.remove(n.default.GLOBAL_QUERY_PATH);
}, exports.removeRejectMemberFlag = function() {
    u.default.remove(n.default.GLOBAL_REJECT_MEMBER_GUIDE);
}, exports.removeScaneInfo = function() {
    u.default.remove(n.default.GLOBAL_SCANE_INFO);
}, exports.removeShopId = function() {
    u.default.remove(n.default.GLOBAL_SHOPID);
}, exports.removeShopInfo = function() {
    u.default.remove(n.default.GLOBAL_SHOP_INFO);
}, exports.removeShowMemberGuideFlag = function() {
    u.default.remove(n.default.GLOBAL_SHOW_MEMBER_GUIDE);
}, exports.removeTableId = function() {
    u.default.remove(n.default.GLOBAL_TABLEID);
}, exports.setForceMemberGuideFlag = function(e) {
    u.default.put(n.default.GLOBAL_FORCE_MEMBER_GUIDE, e, {
        keep: !0
    });
}, exports.setFromShopId = function(e) {
    u.default.put(n.default.FROM_SHOPID, e);
}, exports.setGeoAuthFailFlag = function(e) {
    u.default.put(n.default.GLOBAL_GEO_FAIL_FLAG, e, {
        keep: !0
    });
}, exports.setGlobalAppBaseInfo = function(e) {
    u.default.put("APPID", {
        appId: e.appId
    }, {
        persistent: !0
    }), u.default.put("appName", {
        appId: e.appName
    }, {
        persistent: !0
    });
}, exports.setGlobalAuthPhoneFlag = function(e) {
    u.default.put(n.default.GLOBAL_IS_PHONE, e, {
        persistent: !0
    });
}, exports.setGlobalBrandInfo = function(e) {
    u.default.put(n.default.GLOBAL_BRAND_INFO, e, {
        persistent: !0
    });
}, exports.setGlobalGeoInfo = function(e) {
    u.default.put(n.default.GLOBAL_GEO_INFO, {
        longitude: e.longitude,
        latitude: e.latitude
    }, {
        persistent: !0
    });
}, exports.setGlobalGoodsModelInfo = function(e) {
    var t = e.origin, o = e.itemId;
    u.default.put(n.default.GLOBAL_GOODS_MODEL, {
        origin: t,
        itemId: o
    });
}, exports.setGlobalLoginCustomer = function(e) {
    u.default.put(n.default.GLOBAL_LOGIN_CUSTOMER, e, {
        persistent: !0
    });
}, exports.setGlobalLoginToken = function(e) {
    u.default.put(n.default.GLOBAL_LOGIN_TOKEN, e, {
        persistent: !0
    });
}, exports.setGlobalMarketingColor = function(e) {
    u.default.put(n.default.GLOBAL_MARKETING_COLOR, e, {
        persistent: !0
    });
}, exports.setGlobalMemberFlag = function(e) {
    u.default.put(n.default.GLOBAL_IS_MEMBER, e, {
        persistent: !0
    });
}, exports.setGlobalMiniChannel = function(e) {
    u.default.put(n.default.GLOBAL_MINI_CHANNEL, e, {
        persistent: !0
    });
}, exports.setGlobalMiniChannelPath = function(e) {
    u.default.put(n.default.GLOBAL_MINI_CHANNEL_PATH, e, {
        persistent: !0
    });
}, exports.setGlobalMiniPath = function(e) {
    u.default.put(n.default.GLOBAL_MINI_PATH, e, {
        persistent: !0
    });
}, exports.setGlobalReferInfo = function(e) {
    u.default.put(n.default.GLOBAL_REFER_INFO, e, {
        persistent: !0
    });
}, exports.setGlobalScaneInfo = function(e) {
    u.default.put(n.default.GLOBAL_SCANE_INFO, e, {
        persistent: !0
    });
}, exports.setGlobalScaneOriginInfo = function(e) {
    u.default.put(n.default.GLOBAL_SCANE_ORIGIN_INFO, {
        scaneOrigin: e.scaneOrigin,
        path: e.path
    }, {
        persistent: !0
    });
}, exports.setGlobalShopId = function(e) {
    u.default.put(n.default.GLOBAL_SHOPID, e, {
        persistent: !0
    });
}, exports.setGlobalShopInfo = function(e) {
    u.default.put(n.default.GLOBAL_SHOP_INFO, e, {
        persistent: !0
    });
}, exports.setGlobalShopState = function(e) {
    u.default.put(n.default.GLOBAL_SHOP_STATE, e, {
        persistent: !0
    });
}, exports.setGlobalSpecialEffectConfig = function(e) {
    var t = e.show;
    u.default.put(n.default.GLOBAL_SPECIAL_EFFECT_CONFIG, {
        show: t
    });
}, exports.setGlobalTabBarList = function(e) {
    u.default.put(n.default.GLOBAL_CUSTOM_TAB_BAR_LIST, e, {
        persistent: !0
    });
}, exports.setGlobalTableId = function(e) {
    u.default.put(n.default.GLOBAL_TABLEID, e, {
        persistent: !0
    });
}, exports.setGlobalThemeColor = function(e) {
    u.default.put(n.default.GLOBAL_THEME_COLOR, e, {
        persistent: !0
    });
}, exports.setGlobalUserInfo = function(e) {
    u.default.put(n.default.GLOBAL_USERINFO, {
        nickName: e.nickName,
        avatarUrl: e.avatarUrl
    }, {
        persistent: !0
    });
}, exports.setLanuchJumpInfo = function(e) {
    u.default.put(n.default.GLOBAL_LANUCH_JUMP_INFO, e, {
        persistent: !0
    });
}, exports.setLoadingGifUrl = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    u.default.put(n.default.GLOBAL_LOADING_GIF, e, {
        keep: !0
    });
}, exports.setMemberJoinEnableFlag = function(e) {
    u.default.put(n.default.GLOBAL_JOIN_MEMBER_ENABLE, e, {
        keep: !0
    });
}, exports.setPreviewMode = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    u.default.put(n.default.GLOBAL_PREVIEW_MODE, e, {
        keep: !0
    });
}, exports.setQueryPathInfo = function(e) {
    u.default.put(n.default.GLOBAL_QUERY_PATH, e);
}, exports.setRejectMemberGuideFlag = function(e) {
    u.default.put(n.default.GLOBAL_REJECT_MEMBER_GUIDE, e, {
        keep: !0
    });
}, exports.setSceneType = function(e) {
    u.default.put(n.default.GLOBAL_BUSINESS_SCENE, {
        sceneType: e
    }, {
        persistent: !0
    });
}, exports.setShopScaneFlag = function(e) {
    u.default.put(n.default.IS_SHOP_SCANE, e, {
        keep: !0
    });
}, exports.setShowMemberGuideFlag = function(e) {
    u.default.put(n.default.GLOBAL_SHOW_MEMBER_GUIDE, e, {
        keep: !0
    });
};

var t = require("../@babel/runtime/helpers/objectSpread2"), u = e(require("../m/zl/5o")), n = e(require("../m/zu"));