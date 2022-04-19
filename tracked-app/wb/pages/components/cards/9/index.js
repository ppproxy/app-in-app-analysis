var e = require("../../../../81CC8A51ACE07ADFE7AAE2566711A2D7.js"), t = require("../../../../487A5DD3ACE07ADF2E1C35D4E9A0A2D7.js"), a = getApp();

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        query: {
            type: String,
            value: ""
        },
        cardData: {
            type: Object,
            value: {}
        },
        wb: {
            type: Object
        },
        detail: {
            type: Boolean,
            value: !1
        },
        parseText: {
            type: Array,
            value: []
        },
        retParseText: {
            type: Array,
            value: []
        },
        key: {
            type: Number,
            value: 0
        }
    },
    data: {
        createat: "",
        source: "",
        text: "",
        retweetedtext: "",
        pic: {
            width: 223,
            height: 167
        },
        curmedias: [],
        sharePic: ""
    },
    observers: {
        wb: function(e) {
            e && (e.id || e.mid) && this.detailRender();
        }
    },
    attached: function() {
        var t = this;
        if (!this.data.detail) {
            var a = "";
            this.data.detail && this.data.wb.isLongText && this.data.wb.longText && this.data.wb.longText.longTextContent ? (a = this.data.wb.longText.longTextContent, 
            this.data.wb.longText.url_objects && this.data.wb.longText.url_objects.length > 0 && this.data.wb.longText.url_objects) : (a = this.data.wb.text + '...<em class="richstyle">全文</em>', 
            this.data.wb.url_objects && this.data.wb.url_objects.length > 0 && this.data.wb.url_objects);
            var i = "";
            if (this.data.wb.pic_ids && this.data.wb.pic_ids.length) i = "https://ww3.sinaimg.cn/middle/".concat(this.data.wb.pic_ids[0], ".jpg"); else if (this.data.wb.url_objects) for (var s = this.data.wb.url_objects, c = 0; c < s.length; c++) if (s[c].object && ("video" === s[c].object.object_type || "article" === s[c].object.object_type) && s[c].object.object && s[c].object.object.image) {
                i = e.replaceHttps(s[c].object.object.image.url);
                break;
            }
            var r = [];
            if (this.data.wb.comment_summary) for (var l = this.data.wb.comment_summary.comment_list, o = 0; o < l.length; o++) r.push({
                name: l[o].user ? l[o].user.name : ""
            });
            this.setData({
                createat: e.formatTimeToDetail(new Date(this.data.wb.created_at)),
                text: a,
                sharePic: i,
                comment_summary: r
            }, function() {
                t.calCardHeight();
            });
        }
    },
    methods: {
        detailRender: function() {
            var t = this;
            if (this.data.detail) {
                var a = "";
                this.data.wb && this.data.wb.isLongText && this.data.wb.longText && this.data.wb.longText.longTextContent ? (a = this.data.wb.longText.longTextContent, 
                this.data.wb.longText.url_objects && this.data.wb.longText.url_objects.length > 0 && this.data.wb.longText.url_objects) : (a = this.data.wb.text, 
                this.data.wb.url_objects && this.data.wb.url_objects.length > 0 && this.data.wb.url_objects), 
                this.setData({
                    createat: e.formatTimeToDetail(new Date(this.data.wb.created_at)),
                    source: this.data.wb.source ? this.data.wb.source.replace(/<\/?[^>]*>/g, "") : "",
                    text: a
                }, function() {
                    t.calCardHeight();
                });
            }
        },
        dealWithText: function(a) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], s = this;
            if (a) {
                if (a = (a = (a = (a = a.replace(/\n/g, "<br/>")).replace(/@([\u4e00-\u9fa5a-zA-Z0-9_-]+)/g, function(e) {
                    return '<em class="richstyle">' + e + "</em>";
                })).replace(/\#.*?\#/g, function(e) {
                    return e.indexOf("[超话]") > -1 ? '<em class="richstyle"><img src="https://h5.sinaimg.cn/upload/100/959/2020/05/09/timeline_card_small_super_default.png" style="display:inline-block;width:14px;height:14px"/></i>' + e.replace("[超话]", "").replace(/\#/g, "") + "</em>" : e.indexOf("[电影]") > -1 ? '<em class="richstyle"><img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_movie_default.png" style="display:inline-block;width:14px;height:14px"/></i>' + e.replace("[超话]", "").replace(/\#/g, "") + "</em>" : '<a href="javascript:;">' + e + "</a>";
                })).replace(/\[[\u4e00-\u9fa5a-zA-Z0-9]+\]/g, function(a) {
                    return t.emotions[a] ? '<img src="' + e.replaceHttps(t.emotions[a]) + '" mode="aspectFill" class="emotion" />' : a;
                }), i.length > 0) for (var c = 0; c < i.length; c++) {
                    var r = i[c].object && i[c].object.object_type && i[c].object.object_type || "";
                    if ("" != r) if ("search_topic" === r) {
                        var l = "#" + e.trim(i[c].url_ori) + "#";
                        if (i[c].object.safe_status && 99 == i[c].object.safe_status) continue;
                        a = a.replace(l, '<em class="richstyle">' + l + "</em>");
                    } else if ("topic" === r) {
                        var o = "#" + e.trim(i[c].url_ori).replace("[超话]", "") + "#";
                        a = a.replace(o, '<em class="richstyle">' + s.__proto__.icons(r) + o + "</em>");
                    } else {
                        var n = e.trim(i[c].url_ori), d = i[c].object.object && i[c].object.object.display_name || n;
                        a = a.replace(n, '<em class="richstyle">' + s.__proto__.icons(r) + d + "</em>");
                    }
                }
                if (this.data.wb.retweeted_status) {
                    var h = "", u = [];
                    if (this.data.wb.retweeted_status.user && (h = '<em class="richstyle">@' + this.data.wb.retweeted_status.user.name + "</em>:"), 
                    this.data.wb.retweeted_status.isLongText && this.data.wb.retweeted_status.longText && this.data.wb.retweeted_status.longText.longTextContent ? (h += this.data.wb.retweeted_status.longText.longTextContent, 
                    this.data.wb.retweeted_status.longText.url_objects && this.data.wb.retweeted_status.longText.url_objects.length > 0 && (u = this.data.wb.retweeted_status.longText.url_objects)) : (h += this.data.wb.retweeted_status.text, 
                    this.data.wb.retweeted_status.url_objects && this.data.wb.retweeted_status.url_objects.length > 0 && (u = this.data.wb.retweeted_status.url_objects)), 
                    h = (h = (h = (h = h.replace(/\n/g, "<br/>")).replace(/@([\u4e00-\u9fa5a-zA-Z0-9_-]+)/g, function(e) {
                        return '<em class="richstyle">' + e + "</em>";
                    })).replace(/\#.*?\#/g, function(e) {
                        return e.indexOf("[超话]") > -1 ? '<em class="richstyle"><img src="https://h5.sinaimg.cn/upload/100/959/2020/05/09/timeline_card_small_super_default.png" style="display:inline-block;width:14px;height:14px"/></i>' + e.replace("[超话]", "").replace(/\#/g, "") + "</em>" : e.indexOf("[电影]") > -1 ? '<em class="richstyle"><img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_movie_default.png" style="display:inline-block;width:14px;height:14px"/></i>' + e.replace("[超话]", "").replace(/\#/g, "") + "</em>" : '<a href="javascript:;">' + e + "</a>";
                    })).replace(/\[[\u4e00-\u9fa5a-zA-Z0-9]+\]/g, function(a) {
                        return t.emotions[a] ? '<img src="' + e.replaceHttps(t.emotions[a]) + '" mode="aspectFill" class="emotion" />' : a;
                    }), u.length > 0) for (c = 0; c < u.length; c++) {
                        var g = u[c].object && u[c].object.object_type && u[c].object.object_type || "";
                        if ("" != g) if ("search_topic" === g) {
                            var p = "#" + e.trim(u[c].url_ori) + "#";
                            if (u[c].object.safe_status && 99 == u[c].object.safe_status) continue;
                            h = h.replace(p, '<em class="richstyle">' + p + "</em>");
                        } else if ("topic" === g) {
                            var m = "#" + e.trim(u[c].url_ori).replace("[超话]", "") + "#";
                            h = h.replace(m, '<em class="richstyle">' + s.__proto__.icons(g) + m + "</em>");
                        } else {
                            var _ = e.trim(u[c].url_ori), b = u[c].object.object && u[c].object.object.display_name || _;
                            h = h.replace(_, '<em class="richstyle">' + s.__proto__.icons(g) + b + "</em>");
                        }
                    }
                    this.setData({
                        retweetedtext: h
                    });
                }
                return a;
            }
        },
        icons: function(e) {
            var t = "";
            switch (e) {
              case "topic":
                t = '<img src="https://h5.sinaimg.cn/upload/100/959/2020/05/09/timeline_card_small_super_default.png" mode="aspectFill" class="icon" />';
                break;

              case "wenda":
                t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_web_default.png" mode="aspectFill" class="icon" />';
                break;

              case "article":
                t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_article_default.png" mode="aspectFill" class="icon" />';
                break;

              case "webpage":
                t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_web_default.png" mode="aspectFill" class="icon" />';
                break;

              case "video":
                t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_video_default.png" mode="aspectFill" class="icon" />';
                break;

              case "audio":
                t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_music_default.png" mode="aspectFill" class="icon" />';
                break;

              case "place":
                t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_location_default.png" mode="aspectFill" class="icon" />';
                break;

              case "adFeedVideo":
                t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_video_default.png" mode="aspectFill" class="icon" />';
                break;

              case "weblink":
                t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_web_default.png" mode="aspectFill" class="icon" />';
                break;

              case "movie":
                t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_movie_default.png" mode="aspectFill" class="icon" />';
            }
            return t;
        },
        preview: function(e) {
            for (var t = [], a = 0; a < e.currentTarget.dataset.ids.length; a++) t.push("https://ww1.sinaimg.cn/large/" + e.currentTarget.dataset.ids[a] + ".jpg");
            wx.previewImage({
                current: "https://ww1.sinaimg.cn/large/" + e.currentTarget.dataset.id + ".jpg",
                urls: t
            });
        },
        showvideo: function() {
            this.setData({
                "video.show": !0
            });
        },
        navigateTo: function() {
            if (!this.data.detail) {
                var e = "/pages/components/detailWeibo/index?id=" + (this.data.wb.id || this.data.wb.mid) + "&q=" + this.data.query + "&page_from=search";
                wx.navigateTo({
                    url: e,
                    fail: function(t) {
                        t.errMsg && t.errMsg.indexOf("limit exceed") > -1 && wx.redirectTo({
                            url: e,
                            fail: function() {}
                        });
                    }
                });
            }
        },
        calCardHeight: function() {
            if (this.data.detail) this.createSelectorQuery().select(".card-9").fields({
                size: !0
            }, function(e) {
                wx.setStorage({
                    key: "detail_card_9_height",
                    data: e ? e.height : 0
                });
            }).exec(), this.createSelectorQuery().select(".rich-text").fields({
                size: !0
            }, function(e) {
                wx.setStorage({
                    key: "detail_rich_text_height",
                    data: e ? e.height : 0
                });
            }).exec(), this.createSelectorQuery().select(".retweeted-blog").fields({
                size: !0
            }, function(e) {
                wx.setStorage({
                    key: "detail_retweeted_blog_height",
                    data: e ? e.height : 0
                });
            }).exec(), this.createSelectorQuery().select(".retweeted-blog .rich-text").fields({
                size: !0
            }, function(e) {
                wx.setStorage({
                    key: "detail_retweeted_richtext_height",
                    data: e ? e.height : 0
                });
            }).exec(); else {
                if (!a.globalData.is_first_card9) return;
                this.createSelectorQuery().select(".card-9").fields({
                    size: !0
                }, function(e) {
                    wx.setStorage({
                        key: "card_9_height",
                        data: e ? e.height : 0
                    });
                }).exec(), this.createSelectorQuery().select(".rich-text").fields({
                    size: !0
                }, function(e) {
                    wx.setStorage({
                        key: "rich_text_height",
                        data: e ? e.height : 0
                    });
                }).exec(), this.createSelectorQuery().select(".retweeted-blog").fields({
                    size: !0
                }, function(e) {
                    wx.setStorage({
                        key: "retweeted_blog_height",
                        data: e ? e.height : 0
                    });
                }).exec(), this.createSelectorQuery().select(".retweeted-blog .rich-text").fields({
                    size: !0
                }, function(e) {
                    wx.setStorage({
                        key: "retweeted_richtext_height",
                        data: e ? e.height : 0
                    });
                }).exec(), a.globalData.is_first_card9 = !1;
            }
        },
        videoPlay: function(e) {
            this.videoContext = wx.createVideoContext(e.target.id, this);
        },
        fullScreenChange: function(e) {
            if (this.videoContext) {
                var t = !0;
                e.detail.fullScreen ? "ios" === a.globalData.platform && this.videoContext.hideStatusBar() : (t = !1, 
                "ios" === a.globalData.platform && this.videoContext.showStatusBar(), this.videoContext.pause()), 
                this.triggerEvent("fullScreenChange", {
                    ignore: t
                }, {
                    bubbles: !0,
                    composed: !0
                });
            }
        },
        videoopt: function() {},
        cancalBubble: function() {},
        tapContent: function(e) {
            var t = e.currentTarget.dataset.item;
            if ("topic" === t.tag) {
                var a = t.content;
                wx.redirectTo({
                    url: "/pages/comprehensiveSearch/index?q=" + a,
                    fail: function() {}
                });
            }
        },
        goToMiniProgram: function(e) {
            wx.navigateToMiniProgram({
                appId: "wx9074de28009e1111",
                path: "/pages/index/index?blog_id=" + e.currentTarget.dataset.id,
                fail: function() {}
            });
        }
    }
});