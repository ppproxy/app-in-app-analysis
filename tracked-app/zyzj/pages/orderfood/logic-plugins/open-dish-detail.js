var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, a = e(require("../../../@babel/runtime/regenerator")), r = require("../../../@babel/runtime/helpers/asyncToGenerator"), i = {
    name: "openDishDetail",
    dependencies: [ "shopDecoration" ],
    exec: (t = r(a.default.mark(function e(t, r) {
        var i, n, o, s, u, l, c;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                try {
                    i = this.options, n = i.actionType, o = i.actionValue, s = i.multiSpecFlag, u = t.localData.hasOpenDishDetail, 
                    l = void 0 !== u && u, "openDishDetail" === n && o && !l && (t.localData.hasOpenDishDetail = !0, 
                    c = o, t.openDishDetail({
                        dishId: c,
                        multiSpecFlag: s
                    }));
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    setTimeout(function() {
                        throw e;
                    }, 0);
                }
                return e.next = 3, r();

              case 3:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e, a) {
        return t.apply(this, arguments);
    }),
    end: function() {}
};

exports.default = i;