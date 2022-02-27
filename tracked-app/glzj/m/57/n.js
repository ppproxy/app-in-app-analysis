var e = require("../../@babel/runtime/helpers/interopRequireDefault"), r = require("../../@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getDynamicImageUrl = d, exports.handleDynamicThemeColor = p, exports.handleSvgThemeColor = f, 
exports.renderThemeIcon = function() {
    var e = (0, i.getThemeColor)(), r = (0, i.getMarketingColor)(), t = this.localData || {}, n = t.themeIcons, o = void 0 === n ? [] : n, l = t.marketingIcons, u = void 0 === l ? [] : l, s = {
        themeColor: e,
        marketingColor: r
    };
    if (o.length) try {
        o.forEach(function(r) {
            a[r] && (s[r] = a[r] && a[r].templateId ? p(a[r], s) : f(a[r], e));
        });
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        console.error("解析themeIcons失败", e);
    }
    if (u.length) try {
        u.forEach(function(e) {
            c[e] && (s[e] = c[e] && c[e].templateId ? p(c[e], s) : f(c[e], r, /marketingColor/g));
        });
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        console.error("解析marketingIcons失败", e);
    }
    this.setData(s);
};

var t = require("../../@babel/runtime/helpers/slicedToArray"), n = require("../../l/wd/wb"), o = e(require("../../l/wd/w1")), a = s(require("./5p")), c = s(require("./5k")), i = require("../../l/wh"), l = require("../../l/wa");

function u(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return (u = function(e) {
        return e ? t : r;
    })(e);
}

function s(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || "object" !== r(e) && "function" != typeof e) return {
        default: e
    };
    var n = u(t);
    if (n && n.has(e)) return n.get(e);
    var o = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var c in e) if ("default" !== c && Object.prototype.hasOwnProperty.call(e, c)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, c) : null;
        i && (i.get || i.set) ? Object.defineProperty(o, c, i) : o[c] = e[c];
    }
    return o.default = e, n && n.set(e, o), o;
}

function f(e, r, t) {
    var o = e.replace(t || /themeColor/g, r), a = n.Base64.encode(o);
    return "data:image/svg+xml;base64,".concat(a);
}

function p(e, r) {
    var n = e.templateId, o = e.nodeIds, a = e.content, c = JSON.parse(JSON.stringify(a || {}));
    return a ? Object.keys(c).forEach(function(e) {
        Object.keys(c[e]).forEach(function(t) {
            var n = c[e][t];
            void 0 !== r[n] && (c[e][t] = r[n]);
        });
    }) : c = function(e, r) {
        var n = {};
        return (e || []).forEach(function(e) {
            n[e] = {}, e.split("_").forEach(function(o) {
                var a = o.split(":"), c = t(a, 2), i = c[0], l = c[1];
                n[e][i] = r[l];
            });
        }), n;
    }(o, r), d(n, c);
}

function d(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = JSON.stringify(r), n = "154", a = "600ecb22-c5a2-4b50-92c2-4c5d436da831", c = (0, 
    o.default)(t + a), i = (0, l.getEnv)(), u = "prod" === i || "pre" === i ? "s.koubei.com" : "s-daily.koubei.com";
    return "https://".concat(u, "/dynamic-svg/").concat(e, "/").concat(c, ".svg?channel=").concat(n, "&content=").concat(encodeURIComponent(t));
}