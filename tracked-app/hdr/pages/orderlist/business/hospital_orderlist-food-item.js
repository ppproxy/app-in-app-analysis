Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../@babel/runtime/helpers/toConsumableArray"), t = require("../../../@babel/runtime/helpers/objectSpread2"), a = require("../../../@babel/runtime/helpers/classCallCheck"), r = require("../../../@babel/runtime/helpers/createClass"), i = function() {
    function i(e) {
        a(this, i), this.cx = e;
    }
    return r(i, [ {
        key: "setNotSupportOrderAgain",
        value: function() {
            this.cx.setData({
                showOrderAgain: !1
            });
        }
    }, {
        key: "addDeliveryWaitTo",
        value: function() {
            this.cx.localData.orderStatusMap = t(t({}, this.cx.localData.orderStatusMap), {}, {
                DELIVERY_WAIT_TO: "待送餐"
            }), this.cx.localData.needHighlightStatus = [].concat(e(this.cx.localData.needHighlightStatus), [ "DELIVERY_WAIT_TO" ]);
        }
    }, {
        key: "judgeNeedHighlightStatus",
        value: function() {
            var e = (this.cx.data.orderDetail || {}).orderStatus, t = this.cx.localData.needHighlightStatus.includes(e);
            this.setData({
                isHighLightOrderStatus: t
            });
        }
    } ]), i;
}();

exports.default = i;