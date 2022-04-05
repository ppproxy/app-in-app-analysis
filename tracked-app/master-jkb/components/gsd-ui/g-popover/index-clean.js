function ready() {
        this.data.visible && this.onShow();
}
function onShow() {
            var e = this, i = wx.createSelectorQuery().in(this);
            i.select(".popBox").boundingClientRect(), i.select(".popoverItem").boundingClientRect(), 
            i.exec(function(i) {
                if (!i.filter(function(t) {
                    return !t;
                }).length) {
                    var o = function(e) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top", o = t(e, 2), h = o[0], r = o[1], n = 10, p = 2, l = (r.width - h.width) / 2, a = (r.height - h.height) / 2;
                        switch (i) {
                          case "top":
                            return {
                                top: -h.height - n,
                                left: l,
                                right: 0
                            };

                          case "topLeft":
                            return {
                                top: -h.height - n,
                                left: p,
                                right: 0
                            };

                          case "topRight":
                            return {
                                top: -h.height - n,
                                left: 0,
                                right: p
                            };

                          case "bottom":
                            return {
                                top: r.height + n,
                                left: l,
                                right: 0
                            };

                          case "bottomLeft":
                            return {
                                top: r.height + n,
                                left: p,
                                right: 0
                            };

                          case "bottomRight":
                            return {
                                top: r.height + n,
                                left: 0,
                                right: p
                            };

                          case "left":
                            return {
                                top: a,
                                left: -h.width - n,
                                right: 0
                            };

                          case "leftTop":
                            return {
                                top: p,
                                left: -h.width - n,
                                right: 0
                            };

                          case "leftBottom":
                            return {
                                top: r.height - h.height,
                                left: -h.width - n,
                                right: 0
                            };

                          case "right":
                            return {
                                top: a,
                                left: r.width + n,
                                right: 0
                            };

                          case "rightTop":
                            return {
                                top: p,
                                left: r.width + n,
                                right: 0
                            };

                          case "rightBottom":
                            return {
                                top: r.height - h.height,
                                left: r.width + n,
                                right: 0
                            };

                          default:
                            return {
                                top: -h.height - n,
                                left: l,
                                right: 0
                            };
                        }
                    }(i, e.data.placement), h = "\n            top: ".concat(o.top, "px;\n            ").concat(o.left ? "left: ".concat(o.left, "px;") : "", "\n            ").concat(o.right ? "right: ".concat(o.right, "px;") : "", "\n          ");
                    e.setData({
                        _popoStyle: h,
                        _popVisible: !0
                    });
                }
            });
}
function onTap() {
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
