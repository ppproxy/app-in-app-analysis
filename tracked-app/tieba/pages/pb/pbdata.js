Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = {
    pbPagedata: {
        user: {},
        // 用户id
        floorDatas: null,
        // pb 渲染数据
        placeholderTxt: "说说你的看法",
        // 回复对象
        inputValue: "",
        // 表单input值
        audioStatus: "stop",
        // 播放状态
        failFetchData: false,
        // 数据加载失败
        isShowBawuDeleteDialog: false,
        // 吧务的弹窗
        isShowPageJumpDialog: false,
        // 跳页的弹窗
        isShowModal: false,
        // 是否展示蒙层
        jumpPageNum: 1,
        // 跳到哪一页
        antiReason: [],
        // 吧务删贴理由
        viewScrollTop: 0,
        // 记录浏览位置
        isShowNextForum: true,
        danMuInfo: [],
        msgCount: 0,
        // 新消息数
        targetId: 0,
        // 飘黄目标楼
        mainFloor: "",
        isIphoneX: false,
        isShowOpenApp: false,
        errorMsg: "",
        tid: "",
        release: false,
        pid: "",
        isCollect: "",
        startAnimation: false,
        recommendShow: false,
        replyNum: 0,
        showContact: false,
        isOpenApp: false,
        bawuItemList: [ {
            key: "remove",
            value: "删贴"
        }, {
            key: "cancle",
            value: "取消"
        } ],
        showDialog: false,
        isSortModal: false,
        // 排序弹窗
        isProThread: false,
        thirdRecomAdParams: {},
        showmask: false,
        hideDiversionPadding: false,
        videoH: 210
    },
    pbPageInfo: {
        user: {},
        bduss: "",
        fname: "",
        // 吧名
        floor: "",
        // 楼层
        hasMore: true,
        // 是否还有更多数据
        scrollTop: 0,
        // 页面移动高度
        viewScrollTop: 0,
        // 记录发贴前的浏览位置
        swanShareImg: null,
        // 分享图片
        enterTime: 0,
        hasGodPost: false,
        scrolltype: "handscroll",
        adsTrackOnce: true,
        // 广告打点首次标记
        jumpPageControl: false
    }
};