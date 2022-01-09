var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), e = require("../../@babel/runtime/helpers/asyncToGenerator"), r = [], a = require("../../utils/util.js"), n = "";

Page({
    data: {
        questions: [],
        userSelected: "",
        isChecked: !1,
        question: {},
        current: -1,
        precent: 0,
        userScore: 0,
        userError: 0,
        timeConsume: null,
        correctRate: 0,
        showAnswer: !1,
        total: 0
    },
    onLoad: function(t) {
        r = [], n = t.question, this.getQuestions(n);
    },
    onUnload: function() {
        this.init();
    },
    getQuestions: function(r) {
        var n = this;
        return e(t.default.mark(function e() {
            var s;
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return s = n, t.next = 3, a.showLoading();

                  case 3:
                    return t.next = 5, a.Http.asyncRequest("https://www.ngzyq.top/api/question/exercise", "GET", {
                        questionInfo: r
                    }, function(t) {
                        var e = t.data.length, r = t.data[0];
                        s.setData({
                            questions: t.data,
                            total: e,
                            question: r,
                            timeConsume: Date.now(),
                            current: 1
                        });
                    });

                  case 5:
                    return t.next = 7, a.hideLoading();

                  case 7:
                  case "end":
                    return t.stop();
                }
            }, e);
        }))();
    },
    radioChange: function(t) {
        this.setData({
            userSelected: t.detail.value
        });
    },
    submit: function() {
        var t = this, e = this.data.userSelected;
        e ? ("单选" === this.data.question.type || "判断" === this.data.question.type ? this.data.question.answer.indexOf(e) >= 0 ? this.dealRightOption() : this.dealErrorOption(e) : this.data.question.answer.sort().toString() === e.sort().toString() ? this.dealRightOption() : this.dealErrorOption(e), 
        setTimeout(function() {
            var e = t.data.total;
            if (t.data.current < e) {
                t.data.current += 1;
                var r = t.data.questions[t.data.current - 1];
                t.setData({
                    current: t.data.current,
                    question: r,
                    isChecked: t.data.isChecked,
                    showAnswer: !1,
                    precent: ((t.data.current - 1) / t.data.questions.length * 100).toFixed(2)
                });
            } else t.data.current == t.data.questions.length && (t.data.current += 1, t.setData({
                current: t.data.current,
                precent: ((t.data.current - 1) / t.data.questions.length * 100).toFixed(2),
                userScore: t.data.userScore,
                userError: t.data.userError,
                correctRate: 100 * (t.data.userScore / t.data.total).toFixed(2),
                timeConsume: a.timeFormat((Date.now() - t.data.timeConsume) / 1e3)
            }));
        }, 200)) : wx.showToast({
            title: "请选择答案",
            icon: "error",
            duration: 500
        });
    },
    dealRightOption: function() {
        this.data.userScore += 1, wx.showToast({
            title: "回答正确",
            icon: "success",
            duration: 500
        }), this.setData({
            userSelected: ""
        });
    },
    dealErrorOption: function(t) {
        this.data.userError += 1, wx.showToast({
            title: "回答错误",
            icon: "error",
            duration: 500
        }), this.setData({
            userSelected: ""
        });
        var e = this.data.question;
        e.userSelect = t, r.push(e);
    },
    getErrorOptions: function(t) {
        wx.setStorageSync("errorOptions", r), wx.navigateTo({
            url: "/pages/error/error"
        });
    },
    showAnswer: function() {
        this.setData({
            showAnswer: !0
        });
    },
    init: function() {
        r = [], wx.removeStorageSync("errorOptions");
    },
    redo: function(t) {
        this.getQuestions(n), this.init(), this.setData({
            userSelected: "",
            isChecked: !1,
            question: {},
            precent: 0,
            userScore: 0,
            userError: 0,
            showAnswer: !1
        });
    },
    gotoIndex: function(t) {
        this.init(), wx.switchTab({
            url: "/pages/index/index"
        });
    }
});