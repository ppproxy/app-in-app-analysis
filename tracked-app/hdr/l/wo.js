var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createModel = function(e, t, r) {
    if (!(e && t && r)) throw new Error("创建模型必须传入instance, type, key");
    if ("my" === o) {
        var n = (getApp() || {}).globalData, i = void 0 === n ? {} : n;
        return i.modelFactory || (i.modelFactory = a), i.modelFactory.setModel(e, t, r);
    }
    return a.setModel(e, t, r);
}, exports.default = void 0, exports.destoryModel = function(e, t) {
    if ("my" === o) {
        var r = ((getApp() || {}).globalData || {}).modelFactory;
        if (!r) return void console.warn("模型".concat(e, "-").concat(t, "不存在"));
        r.destoryModel(e, t);
    } else a.destoryModel(e, t);
}, exports.getModel = function(e, t) {
    if ("my" === o) {
        var r = ((getApp() || {}).globalData || {}).modelFactory;
        return r ? r.getModel(e, t) : void console.warn("模型".concat(e, "-").concat(t, "不存在"));
    }
    return a.getModel(e, t);
};

var t = require("../@babel/runtime/helpers/createClass"), r = require("../@babel/runtime/helpers/classCallCheck"), n = e(require("../m/zk/zy")), o = (0, 
require("./wa").getMiniType)(), i = t(function e(t) {
    r(this, e), this.root = t, this._event = new n.default();
});

exports.default = i;

var a = {
    instance: {},
    getModel: function(e, t) {
        if (!e || !t) throw new Error("获取模型请传入正确的type及key");
        return this.instance[e] && this.instance[e][t] ? this.instance[e][t] : (console.warn("模型".concat(e, "-").concat(t, "不存在")), 
        null);
    },
    setModel: function(e, t, r) {
        if (!(e && t && r)) throw new Error("获取模型请传入正确的type及key");
        return this.instance[t] || (this.instance[t] = {}), this.instance[t][r] || (this.instance[t][r] = e), 
        this.instance[t][r];
    },
    destoryModel: function(e, t) {
        if (e && t) {
            var r = this.instance[e][t];
            r && (r.unBindAll && r.unBindAll(), delete this.instance[e][t]);
        } else console.error("销毁模型请传入正确的type及key");
    }
};