# -*- encoding=utf8 -*-
statusTemp = 1
#start
time = 0
while time < 3:
    try:
        # 执行命令
        popco()
        break
    except:
        # 发生了异常，次数+1
        time = time + 1

        # 回到初始状态
#end
        print "error"

if statusTemp == 1:
    print "success"