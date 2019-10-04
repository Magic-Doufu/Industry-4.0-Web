# Thinger.io 繁體中文教學站
## ESP32(NodeMCU)範例程式
### LED閃爍
#### 這支程式將示範如何使用BPI UNO測試板載LED
```
#define _DEBUG_ //Debug 模式
#define _DISABLE_TLS_ //關閉TLS認證
#define THINGER_SERVER "192.168.137.233" //Server IP
#include <ThingerESP32.h>
// Device 驗證資訊
#define USERNAME "MagicDoufu"
#define DEVICE_ID "ESP32"
#define DEVICE_CREDENTIAL "AMDDAC"
// Wi-Fi 驗證資訊
#define SSID "ThingerWiFi"
#define SSID_PASSWORD "ll9187,5"

// 實體化伺服器驗證資訊
ThingerESP32 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);
void setup() {
//開啟LED Pin輸出
  Serial.begin(115200);
  pinMode(16, OUTPUT);
  pinMode(17, OUTPUT);
  pinMode(27, OUTPUT);

//自動連線
  thing.add_wifi(SSID, SSID_PASSWORD);
//產生一個名為flash的接入點，此接入點沒有任何引數，按一下即執行內部程式。
//RGB 各自隔1秒逐步點亮，3秒後逐步熄滅。
  thing["flash"] = [](){
    digitalWrite(17,HIGH);
    delay(1000);
    digitalWrite(16,HIGH);
    delay(1000);
    digitalWrite(27,HIGH);
    delay(3000);
    digitalWrite(27,LOW);
    delay(1000);
    digitalWrite(16,LOW);
    delay(1000);
    digitalWrite(17,LOW);
  };
}

void loop() {
  thing.handle();
}
```
### PWM控制RGBLED
#### 這支程式將示範如何使用BPI UNO以PWM方式驅動板載LED
```
#define _DEBUG_ //Debug 模式
#define _DISABLE_TLS_ //關閉TLS認證
#define THINGER_SERVER "192.168.137.233" //Server IP
#include <ThingerESP32.h>
// Device 驗證資訊
#define USERNAME "CCYTHinger"
#define DEVICE_ID "ESP32"
#define DEVICE_CREDENTIAL "AMDDAC"
// Wi-Fi 驗證資訊
#define SSID "MQTT3477"
#define SSID_PASSWORD "ll9187,5"
// 定義PWM Channel
#define LED_CH_R 1
#define LED_CH_G 2
#define LED_CH_B 3
// 定義 PWM 頻率
#define LED_Freq  1000
// 定義 PWM Timer
#define LED_Timer 8

// 實體化伺服器驗證資訊
ThingerESP32 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);

void setup() {
//開啟LED Pin輸出
  Serial.begin(115200);
  pinMode(16, OUTPUT);
  pinMode(17, OUTPUT);
  pinMode(27, OUTPUT);

//自動連線
  thing.add_wifi(SSID, SSID_PASSWORD);
//設定 LED Channel 參數
  ledcSetup(LED_CH_R, LED_Freq, LED_Timer);
  ledcSetup(LED_CH_G, LED_Freq, LED_Timer);
  ledcSetup(LED_CH_B, LED_Freq, LED_Timer);

//將PWM Channel關聯到實體腳位上
  ledcAttachPin(17, LED_CH_R);//LED R Pin
  ledcAttachPin(16, LED_CH_G);//LED G Pin
  ledcAttachPin(27, LED_CH_B);//LED B Pin

//設定傳遞給Server的資源
  thing["RGB"] << [](pson& in){
      ledcWrite(LED_CH_R,in["R"]);
      ledcWrite(LED_CH_G,in["G"]);
      ledcWrite(LED_CH_B,in["B"]);
  };
//測試裝置是否存活，非必要。
  thing["alive"] >> outputValue(millis());
}

void loop() {
//維持連線
  thing.handle();
}
```
### DHT溫溼度感測器
#### 安裝DHT系列感測器使用的程式庫
先透過程式庫管理員搜尋 esp32 dht 並安裝此程式庫<br/>
![](../img/ArduinoDevice/LibManagerSearch_DHT.jpg "安裝DHT程式庫")<br/>
#### 這支程式將示範如何使用BPI UNO讀取溫溼度感測器(DHT系列)
```
#define _DEBUG_ //Debug 模式
#define _DISABLE_TLS_ //關閉TLS認證
#define THINGER_SERVER "192.168.137.233" //Server IP
#include <ThingerESP32.h>
//引入DHTesp標頭檔
#include <DHTesp.h>
// Device 驗證資訊
#define USERNAME "CCYTHinger"
#define DEVICE_ID "ESP32"
#define DEVICE_CREDENTIAL "AMDDAC"
// Wi-Fi 驗證資訊
#define SSID "MQTT3477"
#define SSID_PASSWORD "ll9187,5"

// 實體化伺服器驗證資訊
ThingerESP32 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);

//實體化DHTesp為變數dht
DHTesp dht;

void setup() {
//自動連線
  thing.add_wifi(SSID, SSID_PASSWORD);
//初始化dht腳位與類型，如為DHT22請自行修改
  dht.setup(4,DHTesp::DHT11);
  Serial.begin(115200);
//標示自身持有的資源
//名稱：DHT11
//可回送資料：Temp,Humidity
  thing["DHT11"] >> [](pson& out){
  	//當被呼叫時才向傳感器取得數值
      TempAndHumidity lastValues = dht.getTempAndHumidity();
    //回傳數值給伺服器
      out["Temp"] = lastValues.temperature;
      out["Humidity"] = lastValues.humidity;
  };
}

void loop() {
//維持連線
  thing.handle();
}
```
### 伺服馬達
先透過程式庫管理員搜尋 esp32 servo 並安裝此程式庫<br/>
![](../img/ArduinoDevice/LibManagerSearch_Servo.jpg "安裝DHT程式庫")<br/>
#### 這支程式將示範如何使用BPI UNO操作伺服馬達
```
#define _DEBUG_ //Debug 模式
#define _DISABLE_TLS_ //關閉TLS認證
#define THINGER_SERVER "192.168.137.233" //Server IP
#include <ThingerESP32.h>
//引入ESP32Servo標頭檔
#include <ESP32Servo.h>
// Device 驗證資訊
#define USERNAME "CCYTHinger"
#define DEVICE_ID "ESP32"
#define DEVICE_CREDENTIAL "AMDDAC"
// Wi-Fi 驗證資訊
#define SSID "MQTT3477"
#define SSID_PASSWORD "ll9187,5"
//建立Servo
Servo myservo;
ThingerESP32 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);
void setup() {
  myservo.attach(4);//指派至您訊號線連接的Pin
  Serial.begin(115200);
  //自動連線
  thing.add_wifi(SSID, SSID_PASSWORD);
  //初始化時告知API資源
  thing["servo"] << servo(myservo);
}

void loop() {
  thing.handle();
}
```