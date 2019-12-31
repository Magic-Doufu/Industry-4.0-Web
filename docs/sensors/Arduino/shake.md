# Shake
## 模組簡介

用於各種震動觸發作用，報盜報警，智慧小車，地震報警，摩托車報警

**電源指示燈**，輸出信號LED指示燈。
**TTL電位輸出**，TTL輸出有效信號為低電位，驅動能力15mA左右。
產品不震動的時候，LED滅，輸出為高電位，
產品震動的時候，LED點亮，輸出低電位，
靈敏度可通過可調電阻調整
PCB尺寸：35x12 mm

接線:
V-->5V
GND-->GND
A0-->A0

![](~@sensors/shake/shake1.jpg)

程式簡介: 將感測器現態預設值為0，感受到震動時根據力量大小顯示0(小)\~1023(大)的值

程式範例:

```
int sensorPin = A0;
int sensorValue = 0;
void setup() {
Serial.begin(115200);
}
void loop() {
sensorValue = analogRead(sensorPin); 
Serial.println(sensorValue);  
             
delay(1000);                  
}  
```
程式結果:![](~@sensors/shake/shake.jpg)