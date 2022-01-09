var t = require("../../../81CC8A51ACE07ADFE7AAE2566711A2D7.js"), a = (getApp(), 
[]), e = [];

Component({
    properties: {
        query: {
            type: String,
            value: ""
        },
        cardData: {
            type: Object,
            value: {}
        },
        headData: {
            type: Object,
            value: {}
        },
        toolBarData: {
            type: Array,
            value: []
        },
        current: {
            type: Number,
            value: 0
        },
        detail: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    observers: {
        cardData: function(t) {
            if (this.data.detail) t && t.mblog && (e = []).push(this.data.cardData); else if (t[0] && 0 === this.data.current) {
                a = [];
                for (var o = t[0], r = 0; r < o.length; r++) {
                    if (0 === r && (7 === o[r].card_type ? a.push(o[r]) : a.push({})), 9 === o[r].card_type) {
                        a.push(o[r]);
                        break;
                    }
                    if (11 === o[r].card_type && o[r].card_group) for (var i = 0; i < o[r].card_group.length; i++) if (9 === o[r].card_group[i].card_type) {
                        a.push(o[r].card_group[i]);
                        break;
                    }
                }
            }
        }
    },
    ready: function() {},
    methods: {
        goToWeiboHot: function() {
            t.goToWeiboHotProgram("click_footer_go_hotflow");
        },
        goToHome: function() {
            var t = this.data.detail ? "detail" : "search";
            wx.reLaunch({
                url: "/pages/index/index?hot_btn=1&page_from=" + t,
                fail: function() {}
            });
        },
        getAlbumSetting: function() {
            var t = this;
            wx.getSetting({
                success: function(a) {
                    a.authSetting["scope.writePhotosAlbum"] ? t.agreeAuth() : t.refuseAuth();
                }
            });
        },
        agreeAuth: function() {
            wx.setStorage({
                key: "detail_card_data",
                data: e
            }), wx.setStorage({
                key: "card_data",
                data: a
            }), wx.setStorage({
                key: "topic_head",
                data: this.data.headData
            }), wx.setStorage({
                key: "toolbar_data",
                data: this.data.toolBarData
            }), wx.navigateTo({
                url: "/pages/getPhoto/index?q=" + this.data.query + "&detail=" + (this.data.detail ? 1 : 0),
                fail: function() {}
            });
        },
        refuseAuth: function() {
            var t = this;
            wx.authorize({
                scope: "scope.writePhotosAlbum",
                success: function() {
                    t.agreeAuth();
                },
                fail: function() {
                    wx.showModal({
                        content: "打开相册权限",
                        showCancel: !0,
                        success: function(a) {
                            a.confirm && wx.openSetting({
                                success: function(a) {
                                    a.authSetting["scope.writePhotosAlbum"] && t.agreeAuth();
                                }
                            });
                        }
                    });
                }
            });
        }
    }
});