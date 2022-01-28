getApp().request;

var t = require("../../../wxParse/wxParse");

Page({
    data: {
        windowHeight: "",
        list: "",
        current: 0,
        testCurrentNav: 0,
        currentIndex: 0,
        currentMovie: {},
        movieDistance: 0,
        shareCodeURL: "",
        boxHeight: 0,
        classArray: [ "active", "next" ]
    },
    onLoad: function(t) {
        console.log(t), wx.showLoading(), this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            current: Number(t.index)
        }), console.log(this.data.current), this.getNoticeList();
    },
    bindchange: function(t) {
        this.setData({
            current: t.detail.current
        });
        var e = wx.createSelectorQuery(), a = ".class-list-block" + t.detail.current, n = this;
        e.select(a).boundingClientRect(function(t) {
            n.setData({
                boxHeight: t.height
            });
        }).exec();
    },
    getNoticeList: function() {
        var e = this, a = wx.getStorageSync("home_list") || {}, n = a.data ? a : {
            data: []
        };
        if (console.log(n), n.data && n.data.length > 0) {
            n.data.map(function(a, s) {
                t.wxParse("message_content" + s, "html", a.message_content, e), s === n.data.length - 1 && t.wxParseTemArray("WxParseListArr", "message_content", n.data.length, e);
            });
            var s = e.data.WxParseListArr, i = [];
            s.forEach(function(t, e) {
                n.data[e].message_content = t, i.push(n.data[e]);
            }), this.setData({
                list: i
            }), setTimeout(function() {
                var t = wx.createSelectorQuery();
                console.log(e.data.current);
                var a = ".class-list-block" + e.data.current;
                t.select(a).boundingClientRect(function(t) {
                    console.log(t), e.setData({
                        boxHeight: t.height
                    }), wx.hideLoading();
                }).exec();
            }, 1e3);
        }
    }
});