module.exports = function(a) {
    var t = a;
    return a.startsWith("data:image/png;base64,") || (t = "data:image/png;base64," + t), 
    t;
};