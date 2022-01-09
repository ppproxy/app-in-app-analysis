(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/app-download-pop/index" ], {
    "0c47": function(n, o, t) {
        t.d(o, "b", function() {
            return e;
        }), t.d(o, "c", function() {
            return a;
        }), t.d(o, "a", function() {});
        var e = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "16cd": function(n, o, t) {},
    "26d3": function(n, o, t) {
        var e = t("16cd");
        t.n(e).a;
    },
    "4fa4": function(n, o, t) {
        t.r(o);
        var e = t("76f9"), a = t.n(e);
        for (var c in e) "default" !== c && function(n) {
            t.d(o, n, function() {
                return e[n];
            });
        }(c);
        o.default = a.a;
    },
    "76f9": function(n, o, t) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var e = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(t("325c"));
        var a = {
            data: function() {
                return {
                    show: !1
                };
            },
            components: {},
            props: {
                isCopy: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                var n = this;
                this.isCopy && (e.default.setClipboardData("https://apph5.qichacha.com/activities/download"), 
                setTimeout(function() {
                    n.show = !0;
                }, 800));
            },
            methods: {
                handleContact: function() {
                    this.radarCancel();
                },
                cancel: function() {
                    this.radarCancel();
                },
                radarCancel: function() {
                    this.$emit("hideDownloadPop");
                }
            }
        };
        o.default = a;
    },
    "8e35": function(n, o, t) {
        t.r(o);
        var e = t("0c47"), a = t("4fa4");
        for (var c in a) "default" !== c && function(n) {
            t.d(o, n, function() {
                return a[n];
            });
        }(c);
        t("26d3");
        var d = t("f0c5"), i = Object(d.a)(a.default, e.b, e.c, !1, null, "cd4740f0", null, !1, e.a, void 0);
        o.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/app-download-pop/index-create-component", {
    "components/app-download-pop/index-create-component": function(n, o, t) {
        t("543d").createComponent(t("8e35"));
    }
}, [ [ "components/app-download-pop/index-create-component" ] ] ]);