var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.EXCEPTION_PAGE_TPL = void 0, exports.fetchTpl = function(e) {
    var n = (0, t.getEnv)(), s = "https://".concat("prod" === n ? "" : "dev.", "g.alicdn.com/").concat(c, "/").concat(i, "/").concat(o, "/").concat(a, "-jsons"), l = "".concat(e, "__").concat(o);
    r.get(l) || r.set(l, new Promise(function(t, n) {
        wx.request({
            url: "".concat(s, "/").concat(e, ".json"),
            success: function(e) {
                200 === e.statusCode && t(e.data), r.delete(l), n(new Error(e.statusCode));
            },
            fail: function(e) {
                r.delete(l), n(e);
            }
        });
    }));
    return r.get(l);
};

var t = require("../l/wa"), n = e(require("../m/zv")), a = (0, t.getMiniType)(), o = (0, 
t.getVersion)(), r = new Map(), i = n.default.$projectName, c = n.default.$projectGroupName;

var s = {
    css: [ [ ".m-a", [ [ "position", "fixed" ], [ "top", "0" ], [ "left", "0" ], [ "right", "0" ], [ "background-color", "#fff" ], [ "height", "100vh" ] ] ], [ ".m-x", [ [ "display", "flex" ], [ "flex-direction", "column" ], [ "align-items", "center" ] ] ], [ ".m-b", [ [ "display", "flex" ], [ "flex-direction", "column" ], [ "justify-items", "center" ], [ "align-items", "center" ], [ "margin-top", "178rpx" ] ] ], [ ".m-y", [ [ "width", "400rpx" ], [ "height", "400rpx" ], [ "margin-bottom", "24rpx" ] ] ], [ ".m-c", [ [ "font-size", "18px" ], [ "color", "#000" ], [ "text-align", "center" ], [ "line-height", "44px" ] ] ], [ ".m-d", [ [ "height", "80rpx" ], [ "padding", "0 20rpx" ], [ "border", "1px solid #888" ], [ "color", "#888" ], [ "border-radius", "40rpx" ], [ "font-size", "14px" ], [ "text-align", "center" ], [ "line-height", "80rpx" ], [ "background-color", "#fff" ], [ "margin-top", "50rpx" ], [ "margin-left", "auto" ], [ "margin-right", "auto" ] ] ] ],
    mode: a,
    nodes: [ {
        name: "view",
        key: "0",
        a: {
            class: "m-a"
        },
        nodes: [ {
            name: "view",
            key: "0-0",
            a: {
                class: "m-x"
            },
            nodes: [ {
                name: "view",
                key: "0-0-0",
                a: {
                    class: "m-b"
                },
                nodes: [ {
                    name: "image",
                    key: "0-0-0-0",
                    a: {
                        mode: "scaleToFill",
                        class: "m-y",
                        src: "https://img.alicdn.com/imgextra/i4/O1CN01dLZDCT1XVWmccYuzJ_!!6000000002929-2-tps-600-600.png"
                    },
                    nodes: []
                } ]
            }, {
                name: "view",
                key: "0-0-1",
                a: {
                    class: "m-c"
                },
                nodes: [ {
                    name: "text-node",
                    key: "0-0-1-0",
                    a: {
                        text: "人气大爆发，请刷新页面试试～"
                    }
                } ]
            }, {
                name: "button",
                key: "0-0-2",
                a: {
                    class: "m-d",
                    bindtap: "__reloadClick"
                },
                nodes: [ {
                    name: "text-node",
                    key: "0-0-2-0",
                    a: {
                        text: "重新加载"
                    }
                } ]
            } ]
        } ]
    } ],
    templates: {}
};

exports.EXCEPTION_PAGE_TPL = s;