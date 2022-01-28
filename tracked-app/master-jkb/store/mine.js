var e = require("../@babel/runtime/helpers/classCallCheck"), t = require("../@babel/runtime/helpers/createClass");

module.exports = function(i) {
    console.log("app", i);
    var o = i.Anim, n = i.request, r = i.dayjs;
    return (0, o.wedux.observe)(new (function() {
        function i() {
            e(this, i), this.initMineInfo();
        }
        return t(i, [ {
            key: "initMineInfo",
            value: function() {
                this.reportList = [], this.todoReportList = [], this.doingReportList = [], this.doneReportList = [], 
                this.checkList = [], this.todoCheckList = [], this.doingCheckList = [], this.doneCheckList = [];
            }
        }, {
            key: "filterData",
            value: function(e) {
                e.forEach(function(e) {
                    e.createTime = r(e.createTime).format("YYYY/MM/DD HH:mm");
                });
            }
        }, {
            key: "fetchAffairList",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    order: "DESC",
                    pageNo: 1,
                    pageSize: 100,
                    status: 0
                }, i = t.status;
                return wx.showLoading({
                    title: "努力加载中..."
                }), n({
                    url: "/usercenter/affair/list",
                    method: "POST",
                    data: t
                }).then(function(t) {
                    wx.hideLoading(), console.log("Affair", t);
                    var o = t.pageData;
                    return e.filterData(o), 0 == +i && (e.todoAffairList = o), 1 == +i && (e.doingAffairList = o), 
                    2 == +i && (e.doneAffairList = o), o;
                }).catch(function(e) {
                    console.error(e), wx.hideLoading();
                });
            }
        }, {
            key: "fetchCheckSelfList",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    clueType: 0,
                    order: "DESC",
                    pageNo: 1,
                    pageSize: 100,
                    status: 0
                }, i = t.status;
                return wx.showLoading({
                    title: "努力加载中..."
                }), n({
                    url: "/usercenter/report/getPneumoniaList",
                    method: "POST",
                    data: t
                }).then(function(t) {
                    wx.hideLoading(), console.log("getCheckSelfInfo", t);
                    var o = t.pageData;
                    return e.filterData(o), 0 == +i && (e.todoCheckList = o), 1 == +i && (e.doingCheckList = o), 
                    2 == +i && (e.doneCheckList = o), o;
                }).catch(function(e) {
                    console.log(e), wx.hideLoading();
                });
            }
        }, {
            key: "fetchReportList",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    clueType: 1,
                    order: "DESC",
                    pageNo: 1,
                    pageSize: 100,
                    status: 0
                }, i = t.status;
                return wx.showLoading({
                    title: "努力加载中..."
                }), n({
                    url: "/usercenter/report/getPneumoniaList",
                    method: "POST",
                    data: t
                }).then(function(t) {
                    wx.hideLoading(), console.log("getReportList", t);
                    var o = t.pageData;
                    return e.filterData(o), 0 == +i && (e.todoReportList = o), 1 == +i && (e.doingReportList = o), 
                    2 == +i && (e.doneReportList = o), o;
                }).catch(function(e) {
                    console.log(e), wx.hideLoading();
                });
            }
        } ]), i;
    }())(), "mine");
};