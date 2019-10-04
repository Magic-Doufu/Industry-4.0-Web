#define _DEBUG_
#define _DISABLE_TLS_
#define THINGER_SERVER "192.168.137.233"
#include <LTask.h>
#include <LWiFi.h>
#include <LWiFiClient.h>
#include <ThingerLinkItOneWifi.h>

#define USERNAME "MagicDoufu"
#define DEVICE_ID "LinkItONE"
#define DEVICE_CREDENTIAL "3dSsCMP9gqN7"
#define SSID "ThingerWiFi"
#define SSID_PASSWORD "ll9187,5"

ThingerLinkItOneWifi thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);

void setup() {
    thing.add_wifi(SSID, SSID_PASSWORD);
    pinMode(13, OUTPUT);
    // pin control example (i.e. turning on/off a light, a relay, etc)
    thing["led"] << digitalPin(13);

    // resource output example (i.e. reading a sensor value, a variable, etc)
    thing["millis"] >> outputValue(millis());
}

void loop() {
    thing.handle();
}
