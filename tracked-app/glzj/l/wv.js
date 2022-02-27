var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../@babel/runtime/helpers/objectSpread2");

require("../@babel/runtime/helpers/Arrayincludes");

var n = e(require("../@babel/runtime/regenerator")), r = require("../@babel/runtime/helpers/asyncToGenerator"), i = require("../@babel/runtime/helpers/createClass"), a = require("../@babel/runtime/helpers/classCallCheck"), o = require("../@babel/runtime/helpers/inherits"), u = require("../@babel/runtime/helpers/createSuper"), s = require("../@babel/runtime/helpers/wrapNativeSuper"), c = e(require("../m/zd/n")).default.$ltracker, l = "[".concat("logic-plugin", "]: ");

var p = function(e) {
    o(n, e);
    var t = u(n);
    function n(e) {
        var r;
        return a(this, n), (r = t.call(this, e)).name = "LogincPluginAbortError", r;
    }
    return i(n);
}(s(Error)), h = function() {
    function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        a(this, e), this._init(t, n, r)._bindOnUnload();
    }
    return i(e, [ {
        key: "_init",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return this._inited = !1, this._end = !1, this._plugins = t, this._preloadPromise = {}, 
            this.preloadData = {}, this.preloadError = {}, this.data = {}, this.startTimes = {}, 
            this.setPage(e), this.setOptions(n);
        }
    }, {
        key: "_bindOnUnload",
        value: function() {
            var e = this, t = this.page;
            if (t && !this._inited && !this._end) {
                this._inited = !0;
                var n = t.onUnload;
                t.onUnload = function() {
                    "function" == typeof n && n.call(t), e.end();
                };
            }
            return this;
        }
    }, {
        key: "setOptions",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.options = e, this;
        }
    }, {
        key: "setPage",
        value: function(e) {
            return this.page = e, this;
        }
    }, {
        key: "preload",
        value: function(e) {
            var t = this, i = [];
            return this._plugins.filter(function(t) {
                var n = t.name;
                return !e || e.includes(n);
            }).forEach(function(e) {
                var a, o = e.name, u = e.preload;
                i.includes(o) && console.warn((a = "Duplicate plugin ".concat(o), "".concat(l).concat(a))), 
                i.push(o), u || (u = function() {
                    var e = r(n.default.mark(function e() {
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }()), t.preloadData[o] && delete t.preloadData[o], t.preloadError[o] && delete t.preloadError[o], 
                t.preloadHook(o, "start");
                var s = u.call(t, t.page);
                t._preloadPromise[o] = s.then(function(e) {
                    t.preloadData[o] = e, t.preloadHook(o, "success");
                }).catch(function(e) {
                    t.preloadError[o] = e, t.preloadHook(o, "failed");
                });
            }), this;
        }
    }, {
        key: "exec",
        value: function(e) {
            var t = this, i = [];
            return this._plugins.filter(function(t) {
                var n = t.name;
                return !e || e.includes(n);
            }).forEach(function(e) {
                var n = e.name, r = e.exec, a = t._preloadPromise[n];
                i.push({
                    name: n,
                    execFunction: function(e, i) {
                        return new Promise(function(o, u) {
                            var s = function() {
                                o.apply(void 0, arguments), t.execHook(n, "success");
                            }, c = function(e) {
                                u(e);
                                var r = e || new Error("未知错误");
                                r.logincPluginName || (r.logincPluginName = n, "LogincPluginAbortError" === r.name ? t.execHook(n, "abort") : t.execHook(n, "failed"));
                            };
                            a.then(function() {
                                t.execHook(n, "start"), r.call(t, e, i).then(s).catch(c);
                            }).catch(function(e) {
                                c(e);
                            });
                        });
                    }
                });
            }), this._exec = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return function() {
                    var t = r(n.default.mark(function t(i) {
                        var a, o;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return o = function() {
                                    return (o = r(n.default.mark(function t(o) {
                                        var u, s;
                                        return n.default.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                              case 0:
                                                if (u = e[o] || {}, !(s = u.execFunction)) {
                                                    t.next = 4;
                                                    break;
                                                }
                                                return t.next = 4, s(i, function() {
                                                    var e = r(n.default.mark(function e() {
                                                        return n.default.wrap(function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                              case 0:
                                                                return e.next = 2, a(o + 1);

                                                              case 2:
                                                              case "end":
                                                                return e.stop();
                                                            }
                                                        }, e);
                                                    }));
                                                    return function() {
                                                        return e.apply(this, arguments);
                                                    };
                                                }());

                                              case 4:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                    }))).apply(this, arguments);
                                }, a = function(e) {
                                    return o.apply(this, arguments);
                                }, t.next = 4, a(0);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }();
            }(i), this._exec(this.page);
        }
    }, {
        key: "preloadAndExec",
        value: function(e) {
            return this.preload(e).exec(e);
        }
    }, {
        key: "end",
        value: function() {
            var e = this;
            this._end = !0, this._plugins.forEach(function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.end;
                "function" == typeof n && n(e.page);
            }), this._init();
        }
    }, {
        key: "abort",
        value: function(e) {
            throw new p(e);
        }
    }, {
        key: "nonBlockExec",
        value: function(e) {
            setTimeout(e, 0);
        }
    }, {
        key: "preloadHook",
        value: function(e, t) {
            this.runHook({
                name: e,
                step: "preload",
                status: t
            });
        }
    }, {
        key: "execHook",
        value: function(e, t) {
            this.runHook({
                name: e,
                step: "exec",
                status: t
            });
        }
    }, {
        key: "runHook",
        value: function(t) {
            var n = t.name, r = t.step, i = t.status;
            if (e.runHook) {
                var a, o = Date.now(), u = "".concat(n, "-").concat(r), s = this.startTimes[u];
                "start" === i ? this.startTimes[u] = o : s && (a = o - s, this.nonBlockExec(function() {
                    e.runHook({
                        name: n,
                        step: r,
                        startTime: s,
                        status: i,
                        duration: a
                    });
                }), delete this.startTimes[u]);
            }
        }
    } ], [ {
        key: "register",
        value: function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return new e(t, n, r);
        }
    }, {
        key: "runHook",
        value: function(e) {
            var n, r = e.name, i = e.step, a = e.startTime, o = e.status, u = e.duration, s = {
                c1: (n = {
                    name: r,
                    step: i,
                    status: o,
                    startTime: a,
                    duration: u
                }).name,
                c2: n.step,
                c3: n.status,
                c4: n.startTime,
                c5: n.duration
            };
            c.other("logic-plugin", t({}, s));
        }
    } ]), e;
}();

var f = {
    register: h.register,
    registerHooks: function(e) {
        var t = e.runHook, n = void 0 === t ? function() {} : t;
        h.runHook = n;
    }
};

exports.default = f;