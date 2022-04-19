/**
 * @file 话题榜组件
 * @author liuchang61
 */
var TOPIC_TAG = {
    1: {
        tag: "新",
        tagClass: "new"
    },
    2: {
        tag: "热",
        tagClass: "hot"
    },
    3: {
        tag: "荐",
        tagClass: "recommend"
    },
    4: {
        tag: "爆",
        tagClass: "boom"
    },
    5: {
        tag: "沸",
        tagClass: "boiling"
    }
};

var objSource = "shoubai";

Component({
    properties: {
        topicList: {
            type: Array,
            value: [],
            observer: function observer(list) {
                var topicShowList = list.map(function(topic) {
                    var topic_name = topic.topic_name, topic_id = topic.topic_id, discuss_num = topic.discuss_num, tag = topic.tag;
                    var discussNum = (+discuss_num / 1e4).toFixed(1) + "W";
                    var topicTag = TOPIC_TAG[tag] || {};
                    return {
                        discussNum: discussNum,
                        topicTag: topicTag,
                        topicId: topic_id,
                        topicName: topic_name
                    };
                });
                this.setData({
                    topicShowList: topicShowList
                });
            }
        }
    },
    data: {
        trackInfo: {
            page: "pages/pb/pb"
        },
        topicShowList: []
    }
});