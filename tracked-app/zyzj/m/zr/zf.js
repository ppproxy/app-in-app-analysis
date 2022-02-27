var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.queryGlobalConfigInfo = function(e) {
    return p.apply(this, arguments);
};

var r = e(require("../../@babel/runtime/regenerator")), a = require("../../@babel/runtime/helpers/asyncToGenerator"), t = e(require("../zl/5h"));

function p() {
    return (p = a(r.default.mark(function e(a) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", t.default.request({
                    api: "mtop.alsc.saas.cshop.index.IndexQueryService.queryGlobalInfo",
                    param: {
                        pageCode: a.pageCode,
                        appId: a.appId,
                        appCode: a.appCode,
                        appType: a.deviceType
                    }
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}