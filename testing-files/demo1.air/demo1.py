# -*- encoding=utf8 -*-
__author__ = "Hester"

from airtest.core.api import *

auto_setup(__file__)

from poco.drivers.android.uiautomation import AndroidUiautomationPoco
poco = AndroidUiautomationPoco(use_airtest_input=True, screenshot_each_action=False)
#start
while True:
    try:
        poco(text="计算器").click()
        break
    except:
        print('发生了异常')
        home()
    finally:
        print('最后执行')
#end