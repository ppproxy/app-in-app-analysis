var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../@babel/runtime/helpers/classCallCheck"), u = require("../../@babel/runtime/helpers/createClass"), a = new (function() {
    function e() {
        n(this, e), this.$context = null;
    }
    var a;
    return u(e, [ {
        key: "auth",
        value: (a = r(t.default.mark(function e(r, n, u) {
            var a, i, s = arguments;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = n, i = u, !(s.length < 2 || s.length > 3)) {
                        e.next = 4;
                        break;
                    }
                    throw new Error("参数不合法，成功回调和失败回调是必填参数");

                  case 4:
                    2 === s.length && (a = r, i = n), this.$context = r.context ? r.context : null, 
                    this._phoneAuth(r, a, i);

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e, t, r) {
            return a.apply(this, arguments);
        })
    }, {
        key: "_phoneAuth",
        value: function(e, n, u) {
            this.$context.auth(e, function() {
                var e = r(t.default.mark(function e(r, a, i) {
                    return t.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            r ? n(a, i) : u(a, i);

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function(t, r, n) {
                    return e.apply(this, arguments);
                };
            }());
        }
    } ]), e;
}())();

exports.default = a;