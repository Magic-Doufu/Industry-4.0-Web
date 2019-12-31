#define _DEBUG_
#define _DISABLE_TLS_
#define THINGER_SERVER "192.168.137.233"
#include <BridgeSSLClient.h>
#include <ThingerYun.h>

#define USERNAME "MagicDoufu"
#define DEVICE_ID "ArduinoYun"
#define DEVICE_CREDENTIAL "kIAqa@kq7xWj"

ThingerYun thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  // initialize bridge
  Bridge.begin();

  // pin control example (i.e. turning on/off a light, a relay, etc)
  thing["led"] << digitalPin(LED_BUILTIN);

  // resource output example (i.e. reading a sensor value, a variable, etc)
  thing["millis"] >> outputValue(millis());
}

void loop() {
  thing.handle();
}
