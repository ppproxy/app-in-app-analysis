var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r, t = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../../l/wa"), u = require("../../../l/wh"), p = {
    name: "common-params-middleware",
    action: (r = a(t.default.mark(function e(r, a) {
        var p, i, s, o;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                p = "WECHAT", i = (0, n.getMiniType)(), s = (0, n.getVersion)(), o = (0, u.getAppBaseInfo)(), 
                e.t0 = i, e.next = "wx" === e.t0 ? 7 : "my" === e.t0 ? 9 : 11;
                break;

              case 7:
                return p = "WECHAT", e.abrupt("break", 12);

              case 9:
                return p = "ALIPAY", e.abrupt("break", 12);

              case 11:
                return e.abrupt("break", 12);

              case 12:
                return r.req.param = Object.assign({
                    xcxAppVersion: s,
                    xcxAppType: p,
                    xcxTmlCode: o.xcxTmlCode || "lightshopTemplate"
                }, r.req.param || {}), e.next = 15, a();

              case 15:
              case "end":
                return e.stop();
            }
        }, e);
    })), function(e, t) {
        return r.apply(this, arguments);
    })
};

exports.default = p;