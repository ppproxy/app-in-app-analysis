var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../../m/zk/za")), r = require("../../../l/wh"), i = require("../../../v/ci/n"), u = require("../zf/n");

function o(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e);
}

var s = function(e) {
    return Array(20).fill().map(function(t, a) {
        var n = o(50, 70), r = o(1e3, 5e3), i = r + 1e3, u = o(0, 90), s = e[o(0, e.length - 1)], l = "";
        l = u > 80 ? "left" + o(2, 3) : u < 20 ? "right" + o(2, 3) : [ "left", "right" ][o(0, 1)] + o(1, 3);
        return {
            styles: [ {
                name: "left",
                value: u + "vw"
            }, {
                name: "transition-timing-function",
                value: [ "linear", "ease", "ease-in", "ease-out", "ease-in-out" ][o(0, 4)]
            }, {
                name: "animation-delay",
                value: r + "ms"
            }, {
                name: "animation-duration",
                value: i + "ms"
            }, {
                name: "animation-name",
                value: "special-effect-fall, special-effect-swing-" + l
            }, {
                name: "width",
                value: (s.width || n) + "rpx"
            }, {
                name: "height",
                value: (s.height || n) + "rpx"
            } ].map(function(e) {
                return e.name + ":" + e.value;
            }).join(";"),
            imageUrl: s.url || s
        };
    });
};

(0, n.default)({
    name: "special-effect",
    data: {
        items: [],
        showEffect: !1
    },
    localData: {
        options: Object.create(null)
    },
    ready: function() {
        var e = this;
        return a(t.default.mark(function a() {
            var n, o, l, f, c, m, h, d, p;
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, (0, u.queryGlobalConfigWithAuth)();

                  case 2:
                    if (n = t.sent, o = n.data.config, l = o.find(function(e) {
                        return "specialEffect" === e.key;
                    })) {
                        t.next = 7;
                        break;
                    }
                    return t.abrupt("return");

                  case 7:
                    f = l.value, (c = JSON.parse(f)) && c.show && (m = JSON.parse(c.sceneConfig), h = m.imgs, 
                    d = s(h), e.setData({
                        items: d
                    }), p = (0, r.getLoginCustomer)(), (0, i.queryFatigue)({
                        customerId: p,
                        bizCode: "LIGHTSTORE_AD_POPUP",
                        uniqueId: "special-effect",
                        timeoutSeconds: 86400,
                        setFatigue: !0
                    }).then(function(t) {
                        t && t.data && t.data.shouldDo && e.setData({
                            showEffect: !0
                        });
                    }));

                  case 10:
                  case "end":
                    return t.stop();
                }
            }, a);
        }))();
    },
    detached: function() {
        this.setData({
            showEffect: !1
        });
    },
    methods: {
        init: function(e) {
            return this.localData.options = e, this;
        },
        render: function() {}
    }
});