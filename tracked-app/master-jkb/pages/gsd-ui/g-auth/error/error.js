Page({
    data: {
        failAuth: {
            text: "生物认证",
            url: "/pages/gsd-ui/g-auth-soter/g-auth-soter"
        },
        otherAuth: {
            text: "人脸识别",
            url: "/pages/gsd-ui/g-auth-face/g-auth-face"
        }
    },
    onLoad: function(t) {
        console.log("g-auth-error 页面配置", t);
    },
    handleFace: function() {
        wx.navigateBack({
            delta: 1
        });
    }
});