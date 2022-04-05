function observer(e) {
                var t = this;
                this.setData({
                    _value: e
                }, function() {
                    t.backToActive();
                });
}
function observer() {
                this.initDate();
}
function observer() {
                this.initDate();
}
function observer(e) {
                var t = this;
                this.setData({
                    _mode: e
                }, function() {
                    t.initDate();
                });
}
function observer() {
                this.initDate();
}
function __type__(e) {
                return e;
}
function __type__(e) {
                return e;
}
function __type__(e) {
                return e;
}
function initDate() {
            var e = this.properties, t = e.start, n = e.end, r = this.data._mode;
            if (!t || !n) return console.warn("日历组件此次 initDate 没有 start / end 属性"), !1;
            "multiple" === r ? this.initMonth() : this.initWeek(), this.backToActive();
}
function backToActive() {
            var e = this.data, t = e._value, n = e._week, r = e._month, a = 0;
            a = "single" === e._mode ? n.findIndex(function(e) {
                return e.some(function(e) {
                    return !e.disabled && e.date === t;
                });
            }) : r.findIndex(function(e) {
                return e.date.some(function(e) {
                    return !e.disabled && e.date === t;
                });
            }), this.setData({
                _current: a >= 0 ? a : 0
            });
}
function initWeek() {
            var t = this, n = this.properties, r = n.start, a = n.end, i = e(a).diff(e(r), "week") + 1, o = Array.from({
                length: i
            }).map(function(n, i) {
                var o = e(r).add(i, "week").startOf("week"), d = t.getDateByWeek(o), s = t.transferWeekDateOptions(d, e(r), e(a)), u = t.mergeIncludesAndExcludes(s, "includes"), c = t.mergeIncludesAndExcludes(u, "excludes");
                return t.mergeDateOptions(c);
            });
            this.setData({
                _week: o
            });
}
function initMonth() {
            var t = this, n = this.properties, r = n.start, a = n.end, i = e(a).diff(e(r), "month") + 1, o = Array.from({
                length: i
            }).map(function(n, i) {
                var o = e(r).add(i, "month").startOf("month"), d = o.clone().format("YYYY年 MM月"), s = t.getDateByMonth(o), u = t.padMonthDate(s), c = t.transferMonthDateOptions(u, o, e(r), e(a)), f = t.mergeIncludesAndExcludes(c, "includes"), l = t.mergeIncludesAndExcludes(f, "excludes");
                return {
                    month: d,
                    date: t.mergeDateOptions(l)
                };
            });
            this.setData({
                _month: o
            });
}
function getDateByMonth(e) {
            var t = e.startOf("month"), n = e.endOf("month");
            return Array.from({
                length: n.diff(t, "day") + 1
            }).map(function(e, n) {
                return t.add(n, "day");
            });
}
function getDateByWeek(e) {
            return Array.from({
                length: 7
            }).map(function(t, n) {
                return e.add(n, "day");
            });
}
function padMonthDate(e) {
            var t = e[0], n = e[e.length - 1], r = t.startOf("week");
            e = Array.from({
                length: t.diff(r, "day")
            }).map(function(e, n) {
                return t.clone().subtract(n + 1, "day");
            }).reverse().concat(e);
            var a = n.endOf("week");
            return e = e.concat(Array.from({
                length: a.diff(n, "day")
            }).map(function(e, t) {
                return n.clone().add(t + 1, "day");
            }));
}
function transferMonthDateOptions(e, n, r, a) {
            return e.map(function(e) {
                return {
                    date: e.format("YYYY-MM-DD"),
                    day: e.format("DD"),
                    month: e.format("MM"),
                    weekday: t[Number(e.format("d"))],
                    disabled: !n.isSame(e.startOf("month")) || e.isBefore(r) || e.isAfter(a)
                };
            });
}
function transferWeekDateOptions(e, n, r) {
            return e.map(function(e) {
                return {
                    date: e.format("YYYY-MM-DD"),
                    day: e.format("DD"),
                    month: e.format("MM"),
                    weekday: t[Number(e.format("d"))],
                    disabled: e.isBefore(n) || e.isAfter(r)
                };
            });
}
function mergeDateOptions(e) {
            var t = this.properties.options;
            return e.map(function(e) {
                return t.some(function(t) {
                    if (t.date === e.date) return e = Object.assign({}, e, t), !0;
                }), e;
            });
}
function mergeIncludesAndExcludes(e, t) {
            var n = this.properties[t];
            return n.length ? e.map(function(e) {
                var r = n.includes(e.date) || n.includes(e.weekday) || n.includes(e.day);
                return r || "includes" !== t || (e.disabled = !0), r && "excludes" === t && (e.disabled = !0), 
                e;
            }) : e;
}
function handleMonthSwiper(e) {
            console.log("current: ", e.detail.current), this.setData({
                _current: e.detail.current
            });
}
function handleTapDate(e) {
            var t = e.currentTarget.dataset.option, n = this.data._value;
            if (!t.disabled && t.date !== n) {
                var r = t.date;
                this.triggerEvent("change", {
                    value: r
                });
            }
}
function handleToggleMode() {
            var e = this, t = "single" === this.data._mode ? "multiple" : "single";
            this.triggerEvent("modeChange", {
                mode: t
            }), this.setData({
                _mode: t
            }, function() {
                e.initDate();
            });
}
