getApp().sdk;

Page({
    data: {
        webUrl: ""
    },
    onLoad: function(t) {
        var e = "https://xc.caict.ac.cn/?code=116&phone=" + t.phone;
        console.log("h5 url: ", e), this.setData({
            webUrl: e
        }), console.log(this.data.webUrl);
    }
});