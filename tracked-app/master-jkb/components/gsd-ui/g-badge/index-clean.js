function observer(o) {
                this.isShowOverflowCount(o);
}
function isShowOverflowCount(o) {
            "number" == typeof o && o >= this.properties.overflowCount ? this.setData({
                showOverflowCount: !0
            }) : this.setData({
                showOverflowCount: !1
            });
}
