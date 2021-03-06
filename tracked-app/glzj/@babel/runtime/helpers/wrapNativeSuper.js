var getPrototypeOf = require("./getPrototypeOf"), setPrototypeOf = require("./setPrototypeOf"), isNativeFunction = require("./isNativeFunction"), construct = require("./construct");

function _wrapNativeSuper(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return module.exports = _wrapNativeSuper = function(t) {
        if (null === t || !isNativeFunction(t)) return t;
        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, r);
        }
        function r() {
            return construct(t, arguments, getPrototypeOf(this).constructor);
        }
        return r.prototype = Object.create(t.prototype, {
            constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), setPrototypeOf(r, t);
    }, _wrapNativeSuper(t);
}

module.exports = _wrapNativeSuper;