function data() {
                    return {
                        inputKey: "",
                        backTopShow: !1,
                        menuTipShow: !1,
                        activityShow: !1,
                        reportList: [],
                        reportListNoData: !1,
                        reportCanLoadNext: !0,
                        reportLoading: !1,
                        radarCompanyCount: 0,
                        radarPersonCount: 0,
                        surplusCompanyCount: 0,
                        surplusPersonCount: 0,
                        RiskDimension: 60,
                        bannerList: [],
                        vipPop: !1,
                        vipTip: "监控日报",
                        tabIndex: "0",
                        newsFlashCanLoadNext: !0,
                        newsFlashLoading: !1,
                        tabTop: 200,
                        inputTop: 100,
                        scrollDate: "",
                        newsFlashListNew: [],
                        newsFlashList: [],
                        publishDateList: [],
                        fixArr: [],
                        tapScrollTop: {
                            0: 0,
                            1: 0
                        },
                        refresh: !1,
                        refreshCount: 0,
                        firstRankIndex: 1,
                        topDateList: [],
                        dateList: [],
                        detail: "",
                        sharePopupShow: !1,
                        btnDataImage: "",
                        tabShow: !1,
                        inputShow: !1,
                        applets: [],
                        flashReport: null,
                        dateFixedTagShow: !1,
                        recommendList: [],
                        monitorShow: !1,
                        monitorShowTextA: "",
                        monitorShowTextB: "",
                        showLawPop: !1,
                        isInit: !1
                    };
}
function newsFlashShare() {
                        Promise.all([ n.e("common/vendor"), n.e("components/news-flash-share/index") ]).then(function() {
                            return resolve(n("5ef2"));
                        }.bind(null, n)).catch(n.oe);
}
function appVipPop() {
                        Promise.all([ n.e("common/vendor"), n.e("components/app-vip-pop/index") ]).then(function() {
                            return resolve(n("f446"));
                        }.bind(null, n)).catch(n.oe);
}
function appBottomLoading() {
                        n.e("components/app-bottom-loading/index").then(function() {
                            return resolve(n("c761"));
                        }.bind(null, n)).catch(n.oe);
}
function appNoData() {
                        n.e("components/app-no-data/index").then(function() {
                            return resolve(n("cc7b"));
                        }.bind(null, n)).catch(n.oe);
}
function appAutoLogo() {
                        n.e("components/app-auto-logo/index").then(function() {
                            return resolve(n("28fe"));
                        }.bind(null, n)).catch(n.oe);
}
function appMonitorPop() {
                        n.e("components/app-monitor-pop/index").then(function() {
                            return resolve(n("d791"));
                        }.bind(null, n)).catch(n.oe);
}
function onLoad(t) {
                    this.getNewsFlashStorage();
}
function token() {
                        return this.$store.state.userInfo.token || "";
}
function platform() {
                        return this.$store.state.systemInfo.platform;
}
function isLogin() {
                        return this.$store.state.userInfo.isLogin || !1;
}
function isSVIP() {
                        return this.$store.state.userInfo.userInfo.isSVIP || !1;
}
function isVIP() {
                        return this.$store.state.userInfo.userInfo.isVIP || !1;
}
function isIPhone() {
                        return this.$store.state.systemInfo.isIPhone || !1;
}
function phone() {
                        return this.$store.state.userInfo.userInfo.phone || "";
}
function screenWidth() {
                        return this.$store.state.systemInfo.systemInfo.windowWidth || 375;
}
function hasCode() {
                        return this.$store.state.userInfo.hasCode;
}
function reviewStatus() {
                        return "mp-360" === this.$store.state.systemInfo.platform ? 2 : this.$store.state.systemInfo.reviewStatus;
}
function app() {
                        return this.$store.state.systemInfo.systemInfo.app || "";
}
function meBannerStatus() {
                        return this.$store.state.systemInfo.meBannerStatus;
}
function iosVipStatus() {
                        return this.$store.state.systemInfo.iosVipStatus;
}
function bannerShow() {
                        return !(1 !== this.meBannerStatus && this.isIPhone || "mp-toutiao" === this.platform || this.platform.includes("mp-feishu"));
}
function token() {
                        this.isInit = !1, this.init(), (0, r.track)("corepage_exposure", {
                            "page_name|页面名称": "首页",
                            "page_detail|页面详情": ""
                        });
}
function reviewStatus() {
                        1 === this.reviewStatus ? this.tabIndex = "1" : this.tabIndex = "0";
}
function onShow() {
                    this.hasCode ? (this.inputKey && (this.inputKey = ""), this.token && (t.getStorageSync("monitor") && (this.isInit = !1), 
                    t.removeStorageSync("monitor"), this.init())) : this.getToken().then(function() {}).catch(function() {});
}
function onReachBottom() {
                    "0" === this.tabIndex ? this.newsFlashCanLoadNext && this.getNewsflash() : "1" === this.tabIndex && this.reportCanLoadNext && this.getReportList();
}
function onPullDownRefresh() {
                    "0" === this.tabIndex ? (this.newsFlashCanLoadNext = !0, this.getNewsflash(!0), 
                    (0, r.track)("homecontent_button_click", {
                        "button_name|按钮名称": "商业快讯_下拉刷新页面"
                    })) : (this.reportList = [], this.reportListNoData = !1, this.reportCanLoadNext = !0, 
                    this.reportListScrollTop = 0, this.getReportList()), setTimeout(function() {
                        t.stopPullDownRefresh();
                    }, 200);
}
function onShareAppMessage(t) {
                    var e, n, i;
                    return "button" === t.from ? (this.hideSharePopup(), e = "/company-news/news-flash-detail/index?id=" + this.detail.id + "&feed_id=" + this.detail.feed_id, 
                    n = "", i = this.btnDataImage, (0, r.track)("homecontent_button_click", {
                        "button_name|按钮名称": "商业快讯_分享"
                    })) : (e = "/pages/home/index?source=wechat", n = "推荐你一款专业的企业查询工具，商务精英都在用！", i = "https://eciapp-img.qichacha.com/community/5a607122-4a54-4992-9ebb-5e746cffcca51627524003777.png"), 
                    {
                        title: n,
                        path: e,
                        PCPath: "",
                        imageUrl: i
                    };
}
function onTabItemTap() {}
function onPageScroll(t) {
                    this.setScrollTop(t);
}
function init() {
                        var e = this;
                        this.isInit || (1 === this.reviewStatus ? this.tabIndex = "1" : this.tabIndex = "0", 
                        this.isInit = !0, this.getNewsflash(!0), Promise.all([ this.getApplets(), this.getBannerList() ]).then(function(n) {
                            var a, o, s = p(n, 2), u = s[0], l = s[1];
                            if ((null == u || null === (a = u.result) || void 0 === a || null === (o = a.applets) || void 0 === o ? void 0 : o.length) && (e.applets = u.result.applets), 
                            200 === l.status) {
                                if (e.isSVIP) {
                                    var c = l.result.find(function(t) {
                                        return t.dest && t.dest.indexOf("me-subpackages/vip-buy/index") > -1;
                                    });
                                    c && c.dest && (l.result = l.result.filter(function(t) {
                                        return t.dest && -1 === t.dest.indexOf("me-subpackages/vip-buy/index");
                                    }));
                                    var h = l.result.find(function(t) {
                                        return t.dest && t.dest.indexOf("ad/vip-card-gift/index/index") > -1;
                                    });
                                    h && h.dest && (0, r.track)("homebanner_show_id001", {
                                        "button_name|按钮名称": "banner曝光"
                                    });
                                }
                                e.bannerList = [], setTimeout(function() {
                                    e.bannerList = l.result || [];
                                }, 200);
                            }
                            setTimeout(function() {
                                e.$nextTick(function() {
                                    t.createSelectorQuery().select("#home-tab").boundingClientRect(function(t) {
                                        t && t.top && (e.tabTop = t.top - i.default.rpxToPx(e.screenWidth, 88), e.inputTop > e.tabTop && (e.tabTop = e.inputTop));
                                    }).exec();
                                });
                            }, 200);
                        }).catch(function() {}), this.$nextTick(function() {
                            t.createSelectorQuery().select(".small-input-container").boundingClientRect(function(t) {
                                t && t.bottom && (e.inputTop = t.bottom);
                            }).exec();
                        }), t.getStorage({
                            key: "menuTipData",
                            success: function() {},
                            fail: function() {
                                e.menuTipShow = !0, t.setStorage({
                                    key: "menuTipData",
                                    data: "true"
                                }), setTimeout(function() {
                                    e.menuTipShow = !1;
                                }, 3e3);
                            }
                        }), this.getReportList(!0));
}
function getApplets() {
                        return new Promise(function(t, e) {
                            (0, s.getApplets)().then(t).catch(e);
                        });
}
function getBannerList() {
                        return new Promise(function(t, e) {
                            (0, s.getBannerList)().then(t).catch(e);
                        });
}
function toReportDetail() {
                        t.navigateTo({
                            url: "/company-news/report/morning/index?id=" + this.flashReport.id + "&type=" + this.flashReport.type
                        }), (0, r.track)("homecontent_button_click", {
                            "button_name|按钮名称": 3 === this.flashReport.type ? "早报" : "晚报"
                        });
}
function showShareMenu(t) {}
function showSharePopup(e) {
                        var n = this, i = function() {
                            n.sharePopupShow || (n.detail = n.newsFlashListNew[e.currentTarget.dataset.index], 
                            n.sharePopupShow = !0);
                        };
                        t.hideTabBar ? t.hideTabBar({
                            complete: function() {
                                setTimeout(function() {
                                    i();
                                }, 200);
                            }
                        }) : i();
}
function toApplets(e) {
                        var n, i = Number(e.currentTarget.dataset.index);
                        if (null === (n = this.applets[i]) || void 0 === n ? void 0 : n.mpUrl) {
                            var a = this.applets[i].mpUrl;
                            "/pages/monitor/index" === a ? t.switchTab({
                                url: a
                            }) : "/pages/search/person/index" === a ? t.navigateTo({
                                url: "/pages/search/index/index?index=1"
                            }) : t.navigateTo({
                                url: a
                            });
                        }
                        (0, r.track)("homeservice_click", {
                            "service_name|服务名称": this.applets[i].title
                        });
}
function cleverMonitor() {
                        var t = this;
                        (0, s.CleverMonitor)().then(function(e) {
                            e.result && (t.recommendList = e.result.slice(0, 3));
                        }).catch(function() {});
}
function getNewsFlashStorage() {
                        var e = t.getStorageSync("newsFlashList");
                        e && e.length && (this.newsFlashList = e), this.newsFlashListNew = this.filterData(!0, this.newsFlashList);
}
function hideSharePopup(e) {
                        var n = this, i = function() {
                            n.sharePopupShow && (n.sharePopupShow = !1);
                        };
                        t.showTabBar ? t.showTabBar({
                            complete: function() {
                                i();
                            }
                        }) : i();
}
function setBtnDataImage(t) {
                        t && (this.btnDataImage = t);
}
function changeLineFeed(t) {
                        var e = t.currentTarget.dataset, n = e.linefeed, i = e.index, a = this.newsFlashListNew;
                        a[i].isLineFeed = !n, this.newsFlashListNew = a, this.getFixTop();
}
function toDetail(e) {
                        var n = e.currentTarget.dataset, i = n.id, a = n.name, o = n.feedid;
                        t.navigateTo({
                            url: "/company-news/news-flash-detail/index?id=" + i + "&name=" + encodeURIComponent(a) + "&feed_id=" + o
                        }), (0, r.track)("home_content_click", {
                            "page_name|页面名称": "商业快讯"
                        });
}
function getFixTop(e) {
                        var n = this, i = [];
                        if (this.dateList.length || this.topDateList.length) {
                            var a = [].concat(h(this.dateList), h(this.topDateList));
                            a.forEach(function(o, r) {
                                t.createSelectorQuery().select("#" + o.titlePublish).boundingClientRect(function(t) {
                                    t && t.top && (e ? i.push({
                                        top: t.top + e,
                                        key: o.PublishShow,
                                        isTop: o.isTop
                                    }) : i.push({
                                        top: t.top,
                                        key: o.PublishShow,
                                        isTop: o.isTop
                                    })), r === a.length - 1 && i && i.length && n.fixArr.length !== i.length && (n.fixArr = i.sort(function(t, e) {
                                        return t.top - e.top;
                                    }));
                                }).exec();
                            });
                        }
}
function setScrollTop(e) {
                        var n = this;
                        this.scrollTop = e.scrollTop, this.fixArr.length && (this.fixArr.forEach(function(t, a) {
                            e.scrollTop > t.top - i.default.rpxToPx(n.screenWidth, 168) && (n.scrollDate = t.key);
                        }), this.getFixTop(e.scrollTop)), this.inputTop <= e.scrollTop ? this.inputShow || (this.inputShow = !0, 
                        t.setNavigationBarColor && t.setNavigationBarColor({
                            frontColor: "#ffffff",
                            backgroundColor: "#128bed",
                            animation: {
                                duration: 400,
                                timingFunc: "easeIn"
                            }
                        })) : this.inputShow && (this.inputShow = !1, t.setNavigationBarColor && t.setNavigationBarColor({
                            frontColor: "#ffffff",
                            backgroundColor: "#3049BD",
                            animation: {
                                duration: 400,
                                timingFunc: "easeIn"
                            }
                        })), this.tabShow = this.tabTop <= e.scrollTop, this.dateFixedTagShow = this.flashReport ? this.tabTop + i.default.rpxToPx(this.screenWidth, 326) <= e.scrollTop : this.tabShow;
}
function filterData(t, e) {
                        var n = e.map(function(t) {
                            return {
                                top: t.top,
                                id: t.id,
                                feed_id: t.feed_id,
                                publishTime: t.publishTime,
                                publishDate: t.publishDate,
                                IsFavor: t.IsFavor,
                                tag: t.tag,
                                entityList: t.entityList,
                                publish_time: t.publish_time,
                                rankIndex: t.rankIndex,
                                content: t.content,
                                isLineFeed: t.isLineFeed,
                                title: t.title
                            };
                        }), i = n.filter(function(t) {
                            return t.top;
                        }), a = n.filter(function(t) {
                            return !t.top;
                        });
                        a.length && (this.firstRankIndex = a[0].rankIndex);
                        for (var o = [], r = [], s = a.length - 1; s >= 0; s--) {
                            var u = a[s].publishDate;
                            a[s].top || delete a[s].top, s > 0 ? a[s].publishDate !== a[s - 1].publishDate && o.push({
                                isTop: !1,
                                titlePublish: "s" + u,
                                PublishShow: u.substring(0, 4) + "年" + u.substring(5, 7) + "月" + u.substring(8, 10) + "日",
                                publishTime: "24:00",
                                index: s
                            }) : o.push({
                                isTop: !1,
                                titlePublish: "s" + u,
                                PublishShow: u.substring(0, 4) + "年" + u.substring(5, 7) + "月" + u.substring(8, 10) + "日",
                                publishTime: "24:00",
                                index: s
                            });
                        }
                        for (var l = i.length - 1; l >= 0; l--) {
                            var c = i[l].publishDate;
                            l > 0 ? i[l].publishDate !== i[l - 1].publishDate && r.push({
                                isTop: !0,
                                titlePublish: "t" + c,
                                PublishShow: c.substring(0, 4) + "年" + c.substring(5, 7) + "月" + c.substring(8, 10) + "日",
                                publishTime: "24:00",
                                index: l
                            }) : r.push({
                                isTop: !0,
                                titlePublish: "t" + c,
                                PublishShow: c.substring(0, 4) + "年" + c.substring(5, 7) + "月" + c.substring(8, 10) + "日",
                                publishTime: "24:00",
                                index: l
                            });
                        }
                        return this.topDateList = r, this.dateList = o, r.forEach(function(t, e) {
                            i.splice(t.index, 0, t);
                        }), o.forEach(function(t, e) {
                            a.splice(t.index, 0, t);
                        }), [].concat(h(i), h(a));
}
function getNewsflash(e) {
                        var n = this, a = {};
                        this.newsFlashLoading = !0, e ? this.newsFlashList.length && (a.firstRankIndex = this.firstRankIndex) : this.newsFlashList.length && this.newsFlashList[this.newsFlashList.length - 1].rankIndex ? a.lastRankIndex = this.newsFlashList[this.newsFlashList.length - 1].rankIndex : a.firstRankIndex = 1, 
                        this.$request({
                            url: "/v1/threads/getNewsFlash",
                            method: "GET",
                            data: a
                        }).then(function(o) {
                            if (t.stopPullDownRefresh(), o && 200 === o.status) {
                                if (n.newsFlashLoading = !1, e ? (n.flashReport = o.flashReport, o.result && (n.newsFlashList = o.result.map(function(t) {
                                    return {
                                        top: t.tag && t.tag.length && t.tag.includes("TOP"),
                                        id: t.news_id,
                                        feed_id: t.feed_id,
                                        publishTime: t.publishTime,
                                        publishDate: t.publishDate,
                                        IsFavor: t.IsFavor,
                                        tag: t.feed_data.tag || [],
                                        entityList: t.feed_data.entityList.map(function(t) {
                                            var e = "";
                                            return t.name && (e = t.name.length > 7 ? t.name.substring(0, 7) + "..." : t.name), 
                                            {
                                                keyNo: t.keyNo,
                                                name: t.name,
                                                shortName: e
                                            };
                                        }),
                                        publish_time: t.publish_time,
                                        rankIndex: t.rankIndex,
                                        content: t.feed_data.content,
                                        isLineFeed: !0,
                                        title: t.feed_data.links[0].title || ""
                                    };
                                })), n.refresh = !0, n.refreshCount = o.refreshCount) : (n.newsFlashCanLoadNext = !(n.newsFlashList.length >= 500), 
                                n.newsFlashList = [].concat(h(n.newsFlashList), h(o.result.map(function(t) {
                                    return {
                                        top: t.tag && t.tag.length && t.tag.includes("TOP"),
                                        id: t.news_id,
                                        feed_id: t.feed_id,
                                        publishTime: t.publishTime,
                                        publishDate: t.publishDate,
                                        IsFavor: t.IsFavor,
                                        tag: t.feed_data.tag || [],
                                        entityList: t.feed_data.entityList.map(function(t) {
                                            var e = "";
                                            return t.name && (e = t.name.length > 7 ? t.name.substring(0, 7) + "..." : t.name), 
                                            {
                                                keyNo: t.keyNo,
                                                name: t.name,
                                                shortName: e
                                            };
                                        }),
                                        publish_time: t.publish_time,
                                        rankIndex: t.rankIndex,
                                        content: t.feed_data.content,
                                        isLineFeed: !0,
                                        title: t.feed_data.links[0].title || ""
                                    };
                                }))), (0, r.track)("homecontent_button_click", {
                                    "button_name|按钮名称": "商业快讯_上滑刷新"
                                })), n.newsFlashList.length && 1 === a.firstRankIndex) {
                                    var s = n.newsFlashList[0].publishDate;
                                    n.scrollDate = s.substring(0, 4) + "年" + s.substring(5, 7) + "月" + s.substring(8, 10) + "日";
                                }
                                n.newsFlashListNew = n.filterData(e, n.newsFlashList), e && i.default.setStorageSync("newsFlashList", n.newsFlashList), 
                                n.refresh ? setTimeout(function() {
                                    n.refresh = !1, n.getFixTop();
                                }, 3e3) : setTimeout(function() {
                                    n.getFixTop();
                                }, 300);
                            }
                        }).catch(function() {});
}
function collect() {}
function shareClick(t) {}
function tabClick(e) {
                        var n = this;
                        if (e.currentTarget.dataset.index === this.tabIndex) this.scrollTop >= this.tabTop && (this.canMarkScrollTop = !1, 
                        t.pageScrollTo({
                            scrollTop: this.tabTop,
                            duration: 300,
                            complete: function(e) {
                                t.pageScrollTo({
                                    scrollTop: n.tabTop,
                                    duration: 0,
                                    complete: function() {
                                        n.canMarkScrollTop = !0, n.getNewsflash(!0);
                                    }
                                });
                            }
                        })); else {
                            var i = this.tapScrollTop;
                            if ("0" === e.currentTarget.dataset.index ? i[1] = this.scrollTop : i[0] = this.scrollTop, 
                            this.tapScrollTop = i, this.scrollTop >= this.tabTop) {
                                var a;
                                a = this.tapScrollTop[e.currentTarget.dataset.index] >= this.tabTop ? i[e.currentTarget.dataset.index] : this.tabTop, 
                                this.canMarkScrollTop = !1, t.pageScrollTo({
                                    scrollTop: a,
                                    duration: 0,
                                    complete: function(i) {
                                        t.pageScrollTo({
                                            scrollTop: a,
                                            duration: 0,
                                            complete: function() {
                                                n.canMarkScrollTop = !0, "0" === e.currentTarget.dataset.index && n.getFixTop();
                                            }
                                        });
                                    }
                                });
                            } else "0" === e.currentTarget.dataset.index && setTimeout(function() {
                                n.getFixTop();
                            }, 500);
                        }
                        this.tabIndex !== e.currentTarget.dataset.index && (this.tabIndex = e.currentTarget.dataset.index, 
                        (0, r.track)("homecontent_button_click", {
                            "button_name|按钮名称": 0 === this.tabIndex ? "商业快讯" : "日报"
                        }));
}
function hideVipPop() {}
function toBannerDetail(e) {
                        var n = this, a = e.currentTarget.dataset.url, o = /(\/\/)([\w]+)/g;
                        if (a.indexOf("xcx://") > -1 && a.match(o) && a.match(o).length) {
                            var r = a.match(o)[0].replace(o, "$2"), s = "";
                            r && r.length > 0 && (s = a.split(r)[1]);
                            var u = t.getAccountInfoSync();
                            if (u && u.miniProgram && u.miniProgram.appId) u.miniProgram.appId === r || "self" === r ? s.indexOf("pages/home/index") > -1 || s.indexOf("pages/card/index") > -1 || s.indexOf("pages/boss/index") > -1 || s.indexOf("pages/monitor/index") > -1 || s.indexOf("pages/me/index") > -1 ? t.switchTab({
                                url: s
                            }) : s.indexOf("me-subpackages/vip-buy/index") > -1 ? this.checkLogin("").then(function() {
                                i.default.navigateTo({
                                    url: s
                                });
                            }).catch(function() {}) : s.indexOf("ad/vip-card-gift/index/index") > -1 ? this.checkLogin("").then(function() {
                                n.phone ? i.default.navigateTo({
                                    url: s
                                }) : i.default.navigateTo({
                                    url: "/login/bind/index"
                                });
                            }).catch(function() {}) : i.default.navigateTo({
                                url: s
                            }) : t.navigateToMiniProgram({
                                appId: r,
                                path: s,
                                extarData: {
                                    open: "qcc"
                                },
                                success: function() {},
                                fail: function() {}
                            });
                        }
                        this.bannerAnalysis(e);
}
function bannerAnalysis(t) {
                        var e = Number(t.currentTarget.dataset.url);
                        (0, r.track)("homecontent_button_click", {
                            "button_name|按钮名称": "banner位" + e
                        });
}
function toCheckLogin() {
                        var t = "/monitor-subpackages/add/index";
                        this.checkLogin(t).then(function() {
                            i.default.navigateTo({
                                url: t
                            });
                        }).catch(function() {});
}
function toRiskItemList() {
                        t.reLaunch({
                            url: "/pages/monitor/index?swiperIndex=1"
                        });
}
function getReportList(t) {
                        var e = this;
                        if (!this.isLogin) return this.reportListNoData = !0, void (this.reportList = []);
                        this.reportListNoData = !1;
                        var n = {};
                        this.reportLoading = !0, !t && this.reportList && this.reportList.length && this.reportList[this.reportList.length - 1] && (this.reportList[this.reportList.length - 1].radarId || this.reportList[this.reportList.length - 1].date) ? (n.radarId = this.reportList[this.reportList.length - 1].radarId, 
                        n.date = this.reportList[this.reportList.length - 1].date) : this.reportList.length && (this.reportList = []), 
                        this.$request({
                            url: "/v1/radar/getRadarDataPage",
                            method: "GET",
                            data: n
                        }).then(function(t) {
                            try {
                                var n;
                                t && 200 === t.status && (e.reportLoading = !1, e.radarCompanyCount = t.result.radarCompanyCount, 
                                e.radarPersonCount = t.result.radarPersonCount, e.surplusCompanyCount = t.result.surplusCompanyCount, 
                                e.surplusPersonCount = t.result.surplusPersonCount, e.RiskDimension = t.result.RiskDimension, 
                                (null === (n = t.result) || void 0 === n ? void 0 : n.radarDailyData) && (t.result.radarDailyData.length < 5 && (e.reportCanLoadNext = !1), 
                                e.reportList = [].concat(h(e.reportList), h(t.result.radarDailyData.map(function(t) {
                                    var e, n = 0, i = 0, a = 0, o = [];
                                    return (null === (e = t.radarData) || void 0 === e ? void 0 : e.changedata[0]) && (n = t.radarData.changedata[0].detail.dynamiccount, 
                                    i = t.radarData.changedata[0].detail.companychangecountv2, a = t.radarData.changedata[0].detail.personchangecountv2, 
                                    o = t.radarData.changedata[0].detail.changelist.map(function(t) {
                                        return {
                                            name: t.name,
                                            keyNo: t.Companykey,
                                            ChangeCount: t.ChangeCount,
                                            ImageUrl: t.imageUrl
                                        };
                                    })), {
                                        hasRead: t.hasRead,
                                        radarId: t.radarId,
                                        dateStr2: t.dateStr2,
                                        dateStr3: (0, u.default)("<div>" + t.dateStr2.split("|")[0] + (t.dateStr2.split("|")[1] ? '<span style="color:#bbb;">|</span>' + t.dateStr2.split("|")[1] : "") + "</div>"),
                                        dateStr: t.dateStr,
                                        hasInfo: t.dateStr.indexOf("至") > -1,
                                        date: t.date,
                                        Count: n,
                                        CompanyCount: i,
                                        PersonCount: a,
                                        LevelCountInfo: t.radarData.LevelCountInfo,
                                        radarData: {
                                            _id: t.radarData._id
                                        },
                                        Changelist: o
                                    };
                                })))), e.reportList.length < 1 && (e.reportListNoData = !0, e.cleverMonitor()));
                            } catch (t) {}
                        }).catch(function() {});
}
function hideActivity() {
                        this.activityShow = !1;
}
function toSearchCompany(t) {
                        "mp-alipay" === this.platform && this.app.indexOf("alipay") > -1 || (i.default.navigateTo({
                            url: "/pages/search/index/index"
                        }), (0, r.track)("hometop_button_click", {
                            "button_name|按钮名称": "搜索"
                        }));
}
function inputValue(t) {
                        this.inputKey = t.detail.value;
}
function toSearch(t) {
                        t.detail.value ? i.default.navigateTo({
                            url: "/pages/search/index/index?key=" + t.detail.value
                        }) : i.default.toast("请输入关键字");
}
function toCompanyDetail(t) {
                        var e = t.currentTarget.dataset.unique;
                        o.default.toCopDetail(e);
}
function toCopDetail(t) {
                        var e = t.currentTarget.dataset, n = e.unique, i = e.name;
                        o.default.toCopDetail(n, i);
}
function callKeFu(t) {
                        var e = t.currentTarget.dataset.value;
                        i.default.setClipboardData(e);
}
function backTop() {
                        t.pageScrollTo({
                            scrollTop: 0,
                            duration: 300,
                            complete: function(e) {
                                (0, r.track)("homecontent_button_click", {
                                    "button_name|按钮名称": "商业快讯_回到顶部"
                                }), t.pageScrollTo({
                                    scrollTop: 0,
                                    duration: 0,
                                    complete: function() {}
                                });
                            }
                        });
}
function toReportList(t) {
                        (0, r.track)("home_content_click", {
                            "page_name|页面名称": "监控日报"
                        });
                        var e = t.currentTarget.dataset.index, n = this.reportList[e], a = n.radarId, o = n.date, s = n.dateStr, u = n.hasRead;
                        if (n.Count) {
                            if (!u) {
                                var l = t.currentTarget.dataset.index, c = this.reportList;
                                c[l].hasRead = !0, this.reportList = c;
                            }
                            i.default.navigateTo({
                                url: "/monitor-subpackages/report/detail/index/index?id=" + a + "&date=" + o + "&dateStr=" + s
                            });
                        } else i.default.toast("未监控到相关企业/人员的风险出现变化");
}
function hideMenuTip() {
                        this.menuTipShow && (this.menuTipShow = !1);
}
function toVipRight() {
                        var t = "/me-subpackages/vip-buy/index?paySourceType=首页开通" + (this.isVIP ? "SVIP" : "VIP");
                        this.checkLogin(t).then(function() {
                            i.default.navigateTo({
                                url: t
                            });
                        }).catch(function() {}), (0, r.track)("hometop_button_click", {
                            "button_name|按钮名称": "会员中心"
                        });
}
function callPhone(t) {
                        var e = t.currentTarget.dataset.phone;
                        i.default.makePhoneCall(e);
}
function cancel() {
                        this.vipPop = !1;
}
function toLogin() {
                        this.checkLogin("").then(function() {}).catch(function() {}), (0, r.track)("homelogin_click", {
                            "button_name|按钮名称": "登录/注册"
                        });
}
function addMonitor(t) {
                        var e = this, n = "";
                        t.currentTarget.dataset.param ? n = t.currentTarget.dataset.param : this.recommendList.forEach(function(t, i) {
                            n += t.KeyNo + "|" + t.Name, i !== e.recommendList.length - 1 && (n += ",");
                        }), (0, l.addMonitor)({
                            keyNos: n,
                            isBatch: 0
                        }).then(function(t) {
                            if (t && 200 === t.status) e.monitorShowTextA = "您已监控 " + t.result.monitorCompanyCount + "家企业、" + t.result.monitorPersonCount + "位人员", 
                            e.monitorShowTextB = "还可以监控 " + t.result.surplusCompanyCount + "家企业、" + t.result.surplusPersonCount + "位人员", 
                            e.monitorShow = !0, e.isMonitored = !0, setTimeout(function() {
                                e.monitorShow = !1, e.getReportList(!0);
                            }, 2e3), i.default.setStorageSync("monitor", !0), i.default.setStorageSync("monitor1", !0); else if (t && t.message) {
                                var n = t.message.replace(/<[^>]+>/g, "");
                                i.default.toast(n);
                            }
                        }).catch(function() {});
}
function f5b8(t, e, n) {
        n.r(e);
        var i = n("42ff"), a = n("fdc7");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("1454");
        var r = n("f0c5"), s = Object(r.a)(a.default, i.b, i.c, !1, null, "f284fd66", null, !1, i.a, void 0);
        e.default = s.exports;
}
function fdc7(t, e, n) {
        n.r(e);
        var i = n("9988"), a = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = a.a;
}
