var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../zk/zp")), r = require("../../l/wa");

function n(e, t) {
    return t && t.persistent && t.notIsolate ? e : e + "_" + (0, r.getVersion)().split(".").join("");
}

var u = {
    has: function(e, u) {
        return t.default.has(n(e, u), u, (0, r.getVersion)());
    },
    put: function(e, u, o) {
        return t.default.put(n(e, o), u, o, (0, r.getVersion)());
    },
    get: function(e, u) {
        return t.default.get(n(e, u), u, (0, r.getVersion)());
    },
    remove: function(e, u) {
        return t.default.remove(n(e, u), u, (0, r.getVersion)());
    },
    getAndRemove: function(e, u) {
        return t.default.getAndRemove(n(e, u), u, (0, r.getVersion)());
    },
    removeAll: function(e) {
        return t.default.removeAll(e, (0, r.getVersion)());
    }
};

exports.default = u;