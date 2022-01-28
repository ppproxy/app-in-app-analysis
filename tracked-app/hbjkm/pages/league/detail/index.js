var t = getApp(), e = t.Anim, i = t.config, s = (t.request, t.utils), a = require("../../../services/league"), r = i.domain + "/kylm";

e.Page({
    store: function(t) {
        return {
            isAuth: t.user.userInfo.isAuth,
            userInfo: t.user.userInfo
        };
    },
    data: {
        model: null,
        status: 0
    },
    onLoad: function(t) {
        t.id && this.fetchData(t.id);
    },
    fetchData: function(t) {
        var e = this;
        a.getProgramDetail(t).then(function(t) {
            console.log(t), t.iconUrl = r + t.iconUrl, t.qrUrl = r + t.qrUrl;
            var i = [];
            t.imgList && (i = t.imgList.split(","));
            for (var s in i) i[s] = r + i[s];
            t.imgList = i, t.descList = JSON.parse(t.descList.replace(/\\\\n/g, "@##@"));
            for (var a in t.descList) t.descList[a].desc = t.descList[a].desc.replace(/@##@/g, "\n");
            e.setData({
                model: t,
                status: t.applied
            });
        });
    },
    handleTrialTap: function() {
        var t = {};
        t = {
            id: this.data.model.id,
            status: this.data.status
        }, wx.navigateTo({
            url: s.urlJoinParams("/pages/league/form/index", t)
        });
    },
    previewImg: function(t) {
        wx.previewImage({
            current: this.data.model.imgList[t.currentTarget.dataset.ind],
            urls: this.data.model.imgList
        });
    }
});