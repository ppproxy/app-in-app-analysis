var t = require("../../../../@babel/runtime/helpers/interopRequireDefault"), a = t(require("../../../../m/zk/za")), e = t(require("../../../../m/zl/59")), i = require("../../../../l/wa");

(0, a.default)({
    name: "加入购物车-抛物线-红点",
    data: {
        busX: 0,
        busY: 0
    },
    properties: {
        isDinner: {
            type: Boolean,
            value: !1
        }
    },
    observers: {
        isDinner: function(t) {
            if (t) {
                var a = e.default.getSync("systemInfo");
                this.localData.busPos = {
                    x: 40,
                    y: a.windowHeight - 128
                };
            }
        }
    },
    localData: {
        busPos: {
            x: 0,
            y: 0
        }
    },
    ready: function() {
        var t = e.default.getSync("systemInfo");
        this.localData.busPos = {
            x: 30,
            y: t.windowHeight - 100
        };
    },
    methods: {
        bezier: function(t, a) {
            for (var e, i, n, r = [], s = 0; s <= a; s++) {
                for (n = t.slice(0), i = []; e = n.shift(); ) if (n.length) i.push(o([ e, n[0] ], s / a)); else {
                    if (!(i.length > 1)) break;
                    n = i, i = [];
                }
                r.push(i[0]);
            }
            function o(t, a) {
                var e, i, n, r, s, o, u, y;
                return e = t[0], r = (i = t[1]).x - e.x, s = i.y - e.y, n = Math.pow(Math.pow(r, 2) + Math.pow(s, 2), .5), 
                o = s / r, u = Math.atan(o), y = n * a, {
                    x: e.x + y * Math.cos(u),
                    y: e.y + y * Math.sin(u)
                };
            }
            return r.reverse();
        },
        touchOnGoods: function(t) {
            var a = t.x, e = t.y, i = this.localData.busPos, n = {
                x: a,
                y: e
            };
            this.setData({
                busX: a,
                busY: e
            }, {
                instant: !0
            });
            var r = {};
            n.y < i.y ? r.y = n.y - 150 : r.y = i.y - 150, r.x = Math.abs(n.x - i.x) / 2, n.x > i.x ? r.x = (n.x - i.x) / 2 + i.x : r.x = (i.x - n.x) / 2 + n.x, 
            this.startAnimation(this.bezier([ i, r, n ], 8));
        },
        startAnimation: function(t) {
            var a, e = (0, i.getMiniType)(), n = t.length;
            "wx" === e && (a = wx.createAnimation({
                duration: 40,
                timingFunction: "linear"
            })), "my" === e && (a = my.createAnimation({
                duration: 60,
                timingFunction: "linear"
            })), a.opacity(1).step({
                duration: 10
            });
            for (var r = 0; r < n; r++) {
                var s = t[r].x - t[0].x, o = t[r].y - t[0].y;
                a.translate(s, o).step();
            }
            a.opacity(0).step({
                duration: 10
            }), a.translate(0, 0).step({
                duration: 10
            }), this.setData({
                animation: a.export()
            });
        }
    }
});