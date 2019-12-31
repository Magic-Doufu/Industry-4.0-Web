# FSR壓力感測器

一個可以根據受力大小產生不同電阻變化的原件
基本原理：本身他是一個電阻，隨著感受到了力量越大，電阻會逐漸變小；力量和電導(conductance=1/r) 成正比，所以我們可以經由感應到的電阻值回推受力大小。
元件可以感應的力量範圍 100g\~10kg。
它有一個0.5"（12.7mm）直徑的傳感區域。力量增加，降低阻值。當沒有壓力施加在感測區域上，其電阻將大於1M歐以上。
兩個引腳延長至底部的感測器，0.1"間距可插入麵包板。用於量測簡單的壓力，不是非常準確，但較便宜。
用它們來檢測它是否被受壓或擠壓的一個程度。可用BASIC Stamp or Arduino 等控制器來讀取。
若須較準的量測請參考Flexiforce Pressure Sensor , 型號為 FS-101 25 lb 系列的壓力感測器。

產品規格：
整體長度：2.375"
整體寬度：0.75"
整體厚度：0.018"
感測區域：0.5"
壓力範圍：0.1N\~10N


![](~@sensors/FSR/FSR.png)

程式範例：
```cpp 
int fsrData; 
const int fsrPin = A0; 
void setup() 
{ 
Serial.begin(9600); 
} 
void loop() 
{ 
fsrData = analogRead(fsrPin); // 將讀取到的數值轉為 0~1023 之間的數字 
Serial.print("FSR value is:"); 
Serial.println(fsrData); 
delay(500); 
} 
```
電路(接線需另接10K電阻):

![](~@sensors/FSR/FSR(4).jpg)
結果:

![](~@sensors/FSR/FSR(2).png)

