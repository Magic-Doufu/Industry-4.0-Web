# Thinger.io 繁體中文教學站
## 在 UBUNTU 上架設伺服器(支援16.04以後版本)
伺服器可以安装在任何與 Ubuntu Snap 套件包相容的架構中，如 x86，AMD64，ARM64 或 armhf（僅支援 Ubuntu OS，相容清單請參考[此頁](https://snapcraft.io/)）。<br/>
但是，建議使用 64 位元系統，因為在 32 位元系统中， MongoDB 資料庫中的資料量將會被限制為 2GB。<br/>
強烈建議您在執行任何其他步驟之前，先執行以下指令來更新 Ubuntu 安裝：
```
sudo apt update
sudo apt upgrade
```

### 安裝 MongoDB

Thinger.io IoT 平台需要 MongoDB 伺服器來存儲一些伺服器資訊。 <br/>
因此，第一步是在主機中安裝 MongoDB 伺服器。<br/>
以下資訊來自官方文件。[https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) <br/>
__注意__ 此步驟適用於 AMD64 / ARM64 系統架構。 <br/>如果要在其他架構的系統中安裝伺服器，則應閱讀該系統架構的安裝說明。

#### 導入套件管理系統使用的公共金鑰

Ubuntu 套件管理系統（即 dpkg 和 apt）通過要求發行者使用 GPG 密鑰對套件包進行簽名來確保套件包的一致性和真實性。執行以下命令以引入 MongoDB 公共 GPG 密鑰：<br/>
`sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6`

#### 為 MongoDB 建立一個列表文件

建立列表文件 /etc/apt/sources.list.d/mongodb-org-3.4.list :<br/>
`echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list`

#### 重新載入本機套件管理系統資料庫

執行以下命令以重新載入本機套件管理系統資料庫：<br/>
`sudo apt update`

#### 安裝 MongoDB 與相依套件<br/>

`sudo apt install -y mongodb-org`

#### 使 MongoDB 在開機時啟動

編輯以下文件以使MongoDB在啟動時作為服務運行。<br/>
`sudo nano /etc/systemd/system/mongodb.service`<br/>
然後複製以下設定值並儲存到文件中。
```
[Unit]
Description=High-performance, schema-free document-oriented database
After=network.target

[Service]
User=mongodb
ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

[Install]
WantedBy=multi-user.target
```

#### 啟動 MongoDB
現在，將 MongoDB 作為系統服務啟用。
```
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

#### 確認 MongoDB 運作狀態

`sudo systemctl status mongodb`

```
alvaro@supermicro:~$ sudo service mongod status
● mongod.service - High-performance, schema-free document-oriented database
   Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset: enabled)
   Active: active (running) since sáb 2017-01-21 10:56:13 CET; 9h ago
     Docs: https://docs.mongodb.org/manual
 Main PID: 3825 (mongod)
    Tasks: 87
   Memory: 77.5M
      CPU: 2min 35.209s
   CGroup: /system.slice/mongod.service
           └─3825 /usr/bin/mongod --quiet --config /etc/mongod.conf

ene 21 10:56:13 supermicro systemd[1]: Started High-performance, schema-free document-oriented database.
```

### 安裝 THINGER.IO 伺服器
#### 使用 Snap 指令

安裝伺服器就像安裝 Snap 套件一樣簡單。只需將以下命令輸入您的終端即可。<br/>
`sudo snap install thinger-maker-server`

#### 使用 Ubuntu Store
您也可以通過從 Ubuntu Store 來安裝伺服器。只需搜尋 Thinger.io，就會出現套件包。

### 確認伺服器服務狀態
您可以通過執行以下命令來檢查 Thinger.io Daemon 服務的狀態：<br/>
`sudo service snap.thinger-maker-server.thingerd status`

它將會回傳如下顯示的結果：
```
alvaro@supermicro:/var/snap/thinger-maker-server/common$ sudo service snap.thinger-maker-server.thingerd status
● snap.thinger-maker-server.thingerd.service - Service for snap application thinger-maker-server.thingerd
   Loaded: loaded (/etc/systemd/system/snap.thinger-maker-server.thingerd.service; enabled; vendor preset: enabled)
   Active: active (running) since vie 2017-01-20 22:39:19 CET; 4s ago
  Process: 30329 ExecStart=/usr/bin/snap run thinger-maker-server.thingerd (code=exited, status=0/SUCCESS)
 Main PID: 30340 (thingerd)
    Tasks: 49
   Memory: 8.4M
      CPU: 73ms
   CGroup: /system.slice/snap.thinger-maker-server.thingerd.service
           └─30340 thingerd --fork --runpath=/var/snap/thinger-maker-server/common

ene 20 22:39:19 supermicro systemd[1]: Starting Service for snap application thinger-maker-server.thingerd...
ene 20 22:39:19 supermicro systemd[1]: Started Service for snap application thinger-maker-server.thingerd.
```
此時您應該能夠在瀏覽器中透過本機IP存取網頁控制台，就像雲端控制台一樣。
![](http://docs.thinger.io/deployment/assets/console.png "控制台範例")

#### 重新啟動系統服務
如果更新配置文件，可以通過以下指另重新啟動服務。<br/>
`sudo service snap.thinger-maker-server.thingerd restart`
#### 停止系統服務
或者您可以在需要時停止服務。<br/>
`sudo service snap.thinger-maker-server.thingerd stop`