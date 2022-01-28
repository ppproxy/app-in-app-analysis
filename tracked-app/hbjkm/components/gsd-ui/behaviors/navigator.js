module.exports = Behavior({
    properties: {
        to: {
            type: String,
            value: ""
        },
        toType: {
            type: String,
            value: "to"
        }
    },
    data: {},
    methods: {
        navigator: function() {
            var t = this.properties, e = t.to, r = t.toType;
            if (!e) return !1;
            "to" === r && wx.navigateTo({
                url: e
            }), "redirect" === r && wx.redirectTo({
                url: e
            }), "switch" === r && wx.switchTab({
                url: e
            }), "reLaunch" === r && wx.reLaunch({
                url: e
            });
        }
    }
});