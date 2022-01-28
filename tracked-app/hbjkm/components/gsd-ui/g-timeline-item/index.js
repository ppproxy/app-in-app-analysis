Component({
    relations: {
        "../g-timeline/index": {
            type: "parent"
        }
    },
    properties: {
        status: {
            type: String,
            value: "normal"
        }
    },
    data: {
        _isLast: !1
    },
    methods: {}
});