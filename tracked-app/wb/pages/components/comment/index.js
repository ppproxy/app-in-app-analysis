Component({
    properties: {
        comment: {
            type: Object,
            value: {}
        },
        currentReplyData: {
            type: Object,
            value: {}
        },
        hotFlowChild: {
            type: Object,
            value: {}
        },
        type: {
            type: String,
            value: "all"
        },
        mid: {
            type: Number,
            value: 0
        }
    },
    data: {},
    methods: {
        moreComment: function() {
            var e = "/pages/commentList/index?id=" + this.data.comment.id;
            wx.navigateTo({
                url: e,
                fail: function(t) {
                    t.errMsg && t.errMsg.indexOf("limit exceed") > -1 && wx.redirectTo({
                        url: e,
                        fail: function() {}
                    });
                }
            });
        },
        preview: function(e) {
            var t = "https://ww1.sinaimg.cn/large/" + e.currentTarget.dataset.id + ".jpg";
            wx.previewImage({
                current: t,
                urls: [ t ]
            });
        },
        tapContent: function(e) {
            var t = e.currentTarget.dataset.item;
            if ("topic" === t.tag) {
                var i = "/pages/comprehensiveSearch/index?q=" + t.content + "&page_from=comment";
                wx.navigateTo({
                    url: i,
                    fail: function(e) {
                        e.errMsg && e.errMsg.indexOf("limit exceed") > -1 && wx.redirectTo({
                            url: i,
                            fail: function() {}
                        });
                    }
                });
            }
        },
        goToMiniProgram: function(e) {
            wx.navigateToMiniProgram({
                appId: "wx9074de28009e1111",
                path: "/pages/index/index?blog_id=" + e.currentTarget.dataset.id,
                fail: function() {}
            });
        },
        viewrReplay: function(e) {
            var t = e.currentTarget.dataset, i = "/pages/commentList/index?id=" + t.id + "&mid=" + t.mid + "&type=replay&page_from=" + this.data.page_from;
            wx.navigateTo({
                url: i,
                success: function(e) {
                    e.eventChannel && e.eventChannel.emit("acceptDataFromOpenerPage", t.item);
                },
                fail: function(e) {
                    e.errMsg && e.errMsg.indexOf("limit exceed") > -1 && wx.redirectTo({
                        url: i,
                        fail: function() {}
                    });
                }
            });
        },
        gobackDetail: function() {
            wx.navigateBack({
                delta: -1,
                fail: function() {}
            });
        }
    }
});