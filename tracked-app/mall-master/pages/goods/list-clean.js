function onLoad(options) {
    this.setData({
      name: options.name,
      categoryId: options.categoryId
    })
    this.search()
    this.readConfigVal()
    // 补偿写法
    getApp().configLoadOK = () => {
      this.readConfigVal()
    }
}
function onShow() {

}
