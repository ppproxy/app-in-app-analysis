(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/card/index" ], {
    "532a": function(t, e, n) {
        n.r(e);
        var a = n("7f12"), c = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = c.a;
    },
    6636: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("ed7e")).default);
        }).call(this, n("543d").createPage);
    },
    "7f12": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = s(n("325c")), c = n("2f62"), o = n("9f67"), i = n("b291"), r = s(n("58b7"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach(function(e) {
                        l(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function l(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var f = {
                data: function() {
                    return {
                        userId: "",
                        cardCode: "",
                        name: "",
                        userName: "",
                        cardImg: "",
                        avator: "",
                        gender: "",
                        job: "",
                        company: "",
                        cardStyle: 0,
                        tel: "",
                        address: "",
                        percent: "",
                        email: "",
                        hits: 0,
                        collect: 0,
                        recommend: 0,
                        editText: "立即完善",
                        cardDetalCache: "",
                        firstTime: !0,
                        imgSrc: "",
                        isInit: !1
                    };
                },
                onLoad: function(t) {
                    t.unique && (this.unique = t.unique), t.name && (this.name = decodeURIComponent(t.name));
                },
                computed: {
                    token: function() {
                        return this.$store.state.userInfo.token || "";
                    },
                    guid: function() {
                        return this.$store.state.userInfo.userInfo.guid || "";
                    },
                    platform: function() {
                        return this.$store.state.systemInfo.platform;
                    },
                    userAvator: function() {
                        return this.$store.state.userInfo.userInfo.faceimg || "";
                    },
                    userNickName: function() {
                        return this.$store.state.userInfo.userInfo.nickname || "";
                    },
                    windowHeight: function() {
                        return this.$store.state.systemInfo.systemInfo.windowHeight || 400;
                    },
                    appLaunchButtonShow: function() {
                        return this.$store.state.systemInfo.appLaunchButtonShow;
                    }
                },
                watch: {
                    token: function() {
                        this.isInit = !1, this.init();
                    }
                },
                onShow: function() {
                    this.token && (t.getStorageSync("cardChange") && (this.isInit = !1, t.removeStorageSync("cardChange")), 
                    this.init()), (0, i.track)("corepage_exposure", {
                        "page_name|页面名称": "名片",
                        "page_detail|页面详情": ""
                    });
                },
                onShareAppMessage: function(t) {
                    var e = {
                        title: "您好，这是我的电子名片，望惠存！",
                        path: "/card-subpackages/detail/index?code=" + this.cardCode + "&from=share",
                        imageUrl: this.imgSrc
                    };
                    return "button" === t.from && this.addShare(), (0, i.track)("business_button_click", {
                        "button_name|按钮名称": "发名片"
                    }), e;
                },
                onTabItemTap: function() {},
                methods: d(d({}, (0, c.mapActions)([ "checkLogin" ])), {}, {
                    init: function() {
                        this.isInit || this.getCardDetail();
                    },
                    drawInit: function() {
                        var e = this, n = this.avator, a = this.name, c = this.company, o = this.tel, i = this.address, s = this.cardStyle, u = this.gender || "1", d = this.job || "";
                        r.default.initDrawCard(!0, {
                            sex: u,
                            cardStyle: s,
                            avator: n,
                            position: d,
                            name: a,
                            company: c,
                            tel: o,
                            address: i,
                            card_code: this.card_code,
                            platform: this.platform
                        }, function(n) {
                            n && (e.imgSrc = n, t.hideLoading());
                        });
                    },
                    launchAppError: function(t) {},
                    getCardDetail: function() {
                        var e = this;
                        (0, o.getCardDetail)({}).then(function(n) {
                            if (t.hideLoading(), 200 === n.status && n.result && n.result.phone) {
                                var a = 0;
                                n.result.faceimg && a++, n.result.name && a++, n.result.sex > -1 && a++, n.result.position && a++, 
                                n.result.company_name && a++, n.result.company_address && a++, n.result.subindustry && a++, 
                                n.result.company_website && a++, n.result.email && a++, n.result.wechat && a++, 
                                n.result.business_area && a++, n.result.cooperation_intention && a++, n.result.company_introduction && a++, 
                                n.result.album && a++, n.result.invoice_tax_no && a++, n.result.invoice_company_phone && a++, 
                                n.result.invoice_bank && a++, n.result.invoice_bank_account && a++, (a = a / 18 * 100) < 100 ? (a = a.toString().substr(0, 2), 
                                e.editText = "立即完善") : e.editText = "立即修改", n.result.faceimg && (n.result.faceimg = n.result.faceimg.replace("http://", "https://")), 
                                e.cardCode = n.result.card_code, e.userId = n.result.user_id, e.name = n.result.name, 
                                e.avator = n.result.faceimg, e.cardImg = n.result.img, e.gender = n.result.sex, 
                                e.job = n.result.position, e.company = n.result.company_name, e.cardStyle = n.result.skin_style, 
                                e.email = n.result.email, e.tel = n.result.phone, e.address = n.result.company_address, 
                                e.percent = a, e.hits = n.result.click_count, e.collect = n.result.collect_count, 
                                e.recommend = n.result.recommend_count, e.cardDetalCache = n.result, e.drawInit(), 
                                t.stopPullDownRefresh();
                            } else e.cardCode = "", e.userId = "", e.name = e.userNickName, e.avator = e.userAvator, 
                            e.cardImg = "", e.gender = "", e.job = "", e.company = "", e.cardStyle = "", e.email = "", 
                            e.tel = "", e.address = "", e.percent = "", e.hits = "", e.collect = "", e.recommend = "", 
                            e.cardDetalCache = "", t.hideShareMenu();
                        }).catch(function() {
                            t.hideLoading();
                        }).finally(function() {
                            e.isInit = !0;
                        });
                    },
                    addShare: function() {
                        (0, o.setShareCount)({
                            card_code: this.cardCode
                        }).then(function() {}).catch(function() {});
                    },
                    createCard: function() {
                        var t = this;
                        this.checkLogin("").then(function() {
                            t.toEditCard(2);
                        }).catch(function() {});
                    },
                    toEditCard: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        t.navigateTo({
                            url: "/card-subpackages/edit/index?type=" + e
                        }), (0, i.track)("business_button_click", {
                            "button_name|按钮名称": this.cardCode ? "立即完善" : "创建名片"
                        });
                    },
                    takePhoto: function() {
                        var e = this;
                        (0, i.track)("business_button_click", {
                            "button_name|按钮名称": "拍照识别"
                        }), this.checkLogin("").then(function() {
                            t.chooseImage({
                                count: 1,
                                sizeType: [ "compressed" ],
                                sourceType: [ "album", "camera" ],
                                success: function(n) {
                                    t.showLoading({
                                        title: "正在上传中"
                                    }), setTimeout(function() {
                                        t.showLoading({
                                            title: "识别中..."
                                        });
                                    }, 300), (0, o.uploadFile)(n.tempFilePaths[0], {
                                        url: "/card/scanCards",
                                        type: 1
                                    }).then(function(t) {
                                        e.dealScanData(t);
                                    }).catch(function(t) {
                                        setTimeout(function() {
                                            a.default.toast(t.message || "名片识别失败，请重新拍照识别", 2e3);
                                        }, 1e3);
                                    }).finally(function() {
                                        t.hideLoading();
                                    });
                                }
                            });
                        }).catch(function() {});
                    },
                    movButtonMove: function(t) {
                        t.changedTouches[0].clientY > 100 && t.changedTouches[0].clientY < this.windowHeight - 100 && (this.movY = t.changedTouches[0].clientY);
                    },
                    finishCard: function() {
                        this.toEditCard(2);
                    },
                    dealScanData: function(e) {
                        var n = this;
                        if (e.cardInfo) {
                            var c = {
                                address: "",
                                company: "",
                                email: "",
                                name: "",
                                tel: "",
                                job: "",
                                keyNo: ""
                            };
                            if (e.cardInfo.addr.length > 0) {
                                for (var o = "", i = e.cardInfo.addr.length - 1; i > -1; i--) o += e.cardInfo.addr[i];
                                c.address = o;
                            }
                            e.cardInfo.company && e.cardInfo.company.length > 0 && (c.company = e.cardInfo.company[0]), 
                            e.cardInfo.email && e.cardInfo.email.length > 0 && (c.email = e.cardInfo.email[0]), 
                            e.cardInfo.name && (c.name = e.cardInfo.name), e.cardInfo.tel_cell && e.cardInfo.tel_cell.length > 0 && (0 === e.cardInfo.tel_cell[0].indexOf("86") && (e.cardInfo.tel_cell[0] = e.cardInfo.tel_cell[0].substr(2)), 
                            0 === e.cardInfo.tel_cell[0].indexOf("+86") && (e.cardInfo.tel_cell[0] = e.cardInfo.tel_cell[0].substr(3)), 
                            c.tel = e.cardInfo.tel_cell[0]), e.cardInfo.title && e.cardInfo.title.length > 0 && (c.job = e.cardInfo.title[0]), 
                            c.keyNo = e.cardInfo.keyNo, t.setStorage({
                                key: "scanData",
                                data: c,
                                success: function() {
                                    n.toEditCard(1);
                                }
                            });
                        } else a.default.toast("识别数据为空", 2e3);
                    },
                    toCardDetail: function(e) {
                        var n = this;
                        this.checkLogin("").then(function() {
                            var a = e.currentTarget.dataset.code;
                            a ? t.setStorage({
                                key: "cardDetailCache",
                                data: n.cardDetalCache,
                                success: function() {
                                    t.navigateTo({
                                        url: "/card-subpackages/detail/index?code=" + a + "&page=index"
                                    });
                                },
                                fail: function() {
                                    t.navigateTo({
                                        url: "/card-subpackages/detail/index?code=" + a
                                    });
                                }
                            }) : n.createCard();
                        }).catch(function() {});
                    },
                    toLiteAppCode: function() {
                        var e = this;
                        this.cardCode ? this.checkLogin("").then(function() {
                            t.navigateTo({
                                url: "/card-subpackages/user/image/index"
                            });
                        }).catch(function() {}) : this.checkLogin("").then(function() {
                            t.showModal({
                                title: "提示",
                                content: "请完善名片后再生成",
                                confirmText: "去完善",
                                confirmColor: "#128bed",
                                success: function(t) {
                                    t.confirm && e.toEditCard(2);
                                }
                            });
                        }).catch(function() {});
                    },
                    toCardImg: function() {
                        var e = this;
                        (0, i.track)("business_button_click", {
                            "button_name|按钮名称": "生成图片分享"
                        }), this.checkLogin("").then(function() {
                            e.cardCode ? t.navigateTo({
                                url: "/card-subpackages/image/index"
                            }) : t.showModal({
                                title: "提示",
                                content: "请完善名片后再生成",
                                confirmText: "去完善",
                                confirmColor: "#128bed",
                                success: function(t) {
                                    t.confirm && e.toEditCard(2);
                                }
                            });
                        }).catch(function() {});
                    },
                    makeCall: function() {
                        var t = this;
                        this.checkLogin("").then(function() {
                            a.default.makePhoneCall(t.tel);
                        }).catch(function() {});
                    },
                    openAddress: function() {
                        var t = this;
                        this.checkLogin("").then(function() {
                            t.address && a.default.navigateTo({
                                url: "/address/index?address=" + t.address + "&name=" + t.company
                            });
                        }).catch(function() {});
                    },
                    previewAvator: function() {
                        var e = this;
                        this.checkLogin("").then(function() {
                            var n = e.avator;
                            t.previewImage({
                                urls: [ n ]
                            });
                        }).catch(function() {});
                    },
                    toVisitorList: function() {
                        var e = this;
                        this.checkLogin("").then(function() {
                            e.hits > 0 && t.navigateTo({
                                url: "/card-subpackages/user/visitor/index"
                            });
                        }).catch(function() {});
                    },
                    toFollowList: function() {
                        var e = this;
                        this.checkLogin("").then(function() {
                            e.collect > 0 && t.navigateTo({
                                url: "/card-subpackages/user/follow/index"
                            });
                        }).catch(function() {});
                    },
                    toShareList: function() {
                        var e = this;
                        this.checkLogin("").then(function() {
                            e.recommend > 0 && t.navigateTo({
                                url: "/card-subpackages/user/share/index"
                            });
                        }).catch(function() {});
                    },
                    avatorError: function(t) {
                        a.default.toast("头像加载失败");
                    }
                })
            };
            e.default = f;
        }).call(this, n("543d").default);
    },
    9630: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    b477: function(t, e, n) {
        var a = n("c811");
        n.n(a).a;
    },
    c811: function(t, e, n) {},
    ed7e: function(t, e, n) {
        n.r(e);
        var a = n("9630"), c = n("532a");
        for (var o in c) "default" !== o && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(o);
        n("b477");
        var i = n("f0c5"), r = Object(i.a)(c.default, a.b, a.c, !1, null, "7dae98a3", null, !1, a.a, void 0);
        e.default = r.exports;
    }
}, [ [ "6636", "common/runtime", "common/vendor" ] ] ]);