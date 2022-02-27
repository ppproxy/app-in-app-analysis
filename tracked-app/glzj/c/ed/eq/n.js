var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")), t = require("../../../pages/member/common/util/common");

(0, e.default)({
    name: "member-collect-point-item",
    data: {
        activeIcon: "",
        voucherTotalValue: "",
        appType: t.appTypeConstant.wx
    },
    localData: {
        themeIcons: [ "IconMemberCollectPointTea", "IconMemberCollectPointHotpot", "IconMemberCollectPointBurger", "IconMemberCollectPointCommon" ]
    },
    properties: {
        status: {
            type: String,
            value: ""
        },
        index: {
            type: String,
            value: ""
        },
        last: {
            type: Boolean,
            value: !1
        },
        value: {
            type: Number,
            value: 0
        },
        icon: {
            type: String,
            value: ""
        }
    },
    ready: function() {
        this.setData({
            voucherTotalValue: String(this.data.value),
            appType: (0, t.getAppType)()
        });
    }
});