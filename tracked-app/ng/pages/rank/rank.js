var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), e = require("../../@babel/runtime/helpers/asyncToGenerator"), a = require("../../utils/util.js");

Page({
    data: {
        rankList: [],
        totalList: [],
        uhide: 1
    },
    onLoad: function() {
        this.getRankList();
    },
    getRankList: function() {
        var r = this;
        return e(t.default.mark(function e() {
            var n, i;
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return n = wx.getStorageSync("userInfo").department, i = null, t.next = 4, a.showLoading();

                  case 4:
                    return t.next = 6, a.Http.asyncRequest("https://www.ngzyq.top/api/user/rank/", "GET", {
                        department: n
                    }, function(t) {
                        i = t;
                    });

                  case 6:
                    return t.next = 8, a.hideLoading();

                  case 8:
                    0 == i.data.code && r.setData({
                        rankList: i.data.rankList,
                        totalList: i.data.totalList
                    });

                  case 9:
                  case "end":
                    return t.stop();
                }
            }, e);
        }))();
    },
    tigger: function(t) {
        var e = this.data.uhide, a = t.currentTarget.dataset.num;
        e == a ? this.setData({
            uhide: 0
        }) : this.setData({
            uhide: a
        });
    }
});