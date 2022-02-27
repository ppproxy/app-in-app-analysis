Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getMemberLevelBlockBgColor = function(r) {
    return "number" != typeof r || isNaN(r) || r < 1 || r > e.MemberCardStyles.length + 1 ? e.MemberCardStyles[0].levelBlockBgColor : e.MemberCardStyles[r - 1].levelBlockBgColor;
}, exports.getMemberLevelBlockTextColor = function(r) {
    return "number" != typeof r || isNaN(r) || r < 1 || r > e.MemberCardStyles.length + 1 ? e.MemberCardStyles[0].levelBlockTextColor : e.MemberCardStyles[r - 1].levelBlockTextColor;
};

var e = require("../resource/memberCardResource");