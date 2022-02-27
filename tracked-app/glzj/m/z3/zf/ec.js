var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.saveUserInfo = function(e) {
    return u.apply(this, arguments);
};

var r = e(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../../m/zl/5h"));

function u() {
    return (u = t(r.default.mark(function e(t) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", n.default.request({
                    api: "mtop.alsc.member.prod.customer.thirdplatform.userInfo.update",
                    param: t
                }).catch(function(e) {
                    console.error("error", e), wx.showToast({
                        title: "保存用户信息失败",
                        icon: "none"
                    });
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}