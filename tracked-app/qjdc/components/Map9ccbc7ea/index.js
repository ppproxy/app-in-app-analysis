var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 36 ], {
    1077: function(e, t, n) {
        "use strict";
        n.r(t), function(e) {
            e.currentModuleId = "m9ccbc7ea", e.currentCtor = Component, e.currentResourceType = "component", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "m9ccbc7ea",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("mapId", this.mapId), 
                    this._c("scale", this.scale), this._c("polygons", this.polygons), this._c("polylineList", this.polylineList), 
                    this._c("centerLng", this.centerLng), this._c("centerLat", this.centerLat), this._c("markers", this.markers), 
                    this._c("includePoints", this.includePoints), this._c("showLocation", this.showLocation), 
                    this._c("minScale", this.minScale), this._c("mapStyle", this.mapStyle), this._c("isShowProbe.show", this.isShowProbe.show) && this._c("showCenter", this.showCenter) && this._c("probeSrc", this.probeSrc) && this._c("probeSrc", this.probeSrc), 
                    this._c("linkImg", this.linkImg), this._c("tipConfig.show", this.tipConfig.show) && this._c("tipConfig.content", this.tipConfig.content), 
                    this._c("homeBubbleConfigs.title", this.homeBubbleConfigs.title) && (this._c("homeBubbleConfigs", this.homeBubbleConfigs), 
                    this._c("homeBubbleConfigs.bubbleIconURL", this.homeBubbleConfigs.bubbleIconURL) && this._c("homeBubbleConfigs.bubbleIconURL", this.homeBubbleConfigs.bubbleIconURL), 
                    this._c("homeBubbleConfigs.title", this.homeBubbleConfigs.title), this._c("homeBubbleConfigs.content", this.homeBubbleConfigs.content) && this._c("homeBubbleConfigs.content", this.homeBubbleConfigs.content), 
                    this._c("homeBubbleConfigs.jumpURL", this.homeBubbleConfigs.jumpURL)), this._c("isLocation", this.isLocation) && (this._c("isBuyCard", this.isBuyCard) || this._c("appointmentBubble", this.appointmentBubble) || this._c("bubbleInfo", this.bubbleInfo) && this._c("bubbleInfo.isShow", this.bubbleInfo.isShow)), 
                    this._c("bubbleInfo", this.bubbleInfo) && this._c("bubbleInfo.isShow", this.bubbleInfo.isShow) && !this._c("layerLink", this.layerLink) && (this._c("flowText", this.flowText), 
                    this._c("closeIcon", this.closeIcon) && this._c("closeIcon", this.closeIcon)), this._c("appointmentBubble", this.appointmentBubble) && !this._c("layerLink", this.layerLink) && (this._c("appointBubble", this.appointBubble), 
                    this._c("closeIcon", this.closeIcon) && this._c("closeIcon", this.closeIcon)), this._c("isBuyCard", this.isBuyCard) && (this._c("buyCardContent.title", this.buyCardContent.title), 
                    this._c("buyCardContent.subtitle", this.buyCardContent.subtitle), this._c("closeIcon", this.closeIcon) && this._c("closeIcon", this.closeIcon)), 
                    this._c("isBuyCard", this.isBuyCard) || this._c("appointmentBubble", this.appointmentBubble) || this._c("bubbleInfo", this.bubbleInfo) && this._c("bubbleInfo.isShow", this.bubbleInfo.isShow), 
                    this._c("isCustom", this.isCustom), this._c("isRepair", this.isRepair) && this._c("bizType", this.bizType), 
                    this._c("isRepair", this.isRepair) && this._c("bizType", this.bizType), this._c("layerLink", this.layerLink) && (this._c("enableAd", this.enableAd), 
                    this._c("layerLink", this.layerLink), this._c("closeIcon", this.closeIcon)), this._c("customerOptions", this.customerOptions), 
                    this._r();
                }
            };
            n(416);
            e.currentModuleId;
        }.call(this, n(11));
    },
    416: function(e, t, n) {
        "use strict";
        var i = n(741), o = n.n(i), a = n(3), r = n.n(a), s = n(1), c = n.n(s), l = n(0), u = n.n(l), p = n(6), h = n.n(p), d = n(31), g = n.n(d), b = n(58), m = n.n(b), k = n(44), f = n.n(k), y = n(14), v = n.n(y), L = n(13), w = n.n(L), x = n(26), I = n.n(x), C = n(76), S = n.n(C), _ = n(12), P = n.n(_), B = n(2), T = n(9), O = n(4), R = n(5), A = n(8), E = n(101), H = n(116), z = n(39), M = n(93), N = n(34), j = n(16), V = n(66), D = n(7), U = n.n(D), F = n(15);
        console.log("------blankPath------", F.e);
        var W = null, J = null;
        Object(B.b)({
            data: {
                noParkIconBool: !1,
                homeBubbleConfigs: {
                    content: "",
                    bubbleIconURL: "",
                    jumpURL: "",
                    title: "",
                    type: null
                },
                closeIcon: "https://pt-starimg.didistatic.com/static/starimg/img/pPOwFFaMo01621587273059.png",
                mapCtx: null,
                scale: 5,
                flowText: "",
                noAreaLineList: [],
                setLoadStatus: !1,
                showCenter: !0,
                isResetStatus: !1,
                updateMap: !0,
                cansetBestView: !0,
                canFetch: !1,
                useCenterStatus: !1,
                includePoints: [],
                currentMarkerInfo: {},
                tipConfig: {
                    show: !1,
                    content: null
                },
                opRegionPolygons: {
                    Hm: [],
                    Ht: []
                },
                opRegionBorder: {
                    Hm: [],
                    Ht: []
                },
                vehicleMarker: {
                    Hm: [],
                    Ht: []
                },
                parkingMarker: {
                    Hm: [],
                    Ht: []
                },
                parkingPolygon: {
                    Hm: [],
                    Ht: []
                },
                noParkingMarker: {
                    Hm: [],
                    Ht: []
                },
                noParkingPolygon: {
                    Hm: [],
                    Ht: []
                },
                fixedParkingAreaPolygon: {
                    Hm: [],
                    Ht: []
                },
                fixedParkingAreaBorder: {
                    Hm: [],
                    Ht: []
                },
                startPoint: [],
                markerCallout: [],
                loadLineList: [],
                selectSpotId: null,
                markerDetail: {
                    distance: 0,
                    duration: 0
                },
                centerLng: null,
                centerLat: null,
                nearest: null,
                customerOptions: {
                    open: !1,
                    content: "",
                    btnOk: {
                        text: "稍后再来"
                    }
                },
                riskTagsInfo: {},
                riskTimer: null,
                windowHeight: 0
            },
            properties: {
                hmBubbleEdu: {
                    type: Object,
                    value: {
                        type: null,
                        icon: "",
                        content: "",
                        bubbleIconURL: "",
                        jumpURL: "",
                        title: ""
                    }
                },
                prePage: {
                    type: String,
                    value: ""
                },
                scene: {
                    type: String,
                    value: ""
                },
                noParkingPolygonIcon: {
                    type: Boolean,
                    value: !1
                },
                noParkIcon: {
                    type: Boolean,
                    value: !1
                },
                isSearchSpot: {
                    type: Boolean,
                    value: !1
                },
                isLocation: {
                    type: Boolean,
                    value: !0
                },
                mapId: {
                    type: String,
                    value: "map"
                },
                showLocation: {
                    type: Boolean,
                    value: !0
                },
                noPlanLoad: {
                    type: Boolean,
                    value: !1
                },
                isShowProbe: {
                    type: Object,
                    value: {
                        show: !0,
                        type: 1
                    }
                },
                isShowVehicle: {
                    type: Boolean,
                    value: !0
                },
                initFetch: {
                    type: Boolean,
                    value: !0
                },
                isShowParking: {
                    type: Boolean,
                    value: !1
                },
                isShowOpRegion: {
                    type: Boolean,
                    value: !0
                },
                moveFetch: {
                    type: Boolean,
                    value: !0
                },
                mapStyle: {
                    type: String,
                    value: ""
                },
                linkImg: {
                    type: Boolean,
                    value: !0
                },
                bizType: {
                    type: Number,
                    value: 1
                },
                bubbleInfo: {
                    type: Object
                },
                opRegionBestView: {
                    type: Boolean,
                    value: !1
                },
                isBuyCard: {
                    type: Boolean,
                    value: !1
                },
                isRepair: {
                    type: Boolean,
                    value: !1
                },
                isCustom: {
                    type: Boolean,
                    value: !1
                },
                sence: {
                    type: Number,
                    value: null
                },
                markerList: {
                    type: Array,
                    value: []
                },
                noCard: {
                    type: Boolean,
                    value: !0
                },
                showNearPark: {
                    type: Boolean,
                    value: !0
                },
                noArea: {
                    type: Boolean,
                    value: !1
                },
                isCommonSearch: {
                    type: Boolean,
                    value: !1
                },
                noChange: {
                    type: Boolean,
                    value: !1
                },
                toReportVehicleId: {
                    type: String,
                    value: ""
                },
                isShowFixedParkingArea: {
                    type: Boolean,
                    value: !1
                },
                bFixedParkAreaBestView: {
                    type: Boolean,
                    value: !1
                },
                bParkingAreaBestView: {
                    type: Boolean,
                    value: !0
                },
                isShowParkSpotDetail: {
                    type: Boolean,
                    value: !1
                },
                appointmentBubble: {
                    type: Boolean,
                    value: !1
                },
                appointBubble: {
                    type: String,
                    value: ""
                },
                pageType: {
                    type: String,
                    value: ""
                },
                layerLink: {
                    type: String,
                    value: ""
                },
                enableAd: {
                    type: String,
                    value: 0
                },
                buyCardContent: {
                    type: Object,
                    value: {
                        jumpLink: "",
                        subtitle: "",
                        title: ""
                    }
                },
                isBikeNav: {
                    type: Boolean,
                    value: !1
                },
                isEBikeNav: {
                    type: Boolean,
                    value: !1
                },
                isAppointmentBike: {
                    type: Boolean,
                    value: !1
                },
                setScale: {
                    type: Number,
                    value: 5
                },
                polylineMsg: {
                    type: Array,
                    value: []
                },
                polygonMsg: {
                    type: Array,
                    value: []
                },
                minScale: {
                    type: Number,
                    value: 3
                }
            },
            computed: c()(c()({}, R.a.mapState([ "location", "user", "common", "ebike" ])), {}, {
                closeLockWay() {
                    if (this.isEBike) return -1;
                    var e = this.common;
                    return U()(e, "curOrderInfo.htwDetail.closeLockWay", 0);
                },
                isEBike() {
                    return this.common.curOrderInfo.bizType === N.b.EBIKE_TYPE;
                },
                type() {
                    return 1 === this.bizType ? "Ht" : "Hm";
                },
                probeSrc() {
                    var e = this.isShowProbe;
                    return 1 === e.type ? "//pt-starimg.didistatic.com/static/starimg/img/98uw4SaORS1567491374626.png" : 2 === e.type ? "https://pt-starimg.didistatic.com/static/starimg/img/xQGkoQX05i1621587406471.png" : "Hm" === this.type ? "https://pt-starimg.didistatic.com/static/starimg/img/JpwZ8ROPZS1621587298433.png" : "https://pt-starimg.didistatic.com/static/starimg/img/hAOelB79gA1621587317539.png";
                },
                polygons() {
                    var e, t = this.opRegionPolygons, n = this.parkingPolygon, i = this.noParkingPolygon, o = this.fixedParkingAreaPolygon, a = this.type, r = this.polygonMsg;
                    return h()(e = t[a]).call(e, n[a], i[a], o[a], r);
                },
                markers() {
                    var e, t = this.vehicleMarker, n = this.parkingMarker, i = this.noParkingMarker, o = this.type, a = this.startPoint, r = this.markerCallout, s = this.markerList, c = h()(e = t[o]).call(e, n[o], i[o], a, r, s);
                    return Array.isArray(c) ? g()(c).call(c, function(e) {
                        var t;
                        return e.iconPath = m()(t = e.iconPath).call(t), e;
                    }) : [];
                },
                polylineList() {
                    var e, t = this.opRegionBorder, n = this.loadLineList, i = this.type, o = this.noAreaLineList, a = this.fixedParkingAreaBorder, r = this.polylineMsg;
                    return h()(e = t[i]).call(e, n, o, a[i], r);
                }
            }),
            ready() {
                var e = this;
                return r()(u.a.mark(function t() {
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.prev = 0, t.next = 3, e.getUserLocation();

                          case 3:
                            if (e.centerLng = e.location.longitude, e.centerLat = e.location.latitude, e.centerLng) {
                                t.next = 8;
                                break;
                            }
                            return Object(T.showToast)("GPS信号弱，请确认GPS是否开启"), t.abrupt("return");

                          case 8:
                            return t.next = 10, wx.createMapContext(e.mapId, e);

                          case 10:
                            e.mapCtx = t.sent, e.mapCtx.autoSetLoadLine = e.autoSetLoadLine.bind(e), e.mapCtx.setLoadLine = e.setLoadLine.bind(e), 
                            e.mapCtx.updateCenterLocation = e.updateCenterLocation.bind(e), e.mapCtx.setOpRegionBestView = e.setOpRegionBestView.bind(e), 
                            e.mapCtx.fetchHmParkingSpot = e.fetchHmParkingSpot.bind(e), e.mapCtx.moveToLocation = e.moveToLocation.bind(e), 
                            e.mapCtx.init = e.init.bind(e), e.debounceNearbyVehicles = Object(A.g)(e.fetchHmNearbyVehicles, 500), 
                            e.debounceParkingSpot = Object(A.g)(e.fetchHmParkingSpot, 500), e.debounceUpdateCenterLocation = Object(A.F)(e.updateCenterLocation, 1e3), 
                            e.init(), e.getPhoneHeight(), e.triggerEvent("initMap", {
                                mapCtx: e.mapCtx,
                                mapThis: e
                            }), t.next = 29;
                            break;

                          case 26:
                            t.prev = 26, t.t0 = t.catch(0), console.log(t.t0);

                          case 29:
                          case "end":
                            return t.stop();
                        }
                    }, t, null, [ [ 0, 26 ] ]);
                }))();
            },
            detached() {
                W && (clearTimeout(W), W = null), this.riskTimer && (clearTimeout(this.riskTimer), 
                this.riskTimer = null);
            },
            methods: c()(c()({
                getPhoneHeight() {
                    var e = this;
                    try {
                        wx.getSystemInfoAsync({
                            success: function(t) {
                                var n = t.windowHeight;
                                e.windowHeight = .7 * n;
                            }
                        });
                    } catch (e) {
                        console.log("获取高度失败", e);
                    }
                },
                rendererror(e) {
                    this.triggerEvent("rendererror", e);
                },
                bubbleJump(e) {
                    e.jumpURL && Object(T.navigateTo)(F.e, {
                        url: e.jumpURL
                    });
                },
                torepair() {
                    var e = this;
                    return r()(u.a.mark(function t() {
                        var n, i, o;
                        return u.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (e.triggerEvent("torepair"), t.prev = 1, o = e.common.curOrderInfo.orderId || "", 
                                "Hm" !== e.type) {
                                    t.next = 9;
                                    break;
                                }
                                return t.next = 6, Object(A.D)(o);

                              case 6:
                                O.a.track("ebikew_p_riding_help_break_ck", {
                                    orderId: o,
                                    vehicleId: e.toReportVehicleId
                                }), t.next = 11;
                                break;

                              case 9:
                                O.a.track("tech_do_repair", {
                                    orderid: o,
                                    vehicleid: e.common.curOrderInfo.lockNo,
                                    locktype: e.common.curOrderInfo.htwDetail.lockType,
                                    entrance: 10,
                                    vehicle_id: e.common.curOrderInfo.lockNo,
                                    lock_id: e.common.curOrderInfo.lockNo,
                                    lock_type: e.common.curOrderInfo.htwDetail.lockType,
                                    order_id: e.common.curOrderInfo.orderId,
                                    bizType: e.common.curOrderInfo.bizType
                                }), O.a.track("qj_wx_riding_repair_ck", {
                                    locktype: U()(e.common, "curOrderInfo.htwDetail.lockType", ""),
                                    entrance: 10,
                                    vehicle_id: U()(e.common, "curOrderInfo.lockNo", ""),
                                    lock_id: U()(e.common, "curOrderInfo.lockNo", ""),
                                    lock_type: U()(e.common, "curOrderInfo.htwDetail.lockType", ""),
                                    order_id: U()(e.common, "curOrderInfo.orderId", ""),
                                    bizType: U()(e.common, "curOrderInfo.bizType", ""),
                                    biz_type: U()(e.common, "curOrderInfo.bizType", "")
                                });

                              case 11:
                                t.next = 16;
                                break;

                              case 13:
                                t.prev = 13, t.t0 = t.catch(1), console.log(t.t0);

                              case 16:
                                Object(A.w)(h()(n = h()(i = "/m/hamRepairs.html#/repairs?entrance=3&type=broken&business=".concat(e.bizType, "&title=车辆报修&orderId=")).call(i, e.common.curOrderInfo.orderId, "&vehicleId=")).call(n, e.toReportVehicleId));

                              case 17:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 1, 13 ] ]);
                    }))();
                },
                closeCustomerConfirm() {
                    this.customerOptions = c()(c()({}, this.customerOptions), {}, {
                        open: !1
                    }), O.a.track("qj_wx_kefu_queue_ck", c()({}, this.riskTagsInfo)), clearTimeout(this.riskTimer), 
                    this.riskTimer = null;
                },
                tocustom() {
                    this.triggerEvent("tocustom");
                    var e = this.common.curOrderInfo.orderId;
                    this.fetchQueryUserRiskTags("https://help.xiaojukeji.com/static/index.html?source=mini_hmck_home&isc_optimus_trueRole=73"), 
                    O.a.track("ebikew_p_riding_help_service_ck", {
                        orderId: e
                    });
                },
                fetchQueryUserRiskTags(e) {
                    var t = this;
                    return r()(u.a.mark(function n() {
                        var i;
                        return u.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.prev = 0, n.next = 3, Object(j.queryUserRiskTags)({
                                    lng: t.location.longitude,
                                    lat: t.location.latitude,
                                    bizType: t.bizType
                                });

                              case 3:
                                (i = n.sent) && 100001 !== i.riskType && i.frontMsg && i.waitTime > 0 ? (t.riskTagsInfo = {
                                    biz_type: t.bizType,
                                    user_btype: i.riskType,
                                    hold_time: i.waitTime
                                }, t.customerOptions = c()(c()({}, t.customerOptions), {}, {
                                    content: i.frontMsg,
                                    open: !0
                                }), O.a.track("qj_wx_kefu_queue_sw", c()({}, t.riskTagsInfo)), t.riskTimer = setTimeout(function() {
                                    t.customerOptions = c()(c()({}, t.customerOptions), {}, {
                                        open: !1
                                    }), Object(T.navigateTo)(F.e, {
                                        url: e
                                    });
                                }, 60 * i.waitTime * 1e3)) : Object(T.navigateTo)(F.e, {
                                    url: e
                                }), n.next = 11;
                                break;

                              case 7:
                                n.prev = 7, n.t0 = n.catch(0), console.log(n.t0), Object(T.navigateTo)(F.e, {
                                    url: e
                                });

                              case 11:
                              case "end":
                                return n.stop();
                            }
                        }, n, null, [ [ 0, 7 ] ]);
                    }))();
                }
            }, R.a.mapActions([ "getHmOpRegionInfo", "getHmNearbyVehiclesInfo", "getHmParkingSpotInfo", "getUserLocation", "getHmFixedParkingArea" ])), {}, {
                init() {
                    var e = this;
                    return r()(u.a.mark(function t() {
                        return u.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (e.mapCtx) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                e.scale = e.setScale || 5, e.cansetBestView = !0, e.clearLoadLine(), e.fetchOpRegionData(), 
                                e.fetchHmParkingSpot(), e.fetchHmNearbyVehicles({
                                    isInit: !0
                                }), e.isShowFixedParkingArea && e.setFixedParkingArea(), e.stopRegionChange();

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                fetchOpRegionData() {
                    var e = this;
                    return r()(u.a.mark(function t() {
                        var n, i, o, a, r, s, l, p, d, b, m, k, y, L, w, x;
                        return u.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.prev = 0, e.isShowOpRegion) {
                                    t.next = 3;
                                    break;
                                }
                                return t.abrupt("return");

                              case 3:
                                return n = [], i = [], o = e.bizType, a = e.type, r = e.common, s = e, l = {
                                    bizType: o
                                }, r.curOrderInfo && r.curOrderInfo.htwDetail && r.curOrderInfo.htwDetail.lockType && (l.lockType = r.curOrderInfo.htwDetail.lockType), 
                                t.next = 11, e.getHmOpRegionInfo(l);

                              case 11:
                                (p = t.sent) && (d = p.opRegionList, b = p.spOpRegionList, d && d.length > 0 && (1 == +e.bizType && (2 == +e.closeLockWay ? d = b : b && b.length && (d = f()(d).call(d, function(e) {
                                    return b.some(function(t) {
                                        return t.groupId == e.groupId;
                                    });
                                }))), d.forEach(function(e) {
                                    var t = s.handleWxPoints(e.coordinates || []);
                                    n.push(c()({
                                        points: t
                                    }, V.g)), i.push(c()({
                                        points: h()(t).call(t, t[0])
                                    }, V.h));
                                })), e.noArea && (k = [], y = [], g()(m = p.opRegionList[0].coordinates).call(m, function(t, n) {
                                    var i = Object(H.a)({
                                        latitude: e.centerLat,
                                        longitude: e.centerLng
                                    }, {
                                        latitude: t.lat,
                                        longitude: t.lng
                                    });
                                    k.push(i), y.push({
                                        latitude: t.lat,
                                        longitude: t.lng
                                    });
                                }), L = v()(k).call(k, Math.min.apply(Math, k)), e.noAreaLineList = [ c()({
                                    points: [ {
                                        latitude: e.centerLat,
                                        longitude: e.centerLng
                                    }, {
                                        latitude: p.opRegionList[0].coordinates[L].lat,
                                        longitude: p.opRegionList[0].coordinates[L].lng
                                    } ]
                                }, V.p) ], w = [ {
                                    longitude: e.centerLng,
                                    latitude: e.centerLat
                                } ], x = h()(y).call(y, w), e.mapCtx.includePoints({
                                    points: x,
                                    padding: [ 70, 70, 70, 70 ]
                                })), e.opRegionPolygons[a] = n, e.opRegionBorder[a] = i), e.opRegionBestView && e.setOpRegionBestView(), 
                                t.next = 19;
                                break;

                              case 16:
                                t.prev = 16, t.t0 = t.catch(0), console.log(t.t0);

                              case 19:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 0, 16 ] ]);
                    }))();
                },
                fetchHmParkingSpot() {
                    var e = arguments, t = this;
                    return r()(u.a.mark(function n() {
                        var i, o, a, r, s, l, p, h, d, b, m, k, f, y, v, L, x, C, S, _, P;
                        return u.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (i = e.length > 0 && void 0 !== e[0] ? e[0] : {}, n.prev = 1, t.isShowParking) {
                                    n.next = 4;
                                    break;
                                }
                                return n.abrupt("return");

                              case 4:
                                return o = t.bizType, t.centerLng, t.centerLat, t.vehicleMarker, a = t.type, r = t.location, 
                                s = r.latitude, l = r.longitude, t.isFirstFetchSpot || t.useCenterStatus || (s = t.location.latitude, 
                                l = t.location.longitude, t.isFirstFetchSpot = !0), p = {
                                    bizType: o,
                                    currentLng: l || 0,
                                    currentLat: s || 0
                                }, 1 === U()(t.common, "curOrderInfo.bizType", 1) ? p.vehicleId = U()(t.common, "curOrderInfo.htwDetail.vehicleId", "") : p.vehicleId = U()(t.common, "curOrderInfo.lockNo", ""), 
                                i && i.longitude && (p.currentLng = i.longitude, p.currentLat = i.latitude), null != t.sence && (p.scene = t.sence), 
                                n.next = 13, t.getHmParkingSpotInfo(p);

                              case 13:
                                if (h = n.sent, console.log("parkingSpotResult: ", h), t.useCenterStatus = !1, !h) {
                                    n.next = 46;
                                    break;
                                }
                                if (d = h.nearbyParkingSpotList, b = h.noParkingAreaList, "findBike" === t.scene && O.a.track("bike_map_drag", {
                                    type: "findPark",
                                    business: t.bizType,
                                    amount: d.length,
                                    orderId: t.common.curOrderInfo.orderId
                                }), m = [], k = [], f = [], y = [], t.triggerEvent("handelGuideConfig", {
                                    title: h.title,
                                    desc: h.desc,
                                    url: h.iconUrl,
                                    regionEdgeExtendDis: h.regionEdgeExtendDis,
                                    areaStatus: h.areaStatus,
                                    nearbyParkingSpotList: h.nearbyParkingSpotList,
                                    noParkingAreaList: h.noParkingAreaList
                                }), !(d && d.length > 0) || t.noParkIconBool) {
                                    n.next = 34;
                                    break;
                                }
                                if (v = 0, "riding" !== t.scene) {
                                    n.next = 33;
                                    break;
                                }
                                return n.next = 29, t.getUserLocation();

                              case 29:
                                L = n.sent, x = g()(d).call(d, function(e) {
                                    return {
                                        longitude: e.centerLng,
                                        latitude: e.centerLat
                                    };
                                }), (C = Object(H.b)(L || {}, x)) && (v = C.index);

                              case 33:
                                d.forEach(function(e, n) {
                                    var i = null, o = 0, a = e.tags, r = !(!a || !a.length || "bluetooth_spike" != a[0].tagType), s = r ? a && a.length && a[0].tagName : "";
                                    t.showNearPark && n === v ? (o = 1, (i = r ? V.n : V.e).width = t.setLoadStatus ? 60 : 45, 
                                    i.height = t.setLoadStatus ? 46 : 35, "riding" == t.prePage && t.isCommonSearch) : i = r ? V.o : V.j;
                                    var l = c()({
                                        id: w()({
                                            latitude: e && e.centerLat,
                                            longitude: e && e.centerLng,
                                            spotId: e && e.spotId,
                                            type: o,
                                            date: new Date().getTime()
                                        }),
                                        markerId: e && e.spotId,
                                        latitude: e && e.centerLat || 0,
                                        longitude: e && e.centerLng || 0,
                                        type: o,
                                        spotName: e && e.spotName,
                                        spotPlaceName: e && e.spotPlaceName,
                                        imageList: e && e.imageList,
                                        spotImgUrl: e && e.spotImgUrl,
                                        isBluetoothSpike: r,
                                        tagName: s,
                                        eduImgUrl: e && e.eduImgUrl
                                    }, i);
                                    t.showNearPark && n === v && "riding" == t.prePage && t.isCommonSearch && (l.callout = {
                                        content: "最近停车点",
                                        color: "#000",
                                        fontSize: 14,
                                        borderRadius: 25,
                                        bgColor: "#fff",
                                        padding: 5,
                                        display: "ALWAYS"
                                    }), m.push(l), k.push(c()({
                                        points: t.handleWxPoints(e.coordinates || [])
                                    }, V.i));
                                });

                              case 34:
                                b && b.length > 0 && !t.noParkingPolygonIcon && b.forEach(function(e) {
                                    f.push(c()({
                                        latitude: e.centerLat || 0,
                                        longitude: e.centerLng || 0
                                    }, V.r)), y.push(c()({
                                        points: t.handleWxPoints(e.coordinates || [])
                                    }, V.q));
                                }), S = U()(R.a, "state.common.apolloConfig", {}), _ = S && S[z.WX_SEARCH_MAP_BEST_VIEW_CONFIG] || !1, 
                                P = m && I()(m).call(m, 0, _.num_parkingspot) || [], t.bParkingAreaBestView && ("riding" == t.prePage && t.isCommonSearch ? t.setBestView(P, "nearbyParkingSpot") : t.setBestView(m, "nearbyParkingSpot")), 
                                t.parkingMarker[a] = m, t.parkingPolygon[a] = k, t.noParkingMarker[a] = f, t.noParkingPolygon[a] = y, 
                                "Hm" === a && t.isCommonSearch && t.showTip(m, "nearbyParkingSpot"), n.next = 47;
                                break;

                              case 46:
                                t.triggerEvent("handelGuideConfig", {
                                    error: !0
                                });

                              case 47:
                                n.next = 52;
                                break;

                              case 49:
                                n.prev = 49, n.t0 = n.catch(1), console.log(n.t0);

                              case 52:
                              case "end":
                                return n.stop();
                            }
                        }, n, null, [ [ 1, 49 ] ]);
                    }))();
                },
                setFixedParkingArea() {
                    var e = this;
                    return r()(u.a.mark(function t() {
                        var n, i, o, a, r, s, l;
                        return u.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e.type, i = e.common, o = {}, i.curOrderInfo && i.curOrderInfo.htwDetail && i.curOrderInfo.htwDetail.lockType && (o.lockType = i.curOrderInfo.htwDetail.lockType), 
                                t.prev = 3, t.next = 6, e.getHmFixedParkingArea(o);

                              case 6:
                                if (a = t.sent) {
                                    t.next = 9;
                                    break;
                                }
                                return t.abrupt("return");

                              case 9:
                                (r = a.parkingAreaInfoList) && r.length && (s = [], l = [], r.forEach(function(t) {
                                    var n = e.handleWxPoints(t.coordinates || []), i = U()(t, "displayStyle.displayColor"), o = new S.a([ [ 1, {
                                        area: V.a,
                                        line: V.b
                                    } ], [ 2, {
                                        area: V.c,
                                        line: V.d
                                    } ], [ "default", {
                                        area: V.c,
                                        line: V.d
                                    } ] ]).get(i), a = o.area, r = o.line;
                                    s.push(c()({
                                        points: n
                                    }, a)), l.push(c()({
                                        points: h()(n).call(n, n[0])
                                    }, r));
                                }), e.fixedParkingAreaPolygon[n] = s, e.fixedParkingAreaBorder[n] = l, e.bFixedParkAreaBestView && e.mapCtx && e.mapCtx.includePoints({
                                    points: s[0].points,
                                    padding: [ 30, 30, 30, 30 ]
                                })), t.next = 16;
                                break;

                              case 13:
                                t.prev = 13, t.t0 = t.catch(3), Object(A.u)("获取定点停车区失败", t.t0);

                              case 16:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 3, 13 ] ]);
                    }))();
                },
                fetchHmNearbyVehicles(e) {
                    var t = this;
                    return r()(u.a.mark(function n() {
                        var i, o, a, r, s, l, p, h, d, g, b, m, k;
                        return u.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (n.prev = 0, i = (e || {}).isInit, o = void 0 !== i && i, "Ht" == t.type && (t.markerCallout = []), 
                                t.isShowVehicle) {
                                    n.next = 5;
                                    break;
                                }
                                return n.abrupt("return");

                              case 5:
                                return a = t.bizType, t.centerLng, t.centerLat, r = t.vehicleMarker, s = t.type, 
                                n.next = 8, t.getCenter();

                              case 8:
                                return l = n.sent, p = l.latitude, h = l.longitude, t.isFirstFetchVehicle || (p = t.location.latitude, 
                                h = t.location.longitude, t.isFirstFetchVehicle = !0), d = 3, "findBike" === t.pageType && (d = o ? 1 : 2), 
                                n.next = 16, t.getHmNearbyVehiclesInfo({
                                    bizType: a,
                                    lng: h,
                                    lat: p,
                                    scene: d
                                });

                              case 16:
                                if (g = n.sent, b = [], !g) {
                                    n.next = 29;
                                    break;
                                }
                                return m = g.vehiclePosInfoList || [], n.next = 22, t.canAppointmentBike(m);

                              case 22:
                                k = n.sent, t.triggerEvent("handelGuideConfig", {
                                    title: g.title,
                                    desc: g.desc,
                                    url: g.iconUrl,
                                    regionEdgeExtendDis: g.regionEdgeExtendDis,
                                    areaStatus: g.areaStatus,
                                    nearbyParkingSpotList: g.nearbyParkingSpotList,
                                    canAppointment: k
                                }), "findBike" === t.scene && O.a.track("bike_map_drag", {
                                    type: "findBike",
                                    business: t.bizType,
                                    nearBike: m[0],
                                    amount: m.length,
                                    orderId: t.common.curOrderInfo.orderId
                                }), m.forEach(function(e, n) {
                                    b.push(c()(c()({
                                        id: w()({
                                            latitude: e.lat,
                                            longitude: e.lng,
                                            vehicleId: e && e.vehicleId,
                                            endurance: e.endurance
                                        }),
                                        latitude: e.lat || 0,
                                        longitude: e.lng || 0
                                    }, V.m[s]), {}, {
                                        iconPath: e.iconUrl2x || N.o[1 === t.bizType ? "bike" : "ebike"]
                                    }));
                                }), t.setBestView(b, "vehicle"), r[s] = b, "riding" != t.prePage && t.showTip(r[s], "vehicle");

                              case 29:
                                n.next = 34;
                                break;

                              case 31:
                                n.prev = 31, n.t0 = n.catch(0), console.log(n.t0);

                              case 34:
                              case "end":
                                return n.stop();
                            }
                        }, n, null, [ [ 0, 31 ] ]);
                    }))();
                },
                handleWxPoints() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return g()(e).call(e, function(e) {
                        return {
                            latitude: e.lat || 0,
                            longitude: e.lng || 0
                        };
                    });
                },
                updateCenterLocation(e, t) {
                    var n = arguments, i = this;
                    return r()(u.a.mark(function o() {
                        var a, r, s, c, l, p;
                        return u.a.wrap(function(o) {
                            for (;;) switch (o.prev = o.next) {
                              case 0:
                                if (a = n.length > 2 && void 0 !== n[2] ? n[2] : "map", r = n.length > 3 && void 0 !== n[3] && n[3], 
                                o.prev = 2, r && (i.isShowParking = !0), s = null, c = null, l = null, !t || !e) {
                                    o.next = 20;
                                    break;
                                }
                                return s = e, c = t, i.centerLng = 0, i.centerLat = 0, i.centerLng = c, i.centerLat = s, 
                                i.useCenterStatus = !0, i.fetchHmParkingSpot({
                                    longitude: c,
                                    latitude: s
                                }), i.debounceNearbyVehicles(), o.abrupt("return");

                              case 20:
                                return o.next = 22, i.getCenter();

                              case 22:
                                p = o.sent, s = p.latitude, c = p.longitude;

                              case 25:
                                if (l || (l = Object(H.a)({
                                    latitude: i.centerLat,
                                    longitude: i.centerLng
                                }, {
                                    latitude: s,
                                    longitude: c
                                })), !i.centerLng || !i.centerLat || "map" != a) {
                                    o.next = 29;
                                    break;
                                }
                                if (!(l < 30) || i.isResetStatus) {
                                    o.next = 29;
                                    break;
                                }
                                return o.abrupt("return");

                              case 29:
                                i.debounceParkingSpot(), i.debounceNearbyVehicles(), o.next = 36;
                                break;

                              case 33:
                                o.prev = 33, o.t0 = o.catch(2), console.log(o.t0);

                              case 36:
                              case "end":
                                return o.stop();
                            }
                        }, o, null, [ [ 2, 33 ] ]);
                    }))();
                },
                moveToLocation() {
                    var e = this;
                    return r()(u.a.mark(function t() {
                        return u.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (e.setLoadStatus && (e.loadLineList = [], e.startPoint = [], e.markerCallout = [], 
                                e.showCenter = !0, e.setLoadStatus = !1), e.cansetBestView = !0, O.a.track("bike_reset_ck", {
                                    business: e.bizType
                                }), t.prev = 3, 0 !== e.markerList.length) {
                                    t.next = 8;
                                    break;
                                }
                                e.mapCtx && e.mapCtx.updateCenterLocation(U()(e.location, "latitude", ""), U()(e.location, "longitude", "")), 
                                t.next = 11;
                                break;

                              case 8:
                                return t.next = 10, e.getUserLocation();

                              case 10:
                                e.mapCtx && e.mapCtx.updateCenterLocation(e.markerList[0].latitude, e.markerList[0].longitude);

                              case 11:
                                t.next = 16;
                                break;

                              case 13:
                                t.prev = 13, t.t0 = t.catch(3), console.log("error", t.t0);

                              case 16:
                                e.$forceUpdate();

                              case 17:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 3, 13 ] ]);
                    }))();
                },
                appointmentMoveToLocation() {
                    var e = this;
                    return r()(u.a.mark(function t() {
                        return u.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (e.cansetBestView = !0, O.a.track("bike_reset_ck", {
                                    business: e.bizType
                                }), 0 !== e.markerList.length) {
                                    t.next = 6;
                                    break;
                                }
                                e.mapCtx && e.mapCtx.updateCenterLocation(U()(e.location, "latitude", ""), U()(e.location, "longitude", "")), 
                                t.next = 9;
                                break;

                              case 6:
                                return t.next = 8, e.getUserLocation();

                              case 8:
                                e.mapCtx && e.mapCtx.updateCenterLocation(e.markerList[0].latitude, e.markerList[0].longitude);

                              case 9:
                                e.$forceUpdate();

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                bindRegionChange(e) {
                    this.noChange || (this.firstChange = !0, "end" === e.type && this.updateMap && this.canFetch && !this.setLoadStatus && (console.log("this.updateMap: ", this.updateMap, this.canFetch, this.setLoadStatus), 
                    this.debounceUpdateCenterLocation()), this.updateMap = !0);
                },
                getCenter() {
                    var e = this;
                    return new P.a(function(t, n) {
                        e.$nextTick(function() {
                            e.mapCtx.getCenterLocation({
                                success: function(e) {
                                    var n = e.latitude, i = e.longitude;
                                    t({
                                        latitude: n,
                                        longitude: i
                                    });
                                },
                                fail: function(e) {
                                    t({
                                        latitude: 0,
                                        longitude: 0
                                    });
                                }
                            });
                        });
                    });
                },
                setBestView() {
                    var e = arguments, t = this;
                    return r()(u.a.mark(function n() {
                        var i, o, a, s, c;
                        return u.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (i = e.length > 0 && void 0 !== e[0] ? e[0] : [], o = e.length > 1 ? e[1] : void 0, 
                                t.cansetBestView && !t.opRegionBestView) {
                                    n.next = 4;
                                    break;
                                }
                                return n.abrupt("return");

                              case 4:
                                if (t.cansetBestView = !1, !i || 0 !== i.length) {
                                    n.next = 9;
                                    break;
                                }
                                return t.scale = 16, setTimeout(r()(u.a.mark(function e() {
                                    var n, i;
                                    return u.a.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            return n = a, e.next = 3, t.mapCtx.getScale();

                                          case 3:
                                            i = e.sent, t.scale = i, t.scale = n;

                                          case 6:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }))), n.abrupt("return");

                              case 9:
                                return a = 16, t.updateMap = !1, s = [], t, n.next = 15, t.getCenter();

                              case 15:
                                c = n.sent, i.forEach(function(e) {
                                    Object(H.a)(e, c) < 200 && s.push(e);
                                }), "vehicle" === o && (a = s.length > 9 ? 17 : 16), "nearbyParkingSpot" === o && (a = s.length > 0 ? 17 : 16), 
                                setTimeout(r()(u.a.mark(function e() {
                                    var n, i;
                                    return u.a.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            return n = a, e.next = 3, t.mapCtx.getScale();

                                          case 3:
                                            i = e.sent, t.scale = i, t.scale = n;

                                          case 6:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                })));

                              case 20:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                bindMarkerTap(e) {
                    var t = this;
                    return r()(u.a.mark(function n() {
                        var i, o, a, r, s, c, l, p, h, d;
                        return u.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                "Hm" === t.type && O.a.track("ebikew_p_riding_spot_ck", {
                                    orderId: t.common.curOrderInfo.orderId
                                }), (t.isBikeNav || t.isEBikeNav) && O.a.track("qj_wx_riding_parking_ck", {
                                    order_id: t.common.curOrderInfo.orderId,
                                    biz_type: t.bizType
                                }), i = {}, o = U()(e, "detail.markerId", "");
                                try {
                                    i = JSON.parse(o);
                                } catch (e) {
                                    i = {};
                                }
                                if (o && t.triggerEvent("mapMarkerTap", JSON.parse(o)), 0 !== i.type && 1 !== i.type) {
                                    n.next = 28;
                                    break;
                                }
                                if (!t.isShowParkSpotDetail) {
                                    n.next = 26;
                                    break;
                                }
                                a = t.parkingMarker[t.type], J && (J.width = 45, J.height = 35), r = 0, s = a.length;

                              case 11:
                                if (!(r < s)) {
                                    n.next = 26;
                                    break;
                                }
                                if (c = a[r], l = c.markerId, p = c.latitude, h = c.longitude, d = c.spotName, l !== i.spotId || !d) {
                                    n.next = 23;
                                    break;
                                }
                                return J = c, console.log("item666: ", c), c.width = 60, c.height = 46, t.triggerEvent("clickSpotEvent", c), 
                                t.setLoadLine(w()({
                                    latitude: p,
                                    longitude: h
                                }), 1 === t.bizType && t.isBikeNav), t.triggerEvent("showParkSpotDetail", c), n.abrupt("break", 26);

                              case 23:
                                r++, n.next = 11;
                                break;

                              case 26:
                                n.next = 30;
                                break;

                              case 28:
                                o && t.triggerEvent("markerInfo", JSON.parse(o)), i.latitude && t.setLoadLine(o);

                              case 30:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                autoSetLoadLine() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.parkingMarker, i = this.type;
                    if (n[i] && n[i].length > 0) {
                        var o = n[i][0];
                        this.setLoadLine(w()(o), e), "findBike" === this.pageType && this.triggerEvent("markerInfo", w()(o)), 
                        o.spotName && (t && (o.isReadyLockPop = !0), this.triggerEvent("showParkSpotDetail", o)), 
                        this.showCenter = !1;
                    } else 1 === this.bizType && this.isBikeNav && Object(T.showToast)("附近无停车点");
                },
                autoSetBikeLoadLine() {
                    var e = this.vehicleMarker, t = this.type;
                    if (e[t] && e[t].length > 0) {
                        var n = e[t][0];
                        n.id && this.triggerEvent("markerInfo", JSON.parse(n.id)), this.setLoadLine(w()(n));
                    }
                },
                resetLocation() {
                    var e = this;
                    this.isResetStatus = !0, 1 === this.bizType && this.isBikeNav && J && this.isShowParkSpotDetail && (J = null), 
                    this.isAppointmentBike ? this.appointmentMoveToLocation() : this.moveToLocation(), 
                    this.triggerEvent("resetLocation"), setTimeout(function() {
                        e.isResetStatus = !1;
                    });
                },
                setLoadLine(e) {
                    var t = arguments, n = this;
                    return r()(u.a.mark(function i() {
                        var o, a, r, s, l, p, d, g, b, m, k, f, y, v, L, w, x, I, C, S, _, P;
                        return u.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                if (o = t.length > 1 && void 0 !== t[1] && t[1], i.prev = 1, 1 !== n.bizType && !n.noPlanLoad || o) {
                                    i.next = 4;
                                    break;
                                }
                                return i.abrupt("return");

                              case 4:
                                if (n.showCenter = !1, n.location, n.centerLng, n.centerLat, s = n.markerList, l = e && JSON.parse(e), 
                                n.currentMarkerInfo.latitude !== l.latitude || !n.setLoadStatus) {
                                    i.next = 9;
                                    break;
                                }
                                return i.abrupt("return");

                              case 9:
                                if (n.setLoadStatus = !0, n.currentMarkerInfo = l, p = 0, d = 0, g = 0, b = 0, 1 !== n.startPoint.length) {
                                    i.next = 20;
                                    break;
                                }
                                g = n.startPoint[0].latitude, b = n.startPoint[0].longitude, i.next = 29;
                                break;

                              case 20:
                                if (!s || 1 !== s.length) {
                                    i.next = 24;
                                    break;
                                }
                                g = s[0].latitude, b = s[0].longitude, i.next = 29;
                                break;

                              case 24:
                                return i.next = 26, n.getCenter();

                              case 26:
                                m = i.sent, g = m.latitude, b = m.longitude;

                              case 29:
                                return i.next = 31, E.i({
                                    from: h()(a = "".concat(g, ",")).call(a, b),
                                    to: h()(r = "".concat(l.latitude, ",")).call(r, l.longitude)
                                });

                              case 31:
                                if (k = i.sent, f = [ {
                                    latitude: g,
                                    longitude: b
                                } ], y = {
                                    color: "#151515",
                                    fontSize: 12,
                                    borderRadius: 16,
                                    bgColor: "#fff",
                                    padding: 10,
                                    display: "ALWAYS"
                                }, v = k && k.result && k.result.routes && k.result.routes.length) {
                                    for (w = k.result.routes[0], x = w.polyline, I = w.distance, C = w.duration, I && (p = I), 
                                    C && (d = C), S = 2; S < x.length; S++) x[S] = x[S - 2] + x[S] / 1e6;
                                    for (_ = 0; _ < x.length; _ += 2) f.push({
                                        latitude: x[_],
                                        longitude: x[_ + 1]
                                    });
                                    0 == d && 0 != p && (d = 1), y.content = h()(L = "距离".concat(p, "米，约步行")).call(L, d, "分钟");
                                } else p = Object(H.a)({
                                    latitude: g,
                                    longitude: b
                                }, {
                                    latitude: l.latitude,
                                    longitude: l.longitude
                                }), y.content = "距离".concat(p, "米");
                                f.push(l), n.loadLineList = v ? [ c()({
                                    points: f
                                }, V.p) ] : [ c()({
                                    points: f
                                }, V.f) ], {}, s && 0 === s.length && 1 === n.isShowProbe.type ? n.startPoint = [ c()({
                                    latitude: g,
                                    longitude: b
                                }, V.u) ] : s && 0 === s.length && 2 === n.isShowProbe.type && (n.startPoint = [ c()({
                                    latitude: g,
                                    longitude: b
                                }, V.t.MD) ]), n.markerCallout = [ c()(c()({
                                    callout: y
                                }, V.l), {}, {
                                    zIndex: 0
                                }, l) ], n.stopRegionChange(), n.mapCtx.includePoints({
                                    points: f,
                                    padding: [ 70, 70, 70, 70 ]
                                }), n.nearest && (P = Object(H.a)({
                                    latitude: n.nearest.lat,
                                    longitude: n.nearest.lng
                                }, {
                                    latitude: R.a.state.location.latitude,
                                    longitude: R.a.state.location.longitude
                                }), O.a.track("bike_bike_ebike_ck", {
                                    nearest: P,
                                    distance: p
                                }), R.a.commit(M.b, {
                                    nearest: P
                                })), i.next = 49;
                                break;

                              case 46:
                                i.prev = 46, i.t0 = i.catch(1), console.log("路径规划报错", i.t0);

                              case 49:
                              case "end":
                                return i.stop();
                            }
                        }, i, null, [ [ 1, 46 ] ]);
                    }))();
                },
                newSetLoadLine(e, t) {
                    var n = this;
                    return r()(u.a.mark(function i() {
                        var o, a, r, s, l, p, d, g, b, m, k, f, y, v, L, w, x;
                        return u.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                if (i.prev = 0, !e || !t) {
                                    i.next = 19;
                                    break;
                                }
                                return s = 0, l = 0, n.setLoadStatus = !0, i.next = 7, E.i({
                                    from: h()(o = "".concat(e.latitude, ",")).call(o, e.longitude),
                                    to: h()(a = "".concat(t.latitude, ",")).call(a, t.longitude)
                                });

                              case 7:
                                if (p = i.sent, d = [], g = {
                                    color: "#151515",
                                    fontSize: 12,
                                    borderRadius: 16,
                                    bgColor: "#fff",
                                    padding: 10,
                                    display: "ALWAYS"
                                }, b = p && p.result && p.result.routes) {
                                    for (k = p.result.routes[0], f = k.polyline, y = k.distance, v = k.duration, s = y || 0, 
                                    l = v || 0, L = 2; L < f.length; L++) f[L] = f[L - 2] + f[L] / 1e6;
                                    for (w = 0; w < f.length; w += 2) d.push({
                                        latitude: f[w],
                                        longitude: f[w + 1]
                                    });
                                    0 == l && 0 != s && (l = 1), g.content = h()(m = "距离".concat(s, "米，约步行")).call(m, l, "分钟");
                                } else s = Object(H.a)({
                                    latitude: e.latitude,
                                    longitude: e.longitude
                                }, {
                                    latitude: t.latitude,
                                    longitude: t.longitude
                                }), g.content = "距离".concat(s, "米");
                                t.width = 60, t.height = 46, x = h()(r = [ e ]).call(r, d, [ t ]), n.loadLineList = b ? [ c()({
                                    points: x
                                }, V.p) ] : [ c()({
                                    points: x
                                }, V.f) ], n.markerCallout = [ c()(c()({
                                    callout: g
                                }, V.l), {}, {
                                    zIndex: 0
                                }, t) ], n.stopRegionChange(), n.mapCtx.includePoints({
                                    points: x,
                                    padding: [ 70, 70, n.windowHeight / 2, 70 ]
                                });

                              case 19:
                                i.next = 24;
                                break;

                              case 21:
                                i.prev = 21, i.t0 = i.catch(0), console.log("ROAD_PALN_ERROR", i.t0);

                              case 24:
                              case "end":
                                return i.stop();
                            }
                        }, i, null, [ [ 0, 21 ] ]);
                    }))();
                },
                clearLoadLine() {
                    var e = this;
                    try {
                        if (this.showCenter = !0, this.setLoadStatus = !1, 0 === this.markerList.length) return;
                        this.moveToLocation(), this.loadLineList = [], this.startPoint = [], this.markerCallout = [], 
                        this.cansetBestView = !0, setTimeout(r()(u.a.mark(function t() {
                            var n, i;
                            return u.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = e.scale, t.next = 3, e.mapCtx.getScale();

                                  case 3:
                                    i = t.sent, e.scale = i, e.scale = n;

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        })));
                    } catch (e) {
                        console.log(e);
                    }
                },
                tapMapOtherArea() {
                    this.triggerEvent("MapOtherArea"), this.isAppointmentBike || (this.markerCallout = [], 
                    this.setLoadStatus && this.moveToLocation(), J && this.isShowParkSpotDetail && (J = null, 
                    this.triggerEvent("showParkSpotDetail", {
                        action: "cancel"
                    })));
                },
                stopRegionChange() {
                    var e = this;
                    this.canFetch = !1, setTimeout(function() {
                        e.canFetch = !0;
                    }, 1e3);
                },
                showTip() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 ? arguments[1] : void 0;
                    this.tipConfig.show = !1, this.tipConfig.content = null, 0 === e.length && (this.tipConfig.show = !0, 
                    this.tipConfig.content = {
                        nearbyParkingSpot: "附近无还车点",
                        vehicle: "附近无车辆可用"
                    }[t]);
                },
                setOpRegionBestView() {
                    var e = this;
                    try {
                        var t = this.opRegionPolygons, n = this.type;
                        if (0 === t[n].length) return;
                        setTimeout(function() {
                            try {
                                var i = [];
                                1 === e.bizType ? t[n].forEach(function(e) {
                                    e.points.forEach(function(e) {
                                        i.push(e);
                                    });
                                }) : i = t[n][0].points, e.mapCtx.includePoints({
                                    points: i,
                                    padding: [ 20, 20, 20, 20 ]
                                });
                            } catch (e) {
                                console.log(e);
                            }
                        }, 1e3);
                    } catch (e) {
                        console.log(e);
                    }
                },
                closeBubble() {
                    this.triggerEvent("tocloseBubble");
                },
                toBuyCard() {
                    this.triggerEvent("handleBuyCard");
                },
                close() {
                    this.triggerEvent("hanleCloseBuyCard");
                },
                canAppointmentBike() {
                    var e = arguments, t = this;
                    return r()(u.a.mark(function n() {
                        var i, o, a, r, s, l, p, h, d, g, b, m, k;
                        return u.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (i = e.length > 0 && void 0 !== e[0] ? e[0] : [], n.prev = 1, "findBike" == t.pageType) {
                                    n.next = 4;
                                    break;
                                }
                                return n.abrupt("return");

                              case 4:
                                if (!(i.length <= 0)) {
                                    n.next = 7;
                                    break;
                                }
                                return t.markerCallout = [], n.abrupt("return");

                              case 7:
                                if (1 != t.bizType) {
                                    n.next = 9;
                                    break;
                                }
                                return n.abrupt("return");

                              case 9:
                                return o = 0, a = t.ebike, r = a.bookDistanceLimit, s = a.bookNumberLimit, l = a.isBookSupport, 
                                n.next = 13, t.getCenter().catch(function(e) {
                                    console.log(e);
                                });

                              case 13:
                                if (p = n.sent) {
                                    n.next = 16;
                                    break;
                                }
                                return n.abrupt("return", !1);

                              case 16:
                                return h = 0, d = 0, g = 0, b = 0, i.length && i.forEach(function(e) {
                                    Object(H.a)({
                                        latitude: e.lat,
                                        longitude: e.lng
                                    }, p) <= r && o++;
                                    var t = Object(H.a)({
                                        latitude: e.lat,
                                        longitude: e.lng
                                    }, p);
                                    t < 500 ? b++ : t < 200 ? g++ : t < 100 ? d++ : t < 50 && h++;
                                }), 1 === l && o <= s && i.length ? (m = {
                                    latitude: i[0].lat,
                                    longitude: i[0].lng,
                                    vehicleId: i[0].vehicleId
                                }, k = t.common.apolloConfig && t.common.apolloConfig[z.HM_DYNAMIC_TEXT_CONFIG].book_bike_map_tip || "点击车辆可预约，出行保证有车骑", 
                                t.markerCallout = [ c()(c()({
                                    callout: {
                                        content: k,
                                        color: "#151515",
                                        fontSize: 12,
                                        borderRadius: 44,
                                        bgColor: "#fff",
                                        padding: 10,
                                        display: "ALWAYS"
                                    }
                                }, V.l), {}, {
                                    zIndex: 30
                                }, m) ], t.nearest = i[0], O.a.track("bike_bike_bubble_sw", {
                                    nearest: Object(H.a)({
                                        latitude: i[0].lat,
                                        longitude: i[0].lng
                                    }, {
                                        latitude: R.a.state.location.latitude,
                                        longitude: R.a.state.location.longitude
                                    })
                                })) : t.markerCallout = [], n.abrupt("return", {
                                    appoint: !!(1 === l && o <= s),
                                    amount50: h,
                                    amount100: d,
                                    amount200: g,
                                    amount500: b
                                });

                              case 25:
                                n.prev = 25, n.t0 = n.catch(1);

                              case 27:
                              case "end":
                                return n.stop();
                            }
                        }, n, null, [ [ 1, 25 ] ]);
                    }))();
                },
                closeLayer() {
                    this.triggerEvent("spokesmanClose");
                },
                onloadLayer() {
                    this.triggerEvent("spokesmanOnload");
                },
                bubbleAction() {
                    this.bubbleInfo.action && "function" == typeof this.bubbleInfo.action && this.bubbleInfo.action();
                },
                getIncludePoint(e) {
                    var t = this, n = setTimeout(function() {
                        clearTimeout(n);
                        try {
                            t.mapCtx.includePoints(e);
                        } catch (e) {
                            console.log(e);
                        }
                    }, 1e3);
                }
            }),
            watch: {
                noParkIcon(e) {
                    this.noParkIconBool = e;
                },
                hmBubbleEdu: function(e) {
                    this.homeBubbleConfigs = e;
                },
                bizType: function() {
                    this.bizType && this.init();
                },
                selectSpotId: function() {
                    var e, t = this, n = this.markerDetail;
                    this.parkingMarker[this.type] = g()(e = this.parkingMarker[this.type]).call(e, function(e) {
                        if (e.markerId === t.selectSpotId) {
                            var i, a = n.duration, r = n.distance;
                            0 == a && 0 != r && o()("duration"), e.callout = {
                                content: h()(i = "".concat(r, "米·")).call(i, a, "分钟"),
                                color: "#fff",
                                fontSize: 12,
                                borderRadius: 16,
                                bgColor: "#2E2E3ACC",
                                padding: 10,
                                display: "ALWAYS"
                            };
                        } else e.callout = {};
                        return e;
                    });
                },
                bubbleInfo: function() {
                    this.bubbleInfo && this.bubbleInfo.content && (this.flowText = this.bubbleInfo.content);
                },
                isShowFixedParkingArea(e) {
                    var t = this;
                    !0 === e && this.mapCtx ? this.setFixedParkingArea() : W = setTimeout(function() {
                        t.fixedParkingAreaPolygon = {
                            Hm: [],
                            Ht: []
                        }, t.fixedParkingAreaBorder = {
                            Hm: [],
                            Ht: []
                        };
                    });
                }
            }
        });
    },
    741: function(e, t) {
        e.exports = function(e) {
            throw new TypeError('"' + e + '" is read-only');
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    }
}, [ [ 1077, 0 ] ] ]);
//# sourceMappingURL=index.js.map