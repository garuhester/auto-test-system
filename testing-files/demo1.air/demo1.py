# -*- encoding=utf8 -*-
__author__ = "Hester"

from airtest.core.api import *

auto_setup(__file__)

from poco.drivers.android.uiautomation import AndroidUiautomationPoco
poco = AndroidUiautomationPoco(use_airtest_input=True, screenshot_each_action=False)
#start
time = 0
while time < 3:
    try:
        #执行命令
        poco(text="计算器").click()

        #success
        break
    except:
        #发生了异常，次数+1
        time = time + 1

        #回到初始状态
        home()
        
        #error
#end