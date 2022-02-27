var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../../../@babel/runtime/helpers/typeof"), l = e(require("./z1")), r = [ "ec", "ea", "el", "et" ];

var n, a, o, i = (n = window, a = l.default, o = function(e) {
    var t = e.ec, l = e.ea, r = e.el, n = e.et, o = void 0 === n ? "CLK" : n, i = e.xpath;
    delete e.ec, delete e.ea, delete e.el, delete e.et, delete e.xpath, e.p1 = t, e.p2 = l, 
    e.p3 = r, e.p4 = o, e.p5 = i;
    try {
        a.log("event", e);
    } catch (e) {}
}, function() {
    var e = arguments, l = {};
    if (0 !== e.length) {
        for (var a = 0; a < e.length; a++) {
            var i, u, p = e[a];
            if (0 !== a && "object" === t(p) && a !== e.length - 1) return void (null == n || null === (i = n.console) || void 0 === i || null === (u = i.warn) || void 0 === u || u.call(i, "[AES tracker-plugin-event]", "Only the last argument can be object type"));
            if ("string" == typeof p || "number" == typeof p) l[r[a]] = p; else if ("object" === t(p) && a === e.length - 1) for (var v in p) p.hasOwnProperty(v) && (l[v] = p[v]);
        }
        o(l);
    } else {
        var c, d;
        null === (c = n.console) || void 0 === c || null === (d = c.warn) || void 0 === d || d.call(c, "[AES tracker-plugin-event]", "At lease one augument");
    }
});

exports.default = i;