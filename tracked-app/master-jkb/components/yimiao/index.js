Component({
    properties: {
        ymData: {
            type: Object,
            value: {},
            observer: function(t, o) {
                console.log(o, t, 0x6f291423a38e);
            }
        }
    },
    data: {
        isno: !1
    },
    methods: {
        tan: function() {
            this.setData({
                isno: !this.data.isno
            }), console.log(this.data.isno);
        }
    }
});