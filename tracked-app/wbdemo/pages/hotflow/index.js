var t = require("../../90C38923ACE07ADFF6A5E124FFF0A2D7.js"), e = require("../../81CC8A51ACE07ADFE7AAE2566711A2D7.js"), a = require("../../1964FEB6ACE07ADF7F0296B168E0A2D7.js"), o = getApp(), r = require("../../A5F26265ACE07ADFC3940A6236C0A2D7.js");

Page({
    data: {
        picWidth: o.globalData.windowWidth - 40 / o.globalData.rate,
        statusBarHeight: o.globalData.statusBarHeight,
        headerBar: !1,
        hotFlowData: [],
        refresh: !1,
        refreshed: !1,
        refreshText: "",
        videoContext: null,
        currentIndex: -1,
        netWorkError: !1
    },
    jsData: {
        page: 1,
        hotFlowData: [],
        isNoData: !1,
        bannerMaskHeight: 0,
        start_pageY: 0,
        isPullDown: !1,
        refreshEnable: !1
    },
    onLoad: function(t) {
        this.getHotFlow();
    },
    onReady: function() {
        var t = this, e = this;
        o.onCreateIntersectionObserver(".top-transparent", ".sticky-bar", function(t) {
            e.setData({
                headerBar: t
            });
        }), o.boundingClientRect(".banner-mask", function(e) {
            t.jsData.bannerMaskHeight = e ? e.height : 0;
        });
    },
    onShow: function() {
        "function" == typeof this.getTabBar && this.getTabBar().setData({
            refresh: !1,
            refreshed: !1,
            refreshText: "",
            selected: 2
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {
        this.jsData.isNoData || (this.jsData.page += 1, this.getHotFlow());
    },
    getHotFlow: function() {
        var e = this, a = "ios" === o.globalData.platform ? "98BB093010" : "98BB095010";
        t.get("index", {
            api_sid: "mi_ftr",
            sid: "t_search",
            type: 3,
            from: a,
            page: this.jsData.page
        }).then(function(t) {
            if (1 === e.jsData.page) e.jsData.hotFlowData = e.dealData(t.data.list && t.data.list.length ? t.data.list : []); else if (t.data.list && t.data.list.length) {
                var a = e.dealData(t.data.list);
                e.jsData.hotFlowData = e.jsData.hotFlowData.concat(a);
            } else e.jsData.isNoData = !0;
            o.globalData.netWorkError = !1, e.setData({
                hotFlowData: e.jsData.hotFlowData,
                netWorkError: o.globalData.netWorkError
            }, function() {
                e.isPullDown();
            }), r.track({
                page_type: 2004,
                page: e.jsData.page,
                module: r.getModule(t.data.list),
                ext: {
                    name: r.logMap(2004),
                    share_type: e.jsData.share_type
                }
            });
        }).catch(function(t) {
            e.setData({
                refresh: !1,
                refreshed: !1,
                refreshText: "",
                netWorkError: o.globalData.netWorkError
            });
        });
    },
    dealData: function(t) {
        for (var o = {
            id: 1,
            mid: 1,
            title: 1,
            user: 1,
            pic_ids: 1,
            isLongText: 1,
            longText: 1,
            text: 1,
            url_objects: 1,
            created_at: 1,
            source: 1,
            retweeted_status: 1,
            comment_summary: 1,
            reposts_count: 1,
            comments_count: 1,
            attitudes_count: 1
        }, r = [], s = 0; s < t.length; s++) t[s].actionlog && (t[s].actionlog = ""), void 0 !== t[s].mblog && function() {
            var r = t[s].mblog, i = {};
            for (var n in o) if (void 0 !== r[n]) if ("url_objects" === n && r.url_objects) {
                i.url_objects = [];
                for (var l = 0; l < r.url_objects.length; l++) {
                    var c = r.url_objects[l];
                    c.object && c.object.object && (c.object.object = {
                        stream: c.object.object.stream,
                        image: c.object.object.image,
                        author: c.object.object.author,
                        image_url: c.object.object.image_url,
                        display_name: c.object.object.display_name,
                        summary: c.object.object.summary
                    }), i.url_objects.push({
                        object: c.object,
                        url_ori: c.url_ori
                    });
                }
            } else "user" === n && r.user ? i.user = {
                mbrank: r.user.mbrank,
                name: r.user.name,
                profile_image_url: r.user.profile_image_url,
                verified: r.user.verified,
                verified_type: r.user.verified_type,
                verified_type_ext: r.user.verified_type_ext
            } : i[n] = t[s].mblog[n];
            i.created_at = e.formatTimeToDetail(new Date(i.created_at)), t[s].mblog = i;
            var u = a.parseStatus(t[s].mblog, !1, !1), h = [];
            u.cardContentList instanceof Array && u.cardContentList.forEach(function(t) {
                t.content = t.content.replace(/\n|↵/g, ""), h.push(t);
            }), t[s].parseMblogText = h;
        }(), r.push(t[s]);
        return r;
    },
    hotFlowTouchStart: function(t) {
        this.jsData.start_pageY = t.changedTouches[0] && t.changedTouches[0].pageY;
    },
    hotFlowTouchEnd: function(t) {
        var e = this;
        (t.changedTouches[0] && t.changedTouches[0].pageY) - this.jsData.start_pageY > 120 && o.boundingClientRect(".sticky-bar", function(t) {
            e.jsData.refreshEnable && (t ? t.top : 0) >= e.jsData.bannerMaskHeight && (e.jsData.refreshEnable = !1, 
            e.jsData.isPullDown = !0, e.setData({
                refresh: !0,
                refreshed: !0
            }, function() {
                e.jsData.page = 1, e.getHotFlow();
            }));
        });
    },
    refreshData: function() {
        this.jsData.page = 1, this.getHotFlow();
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
    showvideo: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            currentIndex: e
        });
    },
    videoPlay: function(t) {
        this.videoContext = wx.createVideoContext(t.target.id, this);
    },
    fullScreenChange: function(t) {
        if (this.videoContext) {
            var e = !0;
            t.detail.fullScreen ? "ios" === o.globalData.platform && this.videoContext.hideStatusBar() : (e = !1, 
            "ios" === o.globalData.platform && this.videoContext.showStatusBar(), this.videoContext.pause()), 
            this.triggerEvent("fullScreenChange", {
                ignore: e
            }, {
                bubbles: !0,
                composed: !0
            });
        }
    },
    navigateTo: function(t) {
        var a = e.getUrlParam(t.itemid, "key");
        wx.navigateTo({
            url: "/pages/components/detailWeibo/index?id=" + t.mid + "&q=#" + a + "#&page_from=hotflow",
            fail: function() {}
        });
    },
    tapContent: function(t) {
        var e = Object.keys(t.target.dataset).length ? t.target.dataset : t.currentTarget.dataset;
        if (e.item) if ("topic" === e.item.tag) {
            var a = e.item.content;
            wx.navigateTo({
                url: "/pages/comprehensiveSearch/index?q=" + a + "&page_from=hotflow",
                fail: function() {}
            });
        } else "normal" === e.item.tag && this.navigateTo(e); else this.navigateTo(e);
    }
});