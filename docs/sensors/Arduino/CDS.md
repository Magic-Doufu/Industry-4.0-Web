# CDS_Light_control_module CDS光控模組

1. 光敏電阻模組對環境光線最敏感，一般用來檢測周圍境的光亮度觸發單片機或繼電器模組等；
2. 模組在環境光線亮度達不到設定閾值時，DO端輸出高電平，當外界環境光線亮度超過設定閾值時，DO端輸出低電平
3. DO輸出端可以與單片機直接相連，通過單片機來檢測高低電平，由此來檢測環境的光線亮度改變
4. DO輸出端可以直接驅動本店繼電器模組，由此可以組成一個光控開關。
5. 小板模擬量輸出AO可以和AD模組相連，通過AD轉換，可以獲得環境光強更精準的數值

模組特色：
1. 採用靈敏型光敏電阻感測器
2. 比較器輸出，信號乾淨，波形好，驅動能力強，超過15mA。
3. 配可調電位器可調節檢測光線亮度
4. 工作電壓3.3V-5V
5. 輸出形式 ：DO數位開關量輸出（0和1）和AO類比電壓輸出
6. 設有固定螺栓孔，方便安裝
7. 小板PCB尺寸：3.2cm x 1.4cm
8. 使用寬電壓LM393比較器

![](~@sensors/CDS/1.jpg)

程式範例：
```cpp
//CDS_Light_control_module_
int Cds_Objects = 3; //光感輸入
int Cds = 0; //光感初始值

void setup() {
 Serial.begin(9600);
  pinMode(Cds_Objects,INPUT); //定義輸入端
}

void loop() {
  Cds=digitalRead(Cds_Objects); //讀值
  Serial.println(Cds);
}
```

結果：

電路(接線)

![](~@sensors/CDS/150483.jpg)
![](~@sensors/CDS/1561538592718.jpg)