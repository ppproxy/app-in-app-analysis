function handleTap(t) {
            var e = t.currentTarget.dataset.index;
            this.setData({
                _current: e
            }), this.triggerEvent("selected", t.currentTarget.dataset.index);
}
