var e = require("./crypto");

e.encryptByAES = function(t, r) {
    if (!r || 16 !== r.length) throw "密钥 key 必须是十六位字符串";
    var n = e.enc.Utf8.parse(t);
    return e.AES.encrypt(n, e.enc.Utf8.parse(r), {
        mode: e.mode.ECB,
        padding: e.pad.Pkcs7
    }).ciphertext.toString().toUpperCase();
}, e.decryptByAES = function(t, r) {
    if (!r || 16 !== r.length) throw "密钥 key 必须是十六位字符串";
    var n = e.enc.Hex.parse(t), c = e.enc.Base64.stringify(n);
    return e.AES.decrypt(c, e.enc.Utf8.parse(r), {
        mode: e.mode.ECB,
        padding: e.pad.Pkcs7
    }).toString(e.enc.Utf8).toString();
}, module.exports = e;