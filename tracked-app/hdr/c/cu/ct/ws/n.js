var e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/regenerator")), t = require("../../../../@babel/runtime/helpers/asyncToGenerator"), a = require("../../../../l/wt"), i = require("../../../cz/zf/n");

function r(e, t) {
    for (var a = {}, i = e.carouselList, r = 0; r < i.length; r++) if (t === r) {
        a = i[r];
        break;
    }
    return a.actionContent;
}

function n(e) {
    a.jumpWxArticlePage.call(this, e);
}

function l(e) {
    a.jumpMiniAppPage.call(this, e);
}

function c(e) {
    a.jumpMiniGoodsPage.call(this, e);
}

function s(e) {
    a.jumpMiniDishPage.call(this, e);
}

function o(e) {
    a.jumpInnerAppPage.call(this, e);
}

function u(e, t, i) {
    try {
        this.$root.$logClick(".custom_link_jump", {
            componentCode: i || "",
            actionType: e,
            actionContent: JSON.stringify(t)
        });
    } catch (e) {}
    switch (e) {
      case "article":
        n.call(this, t);
        break;

      case "miniapp":
        l.call(this, t);
        break;

      case "goods":
        c.call(this, t);
        break;

      case "dish":
        if (this.localData && this.localData.options && this.localData.options.dishPage) return void this.triggerEvent("handleOpenDishDetail", t);
        s.call(this, t);
        break;

      case "inner_app":
        o.call(this, t);
        break;

      case "promotion":
        a.jumpElemePromotionPage.call(this, t);
    }
}

module.exports = {
    getSwiperWrapDefaultStyle: function(e) {
        return Object.assign({
            width: 702,
            height: 178,
            borderRadius: 16,
            marginTop: 0,
            marginBottom: 20
        }, e);
    },
    getSwiperDotDefaultStyle: function(e) {
        return Object.assign({
            bottom: 48
        }, e);
    },
    swiperChangeEvent: function(e) {
        this.setData({
            cur: e.detail.current
        });
    },
    carsuleClickEvent: function(a, n) {
        var l = this;
        return t(e.default.mark(function t() {
            var c, s, o, h, p, d, m;
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (c = a.currentTarget.dataset, s = c.actionType, o = c.index, h = r(l.data, o), 
                    p = null, !h.dish) {
                        e.next = 18;
                        break;
                    }
                    return e.prev = 5, d = h.dish.dishId, e.next = 9, (0, i.getDishDetail)({
                        needItemAvailablePromo: !0,
                        dishId: d
                    });

                  case 9:
                    return m = e.sent, (p = m.data.data).jumpUrl = h.dish.jumpUrl, u.call(l, s, p, n), 
                    e.abrupt("return");

                  case 16:
                    e.prev = 16, e.t0 = e.catch(5);

                  case 18:
                    u.call(l, s, h, n);

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, t, null, [ [ 5, 16 ] ]);
        }))();
    },
    gotoCustomizePage: function(e, t, a) {
        u.call(this, e, t, a);
    }
};