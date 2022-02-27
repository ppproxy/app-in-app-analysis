var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createDishMd5 = f, exports.default = void 0, exports.getMustDishNum = h, 
exports.getStartInterval = d, exports.getStartNumber = c, exports.getSurplusData = l, 
exports.getUnitName = function(e, t) {
    var r = e.cookbookDishSkuList, o = void 0 === r ? [] : r;
    if (!(t = t || o[0])) return 1;
    return t.unitName;
}, exports.handlePrice = p, exports.isComboDish = a, exports.isMultiSpecDish = u, 
exports.isNumber = b, exports.isSingleDish = n;

var t = e(require("../@babel/runtime/regenerator")), r = require("../@babel/runtime/helpers/asyncToGenerator"), o = require("./w9"), i = require("../m/z8/zj"), s = e(require("./wd/w1"));

function n(e) {
    return e && "SINGLE" === e.dishType;
}

function u(e) {
    return e && "Y" === e.multiSpecFlag;
}

function a(e) {
    return e && "COMBO" === e.dishType;
}

function c(e, t) {
    var r = e.cookbookDishSkuList;
    return (t = t || (void 0 === r ? [] : r)[0]) && (a(e) ? t.comboStartNumber : t.startNumber) || 1;
}

function d(e, t) {
    var r = e.cookbookDishSkuList;
    return (t = t || (void 0 === r ? [] : r)[0]) && (a(e) ? 1 : t.startInterval) || 1;
}

function l(e) {
    return v.apply(this, arguments);
}

function v() {
    return (v = r(t.default.mark(function e(r) {
        var i, s, a, l, v, f, p, b, k, m, S, g, D, x, N, I, y, O, w, M, L, P, q, C, j, E, T, z, A, B, G, R, U, _, F;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return i = r.dish, s = r.num, a = void 0 === s ? 0 : s, l = r.skuOtherNumSum, v = void 0 === l ? 0 : l, 
                f = r.scene, p = void 0 === f ? "list" : f, b = r.currentSku, k = !1, m = !1, S = !1, 
                g = "", D = !1, x = !1, e.next = 9, (0, o.getStoreBaseConfig)();

              case 9:
                if (N = e.sent, I = N.enableCheckSurplus, y = void 0 === I ? 0 : I, O = N.surplusShowNum, 
                w = void 0 === O ? 0 : O, M = i.overPlusNum, L = i.overPlusUnitName, P = i.overPlusSkuId, 
                q = i.cookbookDishSkuList, C = void 0 === q ? [] : q, j = (b || {}).dishStockDecimal, 
                E = void 0 === j ? 1 : j, T = C.every(function(e) {
                    return 0 === e.dishStockDecimal;
                }), k = C.length ? T : 0 === E, z = h(i, b), S = a <= z, 0 !== y) {
                    e.next = 19;
                    break;
                }
                return e.abrupt("return", {
                    isSoldOut: k,
                    disableAdd: m,
                    disableMinus: S,
                    isShow: D,
                    showLabel: g,
                    isOversold: x
                });

              case 19:
                return A = M, B = L, b ? (A = b.overPlusNum, B = b.unitName) : b = C.find(function(e) {
                    return e.skuId === P;
                }), (D = !("detail" === p && (!n(i) || u(i))) && (!k && A > 0 && A <= w)) && (g = "仅剩".concat(A).concat(B)), 
                G = !1, R = !1, void 0 !== A && (U = c(i, b), _ = "detail" === p ? 1 : d(i, b), 
                F = a + v, G = 0 === a && F + U > A, R = a > 0 && F + _ > A, x = a > 0 && F > A), 
                m = k || G || R, e.abrupt("return", {
                    isSoldOut: k,
                    disableAdd: m,
                    disableMinus: S,
                    isShow: D,
                    showLabel: g,
                    isOversold: x
                });

              case 29:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function h() {
    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, o = t.cookbookDishSkuList, s = void 0 === o ? [] : o;
    e = r ? r.skuId : s.length ? s[0].skuId : "";
    var n = (0, i.getCartModel)("orderfood") || {}, u = n.cartData, a = void 0 === u ? {} : u, c = a.list, d = void 0 === c ? [] : c, l = d.find(function(t) {
        return t.skuId === e;
    }), v = l || {}, h = v.mustDishNum, f = void 0 === h ? 0 : h;
    return f;
}

function f() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.dishId, r = e.skuId, o = e.selectPratices, i = void 0 === o ? {} : o, n = e.selectSideDishs, u = void 0 === n ? {} : n, a = e.selectRemarks, c = void 0 === a ? {} : a, d = e.extra, l = void 0 === d ? "" : d, v = "".concat(t, "-").concat(r);
    Object.keys(i).sort().forEach(function(e) {
        v += "-".concat(i[e].detailId);
    }), Object.keys(u).sort().forEach(function(e) {
        v += "-".concat(u[e].detailId);
    }), Object.keys(c).sort().forEach(function(e) {
        v += "-".concat(e);
    }), l && (v += "-".concat(l));
    var h = (0, s.default)(v);
    return h;
}

function p(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 99999999, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7, o = b(e) && e > 0, i = b(t) && t > 0, s = b(r) && r > 0;
    if (s || (console.error("参数类型错误，支持展示的最大金额必须是大于零的数字"), t = 99999999), i || (console.error("参数类型错误，截断位数必须是大于零的数字"), 
    r = 7), !o) return console.error("参数类型错误，价格必须是大于零的数字"), "";
    var n = e / 100 + "";
    return e > t && (n = n.slice(0, r) + "..."), n;
}

function b(e) {
    return "number" == typeof e && !isNaN(e);
}

var k = {
    isSingleDish: n,
    isMultiSpecDish: u,
    isComboDish: a,
    getStartNumber: c,
    getStartInterval: d,
    getSurplusData: l,
    createDishMd5: f,
    handlePrice: p
};

exports.default = k;