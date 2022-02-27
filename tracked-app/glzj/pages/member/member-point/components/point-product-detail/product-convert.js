Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MOCK_KB_PAY_SCENE_DATA = exports.MOCK_KB_FULL_SCENE_DATA = exports.MOCK_GIFT_DATA = exports.MOCK_ELE_GIFT_DATA = exports.MOCK_ELE_CASH_DELIVERY_DATA = exports.MOCK_ELE_CASH_DATA = exports.MOCK_DISCOUNT_DATA = exports.MOCK_CASH_DATA = void 0, 
exports.getPointCouponType = o, exports.transferCRMToL100CouponModel = function(i) {
    if (i) {
        var m = i.currentLevel && i.currentLevel.levelNo || 0;
        return {
            itemId: i.itemId,
            benefitName: i.name,
            bgImgUrl: l(i),
            couponType: o(i),
            voucherAmount: r(i),
            voucherDiscount: i.crmVoucherInfo ? i.crmVoucherInfo.discount : "",
            mainLabel: n(i),
            mainLabelColor: t(i),
            exchangeable: i.exchangeable,
            exchangeNotice: c(i),
            pointToExchange: i.memberPoint,
            pointTagBgColor: (0, e.getMemberLevelBlockTextColor)(m),
            pointTagTextColor: (0, e.getMemberLevelBlockBgColor)(m),
            pointTagText: a(i),
            pointCouponLeftNum: i.quantity,
            sourceLabel: "",
            useTargetType: "",
            validDayCount: i.validDayCount,
            validTimeInfo: {
                validPeriod: i.expiredTime,
                validTimeType: i.validDateType,
                validTimeFrom: i.startTime,
                validTimeTo: i.endTime
            },
            rate: i.crmVoucherInfo.discount,
            itemType: i.itemType,
            threshold: i.crmVoucherInfo ? i.crmVoucherInfo.threshold : "",
            bizType: o(i),
            orgSubjectInfo: {
                needPoints: i.memberPoint,
                restInventory: i.quantity
            },
            pointTagInfo: {
                pointTagColor: (0, e.getMemberLevelBlockTextColor)(m),
                pointTagText: a(i)
            },
            selfImgUrl: i.selfImgUrl
        };
    }
    return "";
};

var e = require("../../../../member/common/util/point/memberCardUtil");

exports.MOCK_KB_FULL_SCENE_DATA = {
    crmVoucherInfo: {
        voucherSubType: "KB_CASH_FULL_SCENE",
        content: 11,
        minCharge: 100,
        discount: 0
    },
    crowdBizDTO: {
        crowdType: "MEMBER",
        levelList: [ {
            levelId: "2",
            levelName: "第二等级"
        }, {
            levelId: "3",
            levelName: "第三等级"
        }, {
            levelId: "4",
            levelName: "第四等级"
        } ]
    },
    itemId: "121214324234",
    name: "口碑全场景券",
    memberPoint: 1e3,
    exchangeable: !0,
    inconvertibleReason: "LOW_POINT",
    itemStatus: "SALE_OUT"
};

exports.MOCK_KB_PAY_SCENE_DATA = {
    itemId: "121214324234",
    name: "口碑当面付",
    memberPoint: 1e3,
    exchangeable: !0,
    inconvertibleReason: "LOW_POINT",
    crmVoucherInfo: {
        voucherSubType: "KB_CASH_PAY_SCENE",
        content: 11,
        minCharge: 100,
        discount: 0
    },
    itemStatus: "SALE_OUT",
    crowdBizDTO: {
        crowdType: "MEMBER",
        levelList: [ {
            levelId: "2",
            levelName: "第二等级"
        }, {
            levelId: "3",
            levelName: "第三等级"
        }, {
            levelId: "4",
            levelName: "第四等级"
        } ]
    }
};

exports.MOCK_ELE_CASH_DATA = {
    itemId: "121214324234",
    name: "饿了么满减券",
    memberPoint: 1e3,
    exchangeable: !0,
    inconvertibleReason: "LOW_POINT",
    crmVoucherInfo: {
        voucherSubType: "ELE_CASH",
        content: 11,
        minCharge: 100,
        discount: 0
    },
    itemStatus: "SALE_OUT",
    crowdBizDTO: {
        crowdType: "MEMBER",
        levelList: [ {
            levelId: "2",
            levelName: "第二等级"
        }, {
            levelId: "3",
            levelName: "第三等级"
        }, {
            levelId: "4",
            levelName: "第四等级"
        } ]
    }
};

exports.MOCK_ELE_GIFT_DATA = {
    itemId: "121214324234",
    name: "饿了么商品券",
    memberPoint: 1e3,
    exchangeable: !0,
    inconvertibleReason: "LOW_POINT",
    crmVoucherInfo: {
        voucherSubType: "ELE_GIFT",
        content: 11,
        minCharge: 100,
        discount: 0,
        imgUrl: "https://cube.elemecdn.com/a/c5/2a1d283404eee5e2c37bf179549f1jpeg.jpeg"
    },
    itemStatus: "SALE_OUT",
    crowdBizDTO: {
        crowdType: "MEMBER",
        levelList: [ {
            levelId: "2",
            levelName: "第二等级"
        }, {
            levelId: "3",
            levelName: "第三等级"
        }, {
            levelId: "4",
            levelName: "第四等级"
        } ]
    }
};

exports.MOCK_ELE_CASH_DELIVERY_DATA = {
    itemId: "121214324234",
    name: "饿了么配送券",
    memberPoint: 1e3,
    exchangeable: !0,
    inconvertibleReason: "LOW_POINT",
    crmVoucherInfo: {
        voucherSubType: "ELE_CASH_DELIVERY",
        content: 11,
        minCharge: 100,
        discount: 0
    },
    itemStatus: "SALE_OUT",
    crowdBizDTO: {
        crowdType: "MEMBER",
        levelList: [ {
            levelId: "2",
            levelName: "第二等级"
        }, {
            levelId: "3",
            levelName: "第三等级"
        }, {
            levelId: "4",
            levelName: "第四等级"
        } ]
    }
};

exports.MOCK_CASH_DATA = {
    itemId: "121214324234",
    name: "线下现金券",
    memberPoint: 1e3,
    exchangeable: !0,
    inconvertibleReason: "LOW_POINT",
    crmVoucherInfo: {
        crmVoucherType: "CASH",
        voucherSubType: "SAAS_CASH",
        content: 11,
        minCharge: 100,
        discount: 0
    },
    itemStatus: "SALE_OUT",
    crowdBizDTO: {
        crowdType: "MEMBER",
        levelList: [ {
            levelId: "2",
            levelName: "第二等级"
        }, {
            levelId: "3",
            levelName: "第三等级"
        }, {
            levelId: "4",
            levelName: "第四等级"
        } ]
    }
};

exports.MOCK_DISCOUNT_DATA = {
    itemId: "121214324232",
    name: "线下折扣券",
    memberPoint: 222,
    exchangeable: !1,
    inconvertibleReason: "LEVEL_NO_MATCH",
    crmVoucherInfo: {
        crmVoucherType: "DISCOUNT",
        voucherSubType: "SAAS_DISCOUNT",
        content: 222,
        minCharge: 100,
        discount: 6.6
    },
    itemStatus: "SALE_OUT",
    crowdBizDTO: {
        crowdType: "MEMBER",
        levelList: [ {
            levelId: "2",
            levelName: "第二等级"
        }, {
            levelId: "3",
            levelName: "第三等级"
        }, {
            levelId: "4",
            levelName: "第四等级"
        } ]
    }
};

function r(e) {
    try {
        return e && e.crmVoucherInfo && e.crmVoucherInfo.content && !isNaN(e.crmVoucherInfo.content) ? (e.crmVoucherInfo.content / 100).toString() : e.crmVoucherInfo.content;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return "";
    }
}

function o(e) {
    if (e && e.crmVoucherInfo) switch (e.crmVoucherInfo.voucherSubType) {
      case "KB_CASH_FULL_SCENE":
        return "KOUBEI_ITEM_VOUCHER";

      case "KB_CASH_PAY_SCENE":
        return "KOUBEI_FACE2FACE_VOUCHER";

      case "ELE_CASH":
        return "ELEME_VOUCHER";

      case "ELE_GIFT":
        return "ELEME_DISH_VOUCHER";

      case "ELE_CASH_DELIVERY":
        return "ELEME_DELIVERY_VOUCHER";

      case "SAAS_CASH":
        return "SAAS_CASH";

      case "SAAS_DISCOUNT":
        return "SAAS_DISCOUNT";

      case "SAAS_GIFT":
        return "SAAS_GIFT";

      default:
        return "";
    }
    return "";
}

function t(e) {
    if (e && e.crmVoucherInfo) switch (e.crmVoucherInfo.voucherSubType) {
      case "SAAS_CASH":
      case "SAAS_DISCOUNT":
      case "SAAS_GIFT":
      default:
        return "white";
    }
    return "white";
}

function n(e) {
    if (!e || !e.crmVoucherInfo) return "";
    var r = e.crmVoucherInfo.minCharge / 100;
    return 0 === r ? "无门槛" : "满".concat(r, "元可用");
}

function l(e) {
    if (e && e.crmVoucherInfo) switch (e.crmVoucherInfo.voucherSubType) {
      case "KB_CASH_FULL_SCENE":
      case "KB_CASH_PAY_SCENE":
        return "https://img.alicdn.com/tfs/TB1tjvfD9f2gK0jSZFPXXXsopXa-164-164.png";

      case "ELE_CASH":
      case "ELE_CASH_DELIVERY":
        return "https://img.alicdn.com/tfs/TB1nfvdD2b2gK0jSZK9XXaEgFXa-164-164.png";

      case "SAAS_CASH":
      case "SAAS_DISCOUNT":
      case "SAAS_GIFT":
        return "https://gw.alicdn.com/tfs/TB1K26MaOpE_u4jSZKbXXbCUVXa-163-163.png";

      case "ELE_GIFT":
        return e.crmVoucherInfo.imgUrl || "https://img.alicdn.com/tfs/TB1nfvdD2b2gK0jSZK9XXaEgFXa-164-164.png";

      default:
        return "";
    }
}

function c(e) {
    if (e) {
        if (e.exchangeable) return "立即抢兑";
        if (e.inconvertibleReason) switch (e.inconvertibleReason) {
          case "LEVEL_NO_MATCH":
            return "等级不足";

          case "LOW_POINT":
            return "积分不足";

          case "OVER_LIMIT":
            return "超过限额";

          case "SOLD_OUT":
            return "抢光啦";

          case "REMOVED":
          default:
            return "已下架";
        }
    }
    return "";
}

function a(e) {
    if (e.crowdBizDTO) {
        if ("ALL" === e.crowdBizDTO.crowdType) return null;
        for (var r = !1, o = -1, t = -1, n = e.crowdBizDTO.levelList, l = 0; l < n.length; l++) {
            if (n[l].levelNo === e.currentLevel.levelNo) {
                r = !0;
                break;
            }
            n[l].levelNo < e.currentLevel.levelNo ? (-1 === o || n[l].levelNo > n[o].levelNo) && (o = l) : (-1 === t || n[l].levelNo < n[t].levelNo) && (t = l);
        }
        return r || -1 === o && -1 === t ? e.currentLevel.levelName : -1 === o ? n[t].levelName : -1 === t ? n[o].levelName : n[t].levelName;
    }
    return null;
}

exports.MOCK_GIFT_DATA = {
    itemId: "121214324230",
    name: "线下礼品券",
    memberPoint: 3333,
    exchangeable: !1,
    inconvertibleReason: "SOLD_OUT",
    crmVoucherInfo: {
        crmVoucherType: "GIFT",
        voucherSubType: "SAAS_GIFT",
        content: 33,
        minCharge: 100,
        discount: 0
    },
    itemStatus: "SALE_OUT",
    crowdBizDTO: {
        crowdType: "MEMBER",
        levelList: [ {
            levelId: "2",
            levelName: "第二等级"
        }, {
            levelId: "3",
            levelName: "第三等级"
        }, {
            levelId: "4",
            levelName: "第四等级"
        } ]
    }
};