# MQ3酒精感測器

MQ3酒精感測器模組乙醇感測器模組，可應用於機動車駕駛人員及其他嚴禁酒後作業人員的現場檢測，也適用於其他場所乙醇蒸汽的檢測

工作電壓：DC5V
◎ 具有信號輸出指示
◎ 雙路信號輸出（模擬量輸出及TTL電平輸出）
◎ TTL輸出有效信號為低電位 ( 當輸出低電位時信號燈亮，可接單板機)
◎ 模擬量輸出0 ~ 5V電壓，濃度越高電壓越高
◎ 對乙醇蒸汽具有很高的靈敏度和良好的選擇性
◎ 具有長期的使用壽命和可靠的穩定性
◎ 快速的響應恢復特性
◎ 端口說明：DO為數位輸出，AO為模擬輸出
◎ 設有固定螺栓孔，方便安裝
◎ 應用：用於駕駛人員及其他嚴禁酒後作業人員的現場檢測，也用於其他場所乙醇蒸汽的檢測


![](~@sensors/MQ3/MQ3.jpg)
程式範例:
```cpp
/* MQ-3 Alcohol Sensor Circuit with Arduino */

const int AOUTpin=3;//the AOUT pin of the alcohol sensor goes into analog pin A0 of the arduino

int value;

void setup() {
Serial.begin(9600);//sets the baud rate

}

void loop()
{
value= analogRead(AOUTpin);//reads the analaog value from the alcohol sensor&#39;s AOUT pin
Serial.print("Alcohol value: ");
Serial.println(value);//prints the alcohol value
delay(1000);
}
```

結果:

![](~@sensors/MQ3/1.jpg)

![](~@sensors/MQ3/2.jpg)
![](~@sensors/MQ3/3.jpg)

