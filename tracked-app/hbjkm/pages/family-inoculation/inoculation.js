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
        id: "",
        severalvaccine: "",
        interval_day: ""
    },
    onLoad: function(e) {
        var a = this;
        this.setData({
            identity: e.familycodeNo,
            name: e.familyname,
            id: e.id
        }), t({
            url: "/hbjkm/family/ymjzxq/infoxq",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                id: this.data.id
            }
        }).then(function(e) {
            if (console.log(e), t({
                url: "/hbjkm/family/ymjzxq/infoxqNum",
                method: "POST",
                timeout: 2e5,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: {
                    id: a.data.id
                }
            }).then(function(e) {
                var t = Date.parse(new Date()), n = 1e3 * (t /= 1e3), o = new Date(n), i = o.getFullYear() + "-" + (o.getMonth() + 1 < 10 ? "0" + (o.getMonth() + 1) : o.getMonth() + 1) + "-" + (o.getDate() < 10 ? "0" + o.getDate() : o.getDate()), c = Date.parse(new Date(e.data.lastTime.split(/\s+/)[0])), r = Date.parse(new Date(i)), d = parseInt((r - c) / 864e5);
                a.setData({
                    severalvaccine: e.data,
                    interval_day: d
                });
            }).catch(function(e) {
                console.log(e);
            }), e.data) e.data.map(function(e) {
                "1" == e.vaccinateorders && (e.vaccinateorders = "一"), "2" == e.vaccinateorders && (e.vaccinateorders = "二"), 
                "3" == e.vaccinateorders && (e.vaccinateorders = "三");
            });
            a.setData({
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