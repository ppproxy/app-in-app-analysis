var e = require("../../@babel/runtime/helpers/interopRequireDefault"), r = require("../caches");

(0, e(require("../../m/zk/za")).default)({
    name: "virtual-component",
    options: {
        addGlobalClass: !0,
        virtualHost: !0,
        pureDataPattern: void 0
    },
    data: {
        __children__: []
    },
    properties: {
        pid: {
            type: String,
            value: null
        },
        nid: {
            type: String,
            value: null
        },
        usechildren: {
            type: Boolean,
            value: !0
        }
    },
    observers: {
        "pid, nid, usechildren": function(e, r, n) {
            this.__render__(e, r, n);
        }
    },
    methods: {
        __render__: function(e, n, t) {
            if (e && n) {
                var i = (0, r.get)(e);
                if (i) {
                    var a = i.nodes, l = i.handles, o = a.get(n);
                    if (o) for (var s in this.setData({
                        __children__: !0 === t ? o.nodes : [ o ]
                    }), l) {
                        if ("handleRootInstance" === s) return;
                        this.$origincomponent[s] = l[s];
                    }
                }
            }
        }
    }
});