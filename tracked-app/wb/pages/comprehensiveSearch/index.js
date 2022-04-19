var a = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/objectSpread2");

require("../../@babel/runtime/helpers/Arrayincludes");

var e, i = require("../../@babel/runtime/helpers/toConsumableArray"), r = require("../../@babel/runtime/helpers/defineProperty"), s = a(require("../../@babel/runtime/regenerator")), o = require("../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../FDCF6404ACE07ADF9BA90C030A01A2D7.js"), c = a(require("../../38299424ACE07ADF5E4FFC231B20A2D7.js")), d = require("../../AA471BB0ACE07ADFCC2173B70930A2D7.js"), l = require("../../90C38923ACE07ADFF6A5E124FFF0A2D7.js"), h = require("../../81CC8A51ACE07ADFE7AAE2566711A2D7.js"), u = require("../../1964FEB6ACE07ADF7F0296B168E0A2D7.js"), g = getApp(), p = require("../../A5F26265ACE07ADFC3940A6236C0A2D7.js");

Page({
    data: {
        scene: g.globalData.scene,
        platform: g.globalData.platform,
        swiper_height: g.globalData.realWindowHeight,
        windowHeight: g.globalData.realWindowHeight,
        type: 1,
        query: "",
        totalTopHeight: g.globalData.statusBarHeight + g.globalData.titleBarHeight,
        scrollX: 0,
        scrollY: !1,
        headData: {},
        channelList: [],
        cardsData: [],
        currentIndex: 0,
        refresh: !1,
        refreshed: !1,
        refreshText: "",
        scrollToTop: 0,
        topicShareCvsId: "topic-share",
        topicShareCvsWidth: 420,
        topicShareCvsHeight: 336,
        topicShareImagePath: "",
        isShare: "",
        netWorkError: !1,
        hotListData: [],
        canvasId: "topic-bg",
        canvasWidth: 420,
        canvasHeight: 336,
        imagePath: "",
        isCustom: !0,
        kandianDataList: []
    },
    jsData: {
        isLoadingData: !1,
        allCardsData: [],
        page: 1,
        switchingTab: 1,
        is_tab_change: !1,
        isShowLoading: !1,
        refreshEnable: !0,
        is_first: !0,
        start_pageY: 0,
        headerHeight: 0,
        isPullDown: !1,
        isReachBottom: !1,
        ignoreScroll: !1,
        is_video: !1,
        pageScrollTop: 0,
        scrollTop: 0,
        addGuideHeight: 0,
        share_type: "",
        page_from: "",
        timeInterval: null,
        currentHotTipIndex: 0,
        deeplink_docid: "",
        options: {},
        uid: "",
        gsid: "",
        requestFlowCount: 0
    },
    onLoad: (e = o(s.default.mark(function a(t) {
        var e;
        return s.default.wrap(function(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                if (this.jsData.share_type = t.is_share || "", this.jsData.page_from = t.page_from, 
                this.jsData.deeplink_docid = t.deeplink_docid || "", this.jsData.options = JSON.stringify(t || {}), 
                a.t0 = this.jsData.uid || wx.getStorageSync("uid") || wx.getStorageSync("vid"), 
                a.t0) {
                    a.next = 9;
                    break;
                }
                return a.next = 8, n.userManager.vuidLogin();

              case 8:
                a.t0 = a.sent;

              case 9:
                this.jsData.uid = a.t0, this.jsData.gsid = this.jsData.gsid || wx.getStorageSync("gsid"), 
                e = "";
                try {
                    e = decodeURIComponent(t.q || "");
                } catch (a) {
                    a = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(a);
                    e = h.decodeSearchKey(t.q || "");
                }
                this.setData({
                    showGuide: !1,
                    query: e,
                    isShare: "search" === this.jsData.share_type ? "search" : 1 == this.jsData.share_type ? "app" : "",
                    is_share: 1 == this.jsData.share_type ? "app" : this.jsData.share_type
                }), g.globalData.is_first_card7 = !0, g.globalData.is_first_card9 = !0, this.getSearchAllData(), 
                this.initHotTips();

              case 18:
              case "end":
                return a.stop();
            }
        }, a, this);
    })), function(a) {
        return e.apply(this, arguments);
    }),
    onReady: function() {},
    onShow: function() {},
    onHide: function() {
        this.jsData.timeInterval && (clearTimeout(this.jsData.timeInterval), this.jsData.timeInterval = null);
    },
    onUnload: function() {
        this.setData({
            currentIndex: 0,
            cardsData: [],
            headData: {},
            animation: null
        }), this.jsData.page = 1, this.timeInterval = null;
    },
    onShareAppMessage: function(a) {
        return "menu" === a.from || "footBar" === a.target.dataset.from ? {
            title: h.decodeSearchKey(this.data.query),
            imageUrl: this.data.topicShareImagePath || "https://h5.sinaimg.cn/upload/2016/07/29/557/link.png",
            path: "pages/comprehensiveSearch/index?q=" + h.decodeSearchKey(this.data.query) + "&is_share=search&page_from=" + this.jsData.page_from
        } : {
            title: a.target.dataset.text,
            path: "pages/components/detailWeibo/index?id=" + a.target.dataset.id + "&q=" + this.data.query + "&is_share=detail&page_from=" + this.jsData.page_from,
            imageUrl: a.target.dataset.picture || "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/image_share_homepage.png"
        };
    },
    onShareTimeline: function() {
        return {
            title: h.decodeSearchKey(this.data.query),
            query: "q=".concat(h.decodeSearchKey(this.data.query), "&is_share=search&page_from=").concat(this.jsData.page_from)
        };
    },
    showAddGuide: function(a) {
        this.setData({
            showGuide: a.detail.show
        });
    },
    searchQuery: function(a) {
        var t = "";
        if (a.currentTarget && "hot-tip" === a.currentTarget.dataset.type) this.jsData.page_from = "hot_guide", 
        this.data.hotListData[this.jsData.currentHotTipIndex] && (t = h.parseSchemeByKey(this.data.hotListData[this.jsData.currentHotTipIndex].scheme, "q")); else {
            this.jsData.page_from = "active_search";
            try {
                t = decodeURIComponent(a.detail.query);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                t = h.decodeSearchKey(a.detail.query);
            }
        }
        var e = {
            query: t
        };
        t && (g.judgeIsTopic(e.query) && (e.query = "#".concat(e.query.replace(/#/g, ""), "#")), 
        this.resetData(e.query), this.getSearchAllData(), this.initHotTips());
    },
    cardClick: function(a) {
        var t = a.detail.scheme;
        if (t) {
            var e = t.split("?"), i = e[1], r = "";
            if (/cardlist/.test(e[0])) r = "/pages/moreList/index?" + i, wx.navigateTo({
                url: r,
                fail: function(a) {
                    a.errMsg && a.errMsg.indexOf("limit exceed") > -1 && wx.redirectTo({
                        url: r,
                        fail: function() {}
                    });
                }
            }); else if (/pageinfo/.test(e[0])) i.indexOf("filter_type%3Dmoderngoods") > -1 && (r = "/pages/goods/index", 
            wx.reLaunch({
                url: r,
                fail: function() {}
            })); else if (/searchall/.test(e[0])) {
                var s = h.parseSchemeByKey(i, "q");
                r = "/pages/comprehensiveSearch/index?q=" + s + "&page_from=" + this.jsData.page_from, 
                wx.navigateTo({
                    url: r,
                    fail: function(a) {
                        a.errMsg && a.errMsg.indexOf("limit exceed") > -1 && wx.redirectTo({
                            url: r,
                            fail: function() {}
                        });
                    }
                });
            }
        }
    },
    fullScreenChange: function(a) {
        var t = this;
        this.jsData.ignoreScroll || wx.pageScrollTo({
            scrollTop: t.jsData.pageScrollTop,
            duration: 0
        }), setTimeout(function() {
            t.setData({
                scrollToTop: t.jsData.scrollTop
            }, function() {
                t.jsData.ignoreScroll = a.detail.ignore;
            });
        }, 100);
    },
    resetData: function(a) {
        this.jsData.page = 1, this.jsData.is_first = !0, this.jsData.isReachBottom = !1, 
        this.jsData.is_tab_change = !1, wx.pageScrollTo({
            duration: 0,
            scrollTop: 0
        }), this.setData({
            type: this.data.channelList[0] && this.data.channelList[0].id,
            currentIndex: 0,
            scrollToTop: 0,
            query: a,
            cardsData: [],
            headData: [],
            topicShareImagePath: "",
            animation: null,
            showHotTips: !1
        }), g.globalData.is_first_card7 = !0, g.globalData.is_first_card9 = !0;
    },
    initHotTips: function() {
        wx.getStorageSync("profile_image");
        var a = this;
        wx.getStorage({
            key: "showHotTips",
            complete: function(t) {
                t.data && (a.jsData.timeInterval && (clearTimeout(a.jsData.timeInterval), a.jsData.timeInterval = null), 
                a.jsData.timeInterval = setTimeout(function() {
                    a.setData({
                        showHotTips: !0
                    }), a.getHotFlow();
                }, 5e3));
            }
        });
    },
    getContainerItem: function(a, t) {
        var e = this;
        l.get("container/get_item?gsid=_2A25z000IDeRxGeBM41IY9CrLwz6IHXVuycfArDV6PUJbkdAKLVL-kWpNRKimRAghRkg1cLmBmncZ3SMFLQXD72B_&sensors_mark=0&wm=3333_2001&launchid=10000365--x&sensors_is_first_day=false&from=10A4093010&b=0&c=iphone&networktype=wifi&skin=default&v_p=82&s=2de81da4&v_f=1&sensors_device_id=B446EA8E-3E01-4563-96DE-7DFB4C1EE195&lang=zh_CN&sflag=1&ua=iPhone12,1__weibo__10.4.0__iphone__os13.5&ft=1&aid=01AxKHEBPKf7Jx_eueQjzCDX9fUZ5ayUezQ_Ul00DSVVkM4BM.&uicode=10000003&featurecode=10000085&luicode=10000010&extparam=c_type%3D30%26pos%3D0%26mi_cid%3D100103%26source%3Dranklist%26flag%3D1%26filter_type%3Drealtimehot%26cate%3D0%26display_time%3D1591167189&fid=100103type%3D1%26q%3D%23Uzi%E9%80%80%E5%BD%B9%23%26t%3D4&lfid=231619", {
            itemid: a
        }).then(function(a) {
            e.data.cards[t] = a.data, e.setData({
                cards: e.data.cards
            });
        });
    },
    getSearchAllData: function() {
        var a = this;
        if (!this.jsData.isReachBottom) {
            this.jsData.isLoadingData = !0;
            var t = "ios" === g.globalData.platform ? "98BB093010" : "98BB095010";
            l.get("index", {
                api_sid: "mi_mi",
                page: this.jsData.page,
                fid: "100103type=".concat(this.data.type, "&q=").concat(this.data.query),
                containerid: "100103type=".concat(this.data.type, "&q=").concat(this.data.query),
                from: t,
                uid: "2222222222",
                c: "search_weixinminiprogram",
                count: 10,
                open_searchall_164card: 1,
                deeplink_docid: this.jsData.deeplink_docid
            }).then(function(t) {
                var e, s;
                if (1 === a.jsData.page && (Array.isArray(t.data) && !t.data.length || !t.data.cards.length || t.data.cards && 1 === t.data.cards.length && !t.data.cards[0].card_group)) return a.setData((r(s = {}, "cardsData[".concat(a.data.currentIndex, "]"), []), 
                r(s, "swiper_height", 400), r(s, "refresh", !1), r(s, "refreshed", !1), r(s, "refreshText", ""), 
                s)), a.jsData.refreshEnable = !0, a.jsData.isLoadingData = !1, void (a.jsData.isReachBottom = !0);
                var o = {}, n = [];
                a.jsData.is_first && (a.jsData.is_first = !1, g.judgeIsTopic(a.data.query) ? t.data.cardlistInfo.cardlist_head_cards[1] ? (t.data.cardlistInfo.cardlist_head_cards[0] && ((o = t.data.cardlistInfo.cardlist_head_cards[0].head_data).portrait_url = o.portrait_url.replace("large", "thumbnail"), 
                o.midtext = o.midtext ? o.midtext.replace("详情>", "") : {}), t.data.cardlistInfo.cardlist_head_cards[1].channel_list instanceof Array && t.data.cardlistInfo.cardlist_head_cards[1].channel_list.forEach(function(a) {
                    "视频" === a.name && (n[1] = a), "视频" !== a.name && "文章" !== a.name && "同城" !== a.name && "问答" !== a.name && "商品" !== a.name && n.push(a);
                })) : t.data.cardlistInfo.cardlist_head_cards[0].channel_list instanceof Array && t.data.cardlistInfo.cardlist_head_cards[0].channel_list.forEach(function(a) {
                    "视频" === a.name && (n[1] = a), "视频" !== a.name && "文章" !== a.name && "同城" !== a.name && "问答" !== a.name && "商品" !== a.name && n.push(a);
                }) : t.data.cardlistInfo.cardlist_head_cards[0].channel_list instanceof Array && t.data.cardlistInfo.cardlist_head_cards[0].channel_list.forEach(function(a) {
                    "视频" === a.name && (n[1] = a), "视频" !== a.name && "同城" !== a.name && "问答" !== a.name && "商品" !== a.name && n.push(a);
                }), a.setData({
                    channelList: n,
                    headData: o,
                    isCustom: !!o.scheme
                }, function() {
                    a.drawTopicGaussBlur(a, a.data.canvasId, a.data.canvasWidth, a.data.canvasHeight).then(function(t) {
                        a.setData({
                            imagePath: t
                        });
                    }), a.drawTopicShare();
                }));
                var c = [];
                if (a.jsData.is_tab_change) c = t.data.cards, a.jsData.is_tab_change = !1; else if (t.data.cards) {
                    if (!t.data.cards.length) return a.jsData.refreshEnable = !0, a.jsData.isReachBottom = !0, 
                    a.jsData.isLoadingData = !1, void wx.showToast({
                        title: "没有更多数据了~"
                    });
                    c = i(t.data.cards);
                }
                c && c[0] && 7 === c[0].card_type && (a.jsData.cardDesc = c[0], c.splice(0, 1));
                var d = a.dealCardData(c);
                a.jsData.allCardsData[a.data.currentIndex] || (a.jsData.allCardsData[a.data.currentIndex] = []), 
                a.jsData.allCardsData[a.data.currentIndex][a.jsData.page - 1] = d, g.globalData.netWorkError = !1, 
                a.setData((r(e = {}, "cardsData[".concat(a.data.currentIndex, "][").concat(a.jsData.page - 1, "]"), d || []), 
                r(e, "cardDesc", a.jsData.cardDesc), r(e, "netWorkError", g.globalData.netWorkError), 
                e), function() {
                    a.getDomHeight();
                }), a.jsData.isPullDown && (a.jsData.isPullDown = !1, a.setData({
                    refresh: !1,
                    refreshed: !0,
                    refreshText: "刷新成功"
                }, setTimeout(function() {
                    a.setData({
                        refreshed: !1
                    });
                }, 1e3))), a.jsData.refreshEnable = !0, p.track({
                    q: a.data.query,
                    page_type: 2010,
                    page: a.jsData.page,
                    module: p.getModule(t.data.cards),
                    ext: {
                        name: p.logMap(2010),
                        search_type: a.data.type,
                        share_type: a.jsData.share_type,
                        page_from: a.jsData.page_from,
                        deeplink_docid: a.jsData.deeplink_docid,
                        options: a.jsData.options
                    }
                });
            }).catch(function(t) {
                a.setData({
                    refresh: !1,
                    refreshed: !1,
                    refreshText: "",
                    netWorkError: g.globalData.netWorkError
                }), a.jsData.isLoadingData = !1, a.jsData.refreshEnable = !0;
            });
        }
    },
    switchTap: function(a) {
        var t = this;
        this.setData({
            type: a.detail.id,
            currentIndex: a.detail.index,
            scrollX: a.detail.scrollX,
            scrollToTop: 0
        }, function() {
            t.jsData.is_tab_change = !0, t.jsData.isReachBottom = !1, t.jsData.isLoadingData = !1, 
            t.jsData.page = 1, t.data.cardsData[a.detail.index] ? t.getDomHeight() : t.getSearchAllData();
        });
    },
    bindChange: function(a) {
        var t = .9 * g.globalData.windowWidth / 6, e = this.data.channelList && this.data.channelList.length, i = t * a.detail.current - 2 * t, r = (e + 1) * t;
        i < 0 ? i = 0 : i >= r && (i = r), this.setData({
            currentIndex: a.detail.current,
            scrollX: i
        });
    },
    beforeSwitchTab: function(a) {
        var t = this;
        "touch" === a.detail.source && this.setData({
            type: this.data.channelList[a.detail.current].id,
            currentIndex: a.detail.current,
            scrollToTop: 0
        }, function() {
            t.bindChange(a), t.jsData.page = 1, t.jsData.isReachBottom = !1, t.jsData.isLoadingData = !1, 
            t.jsData.is_tab_change = !0, t.data.cardsData[a.detail.current] ? t.getDomHeight() : t.getSearchAllData();
        });
    },
    reachBottomHandler: function(a) {
        this.jsData.isLoadingData || (this.jsData.page = this.jsData.page + 1, this.data.cardsData[this.data.currentIndex][this.jsData.page - 1] ? this.getDomHeight() : this.getSearchAllData());
    },
    getDomHeight: function() {
        var a = this;
        wx.createSelectorQuery().select("#card-view-".concat(this.data.currentIndex)).boundingClientRect(function(t) {
            a.setData({
                swiper_height: t ? t.height + 16 : 400
            }, function() {
                a.jsData.isLoadingData = !1;
            });
        }).exec();
    },
    touchStart: function(a) {
        this.jsData.start_pageY = a.changedTouches[0] && a.changedTouches[0].pageY;
    },
    touchEnd: function(a) {
        var t = this, e = a.changedTouches[0] && a.changedTouches[0].pageY;
        this.jsData.refreshEnable && this.jsData.scrollTop <= 0 && e - this.jsData.start_pageY > 120 && (this.jsData.refreshEnable = !1, 
        this.jsData.isPullDown = !0, this.setData({
            refresh: !0,
            refreshed: !0
        }, function() {
            t.refreshData();
        }));
    },
    refreshData: function() {
        this.jsData.isReachBottom = !1, this.jsData.page = 1, this.getSearchAllData();
    },
    scrollHandler: function(a) {
        this.jsData.scrollTop = a.detail.scrollTop, this.data.headData.scheme && (this.jsData.scrollTop > 10 && this.data.isCustom ? this.setData({
            isCustom: !1
        }) : this.jsData.scrollTop <= 10 && !this.data.isCustom && this.setData({
            isCustom: !0
        }));
    },
    dealCardData: function(a) {
        for (var t = {
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
        }, e = [], i = 0; i < (a && a.length); i++) {
            if (a[i].actionlog && (a[i].actionlog = ""), "law_sensitive" !== a[i].itemid && "empty_result" !== a[i].itemid || (this.jsData.isReachBottom = !0), 
            a[i].card_group) if (Array.isArray(a[i].card_group)) for (var r = 0; r < a[i].card_group.length; r++) 42 != a[i].card_group[r].card_type || "热门文章" != a[i].card_group[r].desc ? 8 == a[i].card_group[r].card_type && a[i].card_group[r].openurl ? a[i].card_group = [] : a[i].card_group[r].mblog && this.dealText(a[i].card_group[r].mblog) : a[i].card_group = []; else for (var s in a[i].card_group) a[i].card_group[s].mblog && this.dealText(a[i].card_group[s].mblog);
            if (a[i].mblog) {
                var o = a[i].mblog, n = {};
                for (var c in t) if (void 0 !== o[c]) if ("url_objects" === c && o.url_objects) {
                    n.url_objects = [];
                    for (var d = 0; d < o.url_objects.length; d++) {
                        var l = o.url_objects[d];
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
                } : n[c] = a[i].mblog[c];
                a[i].mblog = n, this.dealText(a[i].mblog);
            }
            e.push(a[i]);
        }
        return e;
    },
    dealText: function(a) {
        var t = u.parseStatus(a, !1, !1);
        if (a.parseText = t ? t.cardContentList : [], a.retweeted_status) {
            var e = u.parseStatus(a.retweeted_status, !0, !1);
            a.retweeted_status.retParseText = e ? e.cardContentList : [];
        }
    },
    drawTopicShare: function() {
        var a = this;
        (0, c.default)(this, this.data.topicShareCvsId, this.data.topicShareCvsWidth, this.data.topicShareCvsHeight, {
            topic: this.data.headData.title,
            pic: this.data.headData.portrait_url,
            descArr: [ this.data.headData.midtext ]
        }).then(function(t) {
            a.setData({
                topicShareImagePath: t
            });
        }).catch(function(a) {});
    },
    closeHotTips: function(a) {
        var t = this;
        a && wx.removeStorage({
            key: "showHotTips"
        });
        var e = wx.createAnimation({
            duration: 500
        });
        e.translateY("100%").opacity(0).step(), this.setData({
            animation: e.export()
        }), setTimeout(function() {
            t.setData({
                showHotTips: !1
            });
        }, 500);
    },
    hotTipSwiperChange: function(a) {
        this.jsData.currentHotTipIndex = a.detail.current;
    },
    getHotFlow: function() {
        var a = this;
        if (this.jsData.requestFlowCount = this.jsData.requestFlowCount + 1, !(this.jsData.requestFlowCount > 3)) {
            var t = {
                api_sid: "datopic_fashionfeed",
                raw_json: '{"uid":"'.concat(this.jsData.uid, '","seq_id":"').concat(h.uuid(), '","city_id":"8008611000000000000","page":1,"scenes":"1","device":"t_wap_ios","trace":"1","source":"HOTSEARCH_REDIRECT"}')
            };
            l.get("index", t, !1).then(function(t) {
                if ("SUCCESS" === t.data.error_code) if (t.data.statuses && t.data.statuses.length) {
                    var e = a.dealCardData(t.data.statuses), i = 0, r = [];
                    if ((e = (e = a.isOnlyText(e, !0)).filter(function(a) {
                        return !a.isText;
                    })).length < 5) return void a.getHotFlow();
                    for (;i < 5; ) r.push({
                        mid: e[i].mblog.mid,
                        text: e[i].mblog.text,
                        image: e[i].image,
                        source: e[i]
                    }), i++;
                    console.log("kandianlist", r);
                    var s = wx.createAnimation({
                        duration: 500
                    });
                    s.translateY(0).opacity(1).step(), a.setData({
                        kandianDataList: r,
                        showHotTips: !0,
                        animation: s.export()
                    }), a.jsData.timeInterval = setTimeout(function() {
                        a.jsData.timeInterval && (clearTimeout(a.jsData.timeInterval), a.jsData.timeInterval = null), 
                        a.closeHotTips();
                    }, 6e4);
                } else a.getHotFlow(); else a.getHotFlow();
            }).catch(function(t) {
                a.closeHotTips();
            });
        }
    },
    goToWeiboKandian: function() {
        var a = this.data.kandianDataList[this.jsData.currentHotTipIndex];
        wx.reportAnalytics("click_swiper_go_hotflow", {}), wx.navigateToMiniProgram({
            appId: "wx993d81bc0fa75897",
            path: "/pages/hotflow/index?shared_material=".concat(encodeURIComponent(JSON.stringify({
                id: a.mid,
                mark: a.source.material.mark,
                hotboard_list: a.source.material.hotboard_list
            }))),
            extraData: {},
            success: function() {
                wx.reportAnalytics("click_swiper_go_hotflow_success", {});
            },
            fail: function() {}
        });
    },
    isOnlyText: function(a) {
        return a.map(function(a, e) {
            var i = !0, r = "text", s = "", o = a.mblog;
            if (o) if (o.pic_ids.length) i = !1, s = "https://wx3.sinaimg.cn/orj960/" + o.pic_ids[0] + ".jpg", 
            r = "image"; else if (o.url_objects && o.url_objects.length) for (var n = 0; n < o.url_objects.length; n++) {
                var c = o.url_objects[n];
                if (c.object && [ "video" ].includes(c.object.object_type)) {
                    i = !1, r = "video", c.object.object.image.url && (s = c.object.object.image.url);
                    break;
                }
            }
            return t(t({}, a), {}, {
                isText: i,
                image: s,
                blogType: r
            });
        });
    },
    drawTopicGaussBlur: function(a, t, e, i) {
        var r = this;
        return new Promise(function(s, o) {
            var n = r.data.headData.background_url ? r.data.headData.background_url : r.data.headData.portrait_url, c = wx.createCanvasContext(t, a);
            (0, d.preloadImage)(n).then(function(r) {
                var n = r, l = (0, d.clipImage)(e, i, n.width, n.height);
                c.drawImage(n.path, l.left, l.top, l.width, l.height, 0, 0, e, i), c.draw(!1, function() {
                    (0, d.gaussBlur)(a, t, 0, 0, e, i).then(function() {
                        c.restore(), c.draw(!0, function() {
                            wx.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: e,
                                height: i,
                                destWidth: e * g.globalData.pixelRatio,
                                destHeight: i * g.globalData.pixelRatio,
                                canvasId: t,
                                quality: 1,
                                success: function(a) {
                                    var t = a && a.tempFilePath || "";
                                    s(t);
                                },
                                fail: function(a) {
                                    o(a);
                                }
                            }, a);
                        });
                    }).catch(function(a) {
                        o(a);
                    });
                });
            }).catch(function(a) {
                o(a);
            });
        });
    }
});