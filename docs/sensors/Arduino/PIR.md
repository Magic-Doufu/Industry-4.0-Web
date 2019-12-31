# 紅外線動作感測器(PIR Motion Sensor)

◎紅外線動作感測器(PIR Motion Sensor)或稱人體紅外線感測器，是一種可以偵測物體移動的電子裝置。

◎生活中很多東西都會發射紅外線，例如燈泡、蠟燭、中央空調等，其實人體也會發射紅外線，紅外線動作感測器的原理，便是利用人體發射出來的紅外線的變化，來感應物體的移動。

◎紅外線感測器有分主動式和被動式兩種。主動式的紅外線感測器，感應器本身會發射紅外線光束，當紅外線光束被物體擋住後，紅外線光束會反射，利用這個紅外線反射原理可以做很多應用，例如廁所的自動沖水小便斗或感應式水龍頭，它們用的就是主動式紅外線感測器。紅外線動作感測器 (PIR Motion Sensor) 是屬於被動式的紅外線裝置，感應器本身不會發射紅外線光束。

◎被動式紅外線感測器的縮寫(Passive Infrared Sensor) 是 PIR。

◎紅外線動作感測器一般用在防盜系統上，例如有人入侵屋內便響警報的紅外警報器，或是自動照明裝置，例如玄關、走廊、樓梯間或車庫門口不常有人走動，將紅外線感應器和燈具裝在這些地方，只要有人就自動開燈照明，人離開後就自動關燈省電。

◎紅外線動作感測器腳位表
一般來說，紅外線動作感測器只有三支接腳，這三支接腳的功能如下表:
腳位名稱    功能說明
GND (-)     接到接地
Power(+)    接到 +5V 電源
OUT         輸出訊號

◎在感測到物體移動時，紅外線動作感測器就會在 OUT 腳上輸出一個訊號，利用這個訊號就可以知道感測器附近是否有人。另外，大部份紅外線動作感測器都有一個旋轉鈕，可讓使用者調整訊號輸出的延遲時間，這個設計非常貼心，因為利用延遲時間我們可以延遲關燈的時間，避免燈具開關太過頻繁。
* 把 LED 接到 Arduino 板子上，LED 長腳 (陽極) 接到 pin13，短腳 (陰極) 接到 GND
* 把紅外線動作感測器 GND 腳位接到 GND，V+ 腳位接到 +5V，然後 OUT 腳位接到數位輸入(Digital pins) pin 2


電路(接線)圖:

![](~@sensors/PIR/PIR.jpg)

程式範例:
```cpp
const int PIRSensor = 2;     // 紅外線動作感測器連接的腳位07
const int ledPin =  13;      // LED 腳位
int sensorValue = 0;         // 紅外線動作感測器訊號變數

void setup() {

  pinMode(PIRSensor, INPUT);    
  pinMode(ledPin, OUTPUT);       

Serial.begin(9600);  
}

void loop(){

  // 讀取 PIR Sensor 的狀態
  sensorValue = digitalRead(PIRSensor);
  // 判斷 PIR Sensor 的狀態
  if (sensorValue == HIGH) {    
    digitalWrite(ledPin, HIGH);  // 有人，開燈
    Serial.println("有人，開燈");
  }
  else { 
    digitalWrite(ledPin, LOW);   // 沒人，關燈
   Serial.println(" ");
    
  }
}
```

結果:

![](~@sensors/PIR/PIR1.jpg)

![](~@sensors/PIR/PIR2.jpg)


