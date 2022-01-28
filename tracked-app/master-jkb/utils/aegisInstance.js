var e = require("../@babel/runtime/helpers/interopRequireDefault");

require("../@babel/runtime/helpers/Arrayincludes");

var r = e(require("aegis-mp-sdk"));

console.log(r.default, "Aegis");

var i = require("../config/index").env, o = new r.default({
    id: "PROD" === i ? "a37qVxBO5GLKNOd9EW" : "kXD2YxMe7J6zAzeWb1",
    uin: "xxx",
    reportApiSpeed: !0,
    reportAssetSpeed: !0,
    api: {
        retCodeHandler: function(e, r) {
            console.log(e, r);
            try {
                e = JSON.parse(e);
            } catch (e) {}
            return r.includes("/ebus") ? {
                isErr: !(e && e.errcode && "BIS:10200" == e.errcode),
                code: e && e.errcode
            } : {
                isErr: !1
            };
        }
    }
});

module.exports = o;