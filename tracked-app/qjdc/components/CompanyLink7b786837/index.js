var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 28 ], {
    1076: function(n, o, e) {
        "use strict";
        e.r(o), function(n) {
            n.currentModuleId = "m7b786837", n.currentCtor = Component, n.currentResourceType = "component", 
            n.currentCtorType = "component", n.currentSrcMode = "wx", n.currentInject = {
                moduleId: "m7b786837",
                render: function() {
                    this._c("showCompany", this.showCompany), !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._c("companyInfo.companyName", this.companyInfo.companyName) && 11 == this._c("companyInfo.companyType", this.companyInfo.companyType) && this._c("companyInfo.companyName", this.companyInfo.companyName), 
                    this._r();
                }
            };
            e(415);
            n.currentModuleId;
        }.call(this, e(11));
    },
    415: function(n, o, e) {
        "use strict";
        var t = e(3), c = e.n(t), a = e(1), s = e.n(a), p = e(0), m = e.n(p), i = e(2), r = e(8), y = e(16), h = e(5);
        Object(i.b)({
            data: {
                companyInfo: {},
                showCompany: !1
            },
            computed: s()(s()({}, h.a.mapState([ "ebike" ])), {}, {
                cityExtId() {
                    return this.ebike.readyUnlock.cityExtId || 0;
                }
            }),
            ready() {
                var n = this.cityExtId;
                console.log("当前区域ID", n), console.log("当前区域ebike", this.ebike), n > 0 ? this.fetchGetCompanyInfo() : this.showCompany = !0;
            },
            methods: s()(s()({}, h.a.mapActions([ "getCompanyInfo" ])), {}, {
                fetchGetCompanyInfo() {
                    var n = this;
                    return c()(m.a.mark(function o() {
                        var e, t;
                        return m.a.wrap(function(o) {
                            for (;;) switch (o.prev = o.next) {
                              case 0:
                                return e = n.cityExtId, o.next = 3, y.queryCompanyInfo({
                                    cityExtId: e
                                });

                              case 3:
                                t = o.sent, n.showCompany = !0, t && (n.companyInfo = t), console.log(n.companyInfo);

                              case 7:
                              case "end":
                                return o.stop();
                            }
                        }, o);
                    }))();
                },
                jumpCompany() {
                    this.companyInfo && 11 == this.companyInfo.companyType ? Object(r.v)("/m/passenger.html#/businesslicense", {
                        companyId: this.companyInfo.companyId
                    }) : Object(r.v)("/m/passenger.html#/businesslicense", {
                        companyId: -1
                    });
                }
            })
        });
    }
}, [ [ 1076, 0 ] ] ]);
//# sourceMappingURL=index.js.map