Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TAKE_YOURSELF_MODE = exports.TAKE_MEAL_TYPE = exports.ORDER_STATUS_MAP = exports.ORDER_STATUS = void 0;

var E, T, e, A = require("../../../../@babel/runtime/helpers/objectSpread2"), _ = require("../../../../@babel/runtime/helpers/defineProperty");

exports.TAKE_YOURSELF_MODE = {
    TAKE_FOOD_CODE: 0,
    VERIFICATION_CODE: 1,
    TAKE_FOOD_TANK: 2,
    FLAPPER: 3
};

var t = {
    WAIT_PAY: "WAIT_PAY",
    AUTO_CANCEL: "AUTO_CANCEL",
    CUSTOMER_CANCEL: "CUSTOMER_CANCEL",
    UPDATING: "UPDATING",
    WAIT_RECEIPT: "WAIT_RECEIPT",
    REJECTED: "REJECTED",
    SUCCESS: "SUCCESS",
    REFUND: "REFUND",
    PART_REFUND: "PART_REFUND",
    ANTI_SEELEMENT: "ANTI_SEELEMENT",
    RECEIPTED: "RECEIPTED",
    COOKING: "COOKING",
    WAIT_TAKE: "WAIT_TAKE",
    INIT: "INIT"
};

exports.ORDER_STATUS = t;

var C = (_(E = {}, "WAIT_PAY", {
    title: "订单待支付",
    desc: "剩余支付时间"
}), _(E, "WAIT_RECEIPT", {
    title: "等待门店接单",
    desc: "门店会尽快处理，请稍候"
}), _(E, "RECEIPTED", {
    title: ""
}), _(E, "COOKING", {
    title: ""
}), _(E, "WAIT_TAKE", {
    title: ""
}), _(E, "SUCCESS", {
    title: "订单已完成",
    desc: "美味带来好心情，欢迎下次光临"
}), _(E, "AUTO_CANCEL", {
    title: "订单已取消",
    desc: "超过{{time}}分钟未支付，订单自动取消"
}), _(E, "CUSTOMER_CANCEL", {
    title: "订单已取消",
    desc: "您取消了订单"
}), _(E, "REFUND", {
    title: "订单已退款",
    desc: "商户发起了订单退款，可详询门店"
}), _(E, "ANTI_SEELEMENT", {
    title: "订单已退款",
    desc: "商户发起了订单退款，可详询门店"
}), _(E, "PART_REFUND", {
    title: "订单有部分退款",
    desc: "商户发起了订单退款，可详询门店"
}), _(E, "REJECTED", {
    title: "订单已关闭"
}), _(E, "UPDATING", {
    title: "订单状态更新中",
    desc: "请稍后，若持续更新中请联系店员处理"
}), E), I = A({}, C), O = A(A({}, C), {}, (_(T = {}, "COOKING", {
    title: "已接单，制作中",
    desc: "美味制作中，请稍后"
}), _(T, "DELIVERY_WAIT_TO", {
    title: "待送餐",
    desc: ""
}), T)), R = {
    TO_TABLE: "TO_TABLE",
    SELF_TAKE: "SELF_TAKE"
};

exports.TAKE_MEAL_TYPE = R;

var N = (_(e = {}, "TO_TABLE", O), _(e, "SELF_TAKE", I), e);

exports.ORDER_STATUS_MAP = N;