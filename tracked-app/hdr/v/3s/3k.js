var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getHeaderInfo = function(e) {
    return a.apply(this, arguments);
}, exports.getItemDetail = function(e) {
    return o.apply(this, arguments);
}, exports.pointExchange = function(e) {
    return l.apply(this, arguments);
}, exports.queryExchangeRecordDetail = function(e) {
    return i.apply(this, arguments);
}, exports.queryExchangeRecordList = function(e) {
    return p.apply(this, arguments);
}, exports.queryExchangeResult = function(e) {
    return f.apply(this, arguments);
}, exports.queryLevelBenefit = function(e) {
    return s.apply(this, arguments);
}, exports.queryPointCouponListLoad = function(e) {
    return u.apply(this, arguments);
}, exports.queryPointFlow = function(e) {
    return c.apply(this, arguments);
};

var t = e(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../m/zl/5h"));

function a() {
    return (a = r(t.default.mark(function e(r) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.request({
                    api: "mtop.alsc.saas.mall.homepage.getHeaderInfo",
                    param: r
                }).catch(function(e) {});

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function u() {
    return (u = r(t.default.mark(function e(r) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.request({
                    api: "mtop.alsc.saas.mall.item.queryList",
                    param: r
                }).catch(function(e) {});

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function s() {
    return (s = r(t.default.mark(function e(r) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.request({
                    api: "mtop.bdsh.member.prod.benefit.level.queryLevelBenefit",
                    param: r
                }).catch(function(e) {});

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function c() {
    return (c = r(t.default.mark(function e(r) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.request({
                    api: "mtop.alsc.cshop.queryPointFlow",
                    param: r
                }).catch(function(e) {});

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function p() {
    return (p = r(t.default.mark(function e(r) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.request({
                    api: "mtop.alsc.saas.mall.bill.queryList",
                    param: r
                }).catch(function(e) {});

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function i() {
    return (i = r(t.default.mark(function e(r) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.request({
                    api: "mtop.alsc.saas.mall.bill.detail.get",
                    param: r
                }).catch(function(e) {});

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function o() {
    return (o = r(t.default.mark(function e(r) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.request({
                    api: "mtop.alsc.saas.mall.item.detail.get",
                    param: r
                }).catch(function(e) {});

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function l() {
    return (l = r(t.default.mark(function e(r) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.request({
                    api: "mtop.alsc.saas.mall.order.exchange",
                    param: r
                }).catch(function(e) {});

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function f() {
    return (f = r(t.default.mark(function e(r) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.request({
                    api: "mtop.alsc.saas.mall.order.state.get",
                    param: r
                }).catch(function(e) {});

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}