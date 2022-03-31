from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
import time

desired_caps = {
    "platformName": "Android",
    "deviceName": "9b6d2de6",
    "appPackage": "com.tencent.mm",
    "appActivity": ".ui.LauncherUI",
    "automationName": "Appium",
    "resetKeyboard": True,
    "noReset": True,
    # "fastRest": False,
    # "fullRest": False,
    "chromeOptions": {
        "androidProcess": "com.tencent.mm:appbrand0"
    }
}
driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)
driver.find_element(by=AppiumBy.ID, value="android:id/content").click()
time.sleep(5)
# 发现
driver.find_element(by=AppiumBy.XPATH,
                    value="/hierarchy/android.widget.FrameLayout/android.widget."
                          "FrameLayout/android.widget.LinearLayout/android.widget."
                          "FrameLayout/android.widget.FrameLayout[2]/android.view."
                          "ViewGroup/android.widget.FrameLayout[1]/android.widget."
                          "FrameLayout/android.widget.FrameLayout/android.widget."
                          "RelativeLayout/android.widget.LinearLayout/android."
                          "widget.RelativeLayout[3]").click()

time.sleep(5)
# 小程序
driver.find_element(by=AppiumBy.XPATH,
                    value="/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[1]/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[11]").click()

time.sleep(5)
driver.find_element(by=AppiumBy.XPATH,
                    value="/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout[1]/androidx.recyclerview.widget.RecyclerView/android.widget.RelativeLayout[1]").click()
time.sleep(5)
# driver.find_element(by=AppiumBy.XPATH,
#                     value='''
#                     /hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.
#                     FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.
#                     ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout[1]/androidx.
#                     recyclerview.widget.RecyclerView/android.widget.RelativeLayout[1]/android.widget.
#                     LinearLayout
#                     ''').click()
# NoSuchContextError: No such context found.at AndroidUiautomator2Driver.setContext
#
c = driver.contexts
print(c)
driver.switch_to.context("WEBVIEW_com.tencent.mm:appbrand0")
time.sleep(5)
print(driver.page_source)
