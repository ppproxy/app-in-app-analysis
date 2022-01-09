(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/main/guide" ], {
    151: function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e(4);
            t(e(2));
            n(t(e(152)).default);
        }).call(this, e(1).createPage);
    },
    152: function(n, t, e) {
        e.r(t);
        var o = e(153), i = e(155);
        for (var r in i) "default" !== r && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(r);
        var u = e(8), s = Object(u.default)(i.default, o.render, o.staticRenderFns, !1, null, null, null, !1, o.components, void 0);
        s.options.__file = "pages/main/guide.vue", t.default = s.exports;
    },
    153: function(n, t, e) {
        e.r(t);
        var o = e(154);
        e.d(t, "render", function() {
            return o.render;
        }), e.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), e.d(t, "recyclableRender", function() {
            return o.recyclableRender;
        }), e.d(t, "components", function() {
            return o.components;
        });
    },
    154: function(n, t, e) {
        e.r(t), e.d(t, "render", function() {
            return i;
        }), e.d(t, "staticRenderFns", function() {
            return u;
        }), e.d(t, "recyclableRender", function() {
            return r;
        }), e.d(t, "components", function() {
            return o;
        });
        var o;
        try {
            o = {
                uniPopup: function() {
                    return Promise.resolve().then(e.bind(null, 157));
                }
            };
        } catch (n) {
            if (-1 === n.message.indexOf("Cannot find module") || -1 === n.message.indexOf(".vue")) throw n;
            console.error(n.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var i = function() {
            var n = this, t = n.$createElement;
            n._self._c;
        }, r = !1, u = [];
        i._withStripped = !0;
    },
    155: function(n, t, e) {
        e.r(t);
        var o = e(156), i = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = i.a;
    },
    156: function(n, t, e) {
        (function(n) {
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            o(e(157)), o(e(166)), o(e(173));
            var i = o(e(36)), r = o(e(180)), u = o(e(22)), s = {
                components: {
                    wUpload: function() {
                        Promise.all([ e.e("common/vendor"), e.e("components/file-img-upload/w-upload") ]).then(function() {
                            return resolve(e(243));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        UserName: "",
                        Mobile: "",
                        IDCard: "",
                        GuideCode: "",
                        Email: "",
                        imgList: []
                    };
                },
                onLoad: function() {
                    this.get();
                },
                onShow: function() {
                    u.default.checkUserInfo(!0);
                },
                methods: {
                    imgSuccess: function(n) {
                        this.imgList.push(n);
                    },
                    updateImgList: function(n) {
                        this.imgList = [];
                    },
                    openExample: function() {
                        this.$refs.popupExample.open();
                    },
                    get: function() {
                        r.default.get().then(function(t) {
                            if (t && t.success) {
                                var e = t.data;
                                1 != e && 0 != e || n.navigateTo({
                                    url: "success?msg=" + t.message
                                });
                            }
                        });
                    },
                    submit: function() {
                        this.UserName ? this.Mobile ? this.IDCard ? this.GuideCode ? this.Email ? 0 != this.imgList.length ? r.default.create(this.UserName, this.Mobile, this.IDCard, this.GuideCode, this.Email, this.imgList[0].src).then(function(t) {
                            t && t.success ? n.navigateTo({
                                url: "success?msg=提交成功，请耐心等待"
                            }) : i.default.showToast(t.message || "注册失败");
                        }) : i.default.showToast("请上传电子导游证") : i.default.showToast("请输入电子邮箱") : i.default.showToast("请输入导游号码") : i.default.showToast("请输入身份证号") : i.default.showToast("请输入手机号码") : i.default.showToast("请输入真实姓名");
                    },
                    closeExample: function() {
                        this.$refs.popupExample.close();
                    }
                }
            };
            t.default = s;
        }).call(this, e(1).default);
    },
    157: function(n, t, e) {
        e.r(t);
        var o = e(158), i = e(160);
        for (var r in i) "default" !== r && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(r);
        e(164);
        var u = e(8), s = Object(u.default)(i.default, o.render, o.staticRenderFns, !1, null, "7da806a4", null, !1, o.components, void 0);
        s.options.__file = "components/uni-popup/uni-popup.vue", t.default = s.exports;
    },
    158: function(n, t, e) {
        e.r(t);
        var o = e(159);
        e.d(t, "render", function() {
            return o.render;
        }), e.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), e.d(t, "recyclableRender", function() {
            return o.recyclableRender;
        }), e.d(t, "components", function() {
            return o.components;
        });
    },
    159: function(n, t, e) {
        e.r(t), e.d(t, "render", function() {
            return i;
        }), e.d(t, "staticRenderFns", function() {
            return u;
        }), e.d(t, "recyclableRender", function() {
            return r;
        }), e.d(t, "components", function() {
            return o;
        });
        var o;
        try {
            o = {
                uniTransition: function() {
                    return e.e("components/uni-transition/uni-transition").then(e.bind(null, 251));
                }
            };
        } catch (n) {
            if (-1 === n.message.indexOf("Cannot find module") || -1 === n.message.indexOf(".vue")) throw n;
            console.error(n.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var i = function() {
            var n = this, t = n.$createElement;
            n._self._c;
        }, r = !1, u = [];
        i._withStripped = !0;
    },
    160: function(n, t, e) {
        e.r(t);
        var o = e(161), i = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = i.a;
    },
    161: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(e(162)), i = {
            name: "UniPopup",
            components: {
                uniTransition: function() {
                    e.e("components/uni-transition/uni-transition").then(function() {
                        return resolve(e(251));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            props: {
                animation: {
                    type: Boolean,
                    default: !0
                },
                type: {
                    type: String,
                    default: "center"
                },
                maskClick: {
                    type: Boolean,
                    default: !0
                }
            },
            provide: function() {
                return {
                    popup: this
                };
            },
            mixins: [ o.default ],
            watch: {
                type: {
                    handler: function(n) {
                        this[this.config[n]]();
                    },
                    immediate: !0
                },
                maskClick: function(n) {
                    this.mkclick = n;
                }
            },
            data: function() {
                return {
                    duration: 300,
                    ani: [],
                    showPopup: !1,
                    showTrans: !1,
                    maskClass: {
                        position: "fixed",
                        bottom: 0,
                        top: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.4)"
                    },
                    transClass: {
                        position: "fixed",
                        left: 0,
                        right: 0
                    },
                    maskShow: !0,
                    mkclick: !0,
                    popupstyle: "top"
                };
            },
            created: function() {
                this.mkclick = this.maskClick, this.animation ? this.duration = 300 : this.duration = 0;
            },
            methods: {
                clear: function(n) {
                    n.stopPropagation();
                },
                open: function() {
                    var n = this;
                    this.showPopup = !0, this.$nextTick(function() {
                        new Promise(function(t) {
                            clearTimeout(n.timer), n.timer = setTimeout(function() {
                                n.showTrans = !0, n.$nextTick(function() {
                                    t();
                                });
                            }, 50);
                        }).then(function(t) {
                            clearTimeout(n.msgtimer), n.msgtimer = setTimeout(function() {
                                n.customOpen && n.customOpen();
                            }, 100), n.$emit("change", {
                                show: !0,
                                type: n.type
                            });
                        });
                    });
                },
                close: function(n) {
                    var t = this;
                    this.showTrans = !1, this.$nextTick(function() {
                        t.$emit("change", {
                            show: !1,
                            type: t.type
                        }), clearTimeout(t.timer), t.customOpen && t.customClose(), t.timer = setTimeout(function() {
                            t.showPopup = !1;
                        }, 300);
                    });
                },
                onTap: function() {
                    this.mkclick && this.close();
                },
                top: function() {
                    this.popupstyle = "top", this.ani = [ "slide-top" ], this.transClass = {
                        position: "fixed",
                        left: 0,
                        right: 0
                    };
                },
                bottom: function() {
                    this.popupstyle = "bottom", this.ani = [ "slide-bottom" ], this.transClass = {
                        position: "fixed",
                        left: 0,
                        right: 0,
                        bottom: 0
                    };
                },
                center: function() {
                    this.popupstyle = "center", this.ani = [ "zoom-out", "fade" ], this.transClass = {
                        position: "fixed",
                        display: "flex",
                        flexDirection: "column",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0,
                        justifyContent: "center",
                        alignItems: "center"
                    };
                }
            }
        };
        t.default = i;
    },
    164: function(n, t, e) {
        e.r(t);
        var o = e(165), i = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = i.a;
    },
    165: function(n, t, e) {},
    166: function(n, t, e) {
        e.r(t);
        var o = e(167), i = e(169);
        for (var r in i) "default" !== r && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(r);
        e(171);
        var u = e(8), s = Object(u.default)(i.default, o.render, o.staticRenderFns, !1, null, "2b5e1e44", null, !1, o.components, void 0);
        s.options.__file = "components/uni-popup/uni-popup-message.vue", t.default = s.exports;
    },
    167: function(n, t, e) {
        e.r(t);
        var o = e(168);
        e.d(t, "render", function() {
            return o.render;
        }), e.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), e.d(t, "recyclableRender", function() {
            return o.recyclableRender;
        }), e.d(t, "components", function() {
            return o.components;
        });
    },
    168: function(n, t, e) {
        e.r(t), e.d(t, "render", function() {
            return i;
        }), e.d(t, "staticRenderFns", function() {
            return u;
        }), e.d(t, "recyclableRender", function() {
            return r;
        }), e.d(t, "components", function() {
            return o;
        });
        var o, i = function() {
            var n = this, t = n.$createElement;
            n._self._c;
        }, r = !1, u = [];
        i._withStripped = !0;
    },
    169: function(n, t, e) {
        e.r(t);
        var o = e(170), i = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = i.a;
    },
    170: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            name: "UniPopupMessage",
            props: {
                type: {
                    type: String,
                    default: "success"
                },
                message: {
                    type: String,
                    default: ""
                },
                duration: {
                    type: Number,
                    default: 3e3
                }
            },
            inject: [ "popup" ],
            data: function() {
                return {};
            },
            created: function() {
                this.popup.childrenMsg = this;
            },
            methods: {
                open: function() {
                    var n = this;
                    0 !== this.duration && (clearTimeout(this.popuptimer), this.popuptimer = setTimeout(function() {
                        n.popup.close();
                    }, this.duration));
                },
                close: function() {
                    clearTimeout(this.popuptimer);
                }
            }
        };
        t.default = o;
    },
    171: function(n, t, e) {
        e.r(t);
        var o = e(172), i = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = i.a;
    },
    172: function(n, t, e) {},
    173: function(n, t, e) {
        e.r(t);
        var o = e(174), i = e(176);
        for (var r in i) "default" !== r && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(r);
        e(178);
        var u = e(8), s = Object(u.default)(i.default, o.render, o.staticRenderFns, !1, null, "2fab037e", null, !1, o.components, void 0);
        s.options.__file = "components/uni-popup/uni-popup-dialog.vue", t.default = s.exports;
    },
    174: function(n, t, e) {
        e.r(t);
        var o = e(175);
        e.d(t, "render", function() {
            return o.render;
        }), e.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), e.d(t, "recyclableRender", function() {
            return o.recyclableRender;
        }), e.d(t, "components", function() {
            return o.components;
        });
    },
    175: function(n, t, e) {
        e.r(t), e.d(t, "render", function() {
            return i;
        }), e.d(t, "staticRenderFns", function() {
            return u;
        }), e.d(t, "recyclableRender", function() {
            return r;
        }), e.d(t, "components", function() {
            return o;
        });
        var o, i = function() {
            var n = this, t = n.$createElement;
            n._self._c;
        }, r = !1, u = [];
        i._withStripped = !0;
    },
    176: function(n, t, e) {
        e.r(t);
        var o = e(177), i = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = i.a;
    },
    177: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            name: "uniPopupDialog",
            props: {
                value: {
                    type: [ String, Number ],
                    default: ""
                },
                placeholder: {
                    type: [ String, Number ],
                    default: "请输入内容"
                },
                type: {
                    type: String,
                    default: "error"
                },
                mode: {
                    type: String,
                    default: "base"
                },
                title: {
                    type: String,
                    default: "提示"
                },
                content: {
                    type: String,
                    default: ""
                },
                beforeClose: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    dialogType: "error",
                    focus: !1,
                    val: "",
                    number2: 0,
                    timer: null
                };
            },
            inject: [ "popup" ],
            watch: {
                type: function(n) {
                    this.dialogType = n;
                },
                mode: function(n) {
                    "input" === n && (this.dialogType = "info");
                },
                value: function(n) {
                    this.val = n;
                }
            },
            created: function() {
                this.popup.mkclick = !1, "input" === this.mode ? (this.dialogType = "info", this.val = this.value) : this.dialogType = this.type;
            },
            mounted: function() {},
            onload: function() {},
            onshow: function() {},
            methods: {
                initTimer: function(n) {
                    this.number2 = n;
                    var t = this;
                    this.clearTimer(), this.timer = setInterval(function() {
                        t.timeCount();
                    }, 1e3);
                },
                clearTimer: function() {
                    this.timer && clearInterval(this.timer), this.timer = null;
                },
                onOk: function() {
                    var n = this;
                    this.$emit("confirm", function() {
                        n.popup.close(), "input" === n.mode && (n.val = n.value);
                    }, "input" === this.mode ? this.val : "");
                },
                close: function() {
                    var n = this;
                    this.clearTimer(), this.beforeClose ? this.$emit("close", function() {
                        n.popup.close();
                    }) : this.popup.close();
                },
                timeCount: function() {
                    this.number2 > 0 ? this.number2 = this.number2 - 1 : this.clearTimer();
                }
            }
        };
        t.default = o;
    },
    178: function(n, t, e) {
        e.r(t);
        var o = e(179), i = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = i.a;
    },
    179: function(n, t, e) {}
}, [ [ 151, "common/runtime", "common/vendor" ] ] ]);