function t(t) {
    var e = t.substr(6, 8), r = new Date();
    return e <= r.getFullYear() + "" + (r.getMonth() + 1 < 10 ? "0" + (r.getMonth() + 1) : r.getMonth() + 1) + (r.getDate() < 10 ? "0" + r.getDate() : r.getMonth() + 1);
}

function e(t) {
    var e = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ], r = {
        0: "1",
        1: "0",
        2: "X",
        3: "9",
        4: "8",
        5: "7",
        6: "6",
        7: "5",
        8: "4",
        9: "3",
        10: "2"
    }, n = t.length, o = t[n - 1];
    if (!/^(\d|X)$/.test(o)) return !1;
    for (var i = 0, u = 0; u < n - 1; u++) {
        if (isNaN(Number(t[u]))) return !1;
        i += Number(t[u]) * e[u];
    }
    return console.log(i % 11, o), r[i % 11] === o;
}

var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, n = {
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
    passport: /^(1[45][0-9]{7}|([E|e]\d{8})|([P|p|S|s]\d{7})|([S|s|G|g]\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8})|([H|h|M|m]\d{8，10}))$/,
    num: /^[1-9][0-9]*$/,
    money: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
    id: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
    twCome: /^(\d{8}|[a-zA-Z]\d{7})$/,
    hmHid: /^8[123]0000\d{12}$/
};

void 0 === String.prototype.trim && (String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}), module.exports = {
    required: function(t) {
        return Array.isArray(t) ? t.length > 0 : "object" === (void 0 === t ? "undefined" : r(t)) ? Object.keys(t).length > 0 : !(!t && 0 !== t);
    },
    id: function(r) {
        return "string" == typeof r && n.id.test(r.trim()) && t(r.trim()) && e(r.trim());
    },
    cn: function(t) {
        return "string" == typeof t && n.cn.test(t.trim());
    },
    mobile: function(t) {
        return "string" == typeof t && n.mobile.test(t.trim());
    },
    email: function(t) {
        return "string" == typeof t && n.email.test(t.trim());
    },
    url: function(t) {
        return "string" == typeof t && n.url.test(t.trim());
    },
    carId: function(t) {
        return "string" == typeof t && n.carId.test(t.trim());
    },
    cnName: function(t) {
        return "string" == typeof t && n.cnName.test(t.trim());
    },
    enName: function(t) {
        return "string" == typeof t && n.enName.test(t.trim());
    },
    userName: function(t) {
        return "string" == typeof t && n.userName.test(t.trim());
    },
    address: function(t) {
        return "string" == typeof t && n.address.test(t.trim());
    },
    date: function(t) {
        return "string" == typeof t && n.date.test(t.trim());
    },
    numVcode: function(t) {
        return "string" == typeof t && n.numVcode.test(t.trim());
    },
    vcode: function(t) {
        return "string" == typeof t && n.vcode.test(t.trim());
    },
    code: function(t) {
        return "string" == typeof t && n.code.test(t.trim());
    },
    hkMc: function(t) {
        return "string" == typeof t && n.hkMc.test(t.trim());
    },
    taiWan: function(t) {
        return "string" == typeof t && n.taiWan.test(t.trim());
    },
    passport: function(t) {
        return "string" == typeof t && n.passport.test(t.trim());
    },
    num: function(t) {
        return "string" == typeof t && n.num.test(t.trim());
    },
    money: function(t) {
        return "string" == typeof t && n.money.test(t.trim());
    },
    twCome: function(t) {
        return "string" == typeof t && n.twCome.test(t.trim());
    },
    hmHid: function(t) {
        return "string" == typeof t && n.hmHid.test(t.trim());
    }
};