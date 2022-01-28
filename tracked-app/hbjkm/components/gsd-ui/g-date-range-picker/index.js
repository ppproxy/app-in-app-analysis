var t = function() {
    function t(t, e) {
        var a = [], r = !0, n = !1, i = void 0;
        try {
            for (var o, l = t[Symbol.iterator](); !(r = (o = l.next()).done) && (a.push(o.value), 
            !e || a.length !== e); r = !0) ;
        } catch (t) {
            n = !0, i = t;
        } finally {
            try {
                !r && l.return && l.return();
            } finally {
                if (n) throw i;
            }
        }
        return a;
    }
    return function(e, a) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../gsd-lib/dayjs/index");

Component({
    externalClasses: [],
    properties: {
        start: String,
        end: String,
        fields: {
            type: String,
            value: "day"
        },
        value: {
            type: Array,
            value: [ "", "" ],
            observer: function(t, e) {
                this.setDateData();
            }
        },
        startPlaceholder: {
            type: String,
            value: "开始日期"
        },
        endPlaceholder: {
            type: String,
            value: "结束日期"
        },
        format: {
            type: String,
            value: "YYYY年MM月DD日"
        }
    },
    data: {
        startValue: "",
        endValue: "",
        startDateStr: "",
        endDateStr: ""
    },
    ready: function() {
        this.setDateData();
    },
    methods: {
        setDateData: function() {
            var a = this.properties, r = a.value, n = a.format, i = t(r, 2), o = i[0], l = i[1], u = o || e().format("YYYY-MM-DD"), s = l || e().format("YYYY-MM-DD"), f = o ? e(new Date(o)).format(n) : "", d = l ? e(new Date(l)).format(n) : "";
            this.setData({
                startValue: u,
                endValue: s,
                startDateStr: f,
                endDateStr: d
            });
        },
        handleStartChange: function(t) {
            var a = this.properties, r = a.value, n = a.format, i = void 0 === n ? "YYYY年MM月DD日" : n, o = t.detail.value, l = e(new Date(o)).format(i), u = r[1] ? e(new Date(r[1])).format(i) : "";
            r[0] = o, this.triggerEvent("change", {
                value: [ o, r[1] ],
                format: [ l, u ]
            });
        },
        handleEndChange: function(t) {
            var a = this.properties, r = a.value, n = a.format, i = void 0 === n ? "YYYY年MM月DD日" : n, o = t.detail.value, l = r[0] ? e(new Date(r[0])).format(i) : "", u = e(new Date(o)).format(i);
            r[1] = o, this.triggerEvent("change", {
                value: [ r[0], o ],
                format: [ l, u ]
            });
        }
    }
});