# DHT22溫濕度感測器

DHT22溫濕度傳感器AM2302(又稱DHT22)濕敏電容數位溫濕度模組是一款含有己校準數位信號輸出的溫濕度複合感測器。它應用專用的數位模組採集技術和溫濕度傳感技術，確保產品具有極高的可靠性與卓越的長期穩定性。
感測器包括一個電容式感濕元件和一個高精度測溫元件，並與一個高性能8位單片機相連接。因此該產品具有品質卓越、超快回應、抗干擾能力強、性價比極高等優點。每個感測器都在極為精確的濕度校驗室中進行校準。校準係數以程式的形式儲存在單片機中，感測器內部在檢測信號的處理過程中要調用這些校準係數。
標準單匯流排界面，使系統集成變得簡易快捷。超小的體積、極低的功耗，信號傳輸距離可達20米以上，使其成為各類應用甚至最為苛刻的應用場合的最佳選擇。產品為3引線（單匯流排界面）連接方便。特殊封裝形式可根據用戶需求而提供。

規格: 

尺寸大小：40 x 23mm

產品重量：4g

工作電壓：5V

連接埠：數位雙向單匯流排

溫度範圍：-40\~80℃ ±0.5℃

濕度範圍：20\~90%RH ±2%RH

使用平臺：Arduino、單晶片

DHT22接腳說明：

![](~@sensors/DHT22/DHT22.jpg)

程式開始前，需先下載程式庫。

![](~@sensors/DHT22/DHT22L.jpg)

搜尋DHT，下載DHT sensor library。

![](~@sensors/DHT22/tempsnip.png)

程式範例：
```cpp
#include "DHT.h"
#define DHTPIN 2          // 接腳 PIN2
#define DHTTYPE DHT22     // DHT22
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  Serial.println("DHT22 test!");
  dht.begin();
}

void loop() {

  delay(2000);   
       //傳感器讀取時間需要大約2秒
  float h = dht.readHumidity();
       //讀取濕度 
  float t = dht.readTemperature();
       //讀取溫度(攝氏)
  float f = dht.readTemperature(true);
       //讀取溫度(華氏)(isFahrenheit = true)

  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
           //檢查是否讀取失敗,提前退出,再一次
  }

  float hif = dht.computeHeatIndex(f, h);
  float hic = dht.computeHeatIndex(t, h, false);

  Serial.print("Humidity: ");
  Serial.print(h);
  Serial.print(" %/t");
  Serial.print("Temperature: ");
  Serial.print(t);
  Serial.print(" *C ");
  Serial.print(f);
  Serial.print(" *F/t");
  Serial.print("Heat index: ");
  Serial.print(hic);
  Serial.print(" *C ");
  Serial.print(hif);
  Serial.println(" *F");
         //顯示結果
}
```
結果：

電路(接線)
![](~@sensors/DHT22/DHT22(3).jpg)

紅線為開始使用吹風機(溫度上升濕度下降)
![](~@sensors/DHT22/DHT22(1).png)


