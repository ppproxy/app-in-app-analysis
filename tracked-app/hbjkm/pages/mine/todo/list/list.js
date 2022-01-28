var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = arguments[e];
        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    }
    return t;
}, e = getApp(), o = e.Anim, i = e.utils, a = e.mineStore, n = e.resetTab, r = {
    check: "我的健康自查上报",
    report: "我的疫情线索上报",
    affair: "我的待办"
};

o.Page({
    store: function(t) {
        return {
            todoReportList: t.mine.todoReportList,
            doingReportList: t.mine.doingReportList,
            doneReportList: t.mine.doneReportList,
            todoCheckList: t.mine.todoCheckList,
            doingCheckList: t.mine.doingCheckList,
            doneCheckList: t.mine.doneCheckList,
            todoAffairList: t.mine.todoAffairList,
            doingAffairList: t.mine.doingAffairList,
            doneAffairList: t.mine.doneAffairList
        };
    },
    data: {
        tabIndex: "0",
        todoType: "affair"
    },
    onLoad: function(t) {
        var e = t.todoType, o = t.index || ("affair" === e ? "0" : "1");
        r[e] && wx.setNavigationBarTitle({
            title: r[e]
        }), this.setData({
            tabIndex: o,
            todoType: e
        });
    },
    onShow: function() {
        this.fetchData();
    },
    fetchData: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.todoType, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.data.tabIndex;
        return "check" === t ? a.fetchCheckSelfList({
            clueTypes: "0,2",
            status: +e,
            order: "DESC",
            pageNo: 1,
            pageSize: 100
        }).then(function() {
            n();
        }).catch(function(t) {
            console.error(t), n();
        }) : "report" === t ? a.fetchReportList({
            clueType: 1,
            status: +e,
            order: "DESC",
            pageNo: 1,
            pageSize: 100
        }).then(function() {
            n();
        }).catch(function(t) {
            console.error(t), n();
        }) : "affair" === t ? a.fetchAffairList({
            status: +e,
            order: "DESC",
            pageNo: 1,
            pageSize: 100
        }).then(function() {
            n();
        }).catch(function(t) {
            console.error(t), n();
        }) : void 0;
    },
    handleTabTap: function(t) {
        var e = t.detail.value.key;
        this.setData({
            tabIndex: e
        }), this.fetchData(this.data.todoType, e);
    },
    handleItem: function(e) {
        var o = e.target.dataset.item;
        console.log("event", o), wx.navigateTo({
            url: i.urlJoinParams("/pages/mine/todo/detail/detail", t({}, o, {
                todoType: this.data.todoType
            }))
        });
    }
});