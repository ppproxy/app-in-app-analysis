var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bindOuterId = function(e) {
    return g.apply(this, arguments);
}, exports.customerAuth = function(e) {
    return R.apply(this, arguments);
}, exports.getCouponAggsInfo = function(e) {
    return v.apply(this, arguments);
}, exports.getCouponListByStatus = function(e) {
    return m.apply(this, arguments);
}, exports.getCouponPackageDetail = function(e) {
    return M.apply(this, arguments);
}, exports.getMemberAssetsInfo = function(e) {
    return y.apply(this, arguments);
}, exports.getMemberPrivilege = function() {
    return A.apply(this, arguments);
}, exports.joinMember = function(e) {
    return x.apply(this, arguments);
}, exports.memberCenterQuery = function(e) {
    var t = (0, u.getShopInfo)() || {}, n = (0, u.getShopId)() || "", o = t.cityId, d = void 0 === o ? "" : o, f = t.latitude, l = void 0 === f ? "" : f, m = t.longitude, y = void 0 === m ? "" : m;
    return a.default.request({
        api: "mtop.alsc.member.prod.member.page.homepage.query",
        param: r({
            appCode: "KERUYUN_MERCHANT_APP",
            appId: i,
            appType: p,
            storeId: n,
            cityId: d,
            cityCode: d,
            longitude: y,
            latitude: l,
            appVersion: s,
            clientVersion: c
        }, e)
    }).then(function(e) {
        return e.data || {};
    });
}, exports.queryByCustomerId = function(e) {
    return h.apply(this, arguments);
}, exports.queryCouponDetail = function(e) {
    return S.apply(this, arguments);
}, exports.queryCouponPackStatus = function(e) {
    return N.apply(this, arguments);
}, exports.queryCouponSuitGoodsList = function(e) {
    return P.apply(this, arguments);
}, exports.queryCouponSuitShopList = function(e) {
    return k.apply(this, arguments);
}, exports.queryCustomerAndActivityInfo = function(e) {
    return a.default.request({
        api: "mtop.alsc.saas.play.task.queryCustomerAndActivityInfo",
        param: e
    }).then(function(e) {
        return e.data;
    });
}, exports.queryMemberCardGuideInfo = function(e) {
    return d.apply(this, arguments);
}, exports.queryMemberCodeInfo = function(e) {
    return _.apply(this, arguments);
}, exports.queryMemberComponentQuery = function() {
    return f.apply(this, arguments);
}, exports.queryOrderStore = function(e) {
    return U.apply(this, arguments);
}, exports.queryRectify = function(e) {
    return q.apply(this, arguments);
}, exports.querySecondCouponList = function(e) {
    return T.apply(this, arguments);
}, exports.querySecondSpecialList = function(e) {
    return w.apply(this, arguments);
}, exports.queryUnreceivedCouponList = function(e) {
    return C.apply(this, arguments);
}, exports.queryWechatTemplate = function(e) {
    return E.apply(this, arguments);
}, exports.savePersonalInfos = function(e) {
    return b.apply(this, arguments);
}, exports.sendVerifyCode = function(e) {
    return l.apply(this, arguments);
}, exports.startBindPersonalInfo = function(e) {
    return I.apply(this, arguments);
}, exports.submitAndPay = function(e) {
    return O.apply(this, arguments);
};

var t = e(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/objectSpread2"), n = require("../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../m/zl/5h")), u = require("../../l/wh"), o = require("../../l/wa"), p = (0, 
require("../../pages/member/common/util/common").getAppType)(), i = ((0, u.getAppBaseInfo)() || {}).appId, s = (0, 
o.getVersion)(), c = function() {
    try {
        return "my" === (0, o.getMiniType)() ? my.getSystemInfoSync().version : "";
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return "";
    }
}();

function d() {
    return (d = n(t.default.mark(function e(n) {
        var o, i, s, d, f, l, m, y;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = (0, u.getShopInfo)() || {}, i = (0, u.getShopId)() || "", s = o.cityId, 
                d = void 0 === s ? "" : s, f = o.latitude, l = void 0 === f ? "" : f, m = o.longitude, 
                y = void 0 === m ? "" : m, e.next = 5, a.default.request({
                    api: "mtop.alsc.member.prod.member.card.guide",
                    param: r({
                        appType: p,
                        storeId: i,
                        cityId: d,
                        cityCode: d,
                        longitude: y,
                        latitude: l,
                        clientVersion: c,
                        needQueryGuideInfo: !0
                    }, n)
                }).then(function(e) {
                    return e.data || {};
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function f() {
    return (f = n(t.default.mark(function e() {
        var n, o, d, f, l, m, y, h, b, I = arguments;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = I.length > 0 && void 0 !== I[0] ? I[0] : {}, o = (0, u.getShopInfo)() || {}, 
                d = (0, u.getShopId)() || "", f = o.cityId, l = void 0 === f ? "" : f, m = o.latitude, 
                y = void 0 === m ? "" : m, h = o.longitude, b = void 0 === h ? "" : h, e.next = 6, 
                a.default.request({
                    api: "mtop.alsc.member.prod.member.page.homepage.componentQuery",
                    param: r({
                        pageCode: "CSHOP_ORDER_FOOD_POPUP",
                        componentCode: "force-join-member-pop-window",
                        componentIndex: 1,
                        appId: i,
                        appType: p,
                        appVersion: s,
                        bizCodeMap: JSON.stringify({
                            best_special_dish_detail: "memberDish",
                            query_summary_user_benefit: "memberGuide"
                        }),
                        appCode: "KERUYUN_MERCHANT_APP",
                        storeId: d,
                        cityId: l,
                        cityCode: l,
                        longitude: b,
                        latitude: y,
                        isFetchData: !0,
                        couponSize: 1,
                        kbSpecialItemSize: 1,
                        elemeMealTicketSize: 1,
                        elemeSpecialDishSize: 1,
                        clientVersion: c,
                        bizScene: "ORDER_GUIDE_JOIN_MEMBER"
                    }, n)
                }).then(function(e) {
                    return e.data || {};
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 7:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function l() {
    return (l = n(t.default.mark(function e(n) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.member.prod.customer.sendVerifyCode",
                    param: r({}, n)
                }).then(function(e) {
                    return e.data || {};
                });

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function m() {
    return (m = n(t.default.mark(function e(n) {
        var o, d, f, l, m, y, h, b, I, v;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = (0, u.getShopInfo)() || {}, d = (0, u.getBrandInfo)() || {}, f = d.brandId, 
                l = (0, u.getShopId)() || "", m = o.cityId, y = void 0 === m ? "" : m, h = o.latitude, 
                b = void 0 === h ? "" : h, I = o.longitude, v = void 0 === I ? "" : I, e.next = 6, 
                a.default.request({
                    api: "mtop.alsc.member.prod.customer.coupon.queryListByStatus",
                    param: r({
                        channel: "SAAS",
                        pageCode: "COUPON_BAG_INDEX",
                        appCode: "KERUYUN_MERCHANT_APP",
                        appId: i,
                        appType: p,
                        brandId: f,
                        storeId: l,
                        cityId: y,
                        cityCode: y,
                        longitude: v,
                        latitude: b,
                        appVersion: s,
                        clientVersion: c
                    }, n)
                }).then(function(e) {
                    return e.data || {};
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 7:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function y() {
    return (y = n(t.default.mark(function e(n) {
        var o, p;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = (0, u.getBrandInfo)() || {}, p = o.brandId, e.next = 3, a.default.request({
                    api: "mtop.alsc.member.prod.member.queryMemberAssetsInfo",
                    param: r({
                        brandId: p
                    }, n)
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

function h() {
    return (h = n(t.default.mark(function e(n) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.member.prod.customer.queryByCustomerId",
                    param: r({
                        appType: p
                    }, n)
                }).then(function(e) {
                    return e.data || {};
                });

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function b() {
    return (b = n(t.default.mark(function e(n) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.member.prod.customer.bindPersonalInfos",
                    param: r({
                        appType: p
                    }, n)
                }).then(function(e) {
                    return e.data || {};
                });

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function I() {
    return (I = n(t.default.mark(function e(n) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.saas.play.task.startBindPersonalInfo",
                    param: r({
                        appType: p
                    }, n)
                }).then(function(e) {
                    return e.data || {};
                });

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function v() {
    return (v = n(t.default.mark(function e(n) {
        var o, s, c, d, f, l, m, y;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = (0, u.getShopId)() || "", s = (0, u.getShopInfo)() || {}, c = s.cityId, 
                d = void 0 === c ? "" : c, f = s.latitude, l = void 0 === f ? "" : f, m = s.longitude, 
                y = void 0 === m ? "" : m, e.next = 5, a.default.request({
                    api: "mtop.alsc.member.prod.customer.coupon.aggs.query",
                    param: r({
                        bizScene: "SECONDARY_CODE",
                        appType: p,
                        appId: i,
                        storeId: o,
                        appCode: "KERUYUN_MERCHANT_APP",
                        cityCode: d,
                        longitude: y,
                        latitude: l
                    }, n)
                }).then(function(e) {
                    return e.data || {};
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function x() {
    return (x = n(t.default.mark(function e(n) {
        var o, s;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = (0, u.getShopId)() || "", s = r({
                    appType: p,
                    appId: i,
                    storeId: o
                }, n), e.next = 4, a.default.request({
                    api: "mtop.alsc.member.prod.member.join",
                    param: s
                }).then(function(e) {
                    return e.data || {};
                });

              case 4:
                return e.abrupt("return", e.sent);

              case 5:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function g() {
    return (g = n(t.default.mark(function e(r) {
        var n, u, o, p;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (n = r.bizScene, u = void 0 === n ? "" : n, o = r.trustToken, p = void 0 === o ? "" : o, 
                !u || !p) {
                    e.next = 5;
                    break;
                }
                return e.next = 4, a.default.request({
                    api: "mtop.alsc.member.prod.customer.bindOuterId",
                    param: {
                        bizScene: u,
                        trustToken: p
                    }
                }).then(function(e) {
                    return e.data || {};
                });

              case 4:
                return e.abrupt("return", e.sent);

              case 5:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function q() {
    return (q = n(t.default.mark(function e(n) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.member.prod.member.queryRectify",
                    param: r({
                        appType: p
                    }, n)
                }).then(function(e) {
                    return e.data || {};
                });

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function w() {
    return (w = n(t.default.mark(function e(n) {
        var o, i, s, d, f, l, m, y;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = (0, u.getShopInfo)() || {}, i = (0, u.getShopId)() || "", s = o.cityId, 
                d = void 0 === s ? "" : s, f = o.latitude, l = void 0 === f ? "" : f, m = o.longitude, 
                y = void 0 === m ? "" : m, e.next = 5, a.default.request({
                    api: "mtop.alsc.member.prod.member.item.queryList",
                    param: r({
                        appType: p,
                        longitude: y,
                        latitude: l,
                        cityId: d,
                        cityCode: d,
                        storeId: i,
                        clientVersion: c
                    }, n)
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function C() {
    return (C = n(t.default.mark(function e(n) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.member.prod.customer.coupon.unreceived.query",
                    param: r({
                        appType: p
                    }, n)
                });

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function S() {
    return (S = n(t.default.mark(function e(n) {
        var o, s, d, f, l, m, y, h;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = (0, u.getShopId)() || "", s = (0, u.getShopInfo)() || {}, d = s.cityId, 
                f = void 0 === d ? "" : d, l = s.latitude, m = void 0 === l ? "" : l, y = s.longitude, 
                h = void 0 === y ? "" : y, e.next = 5, a.default.request({
                    api: "mtop.alsc.member.prod.customer.coupon.queryDetail",
                    param: r({
                        appType: p,
                        clientVersion: c,
                        storeId: o,
                        appId: i,
                        cityCode: f,
                        appCode: "KERUYUN_MERCHANT_APP",
                        longitude: h,
                        latitude: m
                    }, n)
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function k() {
    return (k = n(t.default.mark(function e(n) {
        var o, p, i, s, c, d, f;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = (0, u.getShopInfo)() || {}, p = o.cityId, i = void 0 === p ? "" : p, 
                s = o.latitude, c = void 0 === s ? "" : s, d = o.longitude, f = void 0 === d ? "" : d, 
                e.next = 4, a.default.request({
                    api: "mtop.bdsh.member.prod.voucher.suitShop",
                    param: r({
                        cityCode: i,
                        longitude: f,
                        latitude: c
                    }, n)
                });

              case 4:
                return e.abrupt("return", e.sent);

              case 5:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function P() {
    return (P = n(t.default.mark(function e(n) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.member.prod.benefit.voucher.suitItems",
                    param: r({}, n)
                }).then(function(e) {
                    return e.data || {};
                });

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function A() {
    return (A = n(t.default.mark(function e() {
        var r, n, o, i, s, c, d, f;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = (0, u.getShopInfo)() || {}, n = (0, u.getShopId)() || "", o = r.cityId, 
                i = void 0 === o ? "" : o, s = r.latitude, c = void 0 === s ? "" : s, d = r.longitude, 
                f = void 0 === d ? "" : d, e.next = 5, a.default.request({
                    api: "mtop.alsc.member.prod.member.queryLevelPrivilegeInfo",
                    param: {
                        appType: p,
                        storeId: n,
                        cityId: i,
                        cityCode: i,
                        longitude: f,
                        latitude: c
                    }
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function T() {
    return (T = n(t.default.mark(function e(n) {
        var o, s, c, d, f, l, m, y, h, b;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = (0, u.getBrandInfo)() || {}, s = o.brandId, c = (0, u.getShopId)() || "", 
                d = (0, u.getShopInfo)() || {}, f = d.cityId, l = void 0 === f ? "" : f, m = d.latitude, 
                y = void 0 === m ? "" : m, h = d.longitude, b = void 0 === h ? "" : h, e.next = 6, 
                a.default.request({
                    api: "mtop.alsc.member.prod.customer.coupon.queryList",
                    param: r({
                        appType: p,
                        brandId: s,
                        storeId: c,
                        appId: i,
                        appCode: "KERUYUN_MERCHANT_APP",
                        cityCode: l,
                        longitude: b,
                        latitude: y
                    }, n)
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 7:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function _() {
    return (_ = n(t.default.mark(function e(n) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.member.prod.member.code.get",
                    param: r({}, n)
                });

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function E() {
    return (E = n(t.default.mark(function e(n) {
        var o, i;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = (0, u.getBrandInfo)() || {}, i = o.brandId, e.next = 3, a.default.request({
                    api: "mtop.alsc.member.prod.customer.queryMessageTemplateList",
                    param: r({
                        appType: p,
                        brandId: i
                    }, n)
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

function R() {
    return (R = n(t.default.mark(function e(n) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.member.prod.customer.auth",
                    param: r({
                        appType: p,
                        appId: i,
                        authContent: "ALIPAY_COUPON"
                    }, n)
                }).then(function(e) {
                    return e.data || {};
                });

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function M() {
    return (M = n(t.default.mark(function e(n) {
        var o, p;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = (0, u.getBrandInfo)() || {}, p = o.brandId, e.next = 3, a.default.request({
                    api: "mtop.alsc.saas.mall.couponPackage.item.detail",
                    param: r({
                        brandId: p
                    }, n)
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

function O() {
    return (O = n(t.default.mark(function e(n) {
        var o, p;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = (0, u.getBrandInfo)() || {}, p = o.brandId, e.next = 3, a.default.request({
                    api: "mtop.alsc.saas.mall.order.submitAndPay",
                    param: r({
                        brandId: p
                    }, n)
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

function N() {
    return (N = n(t.default.mark(function e(n) {
        var o, p;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = (0, u.getBrandInfo)() || {}, p = o.brandId, e.next = 3, a.default.request({
                    api: "mtop.alsc.saas.mall.order.status",
                    param: r({
                        brandId: p
                    }, n)
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

function U() {
    return (U = n(t.default.mark(function e(n) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.saas.mall.order.store",
                    param: r({
                        orderType: "COUPON_PACKAGE"
                    }, n)
                }).then(function(e) {
                    return e.data || {};
                });

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}