var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../utils/util.js");

Page({
    data: {
        phoneNumber: "",
        password: "",
        src: "/images/login.png"
    },
    login: function() {
        var n = this;
        return t(e.default.mark(function t() {
            var o, a, s, i, u;
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r.judgeLogin()) {
                        e.next = 6;
                        break;
                    }
                    return wx.getUserProfile({
                        desc: "用户登录授权",
                        success: function(e) {
                            wx.setStorageSync("loginInfo", e);
                        },
                        fail: function(e) {
                            console.log("登陆失败"), console.log(e);
                        }
                    }), e.abrupt("return");

                  case 6:
                    if (o = n.data.phoneNumber, a = n.data.password, "" != o && "" != a) {
                        e.next = 11;
                        break;
                    }
                    return wx.showToast({
                        title: "请正确输入",
                        icon: "error",
                        duration: 500
                    }), e.abrupt("return");

                  case 11:
                    return s = wx.getStorageSync("loginInfo"), i = null, e.next = 15, r.showLoading();

                  case 15:
                    return u = null, e.next = 18, r.Http.asyncWXLogin(function(e) {
                        u = e.code;
                    });

                  case 18:
                    return e.next = 20, r.Http.asyncRequest("https://www.ngzyq.top/login", "GET", {
                        code: u,
                        rawData: s.userInfo,
                        signature: s.signature,
                        encryptData: s.encryptedData,
                        iv: s.iv,
                        phoneNumber: o,
                        password: a
                    }, function(e) {
                        i = e;
                    });

                  case 20:
                    return e.next = 22, r.hideLoading();

                  case 22:
                    0 == i.data.code ? (wx.setStorageSync("userInfo", i.data.userData), wx.removeStorageSync("loginInfo"), 
                    wx.switchTab({
                        url: "/pages/news/news"
                    })) : 1 == i.data.code ? wx.showToast({
                        title: "服务器错误",
                        icon: "error",
                        duration: 1e3
                    }) : 2 == i.data.code ? wx.showToast({
                        title: "手机或密码错误",
                        icon: "error",
                        duration: 1e3
                    }) : 3 == i.data.code && wx.showToast({
                        title: "用户不存在",
                        icon: "error",
                        duration: 1e3
                    });

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, t);
        }))();
    },
    register: function() {
        r.judgeLogin() ? wx.navigateTo({
            url: "/pages/register/register"
        }) : wx.getUserProfile({
            desc: "用户登录授权",
            success: function(e) {
                wx.setStorageSync("loginInfo", e);
            },
            fail: function(e) {
                console.log("登陆失败"), console.log(e);
            }
        });
    },
    getPhoneNumber: function(e) {
        this.setData({
            phoneNumber: e.detail.value
        });
    },
    getPassword: function(e) {
        this.setData({
            password: e.detail.value
        });
    }
});