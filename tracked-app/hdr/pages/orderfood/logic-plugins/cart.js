var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r, t, a = e(require("../../../@babel/runtime/regenerator")), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), o = require("../../../m/z8/zj"), u = {
    name: "cart",
    dependencies: [ "baseData", "afterPayPrecheck" ],
    preload: (t = n(a.default.mark(function e(r) {
        var t;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                (t = (0, o.getCartModel)("orderfood")) ? t.changeRoot(r) : t = (0, o.createCartModel)(r, "orderfood"), 
                t.bindCartListChange(function(e) {
                    var t = e.cartData, a = (void 0 === t ? {} : t).list, n = !(void 0 === a ? [] : a).length;
                    r.setData({
                        isCartEmpty: n
                    });
                });

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    })), function(e) {
        return t.apply(this, arguments);
    }),
    exec: (r = n(a.default.mark(function e(r, t) {
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, t();

              case 2:
                (0, o.getCartModel)("orderfood").getCartList();

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    })), function(e, t) {
        return r.apply(this, arguments);
    }),
    end: function() {
        (0, o.destoryCartModel)("orderfood");
    }
};

exports.default = u;