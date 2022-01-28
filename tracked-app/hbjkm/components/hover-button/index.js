Component({
    externalClasses: [ "add_icon" ],
    options: {
        styleIsolation: "shared"
    },
    properties: {
        imgSrc: {
            type: String,
            value: ""
        },
        pdfUrl: {
            type: String,
            value: ""
        },
        fileName: {
            type: String,
            value: ""
        }
    },
    data: {},
    methods: {
        adddetial: function() {
            var e = this.data.pdfUrl, t = this.data.fileName, a = wx.env.USER_DATA_PATH + "/" + t;
            wx.showLoading(), wx.downloadFile({
                url: e,
                filePath: a,
                fileName: t,
                success: function(e) {
                    var t = e.filePath;
                    wx.openDocument({
                        filePath: t,
                        fileType: "pdf",
                        success: function() {
                            wx.hideLoading();
                        }
                    });
                }
            });
        }
    }
});