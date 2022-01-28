var e = require("../@babel/runtime/helpers/classCallCheck"), n = require("../@babel/runtime/helpers/createClass");

module.exports = function(i) {
    console.log("app", i);
    var r = i.Anim;
    i.request, i.config, i.wxp;
    return (0, r.wedux.observe)(new (function() {
        function i() {
            e(this, i), this.initConfigInfo();
        }
        return n(i, [ {
            key: "initConfigInfo",
            value: function() {
                this.wllConfig = {};
            }
        } ]), i;
    }())(), "config");
};