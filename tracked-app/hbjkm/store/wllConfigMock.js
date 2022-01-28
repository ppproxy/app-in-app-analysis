module.exports = {
    buy_type: "lot",
    feedback_open: 1,
    buy_feedback_open: 1,
    personal_center_info: {
        is_open: 1,
        tips: "结果将在每晚8点提交预约申请后显示，可能稍有延迟，请耐心等候。"
    },
    home_notice: {
        is_open: 1,
        title: "重要通知",
        text: "1111尊敬的广州市民以及来穗的朋友：目前，正值防控新型肺炎的关键时期，请大家齐心协力、共克时艰，通过“穗康”微信小程序主动申报离（返）穗情况和健康状况，我们将对主动申报14天之内来自湖北或曾到过湖北（现已返穗）并有发热等相关症状（经排查核实的）的人员，配备“五个一”（一支温度计、一打口罩、一个表格、一支笔、一份宣传册）。感谢您的积极配合，祝您身体健康，家庭幸福！",
        duration: 60
    },
    buy_flow_info: {
        is_open: 1,
        start_time: "20:00",
        end_time: "24:00",
        oveTips: "今日预约还未开始，每晚8点开放，请耐心等候",
        sellOutTips: "别着急，明晚8点可再次预约。我们一直在努力筹集口罩货源，尽最大努力护您周全",
        closeTips: "系统异常，请稍后再试。",
        isNeedReport: 1,
        needReportTips: "为确保能及时了解您的健康情况，预约购买口罩前须先填写健康自查上报表，请点击“确认”进行填写。",
        probability: 20,
        tmplIds: [ "kROFAr3lqfJVmdgB2jDS6DQhVTnePC6y-k-c9GiMSiA" ],
        is_need_subscribe_message: 1,
        interval_day: 0,
        buy_explain: {
            en: {
                title: "Notice on Online Reservation for Masks",
                desc: [ "To make it convenient for Guangzhou residents to buy masks, Guangzhou Disease Control and Prevention Office entrusted Guangzhou Pharmaceutical Holdings with services of online reservation for masks, masks lottery, delivery of masks or shop at designated drugstores.", "From February 16, the new system will be undergoing a test run. Here are the rules of online reservation and purchase of masks." ],
                attention: [ "1. People living in Guangzhou could make a reservation through their ID card or other valid documentation.", "2. You can either choose to pay the bill online and wait for the delivery, or pay the bill offline and fetch the masks at designated drugstores that you selected previously.", "3. Each person can reserve and buy 10 ordinary masks or 5 N95 masks at most within a cycle (10 days).", "4. The registration and reservation information will be valid for 10 days, so you don’t need to make another reservation during this period.", "5. Each person could only win the lottery once in a cycle. If you win the lottery, you shall not reserve the masks within 10 days. If you still need to make reservation 10 days after you win the lottery, then you need to make a new registration. For example, if you win the lottery on February 18, then you may wait until February 27 to register and participate in the lottery on 28. If you don’t win the lottery, then you can participate in it every day until you win it or the end of a cycle. After a cycle ends, you need to make a new registration.", "6. Every day at 10 p.m. the system will collect the information registered and select lucky users by lottery at 3p.m the next day. So you may need to check the result at “Personal Center-My Reservation” around 6 p.m. every day since February 17.", "7. If you win the lottery of “pay the bill online and wait for the delivery”, you should pay for the masks by following the system prompt, and Guangzhou Pharmaceutical Holdings will arrange for the delivery (within Guangzhou city). You are supposed to pay within the configured timeout, otherwise your reservation will become invalid. If you win the lottery of “pay the bill offline and fetch the masks at designated drugstores”, you will see the information including the name of the designated drugstore you registered, the detailed address, reservation number, and valid period of your purchase. You can pay the bill at the drugstore you registered through valid documentation and above information within the valid period.", "8. Due to the differences of the procurement price and market fluctuations, an average purchase price in a certain period will be set for the mask, and be supervised by Office of Price Administration.", "9. Guangzhou Notary Public Office will supervise the lottery process.", "10. Those who break the rules and conduct cheating behavior will be disqualified from the reservation system. In serious cases, they shall be investigated for legal responsibility according to law." ]
            },
            chs: {
                title: "关于口罩预约购买的说明",
                desc: [ "为方便在穗人士购买口罩，市新冠肺炎防控指挥部办公室委托广药集团统一提供口罩线上预约、摇号抽签、配送到家或到店购买服务。", "2月22日起，系统进一步升级，预约摇号购买规则如下：" ],
                attention: [ "1、在穗人士可凭身份证等有效身份证明进行预约登记。", "2、预约分为“线上结算，快递到家”和“线下结算，到店自取”两类，预约时只能选其一。如果选择“线下结算，到店自取”，须选择具体的自取门店。", "3、每人每次可预约购买普通防护口罩10个或普通N95口罩10个，已经成功登记的在原周期内有效。", "4、预约登记10天为一个周期，自登记之日起10天内无需重复预约登记。", "5、每人每个周期只有1次中签机会。如中签，中签日起10天内不再参与摇号；中签10天后，如还需预约购买，须重新预约登记，如：2月18日中签，2月27日方可再次登记，2月28日参加摇号。如未中签，在周期内可每日参加抽签，直至中签或周期结束；周期结束后，再预约购买时，须重新预约登记。年满65周岁的人士只需登记一次。", "6、每天22:00系统将有效预约登记的数据封存，次日15:00对数据进行摇号抽签，18:00左右可在“个人中心——我的预约”中查询结果。", "7、如果成功中签“线上结算，快递到家”的，将会出现线上付款界面，请按提示完成付款。订单由广州健民医药连锁有限公司提供快递到家服务（仅限于广州市内）。超时未支付的，订单将自动失效。如果成功中签“线下结算，到店自取”的，将出现预约时登记的门店名称、地址、预约号（含条形码）和购买有效期的界面。您可在有效期内，凭上述信息和预约登记时的有效证件到预约时登记的门店办理结算自取。", "8、由于口罩采购价格存在差异和市场波动，将选取一定时间内的采购平均价合理加成后销售，并由物价监管部门予以监督。", "9、广州公证处将对摇号过程进行监督。", "10、对于任何违反规则、存在作弊行为的用户，将取消预约资格，情节严重的，将依法追究法律责任。" ]
            }
        },
        unCanOrderText: "您的预约申请我们已经收到，请勿重复提交。结果可在“个人中心—我的预约”中查看。"
    },
    lot_flow_info: {
        is_open: 1,
        start_time: "00:00",
        end_time: "24:00",
        oveTips: "今日预约还未开始，每晚8点开放，请耐心等候",
        sellOutTips: "别着急，明晚8点可再次预约。我们一直在努力筹集口罩货源，尽最大努力护您周全",
        closeTips: "系统异常，请稍后再试。",
        isNeedReport: 1,
        needReportTips: "为确保能及时了解您的健康情况，预约购买口罩前须先填写健康自查上报表，请点击“确认”进行填写。",
        probability: 100,
        tmplIds: [ "kROFAr3lqfJVmdgB2jDS6DQhVTnePC6y-k-c9GiMSiA" ],
        is_need_subscribe_message: 1,
        lot_time: "18:00",
        modify_start_time: "18:30",
        modify_end_time: "21:30",
        modify_order_tips: "您已提交过预约登记，正在参与摇号中，如果填写信息需要修改，在18：30-21：30时间内可以修改，每天只能修改一次，且当天修改数据不能修改",
        modify_not_in_valid_time_tips: "该时间不能修改，请18:30-21:30时间内修改",
        modify_has_modify_tips: "当天录入的数据不能修改，且每天只能修改一次",
        enable_modify_order: !0,
        interval_day: 10,
        buy_explain: {
            en: {
                title: "Notice on Online Reservation for Masks",
                desc: [ "To make it convenient for Guangzhou residents to buy masks, Guangzhou Disease Control and Prevention Office entrusted Guangzhou Pharmaceutical Holdings with services of online reservation for masks, masks lottery, delivery of masks or shop at designated drugstores.", "From February 16, the new system will be undergoing a test run. Here are the rules of online reservation and purchase of masks." ],
                attention: [ "1. People living in Guangzhou could make a reservation through their ID card or other valid documentation.", "2. You can either choose to pay the bill online and wait for the delivery, or pay the bill offline and fetch the masks at designated drugstores that you selected previously.", "3. Each person can reserve and buy 10 ordinary masks or 5 N95 masks at most within a cycle (10 days).", "4. The registration and reservation information will be valid for 10 days, so you don’t need to make another reservation during this period.", "5. Each person could only win the lottery once in a cycle. If you win the lottery, you shall not reserve the masks within 10 days. If you still need to make reservation 10 days after you win the lottery, then you need to make a new registration. For example, if you win the lottery on February 18, then you may wait until February 27 to register and participate in the lottery on 28. If you don’t win the lottery, then you can participate in it every day until you win it or the end of a cycle. After a cycle ends, you need to make a new registration.", "6. Every day at 10 p.m. the system will collect the information registered and select lucky users by lottery at 3p.m the next day. So you may need to check the result at “Personal Center-My Reservation” around 6 p.m. every day since February 17.", "7. If you win the lottery of “pay the bill online and wait for the delivery”, you should pay for the masks by following the system prompt, and Guangzhou Pharmaceutical Holdings will arrange for the delivery (within Guangzhou city). You are supposed to pay within the configured timeout, otherwise your reservation will become invalid. If you win the lottery of “pay the bill offline and fetch the masks at designated drugstores”, you will see the information including the name of the designated drugstore you registered, the detailed address, reservation number, and valid period of your purchase. You can pay the bill at the drugstore you registered through valid documentation and above information within the valid period.", "8. Due to the differences of the procurement price and market fluctuations, an average purchase price in a certain period will be set for the mask, and be supervised by Office of Price Administration.", "9. Guangzhou Notary Public Office will supervise the lottery process.", "10. Those who break the rules and conduct cheating behavior will be disqualified from the reservation system. In serious cases, they shall be investigated for legal responsibility according to law." ]
            },
            chs: {
                title: "关于口罩预约购买的说明",
                desc: [ "为方便在穗人士购买口罩，市新冠肺炎防控指挥部办公室委托广药集团统一提供口罩线上预约、摇号抽签、配送到家或到店购买服务。", "2月22日起，系统进一步升级，预约摇号购买规则如下：" ],
                attention: [ "1、在穗人士可凭身份证等有效身份证明进行预约登记。", "2、预约分为“线上结算，快递到家”和“线下结算，到店自取”两类，预约时只能选其一。如果选择“线下结算，到店自取”，须选择具体的自取门店。", "3、每人每次可预约购买普通防护口罩10个或普通N95口罩10个，已经成功登记的在原周期内有效。", "4、预约登记10天为一个周期，自登记之日起10天内无需重复预约登记。", "5、每人每个周期只有1次中签机会。如中签，中签日起10天内不再参与摇号；中签10天后，如还需预约购买，须重新预约登记，如：2月18日中签，2月27日方可再次登记，2月28日参加摇号。如未中签，在周期内可每日参加抽签，直至中签或周期结束；周期结束后，再预约购买时，须重新预约登记。年满65周岁的人士只需登记一次。", "6、每天22:00系统将有效预约登记的数据封存，次日15:00对数据进行摇号抽签，18:00左右可在“个人中心——我的预约”中查询结果。", "7、如果成功中签“线上结算，快递到家”的，将会出现线上付款界面，请按提示完成付款。订单由广州健民医药连锁有限公司提供快递到家服务（仅限于广州市内）。超时未支付的，订单将自动失效。如果成功中签“线下结算，到店自取”的，将出现预约时登记的门店名称、地址、预约号（含条形码）和购买有效期的界面。您可在有效期内，凭上述信息和预约登记时的有效证件到预约时登记的门店办理结算自取。", "8、由于口罩采购价格存在差异和市场波动，将选取一定时间内的采购平均价合理加成后销售，并由物价监管部门予以监督。", "9、广州公证处将对摇号过程进行监督。", "10、对于任何违反规则、存在作弊行为的用户，将取消预约资格，情节严重的，将依法追究法律责任。" ]
            }
        },
        lotDelayTips: "数据更新可能稍有延迟，请耐心等候。",
        express_text: "加包装物流费6元",
        preorderBth: {
            isShow: 0,
            text: "查看02月15日抢购预约记录"
        },
        result_notice: {
            is_open: 1,
            title: "2月19日口罩预约摇号公示",
            short_desc: "2月19日口罩预约摇号公示",
            content: "1、2020年2月19日，在“穗康”小程序上登记且符合摇号资质合计2,629,006人。\n2、经过组织货源，可预约口罩1,400,000只。其中1,002,370只提供给“穗康”小程序用于今天下午3点预约摇号。另397,630只口罩用于大参林和采芝林自行预约。",
            version: "2"
        },
        unCanOrderText: "您的预约申请我们已收到，请勿重复提交。2月17日起，每天18：00左右系统公布随机摇号中签名单，请耐心等候。",
        rgisterSuccessText: "本次预约10天内有效。2月17日起，每天18：00左右系统公布随机摇号中签名单，请耐心等候。"
    }
};