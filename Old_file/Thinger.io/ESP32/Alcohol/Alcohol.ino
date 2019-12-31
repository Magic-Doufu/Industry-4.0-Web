const int AOUTpin=A0;//the AOUT pin of the alcohol sensor goes into analog pin A0 of the arduino
const int DOUTpin=4;//the DOUT pin of the alcohol sensor goes into digital pin D8 of the arduino

int limit;
int value;

void setup() {
Serial.begin(115200);//sets the baud rate
pinMode(DOUTpin, INPUT);//sets the pin as an input to the arduino
pinMode(17, OUTPUT);//sets the pin as an output of the arduino
}

void loop()
{
value= analogRead(AOUTpin);//reads the analaog value from the alcohol sensor's AOUT pin
limit= digitalRead(DOUTpin);//reads the digital value from the alcohol sensor's DOUT pin
Serial.print("Alcohol value: ");
Serial.print(value);//prints the alcohol value
Serial.print("\tLimit: ");
Serial.println(limit);//prints the limit reached as either LOW or HIGH (above or underneath)
delay(1000);
if (limit == HIGH){
digitalWrite(17, HIGH);//if limit has been reached, LED turns on as status indicator
}
else{
digitalWrite(17, LOW);//if threshold not reached, LED remains off
}
}
