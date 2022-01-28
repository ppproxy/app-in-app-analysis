Component({
    relations: {
        "../g-timeline-item/index": {
            type: "child",
            linked: function() {
                console.log("insert"), this.setTimelineItemLast();
            },
            unlinked: function() {
                console.log("changed"), this.setTimelineItemLast();
            }
        }
    },
    properties: {
        pending: {
            type: Boolean
        }
    },
    ready: function() {
        this.setTimelineItemLast();
    },
    data: {},
    methods: {
        getTimelineItems: function() {
            return this.getRelationNodes("../g-timeline-item/index");
        },
        setTimelineItemLast: function() {
            this.getTimelineItems().forEach(function(e, t, i) {
                t === i.length - 1 ? e.setData({
                    _isLast: !0
                }) : e.setData({
                    _isLast: !1
                });
            });
        }
    }
});