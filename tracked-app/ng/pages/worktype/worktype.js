var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator"), a = require("../../utils/util.js");

Page({
    data: {
        items: [],
        selected: -1
    },
    onLoad: function() {
        this.initData();
    },
    initData: function() {
        var r = this;
        return t(e.default.mark(function t() {
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, a.showLoading();

                  case 2:
                    return e.next = 4, a.Http.asyncRequest("https://www.ngzyq.top/api/worktype/getAll", "GET", {}, function(e) {
                        r.setData({
                            items: e.data
                        });
                    });

                  case 4:
                    return e.next = 6, a.hideLoading();

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, t);
        }))();
    },
    radioChange: function(e) {
        for (var t = this.data.items, a = 0, r = 0; r < t.length; ++r) t[r].checked = t[r].type == e.detail.value, 
        t[r].checked && (a = r);
        this.setData({
            items: t,
            selected: a
        });
    },
    submit: function() {
        var e = this.data.items[this.data.selected].name, t = wx.getStorageSync("userInfo");
        t.workType = e, wx.setStorageSync("userInfo", t), wx.navigateTo({
            url: "/pages/questionlist/questionlist"
        });
    }
});