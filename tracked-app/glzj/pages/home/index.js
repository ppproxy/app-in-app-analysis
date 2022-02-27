var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/typeof");

require("../../@babel/runtime/helpers/Arrayincludes");

var a = require("../../@babel/runtime/helpers/slicedToArray"), r = e(require("../../@babel/runtime/regenerator")), n = require("../../@babel/runtime/helpers/asyncToGenerator"), o = e(require("../../m/zk/z9")), i = require("../../v/ci/36"), s = require("../../v/ci/n"), c = e(require("../../m/zr/n")), u = function(e, a) {
    if (!a && e && e.__esModule) return e;
    if (null === e || "object" !== t(e) && "function" != typeof e) return {
        default: e
    };
    var r = T(a);
    if (r && r.has(e)) return r.get(e);
    var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e) if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
        var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
        s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i];
    }
    n.default = e, r && r.set(e, n);
    return n;
}(require("../../m/zd/n")), l = e(require("../../m/zt")), h = e(require("../../m/zl/5o")), d = e(require("./common/scane-origin-map")), g = require("./common/origin-enum"), f = require("../../v/33/n"), p = (e(require("../../m/5y")), 
require("../../l/wh")), I = require("../../l/wa"), m = require("./common/origin-scane"), v = require("../../l/wm"), _ = e(require("../../m/z3/z6")), P = require("../../l/w9"), A = require("./services/index"), S = e(require("../lightshop/common/preload")), O = e(require("./common/origin-path"));

function T(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), a = new WeakMap();
    return (T = function(e) {
        return e ? a : t;
    })(e);
}

var E = u.default.$ltracker;

(0, o.default)({
    spmInfo: {
        spmAPos: "a2f8y",
        spmBPos: "b92471679",
        bizType: "KOUBEI",
        autoPv: !1
    },
    data: {
        name: "轻店小程序首页",
        bgUrl: "",
        bgVerticalCenter: !1,
        bgHeight: 0,
        showLoadingGif: !1,
        contractAuthModalVisible: !1,
        showAuthBg: !1
    },
    components: {
        loading: "loading"
    },
    logProps: {
        $whiteScreenConfig: {
            meaningFulSelectors: [ ".".concat("e4e") ],
            needJump: !0,
            delay: 6e3
        }
    },
    localData: {
        errorLock: !1,
        origin: "",
        path: "",
        geoTime: 0,
        geoauth: 1,
        tm: 0,
        cv: "",
        submiting: !1,
        contractAuthTime: 0,
        traceArray: []
    },
    onLoad: function(e) {
        this.initVersionCompare(), this.processInitWithScaneValue(), e && Object.keys(e).length > 0 && this.initOriginInfo(e), 
        this.initLoadInfo();
    },
    onHide: function() {
        this.setRenderStatus();
    },
    onUnload: function() {
        this.setRenderStatus();
    },
    methods: {
        handleAgreeAuth: function() {
            var e = this;
            return n(r.default.mark(function t() {
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!e.localData.submiting) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        return e.localData.submiting = !0, t.prev = 3, t.next = 6, (0, A.authPrivacyAgree)({
                            customerId: (0, p.getLoginCustomer)(),
                            appId: (0, p.getAppBaseInfo)().appId
                        });

                      case 6:
                        t.next = 10;
                        break;

                      case 8:
                        t.prev = 8, t.t0 = t.catch(3);

                      case 10:
                        e.setData({
                            contractAuthModalVisible: !1
                        }), e.localData.submiting = !1, e.localData.authResolve(!0);

                      case 13:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 3, 8 ] ]);
            }))();
        },
        jumpToAgreement: function() {
            this.$navigate("/pages/webview/index?pageUrl=" + encodeURIComponent("https://pages.koubei.com/wow/alsc/mod/5ecc748debbd00d4f390fa1d"));
        },
        initVersionCompare: function() {
            try {
                var e = (0, P.getMiniSdkVersion)(), t = (0, I.getMiniType)(), a = l.default.MIN_VERSION[t];
                if ((0, P.compareVersion)(e, a) <= 0) {
                    this.localData.errorLock = !0;
                    var r = this.$getCustomError("低于最低版本号异常", {
                        c1: "MINI_VERSION_ERROR"
                    });
                    E.logError(r), this.$redirect("/pages/page-result/index", {
                        statusCode: "MINI_VERSION_ERROR",
                        btnText: "去升级APP"
                    }, !0);
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.error("版本号对比失败");
            }
        },
        setRenderStatus: function() {
            var e = getApp();
            e && (e.PAGE_HOME_HAS_RENDER = !0);
        },
        getRenderStatus: function() {
            var e = getApp();
            return !!e && !!e.PAGE_HOME_HAS_RENDER;
        },
        getAppStartTime: function() {
            var e = getApp();
            return e ? e[u.logConstants.APP_START_TIME] : "";
        },
        recordPerformance: function(e) {
            try {
                var t = +new Date(), a = this.getAppStartTime(), r = this.getRenderStatus();
                if (!a) return;
                if (r) return;
                if (t - a > 1e4) return;
                E.logPerf(u.PerfType.mark, {
                    name: e,
                    markDuration: t - a,
                    instant: !1
                });
            } catch (e) {}
        },
        processInitWithScaneValue: function() {
            switch ((0, I.getSceneValue)()) {
              case 1001:
              case 1007:
              case 1008:
              case 1089:
              case 1106:
              case 1035:
              case 1017:
                (0, p.removeScaneInfo)();
            }
        },
        initLoadInfo: function() {
            var e = this;
            return n(r.default.mark(function t() {
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (e.localData.origin !== g.ORIGIN_WITH_WX_CHART_CARD) {
                            t.next = 10;
                            break;
                        }
                        return t.next = 4, e.cardExpireLogic();

                      case 4:
                        if (!t.sent) {
                            t.next = 9;
                            break;
                        }
                        return (0, p.removeScaneInfo)(), e.$redirect("/pages/page-result/index", {
                            statusCode: "CARD_EXPIRE",
                            btnText: "回首页",
                            fromPage: "pages/home/index"
                        }, !0), t.abrupt("return");

                      case 9:
                        (0, p.setGlobalScaneInfo)({
                            codeValue: e.localData.cv
                        });

                      case 10:
                        m.scaneWithMinPathInQuery.call(e), e.startRender();

                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        cardExpireLogic: function() {
            var e = this;
            return n(r.default.mark(function t() {
                var a, n;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return a = new Date().getTime(), n = e.localData.tm, t.prev = 2, t.next = 5, (0, 
                        s.getServerTime)();

                      case 5:
                        a = t.sent, t.next = 11;
                        break;

                      case 8:
                        t.prev = 8, t.t0 = t.catch(2), a = new Date().getTime();

                      case 11:
                        return t.abrupt("return", a > n);

                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 2, 8 ] ]);
            }))();
        },
        initOriginInfo: function(e) {
            var t = e.origin || "";
            if (this.localData.fromPage = e.fromPage || "", e.geoauth && (this.localData.geoauth = parseInt(e.geoauth, 10)), 
            t.length > 0) switch (t) {
              case g.ORIGIN_WITH_MINI_CARD:
                m.scaneWithMinCard.call(this, e);
                break;

              case g.ORIGIN_WITH_MINI_PATH:
                m.scaneWithMinPath.call(this, e);
                break;

              case g.ORIGIN_WITH_WX_CHART_CARD:
                m.scaneWithWxChatPath.call(this, e);
            }
            if (void 0 !== e.entryChannel && (0, p.setGlobalMiniChannel)(e.entryChannel), void 0 !== e.scancode_time) {
                var a = getApp();
                if (!a) return;
                if (!a[u.logConstants.APP_START_TIME]) return;
                if (a[u.logConstants.PAGE_COLD_STATUS]) return;
                E.logPerf(u.PerfType.mark, {
                    name: u.logConstants.APP_SCAN_CODE,
                    markDuration: a[u.logConstants.APP_START_TIME] - 1e3 * e.scancode_time,
                    instant: !1
                });
            }
        },
        checkContractAuthStatus: function(e) {
            var t = this;
            return n(r.default.mark(function a() {
                var n, o, i, s;
                return r.default.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return n = getApp(), o = n.loadHomeData, a.next = 3, o(e);

                      case 3:
                        if (i = a.sent, s = Date.now(), !i || !i[0] || "1" === i[0].authPrivacyAgree) {
                            a.next = 10;
                            break;
                        }
                        return t.setData({
                            contractAuthModalVisible: !0,
                            themeColor: (0, p.getThemeColor)()
                        }), t.localData.authPromise = new Promise(function(e) {
                            t.localData.authResolve = e;
                        }), a.next = 10, t.localData.authPromise;

                      case 10:
                        return t.localData.contractAuthTime = Date.now() - s, a.abrupt("return", i);

                      case 12:
                      case "end":
                        return a.stop();
                    }
                }, a);
            }))();
        },
        startRender: function() {
            var e = this;
            return n(r.default.mark(function t() {
                var a, n, o, i;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        a = (0, p.getScaneInfo)() || {
                            codeValue: ""
                        }, n = a.codeValue || "", o = "null" === n, i = "undefined" === n, "string" == typeof n && 0 === n.length || i || o ? e.checkContractAuthStatus().then(function() {
                            e.processWithNOCodeValue();
                        }).catch(function(t) {
                            if (!e.localData.errorLock) {
                                var a = e.$getCustomError("【无码值】小程序获取前置信息异常");
                                E.logError(a), e.$redirect("/pages/page-result/index", {
                                    fromPage: "pages/home/index"
                                }, !0);
                            }
                        }) : e.checkContractAuthStatus(n).then(function(t) {
                            if (t && t.length > 0) {
                                var a = t[0] || {}, r = t[1] || {}, o = t[2] || {};
                                if ((0, p.setPreviewMode)(o && o.codeInfo && o.codeInfo.edition ? o.codeInfo.edition : ""), 
                                o && o.codeInfo && "preview" === o.codeInfo.edition && c.default.getGlobalConfigPromise(), 
                                !(Object.keys(a).length > 0 && Object.keys(r).length > 0 && Object.keys(o).length > 0)) throw new Error("链路接口请求失败");
                                c.default.setLoginInfo(a);
                                var i = o.codeInfo, s = o.shopInfo || {};
                                e.initCodeContainer({
                                    data: i
                                }, n, s);
                            } else e.$redirect("/pages/page-result/index", {
                                fromPage: "pages/home/index"
                            }, !0);
                        }).catch(function(t) {
                            if (!e.localData.errorLock) {
                                var a = e.$getCustomError("【有码值】小程序获取前置信息异常", {
                                    c1: n
                                });
                                E.logError(a), e.$redirect("/pages/page-result/index", {
                                    fromPage: "pages/home/index"
                                }, !0);
                            }
                        });

                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        processWithNOCodeValue: function() {
            var e = this.localData.origin;
            switch (e) {
              case g.ORIGIN_WITH_MINI_PATH:
              case g.ORIGIN_WITH_MY_LINK:
                this.processOriginWithMiniPath(e);
                break;

              default:
                this.initCodeContainer({
                    data: {
                        page: O.default.HOME_PAGE
                    }
                }, "", {});
            }
        },
        processOriginWithMiniPath: function(e) {
            var t = this.localData.path, a = (0, v.parseParamsFromUrl)(t) || {};
            this.initCodeContainer({
                data: {
                    page: e,
                    shopId: a.shopId || ""
                }
            }, "", {});
        },
        initCodeContainer: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.clearMiniCacheInfo();
            var r = e.data || {}, n = r.page, o = void 0 === n ? "" : n, i = r.shopId, s = void 0 === i ? "" : i, c = r.tableId, u = void 0 === c ? "" : c, l = r.productId, h = void 0 === l ? "" : l, f = r.activityId, I = void 0 === f ? "" : f, v = r.activityTypeId, _ = void 0 === v ? "" : v, P = r.edition, A = void 0 === P ? "" : P, S = r.url, T = void 0 === S ? "" : S, E = r.locateShop, b = void 0 === E ? "" : E;
            s.length > 0 ? ((0, p.setGlobalShopId)(s), (0, p.setFromShopId)(s), (0, p.setShopScaneFlag)(!0)) : ((0, 
            p.setGlobalShopId)(null), (0, p.setFromShopId)(null), (0, p.setShopScaneFlag)(!1)), 
            u.length > 0 ? (0, p.setGlobalTableId)(u) : (0, p.setGlobalTableId)(null), (0, p.setPreviewMode)(A), 
            0 === o.length && (o = O.default.HOME_PAGE);
            var D = d.default[o];
            D && D.path ? (0, p.setGlobalMiniChannelPath)(D.path) : (0, p.setGlobalMiniChannelPath)(null), 
            this.logOnShow(o, t), o === O.default.HOME_PAGE && h.length > 0 && m.scaneWithDishScan.call(this, {
                productId: h
            }), [ g.ORIGIN_WITH_MINI_PATH, g.ORIGIN_WITH_MY_LINK, O.default.ACTIVITY_PAGE ].includes(o) || D || console.error("码路由地址未配置，请检查配置文件scane-origin-map.js"), 
            o !== O.default.COUPON_ONE_CLICK_PAGE && void 0 !== D ? (0, p.setGlobalScaneOriginInfo)({
                scaneOrigin: o,
                path: D.path
            }) : (0, p.setGlobalScaneOriginInfo)({}), s.length > 0 ? this.gotoScaneOriginPageWithShopId(s, a) : this.gotoOriginPageWithNoShopId(D, {
                page: o,
                activityId: I,
                activityTypeId: _,
                url: T,
                locateShop: b
            });
        },
        logOnShow: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            try {
                var a = this.$getLogger();
                a.setPageParams({
                    ma_luyou: e,
                    ma_id: t
                }), a.onShow(this.spmInfo);
            } catch (e) {}
        },
        gotoOriginPageWithNoShopId: function(e, t) {
            var a = this, r = this.localData.origin;
            if (r && r === g.ORIGIN_WITH_MINI_PATH) 0 === this.localData.geoauth ? this.gotoScaneOriginPageWithNoShopId() : this.authGeoInfo(); else if (t.page === O.default.ACTIVITY_PAGE) {
                var n = t.activityId, o = t.activityTypeId, i = t.url, s = t.locateShop;
                m.scaneWithActivityPath.call(this, {
                    activityId: n,
                    activityTypeId: o,
                    url: i
                }), this.gotoScaneOriginPageWithNoShopId({
                    locateShop: s,
                    activityId: n
                });
            } else {
                var c = e.imgUrl, u = e.verticalCenter, l = void 0 !== u && u;
                this.setData({
                    bgUrl: c,
                    bgVerticalCenter: l
                }, function() {
                    a.checkSupportLoadingGif(t.page), t.page === O.default.COUPON_ONE_CLICK_PAGE ? (a.localData.path = e.path + "?activityId=".concat(t.activityId, "&activityTypeId=").concat(t.activityTypeId), 
                    a.gotoScaneOriginPageWithNoShopId()) : a.authGeoInfo();
                });
            }
        },
        authGeoInfo: function() {
            var e = this;
            this.recordGeoAuthStart(), h.default.get("GEO_FAILED_ALL") || _.default.isMinAuth().then(function(t) {
                t || e.setData({
                    showAuthBg: !0
                });
            }), _.default.auth(function(t) {
                e.recordGeoAuthEnd(!0), e.gotoScaneOriginPageWithNoShopId();
            }, function() {
                h.default.put("GEO_FAILED_ALL", !0, {
                    persistent: !0
                }), e.recordGeoAuthEnd(!1), e.gotoScaneOriginPageWithNoShopId();
            });
        },
        getGeoAuthInfo: function() {
            var e = getApp();
            return e ? e[u.logConstants.APP_GEO_AUTH_INFO] || (e[u.logConstants.APP_GEO_AUTH_INFO] = {
                startTime: "",
                duration: "",
                isAuthing: !1,
                isSuccess: !0
            }) : {};
        },
        recordGeoAuthStart: function() {
            var e = this.getGeoAuthInfo();
            e.startTime = +new Date(), e.isAuthing = !0, setTimeout(function() {
                E.other(u.logConstants.EVENT_HOME_PAGE_GEO_AUTH_START);
            }, 0);
        },
        recordGeoAuthEnd: function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t = this.getGeoAuthInfo();
            t.duration = +new Date() - t.startTime, t.isAuthing = !1, t.isSuccess = e, this.localData.geoTime = t.duration, 
            setTimeout(function() {
                E.other(u.logConstants.EVENT_HOME_PAGE_GEO_AUTH_END, t);
            }, 0);
        },
        gotoScaneOriginPageWithNoShopId: function(e) {
            var t = this;
            return n(r.default.mark(function a() {
                var n, o, s, c;
                return r.default.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return n = (0, p.getScaneOriginInfo)(), o = n.scaneOrigin, s = {
                            bizCode: "ROUTER_PAGE"
                        }, e && "Y" === e.locateShop ? Object.assign(s, {
                            tags: JSON.stringify([ "ACTIVITY_" + e.activityId ])
                        }) : o === O.default.DINNER_PAGE && Object.assign(s, {
                            tags: JSON.stringify([ "BIZ_TAG_MINI_APP", "BIZ_TAG_RESTAURANT" ])
                        }), a.next = 6, (0, i.getSmartStores)(s);

                      case 6:
                        (c = a.sent) && c.data && c.data.list && c.data.list[0] ? t.beforeProcessWithShopInfo({
                            data: c.data.list[0]
                        }, "") : t.gotoStoreListPage();

                      case 8:
                      case "end":
                        return a.stop();
                    }
                }, a);
            }))();
        },
        gotoScaneOriginPageWithShopId: function(e, t) {
            var a = this;
            return n(r.default.mark(function n() {
                var o;
                return r.default.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        if (o = {}, !(t && Object.keys(t).length > 0)) {
                            r.next = 5;
                            break;
                        }
                        o.data = t, r.next = 8;
                        break;

                      case 5:
                        return r.next = 7, (0, i.getStoreInfoById)({
                            shopId: e
                        });

                      case 7:
                        o = r.sent;

                      case 8:
                        a.beforeProcessWithShopInfo(o, e);

                      case 9:
                      case "end":
                        return r.stop();
                    }
                }, n);
            }))();
        },
        beforeProcessWithShopInfo: function(e, t) {
            var a;
            if (a = t.length > 0 ? "FEATURE_STOP" : "NO_SHOP", e && e.data) {
                var r = e.data, n = parseInt(r.storeStatus, 10), o = r.bizTags;
                0 === n && null !== o && o.indexOf("MINI_APP") > -1 ? this.processWithShopInfo(e) : (this.saveStoreInfoToCache(r), 
                this.$redirect("/pages/page-result/index", {
                    fromPage: "pages/store-list/index",
                    statusCode: a
                }, !0));
            } else this.gotoStoreListPage();
        },
        processWithShopInfo: function(e) {
            var t = this;
            this.saveStoreInfoToCache(e.data);
            var r = this.localData.path || "", n = getApp().globalData, o = (0, p.getScaneOriginInfo)(), i = o.scaneOrigin;
            0 === r.length && (r = o.path);
            var s = Date.now(), c = {};
            try {
                s = this.getAppStartTime() + this.localData.geoTime + this.localData.contractAuthTime, 
                c.realStartTime = s;
            } catch (e) {}
            if (r.startsWith(l.default.MINI_PATH.ORDER_FOOD_PATH) && n.codeValue && (c.fromPage = "qrcode"), 
            "pages/lightshop/index" === r) {
                var u = [ (0, S.default)({
                    useCache: !0,
                    cacheRequestSilent: !1,
                    cachePersistent: !1,
                    cacheTime: 1e4
                }) ];
                n.codeValue && (0, p.getTableId)() && u.push((0, f.fetchOrderByTable)()), Promise.all(u).then(function(e) {
                    var n = a(e, 2), o = (n[0], n[1]);
                    o && o.data && o.data.data && o.data.data.enablePlacedFromIndex ? t.$relaunch("/pages/zcordercheck/index", {
                        orderNo: o.data.data.orderInfo.orderNo,
                        tableId: o.data.data.orderInfo.tableCode
                    }) : (h.default.put("IS_FORM_MIDDLE_PAGE_WITH_PRELOAD", !0, {
                        keep: !0
                    }), t.$relaunch("/".concat(r), c));
                }).catch(function() {
                    t.$relaunch("/".concat(r), c);
                });
            } else {
                if (i === O.default.DINNER_PAGE && r.startsWith(l.default.MINI_PATH.ORDER_FOOD_PATH) && (this.recordPerformance("ORDERFOOD_PRELOAD_START"), 
                (0, f.orderfoodPreload)()), r.startsWith(l.default.MINI_PATH.RECHARGE_PATH)) {
                    r = this.formatJumpPath(r, "fromPage=qrcode&showBack=false&showHome=true");
                }
                if (r.startsWith(l.default.MINI_PATH.MEMBER_INDEX_PATH)) {
                    r = this.formatJumpPath(r, "showBack=false&showHome=true");
                }
                this.recordPerformance("RELAUNCH_HOME_TO_ORDERFOOD"), this.$relaunch("/".concat(r), c);
            }
        },
        formatJumpPath: function(e, t) {
            return e = e.indexOf("?") > -1 ? "".concat(e, "&").concat(t) : "".concat(e, "?").concat(t);
        },
        gotoStoreListPage: function() {
            var e = this.localData, t = e.origin, a = void 0 === t ? "" : t, r = e.path, n = void 0 === r ? "" : r;
            a === g.ORIGIN_WITH_MINI_PATH && n.length > 0 && (0, p.setGlobalMiniPath)(n), this.$redirect("/pages/store-list/index", {
                origin: O.default.HOME_PAGE
            }, !0);
        },
        saveStoreInfoToCache: function(e) {
            (0, p.setGlobalShopId)(e.shopId), (0, p.setGlobalShopInfo)({
                shopId: e.shopId,
                shopName: e.shopName,
                address: e.address,
                distanceDesc: e.distanceDesc,
                distanceValue: e.distanceValue,
                latitude: e.latitude,
                longitude: e.longitude,
                phone: e.phone,
                provinceId: e.provinceId,
                cityId: e.cityId,
                areaId: e.areaId
            });
        },
        clearMiniCacheInfo: function() {
            var e = (0, p.getTableId)();
            e && e.length > 0 && (0, p.removeTableId)();
            var t = (0, p.getShopId)();
            t && t.length > 0 && (0, p.removeShopId)(), (0, p.getShopInfo)() && (0, p.removeShopInfo)();
        },
        checkSupportLoadingGif: function(e) {
            [ O.default.HOME_PAGE, O.default.DINNER_PAGE ].includes(e) && this.setData({
                showLoadingGif: !0
            });
        }
    }
});