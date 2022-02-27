var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../m/zk/za")), n = require("../../../../m/z8/zj"), o = require("../../../../pages/orderfood/models/dish-list.js"), r = require("../../5j/n"), i = require("../../../../l/wh"), a = (e(require("../../../../m/5y")), 
!1);

(0, t.default)({
    name: "左侧类目列表",
    logProps: {
        $$expElement: [ ".".concat("nbf") ]
    },
    properties: {
        showLeftMenuIcon: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        current: 0,
        scrollIntoId: "",
        animation: !1,
        categoryDot: {},
        dishMenuColumn: "",
        customScene: "",
        menus: []
    },
    ready: function() {
        var e = this;
        (0, n.getCartModel)("orderfood").bindCategoryDotChange(function(t) {
            var n = t.categoryDot;
            e.setData({
                categoryDot: n
            });
        });
        var t = (0, o.getDishListModel)();
        t.bindDishMenuColumnChange(function(t) {
            e.setData({
                dishMenuColumn: t
            });
        }, !0), t.bindCategoryListChange(function(t) {
            var n = t.categoryList;
            n.length > 0 && e.setData({
                menus: n
            }, function() {
                e.$root.$logReinit(e);
            });
        }, !0), (0, r.bindEmitter)(this).$on("changeCurrentIndex", function(t) {
            var n = t.groupIndex, o = t.animation, r = void 0 === o || o;
            if (!a && n !== e.data.current) {
                var i = {
                    animation: r,
                    current: n,
                    cateIndex: 0
                };
                i.scrollIntoId = "leftMenu".concat(n), e.setData(i);
            }
        }, this);
        var u = (0, i.getSceneType)().sceneType;
        this.setData({
            customScene: u
        });
    },
    detached: function() {
        (0, r.bindEmitter)(this).$off("changeCurrentIndex", this);
    },
    methods: {
        handleTap: function(e) {
            var t = this, n = e.currentTarget.dataset, o = n.index, i = n.bizOutCode, u = n.catelabel;
            a = !0, (0, r.bindEmitter)(this).$emit("scrollToGroup", {
                id: o
            }, this), this.setData({
                current: o,
                cateIndex: 0,
                animation: !0
            }, function() {
                setTimeout(function() {
                    a = !1, t.$root.$logClick(".orderfood_page_left_menu_click", {
                        customScene: u + "分类"
                    }), "MUST_DISH" === i && t.$root.$logClick(".orderfood_page.virtual_category_of_required_dishes_click", {
                        customScene: t.data.customScene
                    });
                }, 500);
            });
        },
        forbidMove: function() {
            return null;
        },
        handleAppear: function(e) {
            return "MUST_DISH" === (e.target.dataset || {}).bizOutCode && this.$root.$logAppear(e), 
            null;
        }
    }
});