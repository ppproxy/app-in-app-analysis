var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../../@babel/runtime/helpers/objectSpread2"), a = t(require("../../../m/zk/za")), o = t(require("../../../m/zl/5o")), i = t(require("../../../m/zt")), l = t(require("../../../m/z3/z7")), r = t(require("../../../m/zl/5a")), s = require("./zf/n"), u = require("./zt"), n = t(require("../../../m/zl/59")), d = t(require("../../../m/zw")), h = require("../../../l/wm"), p = require("../../../l/wh");

(0, a.default)({
    name: "cart-bubble",
    options: {
        styleIsolation: "apply-shared"
    },
    properties: {
        cartId: {
            type: String,
            value: ""
        }
    },
    localData: {
        poll: null,
        popTimer: null,
        pushTimer: null,
        bubbleQueue: [],
        requesting: !1,
        updateCart: function() {},
        handleOperations: function() {}
    },
    data: {
        top: 70,
        queryTime: "",
        bubbleList: [],
        orderedTip: null
    },
    ready: function() {
        var t, e, a = this;
        this.setData({
            top: (t = n.default.getSync("systemInfo"), e = t.system, (t.statusBarHeight || 24) + (/ios/i.test(e) ? 44 : 48))
        }), this.initPoll(), d.default.init(), this.localData.updateCart = (0, h.throttle)(function() {
            var t = a.localData.poll;
            t && t.poll(function() {}, function() {}, !0);
        }, 500), this.localData.handleOperations = function(t) {
            a.handleOperations(t);
        }, d.default.$on("ALSC-SAAS-CART.CART_OPERATION_CHANGE", this.localData.handleOperations);
    },
    detached: function() {
        this.stopPoll(), d.default.$off("ALSC-SAAS-CART.CART_OPERATION_CHANGE", this.localData.handleOperations);
    },
    methods: {
        initPoll: function() {
            var t = this, e = new r.default(function() {
                return (0, s.queryCartAndOperations)({
                    cartId: t.data.cartId,
                    appType: "WECHAT"
                });
            }, {
                interval: 5e3,
                processCallback: function(e, a) {
                    t.handleCartUpdate(e, a);
                }
            });
            this.localData.poll = e;
        },
        startPoll: function() {
            var t = this.localData && this.localData.poll;
            t && t.start();
        },
        stopPoll: function() {
            this.localData && this.localData.poll && this.localData.poll.stop();
        },
        isRequesting: function() {
            return this.localData && this.localData.poll && this.localData.poll._isRequesting;
        },
        handleOperations: function(t) {
            var e = this, a = t.shopId, o = t.tableId, i = t.operations, r = t.orderNo, s = t.cartId;
            if ((0, p.getShopId)() === a && (0, p.getTableId)() === o && s === this.data.cartId) {
                this.localData.updateCart();
                var u = i.findIndex(function(t) {
                    return "ORDERED" === t.operation;
                });
                if (-1 !== u) {
                    this.handelCartOrdered(r);
                    var n = i[u], d = n.operatorId, h = n.operatorName, c = n.operatorAvatar;
                    this.setData({
                        orderedTip: {
                            customerAvatar: c,
                            customerId: d,
                            customerName: l.default.getRealNickName(h)
                        }
                    }), setTimeout(function() {
                        e.setData({
                            orderedTip: null
                        });
                    }, 4e3), this.stopPoll();
                } else this.updateBubbleQueue(this.groupOperations(i));
            } else this.$root.$logOther("ACCS SOCKET MSG VALIDATE ERROR", {
                cartId: s,
                shopId: a,
                tableId: o,
                _cartId: this.data.cartId,
                _shopId: (0, p.getShopId)(),
                _tableId: (0, p.getTableId)()
            });
        },
        handleCartUpdate: function(t, e) {
            var a = this;
            if (t) return "FAIL_BIZ_CART_NOT_EXIST" === t.errorType && (this.$root.getGlobalComponentById("customShowModal").confirm({
                title: "",
                bodyText: [ "你的购物车已超时过期", "请重新选菜" ],
                confirmText: "我知道了",
                ok: function() {
                    var t = i.default.MINI_PATH;
                    a.$root.$relaunch("/".concat(t.ORDER_FOOD_PATH));
                }
            }), this.stopPoll()), void console.error("轮训失败", t);
            var l = e.cart, r = e.queryTime, s = e.pollFrequency, u = void 0 === s ? 5e3 : s;
            this.triggerEvent("handleUpdateCart", l), this.localData.poll.setOptions && this.localData.poll.setOptions({
                interval: u
            }), l && "ORDERED" === l.status && this.handelCartOrdered(l.orderNo), o.default.put("orderfood.cart.bubble.query.time", r, {});
        },
        handelCartOrdered: function(t) {
            var e = this;
            t && "pages/zccomfirmorder/index" === this.$root.route && (this.stopPoll(), setTimeout(function() {
                e.$root.$redirect("/pages/zcordercheck/index", {
                    orderNo: t
                });
            }, 2500));
        },
        groupOperations: function(t) {
            for (var a = t.length, o = [], i = 0; i < a; i++) if (t[i].operatorName = l.default.getRealNickName(t[i].operatorName), 
            !t[i].used) {
                for (var r = t[i], s = i + 1; s < a; s++) if (!t[s].used) {
                    var u = t[s];
                    if (r.operatorId !== u.operatorId || r.operation !== u.operation || !r.dish || !u.dish || r.dish.dishMd5 !== u.dish.dishMd5) break;
                    r.dish.operateDishQuantity += u.dish.operateDishQuantity, u.used = !0;
                }
                o.push(e(e({}, r), {}, {
                    key: "".concat(r.operatorId, "-").concat(r.operateTime)
                }));
            }
            return o;
        },
        updateBubbleQueue: function(t) {
            t.length && (this.localData.bubbleQueue = this.localData.bubbleQueue.concat(t), 
            this.updateBubbleList());
        },
        updateBubbleList: function() {
            var t = this;
            this.localData.bubbleQueue && this.localData.bubbleQueue.length && (!this.data.bubbleList || this.data.bubbleList.length ? this.localData.pushTimer || (this.localData.pushTimer = setTimeout(function() {
                t.pushBubble();
            }, u.BUBBLE_INTERVAL)) : this.pushBubble());
        },
        pushBubble: function() {
            var t = this.localData.bubbleQueue.shift(), e = this.data.bubbleList;
            this.setData({
                bubbleList: e.concat(t || [])
            }), this.localData.pushTimer = null, this.popBubble(), this.updateBubbleList();
        },
        popBubble: function() {
            var t = this;
            this.data.bubbleList && this.data.bubbleList.length && (this.localData.popTimer || (this.localData.popTimer = setTimeout(function() {
                var e = t.data.bubbleList;
                e.shift(), t.setData({
                    bubbleList: e.slice()
                }), t.localData.popTimer = null, t.popBubble();
            }, u.BUBBLE_INTERVAL + 100)));
        }
    }
});