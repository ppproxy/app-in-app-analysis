function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var n = function() {
    function e(e, n) {
        for (var o = 0; o < n.length; o++) {
            var t = n[o];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
            Object.defineProperty(e, t.key, t);
        }
    }
    return function(n, o, t) {
        return o && e(n.prototype, o), t && e(n, t), n;
    };
}(), o = require("./wllConfigMock");

module.exports = function(t) {
    console.log("app", t);
    var i = t.Anim, r = (t.request, t.config), l = t.wxp, u = t.storage;
    return (0, i.wedux.observe)(new (function() {
        function i() {
            e(this, i), this.initConfigInfo();
        }
        return n(i, [ {
            key: "initConfigInfo",
            value: function() {
                this.wllConfig = {};
            }
        }, {
            key: "requestConfig",
            value: function() {
                var e = this;
                return l.request({
                    url: r.cdnDomain + r[r.env].wllConfigPath + "?t=" + Date.now(),
                    method: "GET"
                }).then(function(n) {
                    return e.wllConfig = n.data, "dev" === r.env && (e.wllConfig = o), t.buyType = e.wllConfig.buy_type, 
                    u.setStorageSync("__wll_config__", e.wllConfig, r.wllConfigCacheTime), e.wllConfig;
                });
            }
        }, {
            key: "fetchWllConfig",
            value: function() {
                var e = u.getStorageSync("__wll_config__"), n = Promise.resolve(e);
                return e ? (this.wllConfig = e, t.buyType = e.buy_type) : n = this.requestConfig(), 
                n;
            }
        }, {
            key: "weGetDecodeURIComponent",
            value: function(e) {
                decodeURIComponent(e.scene);
                wx.request({
                    url: "",
                    data: {},
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(e) {
                        console.log(e.data);
                    }
                });
            }
        } ]), i;
    }())(), "config");
};