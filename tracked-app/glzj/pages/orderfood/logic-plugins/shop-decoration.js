var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = e(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = require("../../../@babel/runtime/helpers/objectSpread2"), o = require("../../../v/33/n"), n = require("../../orderfood/models/dish-list.js"), s = require("../common/orderfood-error"), i = e(require("../../../m/zl/5o")), u = {
    styleType: "DEFAULT_COLOR",
    defaultColor: "#ffffff",
    brandColor: "#ffffff"
}, d = {
    show: !0,
    content: ""
};

function c(e) {
    var r = (e || []).filter(function(e) {
        return !e.resourceId;
    }), t = (e || []).filter(function(e) {
        return e.resourceId;
    });
    return r.map(function(e) {
        return function(e, r) {
            var t = a({}, e);
            if (e && e.data.appendRules) {
                var o = {};
                try {
                    (r || []).forEach(function(e) {
                        o[e.resourceId] = e;
                    }), t.data.dishMenu && t.data.dishMenu.data && Array.isArray(t.data.dishMenu.data.dishCates) && t.data.dishMenu.data.dishCates.forEach(function(e) {
                        e && e.decorateData && Array.isArray(e.decorateData.innerComponents) && (e.decorateData.innerComponents = e.decorateData.innerComponents.map(function(e) {
                            return a(a({}, e), o[e.resourceId]);
                        }));
                    }), t && t.data && Array.isArray(t.data.globalComponents) && (t.data.globalComponents = t.data.globalComponents.map(function(e) {
                        return e.resourceId && o[e.resourceId] ? o[e.resourceId] : e;
                    }));
                } catch (e) {}
            }
            return t;
        }(e, t);
    });
}

function p() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], r = {
        headerBackgroundData: u,
        pageNoticeBarData: d
    };
    return e.forEach(function(e) {
        var t = e.componentCode, a = e.data, o = t.replace("-component", "Data").replace(/-([a-z])/g, function(e, r) {
            return r.toUpperCase();
        });
        r[o] = a;
    }), r;
}

var h, l, f = {
    name: "shopDecoration",
    dependencies: [ "baseData" ],
    preload: (l = t(r.default.mark(function e(t) {
        var a, u, d, h, l, f, D, m, y, v, b, C, g, E, x, I, T;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return (a = (0, n.getDishListModel)()) ? a.changeRoot(t) : a = (0, n.createDishListModel)(t), 
                u = null, e.prev = 3, e.next = 6, (0, o.queryShopDecorationProload)();

              case 6:
                u = e.sent, (void 0 === (d = t.localData.traceArray) ? [] : d).push({
                    end: +new Date(),
                    type: "DATA_FETCH_END"
                }), e.next = 20;
                break;

              case 11:
                if (e.prev = 11, e.t0 = e.catch(3), "FAIL_BIZ_BUSINESS_TYPE_ERROR" !== e.t0.errorType) {
                    e.next = 16;
                    break;
                }
                return t.$exitconfirmTheme.show(), e.abrupt("return");

              case 16:
                if (!e.t0.response) {
                    e.next = 20;
                    break;
                }
                return h = e.t0.response.data.extInfo, l = void 0 === h ? {} : h, s.pageErrorShow.call(this, t, l), 
                e.abrupt("return");

              case 20:
                f = c(u), D = {};
                try {
                    D = p(f), y = f.filter(function(e) {
                        return "menu-dish-component" === e.componentCode;
                    }), v = "2" === ((y[0] || {}).selectedTemplate || "1"), b = D.headerBackgroundData || {}, 
                    C = b.styleType, g = "DEFAULT_COLOR" !== (void 0 === C ? "DEFAULT_COLOR" : C), m = D.menuDishData || {}, 
                    delete D.menuDishData, E = m.dishMenu || {}, x = E.data, I = (void 0 === x ? {} : x).hasMustDishCate, 
                    T = void 0 !== I && I, i.default.put("dish_menu_hasMustDishCate", T, {
                        persistent: !0,
                        immediate: !0
                    }), a.init(m, D, v), t.localData.isFirstLoad && (t.localData.isFirstLoad = !1), 
                    t.setData({
                        isCustomHeader: g,
                        cartDecorationInfo: D.dishCartData || {},
                        shopNoticeInfo: D.pageNoticeBarData || {},
                        headerBackgroundType: D.headerBackgroundData.styleType || ""
                    }, {
                        instant: !0
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    setTimeout(function() {
                        throw e;
                    }, 0);
                }
                return e.abrupt("return", {
                    shopDecorationData: D,
                    menuDishData: m
                });

              case 24:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 3, 11 ] ]);
    })), function(e) {
        return l.apply(this, arguments);
    }),
    exec: (h = t(r.default.mark(function e(t, a) {
        var o, n;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return (o = this.preloadError || {}) && o.shopDecoration && this.abort(o.shopDecoration.message), 
                this.preloadData.shopDecoration && (this.preloadData.shopDecoration.menuDishData || (n = this.preloadError.shopDecoration.response && this.preloadError.shopDecoration.response.data || this.preloadError.shopDecoration) && n.extInfo && s.pageErrorShow.call(this, t, n.extInfo)), 
                e.next = 5, a();

              case 5:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e, r) {
        return h.apply(this, arguments);
    }),
    end: function() {
        (0, n.destoryDishListModel)();
    }
};

exports.default = f;