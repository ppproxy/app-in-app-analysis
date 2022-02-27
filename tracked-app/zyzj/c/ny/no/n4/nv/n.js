(0, require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../m/zk/za")).default)({
    name: "order-detail-process",
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
            type: Object,
            value: {}
        },
        code: {
            type: String,
            value: ""
        },
        orderStatus: {
            type: String,
            value: ""
        },
        bookFlag: {
            type: Boolean,
            value: !1
        },
        time: {
            type: String,
            value: ""
        },
        takeCabinetNum: {
            type: Array,
            value: []
        },
        takeYourselfMode: {
            type: Number,
            value: 0
        },
        orderFlowNo: {
            type: String,
            value: ""
        },
        tableName: {
            type: String,
            value: ""
        },
        isFromOrderList: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        selfTakeTime: "",
        isShow: !1
    },
    localData: {
        themeIcons: [ "InconOrderDetailReceiving", "InconOrderDetailCooking", "InconOrderDetailWaitTake" ]
    },
    ready: function() {
        this.parseTime();
    },
    methods: {
        parseTime: function() {
            var e = this.data.time.split(" "), t = e[e.length - 1];
            this.setData({
                selfTakeTime: t
            });
        },
        showVerificationCodeModal: function() {
            this.triggerEvent("handleShowVerificationCodeModal");
        },
        handleOpenCabinet: function() {
            this.triggerEvent("handleOpenCabinet");
        },
        handleFinishOrder: function() {
            this.triggerEvent("handleFinishOrder");
        }
    }
});