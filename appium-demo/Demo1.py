from appium import webdriver

desired_caps = {}
desired_caps['platform'] = 'Android'
desired_caps['automationName'] = 'uiautomator2'
desired_caps['deviceName'] = '127.0.0.1:62001'
desired_caps['appPackage'] = 'com.ss.android.ugc.aweme'
desired_caps['appActivity'] = 'com.ss.android.ugc.aweme.splash.SplashActivity'
driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)