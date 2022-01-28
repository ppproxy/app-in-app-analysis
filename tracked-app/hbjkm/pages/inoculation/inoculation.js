var e = getApp(), t = e.requestHb;

e.Anim.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        identity: "",
        name: "",
        severalvaccine: "",
        interval_day: ""
    },
    onLoad: function(e) {
        var n = this;
        this.setData({
            identity: e.codeNo,
            name: e.name
        }), t({
            url: "/hbjkm/ymjzxq/infoxq",
            method: "POST"
        }).then(function(e) {
            if (console.log(e), t({
                url: "/hbjkm/ymjzxq/infoxqNum",
                method: "POST",
                timeout: 2e5
            }).then(function(e) {
                var t = Date.parse(new Date()), a = 1e3 * (t /= 1e3), o = new Date(a), i = o.getFullYear() + "-" + (o.getMonth() + 1 < 10 ? "0" + (o.getMonth() + 1) : o.getMonth() + 1) + "-" + (o.getDate() < 10 ? "0" + o.getDate() : o.getDate()), c = Date.parse(new Date(e.data.lastTime.split(/\s+/)[0])), r = Date.parse(new Date(i)), s = parseInt((r - c) / 864e5);
                n.setData({
                    severalvaccine: e.data,
                    interval_day: s
                });
            }).catch(function(e) {
                console.log(e);
            }), e.data) e.data.map(function(e) {
                "1" == e.vaccinateorders && (e.vaccinateorders = "一"), "2" == e.vaccinateorders && (e.vaccinateorders = "二"), 
                "3" == e.vaccinateorders && (e.vaccinateorders = "三");
            });
            n.setData({
                inoculationList: e.data
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});