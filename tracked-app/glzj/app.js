var e = require("@babel/runtime/helpers/interopRequireDefault");

require("./m/5f");

var a = e(require("./m/zk/zo")), o = e(require("./m/zw")), n = require("./m/54/5e"), t = require("./l/wh"), r = require("./l/wa"), i = require("./v/ci/n"), l = require("./v/ci/36"), u = e(require("./m/zr/n")), c = require("./pages/home/common/origin-enum");

function s(e) {
    if ((e.path || "").startsWith("pages/home")) {
        var a = (0, t.getTableId)();
        a && a.length > 0 && (0, t.removeTableId)();
    }
}

function f(e) {
    !function(e) {
        switch (e.scene) {
          case 1001:
          case 1089:
            s(e);
        }
    }(e);
}

function h(e) {
    if (e) {
        var a = u.default.getLoginPromise(), o = u.default.getGlobalConfigPromise(), n = function(e) {
            return new Promise(function(a, o) {
                (0, i.queryCodeInfo)({
                    codeValue: e
                }).then(function(e) {
                    var n = e.data;
                    if (n) {
                        var t = n.shopId;
                        t && t.length > 0 ? (0, l.getStoreInfoById)({
                            shopId: t
                        }).then(function(e) {
                            e.data && a({
                                codeInfo: n,
                                shopInfo: e.data
                            });
                        }).catch(function() {
                            o(new Error("[门店接口]：根据门店ID获取门店信息失败"));
                        }) : a({
                            codeInfo: n
                        });
                    }
                }).catch(function() {
                    o(new Error("[码路由接口]：码路由接口请求失败"));
                });
            });
        }(e);
        return Promise.all([ a, o, n ]);
    }
    return u.default.start();
}

function d(e) {
    var a = e.query;
    if ("string" == typeof a) try {
        a = JSON.parse(a.replace(/([^,\s{=]+)=([^,\s}]+)/g, '"$1":"$2"'));
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        a = {};
    }
    return a;
}

function m(e) {
    var a = "";
    if (e) {
        var o;
        if ("wxchatcard" === e.origin && e.cv && e.cv.length > 0 && (a = e.cv, e.q && e.q.length > 0 && (0, 
        t.setQueryPathInfo)(e.q), delete e.q), o = e.q) {
            (0, t.setGlobalMiniChannel)(c.ORIGIN_WITH_QR_CODE);
            var n = decodeURIComponent(o).split("/");
            a = n[n.length - 1], (0, t.setQueryPathInfo)(o);
        }
    }
    return a;
}

(0, a.default)({
    baxiaMiniprogram: n.libMtopConfig.$baxiaMiniprogram,
    globalData: {
        usedLoadHomeData: !1,
        codeValue: "",
        preloadHomeDataPromise: Promise.resolve()
    },
    onLaunch: function(e) {
        e && e.scene && (0, r.setGlobalSceneValue)(e.scene);
        var a = d(e), o = m(a);
        this.globalData.codeValue = o, this.globalData.preloadHomeDataPromise = h(o);
        var n = this.matchXifenCode(a), i = (0, r.getMiniType)();
        this.globalData.isXifenCode = n, n && "my" === i && (0, t.setGlobalMiniChannel)(c.ORIGIN_WITH_ALIPAY_XIFEN_CARD);
    },
    loadHomeData: function() {
        var e, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", o = this.globalData, n = o.usedLoadHomeData, t = o.codeValue;
        return n || a !== t ? (this.globalData.codeValue = a, e = h(a)) : e = this.globalData.preloadHomeDataPromise, 
        this.globalData.usedLoadHomeData = !0, e;
    },
    matchXifenCode: function(e) {
        return (function(e) {
            var a, o = "";
            e && (a = e.q) && (o = decodeURIComponent(a || ""));
            return o;
        }(e) || "").indexOf("weixin.qq.com/q/") >= 0;
    },
    onShow: function(e) {
        if (o.default.check(), e) {
            var a = e.referrerInfo, n = d(e);
            if (a && (0, t.setGlobalReferInfo)(a), n) {
                var i = m(n);
                i && (0, t.setGlobalScaneInfo)({
                    codeValue: i
                });
                var l = n.origin || "", u = n.path || "";
                l.length > 0 && u.length > 0 && (0, t.setLanuchJumpInfo)({
                    origin: l,
                    path: u
                });
            }
            this.globalData.isXifenCode = this.matchXifenCode(n), e.scene && ((0, r.setGlobalSceneValue)(e.scene), 
            f(e));
        }
    },
    onHide: function() {},
    onError: function(e) {}
});