var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"), e = require("../../@babel/runtime/helpers/objectSpread2");

Component({
    properties: {
        options: {
            type: Array,
            value: []
        },
        defaultOption: {
            type: Object,
            value: {
                id: "000",
                name: "所有部门"
            }
        },
        key: {
            type: String,
            value: "id"
        },
        text: {
            type: String,
            value: "name"
        }
    },
    data: {
        result: [],
        isShow: !1,
        current: {}
    },
    methods: {
        optionTap: function(t) {
            var a = t.target.dataset;
            this.setData({
                current: a,
                isShow: !1
            }), this.triggerEvent("change", e({}, a));
        },
        openClose: function() {
            this.setData({
                isShow: !this.data.isShow
            });
        },
        close: function() {
            this.setData({
                isShow: !1
            });
        }
    },
    lifetimes: {
        attached: function() {
            var e = [];
            if ("id" !== this.data.key || "name" !== this.data.text) {
                var a, i = t(this.data.options);
                try {
                    for (i.s(); !(a = i.n()).done; ) {
                        var r = a.value, s = r[this.data.key], n = r[this.data.text];
                        e.push({
                            id: s,
                            name: n
                        });
                    }
                } catch (t) {
                    i.e(t);
                } finally {
                    i.f();
                }
            }
            this.setData({
                current: Object.assign({}, this.data.defaultOption),
                result: e
            });
        }
    }
});