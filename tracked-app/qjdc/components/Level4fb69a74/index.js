var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 35 ], {
    1111: function(e, t, n) {
        "use strict";
        n.r(t), function(e) {
            e.currentModuleId = "m4fb69a74", e.currentCtor = Component, e.currentResourceType = "component", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "m4fb69a74",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("levelIcon", this.levelIcon), 
                    this._c("badegAnimation", this.badegAnimation), this._c("user.memberInfo.badgeUrl", this.user.memberInfo.badgeUrl), 
                    this._c("level", this.level) && this._c("level[1]", this.level[1]) && (this._c("numCss.two", this.numCss.two), 
                    this._i(this._c("numberList", this.numberList), function(e, t) {})), this._c("level", this.level) && this._c("level[0]", this.level[0]) && (this._c("numCss.one", this.numCss.one), 
                    this._i(this._c("numberList", this.numberList), function(e, t) {})), this._r();
                }
            };
            n(435);
            e.currentModuleId;
        }.call(this, n(11));
    },
    435: function(e, t, n) {
        "use strict";
        var i = n(1), r = n.n(i), o = n(6), s = n.n(o), a = n(2), l = n(32), c = n(5), h = n(8);
        Object(a.b)({
            properties: {
                canClick: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {
                storageMerberInfo: {},
                levelIcon: "",
                animationFlag: !1,
                numberList: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
                badegAnimation: null,
                lightAnimation: null,
                badgeUrl: "",
                indexLv: 0,
                textHeight: Math.floor(l.a.cpx2px(22))
            },
            computed: r()(r()({}, c.a.mapState([ "user" ])), {}, {
                level() {
                    if (this.indexLv) return String(this.indexLv).split("");
                },
                numCss() {
                    var e = {}, t = this.level, n = this.textHeight;
                    if (!t) return e;
                    switch (t.length) {
                      case 1:
                        e = {
                            one: t[0] * n
                        };
                        break;

                      case 2:
                        e = {
                            one: t[1] * n,
                            two: t[0] * n
                        };
                    }
                    return e;
                },
                memberInfo() {
                    var e = this, t = this.user.memberInfo;
                    return t.lastEnterGrade !== t.level && setTimeout(function() {
                        e.changeBadge();
                    }, 2e3), this.user.memberInfo;
                }
            }),
            attached() {
                try {
                    this.storageMerberInfo = wx.getStorageSync("memberInfo") ? JSON.parse(wx.getStorageSync("memberInfo")) : {};
                } catch (e) {
                    console.log(e);
                }
                this.levelIcon = this.storageMerberInfo.lastEnterBadgeUrl, this.indexLv = this.storageMerberInfo.level;
            },
            watch: {
                "user.memberInfo": function(e) {
                    if (e) {
                        var t = e.lastEnterGrade, n = e.level, i = e.badgeUrl, r = e.lastEnterBadgeUrl;
                        this.levelIcon = r || i, this.indexLv = t || n;
                    }
                }
            },
            methods: {
                goToMember() {
                    if (this.canClick) {
                        this.triggerEvent("tapHandle");
                        try {
                            var e;
                            Object(h.w)(s()(e = "/m/growthSystem.html?growthChannel=2003&nickName=".concat(encodeURIComponent(this.user.wxInfo.nickName), "&avatarUrl=")).call(e, encodeURIComponent(this.user.wxInfo.avatarUrl)));
                        } catch (e) {
                            console.log(e);
                        }
                    }
                },
                changeBadge() {
                    var e = this;
                    try {
                        if (this.user.memberInfo.level === this.indexLv) return;
                        var t = l.a.createAnimation();
                        this.badegAnimation = t.translateY(-4).step({
                            duration: 150
                        }).translateY(0).step({
                            duration: 150
                        }).rotateY(90).step({
                            duration: 400
                        }).export(), setTimeout(function() {
                            e.levelIcon = e.user.memberInfo.badgeUrl, e.badegAnimation = t.rotateY(180).step({
                                duration: 400
                            }).export();
                        }, 700), setTimeout(function() {
                            e.indexLv = e.user.memberInfo.level;
                        }, 1100);
                    } catch (e) {
                        console.log(e);
                    }
                },
                lightToRight() {
                    var e = l.a.createAnimation();
                    this.lightAnimation = e.translateX(200).step({
                        duration: 1300
                    }).translateX(200).step({
                        duration: 1300
                    }).export();
                }
            }
        });
    }
}, [ [ 1111, 0 ] ] ]);
//# sourceMappingURL=index.js.map