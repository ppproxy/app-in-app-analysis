function e(e) {
    if (Array.isArray(e)) {
        for (var n = 0, r = Array(e.length); n < e.length; n++) r[n] = e[n];
        return r;
    }
    return Array.from(e);
}

function n(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var r = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
}, o = function() {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(n, r, o) {
        return r && e(n.prototype, r), o && e(n, o), n;
    };
}();

module.exports = function(t) {
    var i = t.Anim, s = t.request, u = t.config, a = t.Event, c = i.wedux.observe;
    u.domain, u.appid;
    return c(new (function() {
        function t() {
            n(this, t), this.initUserInfo();
        }
        return o(t, [ {
            key: "initUserInfo",
            value: function() {
                this.userInfo = {
                    isAuth: !1,
                    phone: "",
                    role: [],
                    isLeader: !1,
                    address: "",
                    name: "",
                    uid: "",
                    admin: {
                        areaCode: "",
                        profession: 0
                    }
                };
            }
        }, {
            key: "fetchUserInfo",
            value: function() {
                var e = this;
                return s({
                    url: "/wll/account/getloginuserinfo"
                }).then(function(n) {
                    return console.log("res", n), e.userInfo = r({}, n, {
                        isAuth: !!n.phone,
                        isLeader: n.role && n.role.includes("LEADER"),
                        isVolunteer: n.role && n.role.includes("ZHIYUAN")
                    }), n.role && n.role.includes("GRID_MANAGER") && e.userInfo.isAuth && e.getAccessToken(), 
                    a.dispatch("fetchUserInfo", e.userInfo), e.userInfo;
                }).catch(function(e) {
                    wx.hideLoading(), console.error(e);
                });
            }
        }, {
            key: "updateUserInfo",
            value: function(e) {
                this.userInfo = e;
            }
        }, {
            key: "login",
            value: function() {
                console.log("login");
            }
        }, {
            key: "getAccessToken",
            value: function() {
                var n = this;
                return s({
                    url: "/manager/wechatSessionLogin"
                }).then(function(o) {
                    wx.setStorageSync("wx-accesstoken", o.token);
                    var t = [].concat(e(new Set([ o.areaCode.substring(0, 2) + "0000000000", o.areaCode.substring(0, 4) + "00000000", o.areaCode.substring(0, 6) + "000000", o.areaCode.substring(0, 9) + "000", "" + o.areaCode ])));
                    n.userInfo.admin = r({}, o, {
                        level: o.level || t.length + "0"
                    });
                });
            }
        }, {
            key: "checkAuth",
            value: function() {
                return !!this.userInfo.isAuth || (wx.showModal({
                    title: "温馨提示",
                    content: "请先进行登录",
                    showCancel: !1,
                    confirmText: "去登录",
                    success: function() {
                        wx.navigateTo({
                            url: "/pages/mine/login/index"
                        });
                    }
                }), !1);
            }
        } ]), t;
    }())(), "user");
};