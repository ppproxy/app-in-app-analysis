var e = getApp(), t = e.Anim, a = (e.userStore, e.request, e.config, e.requestHb), n = (e.configStore, 
e.wxp, require("../../components/gsd-lib/dayjs/index"), require("../../services/health-code.js"));

t.Page({
    store: function(e) {
        return {
            isAuth: e.user.userInfo.isAuth,
            userInfo: e.user.userInfo
        };
    },
    data: {
        selfFormRules: {
            username: [ {
                type: "required",
                message: "请填写姓名"
            } ],
            identityType: [ {
                type: "required",
                message: "请选择证件类型"
            } ],
            identity: [ {
                type: "required",
                message: "请输入证件号码"
            }, {
                type: "id",
                message: "请输入正确的身份证号码"
            } ]
        },
        cardTypeRange: [ {
            name: "配偶",
            value: 1
        }, {
            name: "子女",
            value: 2
        }, {
            name: "父母",
            value: 3
        } ],
        identityInputType: "idcard",
        relation: 2,
        urll: ""
    },
    name: function(e) {
        this.setData({
            name: e.detail.value
        });
    },
    id: function(e) {
        this.setData({
            id: e.detail.value
        });
    },
    relation: function(e) {
        this.setData({
            relation: e.detail.value
        });
    },
    add: function() {
        console.log(this.data.id);
        this.data.selfFormRules;
        void 0 == this.data.name ? wx.showToast({
            title: "被代领人姓名不能为空",
            icon: "none"
        }) : void 0 == this.data.id ? wx.showToast({
            title: "身份证号码不能为空",
            icon: "none"
        }) : void 0 == this.data.relation ? wx.showToast({
            title: "所属关系不能为空",
            icon: "none"
        }) : void 0 == this.data.familyIdentityImage ? wx.showToast({
            title: "请上传照片",
            icon: "none"
        }) : this.isCardNo(this.data.id) ? a({
            url: "/hbjkm/family/add",
            method: "POST",
            data: {
                uid: this.data.userInfo.uid,
                familyName: this.data.name,
                familyIdentity: this.data.id,
                familyRelationType: this.data.relation,
                familyIdentityImage: this.data.familyIdentityImage
            }
        }).then(function(e) {
            wx.redirectTo({
                url: "/pages/family-add/family-add"
            });
        }) : wx.showToast({
            title: "身份证号码不正确",
            icon: "none"
        });
    },
    img: function() {
        var e = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original" ],
            sourceType: [ "camera" ],
            success: function(t) {
                console.log(t);
                t.tempFilePaths[0];
                e.setData({
                    urll: t.tempFiles[0].path,
                    imgflag: 1
                }), wx.compressImage({
                    src: e.data.urll,
                    quality: 10,
                    success: function(t) {
                        wx.getFileInfo({
                            filePath: t.tempFilePath,
                            success: function(e) {
                                console.log(e.size);
                            }
                        }), e.base64({
                            url: t.tempFilePath,
                            type: "png"
                        }).then(function(t) {
                            console.log(t), e.setData({
                                familyIdentityImage: t
                            });
                        });
                    },
                    fail: function(e) {
                        console.log(e);
                    }
                });
            }
        });
    },
    base64: function(e) {
        var t = e.url, a = e.type;
        return new Promise(function(e, n) {
            wx.getFileSystemManager().readFile({
                filePath: t,
                encoding: "base64",
                success: function(t) {
                    e("data:image/" + a.toLocaleLowerCase() + ";base64," + t.data);
                },
                fail: function(e) {
                    return n(e.errMsg);
                }
            });
        });
    },
    isCardNo: function(e) {
        if (e = e.toUpperCase(), !/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(e)) return !1;
        var t, a;
        if (15 == (t = e.length)) {
            a = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
            s = e.match(a);
            if ((r = new Date("19" + s[2] + "/" + s[3] + "/" + s[4])).getYear() == Number(s[2]) && r.getMonth() + 1 == Number(s[3]) && r.getDate() == Number(s[4])) {
                var n = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2), i = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"), o = 0;
                for (e = e.substr(0, 6) + "19" + e.substr(6, e.length - 6), u = 0; u < 17; u++) o += e.substr(u, 1) * n[u];
                return e += i[o % 11], !0;
            }
            return !1;
        }
        if (18 == t) {
            a = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
            var s = e.match(a), r = new Date(s[2] + "/" + s[3] + "/" + s[4]);
            if (r.getFullYear() == Number(s[2]) && r.getMonth() + 1 == Number(s[3]) && r.getDate() == Number(s[4])) {
                var u, n = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2), i = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"), o = 0;
                for (u = 0; u < 17; u++) o += e.substr(u, 1) * n[u];
                return i[o % 11] == e.substr(17, 1);
            }
            return !1;
        }
        return !1;
    },
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {
        var e = this;
        n.realnameUser(this.data.userInfo.uid).then(function(t) {
            console.log(t), e.setData({
                uesrname: t.realnameAut.name,
                useridentity: t.realnameAut.identity,
                userphone: t.realnameAut.phone
            });
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});