var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), e = require("../../@babel/runtime/helpers/asyncToGenerator"), r = [], a = require("../../utils/util.js"), n = 1800, o = "";

function s(t) {
    var e, r, a, o;
    if (t.setData({
        clock: (r = n, a = r / 60, o = r % 60, "00:" + parseInt(a) + ":" + (e = o, e < 10 ? "0" + e : e))
    }), n <= 0) return t.setData({
        clock: "已经截止",
        isNotEnd: !1
    }), void t.dealEnd();
    setTimeout(function() {
        n -= 1, s(t);
    }, 1e3);
}

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
        isNotEnd: !0,
        correctRate: 0,
        timeConsume: null,
        total: 0
    },
    onLoad: function(t) {
        this.setData({
            isNotEnd: !0
        }), r = [], o = t.question, this.getQuestions(o), n = 1800, s(this);
    },
    onUnload: function() {
        this.init();
    },
    getQuestions: function(r) {
        var n = this;
        return e(t.default.mark(function e() {
            var o;
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return o = n, t.next = 3, a.showLoading();

                  case 3:
                    return t.next = 5, a.Http.asyncRequest("https://www.ngzyq.top/api/question/exercise", "GET", {
                        questionInfo: r
                    }, function(t) {
                        var e = t.data.length, r = t.data[0];
                        o.setData({
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
                    precent: ((t.data.current - 1) / t.data.questions.length * 100).toFixed(2)
                });
            } else t.data.current == t.data.questions.length && (t.data.current += 1, n = 0);
        }, 500)) : wx.showToast({
            title: "请选择答案",
            icon: "error",
            duration: 500
        });
    },
    earlySubmit: function() {
        n = 0;
    },
    dealEnd: function() {
        var t = wx.getStorageSync("userInfo");
        t.score += this.data.userScore;
        var e = t.level;
        (e = a.makeScoreToLevel(t.score)) !== t.level && (wx.showModal({
            title: "段位升级！",
            content: "恭喜您提升至" + e + "段位"
        }), t.level = e);
        var r = t.rank, n = t.totalRank;
        wx.request({
            url: "https://www.ngzyq.top/api/user/updateScore",
            method: "POST",
            timeout: 2e3,
            data: {
                openId: t.openId,
                level: e,
                rank: t.rank,
                score: t.score,
                workType: t.workType,
                department: t.department,
                realName: t.realName
            },
            success: function(t) {
                r = t.data.rank, n = t.data.totalRank;
            },
            fail: function(t) {
                wx.showToast({
                    title: "服务器错误",
                    icon: "error",
                    duration: 1e3
                }), console.log(t);
            },
            complete: function(e) {
                t.rank = r, t.totalRank = n, wx.setStorageSync("userInfo", t);
            }
        }), this.setData({
            current: this.data.current,
            precent: ((this.data.current - 1) / this.data.questions.length * 100).toFixed(2),
            userScore: this.data.userScore,
            userError: this.data.userError,
            correctRate: 100 * (this.data.userScore / this.data.total).toFixed(2),
            timeConsume: a.timeFormat((Date.now() - this.data.timeConsume) / 1e3)
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
    init: function() {
        r = [], wx.removeStorageSync("errorOptions");
    },
    redo: function(t) {
        this.getQuestions(o), this.init(), this.setData({
            userSelected: "",
            isChecked: !1,
            precent: 0,
            userScore: 0,
            userError: 0,
            isNotEnd: !0
        }), n = 1800, s(this);
    },
    gotoIndex: function(t) {
        this.init(), wx.switchTab({
            url: "/pages/index/index"
        });
    }
});