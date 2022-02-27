var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../../m/zk/za")), o = require("../../../../../pages/member/common/util/point/point"), i = require("../../../../../pages/member/common/util/common"), n = require("../../../../../v/3s/3p"), a = require("../../../../../v/ci/3w"), s = e(require("../../../../../m/zl/5o"));

(0, t.default)({
    name: "point-mall-item",
    components: {
        loading: "loading",
        toast: "toast"
    },
    options: {},
    properties: {
        goodsList: {
            type: Array,
            value: []
        },
        sourceData: {
            type: Object,
            value: {}
        },
        extInfos: {
            type: Object,
            value: {}
        },
        type: {
            type: String,
            value: ""
        },
        itemBizType: {
            type: String,
            value: ""
        },
        onJoinMember: {
            type: Function,
            value: null
        },
        scene: {
            type: String,
            value: "normal"
        },
        handleCouponClickAsButton: {
            type: Boolean,
            value: !0
        },
        memberCenterEnable: {
            type: Boolean,
            value: !1
        },
        toPointMall: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        memberCenterEnableTag: !1,
        mySourceData: {}
    },
    ready: function() {
        if (this.$parent) this.$memberPointMallAccountBind = this.$parent.$pointComponentsAccountBind, 
        this.$memberPointMallPointProductDetail = this.$parent.$pointComponentsPointProductDetail, 
        this.$memberShakeCode = this.$parent.$pointComponentsShakeCode, this.$pointComponentsAccountBindPop = this.$parent.$pointComponentsAccountBindPop; else {
            var e = this.$root.getGlobalComponentById("pointMallComponent-0");
            e && e._refs && (this.$memberPointMallAccountBind = e._refs.pointComponentsAccountBind, 
            this.$memberPointMallPointProductDetail = e._refs.pointComponentsPointProductDetail, 
            this.$memberShakeCode = e._refs.pointComponentsShakeCode, this.$pointComponentsAccountBindPop = e._refs.pointComponentsAccountBindPop);
        }
        this.init();
    },
    detached: function() {},
    observers: {
        memberCenterEnable: function(e) {
            this.setData({
                memberCenterEnableTag: e
            });
        }
    },
    methods: {
        init: function() {},
        handleCouponBlockClick: function(e) {
            this.data.toPointMall ? this.$root.$navigate("/pages/member/member-point/member-point-mall/index", {}) : this.data.handleCouponClickAsButton && this.handlePointUse(e);
        },
        handleBind: function(e, t, n, a) {
            if ((0, i.getAppType)() === i.appTypeConstant.wx) {
                var s = (0, o.getCouponSite)(a.bizType);
                s === i.CHANNEL.ELE && !e.eleme || s === i.CHANNEL.ALIPAY && !e.alipay ? this.$pointComponentsAccountBindPop && this.$pointComponentsAccountBindPop.init({
                    bindSites: [ s.toLowerCase() ],
                    callBack: this.wxAccountBindScucess.bind(this)
                }) : n.$memberPointMallPointProductDetail && n.$memberPointMallPointProductDetail.startShowDetail(a.itemId);
            } else if ((0, i.getAppType)() === i.appTypeConstant.my && this.$memberPointMallAccountBind) {
                var r = [];
                r[0] = (0, o.getCouponSite)(a.bizType);
                var l = {
                    isShow: !0,
                    onBindCallback: this.onBindAccount.bind(this),
                    onRectifyCallBack: this.onRectify.bind(this),
                    bizType: i.BIND_RECTIFY_BIZ_TYPE.POINT_MALL,
                    bindSitesLimitList: r,
                    currentSiteBindRelationShip: e
                };
                this.$memberPointMallAccountBind.startAccountBind(l);
            }
        },
        wxAccountBindScucess: function(e) {
            var t = this;
            e.status && (s.default.put("syncCouponsKey", !0), this.$toast.show("绑定成功", 1500), 
            setTimeout(function() {
                t.$root && t.$root.refresh && t.$root.refresh();
            }, 1e3));
        },
        handlePointUse: function(e) {
            var t = {
                mobile: !1,
                taobao: !1,
                eleme: !1,
                alipay: !1
            }, o = {
                shakeCode: "",
                shakeCodeTips: "",
                degradeShakeCodeTips: ""
            }, n = "DOUBLE" === this.data.itemBizType ? e.detail.item : this.data.sourceData;
            this.setData({
                mySourceData: n
            });
            var s = this, r = {
                appType: (0, i.getAppType)()
            };
            (0, a.queryByCustomerId)(r).then(function(e) {
                if (e && e.data) {
                    var i = e.data.userBindRelationList;
                    if (i && i.length > 0) for (var a = 0; a < i.length; a++) {
                        if (i[a] && i[a].userIdType) switch (i[a].userIdType.toLowerCase()) {
                          case "mobile":
                            t.mobile = !0;
                            break;

                          case "taobao":
                            t.taobao = !0;
                            break;

                          case "eleme":
                            t.eleme = !0;
                            break;

                          case "alipay":
                            t.alipay = !0;
                        }
                    }
                    t.eleme || (t.eleme = e.data.uccBindEleme || t.eleme), o.shakeCode = e.data.shakeCode, 
                    o.degradeShakeCodeTips = e.data.degradeShakeCodeTips, o.shakeCodeTips = e.data.shakeCodeTips;
                }
                s.handleBind(t, o, s, n);
            });
        },
        checkDetailShowableAfterRectify: function(e) {
            switch (e) {
              case n.RectifyStatus.NO_NEED:
                return !0;

              case n.RectifyStatus.ALREADY_GOTO_RECTIFY_PAGE:
              case n.RectifyStatus.INTERFACE_FAIL:
              case n.RectifyStatus.RECTIFY_CANCELED:
                return !1;
            }
        },
        onBindAccount: function(e) {},
        onRectify: function(e) {
            e && this.checkDetailShowableAfterRectify(e) && this.$memberPointMallPointProductDetail && this.$memberPointMallPointProductDetail.startShowDetail(this.data.mySourceData.itemId);
        },
        onJoinMember: function() {
            for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
            this.props.onJoinMember(t);
        }
    }
});