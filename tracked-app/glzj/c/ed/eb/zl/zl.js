Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.checkSiteParamsValid = function(e) {
    if (e && e.length > 0) {
        for (var n = !1, i = 0; i < e.length; i++) n = n || t(e[i]);
        return n;
    }
    return !1;
}, exports.checkSiteValid = t, exports.getBindChannelForMemberJoin = function(t) {
    var i = t.bindSitesLimitList, r = t.bindRelationship, s = t.currentSiteBindRelationShip, o = {
        isNeedBind: !1,
        bindChannel: []
    };
    n(i, e.CHANNEL.ELE) && (s && !s.eleme || r && !r.alipayBindEleme) && (o.bindChannel.push(e.CHANNEL.ELE), 
    o.isNeedBind = !0);
    return o;
}, exports.getCurrentChannel = function() {
    var n = e.CHANNEL.KB;
    (0, e.isApp)("ap") ? n = e.CHANNEL.ALIPAY : (0, e.isApp)("tb") ? n = e.CHANNEL.TB : (0, 
    e.isApp)("elmc") ? n = e.CHANNEL.ELE : (0, e.isApp)("yk") && (n = e.CHANNEL.YK);
    return n;
}, exports.isSiteIncludes = n;

var e = require("../../../../pages/member/common/util/common");

function n(e, n) {
    return !!(n && e && e.length && e.length > 0) && e.indexOf(n) >= 0;
}

function t(n) {
    if (!n) return !1;
    switch (n.toLowerCase()) {
      case e.CHANNEL.ALIPAY.toLowerCase():
      case e.CHANNEL.ELE.toLowerCase():
      case e.CHANNEL.TB.toLowerCase():
      case e.CHANNEL.KB.toLowerCase():
        return !0;

      default:
        return !1;
    }
}