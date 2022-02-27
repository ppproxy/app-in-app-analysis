var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), r = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../../m/zk/za")), a = require("../../../v/3s/ed"), o = require("../../../l/wh"), s = null;

(0, n.default)({
    name: "member-code",
    data: {
        memberQrCode: "",
        memberBarCode: "",
        showMemberCode: !1,
        showCodeError: !1,
        errorCodeImg: "https://img.alicdn.com/tfs/TB1.9nudJTfau8jSZFwXXX1mVXa-600-600.png",
        codeType: "",
        memberAssetsInfo: {},
        brandLogo: ""
    },
    components: {
        toast: "toast"
    },
    ready: function() {
        this.$toast = this.getComponentById("toast");
    },
    detached: function() {
        s && clearInterval(s);
    },
    methods: {
        getBrandInfo: function() {
            var e = (0, o.getBrandInfo)();
            this.setData({
                brandLogo: e.brandLogo
            });
        },
        queryMemberAssetsInfo: function() {
            var e = this;
            return r(t.default.mark(function r() {
                var n;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, (0, a.getMemberAssetsInfo)();

                      case 3:
                        (n = t.sent) && n.data && n.data.data ? e.setData({
                            memberAssetsInfo: n.data.data
                        }) : e.$toast.show("会员资产查询失败", 1500), t.next = 10;
                        break;

                      case 7:
                        t.prev = 7, t.t0 = t.catch(0), e.$toast.show(t.t0.message || "会员资产查询失败", 1500);

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, r, null, [ [ 0, 7 ] ]);
            }))();
        },
        JumpScorePage: function() {
            var e = this;
            return r(t.default.mark(function r() {
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        wx.navigateTo({
                            url: "/pages/member/member-point/member-point-mall/index"
                        }), e.hideMemberCode();

                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, r);
            }))();
        },
        JumpMyWalletPage: function() {
            wx.navigateTo({
                url: "/pages/recharge/recharge-wallet/index"
            }), this.hideMemberCode();
        },
        showCode: function(e) {
            var n = this;
            return r(t.default.mark(function e() {
                var r, o, s;
                return t.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, r = !1, n.queryMemberAssetsInfo(), n.getBrandInfo(), e.next = 6, 
                        (0, a.queryMemberCodeInfo)();

                      case 6:
                        (o = e.sent) && o.data && o.data.data ? ((s = o.data.data).qrCode && s.barCode || (r = !0), 
                        n.setData({
                            memberQrCode: s.qrCode,
                            memberBarCode: s.barCode,
                            showCodeError: r,
                            codeType: s.codeType
                        }), n.showMemberCodeFunc()) : n.setData({
                            showCodeError: !0
                        }), e.next = 13;
                        break;

                      case 10:
                        e.prev = 10, e.t0 = e.catch(0), n.setData({
                            showCodeError: !0
                        });

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 10 ] ]);
            }))();
        },
        forbidPop: function() {
            return !1;
        },
        showMemberCodeFunc: function() {
            this.setData({
                showMemberCode: !0
            }), this.setInterval();
        },
        hideMemberCode: function(e) {
            this.setData({
                showMemberCode: !1
            }), this.clearInterval();
        },
        onPreventTouch: function(e) {
            return !0;
        },
        setInterval: function(e) {
            function t() {
                return e.apply(this, arguments);
            }
            return t.toString = function() {
                return e.toString();
            }, t;
        }(function() {
            var e = this;
            this.clearInterval(), s = setInterval(function() {
                e.showCode();
            }, 55e3);
        }),
        clearInterval: function(e) {
            function t() {
                return e.apply(this, arguments);
            }
            return t.toString = function() {
                return e.toString();
            }, t;
        }(function() {
            s && clearInterval(s);
        })
    }
});