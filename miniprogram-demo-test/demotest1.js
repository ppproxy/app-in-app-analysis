const automator = require('miniprogram-automator')

automator.launch({
    cliPath: 'D:\\微信web开发者工具\\cli.bat', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
    projectPath: 'E:\\WorkSpace\\tracked-app\\weapp-wechat-zhihu', // 项目文件地址
}).then(async miniProgram => {
    const TAR_BAR = new Set()
    TAR_BAR.add("/pages/index/index")
    TAR_BAR.add("/pages/discovery/discovery")
    TAR_BAR.add("/pages/notify/notify")
    TAR_BAR.add("/pages/chat/chat")
    TAR_BAR.add("/pages/more/more")
    let res = {}
    for (let tar_bar of TAR_BAR) {
        console.log(tar_bar)
        let page = await miniProgram.reLaunch(tar_bar)
        let queue = []
        queue.push(page.path)
        while (queue.length > 0) {
            let nowPath = "/" + queue.shift()
            let node = undefined
            if (TAR_BAR.has(nowPath)) {
                node = await miniProgram.switchTab(nowPath)
            } else {
                node = await miniProgram.reLaunch(nowPath)
            }
            // let node = await miniProgram.reLaunch(nowPath + "")
            await node.waitFor(500)
            let elements = await node.$$('.can-be-analysis')
            //todo:这里有问题。这个set不应该在这里初始化。产生了环。

            if (!res.hasOwnProperty(nowPath)) {
                res[nowPath] = new Set()
            }
            let set = res[nowPath]
            for (let i = 0; i < elements.length; i++) {
                await elements[i].tap()
                await node.waitFor(500)
                let nextPage = await miniProgram.currentPage()
                let nextPagePath = nextPage.path
                if ("/" + nextPagePath !== nowPath && (!set.has(nextPagePath))) {
                    console.log("nowPath:" + nowPath + " nextPage:" + nextPagePath)
                    queue.push(nextPagePath)
                    set.add(nextPagePath)
                    await miniProgram.navigateBack()
                    // if (TAR_BAR.has(nowPath)){
                    //   await miniProgram.switchTab(nowPath)
                    // }
                    // else{
                    //   await miniProgram.reLaunch(nowPath)
                    // }
                }
            }
        }
    }


    console.log(res)

    miniProgram.close()

    // console.log(page.path)
    // await elements[1].tap()
    // await page.waitFor(500)
    // let nowPage = await miniProgram.currentPage()
    // console.log(nowPage.path)
    // miniProgram.close()
    // for(let i = 0;i < elements.length;i ++){
    //   await elements[i].tap()
    //
    // }
    // console.log(await elements.attribute('bindtap'))
    // console.log(await elements.outerWxml())
    // for(let i = 0 ;i < elements.length;i ++){
    //   console.log(await elements[i].outerWxml())
    // }
    // await page.waitFor(500)
    // console.log(page)
    // console.log(page.path)
    // page.
    // //获取当前页的class为subpackA的button
    // const elementA = await page.$('.subpackA')
    // // console.log(await element.attribute('class'))
    // //点击该button
    // await elementA.tap()
    // //获取当前页
    // await page.waitFor(500)
    // page = await miniProgram.currentPage()
    // console.log(page.path)
    // const elementB = await page.$(".subpackB")
    // await elementB.tap()
    // await page.waitFor(500)
    // page = await miniProgram.currentPage()
    // console.log(page.path)
    // //即使没有跳转关系，使用强制跳转函数也可以实现跳转
    // page = await miniProgram.navigateTo('/pages/index/index')
    // await page.waitFor(500)
    // console.log(page.path)
    // await miniProgram.close()
})
