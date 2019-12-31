---
sidebar: false
---

# 傳產工業4.0協作計畫
## 關於這個計畫
此計畫是由中華民國台灣(R.O.C TAIWAN)教育部發起的跨域人才培訓計畫其中一個分項的開源協作項，本協作團隊屬教育機構，且不使用該頁內容進行任何商業行為。
本計畫原預計為期四年，以協助開源軟體發展為目的，首年目標為針對該開源項目了解並進行應用，但因種種因素，第一年執行完後應予以終止。

## 關於我們
我們是來自高雄科技大學的一支小團隊，為該協作企畫的參與者，找定物聯網控制平台後，對該平台產生興趣，因此開始嘗試對該平台進行貢獻。第一步先稍微了解該平台的應用方式，並且參閱文件，根據文件進行翻譯協助推廣該開源平台。
同時，我們也對一些常見的感測器進行測試並編寫範例程式，如：DHT22、HTU21D、風扇、伺服馬達、壓力感測器、光遮斷模組等。最後，根據常用的通訊協定整理一些有關電氣特性與時序的文件。

## 工業4.0

工業4.0（英語：Industry 4.0、德語：Industrie 4.0），或稱生產力4.0，是一個德國政府提出的高科技計劃，又稱為第四次工業革命。2013年德國聯邦教育及研究部和聯邦經濟及科技部將其納入《高技術戰略2020》的十大未來專案，投資預計達2億歐元，用來提昇製造業的電腦化、數位化和智慧型化。德國機械及製造商協會（VDMA）等設立了「工業4.0平台」；德國電氣電子及資訊技術協會發布了德國首個工業4.0標準化路線圖。

所謂的4.0並不是單單創造新的工業技術，而是著重在將現有的工業相關的技術、銷售與產品體驗統合起來，是建立具有適應性、資源效率和人因工程學的智慧型工廠，並在商業流程及價值流程中整合客戶以及商業夥伴，提供完善的售後服務。其技術基礎是智慧型整合感控系統及物聯網。這樣的架構雖然還在摸索，但如果得以陸續成真並應用，最終將能建構出一個有感知意識的新型智慧型工業世界，能透過分析各種巨量資料，直接生成一個充分滿足客戶的相關解決方案產品（需求客製化），更可利用電腦預測，例如天氣預測、公共運輸、市場調查資料等等，及時精準生產或調度現有資源、減少多餘成本與浪費等等（供應端優化），需要注意的是工業只是這個智慧型世界的一個部件，需要以「工業如何適應智慧型網路下的未來生活」去理解才不會搞混工業的種種概念。

## 四次工業革命
第一次工業革命是利用水力及蒸汽的力量作為動力源突破了以往人力與獸力的限制，第二次工業革命則使用電力為大量生產提供動力與支援，也讓機器生產機器的目標實現，第三次工業革命則是使用電子裝置及資訊技術（IT）來校除人為影響以增進工業製造的精準化、自動化。工業4.0的核心詞彙是智慧型整合感控系統，而且是高度自動化，可以主動排除生產障礙，在中國製造2025和美國製造業振興計劃也都提到了。

由於智慧型整合感控系統需要提供各種必需的資訊給IT處理，透過資料科學方式分析數據產生資料，而資料採集與介入控制正是物聯網技術感知層的發展重點。因此我們可以說，工業4.0的面向，應用最廣泛的技術即是物聯網。

## 物聯網是什麼？
物聯網，Internet of Thing(IoT)是由實際物體，如車輛、機器、家用電器等等，經由嵌入式感測器和 API 等裝置，透過網際網路所形成的訊息連結與交換網路。

## 物聯網模型
- 應用層：雲端平台、數據可視化、API提供，都位於這一層。此層可由雲端平台的供應完整度，實現各種分析與控制行為。
- 網路層：位於中層，感知層取得設備產出之數據後，經由網路(可能是WiFi、4G、有線網路等)傳輸至雲端平台，或由雲端平台提供資料來控制設備行為。
- 感知層：位於最底層，目的為量化設備、產品所產生的數據，讓設備、產品進入IT的領域。工業用則常見RS422、RS485、MODBUS、CANBUS等，這些總線產出的數據亦可轉換為可判讀之數據。

## 資訊安全
除以上三層以外，只要碰到具有聯網功能產品，建議至少要做最低層級的防護。如WiFi加密、傳輸過程中加密、API連線過程中使用加密通道等。

## 物聯網的簡單實作
關於物聯網的概念，非相關科系人員若要進行簡單實作，我們建議從[Arduino](https://arduino.cc)開始上手，同時你應該會學到一些C語言的程式技巧。
在此處，我們建議了一個開源平台－Thinger.io。這個平台可以幫助你快速學習如何將感測器等機構與網路平台結合，並且該平台提供了一些可以方便使用者操作的功能，甚至可以透過結合IFTTT等服務建立Line機器人。
[Thinger.io](https://Thinger.io)
如果需要中文版本的參考文件，歡迎前往[Thinger.io中文文件](https://magic-doufu.github.io/thinger.io-docs-zh-t/)