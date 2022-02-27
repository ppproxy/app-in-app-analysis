var t = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")), o = require("../../../pages/member/common/util/point/point"), e = require("../../../v/3s/3k");

(0, t.default)({
    name: "point-mall-item",
    components: {
        loading: "loading",
        toast: "toast",
        pointComponentsPointItem: "point-components-point-item",
        pointComponentsShakeCode: "point-components-shakeCode",
        pointComponentsAccountBind: "point-components-accountBind",
        pointComponentsPointProductDetail: "point-components-point-product-detail"
    },
    options: {},
    properties: {
        data: {
            type: Object,
            value: {}
        }
    },
    data: {
        pointCouponListToShow: [],
        sceneType: "pointList",
        queryCouponListCurrentPageNo: 1,
        queryCouponListItemNumPerPage: 6,
        oriCouponList: [],
        userLevel: 0,
        hasMoreCouponData: !1,
        showDetail: !1,
        userPointNum: 0,
        couponListRequestReply: "",
        bindAcount: {
            alipayBindEleme: !1,
            alipayBindTaobao: !1,
            elmBindTaobao: !1
        },
        alreadyChecked: !1,
        showBindAccountPopWindow: !1,
        alreadyGotoRectifyPage: !1,
        doNotShowPointDetailBlock: !1,
        directConnect: !0,
        inDirectConnectWhiteList: !0,
        currentSite: "",
        clickGoodSite: "",
        bindStatusChanged: !1,
        requestMoreCount: 0,
        titleType: "text",
        name: "积分兑换",
        titleImage: "",
        showTitle: !1
    },
    ready: function() {
        this.$loading = this.getComponentById("loading"), this.$toast = this.getComponentById("toast"), 
        this.$pointComponentsShakeCode = this.getComponentById("pointComponentsShakeCode"), 
        this.$pointComponentsAccountBind = this.getComponentById("pointComponentsAccountBind"), 
        this.$pointComponentsPointProductDetail = this.getComponentById("pointComponentsPointProductDetail"), 
        this.$pointComponentsAccountBindPop = this.getComponentById("pointComponentsAccountBindPop");
    },
    detached: function() {},
    observers: {},
    methods: {
        init: function(t) {
            var o = t.data;
            if (o && o.goods && o.goods.itemList) {
                var e = o.goods, a = 2 === o.layout || "2" === o.layout ? "DOUBLE" : "TRIPLE", n = e.pageNo * e.pageSize < e.totalSize, i = void 0 === o.showTitle || o.showTitle;
                this.setData({
                    queryCouponListCurrentPageNo: 1,
                    queryCouponListItemNumPerPage: 6,
                    displayType: a,
                    couponListRequestReply: "LOADED",
                    oriCouponList: e.itemList,
                    pointCouponListToShow: this.transferPvDataToComponentsData(e.itemList, a),
                    hasMoreCouponData: n,
                    name: o.name,
                    showTitle: i,
                    titleType: o.titleType || "text",
                    titleImage: o.titleImage
                });
            } else this.setData({
                couponListRequestReply: "EXCEPTION"
            });
            return this;
        },
        render: function() {},
        transferPvDataToComponentsData: function(t, o) {
            var e = this.transferToL100CouponModelList(t), a = [], n = [], i = 2;
            if ("DOUBLE" === o) return e;
            "TRIPLE" === o && (i = 3);
            for (var s = 0; s < e.length; s++) {
                var u = Number(s) % Number(i);
                0 === u && (n = []), n.push(e[s]), s + 1 !== e.length && u !== Number(i) - 1 || a.push(n);
            }
            return a;
        },
        transferToL100CouponModelList: function(t) {
            var e = [];
            if (t && t.length) for (var a = 0; a < t.length; a++) e[a] = (0, o.transferCRMToL100CouponModel)(t[a], this.data.userLevel);
            return e;
        },
        onPopupClose: function(t) {
            this.setData({
                showDetail: !1
            }), this.data.bindStatusChanged && this.setData({
                bindStatusChanged: !1
            }), !!t && (!!t.detail && t.detail.forceRefresh) && this.handleForceFresh();
        },
        handleForceFresh: function() {
            this.handleRequestReinit();
        },
        handleRequestMore: function() {
            var t = this;
            if (this.data.hasMoreCouponData) {
                var o = Number(this.data.queryCouponListCurrentPageNo) + 1;
                (0, e.queryPointCouponListLoad)({
                    pageNo: o,
                    pageSize: this.data.queryCouponListItemNumPerPage
                }).then(function(o) {
                    if (o && o.data && o.data.data && o.data.data.itemList) {
                        var e = o.data.data, a = t.data.oriCouponList.concat(e.itemList), n = e.pageNo * e.pageSize < e.totalSize;
                        t.setData({
                            oriCouponList: a,
                            pointCouponListToShow: t.transferPvDataToComponentsData(a, t.data.displayType),
                            queryCouponListCurrentPageNo: t.data.queryCouponListCurrentPageNo + 1,
                            requestMoreCount: t.data.requestMoreCount + 1,
                            hasMoreCouponData: n
                        });
                    }
                }).catch(function(o) {
                    t.$toast.show("网络异常", 1500);
                });
            }
        },
        handleRequestReinit: function() {
            var t = this;
            this.setData({
                queryCouponListCurrentPageNo: 1,
                queryCouponListItemNumPerPage: 6
            }, function() {
                var o = Number(t.data.queryCouponListCurrentPageNo), a = t;
                (0, e.queryPointCouponListLoad)({
                    pageNo: o,
                    pageSize: a.data.queryCouponListItemNumPerPage
                }).then(function(o) {
                    if (o && o.data && o.data.data && o.data.data.itemList) {
                        var e = o.data.data;
                        t.setData({
                            couponListRequestReply: "LOADED",
                            oriCouponList: e.itemList,
                            pointCouponListToShow: a.transferPvDataToComponentsData(e.itemList, t.data.displayType),
                            hasMoreCouponData: e.pageNo * e.pageSize < e.totalSize
                        }), a.data.hasMoreCouponData;
                    } else o && o.data && o.data.data ? t.setData({
                        couponListRequestReply: "LOADED"
                    }) : t.setData({
                        couponListRequestReply: "EXCEPTION"
                    });
                }).catch(function(o) {
                    t.setData({
                        couponListRequestReply: "EXCEPTION"
                    }), t.$toast.show("网络异常", 1500);
                });
            });
        },
        handleRequest: function() {
            this.data.hasMoreCouponData && this.handleRequestMore();
        }
    }
});