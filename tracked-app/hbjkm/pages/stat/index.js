function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function t(e, t) {
    return (e + Array(t).join("0")).slice(0, t);
}

var n = getApp(), i = n.Anim, a = n.request, o = n.dayjs, r = (n.wxp, n.config), s = n.userStore, u = n.configStore, l = (n.Event, 
require("../../services/region")), g = require("../../services/health-code.js"), c = r.regionLevel.length, d = (require("../../services/report"), 
!1), h = {
    title: r.regionLevel[0].title,
    data: [ {
        name: r.cityName,
        regionCode: t(r.regionCode, 12)
    } ]
};

i.Page({
    store: function(e) {
        return {
            isLeader: e.user.userInfo.isLeader,
            isAuth: e.user.userInfo.isAuth,
            userInfo: e.user.userInfo,
            wllConfig: e.config.wllConfig
        };
    },
    computed: {},
    data: {
        pdfUrl: "https://imgcache.gzonline.gov.cn/doc/Index_Instructions.pdf",
        imgSrc: "/images/report/caozuozhiyin.png",
        fileName: "Index Instructions.pdf",
        cityName: r.cityName,
        isShowBg: !0,
        visible: !1,
        value: r.cityName,
        regionCode: t(r.regionCode, 12),
        regionRange: [ h ],
        residentCount: 0,
        communistCount: 0,
        floatingCount: 0,
        endTime: "",
        todayCount: 0,
        confirm: 0,
        suspect: 0,
        cure: 0,
        dead: 0,
        lineVisible: !1,
        singleLine: {
            xAxis: {
                data: []
            },
            series: [ {
                name: "确诊人数",
                data: [],
                label: {
                    normal: {
                        show: !0
                    }
                }
            } ]
        }
    },
    handleRegionChange: function(e) {
        var n = e.detail.value;
        if (console.log("region+++++++++", n), n && n.length > 0) {
            var i = n[n.length - 1].regionCode;
            this.setData({
                regionValue: n,
                value: n[n.length - 1].regionName || n[n.length - 1].name,
                regionCode: i
            }), this.getAffairStat(t(i, 12));
        }
    },
    handleRegionColumnChange: function(e) {
        var t = e.detail, n = t.item, i = t.index;
        i === c - 1 ? this.handleRegionClose() : this.getRegionData(n, i + 1);
    },
    handleOpenRegion: function() {
        this.setData({
            visible: !0,
            regionRange: this.data.regionRange.slice(0, 1)
        });
    },
    handleRegionClose: function(e) {
        this.setData({
            visible: !1
        });
    },
    onShareAppMessage: function() {},
    getChildrenRegionData: function() {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        wx.showLoading(), l.getRegionData(t.regionCode, t.regionList).then(function(t) {
            var i = e.data.regionRange.slice(0, n);
            i[n] = {
                title: r.regionLevel[n].title,
                data: t.map(function(e) {
                    return {
                        name: e.regionName,
                        value: {
                            regionName: e.regionName,
                            regionCode: e.regionCode
                        },
                        regionList: e.regionList
                    };
                })
            }, e.setData({
                regionRange: i
            }, function() {
                return wx.hideLoading();
            });
        }).catch(function(e) {
            return wx.hideLoading();
        });
    },
    getAffairStat: function(t) {
        wx.showLoading();
        var n = this;
        d || (d = !0, a({
            url: "/usercenter/affairStat/detail",
            method: "GET",
            data: {
                regionCode: t
            }
        }).then(function(t) {
            var i;
            wx.hideLoading(), d = !1;
            var a = t.itemList, r = a && a.map(function(e) {
                return e.confirmCaseNum;
            }), s = a && a.map(function(e) {
                return o(e.statTime).format("YYYY/MM/DD");
            }), u = t.statTime ? o(t.statTime).format("YYYY/MM/DD") : o(new Date().getTime()).format("YYYY/MM/DD");
            n.setData((i = {
                residentCount: t.peopleNum || 0,
                communistCount: t.partyNum || 0,
                floatingCount: t.flowNum || 0,
                endTime: u,
                todayCount: t.newCaseNum || 0,
                confirm: t.confirmCaseNum || 0,
                suspect: t.suspectedCaseNum || 0,
                cure: t.cureCaseNum || 0,
                dead: t.outCaseNum || 0,
                lineVisible: a && a.length
            }, e(i, "singleLine.xAxis.data", s || []), e(i, "singleLine.series[0].data", r || []), 
            i));
        }));
    },
    watch: {
        isLeader: function(e) {
            e && !this.data.lineVisible && this.getAffairStat(this.data.regionCode);
        }
    },
    onLoad: function(e) {
        var t = this;
        Object.keys(this.data.wllConfig).length > 0 ? this.openTipsModal(this.data.wllConfig) : u.fetchWllConfig().then(function(e) {
            e && e.home_notice && e.home_notice.is_open && t.openTipsModal(e);
        });
    },
    onPageScroll: function(e) {
        var t = parseInt(e.scrollTop) < 80;
        this.setData({
            isShowBg: t
        });
    },
    openTipsModal: function(e) {
        var t = e.home_notice || this.data.wllConfig.home_notice;
        wx.showModal({
            showCancel: !1,
            confirmText: "知道了",
            title: t.title || "重要通知",
            content: t.text
        });
    },
    onTapAccess: function(e) {
        s.checkAuth() && (e.currentTarget.dataset.real ? g.realnameUser(this.data.userInfo.uid).then(function(t) {
            0 == t.isAut ? wx.showModal({
                title: "未实名",
                content: "是否需要实名认证？",
                confirmColor: "#1890ff",
                success: function(t) {
                    t.cancel || wx.navigateTo({
                        url: "/packages/health-code/pages/realname-submit/index?path=" + e.currentTarget.dataset.url
                    });
                }
            }) : wx.navigateTo({
                url: e.currentTarget.dataset.url
            });
        }) : wx.navigateTo({
            url: e.currentTarget.dataset.url
        }));
    }
});