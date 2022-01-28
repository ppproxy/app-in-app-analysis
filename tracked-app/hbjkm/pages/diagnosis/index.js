var e = getApp(), a = e.Anim, t = (e.request, e.utils), n = (e.dayjs, e.config), o = e.wxp;

a.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        list: [],
        bannerPath: n.cdnDomain + "/cloudsa3/wenzhen/images/banner.png"
    },
    onLoad: function() {
        this.fetchData();
    },
    fetchData: function() {
        var e = this;
        wx.showLoading({
            title: "努力加载中...",
            mask: !0
        }), o.request({
            url: n.cdnDomain + n[n.env].wenzhenPath + "?t=" + Date.now()
        }).then(function(a) {
            wx.hideLoading();
            var t = a.data.data;
            t && t.length && (t.push({
                id: "guide",
                desc: "广州市民防控新型冠状病毒肺炎健康指引",
                img: "../../images/guidehealth/icon.png",
                label: "市民防控新冠肺炎健康指引",
                path: "/pages/health-guide/index"
            }), e.setData({
                list: t
            }));
        }).catch(function(e) {
            wx.hideLoading(), wx.showToast({
                title: "当前人数较多，请稍后再试",
                icon: "none"
            }), console.error(e);
        });
    },
    onTapAccess: function(e) {
        console.log("onTapAccess", e);
        var a = this, n = e.target.dataset.item, o = n.appId, i = n.path, s = n.label;
        o ? wx.navigateToMiniProgram({
            appId: o,
            path: i,
            extraData: {
                fromTitle: "健康",
                fromAppId: "wx2ac2313767a99df9"
            },
            envVersion: "release",
            success: function(e) {
                wx.reportAnalytics("diagnosis_navigate", {
                    title: s,
                    appid: o,
                    path: i,
                    phone: a.data.userInfo.phone || "",
                    openid: wx.getStorageSync("wx-openid") || ""
                }), console.log("打开小程序成功", e);
            }
        }) : e.target.dataset.item.id ? wx.navigateTo({
            url: t.urlJoinParams(i, {
                webUrl: encodeURIComponent(i),
                title: s
            })
        }) : wx.navigateTo({
            url: t.urlJoinParams("/pages/web-view/index", {
                webUrl: encodeURIComponent(i),
                title: s
            })
        });
    }
});