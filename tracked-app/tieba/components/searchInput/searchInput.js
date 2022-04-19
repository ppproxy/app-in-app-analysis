/**
 * @file 搜索页的输入框组件
 */
Component({
    properties: {
        searchKey: {
            type: String,
            value: ""
        },
        from: {
            type: String,
            value: ""
        }
    },
    data: {
        showSelect: false,
        selectRes: "全吧",
        selects: [ {
            name: "全吧"
        }, {
            name: "本吧"
        } ]
    },
    methods: {
        onSug: function onSug(e) {
            this.triggerEvent("onSug", e.detail.value);
        },
        onSearch: function onSearch(e) {
            this.triggerEvent("onSearch", e.detail.value);
        },
        clearInput: function clearInput() {
            this.triggerEvent("clearInput");
        },
        cancelSearch: function cancelSearch(e) {
            this.triggerEvent("cancelSearch", e.detail);
        },
        toggleSelect: function toggleSelect() {
            this.setData({
                showSelect: !this.data.showSelect
            });
        },
        selectItem: function selectItem(e) {
            var name = e.currentTarget.dataset.item.name;
            this.setData({
                selectRes: name,
                showSelect: false
            });
            this.triggerEvent("selectItem", name);
        }
    }
});