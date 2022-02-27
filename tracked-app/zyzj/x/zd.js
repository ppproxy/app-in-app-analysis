var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = e(require("../m/zd/n")), t = {
    methods: {
        $logAppear: function(e) {
            return r.default.$logAppear(e);
        },
        $logReinit: function(e) {
            return r.default.$logReinit(e);
        },
        $logExpo: function(e, t, l) {
            return r.default.$logExpo(e, t, l);
        },
        $logClick: function(e, t, l) {
            return r.default.$logClick(e, t, l);
        },
        $logOther: function(e, t, l) {
            return r.default.$logOther(e, t, l);
        },
        $getCustomError: function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = new Error(e || "自定义错误");
            return t.error_type = "SAAS_ERROR", Object.keys(r).forEach(function(e) {
                t[e] = r[e];
            }), t;
        },
        $getLogger: function() {
            return r.default.$ltracker;
        },
        $logAvailableTrace: function(e) {
            return r.default.$logAvailableTrace.call(this, e);
        },
        bindExp: function(e) {
            return r.default.bindExp.call(this, e);
        }
    }
};

exports.default = t;