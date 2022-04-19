var t = require("../../@babel/runtime/helpers/defineProperty"), a = require("../../90C38923ACE07ADFF6A5E124FFF0A2D7.js"), e = require("../../487A5DD3ACE07ADF2E1C35D4E9A0A2D7.js"), s = require("../../81CC8A51ACE07ADFE7AAE2566711A2D7.js"), i = require("../../D9EA9166ACE07ADFBF8CF96143F0A2D7.js"), r = getApp(), n = require("../../A5F26265ACE07ADFC3940A6236C0A2D7.js"), o = "ios" === r.globalData.platform ? "98BB093010" : "98BB095010";

Page({
    data: {
        scene: r.globalData.scene,
        isShare: !1,
        statusBarHeight: r.globalData.statusBarHeight,
        headerBar: !1,
        currentIndex: 0,
        channelList: [ {
            id: encodeURIComponent("106003type=25&t=3&disable_hot=1&filter_type=realtimehot"),
            index: 0,
            name: "热搜榜"
        }, {
            id: encodeURIComponent("231648_-_3"),
            index: 1,
            name: "要闻榜"
        }, {
            id: encodeURIComponent("106003type=25&t=3&disable_hot=1&filter_type=fun"),
            index: 2,
            name: "文娱榜"
        } ],
        listData: [],
        pic: "",
        swiper_height: 0,
        isPullDown: !1,
        refresh: !1,
        refreshed: !1,
        refreshText: "",
        netWorkError: !1
    },
    jsData: {
        page: 1,
        swiper_height: 0,
        isNoData: !1,
        hotId: encodeURIComponent("106003type=25&t=3&disable_hot=1&filter_type=realtimehot"),
        bannerMaskHeight: 0,
        start_pageY: 0,
        refreshEnable: !1,
        reportIds: {
            renderId: 2001,
            loadId: 1002
        },
        share_type: "",
        page_from: "",
        hot_btn: "",
        hotListData: [],
        newsListData: [],
        funListData: [],
        cardHeightMap: {
            4: Number((89 * r.globalData.windowWidth / 750).toFixed(1)),
            6: Number((74 * r.globalData.windowWidth / 750).toFixed(1)),
            25: Number((151 * r.globalData.windowWidth / 750).toFixed(1)),
            120: Number((151 * r.globalData.windowWidth / 750).toFixed(1))
        }
    },
    onLoad: function(t) {
        this.jsData.share_type = t.is_share || "", this.jsData.page_from = t.page_from, 
        this.jsData.hot_btn = t.hot_btn, this.setData({
            is_share: 1 == this.jsData.share_type ? "app" : this.jsData.share_type
        }), i.startRecord(this.jsData.reportIds.renderId), "2" === t.current ? (this.setData({
            currentIndex: 2
        }), this.jsData.hotId = this.data.channelList[2].id, this.getFunList()) : this.getWeiboHotList();
    },
    onReady: function() {
        var t = this, a = this;
        r.onCreateIntersectionObserver(".top-transparent", ".sticky-bar", function(t) {
            a.setData({
                headerBar: t
            });
        }), r.boundingClientRect(".banner-mask", function(a) {
            t.jsData.bannerMaskHeight = a ? a.height : 0;
        }), i.report(this.jsData.reportIds.renderId);
    },
    onShow: function() {
        "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
            refresh: !1,
            refreshed: !1,
            refreshText: "",
            selected: 0
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {
        1 !== this.data.currentIndex || this.jsData.isNoData || (this.jsData.page += 1, 
        this.getNewsList());
    },
    onShareAppMessage: function(t) {
        this.setData({
            isShare: !0
        });
        var a = this;
        return setTimeout(function() {
            a.setData({
                isShare: !1
            });
        }, 1e3), {
            title: "微博热搜",
            path: "/pages/index/index"
        };
    },
    onShareTimeline: function() {
        return {
            title: "微博热搜"
        };
    },
    cardClick: function(t) {
        var a = t.detail.scheme, e = t.detail.query, i = "", r = 0 === this.data.currentIndex ? "hot" : 1 === this.data.currentIndex ? "news" : "fun";
        if (e) i = "/pages/comprehensiveSearch/index?q=" + e + "&page_from=" + r; else if (/cardlist/.test(a)) {
            i = "/pages/moreList/index?" + (a && a.split("?")[1]) + "&api_sid=was_was&no_page=1";
        } else if (/searchall/.test(a)) {
            var n = a && a.split("?")[1];
            i = "/pages/comprehensiveSearch/index?q=" + (e = s.parseSchemeByKey(n, "q")) + "&page_from=" + r;
        }
        i && wx.navigateTo({
            url: i,
            fail: function() {}
        });
    },
    switchTap: function(t) {
        var a = this;
        this.jsData.hotId = this.data.channelList[t.detail.index].id, this.setData({
            currentIndex: t.detail.index
        }, function() {
            0 === t.detail.index ? a.data.listData[0] ? a.setListDomHeight(a.jsData.hotListData) : a.getWeiboHotList() : 1 === t.detail.index ? a.data.listData[1] ? a.setListDomHeight(a.jsData.newsListData) : a.getNewsList() : a.data.listData[2] ? a.setListDomHeight(a.jsData.funListData) : a.getFunList(), 
            a.pageToScroll();
        });
    },
    getWeiboHotList: function() {
        var e = this;
        i.startRecord(this.jsData.reportIds.loadId), a.get("index", {
            api_sid: "was_was",
            containerid: this.jsData.hotId,
            from: o
        }).then(function(a) {
            var s;
            i.report(e.jsData.reportIds.loadId), r.globalData.netWorkError = !1, e.jsData.hotListData = a.data.cards && a.data.cards.length ? a.data.cards.splice(0, 2) : [], 
            e.dealDesc(e.jsData.hotListData), e.setData((t(s = {}, "listData[".concat(e.data.currentIndex, "]"), e.jsData.hotListData), 
            t(s, "netWorkError", r.globalData.netWorkError), t(s, "pic", a.data.pageInfo && a.data.pageInfo.banner_info && a.data.pageInfo.banner_info.pic_items && a.data.pageInfo.banner_info.pic_items[0] && a.data.pageInfo.banner_info.pic_items[0].pic || "/assets/icons/20200319_resou.png"), 
            s), function() {
                e.setListDomHeight(e.jsData.hotListData), e.isPullDown();
            }), n.track({
                page_type: 2e3,
                ext: {
                    name: n.logMap(2e3),
                    share_type: e.jsData.share_type,
                    page_from: e.jsData.page_from,
                    hot_btn: e.jsData.hot_btn
                }
            });
        }).catch(function(t) {
            e.catchError();
        });
    },
    getNewsList: function() {
        var e = this;
        if (this.jsData.isNoData) return !1;
        a.get("index", {
            api_sid: "was_topic",
            containerid: encodeURIComponent("231648_-_3"),
            from: o,
            page: this.jsData.page
        }).then(function(a) {
            var s;
            1 === e.jsData.page ? e.jsData.newsListData = a.data.cards && a.data.cards.length ? a.data.cards : [] : a.data.cards[0] && a.data.cards[0].card_group && Array.isArray(a.data.cards[0].card_group) && (e.jsData.newsListData[0].card_group = e.jsData.newsListData[0].card_group && e.jsData.newsListData[0].card_group.concat(a.data.cards[0].card_group), 
            e.jsData.newsListData[0].card_group.length >= 50 && (e.jsData.newsListData[0].card_group = e.jsData.newsListData[0].card_group.splice(0, 51), 
            e.jsData.isNoData = !0)), Array.isArray(e.jsData.newsListData[0].card_group) && e.jsData.newsListData[0].card_group.forEach(function(t) {
                t.pic = t.pic.replace("large", "small");
            }), r.globalData.netWorkError = !1, e.setData((t(s = {}, "listData[".concat(e.data.currentIndex, "]"), e.jsData.newsListData), 
            t(s, "netWorkError", r.globalData.netWorkError), t(s, "pic", a.data.pageInfo && a.data.pageInfo.banner_info && a.data.pageInfo.banner_info.pic_items && a.data.pageInfo.banner_info.pic_items[0] && a.data.pageInfo.banner_info.pic_items[0].pic || "/assets/icons/20200319_resou.png"), 
            s), function() {
                e.setListDomHeight(e.jsData.newsListData), e.isPullDown();
            }), n.track({
                page_type: 2001,
                page: e.jsData.page,
                ext: {
                    name: n.logMap(2001),
                    share_type: e.jsData.share_type
                }
            });
        }).catch(function(t) {
            e.catchError();
        });
    },
    getFunList: function() {
        var e = this;
        a.get("index", {
            api_sid: "was_was",
            containerid: this.jsData.hotId,
            from: o
        }).then(function(a) {
            var s;
            r.globalData.netWorkError = !1, e.jsData.funListData = a.data.cards && a.data.cards.length ? a.data.cards : [], 
            e.setData((t(s = {}, "listData[".concat(e.data.currentIndex, "]"), e.jsData.funListData), 
            t(s, "netWorkError", r.globalData.netWorkError), t(s, "pic", a.data.pageInfo && a.data.pageInfo.banner_info && a.data.pageInfo.banner_info.pic_items && a.data.pageInfo.banner_info.pic_items[0] && a.data.pageInfo.banner_info.pic_items[0].pic || "/assets/icons/20200319_resou.png"), 
            s), function() {
                e.setListDomHeight(e.jsData.funListData), e.isPullDown();
            }), n.track({
                page_type: 2002,
                ext: {
                    name: n.logMap(2002),
                    share_type: e.jsData.share_type
                }
            });
        }).catch(function(t) {
            e.catchError();
        });
    },
    catchError: function() {
        this.setData({
            refresh: !1,
            refreshed: !1,
            refreshText: "",
            netWorkError: r.globalData.netWorkError,
            pic: "/assets/icons/20200319_resou.png"
        }), this.jsData.refreshEnable = !0;
    },
    pageToScroll: function() {
        wx.pageScrollTo({
            duration: 0,
            scrollTop: 0
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
    dealDesc: function(t) {
        for (var a = 0; a < t.length; a++) if (t[a] && t[a].card_group) for (var s = 0; s < t[a].card_group.length; s++) {
            var i = t[a].card_group[s];
            if (i.desc_extr) {
                var r = i.desc_extr.toString(), n = r.split(" ")[0], o = r.split(" ")[1] || "";
                o && (o = e.emotions[o]), i.hot_number = n, i.emotion = o;
            }
            for (var h = 0, d = 0; d < (i.desc && i.desc.length); d++) /[a-zA-Z0-9%&]/.test(i.desc[d]) ? h += .5 : h += 1;
            i.number = h;
        }
    },
    setListDomHeight: function(t) {
        var a = this;
        this.jsData.swiper_height = 0, "windows" !== r.globalData.platform ? r.boundingClientRect(".list-dom", function(e) {
            e ? a.jsData.swiper_height = e.height : a.getDomHeightCommon(t), a.jsData.swiper_height += 8, 
            a.setData({
                swiper_height: a.jsData.swiper_height
            });
        }) : (this.getDomHeightCommon(t), this.jsData.swiper_height += 8, this.setData({
            swiper_height: this.jsData.swiper_height
        }));
    },
    getDomHeightCommon: function(t) {
        for (var a = 0; a < (t && t.length); a++) if (t[a] && (t[a].title && (this.jsData.swiper_height += Number((50 * r.globalData.windowWidth / 750).toFixed(1)), 
        0 !== a && (this.jsData.swiper_height += 8)), Array.isArray(t[a].card_group))) for (var e = t[a].card_group, s = 0; s < e.length; s++) this.jsData.swiper_height += this.jsData.cardHeightMap[e[s].card_type];
    },
    hotTouchStart: function(t) {
        this.jsData.start_pageY = t.changedTouches[0] && t.changedTouches[0].pageY;
    },
    hotTouchEnd: function(t) {
        var a = this;
        (t.changedTouches[0] && t.changedTouches[0].pageY) - this.jsData.start_pageY > 120 && r.boundingClientRect(".sticky-bar", function(t) {
            a.jsData.refreshEnable && (t ? t.top : 0) >= a.jsData.bannerMaskHeight && (a.jsData.refreshEnable = !1, 
            a.jsData.isPullDown = !0, a.setData({
                refresh: !0,
                refreshed: !0
            }, function() {
                a.refreshData();
            }));
        });
    },
    refreshData: function() {
        this.jsData.page = 1, 0 === this.data.currentIndex ? this.getWeiboHotList() : 1 === this.data.currentIndex ? (this.jsData.isNoData = !1, 
        this.getNewsList()) : this.getFunList();
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
    }
});