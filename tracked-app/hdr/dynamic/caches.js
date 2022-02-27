Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.cache = function(a, c, s, x) {
    var u = new Map();
    return t.set(a, s), e.set(a, c), n.set(a, u), r.set(a, x), c.forEach(function e(n) {
        var t = o();
        u.set(t, n), n.pid = a, n.nid = t, n.nodes && n.nodes.length > 0 && n.nodes.forEach(e);
    }), a;
}, exports.clean = function(o) {
    [ e, t, n, r ].forEach(function(e) {
        return e.delete(o);
    });
}, exports.get = function(o) {
    return {
        dom: e.get(o),
        handles: t.get(o),
        instance: r.get(o),
        nodes: n.get(o)
    };
}, exports.uuid = o;

var e = new Map(), n = new Map(), t = new Map(), r = new Map();

function o() {
    return "".concat("xxxx-xxxx-xxxx".replace(/x/g, function() {
        return (16 * Math.random() | 0).toString(16);
    }));
}