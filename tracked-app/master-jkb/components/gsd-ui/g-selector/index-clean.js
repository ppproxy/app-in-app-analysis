function bindChange(e) {
            var t = this, a = e.detail.value.map(function(e, a) {
                return t.data.dataList[a][e];
            });
            this.setData({
                selectedVal: a
            });
}
function handleClose() {
            this.setData({
                visible: !1
            });
}
function confirm() {
            var e = this.data.selectedVal;
            this.triggerEvent("select", {
                value: e.length > 0 ? e : this.defaultSelectedVal()
            }), this.handleClose();
}
function defaultSelectedVal() {
            var e = this.properties.defaultValue;
            return this.data.dataList.map(function(t, a) {
                return t[e[a] || 0];
            });
}
