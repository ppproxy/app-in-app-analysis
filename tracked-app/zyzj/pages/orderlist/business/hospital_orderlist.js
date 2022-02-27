Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../@babel/runtime/helpers/classCallCheck"), a = require("../../../@babel/runtime/helpers/createClass"), t = function() {
    function t(a) {
        e(this, t), this.cx = a;
    }
    return a(t, [ {
        key: "handleTabsForHospital",
        value: function() {
            this.cx.localData.tabsData = [ {
                title: "点餐",
                value: "food-order",
                key: "dishOrder"
            } ];
        }
    }, {
        key: "activeHospitalTabs",
        value: function() {
            this.cx.setData({
                activeTab: "food-order",
                tabs: this.cx.localData.tabsData,
                showTabs: !1
            });
        }
    } ]), t;
}();

exports.default = t;