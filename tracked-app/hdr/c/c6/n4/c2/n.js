var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../@babel/runtime/regenerator")), a = require("../../../../@babel/runtime/helpers/asyncToGenerator"), r = e(require("../../../../m/zk/za")), n = require("../../../../l/wh.js"), i = require("../../../../c/cz/zf/n"), d = e(require("../../../../m/zd/n")).default.$ltracker;

(0, r.default)({
    name: "点餐页-菜品item组件",
    components: {
        dishAddCart: "dish-add-cart"
    },
    properties: {
        extStyle: {
            type: String,
            value: ""
        },
        openStatus: {
            type: Boolean,
            value: !0
        },
        groupId: {
            type: String,
            value: ""
        },
        dish: {
            type: Object,
            value: {}
        },
        dishIndex: {
            type: Number,
            value: 0
        },
        groupIndex: {
            type: Number,
            value: 0
        },
        dishDot: {
            type: Object,
            value: {}
        },
        memberFlag: {
            type: Boolean,
            value: !1
        },
        logType: {
            type: String,
            value: ""
        },
        isSearchPage: {
            type: Boolean,
            value: !1
        },
        dishMenuColumn: {
            type: String,
            value: ""
        },
        fromMustDishCate: {
            type: Boolean,
            value: !1
        },
        dishListOrderedMap: {
            type: Object,
            value: {}
        },
        groupName: {
            type: String,
            value: ""
        }
    },
    methods: {
        handleOpenDetail: function(e) {
            var r = this;
            return a(t.default.mark(function a() {
                var s, u, o, l, p, h, c, m, g, v;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, s = e.currentTarget && e.currentTarget.dataset.dishid || "", u = r.data, 
                        o = u.dish, l = void 0 === o ? {} : o, p = u.openStatus, h = u.groupName, "COMBO" !== l.dishType) {
                            t.next = 7;
                            break;
                        }
                        r.$root.$emit("openDishDetail", {
                            dishName: l.dishName,
                            dishId: s,
                            groupName: h
                        }, r), t.next = 16;
                        break;

                      case 7:
                        return t.next = 9, (0, i.getDishDetail)({
                            needItemAvailablePromo: !0,
                            dishId: s
                        });

                      case 9:
                        if ((c = t.sent).data) {
                            t.next = 12;
                            break;
                        }
                        return t.abrupt("return");

                      case 12:
                        m = c.data.data || {}, r.$root.$emit("openSpecs", {
                            dish: m,
                            openStatus: p,
                            isSetMeal: !1,
                            btnFlag: !1,
                            isFromDetailPage: !1,
                            customType: "商品列表",
                            setMealCallback: function(e) {
                                r.triggerEvent("handleNumChange", e);
                            }
                        }, r), g = (0, n.getSceneType)(), v = g.sceneType, r.$root.$logClick(".keruyun_menu.product_details", {
                            customScene: v,
                            dishId: m.dishId,
                            dishName: m.dishName,
                            groupName: h
                        });

                      case 16:
                        t.next = 21;
                        break;

                      case 18:
                        t.prev = 18, t.t0 = t.catch(0), d.logError(t.t0);

                      case 21:
                      case "end":
                        return t.stop();
                    }
                }, a, null, [ [ 0, 18 ] ]);
            }))();
        },
        openDishSpecs: function() {
            var e = this.getComponentById("dishAddCart");
            e && e.handleShowSpecs();
        },
        dishAddReady: function() {
            this.triggerEvent("handleSaveComponent", {
                dishId: this.data.dish.dishId,
                component: this
            });
        },
        handleImageLoad: function() {
            var e = this.data, t = e.groupIndex, a = e.dishIndex;
            0 === t && 0 === a && this.triggerEvent("handleImageRender");
        }
    }
});