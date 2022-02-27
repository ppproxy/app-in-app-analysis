var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = require("../../@babel/runtime/helpers/objectSpread2"), i = e(require("./zb")), t = e(require("./5e")), a = require("../../l/wa"), u = e(require("../zv")), n = e(require("../zd/n")).default.$ltracker, o = new i.default(), l = {}, f = u.default.envConfig, s = void 0 === f ? {} : f;

if (s) {
    var p = s[(0, a.getEnv)()] || {}, d = p.prefix, v = p.subDomain, b = p.mainDomain;
    d && (l.prefix = d), null != v && (l.subDomain = v), b && (l.mainDomain = b);
}

o.setupConfig({
    options: r({}, l),
    wxRequestEnv: (0, a.getEnv)(),
    mtopFailCallback: function(e, r) {
        n.other("/MTOP_ERROR_INFO", {
            c1: JSON.stringify(r)
        });
    }
}), o.registerFetcher("mtop", t.default);

var m = o;

exports.default = m;