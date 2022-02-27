Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SAAS_IMG_URL = exports.KOUBEI_IMG_URL = exports.ELEME_IMG_URL = void 0, 
exports.fixCouponListBgUrl = C, exports.fixCouponListFontColor = L, exports.fixCouponListToShow = s, 
exports.fixCouponToShow = function(e) {
    if (e) {
        var r = [];
        r[0] = e;
        var o = s(r);
        if (o && o.length >= 1) return o[0];
    }
    return e;
}, exports.getCouponBenefitSite = function(e) {
    switch (e) {
      case "KB_CASH_FULL_SCENE":
      case "KOUBEI_ITEM_VOUCHER":
        return r.CHANNEL.TB;

      case "KB_CASH_PAY_SCENE":
      case "KOUBEI_FACE2FACE_VOUCHER":
        return r.CHANNEL.ALIPAY;

      case "ELE_CASH":
      case "ELEME_VOUCHER":
        return r.CHANNEL.ELE;

      case "ELE_GIFT":
      case "ELEME_DISH_VOUCHER":
        return r.CHANNEL.ELE;

      case "ELE_CASH_DELIVERY":
      case "ELEME_DELIVERY_VOUCHER":
        return r.CHANNEL.ELE;

      default:
        return r.CHANNEL.UNKNOWN;
    }
}, exports.getCouponSite = function(e) {
    switch (e) {
      case "KB_CASH_FULL_SCENE":
      case "KOUBEI_ITEM_VOUCHER":
        return r.CHANNEL.TB;

      case "KB_CASH_PAY_SCENE":
      case "KOUBEI_FACE2FACE_VOUCHER":
        return r.CHANNEL.ALIPAY;

      case "ELE_CASH":
      case "ELEME_VOUCHER":
        return r.CHANNEL.ELE;

      case "ELE_GIFT":
      case "ELEME_DISH_VOUCHER":
        return r.CHANNEL.ELE;

      case "ELE_CASH_DELIVERY":
      case "ELEME_DELIVERY_VOUCHER":
        return r.CHANNEL.ELE;

      default:
        return r.CHANNEL.UNKNOWN;
    }
}, exports.getPointCouponTextColor = a, exports.getPointCouponType = u, exports.getPointTagInfo = c, 
exports.transferCRMToL100CouponModel = function(e, r) {
    try {
        return e ? {
            itemId: e.itemId,
            benefitName: e.name,
            bgImgUrl: _(e),
            bizType: u(e),
            voucherAmount: E(e),
            voucherDiscount: e.crmVoucherInfo ? e.crmVoucherInfo.discount : "",
            threshold: e.crmVoucherInfo ? e.crmVoucherInfo.threshold : "",
            mainLabel: i(e),
            mainLabelColor: a(e.crmVoucherInfo ? e.crmVoucherInfo.voucherSubType : ""),
            pointTagInfo: c(e, r),
            orgSubjectInfo: {
                needPoints: e.memberPoint,
                restInventory: e.quantity,
                canExchange: !!e.customerExchangedDTO && e.customerExchangedDTO.exchangeable,
                exchangeNotice: l(e)
            },
            validTimeInfo: {
                validTimeType: e.validDateType,
                validTimeFrom: e.startTime,
                validTimeTo: e.endTime,
                validDayCount: e.validDayCount
            },
            selfImgUrl: e.selfImgUrl,
            itemType: e.itemType
        } : "";
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return "";
    }
}, exports.transferSiteString2ChannelItem = function(e) {
    if (!e) return null;
    switch (e.toLowerCase()) {
      case r.CHANNEL.ELE.toLowerCase():
      case "ele":
        return r.CHANNEL.ELE;

      case r.CHANNEL.TB.toLowerCase():
      case "tb":
        return r.CHANNEL.TB;

      case r.CHANNEL.ALIPAY.toLowerCase():
        return r.CHANNEL.ALIPAY;

      case r.CHANNEL.KB.toLowerCase():
      case "kb":
        return r.CHANNEL.KB;
    }
};

var e = require("./memberCardUtil"), r = require("../common"), o = "https://img.alicdn.com/tfs/TB15pzL1VY7gK0jSZKzXXaikpXa-326-326.png";

exports.KOUBEI_IMG_URL = o;

var n = "https://img.alicdn.com/tfs/TB1nfvdD2b2gK0jSZK9XXaEgFXa-164-164.png";

exports.ELEME_IMG_URL = n;

var t = "https://img.alicdn.com/tfs/TB1Co_T1.Y1gK0jSZFMXXaWcVXa-326-326.png";

function c(r, o) {
    return {
        pointTagColor: (0, e.getMemberLevelBlockTextColor)(o),
        pointTagText: A(r)
    };
}

function E(e) {
    try {
        return e && e.crmVoucherInfo ? e && e.crmVoucherInfo && e.crmVoucherInfo.denomination && !isNaN(e.crmVoucherInfo.denomination) ? e.crmVoucherInfo.denomination.toString() : e.crmVoucherInfo.denomination : "";
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return "";
    }
}

function u(e) {
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

function a(e) {
    if (e) switch (e) {
      case "SAAS_CASH":
      case "SAAS_DISCOUNT":
      case "SAAS_GIFT":
      default:
        return "white";
    }
    return "white";
}

function i(e) {
    if (!e || !e.crmVoucherInfo) return "";
    var r = e.crmVoucherInfo.threshold;
    return 0 === r ? "无门槛" : "满".concat(r, "元可用");
}

function s(e) {
    return L(C(e));
}

function L(e) {
    if (e && e.length && e.length >= 1) for (var r = 0; r < e.length; r++) {
        var o = e[r];
        o && o.crmVoucherInfo && o.crmVoucherInfo.voucherSubType && (o.crmVoucherInfo.fontColor = a(o.crmVoucherInfo.voucherSubType));
    }
    return e;
}

function C(e) {
    if (e && e.length && e.length >= 1) for (var r = 0; r < e.length; r++) {
        var o = e[r];
        o && o.crmVoucherInfo && o.crmVoucherInfo.voucherSubType && !o.crmVoucherInfo.imgUrl && (o.crmVoucherInfo.imgUrl = _(o));
    }
    return e;
}

function _(e) {
    if (e && e.crmVoucherInfo) switch (e.crmVoucherInfo.voucherSubType) {
      case "KB_CASH_FULL_SCENE":
      case "KB_CASH_PAY_SCENE":
        return o;

      case "ELE_CASH":
      case "ELE_CASH_DELIVERY":
        return n;

      case "SAAS_CASH":
      case "SAAS_DISCOUNT":
      case "SAAS_GIFT":
        return t;

      case "ELE_GIFT":
        return e.crmVoucherInfo.imgUrl ? e.crmVoucherInfo.imgUrl : n;

      default:
        return t;
    }
    return t;
}

function l(e) {
    if (!e || !e.customerExchangedDTO) return "无法兑换";
    if (e.customerExchangedDTO.exchangeable) return "立即抢兑";
    switch (e.customerExchangedDTO.inconvertibleReason) {
      case "LEVEL_NO_MATCH":
        return "等级不足";

      case "LOW_POINT":
        return "积分不足";

      case "OVER_LIMIT":
        return "超过限额";

      case "SOLD_OUT":
        return "抢光啦";

      case "REMOVED":
        return "已移除";

      default:
        return "无法兑换";
    }
}

function A(e) {
    try {
        if (e && e.crowdBizDTO) {
            if ("ALL" === e.crowdBizDTO.crowdType) return null;
            if (e.crowdBizDTO.levelList && e.crowdBizDTO.levelList.length > 0) {
                for (var r = !1, o = -1, n = -1, t = e.crowdBizDTO.levelList, c = 0; c < t.length; c++) {
                    if (t[c].levelNo === e.currentLevel.levelNo) {
                        r = !0;
                        break;
                    }
                    t[c].levelNo < e.currentLevel.levelNo ? (-1 === o || t[c].levelNo > t[o].levelNo) && (o = c) : (-1 === n || t[c].levelNo < t[n].levelNo) && (n = c);
                }
                return r || -1 === o && -1 === n ? e.currentLevel.levelName : -1 === o ? t[n].levelName : -1 === n ? t[o].levelName : t[n].levelName;
            }
        }
        return null;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return null;
    }
}

exports.SAAS_IMG_URL = t;