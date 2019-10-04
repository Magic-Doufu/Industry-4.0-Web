#define _DEBUG_
#define _DISABLE_TLS_
#define THINGER_SERVER "192.168.137.233"
#include <Adafruit_CC3000.h>
#include <SPI.h>
#include <ccspi.h>
#define ADAFRUIT_CC3000_IRQ   7  // MUST be an interrupt pin!
#include <ThingerCC3000.h>
#define USERNAME "MagicDoufu"
#define DEVICE_ID "CC3000"
#define DEVICE_CREDENTIAL "ffeSjA7RKZyI"
#define SSID "ThingerWiFi"
#define SSID_PASSWORD "ll9187,5"

ThingerCC3000 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);

void setup() {
    thing.add_wifi(SSID, SSID_PASSWORD);
    pinMode(LED_BUILTIN, OUTPUT);
    // pin control example (i.e. turning on/off a light, a relay, etc)
    thing["led"] << digitalPin(LED_BUILTIN);

    // resource output example (i.e. reading a sensor value, a variable, etc)
    thing["millis"] >> outputValue(millis());
}

void loop() {
  thing.handle();
}
