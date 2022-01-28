function e(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../behaviors/formController"), i = require("../utils/validator"), r = require("../../gsd-lib/utils/index");

Component({
    timer: void 0,
    relations: {
        "../g-form-item/index": {
            type: "child"
        },
        "../g-form/index": {
            type: "ancestor"
        }
    },
    behaviors: [ t ],
    properties: {
        value: String,
        delaySecond: {
            type: Number,
            value: 60
        },
        mobile: String,
        mobileID: String,
        maxLength: {
            type: Number,
            value: 6
        },
        placeholder: {
            type: String,
            value: "请输入手机短信验证码"
        },
        buttonText: {
            type: String,
            value: "发送验证码"
        },
        type: String
    },
    data: {
        __id: "",
        __second: void 0,
        __reSend: !1
    },
    ready: function() {
        this.setData({
            __id: this.id
        });
    },
    methods: {
        bindVerifyAction: r.debounce(function() {
            var t = this, r = this.properties, n = r.mobile, o = r.mobileID, a = r.delaySecond, d = r.disabled;
            if (!this.data.__reSend && !d) {
                var l = this.getFormNode(), s = l.properties, u = s.rules, c = void 0 === u ? {} : u, v = s.validateType, _ = void 0 === v ? {} : v, m = e({}, o, n);
                i(m, c, _).then(function(e) {
                    console.log("form-field validate: ", m, c, e), e.length > 0 ? l.getFormField(o).warn(e[0]) : (t.triggerEvent("tapVCode", {
                        value: n,
                        mobile: n
                    }), t.timer && clearInterval(t.timer), t.setData({
                        __reSend: !0,
                        __second: a
                    }), t.timer = setInterval(function() {
                        var e = t.data.__second;
                        e <= 1 ? (console.log("验证码计时结束"), clearInterval(t.timer), t.setData({
                            __reSend: !1,
                            __second: a
                        })) : t.setData({
                            __reSend: !0,
                            __second: void 0 === e ? a : e - 1
                        });
                    }, 1e3));
                });
            }
        }, 100),
        handleChange: function(e) {
            this.triggerEvent("change", e.detail);
        }
    }
});