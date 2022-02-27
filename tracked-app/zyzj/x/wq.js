var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../@babel/runtime/helpers/classCallCheck"), r = require("../@babel/runtime/helpers/createClass"), n = require("../@babel/runtime/helpers/get"), o = require("../@babel/runtime/helpers/getPrototypeOf"), i = require("../@babel/runtime/helpers/inherits"), a = require("../@babel/runtime/helpers/createSuper");

function l(e, t, r) {
    return r + "." + t + "." + e;
}

var h = new (function(e) {
    i(s, e);
    var h = a(s);
    function s() {
        var e;
        return t(this, s), (e = h.call(this))._events = Object.create(null), e.eventMap = Object.create(null), 
        e;
    }
    return r(s, [ {
        key: "$on",
        value: function(e, t, r) {
            var i = l(r.name, r.$id, e);
            this.eventMap[e] ? this.eventMap[e].push(i) : this.eventMap[e] = [ i ], this._events[i] || n(o(s.prototype), "$on", this).call(this, i, t);
        }
    }, {
        key: "$once",
        value: function(e, t, r) {
            var n = this;
            this.$on(e, function() {
                for (var o = arguments, i = [], a = 0; a < o.length; a++) i[a] = o[a];
                n.$off(e, r), t.apply(this, i);
            }, r);
        }
    }, {
        key: "$off",
        value: function(e, t) {
            var r = l(t.name, t.$id, e), i = this.eventMap[e] || [];
            if (i.length > 0) {
                var a = i.filter(function(e) {
                    return e !== r;
                });
                0 === a.length ? delete this.eventMap[e] : this.eventMap[e] = a;
            }
            n(o(s.prototype), "$off", this).call(this, r), this._events[e] && delete this._events[e];
        }
    }, {
        key: "$emit",
        value: function(e, t) {
            if (!this.eventMap[e]) throw new Error("【".concat(e, "】事件名不存在"));
            var r = this.eventMap[e] || [];
            if (0 === r.length) throw delete this.eventMap[e], new Error("【".concat(e, "】事件名不存在"));
            for (var i = 0; i < r.length; i++) {
                var a = r[i];
                n(o(s.prototype), "$emit", this).call(this, a, t);
            }
        }
    } ]), s;
}(e(require("../m/zk/zy")).default))(), s = {
    $rootmethods: {
        $on: function(e, t, r) {
            if (3 !== arguments.length) throw new Error("$on传参不合法，只能包含三个参数");
            if (!Object.hasOwnProperty.call(r, "$originpage") && !Object.hasOwnProperty.call(r, "$origincomponent")) throw new Error("$on缺少this参数，第三个参数需传入this");
            h.$on(e, t, r);
        },
        $once: function(e, t, r) {
            if (3 !== arguments.length) throw new Error("$once传参不合法，只能包含三个参数");
            if (!Object.hasOwnProperty.call(r, "$originpage") && !Object.hasOwnProperty.call(r, "$origincomponent")) throw new Error("$once缺少this参数，第三个参数需传入this");
            h.$once(e, t, r);
        },
        $off: function(e, t) {
            if (2 !== arguments.length) throw new Error("$off传参不合法，只能包含二个参数");
            if (!Object.hasOwnProperty.call(t, "$originpage") && !Object.hasOwnProperty.call(t, "$origincomponent")) throw new Error("$off缺少this参数，第二个参数需传入this");
            h.$off(e, t);
        },
        $emit: function(e) {
            var t = !0, r = arguments;
            if (r.length > 3) throw new Error("$emit传参不合法，最多不超过3个参数");
            if (r.length > 1) {
                var n = r[r.length - 1];
                Object.hasOwnProperty.call(n, "$originpage") || Object.hasOwnProperty.call(n, "$origincomponent") || (t = !1);
            }
            if (1 === r.length || !t) throw new Error("$emit缺少this参数，请在最后一个参数传入this");
            var o = null, i = null;
            3 === r.length ? (o = r[1], i = r[2]) : i = r[1];
            var a = {
                from: i.route || ""
            };
            o && Object.assign(a, o), h.$emit(e, a);
        },
        getGlobalComponentById: function(e) {
            return this.$root.$page.getComponentById(e);
        }
    }
};

exports.default = s;