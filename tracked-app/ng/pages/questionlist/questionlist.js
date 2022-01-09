var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../utils/util.js");

Page({
    data: {
        questionlist: []
    },
    onLoad: function(e) {
        var t = wx.getStorageSync("userInfo").workType;
        this.initData(t);
    },
    initData: function(r) {
        var a = this;
        return t(e.default.mark(function t() {
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, n.showLoading();

                  case 2:
                    return e.next = 4, n.Http.asyncRequest("https://www.ngzyq.top/api/questioninfo/getAll", "GET", {
                        workType: r
                    }, function(e) {
                        a.setData({
                            questionlist: e.data
                        });
                    });

                  case 4:
                    return e.next = 6, n.hideLoading();

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, t);
        }))();
    },
    chooseList: function(e) {
        var t = this.data.questionlist[e.currentTarget.id].name, n = null;
        n = "exercise" == wx.getStorageSync("choose") ? "/pages/single/single?question=" + t : "/pages/random/random?question=" + t, 
        wx.navigateTo({
            url: n
        });
    }
});