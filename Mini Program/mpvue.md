## mpvue-loader
mpvue-loader 是 vue-loader 的一个扩展延伸版，类似于超集的关系，除了 vue-loader 本身所具备的能力之外，它还会产出微信小程序所需要的文件结构和模块内容。

### entry
它会从 webpack 的配置中的 entry 开始，分析依赖模块，并分别打包。在entry 中 app 属性及其内容会被打包为微信小程序所需要的 app.js／app.json／app.wxss，其余的会生成对应的页面page.js/page.json/page.wxml/page.wxss
