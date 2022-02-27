var t = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scaneWithActivityPath = function(t) {
    var a = t.url || "", e = "";
    if (a.length > 0) {
        this.localData.origin = i.ACTIVITY_PATH, a = decodeURIComponent(a);
        var n = "activityId=".concat(t.activityId, "&activityTypeId=").concat(t.activityTypeId);
        a = a.indexOf("?") > -1 ? "".concat(a, "&").concat(n) : "".concat(a, "?").concat(n), 
        this.localData.path = a, e = a.split("?") || [];
    }
    r({
        channel: i.ACTIVITY_PATH,
        path: e[0]
    });
}, exports.scaneWithDishScan = function(t) {
    (0, n.setGlobalGoodsModelInfo)({
        origin: i.ORIGIN_WITH_MINI_DISH,
        itemId: t.productId
    }), r({
        channel: i.ORIGIN_WITH_MINI_DISH,
        path: o.default.HOME_PAGE
    });
}, exports.scaneWithMinCard = function(t) {
    var a = t.itemId || "";
    a.length > 0 && (0, n.setGlobalGoodsModelInfo)({
        origin: i.ORIGIN_WITH_MINI_CARD,
        itemId: a
    });
    r({
        channel: i.ORIGIN_WITH_MINI_CARD,
        path: o.default.HOME_PAGE
    });
}, exports.scaneWithMinPath = function(t) {
    var a = t.path || "";
    a.length > 0 && (this.localData.origin = i.ORIGIN_WITH_MINI_PATH, this.localData.path = decodeURIComponent(a));
    r({
        channel: i.ORIGIN_WITH_MINI_PATH,
        path: this.localData.path
    });
}, exports.scaneWithMinPathInQuery = function() {
    var t = (0, n.getLanuchJumpInfo)();
    if (t) {
        (0, n.removeLanuchJumpInfo)();
        var a = t.origin, e = decodeURIComponent(t.path);
        if (r({
            channel: a,
            path: e
        }), a !== i.ORIGIN_WITH_MY_LINK && e.startsWith("pages/orderdetail/index")) return;
        this.localData.origin = a, this.localData.path = e;
    }
}, exports.scaneWithWxChatPath = function(t) {
    return c.apply(this, arguments);
};

var a = t(require("../../../@babel/runtime/regenerator")), e = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../../l/wh"), i = require("./origin-enum"), o = t(require("./scane-origin-map"));

function r(t) {
    var a = t || {}, e = a.channel, i = a.path;
    e && (0, n.setGlobalMiniChannel)(e), i && (0, n.setGlobalMiniChannelPath)(i);
}

function c() {
    return (c = e(a.default.mark(function t(e) {
        var n, o;
        return a.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                n = e.tm ? parseInt(e.tm, 10) : 0, o = e.cv || "", n > 0 && o.length > 0 && (this.localData.cv = o, 
                this.localData.tm = n, this.localData.origin = i.ORIGIN_WITH_WX_CHART_CARD, r({
                    channel: i.ORIGIN_WITH_WX_CHART_CARD
                }));

              case 3:
              case "end":
                return t.stop();
            }
        }, t, this);
    }))).apply(this, arguments);
}