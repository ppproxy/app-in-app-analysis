Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../gsd-lib/event/index"), t = require("../../gsd-lib/utils/index").debounce;

Component({
    properties: {
        value: {
            type: Array,
            observer: function(e) {
                e && this.setData({
                    _value: e
                });
            },
            __type__: function(e) {
                return e;
            }
        },
        visible: {
            type: Boolean,
            observer: function(e) {
                !1 === e && this.handleChange();
            }
        },
        range: {
            type: Array,
            observer: function(e) {
                var t = this;
                this.updateTab(), e && setTimeout(function() {
                    t.setData({
                        _tabActiveIndex: (e.length - 1).toString()
                    });
                }, 0);
            }
        }
    },
    data: {
        _tabActiveIndex: "0",
        _value: []
    },
    methods: {
        updateTab: t(function() {
            setTimeout(function() {
                e.dispatch("g-tabs__init");
            }, 0);
        }, 0),
        handleClose: function(e) {
            this.triggerEvent("close", e.detail);
        },
        handleTabChange: function(e) {
            this.setData({
                _tabActiveIndex: e.detail.value.key
            });
        },
        handleChange: function() {
            this.triggerEvent("change", {
                value: this.data._value.map(function(e) {
                    return e.value || e;
                })
            });
        },
        handleChoose: t(function(e) {
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
        }, 500)
    }
});