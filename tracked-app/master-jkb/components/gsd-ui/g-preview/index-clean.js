function ready() {
        this.setAllItemsTextAlign();
}
function getPreviewItems() {
            return this.getRelationNodes("../g-preview-item/index");
}
function setAllItemsTextAlign() {
            var e = this;
            this.getPreviewItems().forEach(function(t) {
                t.setPreviewItem({
                    _textAlign: e.properties.textAlign,
                    _labelWidth: e.properties.labelWidth
                });
            });
}
