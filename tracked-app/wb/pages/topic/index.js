var t = require("../../@babel/runtime/helpers/defineProperty"), a = require("../../90C38923ACE07ADFF6A5E124FFF0A2D7.js"), e = getApp(), i = require("../../A5F26265ACE07ADFC3940A6236C0A2D7.js");

Page({
    data: {
        scene: e.globalData.scene,
        statusBarHeight: e.globalData.statusBarHeight,
        headerBar: !1,
        topicListData: [],
        isPullDown: !1,
        refresh: !1,
        refreshed: !1,
        refreshText: "",
        netWorkError: !1,
        pic: "",
        swiper_height: 0,
        currentIndex: 0,
        channelList: [ {
            id: encodeURIComponent("231648_-_4"),
            index: 0,
            name: "最新"
        }, {
            id: encodeURIComponent("231648_-_17_-_unit_daily"),
            index: 1,
            name: "最热"
        } ]
    },
    jsData: {
        page: 1,
        pageHot: 1,
        topicData: [],
        topicDataHotest: [],
        isNoData: !1,
        isNoDataHot: !1,
        bannerMaskHeight: 0,
        start_pageY: 0,
        refreshEnable: !1,
        share_type: "",
        cardHeightMap: {
            102: Number((120 * e.globalData.windowWidth / 750).toFixed(1))
        }
    },
    onLoad: function(t) {
        var a = this;
        this.jsData.share_type = t.is_share || "", this.setData({
            is_share: 1 == this.jsData.share_type ? "app" : this.jsData.share_type
        }), "1" == t.current ? this.setData({
            currentIndex: 1
        }, function() {
            a.getTopicList();
        }) : this.setData({
            currentIndex: 0
        }, function() {
            a.getTopicList();
        });
    },
    onReady: function() {
        var t = this, a = this;
        e.onCreateIntersectionObserver(".top-transparent", ".sticky-bar", function(t) {
            a.setData({
                headerBar: t
            });
        }), e.boundingClientRect(".banner-mask", function(a) {
            t.jsData.bannerMaskHeight = a ? a.height : 0;
        });
    },
    onShow: function() {
        "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
            refresh: !1,
            refreshed: !1,
            refreshText: "",
            selected: 1
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        0 === this.data.currentIndex ? this.jsData.isNoData || (this.jsData.page += 1, this.getTopicList()) : this.jsData.isNoDataHot || (this.jsData.pageHot += 1, 
        this.getTopicList());
    },
    onShareAppMessage: function(t) {
        return {
            title: "微博热议",
            path: "/pages/topic/index"
        };
    },
    onShareTimeline: function() {
        return {
            title: "微博热议"
        };
    },
    getTopicList: function() {
        var s = this, r = "ios" === e.globalData.platform ? "10BA193060" : "10BA195060", n = this.data.channelList[this.data.currentIndex].id;
        a.get("index", {
            api_sid: "was_topic",
            containerid: n,
            from: r,
            page: 0 === this.data.currentIndex ? this.jsData.page : this.jsData.pageHot
        }).then(function(a) {
            var r;
            0 === s.data.currentIndex ? s.jsData.topicData = s.cocatList(s.jsData.topicData, a) : s.jsData.topicDataHotest = s.cocatList(s.jsData.topicDataHotest, a), 
            s.dealTitleFlagPic(), s.dealDesc(), e.globalData.netWorkError = !1;
            var n = 0 === s.data.currentIndex ? s.jsData.topicData : s.jsData.topicDataHotest;
            s.setData((t(r = {}, "topicListData[".concat(s.data.currentIndex, "]"), n), t(r, "netWorkError", e.globalData.netWorkError), 
            t(r, "pic", a.data.pageInfo && a.data.pageInfo.banner_info && a.data.pageInfo.banner_info.pic_items && a.data.pageInfo.banner_info.pic_items[0] && a.data.pageInfo.banner_info.pic_items[0].pic || "/assets/icons/20200723_DISCUSS.png"), 
            r), function() {
                s.setListDomHeight(n), s.isPullDown();
            }), i.track({
                page_type: 2003,
                page: s.jsData.page,
                ext: {
                    name: i.logMap(2003),
                    share_type: s.jsData.share_type
                }
            });
        }).catch(function(t) {
            s.setData({
                refresh: !1,
                refreshed: !1,
                refreshText: "",
                netWorkError: e.globalData.netWorkError,
                pic: "/assets/icons/20200723_DISCUSS.png"
            });
        });
    },
    dealDesc: function() {
        Array.isArray(this.getLatestOrHot().card_group) && this.getLatestOrHot().card_group.forEach(function(t) {
            t.desc && !t.desc_arr && (t.desc_arr = t.desc.split(" "));
        });
    },
    dealTitleFlagPic: function() {
        Array.isArray(this.getLatestOrHot().card_group) && this.getLatestOrHot().card_group.forEach(function(t) {
            if (t.title_flag_pic && !/default/.test(t.title_flag_pic)) {
                var a = t.title_flag_pic.replace(/\.png|jpg|jepg/, "");
                t.title_flag_pic = a + "_default.png";
            }
            t.pic && (t.pic = t.pic.replace("large", "small"));
        });
    },
    getLatestOrHot: function() {
        return 0 === this.data.currentIndex ? this.jsData.topicData[0] : this.jsData.topicDataHotest[0];
    },
    cardClick: function(t) {
        var a = "";
        try {
            a = t.detail.scheme.split("?")[1].split("=")[1], wx.navigateTo({
                url: "/pages/typeTopic/index?containerid=" + a,
                fail: function() {}
            });
        } catch (t) {}
    },
    topicTouchStart: function(t) {
        this.jsData.start_pageY = t.changedTouches[0] && t.changedTouches[0].pageY;
    },
    topicTouchEnd: function(t) {
        var a = this;
        (t.changedTouches[0] && t.changedTouches[0].pageY) - this.jsData.start_pageY > 120 && e.boundingClientRect(".sticky-bar", function(t) {
            a.jsData.refreshEnable && (t ? t.top : 0) >= a.jsData.bannerMaskHeight && (a.jsData.refreshEnable = !1, 
            a.jsData.isPullDown = !0, a.setData({
                refresh: !0,
                refreshed: !0
            }, function() {
                a.refreshData();
            }));
        });
    },
    beforeSwitchTab: function(t) {
        var a = {
            index: t.detail.current,
            id: this.data.channelList[t.detail.current].id
        };
        "touch" === t.detail.source && this.switchTap({
            detail: {
                index: a.index
            }
        });
    },
    switchTap: function(t) {
        var a = this;
        this.setData({
            currentIndex: t.detail.index
        }, function() {
            0 === t.detail.index ? a.data.topicListData[0] ? a.setListDomHeight(a.jsData.topicData) : a.getTopicList() : a.data.topicListData[1] ? a.setListDomHeight(a.jsData.topicDataHotest) : a.getTopicList(), 
            a.pageToScroll();
        });
    },
    pageToScroll: function() {
        wx.pageScrollTo({
            duration: 0,
            scrollTop: 0
        });
    },
    refreshData: function() {
        0 === this.data.currentIndex ? this.jsData.page = 1 : this.jsData.pageHot = 1, this.getTopicList();
    },
    isPullDown: function() {
        var t = this;
        this.jsData.refreshEnable = !0, this.jsData.isPullDown && (this.jsData.isPullDown = !1, 
        this.setData({
            refresh: !1,
            refreshed: !0,
            refreshText: "刷新成功"
        }, setTimeout(function() {
            t.setData({
                refreshed: !1
            });
        }, 1e3)));
    },
    setListDomHeight: function(t) {
        var a = this;
        this.jsData.swiper_height = 0, "windows" !== e.globalData.platform ? e.boundingClientRect(".list-dom", function(e) {
            e ? a.jsData.swiper_height = e.height : a.getDomHeightCommon(t), a.jsData.swiper_height += 8, 
            a.setData({
                swiper_height: a.jsData.swiper_height
            });
        }) : (this.getDomHeightCommon(t), this.jsData.swiper_height += 8, this.setData({
            swiper_height: this.jsData.swiper_height
        }));
    },
    getDomHeightCommon: function(t) {
        for (var a = 0; a < (t && t.length); a++) if (t[a] && (t[a].title && (this.jsData.swiper_height += Number((50 * e.globalData.windowWidth / 750).toFixed(1)), 
        0 !== a && (this.jsData.swiper_height += 8)), Array.isArray(t[a].card_group))) for (var i = t[a].card_group, s = 0; s < i.length; s++) this.jsData.swiper_height += this.jsData.cardHeightMap[i[s].card_type];
    },
    cocatList: function(t, a) {
        var e = 0 === this.data.currentIndex ? this.jsData.page : this.jsData.pageHot;
        if (1 === e) t = a.data.cards && a.data.cards.length ? a.data.cards : []; else if (0 === this.data.currentIndex && 2 === e) {
            var i = a.data.cards.find(function(t) {
                return 11 === t.card_type;
            });
            i && i.card_group && Array.isArray(i.card_group) && (t[0].card_group = t[0].card_group && t[0].card_group.concat(i.card_group));
        } else a.data.cards[0] && a.data.cards[0].card_group && Array.isArray(a.data.cards[0].card_group) && (t[0].card_group = t[0].card_group && t[0].card_group.concat(a.data.cards[0].card_group));
        return t[0].card_group.length >= 50 ? (t[0].card_group = t[0].card_group.splice(0, 50), 
        0 === this.data.currentIndex ? this.jsData.isNoData = !0 : this.jsData.isNoDataHot = !0) : 0 === this.data.currentIndex ? this.jsData.isNoData = !1 : this.jsData.isNoDataHot = !1, 
        t;
    }
});