var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../utils/util.js");

Page({
    data: {
        realName: "",
        phoneNumber: "",
        workType: "",
        workTypeList: [],
        selected: -1
    },
    onLoad: function(e) {
        this.init();
        var t = wx.getStorageSync("userInfo");
        this.setData({
            realName: t.realName,
            phoneNumber: t.phoneNumber,
            workType: t.workType
        });
    },
    init: function() {
        var n = this;
        return t(e.default.mark(function t() {
            var a;
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = n, e.next = 3, r.showLoading();

                  case 3:
                    return e.next = 5, r.Http.asyncRequest("https://www.ngzyq.top/api/worktype/getAllName", "GET", {}, function(e) {
                        a.setData({
                            workTypeList: e.data
                        });
                    });

                  case 5:
                    return e.next = 7, r.hideLoading();

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, t);
        }))();
    },
    radioChange: function(e) {
        for (var t = this.data.workTypeList, r = 0, n = 0; n < t.length; ++n) t[n].checked = t[n].worktype_name == e.detail.value, 
        t[n].checked && (r = n);
        this.setData({
            workTypeList: t,
            selected: r
        });
    },
    formSubmit: function(n) {
        var a = this;
        return t(e.default.mark(function t() {
            var o, u, i, s, c, l, p, w;
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o = n.detail.value.realName, u = n.detail.value.phoneNumber, i = n.detail.value.password, 
                    s = n.detail.value.repassword, c = a.data.workTypeList[a.data.selected], "" != o && 0 != o.length) {
                        e.next = 8;
                        break;
                    }
                    return wx.showToast({
                        title: "请填写用户名",
                        icon: "error",
                        duration: 1e3
                    }), e.abrupt("return");

                  case 8:
                    if (/^1\d{10}$/.test(u)) {
                        e.next = 12;
                        break;
                    }
                    return wx.showToast({
                        title: "手机号格式非法",
                        icon: "error",
                        duration: 1e3
                    }), e.abrupt("return");

                  case 12:
                    if (!(i.length < 8)) {
                        e.next = 15;
                        break;
                    }
                    return wx.showToast({
                        title: "密码至少8位",
                        icon: "error",
                        duration: 1e3
                    }), e.abrupt("return");

                  case 15:
                    if (s == i) {
                        e.next = 18;
                        break;
                    }
                    return wx.showToast({
                        title: "两次密码不一致",
                        icon: "error",
                        duration: 1e3
                    }), e.abrupt("return");

                  case 18:
                    if ("" != c && null != c) {
                        e.next = 21;
                        break;
                    }
                    return wx.showToast({
                        title: "请选择工种",
                        icon: "error",
                        duration: 1e3
                    }), e.abrupt("return");

                  case 21:
                    return l = wx.getStorageSync("userInfo"), p = l.openId, w = null, e.next = 26, r.showLoading();

                  case 26:
                    return e.next = 28, r.Http.asyncRequest("https://www.ngzyq.top/api/user/update", "POST", {
                        openId: p,
                        realName: o,
                        phoneNumber: u,
                        password: i,
                        workType: c.worktype_name
                    }, function(e) {
                        w = e;
                    });

                  case 28:
                    return e.next = 30, r.hideLoading();

                  case 30:
                    null != w && 0 == w.data.code ? (l.realName = o, l.phoneNumber = u, l.workType = c.worktype_name, 
                    wx.setStorageSync("userInfo", l), wx.showToast({
                        title: "修改成功",
                        icon: "success",
                        duration: 1e3
                    }), setTimeout(function() {
                        wx.switchTab({
                            url: "/pages/mine/mine"
                        });
                    }, 1e3)) : wx.showToast({
                        title: "修改失败",
                        icon: "error",
                        duration: 1e3
                    });

                  case 31:
                  case "end":
                    return e.stop();
                }
            }, t);
        }))();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});