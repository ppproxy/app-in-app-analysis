var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.memberCenterQuery = function(e) {
    return r.default.request({
        api: "mtop.alsc.member.prod.member.page.homepage.query",
        param: e
    }).then(function(e) {
        return e.data;
    });
}, exports.queryByCustomerId = function(e) {
    return r.default.request({
        api: "mtop.alsc.member.prod.customer.queryByCustomerId",
        param: e
    }).then(function(e) {
        return e.data;
    });
}, exports.queryWechatTemplate = function(e) {
    return r.default.request({
        api: "mtop.alsc.member.prod.customer.queryMessageTemplateList",
        param: e
    }).then(function(e) {
        return e.data;
    });
};

var r = e(require("../../m/zl/5h"));