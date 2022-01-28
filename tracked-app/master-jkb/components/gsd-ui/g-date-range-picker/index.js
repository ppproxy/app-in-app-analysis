var e = require("../../../@babel/runtime/helpers/slicedToArray");

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../gsd-lib/dayjs/index");

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
            observer: function(e, t) {
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
            var a = this.properties, r = a.value, n = a.format, i = e(r, 2), s = i[0], o = i[1], l = s || t().format("YYYY-MM-DD"), u = o || t().format("YYYY-MM-DD"), D = s ? t(new Date(s)).format(n) : "", d = o ? t(new Date(o)).format(n) : "";
            this.setData({
                startValue: l,
                endValue: u,
                startDateStr: D,
                endDateStr: d
            });
        },
        handleStartChange: function(e) {
            var a = this.properties, r = a.value, n = a.format, i = void 0 === n ? "YYYY年MM月DD日" : n, s = e.detail.value, o = t(new Date(s)).format(i), l = r[1] ? t(new Date(r[1])).format(i) : "";
            r[0] = s, this.triggerEvent("change", {
                value: [ s, r[1] ],
                format: [ o, l ]
            });
        },
        handleEndChange: function(e) {
            var a = this.properties, r = a.value, n = a.format, i = void 0 === n ? "YYYY年MM月DD日" : n, s = e.detail.value, o = r[0] ? t(new Date(r[0])).format(i) : "", l = t(new Date(s)).format(i);
            r[1] = s, this.triggerEvent("change", {
                value: [ r[0], s ],
                format: [ o, l ]
            });
        }
    }
});