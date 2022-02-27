var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r = e(require("../../../@babel/runtime/regenerator")), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), i = {
    name: "positionMustAddDishCate",
    dependencies: [ "shopDecoration" ],
    exec: (t = n(r.default.mark(function e(t, n) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                try {
                    "positionMustAddDishCate" === this.options.actionType && t.scrollToMustAddDishCate();
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    setTimeout(function() {
                        throw new Error("跳转必选品分类异常");
                    }, 0);
                }
                return e.next = 3, n();

              case 3:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e, r) {
        return t.apply(this, arguments);
    }),
    end: function() {}
};

exports.default = i;