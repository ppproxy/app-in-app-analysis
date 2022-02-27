var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/regenerator")), a = require("../../@babel/runtime/helpers/asyncToGenerator"), r = e(require("../../m/zk/za")), o = e(require("../../m/zl/59")), n = require("../../l/wh");

(0, r.default)({
    name: "bottom-tabbar",
    properties: {
        defaultList: {
            type: Array,
            value: []
        },
        fromPage: {
            type: String,
            value: ""
        },
        isPageResult: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isShow: !1,
        selected: "",
        color: "#757575",
        selectedColor: "#333",
        list: [],
        brandLogo: "",
        isKeyBoardOpen: !1
    },
    localData: {
        timer: null,
        themeIcons: [ "IconTabDish", "IconTabHome", "IconTabMall", "IconTabMine", "IconTabOrder" ]
    },
    ready: function() {
        var e = this;
        return a(t.default.mark(function a() {
            var r, o, i, s, l, u, c, d, h;
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (r = (0, n.getTabBarList)(), o = (0, n.getBrandInfo)() || {}, i = o.brandLogo, 
                    t.prev = 2, (s = r || []).length || (s = e.data.defaultList), s.length) {
                        t.next = 7;
                        break;
                    }
                    return t.abrupt("return");

                  case 7:
                    l = e.$root.route, u = e.data.fromPage, c = {
                        brandLogo: i,
                        list: s
                    }, d = s.find(function(e) {
                        return e.pagePath === l;
                    }), h = s.find(function(e) {
                        return e.pagePath === u;
                    }), (d || h) && (c.selected = d ? d.pagePath : u, c.isShow = !0, d && d.selectedColor && (c.selectedColor = d.selectedColor)), 
                    e.setData(c, function() {
                        e.triggerEvent("handleShowTabbar", {
                            isShow: e.data.isShow
                        });
                    }), e.isAndroid() && wx.onKeyboardHeightChange(function(t) {
                        e.setData({
                            isKeyBoardOpen: !!t.height
                        });
                    }), t.next = 21;
                    break;

                  case 17:
                    t.prev = 17, t.t0 = t.catch(2), console.error("tabbar缓存数据解析失败", t.t0), e.triggerEvent("handleShowTabbar", {
                        isShow: !1
                    });

                  case 21:
                  case "end":
                    return t.stop();
                }
            }, a, null, [ [ 2, 17 ] ]);
        }))();
    },
    detached: function() {
        var e = this.localData.timer;
        e && clearTimeout(e), this.isAndroid() && wx.onKeyboardHeightChange(function() {});
    },
    methods: {
        isAndroid: function() {
            var e = o.default.getSync("systemInfo");
            return e.platform && "android" === e.platform.toLowerCase();
        },
        switchTab: function(e) {
            var t = this, a = this.data, r = a.fromPage, o = a.isPageResult, n = this.localData.timer, i = e.currentTarget.dataset.path;
            o && i === r || (this.setData({
                selected: i
            }), n && clearTimeout(n), this.localData.timer = setTimeout(function() {
                t.$root.$relaunch("/".concat(i));
            }, 100));
        }
    }
});