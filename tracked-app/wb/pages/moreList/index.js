var t = require("../../@babel/runtime/helpers/defineProperty"), a = require("../../@babel/runtime/helpers/toConsumableArray"), e = require("../../90C38923ACE07ADFF6A5E124FFF0A2D7.js"), r = require("../../81CC8A51ACE07ADFE7AAE2566711A2D7.js"), i = require("../../1964FEB6ACE07ADF7F0296B168E0A2D7.js"), s = require("../../A5F26265ACE07ADFC3940A6236C0A2D7.js"), o = getApp();

Page({
    data: {
        statusBarHeight: o.globalData.statusBarHeight,
        query: "",
        cardList: {},
        netWorkError: !1,
        noData: !1
    },
    jsData: {
        page: 1,
        count: 10
    },
    onLoad: function(t) {
        for (var a in t) this.jsData[a] = t[a];
        this.jsData.title || (this.jsData.extparam && this.jsData.extparam.indexOf("title") > -1 ? this.jsData.title = r.parseSchemeByKey(this.jsData.extparam, "title") : this.jsData.containerid && (this.jsData.title = r.parseSchemeByKey(this.jsData.containerid, "q"))), 
        this.jsData.page_from = "search", this.jsData.api_sid && "was_was" === this.jsData.api_sid && (this.jsData.title = "文娱榜"), 
        this.setData({
            query: decodeURIComponent(t.title || this.jsData.title) || ""
        }), this.getMoreList();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.jsData.page += 1, this.getMoreList();
    },
    showAddGuide: function(t) {
        this.setData({
            showGuide: t.detail.show
        });
    },
    cardClick: function(t) {
        var a = t.detail.query;
        a && wx.navigateTo({
            url: "/pages/comprehensiveSearch/index?q=" + a + "&page_from=fun",
            fail: function() {}
        });
    },
    getMoreList: function() {
        var r = this;
        this.jsData.noData || e.get("index", {
            api_sid: this.jsData.api_sid || "mi_mi",
            containerid: this.jsData.containerid,
            q: this.jsData.title,
            page: this.jsData.page,
            count: this.jsData.count,
            t: 0,
            open_searchall_164card: 1,
            card159164_emoji_enable: 0,
            isnewstyle: 0,
            extparam: this.jsData.extparam
        }).then(function(e) {
            var i = [];
            if (e.data && e.data.cards.length) {
                var n;
                o.globalData.netWorkError = !1, i = a(e.data.cards);
                var c = r.dealCardData(i);
                r.setData((t(n = {}, "cardList[".concat(r.jsData.page - 1, "]"), c), t(n, "netWorkError", o.globalData.netWorkError), 
                t(n, "noData", !1), n)), r.jsData.no_page && (r.jsData.noData = !0);
            } else r.jsData.noData = !0, 1 === r.jsData.page && r.setData({
                noData: !0
            });
            s.track({
                q: r.data.query,
                page_type: 2016,
                page: r.jsData.page,
                ext: {
                    name: s.logMap(2016),
                    containerid: r.jsData.containerid,
                    page_from: r.jsData.page_from
                }
            });
        }).catch(function(t) {
            r.jsData.noData = !1, r.setData({
                netWorkError: o.globalData.netWorkError,
                noData: !0
            });
        });
    },
    dealCardData: function(t) {
        for (var a = {
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
        }, e = [], r = 0; r < (t && t.length); r++) {
            if (t[r].actionlog && (t[r].actionlog = ""), "law_sensitive" !== t[r].itemid && "empty_result" !== t[r].itemid || (this.jsData.isReachBottom = !0), 
            t[r].card_group) if (Array.isArray(t[r].card_group)) for (var i = 0; i < t[r].card_group.length; i++) 42 != t[r].card_group[i].card_type || "热门文章" != t[r].card_group[i].desc ? 8 == t[r].card_group[i].card_type && t[r].card_group[i].openurl ? t[r].card_group = [] : t[r].card_group[i].mblog && this.dealText(t[r].card_group[i].mblog) : t[r].card_group = []; else for (var s in t[r].card_group) t[r].card_group[s].mblog && this.dealText(t[r].card_group[s].mblog);
            if (t[r].mblog) {
                var o = t[r].mblog, n = {};
                for (var c in a) if (void 0 !== o[c]) if ("url_objects" === c && o.url_objects) {
                    n.url_objects = [];
                    for (var u = 0; u < o.url_objects.length; u++) {
                        var l = o.url_objects[u];
                        l.object && l.object.object && (l.object.object = {
                            stream: l.object.object.stream,
                            image: l.object.object.image,
                            author: l.object.object.author,
                            image_url: l.object.object.image_url,
                            display_name: l.object.object.display_name,
                            summary: l.object.object.summary
                        }), n.url_objects.push({
                            object: l.object,
                            url_ori: l.url_ori
                        });
                    }
                } else "user" === c && o.user ? n.user = {
                    mbrank: o.user.mbrank,
                    name: o.user.name,
                    profile_image_url: o.user.profile_image_url,
                    verified: o.user.verified,
                    verified_type: o.user.verified_type,
                    verified_type_ext: o.user.verified_type_ext
                } : n[c] = t[r].mblog[c];
                t[r].mblog = n, this.dealText(t[r].mblog);
            }
            e.push(t[r]);
        }
        return e;
    },
    dealText: function(t) {
        var a = i.parseStatus(t, !1, !1);
        if (t.parseText = a ? a.cardContentList : [], t.retweeted_status) {
            var e = i.parseStatus(t.retweeted_status, !0, !1);
            t.retweeted_status.retParseText = e ? e.cardContentList : [];
        }
    }
});