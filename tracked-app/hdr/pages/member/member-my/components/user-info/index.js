var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), r = require("../../../../../@babel/runtime/helpers/objectSpread2"), t = e(require("../../../../../@babel/runtime/regenerator")), a = require("../../../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../../../../m/zk/za")), i = e(require("../../../../../m/z3/z7")), s = !1;

(0, n.default)({
    name: "userinfo",
    components: {
        userWithAgreement: "user-with-agreement"
    },
    properties: {},
    data: {
        userInfo: null,
        userNickName: "",
        userImageUrl: "",
        memberAuthCopy: !1,
        supportGetUserProfile: "undefined" != typeof wx && wx.canIUse && wx.canIUse("getUserProfile")
    },
    localData: {
        options: Object.create(null)
    },
    ready: function() {},
    methods: {
        init: function(e) {
            return this.localData.options = e, this;
        },
        render: function() {
            var e = this;
            return a(t.default.mark(function r() {
                var a, n, s, o, u, c, l, f, m, p, d, g, h;
                return t.default.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        if (a = e.localData.options.data, n = a["user-info"], s = n.avatarUrl, o = void 0 === s ? "" : s, 
                        u = n.name, c = void 0 === u ? "" : u, l = i.default.getRealNickName(c) || c, f = o, 
                        m = o && c) {
                            r.next = 19;
                            break;
                        }
                        return r.next = 9, i.default.getUserBaseInfo();

                      case 9:
                        if (r.t0 = r.sent, r.t0) {
                            r.next = 12;
                            break;
                        }
                        r.t0 = {};

                      case 12:
                        p = r.t0, d = p.nickName, g = void 0 === d ? "" : d, h = p.avatarUrl, l = g || l, 
                        f = (void 0 === h ? "" : h) || f;

                      case 19:
                        e.setData({
                            userInfo: n,
                            userNickName: l,
                            userImageUrl: f,
                            memberAuthCopy: m
                        });

                      case 20:
                      case "end":
                        return r.stop();
                    }
                }, r);
            }))();
        },
        goToPersonalInfo: function() {
            this.$root.$navigate("/pages/member/member-personal-info/index");
        },
        getUserInfoSuccess: function(e) {
            s = !1;
            var r = e && e.nickName ? e.nickName : "亲爱的会员", t = e && e.avatarUrl ? e.avatarUrl : "https://img.alicdn.com/imgextra/i1/O1CN01WggDir1XSJyiLpC15_!!6000000002922-2-tps-96-96.png";
            this.setData({
                memberAuthCopy: !0,
                userNickName: r,
                userImageUrl: t
            });
        },
        getUserInfoFail: function(e) {
            s = !1;
        },
        bindGetUserUnfoProfile: function(e) {
            var t = this;
            if (!s) {
                var a = {
                    hasUserAgreement: !0
                };
                e && (a = r({
                    event: e
                }, a)), s = !0, i.default.auth(r({}, a), function(e) {
                    t.getUserInfoSuccess(e);
                }, function(e) {
                    t.getUserInfoFail(e);
                });
            }
        }
    }
});