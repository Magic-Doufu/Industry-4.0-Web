LED控制樹莓派腳位圖
![](https://i.imgur.com/skMQotZ.png)
將LED接至任一GPIO之接腳並將LED的負極接至任一GND之接腳。
```python
import RPi.GPIO
import time
GPIO.setwarning(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(3,GPIO.OUT)
while(1):
    GPIO.output(3,1)
    time.sleep(0.5)
```