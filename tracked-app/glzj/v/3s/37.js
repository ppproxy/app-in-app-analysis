var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bindSite = function(e) {
    return o.apply(this, arguments);
}, exports.queryAccountInfo = function() {
    return s.apply(this, arguments);
};

var r = e(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../m/zl/5h")), u = require("../../pages/member/common/util/common"), a = require("../../l/wh"), i = (0, 
u.getAppType)(), p = ((0, a.getAppBaseInfo)() || {}).appId;

function s() {
    return (s = t(r.default.mark(function e() {
        var t, u = arguments;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = u.length > 0 && void 0 !== u[0] ? u[0] : [], e.next = 3, n.default.request({
                    api: "mtop.bdsh.member.prod.customer.queryUserSiteInfo",
                    param: {
                        userSiteList: JSON.stringify(t)
                    }
                }).then(function(e) {
                    return e.data || {};
                });

              case 3:
                return e.abrupt("return", e.sent);

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function o() {
    return (o = t(r.default.mark(function e(t) {
        var u;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return u = (0, a.getShopId)() || "", e.next = 3, n.default.request({
                    api: "mtop.alsc.member.prod.member.bindSite",
                    param: {
                        appType: i,
                        appId: p,
                        userSiteList: JSON.stringify(t),
                        storeId: u
                    }
                }).then(function(e) {
                    return e.data || {};
                });

              case 3:
                return e.abrupt("return", e.sent);

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}