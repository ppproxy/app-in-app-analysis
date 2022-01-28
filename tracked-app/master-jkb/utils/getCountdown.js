var e = require("../components/gsd-lib/dayjs/index");

module.exports = function(i) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e(), n = e(i), d = n.diff(r);
    if (d < 0) return null;
    var f = n.diff(r, "hour"), s = n.diff(r, "minute") % 60, t = n.diff(r, "second") - 3600 * f - 60 * s;
    return {
        HH: f,
        mm: s,
        ss: t
    };
};