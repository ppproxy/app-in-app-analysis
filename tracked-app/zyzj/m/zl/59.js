var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../../l/wd/wg"));

var r = function() {
    function e(e) {
        this._getters = {}, this._cache = Object.create(null), e && (this._getters = e);
    }
    return e.prototype.purge = function() {
        this._cache = Object.create(null);
    }, e.prototype.register = function(e, t) {
        this._getters[e] = t;
    }, e.prototype.refresh = function(e) {
        delete this._cache[e];
    }, e.prototype.getSync = function(e) {
        var t = this._cache[e];
        if (void 0 === t) {
            if (!this._getters[e]) throw new Error("no getter for " + e);
            t = this._getters[e](!0), this._cache[e] = t;
        }
        return t;
    }, e.prototype.get = function(e) {
        var t, r = this, n = this._cache[e];
        if (void 0 === n) {
            if (!this._getters[e]) return Promise.reject(new Error("no getter for " + e));
            try {
                var o = this._getters[e](!1);
                return null != (t = o) && (t.constructor && "function" == typeof t.constructor.resolve ? t.constructor.resolve(t) === t : Promise.resolve(t) === t) ? o.then(function(t) {
                    return r._cache[e] = t, t;
                }) : (this._cache[e] = o, Promise.resolve(o));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return Promise.reject(e);
            }
        }
        return Promise.resolve(n);
    }, e;
}(), n = function() {
    wx.canIUse && wx.canIUse("onNetworkStatusChange") && wx.onNetworkStatusChange(function() {
        u.refresh("networkType");
    }), n = function() {};
};

function o(e, t) {
    return function(r) {
        return r ? e() : new Promise(t);
    };
}

function c(e) {
    setTimeout(function() {
        throw new Error(e);
    }, 0);
}

function i(e) {
    return c("[System] Fail to get deviceId: " + e), (0, t.default)();
}

function s(e) {
    return "function" == typeof Object.defineProperty && Object.defineProperty(e, "windowHeight", {
        get: function() {
            return wx.getSystemInfoSync().windowHeight;
        }
    }), e;
}

var u = new r({
    systemInfo: o(function() {
        return s(wx.getSystemInfoSync());
    }, function(e, t) {
        wx.getSystemInfo({
            success: function(t) {
                e(s(t));
            },
            fail: function(e) {
                t(new Error(e.errMsg));
            }
        });
    }),
    networkType: o(function() {
        throw new Error("no sync method to get network type");
    }, function(e, t) {
        n(), wx.getNetworkType({
            success: function(t) {
                e(t.networkType);
            },
            fail: function(e) {
                t(new Error(e.errMsg));
            }
        });
    }),
    deviceId: o(function() {
        try {
            var e = wx.getStorageSync("xcx.did");
            if (!e) {
                e = (0, t.default)();
                try {
                    wx.setStorageSync("xcx.did", e);
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    wx.setStorage({
                        key: "xcx.did",
                        data: e,
                        fail: function(e) {
                            c("[System] Fail to save deviceId: " + e.errMsg);
                        }
                    });
                }
            }
            return e;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return i(e.message);
        }
    }, function(e, r) {
        wx.getStorage({
            key: "xcx.did",
            success: function(n) {
                if (n.data) return e(n.data);
                var o = (0, t.default)();
                wx.setStorage({
                    key: "xcx.did",
                    data: o,
                    success: function() {
                        e(o);
                    },
                    fail: function(e) {
                        r(new Error(e.errMsg));
                    }
                });
            },
            fail: function(t) {
                e(i(t.errMsg));
            }
        });
    })
}), f = u;

exports.default = f;