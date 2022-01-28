Component({
    properties: {},
    data: {
        show: !1
    },
    methods: {
        handleStart: function() {
            console.log("start");
        },
        handleStop: function() {
            console.log("stop");
        },
        handleOpen: function() {
            this.setData({
                show: !0
            });
        },
        handleClose: function() {
            this.setData({
                show: !1
            });
        }
    }
});