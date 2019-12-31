#define THINGER_SERVER "192.168.137.237" //Server IP
#include <ThingerESP32.h>
#include <Wire.h>
#include "Adafruit_HTU21DF.h"
// Device 驗證資訊
#define USERNAME "MagicDoufu"
#define DEVICE_ID "ESP32"
#define DEVICE_CREDENTIAL "Ua&SUURyClgc"
// Wi-Fi 驗證資訊
#define SSID "ThingerWiFi"
#define SSID_PASSWORD "ll9187,5"

// 實體化伺服器驗證資訊
ThingerESP32 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);
// 實體化HTU21物件
Adafruit_HTU21DF htu = Adafruit_HTU21DF();
void setup() {
//開啟LED Pin輸出
  pinMode(16, OUTPUT);
  pinMode(17, OUTPUT);
  pinMode(27, OUTPUT);
  
  Serial.begin(115200);
  Serial.println("HTU21D-F test");

  if (!htu.begin()) {
    Serial.println("Couldn't find sensor!");
    while (1);
  } else {
    Serial.println(htu.readTemperature());
    Serial.println(htu.readHumidity());
  }

//自動連線
  thing.add_wifi(SSID, SSID_PASSWORD);
  thing["R"] << digitalPin(17);
  thing["G"] << digitalPin(16);
  thing["B"] << digitalPin(27);
//回傳資料格式
  thing["UHT21D"] >> [](pson& out){
      float humidity = 0.0, temp = 0.0;
      while(humidity == 0.0) {
        humidity = htu.readHumidity();
      }
      while(temp == 0.0) {
        temp = htu.readTemperature();
      }
      out["Temp"] = temp;
      out["Humidity"] = humidity;
  };
}

void loop() {
  thing.handle();
}
