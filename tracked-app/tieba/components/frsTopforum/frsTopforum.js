/**
 * @file 置顶帖
 */
Component({
    properties: {
        topLists: {
            type: Array,
            value: [],
            observer: function observer(newV, oldV) {
                var baseArray = newV;
                var len = baseArray.length;
                var n = 2;
                // 假设每行显示4个
                                var lineNum = len % n === 0 ? len / n : Math.floor(len / n + 1);
                var res = [];
                for (var i = 0; i < lineNum; i++) {
                    var temp = baseArray.slice(i * n, i * n + n);
                    res.push(temp);
                }
                this.setData({
                    topList: res
                });
            }
        },
        fontcolor: {
            type: String,
            value: "2B80FF"
        }
    },
    data: {
        currIndex: 0,
        topList: []
    },
    methods: {
        move: function move(e) {
            var index = e.detail.current;
            var arrAllLen = this.data.topList.length;
            var currentLen = this.data.topList[index] && this.data.topList[index].length || 0;
            this.setData({
                currIndex: e.detail.current
            });
            this.triggerEvent("itemSwiper", {
                arrAllLen: arrAllLen,
                currentLen: currentLen
            });
        },
        clickThread: function clickThread(e) {
            this.triggerEvent("clickThread", e);
        }
    }
});