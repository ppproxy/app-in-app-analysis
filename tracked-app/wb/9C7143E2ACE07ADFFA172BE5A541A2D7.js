exports.exec = function(n, t, e) {
    var o = exports[t];
    "function" == typeof o && o(n, e);
}, exports.wxlogin = function(n, t) {
    n.triggerEvent("wxlogin", {});
}, exports.smslogin = function(n, t) {
    n.triggerEvent("smslogin", {});
}, exports.cancel = function(n, t) {
    n.triggerEvent("cancel", {});
};