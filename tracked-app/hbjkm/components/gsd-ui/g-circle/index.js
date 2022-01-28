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
            var t = this.properties, e = void 0, o = void 0, a = t.current / t.total;
            1 === a ? (e = 45, o = 45) : a <= .5 ? (e = -135, o = 360 * a - 135) : (e = 360 * (a - .5) - 135, 
            o = 45), this.setData({
                leftRotateDeg: e,
                rightRotateDeg: o
            });
        }
    }
});