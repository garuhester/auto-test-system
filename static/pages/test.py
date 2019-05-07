import os
import time

nowDate = time.strftime('%Y-%m-%d-%H-%M-%S',time.localtime(time.time())) + "";
f = open("./logs/auto-test-log(" + nowDate + ").txt","w+")

def writeLog(file, content):
    file.write(content)

def endLog():
    f.close()

writeLog(f,"hello")
endLog();