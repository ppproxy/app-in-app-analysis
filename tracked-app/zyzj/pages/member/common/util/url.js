var e = require("../../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Jump2L100MiniProgramme = function(e, r) {
    var t = e.brandSellerId, a = e.storeId, o = e.entryChannel, i = e.templateId, u = "alipays://platformapi/startapp?appId=2021001100611217&query=site%3Deleme%26brandSellerId%3D" + t + "%26storeId%3D" + a + "%26entryChannel%3D" + o + "%26templateId%3D" + i + "&page=pages%2FautoAccountBind%2Findex&url=%2Fpages%2FautoAccountBind%2Findex&startMultApp=YES&supportTourist=false";
    p.customLog.log({
        title: "member-accountBind-Jump2L100MiniProgramme",
        data: u
    }), l.default.put("syncCouponsKey", !0), n({
        url: u,
        context: r
    });
}, exports.openUrl = n;

var r = require("../../../../@babel/runtime/helpers/objectSpread2"), t = require("../../../../@babel/runtime/helpers/toArray"), a = require("../../../../l/wa"), p = require("../../../../pages/member/common/util/common"), l = e(require("../../../../m/zl/5o"));

function o(e) {
    var t = e.appId, a = e.closeCurrentApp, p = void 0 !== a && a, l = e.params, o = e.callback, n = r(r({}, l), {}, {
        startMultApp: "YES",
        appClearTop: !1,
        forceAppMode: "YES"
    });
    my.call("startApp", {
        appId: t,
        param: n,
        closeSelfWindow: !1,
        closeCurrentApp: p
    }, function(e) {
        o && o(e);
    });
}

function n(e) {
    var p = e.url, l = e.params, n = void 0 === l ? {} : l, i = e.closeCurrentApp, u = void 0 !== i && i, s = e.callback;
    if (p) {
        if ("wx" !== (0, a.getMiniType)()) if (p.startsWith("http")) o({
            appId: "20000067",
            params: r(r({}, n), {}, {
                url: p
            }),
            closeCurrentApp: u,
            callback: s
        }); else {
            var c = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", r = {};
                return e.slice(e.indexOf("?") + 1).split("&").forEach(function(e) {
                    var a = e.split("="), p = t(a), l = p[0], o = p.slice(1);
                    if (l) {
                        var n = o.length > 1 ? o.join("=") : o[0];
                        r[decodeURIComponent(l)] = decodeURIComponent(n);
                    }
                }), r;
            }(p), d = c.appId || "20000067";
            delete n.appId, delete c.appId, o({
                appId: d,
                params: r(r({}, c), n),
                closeCurrentApp: u,
                callback: s
            });
        } else p.startsWith("http") ? wx.navigateTo({
            url: "/pages/webview/index?pageUrl=" + encodeURIComponent(p)
        }) : wx.navigateTo({
            url: p
        });
    }
}