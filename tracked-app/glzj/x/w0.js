var e = require("../@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../l/wh"), r = function(t, r) {
    if (!r && t && t.__esModule) return t;
    if (null === t || "object" !== e(t) && "function" != typeof t) return {
        default: t
    };
    var o = a(r);
    if (o && o.has(t)) return o.get(t);
    var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in t) if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var l = i ? Object.getOwnPropertyDescriptor(t, u) : null;
        l && (l.get || l.set) ? Object.defineProperty(n, u, l) : n[u] = t[u];
    }
    n.default = t, o && o.set(t, n);
    return n;
}(require("../m/57/5p")), o = require("../m/57/n");

function a(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), r = new WeakMap();
    return (a = function(e) {
        return e ? r : t;
    })(e);
}

var n = {
    methods: {
        $initBottomTabBar: function() {
            var e = (0, t.getTabBarList)(), a = ((0, t.getBrandInfo)() || {}).brandLogo, n = this.$root, i = n.getTabBar, u = n.route, l = n.localData, f = (0, 
            t.getThemeColor)(), s = (0, t.getMarketingColor)();
            if ("function" != typeof i) return !1;
            try {
                var c = this.$root.getTabBar();
                if (!c) return;
                var d = e || [];
                if (!d.length) return c.setData({
                    isShow: !1,
                    list: []
                }), !1;
                c && c.data && (c.data.$root = this.$root);
                var p = l || {}, h = p.fromPage, g = p.isPageResult, b = {
                    brandLogo: a,
                    list: d,
                    fromPage: h,
                    isPageResult: g
                }, v = (c.data || {}).themeIcons;
                (void 0 === v ? [] : v).forEach(function(e) {
                    r[e] && (b[e] = r[e].templateId ? (0, o.handleDynamicThemeColor)(r[e], {
                        themeColor: f,
                        marketingColor: s
                    }) : (0, o.handleSvgThemeColor)(r[e], f));
                });
                var m = d.find(function(e) {
                    return e.pagePath === u;
                }), y = d.find(function(e) {
                    return e.pagePath === h;
                });
                return (m || y) && (b.selected = m ? m.pagePath : h, b.isShow = !0, m && m.selectedColor && (b.selectedColor = m.selectedColor)), 
                c.setData(b), b.isShow;
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return console.error("tabbar缓存数据解析失败", e), !1;
            }
        }
    }
};

exports.default = n;