# lightblocking 光遮斷模組

![](~@sensors/lightblocking/1.jpg)
![](~@sensors/lightblocking/2.jpg)
    

程式範例：
```cpp
int Led = 13 ;// 定義Led腳位為13
int buttonpin = 3; // 定義光遮斷器感測腳位為3
int val ;// 定義val
void setup ()
{
Serial.begin(9600);
pinMode (Led, OUTPUT) ;// 定義Led腳位為輸出腳位
pinMode (buttonpin, INPUT) ;// 定義buttonpin為輸入腳位
}
void loop ()
{
val = digitalRead (buttonpin) ;// 讀取buttonpin值
if (val == HIGH) // 如果光遮斷器訊號被中斷則LED亮起。
{
digitalWrite (Led, HIGH);
}
else
{
digitalWrite (Led, LOW);
}
}
```

結果：

電路(接線)
![](~@sensors/lightblocking/lightblocking.jpg)


