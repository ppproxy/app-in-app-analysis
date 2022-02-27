(0, require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../m/zk/za")).default)({
    name: "richText",
    data: {
        textNode: ""
    },
    properties: {
        nodes: {
            type: String,
            value: ""
        },
        textStyleNormal: {
            type: String,
            value: ""
        },
        textStyleFirst: {
            type: String,
            value: ""
        },
        textStyleSecond: {
            type: String,
            value: ""
        },
        ellipsis: {
            type: Boolean,
            value: !1
        },
        maxWidth: {
            type: String,
            value: "750"
        }
    },
    observers: {
        nodes: function() {
            this.initText();
        }
    },
    methods: {
        initText: function() {
            var e = this.data.ellipsis, t = this.data.nodes, a = this.formatText(t), r = this.htmlParseText(a);
            e && (r = [ {
                name: "div",
                attrs: {
                    style: "overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-block; width: 100%"
                },
                children: r
            } ]), this.setData({
                textNode: r
            });
        },
        formatText: function(e) {
            var t = this, a = (e = (e = (e = (e = e.replace(/{/g, "/{")).replace(/}/g, "}/")).replace(/《/g, "/《")).replace(/》/g, "》/")).split("/"), r = [];
            return a.forEach(function(e) {
                var a = {}, i = /\{\S*\}/g.test(e), l = /《\S*》/g.test(e);
                i && !l && (a.style = t.data.textStyleFirst || ""), !i && l && (a.style = t.data.textStyleSecond || "");
                var s = e.replace("{", "");
                s = (s = (s = s.replace("}", "")).replace("《", "")).replace("》", ""), a.value = s, 
                r.push(a);
            }), r;
        },
        htmlParseText: function(e) {
            var t = this, a = [];
            return e.forEach(function(e) {
                var r = {}, i = [ {
                    text: e.value || "",
                    type: "text"
                } ], l = {
                    style: e.style || t.data.textStyleNormal
                };
                r.children = i, r.attrs = l, r.name = "span", a.push(r);
            }), a;
        }
    }
});