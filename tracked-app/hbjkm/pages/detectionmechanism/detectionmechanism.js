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
            url: "/hbjkm/hsjc/info",
            method: "POST"
        }).then(function(e) {
            console.log(e), t({
                url: "/hbjkm/ymjzxq/infoxqNum",
                method: "POST",
                timeout: 2e5
            }).then(function(e) {
                var t = Date.parse(new Date()), a = 1e3 * (t /= 1e3), o = new Date(a), i = o.getFullYear() + "-" + (o.getMonth() + 1 < 10 ? "0" + (o.getMonth() + 1) : o.getMonth() + 1) + "-" + (o.getDate() < 10 ? "0" + o.getDate() : o.getDate()), s = Date.parse(new Date(e.data.lastTime.split(/\s+/)[0])), c = Date.parse(new Date(i)), u = parseInt((c - s) / 864e5);
                n.setData({
                    severalvaccine: e.data,
                    interval_day: u
                });
            }).catch(function(e) {
                console.log(e);
            }), n.setData({
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