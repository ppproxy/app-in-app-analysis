function e() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = arguments[1];
    e = r({}, t, e);
    var n = getCurrentPages(), s = n[n.length - 1];
    o && (s = o);
    var a = s.selectComponent(e.selector);
    return delete e.selector, a;
}

var r = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
}, t = {
    selector: "#poster"
};

e.create = function() {
    var r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments[1];
    if (e({}, t)) return e({}, t).onCreate(r);
    console.error('请设置组件的id="poster"!!!');
}, exports.Poster = e;