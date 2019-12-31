# RFID

    無線射頻辨識（Radio Frequency IDentification，RFID）是一種無線通訊技術
可以通過無線電訊號識別特定目標並讀寫相關數據，而無需識別系統與特定目標之間建立機械或者光學接觸。


產品簡介：
    MF522-AN模組採用Philips MFRC522原裝晶片設計讀卡電路，使用方便，成本低廉，適用於設備開發、讀卡器開發等高級應用的用戶、需要進行射頻卡終端設計/生產的用戶。本模組可直接裝入各種讀卡器模具。模組採用電壓為3.3V，通過SPI接口簡單的幾條線就可以直接與用戶任何CPU主板相連接通信，可以保證模組穩定可靠的工作、讀卡距離遠。

　　作為13.56MHz高集成度讀寫卡系列晶片家族的新成員，MF RC522與MF RC500和MF RC530有不少相似之處，同時也具備許多特點和差異。它與主機間通信採用SPI模式，有利於減少連線，縮小PCB板體積，降低成本。


產品規格：
・工作電流：13-26mA/直流3.3V
・空閒電流：10-13mA/直流3.3V
・休眠電流：<80uA
・峰值電流：<30mA 
・工作頻率：13.56MHz
・支持的卡類型：mifare1 S50、mifare1 S70、mifare UltraLight、mifare Pro、mifare Desfire
・數據傳輸速率：最大10Mbit/s
・產品物理特性：尺寸：40mmx60mm
・環境工作溫度：攝氏-20-80度
・環境儲存溫度：攝氏-40-85度
・環境相對濕度：相對濕度5%-95%


常見之應用:
・鈔票及產品防偽技術
・身份證、護照、通行證（包括門票）
・電子收費系統（如公交卡）
・家畜、寵物或野生動物識別
・病人識別及電子病歷
・物流管理
・行李分類
・門禁系統


電路:
![](~@sensors/RFID/RFID1.jpg)

需先下載MFRC522程式庫:


![](~@sensors/RFID/RFID2.jpg)
![](~@sensors/RFID/RFID3.jpg)

程式:
```cpp
#include <SPI.h>
#include <MFRC522.h> // 引用程式庫

#define RST A0 // 讀卡機的重置腳位
#define SS 10 // 晶片選擇腳位
MFRC522 rfid(SS, RST); // 建立MFRC522物件

void setup() {
  Serial.begin(9600);
  SPI.begin();
  rfid.PCD_Init(); // 初始化MFRC522讀卡機模組
}
void loop() {
  // 確認是否有新卡片
  if (rfid.PICC_IsNewCardPresent() && rfid.PICC_ReadCardSerial()) {
    
    byte *id = rfid.uid.uidByte; // 取得卡片的UID
    byte idSize = rfid.uid.size; // 取得UID的長度
    
    Serial.print("PICC type: "); // 顯示卡片類型
    // 根據卡片回應的SAK值
    MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);
    Serial.println(rfid.PICC_GetTypeName(piccType));
    
    Serial.print("UID Size: "); // 顯示卡片的UID長度值
    Serial.println(idSize);
    for (byte i = 0; i < idSize; i++) { // 逐一顯示UID碼
      Serial.print(id[i], DEC); // 以16進位顯示UID值
      Serial.print(" "); 
    }
    Serial.println();
    rfid.PICC_HaltA(); // 讓卡片進入停止模式
  }
}
```

結果:


![](~@sensors/RFID/RFID.jpg)
![](~@sensors/RFID/RFID4.jpg)


