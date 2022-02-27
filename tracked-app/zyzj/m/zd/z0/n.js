var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "AUTO_EXP_DURATION", {
    enumerable: !0,
    get: function() {
        return r.AUTO_EXP_DURATION;
    }
}), Object.defineProperty(exports, "EXP_ELEMENT", {
    enumerable: !0,
    get: function() {
        return r.EXP_ELEMENT;
    }
}), Object.defineProperty(exports, "GLOBAL_EXP_MAP", {
    enumerable: !0,
    get: function() {
        return r.GLOBAL_EXP_MAP;
    }
}), Object.defineProperty(exports, "OBSERVERS", {
    enumerable: !0,
    get: function() {
        return r.OBSERVERS;
    }
}), Object.defineProperty(exports, "WhiteScreenListener", {
    enumerable: !0,
    get: function() {
        return o.default;
    }
}), exports.handleInitExp = function() {
    var e = this;
    if (!this.logProps) return;
    var t = this.logProps[r.EXP_ELEMENT] || [];
    if (0 === t.length) return;
    var o = [], i = this;
    Object.prototype.hasOwnProperty.call(this, "$origincomponent") && (i = this.$origincomponent);
    Object.prototype.hasOwnProperty.call(this, "$originpage") && (i = this.$originpage);
    t.forEach(function(t) {
        var u = new n.default({
            autoExpDuration: e.logProps[r.AUTO_EXP_DURATION] || 300,
            selector: t,
            observeAll: !0,
            context: i,
            onEach: function(e) {
                return e.dataset || {};
            }
        });
        u.connect(), o.push(u);
    }), this.logProps[r.OBSERVERS] = o;
}, exports.handleReconnectExp = function() {
    var e = this.logProps[r.OBSERVERS] || [];
    if (0 === e.length) return;
    e.forEach(function(e) {
        e && e.reconnect();
    });
}, exports.handleRemoveExp = function() {
    if (!this.logProps) return;
    var e = this.logProps[r.OBSERVERS] || [];
    if (0 === e.length) return;
    e.forEach(function(e) {
        e && (e.setReset(!0), e.disconnect());
    }), this.logProps[r.OBSERVERS] = [];
}, Object.defineProperty(exports, "handleUploadExp", {
    enumerable: !0,
    get: function() {
        return n.handleUploadExp;
    }
});

var r = require("./zt"), n = function(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" !== t(e) && "function" != typeof e) return {
        default: e
    };
    var n = i(r);
    if (n && n.has(e)) return n.get(e);
    var o = {}, u = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var p in e) if ("default" !== p && Object.prototype.hasOwnProperty.call(e, p)) {
        var a = u ? Object.getOwnPropertyDescriptor(e, p) : null;
        a && (a.get || a.set) ? Object.defineProperty(o, p, a) : o[p] = e[p];
    }
    o.default = e, n && n.set(e, o);
    return o;
}(require("./zk")), o = e(require("./zq"));

function i(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), r = new WeakMap();
    return (i = function(e) {
        return e ? r : t;
    })(e);
}