var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var a = e(require("../../../@babel/runtime/regenerator")), r = require("../../../@babel/runtime/helpers/objectSpread2"), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), i = require("../../../l/wh"), o = require("../../../l/wa"), n = e(require("../../../m/zt")), d = require("../../../m/zd/n");

function p() {
    try {
        return {
            appVesion: (0, o.getVersion)(),
            appId: (0, i.getAppBaseInfo)().appId,
            appType: {
                wx: "WECHAT",
                my: "ALIPAY"
            }[(0, o.getMiniType)()]
        };
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return {};
    }
}

function s(e) {
    var a = (0, o.getGlobalReqHeader)(), r = (0, o.getGlobalMtopTag)(), t = {};
    return a.length && a.forEach(function(a) {
        (a.mtopTag === n.default.DEBUG_TAG_ALL || r[a.mtopTag].find(function(a) {
            return a === e.toLowerCase();
        })) && (t[a.headKey] = a.headValue);
    }), t;
}

var u, c = {
    name: "header-setting-middleware",
    action: (u = t(a.default.mark(function e(t, o) {
        var n, u, c, l, v, g, I, h, f, x, y, m, q, b, T, A, w, G, _, L, P, C, M, O, V, j, E, k, z, B;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = (0, i.getLoginToken)(), D = void 0, D = (0, i.getGeoInfo)(), c = (u = D || {}).longitude, 
                l = void 0 === c ? "" : c, v = u.latitude, g = void 0 === v ? "" : v, a = void 0, 
                a = (0, i.getShopInfo)() || {}, I = a.provinceId ? {
                    provinceId: a.provinceId,
                    cityId: a.cityId,
                    areaId: a.areaId,
                    shopId: a.shopId
                } : {}, f = void 0 === (h = I.provinceId) ? "" : h, y = void 0 === (x = I.cityId) ? "" : x, 
                q = void 0 === (m = I.areaId) ? "" : m, T = void 0 === (b = I.shopId) ? "" : b, 
                A = p(), w = A.appId, G = void 0 === w ? "" : w, _ = A.appType, L = void 0 === _ ? "" : _, 
                P = A.appVesion, C = void 0 === P ? "" : P, M = getApp() || {}, O = M[d.logConstants.APP_ACTION_INFO] || {}, 
                V = O.pvId, j = void 0 === V ? "" : V, E = O.actionId, k = void 0 === E ? "" : E, 
                t.req && (z = "", C.length > 0 && G.length > 0 && (z = "".concat(C, "&").concat(G)), 
                B = s(t.req.api), t.req.headers = Object.assign(t.req.headers || {}, r({
                    "x-smallstc-clogin": n,
                    "x-longitude": l,
                    "x-latitude": g,
                    "x-provinceId": f,
                    "x-cityId": y,
                    "x-areaId": q,
                    "x-saas-aem-pvid": j,
                    "x-saas-aem-actionId": k,
                    "x-gray-saas-shop-id": T,
                    "x-gray-saas-version-code": C,
                    "x-gray-saas-app-id": G,
                    "x-gray-saas-app-type": L,
                    "x-gray-saas-version-app-id": z,
                    "x-edition": (0, i.getPreviewMode)() || ""
                }, B))), e.next = 10, o();

              case 10:
              case "end":
                return e.stop();
            }
            var a, D;
        }, e);
    })), function(e, a) {
        return u.apply(this, arguments);
    })
};

exports.default = c;