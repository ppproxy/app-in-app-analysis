function handleTapTitle(e) {
            this.properties.disabled || (this.navigator(), this.triggerEvent("tapTitle", e.currentTarget));
}
