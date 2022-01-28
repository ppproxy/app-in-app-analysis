var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 177 ], {
    1053: function(e, t, o) {
        "use strict";
        o.r(t), function(e) {
            e.currentModuleId = "mba75a89a", e.currentCtor = Component, e.currentResourceType = "page", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "mba75a89a",
                render: function() {
                    this._c("isShowProbe", this.isShowProbe), this._c("bizType", this.bizType), this._c("mapStyle", this.mapStyle), 
                    this._c("toReportVehicleId", this.toReportVehicleId), this._c("isShowFixedParkingArea", this.isShowFixedParkingArea), 
                    this._c("cardStyle", this.cardStyle), this._c("eduImg", this.eduImg), this._c("unlockStatus", this.unlockStatus), 
                    this._c("unlockTitle", this.unlockTitle), 0 === this._c("unlockStatus", this.unlockStatus) && this._c("unlockState", this.unlockState), 
                    2 === this._c("unlockStatus", this.unlockStatus) && this._c("unlockConfigInfo.subTitle", this.unlockConfigInfo.subTitle), 
                    this._c("unlockStatus", this.unlockStatus), this._c("unlockStatus", this.unlockStatus), 
                    this._c("bizType", this.bizType), this._c("isEBike", this.isEBike) && this._c("unlockStatus", this.unlockStatus), 
                    this._r();
                }
            };
            o(392);
            e.currentModuleId;
        }.call(this, o(11));
    },
    392: function(e, t, o) {
        "use strict";
        var i = o(1), c = o.n(i), r = o(3), n = o.n(r), s = o(6), a = o.n(s), l = o(13), u = o.n(l), h = o(0), k = o.n(h), d = o(2), p = o(32), f = o(4), m = o(5), b = o(103), I = o(78), _ = o(16), S = o(9), g = o(35), v = o(34), T = o(8), y = o(222), C = o(7), w = o.n(C), O = o(15), x = o(60), E = o(43);
        Object(d.c)({
            data: {
                isShowProbe: {
                    show: !1,
                    type: 2
                },
                disclaimer: 1,
                failCode: 0,
                mapStyle: "height: 100%",
                unlockStateTimer: null,
                closeMapBubbleStatus: !1,
                unlockState: 0,
                checkStatusIndex: 0,
                unlockTitle: "开锁中",
                unlockStatus: 0,
                unlockConfigInfo: {},
                mapCtx: null,
                firstShow: !0,
                timerGetOrderInfo: null,
                timerOverOutTime: null,
                TimerCheckLockStatus: null,
                starUnlockTime: 0,
                unlockSuccessFlag: !1,
                currentMarketingInfo: {},
                cardStyle: "min-height: 600rpx;"
            },
            onLoad() {
                var e = this;
                return n()(k.a.mark(function t() {
                    return k.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            p.a.setTitle("开锁中"), e.initUnlock(), e.trackerShow(e.unlockStatus, w()(m.a, "getters.repairShow", !0));

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            onReady() {
                var e = this;
                return n()(k.a.mark(function t() {
                    return k.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            try {
                                f.a.track("bike_unlocking_sw", {
                                    business: e.bizType
                                });
                            } catch (e) {
                                console.log(e);
                            } finally {
                                Object(T.t)().then(function(t) {
                                    t && (e.cardStyle = "min-height: 660rpx;");
                                });
                            }

                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            computed: c()(c()({}, m.a.mapState([ "order", "location", "common", "ebike", "bike" ])), {}, {
                orderId() {
                    return this.common.curOrderInfo.orderId;
                },
                eduImg() {
                    return this.isEBike ? "https://pt-starimg.didistatic.com/static/starimg/img/uFN8Qh4o9M1638435552708.png" : "https://pt-starimg.didistatic.com/static/starimg/img/cV35V4Ycfb1638435549482.png";
                },
                info() {
                    var e = this.common;
                    if (e && e.curOrderInfo) return e.curOrderInfo.bizType === v.b.BIKE_TYPE ? e.curOrderInfo.htwDetail : e.curOrderInfo.bhDetail;
                },
                memberNoticeInfo() {
                    return this.currentMarketingInfo && this.currentMarketingInfo.memberNoticeInfo;
                },
                vehicleId() {
                    var e = this.common;
                    return this.isEBike && w()(e, "curOrderInfo.bh_deviceId", "") || w()(e, "curOrderInfo.lockNo", "");
                },
                toReportVehicleId() {
                    try {
                        var e = this.common;
                        if (e && e.curOrderInfo) return 1 === e.curOrderInfo.bizType ? e.curOrderInfo.htwDetail.vehicleId : w()(e, "curOrderInfo.bh_deviceId", "") || w()(e, "curOrderInfo.lockNo", "");
                    } catch (e) {}
                },
                bizType() {
                    return this.common.curOrderInfo.bizType;
                },
                isEBike() {
                    return this.common.curOrderInfo.bizType === v.b.EBIKE_TYPE;
                },
                isShowFixedParkingArea() {
                    return !(this.bizType !== v.b.BIKE_TYPE || !this.location.cityConfInfo) && 1 == +this.location.cityConfInfo.blueSpikeAreaSwitch;
                }
            }),
            methods: c()(c()({}, m.a.mapActions([ "getUnlockConfig", "getOrderStatus", "getUserCityId" ])), {}, {
                resetLocation() {
                    this.mapContext && this.mapContext.resetLocation && this.mapContext.resetLocation();
                },
                toCustom() {
                    Object(S.navigateTo)(O.e, {
                        url: "https://help.xiaojukeji.com/static/index.html?source=mini_hmck_home&isc_optimus_trueRole=73"
                    });
                },
                initMap(e) {
                    this.mapCtx = e.detail.mapCtx, this.mapContext = e.detail.mapThis;
                },
                applyRepair() {
                    var e, t;
                    Object(T.w)(a()(e = a()(t = "/m/hamRepairs.html#/repairs?entrance=1&type=broken&business=".concat(this.bizType, "&title=车辆报修&orderId=")).call(t, this.common.curOrderInfo.orderId, "&vehicleId=")).call(e, this.toReportVehicleId)), 
                    this.trackerClick(this.unlockStatus, 3, w()(m.a, "getters.repairShow", !0), w()(this.order, "unlockFail.eduContent"));
                },
                computeProcess(e, t, o) {
                    var i = this;
                    try {
                        this.unlockStateTimer && clearTimeout(this.unlockStateTimer);
                        var c = t / e;
                        this.unlockStateTimer = setTimeout(function t() {
                            i.unlockState >= e ? setTimeout(function() {
                                o && o();
                            }, 1e3) : (i.unlockState++, i.unlockStateTimer = setTimeout(t, c));
                        }, c);
                    } catch (e) {
                        console.log(e);
                    }
                },
                starBikeUnlock() {
                    var e = this;
                    this.starUnlockTime = new Date().getTime(), console.log(2 === this.info.lockType, "单车开锁"), 
                    this.info.lockType && 2 !== this.info.lockType ? (f.a.track("tech_start_unlock_bluetooth", {
                        locktype: this.info.lockType,
                        all_unlock_info: u()(this.info),
                        vehicle_id: this.info.vehicleId,
                        lock_id: this.vehicleId,
                        lock_type: this.info.lockType,
                        order_id: this.orderId
                    }), Object(b.b)(c()(c()({}, this.info), {}, {
                        orderId: this.orderId,
                        unlocking: !0
                    }), function(t) {
                        "string" == typeof t && (e.unlockFail(), Object(T.u)("unlockState", t));
                    }, function() {
                        var t = n()(k.a.mark(function t(o) {
                            var i, c, r, n, s;
                            return k.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return i = {}, c = e.bizType, r = e.info, n = e.location, s = e.orderId, t.prev = 2, 
                                    t.next = 5, _.beginService({
                                        bizType: c,
                                        deviceId: r.vehicleId,
                                        cityId: n.cityId,
                                        orderId: s
                                    }).catch(function(e) {
                                        console.log("新接口蓝牙上报失败", e);
                                    });

                                  case 5:
                                    i = t.sent, t.next = 11;
                                    break;

                                  case 8:
                                    t.prev = 8, t.t0 = t.catch(2), console.log(t.t0);

                                  case 11:
                                    console.log("蓝牙开锁成功时间", new Date().getTime() - e.starUnlockTime), i && (console.log("蓝牙开锁成功-----:", i), 
                                    f.a.track("tech_start_unlock_bluetooth_success", {
                                        locktype: e.info.lockType,
                                        all_unlock_info: u()(e.info),
                                        unlock_time: new Date().getTime() - e.starUnlockTime,
                                        vehicle_id: e.info.vehicleId,
                                        lock_id: e.vehicleId,
                                        lock_type: e.info.lockType,
                                        order_id: e.orderId
                                    }), e.computeProcess(100, 1e3, function() {}), o && "function" == typeof o && o());

                                  case 13:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 2, 8 ] ]);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }())) : Object(T.u)("非蓝牙锁不进入开锁");
                },
                starEbikeUnlock() {
                    var e, t = this, o = this.info, i = o.bluetoothSN, r = o.bluetoothKey, s = o.helmetLockId, a = void 0 === s ? "" : s, l = o.cmdType, h = void 0 === l ? 0 : l, d = new Date().getTime();
                    if (r && i) try {
                        var p = w()(m.a, "state.common.curOrderInfo.bhDetail.deviceCommandInfo", {});
                        this._stopBle = y.a.unlock({
                            bluetoothSN: i,
                            bluetoothKey: r,
                            orderId: this.orderId,
                            success: (e = n()(k.a.mark(function e(o) {
                                var i, r, n, s, a, l, h, p, b;
                                return k.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        if (!t.unlockSuccessFlag) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return");

                                      case 2:
                                        return i = t.bizType, t.info, r = t.location, n = t.orderId, s = t.vehicleId, a = o.cmdResult, 
                                        h = (l = void 0 === a ? {} : a).extInfo, p = void 0 === h ? {} : h, b = c()(c()({}, p), {}, {
                                            cmdResult: l
                                        }), e.next = 9, _.beginService({
                                            bizType: i,
                                            deviceId: s,
                                            cityId: r.cityId,
                                            orderId: n,
                                            extendParam: u()(b)
                                        }).catch(function(e) {
                                            console.log("新接口电单车蓝牙上报失败", e);
                                        });

                                      case 9:
                                        e.sent ? (t.unlockSuccess("ble"), f.a.track("tech_qj_wx_ble_unlock_success", {
                                            orderId: t.orderId,
                                            unlock_time: new Date().getTime() - d,
                                            ble_connection: w()(m.a, "getters.bleUnlockConnection", !1)
                                        })) : f.a.track("tech_qj_wx_ble_unlock_fail", {
                                            orderId: t.orderId
                                        });

                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                            })), function(t) {
                                return e.apply(this, arguments);
                            }),
                            extraParams: {
                                deviceCommandInfo: p && p.unlock,
                                helmetLockId: a,
                                cmdType: h
                            }
                        });
                    } catch (e) {
                        console.log(e);
                    }
                },
                unlockSuccess(e) {
                    var t = this;
                    try {
                        var o = "ble" === e, i = this.order, c = this.isEBike;
                        if (this.unlockSuccessFlag) return;
                        if (c && this.stopBle(!o), this.unlockSuccessFlag = !0, p.a.setTitle("开锁成功"), this.getUserCityId(), 
                        this.clearUnlockInterval(), this.unlockStatus = v.n.UNLOCK_SUCCESS, i.unlockConfig && i.unlockConfig.unlockSuc && (this.unlockConfigInfo = i.unlockConfig.unlockSuc, 
                        this.unlockTitle = "开锁成功"), c) {
                            if (w()(this.bike, "ebikebusinessExtStartCheck.popupWindow", !1)) {
                                var r = this;
                                setTimeout(function() {
                                    w()(r.bike, "faceDisclaimer", !1) ? Object(S.redirectTo)(O.s, {
                                        unlockStatus: r.unlockStatus,
                                        orderId: r.orderId,
                                        popupStatus: 1,
                                        form: "unlocking",
                                        info: u()(r.info),
                                        memberNoticeInfo: r.memberNoticeInfo
                                    }) : Object(S.redirectTo)(O.h, {
                                        orderId: t.orderId,
                                        disclaimer: t.disclaimer
                                    });
                                }, 1e3), f.a.track("tech_qj_hm_rental_service_finish_sw", {
                                    page: "unlocking",
                                    line: 432,
                                    disclaimer: w()(r.bike, "faceDisclaimer")
                                });
                            } else setTimeout(function() {
                                Object(S.redirectTo)(O.s, {
                                    unlockStatus: t.unlockStatus,
                                    orderId: t.orderId,
                                    popupStatus: 1,
                                    form: "unlocking",
                                    info: u()(t.info),
                                    memberNoticeInfo: t.memberNoticeInfo
                                });
                            }, 1e3);
                            f.a.track("ebikew_p_unlock_success", {
                                unlock_result: 1,
                                vehicleId: this.vehicleId,
                                isBle: o
                            });
                        } else setTimeout(function() {
                            Object(S.redirectTo)(O.s, {
                                unlockStatus: t.unlockStatus,
                                orderId: t.orderId,
                                popupStatus: 1,
                                form: "unlocking",
                                info: u()(t.info),
                                memberNoticeInfo: t.memberNoticeInfo
                            });
                        }, 1e3);
                        f.a.track("bike_unlocking_success", {
                            business: this.bizType,
                            vehicle_id: this.vehicleId,
                            isble: o,
                            order_id: this.orderId
                        }), this.trackerShow(this.unlockStatus, w()(m.a, "getters.repairShow", !0));
                    } catch (e) {
                        console.log(e);
                    }
                },
                isCurrentPage() {
                    return "/".concat(getCurrentPages().pop().route) === O.w;
                },
                unlockFail(e, t) {
                    var o = this;
                    return n()(k.a.mark(function i() {
                        var c, r, n, s, a, l, h, b, _, S, y;
                        return k.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                if (Object(T.u)("开锁失败"), i.prev = 1, o.isCurrentPage() && p.a.setTitle("开锁失败"), 
                                c = o.order, r = o.isEBike, o.unlockStatus = v.n.UNLOCK_FAIL, !t || !t.style) {
                                    i.next = 27;
                                    break;
                                }
                                if (n = t.title, s = t.subTitle, a = t.infoResult, l = t.lockFailType, h = t.educationIcon, 
                                5 != +t.style) {
                                    i.next = 13;
                                    break;
                                }
                                b = (a || {}).info, o.unlockConfigInfo = {
                                    subTitle: s,
                                    functionContent: b,
                                    operationSource: ""
                                }, o.unlockTitle = n, i.next = 19;
                                break;

                              case 13:
                                if (6 != +t.style) {
                                    i.next = 19;
                                    break;
                                }
                                return i.next = 16, g.j.trackEvent(g.b, {
                                    errData: u()({
                                        type: 10,
                                        helmetfailType: l,
                                        styleType: 2,
                                        orderId: o.orderId,
                                        cityId: w()(o.location, "cityId", -1),
                                        title: n,
                                        content: s,
                                        imgUrl: h
                                    })
                                }).catch(function(e) {
                                    console.log("取消头盔锁免责拦截", e);
                                });

                              case 16:
                                _ = i.sent, w()(o.bike, "ebikebusinessExtStartCheck.popupWindow", !1) && (m.a.commit(E.b, {
                                    disclaimer: 2
                                }), o.disclaimer = 2, f.a.track("tech_qj_hm_rental_service_finish_sw", {
                                    page: "unlocking",
                                    line: 517
                                })), _ && Object(I.d)();

                              case 19:
                                if (6 != +t.style) {
                                    i.next = 25;
                                    break;
                                }
                                return o.clearUnlockInterval(), f.a.track("bike_unlocking_Fail", {
                                    business: o.bizType,
                                    vehicle_id: o.vehicleId
                                }), S = o.failCode, f.a.track("ebikew_p_unlock_fail", {
                                    unlock_result: 0,
                                    vehicleId: w()(o.common, "curOrderInfo.lockNo", ""),
                                    helmet_id: w()(o.common, "curOrderInfo.bhDetail.helmetLockId", ""),
                                    type: S,
                                    act: e
                                }), i.abrupt("return");

                              case 25:
                                i.next = 28;
                                break;

                              case 27:
                                c.unlockConfig && c.unlockConfig.unlockFail && (o.unlockConfigInfo = c.unlockConfig.unlockFail, 
                                o.unlockTitle = "开锁失败");

                              case 28:
                                o.clearUnlockInterval(), d.d.closeBluetoothAdapter({
                                    complete: function() {
                                        Object(T.u)("关闭蓝牙适配器");
                                    }
                                }), f.a.track("bike_unlocking_Fail", {
                                    business: o.bizType,
                                    vehicle_id: o.vehicleId
                                }), r ? (y = o.failCode, f.a.track("ebikew_p_unlock_fail", {
                                    unlock_result: 0,
                                    vehicleId: o.common.curOrderInfo.lockNo,
                                    helmet_id: w()(o.common, "curOrderInfo.bhDetail.helmetLockId", ""),
                                    type: y,
                                    act: e
                                }), o.stopBle("ble"), m.a.commit(x.c, {
                                    ebikebusinessExtStartCheck: ""
                                })) : f.a.track("unlock_fail", {
                                    vehicleid: o.info.vehicleId,
                                    bicycletype: o.info.vehicleType,
                                    orderid: o.orderId,
                                    locktype: o.info.lockType,
                                    all_unlock_info: u()(o.info),
                                    vehicle_id: o.info.vehicleId,
                                    lock_id: o.vehicleId,
                                    lock_type: o.info.lockType,
                                    order_id: o.orderId
                                }), o.trackerShow(o.unlockStatus, w()(m.a, "getters.repairShow", !0), o.failCode), 
                                i.next = 38;
                                break;

                              case 35:
                                i.prev = 35, i.t0 = i.catch(1), console.log(i.t0);

                              case 38:
                              case "end":
                                return i.stop();
                            }
                        }, i, null, [ [ 1, 35 ] ]);
                    }))();
                },
                initUnlock() {
                    var e = this;
                    return n()(k.a.mark(function t() {
                        var o, i, c;
                        return k.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.prev = 0, o = e.order, i = e.isEBike, c = e.bizType, e.computeProcess(90, 11e3), 
                                i ? (e.starEbikeUnlock(), e.checkStatus(), e.checkUnlockTimeOut()) : (e.starBikeUnlock(), 
                                e.checkOrderStatus()), t.next = 6, e.getUnlockConfig({
                                    bizType: c,
                                    vehicleId: e.vehicleId || ""
                                }).catch(function(e) {
                                    console.log("获取开锁宣教配置页面错误", e);
                                });

                              case 6:
                                o.unlockConfig && o.unlockConfig.unlocking && (e.unlockConfigInfo = o.unlockConfig.unlocking), 
                                t.next = 12;
                                break;

                              case 9:
                                t.prev = 9, t.t0 = t.catch(0), console.log(t.t0);

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 0, 9 ] ]);
                    }))();
                },
                checkOrderStatus() {
                    var e = this;
                    return n()(k.a.mark(function t() {
                        var o, i, c, r;
                        return k.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (o = e.orderId, i = e.bizType, o) {
                                    t.next = 3;
                                    break;
                                }
                                return t.abrupt("return");

                              case 3:
                                return t.prev = 3, c = 1e3 * Number(e.location.cityConfInfo.ridingOrderCheckInterval || 5), 
                                e.timerGetOrderInfo = setTimeout(function() {
                                    e.checkOrderStatus();
                                }, c), t.next = 8, e.getOrderStatus({
                                    orderId: o,
                                    bizType: i
                                }).catch(function(e) {
                                    console.log("开锁中获取订单状态失败", e);
                                });

                              case 8:
                                if (r = t.sent) {
                                    t.next = 11;
                                    break;
                                }
                                return t.abrupt("return");

                              case 11:
                                if (i !== v.b.BIKE_TYPE) {
                                    t.next = 24;
                                    break;
                                }
                                t.t0 = r.orderStatus, t.next = t.t0 === v.a.NEW_ORDER ? 15 : t.t0 === v.a.BEGIN_ORDER ? 16 : t.t0 === v.a.FINISH_ORDER ? 19 : t.t0 === v.a.OVER_ORDER ? 21 : 23;
                                break;

                              case 15:
                                return t.abrupt("break", 24);

                              case 16:
                                return e.unlockSuccess(), console.log("骑行中"), t.abrupt("break", 24);

                              case 19:
                                return Object(S.navigateBack)(11), t.abrupt("break", 24);

                              case 21:
                                return e.unlockFail(), t.abrupt("break", 24);

                              case 23:
                                return t.abrupt("break", 24);

                              case 24:
                                t.next = 29;
                                break;

                              case 26:
                                t.prev = 26, t.t1 = t.catch(3), console.log(t.t1);

                              case 29:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 3, 26 ] ]);
                    }))();
                },
                clearUnlockInterval() {
                    this.checkStatusIndex = 0, this.timerGetOrderInfo && (clearTimeout(this.timerGetOrderInfo), 
                    this.timerGetOrderInfo = null), this.timerOverOutTime && (clearTimeout(this.timerOverOutTime), 
                    this.timerOverOutTime = null), this.TimerCheckLockStatus && (clearTimeout(this.TimerCheckLockStatus), 
                    this.timerOverOutTime = null);
                },
                checkStatus() {
                    var e = this, t = 1;
                    t = 0 === this.checkStatusIndex ? 1 : this.checkStatusIndex < 5 ? 2 : 4, console.log("开锁轮询时间", t, new Date()), 
                    this.TimerCheckLockStatus = setTimeout(n()(k.a.mark(function t() {
                        return k.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e.checkStatus(), e.fetchCheckLockStatus();

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    })), 1e3 * t), this.checkStatusIndex = this.checkStatusIndex + 1;
                },
                fetchCheckLockStatus() {
                    var e = this;
                    return n()(k.a.mark(function t() {
                        var o, i, c, r, n, s;
                        return k.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.prev = 0, t.next = 3, _.getUnlockStatus({
                                    orderId: e.orderId,
                                    vehicleId: e.vehicleId
                                }).catch(function(e) {
                                    console.log("获取锁状态失败", e);
                                });

                              case 3:
                                (o = t.sent) && (i = o.oprStatus, c = o.leftWaitingTime, r = o.failCode, n = o.content, 
                                e.failCode = r, 1 === i ? e.unlockSuccess() : 2 !== i && c || (s = c ? "statusError" : "noLeftTime", 
                                e.unlockFail(s, n))), t.next = 10;
                                break;

                              case 7:
                                t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 0, 7 ] ]);
                    }))();
                },
                checkUnlockTimeOut() {
                    var e = this, t = 1e3 * this.ebike.unlockStatusCheckTimeout || 3e4;
                    this.timerOverOutTime = setTimeout(function() {
                        e.unlockFail("noTime");
                    }, t);
                },
                stopBle(e) {
                    try {
                        this._stopBle && (e && this._stopBle(), this._stopBle = null);
                    } catch (e) {
                        console.log(e);
                    }
                },
                closeMapBubble() {
                    this.closeMapBubbleStatus = !0;
                    var e = this.currentMarketingInfo && this.currentMarketingInfo.memberNoticeAction;
                    "function" == typeof e && e();
                },
                toCustom() {
                    Object(S.navigateTo)(O.e, {
                        url: "https://help.xiaojukeji.com/static/index.html?source=mini_hmck_home&isc_optimus_trueRole=73"
                    }), this.trackerClick(this.unlockStatus, 4, w()(m.a, "getters.repairShow", !0), w()(this.order, "unlockFail.eduContent"));
                },
                toScan() {
                    this.trackerClick(this.unlockStatus, 1, w()(m.a, "getters.repairShow", !0), w()(this.order, "unlockFail.eduContent"));
                },
                toFind() {
                    this.trackerClick(this.unlockStatus, 2, w()(m.a, "getters.repairShow", !0), w()(this.order, "unlockFail.eduContent"));
                },
                trackerShow(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, o = arguments.length > 2 ? arguments[2] : void 0;
                    f.a.track("qj_wx_lock_state_sw", {
                        biz_type: this.bizType,
                        type: e,
                        element_fault: t,
                        reason: o
                    });
                },
                trackerClick(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    f.a.track("qj_wx_lock_state_ck", {
                        biz_type: this.bizType,
                        action: t,
                        type: e,
                        element_fault: o
                    });
                }
            }),
            onHide() {
                this.firstShow = !1, this.unlockStatus !== v.n.UNLOCK_SUCCESS && f.a.track("tech_leave_page_unlocking", {
                    bicycletype: this.common.vehicleType,
                    orderid: this.orderId,
                    locktype: this.info.lockType,
                    channel: "onHide",
                    lock_id: this.vehicleId,
                    lock_type: this.info.lockType,
                    order_id: this.orderId,
                    bizType: this.bizType
                });
            },
            onUnload() {
                this.firstShow = !1, this.clearUnlockInterval(), this.unlockStatus !== v.n.UNLOCK_SUCCESS && f.a.track("tech_leave_page_unlocking", {
                    bicycletype: this.common.vehicleType,
                    orderid: this.orderId,
                    locktype: this.info.lockType,
                    channel: "onUnload",
                    lock_id: this.info.lockNo,
                    lock_type: this.info.lockType,
                    order_id: this.orderId,
                    bizType: this.bizType
                });
            }
        });
    }
}, [ [ 1053, 0 ] ] ]);
//# sourceMappingURL=unlocking.js.map