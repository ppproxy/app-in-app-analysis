var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var i = require("../m/zd/n"), t = require("../l/wa"), r = e(require("../x/zd")), n = {
    created: function() {
        this.$logAppear = this.$origincomponent.$logAppear = r.default.methods.$logAppear.bind(this), 
        this.bindExp = this.bindExp || r.default.methods.bindExp.bind(this);
    },
    ready: function() {
        "wx" === (0, t.getMiniType)() && i.handleInitExp.call(this);
    },
    detached: function() {
        "wx" === (0, t.getMiniType)() && i.handleRemoveExp.call(this);
    }
};

exports.default = n;