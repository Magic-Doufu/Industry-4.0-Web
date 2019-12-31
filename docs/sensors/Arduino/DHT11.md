# DHT11溫濕度感測器

DHT11是一款溫濕度複合傳感器，數字模塊採集技術和溫濕度傳感技術

規格:
1. 供電電壓：3.3~5.5V
1. 測量範圍：濕度20~90％RH
1. 溫度：0~50℃
1. 測量精度：濕度+-5％RH
1. 溫度+-2℃分辨率：濕度 1％RH
1. 溫度1℃長期穩定性：±1％RH /年

DHT11接腳說明：
    

![](~@sensors/DHT11/DHT11.jpg)

程式開始前，需要下載DHT程式庫。

![](~@sensors/DHT11/DHT11L.jpg)

搜尋DHT，下載DHT sensor library。

![](~@sensors/DHT11/tempsnip.png)

程式範例：
```cpp
#include "DHT.h"
#define DHTPIN 2          // 接腳 PIN2
#define DHTTYPE DHT11     // DHT11
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  Serial.println("DHT11 test!");
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
![](~@sensors/DHT11/DHT11(3).jpg)

紅線為開始使用吹風機(溫度上升濕度下降)
![](~@sensors/DHT11/DHT11(1).png)


