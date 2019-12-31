#define THINGER_SERVER "192.168.137.237"
#include <LTask.h>
#include <LWiFi.h>
#include <LWiFiClient.h>
#include <ThingerLinkItOneWifi.h>

#define USERNAME "MagicDoufu"
#define DEVICE_ID "LinkItONE"
#define DEVICE_CREDENTIAL "3dSsCMP9gqN7"
#define SSID "ThingerWiFi"
#define SSID_PASSWORD "ll9187,5"

short type = -1;//begin or not begin
bool tempA,tempB;
unsigned long time;
int pos = 0, prev = 0;
int code[4][2] = {{0,0},{0,1},{1,1},{1,0}};

ThingerLinkItOneWifi thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);
void setup() {
    Serial.begin(115200);
    thing.add_wifi(SSID, SSID_PASSWORD);
    thing["rotary"] >> [](pson& out){     
      out = pos;
    };
    thing.stream(thing["rotary"]);
}

void loop() {
    thing.handle();
    rotaryDecoder();
    if(pos != prev) {
      prev = pos;
      Serial.println(pos);
      thing.stream(thing["rotary"]);
      pson data;
      data["pos"] = pos;
      thing.call_endpoint("servoControl",data);
    }
}

void rotaryDecoder(){
  // put your main code here, to run repeatedly:
  tempA = digitalRead(2);
  tempB = digitalRead(3);
  //Serial.print(tempA);
  //Serial.println(tempB);
  if (tempA == code[1][0] && tempB == code[1][1])
    type = 1;
  if (tempA == code[3][0] && tempB == code[3][1])
    type = 2;
  time = millis();
  while(millis() - time < 50 && type > 0) {
    tempA = digitalRead(2);
    tempB = digitalRead(3);
    if((type == 2 && tempA == code[0][0] && tempB == code[0][1]) || (type == 1 && tempA == code[2][0] && tempB == code[2][1])) {
      if (pos < 180)
        pos++;
      break;
    }
    if((type == 1 && tempA == code[0][0] && tempB == code[0][1]) || (type == 2 && tempA == code[2][0] && tempB == code[2][1])) {
      if (pos > 0)
        pos--;
      break;
    }
  }
  type = -1;
}
