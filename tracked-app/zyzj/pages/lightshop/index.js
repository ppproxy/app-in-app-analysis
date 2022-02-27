var e = require("../../@babel/runtime/helpers/interopRequireDefault"), o = e(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../m/zk/z9")), a = e(require("../../x/cu")), r = e(require("../../m/zl/5o")), i = require("../../l/wh"), s = require("../../l/w9"), d = e(require("../../m/z3/z6")), c = require("../../l/wa"), l = e(require("../../m/zd/n")), u = e(require("./common/preload")), m = require("../../v/33/n"), p = e(require("../../p/35")), h = l.default.$ltracker;

(0, n.default)({
    data: {
        componentList: [],
        isShowTabbar: !1,
        isLoading: !1,
        isIphoneXmore: !1,
        opacity: 0
    },
    localData: {
        traceArray: []
    },
    mixins: [ a.default ],
    spmInfo: {
        spmAPos: "a2f8y",
        spmBPos: "b92125281",
        bizType: "KOUBEI"
    },
    plugins: [ p.default ],
    components: {
        pointMallComponent: "point-mall-component",
        headerIconComponent: "header-icon-component",
        headCarouselComponent: "head-carousel-component",
        memberGuidComponent: "member-guid-component",
        userInfoComponent: "user-info-component",
        orderStatusComponent: "order-status-component",
        serviceCardComponent: "service-card-component",
        storeCouponComponent: "store-coupon-component",
        advertiseCarouselComponent: "advertise-carousel-component",
        goodsWindowComponent: "goods-window-component",
        goodsModalComponent: "goods-modal-component",
        advertiseModalComponent: "advertise-modal-component",
        hotSpotComponent: "hot-spot-component",
        recommendDishListComponent: "recommend-dish-list-component",
        memberAssistanceCouponComponent: "member-assistance-coupon-component",
        memberJoinComponent: "member-join-component",
        shopInfoComponent: "shop-info-component",
        collectionPointActivityComponent: "collection-point-activity-component",
        orderfoodGuideComponent: "orderfood-guide-component",
        couponBagActivityComponent: "coupon-bag-activity-component",
        completePersonalInformationActivityComponent: "complete-personal-information-activity-component",
        loading: "loading"
    },
    onLoad: function(e) {
        this.handleReAuthGeo();
    },
    onReady: function() {
        this.$loading = this.getComponentById("loading"), this.isPreloaded = r.default.getAndRemove("IS_FORM_MIDDLE_PAGE_WITH_PRELOAD"), 
        this.renderContainer({
            showSketon: !this.isPreloaded,
            raceLoading: !1,
            useCache: this.isPreloaded
        });
    },
    onShow: function() {
        this.refresh();
    },
    onHide: function() {
        this.timeoutHandler && clearTimeout(this.timeoutHandler), this.setData({
            isLoading: !1
        }), this.localData.__orderStatusPolling && "function" == typeof this.localData.__orderStatusPolling.stop && this.localData.__orderStatusPolling.stop();
    },
    onUnload: function() {
        this.timeoutHandler && clearTimeout(this.timeoutHandler), this.setData({
            isLoading: !1
        });
    },
    onShareAppMessage: function() {
        return {
            title: (0, i.getBrandInfo)().brandName,
            path: "/pages/home/index",
            imageUrl: ""
        };
    },
    onPageScroll: function(e) {
        var o = this.$headerIconComponent;
        o && o.handlePageScroll && o.handlePageScroll(e);
    },
    methods: {
        handleReAuthGeo: function() {
            var e = this, n = (0, i.getShopScaneFlag)(), a = (0, i.getGeoInfo)(), r = !a || !a.latitude || (0, 
            i.getGeoAuthFailFlag)();
            !n && r && d.default.auth(t(o.default.mark(function t() {
                return o.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        if (!(0, i.getGeoAuthFailFlag)()) {
                            o.next = 2;
                            break;
                        }
                        return o.abrupt("return");

                      case 2:
                        return o.prev = 2, o.next = 5, (0, s.getClosestStore)({
                            bizCode: "INDEX_PAGE"
                        });

                      case 5:
                        wx.showToast({
                            title: "定位成功，即将重新加载",
                            icon: "none",
                            duration: 2e3,
                            complete: function() {
                                setTimeout(function() {
                                    e.$relaunch("/pages/lightshop/index");
                                }, 2e3);
                            }
                        }), o.next = 10;
                        break;

                      case 8:
                        o.prev = 8, o.t0 = o.catch(2);

                      case 10:
                      case "end":
                        return o.stop();
                    }
                }, t, null, [ [ 2, 8 ] ]);
            })), function() {});
        },
        renderContainer: function(e) {
            var o = this;
            this.getHomeConfigDataFetch(e, function(e) {
                if (0 !== e.length) {
                    var t = o.generateComponentId(e);
                    o.renderShowComponent(t);
                } else o.uploadRenderError("dataList长度为0导致白屏", "RENOVATION_ERROR_NO_DATA");
            });
        },
        parseComponentData: function(e) {
            return e;
        },
        renderShowComponent: function(e) {
            var o = this, t = (0, c.isIphoneXOrMore)(), n = this.parseComponentData(e);
            this.setData({
                componentList: n,
                isIphoneXmore: t
            }, function() {
                try {
                    o.$headerIconComponent = o.getComponentById("headerIconComponent");
                    var e = n.find(function(e) {
                        return "head-carousel-component" === e.componentCode;
                    }), t = !1;
                    e && e.data && (t = e.data.showShopInfo);
                    var a = {
                        data: {
                            showModal: t
                        }
                    };
                    o.$headerIconComponent.init(a).render();
                } catch (e) {}
                o.renderComponent(n);
            }), setTimeout(function() {
                o.setData({
                    opacity: 1
                });
            }, 100), setTimeout(function() {
                try {
                    (0, m.orderfoodPreload)();
                } catch (e) {}
            }, 1e3);
        },
        renderComponent: function(e) {
            for (var o = !1, t = [], n = 0; n < e.length; n++) {
                var a = e[n], r = e[n - 1], i = e[n + 1];
                try {
                    var s = this.getComponentById("".concat(a.id));
                    if (s) {
                        var d = {
                            data: a.data,
                            selectedTemplate: a.selectedTemplate,
                            id: a.id,
                            status: a.status
                        };
                        r && (d.before = {
                            data: r.data,
                            selectedTemplate: r.selectedTemplate,
                            id: r.id,
                            status: a.status
                        }), i && (d.next = {
                            data: i.data,
                            selectedTemplate: i.selectedTemplate,
                            id: i.id,
                            status: a.status
                        }), a.id.startsWith("advertiseCarouselComponent") && Object.assign(d, {
                            logExposeKey: ".home.turn_banner",
                            logClickKey: ".home.turn_banner"
                        }), a.id.startsWith("goodsWindowComponent") && Object.assign(d, {
                            origin: "LIGHTSHOP_PAGE"
                        }), d.data && d.data.showTitle && !o && (d.data.showTitle = !1);
                        var c = s.init(d);
                        if (c.$id) c.render(), o = !0; else {
                            var l = c.root, u = c.isShow;
                            !a.id.startsWith("headCarouselComponent") && u && (o = !0), l.render();
                        }
                        t.push(a.componentCode);
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    this.uploadRenderError(e.message, "RENOVATION_ERROR_RENDER_COMPONENT");
                }
            }
            this.$logExpo(".home.deco_mod", {
                codes: JSON.stringify(t)
            });
            var m = this.localData.traceArray, p = void 0 === m ? [] : m;
            p.push({
                end: +new Date(),
                type: "AVAILABLE"
            }), this.$logAvailableTrace(p);
        },
        getHomeConfigDataFetch: function() {
            var e = arguments, n = this;
            return t(o.default.mark(function t() {
                var a, r, i, s, d;
                return o.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return a = e.length > 0 && void 0 !== e[0] ? e[0] : {}, r = e.length > 1 ? e[1] : void 0, 
                        i = !1, a.raceLoading && (n.timeoutHandler = setTimeout(function() {
                            i || n.$loading.showLoading("正在加载中...");
                        }, 800), n.setData({
                            isLoading: !0
                        })), a.showSketon && n.setData({
                            showSketon: !0
                        }), o.prev = 5, o.next = 8, (0, u.default)({
                            useCache: !!a.useCache
                        });

                      case 8:
                        s = o.sent, i = !0, n.$loading.hideLoading(), n.timeoutHandler && clearTimeout(n.timeoutHandler), 
                        n.setData({
                            showSketon: !1,
                            isLoading: !1
                        }), d = n.localData.traceArray, (void 0 === d ? [] : d).push({
                            end: +new Date(),
                            type: "DATA_FETCH_END"
                        }), s.data && s.data.components && r && r(s.data.components), o.next = 26;
                        break;

                      case 18:
                        o.prev = 18, o.t0 = o.catch(5), i = !0, n.$loading.hideLoading(), n.timeoutHandler && clearTimeout(n.timeoutHandler), 
                        n.setData({
                            showSketon: !1,
                            isLoading: !1
                        }), n.uploadRenderError(o.t0.message, "RENOVATION_ERROR_API"), n.$redirect("/pages/page-result/index", {
                            fromPage: "pages/lightshop/index"
                        });

                      case 26:
                      case "end":
                        return o.stop();
                    }
                }, t, null, [ [ 5, 18 ] ]);
            }))();
        },
        handleShowTabbar: function(e) {
            var o = e.detail.isShow;
            this.setData({
                isShowTabbar: o
            });
        },
        forbidMove: function() {
            return null;
        },
        refresh: function() {
            this.isShowed && this.renderContainer({
                showSketon: !1,
                raceLoading: !0,
                useCache: !1
            });
            var e = this.$initBottomTabBar();
            this.setData({
                isShowTabbar: e
            }), this.isShowed = !0;
        },
        setLocalData: function(e, o) {
            this.localData[e] = o;
        },
        uploadRenderError: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "装修渲染失败", o = arguments.length > 1 ? arguments[1] : void 0, t = this.$getCustomError("装修渲染异常", {
                c1: o,
                c2: e
            });
            h.logError(t);
        }
    }
});