function observer() {
                this.calcRotate();
}
function observer() {
                this.calcRotate();
}
function ready() {
        this.calcRotate();
}
function calcRotate() {
            var t, e, a = this.properties, o = a.current / a.total;
            1 === o ? (t = 45, e = 45) : o <= .5 ? (t = -135, e = 360 * o - 135) : (t = 360 * (o - .5) - 135, 
            e = 45), this.setData({
                leftRotateDeg: t,
                rightRotateDeg: e
            });
}
