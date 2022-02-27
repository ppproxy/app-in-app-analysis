function e(e, t) {
    return "".concat(e, "-").concat(t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = {
    methods: {
        generateComponentId: function(t) {
            var n = {};
            return t.map(function(t) {
                for (var r = t.componentCode.split("-"), i = [], o = 0; o < r.length; o++) {
                    var s = r[o];
                    0 === o || (s = s.substring(0, 1).toUpperCase() + s.substring(1, s.length)), i.push(s);
                }
                if (t.id = e(i.join(""), 0), n[t.id]) {
                    var d = t.id.split("-"), u = n[t.id].length, a = e(d[0], u);
                    n[t.id].push(a), t.id = a;
                } else n[t.id] = [ t.id ];
                return t;
            });
        }
    }
};

exports.default = t;