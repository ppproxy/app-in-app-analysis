function handleTap(e) {
            this.properties.disabled || (this.navigator(), this.triggerEvent("tap", e.detail));
}
