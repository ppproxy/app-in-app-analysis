var e = require("../../../@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../../../@babel/runtime/helpers/toConsumableArray"), r = require("../../../@babel/runtime/helpers/objectSpread2"), n = require("../../../@babel/runtime/helpers/classCallCheck"), i = require("../../../@babel/runtime/helpers/createClass"), s = function(t, r) {
    if (!r && t && t.__esModule) return t;
    if (null === t || "object" !== e(t) && "function" != typeof t) return {
        default: t
    };
    var n = o(r);
    if (n && n.has(t)) return n.get(t);
    var i = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in t) if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var a = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        a && (a.get || a.set) ? Object.defineProperty(i, u, a) : i[u] = t[u];
    }
    i.default = t, n && n.set(t, i);
    return i;
}(require("../n"));

function o(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), r = new WeakMap();
    return (o = function(e) {
        return e ? r : t;
    })(e);
}

var u = function() {
    function e(t) {
        n(this, e), this._options = r({
            needJump: !1,
            meaningFulSelectors: [],
            threshold: .5,
            interval: 500,
            delay: 5e3
        }, t), this._context = null, this._observer = [], this._timer = null, this._isWhite = !0, 
        this._originPage = "", this._whiteLevelMap = {
            WHITE: "WHITE",
            NO_WHITE: "NO_WHITE",
            NO_REDIRECT: "NO_REDIRECT"
        };
    }
    return i(e, [ {
        key: "_getTime",
        value: function() {
            return +new Date();
        }
    }, {
        key: "connect",
        value: function() {
            var e = this, r = this._options, n = r.meaningFulSelectors, i = void 0 === n ? [] : n, s = r.threshold, o = t(new Set(i)), u = this._getContext();
            if (!u) return this;
            var a = {
                threshold: [ s ],
                observeAll: !1
            };
            return this._observer = o.reduce(function(t, r) {
                var n = null;
                return (n = u.createIntersectionObserver ? u.createIntersectionObserver(a) : wx.createIntersectionObserver(a)).relativeToViewport({
                    top: 0,
                    bottom: 0
                }), n.observe(r, function(t) {
                    var n = t.intersectionRatio >= s;
                    wx.createSelectorQuery().select(r).boundingClientRect(function(t) {
                        (!t || t.height > 0 && t.width > 0 && n) && (e._isWhite = !1);
                    }).exec();
                }), t.push(n), t;
            }, []), this._originPage = u.route, this;
        }
    }, {
        key: "_getContext",
        value: function() {
            return this._context || (this._context = this._getCurrentPage()), this._context;
        }
    }, {
        key: "_getCurrentPage",
        value: function() {
            var e = getCurrentPages() || [];
            return e[e.length - 1];
        }
    }, {
        key: "_checkWhiteLevel",
        value: function() {
            var e = this._options.needJump, t = this._whiteLevelMap, r = this._originPage;
            return this._getCurrentPage().route !== r ? t.NO_WHITE : this._isWhite ? t.WHITE : e ? t.NO_REDIRECT : t.NO_WHITE;
        }
    }, {
        key: "start",
        value: function() {
            var e = this, t = this._options, r = t.delay, n = t.interval, i = this._timer, o = this._whiteLevelMap, u = this._observer;
            if (i && clearInterval(i), !u.length) return this;
            var a = +new Date();
            return this._timer = setInterval(function() {
                var t = getApp();
                if (t && t[s.logConstants.APP_HIDE_STATUS]) return e.stop();
                e.reconnect();
                var n = e._checkWhiteLevel();
                n === o.NO_WHITE ? e._timer && clearInterval(e._timer) : e._getTime() - a >= r && (n !== o.NO_WHITE && e._record(n, r), 
                e.stop());
            }, n), this;
        }
    }, {
        key: "_record",
        value: function(e, t) {
            var r = s.default.$ltracker, n = this._getGeoAuthInfo();
            return r.other(s.logConstants.EVENT_APP_WHITE_SCREEN_RECORD, {
                level: e,
                delay: t,
                isAuthing: n.isAuthing,
                duration: n.duration || 0
            }), this;
        }
    }, {
        key: "_getGeoAuthInfo",
        value: function() {
            var e = getApp();
            return e ? e[s.logConstants.APP_GEO_AUTH_INFO] || (e[s.logConstants.APP_GEO_AUTH_INFO] = {
                startTime: "",
                duration: 0,
                isAuthing: !1,
                isSuccess: !0
            }) : {};
        }
    }, {
        key: "stop",
        value: function() {
            return this.stopTimer(), this.stopObserver(), this;
        }
    }, {
        key: "stopTimer",
        value: function() {
            var e = this._timer;
            return e && clearInterval(e), this;
        }
    }, {
        key: "stopObserver",
        value: function() {
            var e = this._observer, t = void 0 === e ? [] : e;
            try {
                t.forEach(function(e) {
                    return e.disconnect();
                });
            } catch (e) {}
            return this._observer = [], this;
        }
    }, {
        key: "reconnect",
        value: function() {
            return this.stopObserver(), this.connect(), this;
        }
    } ]), e;
}();

exports.default = u;