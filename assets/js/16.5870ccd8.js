(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{255:function(t,s,n){t.exports=n.p+"assets/img/PIR.43429253.jpg"},256:function(t,s,n){t.exports=n.p+"assets/img/PIR1.97be5c96.jpg"},257:function(t,s,n){t.exports=n.p+"assets/img/PIR2.1c870de4.jpg"},295:function(t,s,n){"use strict";n.r(s);var a=n(0),p=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"紅外線動作感測器-pir-motion-sensor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#紅外線動作感測器-pir-motion-sensor"}},[t._v("#")]),t._v(" 紅外線動作感測器(PIR Motion Sensor)")]),t._v(" "),a("p",[t._v("◎紅外線動作感測器(PIR Motion Sensor)或稱人體紅外線感測器，是一種可以偵測物體移動的電子裝置。")]),t._v(" "),a("p",[t._v("◎生活中很多東西都會發射紅外線，例如燈泡、蠟燭、中央空調等，其實人體也會發射紅外線，紅外線動作感測器的原理，便是利用人體發射出來的紅外線的變化，來感應物體的移動。")]),t._v(" "),a("p",[t._v("◎紅外線感測器有分主動式和被動式兩種。主動式的紅外線感測器，感應器本身會發射紅外線光束，當紅外線光束被物體擋住後，紅外線光束會反射，利用這個紅外線反射原理可以做很多應用，例如廁所的自動沖水小便斗或感應式水龍頭，它們用的就是主動式紅外線感測器。紅外線動作感測器 (PIR Motion Sensor) 是屬於被動式的紅外線裝置，感應器本身不會發射紅外線光束。")]),t._v(" "),a("p",[t._v("◎被動式紅外線感測器的縮寫(Passive Infrared Sensor) 是 PIR。")]),t._v(" "),a("p",[t._v("◎紅外線動作感測器一般用在防盜系統上，例如有人入侵屋內便響警報的紅外警報器，或是自動照明裝置，例如玄關、走廊、樓梯間或車庫門口不常有人走動，將紅外線感應器和燈具裝在這些地方，只要有人就自動開燈照明，人離開後就自動關燈省電。")]),t._v(" "),a("p",[t._v("◎紅外線動作感測器腳位表\n一般來說，紅外線動作感測器只有三支接腳，這三支接腳的功能如下表:\n腳位名稱    功能說明\nGND (-)     接到接地\nPower(+)    接到 +5V 電源\nOUT         輸出訊號")]),t._v(" "),a("p",[t._v("◎在感測到物體移動時，紅外線動作感測器就會在 OUT 腳上輸出一個訊號，利用這個訊號就可以知道感測器附近是否有人。另外，大部份紅外線動作感測器都有一個旋轉鈕，可讓使用者調整訊號輸出的延遲時間，這個設計非常貼心，因為利用延遲時間我們可以延遲關燈的時間，避免燈具開關太過頻繁。")]),t._v(" "),a("ul",[a("li",[t._v("把 LED 接到 Arduino 板子上，LED 長腳 (陽極) 接到 pin13，短腳 (陰極) 接到 GND")]),t._v(" "),a("li",[t._v("把紅外線動作感測器 GND 腳位接到 GND，V+ 腳位接到 +5V，然後 OUT 腳位接到數位輸入(Digital pins) pin 2")])]),t._v(" "),a("p",[t._v("電路(接線)圖:")]),t._v(" "),a("p",[a("img",{attrs:{src:n(255),alt:""}})]),t._v(" "),a("p",[t._v("程式範例:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" PIRSensor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 紅外線動作感測器連接的腳位07")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ledPin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// LED 腳位")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sensorValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 紅外線動作感測器訊號變數")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pinMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PIRSensor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" INPUT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pinMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ledPin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OUTPUT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       \n\nSerial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 讀取 PIR Sensor 的狀態")]),t._v("\n  sensorValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("digitalRead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PIRSensor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判斷 PIR Sensor 的狀態")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sensorValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" HIGH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("digitalWrite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ledPin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HIGH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有人，開燈")]),t._v("\n    Serial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"有人，開燈"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("digitalWrite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ledPin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LOW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 沒人，關燈")]),t._v("\n   Serial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("結果:")]),t._v(" "),a("p",[a("img",{attrs:{src:n(256),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(257),alt:""}})])])}),[],!1,null,null,null);s.default=p.exports}}]);