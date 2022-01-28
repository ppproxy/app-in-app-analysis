Component({
    relations: {
        "../g-preview-item/index": {
            type: "child"
        }
    },
    properties: {
        type: {
            type: String,
            value: "normal"
        },
        textAlign: {
            type: String,
            value: "left"
        },
        labelWidth: Number
    },
    data: {},
    ready: function() {
        this.setAllItemsTextAlign();
    },
    methods: {
        getPreviewItems: function() {
            return this.getRelationNodes("../g-preview-item/index");
        },
        setAllItemsTextAlign: function() {
            var e = this;
            this.getPreviewItems().forEach(function(t) {
                t.setPreviewItem({
                    _textAlign: e.properties.textAlign,
                    _labelWidth: e.properties.labelWidth
                });
            });
        }
    }
});