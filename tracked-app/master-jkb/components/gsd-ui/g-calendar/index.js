require("../../../@babel/runtime/helpers/Arrayincludes"), Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../gsd-lib/dayjs/index"), t = [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ];

Component({
    properties: {
        value: {
            type: String,
            value: "",
            observer: function(e) {
                var t = this;
                this.setData({
                    _value: e
                }, function() {
                    t.backToActive();
                });
            }
        },
        start: {
            type: String,
            value: e().format("YYYY-MM-DD"),
            observer: function() {
                this.initDate();
            }
        },
        end: {
            type: String,
            value: e().add(1, "year").format("YYYY-MM-DD"),
            observer: function() {
                this.initDate();
            }
        },
        mode: {
            type: String,
            value: "multiple",
            observer: function(e) {
                var t = this;
                this.setData({
                    _mode: e
                }, function() {
                    t.initDate();
                });
            }
        },
        options: {
            type: Array,
            value: [],
            observer: function() {
                this.initDate();
            },
            __type__: function(e) {
                return e;
            }
        },
        includes: {
            type: Array,
            value: [],
            __type__: function(e) {
                return e;
            }
        },
        excludes: {
            type: Array,
            value: [],
            __type__: function(e) {
                return e;
            }
        }
    },
    data: {
        _mode: "multiple",
        _value: "",
        _duration: 500,
        _current: 0,
        _weekName: t,
        _month: [],
        _week: []
    },
    methods: {
        initDate: function() {
            var e = this.properties, t = e.start, n = e.end, r = this.data._mode;
            if (!t || !n) return console.warn("日历组件此次 initDate 没有 start / end 属性"), !1;
            "multiple" === r ? this.initMonth() : this.initWeek(), this.backToActive();
        },
        backToActive: function() {
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
        },
        initWeek: function() {
            var t = this, n = this.properties, r = n.start, a = n.end, i = e(a).diff(e(r), "week") + 1, o = Array.from({
                length: i
            }).map(function(n, i) {
                var o = e(r).add(i, "week").startOf("week"), d = t.getDateByWeek(o), s = t.transferWeekDateOptions(d, e(r), e(a)), u = t.mergeIncludesAndExcludes(s, "includes"), c = t.mergeIncludesAndExcludes(u, "excludes");
                return t.mergeDateOptions(c);
            });
            this.setData({
                _week: o
            });
        },
        initMonth: function() {
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
        },
        getDateByMonth: function(e) {
            var t = e.startOf("month"), n = e.endOf("month");
            return Array.from({
                length: n.diff(t, "day") + 1
            }).map(function(e, n) {
                return t.add(n, "day");
            });
        },
        getDateByWeek: function(e) {
            return Array.from({
                length: 7
            }).map(function(t, n) {
                return e.add(n, "day");
            });
        },
        padMonthDate: function(e) {
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
        },
        transferMonthDateOptions: function(e, n, r, a) {
            return e.map(function(e) {
                return {
                    date: e.format("YYYY-MM-DD"),
                    day: e.format("DD"),
                    month: e.format("MM"),
                    weekday: t[Number(e.format("d"))],
                    disabled: !n.isSame(e.startOf("month")) || e.isBefore(r) || e.isAfter(a)
                };
            });
        },
        transferWeekDateOptions: function(e, n, r) {
            return e.map(function(e) {
                return {
                    date: e.format("YYYY-MM-DD"),
                    day: e.format("DD"),
                    month: e.format("MM"),
                    weekday: t[Number(e.format("d"))],
                    disabled: e.isBefore(n) || e.isAfter(r)
                };
            });
        },
        mergeDateOptions: function(e) {
            var t = this.properties.options;
            return e.map(function(e) {
                return t.some(function(t) {
                    if (t.date === e.date) return e = Object.assign({}, e, t), !0;
                }), e;
            });
        },
        mergeIncludesAndExcludes: function(e, t) {
            var n = this.properties[t];
            return n.length ? e.map(function(e) {
                var r = n.includes(e.date) || n.includes(e.weekday) || n.includes(e.day);
                return r || "includes" !== t || (e.disabled = !0), r && "excludes" === t && (e.disabled = !0), 
                e;
            }) : e;
        },
        handleMonthSwiper: function(e) {
            console.log("current: ", e.detail.current), this.setData({
                _current: e.detail.current
            });
        },
        handleTapDate: function(e) {
            var t = e.currentTarget.dataset.option, n = this.data._value;
            if (!t.disabled && t.date !== n) {
                var r = t.date;
                this.triggerEvent("change", {
                    value: r
                });
            }
        },
        handleToggleMode: function() {
            var e = this, t = "single" === this.data._mode ? "multiple" : "single";
            this.triggerEvent("modeChange", {
                mode: t
            }), this.setData({
                _mode: t
            }, function() {
                e.initDate();
            });
        }
    }
});