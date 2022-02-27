var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = exports.TIMEOUT_ERROR = exports.RETRY_TIMES_ERROR = void 0;

var t = e(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/asyncToGenerator"), i = require("../../@babel/runtime/helpers/classCallCheck"), n = require("../../@babel/runtime/helpers/createClass");

function s(e, t) {
    for (var r in t) void 0 === e[r] && (e[r] = t[r]);
    return e;
}

function u(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "error", r = new Error(e);
    return r.type = t, r;
}

function o() {
    return new Date().getTime();
}

function a(e) {
    return e && "function" == typeof e;
}

function c(e) {
    return !isNaN(e) && e > 0;
}

var l = {
    interval: 1e3,
    timeout: 0,
    retry: 0,
    processCallback: function() {},
    successFunc: function(e, t) {
        return !1;
    },
    executeImmediately: !1
};

exports.TIMEOUT_ERROR = "TIMEOUT_ERROR";

exports.RETRY_TIMES_ERROR = "RETRY_TIMES_ERROR";

var h = function() {
    function e(t, r) {
        return i(this, e), this instanceof e ? (this.func = t || Promise.resolve(), this.options = s(r, l), 
        this._startTime = 0, this._requestTime = 0, this._timer = null, this._running = !1, 
        this._isRequesting = !1, this._isFirst = !0, this) : new e(t, r);
    }
    return n(e, [ {
        key: "_setRunning",
        value: function(e) {
            this._running = e;
        }
    }, {
        key: "_setRequesting",
        value: function(e) {
            this._isRequesting = e;
        }
    }, {
        key: "poll",
        value: function(e, i, n) {
            var s = this, l = this.options, h = l.timeout, R = l.interval, _ = l.retry, f = l.processCallback, m = l.successFunc, T = l.executeImmediately, p = void 0 !== T && T;
            if (this._requestTime++, 1 === this._requestTime && (this._startTime = o()), !this._running) return this.reset();
            if (this._requestTime > _ && _ > 0) this.reset(), i({
                err: u("retry time limit ".concat(_)),
                RETRY_TIMES_ERROR: "RETRY_TIMES_ERROR"
            }); else if (c(h) && c(this._startTime) && o() - this._startTime > h) this.reset(), 
            i({
                err: u("poll timeout ".concat(h)),
                TIMEOUT_ERROR: "TIMEOUT_ERROR"
            }); else {
                clearTimeout(this._timer);
                var v = function() {
                    var n = r(t.default.mark(function r(n, u) {
                        return t.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (s._setRequesting(!1), a(f) && f(n, u, {
                                    context: s
                                }), t.t0 = a(m), !t.t0) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 6, m(n, u);

                              case 6:
                                t.t0 = t.sent;

                              case 7:
                                if (!t.t0) {
                                    t.next = 12;
                                    break;
                                }
                                s.reset(), e({
                                    err: n,
                                    result: u
                                }), t.next = 13;
                                break;

                              case 12:
                                s.poll(e, i);

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, r);
                    }));
                    return function(e, t) {
                        return n.apply(this, arguments);
                    };
                }(), E = function() {
                    s._isFirst = !1;
                    try {
                        s._setRequesting(!0), s.func().then(function(e) {
                            return v(null, e);
                        }).catch(function(e) {
                            return v(e, null);
                        });
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        s.reset(), i({
                            err: e
                        });
                    }
                };
                n || p && this._isFirst ? E() : this._timer = setTimeout(function() {
                    E();
                }, R);
            }
            return this;
        }
    }, {
        key: "start",
        value: function() {
            var e = this;
            if (!this._running) return this.reset(), this._setRunning(!0), new Promise(function(t, r) {
                e.poll(t, r);
            });
        }
    }, {
        key: "stop",
        value: function() {
            return this.reset();
        }
    }, {
        key: "reset",
        value: function() {
            return clearTimeout(this._timer), this._requestTime = 0, this._timer = null, this._isFirst = !0, 
            this._setRequesting(!1), this._setRunning(!1), this;
        }
    }, {
        key: "setOptions",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.options = s(e, this.options), this;
        }
    } ]), e;
}();

exports.default = h;