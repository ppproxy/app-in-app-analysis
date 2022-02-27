var e = require("../../@babel/runtime/helpers/interopRequireDefault"), r = e(require("../../@babel/runtime/regenerator")), n = require("../../@babel/runtime/helpers/asyncToGenerator"), t = require("../../@babel/runtime/helpers/objectSpread2"), a = e(require("../zt")), o = require("./zf"), i = require("../../l/wh"), u = require("../../l/wa"), l = require("../../l/w9"), c = e(require("../z3/z2")), f = e(require("./zx"));

function s(e) {
    for (var r = e.data && e.data.config || [], n = "#8BBB11", a = "#FF4B33", o = [], u = {
        show: !1
    }, l = 0; l < r.length; l++) {
        var c = r[l].key, s = r[l].value;
        "brandColor" === c && s && (n = s.toUpperCase()), "marketingColor" === c && s && (a = s.toUpperCase()), 
        "tabBar" === c && s && (o = JSON.parse(s)), "specialEffect" === c && s && (u = JSON.parse(s));
    }
    var d = o.filter(function(e) {
        return e.enable;
    });
    0 === d.length && (d = [ {
        code: "home",
        text: "首页",
        enable: !0,
        index: 1
    }, {
        code: "personal",
        text: "我的",
        enable: !0,
        index: 2
    } ]);
    for (var p = [], g = [ "code", "text", "iconPath", "selectedIconPath" ], b = function(e) {
        var r = d[e].code, n = f.default[r];
        if (!n) return "continue";
        var a = t({}, n);
        g.forEach(function(r) {
            d[e][r] && (a[r] = d[e][r]);
        }), p.push(a);
    }, h = 0; h < d.length; h++) b(h);
    (0, i.setGlobalThemeColor)(n), (0, i.setGlobalMarketingColor)(a), (0, i.setGlobalTabBarList)(p), 
    (0, i.setGlobalSpecialEffectConfig)(u), function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = e.effects, n = void 0 === r ? [] : r, t = "";
        if (n.length) {
            var a = n.find(function(e) {
                return "LOADING" === e.code;
            });
            a && a.content && a.content.imageUrl && (t = a.content.imageUrl);
        }
        (0, i.setLoadingGifUrl)(t);
    }(u);
}

function d(e) {
    var r = e.data.brandInfo, n = {
        brandId: r.brandId,
        brandName: r.brandName,
        brandLogo: r.logo ? (0, l.getImageUrl)(r.logo) : "https://img.alicdn.com/tfs/TB1iDdya9slXu8jSZFuXXXg7FXa-132-132.png"
    };
    (0, i.setGlobalBrandInfo)(n);
}

var p = {
    start: function() {
        var e = this;
        return n(r.default.mark(function n() {
            var t, a;
            return r.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return t = e.miniLogin(), a = e.miniFetchGlobalConfigInfo(), r.abrupt("return", Promise.all([ t, a ]).then(function(e) {
                        if (!(e && e.length > 0)) throw new Error("链路接口请求失败");
                        var r = e[0];
                        return (0, i.setGlobalLoginCustomer)(r.customerId), e;
                    }).catch(function() {
                        throw new Error("链路接口请求失败");
                    }));

                  case 3:
                  case "end":
                    return r.stop();
                }
            }, n);
        }))();
    },
    getLoginPromise: function() {
        return this.miniLogin();
    },
    getGlobalConfigPromise: function() {
        return this.miniFetchGlobalConfigInfo();
    },
    setLoginInfo: function(e) {
        (0, i.setGlobalLoginCustomer)(e.customerId);
    },
    miniLogin: function() {
        return n(r.default.mark(function e() {
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", c.default.login());

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        }))();
    },
    miniFetchGlobalConfigInfo: function() {
        return n(r.default.mark(function e() {
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function(e, r) {
                        var n = (0, i.getAppBaseInfo)().appId, t = "";
                        switch ((0, u.getMiniType)()) {
                          case "wx":
                            t = "WECHAT";
                            break;

                          case "my":
                            t = "ALIPAY";
                        }
                        (0, o.queryGlobalConfigInfo)({
                            pageCode: a.default.HIGHT_HOME_PAGE_CODE || "CSHOP_INDEX",
                            appCode: "KERUYUN_MERCHANT_APP",
                            appId: n,
                            deviceType: t
                        }).then(function(r) {
                            s(r.data), d(r.data), e(r.data);
                        }).catch(function(e) {
                            r(e);
                        });
                    }));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        }))();
    }
};

module.exports = p;