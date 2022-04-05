function observer(e) {
                this.init(this.properties.items || [], e);
}
function observer(e) {
                this.init(e, this.properties.value);
}
function bindtap(e) {
            var t = this.properties, i = t.value, r = t.radioType, a = e.currentTarget.dataset, s = a.changeValue;
            if (a.disabled || !s) return !1;
            if (r) this.triggerEvent("change", {
                value: i === s ? "" : s
            }); else {
                var n = Array.isArray(i) ? i.slice(0) : [ i ], o = n.indexOf(s);
                o > -1 ? n.splice(o, 1) : n.push(s), this.triggerEvent("change", {
                    value: n
                });
            }
}
function init(e, t) {
            var i = this.properties.radioType, r = e.map(function(e) {
                return i ? Object.assign({}, e, {
                    checked: e.value === t
                }) : Object.assign({}, e, {
                    checked: t.indexOf(e.value) > -1
                });
            });
            this.setData({
                __items: r
            });
}
