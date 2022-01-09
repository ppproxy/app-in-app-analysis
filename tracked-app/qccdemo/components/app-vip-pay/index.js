(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/app-vip-pay/index" ], {
    "2d5a": function(t, e, o) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(o("a34a")), r = o("2f62"), u = i(o("325c"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e, o, n, r, u, i) {
                try {
                    var a = t[u](i), s = a.value;
                } catch (t) {
                    return void o(t);
                }
                a.done ? e(s) : Promise.resolve(s).then(n, r);
            }
            function s(t) {
                return function() {
                    var e = this, o = arguments;
                    return new Promise(function(n, r) {
                        var u = t.apply(e, o);
                        function i(t) {
                            a(u, n, r, i, s, "next", t);
                        }
                        function s(t) {
                            a(u, n, r, i, s, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            function c(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), o.push.apply(o, n);
                }
                return o;
            }
            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(o), !0).forEach(function(e) {
                        l(t, e, o[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : c(Object(o)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                    });
                }
                return t;
            }
            function l(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t;
            }
            var d = {
                name: "app-vip-pay",
                props: {
                    paySourceType: {
                        type: String,
                        default: ""
                    },
                    isScroll: {
                        type: Boolean,
                        default: !1
                    },
                    needSVip: {
                        type: Boolean,
                        default: !1
                    },
                    isTabBarPage: {
                        type: Boolean,
                        default: !1
                    },
                    height: {
                        type: String,
                        default: ""
                    },
                    customTop: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        bgImg: "",
                        vipOrderList: [],
                        sVipOrderList: [],
                        loading: !1,
                        pageIndex: 1,
                        loadingUse: !1,
                        pageIndexUn: 1,
                        loadingUnUse: !1,
                        goodInfo: null,
                        totalAmount: 0,
                        couponList: [],
                        unCouponList: [],
                        couponPop: !1,
                        currentTab: 0,
                        vipSelectGood: null,
                        sVipSelectGood: null,
                        couponCount: 0,
                        selectCoupon: null,
                        unCouponCount: 0,
                        couponScroll: 0,
                        showCouponTab: !1,
                        usedCode: !1,
                        bgColor: "#D7E6F3",
                        vipPrivilegeList: [],
                        sVipPrivilegeList: [],
                        isInit: !1
                    };
                },
                computed: {
                    isSVIP: function() {
                        return this.$store.state.userInfo.userInfo.isSVIP || !1;
                    },
                    isVIP: function() {
                        return this.$store.state.userInfo.userInfo.isVIP || !1;
                    },
                    isIPhone: function() {
                        return this.$store.state.systemInfo.isIPhone || !1;
                    },
                    platform: function() {
                        return this.$store.state.systemInfo.platform;
                    }
                },
                mounted: function() {
                    this.timer && clearInterval(this.timer), this.getList(this.needSVip ? "sVip" : "vip");
                },
                watch: {
                    totalAmount: function(t) {
                        t < 0 && (this.totalAmount = 0);
                    }
                },
                methods: p(p({}, (0, r.mapActions)({
                    checkLogin: "checkLogin",
                    refreshToken: "refreshToken"
                })), {}, {
                    getList: function() {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "vip", o = "/v1/order/getGoodsList";
                        this.$request({
                            url: o,
                            method: "GET",
                            data: {
                                category: e.toLowerCase()
                            }
                        }).then(function(o) {
                            if (200 === o.status) {
                                for (var n = 0; n < o.result.Result.length; n++) o.result.Result[n].oldPrice = parseInt(o.result.Result[n].offset) + parseInt(o.result.Result[n].price);
                                t[e + "OrderList"] = o.result.Result, t[e + "SelectGood"] = o.result.Result[0], 
                                t[e + "PrivilegeList"] = o.result.vipData.privilegeList || [], t.getCouponInfo(t[e + "SelectGood"]), 
                                t.getUnCouponInfo(t[e + "SelectGood"]);
                            }
                        }).catch(function() {}).finally(function() {
                            t.isInit = !0;
                        });
                    },
                    selectProduct: function(t) {
                        var e = this.needSVip ? "sVip" : "vip";
                        t.currentTarget.dataset.item && (this[e + "SelectGood"] = JSON.parse(t.currentTarget.dataset.item), 
                        this.getCouponInfo(this[e + "SelectGood"]));
                    },
                    addOrder: function() {
                        var t = this;
                        return s(n.default.mark(function e() {
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", new Promise(function(e, o) {
                                        var r = t.needSVip ? "/order/addSVIPOrder" : "/order/addVIPOrder", u = "";
                                        t.selectCoupon && (u = t.selectCoupon.coupon_code);
                                        var i = t.needSVip ? "sVip" : "vip", a = 1;
                                        "mp-weixin" === t.platform ? a = 2 : "mp-alipay" === t.platform ? a = 1 : "mp-toutiao" === t.platform ? a = 7 : "mp-360" === t.platform ? a = 10 : "mp-baidu" === t.platform && (a = 6);
                                        var c = "";
                                        t[i + "SelectGood"] && t[i + "SelectGood"].goods_id && (c = t[i + "SelectGood"].goods_id), 
                                        t.$request({
                                            url: r,
                                            method: "POST",
                                            data: {
                                                paySourceName: t.paySourceType,
                                                payType: a,
                                                quantity: 1,
                                                orderType: t.needSVip ? 7 : 2,
                                                goodsId: c,
                                                goods: t[i + "SelectGood"].goods_name,
                                                couponCode: u
                                            },
                                            type: 1
                                        }).then(function() {
                                            var o = s(n.default.mark(function o(r) {
                                                return n.default.wrap(function(o) {
                                                    for (;;) switch (o.prev = o.next) {
                                                      case 0:
                                                        if ("消费金额不能为0" === r.message && (t.totalAmount = 0), 200 !== r.status && 201 !== r.status) {
                                                            o.next = 7;
                                                            break;
                                                        }
                                                        return u && (t.usedCode = !0), t.totalAmount = r.result.totalAmount, o.next = 6, 
                                                        t.getOrder(r.result);

                                                      case 6:
                                                        e(r);

                                                      case 7:
                                                      case "end":
                                                        return o.stop();
                                                    }
                                                }, o);
                                            }));
                                            return function(t) {
                                                return o.apply(this, arguments);
                                            };
                                        }()).catch(o).finally(function() {
                                            t.isInit = !0;
                                        });
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getOrder: function(t) {
                        var e = this;
                        return new Promise(function(o, n) {
                            e.loading = !0;
                            var r = "", u = {}, i = "";
                            "mp-360" === e.platform || (r = "/order/unifiedOrder", u = {
                                orderId: t.orderId,
                                productName: t.goodsName
                            }, i = "GET"), e.$request({
                                url: r,
                                method: i,
                                data: u,
                                type: 1
                            }).then(function(t) {
                                e.loading = !1, 200 !== t.status && 201 !== t.status || t.result && Object.keys(t.result).length && (e.goodInfo = t.result, 
                                o(t.result));
                            }).catch(n).finally(function() {
                                e.isInit = !0;
                            });
                        });
                    },
                    getCouponInfo: function(t) {
                        var e = this;
                        this.setData({
                            couponList: [],
                            unCouponList: [],
                            pageIndex: 1,
                            pageIndexUn: 1,
                            currentTab: 0
                        });
                        this.$request({
                            method: "GET",
                            url: "/v1/order/getGoodsCouponList",
                            data: {
                                goodsId: t.goods_id,
                                pageIndex: this.pageIndex
                            }
                        }).then(function(o) {
                            if (200 === o.status) if (o.result.Result.length) {
                                e.showCouponTab = !0, o.result.Result.forEach(function(t) {
                                    t.select = !1;
                                }), "1" === o.result.Paging.currentpage ? e.couponList = o.result.Result : e.couponList = e.couponList.concat(o.result.Result), 
                                o.result.Result.length >= 2 && (o.result.Result = o.result.Result.sort(function(t, e) {
                                    return e.coupon_value - t.coupon_value;
                                })), e.selectCoupon || (e.selectCoupon = o.result.Result[0]), e.totalAmount = t.price - (e.selectCoupon ? e.selectCoupon.coupon_value : 0);
                                var n = e.couponList, r = e.selectCoupon;
                                n.forEach(function(t) {
                                    t.coupon_code === r.coupon_code && (t.select = !0);
                                }), e.couponList = n, e.couponCount = n.length;
                            } else e.totalAmount = t.price, "1" === o.result.Paging.currentpage && (e.showCouponTab = !1);
                        }).catch(function() {
                            e.totalAmount = t.price;
                        });
                    },
                    getUnCouponInfo: function(t) {
                        var e = this;
                        this.$request({
                            methods: "GET",
                            url: "/v1/order/getGoodsCouponList",
                            data: {
                                goodsId: t.goods_id,
                                pageIndex: this.pageIndexUn,
                                status: 2
                            }
                        }).then(function(t) {
                            var o;
                            200 === t.status && (e.unCouponCount = (null === (o = t.result.Paging) || void 0 === o ? void 0 : o.totalpage) || "0", 
                            t.result.Result.length && (t.result.Result.length >= 2 && (t.result.Result = t.result.Result.sort(function(t, e) {
                                return e.coupon_value - t.coupon_value;
                            })), "1" === t.result.Paging.currentpage ? e.unCouponList = t.result.Result : e.unCouponList = e.unCouponList.concat(t.result.Result)));
                        }).catch(function() {}).finally(function() {
                            e.isInit = !0;
                        });
                    },
                    confirmPay: function() {
                        var e = this;
                        return s(n.default.mark(function o() {
                            var r, i, a;
                            return n.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    if (e.totalAmount && !(e.totalAmount <= 0)) {
                                        o.next = 3;
                                        break;
                                    }
                                    return u.default.toast("消费金额不能为0"), o.abrupt("return");

                                  case 3:
                                    return o.next = 5, e.addOrder();

                                  case 5:
                                    if ("mp-360" !== e.platform) {
                                        o.next = 9;
                                        break;
                                    }
                                    return e.payPopShow = !0, e.aliPayLinkShow = !1, o.abrupt("return");

                                  case 9:
                                    if ((r = e.goodInfo) && Object.keys(r).length) {
                                        o.next = 12;
                                        break;
                                    }
                                    return o.abrupt("return");

                                  case 12:
                                    e.loading = !0, {}, i = "mp-weixin" === e.platform ? {} : "mp-baidu" === e.platform ? r.orderInfo : r.tradeNo, 
                                    a = {}, "mp-weixin" === e.platform && (a = r), t.requestPayment(p(p({
                                        orderInfo: i
                                    }, a), {}, {
                                        success: function(o) {
                                            e.loading = !1, e.usedCode && t.setStorage({
                                                key: "usedCossupon",
                                                data: "true"
                                            }), "mp-alipay" === e.platform ? "9000" === o.resultCode && (u.default.toast("支付成功"), 
                                            t.$emit("buy", !0)) : (u.default.toast("支付成功"), t.$emit("buy", !0)), e.refreshToken().then(function() {}).catch(function() {});
                                        },
                                        fail: function() {
                                            u.default.toast("支付失败"), e.loading = !1;
                                        }
                                    }));

                                  case 18:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    getCouponPop: function() {
                        this.couponPop = !0, t.$emit("couponPop", !0);
                    },
                    changeTab: function(t) {
                        this.currentTab = Number(t.currentTarget.dataset.cut);
                    },
                    changeTab2: function(t) {
                        this.currentTab = t.detail.current;
                    },
                    couponPopHandle: function() {
                        this.couponPop = !1, t.$emit("couponPop", !1);
                        var e = this.couponList.find(function(t) {
                            return t.select;
                        });
                        this.selectCoupon = e || null;
                        var o = this.needSVip ? "sVip" : "vip";
                        this.totalAmount = this[o + "SelectGood"].price - (this.selectCoupon ? this.selectCoupon.coupon_value : 0);
                    },
                    selectCouponClick: function(t) {
                        if (t.currentTarget.dataset.item) {
                            var e = JSON.parse(t.currentTarget.dataset.item).select, o = t.currentTarget.dataset.index;
                            o = Number(o);
                            var n = this.couponList;
                            n.forEach(function(t) {
                                t.select = !1;
                            }), n[o].select = !e, this.couponList = n;
                        }
                    },
                    closeCouponPop: function() {
                        this.couponPop = !1, t.$emit("couponPop", !1);
                    },
                    couponPopOpen: function() {
                        this.couponPop = !0, t.$emit("couponPop", !0), this.coucouponScrollponPop = 0;
                        var e = this.needSVip ? "sVip" : "vip";
                        this.getCouponInfo(this[e + "SelectGood"]), this.getUnCouponInfo(this[e + "SelectGood"]);
                    },
                    loadMoreCoupon: function() {
                        var t = this.pageIndex;
                        t++, this.pageIndex = t;
                    },
                    loadMoreUnCoupon: function() {
                        var t = this.pageIndexUn;
                        t++, this.pageIndexUn = t;
                    },
                    toIntroduce: function() {
                        var e = this.needSVip ? 1 : 0;
                        t.navigateTo({
                            url: "/me-subpackages/vip-introduce/index?index=" + e
                        });
                    }
                })
            };
            e.default = d;
        }).call(this, o("543d").default);
    },
    "5fb4": function(t, e, o) {
        o.r(e);
        var n = o("2d5a"), r = o.n(n);
        for (var u in n) "default" !== u && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(u);
        e.default = r.a;
    },
    "78bb4": function(t, e, o) {
        var n = o("ed2c");
        o.n(n).a;
    },
    a8bd: function(t, e, o) {
        o.r(e);
        var n = o("ce90"), r = o("5fb4");
        for (var u in r) "default" !== u && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(u);
        o("78bb4");
        var i = o("f0c5"), a = Object(i.a)(r.default, n.b, n.c, !1, null, "00db3cfb", null, !1, n.a, void 0);
        e.default = a.exports;
    },
    ce90: function(t, e, o) {
        o.d(e, "b", function() {
            return n;
        }), o.d(e, "c", function() {
            return r;
        }), o.d(e, "a", function() {});
        var n = function() {
            var t = this, e = (t.$createElement, t._self._c, t.needSVip ? t.__map(t.sVipOrderList, function(e, o) {
                return {
                    $orig: t.__get_orig(e),
                    g0: JSON.stringify(e),
                    g1: e.goods_name.replace("企查查", "").replace("会员", "")
                };
            }) : null), o = t.needSVip ? null : t.__map(t.vipOrderList, function(e, o) {
                return {
                    $orig: t.__get_orig(e),
                    g2: JSON.stringify(e),
                    g3: e.goods_name.replace("企查查", "").replace("会员", "")
                };
            }), n = t.couponPop ? t.__map(t.couponList, function(e, o) {
                return {
                    $orig: t.__get_orig(e),
                    g4: t.couponList.length ? JSON.stringify(e) : null
                };
            }) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e,
                    l1: o,
                    l2: n
                }
            });
        }, r = [];
    },
    ed2c: function(t, e, o) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/app-vip-pay/index-create-component", {
    "components/app-vip-pay/index-create-component": function(t, e, o) {
        o("543d").createComponent(o("a8bd"));
    }
}, [ [ "components/app-vip-pay/index-create-component" ] ] ]);