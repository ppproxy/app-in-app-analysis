function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = getApp(), e = (a.request, a.requestHb), s = a.wxp, o = a.config;

Page({
    data: {
        healthyReport: "",
        allHealthyReportPerProvinceOne: "",
        xcgjAllListString: "",
        people: "",
        rjmj: "",
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
        rjry: "",
        temperature: "",
        isnull: !0,
        this_province: !1
    },
    go: function() {
        wx.navigateTo({
            url: "../../pages/suggest/suggest"
        });
    },
    goto: function() {
        wx.navigateTo({
            url: "../../pages/seefamilyreport/seefamilyreport?report=" + this.data.yqReports
        });
    },
    onLoad: function(a) {
        var n = this, r = this;
        e({
            url: "/hbjkm/familyHealth/info/" + a.familyid,
            method: "POST"
        }).then(function(a) {
            console.log(a), r.setData({
                hsjc: a.data.hsjc.hsjcjg,
                hsjcjg: a.data.hsjc.hsjcjgmc,
                hsjcsj: a.data.hsjc.hsjcsj,
                ktjc: a.data.ktjc.ktjcjg,
                ktjcjg: a.data.ktjc.ktjcjgmc,
                ktjcsj: a.data.ktjc.ktjcsj
            }), r.setData({
                yqReports: JSON.stringify(JSON.parse(a.data.content).data.yqReports)
            });
            var e = JSON.parse(a.data.content).data.healthyReport;
            if (e.forEach(function(a, e) {
                console.log("00" == a.healthyStaus), "00" == a.healthyStaus ? (a.healthyStaus = "低风险", 
                console.log(a.healthyStaus)) : "01" == a.healthyStaus ? a.healthyStaus = "中风险" : a.healthyStaus = "高风险";
                r.setData(t({}, "elem.healthyStaus", a.healthyStaus));
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
                }), "boolean" == typeof a.data.isrjry ? 1 == a.data.isrjry ? r.setData({
                    rjry: "是"
                }) : 0 == a.data.isrjry && r.setData({
                    rjry: "否"
                }) : r.setData({
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
                    var i = JSON.parse(a.data.content).data.yqReports[0].symptom.split("^");
                    i.forEach(function(t, a) {
                        1 == t ? i[a] = "没有出现症状" : 2 == t ? i[a] = "感冒样症状:乏力，咳嗽，发烧，肌肉痛，头痛" : 3 == t ? i[a] = "喘憋，呼吸急促" : 4 == t ? i[a] = "恶心呕吐，腹泻" : 5 == t ? i[a] = "心慌，胸闷" : 6 == t ? i[a] = "结膜炎(红眼病样表现:眼睛涩，红，分泌物)" : 7 == t && (i[a] = "其他症状");
                    }), console.log(i);
                    var c = "";
                    i.forEach(function(t, a) {
                        1 == i.length ? c += t : a == i.length - 1 ? c += t : c += t + ",";
                    }), n.setData({
                        symptom: c
                    });
                } else n.setData({
                    isnull: !1,
                    symptom: "--"
                });
                if (console.log(JSON.parse(a.data.content).data), console.log(a.data.xcgjAllList), 
                n.setData({
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
                }), n.data.warmMsgs[0] && "{" == n.data.warmMsgs[0].split("")[0]) {
                    var d = n.data.warmMsgs[0].split("")[1];
                    s.request({
                        url: o.cdnDomain + "/hbjkm/flts/" + d + ".json"
                    }).then(function(t) {
                        n.setData({
                            this_province: !0,
                            warmMsgs: t.data.tsxx,
                            warmprompt: t.data.wxtx
                        });
                    });
                }
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