function observer(e) {
                e && this.setData({
                    _value: e
                });
}
function __type__(e) {
                return e;
}
function observer(e) {
                !1 === e && this.handleChange();
}
function observer(e) {
                var t = this;
                this.updateTab(), e && setTimeout(function() {
                    t.setData({
                        _tabActiveIndex: (e.length - 1).toString()
                    });
                }, 0);
}
function handleClose(e) {
            this.triggerEvent("close", e.detail);
}
function handleTabChange(e) {
            this.setData({
                _tabActiveIndex: e.detail.value.key
            });
}
function handleChange() {
            this.triggerEvent("change", {
                value: this.data._value.map(function(e) {
                    return e.value || e;
                })
            });
}
function handleChoose(e) {
            var t = this, n = e.currentTarget.dataset, a = n.columnIndex, i = n.item, r = this.properties.range, s = this.data._value;
            a < r.length - 1 && this.setData({
                _tabActiveIndex: (a + 1).toString()
            });
            var u = s.slice(0, a);
            u[a] = i, this.setData({
                _value: u
            }, function() {
                t.updateTab(), t.triggerEvent("columnChange", {
                    item: i,
                    index: a
                });
            });
}
