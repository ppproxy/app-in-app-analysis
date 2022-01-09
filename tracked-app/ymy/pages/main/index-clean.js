function data() {
                return {
                    distributor: null,
                    alreadyRead: !1,
                    scenic: {}
                };
}
function onLoad(n) {}
function onShow() {
                this.loadScenic();
}
function onPullDownRefresh() {
                this.loadScenic();
}
function onShareAppMessage(n) {
                    return {
                        title: this.scenic.Name,
                        path: "/pages/main/index",
                        imageUrl: ""
                    };
}
function read() {
                    this.alreadyRead = !this.alreadyRead;
}
function buy() {
                    n.navigateTo({
                        url: "/pages/main/group"
                    });
}
function loadScenic() {
                    var e = this;
                    this.distributor = r.default.getDistributor(), this.distributor < 0 && (this.distributor = r.default.base_distributor), 
                    o.default.getScenic(parseInt(this.distributor), this.scenicId).then(function(t) {
                        n.stopPullDownRefresh(), t && t.success && t.data ? e.scenic = t.data : n.showToast({
                            title: t.message || "加载失败",
                            icon: "none",
                            duration: 2e3
                        });
                    }).catch(function(e) {
                        n.stopPullDownRefresh(), n.showToast({
                            title: "出错了，请检查网络连接",
                            icon: "none",
                            duration: 2e3
                        });
                    });
}
