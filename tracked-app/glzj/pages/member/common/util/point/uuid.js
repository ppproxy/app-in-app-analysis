Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.uuid = void 0;

exports.uuid = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(x) {
        var e = 16 * Math.random() | 0;
        return ("x" === x ? e : 3 & e | 8).toString(16);
    });
};