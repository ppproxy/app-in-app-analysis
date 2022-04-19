var r = {};

function t(t, n) {
    var e = r[t];
    Array.isArray(e) && (r[t] = n ? e.filter(function(r) {
        return r[0] !== n;
    }) : []);
}

exports.on = function(t, n, e) {
    var a = [ n, e ], o = r[t];
    Array.isArray(o) ? o.push(a) : r[t] = [ a ];
}, exports.remove = t, exports.emit = function(t, n) {
    var e = r[t];
    Array.isArray(e) && e.forEach(function(r) {
        var t = r[0];
        r[1].call(t, n);
    });
}, exports.isEventExisted = function(t, n) {
    var e = r[t];
    return Array.isArray(e) && e.length > 0;
}, exports.clear = function(n) {
    Object.keys(r).forEach(function(r) {
        t(r, n);
    });
}, exports.clearAll = function() {
    r = {};
};