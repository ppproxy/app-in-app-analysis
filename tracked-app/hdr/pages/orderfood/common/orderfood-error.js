Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.pageErrorShow = function(t, e) {
    if (e) {
        var r = "", o = "", s = "", u = e.errorImg || "", i = e.errorMainText || "", l = e.errorSubText || "", n = e.errorMsgInfo || "", c = e.errorScene || "";
        "CAN_RETRY_ERROR" !== c && e !== {} || (r = "刷新页面"), "NEED_CHANGE_SHOP_ERROR" === c && (o = "回首页看看", 
        s = "切换门店"), t.showResult({
            resultImg: u || "https://img.alicdn.com/imgextra/i3/O1CN01SD5X0U1ffcPQjMQkd_!!6000000004034-0-tps-792-792.jpg",
            resultTitle: i || "本店服务好像出了点问题",
            resultSubTitle: l || "刷新试试看呢",
            resultMsgInfo: n,
            resultScene: c,
            resultButtonText: r || "刷新页面",
            resultButtonLeftText: o,
            resultButtonRightText: s
        }, e), i || l ? this.abort("".concat(i, ":").concat(l)) : this.abort("本店服务好像出了点问题, 刷新试试看呢");
    }
};