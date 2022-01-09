var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../@babel/runtime/helpers/objectSpread2"), a = require("../../utils/util.js");

Page({
    data: {
        options: [ {
            department_id: "001",
            department_name: "充西中心站"
        }, {
            department_id: "002",
            department_name: "莲池中心站"
        }, {
            department_id: "003",
            department_name: "广安2中心站"
        }, {
            department_id: "004",
            department_name: "龙女寺中心站"
        }, {
            department_id: "005",
            department_name: "生产办"
        }, {
            department_id: "006",
            department_name: "QHSE办"
        }, {
            department_id: "007",
            department_name: "综合办"
        } ],
        selected: {}
    },
    change: function(e) {
        this.setData({
            selected: r({}, e.detail)
        });
    },
    close: function() {
        this.selectComponent("#select").close();
    },
    formSubmit: function(r) {
        var n = this;
        return t(e.default.mark(function t() {
            var o, i, u, s, d, l, c, p, m;
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o = r.detail.value.realName, i = r.detail.value.phoneNumber, u = n.data.selected.name, 
                    s = r.detail.value.password, d = r.detail.value.repassword, l = r.detail.value.inviteCode, 
                    "" != o && 0 != o.length) {
                        e.next = 9;
                        break;
                    }
                    return wx.showToast({
                        title: "请填写用户名",
                        icon: "error",
                        duration: 1e3
                    }), e.abrupt("return");

                  case 9:
                    if (/^1\d{10}$/.test(i)) {
                        e.next = 13;
                        break;
                    }
                    return wx.showToast({
                        title: "手机号格式非法",
                        icon: "error",
                        duration: 1e3
                    }), e.abrupt("return");

                  case 13:
                    if ("所有部门" != u && "" != u && null != u) {
                        e.next = 16;
                        break;
                    }
                    return wx.showToast({
                        title: "请选择部门",
                        icon: "error",
                        duration: 1e3
                    }), e.abrupt("return");

                  case 16:
                    if (!(s.length < 8)) {
                        e.next = 19;
                        break;
                    }
                    return wx.showToast({
                        title: "密码至少8位",
                        icon: "error",
                        duration: 1e3
                    }), e.abrupt("return");

                  case 19:
                    if (d == s) {
                        e.next = 22;
                        break;
                    }
                    return wx.showToast({
                        title: "两次密码不一致",
                        icon: "error",
                        duration: 1e3
                    }), e.abrupt("return");

                  case 22:
                    if ("" != l && 0 != l.length) {
                        e.next = 25;
                        break;
                    }
                    return wx.showToast({
                        title: "请填写邀请码",
                        icon: "error",
                        duration: 1e3
                    }), e.abrupt("return");

                  case 25:
                    return c = wx.getStorageSync("loginInfo"), e.next = 28, a.showLoading();

                  case 28:
                    return p = null, e.next = 31, a.Http.asyncWXLogin(function(e) {
                        p = e.code;
                    });

                  case 31:
                    return m = null, e.next = 34, a.Http.asyncRequest("https://www.ngzyq.top/register", "POST", {
                        code: p,
                        rawData: c.userInfo,
                        signature: c.signature,
                        encryptData: c.encryptedData,
                        iv: c.iv,
                        realName: o,
                        phoneNumber: i,
                        password: s,
                        department: u,
                        inviteCode: l
                    }, function(e) {
                        console.log(e), m = e;
                    });

                  case 34:
                    return e.next = 36, a.hideLoading();

                  case 36:
                    null != m ? 4 == m.data.code ? wx.showToast({
                        title: "邀请码错误",
                        icon: "error",
                        duration: 1e3
                    }) : 5 == m.data.code ? wx.showToast({
                        title: "微信用户已存在",
                        icon: "error",
                        duration: 1e3
                    }) : 0 == m.data.code && (wx.showToast({
                        title: "注册成功",
                        icon: "success",
                        duration: 1e3
                    }), setTimeout(function() {
                        wx.navigateTo({
                            url: "/pages/login/login"
                        });
                    }, 1e3)) : wx.showToast({
                        title: "服务器错误",
                        icon: "error",
                        duration: 1e3
                    });

                  case 37:
                  case "end":
                    return e.stop();
                }
            }, t);
        }))();
    }
});