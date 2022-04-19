var t = require("../../@babel/runtime/helpers/defineProperty"), e = require("../../90C38923ACE07ADFF6A5E124FFF0A2D7.js"), a = require("../../487A5DD3ACE07ADF2E1C35D4E9A0A2D7.js"), i = require("../../81CC8A51ACE07ADFE7AAE2566711A2D7.js"), r = require("../../D9EA9166ACE07ADFBF8CF96143F0A2D7.js"), s = getApp(), o = require("../../A5F26265ACE07ADFC3940A6236C0A2D7.js"), n = "ios" === s.globalData.platform ? "98BB093010" : "98BB095010";

Page({
    data: {
        scene: s.globalData.scene,
        isShare: !1,
        statusBarHeight: s.globalData.statusBarHeight,
        headerBar: !1,
        currentIndex: 0,
        channelList: [ {
            id: encodeURIComponent("106003type=25&filter_type=hotday&category=all"),
            name: "综合",
            category: "all"
        }, {
            id: encodeURIComponent("106003type=25&filter_type=hotday&category=social"),
            name: "社会",
            category: "social"
        }, {
            id: encodeURIComponent("106003type=25&filter_type=hotday&category=entertainment"),
            name: "娱乐",
            category: "entertainment"
        }, {
            id: encodeURIComponent("106003type=25&filter_type=hotday&category=fashion"),
            name: "时尚",
            category: "fashion"
        }, {
            id: encodeURIComponent("106003type=25&filter_type=hotday&category=technology"),
            name: "科技",
            category: "technology"
        }, {
            id: encodeURIComponent("106003type=25&filter_type=hotday&category=economic"),
            name: "财经",
            category: "economic"
        }, {
            id: encodeURIComponent("106003type=25&filter_type=hotday&category=sports"),
            name: "体育",
            category: "sports"
        }, {
            id: encodeURIComponent("106003type=25&filter_type=hotday&category=military"),
            name: "军事",
            category: "military"
        } ],
        listData: [],
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
        hotId: encodeURIComponent("106003type=25&filter_type=hotday&category=all"),
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
            4: Number((89 * s.globalData.windowWidth / 750).toFixed(1)),
            6: Number((74 * s.globalData.windowWidth / 750).toFixed(1)),
            25: Number((151 * s.globalData.windowWidth / 750).toFixed(1)),
            120: Number((151 * s.globalData.windowWidth / 750).toFixed(1))
        },
        pic: ""
    },
    onLoad: function(t) {
        this.jsData.share_type = t.is_share || "", this.jsData.page_from = t.page_from, 
        this.jsData.hot_btn = t.hot_btn, this.setData({
            is_share: 1 == this.jsData.share_type ? "app" : this.jsData.share_type
        }), r.startRecord(this.jsData.reportIds.renderId), this.getWeiboHotList();
    },
    onReady: function() {
        var t = this, e = this;
        s.onCreateIntersectionObserver(".top-transparent", ".sticky-bar", function(t) {
            e.setData({
                headerBar: t
            });
        }), s.boundingClientRect(".banner-mask", function(e) {
            t.jsData.bannerMaskHeight = e ? e.height : 0;
        }), r.report(this.jsData.reportIds.renderId);
    },
    onShow: function() {
        "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
            refresh: !1,
            refreshed: !1,
            refreshText: "",
            selected: null
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(t) {
        this.setData({
            isShare: !0
        });
        var e = this;
        return setTimeout(function() {
            e.setData({
                isShare: !1
            });
        }, 1e3), {
            title: "今日热搜",
            path: "/pages/today/index"
        };
    },
    onShareTimeline: function() {
        return {
            title: "今日热搜"
        };
    },
    cardClick: function(t) {
        var e = t.detail.scheme, a = t.detail.query, r = "", s = this.data.channelList[this.data.currentIndex].name;
        if (a) r = "/pages/comprehensiveSearch/index?q=" + a + "&page_from=" + s; else if (/cardlist/.test(e)) {
            r = "/pages/moreList/index?" + (e && e.split("?")[1]) + "&api_sid=was_was&no_page=1";
        } else if (/searchall/.test(e)) {
            var o = e && e.split("?")[1];
            r = "/pages/comprehensiveSearch/index?q=" + (a = i.parseSchemeByKey(o, "q")) + "&page_from=" + s;
        }
        r && wx.navigateTo({
            url: r,
            fail: function() {}
        });
    },
    switchTap: function(t) {
        var e = this;
        this.jsData.hotId = this.data.channelList[t.detail.index].id, this.setData({
            currentIndex: t.detail.index
        }, function() {
            e.data.listData[e.data.currentIndex] ? e.setListDomHeight(e.jsData.hotListData) : e.getWeiboHotList(), 
            e.pageToScroll();
        });
    },
    getWeiboHotList: function() {
        var a = this;
        r.startRecord(this.jsData.reportIds.loadId), e.get("index", {
            api_sid: "was_was",
            containerid: this.jsData.hotId,
            from: n
        }).then(function(e) {
            var i;
            r.report(a.jsData.reportIds.loadId), s.globalData.netWorkError = !1, a.jsData.hotListData = e.data.cards && e.data.cards.length ? e.data.cards.splice(0, 2) : [], 
            a.dealDesc(a.jsData.hotListData), a.setData((t(i = {}, "listData[".concat(a.data.currentIndex, "]"), a.jsData.hotListData), 
            t(i, "netWorkError", s.globalData.netWorkError), t(i, "pic", e.data.pageInfo && e.data.pageInfo.banner_info && e.data.pageInfo.banner_info.pic_items && e.data.pageInfo.banner_info.pic_items[0] && e.data.pageInfo.banner_info.pic_items[0].pic || "/assets/icons/20210531_jinriresou.png"), 
            i), function() {
                a.setListDomHeight(a.jsData.hotListData), a.isPullDown();
            }), o.track({
                page_type: 2e3,
                ext: {
                    name: o.logMap(2e3),
                    share_type: a.jsData.share_type,
                    page_from: a.jsData.page_from,
                    hot_btn: a.jsData.hot_btn
                }
            });
        }).catch(function(t) {
            a.catchError();
        });
    },
    catchError: function() {
        this.setData({
            refresh: !1,
            refreshed: !1,
            refreshText: "",
            netWorkError: s.globalData.netWorkError,
            pic: "/assets/icons/20210531_jinriresou.png"
        }), this.jsData.refreshEnable = !0;
    },
    pageToScroll: function() {
        wx.pageScrollTo({
            duration: 0,
            scrollTop: 0
        });
    },
    beforeSwitchTab: function(t) {
        var e = {
            index: t.detail.current,
            id: this.data.channelList[t.detail.current].id
        };
        "touch" === t.detail.source && this.switchTap({
            detail: {
                index: e.index
            }
        });
    },
    dealDesc: function(t) {
        for (var e = 0; e < t.length; e++) if (t[e] && t[e].card_group) for (var i = 0; i < t[e].card_group.length; i++) {
            var r = t[e].card_group[i];
            if (r.desc_extr) {
                var s = r.desc_extr.toString(), o = s.split(" ")[0], n = s.split(" ")[1] || "";
                n && (n = a.emotions[n]), r.hot_number = o, r.emotion = n;
            }
            for (var h = 0, c = 0; c < (r.desc && r.desc.length); c++) /[a-zA-Z0-9%&]/.test(r.desc[c]) ? h += .5 : h += 1;
            r.number = h;
        }
    },
    setListDomHeight: function(t) {
        var e = this;
        this.jsData.swiper_height = 0, "windows" !== s.globalData.platform ? s.boundingClientRect(".list-dom", function(a) {
            a ? e.jsData.swiper_height = a.height : e.getDomHeightCommon(t), e.jsData.swiper_height += 8, 
            e.setData({
                swiper_height: e.jsData.swiper_height
            });
        }) : (this.getDomHeightCommon(t), this.jsData.swiper_height += 8, this.setData({
            swiper_height: this.jsData.swiper_height
        }));
    },
    getDomHeightCommon: function(t) {
        for (var e = 0; e < (t && t.length); e++) if (t[e] && (t[e].title && (this.jsData.swiper_height += Number((50 * s.globalData.windowWidth / 750).toFixed(1)), 
        0 !== e && (this.jsData.swiper_height += 8)), Array.isArray(t[e].card_group))) for (var a = t[e].card_group, i = 0; i < a.length; i++) this.jsData.swiper_height += this.jsData.cardHeightMap[a[i].card_type];
    },
    hotTouchStart: function(t) {
        this.jsData.start_pageY = t.changedTouches[0] && t.changedTouches[0].pageY;
    },
    hotTouchEnd: function(t) {
        var e = this;
        (t.changedTouches[0] && t.changedTouches[0].pageY) - this.jsData.start_pageY > 120 && s.boundingClientRect(".sticky-bar", function(t) {
            e.jsData.refreshEnable && (t ? t.top : 0) >= e.jsData.bannerMaskHeight && (e.jsData.refreshEnable = !1, 
            e.jsData.isPullDown = !0, e.setData({
                refresh: !0,
                refreshed: !0
            }, function() {
                e.refreshData();
            }));
        });
    },
    refreshData: function() {
        this.jsData.page = 1, this.getWeiboHotList();
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