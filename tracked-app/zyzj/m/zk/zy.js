Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = function() {
    function t() {
        this._events = Object.create(null);
    }
    return t.prototype.$on = function(t, e) {
        return this._events[t] || (this._events[t] = []), this._events[t].push(e), this;
    }, t.prototype.$once = function(t, e) {
        var r = this;
        return this.$on(t, function n() {
            for (var i = [], s = 0; s < arguments.length; s++) i[s] = arguments[s];
            r.$off(t, n), e.apply(r, i);
        }), this;
    }, t.prototype.$off = function(t, e) {
        if (0 === arguments.length) return this._events = Object.create(null), this;
        var r = this._events[t];
        if (!r) return this;
        if (1 === arguments.length) return delete this._events[t], this;
        for (var n = r.length - 1; n >= 0; n--) if (r[n] === e) {
            r.splice(n, 1);
            break;
        }
        return this;
    }, t.prototype.$emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1), r = this._events[t];
        if (r) for (var n = 0; n < r.length; n++) {
            var i = r[n];
            i.apply(this, e);
        }
        return this;
    }, t;
}();

exports.default = t;