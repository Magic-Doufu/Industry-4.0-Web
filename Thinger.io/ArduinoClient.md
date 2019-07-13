# Thinger.io 繁體中文教學站
## 概觀
本文檔與Thinger.io平台的Arduino客戶端程式庫版本相關。<br/>
使用此程式庫，您可以使用乙太網，Wifi，GSM連接任何Arduino開發板或其他此受支援的開發板（如ESP8266，NodeMCU和TI CC3200）。<br/>
客戶端程式庫允許將您的IoT設備連接到Thinger.io雲端平台。這是專為Arduino IDE設計的程式庫，因此您可以輕鬆編程設備並在幾分鐘內連接它們。<br/>
此平台支援多種網絡接口和開發板，如Ethernet Shield，Wifi Shield和GSM。<br/>
它還支援其他開發板，如ESP8266（或NodeMCU），TI CC3200 Launchpad 和 Adafruit CC3000 電路板。<br/>
此平台的Arduino IDE最低需求為版本1.6.3。
## 安裝
開始構建 thinger.io 設備的第一步是在 Arduino IDE 中安裝所需的程式庫，以支援披露設備擁有的資源，如傳感器值，燈光，繼電器等。<br/>
如果你還沒有安裝Arduino IDE，那麼現在是開始的好時機，這裡也有一些選擇正確版本的建議。
### Arduino IDE
此平台的Arduino IDE最低需求為版本1.6.3，且需要支援「程式庫管理器」，如果您還沒安裝Arduino IDE可由官方網站下載最新版本。<br/>
__[Arduino IDE 下載頁](https://www.arduino.cc/en/Main/Software)__<br/>
接下來將為您介紹取得程式庫的方法，建議使用程式庫管理器，此方法極大簡化了搜尋與安裝過程，且會隨著官方發布新版時提供更新。<br/>
<!--另一方法為傳統下載並手動匯入壓縮包的方式。<br/>-->
### 程式庫管理器
在Arduino IDE中安裝可用程式庫的最簡單方法是使用程式庫管理器。<br/>
要安裝thinger.io程式庫，請按照以下步驟操作：<br/>
打開程式庫管理器<br/>
![](../img/ArduinoDevice/LibManager.jpg "程式庫管理員")<br/>
在Arduino的選單中打開程式庫管理器 `工具 > 管理程式庫`<br/>
搜尋並安裝 thinger.io 程式庫<br/>
![](../img/ArduinoDevice/LibManagerSearch.jpg "程式庫管理員")<br/>
使用名稱 thinger.io 搜尋，然後單擊 Install 進行安裝。<br/>
官方發布更新後，您還可以從此管理器更新程式庫。<br/>
現在，應該可以使用一些程式庫提供的範例。
<!--### 手動匯入
-->
## 支援的硬體
### Arduino + 乙太網路
### Arduino + WiFi
### Arduino + CC3000
### Arduino YUN
### Arduino MKR1000
### Arduino MKR GSM1400
### ESP8266 / NodeMCU
範例程式: __[ESP 範例](./ESP32Examples.md)__<br/>
### TI LAUNCHPAD CC3200
### Arduino + ENC28J60
### SEEEDSTUDIO LINKIT ONE
#### WIFI Connection
#### GPRS Connection
## 編程
### 架構概觀
幾乎所有的 Arduino 結構看起來都一樣。有一個設置方法，有一個循環方法。<br/>
與Thinger.io集成時，這裡沒有任何變化。<br/>
但是，您必須知道應該在何處定義設備資源，或者可以在何處與外部服務進行交互。一般而言，必須在setup()方法內定義任何設備資源（LED，繼電器，傳感器，伺服等）。<br/>
除了初始化設備，設置數字引腳的輸入/輸出方向，或初始化串行端口速度，您還需要在此初始化您的資源。這基本上包括設定要通過網路公開的值或資源。<br/>
loop()僅僅是不斷調用thing.handle()方法去維持與伺服器的聯繫，因此較小的程式庫即可處理與平台的連接。<br/>
這也是調用終端或將即時資料流傳輸至目的地的地方。<br/>
請注意，除非您知道自己在做什麼，否則不要在loop()內部添加任何延遲，例如在您的設備中使用深度睡眠模式等。<br/>
任何其他延遲都將影響Thinger在您設備中的正常運行。<br/>
如果傳感器花費太多時間來完成讀取，那麼在每個循環中讀取傳感器值也是不好的。<br/>
這將導致設備在參與我們的命令時出現明顯的延遲。<br/>
當你安裝完成後，通常可以找到一些範例程式。<br/>
結構示範：<br/>
```
//引入任何需要使用的標頭檔
#include <SPI.h>
#include <Ethernet.h>
#include <ThingerEthernet.h>

//初始化界面與資源
ThingerEthernet thing("username", "deviceId", "deviceCredential");

void setup() {
    //初始化Sensor或任意接腳

    //初始化WiFi

    //在此新增您想披露至伺服器的資源(針腳、傳感器、LED等)
}

void loop() {
  //請勿在此新增任何延遲(delay)，並保持隨時調用thing.handle()
  thing.handle(); 
  //在此可以呼叫終端還有傳遞您的串流資料
}
```
### 設定驗證資訊
連接到雲端平台的所有設備都需要針對服務器進行身份驗證。<br/>
在控制台中創建設備時，您基本上是在創建新設備標籤並設置設備憑據。<br/>
因此，您還需要在Arduino代碼中設置此憑據，以便識別設備並將其與您的帳戶相關聯。<br/>
這通常在代碼中初始化Thinger實例時完成。也就是說，當您定義thing實例時。在此替換您的username，deviceId以及deviceCredential您在雲中註冊的值。<br/>
`ThingerWifi thing("username", "deviceId", "deviceCredential");`
### 新增資源
在Thinger.io平台中，每個設備都可以定義多個資源。您可以認為資源是您可以感測或觸發的任何資源。
例如，典型的資源將是溫度或濕度等傳感器值，或者打開和關閉燈的繼電器。
這樣，您應該定義通過網路披露所需的資源。
必須在Arduino的setup()方法中定義所有資源。這樣，資源將在初始化時被配置，之後可以根據需求進行存取。
有三種不同類型的資源，將在以下各節中進行說明。
#### 輸入類資源(伺服器端輸入至裝置)
如果您需要控制或啟動IoT設備，則需要定義輸入資源。通過這種方式，輸入資源可以為您的設備提供資訊。例如打開和關閉燈或繼電器，改變伺服馬達位置，調整設備參數等的資源。<br/>
要定義輸入資源，請使用`<<`指向資源名稱的運算符，它使用C ++ 11 Lambda函數來定義函數。<br/>

範例為接受一個參數的輸入資源函數，pson是一種泛型，可以包含布林值，數字，浮點數，字符串，甚至是JSON文檔中的結構化資訊。<br/>
以下小節將說明如何為典型用例定義不同的輸入資源。<br/>
##### 打開/關閉LED，繼電器等
這種資源只需要一個開/關狀態，因此可以根據需要啟用或禁用它。由於pson類型包含多種數據類型，我們可以認為pson輸入函數的參數類似於布林值。<br/>
因此，在setup函數內部，您可以放置​​一個名為led（您也可以使用任何其他名稱）的資源，其輸入參數類型可以使用pson。<br/>
該示例將使用in參數上的三元運算符來打開/關閉數字引腳10 。<br/>
```
thing["led"] << [](pson& in){
  digitalWrite(10, in ? HIGH : LOW);
};
```
##### 修改伺服馬達位置

修改伺服馬達位置非常類似於打開/關閉LED。但是，在這種情況下，必須使用整數值。<br/>
由於pson類型可以包含多種數據類型，我們仍然可以將該pson類型用作整數值。<br/>
```
thing["servo"] << [](pson& in){
    myServo.write(in);
};
```
##### 更新變數

您還可以使用輸入資源更新變數，以便動態更改設備行為。在某些您希望臨時禁用警報，更改報告間隔，更新滯後值等情況下，這非常有用。通過這種方式，您可以定義其他資源來更改變量。
```
float hysteresis = 0; // defined as a global variable
thing["hysteresis"] << [](pson& in){
    hysteresis = in;
};
```
##### 傳遞多個參數

該pson數據類型，不僅可以容納不同的數據類型，也就是使用JSON文件完全相容。因此，您可以使用pson數據類型同時接收多個值。此範例將接收使用lat和lon鍵(key)存儲的兩個不同浮點數(value)。
```
thing["location"] << [](pson& in){
    float lat = in["lat"];
    float lon = in["lon"];
};
```
##### 在儀表板和API中顯示輸入資源狀態

Dashboards或API的工作方式是，當您打開它們時，它們會查詢相關資源以正確顯示其當前狀態，即開關打開或關閉。<br/>
這樣，當API或儀表板打開時，調用每個相關的輸入資源，在調用中接收空數據，因為無意控制資源（pson輸入將為空）。

那麼，Dashboards或API如何知道輸入資源的當前狀態是什麼？如果資源為空，則資源必須在輸入參數中設置其當前狀態，如果存在，則使用輸入值。這樣，我們可以獲得三個不同的東西：查詢當前資源狀態（不修改它），修改當前資源狀態，以及獲取資源上的預期輸入（這是設備上的API資源管理器的工作方式）。

因此，實際上允許在儀表板或API中顯示資源的當前狀態的正確輸入資源定義將類似於此範例程式碼。
```
thing["resource"] << [](pson& in){
    if(in.is_empty()){
        in = currentState;
    }
    else{
        currentState = in;
    }
}
```
如果沒有輸入物件，此示例代碼基本上返回當前狀態（如布林值，數字等），或使用傳入數據更新當前狀態。這可以很容易地適用於控制LED，同時在打開或更新時在儀表板中顯示其當前狀態。
```
thing["led"] << [](pson& in){
    if(in.is_empty()){
        in = (bool) digitalRead(pin);
    }
    else{
        digitalWrite(pin, in ? HIGH : LOW);
    }
}
```
注意：要控制數字引腳，只需使用`更易用的資源定義`部分中說明的方法。
#### 輸出類資源(裝置輸出至伺服器端)
當您需要感知或讀取傳感器值（如溫度，濕度等）時，通常應使用輸出資源。因此，輸出資源對於從設備中提取信息非常有用。<br/>
為了定義輸出資源，使用操作符>>指出資源名稱，它使用C ++ 11 Lambda函數來定義輸出函數。<br/>
範例為接收一個參數的輸出資源函數，pson是一種泛型，可以包含布林值，數字，浮點數，字符串，甚至是JSON文檔中的結構化資訊。<br/>
以下小節將說明如何為典型用例定義不同的輸出資源。<br/>
##### 讀取傳感器值
定義輸出資源與定義輸入資源非常相似，但在這種情況下，它使用運算符`>>`。在回調函數中，可以用任何我們想要的值替換out值，比如在這種情況下傳感器讀數的輸出。<br/>
```
thing["temperature"] >> [](pson& out){
      out = dht.readTemperature();
};
```
##### 讀取多個數據
以相同的方式輸入資源可以同時接收多個值，輸出資源也可以提供多個數據。這是從GPS提供緯度和經度的示例。<br/>
```
thing["location"] >> [](pson& out){
      out["lat"] = gps.getLatitude();
      out["lon"] = gps.getLongitude();
};
```
##### 取得變數數值

如果無法提供單個傳感器讀數，因為它正在進行某種數據收集，則輸出資源也可用於讀取變數，其中計算結果會經常更新。<br/>
```
float yaw = 0; // defined as a global variable
thing["yaw"] >> [](pson& out){
      out = yaw;
};
```
#### 輸入/輸出資源
最後一種資源類型是一種資源，它不僅接受輸入或輸出，而且接受兩個參數。當您想要讀取依賴於輸入的輸出時，即當您需要向傳感器提供變化的參考值時，這非常有用。<br/>

這種資源通常由供應商定義。<br/>
在這種情況下，該函數採用兩個不同的pson參數。一個用於輸入數據，另一個用於輸出數據。<br/>
此示例使用BMP180傳感器提供高度讀數。它將參考高度作為輸入，並提供當前高度作為輸出。<br/>
```
thing["altitude"] = [](pson& in, pson& out){
    out = bmp.readAltitude(in);
};
```
您還可以定義更複雜的輸入/輸出資源（需要多個輸入值），以提供多個輸出值，例如此示例中包含value1和value2提供sum和mult值。<br/>
```
thing["in_out"] = [](pson& in, pson& out){
    out["sum"] = (long)in["value1"] + (long)in["value2"];
    out["mult"] = (long)in["value1"] * (long)in["value2"];
};
```
#### 沒有參數的資源
您也可以定義不需要任何輸入的資源，也不會生成任何輸出。它們就像可以根據需要執行的回調，例如重啟設備或執行一些必要的操作。<br/>
在這種情況下，資源被定義為沒有任何輸入或輸出參數的函數。
```
thing["resource"] = [](){
    // write here your execution code
};
```
### 更易用的資源定義
客戶端庫還包含一些有用的語法定義，用於更輕鬆地聲明資源，而無需考慮輸入或輸出資源。這種語法特性是自動擴展的腳本，以標準方式定義資源。<br/>
使用這種定義的優點是，當您從API查詢時，您的資源將能夠處理狀態。<br/>
例如，如果啟用或禁用了數字引腳，則可以在API資源管理器或儀表板中檢視其當前狀態。<br/>
#### 控制數位引腳
這種資源將允許定義用於聲明對數位引腳的控制的資源，因此您可以交替開啟/關閉狀態，可以用於控制LED，繼電器，燈等。<br/>
需要在設置程式碼中將數位引腳定義為OUTPUT，否則資源將無法正常工作。<br/>
```
thing["relay"] << digitalPin(PIN_NUMBER);
thing["relay"] << invertedDigitalPin(PIN_NUMBER);
```
#### 定義輸出資源
這種資源定義用於宣告唯讀資源，例如從傳感器獲取的值，或者我們程式中的初始化變數。<br/>
在這個例子中，我們定義了一個暴露傳感器讀數的資源，比如DHT11傳感器溫度。<br/>
```
thing["temperature"] >> outputValue(dht.readTemperature());
```
我們也可以在程式中為任何全域變數定義輸出資源。<br/>
```
thing["variable"] >> outputValue(myVar);
```
#### 修改變數
我們的程式通常定義一些在循環中使用的參數或變數。這種資源通常用於處理或控制行為。<br/>
有了這種資源，我們可以修改我們想要公開的任何參數，比如浮點數，整數，布林值等。<br/>

在此示例中，可以遠端修改`sdLogging`定義為全域變數的布林變數變量。
```
thing["logging"] << inputValue(sdLogging);
```
也可以定義一個回調函數來知道變數何時發生了變化，因此我們可以執行任何其他操作。<br/>
對於此用例，請將資源定義為以下內容，以便在`hysteresisVar`更改時執行某些代碼。<br/>
```
thing["hysteresis"] << inputValue(hysteresisVar, {
    // execute some code when the value change
    Serial.println("Hystereis changed to: ");
    Serial.print(hysteresisVar);
});
```
#### 控制伺服馬達
還可以定義用於控制伺服實例的資源。這樣，定義的資源將根據API交互自動處理您的伺服實例，讀取其當前位置或更改為新的。

要定義伺服資源，只需像往常一樣定義和初始化伺服機，然後在資源定義中使用聲明的實例。
```
thing["servo"] << servo(myServoInstance);
```
### 不同裝置間的橫向溝通
#### 裝置位於同一個帳戶管理下
#### 裝置位於不同帳戶
### 終端裝置
#### 呼叫終端裝置
#### 傳送資料給終端裝置
#### Email 類型終端裝置範例
### 串流類資源
### 開啟偵錯輸出
### ESP8266 深層睡眠與智慧設定
## 互動
### Android
#### 手機端應用程式
#### 穿戴型裝置
### 雲端控制台
#### 儀錶板
#### API 瀏覽器
### 伺服器API