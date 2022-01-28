var a = getApp(), t = a.Anim, e = a.utils, i = a.config, r = a.Event, s = require("../../../services/league"), n = i.domain + "/kylm";

t.Page({
    store: function(a) {
        return {
            isAuth: a.user.userInfo.isAuth,
            userInfo: a.user.userInfo
        };
    },
    data: {
        tabIndex: "0",
        todoType: "affair",
        tabs: [],
        list: [],
        leagueList: []
    },
    onLoad: function(a) {
        var t = this;
        s.getProgramList().then(function(a) {
            for (var e in a.data) for (var i in a.data[e].miniProgramm) a.data[e].miniProgramm[i].iconUrl = n + a.data[e].miniProgramm[i].iconUrl;
            t.setData({
                leagueList: a.data,
                tabs: a.tabs
            }, function() {
                r.dispatch("g-tabs__init");
            }), t.getLeaguesData(0);
        });
    },
    getLeaguesData: function(a) {
        var t = this.data.leagueList;
        if (t) {
            var e = 0;
            for (var i in t) t[i].typeName == this.data.tabs[a] && (e = i);
            this.setData({
                list: t[e].miniProgramm
            }, function() {
                r.dispatch("g-tabs__resetStyle");
            });
        }
    },
    handleTabTap: function(a) {
        var t = a.detail.value.key;
        this.setData({
            tabIndex: t
        }), this.getLeaguesData(parseInt(t));
    },
    onTapAccess: function(a) {
        var t = a.target.dataset.id;
        wx.navigateTo({
            url: e.urlJoinParams(a.currentTarget.dataset.url, {
                id: t
            })
        });
    }
});