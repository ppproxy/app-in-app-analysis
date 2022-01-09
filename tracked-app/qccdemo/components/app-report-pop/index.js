(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/app-report-pop/index" ], {
    "371a": function(t, e, a) {
        a.r(e);
        var n = a("8178"), o = a.n(n);
        for (var i in n) "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = o.a;
    },
    "6e525": function(t, e, a) {},
    "6f9e": function(t, e, a) {
        var n = a("6e525");
        a.n(n).a;
    },
    8178: function(t, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(a("325c"));
        var o = {
            name: "app-report-pop",
            data: function() {
                return {
                    type: 0,
                    vipHint: 2,
                    someData: {},
                    btnClick: !1,
                    back: !1,
                    isVIP: !1,
                    VipChanged: !1,
                    goods_sample: "",
                    mail: "",
                    reportFormat: "1"
                };
            },
            props: {
                isVip: {
                    type: Boolean,
                    default: !1
                },
                unique: {
                    type: String,
                    default: ""
                },
                name: {
                    type: String,
                    default: ""
                },
                token: {
                    type: String,
                    default: ""
                },
                phone: {
                    type: String,
                    default: ""
                },
                email: {
                    type: String,
                    default: ""
                }
            },
            mounted: function() {
                this.email && (this.mail = this.email), this.getData();
            },
            methods: {
                changeFormat: function(t) {
                    var e = t.currentTarget.dataset.type;
                    e && (this.reportFormat = e);
                },
                changeMail: function(t) {
                    this.mail = t.detail.value;
                },
                getData: function() {
                    var t = this;
                    this.$request({
                        url: "/v1/order/getGoodsList",
                        data: {
                            unique: this.unique,
                            category: "report"
                        },
                        method: "GET"
                    }).then(function(e) {
                        if (e && 200 === e.status && e.result && e.result.Result && e.result.Result.length) {
                            var a = e.result.Result, n = a.filter(function(t) {
                                return "15" === t.goods_id;
                            });
                            a.length && (n.length && n[0].goods_sample && (n[0].goods_sample = n[0].goods_sample.replace("http://", "https://"), 
                            t.goods_sample = n[0].goods_sample || ""), a[0].cacheMail && (t.mail = a[0].cacheMail));
                        }
                    }).catch(function() {});
                },
                showDetail: function(t) {
                    n.default.openDocument(t.currentTarget.dataset.view_url);
                },
                makePhone: function(t) {
                    n.default.makePhoneCall(t.currentTarget.dataset.value);
                },
                submit: function() {
                    var t = this;
                    if (this.mail) {
                        if (/^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.mail)) {
                            this.$request({
                                url: "/v2/order/addOrder",
                                header: {
                                    "content-type": "application/json"
                                },
                                data: {
                                    balanceId: 3795,
                                    email: this.mail,
                                    goods: JSON.stringify([ this.name ]),
                                    goodsId: 15,
                                    isNewDjgReport: !0,
                                    orderType: 1,
                                    payType: 99,
                                    personId: this.unique,
                                    quantity: 1,
                                    reportFormat: this.reportFormat,
                                    telNo: this.phone,
                                    unique: ""
                                },
                                method: "POST"
                            }).then(function(e) {
                                !e || 200 !== e.status && 201 !== e.status ? e.message && n.default.toast(e.message) : (e.result && (e.result.message && n.default.toast("即将发送至您的邮箱，也可在“我的-报告订单”中进行查看"), 
                                t.hideReport()), setTimeout(function() {
                                    n.default.navigateTo({
                                        url: "/me-subpackages/report-order/index"
                                    });
                                }, 800));
                            }).catch(function() {});
                        } else n.default.toast("请输入有效的邮箱地址");
                    } else n.default.toast("请输入您的邮箱地址");
                },
                hideReport: function() {
                    this.$emit("hideReport");
                }
            }
        };
        e.default = o;
    },
    "85d5": function(t, e, a) {
        a.r(e);
        var n = a("f98c"), o = a("371a");
        for (var i in o) "default" !== i && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(i);
        a("6f9e");
        var r = a("f0c5"), u = Object(r.a)(o.default, n.b, n.c, !1, null, "8c596250", null, !1, n.a, void 0);
        e.default = u.exports;
    },
    f98c: function(t, e, a) {
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/app-report-pop/index-create-component", {
    "components/app-report-pop/index-create-component": function(t, e, a) {
        a("543d").createComponent(a("85d5"));
    }
}, [ [ "components/app-report-pop/index-create-component" ] ] ]);