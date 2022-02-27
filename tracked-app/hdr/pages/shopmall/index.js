var e = require("../../@babel/runtime/helpers/interopRequireDefault"), o = e(require("../../dynamic/DPage")), n = (e(require("../../m/zk/z9")), 
e(require("../../m/zt"))), i = e(require("../../x/cu")), r = e(require("../../m/zl/5o")), t = require("./services/index"), a = require("../../l/w9"), p = require("../../l/wh"), s = require("../../l/wa");

(0, o.default)({
    __ctx__: {
        CONSTANTS: n.default,
        renMixin: i.default,
        Cache: r.default,
        queryShopConfigInfo: t.queryShopConfigInfo,
        isTabBarPage: a.isTabBarPage,
        getAppBaseInfo: p.getAppBaseInfo,
        getGeoInfo: p.getGeoInfo,
        getShopId: p.getShopId,
        getShopInfo: p.getShopInfo,
        getVersion: s.getVersion,
        getMiniType: s.getMiniType,
        isIphoneXOrMore: s.isIphoneXOrMore
    },
    __tid__: "pages/shopmall/index",
    mixins: [ i.default ],
    components: {
        pointMallComponent: "point-mall-component",
        advertiseCarouselComponent: "advertise-carousel-component",
        goodsWindowComponent: "goods-window-component",
        goodsListComponent: "goods-list-component",
        navigationBar: "navigation-bar",
        loading: "loading"
    }
});