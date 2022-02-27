var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../../m/zk/za")), u = e(require("../../../../../l/wd/wi")), n = require("./../../5l/n");

(0, t.default)({
    name: "order-refund-info",
    data: {
        refundFee: null,
        refundMethodsDesc: null,
        refundTime: null,
        refundReason: null,
        show: !1,
        PART_REFUND: n.ORDER_STATUS.PART_REFUND,
        refundOtherInfo: []
    },
    localData: {
        showRefundInfoStatus: [ n.ORDER_STATUS.REFUND, n.ORDER_STATUS.PART_REFUND ],
        refundMethodsMap: {
            STOREDVALUE: "退款金额已返回账户余额"
        },
        refundMethodsDefault: "退款金额已原路返回"
    },
    properties: {
        refundInfo: {
            type: Object,
            value: {}
        },
        orderStatus: {
            type: String,
            value: ""
        },
        payMethod: {
            type: String,
            value: ""
        }
    },
    observers: {
        orderStatus: function() {
            this._init();
        }
    },
    ready: function() {},
    methods: {
        _init: function() {
            var e = this.data, t = e.refundInfo, r = void 0 === t ? {} : t, o = e.orderStatus, d = e.payMethod, a = this.localData, i = a.showRefundInfoStatus, f = a.refundMethodsMap, s = a.refundMethodsDefault, l = i.some(function(e) {
                return e === o;
            }), h = r || {}, R = h.refundFee, D = h.refundVoucherNum, m = h.refundPointNum, S = h.refundDetailList, T = void 0 === S ? [] : S, c = T.length && T[0] ? T[0] : {}, p = (c || {}).refundReason, v = void 0 === p ? "" : p;
            v = o === n.ORDER_STATUS.PART_REFUND ? v : "";
            var E = c.successTime || "", M = [];
            D && M.push({
                unique: "voucher",
                title: "退回优惠券：",
                num: D,
                unitName: "张"
            }), m && M.push({
                unique: "point",
                title: "退回积分：",
                num: m,
                unitName: "积分"
            }), this.setData({
                show: l,
                refundFee: R,
                refundReason: v,
                refundTime: (0, u.default)(E).format("MM-DD HH:mm"),
                refundMethodsDesc: f[d] || s,
                refundOtherInfo: M
            });
        },
        gotoRefundDetail: function() {
            this.triggerEvent("handleGotoRefundDetail");
        }
    }
});