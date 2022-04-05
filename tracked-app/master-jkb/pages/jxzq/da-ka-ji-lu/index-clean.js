function tiwenfanwi(a, t) {
                return a >= 35 && a <= 42;
}
function onLoad(a) {
        this.getRecordList();
        var t = this;
        this.isClockIn(), wx.getSystemInfo({
            success: function(a) {
                console.log(a), t.setData({
                    systemInfo: a
                });
            }
        });
}
function onShow() {
        var a = i.userInfo;
        this.setData({
            userInfo: a
        });
}
function getRecordList() {
        var a = this;
        o({
            url: "/xiangzhu/jkb/healthy/clockInLog",
            method: "get"
        }).then(function(t) {
            console.log("打卡记录", t), a.setData({
                recordList: t.data || []
            });
        }).catch(function() {
            wx.hideLoading();
        });
}
function handleChange(a) {
        if (this.setData(t({}, "formData.".concat(a.target.id), a.detail.value)), "temperature" == a.target.id || "animalHeat" == a.target.id) if (console.log(a.detail.value), 
        this.data.formData.temperature >= 37.5 && this.data.formData.animalHeat >= 37.5) {
            var e, o = this.data.formData.checkboxA;
            o.push("1"), this.setData((t(e = {}, "formData.checkboxA", o), t(e, "checkItems[0]", {
                name: "发烧",
                value: "1",
                disabled: !0
            }), e)), console.log(this.data.formData.checkboxA, this.data.checkItems);
        } else if (this.data.formData.temperature >= 37.5 || this.data.formData.animalHeat >= 37.5) {
            var i, s = this.data.formData.checkboxA;
            s.push("1"), this.setData((t(i = {}, "formData.checkboxA", s), t(i, "checkItems[0]", {
                name: "发烧",
                value: "1",
                disabled: !0
            }), i)), console.log(this.data.formData.checkboxA, this.data.checkItems);
        } else {
            for (var n = this.data.formData.checkboxA, r = 0; r < n.length; r++) {
                var c;
                if ("1" == n[r]) n.splice(r, 1), this.setData((t(c = {}, "formData.checkboxA", n), 
                t(c, "checkItems[0]", {
                    name: "发烧",
                    value: "1"
                }), c));
            }
            console.log(this.data.formData.checkboxA, this.data.checkItems);
        }
}
function handleFormSubmit(t) {
        var e = this;
        if (t.detail.validStatus) {
            wx.showLoading({
                title: "加载中",
                mask: !0
            }), console.log(o), console.log(this.data.formData);
            var s, n = this.data.formData.checkboxA, r = [], c = a(n);
            try {
                for (c.s(); !(s = c.n()).done; ) {
                    var h = s.value;
                    1 == h ? r.push("发烧") : 2 == h ? r.push("咳嗽") : 3 == h && r.push("乏力");
                }
            } catch (a) {
                c.e(a);
            } finally {
                c.f();
            }
            var l = {
                bodyCondition: Array.from(new Set(r)).toString(),
                animalHeat: this.data.formData.temperature,
                temperature: this.data.formData.animalHeat,
                elseCondition: this.data.formData.textarea,
                idCard: i.userInfo.realIdCard || ""
            };
            o({
                url: "/xiangzhu/jkb/healthy/clockIn",
                method: "POST",
                data: l
            }).then(function(a) {
                wx.hideLoading(), console.log(a), wx.showToast({
                    title: "打卡成功",
                    icon: "success",
                    duration: 2e3
                }), e.setData({
                    show: !0,
                    xian: "今日已打卡"
                }), e.getRecordList();
            }).catch(function(a) {
                wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: a.errmsg,
                    showCancel: !1
                });
            });
        }
}
function isClockIn() {
        var a = this;
        o({
            url: "/xiangzhu/jkb/healthy/isClockIn",
            method: "get"
        }).then(function(t) {
            1 == t.state ? a.setData({
                xian: "今日已打卡",
                show: !0
            }) : a.setData({
                xian: "打卡",
                show: !1
            });
        }).catch(function() {
            wx.hideLoading();
        });
}
