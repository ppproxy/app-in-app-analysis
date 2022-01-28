function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = getApp(), e = (a.Anim, a.request, a.requestHb);

a.dayjs, a.wxp, a.config, a.utils, a.userStore;

Page({
    data: {
        show: !1,
        healthyReport: "",
        allHealthyReportPerProvinceOne: "",
        xcgjAllListString: "",
        people: "",
        rjmj: "",
        rjry: "",
        hasWarm: "",
        warnType: "",
        flag: 2,
        time: "",
        area: "",
        phone: "",
        xzqhfxdj: "",
        isGoHubei: "",
        isGoHubeiWH: "",
        isEpidemicAreaRisk: "",
        isContactPatient: "",
        symptom: "",
        temperature: "",
        isnull: !0,
        name: "",
        desensitizeCardId: ""
    },
    go: function() {
        wx.navigateTo({
            url: "../../pages/suggest/suggest"
        });
    },
    onLoad: function(a) {
        var s = a.bizExtData, n = this;
        e({
            url: "/hbjkm/userHealth/validateInfo",
            method: "POST",
            data: {
                bizExtData: s
            }
        }).then(function(a) {
            n.setData({
                hsjc: a.data.hsjc.hsjcjg,
                ktjc: a.data.ktjc.ktjcjg
            });
            var e = JSON.parse(a.data.content).data.healthyReport;
            if (e.forEach(function(a, e) {
                console.log("00" == a.healthyStaus), "00" == a.healthyStaus ? (a.healthyStaus = "低风险", 
                console.log(a.healthyStaus)) : "01" == a.healthyStaus ? a.healthyStaus = "中风险" : a.healthyStaus = "高风险";
                n.setData(t({}, "elem.healthyStaus", a.healthyStaus));
            }), a.data.xcgjAllList.forEach(function(t, a) {
                t.date = t.date.substring(0, 10);
            }), 0 != a.errcode) wx.showModal({
                title: "提示",
                content: "当前用户过多，请稍后重试",
                showCancel: !1,
                success: function(t) {
                    t.confirm && wx.navigateBack({
                        delta: 1
                    });
                }
            }); else {
                if ("未见异常" == a.data.hasWarm ? n.setData({
                    flag: 1
                }) : n.setData({
                    flag: 0
                }), "boolean" == typeof a.data.isrjry ? 1 == a.data.isrjry ? n.setData({
                    rjry: "是"
                }) : 0 == a.data.isrjry && n.setData({
                    rjry: "否"
                }) : n.setData({
                    rjry: "--"
                }), JSON.parse(a.data.content).data.yqReports[0] ? 1 == JSON.parse(a.data.content).data.yqReports[0].xzqhfxdj ? n.setData({
                    xzqhfxdj: "低风险"
                }) : 2 == JSON.parse(a.data.content).data.yqReports[0].xzqhfxdj ? n.setData({
                    xzqhfxdj: "中风险"
                }) : 3 == JSON.parse(a.data.content).data.yqReports[0].xzqhfxdj && n.setData({
                    xzqhfxdj: "高风险"
                }) : n.setData({
                    isnull: !1,
                    xzqhfxdj: "--"
                }), JSON.parse(a.data.content).data.yqReports[0] ? 1 == JSON.parse(a.data.content).data.yqReports[0].isGoHubeiWH ? n.setData({
                    isGoHubeiWH: "是"
                }) : 2 == JSON.parse(a.data.content).data.yqReports[0].isGoHubeiWH && n.setData({
                    isGoHubeiWH: "否"
                }) : n.setData({
                    isGoHubeiWH: "--"
                }), JSON.parse(a.data.content).data.yqReports[0] ? 1 == JSON.parse(a.data.content).data.yqReports[0].isEpidemicAreaRisk ? n.setData({
                    isEpidemicAreaRisk: "是"
                }) : 2 == JSON.parse(a.data.content).data.yqReports[0].isEpidemicAreaRisk && n.setData({
                    isEpidemicAreaRisk: "否"
                }) : n.setData({
                    isEpidemicAreaRisk: "--"
                }), JSON.parse(a.data.content).data.yqReports[0] ? 1 == JSON.parse(a.data.content).data.yqReports[0].isContactPatient ? n.setData({
                    isContactPatient: "是"
                }) : 2 == JSON.parse(a.data.content).data.yqReports[0].isContactPatient ? n.setData({
                    isContactPatient: "否"
                }) : 3 == JSON.parse(a.data.content).data.yqReports[0].isContactPatient && n.setData({
                    isContactPatient: "不确定"
                }) : n.setData({
                    isContactPatient: "--"
                }), JSON.parse(a.data.content).data.yqReports[0]) {
                    var s = JSON.parse(a.data.content).data.yqReports[0].symptom.split("^");
                    s.forEach(function(t, a) {
                        1 == t ? s[a] = "没有出现症状" : 2 == t ? s[a] = "感冒样症状:乏力，咳嗽，发烧，肌肉痛，头痛" : 3 == t ? s[a] = "喘憋，呼吸急促" : 4 == t ? s[a] = "恶心呕吐，腹泻" : 5 == t ? s[a] = "心慌，胸闷" : 6 == t && (s[a] = "结膜炎(红眼病样表现:眼睛涩，红，分泌物)");
                    }), console.log(s);
                    var o = "";
                    s.forEach(function(t, a) {
                        1 == s.length ? o += t : a == s.length - 1 ? o += t : o += t + ",";
                    }), n.setData({
                        symptom: o
                    });
                } else n.setData({
                    isnull: !1,
                    symptom: "--"
                });
                n.setData({
                    name: JSON.parse(a.data.content).data.person.desensitizeName,
                    desensitizeCardId: JSON.parse(a.data.content).data.person.desensitizeCardId,
                    healthyReport: e,
                    allHealthyReportPerProvinceOne: a.data.allHealthyReportPerProvinceOne,
                    xcgjAllListString: a.data.xcgjAllList,
                    warmMsgs: a.data.warmMsgs,
                    rjmj: a.data.rjmj,
                    hasWarm: a.data.hasWarm,
                    warnType: a.data.warnType,
                    time: JSON.parse(a.data.content).data.yqReports[0] ? JSON.parse(a.data.content).data.yqReports[0].date : "--",
                    area: JSON.parse(a.data.content).data.yqReports[0] ? JSON.parse(a.data.content).data.yqReports[0].city : "--",
                    phone: JSON.parse(a.data.content).data.yqReports[0] ? JSON.parse(a.data.content).data.yqReports[0].phone : "--",
                    temperature: JSON.parse(a.data.content).data.yqReports[0] ? JSON.parse(a.data.content).data.yqReports[0].temperature : "--",
                    people: JSON.parse(a.data.content).data.rjmj ? JSON.parse(a.data.content).data.rjmj.bingli : "--"
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});