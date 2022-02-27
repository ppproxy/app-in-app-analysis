Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BindResult = void 0, exports.contains = function(e, n) {
    return !!(e && e.length && n) && e.some(function(e) {
        return e === n;
    });
}, exports.getForegroundColor = function(e) {
    if (!e) return "#333";
    var n = e.toLowerCase();
    0 === n.indexOf("#") && (n = n.slice(1, n.length));
    if (/^([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(n)) {
        if (3 === n.length) {
            for (var t = "", r = 0; r < 3; r += 1) t += n.slice(r, r + 1).concat(n.slice(r, r + 1));
            n = t;
        }
        for (var i = [], o = 0; o < 6; o += 2) i.push(parseInt("0x" + n.slice(o, o + 2)));
        return .213 * (s = i)[0] + .715 * s[1] + .072 * s[2] > 127.5 ? "#333" : "#fff";
    }
    return "#333";
    var s;
}, exports.isPointMallBizType = function(n) {
    switch (n) {
      case e.BIND_RECTIFY_BIZ_TYPE.POINT_MALL:
        return !0;

      default:
        return !1;
    }
};

var e = require("../../../../pages/member/common/util/common");

exports.BindResult = {
    BIND_INVALID_SITE: "bind_invalid_site",
    BIND_FAIL: "bind_fail",
    BIND_SUCCESS: "bind_sucess",
    BIND_CANCEL: "bind_cancel",
    BIND_CANCEL_TMP: "bind_cancel_tmp",
    BIND_NO: "bind_no",
    BIND_NO_CHECK_RECTIFY: "bind_no_rectify"
};