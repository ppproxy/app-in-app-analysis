Component({
    properties: {
        total: {
            type: Number,
            observer: function() {
                this.calcRotate();
            }
        },
        current: {
            type: Number,
            observer: function() {
                this.calcRotate();
            }
        },
        status: String
    },
    data: {
        leftRotateDeg: 45,
        rightRotateDeg: 45
    },
    ready: function() {
        this.calcRotate();
    },
    methods: {
        calcRotate: function() {
            var t, e, a = this.properties, o = a.current / a.total;
            1 === o ? (t = 45, e = 45) : o <= .5 ? (t = -135, e = 360 * o - 135) : (t = 360 * (o - .5) - 135, 
            e = 45), this.setData({
                leftRotateDeg: t,
                rightRotateDeg: e
            });
        }
    }
});