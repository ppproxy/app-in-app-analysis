const automator = require('miniprogram-automator')

automator.launch({
  cliPath: 'D:\\微信web开发者工具\\cli.bat', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
  projectPath: 'F:\\WeChatMiniProgramProject\\SubPackageDemo', // 项目文件地址
}).then(async miniProgram => {
  page = await miniProgram.reLaunch('/pages/index/index')
  await page.waitFor(500)
  console.log(page)
  console.log(page.path)
  //获取当前页的class为subpackA的button
  const elementA = await page.$('.subpackA')
  // console.log(await element.attribute('class'))
  //点击该button
  await elementA.tap()
  //获取当前页
  await page.waitFor(500)
  page = await miniProgram.currentPage()
  console.log(page.path)
  const elementB = await page.$(".subpackB")
  await elementB.tap()
  await page.waitFor(500)
  page = await miniProgram.currentPage()
  console.log(page.path)
  //即使没有跳转关系，使用强制跳转函数也可以实现跳转
  page = await miniProgram.navigateTo('/pages/index/index')
  await page.waitFor(500)
  console.log(page.path)
  await miniProgram.close()
})
//open wechat
//