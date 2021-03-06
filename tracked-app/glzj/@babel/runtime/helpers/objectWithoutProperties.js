var objectWithoutPropertiesLoose = require("./objectWithoutPropertiesLoose");

function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var p = Object.getOwnPropertySymbols(e);
        for (r = 0; r < p.length; r++) o = p[r], t.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}

module.exports = _objectWithoutProperties;