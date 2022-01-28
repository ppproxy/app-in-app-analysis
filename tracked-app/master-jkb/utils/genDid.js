module.exports = function() {
    return "xxxxxxxxxxxxxxxx".replace(/[xy]/g, function(x) {
        var r = 16 * Math.random() | 0;
        return ("x" === x ? r : 3 & r | 8).toString(16);
    });
};