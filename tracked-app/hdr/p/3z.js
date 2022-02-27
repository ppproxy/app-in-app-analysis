Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../m/zd/n"), o = require("../l/wa"), n = {
    onLoad: function() {
        var n = this.$originpage.spmStartParams, t = void 0 === n ? {} : n;
        (0, e.hookPageOnLoad)(this, t), "wx" === (0, o.getMiniType)() && e.handleInitExp.call(this);
    },
    onShow: function() {
        try {
            (0, e.hookPageOnShow)(this);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.error("tracert plugin onShow error", e);
        }
    },
    onReady: function() {},
    onHide: function() {
        (0, e.hookPageOnHide)(this);
    },
    onUnload: function() {
        (0, e.hookPageOnHide)(this), "wx" === (0, o.getMiniType)() && e.handleRemoveExp.call(this);
    }
};

exports.default = n;