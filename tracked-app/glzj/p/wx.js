var e = require("../@babel/runtime/helpers/interopRequireDefault"), r = require("../@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setCommonParams = exports.getGlobalParams = exports.default = void 0;

var t = require("../@babel/runtime/helpers/objectSpread2"), n = require("../l/wh"), o = require("../l/wa"), a = e(require("../m/zl/59")), i = function(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || "object" !== r(e) && "function" != typeof e) return {
        default: e
    };
    var n = p(t);
    if (n && n.has(e)) return n.get(e);
    var o = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e) if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
        var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
        s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i];
    }
    o.default = e, n && n.set(e, o);
    return o;
}(require("../m/zd/n")), s = require("../m/zd/zb/zm"), l = require("../m/zd/zb/zg");

function p(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return (p = function(e) {
        return e ? t : r;
    })(e);
}

var u = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = (0, 
    n.getShopInfo)() || {}, s = (0, n.getAppBaseInfo)(), p = (0, n.getBrandInfo)() || {}, u = getCurrentPages() || [], d = u[u.length - 1] || {}, m = d.route || "", c = (0, 
    n.getLoginCustomer)(), g = (0, o.getVersion)(), f = (0, o.getSceneValue)() || "unknown", b = (0, 
    n.getGlobalMiniChannel)() || "minpath", h = (0, n.getTableId)(), v = (0, n.getGlobalMiniChannelPath)() || "pages/lightshop/index";
    v = v.split("?")[0];
    var P = (0, o.getEnv)(), y = (0, o.getMiniType)() || "wx", I = a.default.getSync("systemInfo"), w = I.SDKVersion, x = l.aplus_universal.getPageSPM() || [ 0, 0 ], _ = (0, 
    o.getUploadVersion)() || "", q = JSON.stringify({
        channel: b,
        scene: f,
        targetPage: v,
        tableId: h
    }), z = "", O = "";
    return d.$page && d.$page.spmInfo && (z = d.$page.spmInfo.spmAPos, O = d.$page.spmInfo.spmBPos), 
    t({
        spm_a: z,
        spm_b: O,
        page_id: m,
        origin_url: m,
        title: _,
        env: P,
        pu_i: c,
        city: r.cityId,
        scene: f,
        shopId: r.shopId,
        brandId: p.brandId,
        sdk_version: i.sdkVersion,
        dim1: w,
        dim2: f,
        dim3: s.appId,
        dim4: r.shopId,
        dim5: p.brandId,
        dim6: "".concat(x[0], ".").concat(x[1], ".0.0"),
        dim7: q,
        dim8: g,
        dim9: s.xcxTmlCode || "lightshopTemplate",
        dim10: y
    }, e);
};

exports.getGlobalParams = u;

var d = function(e) {
    var r = u();
    i.default.$ltracker.setGenericParams(r, e);
};

exports.setCommonParams = d;

var m = {
    onLoad: function() {
        try {
            d(this);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            s.ALog.warn("log-biz-common onLoad setGenericParams error", e);
        }
    },
    onShow: function() {
        try {
            d(this);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.error("log-biz-common onShow setGenericParams error", e);
        }
    }
};

exports.default = m;