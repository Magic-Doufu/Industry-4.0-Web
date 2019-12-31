# 七段顯示器

本範例使用5161BS共陽極七段顯示器為範例。由於這個七段顯示器是共陽極，請將8腳或3腳接至raspberry pi的VCC接腳。
![](https://i.imgur.com/zQLIhtR.png)
電路方面則任選8隻GPIO的接腳接到相對應七段顯示器的A-E接腳。
範例程式碼
```python
import RPi.GPIO as GPIO
import time
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(11,GPIO.OUT)
GPIO.setup(7,GPIO.OUT)
GPIO.setup(5,GPIO.OUT)
GPIO.setup(3,GPIO.OUT)
GPIO.setup(13,GPIO.OUT)
GPIO.setup(19,GPIO.OUT)
GPIO.setup(15,GPIO.OUT)
a=[[0,0,0,0,0,0,1],
   [1,0,0,1,1,1,1],
   [0,0,1,0,0,1,0],
   [0,0,0,0,1,1,0],
   [1,0,0,1,1,0,0],
   [0,1,0,0,1,0,0],
   [0,1,0,0,0,0,0],
   [0,0,0,1,1,1,1],
   [0,0,0,0,0,0,0],
   [0,0,0,0,1,0,0]]
b=[3,5,7,11,13,15,19]
while(1):
    for i in range(0,10):
        for j in range(0,7):
            GPIO.output(b[j],a[i][j])
        time.sleep(1)
        for j in range(0,7):
            GPIO.output(b[j],1)
```