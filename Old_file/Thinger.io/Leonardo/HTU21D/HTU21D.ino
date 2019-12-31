#define THINGER_SERVER "192.168.137.237"
#include <Adafruit_CC3000.h>
#include <SPI.h>
#include <ccspi.h>
//#include <Wire.h>
//#include "Adafruit_HTU21DF.h"
#define ADAFRUIT_CC3000_IRQ   7  // MUST be an interrupt pin!
#include <ThingerCC3000.h>
#define USERNAME "MagicDoufu"
#define DEVICE_ID "CC3000"
#define DEVICE_CREDENTIAL "ffeSjA7RKZyI"
#define SSID "ThingerWiFi"
#define SSID_PASSWORD "ll9187,5"

ThingerCC3000 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);
//Adafruit_HTU21DF htu = Adafruit_HTU21DF();

void setup() {
    thing.add_wifi(SSID, SSID_PASSWORD);
    // resource output example (i.e. reading a sensor value, a variable, etc)
    //thing["hudimi"] >> outputValue(htu.readHumidity());
    //thing["tempture"] >> outputValue(htu.readTemperature());
}

void loop() {
  thing.handle();
}
