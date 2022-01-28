var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 31 ], {
    1074: function(t, i, e) {
        "use strict";
        e.r(i), function(t) {
            t.currentModuleId = "m168c9756", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m168c9756",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 1 == this._c("unlockStatus", this.unlockStatus) || (this._c("imgsrc", this.imgsrc), 
                    this._c("imgStyle", this.imgStyle)), this._c("content", this.content), 2 == this._c("unlockStatus", this.unlockStatus) && (1 == this._c("bizType", this.bizType) || this._c("findCss", this.findCss)), 
                    this._r();
                }
            };
            e(413);
            t.currentModuleId;
        }.call(this, e(11));
    },
    413: function(t, i, e) {
        "use strict";
        var n = e(1), o = e.n(n), r = e(2), s = (e(8), e(16), e(5)), c = e(78), u = e(9), d = e(15), h = e(7), a = e.n(h);
        Object(r.b)({
            properties: {
                unlockStatus: {
                    type: [ Number, String ],
                    value: 0
                },
                bizType: {
                    type: [ Number, String ],
                    value: 1
                }
            },
            data: {
                imgStyle: "",
                findCss: {
                    height: "94rpx",
                    background: "transparent",
                    border: "1rpx solid #FFFFFF",
                    "border-radius": "16rpx",
                    color: "#fff",
                    "box-sizing": "border-box"
                }
            },
            computed: o()(o()({}, s.a.mapState([ "order" ])), {}, {
                imgsrc() {
                    switch (this.unlockStatus) {
                      case 0:
                        return a()(this.order, "unlockConfig.unlocking.eduPic", "https://pt-starimg.didistatic.com/static/starimg/img/4YmvURR6v41636977091449.png");

                      case 2:
                        return this.imgStyle = "width: 288rpx;", a()(this.order, "unlockConfig.unlockFail.eduPic", "https://pt-starimg.didistatic.com/static/starimg/img/zryFyeInjf1636978803580.png");
                    }
                },
                content() {
                    switch (this.unlockStatus) {
                      case 0:
                        return a()(this.order, "unlockConfig.unlocking.eduContent", "安全骑行，有序停放");

                      case 2:
                        return a()(this.order, "unlockConfig.unlockFail.eduContent", "请尝试重新开锁或更换其他车辆");
                    }
                }
            }),
            methods: {
                toFind() {
                    Object(u.redirectTo)(d.k, {
                        type: "find",
                        setBikeLoadStatus: !0
                    }), this.triggerEvent("toFind");
                },
                toScan() {
                    Object(c.c)({}, 6), this.triggerEvent("toScan");
                }
            },
            ready() {
                console.log(this.order), console.log(this.order.unlockConfig);
            }
        });
    }
}, [ [ 1074, 0 ] ] ]);
//# sourceMappingURL=index.js.map