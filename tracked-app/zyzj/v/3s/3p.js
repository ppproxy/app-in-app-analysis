var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.RectifyStatus = void 0, exports.handleRectifyService = function(e, r) {
    return o.apply(this, arguments);
};

var r = e(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator"), n = require("./ed"), i = require("../../pages/member/common/util/url"), a = e(require("../../m/zl/5o")), u = require("../../pages/member/common/util/common"), c = {
    RECTIFY_CANCELED: "rectify_canceled",
    INTERFACE_FAIL: "interface_fail",
    NO_NEED: "no_need",
    ALREADY_GOTO_RECTIFY_PAGE: "already_goto_rectify_page"
};

function o() {
    return (o = t(r.default.mark(function e(t, o) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", new Promise(function(e) {
                    (0, n.queryRectify)({
                        bizScene: t
                    }).then(function(r) {
                        if (u.customLog.log({
                            title: "member-accountBind-handleRectifyService-res",
                            data: r
                        }), r && r.data) {
                            var t = r.data;
                            if (t.needRectify && "false" !== t.needRectify && t.rectifyUrl) {
                                e(c.ALREADY_GOTO_RECTIFY_PAGE);
                                try {
                                    a.default.put("syncCouponsKey", !0), (0, i.openUrl)({
                                        url: t.rectifyUrl
                                    });
                                } catch (e) {}
                            } else e(c.NO_NEED);
                        } else e(c.INTERFACE_FAIL);
                    }).catch(function(r) {
                        e(c.INTERFACE_FAIL);
                    });
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

exports.RectifyStatus = c;