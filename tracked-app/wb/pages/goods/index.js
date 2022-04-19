var t = require("../../@babel/runtime/helpers/defineProperty"), e = require("../../90C38923ACE07ADFF6A5E124FFF0A2D7.js"), a = getApp(), i = require("../../A5F26265ACE07ADFC3940A6236C0A2D7.js");

Page({
    data: {
        scene: a.globalData.scene,
        statusBarHeight: a.globalData.statusBarHeight,
        headerBar: !1,
        currentIndex: 0,
        channelList: [ {
            id: encodeURIComponent("106003_-_type:25_-_filter_type:moderngoods_-_category:master"),
            index: 0,
            name: "潮物榜"
        }, {
            id: encodeURIComponent("106003_-_ type:25_-_filter_type:moderngoods_-_category:fashion"),
            index: 1,
            name: "时尚美妆榜"
        }, {
            id: encodeURIComponent("106003_-_type:25_-_filter_type:moderngoods_-_category:digital"),
            index: 2,
            name: "数码榜"
        }, {
            id: encodeURIComponent("106003_-_type:25_-_filter_type:moderngoods_-_category:food"),
            index: 3,
            name: "美味榜"
        } ],
        swiper_height: 0,
        goodsListData: [],
        isPullDown: !1,
        refresh: !1,
        refreshed: !1,
        refreshText: "",
        netWorkError: !1,
        pic: ""
    },
    jsData: {
        goodsId: encodeURIComponent("106003_-_type:25_-_filter_type:moderngoods_-_category:master"),
        bannerMaskHeight: 0,
        start_pageY: 0,
        refreshEnable: !1,
        share_type: "",
        swiper_height: 0,
        cardHeightMap: {
            25: Number((151 * a.globalData.windowWidth / 750).toFixed(1)),
            42: Number((72 * a.globalData.windowWidth / 750).toFixed(1)),
            102: Number((362 * a.globalData.windowWidth / 750).toFixed(1))
        }
    },
    onLoad: function(t) {
        this.jsData.share_type = t.is_share || "", this.setData({
            is_share: 1 == this.jsData.share_type ? "app" : this.jsData.share_type
        }), this.getgoodsList();
    },
    onReady: function() {
        var t = this, e = this;
        a.onCreateIntersectionObserver(".top-transparent", ".sticky-bar", function(t) {
            e.setData({
                headerBar: t
            });
        }), a.boundingClientRect(".banner-mask", function(e) {
            t.jsData.bannerMaskHeight = e ? e.height : 0;
        });
    },
    onShow: function() {
        "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
            refresh: !1,
            refreshed: !1,
            refreshText: "",
            selected: 3
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(t) {
        return {
            title: "微博潮物",
            path: "/pages/goods/index"
        };
    },
    onShareTimeline: function() {
        return {
            title: "微博潮物"
        };
    },
    switchTap: function(t) {
        this.setData({
            currentIndex: t.detail.index
        }), this.jsData.goodsId = this.data.channelList[t.detail.index].id, this.data.goodsListData[t.detail.index] ? this.setGoodsDomHeight(this.data.goodsListData[t.detail.index]) : this.getgoodsList(), 
        this.pageToScroll();
    },
    getgoodsList: function() {
        var s = this, r = "ios" === a.globalData.platform ? "98BB093010" : "98BB095010";
        e.get("index", {
            api_sid: "was_was",
            containerid: this.data.channelList[this.data.currentIndex].id,
            from: r
        }).then(function(e) {
            var r, o;
            a.globalData.netWorkError = !1, Array.isArray(e.data.cards) && e.data.cards.forEach(function(t) {
                Array.isArray(t.card_group) && t.card_group.forEach(function(t) {
                    t.pics && t.pics.length && t.pics.forEach(function(t) {
                        t.url = t.url.replace("bmiddle", "small");
                    }), t.pic && (t.pic = t.pic.replace("bmiddle", "small"));
                });
            }), s.setData((t(r = {}, "goodsListData[".concat(s.data.currentIndex, "]"), e.data.cards && e.data.cards.length ? e.data.cards : []), 
            t(r, "netWorkError", a.globalData.netWorkError), t(r, "pic", e.data.pageInfo && e.data.pageInfo.banner_info && e.data.pageInfo.banner_info.pic_items && e.data.pageInfo.banner_info.pic_items[0] && e.data.pageInfo.banner_info.pic_items[0].pic || "/assets/icons/20200731_goods.png"), 
            r), function() {
                s.setGoodsDomHeight(e.data.cards), s.isPullDown();
            }), o = 0 === s.data.currentIndex ? 2005 : 1 === s.data.currentIndex ? 2006 : 2 === s.data.currentIndex ? 2007 : 2008, 
            i.track({
                page_type: o,
                ext: {
                    name: i.logMap(o),
                    share_type: s.jsData.share_type
                }
            });
        }).catch(function(t) {
            s.setData({
                refresh: !1,
                refreshed: !1,
                refreshText: "",
                netWorkError: a.globalData.netWorkError,
                pic: "/assets/icons/20200731_goods.png"
            });
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
    pageToScroll: function() {
        wx.pageScrollTo({
            duration: 0,
            scrollTop: 0
        });
    },
    setGoodsDomHeight: function(t) {
        var e = this;
        this.jsData.swiper_height = 0, a.boundingClientRect(".list-dom", function(a) {
            a ? e.jsData.swiper_height = a.height : e.getDomHeightCommon(t), e.jsData.swiper_height += 8, 
            e.setData({
                swiper_height: e.jsData.swiper_height
            });
        });
    },
    getDomHeightCommon: function(t) {
        for (var e = 0; e < (t && t.length); e++) if (t[e] && (t[e].title && (this.jsData.swiper_height += Number((50 * a.globalData.windowWidth / 750).toFixed(1))), 
        0 !== e && (this.jsData.swiper_height += 8), Array.isArray(t[e].card_group))) for (var i = t[e].card_group, s = 0; s < i.length; s++) this.jsData.swiper_height += this.jsData.cardHeightMap[i[s].card_type];
    },
    goodsTouchStart: function(t) {
        this.jsData.start_pageY = t.changedTouches[0] && t.changedTouches[0].pageY;
    },
    goodsTouchEnd: function(t) {
        var e = this;
        (t.changedTouches[0] && t.changedTouches[0].pageY) - this.jsData.start_pageY > 120 && a.boundingClientRect(".sticky-bar", function(t) {
            e.jsData.refreshEnable && (t ? t.top : 0) >= e.jsData.bannerMaskHeight && (e.jsData.refreshEnable = !1, 
            e.jsData.isPullDown = !0, e.setData({
                refresh: !0,
                refreshed: !0
            }, function() {
                e.jsData.page = 1, e.getgoodsList();
            }));
        });
    },
    refreshData: function() {
        this.jsData.page = 1, this.getgoodsList();
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