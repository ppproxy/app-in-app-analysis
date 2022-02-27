Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.EnvEnm = void 0, exports.getImageUrl = s, exports.getPrefix = o, exports.getValidImageUrl = function(e) {
    var o = null;
    o = t() ? s(e, "", r.DEV) : s(e, "");
    return o;
}, exports.isDev = t;

var e = (0, require("../../../../l/wa").getEnv)(), r = {
    DEV: "dev",
    PROD: "prod",
    PRE: "pre"
};

function t() {
    return "dev" === e;
}

function o(e) {
    var t, o = ((t = {})[r.DEV] = "https://material-public-daily.oss-cn-hangzhou.aliyuncs.com", 
    t[r.PROD] = "https://s.koubei.com", t[r.PRE] = "https://s.koubei.com", t);
    return e || (e = r.PROD), o[e] ? o[e] : "https://s.koubei.com";
}

function s(e, r, t) {
    var s = o(t) + "/" + e, n = [];
    "string" == typeof r ? n.push({
        action: "resize",
        value: r
    }) : Array.isArray(r) && (n = r.slice());
    var i = n.reduce(function(e, r) {
        return r.action && r.value ? e + "/" + r.action + "," + r.value : e;
    }, "");
    return i && (s += "?x-oss-process=image" + i), s;
}

exports.EnvEnm = r;