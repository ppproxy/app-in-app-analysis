function _propertyDataChange(e) {
            var t = this.getHilightStrArray(e.name, e.key);
            this.setData({
                keyName: e.key,
                searchArray: t
            });
}
function getHilightStrArray(e, t) {
            return e.replace(new RegExp("".concat(t), "g"), "%%".concat(t, "%%")).split("%%");
}
