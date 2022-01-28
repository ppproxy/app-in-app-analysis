var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 46 ], {
    1105: function(t, e, i) {
        "use strict";
        i.r(e), function(t) {
            t.currentModuleId = "m6eb29930", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m6eb29930",
                render: function() {
                    this._c("isShow", this.isShow) && (this._c("src", this.src), !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow)), 
                    this._r();
                }
            };
            i(691);
            t.currentModuleId;
        }.call(this, i(11));
    },
    691: function(t, e, i) {
        "use strict";
        var a = i(6), s = i.n(a), o = i(2), n = i(30), r = "login-all-biz-status", c = i(261);
        Object(o.b)({
            properties: {
                params: Object,
                env: String
            },
            data: {},
            computed: {
                src() {
                    var t;
                    console.log("=====", this.params);
                    var e = "offline" === this.env ? "http://passport-test.didichuxing.com/static/account-delete-prd/index.html" : 1 === Number(this.params.bwh) ? "https://page.hongyibo.com.cn/account-delete-prd/index.html" : "https://page.udache.com/common/account-delete-prd/index.html";
                    return s()(t = "".concat(e, "?")).call(t, Object(c.a)(this.params));
                },
                isShow() {
                    return this.params && (this.params.ticket || this.params.token);
                }
            },
            methods: {
                onMessage(t) {
                    try {
                        if (t.detail && t.detail.data) {
                            var e = Array.isArray(t.detail.data) ? t.detail.data[0] || {} : t.detail.data || {}, i = e.isNeedLogin, a = e.pid;
                            this.updateBizStatus({
                                isNeedLogin: i,
                                pid: a
                            }), n.a.emit("delete.success", {
                                isNeedLogin: i,
                                pid: a
                            });
                        }
                    } catch (t) {
                        n.a.emit("delete.fail", t);
                    }
                },
                updateBizStatus(t) {
                    var e = t.isNeedLogin, i = t.pid, a = o.d.getStorageSync(r) || {}, s = a.bizList, n = void 0 === s ? {} : s;
                    e && o.d.removeStorageSync("login-ticket"), i && i.length && (i.forEach(function(t) {
                        n && n[t] && (n[t].biz_status = 404);
                    }), o.d.setStorageSync(r, a));
                }
            }
        });
    }
}, [ [ 1105, 0 ] ] ]);
//# sourceMappingURL=index.js.map