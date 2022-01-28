function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
}, a = getApp(), n = a.Anim, r = a.request, i = a.dayjs, o = a.utils, l = {
    0: "处理中",
    1: "进行中",
    2: "已办结"
}, s = {
    1: "中国大陆",
    2: "中国港澳台地区",
    3: "外国"
}, c = {
    1: "河北",
    3: "湖北省",
    4: "其他"
}, d = {
    1: "身份证",
    3: "护照",
    4: "军官证",
    8: "港澳居民来往内地通行证",
    9: "台湾居民来往内地通行证",
    6: "港澳居民居住证",
    7: "台湾居民居住证",
    11: "出入境通行证"
}, u = {
    1: "是，在河北居住了已有半年以上",
    2: "否，我是临时来河北的"
}, y = {
    1: "一直在河北3个月或以上",
    2: "来/返回河北超过14日",
    3: "来/返回河北不超过14日（含14日）",
    4: "目前仍在外地"
}, h = {
    1: "武汉市",
    2: "湖北(不含武汉)",
    4: "中国大陆其他省(自治区)市",
    3: "中国港澳台地区",
    5: "国外",
    6: "温州市"
}, p = {
    1: "未返穗本地常住居民",
    2: "持续在穗人员",
    3: "一月初返穗居民",
    4: "一月初来穗人员",
    5: "一月中返穗居民",
    6: "一月中来穗人员",
    11: "居家医学观察人员",
    12: "集中医学观察人员"
}, f = {
    1: "14日内密切接触近期有湖北旅居史者",
    2: "自我感觉14日内曾与患者接触过者",
    11: "14日内在湖北旅游居住过的人员",
    12: "14日内曾接触疑似患者",
    13: "14日内其他地方来或返回河北人员",
    14: "其他人员"
}, m = {
    1: "正常活动",
    2: "居家健康服务",
    3: "集中健康服务",
    4: "集中医学观察"
}, b = {
    1: "自觉正常",
    2: "发热",
    3: "干咳",
    4: "乏力",
    5: "腹泻",
    6: "感冒",
    7: "头疼头晕",
    11: "发热，37.3 ℃以下",
    12: "发热37.3 ℃（含）以上",
    13: "干咳",
    14: "乏力",
    15: "其它症状"
}, D = {
    0: "否",
    1: "是"
}, k = [ {
    label: "编号",
    key: "id"
}, {
    label: "报告状态",
    key: "statusStr"
}, {
    label: "姓名",
    key: "username"
}, {
    label: "性别",
    key: "gender"
}, {
    label: "手机号码",
    key: "phone"
}, {
    label: "证件类型",
    key: "identityTypeStr"
}, {
    label: "证件号码",
    key: "identity"
}, {
    label: "国籍/地区",
    key: "nationStr"
}, {
    label: "户籍所在地",
    key: "domicilePlaceStr"
}, {
    label: "籍贯",
    key: "nativePlace"
}, {
    label: "居住地址",
    key: "address"
}, {
    label: "详细地址",
    key: "addr"
} ], g = [ {
    label: "是否常住河北",
    key: "residentFlagStr"
}, {
    label: "近期是否在河北",
    key: "residentConditionStr"
}, {
    label: "来或返回河北日期",
    key: "returnDate"
}, {
    label: "目前所在地",
    key: "recentRegionName"
}, {
    label: "拟返回河北日期",
    key: "quasiReturnDate"
}, {
    label: "近一个月旅居史",
    key: "travelRegionClassStr"
}, {
    label: "近期接触史",
    key: "socialContactStr"
}, {
    label: "14日内密切接触日期",
    key: "contactDateRecent"
}, {
    label: "14日内感觉接触日期",
    key: "contactDateLike"
}, {
    label: "个人健康状态",
    key: "healthStateStr"
}, {
    label: "症状列表",
    key: "symptomTypeStr"
}, {
    label: "其它症状",
    key: "symptomDscr"
} ], S = [ {
    label: "姓名",
    key: "clueSupplier"
}, {
    label: "联系电话",
    key: "clueSupplierPhone"
} ], C = [ {
    label: "姓名",
    key: "username"
}, {
    label: "性别",
    key: "gender"
}, {
    label: "联系电话",
    key: "phone"
}, {
    label: "居住地址",
    key: "street"
}, {
    label: "详细住址",
    key: "addr"
}, {
    label: "关联车牌",
    key: "clueVehicle"
}, {
    label: "涉事人类型",
    key: "socialContact11Str"
}, {
    label: "来或返回河北日期",
    key: "returnDate"
}, {
    label: "涉事人类型",
    key: "socialContact12Str"
}, {
    label: "来或返回河北日期",
    key: "contactDateRecent"
}, {
    label: "涉事人类型",
    key: "socialContact13Str"
}, {
    label: "来或返回河北日期",
    key: "quasiReturnDate"
}, {
    label: "涉事人类型",
    key: "socialContact14Str"
} ], T = [ {
    label: "反映详细内容",
    key: "symptomDscr"
} ];

n.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        formData: {
            content: ""
        },
        rules: {
            content: [ {
                type: "required",
                message: "请输入回复内容"
            } ]
        },
        message: {
            addr: "",
            area: "",
            dscr: "",
            id: 0,
            itemList: [],
            phone: "",
            report: "",
            reportName: "",
            reportType: 0,
            status: 0,
            username: ""
        },
        keyMap: k,
        keyMapOther: g,
        reporterKeyMap: S,
        reportedKeyMap: C,
        reportContentKeyMap: T,
        query: {}
    },
    onLoad: function(e) {
        this.setData({
            query: e
        }), this.statusChange(), this.fetchData(e), this.handleTodoType(e.todoType);
    },
    handleTodoType: function() {
        if ("report" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.query.todoType)) {
            var e = k.map(function(e) {
                return "姓名" === e.label ? t({}, e, {
                    label: "涉事人"
                }) : e;
            });
            this.setData({
                keyMap: e
            });
        }
    },
    onChangeForm: function(t) {
        this.setData(e({}, "formData." + t.target.id, t.detail.value));
    },
    fetchData: function(e) {
        var t = this;
        wx.showLoading({
            title: "努力加载中..."
        });
        var a = void 0;
        return console.log("query", e), a = "affair" === e.todoType ? 0 != +e.reportType ? "/usercenter/affair/detail?affairId=" + e.id : "/usercenter/affair/detailForPneumonia?affairId=" + e.id : "/usercenter/report/detailForPneumonia?reportId=" + e.id, 
        r({
            url: a
        }).then(function(e) {
            if (wx.hideLoading(), console.log("getCheckSelfInfo", e), e.identityTypeStr = d[e.identityType], 
            e.personTypeStr = p[e.personType], e.username = e.username || "-", e.symptomTypeStr = e.symptomList && e.symptomList.map(function(e) {
                return b[e];
            }).join(", "), e.socialContact = e.socialContact || "", e.socialContactStr = e.socialContact && e.socialContact.split(",").map(function(e) {
                return f[e];
            }).join(", "), e.socialContact) {
                var a = e.socialContact.split(",");
                [ "11", "12", "13", "14" ].map(function(t) {
                    a.indexOf(t) > -1 && (e["socialContact" + t + "Str"] = f[t]);
                });
            }
            e.healthState = e.healthState || "", e.healthStateStr = e.healthState && m[e.healthState], 
            e.nationStr = s[e.isChinese] || "", e.domicilePlaceStr = c[e.domicilePlace] || "", 
            e.residentFlagStr = u[e.residentFlag] || "", e.residentConditionStr = y[e.residentCondition] || "", 
            e.travelRegionClassStr = h[e.travelRegionClass] || "", e.returnDate = e.returnDate ? i(e.returnDate).format("YYYY/MM/DD") : "", 
            e.quasiReturnDate = e.quasiReturnDate ? i(e.quasiReturnDate).format("YYYY/MM/DD") : "", 
            e.contactDateRecent = e.contactDateRecent ? i(e.contactDateRecent).format("YYYY/MM/DD") : "", 
            e.contactDateLike = e.contactDateLike ? i(e.contactDateLike).format("YYYY/MM/DD") : "", 
            e.recentInHubeiStr = D[e.recentInHubei], e.itemList && e.itemList.forEach(function(e) {
                e.commitTime = e.commitTime && i(e.commitTime).format("YYYY/MM/DD HH:mm"), e.commiterName = e.commiterName || "管理员";
            }), e.address = e.city && e.area && e.street && "" + e.city + e.area + e.street + e.community, 
            e.statusStr = l[e.status], e.identity = e.identity && o.hideIdCard(e.identity), 
            1 == e.residentCondition && (e.travelRegionClassStr = ""), t.setData({
                message: e
            });
        }).catch(function(e) {
            wx.hideLoading(), console.log("err", e);
        });
    },
    handleTodoTap: function(e) {
        var t = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: t
        });
    },
    statusChange: function() {
        switch (this.data.message.status) {
          case "warn":
            this.setData({
                statusColor: "#f13939"
            });
            break;

          case "wait":
            this.setData({
                statusColor: "#009E7E"
            });
            break;

          case "success":
            this.setData({
                statusColor: "#1DC350"
            });
        }
    },
    tabChange: function(e) {
        this.setData({
            activeKey: e.detail.value.key
        });
    },
    onTapReply: function(e) {
        var t = this;
        console.log(e);
        var a = e.detail, n = a.validStatus, i = a.value;
        n && (wx.showLoading({
            title: "努力加载中..."
        }), r({
            url: "/usercenter/affair/reply",
            method: "POST",
            data: {
                affairId: this.data.query.id,
                content: i.content
            }
        }).then(function() {
            wx.hideLoading(), t.setData({
                "formData.content": ""
            }), t.fetchData(t.data.query);
        }).catch(function(e) {
            wx.hideLoading();
        }));
    },
    onTapDone: function() {
        var e = this;
        wx.showLoading({
            title: "努力加载中..."
        }), this.data.formData.content ? r({
            url: "/usercenter/affair/finish",
            method: "POST",
            data: {
                affairId: this.data.query.id,
                content: this.data.formData.content
            }
        }).then(function() {
            wx.hideLoading(), e.setData({
                "formData.content": ""
            }), e.fetchData(e.data.query);
        }).catch(function(e) {
            wx.hideLoading();
        }) : wx.showToast({
            title: "请输入回复内容"
        });
    },
    handleTap: function() {
        console.log(1);
    },
    onTapAccess: function() {
        var e = this.data.message.clueType || 0, t = "";
        t = 1 == e ? "/pages/report/inform/index" : 2 == e ? "/pages/report/index/index?type=2" : "/pages/report/index/index?type=1", 
        wx.navigateTo({
            url: t
        });
    }
});