Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../@babel/runtime/helpers/classCallCheck"), t = require("../@babel/runtime/helpers/createClass"), s = function() {
    function s() {
        e(this, s), this.listens = {};
    }
    return t(s, [ {
        key: "done",
        value: function(e) {
            var t = this.$getListen(e);
            !0 !== t && (t.resolve(), this.listens[e] = !0);
        }
    }, {
        key: "wait",
        value: function(e) {
            var t = this.$getListen(e);
            if (!0 !== t) return t.promise;
        }
    }, {
        key: "$getListen",
        value: function(e) {
            return this.listens[e] || (this.listens[e] = s.createPromise()), this.listens[e];
        }
    } ], [ {
        key: "createPromise",
        value: function() {
            var e;
            return {
                promise: new Promise(function(t) {
                    e = t;
                }),
                resolve: e
            };
        }
    } ]), s;
}();

exports.default = s;