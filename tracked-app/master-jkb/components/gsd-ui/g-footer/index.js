Component({
    externalClasses: [ "component-class" ],
    properties: {
        fixed: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    methods: {
        goMessage: function() {
            wx.navigateTo({
                url: "/pages/jxzq/message/index"
            });
        }
    }
});