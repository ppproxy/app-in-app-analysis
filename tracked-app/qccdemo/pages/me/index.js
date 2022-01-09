(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/me/index" ], {
    1746: function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return i;
        }), e.d(n, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "352d": function(t, n, e) {
        e.r(n);
        var o = e("1746"), i = e("4a42");
        for (var a in i) "default" !== a && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(a);
        e("a6f4");
        var u = e("f0c5"), c = Object(u.a)(i.default, o.b, o.c, !1, null, "7cf34318", null, !1, o.a, void 0);
        n.default = c.exports;
    },
    "356c": function(t, n, e) {},
    "3c87": function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("352d")).default);
        }).call(this, e("543d").createPage);
    },
    "4a42": function(t, n, e) {
        e.r(n);
        var o = e("a221"), i = e.n(o);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = i.a;
    },
    a221: function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("325c")), i = e("2f62"), a = e("0d85"), u = e("b291");
            function c(t, n) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    n && (o = o.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable;
                    })), e.push.apply(e, o);
                }
                return e;
            }
            function r(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? c(Object(e), !0).forEach(function(n) {
                        s(t, n, e[n]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : c(Object(e)).forEach(function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                    });
                }
                return t;
            }
            function s(t, n, e) {
                return n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e, t;
            }
            var f = {
                components: {
                    appBottomLoading: function() {
                        e.e("components/app-bottom-loading/index").then(function() {
                            return resolve(e("c761"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    bindFailPop: function() {
                        e.e("components/bind-fail-pop/index").then(function() {
                            return resolve(e("3dc4"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        endDate: "",
                        showPhone: "",
                        openType: "",
                        authPop: !1,
                        userAvator: "https://share.qichacha.com/lite-app-resources/qcc-lite-app-2.0/default-avator.png",
                        userName: "",
                        overlayTip: !1,
                        accountIndex: 0,
                        myCompanyCount: 0,
                        pageShow: !0,
                        downloadPop: !1,
                        isRedCircle: !1,
                        tipPop: !1,
                        lawActivityShow: !1,
                        feedBackShow: !1,
                        isInit: !1
                    };
                },
                computed: {
                    meBannerStatus: function() {
                        return this.$store.state.systemInfo.meBannerStatus;
                    },
                    userInfo: function() {
                        return this.$store.state.userInfo.userInfo;
                    },
                    token: function() {
                        return this.$store.state.userInfo.token || "";
                    },
                    phone: function() {
                        return this.$store.state.userInfo.userInfo.phone || "";
                    },
                    isLogin: function() {
                        return this.$store.state.userInfo.isLogin || !1;
                    },
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
                    },
                    reviewStatus: function() {
                        return this.$store.state.systemInfo.reviewStatus;
                    },
                    hasCode: function() {
                        return this.$store.state.userInfo.hasCode;
                    },
                    bannerShow: function() {
                        return this.isLogin && (!(1 !== this.meBannerStatus) || !this.isIPhone) && "mp-toutiao" !== this.platform && !this.platform.includes("mp-feishu");
                    }
                },
                watch: {
                    token: function() {
                        this.isInit = !0, this.init();
                    }
                },
                onShow: function() {
                    this.hasCode ? (this.token && (this.hideDownloadPop(), this.init()), (0, u.track)("corepage_exposure", {
                        "page_name|页面名称": "我的",
                        "page_detail|页面详情": ""
                    })) : this.getToken().then(function() {}).catch(function() {});
                },
                onShareAppMessage: function() {
                    return (0, u.track)("mine_button_click", {
                        "button_name|按钮名称": "分享小程序"
                    }), {
                        title: "推荐你一款专业的企业查询工具，商务精英都在用！",
                        path: "/pages/home/index",
                        imageUrl: "https://eciapp-img.qichacha.com/community/5a607122-4a54-4992-9ebb-5e746cffcca51627524003777.png"
                    };
                },
                onTabItemTap: function() {},
                methods: r(r({}, (0, i.mapActions)([ "checkLogin", "refreshToken", "getToken" ])), {}, {
                    init: function() {
                        if (this.userInfo.guid) {
                            var t = "";
                            this.userInfo.vipEndDate && (t = this.userInfo.vipEndDate.substr(0, 10)), this.userAvator = this.userInfo.faceimg, 
                            this.userName = this.userInfo.nickname, this.vipEndDate = this.userInfo.vipEndDate, 
                            this.isVIP ? (this.endDate = t, this.accountIndex = 1) : this.endDate = "", this.userInfo.phone ? ("mp-alipay" === this.platform ? this.showPhone = this.userInfo.phone.substr(0, 3) + "******" + this.userInfo.phone.substr(9, 2) : this.showPhone = this.userInfo.phone.substr(0, 3) + "****" + this.userInfo.phone.substr(7, 4), 
                            this.openType = "") : (this.showPhone = "", this.openType = "getPhoneNumber"), this.getList();
                        }
                    },
                    showShareMenu: function(t) {},
                    xcxBind: function(t) {
                        var n = this;
                        t.detail.encryptedData ? (o.default.toast("正在绑定"), (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "绑定手机号"
                        }), (0, a.bindPhone)({
                            ivPhone: t.detail.iv,
                            encryptedDataPhone: t.detail.encryptedData
                        }).then(function() {
                            n.refreshToken().then(function() {
                                o.default.toast("绑定成功");
                            }).catch(function() {});
                        }).catch(function(t) {
                            400 === t.status && (n.tipPop = !0);
                        })) : o.default.navigateTo({
                            url: "/login/bind/index?from=user"
                        });
                    },
                    toReport: function() {
                        o.default.navigateTo({
                            url: "/me-subpackages/report-order/index"
                        }), (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "报告订单"
                        });
                    },
                    hideDownloadPop: function() {
                        this.downloadPop && (this.downloadPop = !1);
                    },
                    toCollect: function(t) {
                        var n = t.currentTarget.dataset.index;
                        o.default.navigateTo({
                            url: "/me-subpackages/collect/index?tabIndex=" + n
                        }), (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "1" === n ? "名片收藏" : "快讯收藏"
                        });
                    },
                    toVipRight: function() {
                        o.default.setStorageSync("vipEndDate", this.vipEndDate), o.default.navigateTo({
                            url: "/me-subpackages/vip-introduce/index"
                        }), (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "会员特权"
                        });
                    },
                    cooperativeChannel: function() {
                        o.default.navigateTo({
                            url: "/me-subpackages/cooperative-channel/index?source=appBanner&term=mineMiniP"
                        });
                    },
                    toMyConcern: function() {
                        o.default.navigateTo({
                            url: "/me-subpackages/my-concern/index/index"
                        }), (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "我的关注"
                        });
                    },
                    toRadar: function() {
                        t.switchTab({
                            url: "/pages/monitor/index"
                        }), (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "风险监控"
                        });
                    },
                    toMyCompany: function() {
                        this.myCompanyCount > 0 ? (o.default.navigateTo({
                            url: "/me-subpackages/my-company/index"
                        }), (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "我的公司"
                        })) : (t.navigateTo({
                            url: "/ad/certification/guide/index"
                        }), (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "认证企业"
                        }));
                    },
                    toggleFeedBack: function() {
                        this.feedBackShow = !this.feedBackShow;
                    },
                    feedBackTrack: function() {
                        (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "在线客服"
                        });
                        var n = "/login/protocol/index?url=" + encodeURIComponent("https://1520026.s2.udesk.cn/im_client/?web_plugin_id=" + {
                            "mp-baidu": 29815,
                            "mp-weixin": 29786,
                            "mp-alipay": 29816
                        }[this.platform]);
                        t.navigateTo({
                            url: n
                        });
                    },
                    getList: function() {
                        var t = this;
                        this.$request({
                            url: "/v1/admin/getPersonalCount",
                            method: "GET",
                            data: {}
                        }).then(function(n) {
                            n && n.result && n.result.myCompanyCount && (t.myCompanyCount = n.result.myCompanyCount);
                        }).catch(function() {});
                    },
                    buyVip: function() {
                        o.default.navigateTo({
                            url: "/me-subpackages/vip-buy/index?paySourceType=我的开通" + (this.isVIP ? "SVIP" : "VIP")
                        }), (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "会员中心"
                        });
                    },
                    aboutUs: function() {
                        o.default.navigateTo({
                            url: "/me-subpackages/about/index"
                        }), (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "关于我们"
                        });
                    },
                    toQrcode: function() {
                        o.default.navigateTo({
                            url: "/me-subpackages/qrcode/index"
                        }), (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "小程序二维码"
                        });
                    },
                    addToDesktop: function() {
                        this.overlayTip = !0, (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "添加小程序"
                        }), t.pageScrollTo({
                            scrollTop: 0,
                            duration: 300,
                            complete: function(n) {
                                t.pageScrollTo({
                                    scrollTop: 0,
                                    duration: 0,
                                    complete: function() {}
                                });
                            }
                        });
                    },
                    know: function() {
                        this.overlayTip = !1;
                    },
                    toCommonQuestion: function() {
                        o.default.navigateTo({
                            url: "/me-subpackages/questions/index"
                        }), (0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "常见问题"
                        });
                    },
                    callKeFu: function(t) {
                        o.default.makePhoneCall(t.currentTarget.dataset.value);
                    },
                    myInvoice: function() {
                        o.default.navigateTo({
                            url: "/me-subpackages/invoice-title/list/index"
                        });
                    },
                    logOut: function() {
                        var n = this;
                        this.platform.includes("mp-feishulaw") || ((0, u.track)("mine_button_click", {
                            "button_name|按钮名称": "点击头像"
                        }), t.showActionSheet({
                            itemList: [ "退出登录" ],
                            success: function(t) {
                                t && 0 === t.tapIndex && (n.pageShow = !1, o.default.toast("正在退出"), n.refreshToken(0).then(function() {
                                    o.default.setStorageSync("monitor", !0), o.default.setStorageSync("monitor1", !0), 
                                    o.default.toast("退出成功");
                                }).catch(function() {}).finally(function() {
                                    n.pageShow = !0;
                                }));
                            },
                            fail: function() {}
                        }));
                    },
                    toIndexLogin: function() {
                        this.checkLogin("").then(function() {}).catch(function() {});
                    },
                    hidePop: function() {
                        this.tipPop = !1;
                    },
                    lawActivity: function() {
                        this.lawActivityShow = !this.lawActivityShow;
                    }
                })
            };
            n.default = f;
        }).call(this, e("543d").default);
    },
    a6f4: function(t, n, e) {
        var o = e("356c");
        e.n(o).a;
    }
}, [ [ "3c87", "common/runtime", "common/vendor" ] ] ]);