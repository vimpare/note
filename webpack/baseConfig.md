# webpack baseConfig

标签（空格分隔）： webpack

---
## 发现项目逐渐变大之后，webpack打包会很慢，解决办法：
**修改entry**
base Config 基本配置文件
```
const path = require('path')
let pathname;
pathname = ['confirm'];
```
```
 // 多页面入口
    var getEntries = function () {
        if(pathname&&pathname.length && NODE_ENV !== 'production'){
            let obj = {}
            pathname.forEach(item => {
                obj[item] = path.resolve(__dirname, `../src/jsctrl/${item}.js`)
            })
            return obj
        }else{
            let entryOFiles = getFiles(resolve('src/jsctrl/**/*.js'));
            let entryFiles = Object.keys(entryOFiles);
            let entries = {};
            entryFiles.forEach(function (entry) {
                let pathname = entryOFiles[entry].pathname;
                if (!/^(common)/.test(pathname)) {
                    entries[pathname] = entry;
                }
            });
            return entries;
        }

    }
```    

## webpackMerge

webpack-merge提供了一个merge连接数组并合并创建新对象的对象的函数。如果遇到函数，它将执行它们，通过算法运行结果，然后再次将返回的值包装在函数中。
```
//默认API 
var output =  merge（object1，object2，object3， ...）;

//您可以直接传递对象数组。
//这适用于所有可用的功能。
var output =  merge（[object1，object2，object3]）;
```
## 解析(resolve)

### resolve.alias  使用别名/简化相对路径

创建 import 或 require 的别名，来确保模块引入变得更简单
```
alias: {
  Utilities: path.resolve(__dirname, 'src/utilities/'),
  Templates: path.resolve(__dirname, 'src/templates/')
}
```
现在，替换「在导入时使用相对路径」这种方式，就像这样：

`import Utility from '../../utilities/utility';`
你可以这样使用别名：

`import Utility from 'Utilities/utility';`

### resolve.extensions
array

**自动解析确定的扩展**。默认值为：

`extensions: [".js", ".json"]`
能够使用户在引入模块时不带扩展：

`import File from '../path/to/file'`

### resolve.modules
array

**告诉 webpack 解析模块时应该搜索的目录。**

绝对路径和相对路径都能使用，但是要知道它们之间有一点差异。

通过查看当前目录以及祖先路径（即 ./node_modules, ../node_modules 等等），相对路径将类似于 Node 查找 'node_modules' 的方式进行查找。

使用绝对路径，将只在给定目录中搜索。

resolve.modules defaults to:

`modules: ["node_modules"]`
如果你想要添加一个目录到模块搜索目录，此目录优先于 node_modules/ 搜索：

`modules: [path.resolve(__dirname, "src"), "node_modules"]`















