var t = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bindSaasVoucher = function(t) {
    return w.apply(this, arguments);
}, exports.createAssistance = function(t) {
    return f.apply(this, arguments);
}, exports.getMsgList = function(t) {
    return d.apply(this, arguments);
}, exports.participateAssistance = function(t) {
    return l.apply(this, arguments);
}, exports.queryActivityDetailsHasTaskId = function(t) {
    return o.apply(this, arguments);
}, exports.queryActivityDetailsNoTaskId = function(t) {
    return i.apply(this, arguments);
}, exports.queryCollectPoint = function(t) {
    return x.apply(this, arguments);
}, exports.queryMerchantCouponInfo = function(t) {
    return q.apply(this, arguments);
}, exports.queryOneClickCoupon = function(t) {
    return y.apply(this, arguments);
}, exports.queryRewardState = function(t) {
    return m.apply(this, arguments);
}, exports.queryVoucherNeedSyncByActivityType = function(t) {
    return k.apply(this, arguments);
}, exports.startTask = function(t) {
    return h.apply(this, arguments);
};

var e = t(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/objectSpread2"), a = require("../../@babel/runtime/helpers/asyncToGenerator"), n = t(require("../../m/zl/5h")), u = require("../../pages/member/common/util/common"), s = require("../../l/wh"), p = (0, 
u.getAppType)(), c = (0, s.getShopId)();

function i() {
    return (i = a(e.default.mark(function t(a) {
        return e.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: "mtop.alsc.saas.play.assist.queryActivityAndTask",
                    param: r({
                        appType: p,
                        shopId: c
                    }, a)
                }).then(function(t) {
                    return t.data || {};
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function o() {
    return (o = a(e.default.mark(function t(a) {
        return e.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: "mtop.alsc.saas.play.assist.queryActivityAndTaskWithTaskId",
                    param: r({
                        shopId: c,
                        appType: p
                    }, a)
                }).then(function(t) {
                    return t.data || {};
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function f() {
    return (f = a(e.default.mark(function t(a) {
        return e.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: "mtop.alsc.saas.play.assist.startActivityTask",
                    param: r({
                        shopId: c,
                        appType: p
                    }, a)
                }).then(function(t) {
                    return t.data || {};
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function l() {
    return (l = a(e.default.mark(function t(a) {
        return e.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: "mtop.alsc.saas.play.assist.joinActivityTask",
                    param: r({
                        shopId: c,
                        appType: p
                    }, a)
                }).then(function(t) {
                    return t.data || {};
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function d() {
    return (d = a(e.default.mark(function t(a) {
        return e.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: "mtop.alsc.saas.play.assist.queryActivityTaskVoucherList",
                    param: r({
                        shopId: c,
                        appType: p
                    }, a)
                }).then(function(t) {
                    return t.data || {};
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function y() {
    return (y = a(e.default.mark(function t(a) {
        return e.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: "mtop.alsc.saas.play.task.query",
                    param: r({}, a)
                }).then(function(t) {
                    return t.data || {};
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function h() {
    return (h = a(e.default.mark(function t(a) {
        return e.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: "mtop.alsc.saas.play.task.start",
                    param: r({}, a)
                }).then(function(t) {
                    return t.data || {};
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function m() {
    return (m = a(e.default.mark(function t(a) {
        return e.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: "mtop.alsc.saas.play.task.queryTaskState",
                    param: r({}, a)
                }).then(function(t) {
                    return t.data || {};
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function x() {
    return (x = a(e.default.mark(function t(a) {
        return e.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: "mtop.alsc.saas.play.task.queryCollectionPointTask",
                    param: r({}, a)
                }).then(function(t) {
                    return t.data || {};
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function q() {
    return (q = a(e.default.mark(function t(a) {
        return e.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: "mtop.alsc.saas.play.coupon.queryMerchantCouponInfo",
                    param: r({}, a)
                }).then(function(t) {
                    return t.data || {};
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function k() {
    return (k = a(e.default.mark(function t(a) {
        return e.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: "mtop.alsc.saas.play.coupon.queryVoucherNeedSyncByActivityType",
                    param: r({}, a)
                }).then(function(t) {
                    return t.data || {};
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function w() {
    return (w = a(e.default.mark(function t(a) {
        return e.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: "mtop.alsc.saas.play.coupon.bindSaasVoucher",
                    param: r({}, a)
                }).then(function(t) {
                    return t.data || {};
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}