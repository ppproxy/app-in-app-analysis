var t = require("../../../@babel/runtime/helpers/typeof"), e = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
    cn: /^[\u2E80-\uFE4F]+$/,
    enName: /^[\da-zA-Z\s]{2,}$/,
    cnName: /^[\u2E80-\uFE4F]{2,6}(?:·[\u2E80-\uFE4F]{2,6})*$/,
    userName: /^[\da-zA-Z\u2E80-\uFE4F \s]{2,}$/,
    carId: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
    mobile: /^1[3456789]\d{9}$/,
    address: /^[\da-zA-Z\u2E80-\uFE4F \s-]{4,400}$/,
    date: /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/,
    numVcode: /^[0-9]{4,8}$/,
    vcode: /^[a-zA-Z0-9]{4,8}$/,
    code: /^[a-zA-Z0-9]{4,}$/,
    hkMc: /^[WC][0-9]{8}$/,
    taiWan: /^T[0-9]{8}$/,
    passport: /^1[45][0-9]{7}|([E|e]\d{8})|([P|p|S|s]\d{7})|([S|s|G|g]\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8})|([H|h|M|m]\d{8，10})$/,
    num: /^[1-9][0-9]*$/,
    money: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
    id: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
    twCome: /^(\d{8}|[a-zA-Z]\d{7})$/,
    hmHid: /^8[123]0000\d{12}$/
};

void 0 === String.prototype.trim && (String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}), module.exports = {
    required: function(e) {
        return Array.isArray(e) ? e.length > 0 : "object" === t(e) ? Object.keys(e).length > 0 : !(!e && 0 !== e);
    },
    id: function(t) {
        return "string" == typeof t && e.id.test(t.trim());
    },
    cn: function(t) {
        return "string" == typeof t && e.cn.test(t.trim());
    },
    mobile: function(t) {
        return "string" == typeof t && e.mobile.test(t.trim());
    },
    email: function(t) {
        return "string" == typeof t && e.email.test(t.trim());
    },
    url: function(t) {
        return "string" == typeof t && e.url.test(t.trim());
    },
    carId: function(t) {
        return "string" == typeof t && e.carId.test(t.trim());
    },
    cnName: function(t) {
        return "string" == typeof t && e.cnName.test(t.trim());
    },
    enName: function(t) {
        return "string" == typeof t && e.enName.test(t.trim());
    },
    userName: function(t) {
        return "string" == typeof t && e.userName.test(t.trim());
    },
    address: function(t) {
        return "string" == typeof t && e.address.test(t.trim());
    },
    date: function(t) {
        return "string" == typeof t && e.date.test(t.trim());
    },
    numVcode: function(t) {
        return "string" == typeof t && e.numVcode.test(t.trim());
    },
    vcode: function(t) {
        return "string" == typeof t && e.vcode.test(t.trim());
    },
    code: function(t) {
        return "string" == typeof t && e.code.test(t.trim());
    },
    hkMc: function(t) {
        return "string" == typeof t && e.hkMc.test(t.trim());
    },
    taiWan: function(t) {
        return "string" == typeof t && e.taiWan.test(t.trim());
    },
    passport: function(t) {
        return "string" == typeof t && e.passport.test(t.trim());
    },
    num: function(t) {
        return "string" == typeof t && e.num.test(t.trim());
    },
    money: function(t) {
        return "string" == typeof t && e.money.test(t.trim());
    },
    twCome: function(t) {
        return "string" == typeof t && e.twCome.test(t.trim());
    },
    hmHid: function(t) {
        return "string" == typeof t && e.hmHid.test(t.trim());
    }
};