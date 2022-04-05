function observer(e) {
                var t = this.properties.fixed;
                this.setData({
                    _value: e.toFixed(t)
                });
}
function commanValue(e) {
            var t = this.properties, a = t.step, u = t.min, l = t.max, s = this.data._value, i = "sub" === e ? +s - a : +s + a;
            ("sub" === e && i >= u || "plus" === e && i <= l) && this.triggerEvent("change", {
                value: i
            });
}
function subValue() {
            this.commanValue("sub");
}
function plusValue() {
            this.commanValue("plus");
}
