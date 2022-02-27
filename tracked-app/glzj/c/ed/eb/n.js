var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../../m/zk/za")), i = require("./zl/ci.js"), r = require("../../../pages/member/common/util/common"), l = require("../../../v/3s/3p"), c = require("../../../v/ci/3w"), s = require("./zl/zl"), o = require("./zl/5b"), d = require("../../../l/wa"), u = require("../../../pages/member/common/util/url");

(0, n.default)({
    name: "member-account-bind",
    components: {
        loading: "loading",
        toast: "toast"
    },
    options: {},
    properties: {
        bottomTabEnable: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isInit: !1,
        isAndroid: !1,
        channelInfo: {},
        appList: [],
        brandColor: "#ff5900",
        foregroundColor: "#ffffff",
        partialUpdate: !0,
        isBinding: !1,
        bindChannelList: [],
        bindSuccessChannelList: [],
        isShow: !1,
        currentSite: "",
        bizType: "",
        bindSitesLimitList: "",
        currentSiteBindRelationShip: "",
        bindRelationship: "",
        onBindCallback: "",
        onRectifyCallBack: "",
        bindingChannel: "",
        brandSellerId: ""
    },
    ready: function() {
        this.$loading = this.getComponentById("loading"), this.$toast = this.getComponentById("toast");
    },
    methods: {
        startAccountBind: function() {
            var e = arguments, n = this;
            return a(t.default.mark(function a() {
                var l, o, d, u, h, b, B, m, C;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        l = e.length > 0 && void 0 !== e[0] ? e[0] : {}, r.customLog.log({
                            title: "member-accountBind-startAccountBind开始调用",
                            data: l
                        }), o = l.isShow, d = l.currentSite, u = l.bizType, h = l.bindRelationship, b = l.currentSiteBindRelationShip, 
                        B = l.onBindCallback, m = l.onRectifyCallBack, C = l.bindSitesLimitList, n.setData({
                            currentSite: d || (0, r.getCurrentSite)(),
                            bizType: u,
                            bindRelationship: h,
                            currentSiteBindRelationShip: b,
                            onBindCallback: B || n.data.onBindCallback,
                            onRectifyCallBack: m || n.data.onRectifyCallBack,
                            bindSitesLimitList: C
                        }, function() {
                            if (!(0, s.checkSiteParamsValid)(C)) return r.customLog.error({
                                title: "member-accountBind-checkSiteParamsValid-error",
                                data: l
                            }), void n.handleBindCallback(i.BindResult.BIND_INVALID_SITE);
                            var e = {
                                mobile: !1,
                                taobao: !1,
                                eleme: !1,
                                alipay: !1
                            }, t = "";
                            if (h || b) b || h ? n.setViewData(o) : n.handleBindCallback(i.BindResult.BIND_FAIL); else {
                                var a = n, d = {
                                    appType: (0, r.getAppType)()
                                };
                                (0, c.queryByCustomerId)(d).then(function(i) {
                                    if (i && i.data) {
                                        var l = i.data.userBindRelationList;
                                        if (t = i.data.brandSellerId, l && l.length > 0) for (var c = 0; c < l.length; c++) {
                                            if (l[c] && l[c].userIdType) switch (l[c].userIdType.toLowerCase()) {
                                              case "mobile":
                                                e.mobile = !0;
                                                break;

                                              case "taobao":
                                                e.taobao = !0;
                                                break;

                                              case "eleme":
                                                e.eleme = !0;
                                                break;

                                              case "alipay":
                                                e.alipay = !0;
                                            }
                                        }
                                        e.eleme || (e.eleme = i.data.uccBindEleme || e.eleme);
                                    }
                                    a.setData({
                                        currentSiteBindRelationShip: e,
                                        brandSellerId: t
                                    }, function() {
                                        r.customLog.log({
                                            title: "member-accountBind-queryByCustomerIdPromise-setData-callBack",
                                            data: n.data
                                        }), a.setViewData(o);
                                    });
                                }).catch(function(e) {
                                    r.customLog.error({
                                        title: "member-accountBind-queryByCustomerIdPromise-error",
                                        data: e
                                    }), a.handleBindCallback(i.BindResult.BIND_FAIL);
                                });
                            }
                        });

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, a);
            }))();
        },
        setViewData: function(e) {
            var t = this.data, a = t.bindRelationship, n = t.currentSiteBindRelationShip, l = t.bindSitesLimitList, c = t.currentSite, o = (0, 
            s.getBindChannelForMemberJoin)({
                bindSitesLimitList: l,
                bindRelationship: a,
                currentSiteBindRelationShip: n
            });
            if (r.customLog.log({
                title: "member-accountBind-bindChannelWrapper",
                data: o
            }), o.isNeedBind) {
                var u = this.convertProperies(c, o.bindChannel[0]);
                this.setData({
                    bindChannelList: o.bindChannel,
                    channelInfo: u,
                    isInit: !0,
                    isShow: e,
                    isAndroid: !(0, d.isIphoneXOrMore)(),
                    brandColor: this.getBrandColor(),
                    foregroundColor: (0, i.getForegroundColor)(this.getBrandColor())
                });
            } else this.handleBindCallback(i.BindResult.BIND_NO_CHECK_RECTIFY);
        },
        getBrandColor: function() {
            return "#ff5900";
        },
        onPopupClose: function() {
            this.handleBindCallback(i.BindResult.BIND_CANCEL), this.setData({
                isShow: !1
            });
        },
        noBind: function() {
            this.handleBindCallback(i.BindResult.BIND_CANCEL_TMP);
        },
        bind: function() {
            if (!this.data.isBinding) {
                this.data.isBinding = !0;
                var e = this.data.currentSite;
                this.callBindService(e, this.data.bindChannelList, 0);
            }
        },
        callBindService: function(e, n, r) {
            var l = this;
            return a(t.default.mark(function a() {
                var c, s, o, d, u;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (c = n.length, !(r >= c)) {
                            t.next = 3;
                            break;
                        }
                        return t.abrupt("return");

                      case 3:
                        if (s = n[r], !(0, i.contains)(l.bindSuccessChannelList, s)) {
                            t.next = 7;
                            break;
                        }
                        return r === c - 1 ? l.handleBindCallback(i.BindResult.BIND_SUCCESS) : l.callBindService(e, n, r + 1), 
                        t.abrupt("return");

                      case 7:
                        return t.prev = 7, l.setData({
                            bindingChannel: s
                        }), t.next = 11, l.bindAccount(s);

                      case 11:
                        o = t.sent, d = o.success, void 0 !== d && d ? (l.bindSuccessChannelList.push(s), 
                        r === c - 1 ? l.handleBindCallback(i.BindResult.BIND_SUCCESS) : (l.callBindService(e, n, r + 1), 
                        u = l.convertProperies(e, n[r + 1]), l.setData({
                            channelInfo: u
                        }))) : l.handleBindCallback(i.BindResult.BIND_FAIL), t.next = 19;
                        break;

                      case 16:
                        t.prev = 16, t.t0 = t.catch(7), l.handleBindCallback(i.BindResult.BIND_FAIL);

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, a, null, [ [ 7, 16 ] ]);
            }))();
        },
        bindAccount: function(e) {
            return a(t.default.mark(function a() {
                var n, i;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if ((n = (0, s.getCurrentChannel)()) && e) {
                            t.next = 3;
                            break;
                        }
                        return t.abrupt("return", {
                            success: !1,
                            msg: "loss channel"
                        });

                      case 3:
                        i = "", t.t0 = n, t.next = t.t0 === r.CHANNEL.ALIPAY ? 7 : 9;
                        break;

                      case 7:
                        return e === r.CHANNEL.ELE ? i = o.alipayBindElm : r.CHANNEL.TB, t.abrupt("break", 9);

                      case 9:
                        return t.prev = 9, t.next = 12, i();

                      case 12:
                        return t.abrupt("return", {
                            success: !0,
                            msg: "OK"
                        });

                      case 15:
                        return t.prev = 15, t.t1 = t.catch(9), r.customLog.error({
                            title: "member-accountBind-bindAccount-error",
                            data: t.t1
                        }), t.abrupt("return", {
                            success: !1,
                            msg: JSON.stringify(t.t1)
                        });

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, a, null, [ [ 9, 15 ] ]);
            }))();
        },
        convertProperies: function(e, t) {
            if (!e || !t) return {};
            var a = {
                currentChannel: r.CHANNEL.ALIPAY,
                currentChannelIconUrl: "https://img.alicdn.com/tfs/TB1RRokP1H2gK0jSZJnXXaT1FXa-56-56.png",
                bindChannel: t,
                title: "",
                bindChannelName: "",
                bindChannelIconUrl: ""
            };
            switch (t) {
              case r.CHANNEL.ALIPAY:
                a.title = "绑定支付宝账号", a.bindChannelName = "支付宝", a.bindChannelIconUrl = "https://img.alicdn.com/tfs/TB1RRokP1H2gK0jSZJnXXaT1FXa-56-56.png";
                break;

              case r.CHANNEL.TB:
                a.title = "绑定淘宝账号", a.bindChannelName = "淘宝", a.bindChannelIconUrl = "https://img.alicdn.com/tfs/TB1fzgFgBBh1e4jSZFhXXcC9VXa-56-56.png";
                break;

              case r.CHANNEL.ELE:
                a.title = "绑定饿了么账号", a.bindChannelName = "饿了么", a.bindChannelIconUrl = "https://img.alicdn.com/tfs/TB1uwtLcCslXu8jSZFuXXXg7FXa-56-56.png";
            }
            return a;
        },
        handleBindCallback: function(e) {
            r.customLog.log({
                title: "member-accountBind-handleBindCallback",
                data: e
            }), this.data.isBinding = !1;
            try {
                this.triggerEvent("handleBindCallback", e);
            } catch (e) {}
            try {
                var t = this.data.onBindCallback;
                t && t(e);
            } catch (e) {}
            this.handleRectifyAfterBindCallback(e);
        },
        handleRectifyAfterBindCallback: function(e) {
            switch (r.customLog.log({
                title: "member-accountBind-handleRectifyAfterBindCallback",
                data: e
            }), e) {
              case i.BindResult.BIND_INVALID_SITE:
                this.setData({
                    isShow: !1
                }), this.handleRectifyCallback(l.RectifyStatus.NO_NEED);
                break;

              case i.BindResult.BIND_CANCEL_TMP:
              case i.BindResult.BIND_CANCEL:
                this.setData({
                    isShow: !1
                }), this.handleRectifyCallback(l.RectifyStatus.RECTIFY_CANCELED);
                break;

              case i.BindResult.BIND_FAIL:
                this.setData({
                    isShow: !1
                }), this.jump2L100MiniAppProgramme();
                break;

              case i.BindResult.BIND_NO_CHECK_RECTIFY:
                this.setData({
                    isShow: !1
                }), this.handleRectify();
                break;

              case i.BindResult.BIND_NO:
                this.setData({
                    isShow: !1
                }), this.handleRectifyCallback(l.RectifyStatus.NO_NEED);
                break;

              case i.BindResult.BIND_SUCCESS:
                this.setData({
                    isShow: !1
                }), this.handleRectify();
            }
        },
        handleRectify: function() {
            var e = this;
            try {
                var t = this.data.bizType;
                switch (r.customLog.log({
                    title: "member-accountBind-handleRectify-begin",
                    data: {
                        bizType: t
                    }
                }), t) {
                  case r.BIND_RECTIFY_BIZ_TYPE.MEMBER:
                  case r.BIND_RECTIFY_BIZ_TYPE.POINT_MALL:
                  default:
                    (0, l.handleRectifyService)("MALL", this).then(function(t) {
                        e.handleRectifyCallback(t);
                    });
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                r.customLog.error({
                    title: "member-accountBind-handleRectify-error",
                    data: e
                });
            }
        },
        handleRectifyCallback: function(e) {
            r.customLog.log({
                title: "member-accountBind-handleRectifyCallback",
                data: e
            });
            try {
                this.triggerEvent("handleRectifyCallback", e);
            } catch (e) {}
            try {
                var t = this.data.onRectifyCallBack;
                t && t(e);
            } catch (e) {}
        },
        showToast: function(e) {
            var t = (0, r.getPageContext)();
            t && t.$toast && t.$toast.show(e, 1500);
        },
        jump2L100MiniAppProgramme: function() {
            var e = this;
            return a(t.default.mark(function a() {
                var n, i, l, s;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        n = e.data.brandSellerId, i = e, n ? (0, u.Jump2L100MiniProgramme)({
                            brandSellerId: n
                        }, e) : (l = (0, r.getAppType)(), s = {
                            appType: l
                        }, (0, c.queryByCustomerId)(s).then(function(e) {
                            r.customLog.log({
                                title: "member-accountBind-jump2L100MiniAppProgramme-res",
                                data: e
                            }), e && e.data && e.data.brandSellerId ? (i.setData({
                                brandSellerId: e.data.brandSellerId
                            }), (0, u.Jump2L100MiniProgramme)({
                                brandSellerId: e.data.brandSellerId
                            }, i)) : (i.showToast("账号绑定异常，请联系客服处理"), i.setData({
                                isShow: !1
                            }));
                        }).catch(function(e) {
                            i.showToast("账号绑定异常，请联系客服处理"), i.setData({
                                isShow: !1
                            });
                        }));

                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, a);
            }))();
        }
    }
});