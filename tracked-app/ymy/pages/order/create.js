(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/order/create" ], {
    66: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n(4);
            t(n(2));
            e(t(n(67)).default);
        }).call(this, n(1).createPage);
    },
    67: function(e, t, n) {
        n.r(t);
        var o = n(68), s = n(70);
        for (var i in s) "default" !== i && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(i);
        var a = n(8), r = Object(a.default)(s.default, o.render, o.staticRenderFns, !1, null, null, null, !1, o.components, void 0);
        r.options.__file = "pages/order/create.vue", t.default = r.exports;
    },
    68: function(e, t, n) {
        n.r(t);
        var o = n(69);
        n.d(t, "render", function() {
            return o.render;
        }), n.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), n.d(t, "recyclableRender", function() {
            return o.recyclableRender;
        }), n.d(t, "components", function() {
            return o.components;
        });
    },
    69: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return s;
        }), n.d(t, "staticRenderFns", function() {
            return a;
        }), n.d(t, "recyclableRender", function() {
            return i;
        }), n.d(t, "components", function() {
            return o;
        });
        var o;
        try {
            o = {
                uniPopup: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/uni-popup/uni-popup") ]).then(n.bind(null, 157));
                },
                uniCalendar: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/uni-calendar/uni-calendar") ]).then(n.bind(null, 230));
                }
            };
        } catch (e) {
            if (-1 === e.message.indexOf("Cannot find module") || -1 === e.message.indexOf(".vue")) throw e;
            console.error(e.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var s = function() {
            var e = this, t = e.$createElement, o = (e._self._c, e.__map(e.twoDaysPrice, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    g0: t.Time.substring(5)
                };
            })), s = e.needPlayer && !e.contactAllowInput ? n(43) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: o,
                    m0: s
                }
            });
        }, i = !1, a = [];
        s._withStripped = !0;
    },
    70: function(e, t, n) {
        n.r(t);
        var o = n(71), s = n.n(o);
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = s.a;
    },
    71: function(e, t, n) {
        (function(e) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = o(n(22)), i = o(n(36)), a = o(n(65)), r = o(n(35)), u = o(n(16)), c = {
                components: {
                    uniCalendar: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/uni-calendar/uni-calendar") ]).then(function() {
                            return resolve(n(230));
                        }.bind(null, n)).catch(n.oe);
                    },
                    uniSession: function() {
                        n.e("components/session").then(function() {
                            return resolve(n(238));
                        }.bind(null, n)).catch(n.oe);
                    },
                    uniPopup: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/uni-popup/uni-popup") ]).then(function() {
                            return resolve(n(157));
                        }.bind(null, n)).catch(n.oe);
                    },
                    uniPopupMessage: function() {
                        n.e("components/uni-popup/uni-popup-message").then(function() {
                            return resolve(n(166));
                        }.bind(null, n)).catch(n.oe);
                    },
                    uniPopupDialog: function() {
                        n.e("components/uni-popup/uni-popup-dialog").then(function() {
                            return resolve(n(173));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                computed: {
                    TotalPrice: function() {
                        return this.price * this.number;
                    },
                    CreateTip: function() {
                        return this.TotalPrice > 0 ? "支付订单" : "提交订单";
                    },
                    productBookingContent: function() {
                        return this.product && this.product.BookingContent ? i.default.htmlReplace(this.product.BookingContent) : "";
                    }
                },
                onShow: function() {
                    s.default.checkUserInfo(!0);
                },
                data: function() {
                    return {
                        needPlayer: !1,
                        showMore: !1,
                        showtext: "更多详情",
                        lunar: !1,
                        isPrice: !1,
                        ticketid: null,
                        moreDay: "更多日期",
                        productid: 0,
                        product: {},
                        price: 0,
                        number: 1,
                        startDate: null,
                        endDate: null,
                        selectedDay: null,
                        daysPrice: [],
                        twoDaysPrice: [],
                        sessions: [],
                        sessionName: "选择时间段",
                        maxNumber: 1,
                        sessionId: 0,
                        couponId: 0,
                        couponName: "请选择优惠券",
                        contactName: "",
                        contactMobile: "",
                        contactIDCard: "",
                        selectIndex: 0,
                        players: [ {
                            CardTypeName: "身份证"
                        } ],
                        userNameInput: !1,
                        idCardInput: !1,
                        mobileInput: !1,
                        contactAllowInput: !0,
                        isReadNotice: !1,
                        canCheck: !1,
                        isCoupon: u.default.isCoupon,
                        cardTypeIndex: 0,
                        cardTypes: [ "身份证", "外籍护照", "港澳台通行证", "外国人永久居留身份证" ]
                    };
                },
                onLoad: function(t) {
                    this.players = [ {
                        CardTypeName: "身份证"
                    } ], this.contactAllowInput = s.default.contactAllowInput;
                    var n = t.productid;
                    if (void 0 === n || null == n || "" == n) e.switchTab({
                        url: "/pages/main/index"
                    }); else {
                        this.productid = parseInt(n), this.loadProduct();
                        var o = this;
                        e.$on("updateUser", function(e) {
                            o.updateUser(e);
                        }), e.$on("updateCoupon", function(e) {
                            o.updateCoupon(e);
                        });
                    }
                },
                onUnload: function() {
                    e.$off("updateUser", function(e) {}), e.$off("updateCoupon", function(e) {});
                },
                methods: {
                    cardTypeChange: function(t) {
                        var n = this;
                        e.showActionSheet({
                            itemList: this.cardTypes,
                            success: function(e) {
                                var o = n.cardTypes[e.tapIndex];
                                console.log(o + "=>" + t), n.$set(n.players, t, {
                                    Name: "",
                                    IDCard: "",
                                    CardTypeName: o
                                });
                            },
                            fail: function(e) {
                                console.log(e.errMsg);
                            }
                        });
                    },
                    checkboxChange: function(e) {
                        this.isReadNotice = e.detail.value.length > 0;
                    },
                    open: function() {
                        this.isReadNotice = !0, this.canCheck = !0, this.$refs.popup.open();
                    },
                    close: function() {
                        this.$refs.popup.close();
                    },
                    onNameInput: function(e) {
                        var t = {
                            Name: this.contactName,
                            IDCard: this.contactIDCard
                        };
                        this.needPlayer && this.$set(this.players, 0, t);
                    },
                    onShareAppMessage: function(e) {
                        return {
                            title: "创建订单",
                            path: "/pages/order/create?productid=" + this.productid,
                            imageUrl: ""
                        };
                    },
                    loadProduct: function() {
                        var t = this;
                        this.isPrice = !0, r.default.detail(this.productid).then(function(n) {
                            if (e.stopPullDownRefresh(), n && n.success && n.data) {
                                0 == n.data.MaxNumberByOrder ? t.maxNumber = 99999 : t.maxNumber = n.data.MaxNumberByOrder, 
                                t.product = n.data, t.isReadNotice = n.data.IsReadNotice, t.canCheck = n.data.IsReadNotice, 
                                t.number = 1;
                                for (var o = 0; o < t.product.UserInfoField.length; o++) "IDCard" == t.product.UserInfoField[o] && (t.idCardInput = !0), 
                                "Name" == t.product.UserInfoField[o] && (t.userNameInput = !0), "Mobile" == t.product.UserInfoField[o] && (t.mobileInput = !0);
                                1 == t.product.UserInfoSet ? t.needPlayer = !0 : t.needPlayer = !1, t.loadPrice(new Date(n.data.StartDate));
                            } else i.default.showToast(n.message || "加载失败");
                        });
                    },
                    loadPrice: function(t) {
                        var n = this;
                        this.startDate = i.default.getDate(t), this.endDate = i.default.getDate(t, 1), this.twoDaysPrice = [], 
                        this.daysPrice = [], r.default.getPrice(this.productid, this.startDate, this.endDate).then(function(t) {
                            e.stopPullDownRefresh(), t && t.success && t.data && t.data.length > 0 ? (n.daysPrice = t.data, 
                            n.twoDaysPrice.push(t.data[0]), t.data.length > 1 && n.twoDaysPrice.push(t.data[1]), 
                            n.dayClick(n.daysPrice[0].Time)) : i.default.showToast(t.message || "加载失败");
                        });
                    },
                    openCalendar: function() {
                        this.$refs.calendar.open();
                    },
                    confirm: function(e) {
                        var t = e.year + "-" + (e.month < 10 ? "0" + e.month : e.month) + "-" + (e.date < 10 ? "0" + e.date : e.date);
                        this.dayClick(t);
                    },
                    showClick: function() {
                        this.showMore = !this.showMore, !0 === this.showMore ? this.showtext = "收起详情" : this.showtext = "更多详情";
                    },
                    selectUser: function(t, n, o) {
                        this.selectIndex = o, e.navigateTo({
                            url: "selectuser?model=" + t + "&number=" + n
                        });
                    },
                    dayClick: function(e) {
                        var t = this.daysPrice.find(function(t) {
                            return t.Time == e;
                        });
                        if (void 0 != t) {
                            this.sessions = [], this.sessionIndex = -1, this.sessionId = 0, this.sessionName = "选择时间段", 
                            this.sessions = t.Session, this.selectedDay = t.Time, this.price = t.Price;
                            var n = this.twoDaysPrice.find(function(t) {
                                return t.Time == e;
                            });
                            this.moreDay = void 0 == n ? this.selectedDay.substring(5) : "更多日期";
                        } else i.default.showToast("日期选择错误，请选择有价格的日期");
                    },
                    subClick: function() {
                        this.number > 1 && (this.number--, this.players.pop());
                    },
                    addClick: function() {
                        this.number < this.maxNumber && (this.number++, this.players.push({
                            CardTypeName: "身份证",
                            Name: "",
                            IDCard: "",
                            Mobile: ""
                        }));
                    },
                    showSessionClick: function() {
                        this.$refs.unisession.init(this.sessionId);
                    },
                    showCouponClick: function() {
                        var t = "coupon?ProductID=" + this.productid + "&TotalPrice=" + this.TotalPrice;
                        e.navigateTo({
                            url: t
                        });
                    },
                    sessionConfirm: function(e) {
                        this.sessionId = e.ID, this.sessionName = e.Name, this.maxNumber = e.Number > this.maxNumber ? this.maxNumber : e.Number, 
                        this.number > this.maxNumber && (this.number = this.maxNumber);
                    },
                    setTime: function(e) {
                        e && this.dayClick(e.dateStr);
                    },
                    updateCoupon: function(e) {
                        null != e.coupon ? (this.couponId = e.coupon.ID, this.couponName = "￥" + e.coupon.Amount) : (this.couponId = 0, 
                        this.couponName = "请选择优惠券");
                    },
                    updateUser: function(e) {
                        if (e) {
                            if (1 == e.isCancel) return;
                            if (e.users && e.users.length > 0) if (0 == e.model) this.contactName = e.users[0].Name, 
                            this.contactMobile = e.users[0].Mobile, this.contactIDCard = e.users[0].IDCard; else {
                                for (var t = e.users[0], n = {
                                    Name: t.Name,
                                    IDCard: t.IDCard,
                                    Mobile: t.Mobile,
                                    CardTypeName: "身份证"
                                }, o = 0; o < this.players.length; o++) if (this.players[o].IDCard == t.IDCard) return void i.default.showToast("该游客信息已经选择");
                                this.$set(this.players, this.selectIndex, n);
                            }
                        }
                    },
                    createOrder: function() {
                        var t = this;
                        if (this.number <= 0) i.default.showToast("请选择数量"); else if (this.sessions && this.sessions.length > 0 && this.sessionId <= 0) i.default.showToast("请选择时间段"); else {
                            if (this.needPlayer) {
                                if (!this.players || this.players.length != this.number) return void i.default.showToast("请输入 " + this.number + " 位游玩人");
                                for (var n = 0; n < this.players.length; n++) {
                                    var o = this.players[n];
                                    if (!o.Name || !o.IDCard) return void i.default.showToast("请输入游玩人信息");
                                    if ("身份证" === o.CardTypeName && !i.default.checkIdCard(o.IDCard)) return void i.default.showToast("请输入正确的身份证号");
                                }
                            }
                            this.contactName = this.players[0].Name, this.contactMobile = this.players[0].Mobile, 
                            this.contactIDCard = this.players[0].IDCard, this.contactName || !this.userNameInput ? this.contactMobile || !this.mobileInput ? !this.idCardInput || this.contactIDCard ? 0 != this.isReadNotice ? (this.contactMobile || (this.contactMobile = "13999999999"), 
                            this.contactName || (this.contactName = "游客"), a.default.create(this.productid, this.sessionId, this.number, this.contactName, this.contactMobile, this.contactIDCard, this.selectedDay, this.players, this.couponId).then(function(n) {
                                n && n.success ? t.TotalPrice <= 0 ? e.navigateTo({
                                    url: "success"
                                }) : t.pay(n.data) : i.default.showToast(n.message || "订单创建异常");
                            })) : i.default.showToast("请先阅读并勾选预订须知") : i.default.showToast("请输入联系人证件号码") : i.default.showToast("请输入联系人手机号码") : i.default.showToast("请输入联系人姓名");
                        }
                    },
                    pay: function(e) {
                        var t = this;
                        a.default.pay(e).then(function(e) {
                            e && e.data && e.data.PayJson ? i.default.payOrder(t, e.data.PayJson, !0) : i.default.showToast("支付失败");
                        }).catch(function(e) {
                            i.default.showToast("支付异常");
                        });
                    },
                    h5Pay: function(e, t) {}
                }
            };
            t.default = c;
        }).call(this, n(1).default);
    }
}, [ [ 66, "common/runtime", "common/vendor" ] ] ]);