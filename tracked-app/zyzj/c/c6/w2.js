var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    e.data || (e.data = {});
    e.methods || (e.methods = {});
    function i() {
        return (i = n(r.default.mark(function e(t, a) {
            var n, i, o, s, h, p, c = this;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, u(this);

                  case 2:
                    if (null !== (n = e.sent)) {
                        e.next = 5;
                        break;
                    }
                    return e.abrupt("return");

                  case 5:
                    if (0 !== n.length) {
                        e.next = 7;
                        break;
                    }
                    return e.abrupt("return");

                  case 7:
                    return e.next = 9, this.getScrollViewRect();

                  case 9:
                    if (i = e.sent, o = i.top, s = i.height, this._containerHeight = s, this._containerTop = o, 
                    h = [], p = 0, t.forEach(function(e) {
                        n[p] && h.push({
                            dishId: e,
                            top: n[p++].top + o
                        });
                    }), this._fakeItemTopList = h, this.addShowDetailMap = {}, !a) {
                        e.next = 21;
                        break;
                    }
                    return e.abrupt("return", function() {
                        return c.updateShowDetailMap(o, !0);
                    });

                  case 21:
                    this.updateShowDetailMap(o, !0);

                  case 22:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }))).apply(this, arguments);
    }
    function u(e) {
        return o.apply(this, arguments);
    }
    function o() {
        return (o = n(r.default.mark(function e(a) {
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function(e) {
                        wx.createSelectorQuery().in(a.$origincomponent).selectAll(".".concat("nio")).boundingClientRect().exec(function() {
                            var a = n(r.default.mark(function a(n) {
                                var i, u;
                                return r.default.wrap(function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                      case 0:
                                        i = t(n, 1), u = i[0], e(u);

                                      case 2:
                                      case "end":
                                        return r.stop();
                                    }
                                }, a);
                            }));
                            return function(e) {
                                return a.apply(this, arguments);
                            };
                        }());
                    }));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        }))).apply(this, arguments);
    }
    return e.data.showDetailMap = {}, e.methods.updateShowDetailMap = function(e, t) {
        var r = this, n = this.data.showDetailMap, i = [], u = e - 800, o = e + this._containerHeight + 800;
        (this._fakeItemTopList || []).forEach(function(e) {
            e.top > u && e.top < o && i.push(e.dishId);
        });
        var s = !1, h = {};
        if (i.forEach(function(e) {
            n[e] || (h[e] = !0, s = !0);
        }), function(e, t) {
            if (void 0 === e || void 0 === t) return !1;
            var r = Object.keys(e), a = Object.keys(t);
            if (r.length !== a.length) return !1;
            for (var n in e) if (e[n] !== t[n]) return !1;
            return !0;
        }(h, this.addShowDetailMap)) return;
        if (clearTimeout(this.updateShowDetailMapTimer), this.addShowDetailMap = h, s) {
            var p = function() {
                r.setData({
                    showDetailMap: a(a({}, r.data.showDetailMap), r.addShowDetailMap)
                });
            };
            t ? p() : this.updateShowDetailMapTimer = setTimeout(p, 88);
        }
    }, e.methods.updateFakeItemsTop = function(e, t) {
        return i.apply(this, arguments);
    }, e.methods.scrollTopOnChange = function(e) {
        this.updateShowDetailMap(e, this._fakeImmediate), this._fakeImmediate = !1;
    }, e;
};

var t = require("../../@babel/runtime/helpers/slicedToArray"), r = e(require("../../@babel/runtime/regenerator")), a = require("../../@babel/runtime/helpers/objectSpread2"), n = require("../../@babel/runtime/helpers/asyncToGenerator");

e(require("../../m/5y"));