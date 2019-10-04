#undef max
#undef min
#define _DEBUG_
#define _DISABLE_TLS_
#define THINGER_SERVER "192.168.137.233"
#include <WiFi101.h>
#include <ThingerWifi101.h>

#define USERNAME "MagicDoufu"
#define DEVICE_ID "MKR1000"
#define DEVICE_CREDENTIAL "@K9bt7Jxxgxu"
#define SSID "ThingerWiFi"
#define SSID_PASSWORD "ll9187,5"

ThingerWifi101 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);

void setup() {
  thing.add_wifi(SSID, SSID_PASSWORD);
  // pin control example (i.e. turning on/off a light, a relay, etc)
  thing["led"] << digitalPin(LED_BUILTIN);

  // resource output example (i.e. reading a sensor value, a variable, etc)
  thing["millis"] >> outputValue(millis());
}

void loop() {
  thing.handle();
}
