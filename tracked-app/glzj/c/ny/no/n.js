var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

require("../../../@babel/runtime/helpers/Arrayincludes");

var t = e(require("../../../m/zk/za")), i = e(require("../../../l/wd/wi")), a = require("./5l/n");

(0, t.default)({
    name: "order-status",
    properties: {
        orderDetail: {
            type: Object,
            value: {}
        },
        dishProcessEnable: {
            type: Boolean,
            value: !1
        },
        dishProcess: {
            type: Array,
            value: []
        },
        fromPage: {
            type: String,
            value: "orderdetail"
        }
    },
    components: {
        customShowModal: "custom-show-modal"
    },
    data: {
        TAKE_YOURSELF_MODE: a.TAKE_YOURSELF_MODE,
        isShowOrderDetailStatus: !1,
        orderInfo: {
            title: "",
            desc: ""
        },
        timeFormatted: "",
        isShowWaitReceiptFlapper: !1,
        isFromOrderList: !1,
        isSelfTake: !1,
        isShowProcess: !1,
        bookTimeFormat: "",
        takeCabinetNum: [],
        dishProcessObj: {},
        isShowNotSupportTakeSuatus: !1
    },
    localData: {
        countdownTimer: null,
        remainingTime: "",
        timeFormat: "YYYY-MM-DD HH:mm"
    },
    observers: {
        orderDetail: function(e) {
            e && e.orderStatus === a.ORDER_STATUS.SUCCESS && this.$customShowModal && this.$customShowModal.close(), 
            this._init();
        }
    },
    ready: function() {
        this.$customShowModal = this.getComponentById("customShowModal");
    },
    detached: function() {
        this._resetTimer();
    },
    methods: {
        _init: function() {
            var e = this.data.orderDetail || {}, t = e.orderStatus, o = void 0 === t ? "" : t, r = e.refundReason, s = void 0 === r ? "" : r, n = e.payDuration, l = void 0 === n ? "" : n, d = e.takeYourselfMode, T = void 0 === d ? 0 : d, E = e.enableTakeStatus, u = void 0 === E ? 0 : E, _ = e.takeMealType, c = void 0 === _ ? "" : _, m = e.bookFlag, S = void 0 !== m && m, D = e.bookTime, h = void 0 === D ? "" : D, O = e.takeCabinetNum, A = void 0 === O ? "" : O, R = e.enableVerificationMealCode, f = void 0 === R ? 0 : R, F = this.data.fromPage;
            if (o) {
                var v = a.ORDER_STATUS_MAP[c][o] || {};
                switch (o) {
                  case a.ORDER_STATUS.REJECTED:
                    v.desc = "门店未接单" + (s ? ", 原因: ".concat(s) : "");
                    break;

                  case a.ORDER_STATUS.AUTO_CANCEL:
                    var C = (0, i.default)(1e3 * +l).format("mm");
                    v.desc = v.desc.replace("{{time}}", C);
                    break;

                  case a.ORDER_STATUS.WAIT_TAKE:
                    ([ a.TAKE_YOURSELF_MODE.VERIFICATION_CODE, a.TAKE_YOURSELF_MODE.TAKE_FOOD_TANK ].includes(T) || 1 === f) && (v.title = "待取餐");
                    break;

                  case a.ORDER_STATUS.RECEIPTED:
                    T === a.TAKE_YOURSELF_MODE.TAKE_FOOD_TANK && (v.title = "已接单，待制作", v.desc = "门店已接单，美味即将呈现");
                }
                var U = !(o === a.ORDER_STATUS.SUCCESS && u) || [ a.TAKE_YOURSELF_MODE.VERIFICATION_CODE, a.TAKE_YOURSELF_MODE.TAKE_FOOD_TANK ].includes(T) && !!this.data.orderInfo.title || c === a.TAKE_MEAL_TYPE.TO_TABLE, w = !1;
                "orderlist" === F && (U = !1, w = !0);
                var p = [ a.ORDER_STATUS.WAIT_RECEIPT, a.ORDER_STATUS.INIT ].includes(o) && T === a.TAKE_YOURSELF_MODE.FLAPPER, K = [ a.ORDER_STATUS.RECEIPTED, a.ORDER_STATUS.COOKING, a.ORDER_STATUS.WAIT_TAKE, a.ORDER_STATUS.SUCCESS ], I = T === a.TAKE_YOURSELF_MODE.TAKE_FOOD_TANK && o === a.ORDER_STATUS.WAIT_TAKE, g = [ a.TAKE_YOURSELF_MODE.TAKE_FOOD_CODE, a.TAKE_YOURSELF_MODE.FLAPPER ].includes(T) && !!u && K.includes(o), k = I || g, M = !u && [ a.TAKE_YOURSELF_MODE.TAKE_FOOD_CODE, a.TAKE_YOURSELF_MODE.FLAPPER ].includes(T) && [ a.ORDER_STATUS.WAIT_TAKE, a.ORDER_STATUS.SUCCESS ].includes(o);
                this._initDishProcess(), this.setData({
                    orderInfo: v,
                    isSelfTake: c === a.TAKE_MEAL_TYPE.SELF_TAKE,
                    isShowOrderDetailStatus: U,
                    isShowWaitReceiptFlapper: p,
                    isFromOrderList: w,
                    isShowProcess: k,
                    bookTimeFormat: S && h ? (0, i.default)(+h).format(this.localData.timeFormat) : "",
                    takeCabinetNum: A && A.length ? A.split(",") : [],
                    isShowNotSupportTakeSuatus: M
                }), this._initWaitPayCountdown();
            }
        },
        _initDishProcess: function() {
            var e = this.data.orderDetail.orgId, t = this.data.dishProcess, a = (void 0 === t ? [] : t).find(function(t) {
                return t.storeId === e;
            }) || {};
            a && (a.takeTime = (0, i.default)(a.estimate).format("HH:mm")), this.setData({
                dishProcessObj: a
            });
        },
        handleOpenCabinet: function() {
            this.triggerEvent("handleOpenCabinet");
        },
        handleFinishOrder: function() {
            this.triggerEvent("handleFinishOrder");
        },
        showVerificationCodeModal: function() {
            this.$customShowModal.show({
                title: "核销码",
                showClose: !0,
                closeButtonType: "bottom"
            }), this.data.isFromOrderList ? this.$root.$logClick(".keruyun_order_list.write_off_click") : this.$root.$logClick(".keruyun_order_details.write_off_click");
        },
        gotoRefundDetail: function() {
            var e = this.data.orderDetail, t = e.orderNo, i = e.orgId;
            this.$root.$navigate("/pages/refunddetail/index", {
                orderNo: t,
                orgId: i
            }), this.$root.$logClick(".keruyun_order_details.return_click");
        },
        _initWaitPayCountdown: function() {
            var e = this.data.orderDetail, t = e.orderStatus, o = void 0 === t ? "" : t, r = e.invalidDate, s = void 0 === r ? 0 : r, n = e.systemDate, l = void 0 === n ? 0 : n;
            o === a.ORDER_STATUS.WAIT_PAY ? null === this.localData.countdownTimer && (this.localData.remainingTime = s - l, 
            this.setData({
                timeFormatted: (0, i.default)(parseInt(this.localData.remainingTime)).format("mm:ss")
            }), this._startTimer()) : this.localData.countdownTimer && this._resetTimer();
        },
        _startTimer: function() {
            var e = this;
            this.localData.countdownTimer = setInterval(function() {
                e.localData.remainingTime = e.localData.remainingTime - 1e3, e.setData({
                    timeFormatted: (0, i.default)(parseInt(e.localData.remainingTime)).format("mm:ss")
                }), e.localData.remainingTime <= 1 && (e.triggerEvent("handleCountDown"), e._resetTimer());
            }, 1e3);
        },
        _resetTimer: function() {
            this.localData.countdownTimer && clearInterval(this.localData.countdownTimer), this.localData.countdownTimer = null, 
            this.setData({
                timeFormatted: ""
            });
        },
        noop: function() {
            return null;
        }
    }
});