var t = require("../../../@babel/runtime/helpers/interopRequireDefault");

require("../../../@babel/runtime/helpers/Arrayincludes");

var e = t(require("../../../m/zk/za")), r = t(require("../../../m/zl/5a")), a = t(require("../../../l/wd/wi")), o = require("../../../l/wh"), s = require("../../../v/ci/n"), i = [ "1", "2", "3" ];

(0, e.default)({
    name: "order-status",
    data: {
        orderInfo: {},
        showModal: !1,
        themeColor: "",
        boderColor: "",
        selectedTemplate: "2",
        takeTime: "",
        orderPasswordFontSize: {
            mealCode: 56,
            tableCode: 24
        }
    },
    localData: {
        options: Object.create(null),
        result: {},
        themeIcons: [ "IconSpeakers", "IconJianTou" ],
        __orderStatusPolling: null
    },
    detached: function() {
        this.localData.__orderStatusPolling && "function" == typeof this.localData.__orderStatusPolling.stop && this.localData.__orderStatusPolling.stop();
    },
    methods: {
        init: function(t) {
            this.localData.options = t;
            var e = this.parseCarouselData();
            return this.localData.result = e, {
                root: this,
                isShow: e && e.data
            };
        },
        render: function() {
            this.initOrderStatusContainer();
        },
        initOrderStatusContainer: function() {
            var t = this, e = this.localData.result, r = (0, o.getThemeColor)(), a = (0, o.getMarketingColor)(), s = this.hexToRgba(r, .1).rgba;
            if (e && e.data) {
                var i = e.data.estimate || 0, n = e.data.bookFlag;
                this.parseTime(i, n), this.setOrderPasswordFontSize(e.data), this.setData({
                    selectedTemplate: e.selectedTemplate,
                    orderInfo: e.data,
                    themeColor: r,
                    marketingColor: a,
                    boderColor: s,
                    showModal: !0,
                    orderStatusIcon: this.getOrderStatusIcon(e.data)
                }, function() {
                    t.startPollStatus(e.data.orderStatus, {
                        orderNo: e.data.orderNo,
                        orgId: (0, o.getShopId)()
                    });
                });
            }
        },
        getOrderStatusIcon: function(t) {
            var e = {
                WAIT_PAY: "https://img.alicdn.com/imgextra/i4/O1CN01sRUv6t1nl862vzG6w_!!6000000005129-55-tps-40-40.svg",
                AUTO_CANCEL: "",
                CUSTOMER_CANCEL: "",
                WAIT_RECEIPT: "https://gw.alicdn.com/imgextra/i4/O1CN01rGw9QR20NqyQSnWXu_!!6000000006838-55-tps-40-40.svg",
                REJECTED: "",
                SUCCESS: "https://gw.alicdn.com/imgextra/i3/O1CN011Y2Kot1OG6sKCpPbv_!!6000000001677-55-tps-40-40.svg",
                REFUND: "",
                ANTI_SEELEMENT: "",
                CLOSED: "",
                UPDATING: "https://gw.alicdn.com/imgextra/i4/O1CN01rGw9QR20NqyQSnWXu_!!6000000006838-55-tps-40-40.svg",
                PART_REFUND: "",
                RECEIPTED: "https://gw.alicdn.com/imgextra/i4/O1CN01YFTvfq1O9hKeAkwEE_!!6000000001663-55-tps-40-40.svg",
                COOKING: "https://gw.alicdn.com/imgextra/i3/O1CN01ETU2OG1Sa2ZrNVuD4_!!6000000002262-55-tps-40-40.svg",
                WAIT_TAKE: "https://gw.alicdn.com/imgextra/i4/O1CN01rGw9QR20NqyQSnWXu_!!6000000006838-55-tps-40-40.svg"
            };
            return e[t.orderStatus] || e.SUCCESS;
        },
        setOrderPasswordFontSize: function(t) {
            if (t.tableCode) {
                var e = 24;
                e = t.tableCode.length <= 4 ? 36 : 24, this.setData({
                    orderPasswordFontSize: {
                        mealCode: 56,
                        tableCode: e
                    }
                });
            }
        },
        parseCarouselData: function() {
            var t = this.localData.options.data;
            if (t && (!t || 0 !== Object.keys(t).length)) {
                var e = t.order_status, r = this.localData.options.selectedTemplate;
                return "1" === r && (r = "2"), i.includes("".concat(r)) || (r = "2"), {
                    data: e,
                    selectedTemplate: r
                };
            }
        },
        startPollStatus: function(t, e) {
            var a = this, o = [ "WAIT_PAY", "WAIT_RECEIPT", "COOKING", "WAIT_TAKE" ];
            if (o.includes(t)) {
                var i = function(t) {
                    var e = t.err, r = t.result;
                    e && a.$root.$logOther(".lightshop.order_status.fail", {
                        err: e,
                        result: r
                    });
                }, n = new r.default(function() {
                    return (0, s.queryOrderAssistInfo)({
                        orgIdMapOrderNoListStr: JSON.stringify([ e ]),
                        scene: "SERVICE_CARD"
                    });
                }, {
                    interval: 2e3,
                    successFunc: function(t, e) {
                        var r = e.data.assistInfoList;
                        return 0 !== r.length && !o.includes(r[0].orderStatus);
                    },
                    processCallback: function(t, e) {
                        var r = (e.data || {}).assistInfoList, o = void 0 === r ? [] : r, s = o[0];
                        0 !== o.length && s.orderStatus !== a.data.orderInfo.orderStatus && a.setData({
                            "orderInfo.orderStatus": s.orderStatus,
                            "orderInfo.orderStatusValue": s.orderStatusValue,
                            "orderInfo.tips": s.cardTips,
                            "orderInfo.mealCode": s.mealCode,
                            "orderInfo.tableCode": s.tableCode,
                            orderStatusIcon: a.getOrderStatusIcon(s)
                        });
                    }
                });
                n.start().then(i).catch(i), this.localData.__orderStatusPolling = n, this.$root.$page.setLocalData("__orderStatusPolling", n);
            }
        },
        gotoOrderDetailPage: function() {
            var t = this.data.orderInfo.orderNo;
            "EATING" === this.data.orderInfo.orderStatus ? this.$root.$navigate("/pages/zcordercheck/index", {
                orderNo: t
            }) : this.$root.$navigate("/pages/orderdetail/index", {
                orderId: t
            });
        },
        gotoOrderPage: function() {
            "EATING" === this.data.orderInfo.orderStatus ? this.$root.$navigate("/pages/zcordercheck/index", {
                orderNo: this.data.orderInfo.orderNo
            }) : ((0, o.removeTableId)(), this.$root.$relaunch("/pages/orderfood/index"));
        },
        parseTime: function(t) {
            if (t) {
                var e = (0, a.default)(t).format("YYYY-MM-DD HH:mm").split(" "), r = new Date(), o = (0, 
                a.default)(r).format("YYYY-MM-DD");
                e[0] === o ? this.setData({
                    takeTime: e[e.length - 1]
                }) : this.setData({
                    takeTime: "明天 " + e[e.length - 1]
                });
            }
        },
        hexToRgba: function(t, e) {
            var r = "rgba(" + parseInt("0x" + t.slice(1, 3)) + "," + parseInt("0x" + t.slice(3, 5)) + "," + parseInt("0x" + t.slice(5, 7)) + "," + e + ")";
            return {
                red: parseInt("0x" + t.slice(1, 3)),
                green: parseInt("0x" + t.slice(3, 5)),
                blue: parseInt("0x" + t.slice(5, 7)),
                rgba: r
            };
        }
    }
});