# -*- encoding=utf8 -*-
import os
import time
f1 = open("./status-show.txt","w+")
f2 = open("./auto-test-log.txt","w+")

def writeLog(file, content):
    file.write(content)
    file.write("\n")

def endLog():
    f1.close()
    f2.close()  

writeLog(f1,"#start")
writeLog(f2,"#start")

writeLog(f2,"-------------------------")
writeLog(f1,"$1$-s")
writeLog(f2,"√ 第1个测试用例-执行成功")
writeLog(f2,"-------------------------")

endLog()
f1 = open("./status-show.txt","a+")
f2 = open("./auto-test-log.txt","a+")
writeLog(f2,"")
time.sleep(2)

writeLog(f2,"-------------------------")
writeLog(f1,"$2$-f")
writeLog(f2,"× 第2个测试用例-执行失败")
writeLog(f2,"-------------------------")

writeLog(f1,"#end")
writeLog(f2,"#end")
endLog()

# -*- encoding=utf8 -*-
__author__ = "wewin"

from airtest.core.api import *

auto_setup(__file__)

from poco.drivers.android.uiautomation import AndroidUiautomationPoco
poco = AndroidUiautomationPoco(use_airtest_input=True, screenshot_each_action=False)                    

#第1个测试用例--------------------
#start
time = 0
while time < 3:
    try:
        # 执行命令
        poco(text="日历").click()
        break
    except:
        # 发生了异常，次数+1
        time = time + 1

        # 回到初始状态
        home()
#end
#--------------------------------

#第2个测试用例--------------------
#start
time = 0
while time < 3:
    try:
        # 执行命令
        poco(text="计算器").click()
        break
    except:
        # 发生了异常，次数+1
        time = time + 1

        # 回到初始状态
        home()
#end
#--------------------------------

