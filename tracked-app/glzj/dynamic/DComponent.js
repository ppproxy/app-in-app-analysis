var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var c = e.data, s = e.__tid__, l = e.options, f = void 0 === l ? {} : l, h = e.ready, _ = e.methods, p = e.detached, b = i(e, o), v = null, m = (0, 
    a.uuid)();
    return (0, d.default)(t({
        options: t(t({}, f), {}, {
            pureDataPattern: void 0
        }),
        data: t(t({}, c), {}, {
            __children__: [],
            __pid__: m
        }),
        ready: function() {
            var e = this, i = {};
            for (var d in _) i[d] = _[d].bind(this);
            var o = this.setData.bind(this), c = {}, l = function(n, d, s) {
                if (v) {
                    "function" != typeof d && (s = d, d = void 0), Object.assign(c, n);
                    var l = (0, r.default)(v, (0, u.default)(e.data, c));
                    (0, a.cache)(m, l, i, e), o(t(t({}, n), {}, {
                        __children__: l
                    }), function() {
                        d && "function" == typeof d && d(), c = {};
                    }, s);
                }
            };
            Object.defineProperty(this, "setData", {
                value: function(e, t, i) {
                    v && l(e, t, i);
                }
            }), (0, n.fetchTpl)(s).then(function(t) {
                v = t, l({}, function() {
                    h && h.call(e);
                });
            });
        },
        methods: _,
        detached: function() {
            p && p.call(this), (0, a.clean)(m);
        }
    }, b));
};

var t = require("../@babel/runtime/helpers/objectSpread2"), i = require("../@babel/runtime/helpers/objectWithoutProperties"), r = e(require("./mini-render")), a = require("./caches"), n = require("./template"), u = e(require("./mini-assign")), d = e(require("../m/zk/za")), o = [ "data", "__tid__", "options", "ready", "methods", "detached" ];