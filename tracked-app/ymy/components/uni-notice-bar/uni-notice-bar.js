(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/uni-notice-bar/uni-notice-bar" ], {
    204: function(n, e, t) {
        t.r(e);
        var o = t(205), i = t(207);
        for (var c in i) "default" !== c && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(c);
        t(209);
        var r = t(8), a = Object(r.default)(i.default, o.render, o.staticRenderFns, !1, null, "24a05de4", null, !1, o.components, void 0);
        a.options.__file = "components/uni-notice-bar/uni-notice-bar.vue", e.default = a.exports;
    },
    205: function(n, e, t) {
        t.r(e);
        var o = t(206);
        t.d(e, "render", function() {
            return o.render;
        }), t.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), t.d(e, "recyclableRender", function() {
            return o.recyclableRender;
        }), t.d(e, "components", function() {
            return o.components;
        });
    },
    206: function(n, e, t) {
        t.r(e), t.d(e, "render", function() {
            return i;
        }), t.d(e, "staticRenderFns", function() {
            return r;
        }), t.d(e, "recyclableRender", function() {
            return c;
        }), t.d(e, "components", function() {
            return o;
        });
        var o;
        try {
            o = {
                uniIcons: function() {
                    return t.e("components/uni-icons/uni-icons").then(t.bind(null, 258));
                }
            };
        } catch (n) {
            if (-1 === n.message.indexOf("Cannot find module") || -1 === n.message.indexOf(".vue")) throw n;
            console.error(n.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var i = function() {
            var n = this, e = n.$createElement;
            n._self._c;
        }, c = !1, r = [];
        i._withStripped = !0;
    },
    207: function(n, e, t) {
        t.r(e);
        var o = t(208), i = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = i.a;
    },
    208: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = {
                name: "UniNoticeBar",
                components: {
                    uniIcons: function() {
                        t.e("components/uni-icons/uni-icons").then(function() {
                            return resolve(t(258));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                props: {
                    text: {
                        type: String,
                        default: ""
                    },
                    moreText: {
                        type: String,
                        default: ""
                    },
                    backgroundColor: {
                        type: String,
                        default: "#fffbe8"
                    },
                    speed: {
                        type: Number,
                        default: 100
                    },
                    color: {
                        type: String,
                        default: "#de8c17"
                    },
                    moreColor: {
                        type: String,
                        default: "#999999"
                    },
                    single: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    scrollable: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    showIcon: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    showGetMore: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    showClose: {
                        type: [ Boolean, String ],
                        default: !1
                    }
                },
                data: function() {
                    return {
                        textWidth: 0,
                        boxWidth: 0,
                        wrapWidth: "",
                        webviewHide: !1,
                        elId: "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36)),
                        elIdBox: "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36)),
                        show: !0,
                        animationDuration: "none",
                        animationPlayState: "paused",
                        animationDelay: "0s"
                    };
                },
                mounted: function() {
                    var n = this;
                    this.$nextTick(function() {
                        n.initSize();
                    });
                },
                methods: {
                    initSize: function() {
                        var e = this;
                        if (this.scrollable) {
                            var t = [], o = new Promise(function(t, o) {
                                n.createSelectorQuery().in(e).select("#".concat(e.elId)).boundingClientRect().exec(function(n) {
                                    e.textWidth = n[0].width, t();
                                });
                            }), i = new Promise(function(t, o) {
                                n.createSelectorQuery().in(e).select("#".concat(e.elIdBox)).boundingClientRect().exec(function(n) {
                                    e.boxWidth = n[0].width, t();
                                });
                            });
                            t.push(o), t.push(i), Promise.all(t).then(function() {
                                e.animationDuration = "".concat(e.textWidth / e.speed, "s"), e.animationDelay = "-".concat(e.boxWidth / e.speed, "s"), 
                                setTimeout(function() {
                                    e.animationPlayState = "running";
                                }, 1e3);
                            });
                        }
                    },
                    loopAnimation: function() {},
                    clickMore: function() {
                        this.$emit("getmore");
                    },
                    close: function() {
                        this.show = !1, this.$emit("close");
                    },
                    onClick: function() {
                        this.$emit("click");
                    }
                }
            };
            e.default = o;
        }).call(this, t(1).default);
    },
    209: function(n, e, t) {
        t.r(e);
        var o = t(210), i = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = i.a;
    },
    210: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/uni-notice-bar/uni-notice-bar-create-component", {
    "components/uni-notice-bar/uni-notice-bar-create-component": function(n, e, t) {
        t("1").createComponent(t(204));
    }
}, [ [ "components/uni-notice-bar/uni-notice-bar-create-component" ] ] ]);