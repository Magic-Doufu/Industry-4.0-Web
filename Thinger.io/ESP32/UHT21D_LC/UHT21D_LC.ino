//#define _DEBUG_
#define THINGER_SERVER "192.168.137.237" //Server IP
#include <ThingerESP32.h>
#include <Wire.h>
#include <LiquidCrystal.h>
#include "Adafruit_HTU21DF.h"
#include <ESP32Servo.h>
#include <string>

// Device 驗證資訊
#define USERNAME "MagicDoufu"
#define DEVICE_ID "ESP32"
#define DEVICE_CREDENTIAL "Ua&SUURyClgc"
// Wi-Fi 驗證資訊
#define SSID "ThingerWiFi"
#define SSID_PASSWORD "ll9187,5"

const int rs = 4, en = 2, d4 = 15, d5 = 13, d6 = 12, d7 = 14;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);
Servo myservo;  // create servo object to control a servo
unsigned long prevTime = 0, checkTime = 0;
float humidity = 0.0, temp = 0.0;
bool LCD_STAT = false, carouselEN = false;
char charline0[17] = "",charline1[17] = "";

int warnInterval = 60, carouselInterval = 5;
float warnTemp = 30;
pson data;

// 實體化伺服器驗證資訊
ThingerESP32 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);
// 實體化HTU21物件
Adafruit_HTU21DF htu = Adafruit_HTU21DF();
void LCD_HT();

void setup() {
  Serial.begin(115200);
//初始化LCD
  lcd.begin(16, 2);
  lcd.clear();
  lcd.noAutoscroll();
  lcd.blink();
  lcd.print("hello, world!");
  delay(2000);
//開啟LED Pin輸出
  pinMode(16, OUTPUT);
  pinMode(17, OUTPUT);
  pinMode(27, OUTPUT);
  lcd.clear();
  lcd.print("HTU21D-F test");
  delay(2000);
  Serial.begin(115200);
//檢測UHT21是否可用
  if (!htu.begin()) {
    lcd.setCursor(0,1);
    lcd.print("HTU21 init fail!");
    while (1);
  } else {
    readHT();
    LCD_HT();
  }

//自動連線
  thing.add_wifi(SSID, SSID_PASSWORD);
  //LED
  thing["LEDs"] << [](pson& in){
    digitalWrite(17,in["R"]);
    digitalWrite(16,in["G"]);
    digitalWrite(27,in["B"]);
  };
  //輪播
  thing["Carousel"] << [](pson& in) {
    if(in.is_empty()) {
      in["value1"] = (String)charline0;
      in["value2"] = (String)charline1;
    } else {
      strncpy(charline0,in["value1"],16);
      strncpy(charline1,in["value2"],16);
      LCD_STAT = true;
      prevTime = millis();
      carouselEN = true;
      LCD_Carousel();
    }
  };
  //數值
  thing["Values"] << [](pson& in) {
    if(in.is_empty()) {
      in["warnInterval"] = warnInterval;
      in["warnTemp"] = warnTemp;
      in["carouselEN"] = carouselEN;
      in["carouselInterval"] = carouselInterval;
    } else {
      warnInterval = in["warnInterval"];
      warnTemp = in["warnTemp"];
      carouselEN = in["carouselEN"];
      carouselInterval = in["carouselInterval"];
    }
  };
  
//溫溼度
  thing["UHT21D"] >> [](pson& out){
    readHT();
    out["Temp"] = temp;
    out["Humidity"] = humidity;
  };
//servo
  myservo.setPeriodHertz(50);    // standard 50 hz servo
  myservo.attach(18, 500, 2400); // attaches the servo on pin 18 to the servo object
  myservo.write(90);
  //servo資源
  thing["servo"] << [](pson& in){
    if(in.is_empty())
      in = myservo.read();
    else
      myservo.write(in);
  };
  
  thing["millis"] >> outputValue(millis());
}

void loop() {
  thing.handle();
  //LCD更新
  if (millis() - prevTime > carouselInterval*1000) {
    prevTime = millis();
    LCD_Carousel();
  }
  //Email寄送
  if (millis() - checkTime > warnInterval*60*1000) {
    checkTime = millis();
    if(temp > warnTemp) {
      char s[5];
      dtostrf(temp,3,2,&s[0]);
      data["temperature"] = String(s);
      dtostrf(humidity,3,2,&s[0]);
      data["humidity"] = String(s);
      //寄信
      thing.call_endpoint("tempWarning",data);
    }
  }
}
//讀取溫度
void readHT() {
  do
    humidity = htu.readHumidity();
  while(humidity == 0.0);
  do
    temp = htu.readTemperature();
  while(temp == 0.0);
}
//LCD更新溫度
void LCD_HT(){
    lcd.clear();
    lcd.print("Temp:");
    lcd.print(temp);
    lcd.print((char)0xDF);
    lcd.print('C');
    lcd.setCursor(0,1);
    lcd.print("Humitidty:");
    lcd.print(humidity);
    lcd.print('%');
}
//LCD循環
void LCD_Carousel() {
    if(LCD_STAT and carouselEN){
      lcd.clear();
      lcd.print(charline0);
      lcd.setCursor(0,1);
      lcd.print(charline1);
    } else {
      readHT();
      LCD_HT();
    }
    LCD_STAT = !LCD_STAT;
}
