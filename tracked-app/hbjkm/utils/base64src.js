Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = function() {
    function r(r, e) {
        var t = [], n = !0, a = !1, i = void 0;
        try {
            for (var o, u = r[Symbol.iterator](); !(n = (o = u.next()).done) && (t.push(o.value), 
            !e || t.length !== e); n = !0) ;
        } catch (r) {
            a = !0, i = r;
        } finally {
            try {
                !n && u.return && u.return();
            } finally {
                if (a) throw i;
            }
        }
        return t;
    }
    return function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return r(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = wx.getFileSystemManager(), t = "tmp_base64src";

exports.base64src = function(n, a) {
    var i = /data:image\/(\w+);base64,(.*)/.exec(n) || [], o = r(i, 3), u = o[1], c = o[2];
    if (!u) return new Error("ERROR_BASE64SRC_PARSE");
    var s = wx.env.USER_DATA_PATH + "/" + t + "." + u, f = wx.base64ToArrayBuffer(c);
    e.writeFile({
        filePath: s,
        data: f,
        encoding: "binary",
        success: function() {
            a(s);
        },
        fail: function() {
            return new Error("ERROR_BASE64SRC_WRITE");
        }
    });
};