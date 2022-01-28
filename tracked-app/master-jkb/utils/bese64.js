var e = require("../@babel/runtime/helpers/slicedToArray");

module.exports = function(r, a) {
    var n = /data:image\/(\w+);base64,(.*)/.exec(r) || [], o = e(n, 3), t = o[1], c = o[2];
    if (!t) return new Error("ERROR_BASE64SRC_PARSE");
    var i = new Date().getTime();
    console.log(i);
    var s = "tmp_base64src" + i, l = "".concat(wx.env.USER_DATA_PATH, "/").concat(s, ".").concat(t), u = wx.base64ToArrayBuffer(c), R = wx.getFileSystemManager();
    console.log(l, 100), console.log(a), R.writeFile({
        filePath: l,
        data: u,
        encoding: "binary",
        success: function() {
            a(l);
        },
        fail: function() {
            return new Error("ERROR_BASE64SRC_WRITE");
        }
    });
};