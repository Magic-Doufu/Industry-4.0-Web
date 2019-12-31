const listchildren = {
  'Arduino': [
    ['/sensors/Arduino/DHT11','(Arduino)DHT11溫溼度感測器'],
    ['/sensors/Arduino/DHT22','(Arduino)DHT22溫溼度感測器'],
    ['/sensors/Arduino/FSR','(Arduino)FSR壓力感測器'],
    ['/sensors/Arduino/lightblocking','(Arduino)光遮斷模組'],
    ['/sensors/Arduino/Servo_SG90_motor','(Arduino)伺服馬達SG90'],
    ['/sensors/Arduino/CDS','(Arduino)CDS光控模組'],
    ['/sensors/Arduino/IRS-180','(Arduino)紅外線避障感測器'],
    ['/sensors/Arduino/SR04','(Arduino)SR04超音波測距'],
    ['/sensors/Arduino/BH1750','(Arduino)BH1750光照度感測模組'],
    ['/sensors/Arduino/DS18B20','(Arduino)DS18B20防水溫度探頭'],
    ['/sensors/Arduino/FC-37','(Arduino)FC-37水滴感測器'],
    ['/sensors/Arduino/MQ2','(Arduino)MQ2煙霧氣體感測'],
    ['/sensors/Arduino/MQ9','(Arduino)MQ9一氧化碳CO感測'],
    ['/sensors/Arduino/PIR','(Arduino)PIR紅外線動作感測器'],
    ['/sensors/Arduino/PIR1.2','(Arduino)PIR1.2人體紅外熱釋電感測器'],
    ['/sensors/Arduino/Flame','(Arduino)Flame火焰感測器'],
    ['/sensors/Arduino/MQ3','(Arduino)MQ3酒精感測器'],
    ['/sensors/Arduino/AD8232','(Arduino)AD8232心率監測器'],
    ['/sensors/Arduino/shake','(Arduino)震動開關模組'],
    ['/sensors/Arduino/RFID','(Arduino)RFID']
  ],
  'Raspberry': [
    ['/sensors/Raspberry/rdht11','(Raspberry pi)溫溼度感測器'],
    ['/sensors/Raspberry/fan','(Raspberry pi)風扇模塊'],
    ['/sensors/Raspberry/led','(Raspberry pi)LED控制'],
    ['/sensors/Raspberry/seven','(Raspberry pi)七段顯示器'],
    ['/sensors/Raspberry/keypad','(Raspberry pi)鍵盤'],
    ['/sensors/Raspberry/lcd','(Raspberry pi)LCD液晶顯示器'],
    ['/sensors/Raspberry/adc','(Raspberry pi)數位類比轉換器'],
    ['/sensors/Raspberry/voice','(Raspberry pi)聲音感測器']
  ]
}
module.exports = {
  plugins: ['vuepress-plugin-element-tabs','@vuepress/back-to-top'],
  title: '傳產工業4.0化協作計畫',
  description: 'Thinger.io 中文文件/感測器實作/協定原理',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '/Industry-4.0-Web/',
  markdown: {
    lineNumbers: false
  },
  theme: 'thindark',
  themeConfig: {
    nav:[
      {text: 'Thinger.io中文文件', link: 'https://magic-doufu.github.io/thinger.io-docs-zh-t/' },
      {text: '感測器實作', link: '/sensors/Arduino/DHT11'},
      {text: '協定原理', link: '/protocols/'}
    ],
    sidebar: {
        '/sensors/': [
          {
            title: 'Arduino',
            sidebarDepth: 1,
            children: listchildren['Arduino']
          },
          {
            title: 'Raspberry',
            sidebarDepth: 1,
            children: listchildren['Raspberry']
          }
        ],
        '/': ''
    },
    sidebarDepth: 2
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@com': '../assets/protocol/com',
        '@sensors': '../../assets/sensors'
      }
    }
  }
}