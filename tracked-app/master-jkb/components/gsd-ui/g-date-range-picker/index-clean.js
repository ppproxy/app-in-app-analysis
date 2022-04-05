function observer(e, t) {
                this.setDateData();
}
function ready() {
        this.setDateData();
}
function setDateData() {
            var a = this.properties, r = a.value, n = a.format, i = e(r, 2), s = i[0], o = i[1], l = s || t().format("YYYY-MM-DD"), u = o || t().format("YYYY-MM-DD"), D = s ? t(new Date(s)).format(n) : "", d = o ? t(new Date(o)).format(n) : "";
            this.setData({
                startValue: l,
                endValue: u,
                startDateStr: D,
                endDateStr: d
            });
}
function handleStartChange(e) {
            var a = this.properties, r = a.value, n = a.format, i = void 0 === n ? "YYYY年MM月DD日" : n, s = e.detail.value, o = t(new Date(s)).format(i), l = r[1] ? t(new Date(r[1])).format(i) : "";
            r[0] = s, this.triggerEvent("change", {
                value: [ s, r[1] ],
                format: [ o, l ]
            });
}
function handleEndChange(e) {
            var a = this.properties, r = a.value, n = a.format, i = void 0 === n ? "YYYY年MM月DD日" : n, s = e.detail.value, o = r[0] ? t(new Date(r[0])).format(i) : "", l = t(new Date(s)).format(i);
            r[1] = s, this.triggerEvent("change", {
                value: [ r[0], s ],
                format: [ o, l ]
            });
}
