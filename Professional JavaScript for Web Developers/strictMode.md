
ECMAScript 5最早引入了“严格模式”（strict mode）的概念。
```
"use strict"
```
如果是在全局作用域中（函数外部）给出这个编译指示，则整个脚本都将使用严格模式。也可以只在函数中打开严格模式。
```
function doSomething(){    
  "use strict";
  //其他代码
}
```

#### 变量：
    * 不允许意外创建全局变量 如`msg='123'`;
    * 不能对变量调用delete操作符
    * 标识符作为变量名会导致语法错误。
    
    
#### 对象：
    * 使用对象字面量时，属性名必须唯一
    •为只读属性赋值会抛出TypeError；   
    •对不可配置的（nonconfigurable）的属性使用delete操作符会抛出TypeError；   
    •为不可扩展的（nonextensible）的对象添加属性会抛出TypeError。
    
    
#### 函数：
    * 在非严格模式下，修改命名参数的值也会反映到arguments对象中，而严格模式下这两个值是完全独立的。
    * 严格模式淘汰了arguments.callee和argu-ments.caller
    * 在if语句中声明函数会导致语法错误，只能在脚本的顶级和在函数内部声明函数
