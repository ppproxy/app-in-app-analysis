function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var e = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var o = e[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, i, o) {
        return i && t(e.prototype, i), o && t(e, o), e;
    };
}();

module.exports = function(i) {
    console.log("app", i);
    var o = i.Anim, n = i.request, r = i.dayjs;
    return (0, o.wedux.observe)(new (function() {
        function i() {
            t(this, i), this.initMineInfo();
        }
        return e(i, [ {
            key: "initMineInfo",
            value: function() {
                this.reportList = [], this.todoReportList = [], this.doingReportList = [], this.doneReportList = [], 
                this.checkList = [], this.todoCheckList = [], this.doingCheckList = [], this.doneCheckList = [];
            }
        }, {
            key: "filterData",
            value: function(t) {
                t.forEach(function(t) {
                    t.createTime = r(t.createTime).format("YYYY/MM/DD HH:mm");
                });
            }
        }, {
            key: "fetchAffairList",
            value: function() {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    order: "DESC",
                    pageNo: 1,
                    pageSize: 100,
                    status: 0
                }, i = e.status;
                return wx.showLoading({
                    title: "努力加载中..."
                }), n({
                    url: "/usercenter/affair/list",
                    method: "POST",
                    data: e
                }).then(function(e) {
                    wx.hideLoading(), console.log("Affair", e);
                    var o = e.pageData;
                    return t.filterData(o), 0 == +i && (t.todoAffairList = o), 1 == +i && (t.doingAffairList = o), 
                    2 == +i && (t.doneAffairList = o), o;
                }).catch(function(t) {
                    console.error(t), wx.hideLoading();
                });
            }
        }, {
            key: "fetchCheckSelfList",
            value: function() {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    clueType: 0,
                    order: "DESC",
                    pageNo: 1,
                    pageSize: 100,
                    status: 0
                }, i = e.status;
                return wx.showLoading({
                    title: "努力加载中..."
                }), n({
                    url: "/usercenter/report/getPneumoniaList",
                    method: "POST",
                    data: e
                }).then(function(e) {
                    wx.hideLoading(), console.log("getCheckSelfInfo", e);
                    var o = e.pageData;
                    return t.filterData(o), 0 == +i && (t.todoCheckList = o), 1 == +i && (t.doingCheckList = o), 
                    2 == +i && (t.doneCheckList = o), o;
                }).catch(function(t) {
                    console.error(t), wx.hideLoading();
                });
            }
        }, {
            key: "fetchReportList",
            value: function() {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    clueType: 1,
                    order: "DESC",
                    pageNo: 1,
                    pageSize: 100,
                    status: 0
                }, i = e.status;
                return wx.showLoading({
                    title: "努力加载中..."
                }), n({
                    url: "/usercenter/report/getPneumoniaList",
                    method: "POST",
                    data: e
                }).then(function(e) {
                    wx.hideLoading(), console.log("getReportList", e);
                    var o = e.pageData;
                    return t.filterData(o), 0 == +i && (t.todoReportList = o), 1 == +i && (t.doingReportList = o), 
                    2 == +i && (t.doneReportList = o), o;
                }).catch(function(t) {
                    console.error(t), wx.hideLoading();
                });
            }
        } ]), i;
    }())(), "mine");
};