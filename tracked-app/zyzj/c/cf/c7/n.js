var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), r = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../../m/zk/za")), n = require("../../../l/wh"), u = require("../../../c/cz/zf/n"), i = e(require("../../../m/zd/n")).default.$ltracker;

(0, a.default)({
    name: "推荐菜-大图模式",
    properties: {
        dish: {
            type: Object,
            value: {}
        },
        memberFlag: {
            type: Boolean,
            value: !1
        },
        openStatus: {
            type: Boolean,
            value: !1
        },
        isShowMinus: {
            type: Boolean,
            value: !1
        },
        dishDot: {
            type: Object,
            value: {}
        },
        logType: {
            type: String,
            value: ""
        },
        dishMenuColum: {
            type: String,
            value: ""
        },
        dishListOrderedMap: {
            type: Object,
            value: {}
        }
    },
    methods: {
        handleOpenDetail: function(e) {
            var a = this;
            return r(t.default.mark(function r() {
                var s, l, o, d, p, c;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return s = e.currentTarget.dataset.dishid || "", t.prev = 1, t.next = 4, (0, u.getDishDetail)({
                            needItemAvailablePromo: !0,
                            dishId: s
                        });

                      case 4:
                        if ((l = t.sent).data) {
                            t.next = 7;
                            break;
                        }
                        return t.abrupt("return");

                      case 7:
                        o = l.data.data || {}, d = a.data.openStatus, "COMBO" === o.dishType ? a.$root.$emit("openDishDetail", {
                            dishId: o.dishId
                        }, a) : a.$root.$emit("openSpecs", {
                            dish: o,
                            showSku: o.showSku,
                            openStatus: d,
                            isSetMeal: !1,
                            isFromDetailPage: !1,
                            customType: "推荐菜浮层",
                            setMealCallback: function(e) {
                                a.triggerEvent("handleNumChange", e);
                            }
                        }, a), p = (0, n.getSceneType)(), c = p.sceneType, a.$root.$logClick(".keruyun_menu.product_details", {
                            customScene: c
                        }), t.next = 17;
                        break;

                      case 14:
                        t.prev = 14, t.t0 = t.catch(1), i.logError(t.t0);

                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, r, null, [ [ 1, 14 ] ]);
            }))();
        }
    }
});