

标签（空格分隔）： vue

---



这个配置文件是命令`npm run dev`和`npm run start` 的入口配置文件，主要用于开发环境

```
// 导入check-versions.js文件，并且执行导入的函数，用来确定当前环境node和npm版本是否符合要求
require('./check-versions')()

// 导入config目录下的index.js配置文件，此配置文件中定义了生产和开发环境中所要用到的一些参数
var config = require('../config')

// 下面表示如果如果没有定义全局变量NODE_ENV，则将NODE_ENV设置为"development"
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

// opn插件是用来打开特定终端的，此文件用来在默认浏览器中打开链接 opn(url)
var opn = require('opn')

// nodejs路径模块
var path = require('path')

// nodejs开发框架express，用来简化操作，有兴趣可以自行去了解
var express = require('express')

// 引入webpack模块，用来使用webpack内置插件
var webpack = require('webpack')

// 引入http-proxy-middleware插件，此插件是用来代理请求的只能用于开发环境，目的主要是解决跨域请求后台api
var proxyMiddleware = require('http-proxy-middleware')

// 下面的意思是指，如果不是testing环境就引入webpack.dev.conf.js配置文件

var webpackConfig = process.env.NODE_ENV === 'testing' ?
    require('./webpack.prod.conf') :
    require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
// 下面是webpack-dev-server 监听的端口号，因为没有设置process.env.PORT，所以下面监听的就是config.dev.port
//即8080
var port = process.env.PORT || config.dev.port
    // automatically open browser, if not set will be false
// 下面是true
var autoOpenBrowser = !!config.dev.autoOpenBrowser
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware
    
// 下面是解决开发环境跨域问题的插件
var proxyTable = config.dev.proxyTable

// 下面是创建node.js的express开发框架的实例
var app = express()

// 把配置参数传递到webpack方法中，返回一个编译对象
var compiler = webpack(webpackConfig)

// 下面是webpack-dev-middleware和webpack-hot-middleware两兄弟，这两个是黄金组合
// 而vue作者用这两个插件也是用的最基本的形式
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true  // 使用friendly-errors-webpack-plugin插件这个必须设置为true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: () => {} // 使用friendly-errors-webpack-plugin插件这个必须设置为true
    })
    // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
// webpack任何一个插件都plugin这个方法，里面可以传递钩子函数，用来在插件各个阶段做特殊处理，钩子函数种类很多
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        // 当插件html-webpack-plugin产出完成之后，强制刷新浏览器
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
// 下面是代理表的处理方法
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
// 这个插件是用来解决单页面应用，点击刷新按钮和通过其他search值定位页面的404错误

app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
// app.use是在响应请求之前执行的，用来指定静态路径，挂载静态资源
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
// 下面的staticPath是 static ，path.posix.join
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// 挂载静态资源，下面的方法是用虚拟目录来访问资源，staticPath就是虚拟目录路径，不管设不设置都是static
app.use(staticPath, express.static('./static'))
// 下面结果就是 'http://localhost:8080'
var uri = 'http://localhost:' + port

// 下面是es6的promise规范，用来处理嵌套请求的
var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve // resolve是一个回调函数专门用来传递成功请求的数据
})
// 下面是加载动画
console.log('> Starting dev server...')
// waitUntilValid是webpack-dev-middleware实例的方法，在编译成功之后调用
devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
        // when env is testing, don't need open it
        // 测试环境不打开浏览器
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
    _resolve() // 这里没有传递数据，这只是在模拟
})
// node.js监听端口
var server = app.listen(port)
// 这个导出对象是用来对外提供操作服务器和接受数据的接口，vue作者可谓考虑颇深啊
module.exports = {
    ready: readyPromise, // promise实例，可以通过readyPromise.then收到数据
    close: () => {
        server.close() // 关闭服务器
    }
}
```
>npm init 新建package.json

opn
===

作为跨平台的打开文件或者网站的模块,最常见的使用是比如项目开发或者启动的时候打开浏览器进行访问

模块地址
https://npm.taobao.org/package/opn

基本使用
安装
```
$ npm install opn
```
使用
```
const opn = require('opn');

// Opens the image in the default image viewer
opn('unicorn.png').then(() => {
	// image viewer closed
});

// Opens the url in the default browser
opn('http://sindresorhus.com');

// Specify the app to open in
opn('http://sindresorhus.com', {app: 'firefox'});

// Specify app arguments
opn('http://sindresorhus.com', {app: ['google chrome', '--incognito']});
```


demo
----

>6.0.0 被弃用   ======》open
在根目录下新建scripts文件夹，写对应的功能js文件，然后在package.json中直接node 执行这个文件即可
```
//package.json
  "scripts": {
    "test": "teset",
    "opn": "gulp ",
    "opn2":"node ./scripts/opn"
  },
```
```
// opn.js 
let opn = require("opn")
let os = require("os")
let osStr = os.platform()
let uri = "http://www.baidu.com"
if(osStr.indexOf("win")>-1){
    opn(uri, {
        app: ['chrome']
    });
}
```

http-proxy-middleware
=====================
后台将请求转发给其它服务器
当前主机A为http://localhost:3000/，现在浏览器发送一个请求，请求接口/api，这个请求的数据在另外一台服务器B上（http://10.119.168.87:4000），这时，就可通过在A主机设置代理，直接将请求发送给B主机

```
var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/api', proxy({target: 'http://10.119.168.87:4000', changeOrigin: true}));
app.listen(3000);
```

安装
```
npm install --save-dev http-proxy-middleware
```
```
1 var proxy = require('http-proxy-middleware');
2 
3 var apiProxy = proxy('/api', {target: 'http://www.example.org'});
4 //                   \____/   \_____________________________/
5 //                     |                    |
6 //                需要转发的请求           目标服务器
```
>说明：第一个参数是可以省略的。

```
// 引用依赖
var express = require('express');
var proxy = require('http-proxy-middleware');

// proxy 中间件的选择项
var options = {
        target: 'http://www.example.org', // 目标服务器 host
        changeOrigin: true,               // 默认false，是否需要改变原始主机头为目标URL
        ws: true,                         // 是否代理websockets
        pathRewrite: {
            '^/api/old-path' : '/api/new-path',     // 重写请求，比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path
            '^/api/remove/path' : '/path'           // 同上
        },
        router: {
            // 如果请求主机 == 'dev.localhost:3000',
            // 重写目标服务器 'http://www.example.org' 为 'http://localhost:8000'
            'dev.localhost:3000' : 'http://localhost:8000'
        }
    };

// 创建代理
var exampleProxy = proxy(options);

// 使用代理
var app = express();
    app.use('/api', exampleProxy);
    app.listen(3000);
```


webpack-dev-middleware
======================
一种快速式开发中间件，用于webpack bundle，允许提供从webpack发出的文件。
这应该仅用于开发。
使用此中间件的一些好处包括：
没有文件写入磁盘，而是处理内存中的文件
如果文件在监视模式下更改，则中间件会延迟请求，直到编译完成。
支持热模块重载（HMR）。
此模块至少需要Node v6.9.0和Webpack v4.0.0，并且必须与接受快速中间件的服务器一起使用。

```
npm install webpack-dev-middleware --save-dev
```
使用
```
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack({
  // webpack options
});
const express = require('express');
const app = express();
 
app.use(
  middleware(compiler, {
    // webpack-dev-middleware options
  })
);
 
app.listen(3000, () => console.log('Example app listening on port 3000!'));
```
