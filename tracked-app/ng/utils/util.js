var e = require("../@babel/runtime/helpers/interopRequireDefault")(require("../@babel/runtime/regenerator")), n = require("../@babel/runtime/helpers/asyncToGenerator"), t = require("../@babel/runtime/helpers/classCallCheck"), r = require("../@babel/runtime/helpers/createClass"), u = function(e) {
    return (e = e.toString())[1] ? e : "0".concat(e);
}, o = function(e) {
    return function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise(function(t, r) {
            var u = Object.assign(n, {
                success: function(e) {
                    t(e);
                },
                fail: function(e) {
                    r(e);
                }
            });
            e(u);
        });
    };
}, a = function() {
    function u() {
        t(this, u);
    }
    var a, i;
    return r(u, null, [ {
        key: "asyncRequest",
        value: (i = n(e.default.mark(function n(t, r, u, a) {
            var i;
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, o(wx.request)({
                        url: t,
                        method: r,
                        data: u
                    });

                  case 2:
                    i = e.sent, a(i);

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, n);
        })), function(e, n, t, r) {
            return i.apply(this, arguments);
        })
    }, {
        key: "asyncWXLogin",
        value: (a = n(e.default.mark(function n(t) {
            var r;
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, o(wx.login)({});

                  case 2:
                    r = e.sent, t(r);

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, n);
        })), function(e) {
            return a.apply(this, arguments);
        })
    } ]), u;
}();

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), t = e.getMonth() + 1, r = e.getDate(), o = e.getHours(), a = e.getMinutes(), i = e.getSeconds();
        return "".concat([ n, t, r ].map(u).join("/"), " ").concat([ o, a, i ].map(u).join(":"));
    },
    judgeLogin: function() {
        return null != wx.getStorageSync("loginInfo") && 0 != wx.getStorageSync("loginInfo").length;
    },
    judgeWorkType: function() {
        return null != wx.getStorageSync("worktype") && 0 != wx.getStorageSync("worktype").length;
    },
    judgeUserInfo: function() {
        return null != wx.getStorageSync("userInfo") && 0 != wx.getStorageSync("userInfo").length;
    },
    showLoading: function() {
        return new Promise(function(e, n) {
            wx.showLoading({
                title: "?????????...",
                mask: !0,
                success: function(n) {
                    e(n);
                },
                fail: function(e) {
                    n(e);
                }
            });
        });
    },
    hideLoading: function() {
        return new Promise(function(e) {
            wx.hideLoading(), e();
        });
    },
    Http: a,
    makeScoreToLevel: function(e) {
        return e >= 0 && e < 100 ? "??????" : e >= 100 && e < 300 ? "??????" : e >= 300 && e < 600 ? "??????" : e >= 600 && e < 1e3 ? "??????" : e >= 1e3 ? "??????" : void 0;
    },
    levelDict: {
        "??????": 100,
        "??????": 300,
        "??????": 600,
        "??????": 1e3,
        "??????": 1500
    },
    timeFormat: function(e) {
        var n = 0, t = 0;
        e > 60 && (n = parseInt(e / 60), e = parseInt(e % 60), n > 60 && (t = parseInt(n / 60), 
        n = parseInt(n % 60)));
        var r = parseInt(e) + "???";
        return n > 0 && (r = parseInt(n) + "???" + r), t > 0 && (r = parseInt(t) + "??????" + r), 
        r;
    }
};