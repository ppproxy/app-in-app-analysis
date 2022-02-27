var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

require("../../../@babel/runtime/helpers/Arrayincludes");

var t = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../../m/zk/za")), o = require("../../../v/3s/37"), i = require("../../../l/wh"), s = require("../../../pages/member/common/util/common");

(0, n.default)({
    name: "member-account-bind-pop",
    components: {
        loading: "loading",
        toast: "toast"
    },
    localData: {
        bindSites: [],
        couponType: "",
        scene: "account",
        callBack: function() {},
        titleArr: {
            coupon: "领取优惠券",
            point: "绑定账号",
            dish: "绑定账号",
            account: "绑定账号"
        }
    },
    properties: {},
    data: {
        themeColor: (0, i.getThemeColor)(),
        title: "",
        showPopup: !1,
        elemeSiteInfo: "",
        alipaySiteInfo: "",
        agreementText: "您同意以页面显示平台账号领取会员权益，并将会员信息及权益同步至对应账号。",
        bindBtnStatus: ""
    },
    ready: function() {
        this.$loading = this.getComponentById("loading"), this.$toast = this.getComponentById("toast");
    },
    methods: {
        init: function(e) {
            var t = e.scene, a = void 0 === t ? "account" : t, n = e.bindSites, o = void 0 === n ? [] : n, i = e.couponType, r = void 0 === i ? "" : i, c = e.callBack, l = void 0 === c ? function() {} : c;
            s.customLog.log({
                title: "member-accountBind-accountBindPop-init",
                data: {
                    bindSites: o,
                    couponType: r
                }
            }), this.setTitle(a), this.localData.bindSites = o, this.localData.couponType = r, 
            this.localData.callBack = l, o.length && r || !o.length && !r ? this.handleBindResult(!1) : o.length && this.queryAccountInfoFunc(o);
        },
        setTitle: function(e) {
            var t = this.localData.titleArr[e];
            this.setData({
                title: t
            });
        },
        handleBindResult: function(e) {
            this.setData({
                showPopup: !1
            });
            var t = this.localData.callBack;
            t(e ? {
                status: !0
            } : {
                status: !1
            });
        },
        queryAccountInfoFunc: function(e) {
            var n = this;
            return a(t.default.mark(function a() {
                var i, s, r, c, l, u, d, m, h;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, n.$loading && n.$loading.showLoading("正在加载中..."), t.next = 4, 
                        (0, o.queryAccountInfo)(e);

                      case 4:
                        i = t.sent, s = i.alipayUserSiteInfos, r = i.elemeUserSiteInfos, c = i.agreementText, 
                        s || r ? (l = e.includes("alipay"), u = e.includes("eleme"), d = s && s.length ? s[0] : "", 
                        m = r && r.length ? r[0] : "", h = "normal", !l || u || d.name || (h = "close"), 
                        u && !m.name && (h = "disable"), n.setData({
                            agreementText: c,
                            needBindAlipay: l,
                            needBindEleme: u,
                            alipaySiteInfo: d,
                            elemeSiteInfo: m,
                            bindBtnStatus: h,
                            showPopup: !0
                        })) : n.$toast && n.$toast.show("数据获取异常，请稍后重试", 1e3), n.$loading && n.$loading.hideLoading(), 
                        t.next = 14;
                        break;

                      case 10:
                        t.prev = 10, t.t0 = t.catch(0), n.$loading && n.$loading.hideLoading(), n.$toast && n.$toast.show(t.t0.message || t.t0 || "服务异常，请稍后重试", 1e3);

                      case 14:
                      case "end":
                        return t.stop();
                    }
                }, a, null, [ [ 0, 10 ] ]);
            }))();
        },
        close: function() {
            this.setData({
                showPopup: !1
            });
        },
        bind: function() {
            var e = this;
            return a(t.default.mark(function a() {
                var n, i, r, c, l, u, d, m;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, n = e.localData.bindSites, e.$loading && e.$loading.showLoading("正在加载中..."), 
                        t.next = 5, (0, o.bindSite)(n);

                      case 5:
                        i = t.sent, s.customLog.log({
                            title: "member-accountBind-accountBindPop-bind-res",
                            data: i
                        }), r = i.data, (c = (void 0 === r ? {} : r).bindResultMap) ? (l = c.alipay, u = void 0 === l ? {} : l, 
                        d = c.eleme, m = void 0 === d ? {} : d, u.success || m.success ? (e.$toast && e.$toast.show("绑定成功", 1e3), 
                        e.handleBindResult(!0)) : (s.customLog.error({
                            title: "member-accountBind-accountBindPop-bind-error",
                            data: i
                        }), e.$toast && e.$toast.show("服务异常，请稍后重试", 1e3))) : (s.customLog.error({
                            title: "member-accountBind-accountBindPop-bind-error",
                            data: i
                        }), e.$toast && e.$toast.show("服务异常，请稍后重试", 1e3)), e.$loading && e.$loading.hideLoading(), 
                        t.next = 18;
                        break;

                      case 13:
                        t.prev = 13, t.t0 = t.catch(0), s.customLog.error({
                            title: "member-accountBind-accountBindPop-bind-error",
                            data: t.t0
                        }), e.$loading && e.$loading.hideLoading(), e.$toast && e.$toast.show(t.t0.message || t.t0 || "服务异常，请稍后重试", 1e3);

                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, a, null, [ [ 0, 13 ] ]);
            }))();
        },
        onElemeSiteClick: function() {
            var e = this, t = this.data.elemeSiteInfo.registerUrl;
            t && (setTimeout(function() {
                e.setData({
                    showPopup: !1
                });
            }, 1e3), this.$root.$navigate("/pages/member/member-eleme-register/index?pageUrl=" + encodeURIComponent(t)));
        }
    }
});