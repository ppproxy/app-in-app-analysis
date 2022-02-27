var e = require("../@babel/runtime/helpers/interopRequireDefault"), t = require("../@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var t = e.data, p = e.__tid__, h = e.__ctx__, _ = e.onLoad, v = e.onShow, y = e.onReady, b = e.onUnload, P = e.methods, g = o(e, f), O = (0, 
    i.uuid)(), R = null;
    return (0, d.default)(n({
        data: n(n({}, t), {}, {
            __children__: [],
            __pid__: O
        }),
        onLoad: function(t) {
            var o = this;
            this.__options = t;
            var d = {};
            for (var f in P) d[f] = P[f].bind(this);
            var _ = this.setData.bind(this), v = {}, y = function(e, t, r) {
                if (R) {
                    "function" != typeof t && (r = t, t = void 0), Object.assign(v, e);
                    var l = (0, a.default)(R, (0, u.default)(o.data, v));
                    (0, i.cache)(O, l, d, o), _(n(n({}, e), {}, {
                        __children__: l
                    }), function() {
                        t && "function" == typeof t && t(), v = {};
                    }, r);
                }
            };
            Object.defineProperty(this, "setData", {
                value: function(e, t, r) {
                    R && y(e, t, r);
                }
            });
            var b = Date.now();
            (0, l.fetchTpl)(p).then(function(a) {
                if (R = a, a.js) {
                    var i = {
                        Infinity: 1 / 0,
                        NaN: NaN,
                        undefined: void 0,
                        isFinite: isFinite,
                        isNaN: isNaN,
                        parseFloat: parseFloat,
                        parseInt: parseInt,
                        decodeURI: decodeURI,
                        decodeURIComponent: decodeURIComponent,
                        encodeURI: encodeURI,
                        encodeURIComponent: encodeURIComponent,
                        Object: Object,
                        Boolean: Boolean,
                        Symbol: Symbol,
                        Error: Error,
                        Number: Number,
                        Math: Math,
                        Date: Date,
                        String: String,
                        RegExp: RegExp,
                        Array: Array,
                        Map: Map,
                        Set: Set,
                        JSON: JSON,
                        Promise: Promise,
                        Proxy: Proxy,
                        regeneratorRuntime: r.default,
                        console: console,
                        setTimeout: setTimeout,
                        setInterval: setInterval,
                        clearTimeout: clearTimeout,
                        clearInterval: clearInterval,
                        getApp: getApp,
                        getCurrentPages: getCurrentPages
                    };
                    try {
                        i.wx = wx;
                    } catch (e) {}
                    try {
                        i.my = my;
                    } catch (e) {}
                    var l = (0, s.default)(i);
                    l.extends(h);
                    var u = l.eval(a.js);
                    for (var d in u) {
                        if ([ "onLoad", "onReady", "onShow" ].includes(d) && (e[d] = u[d]), [ "onHide", "onReady", "onShow", "onUnload" ].includes(d) && Object.defineProperty(o, d, {
                            value: u[d]
                        }), d.startsWith("methods.") && Object.defineProperty(o, d.replace("methods.", ""), {
                            value: u[d]
                        }), "methods" === d) for (var f in u.methods) Object.defineProperty(o, f, {
                            value: u.methods[f]
                        });
                        [ "data", "components" ].includes(d) && (e[d] = u[d]);
                    }
                }
                y(n({}, e.data), function() {
                    e.onLoad && e.onLoad.call(o, t), e.onShow && e.onShow.call(o), e.onReady && e.onReady.call(o);
                }), m.logPerf(c.PerfType.mark, {
                    name: "DYNAMIC_TEMPLATE_LOAD_TIME",
                    markDuration: Date.now() - b,
                    instant: !1
                });
            }, function() {
                var e = o.$getCustomError("dynamic-template-load-error");
                m.logError(e), R = l.EXCEPTION_PAGE_TPL, o.setData({});
            });
        },
        methods: n(n({}, P), {}, {
            __reloadClick: function() {
                var e = this;
                (0, l.fetchTpl)(p).then(function(t) {
                    R = t, e.setData({}, function() {
                        _ && _.call(e, e.__options), v && v.call(e), y && y.call(e);
                    });
                });
            }
        }),
        onUnload: function() {
            b && b.call(this), (0, i.clean)(O);
        }
    }, g));
}, require("../@babel/runtime/helpers/Arrayincludes");

var r = e(require("../@babel/runtime/regenerator")), n = require("../@babel/runtime/helpers/objectSpread2"), o = require("../@babel/runtime/helpers/objectWithoutProperties"), a = e(require("./mini-render")), i = require("./caches"), l = require("./template"), u = e(require("./mini-assign")), d = e(require("../m/zk/z9")), c = function(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" !== t(e) && "function" != typeof e) return {
        default: e
    };
    var n = p(r);
    if (n && n.has(e)) return n.get(e);
    var o = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e) if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
        var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
        l && (l.get || l.set) ? Object.defineProperty(o, i, l) : o[i] = e[i];
    }
    o.default = e, n && n.set(e, o);
    return o;
}(require("../m/zd/n")), s = e(require("./evaluate/index")), f = (e(require("./evaluate/regeneratorRuntime")), 
[ "data", "__tid__", "__ctx__", "onLoad", "onShow", "onReady", "onUnload", "methods" ]);

function p(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), r = new WeakMap();
    return (p = function(e) {
        return e ? r : t;
    })(e);
}

var m = c.default.$ltracker;