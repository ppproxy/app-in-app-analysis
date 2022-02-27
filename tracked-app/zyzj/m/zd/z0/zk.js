var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, exports.handleUploadExp = u;

var t = e(require("../../../@babel/runtime/regenerator")), r = require("../../../@babel/runtime/helpers/objectSpread2"), o = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../../@babel/runtime/helpers/classCallCheck"), i = require("../../../@babel/runtime/helpers/createClass"), s = require("../../../l/wa"), a = require("./zl"), l = e(require("../n")), c = require("./zt");

function u(e, t) {
    var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = getApp() || {}, i = n[c.GLOBAL_EXP_MAP] || (n[c.GLOBAL_EXP_MAP] = {});
    try {
        r = t && "function" == typeof t ? t(e) : e.currentTarget.dataset || {};
        var s = (0, a.parseDataSet)(r), u = (0, a.generateKey)(s);
        if (!o.reset && i[u]) ; else {
            var h = (0, a.formatLogData)(s), p = h.logkey, v = h.params, b = void 0 === v ? {} : v;
            if (!p) return void console.error("自定义埋点请求必填logKey!");
            l.default.$ltracker.expo(p, b), i[u] = !0;
        }
    } catch (e) {}
}

var h = function() {
    function e(t) {
        n(this, e), this.$options = {
            context: null,
            selector: null,
            onEach: function(e) {
                return e.dataset;
            },
            relativeTo: null,
            threshold: .5,
            observeAll: !1,
            initialRatio: 0,
            reset: !1,
            autoExpDuration: 300
        }, Object.assign(this.$options, t), this.$observer = null, this.$selector = t.selector;
        var r = this.$options.context;
        r && Object.prototype.hasOwnProperty.call(r, "$page") ? this.type = "page" : r && Object.prototype.hasOwnProperty.call(r, "$component") ? this.type = "component" : this.$selector.startsWith(".page-") ? this.type = "page" : this.type = "component";
    }
    var l;
    return i(e, [ {
        key: "connect",
        value: function() {
            if (this.$observer) return this;
            this._createObserver();
        }
    }, {
        key: "_createObserver",
        value: function() {
            var e = this, t = this.$options, r = {
                thresholds: [ t.threshold ],
                initialRatio: t.initialRatio,
                observeAll: t.observeAll
            };
            "my" === (0, s.getMiniType)() && (r.selectAll = t.observeAll);
            var o = null;
            null !== (o = t.context && t.context.createIntersectionObserver ? t.context.createIntersectionObserver(r) : wx.createIntersectionObserver(r)) && (this.$observer = o, 
            t.relativeTo ? o.relativeTo(t.relativeTo) : o.relativeToViewport({
                top: 0,
                bottom: 0
            }), o.observe(t.selector, function(r) {
                r.intersectionRatio >= t.threshold && (t.autoExpDuration ? setTimeout(function() {
                    e._handleObserver(r);
                }, t.autoExpDuration) : u(r, t.onEach, t));
            }));
        }
    }, {
        key: "_handleObserver",
        value: (l = o(t.default.mark(function e(o) {
            var n, i, s, l, c;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = this.$options, i = n.onEach(o), e.prev = 2, e.next = 5, this._getCurrentPosition(n.selector);

                  case 5:
                    return s = e.sent, e.next = 8, this._getCurrentPosition(n.relativeTo || "", !1);

                  case 8:
                    if (l = e.sent, s && s.length) {
                        e.next = 11;
                        break;
                    }
                    return e.abrupt("return");

                  case 11:
                    if (l) {
                        e.next = 13;
                        break;
                    }
                    return e.abrupt("return");

                  case 13:
                    l = r(r({}, l), {}, {
                        pLeftTop: [ l.left, l.top ],
                        pRightTop: [ l.right, l.top ],
                        pLeftBottom: [ l.left, l.bottom ],
                        pRightBottom: [ l.right, l.bottom ]
                    }), (c = s.find(function(e) {
                        return JSON.stringify(i) === JSON.stringify(n.onEach(e));
                    })).size = c.width * c.height, (0, a.getViewVisibleRate)(l, c) >= n.threshold && u(o, n.onEach, n), 
                    e.next = 23;
                    break;

                  case 20:
                    e.prev = 20, e.t0 = e.catch(2), console.error("SaaS Log observer error: ", e.t0);

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 2, 20 ] ]);
        })), function(e) {
            return l.apply(this, arguments);
        })
    }, {
        key: "_getCurrentPosition",
        value: function(e) {
            var t = this, o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = this.$options.context || null;
            return new Promise(function(i) {
                (e ? o ? "page" === t.type ? wx.createSelectorQuery().selectAll(e) : wx.createSelectorQuery().in(n).selectAll(e) : "page" === t.type ? wx.createSelectorQuery().select(e) : wx.createSelectorQuery().in(n).select(e) : wx.createSelectorQuery().selectViewport()).boundingClientRect(function(t) {
                    i(e ? t : r(r({}, t), {}, {
                        right: t.width,
                        bottom: t.height
                    }));
                }).exec();
            });
        }
    }, {
        key: "disconnect",
        value: function() {
            this.$observer && (this.$observer.disconnect(), this.$observer = null, this.$options.reset && (this.hasReportMap = Object.create(null)));
        }
    }, {
        key: "setReset",
        value: function(e) {
            this.$options.reset = e;
        }
    }, {
        key: "reconnect",
        value: function() {
            this.disconnect(), this.connect();
        }
    } ]), e;
}();

exports.default = h;