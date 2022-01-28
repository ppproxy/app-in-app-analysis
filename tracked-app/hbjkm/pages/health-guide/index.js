var e = getApp(), t = e.Anim, a = (e.request, e.utils, e.dayjs, e.config);

e.wxp;

t.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        list: [ {
            id: "00",
            desc: "",
            img: "",
            label: "新型冠状病毒传播途径与预防导图",
            path: "/pages/health-guide/index",
            total: 1,
            chapterNumber: 9
        }, {
            id: "01",
            desc: "",
            img: "",
            label: "密切接触者居家隔离指引",
            path: "/pages/health-guide/index",
            total: 1,
            chapterNumber: 9
        }, {
            id: "02",
            desc: "",
            img: "",
            label: "密切接触者集中医学观察指引",
            path: "/pages/health-guide/index",
            total: 1,
            chapterNumber: 9
        }, {
            id: "03",
            desc: "",
            img: "",
            label: "市民新冠肺炎预防控制指引",
            path: "/pages/health-guide/index",
            total: 1,
            chapterNumber: 9
        }, {
            id: "04",
            desc: "",
            img: "",
            label: "口罩、纸巾使用后的废弃处理指引",
            path: "/pages/health-guide/index",
            total: 1,
            chapterNumber: 9
        }, {
            id: "05",
            desc: "",
            img: "",
            label: "新冠肺炎防治营养膳食指引",
            path: "/pages/health-guide/index",
            total: 1,
            chapterNumber: 9
        }, {
            id: "06",
            desc: "",
            img: "",
            label: "公众心理健康指引",
            path: "/pages/health-guide/index",
            total: 1,
            chapterNumber: 9
        }, {
            id: "07",
            desc: "",
            img: "",
            label: "流行期间公众就医指引",
            path: "/pages/health-guide/index",
            total: 1,
            chapterNumber: 9
        }, {
            id: "08",
            desc: "",
            img: "",
            label: "市民发热就医指引",
            path: "/pages/health-guide/index",
            total: 1,
            chapterNumber: 9
        } ],
        bannerPath: a.cdnDomain + "/cos/HealthGuide/banner.png"
    },
    onLoad: function() {
        this.setStorage("healthData", this.data.list).catch(function(e) {
            console.error(e);
        });
    },
    onTapAccess: function(e) {
        console.log("onTapAccess", e);
        var t = e.target.dataset.item.id, a = e.target.dataset.item.label, i = e.target.dataset.item.total;
        wx.navigateTo({
            url: "/pages/health-guide-detail/index?id=" + t + "&label=" + a + "&total=" + i
        });
    },
    setStorage: function(e, t) {
        return new Promise(function(a, i) {
            wx.setStorage({
                key: e,
                data: t,
                success: function(e) {
                    a(e);
                },
                fail: function(e) {
                    i(e);
                }
            });
        });
    },
    getStorage: function(e) {
        return new Promise(function(t, a) {
            wx.getStorage({
                key: e,
                success: function(e) {
                    t(e.data);
                },
                fail: function(e) {
                    a(e);
                }
            });
        });
    }
});