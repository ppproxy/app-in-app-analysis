var t = function() {
    function t(t, e) {
        var i = [], r = !0, o = !1, n = void 0;
        try {
            for (var h, l = t[Symbol.iterator](); !(r = (h = l.next()).done) && (i.push(h.value), 
            !e || i.length !== e); r = !0) ;
        } catch (t) {
            o = !0, n = t;
        } finally {
            try {
                !r && l.return && l.return();
            } finally {
                if (o) throw n;
            }
        }
        return i;
    }
    return function(e, i) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, i);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = (wx.getSystemInfoSync().windowHeight, wx.getSystemInfoSync().windowWidth, 
function(e) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top", r = t(e, 2), o = r[0], n = r[1], h = (n.width - o.width) / 2, l = (n.height - o.height) / 2;
    switch (i) {
      case "top":
        return {
            top: -o.height - 10,
            left: h,
            right: 0
        };

      case "topLeft":
        return {
            top: -o.height - 10,
            left: 2,
            right: 0
        };

      case "topRight":
        return {
            top: -o.height - 10,
            left: 0,
            right: 2
        };

      case "bottom":
        return {
            top: n.height + 10,
            left: h,
            right: 0
        };

      case "bottomLeft":
        return {
            top: n.height + 10,
            left: 2,
            right: 0
        };

      case "bottomRight":
        return {
            top: n.height + 10,
            left: 0,
            right: 2
        };

      case "left":
        return {
            top: l,
            left: -o.width - 10,
            right: 0
        };

      case "leftTop":
        return {
            top: 2,
            left: -o.width - 10,
            right: 0
        };

      case "leftBottom":
        return {
            top: n.height - o.height,
            left: -o.width - 10,
            right: 0
        };

      case "right":
        return {
            top: l,
            left: n.width + 10,
            right: 0
        };

      case "rightTop":
        return {
            top: 2,
            left: n.width + 10,
            right: 0
        };

      case "rightBottom":
        return {
            top: n.height - o.height,
            left: n.width + 10,
            right: 0
        };

      default:
        return {
            top: -o.height - 10,
            left: h,
            right: 0
        };
    }
});

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        content: {
            type: String,
            value: "tips"
        },
        placement: {
            type: String,
            value: "top"
        },
        visible: {
            type: Boolean,
            value: !1
        },
        position: {
            type: String,
            value: "static"
        }
    },
    data: {
        _popVisible: !1,
        _popoStyle: ""
    },
    ready: function() {
        this.data.visible && this.onShow();
    },
    methods: {
        onShow: function() {
            var t = this, i = wx.createSelectorQuery().in(this);
            i.select(".popBox").boundingClientRect(), i.select(".popoverItem").boundingClientRect(), 
            i.exec(function(i) {
                if (!i.filter(function(t) {
                    return !t;
                }).length) {
                    var r = e(i, t.data.placement), o = "\n            top: " + r.top + "px;\n            " + (r.left ? "left: " + r.left + "px;" : "") + "\n            " + (r.right ? "right: " + r.right + "px;" : "") + "\n          ";
                    t.setData({
                        _popoStyle: o,
                        _popVisible: !0
                    });
                }
            });
        },
        onTap: function() {
            var t = this;
            this.data.visible ? this.setData({
                visible: !1,
                _popVisible: !1
            }) : this.setData({
                visible: !0,
                _popVisible: !1
            }, function() {
                t.onShow();
            });
        }
    }
});