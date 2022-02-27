var e = require("../@babel/runtime/helpers/interopRequireDefault"), t = require("../@babel/runtime/helpers/typeof"), a = e(require("./zl/5o")), r = e(require("./zv")), n = require("./zk/zh"), i = require("../l/wa");

Object.keys(r.default.cache).forEach(function(e) {
    a.default.put(e, r.default.cache[e], {
        persistent: !0
    });
}), "object" === ("undefined" == typeof wx ? "undefined" : t(wx)) && "undefined" == typeof my && (0, 
i.setGlobalMiniType)("wx"), "object" === ("undefined" == typeof my ? "undefined" : t(my)) && "undefined" == typeof wx && (0, 
i.setGlobalMiniType)("my");

var o = (0, i.getMiniType)();

if ("wx" === o) {
    var l = wx.getExtConfigSync();
    if (l && Object.keys(l).length > 0) {
        var u = l.extAppid;
        a.default.put("APPID", u, {
            persistent: !0
        }), (0, i.setGlobalExtInfo)(l);
    }
}

if ("my" === o) {
    var c = my.getAppIdSync();
    c && c.appId && a.default.put("APPID", c.appId, {
        persistent: !0
    });
}

if ((r.default.$mixins && r.default.$mixins.length > 0 && r.default.$mixins.forEach(function(e) {
    try {
        var t = Array.isArray(e) ? d(e[0], e[1]) : d(e);
        n.PageFactory.addDefaultMixin(t);
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        console.error('Fail to load mixin "'.concat(e, '":'), t.message);
    }
}), r.default.$plugins) && Object.keys(r.default.$plugins).length > 0) {
    var f = r.default.$plugins.page, p = r.default.$plugins.component, s = r.default.$plugins.app;
    f && f.length > 0 && f.forEach(function(e) {
        try {
            var t = Array.isArray(e) ? d(e[0], e[1]) : d(e);
            n.PageFactory.addDefaultPlugins(t);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.error('Fail to load page plugin "'.concat(e, '":'), t.message);
        }
    }), p && p.length > 0 && p.forEach(function(e) {
        try {
            var t = Array.isArray(e) ? d(e[0], e[1]) : d(e);
            n.ComponentFactory.addDefaultPlugins(t);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.error('Fail to load component plugin "'.concat(e, '":'), t.message);
        }
    }), s && s.length > 0 && s.forEach(function(e) {
        try {
            var t = Array.isArray(e) ? d(e[0], e[1]) : d(e);
            n.AppFactory.addDefaultPlugins(t);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.error('Fail to load app plugin "'.concat(e, '":'), t.message);
        }
    });
}

function d(e, t) {
    if ("string" == typeof e) throw Error("请不要使用动态require");
    return t ? e[t] : function(e) {
        return e && e.__esModule ? e.default : e;
    }(e);
}