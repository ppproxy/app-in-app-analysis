function onLoad(options) {
    this.data.status = options.status
    if (this.data.status == -1) {
      timer =setInterval(() => {
        this.peisongOrdersGrabbing()
      }, 1000)
    }
}
function onShow() {
    if (this.data.status != -1) {
      this.orders()
    }
}
