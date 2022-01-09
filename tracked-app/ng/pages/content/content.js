var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), n = require("../../@babel/runtime/helpers/asyncToGenerator"), t = require("../../utils/util.js");

Page({
    data: {
        news: ""
    },
    onLoad: function(e) {
        this.getNews(e.newsId);
    },
    getNews: function(r) {
        var o = this;
        return n(e.default.mark(function n() {
            var a;
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = o, e.next = 3, t.showLoading();

                  case 3:
                    return e.next = 5, t.Http.asyncRequest("https://www.ngzyq.top/news/findNewsById", "GET", {
                        newsId: r
                    }, function(e) {
                        a.setData({
                            news: e.data
                        });
                    });

                  case 5:
                    return e.next = 7, t.hideLoading();

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, n);
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