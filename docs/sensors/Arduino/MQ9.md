# MQ-9氣體傳感器

◎這是MQ-9一氧化碳，甲烷和LPG氣體傳感器模塊，可用於檢測一氧化碳和甲烷氣體。
  MQ-9氣體傳感器的敏感材料是SnO2，在潔淨空氣中具有較低的導電性。
  它通過循環高低溫的方法進行檢測，並在低溫（加熱1.5V）時檢測CO。傳感器的電導率隨著氣體濃度的升高而增加。
  當高溫（加熱5.0V）時，它會檢測甲烷，丙烷等可燃氣體，並清除低溫下吸附的其他氣體。

◎電線連接
VCC  - 正極（5V）
GND  - 負極
DO  -  TTL開關信號輸出
AO  - 模擬信號輸出

◎應用
國內燃氣洩漏檢測儀
工業氣體檢測儀
便攜式氣體檢測儀


電路(接線)圖:

![](~@sensors/MQ9/MQ9.jpg)

程式範例:
```cpp
void setup() {
  Serial.begin(9600);  
}
 
void loop() {
  int val = analogRead(A1);
  Serial.println(val, DEC);
  delay(500);
}
```

結果:

![](~@sensors/MQ9/MQ9S.jpg)


