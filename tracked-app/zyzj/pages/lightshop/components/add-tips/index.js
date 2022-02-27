var t = require("../../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../../m/zk/za")), i = require("../../../../l/wa"), a = t(require("../../../../m/zl/5o"));

(0, e.default)({
    name: "add-tips",
    data: {
        duration: 5,
        delay: 2,
        logo: "https://gw.alicdn.com/tfs/TB1LBHOp9R26e4jSZFEXXbwuXXa-72-73.png",
        custom: !1,
        SHOW_TOP: !1
    },
    localData: {
        count: 0
    },
    ready: function() {
        var t = (0, i.getMiniType)(), e = (0, i.getSceneValue)();
        if (!0 === this.contrast()) {
            if (1089 === e) return void this.setData({
                SHOW_TOP: !1
            });
            if ("wx" === t) {
                var a = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null, r = wx.getSystemInfoSync().screenWidth;
                this.setData({
                    custom: !0,
                    navbarHeight: a.bottom,
                    arrowR: r - a.right + 3 * a.width / 4 - 5,
                    bodyR: r - a.right
                }), this.recursive();
            }
        } else this.setData({
            SHOW_TOP: !1
        });
    },
    detached: function() {
        this.startTimer && clearTimeout(this.startTimer), this.duraTimer && clearTimeout(this.duraTimer);
    },
    methods: {
        contrast: function() {
            var t = new Date().getFullYear().toString() + (new Date().getMonth() + 1).toString() + new Date().getDate().toString();
            return !1 === a.default.has("addTipsDate") ? (a.default.put("addTipsDate", t, {
                persistent: !0,
                immediate: !0
            }), !0) : a.default.get("addTipsDate") !== t;
        },
        recursive: function() {
            var t = this;
            this.startTimer = setTimeout(function() {
                t.setData({
                    SHOW_TOP: !0,
                    isCollected: !0
                });
            }, 1e3 * this.data.delay), this.duraTimer = setTimeout(function() {
                t.setData({
                    SHOW_TOP: !1,
                    isCollected: !1
                });
            }, 1e3 * this.data.duration);
        }
    }
});