var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getDebugEnv = u, exports.getDebugSwitch = i, exports.getEnv = function() {
    if (i()) return u();
    return "prod";
}, exports.getExtInfo = function() {
    return n.default.get("global.ext.info") || null;
}, exports.getGlobalMtopTag = function() {
    return n.default.get("mtopTag") || [];
}, exports.getGlobalReqHeader = function() {
    return n.default.get("reqHeader") || [];
}, exports.getLogSwitch = function() {
    return n.default.get("logSwitch") || !1;
}, exports.getMiniType = function() {
    return n.default.get("global.minitype") || "wx";
}, exports.getSceneValue = function() {
    return n.default.get("global.scene") || "";
}, exports.getUUID = function() {
    return (0, r.default)();
}, exports.getUploadVersion = function() {
    return t.default.$uploadVersion;
}, exports.getUtdid = function() {
    return n.default.get("global.utdid") || "";
}, exports.getVersion = function() {
    return t.default.$version;
}, exports.isIphoneXOrMore = function() {
    var e = o.default.getSync("systemInfo").model, t = !1;
    /^iPhone ?(1|X)+/.test(void 0 === e ? "" : e) && (t = !0);
    return t;
}, exports.isMock = function() {
    return !(!1 === t.default.isMock || void 0 === t.default.isMock);
}, exports.setGlobalDebugEnv = function(e) {
    n.default.put("debugenv", e, {
        persistent: !0
    });
}, exports.setGlobalDebugSwitch = function(e) {
    n.default.put("debugswitch", e, {
        persistent: !0
    });
}, exports.setGlobalExtInfo = function(e) {
    n.default.put("global.ext.info", e, {
        persistent: !0
    });
}, exports.setGlobalLogSwitch = function(e) {
    n.default.put("logSwitch", e, {
        persistent: !0
    });
}, exports.setGlobalMiniType = function(e) {
    n.default.put("global.minitype", e, {
        persistent: !0
    });
}, exports.setGlobalMtopTag = function(e) {
    n.default.put("mtopTag", e, {
        persistent: !0
    });
}, exports.setGlobalReqHeader = function(e) {
    n.default.put("reqHeader", e, {
        persistent: !0
    });
}, exports.setGlobalSceneValue = function(e) {
    n.default.put("global.scene", e, {
        persistent: !0
    });
}, exports.setUtdid = function(e) {
    n.default.put("global.utdid", e, {
        persistent: !0
    });
};

var t = e(require("../m/zv")), n = e(require("../m/zl/5o")), o = e(require("../m/zl/59")), r = e(require("./wd/wg"));

function u() {
    return n.default.get("debugenv") || "dev";
}

function i() {
    return n.default.get("debugswitch") || !1;
}