var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 37 ], {
    1102: function(e, t, n) {
        "use strict";
        n.r(t), function(e) {
            e.currentModuleId = "ma2a18bda", e.currentCtor = Component, e.currentResourceType = "component", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "ma2a18bda",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("_isUnlockedWindow", this._isUnlockedWindow) ? (this._c("spokesman", this.spokesman) && (this._c("extraData.isSplitBike", this.extraData.isSplitBike), 
                    this._c("currentMarketingResource.enableAd", this.currentMarketingResource.enableAd), 
                    this._c("spokesman", this.spokesman), this._c("closeIcon", this.closeIcon), this._c("smanCloseHeight", this.smanCloseHeight)), 
                    this._c("currentMarketingResource", this.currentMarketingResource)) : this._c("_isLockedInfoflow", this._isLockedInfoflow) ? this._c("currentMarketingResource", this.currentMarketingResource) : this._c("_isUnlockingInfoflow", this._isUnlockingInfoflow) && this._c("extraData", this.extraData), 
                    this._c("showInitPagePop", this.showInitPagePop) && 1 === this._c("initPagePopType", this.initPagePopType) && this._c("currentMarketingResource.variantInfo", this.currentMarketingResource.variantInfo), 
                    this._c("showInitPagePop", this.showInitPagePop) && 2 === this._c("initPagePopType", this.initPagePopType) && this._c("currentMarketingResource.variantInfo", this.currentMarketingResource.variantInfo), 
                    this._c("showInitPagePop", this.showInitPagePop) && 3 === this._c("initPagePopType", this.initPagePopType) && this._c("currentMarketingResource.variantInfo", this.currentMarketingResource.variantInfo), 
                    this._c("showInitPagePop", this.showInitPagePop) && 4 === this._c("initPagePopType", this.initPagePopType) && this._c("currentMarketingResource.variantInfo", this.currentMarketingResource.variantInfo), 
                    this._c("initPagePopType", this.initPagePopType), this._r();
                }
            };
            n(690);
            e.currentModuleId;
        }.call(this, n(11));
    },
    690: function(e, t, n) {
        "use strict";
        var i = n(3), o = n.n(i), r = n(1), a = n.n(r), s = n(0), c = n.n(s), p = n(13), u = n.n(p), h = n(41), l = n.n(h), g = n(14), k = n.n(g), d = n(2), m = n(5), I = n(60), f = n(32), b = n(34), w = n(16), _ = n(134), P = n(94), v = n(4), y = n(8), T = n(306), x = n(23), M = n.n(x), z = n(24), R = n.n(z), O = n(30), S = n(69), j = function() {
            function e(t) {
                var n = t.context;
                M()(this, e), this.context = n;
            }
            return R()(e, [ {
                key: "show",
                value: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t.imgUrl && (this.context.open = !0, this.context.banner = t.imgUrl, this.context.enableAd = t.enableAd || 0, 
                    this.context.linkUrl = t.linkUrl, this.context.jumpType = t.jumpType || 1, this.context.extInfo = t.extInfo || null, 
                    this.context.tapAction = t.tapAction || null, this.context.layoutId = t.layoutId, 
                    this.context.spotId = t.spotId, this.context.frame = t.frame, this.context.bizContent = t.bizContent, 
                    O.a.once(S.d, function() {
                        e.close();
                    }));
                }
            }, {
                key: "close",
                value: function() {
                    this.context.open = !1;
                }
            } ]), e;
        }(), C = n(9), U = n(171), A = n(7), B = n.n(A), D = n(15), E = n(55), H = n(260), F = n(84), L = "bike-unlocked-popup-widow", q = "ebike-unlocked-popup-widow", W = "hm-locked-infoflow", J = "hm-unlocking-infoflow", N = "hm-popup-window", V = "close", K = "jump", Y = {
            1: 249,
            2: 251
        }, G = "phpub_cms_view_sw", Q = "phpub_cms_view_ck";
        Object(d.b)({
            data: {
                showInitPagePop: !1,
                initPagePopType: null,
                initPagePopTrackInfo: {},
                currentMarketingResource: {},
                closeIcon: "https://pt-starimg.didistatic.com/static/starimg/img/pPOwFFaMo01621587273059.png",
                smanCloseHeight: "",
                spokesman: "",
                cmsOmegaTracker: null
            },
            properties: {
                spotId: {
                    type: String,
                    value: ""
                },
                extraData: {
                    type: Object,
                    value: {
                        isSplitBike: ""
                    }
                }
            },
            computed: a()(a()({}, m.a.mapState([ "location", "common" ])), {}, {
                bizType() {
                    return this.common.curOrderInfo.bizType;
                },
                orderId() {
                    return this.common.curOrderInfo.orderId;
                },
                isEBike() {
                    return this.common.curOrderInfo.bizType === b.b.EBIKE_TYPE;
                },
                _isUnlockedWindow() {
                    var e = this.spotId;
                    return e === L || e === q;
                },
                _isLockedInfoflow() {
                    return this.spotId === W;
                },
                _isUnlockingInfoflow() {
                    return this.spotId === J;
                },
                _isInitInfoflow() {
                    return this.spotId === N;
                }
            }),
            methods: {
                handlePopShow(e) {
                    this.triggerEvent("showInitPagePop", {
                        showInitPagePop: e.detail.isShowPop
                    });
                },
                popTargetAction(e) {
                    var t = this;
                    console.log("targetInfo: ", e);
                    var n = e.detail, i = n.linkType, o = n.linkUrl, r = n.listIndex, s = void 0 === r ? null : r, c = n.extInfo, p = void 0 === c ? null : c, u = n.wxJumpPull, h = void 0 !== u && u, l = n.enableAd, g = this.initPagePopTrackInfo, k = this.initPagePopType, d = this._isInitInfoflow, m = this.spotId, I = {
                        action: "jump",
                        type: k
                    };
                    if (s && (g.list_index = s), 1 == +i) {
                        if (!o) return;
                        if (v.a.track(Q, a()(a()({}, g), I)), d && g && g.biz_content) if (Object(U.a)({
                            bizContent: g.biz_content,
                            spotId: m,
                            url: o
                        })) return;
                        var f = this.currentMarketingResource;
                        Object(C.navigateTo)(D.e, {
                            url: o
                        });
                        try {
                            f.thirdTrackings && Object(P.a)("首页资源位点击", f.thirdTrackings, f.variantInfo.campaignUnitId, "miaozhen", "click");
                        } catch (e) {
                            console.log(e, "首页资源位点击");
                        }
                    } else if (2 == +i && p) {
                        var b = p.appId, w = p.path;
                        g.action = "wxpopupsw", v.a.track(Q, g), wx.navigateToMiniProgram({
                            appId: b,
                            path: w,
                            envVersion: "release",
                            success: function() {
                                g.action = "wxpopupck", v.a.track(Q, g);
                            },
                            fail: function(e) {
                                g.action = "wxpopupcance", v.a.track(Q, g);
                            }
                        });
                    } else 4 == +i ? (v.a.track(Q, a()(a()({}, g), I)), Object(C.navigateTo)(o)) : 7 == +i && h && O.a.emit("showBenefitCom", {
                        showBenefit: !0,
                        enableAd: l
                    });
                    setTimeout(function() {
                        t.showInitPagePop = !1, t.triggerEvent("showInitPagePop", {
                            showInitPagePop: t.showInitPagePop
                        });
                    }, 1e3);
                },
                closePop() {
                    this.showInitPagePop = !1, this.triggerEvent("showInitPagePop", {
                        showInitPagePop: this.showInitPagePop
                    });
                    var e = this.currentMarketingResource, t = this.initPagePopTrackInfo, n = this.initPagePopType;
                    this.spotId;
                    if (e) {
                        var i = {
                            element_id: 101,
                            action: "close",
                            type: n
                        };
                        v.a.track(Q, a()(a()({}, t), i));
                    }
                },
                curSpotInfo() {
                    this.triggerEvent("curSpotInfo", this.currentMarketingResource);
                },
                getMarketingSpotFuc() {
                    var e = arguments, t = this;
                    return o()(c.a.mark(function n() {
                        var i, o, r, a, s, p;
                        return c.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (o = e.length > 1 && void 0 !== e[1] ? e[1] : {}, 0 !== (i = e.length > 0 && void 0 !== e[0] ? e[0] : []).length) {
                                    n.next = 4;
                                    break;
                                }
                                throw "缺少关键参数--marketingSpotIds";

                              case 4:
                                return r = {
                                    marketingSpotIds: u()(i),
                                    cityId: m.a.state.location.cityId,
                                    sdkVersion: b.l,
                                    extra: u()(o)
                                }, s = 0, n.prev = 6, t.cmsOmegaTracker.start(), n.next = 10, w.marketingUnifiedSpotDelivery(r);

                              case 10:
                                (a = n.sent) && l()(p = Object.keys(a)).call(p, i[0]) ? (i.forEach(function(e) {
                                    var t = JSON.parse(a[e].variantInfo);
                                    a[e].variantInfo = t;
                                }), s = 0) : (a = void 0, s = 1), n.next = 19;
                                break;

                              case 14:
                                n.prev = 14, n.t0 = n.catch(6), s = 2, a = void 0, Object(y.u)("获取资源位失败err--".concat(i), n.t0);

                              case 19:
                                return n.prev = 19, n.next = 22, t.cmsOmegaTracker.setCmsData(a ? a[t.spotId] : a);

                              case 22:
                                return t.cmsOmegaTracker.getData({
                                    type: s
                                }), 2 === s && t.cmsOmegaTracker.renderFail({
                                    type: 1
                                }), n.finish(19);

                              case 25:
                                return n.abrupt("return", a);

                              case 26:
                              case "end":
                                return n.stop();
                            }
                        }, n, null, [ [ 6, 14, 19, 25 ] ]);
                    }))();
                },
                unifiedMarketingResourcesHandle() {
                    var e = this;
                    return o()(c.a.mark(function t() {
                        var n, i, o, r, a, s;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (n = e.handleParmas()) {
                                    t.next = 3;
                                    break;
                                }
                                return t.abrupt("return");

                              case 3:
                                return t.prev = 3, i = n.marketingSpotIds, o = n.extra, r = void 0 === o ? {} : o, 
                                a = n.curSpotId, t.next = 7, Object(y.l)();

                              case 7:
                                return r.wxSdkVersion = t.sent, t.next = 10, e.getMarketingSpotFuc(i, r);

                              case 10:
                                (s = t.sent) && (e.currentMarketingResource = s[a], e.currentMarketingResource.curSpotId = a, 
                                e.handleMarketingResourceResult(s[a], a), e.cmsOmegaTracker.renderSuccess()), t.next = 18;
                                break;

                              case 14:
                                t.prev = 14, t.t0 = t.catch(3), Object(y.u)("获取资源位失败err--".concat(n.marketingSpotIds), t.t0), 
                                e.cmsOmegaTracker.renderFail({
                                    type: 2
                                });

                              case 18:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 3, 14 ] ]);
                    }))();
                },
                handleParmas() {
                    var e, t = {};
                    if (this._isUnlockedWindow) {
                        if (wx.getStorageSync("ridingBannerOrderId") == this.orderId) return null;
                        e = this.isEBike ? "ebike-unlocked-popup-widow" : "bike-unlocked-popup-widow", t = {
                            orderId: this.orderId,
                            productId: Y[this.bizType],
                            mac: Object(y.M)()
                        };
                    } else this._isLockedInfoflow ? (e = W, t = {
                        productId: Y[this.bizType]
                    }) : this._isUnlockingInfoflow ? (e = J, t = {
                        productId: Y[this.bizType]
                    }) : this._isInitInfoflow && (e = N, t = {
                        mac: Object(y.M)()
                    });
                    return {
                        curSpotId: e,
                        marketingSpotIds: [ e ],
                        extra: t
                    };
                },
                handleMarketingResourceResult(e, t) {
                    var n = this, i = e.variantInfo, o = e.layoutId, r = e.bizContent, s = (e.tracking, 
                    {
                        biz_type: this.bizType,
                        bizContent: "",
                        layout_id: "",
                        frame: 1,
                        spot_id: t
                    });
                    if (this._isUnlockedWindow) {
                        if (i && i.backImg) {
                            if (this.currentMarketingResource.enableAd = i.enableAd, "all-unlocked-popup-widow:img" === o) {
                                this.currentMarketingResource.spokesman = i.backImg, this.spokesman = i.backImg;
                                var c = this.isEBike ? "ebike_unlock_success_halfscreen_sw" : "bike_unlock_success_halfscreen_sw";
                                v.a.track(c, {
                                    biz_type: this.bizType,
                                    bizContent: r && r[0]
                                });
                            } else {
                                var p = {
                                    open: !0,
                                    banner: i.backImg
                                };
                                this.currentMarketingResource = a()(a()({}, this.currentMarketingResource), p), 
                                v.a.track("bike_unlock_success_popup_sw", {
                                    biz_type: this.bizType,
                                    bizContent: r && r[0]
                                }), Object(_.a)(e.tracking, "exposure");
                            }
                            s.biz_content = r && r[0], s.layout_id = o, v.a.track("phpub_cms_view_sw", s);
                        }
                        !0 === this.currentMarketingResource.open && setTimeout(function() {
                            try {
                                n.currentMarketingResource.open = !1;
                            } catch (e) {
                                Object(y.u)(e);
                            }
                        }, 6e3), f.a.setStorage("ridingBannerOrderId", this.orderId);
                        try {
                            e.thirdTrackings && Object(P.a)("电/单车开锁成功弹窗资源位miaozhen展示", e.thirdTrackings, i.campaignUnitId, "miaozhen", "show"), 
                            e.thirdTrackings && Object(P.a)("电/单车开锁成功弹窗资源位cms展示", e.thirdTrackings, i.campaignUnitId, "cms", "show");
                        } catch (e) {
                            console.log(e, "电/单车开锁成功弹窗资源位");
                        }
                    } else if (this._isLockedInfoflow) {
                        if (i && i.content) {
                            var u = {
                                isShow: !0,
                                content: i.content
                            };
                            this.currentMarketingResource = a()(a()({}, this.currentMarketingResource), u), 
                            s.biz_content = r && r[0], s.layout_id = o, v.a.track(G, s), v.a.track("qj_wx_success_banner_sw", {
                                bizContent: r
                            });
                        }
                    } else if (this._isUnlockingInfoflow) i && i.content && (this.currentMarketingResource.memberNoticeInfo = i.content, 
                    s.biz_content = r && r[0], s.layout_id = o, v.a.track(G, s), v.a.track("qj_wx_unlocking_banner_sw", {
                        bizContent: r
                    }), this.currentMarketingResource.memberNoticeAction = function() {
                        var e = K;
                        s.action = e, s.element_id = "", v.a.track(Q, s), v.a.track("qj_wx_unlocking_banner_ck", {
                            bizContent: r
                        }), Object(T.a)(i);
                    }); else if (this._isInitInfoflow) {
                        this.initPagePopTrackInfo = {
                            biz_type: this.bizType,
                            biz_content: r && r[0],
                            layout_id: o,
                            frame: 1,
                            spot_id: t,
                            source: this.extraData.isScan ? 1 : 0,
                            sourcetype: this.common.pageId
                        };
                        var h = [ "puhui:mask:window", "puhui:popup:window", "puhui:popup:benefits", "puhui:voucher:infos", "wx:direct:pull" ];
                        if (k()(h).call(h, o) > -1 && (this.initPagePopType = k()(h).call(h, o) + 1, this.showInitPagePop = 3 !== this.initPagePopType || 3 === this.initPagePopType && this.extraData.isLogin, 
                        3 !== this.initPagePopType && (this.triggerEvent("showInitPagePop", {
                            showInitPagePop: this.showInitPagePop
                        }), 5 === this.initPagePopType && O.a.emit("showBenefitCom", {
                            showBenefit: !0,
                            enableAd: i.enableAd || 0,
                            wxDirectPull: i.wxDirectPull || !1
                        })), this.initPagePopTrackInfo.type = this.initPagePopType, v.a.track(G, a()({}, this.initPagePopTrackInfo))), 
                        "puhui:popup:window" === o && B()(m.a, "state.common.curOrderInfo", 0) && !B()(m.a, "state.common.curOrderInfo.isScan", !1)) try {
                            e.thirdTrackings && Object(P.a)("首页弹窗miaozhen展示", e.thirdTrackings, i.campaignUnitId, "miaozhen", "show"), 
                            e.thirdTrackings && Object(P.a)("首页弹窗cms展示", e.thirdTrackings, i.campaignUnitId, "cms", "show");
                        } catch (e) {
                            console.log(e, "首页弹窗miaozhen展示");
                        }
                    }
                    this.curSpotInfo();
                },
                showInitPageNormalPop(e, t, n) {
                    var i = e.variantInfo, o = e.layoutId, r = e.bizContent, a = (e.tracking, i && i.backImg), s = i && i.backLink, c = i && i.appId, p = i && i.path, u = i && i.enableAd, h = {
                        imgUrl: a
                    };
                    s ? h.linkUrl = s : c && (h.extInfo = {
                        appkey: c,
                        linkAddressUrl: p
                    }), h.tapAction = function() {
                        n.action = "jump", n.frame = 1, v.a.track(Q, n);
                    }, h.layoutId = o, h.spotId = t, h.frame = 1, h.bizContent = r && r[0], h.enableAd = u, 
                    m.a.commit(I.c, {
                        homePopupConfig: h
                    });
                    new j({
                        context: {
                            open: !1,
                            banner: "",
                            linkUrl: "",
                            enableAd: 0,
                            jumpType: 1,
                            extInfo: null,
                            tapAction: null
                        }
                    }).show(h);
                },
                closeRidingDialog() {
                    var e = this;
                    return o()(c.a.mark(function t() {
                        var n, i, o, r;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (e.currentMarketingResource.open = !1, n = e.currentMarketingResource, i = n.bizContent, 
                                o = n.thirdTrackings, r = n.variantInfo, v.a.track("bike_unlock_success_popup_close_ck", {
                                    biz_type: e.bizType,
                                    bizContent: i && i[0]
                                }), !E.a.getSubscribeForDaysStatus("AuthSubscribe")) {
                                    t.next = 6;
                                    break;
                                }
                                return t.next = 6, E.a.requestSubscribeMessageDMC("qj_kaisuotanchuang1", "revokeMissionaryWork");

                              case 6:
                                e.closeOmegaTrack(V), Object(_.a)(e.currentMarketingResource.tracking, "close"), 
                                o && Object(P.a)("电/单车开锁成功弹窗资源位miaozhen关闭", o, r.campaignUnitId, "miaozhen", "click");

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                spokesmanClose() {
                    this.spokesman = "", this.currentMarketingResource.spokesman = "";
                    var e = this.currentMarketingResource, t = e.bizContent, n = e.thirdTrackings, i = e.variantInfo, o = this.isEBike ? "ebike_unlock_success_halfscreen_close_ck" : "bike_unlock_success_halfscreen_close_ck";
                    v.a.track(o, {
                        biz_type: this.bizType,
                        bizContent: t && t[0]
                    }), this.closeOmegaTrack(V), n && Object(P.a)("电/单车开锁成功弹窗资源位miaozhen关闭", n, i.campaignUnitId, "miaozhen", "click");
                },
                spokesmanOnload() {
                    var e = this;
                    setTimeout(function() {
                        e.spokesman = "", e.currentMarketingResource.spokesman = "", e.curSpotInfo();
                    }, 3e3);
                },
                closeOmegaTrack(e) {
                    this.curSpotInfo();
                    var t = this.currentMarketingResource, n = (t.tracking, t.bizContent), i = t.layoutId, o = t.curSpotId, r = {
                        biz_type: this.bizType,
                        biz_content: n && n[0],
                        layout_id: i,
                        frame: 1,
                        spot_id: o,
                        action: e,
                        element_id: ""
                    };
                    v.a.track(Q, r);
                },
                getSmanCloseHeight() {
                    var e = this;
                    return o()(c.a.mark(function t() {
                        var n, i, o;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.prev = 0, n = {}, t.next = 4, Object(F.a)();

                              case 4:
                                i = t.sent, o = i.SDKVersion, Object(y.e)(o, "2.1.0") >= 0 && (n = wx.getMenuButtonBoundingClientRect(), 
                                e.smanCloseHeight = "top: ".concat(2 * n.top + 2 * n.height + 60, "rpx;")), t.next = 12;
                                break;

                              case 9:
                                t.prev = 9, t.t0 = t.catch(0), console.log("getMenuButtonBoundingClientRect_error", t.t0);

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 0, 9 ] ]);
                    }))();
                }
            },
            attached() {
                var e = this;
                this.cmsOmegaTracker = new H.a({
                    spotId: this.spotId
                }), this.unifiedMarketingResourcesHandle(), O.a.on("closeBenefit", function() {
                    e.closePop();
                });
            },
            ready() {
                this.getSmanCloseHeight();
            }
        });
    }
}, [ [ 1102, 0 ] ] ]);
//# sourceMappingURL=index.js.map