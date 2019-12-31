#define _DEBUG_
#define _DISABLE_TLS_
#define THINGER_SERVER "192.168.137.233"
#include <WiFi.h>
#include <ThingerWifi.h>
#define USERNAME "MagicDoufu"
#define DEVICE_ID "CC3200"
#define DEVICE_CREDENTIAL "j11RQPYZJZXO"
#define SSID "ThingerWiFi"
#define SSID_PASSWORD "ll9187,5"
#define LED RED_LED
ThingerWifi thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);
void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(115200);
  thing.add_wifi(SSID, SSID_PASSWORD);
  // pin control example (i.e. turning on/off a light, a relay, etc)
  thing["led"] << digitalPin(LED);

  // resource output example (i.e. reading a sensor value, a variable, etc)
  thing["millis"] >> outputValue(millis());
}

void loop() {
  thing.handle();
}
