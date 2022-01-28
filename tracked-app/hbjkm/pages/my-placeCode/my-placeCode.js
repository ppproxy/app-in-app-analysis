var e = getApp(), t = e.Anim, n = (e.Event, e.resetTab, e.config, e.dayjs, e.request, 
e.requestHb), i = (e.systemInfo, e.wxp, require("../../miniprogram_dist/poster/poster").Poster), o = require("../../services/health-code.js"), a = (require("../../services/map.js"), 
{
    width: 5953,
    height: 8419,
    backgroundColor: "#f5f5f5",
    debug: !1,
    pixelRatio: 1,
    blocks: [ {
        width: 5619,
        height: 8067,
        x: 167,
        y: 175,
        backgroundColor: "#fff"
    } ],
    texts: [ {
        x: 2976,
        y: 5689,
        fontSize: 250,
        baseLine: "middle",
        fontWeight: "bold",
        text: "微信、支付宝「扫一扫」",
        textAlign: "center",
        lineNum: 1,
        color: "#000",
        zIndex: 2
    }, {
        x: 2976,
        y: 6121,
        fontSize: 290,
        baseLine: "middle",
        fontWeight: "bold",
        text: "出示河北健康码",
        textAlign: "center",
        lineNum: 1,
        color: "#000",
        zIndex: 2
    }, {
        x: 2976,
        y: 6757,
        fontSize: 180,
        fontWeight: "bold",
        height: 112,
        baseLine: "middle",
        text: "",
        textAlign: "center",
        lineNum: 1,
        color: "#040101",
        zIndex: 2
    }, {
        x: 2976,
        y: 7100,
        fontSize: 140,
        fontWeight: "bold",
        baseLine: "middle",
        text: "",
        textAlign: "center",
        lineNum: 1,
        color: "#040101",
        zIndex: 2
    }, {
        x: 2976,
        y: 7400,
        fontSize: 100,
        baseLine: "middle",
        text: "更多服务可查看“冀时办”微信、支付宝小程序",
        textAlign: "center",
        lineNum: 1,
        color: "#040101",
        zIndex: 2
    }, {
        x: 2976,
        y: 7770,
        fontSize: 120,
        baseLine: "middle",
        textAlign: "center",
        text: "河北省应对疫情领导小组办公室监制",
        lineNum: 1,
        color: "#040101",
        zIndex: 2
    }, {
        x: 2976,
        y: 7970,
        fontSize: 120,
        baseLine: "middle",
        textAlign: "center",
        text: "河北省政务服务管理办公室建设",
        lineNum: 1,
        color: "#040101",
        zIndex: 2
    }, {
        x: 2976,
        y: 8170,
        fontSize: 120,
        baseLine: "middle",
        textAlign: "center",
        text: "腾讯公司/支付宝公司提供技术支持",
        lineNum: 1,
        color: "#040101",
        zIndex: 2
    } ],
    images: [ {
        width: 3600,
        height: 3600,
        x: 1172,
        y: 1300,
        borderRadius: 0,
        url: "",
        type: "base64",
        zIndex: 3
    }, {
        width: 5953,
        height: 8419,
        x: 0,
        y: 0,
        borderRadius: 0,
        type: "url",
        url: "https://wyy-1253323744.file.myqcloud.com/hbjkm/csmbjt/csm_bjt2.png",
        zIndex: 1
    } ]
});

t.Page({
    store: function(e) {
        return {
            isAuth: e.user.userInfo.isAuth,
            userInfo: e.user.userInfo,
            wllConfig: e.config.wllConfig
        };
    },
    data: {
        posterConfig: a
    },
    del: function() {
        var e = this;
        wx.showModal({
            title: "提示",
            content: "是否删除场所码",
            success: function(t) {
                t.confirm && n({
                    url: "/hbjkm-traffic-gate/trafficgate/del/" + e.data.userInfo.uid + "/" + e.data.id,
                    method: "POST"
                }).then(function(e) {
                    wx.redirectTo({
                        url: "/pages/place-code/place-code"
                    });
                });
            }
        });
    },
    onLoad: function(e) {
        var t = this;
        console.log(e);
        var i = e.gateName, a = e.address, r = e.carNo, s = e.gateType, d = e.name, l = (e.phone, 
        e.id);
        this.setData({
            address: a,
            carNo: r,
            gateType: s,
            name: d,
            gateName: i,
            id: l
        }), n({
            url: "/hbjkm-traffic-gate/trafficgate/getQRcode/" + this.data.id,
            method: "POST"
        }).then(function(e) {
            t.setData({
                url: "data:image/jpeg;base64," + e.data,
                url1: e.data
            });
        }), o.realnameUser(this.data.userInfo.uid).then(function(e) {
            t.setData({
                phone: e.realnameAut.phone,
                name: e.realnameAut.name
            });
        });
    },
    save: function() {
        var e = this.data, t = e.posterConfig, n = e.url1;
        console.log(t), t.images[0].url = n, t.texts[2].text = this.data.gateName, 2 != this.data.gateType ? t.texts[3].text = this.data.address : t.texts[3].text = this.data.carNo, 
        console.log(t), this.setData({
            posterConfig: t
        }, function() {
            i.create(!0);
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