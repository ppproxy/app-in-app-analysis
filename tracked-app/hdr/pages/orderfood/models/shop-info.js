var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createShopInfoModel = function() {
    o || (o = new i());
    return o;
}, exports.destoryShopInfoModel = function() {
    o && o.destory(), o = null;
}, exports.getShopInfoModel = function() {
    return o;
};

var r = require("../../../@babel/runtime/helpers/objectSpread2"), t = require("../../../@babel/runtime/helpers/classCallCheck"), u = require("../../../@babel/runtime/helpers/createClass"), n = require("../../../@babel/runtime/helpers/inherits"), l = require("../../../@babel/runtime/helpers/createSuper"), i = function(e) {
    n(o, e);
    var i = l(o);
    function o() {
        return t(this, o), i.apply(this, arguments);
    }
    return u(o, [ {
        key: "init",
        value: function(e) {
            this.data = r({
                openStatus: !0,
                address: "",
                contactMobile: null,
                openTimeDTOList: [],
                currentSystemTime: 0,
                storeName: "",
                forceJoinMember: 0,
                enableCheckSurplus: 0,
                surplusShowNum: 0
            }, e);
        }
    }, {
        key: "getOpenStatus",
        value: function() {
            return !!this.data.openStatus;
        }
    }, {
        key: "destory",
        value: function() {
            this.data = null;
        }
    } ]), o;
}(e(require("../../../l/wo")).default), o = null;