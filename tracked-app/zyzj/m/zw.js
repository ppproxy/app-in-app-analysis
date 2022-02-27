var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = exports.SERVICE_ID = void 0;

var t = e(require("../@babel/runtime/regenerator")), r = require("../@babel/runtime/helpers/asyncToGenerator"), n = require("../@babel/runtime/helpers/classCallCheck"), i = require("../@babel/runtime/helpers/createClass"), s = require("../@babel/runtime/helpers/get"), a = require("../@babel/runtime/helpers/getPrototypeOf"), u = require("../@babel/runtime/helpers/inherits"), o = require("../@babel/runtime/helpers/createSuper"), c = e(require("../accs/index")), l = e(require("./zk/zy")), f = e(require("./54/n")), h = e(require("../m/zd/n")), p = require("../l/wa");

exports.SERVICE_ID = "alsc-applet-msgbox";

var m, b = "dev" === (m = (0, p.getEnv)()) ? "msgacs.waptest.taobao.com" : "pre" === m ? "ws-msgacs.wapa.taobao.com" : "ws-msgacs.m.taobao.com", v = new (function(e) {
    u(v, e);
    var l, p, m = o(v);
    function v() {
        var e;
        return n(this, v), (e = m.call(this)).ref = {
            current: null
        }, e.retry_times = 0, e.init_infos = [], e.promise = null, e.timer = setInterval(function() {
            e.check();
        }, 1e4), e;
    }
    return i(v, [ {
        key: "check",
        value: (p = r(t.default.mark(function e() {
            var r;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = this.ref.current) {
                        e.next = 8;
                        break;
                    }
                    if (!(this.init_infos.length > 0)) {
                        e.next = 5;
                        break;
                    }
                    return e.next = 5, this.init();

                  case 5:
                    return e.abrupt("return");

                  case 8:
                    if (r.getStatus()) {
                        e.next = 13;
                        break;
                    }
                    return this.ref.current = null, e.next = 12, this.init();

                  case 12:
                    h.default.$logOther("ACCS SOCKET CLOSE", null);

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return p.apply(this, arguments);
        })
    }, {
        key: "init",
        value: function() {
            var e = this;
            return this.promise || (this.promise = this.connect().finally(function() {
                e.promise = null;
            })), this.promise;
        }
    }, {
        key: "connect",
        value: (l = r(t.default.mark(function e() {
            var r, n = arguments;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = n.length > 0 && void 0 !== n[0] && n[0], !this.ref.current || !this.ref.current.getStatus()) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return");

                  case 3:
                    if (!r) {
                        e.next = 8;
                        break;
                    }
                    if (this.retry_times++, !(this.retry_times >= 5)) {
                        e.next = 8;
                        break;
                    }
                    throw h.default.$logOther("ACCS SOCKET CONNECT GRREAT THAN MAX_RETRY_TIMES", null), 
                    new Error("已经超过五次");

                  case 8:
                    return e.prev = 8, e.next = 11, c.default.init({
                        appKey: "H5_3OMa3Wm2kce4N1",
                        aserverProxy: b,
                        protocol: "wss:",
                        getToken: function() {
                            return f.default.request({
                                api: "mtop.alsc.saas.clogin.accs.getToken"
                            }).then(function(e) {
                                return e.data.data;
                            });
                        }
                    });

                  case 11:
                    this.ref.current = e.sent, this.init_infos.push("初始化成功"), this.bindEvents(), e.next = 22;
                    break;

                  case 16:
                    return e.prev = 16, e.t0 = e.catch(8), this.init_infos.push(e.t0.message), h.default.$logOther("ACCS SOCKET INIT ERROR", {
                        error: e.t0 instanceof Error ? e.t0.message : e.t0
                    }), e.next = 22, this.connect(!0);

                  case 22:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 8, 16 ] ]);
        })), function() {
            return l.apply(this, arguments);
        })
    }, {
        key: "$on",
        value: function(e, t) {
            return s(a(v.prototype), "$on", this).call(this, e, t), this;
        }
    }, {
        key: "$once",
        value: function(e, t) {
            return s(a(v.prototype), "$once", this).call(this, e, function(e) {
                t(e);
            }), this;
        }
    }, {
        key: "bindEvents",
        value: function() {
            var e = this;
            !function(e) {
                if (!e) throw new Error("accs connect is null");
            }(this.ref.current);
            var t = this.ref.current, r = function(t) {
                if (t) try {
                    var r = JSON.parse(t), n = r.source, i = r.busi, s = r.content;
                    e.$emit("".concat(n, ".").concat(i), JSON.parse(decodeURIComponent(s)));
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    h.default.$logOther("ACCS SOCKET CONTENT PARSE ERROR", {
                        jsonText: t
                    });
                }
            };
            t.onMessage("alsc-applet-msgbox", function(e) {
                "GZIP" === e.compressType ? e.getBinaryArray().then(function(e) {
                    r([].map.call(e, function(e) {
                        return String.fromCharCode(e);
                    }).join(""));
                }) : r(e.getText());
            });
        }
    } ]), v;
}(l.default))();

exports.default = v;