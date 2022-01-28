var a = {
    app_id: "",
    event_id: "",
    api_base: "https://pingtas.qq.com/pingd",
    prefix: "_mta_",
    version: "1.3.10",
    stat_share_app: !1,
    stat_pull_down_fresh: !1,
    stat_reach_bottom: !1,
    stat_param: !0
};

function t() {
    try {
        var t = "s" + e();
        return wx.setStorageSync(a.prefix + "ssid", t), t;
    } catch (a) {}
}

function e(a) {
    for (var t = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ], e = 10; 1 < e; e--) {
        var n = Math.floor(10 * Math.random()), r = t[n];
        t[n] = t[e - 1], t[e - 1] = r;
    }
    for (e = n = 0; 5 > e; e++) n = 10 * n + t[e];
    return (a || "") + (n + "") + +new Date();
}

function n() {
    try {
        var a = getCurrentPages(), t = "/";
        return 0 < a.length && (t = a.pop().__route__), t;
    } catch (a) {
        console.log("get current page path error:" + a);
    }
}

function r() {
    var r, o = {
        dm: "wechat.apps.xx",
        url: encodeURIComponent(n() + i(p.Data.pageQuery)),
        pvi: "",
        si: "",
        ty: 0
    };
    return o.pvi = ((r = function() {
        try {
            return wx.getStorageSync(a.prefix + "auid");
        } catch (a) {}
    }()) || (r = function() {
        try {
            var t = e();
            return wx.setStorageSync(a.prefix + "auid", t), t;
        } catch (a) {}
    }(), o.ty = 1), r), o.si = function() {
        var e = function() {
            try {
                return wx.getStorageSync(a.prefix + "ssid");
            } catch (a) {}
        }();
        return e || (e = t()), e;
    }(), o;
}

function o() {
    var t = function() {
        var a = wx.getSystemInfoSync();
        return {
            adt: encodeURIComponent(a.model),
            scl: a.pixelRatio,
            scr: a.windowWidth + "x" + a.windowHeight,
            lg: a.language,
            fl: a.version,
            jv: encodeURIComponent(a.system),
            tz: encodeURIComponent(a.platform)
        };
    }();
    return function(a) {
        wx.getNetworkType({
            success: function(t) {
                a(t.networkType);
            }
        });
    }(function(t) {
        try {
            wx.setStorageSync(a.prefix + "ntdata", t);
        } catch (a) {}
    }), t.ct = wx.getStorageSync(a.prefix + "ntdata") || "4g", t;
}

function s() {
    var t, e = p.Data.userInfo, n = [];
    for (t in e) e.hasOwnProperty(t) && n.push(t + "=" + e[t]);
    return e = n.join(";"), {
        r2: a.app_id,
        r4: "wx",
        ext: "v=" + a.version + (null !== e && "" !== e ? ";ui=" + encodeURIComponent(e) : "")
    };
}

function i(t) {
    if (!a.stat_param || !t) return "";
    t = function(t) {
        if (1 > a.ignore_params.length) return t;
        var e, n = {};
        for (e in t) 0 <= a.ignore_params.indexOf(e) || (n[e] = t[e]);
        return n;
    }(t);
    var e, n = [];
    for (e in t) n.push(e + "=" + t[e]);
    return 0 < n.length ? "?" + n.join("&") : "";
}

var p = {
    App: {
        init: function(e) {
            "appID" in e && (a.app_id = e.appID), "eventID" in e && (a.event_id = e.eventID), 
            "statShareApp" in e && (a.stat_share_app = e.statShareApp), "statPullDownFresh" in e && (a.stat_pull_down_fresh = e.statPullDownFresh), 
            "statReachBottom" in e && (a.stat_reach_bottom = e.statReachBottom), "ignoreParams" in e && (a.ignore_params = e.ignoreParams), 
            "statParam" in e && (a.stat_param = e.statParam), t();
            try {
                "lauchOpts" in e && (p.Data.lanchInfo = e.lauchOpts, p.Data.lanchInfo.landing = 1);
            } catch (a) {}
            "autoReport" in e && e.autoReport && function() {
                var a = Page;
                Page = function(t) {
                    var e = t.onLoad;
                    t.onLoad = function(a) {
                        e && e.call(this, a), p.Data.lastPageQuery = p.Data.pageQuery, p.Data.pageQuery = a, 
                        p.Data.lastPageUrl = p.Data.pageUrl, p.Data.pageUrl = n(), p.Data.show = !1, p.Page.init();
                    }, a(t);
                };
            }();
        }
    },
    Page: {
        init: function() {
            var t, e = getCurrentPages()[getCurrentPages().length - 1];
            e.onShow && (t = e.onShow, e.onShow = function() {
                if (!0 === p.Data.show) {
                    var a = p.Data.lastPageQuery;
                    p.Data.lastPageQuery = p.Data.pageQuery, p.Data.pageQuery = a, p.Data.lastPageUrl = p.Data.pageUrl, 
                    p.Data.pageUrl = n();
                }
                p.Data.show = !0, p.Page.stat(), t.apply(this, arguments);
            }), a.stat_pull_down_fresh && e.onPullDownRefresh && function() {
                var t = e.onPullDownRefresh;
                e.onPullDownRefresh = function() {
                    p.Event.stat(a.prefix + "pulldownfresh", {
                        url: e.__route__
                    }), t.apply(this, arguments);
                };
            }(), a.stat_reach_bottom && e.onReachBottom && function() {
                var t = e.onReachBottom;
                e.onReachBottom = function() {
                    p.Event.stat(a.prefix + "reachbottom", {
                        url: e.__route__
                    }), t.apply(this, arguments);
                };
            }(), a.stat_share_app && e.onShareAppMessage && function() {
                var t = e.onShareAppMessage;
                e.onShareAppMessage = function() {
                    return p.Event.stat(a.prefix + "shareapp", {
                        url: e.__route__
                    }), t.apply(this, arguments);
                };
            }();
        },
        multiStat: function(a, t) {
            if (1 == t) p.Page.stat(a); else {
                var e = getCurrentPages()[getCurrentPages().length - 1];
                e.onShow && function() {
                    var t = e.onShow;
                    e.onShow = function() {
                        p.Page.stat(a), t.call(this, arguments);
                    };
                }();
            }
        },
        stat: function(t) {
            if ("" != a.app_id) {
                var e = [], n = s();
                if (t && (n.r2 = t), t = [ r(), n, o() ], p.Data.lanchInfo) {
                    t.push({
                        ht: p.Data.lanchInfo.scene
                    }), p.Data.pageQuery && p.Data.pageQuery._mta_ref_id && t.push({
                        rarg: p.Data.pageQuery._mta_ref_id
                    });
                    try {
                        1 == p.Data.lanchInfo.landing && (n.ext += ";lp=1", p.Data.lanchInfo.landing = 0);
                    } catch (a) {}
                }
                t.push({
                    rdm: "/",
                    rurl: 0 >= p.Data.lastPageUrl.length ? p.Data.pageUrl + i(p.Data.lastPageQuery) : encodeURIComponent(p.Data.lastPageUrl + i(p.Data.lastPageQuery))
                }), t.push({
                    rand: +new Date()
                }), n = 0;
                for (var u = t.length; n < u; n++) for (var l in t[n]) t[n].hasOwnProperty(l) && e.push(l + "=" + (void 0 === t[n][l] ? "" : t[n][l]));
                wx.request({
                    url: a.api_base + "?" + e.join("&").toLowerCase()
                });
            }
        }
    },
    Event: {
        stat: function(t, e) {
            if ("" != a.event_id) {
                var n = [], i = r(), p = s();
                i.dm = "wxapps.click", i.url = t, p.r2 = a.event_id;
                var u, l = void 0 === e ? {} : e, c = [];
                for (u in l) l.hasOwnProperty(u) && c.push(encodeURIComponent(u) + "=" + encodeURIComponent(l[u]));
                for (l = c.join(";"), p.r5 = l, l = 0, p = (i = [ i, p, o(), {
                    rand: +new Date()
                } ]).length; l < p; l++) for (var h in i[l]) i[l].hasOwnProperty(h) && n.push(h + "=" + (void 0 === i[l][h] ? "" : i[l][h]));
                wx.request({
                    url: a.api_base + "?" + n.join("&").toLowerCase()
                });
            }
        }
    },
    Data: {
        userInfo: null,
        lanchInfo: null,
        pageQuery: null,
        lastPageQuery: null,
        pageUrl: "",
        lastPageUrl: "",
        show: !1
    }
};

module.exports = p;