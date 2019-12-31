# 火焰探測器

火焰探測器上面有電位器可以調整靈敏度，跟訪間上的安防設備原理一樣。

四根PIN，DC/5V/+/-、數位輸出DO、類比輸出AO。

火焰探測器是一種設計用於探測和響應火焰或火災的感測器。對檢測到的火焰的響應方式取決於加裝的裝置，可以包括髮出警報、停用燃料管線（例如丙烷或天然氣管線），以及啟動滅火系統。

火焰檢測有很多種不同的方法。其中一些是：紫外線探測器、近紅外陣列探測器、紅外（IR）探測器、紅外熱像儀、紫外/紅外探測器等。

當火焰燃燒時，它會發出少量的紅外線，這些紅外線被感測器模組上的光電二極體（紅外接收器）接收。然後我們使用運算放大器來檢查IR接收器兩端的電壓變化，這樣如果檢測到火災，輸出引腳（DO）將輸出0V（低電平），如果沒有火災，輸出引腳將輸出5V（高）。


![](~@sensors/Flame/F.jpg)

程式範例:
```cpp
#include <pitches.h>
                                         
const int fireSensor=8;                                      
int val;  

void setup(){ 

  pinMode(fireSensor,INPUT);
  Serial.begin(9600);//sets the baud rate
}

void loop(){
  val=analogRead(fireSensor);
  Serial.print("Fire value: ");
  Serial.println(val);
  

}
```

結果:

![](~@sensors/Flame/1.jpg)

![](~@sensors/Flame/2.jpg)
![](~@sensors/Flame/3.jpg)

