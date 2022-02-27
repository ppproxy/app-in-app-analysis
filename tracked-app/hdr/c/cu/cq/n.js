var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../m/zk/za")), a = t(require("../../../m/zl/5o")), o = require("../../../l/wa");

(0, e.default)({
    name: "official-account-modal",
    data: {
        componentShow: !1,
        slideUp: !1,
        imageShow: !1,
        isIphoneXmore: (0, o.isIphoneXOrMore)()
    },
    ready: function() {
        var t = this;
        setTimeout(function() {
            t.setData({
                componentShow: t.cacheExpired()
            });
        }, 1e3);
    },
    localData: {},
    methods: {
        cacheExpired: function() {
            var t = a.default.get("OFFICIAL_ACCOUNT_TIME_KEY", {
                persistent: !0,
                notIsolate: !0
            });
            return !(t && t + 6048e5 > Date.now());
        },
        handleLoad: function(t) {
            t && t.detail && 0 === t.detail.status ? (this.setData({
                slideUp: !0,
                imageShow: !0
            }), this.$root.$logExpo(".decoration.official-account-modal-load-success")) : this.$root.$logExpo(".decoration.official-account-modal-load-fail", {
                status: t && t.detail && t.detail.status
            });
        },
        handleError: function(t) {
            this.$root.$logExpo(".decoration.official-account-modal-load-fail", {
                status: t && t.detail && t.detail.status
            });
        },
        handleClose: function() {
            this.setData({
                slideUp: !1
            }), a.default.put("OFFICIAL_ACCOUNT_TIME_KEY", Date.now(), {
                persistent: !0,
                notIsolate: !0
            });
        }
    }
});