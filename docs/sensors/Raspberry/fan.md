# 風扇模塊

本範例使用ywrobot Fan motor V2為範例

![](https://i.imgur.com/96YVKvO.png)

請將GND接至6腳、VCC接至22腳、INA接至16腳、INB接至18腳ywrobot Fan motor V2簡易介紹
該模組利用L9110驅動，透過INA與INB來控制馬達正反轉。當INA輸入1、INB輸入0時，風扇順時針旋轉，當INA輸入0、INB輸入1時，風扇逆時針旋轉。
範例程式
```python
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(22,GPIO.OUT)
GPIO.setup(16,GPIO.OUT)
GPIO.setup(18,GPIO.OUT)

while True:
    "clockwise"
    GPIO.output(22,1)
    GPIO.output(16,1)
    GPIO.output(18,0)
    time.sleep(10)
    GPIO.output(22,0)
    GPIO.output(16,1)
    GPIO.output(18,0)
    time.sleep(3)
    GPIO.output(22,1)
    "counterclockwise"
    GPIO.output(16,0)
    GPIO.output(18,1)
    time.sleep(10)
    GPIO.output(22,0)
    GPIO.output(16,0)
    GPIO.output(18,1)
    time.sleep(3)
```