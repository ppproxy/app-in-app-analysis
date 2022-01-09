var t = require("../../81CC8A51ACE07ADFE7AAE2566711A2D7.js"), e = getApp(), o = e.globalData.windowWidth / 375, a = [], r = {}, c = [], i = [], p = 0, s = 0, l = 0, n = 0, h = 230, x = 0, d = 0, g = 0, u = 0;

Page({
    data: {
        piiicCanvasWidth: e.globalData.windowWidth,
        piiicCanvasHeight: e.globalData.windowHeight,
        placeholderOffsetY: 81.5,
        placeholderWidth: 263,
        placeholderHeight: 450,
        placeholderSrc: "https://simg.s.weibo.com/20201222_piiic_placeholder.png",
        placeholderButton: "取消",
        placeholderBottomHeight: 60,
        imgDraw: {}
    },
    jsData: {
        query: "",
        detail: !1
    },
    onLoad: function(t) {
        this.jsData.query = t.q, this.jsData.detail = Number(t.detail), this.setData({
            placeholderWidth: this.data.placeholderWidth * o,
            placeholderHeight: 3 * e.globalData.windowHeight / 4,
            placeholderBottomHeight: this.data.placeholderBottomHeight
        });
    },
    onReady: function() {
        wx.showLoading({
            title: "长图生成中..."
        }), this.draw();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        a = [];
    },
    placeholderButtonClick: function(t) {
        "取消" === this.data.placeholderButton || "完成" === this.data.placeholderButton ? wx.navigateBack({
            delta: 1
        }) : this.savePhoto(this.data.placeholderSrc);
    },
    savePhoto: function(t) {
        var e = this;
        wx.showLoading({
            title: "正在保存...",
            mask: !0
        }), wx.saveImageToPhotosAlbum({
            filePath: t,
            success: function(t) {
                wx.showToast({
                    title: "保存成功",
                    icon: "none"
                }), e.setData({
                    placeholderButton: "完成"
                });
            },
            fail: function(t) {
                setTimeout(function() {
                    wx.hideLoading({
                        fail: function() {}
                    }), e.setData({
                        placeholderButton: "取消"
                    });
                }, 300);
            }
        });
    },
    getUrlObjects: function(o, r) {
        var c = JSON.parse(JSON.stringify(o)), i = [];
        "retweeted" === r && ((c = c.retweeted_status).text = "@" + c.user.name + "：" + c.text, 
        a.push({
            type: "rect",
            css: {
                top: "".concat(u + s + d + 151, "rpx"),
                left: "20rpx",
                width: "".concat(e.globalData.windowWidth * e.globalData.rate - 40, "rpx"),
                height: "".concat(l, "rpx"),
                color: "#f7f7f7"
            }
        })), c.isLongText && c.longText && c.longText.longTextContent ? (c.text = c.longText.longTextContent, 
        c.longText.url_objects && c.longText.url_objects.length > 0 && (i = c.longText.url_objects)) : (c.text = c.text + (this.jsData.detail ? "" : "...全文"), 
        c.url_objects && c.url_objects.length > 0 && (i = c.url_objects));
        var p = c.text.replace(/↵/g, "\n");
        if (p = (p = p.replace(/@([\u4e00-\u9fa5a-zA-Z0-9_-]+)/g, function(t) {
            return t;
        })).replace(/\#.*?\#/g, function(t) {
            return t.indexOf("[超话]") > -1 || t.indexOf("[电影]") > -1 ? t.replace("[超话]", "").replace(/\#/g, "") : t;
        }), i.length > 0) for (var h = 0; h < i.length; h++) {
            var x = i[h].object && i[h].object.object_type && i[h].object.object_type || "";
            if ("" != x) if ("search_topic" === x) {
                var g = "#" + t.trim(i[h].url_ori) + "#";
                if (i[h].object.safe_status && 99 == i[h].object.safe_status) continue;
                c.text = c.text.replace(g, g);
            } else if ("topic" === x) {
                var f = "#" + t.trim(i[h].url_ori).replace("[超话]", "") + "#";
                c.text = c.text.replace(f, f);
            } else {
                var w = t.trim(i[h].url_ori), m = i[h].object.object && i[h].object.object.display_name || w;
                c.text = c.text.replace(w, m);
            }
        }
        if (a.push({
            type: "text",
            text: p,
            css: {
                top: "".concat(u + ("retweeted" === r ? s + 20 : 0) + d + 141, "rpx"),
                left: "retweeted" === r ? "40rpx" : "20rpx",
                fontSize: "30rpx",
                width: "retweeted" === r ? "85%" : "".concat(e.globalData.windowWidth * e.globalData.rate - 40, "rpx"),
                lineHeight: "46rpx",
                color: "#333"
            }
        }), c.pic_ids.length) {
            var _ = c.pic_ids.length;
            1 === _ ? (a.push({
                type: "image",
                url: "https://ww1.sinaimg.cn/orj360/".concat(c.pic_ids[0], ".jpg"),
                css: {
                    top: "".concat(u + s + n + ("retweeted" === r ? 20 : 0) + d + 141, "rpx"),
                    left: "20rpx",
                    width: "452rpx",
                    height: "310rpx"
                }
            }), "retweeted" !== r && (d = 322)) : 4 === _ ? (c.pic_ids instanceof Array && c.pic_ids.forEach(function(t, e) {
                e < 2 ? a.push({
                    type: "image",
                    url: "https://ww1.sinaimg.cn/orj360/".concat(t, ".jpg"),
                    css: {
                        top: "".concat(u + s + n + ("retweeted" === r ? 20 : 0) + d + 141, "rpx"),
                        left: "".concat(247 * e + 20, "rpx"),
                        width: "237rpx",
                        height: "206.5rpx"
                    }
                }) : a.push({
                    type: "image",
                    url: "https://ww1.sinaimg.cn/orj360/".concat(t, ".jpg"),
                    css: {
                        top: "".concat(u + s + n + ("retweeted" === r ? 20 : 0) + d + 216.5 + 141, "rpx"),
                        left: "".concat(247 * (e - 2) + 20, "rpx"),
                        width: "237rpx",
                        height: "206.5rpx"
                    }
                });
            }), "retweeted" !== r && (d = 433)) : (c.pic_ids instanceof Array && c.pic_ids.forEach(function(t, e) {
                e < 3 ? a.push({
                    type: "image",
                    url: "https://ww1.sinaimg.cn/orj360/".concat(t, ".jpg"),
                    css: {
                        top: "".concat(u + s + n + ("retweeted" === r ? 20 : 0) + d + 141, "rpx"),
                        left: "".concat(236 * e + 20, "rpx"),
                        width: "226rpx",
                        height: "215.5rpx"
                    }
                }) : e < 6 ? a.push({
                    type: "image",
                    url: "https://ww1.sinaimg.cn/orj360/".concat(t, ".jpg"),
                    css: {
                        top: "".concat(u + s + n + ("retweeted" === r ? 20 : 0) + d + 225.5 + 141, "rpx"),
                        left: "".concat(236 * (e - 3) + 20, "rpx"),
                        width: "226rpx",
                        height: "215.5rpx"
                    }
                }) : a.push({
                    type: "image",
                    url: "https://ww1.sinaimg.cn/orj360/".concat(t, ".jpg"),
                    css: {
                        top: "".concat(u + s + n + ("retweeted" === r ? 20 : 0) + d + 451 + 141, "rpx"),
                        left: "".concat(236 * (e - 6) + 20, "rpx"),
                        width: "226rpx",
                        height: "215.5rpx"
                    }
                });
            }), "retweeted" !== r && (d = 225.5 * Math.ceil(_ / 3)));
        } else if (c.url_objects.length) for (var b = 0; b < c.url_objects.length; b++) {
            var y = c.url_objects[b];
            if (y.object && "video" === y.object.object_type && y.object.object.image) {
                a.push({
                    type: "image",
                    url: "".concat(t.replaceHttps(y.object.object.image.url)),
                    css: {
                        top: "".concat(u + s + n + ("retweeted" === r ? 20 : 0) + d + 141, "rpx"),
                        left: "20rpx",
                        width: "".concat(e.globalData.windowWidth * e.globalData.rate - 40, "rpx"),
                        height: "394rpx"
                    }
                }), a.push({
                    type: "image",
                    url: "/assets/icons/common_icon_play.png",
                    css: {
                        top: "".concat(u + s + n + ("retweeted" === r ? 20 : 0) + d + 260, "rpx"),
                        left: "44%",
                        width: "128rpx",
                        height: "128rpx"
                    }
                }), "retweeted" !== r && (d = 404);
                break;
            }
        }
    },
    draw: function() {
        if (r = wx.getStorageSync("topic_head"), c = wx.getStorageSync("toolbar_data"), 
        i = wx.getStorageSync(this.jsData.detail ? "detail_card_data" : "card_data"), p = 0, 
        s = wx.getStorageSync(this.jsData.detail ? "detail_rich_text_height" : "rich_text_height") * e.globalData.rate, 
        l = wx.getStorageSync(this.jsData.detail ? "detail_retweeted_blog_height" : "retweeted_blog_height") * e.globalData.rate, 
        n = wx.getStorageSync(this.jsData.detail ? "detail_retweeted_richtext_height" : "retweeted_richtext_height") * e.globalData.rate, 
        h = 230, x = r.height ? r.height * e.globalData.rate : 0, d = 0, g = h + x, a.push({
            type: "image",
            url: "/assets/icons/share_longpic_logo.png",
            css: {
                top: "30rpx",
                left: "260rpx",
                width: "250rpx",
                height: "109rpx"
            }
        }), this.jsData.query && a.push({
            type: "text",
            text: "搜索词：".concat(this.jsData.query),
            css: {
                top: "176rpx",
                left: "0",
                width: "100%",
                textAlign: "center",
                padding: "20rpx 0",
                maxLines: 1,
                fontSize: "32rpx",
                fontWeight: "bold",
                background: "#fff"
            }
        }), r.title && (r.background_url ? a.push({
            type: "image",
            url: r.background_url,
            css: {
                top: "230rpx",
                left: "0",
                right: "0",
                width: "100%",
                height: r.height ? "".concat(x, "rpx") : "220rpx"
            }
        }) : (a.push({
            type: "image",
            url: r.portrait_url,
            css: {
                top: "230rpx",
                left: "0",
                right: "0",
                width: "100%",
                height: "220rpx"
            }
        }), a.push({
            type: "rect",
            css: {
                top: "230rpx",
                left: "0",
                right: "0",
                width: "100%",
                height: "220rpx",
                color: "rgba(0, 0, 0, 0.7)"
            }
        })), a.push({
            type: "image",
            url: r.portrait_url,
            css: {
                top: "".concat(g - 150, "rpx"),
                left: "20rpx",
                width: "130rpx",
                height: "130rpx",
                borderRadius: "5px"
            }
        }), a.push({
            id: "topic-title",
            type: "text",
            text: r.title,
            css: {
                top: "".concat(g - 150, "rpx"),
                fontSize: "39rpx",
                width: "80%",
                maxLines: 1,
                left: "170rpx",
                fontWeight: "bold",
                color: "#fff"
            }
        }), r.tag_text && a.push({
            type: "text",
            text: r.tag_text,
            css: {
                top: "".concat(g - 140, "rpx"),
                left: [ "190rpx", "topic-title", 1 ],
                color: "#fff",
                fontSize: "20rpx",
                lineHeight: "30rpx",
                background: r.tag_color,
                padding: "0 8rpx",
                height: "30rpx",
                borderRadius: "6rpx"
            }
        }), a.push({
            type: "text",
            text: r.midtext,
            css: {
                top: "".concat(g - 90, "rpx"),
                fontSize: "24rpx",
                left: "170rpx",
                color: "#fff"
            }
        }), r.downtext && a.push({
            type: "text",
            text: r.downtext,
            css: {
                top: "".concat(g - 60, "rpx"),
                fontSize: "24rpx",
                left: "170rpx",
                color: "#fff"
            }
        })), c.length) {
            for (var o = 0; o < c.length; o++) {
                var f = {
                    type: "text",
                    text: c[o].name,
                    css: {
                        top: "".concat(g + 20, "rpx"),
                        fontSize: "30rpx",
                        width: "25%",
                        padding: "18rpx 0 18rpx 0",
                        textAlign: "center",
                        background: "#ffffff",
                        fontFamily: "PingFangSC-Medium"
                    }
                };
                0 === o ? (f.css.fontSize = "31rpx", f.css.fontWeight = "bold", f.css.color = "#333333", 
                f.css.left = "0") : 1 === o ? (f.css.left = "25%", f.css.color = "#939393") : 2 === o ? (f.css.left = "50%", 
                f.css.color = "#939393") : 3 == o && (f.css.left = "75%", f.css.color = "#939393"), 
                a.push(f);
            }
            a.push({
                type: "rect",
                css: {
                    top: "".concat(g + 64, "rpx"),
                    left: "70rpx",
                    width: "50rpx",
                    height: "6rpx",
                    color: "rgb(255, 130, 0)",
                    borderRadius: "50rpx"
                }
            });
        }
        var w = this.jsData.detail ? i[0] ? i[0].mblog : {} : i[1] ? i[1].mblog : {};
        if (!w.id) return wx.hideLoading({
            fail: function() {}
        }), void wx.showModal({
            title: "提示",
            content: "绘图失败",
            success: function(t) {
                t.confirm && wx.navigateBack({
                    delta: -1
                });
            },
            fail: function() {}
        });
        u = this.jsData.detail ? 126 : i[0].desc ? g + p : g + p - 20;
        var m = wx.getStorageSync(this.jsData.detail ? "detail_card_9_height" : "card_9_height") * e.globalData.rate;
        a.push({
            type: "rect",
            css: {
                top: "".concat(u + 104, "rpx"),
                width: "100%",
                height: "".concat(m, "rpx"),
                color: "#ffffff"
            }
        }), w.label || w.title && w.title.text ? (a.push({
            type: "text",
            text: w.label || w.title.text,
            css: {
                top: "".concat(u + 114, "rpx"),
                left: "20rpx",
                fontSize: "28rpx",
                width: "".concat(e.globalData.windowWidth * e.globalData.rate - 40, "rpx"),
                padding: "12rpx 0 12rpx 0",
                color: "#939393"
            }
        }), u += 160) : u += 104, a.push({
            type: "rect",
            css: {
                top: "".concat(u, "rpx"),
                width: "100%",
                height: "1rpx",
                color: "#e5e5e5"
            }
        }), a.push({
            type: "image",
            url: w.user.profile_image_url || "https://tvax1.sinaimg.cn/default/images/default_avatar_male_180.gif",
            css: {
                top: "".concat(u + 30, "rpx"),
                left: "20rpx",
                width: "90rpx",
                height: "90rpx",
                borderRadius: "50%",
                borderWidth: "1rpx",
                borderColor: "#e5e5e5",
                borderStyle: "solid"
            }
        }), a.push({
            type: "text",
            text: w.user.name,
            css: {
                top: "".concat(u + 30, "rpx"),
                left: "130rpx",
                fontSize: "32rpx",
                color: "#f36100"
            }
        }), a.push({
            type: "text",
            text: "".concat(t.formatTime(new Date(w.created_at)), " ").concat(t.nourl(w.source)),
            css: {
                top: "".concat(u + 81, "rpx"),
                left: "130rpx",
                fontSize: "24rpx",
                color: "#898989"
            }
        }), this.getUrlObjects(w), w.retweeted_status && this.getUrlObjects(w, "retweeted");
        var _ = 0;
        w.comment_summary && w.comment_summary.comment_list && w.comment_summary.comment_list instanceof Array && w.comment_summary.comment_list.forEach(function(t, e) {
            a.push({
                type: "text",
                text: "".concat(t.user.id && t.user.name, "：").concat(t.text),
                css: {
                    top: "".concat(u + s + l + d + 151 + 50 * e, "rpx"),
                    left: "30rpx",
                    fontSize: "24rpx",
                    width: "90%",
                    maxLines: 1
                }
            }), _ += 44;
        }), a.push({
            type: "rect",
            css: {
                top: "".concat(u + s + l + d + _ + 151, "rpx"),
                width: "100%",
                height: "1rpx",
                color: "#e5e5e5"
            }
        }), a.push({
            type: "text",
            text: "转发 ".concat(t.countNum(w.reposts_count)),
            css: {
                top: "".concat(u + s + l + d + _ + 173, "rpx"),
                left: "80rpx",
                fontSize: "24rpx",
                width: "33.33%",
                color: "#939393"
            }
        }), a.push({
            type: "text",
            text: "评论 ".concat(t.countNum(w.comments_count)),
            css: {
                top: "".concat(u + s + l + d + _ + 173, "rpx"),
                left: "330rpx",
                fontSize: "24rpx",
                width: "33.33%",
                color: "#939393"
            }
        }), a.push({
            type: "text",
            text: "赞 ".concat(t.countNum(w.attitudes_count)),
            css: {
                top: "".concat(u + s + l + d + _ + 173, "rpx"),
                left: "580rpx",
                fontSize: "24rpx",
                width: "33.33%",
                color: "#939393"
            }
        }), a.push({
            type: "image",
            url: "https://wx3.sinaimg.cn/bmiddle/0024cZx9ly1gl0gzfdseoj60760763zk02.jpg",
            css: {
                top: "".concat(u + s + l + d + _ + 270, "rpx"),
                left: "42%",
                width: "150rpx",
                height: "150rpx",
                borderRadius: "50%"
            }
        }), a.push({
            type: "text",
            text: "长按识别小程序码，查看微博热搜",
            css: {
                top: "".concat(u + s + l + d + _ + 440, "rpx"),
                width: "100%",
                textAlign: "center",
                fontSize: "24rpx",
                color: "#939393"
            }
        });
        var b = {
            width: "".concat(e.globalData.windowWidth, "px"),
            height: "".concat(u + s + l + d + _ + 500, "rpx"),
            background: "#f8f8f8",
            views: a
        };
        this.setData({
            imgDraw: b
        });
    },
    onImgOK: function(t) {
        wx.hideLoading({
            fail: function() {}
        }), this.setData({
            placeholderSrc: t.detail.path,
            placeholderButton: "保存"
        });
    }
});