# LCD液晶顯示器
使用LCM1602為範例
首先先開啟**raspberry**的I2C功能，執行LX終端機，輸入`sudo raspi-config`，找到並選取**Interfacing Options**，再來找到**P5 I2C**選取並後按下**ENTER**，之後選取**YES**，之後選擇**Finish**離開。
再來安裝**RPLCD**與**SMBUS**套件，輸入`pip3 install smbus2`以及`pip3 install RPLCD`等待安裝完成。
![](https://i.imgur.com/STEp66o.png)
上圖右邊的藍色接線已經接好了，只需處理GND、VCC、SDA、SCL四隻接腳，VCC與GND接上樹莓派的VCC與GND，SDA接至3腳、SCL接至5腳。
接下來需要尋找I2C裝置的位置。
在LX終端機中輸入i2cdetect -y 1，找到上面顯示非- -的欄位，則位址為`0x你的數字`。
範例程式碼
```python
import sys
import time
import smbus2
from RPLCD.i2c import CharLCD
 
lcd = CharLCD('PCF8574', address=0x27, port=1, backlight_enabled=False)
while(1):
    lcd.clear()
    lcd.cursor_pos = (0, 0)
    lcd.write_string("Date: {}".format(time.strftime("%Y/%m/%d")))
    lcd.cursor_pos = (1, 0)
    lcd.write_string("Time: {}".format(time.strftime("%H:%M:%S")))
    time.sleep(1)
```
參考:[https://pypi.org/project/RPLCD/](https://pypi.org/project/RPLCD/)