function linked() {
                console.log("insert"), this.setTimelineItemLast();
}
function unlinked() {
                console.log("changed"), this.setTimelineItemLast();
}
function ready() {
        this.setTimelineItemLast();
}
function getTimelineItems() {
            return this.getRelationNodes("../g-timeline-item/index");
}
function setTimelineItemLast() {
            this.getTimelineItems().forEach(function(e, t, i) {
                t === i.length - 1 ? e.setData({
                    _isLast: !0
                }) : e.setData({
                    _isLast: !1
                });
            });
}
